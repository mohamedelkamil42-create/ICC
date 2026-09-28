// Audio utility for high-quality natural human voice pronunciation of legal terms
const AUDIO_CACHE_NAME = 'icc-legal-audio-v4';

let currentAudio: HTMLAudioElement | null = null;
let currentSpeechRequestId = 0;
let activeAudioController: AbortController | null = null;

// Helper to check if we are online
const isOnline = () => typeof navigator !== 'undefined' && navigator.onLine;

// Purge obsolete robotic caches once
if (typeof caches !== 'undefined') {
  caches.keys().then((keys) => {
    keys.forEach((key) => {
      if (key.startsWith('icc-legal-audio-') && key !== AUDIO_CACHE_NAME) {
        caches.delete(key).catch(() => {});
      }
    });
  }).catch(() => {});
}

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
  currentSpeechRequestId++; // Invalidate all pending or inflight requests
  
  if (activeAudioController) {
    try {
      activeAudioController.abort();
    } catch {}
    activeAudioController = null;
  }

  if (currentAudio) {
    try {
      currentAudio.pause();
      currentAudio.currentTime = 0;
      currentAudio.src = '';
    } catch {}
    currentAudio = null;
  }

  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    try {
      window.speechSynthesis.cancel();
    } catch {}
  }
}

export function isAudioSpeaking(): boolean {
  return (
    (currentAudio !== null && !currentAudio.paused) ||
    (typeof window !== 'undefined' && 'speechSynthesis' in window && window.speechSynthesis.speaking)
  );
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
        const mime = data.mimeType || 'audio/wav';
        const blob = await (await fetch(`data:${mime};base64,${data.audio}`)).blob();
        await cache.put(cacheKey, new Response(blob, {
          headers: { 'Content-Type': mime }
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
  const cleanText = text.trim();
  if (!cleanText) return () => {};

  // Cleanly terminate any active or in-flight speech before starting a new one
  stopNaturalSpeech();
  const thisRequestId = currentSpeechRequestId;
  const abortController = new AbortController();
  activeAudioController = abortController;

  let isPlaying = true;
  const stop = () => {
    if (thisRequestId === currentSpeechRequestId) {
      isPlaying = false;
      stopNaturalSpeech();
      callbacks?.onEnd?.();
    }
  };

  const tryPlayAudio = (src: string): Promise<boolean> => {
    return new Promise((resolve) => {
      // Discard immediately if a newer request came in
      if (thisRequestId !== currentSpeechRequestId || abortController.signal.aborted) {
        resolve(false);
        return;
      }

      try {
        const audio = new Audio(src);
        currentAudio = audio;

        callbacks?.onStart?.();

        audio.onended = () => {
          if (currentAudio === audio) currentAudio = null;
          if (thisRequestId === currentSpeechRequestId) {
            callbacks?.onEnd?.();
          }
          resolve(true);
        };

        audio.onerror = () => {
          if (currentAudio === audio) currentAudio = null;
          resolve(false);
        };

        audio.play().catch(() => {
          if (currentAudio === audio) currentAudio = null;
          resolve(false);
        });
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
      
      if (thisRequestId !== currentSpeechRequestId || abortController.signal.aborted) {
        return () => {};
      }

      if (cachedResponse && isPlaying) {
        const blob = await cachedResponse.blob();
        if (thisRequestId !== currentSpeechRequestId || abortController.signal.aborted) {
          return () => {};
        }
        const url = URL.createObjectURL(blob);
        const success = await tryPlayAudio(url);
        if (success) return stop;
      }
    } catch (e) {
      console.warn('Cache access error:', e);
    }
  }

  // 2. Try Backend Studio-Grade AI Human Voice (Gemini TTS)
  if (isOnline()) {
    try {
      if (thisRequestId !== currentSpeechRequestId || abortController.signal.aborted) {
        return () => {};
      }

      const res = await fetch('/api/tts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: cleanText }),
        signal: abortController.signal,
      });

      if (thisRequestId !== currentSpeechRequestId || abortController.signal.aborted) {
        return () => {};
      }
      
      const data = await res.json();
      
      if (res.ok && isPlaying && data.audio) {
        if (thisRequestId !== currentSpeechRequestId || abortController.signal.aborted) {
          return () => {};
        }

        const mime = data.mimeType || 'audio/wav';
        const audioData = `data:${mime};base64,${data.audio}`;
        
        // Cache it for subsequent instant replays
        if (typeof caches !== 'undefined') {
          try {
            const cache = await caches.open(AUDIO_CACHE_NAME);
            const cacheKey = `/api/tts?text=${encodeURIComponent(cleanText)}`;
            const blob = await (await fetch(audioData)).blob();
            cache.put(cacheKey, new Response(blob, { headers: { 'Content-Type': mime } }));
          } catch {}
        }

        const success = await tryPlayAudio(audioData);
        if (success) return stop;
      }
    } catch (err: any) {
      if (err.name === 'AbortError') {
        return () => {};
      }
      console.warn('Backend TTS fetch failed, using high-fidelity local voice');
    }
  }

  // 3. High-Quality Web Speech API (Offline fallback with human neural/natural voices)
  if (thisRequestId !== currentSpeechRequestId || abortController.signal.aborted) {
    return () => {};
  }

  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    try {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(cleanText);
      utterance.lang = 'en-US';
      utterance.rate = 0.88; // Natural, measured human tempo for legal diction
      utterance.pitch = 1.0;
      
      let voices = window.speechSynthesis.getVoices();
      if (voices.length === 0) {
        await new Promise(r => setTimeout(r, 120));
        voices = window.speechSynthesis.getVoices();
      }

      // Prioritize natural, neural, studio human voices
      const priorityOrder = [
        (v: SpeechSynthesisVoice) => v.name.includes('Natural') && v.lang.startsWith('en'),
        (v: SpeechSynthesisVoice) => v.name.includes('Neural') && v.lang.startsWith('en'),
        (v: SpeechSynthesisVoice) => v.name.includes('Google US English'),
        (v: SpeechSynthesisVoice) => v.name.includes('Google UK English Female'),
        (v: SpeechSynthesisVoice) => v.name.includes('Samantha') && !v.name.includes('Compact'),
        (v: SpeechSynthesisVoice) => v.name.includes('Daniel') && !v.name.includes('Compact'),
        (v: SpeechSynthesisVoice) => v.name.includes('Serena'),
        (v: SpeechSynthesisVoice) => v.name.includes('Premium'),
        (v: SpeechSynthesisVoice) => v.lang === 'en-US' && !v.name.includes('Desktop'),
        (v: SpeechSynthesisVoice) => v.lang.startsWith('en'),
      ];

      let selectedVoice: SpeechSynthesisVoice | undefined;
      for (const matcher of priorityOrder) {
        selectedVoice = voices.find(matcher);
        if (selectedVoice) break;
      }

      if (selectedVoice) {
        utterance.voice = selectedVoice;
      }

      callbacks?.onStart?.();

      utterance.onend = () => {
        if (thisRequestId === currentSpeechRequestId) {
          callbacks?.onEnd?.();
        }
      };

      utterance.onerror = () => {
        if (thisRequestId === currentSpeechRequestId) {
          callbacks?.onError?.();
          callbacks?.onEnd?.();
        }
      };

      window.speechSynthesis.speak(utterance);
      return stop;
    } catch {
      callbacks?.onError?.();
      callbacks?.onEnd?.();
    }
  }

  return stop;
}
