// Ensure tsx injected globals do not break Vite plugins (e.g. vite-plugin-pwa)
delete (globalThis as any).__dirname;
delete (globalThis as any).__filename;

import express from 'express';
import path from 'path';
import fs from 'fs';
import { GoogleGenAI, Modality, Type } from '@google/genai';
import { createServer as createViteServer } from 'vite';
import { lookupLexicon } from './src/legalLexicon';
import { translateLegalTermOffline } from './src/legalTranslationEngine';

const MAX_TRANSLATION_CACHE_SIZE = 2000;
const MAX_TTS_CACHE_SIZE = 300;

function setBoundedCache<K, V>(cache: Map<K, V>, key: K, value: V, maxSize: number) {
  if (cache.has(key)) {
    cache.delete(key);
  } else if (cache.size >= maxSize) {
    const oldestKey = cache.keys().next().value;
    if (oldestKey !== undefined) {
      cache.delete(oldestKey);
    }
  }
  cache.set(key, value);
}

// Helper to ensure raw PCM audio from Gemini TTS is wrapped in a standard WAV container
function pcmToWav(pcmBuffer: Buffer, sampleRate = 24000, numChannels = 1, bitsPerSample = 16): Buffer {
  if (pcmBuffer.length >= 12 && pcmBuffer.toString('utf8', 0, 4) === 'RIFF') {
    return pcmBuffer; // Already a valid WAV
  }
  const byteRate = (sampleRate * numChannels * bitsPerSample) / 8;
  const blockAlign = (numChannels * bitsPerSample) / 8;
  const dataSize = pcmBuffer.length;
  const header = Buffer.alloc(44);

  header.write('RIFF', 0);
  header.writeUInt32LE(36 + dataSize, 4);
  header.write('WAVE', 8);
  header.write('fmt ', 12);
  header.writeUInt32LE(16, 16); // Subchunk1Size
  header.writeUInt16LE(1, 20);  // AudioFormat: 1 (PCM)
  header.writeUInt16LE(numChannels, 22);
  header.writeUInt32LE(sampleRate, 24);
  header.writeUInt32LE(byteRate, 28);
  header.writeUInt16LE(blockAlign, 32);
  header.writeUInt16LE(bitsPerSample, 34);
  header.write('data', 36);
  header.writeUInt32LE(dataSize, 40);

  return Buffer.concat([header, pcmBuffer]);
}

