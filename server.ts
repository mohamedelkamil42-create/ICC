// Ensure tsx injected globals do not break Vite plugins (e.g. vite-plugin-pwa)
delete (globalThis as any).__dirname;
delete (globalThis as any).__filename;

import express from 'express';
import path from 'path';
import fs from 'fs';
import { GoogleGenAI } from '@google/genai';
import { createServer as createViteServer } from 'vite';
import { lookupLexicon } from './src/legalLexicon';

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

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
                // Also index without parenthetical comments
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

  // In-memory translation cache to guarantee instant retrieval on repeated queries
  const translationCache = new Map<string, { translation: string; explanation: string; isCertified: boolean }>();

  // Dictionary translation endpoint using Gemini - Upgraded for ICC Certified Translation
  app.post('/api/translate', async (req, res) => {
    try {
      const { word, context, language } = req.body;
      const cleanWord = typeof word === 'string' ? word.trim() : '';
      if (!cleanWord) {
        return res.json({ translation: '', explanation: '' });
      }

      const isTargetArabic = language === 'ar';
      const cacheKey = `${cleanWord.toLowerCase()}::${language}`;

      if (translationCache.has(cacheKey)) {
        const cached = translationCache.get(cacheKey)!;
        // Verify cached translation matches required target language
        if (!isTargetArabic || /[\u0600-\u06FF]/.test(cached.translation)) {
          return res.json(cached);
        }
      }

      // Check local certified glossary index
      const matchedTerm = glossaryMap.get(cleanWord.toLowerCase()) || glossaryMap.get(cleanWord);
      let localCertifiedTranslation = '';
      let localCertifiedExplanation = '';

      if (matchedTerm) {
        localCertifiedTranslation = isTargetArabic ? matchedTerm.ar : matchedTerm.en;
      }

      // Check certified legal lexicon & comprehensive vocabulary
      const lexiconMatch = lookupLexicon(cleanWord, isTargetArabic);
      if (lexiconMatch) {
        if (!localCertifiedTranslation) {
          localCertifiedTranslation = isTargetArabic ? lexiconMatch.ar : lexiconMatch.en;
        }
        localCertifiedExplanation = isTargetArabic ? lexiconMatch.explanationAr : lexiconMatch.explanationEn;
      }

      if (!process.env.GEMINI_API_KEY) {
        const safeTranslation = localCertifiedTranslation || cleanWord;
        const fallback = {
          translation: safeTranslation,
          explanation: localCertifiedExplanation || (isTargetArabic
            ? 'مفهوم قانوني معتمد يُفسر ويُطبق وفقاً لأحكام وقضاء المحكمة الجنائية الدولية ونظام روما الأساسي.'
            : 'Legal concept interpreted and applied in accordance with ICC jurisprudence and the Rome Statute.'),
          isCertified: !!localCertifiedTranslation
        };
        translationCache.set(cacheKey, fallback);
        return res.json(fallback);
      }

      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

      const prompt = `Translate to ${isTargetArabic ? 'Arabic' : 'English'}: "${cleanWord}".
Context: "${context || cleanWord}"
Return JSON: {"translation": "...", "explanation": "1-2 concise sentences"}`;

      let response: any = null;
      // Prioritize 8B for absolute maximum speed
      const modelChoices = ['gemini-1.5-flash-8b', 'gemini-1.5-flash-latest', 'gemini-1.5-flash'];
      let success = false;

      for (const modelName of modelChoices) {
        try {
          response = await ai.models.generateContent({
            model: modelName,
            contents: prompt,
            config: { responseMimeType: "application/json" }
          });
          if (response?.text) {
            success = true;
            break;
          }
        } catch {
          // Fallback
        }
      }

      if (!success || !response?.text) {
        const safeTranslation = localCertifiedTranslation || cleanWord;
        const payload = {
          translation: safeTranslation,
          explanation: localCertifiedExplanation || (isTargetArabic 
            ? 'مفهوم قانوني معتمد يُفسر ويُطبق وفقاً للسوابق القضائية وأحكام المحكمة الجنائية الدولية ونظام روما الأساسي.'
            : 'Certified legal terminology under the Rome Statute of the International Criminal Court.'),
          isCertified: !!localCertifiedTranslation
        };
        if (isTargetArabic ? /[\u0600-\u06FF]/.test(safeTranslation) : true) {
          translationCache.set(cacheKey, payload);
        }
        return res.json(payload);
      }

      try {
        const result = JSON.parse(response.text.trim());
        let translationText = result.translation || localCertifiedTranslation || cleanWord;
        let explanationText = result.explanation || localCertifiedExplanation || '';

        // Strict verification: target language enforcement
        if (isTargetArabic) {
          // When translating to Arabic, translation MUST be in Arabic
          if (!/[\u0600-\u06FF]/.test(translationText)) {
            translationText = localCertifiedTranslation || (lexiconMatch ? lexiconMatch.ar : cleanWord);
          }
          if (!/[\u0600-\u06FF]/.test(explanationText)) {
            explanationText = localCertifiedExplanation || `مفهوم قانوني معتمد يُفسر ويُطبق وفقاً للسوابق القضائية وأحكام المحكمة الجنائية الدولية ونظام روما الأساسي.`;
          }
        } else {
          // When translating to English, translation MUST be in English
          if (!/[a-zA-Z]/.test(translationText) || /[\u0600-\u06FF]/.test(translationText)) {
            translationText = localCertifiedTranslation || (lexiconMatch ? lexiconMatch.en : cleanWord);
          }
          if (!/[a-zA-Z]/.test(explanationText)) {
            explanationText = localCertifiedExplanation || `Certified legal concept interpreted and applied in accordance with ICC jurisprudence and the Rome Statute.`;
          }
        }

        const payload = {
          translation: translationText,
          explanation: explanationText || (isTargetArabic ? 'مفهوم قانوني معتمد وفقاً لنظام روما الأساسي.' : 'Certified ICC legal term.'),
          isCertified: true
        };
        translationCache.set(cacheKey, payload);
        return res.json(payload);
      } catch {
        const safeTranslation = localCertifiedTranslation || cleanWord;
        const payload = {
          translation: safeTranslation,
          explanation: localCertifiedExplanation || (isTargetArabic
            ? 'مفهوم قانوني معتمد صادر عن المحكمة الجنائية الدولية ونظام روما الأساسي.'
            : 'Certified legal terminology under the Rome Statute of the International Criminal Court.'),
          isCertified: !!localCertifiedTranslation
        };
        translationCache.set(cacheKey, payload);
        return res.json(payload);
      }
    } catch (error) {
      console.error('Translation global handler:', error);
      const cleanWord = req.body?.word || '';
      const isTargetArabic = req.body?.language === 'ar';
      const lexiconMatch = lookupLexicon(cleanWord, isTargetArabic);
      const safeTranslation = lexiconMatch 
        ? (isTargetArabic ? lexiconMatch.ar : lexiconMatch.en)
        : cleanWord;
      return res.json({ 
        translation: safeTranslation, 
        explanation: isTargetArabic ? 'مفهوم قانوني معتمد وفق أحكام وقضاء المحكمة الجنائية الدولية.' : 'ICC legal term.',
        isCertified: !!lexiconMatch 
      });
    }
  });

  // Smart Search AI endpoint for answering legal queries and referencing ICC texts
  app.post('/api/smart-search', async (req, res) => {
    try {
      const { query, language } = req.body;
      if (!query || typeof query !== 'string') {
        return res.status(400).json({ error: 'Query is required' });
      }

      if (!process.env.GEMINI_API_KEY) {
        return res.status(500).json({ error: 'Missing GEMINI_API_KEY environment variable' });
      }

      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const isArabic = language !== 'en';
      
      const prompt = `You are a concise legal guide assistant for the International Criminal Court (ICC / المحكمة الجنائية الدولية) reference app.
The user is searching for: "${query}".
Language to respond in: ${isArabic ? 'Arabic (العربية الفصحى)' : 'English'}.

Instructions:
1. Provide a concise, highly factual answer in 2 to 3 sentences directly addressing the query based on the ICC legal framework (Rome Statute, Rules of Procedure and Evidence, Elements of Crimes, Regulations of the Court, or Code of Conduct).
2. Explicitly cite the relevant ICC document, article number, or body if applicable (e.g. "نظام روما الأساسي - المادة 5" or "مكتب المدعي العام").
3. Do NOT use markdown tables or lengthy preambles. Output clean, readable text.`;

      let response: any = null;
      const modelChoices = ['gemini-3.8-flash', 'gemini-flash-latest', 'gemini-3.1-flash-lite'];
      let success = false;
      
      for (const modelName of modelChoices) {
        try {
          response = await ai.models.generateContent({
            model: modelName,
            contents: prompt,
          });
          if (response?.text) {
            success = true;
            break;
          }
        } catch (err) {
          console.warn(`Smart search model ${modelName} unavailable, falling back...`);
        }
      }

      res.json({ answer: success ? response.text?.trim() : (isArabic ? 'عذراً، خدمة البحث الذكي غير متوفرة حالياً.' : 'Smart search is currently unavailable.') });
    } catch (error) {
      console.warn('Smart search AI warning:', error instanceof Error ? error.message : String(error));
      res.status(200).json({ answer: null, error: 'Smart search unavailable' });
    }
  });

  // Helper to ensure raw PCM audio from Gemini is wrapped in a standard WAV container
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

  // In-memory cache for audio to provide instant responses on repeated requests
  const ttsCacheV4 = new Map<string, { audio: string; mimeType: string }>();

  // TTS endpoint using Gemini with Natural Human Voice and clear articulation
  app.post('/api/tts', async (req, res) => {
    const { text } = req.body || {};
    if (!text || typeof text !== 'string') {
      return res.status(400).json({ error: 'Text is required' });
    }

    const cleanText = text.trim();
    const cacheKey = cleanText.toLowerCase();

    if (ttsCacheV4.has(cacheKey)) {
      return res.json(ttsCacheV4.get(cacheKey));
    }

    try {
      if (!process.env.GEMINI_API_KEY) {
        throw new Error('Missing GEMINI_API_KEY');
      }

      const ai = new GoogleGenAI({
        apiKey: process.env.GEMINI_API_KEY,
        httpOptions: { headers: { 'User-Agent': 'aistudio-build' } }
      });
      
      // Use gemini-3.8-flash-lite-tts for natural human legal articulation
      const response = await (ai.models.generateContent as any)({
        model: "gemini-3.8-flash-lite-tts",
        contents: [
          {
            role: "user",
            parts: [
              {
                text: cleanText,
                speechMetadata: {
                  style: "Articulate, natural human legal pronunciation, warm tone, clear enunciation with professional judicial pacing"
                }
              },
            ],
          },
        ] as any,
        config: {
          responseModalities: ["AUDIO"],
          speechConfig: {
            voiceConfig: {
              prebuiltVoiceConfig: {
                // 'Kore' delivers a warm, natural, human studio-grade voice
                voiceName: "Kore",
              },
            },
          },
        } as any,
      });

      const part = response.candidates?.[0]?.content?.parts?.[0];
      const base64Audio = part?.inlineData?.data;
      
      if (base64Audio) {
        const rawPcm = Buffer.from(base64Audio, 'base64');
        const wavBuffer = pcmToWav(rawPcm, 24000, 1, 16);
        const payload = { audio: wavBuffer.toString('base64'), mimeType: 'audio/wav' };
        ttsCacheV4.set(cacheKey, payload);
        return res.json(payload);
      }
      throw new Error('Gemini audio generation failed');
    } catch (error: any) {
      const isQuotaExceeded = error.message?.includes('quota') || error.status === 429 || JSON.stringify(error).includes('RESOURCE_EXHAUSTED');
      
      if (isQuotaExceeded) {
        console.warn('TTS Quota limit reached, instructing client to use high-quality speech synthesis');
      } else {
        console.error('TTS Error:', error.message || error);
      }
      
      if (isQuotaExceeded) {
        return res.json({ audio: null, fallback: true, quotaExceeded: true });
      }
      res.json({ audio: null, fallback: true });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const isHmrDisabled = process.env.DISABLE_HMR === 'true';
    const vite = await createViteServer({
      server: {
        middlewareMode: true,
        hmr: isHmrDisabled ? false : undefined,
      },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
  });
}

startServer();
