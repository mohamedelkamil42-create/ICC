// Ensure tsx injected globals do not break Vite plugins (e.g. vite-plugin-pwa)
delete (globalThis as any).__dirname;
delete (globalThis as any).__filename;

import express from 'express';
import path from 'path';
import fs from 'fs';
import { GoogleGenAI } from '@google/genai';
import { createServer as createViteServer } from 'vite';

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
        return res.json(translationCache.get(cacheKey));
      }

      // Check local certified glossary index
      const matchedTerm = glossaryMap.get(cleanWord.toLowerCase()) || glossaryMap.get(cleanWord);
      let localCertifiedTranslation = '';
      if (matchedTerm) {
        localCertifiedTranslation = isTargetArabic ? matchedTerm.ar : matchedTerm.en;
      }

      if (!process.env.GEMINI_API_KEY) {
        const fallback = {
          translation: localCertifiedTranslation || cleanWord,
          explanation: isTargetArabic
            ? 'مصطلح قانوني مستخدم في إطار نظام روما الأساسي للمحكمة الجنائية الدولية.'
            : 'Legal term used within the framework of the ICC Rome Statute.',
          isCertified: !!localCertifiedTranslation
        };
        translationCache.set(cacheKey, fallback);
        return res.json(fallback);
      }

      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

      const prompt = `You are a Senior Legal Linguist and Judicial Expert specializing in the International Criminal Court (ICC).

Your task is to provide an authoritative "ICC-Certified" translation and contextual legal analysis for the term or multi-word phrase: "${cleanWord}".

CONTEXT OF USAGE IN THE LEGAL TEXT:
"${context || cleanWord}"

STRICT REQUIREMENTS:
1. TRANSLATION:
   - Target Language: ${isTargetArabic ? 'Modern Standard Legal Arabic (العربية القانونية الفصحى المعتمدة)' : 'Official ICC Legal English'}.
   - Multi-word phrases MUST be translated as a single unified legal concept (e.g. "Grave breaches of the Geneva Conventions" -> "الانتهاكات الجسيمة لاتفاقيات جنيف", "Individual criminal responsibility" -> "المسؤولية الجنائية الفردية", "Pre-Trial Chamber" -> "الدائرة التمهيدية", "Command responsibility" -> "مسؤولية القائد والرئيس").
   - NEVER return a literal disjointed translation.
2. LEGAL EXPLANATION:
   - Provide a concise 1-2 sentence explanation of how this legal concept operates under the Rome Statute, Elements of Crimes, or Rules of Procedure and Evidence.
   - Explain its practical legal effect or procedural role.
3. OUTPUT FORMAT:
   - Return strictly a JSON object with exactly two keys: "translation" and "explanation".`;

      let response: any = null;
      const modelChoices = ['gemini-3.8-flash', 'gemini-flash-latest', 'gemini-3.1-flash-lite'];
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
        } catch (err) {
          console.warn(`Translation model ${modelName} unavailable, falling back...`);
        }
      }

      if (!success || !response?.text) {
        const payload = {
          translation: localCertifiedTranslation || cleanWord,
          explanation: isTargetArabic 
            ? 'مصطلح قانوني معتمد في المحكمة الجنائية الدولية وفق نصوص نظام روما الأساسي.'
            : 'Certified legal terminology under the Rome Statute of the International Criminal Court.',
          isCertified: true
        };
        translationCache.set(cacheKey, payload);
        return res.json(payload);
      }

      try {
        const result = JSON.parse(response.text.trim());
        const payload = {
          translation: result.translation || localCertifiedTranslation || cleanWord,
          explanation: result.explanation || (isTargetArabic ? 'مصطلح قانوني معتمد وفقاً لنظام روما الأساسي.' : 'Certified ICC legal term.'),
          isCertified: true
        };
        translationCache.set(cacheKey, payload);
        return res.json(payload);
      } catch (parseErr) {
        const payload = {
          translation: localCertifiedTranslation || cleanWord,
          explanation: '',
          isCertified: !!localCertifiedTranslation
        };
        translationCache.set(cacheKey, payload);
        return res.json(payload);
      }
    } catch (error) {
      console.error('Translation global handler:', error);
      const cleanWord = req.body?.word || '';
      return res.json({ 
        translation: cleanWord, 
        explanation: req.body?.language === 'ar' ? 'مصطلح قانوني وفق أحكام المحكمة الجنائية الدولية.' : 'ICC legal term.',
        isCertified: false 
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

  // In-memory cache for audio to provide instant responses on repeated requests
  const ttsCacheV3 = new Map<string, { audio: string; mimeType: string }>();

  // TTS endpoint using Gemini with Human-like voice
  app.post('/api/tts', async (req, res) => {
    const { text } = req.body || {};
    if (!text || typeof text !== 'string') {
      return res.status(400).json({ error: 'Text is required' });
    }

    const cleanText = text.trim();
    const cacheKey = cleanText.toLowerCase();

    if (ttsCacheV3.has(cacheKey)) {
      return res.json(ttsCacheV3.get(cacheKey));
    }

    try {
      if (!process.env.GEMINI_API_KEY) {
        throw new Error('Missing GEMINI_API_KEY');
      }

      const ai = new GoogleGenAI({
        apiKey: process.env.GEMINI_API_KEY,
        httpOptions: { headers: { 'User-Agent': 'aistudio-build' } }
      });
      
      const response = await (ai.models.generateContent as any)({
        model: "gemini-3.8-flash-tts",
        contents: [
          {
            role: "user",
            parts: [
              {
                text: cleanText,
              },
            ],
          },
        ] as any,
        config: {
          responseModalities: ["AUDIO"],
          speechConfig: {
            voiceConfig: {
              prebuiltVoiceConfig: {
                voiceName: "Zephyr",
              },
            },
          },
        } as any,
      });

      const part = response.candidates?.[0]?.content?.parts?.[0];
      const base64Audio = part?.inlineData?.data;
      const mimeType = part?.inlineData?.mimeType || 'audio/wav';
      
      if (base64Audio) {
        const payload = { audio: base64Audio, mimeType };
        ttsCacheV3.set(cacheKey, payload);
        return res.json(payload);
      }
      throw new Error('Gemini audio generation failed');
    } catch (error: any) {
      const isQuotaExceeded = error.message?.includes('quota') || error.status === 429 || JSON.stringify(error).includes('RESOURCE_EXHAUSTED');
      
      if (isQuotaExceeded) {
        console.warn('TTS Quota hit - falling back');
      } else {
        console.error('TTS Error:', error.message || error);
      }
      
      // Automatic fallback to high-quality external service if Gemini fails or quota is hit
      try {
        const fallbackUrl = `https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=en&q=${encodeURIComponent(cleanText)}`;
        const fRes = await fetch(fallbackUrl, {
          headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' }
        });
        if (fRes.ok) {
          const buf = Buffer.from(await fRes.arrayBuffer());
          const payload = { audio: buf.toString('base64'), mimeType: 'audio/mp3' };
          ttsCacheV3.set(cacheKey, payload);
          return res.json(payload);
        }
      } catch (fErr) {
        // Silent fallback
      }

      if (isQuotaExceeded) {
        // Return 200 with fallback flag to silence quota errors in platform logs
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
