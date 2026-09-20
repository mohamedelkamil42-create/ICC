// Audio utility for high-quality natural human voice pronunciation of legal terms

let currentAudio: HTMLAudioElement | null = null;

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

  // 1. Try Backend API
  try {
    const res = await fetch('/api/tts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: cleanText }),
    });
    if (res.ok && isPlaying) {
      const data = await res.json();
      if (data.audio) {
        const success = await tryPlayAudio(`data:${data.mimeType || 'audio/mp3'};base64,${data.audio}`);
        if (success) return stop;
      }
    }
  } catch {}

  // 2. Direct Fallback (Google Translate TTS) - Works on GitHub Pages/Vercel
  try {
    const directUrl = `https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=en&q=${encodeURIComponent(cleanText)}`;
    const success = await tryPlayAudio(directUrl);
    if (success) return stop;
  } catch {}

  // 3. Web Speech API (Browser native)
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