function createGeminiClient(): GoogleGenAI | null {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) return null;
  return new GoogleGenAI({
    apiKey,
    httpOptions: { headers: { 'User-Agent': 'aistudio-build' } },
  });
}

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json({ limit: '1mb' }));

  // Load and index local glossary for instant certified fallback & term matching
  const glossaryMap = new Map<string, { en: string; ar: string }>();
  try {
    const glossaryPath = path.join(process.cwd(), 'src', 'glossaryData.json');
    if (fs.existsSync(glossaryPath)) {
      const raw = fs.readFileSync(glossaryPath, 'utf8');
      const cats = JSON.parse(raw);
      if (Array.isArray(cats)) {
        cats.forEach((cat: any) => {
          if (Array.isArray(cat?.terms)) {
            cat.terms.forEach((t: any) => {
              if (t?.en && t?.ar) {
                const cleanEn = t.en.toLowerCase().trim();
                const cleanAr = t.ar.trim();
                glossaryMap.set(cleanEn, { en: t.en, ar: t.ar });
                glossaryMap.set(cleanAr, { en: t.en, ar: t.ar });
                const baseEn = t.en.replace(/\s*\([^)]*\)/g, '').toLowerCase().trim();
                const baseAr = t.ar.replace(/\s*\([^)]*\)/g, '').trim();
                if (baseEn && !glossaryMap.has(baseEn)) glossaryMap.set(baseEn, { en: t.en, ar: t.ar });
                if (baseAr && !glossaryMap.has(baseAr)) glossaryMap.set(baseAr, { en: t.en, ar: t.ar });
              }
            });
          }
        });
      }
    }
  } catch (err) {
    console.warn('Glossary indexing warning:', err);
  }

  const translationCache = new Map<string, { translation: string; explanation: string; isCertified: boolean }>();
  const smartSearchCache = new Map<string, string>();
  const ttsCache = new Map<string, { audio: string; mimeType: string }>();

  const isValidServerTranslation = (sourceWord: string, trans: string, isTargetAr: boolean): boolean => {
    if (!trans || !trans.trim()) return false;
    if (trans.trim().toLowerCase() === sourceWord.trim().toLowerCase()) return false;
    if (isTargetAr) {
      return /[\u0600-\u06FF]/.test(trans);
    }
    return /[a-zA-Z]/.test(trans) && !/[\u0600-\u06FF]/.test(trans);
  };

  // Health check endpoint
  app.get('/api/health', (_req, res) => {
    res.json({ status: 'ok', glossaryIndexed: glossaryMap.size });
  });

  // Dictionary translation endpoint using offline ICC corpus + Gemini structured output
  app.post('/api/translate', async (req, res) => {
    try {
      const { word, context, language } = req.body || {};
      const cleanWord = typeof word === 'string' ? word.trim().slice(0, 200) : '';
      if (!cleanWord) {
        return res.json({ translation: '', explanation: '', isCertified: false });
      }

      const isTargetArabic = language === 'ar';
      const isSourceArabic = !isTargetArabic;
      const cacheKey = `${cleanWord.toLowerCase()}::${isTargetArabic ? 'ar' : 'en'}`;

      if (translationCache.has(cacheKey)) {
        const cached = translationCache.get(cacheKey)!;
        if (isValidServerTranslation(cleanWord, cached.translation, isTargetArabic)) {
          return res.json(cached);
        }
        translationCache.delete(cacheKey);
      }

      // 1. Instant 0ms offline engine resolution (glossary + lexicon + corpus + stemmer)
      const offlineMatch = translateLegalTermOffline(cleanWord, isSourceArabic);
      let localCertifiedTranslation = '';
      let localCertifiedExplanation = offlineMatch.explanation || '';

      if (offlineMatch.translation && isValidServerTranslation(cleanWord, offlineMatch.translation, isTargetArabic)) {
        localCertifiedTranslation = offlineMatch.translation;
      }

      // 2. Direct glossary & lexicon verification
      const matchedTerm = glossaryMap.get(cleanWord.toLowerCase()) || glossaryMap.get(cleanWord);
      if (!localCertifiedTranslation && matchedTerm) {
        const candidate = isTargetArabic ? matchedTerm.ar : matchedTerm.en;
        if (isValidServerTranslation(cleanWord, candidate, isTargetArabic)) {
          localCertifiedTranslation = candidate;
        }
      }

      const lexiconMatch = lookupLexicon(cleanWord, isTargetArabic);
      if (lexiconMatch) {
        const candidate = isTargetArabic ? lexiconMatch.ar : lexiconMatch.en;
        if (!localCertifiedTranslation && isValidServerTranslation(cleanWord, candidate, isTargetArabic)) {
          localCertifiedTranslation = candidate;
        }
        if (!localCertifiedExplanation) {
          localCertifiedExplanation = isTargetArabic ? lexiconMatch.explanationAr : lexiconMatch.explanationEn;
        }
      }

      if (localCertifiedTranslation && offlineMatch.isCertified) {
        const fastPayload = {
          translation: localCertifiedTranslation,
          explanation:
            localCertifiedExplanation ||
            (isTargetArabic
              ? 'مصطلح قانوني معتمد يُفسر ويُطبق وفقاً لأحكام وقضاء المحكمة الجنائية الدولية ونظام روما الأساسي.'
              : 'Certified legal concept interpreted and applied in accordance with ICC jurisprudence and the Rome Statute.'),
          isCertified: true,
        };
        setBoundedCache(translationCache, cacheKey, fastPayload, MAX_TRANSLATION_CACHE_SIZE);
        return res.json(fastPayload);
      }

      const ai = createGeminiClient();
      if (!ai) {
        const fallback = {
          translation: localCertifiedTranslation,
          explanation:
            localCertifiedExplanation ||
            (isTargetArabic
              ? 'مفهوم قانوني معتمد يُفسر ويُطبق وفقاً لأحكام وقضاء المحكمة الجنائية الدولية ونظام روما الأساسي.'
              : 'Legal concept interpreted and applied in accordance with ICC jurisprudence and the Rome Statute.'),
          isCertified: !!localCertifiedTranslation,
        };
        if (localCertifiedTranslation) {
          setBoundedCache(translationCache, cacheKey, fallback, MAX_TRANSLATION_CACHE_SIZE);
        }
        return res.json(fallback);
      }

      const safeContext = typeof context === 'string' ? context.slice(0, 350) : cleanWord;
      const prompt = `You are a certified legal translator for the International Criminal Court (ICC).
Translate the following legal term or phrase into ${
        isTargetArabic
          ? 'Arabic (العربية الفصحى القانونية المعتمدة في نظام روما الأساسي)'
          : 'English (Official ICC Rome Statute legal terminology)'
      }:
Term: "${cleanWord}"
Context: "${safeContext}"
Rules:
- "translation" MUST be written strictly in ${isTargetArabic ? 'Arabic' : 'English'} and must NEVER repeat the source word.
- "explanation" MUST be 1-2 concise sentences in ${isTargetArabic ? 'Arabic' : 'English'} explaining its legal meaning in ICC proceedings.`;

      const modelChoices = ['gemini-3.1-flash-lite', 'gemini-4-hydrogen'];
      let responseText: string | null = null;

      for (const modelName of modelChoices) {
        try {
          const response = await ai.models.generateContent({
            model: modelName,
            contents: prompt,
            config: {
              responseMimeType: 'application/json',
              responseSchema: {
                type: Type.OBJECT,
                properties: {
                  translation: { type: Type.STRING },
                  explanation: { type: Type.STRING },
                },
                required: ['translation', 'explanation'],
              },
            },
          });
          if (response?.text) {
            responseText = response.text;
            break;
          }
        } catch {
          // Try next valid model
        }
      }

      if (!responseText) {
        const payload = {
          translation: localCertifiedTranslation,
          explanation:
            localCertifiedExplanation ||
            (isTargetArabic
              ? 'مفهوم قانوني معتمد يُفسر ويُطبق وفقاً للسوابق القضائية وأحكام المحكمة الجنائية الدولية ونظام روما الأساسي.'
              : 'Certified legal terminology under the Rome Statute of the International Criminal Court.'),
          isCertified: !!localCertifiedTranslation,
        };
        if (localCertifiedTranslation) {
          setBoundedCache(translationCache, cacheKey, payload, MAX_TRANSLATION_CACHE_SIZE);
        }
        return res.json(payload);
      }

      try {
        const result = JSON.parse(responseText.trim());
        let translationText = (result.translation || '').trim();
        let explanationText = (result.explanation || localCertifiedExplanation || '').trim();

        if (!isValidServerTranslation(cleanWord, translationText, isTargetArabic)) {
          translationText = localCertifiedTranslation;
        }

        if (isTargetArabic) {
          if (!/[\u0600-\u06FF]/.test(explanationText)) {
            explanationText =
              localCertifiedExplanation ||
              'مفهوم قانوني معتمد يُفسر ويُطبق وفقاً للسوابق القضائية وأحكام المحكمة الجنائية الدولية ونظام روما الأساسي.';
          }
        } else {
          if (!/[a-zA-Z]/.test(explanationText)) {
            explanationText =
              localCertifiedExplanation ||
              'Certified legal concept interpreted and applied in accordance with ICC jurisprudence and the Rome Statute.';
          }
        }

        const payload = {
          translation: translationText,
          explanation:
            explanationText ||
            (isTargetArabic ? 'مفهوم قانوني معتمد وفقاً لنظام روما الأساسي.' : 'Certified ICC legal term.'),
          isCertified: !!translationText,
        };
        if (translationText) {
          setBoundedCache(translationCache, cacheKey, payload, MAX_TRANSLATION_CACHE_SIZE);
        }
        return res.json(payload);
      } catch {
        const payload = {
          translation: localCertifiedTranslation,
          explanation:
            localCertifiedExplanation ||
            (isTargetArabic
              ? 'مفهوم قانوني معتمد صادر عن المحكمة الجنائية الدولية ونظام روما الأساسي.'
              : 'Certified legal terminology under the Rome Statute of the International Criminal Court.'),
          isCertified: !!localCertifiedTranslation,
        };
        if (localCertifiedTranslation) {
          setBoundedCache(translationCache, cacheKey, payload, MAX_TRANSLATION_CACHE_SIZE);
        }
        return res.json(payload);
      }
    } catch (error) {
      console.error('Translation global handler:', error);
      const cleanWord = typeof req.body?.word === 'string' ? req.body.word.trim() : '';
      const isTargetArabic = req.body?.language === 'ar';
      const offlineFallback = translateLegalTermOffline(cleanWord, !isTargetArabic);
      return res.json({
        translation: offlineFallback.translation || '',
        explanation:
          offlineFallback.explanation ||
          (isTargetArabic
            ? 'مفهوم قانوني معتمد وفق أحكام وقضاء المحكمة الجنائية الدولية.'
            : 'ICC legal term.'),
        isCertified: !!offlineFallback.translation,
      });
    }
  });

  // Smart Search legal guide endpoint referencing ICC instruments
  app.post('/api/smart-search', async (req, res) => {
    try {
      const { query, language } = req.body || {};
      const cleanQuery = typeof query === 'string' ? query.trim().slice(0, 300) : '';
      if (!cleanQuery) {
        return res.status(400).json({ error: 'Query is required' });
      }

      const isArabic = language !== 'en';
      const searchCacheKey = `${cleanQuery.toLowerCase()}::${isArabic ? 'ar' : 'en'}`;
      if (smartSearchCache.has(searchCacheKey)) {
        return res.json({ answer: smartSearchCache.get(searchCacheKey)! });
      }

      const ai = createGeminiClient();
      if (!ai) {
        return res.json({
          answer: isArabic
            ? 'خدمة الإيضاح الذكي غير مفعّلة حالياً، يمكنك البحث المباشر في جميع نصوص ومواد المحكمة.'
            : 'Smart legal guide is currently unavailable. Please use direct search across all ICC instruments.',
        });
      }

      const prompt = `You are a concise legal guide for the International Criminal Court (ICC / المحكمة الجنائية الدولية) reference app.
The user is searching for: "${cleanQuery}".
Language to respond in: ${isArabic ? 'Arabic (العربية الفصحى القانونية)' : 'English'}.

Instructions:
1. Provide a concise, factual answer in 2 to 3 sentences directly addressing the query based strictly on the ICC legal framework (Rome Statute, Rules of Procedure and Evidence, Elements of Crimes, Regulations of the Court, Regulations of the Registry, or Regulations of the Office of the Prosecutor).
2. Explicitly cite the relevant ICC document and article/rule/regulation number if applicable (e.g., "نظام روما الأساسي - المادة 5" or "Rome Statute, Article 5").
3. Do NOT use markdown tables or lengthy preambles. Output clean plain text.`;

      const modelChoices = ['gemini-3.1-flash-lite', 'gemini-4-hydrogen'];
      let answerText: string | null = null;

      for (const modelName of modelChoices) {
        try {
          const response = await ai.models.generateContent({
            model: modelName,
            contents: prompt,
          });
          if (response?.text) {
            answerText = response.text.trim();
            break;
          }
        } catch {
          // Try next valid model
        }
      }

      if (answerText) {
        setBoundedCache(smartSearchCache, searchCacheKey, answerText, 500);
      }

      return res.json({
        answer:
          answerText ||
          (isArabic
            ? 'عذراً، خدمة الإيضاح الذكي غير متوفرة حالياً.'
            : 'Smart search insight is currently unavailable.'),
      });
    } catch (error) {
      console.warn('Smart search warning:', error instanceof Error ? error.message : String(error));
      return res.status(200).json({ answer: null, error: 'Smart search unavailable' });
    }
  });

  // TTS endpoint using valid Gemini TTS model ('gemini-2.5-flash-preview-tts')
  app.post('/api/tts', async (req, res) => {
    const { text } = req.body || {};
    if (!text || typeof text !== 'string') {
      return res.status(400).json({ error: 'Text is required' });
    }

    const cleanText = text.trim().slice(0, 200);
    if (!cleanText) {
      return res.status(400).json({ error: 'Text is required' });
    }

    const cacheKey = cleanText.toLowerCase();
    if (ttsCache.has(cacheKey)) {
      return res.json(ttsCache.get(cacheKey));
    }

    try {
      const ai = createGeminiClient();
      if (!ai) {
        return res.json({ audio: null, fallback: true });
      }

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash-preview-tts',
        contents: [
          {
            parts: [
              {
                text: `Pronounce clearly and naturally in standard legal English: ${cleanText}`,
              },
            ],
          },
        ],
        config: {
          responseModalities: [Modality.AUDIO],
          speechConfig: {
            voiceConfig: {
              prebuiltVoiceConfig: {
                voiceName: 'Kore',
              },
            },
          },
        },
      });

      const part = response.candidates?.[0]?.content?.parts?.[0];
      const base64Audio = part?.inlineData?.data;

      if (base64Audio) {
        const rawPcm = Buffer.from(base64Audio, 'base64');
        const wavBuffer = pcmToWav(rawPcm, 24000, 1, 16);
        const payload = { audio: wavBuffer.toString('base64'), mimeType: 'audio/wav' };
        setBoundedCache(ttsCache, cacheKey, payload, MAX_TTS_CACHE_SIZE);
        return res.json(payload);
      }

      return res.json({ audio: null, fallback: true });
    } catch (error: any) {
      const msg = error?.message || String(error);
      const isQuotaExceeded =
        msg.includes('quota') || error?.status === 429 || msg.includes('RESOURCE_EXHAUSTED');

      if (isQuotaExceeded) {
        console.warn('TTS Quota limit reached; falling back to client speech synthesis.');
        return res.json({ audio: null, fallback: true, quotaExceeded: true });
      }

      console.warn('TTS unavailable; falling back to client speech synthesis:', msg);
      return res.json({ audio: null, fallback: true });
    }
  });

  // Vite middleware for development; static bundle for production
  if (process.env.NODE_ENV !== 'production') {
    const isHmrDisabled = process.env.DISABLE_HMR === 'true';
    const vite = await createViteServer({
      server: {
        middlewareMode: true,
        hmr: isHmrDisabled ? false : undefined,
      },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
  });
}

startServer();
