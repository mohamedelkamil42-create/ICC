// Audio utility for high-quality natural human voice pronunciation of legal terms
const AUDIO_CACHE_NAME = 'icc-legal-audio-v1';

let currentAudio: HTMLAudioElement | null = null;

// Helper to check if we are online
const isOnline = () => typeof navigator !== 'undefined' && navigator.onLine;

// Preload available voices for speech synthesis fallback
const loadVoices = () => {
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    window.speechSynthesis.getVoices();
  }
};

if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
  window.speechSynthesis.onvoiceschanged = loadVoices;
  loadVoices();
}

export function stopNaturalSpeech() {
  if (currentAudio) {
    try {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    } catch {}
    currentAudio = null;
  }
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    try {
      window.speechSynthesis.cancel();
    } catch {}
  }
}

/**
 * Prefetches and caches audio for a given text in the background
 */
export async function prefetchAudio(text: string): Promise<void> {
  const cleanText = text.trim();
  if (!cleanText || typeof caches === 'undefined') return;

  const cache = await caches.open(AUDIO_CACHE_NAME);
  const cacheKey = `/api/tts?text=${encodeURIComponent(cleanText)}`;
  const cachedResponse = await cache.match(cacheKey);
  
  if (cachedResponse) return; // Already cached

  try {
    const res = await fetch('/api/tts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: cleanText }),
    });
    
    if (res.ok) {
      const data = await res.json();
      if (data.audio) {
        // Create a fake response to store in cache
        const blob = await (await fetch(`data:${data.mimeType || 'audio/mp3'};base64,${data.audio}`)).blob();
        await cache.put(cacheKey, new Response(blob, {
          headers: { 'Content-Type': data.mimeType || 'audio/mp3' }
        }));
      }
    }
  } catch (err) {
    console.warn('Prefetch failed for:', cleanText, err);
  }
}

export async function playNaturalEnglishAudio(
  text: string,
  callbacks?: {
    onStart?: () => void;
    onEnd?: () => void;
    onError?: () => void;
  }
): Promise<() => void> {
  stopNaturalSpeech();

  const cleanText = text.trim();
  if (!cleanText) return () => {};

  callbacks?.onStart?.();

  let isPlaying = true;
  const stop = () => {
    isPlaying = false;
    stopNaturalSpeech();
    callbacks?.onEnd?.();
  };

  const tryPlayAudio = (src: string): Promise<boolean> => {
    return new Promise((resolve) => {
      try {
        const audio = new Audio(src);
        currentAudio = audio;
        audio.onended = () => {
          if (currentAudio === audio) currentAudio = null;
          callbacks?.onEnd?.();
          resolve(true);
        };
        audio.onerror = () => {
          if (currentAudio === audio) currentAudio = null;
          resolve(false);
        };
        audio.play().catch(() => resolve(false));
      } catch {
        resolve(false);
      }
    });
  };

  // 1. Try Local Cache First (for Offline & Instant Play)
  if (typeof caches !== 'undefined') {
    try {
      const cache = await caches.open(AUDIO_CACHE_NAME);
      const cacheKey = `/api/tts?text=${encodeURIComponent(cleanText)}`;
      const cachedResponse = await cache.match(cacheKey);
      
      if (cachedResponse && isPlaying) {
        const blob = await cachedResponse.blob();
        const url = URL.createObjectURL(blob);
        const success = await tryPlayAudio(url);
        if (success) return stop;
      }
    } catch (e) {
      console.warn('Cache access error:', e);
    }
  }

  // 2. Try Backend API (if online)
  if (isOnline()) {
    try {
      const res = await fetch('/api/tts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: cleanText }),
      });
      
      const data = await res.json();
      
      if (data.quotaExceeded) {
        console.warn('Gemini TTS quota exceeded, falling back to browser speech.');
        // Fall through to browser speech
      } else if (res.ok && isPlaying && data.audio) {
        const mime = data.mimeType || 'audio/mp3';
        const audioData = `data:${mime};base64,${data.audio}`;
        
        // Cache it for next time
        if (typeof caches !== 'undefined') {
          const cache = await caches.open(AUDIO_CACHE_NAME);
          const cacheKey = `/api/tts?text=${encodeURIComponent(cleanText)}`;
          const blob = await (await fetch(audioData)).blob();
          cache.put(cacheKey, new Response(blob, { headers: { 'Content-Type': mime } }));
        }

        const success = await tryPlayAudio(audioData);
        if (success) return stop;
      }
    } catch (err) {
      console.warn('Backend fetch failed, moving to next fallback');
    }
  }

  // 3. Fallback (Google Translate TTS) - Only if online
  if (isOnline()) {
    try {
      const directUrl = `https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=en&q=${encodeURIComponent(cleanText)}`;
      const success = await tryPlayAudio(directUrl);
      if (success) return stop;
    } catch {}
  }

  // 4. Web Speech API (Browser native) - Works offline
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    try {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(cleanText);
      utterance.lang = 'en-US';
      utterance.rate = 0.95;
      
      let voices = window.speechSynthesis.getVoices();
      if (voices.length === 0) {
        await new Promise(r => setTimeout(r, 100));
        voices = window.speechSynthesis.getVoices();
      }

      const naturalVoice = voices.find(v => 
        v.lang.startsWith('en') && 
        (v.name.includes('Natural') || v.name.includes('Neural') || v.name.includes('Premium') || v.name.includes('Google'))
      ) || voices.find(v => v.lang.startsWith('en'));

      if (naturalVoice) utterance.voice = naturalVoice;
      utterance.onend = () => callbacks?.onEnd?.();
      utterance.onerror = () => { callbacks?.onError?.(); callbacks?.onEnd?.(); };
      window.speechSynthesis.speak(utterance);
      return stop;
    } catch {
      callbacks?.onError?.();
      callbacks?.onEnd?.();
    }
  }

  return stop;
}
