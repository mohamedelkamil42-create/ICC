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
  // Cancel previous playback
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

        const playPromise = audio.play();
        if (playPromise) {
          playPromise.catch(() => resolve(false));
        }
      } catch {
        resolve(false);
      }
    });
  };

  // 1. Try our backend API first (warm, natural human voice + caching)
  try {
    const res = await fetch('/api/tts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: cleanText }),
    });

    if (res.ok && isPlaying) {
      const data = await res.json();
      if (data.audio) {
        const mimeType = data.mimeType || 'audio/mp3';
        const success = await tryPlayAudio(`data:${mimeType};base64,${data.audio}`);
        if (success) return stop;
      }
    }
  } catch {
    // Backend API not reachable (e.g. static GitHub Pages)
  }

  if (!isPlaying) return stop;

  // 2. Try direct Google Natural Voice stream (works on GitHub Pages if no CORS restriction)
  try {
    const directUrl = `https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=en&q=${encodeURIComponent(cleanText)}`;
    const success = await tryPlayAudio(directUrl);
    if (success) return stop;
  } catch {
    // Direct audio failed
  }

  if (!isPlaying) return stop;

  // 3. Fallback to Web Speech API with best natural voice priority
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    try {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(cleanText);
      utterance.lang = 'en-US';
      utterance.rate = 0.95;
      utterance.pitch = 1.0;

      let voices = window.speechSynthesis.getVoices();
      
      // If voices aren't loaded, try once more after a tiny delay
      if (voices.length === 0) {
        await new Promise(r => setTimeout(r, 50));
        voices = window.speechSynthesis.getVoices();
      }

      // Select most natural human voice - prioritizing high quality neural voices
      const naturalVoice = voices.find(v => 
        v.lang.startsWith('en') && 
        (v.name.includes('Natural') || 
         v.name.includes('Neural') || 
         v.name.includes('Premium') ||
         v.name.includes('Google') || 
         v.name.includes('Online') || 
         v.name.includes('Samantha') || 
         v.name.includes('Jenny') || 
         v.name.includes('Aria') || 
         v.name.includes('Guy') || 
         v.name.includes('Sara'))
      ) || voices.find(v => v.lang === 'en-US' && v.name.includes('Google')) || voices.find(v => v.lang === 'en-US') || voices.find(v => v.lang.startsWith('en'));

      if (naturalVoice) {
        utterance.voice = naturalVoice;
      }

      utterance.onend = () => callbacks?.onEnd?.();
      utterance.onerror = () => {
        callbacks?.onError?.();
        callbacks?.onEnd?.();
      };

      window.speechSynthesis.speak(utterance);
      return stop;
    } catch {
      callbacks?.onError?.();
      callbacks?.onEnd?.();
    }
  } else {
    callbacks?.onEnd?.();
  }

  return stop;
}
