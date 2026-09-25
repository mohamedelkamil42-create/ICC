// Ensure tsx injected globals do not break Vite plugins (e.g. vite-plugin-pwa)
delete (globalThis as any).__dirname;
delete (globalThis as any).__filename;

import express from 'express';
import path from 'path';
import { GoogleGenAI } from '@google/genai';
import { createServer as createViteServer } from 'vite';

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Dictionary translation endpoint using Gemini
  app.post('/api/translate', async (req, res) => {
    try {
      const { word, context, language } = req.body;
      
      if (!process.env.GEMINI_API_KEY) {
        return res.status(500).json({ error: 'Missing GEMINI_API_KEY environment variable' });
      }

      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const isTargetArabic = language === 'ar';
      
      const prompt = `You are a high-level legal expert specializing in the International Criminal Court (ICC) and international criminal law.
      
      Task: Translate the term "${word}" and provide a contextual explanation.
      
      Context of the term (from the current legal text): "${context}"
      
      CRITICAL INSTRUCTIONS:
      1. Provide a precise legal translation for the term "${word}" in ${isTargetArabic ? 'Arabic (العربية الفصحى)' : 'English'}.
      2. Provide a short "Contextual Explanation" (1-2 sentences) explaining how this term is used within this specific context or under ICC legal standards (Rome Statute/Rules of Procedure).
      3. Use official ICC terminology.
      4. Format your response as a JSON object with exactly two keys: "translation" and "explanation".
      
      Example:
      {
        "translation": "الغرفة التمهيدية",
        "explanation": "تشير هنا إلى الهيئة القضائية التي تقرر ما إذا كانت هناك أدلة كافية للمضي قدماً في المحاكمة."
      }`;
      
      let response;
      try {
        response = await ai.models.generateContent({
          model: 'gemini-3.1-flash-lite',
          contents: prompt,
          config: { responseMimeType: "application/json" }
        });
      } catch {
        response = await ai.models.generateContent({
          model: 'gemini-flash-latest',
          contents: prompt,
          config: { responseMimeType: "application/json" }
        });
      }

      const result = JSON.parse(response.text?.trim() || '{}');
      res.json({ 
        translation: result.translation || '', 
        explanation: result.explanation || '' 
      });
    } catch (error) {
      console.error('Translation error:', error);
      res.status(500).json({ error: 'Translation failed' });
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

      let response;
      try {
        response = await ai.models.generateContent({
          model: 'gemini-3.1-flash-lite',
          contents: prompt,
        });
      } catch {
        response = await ai.models.generateContent({
          model: 'gemini-flash-latest',
          contents: prompt,
        });
      }

      res.json({ answer: response.text?.trim() || '' });
    } catch (error) {
      console.warn('Smart search AI warning:', error instanceof Error ? error.message : String(error));
      res.status(200).json({ answer: null, error: 'Smart search unavailable' });
    }
  });

  // In-memory cache for audio to provide instant responses on repeated requests
  const ttsCacheV2 = new Map<string, { audio: string; mimeType: string }>();

  // TTS endpoint using Gemini with Human-like voice
  app.post('/api/tts', async (req, res) => {
    const { text } = req.body || {};
    if (!text || typeof text !== 'string') {
      return res.status(400).json({ error: 'Text is required' });
    }

    const cleanText = text.trim();
    const cacheKey = cleanText.toLowerCase();

    if (ttsCacheV2.has(cacheKey)) {
      return res.json(ttsCacheV2.get(cacheKey));
    }

    try {
      if (!process.env.GEMINI_API_KEY) {
        throw new Error('Missing GEMINI_API_KEY');
      }

      const ai = new GoogleGenAI({
        apiKey: process.env.GEMINI_API_KEY,
        httpOptions: { headers: { 'User-Agent': 'aistudio-build' } }
      });
      
      const response = await ai.models.generateContent({
        model: "gemini-3.8-flash-tts",
        contents: [
          {
            role: "user",
            parts: [
              {
                text: cleanText,
                speechMetadata: {
                  style: "Clear, authoritative legal professional, slow and steady pronunciation",
                },
              },
            ],
          },
        ],
        config: {
          responseModalities: ["AUDIO"],
          speechConfig: {
            voiceConfig: {
              prebuiltVoiceConfig: {
                voiceName: "Zephyr", // Zephyr is generally very clear and professional
              },
            },
          },
        },
      });

      const part = response.candidates?.[0]?.content?.parts?.[0];
      const base64Audio = part?.inlineData?.data;
      const mimeType = part?.inlineData?.mimeType || 'audio/wav';
      
      if (base64Audio) {
        const payload = { audio: base64Audio, mimeType };
        ttsCacheV2.set(cacheKey, payload);
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
          ttsCache.set(cacheKey, payload);
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
