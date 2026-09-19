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
      const { word, context } = req.body;
      
      if (!process.env.GEMINI_API_KEY) {
        return res.status(500).json({ error: 'Missing GEMINI_API_KEY environment variable' });
      }

      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      
      const prompt = `You are a strict legal dictionary for the International Criminal Court (ICC).
      Translate ONLY the specific term below into Arabic.
      
      Term to translate: "${word}"
      Context (DO NOT translate this, use it ONLY to understand the term's meaning): "${context}"
      
      CRITICAL INSTRUCTIONS:
      1. Translate ONLY the term itself.
      2. Do NOT translate the context sentence.
      3. Return ONLY the exact Arabic translation (usually 1-3 words).
      4. Do not include any explanations, quotes, or markdown.`;
      
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

      res.json({ translation: response.text?.trim() || '' });
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
  const ttsCache = new Map<string, { audio: string; mimeType: string }>();

  // TTS endpoint using Gemini
  app.post('/api/tts', async (req, res) => {
    try {
      const { text } = req.body;
      if (!text || typeof text !== 'string') {
        return res.status(400).json({ error: 'Text is required' });
      }

      const cacheKey = text.trim().toLowerCase();
      if (ttsCache.has(cacheKey)) {
        return res.json(ttsCache.get(cacheKey));
      }
      
      if (!process.env.GEMINI_API_KEY) {
        return res.status(500).json({ error: 'Missing GEMINI_API_KEY environment variable' });
      }

      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      
      // We will use gemini-3.1-flash-tts-preview with Modality.AUDIO
      // For type safety with custom imports, using as any if needed, but the SKILL shows the exact shape
      const response = await (ai.models as any).generateContent({
        model: "gemini-3.1-flash-tts-preview",
        contents: [{ parts: [{ text }] }],
        config: {
          responseModalities: ["AUDIO"],
          speechConfig: {
              voiceConfig: {
                prebuiltVoiceConfig: { voiceName: 'Kore' },
              },
          },
        },
      });

      const part = response.candidates?.[0]?.content?.parts?.[0];
      const base64Audio = part?.inlineData?.data;
      const mimeType = part?.inlineData?.mimeType || 'audio/wav';
      
      if (base64Audio) {
        const payload = { audio: base64Audio, mimeType };
        ttsCache.set(cacheKey, payload);
        res.json(payload);
      } else {
        res.json({ audio: null, fallback: true });
      }
    } catch (error: any) {
      const isQuota = error?.status === 429 || 
                      String(error?.message || '').includes('429') || 
                      String(error?.message || '').includes('quota') ||
                      String(error?.message || '').includes('RESOURCE_EXHAUSTED');
      
      if (isQuota) {
        console.warn('TTS quota reached for Gemini free tier (10/day limit). Client will use instant native speech synthesis.');
        return res.json({ audio: null, quotaExceeded: true, fallback: true });
      }

      console.warn('TTS unavailable:', error instanceof Error ? error.message : String(error));
      res.json({ audio: null, fallback: true });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
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
