import React, { useState, useEffect, useMemo } from 'react';
import { createPortal } from 'react-dom';
import { Volume2, Loader2, X } from 'lucide-react';
import glossaryDataRaw from './glossaryData.json';
import { playNaturalEnglishAudio } from './audioUtils';

interface TranslatableTextProps {
  text: string;
  isEnglish: boolean;
}

export const TranslatableText: React.FC<TranslatableTextProps> = ({ text, isEnglish }) => {
  const [selectedWord, setSelectedWord] = useState<{ word: string, rect: DOMRect } | null>(null);
  const [translation, setTranslation] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  // Fast offline dictionary map from the 1,000+ ICC glossary terms for GitHub Pages & offline use
  const offlineDict = useMemo(() => {
    const dict = new Map<string, string>();
    try {
      const sections = glossaryDataRaw as any[];
      for (const sec of sections) {
        if (Array.isArray(sec?.terms)) {
          for (const item of sec.terms) {
            if (item?.en && item?.ar) {
              dict.set(item.en.trim().toLowerCase(), item.ar.trim());
              // Index individual words inside multi-word legal terms
              const words = item.en.trim().toLowerCase().split(/\s+/);
              for (const w of words) {
                if (w.length > 3 && !dict.has(w)) {
                  dict.set(w, item.ar.trim());
                }
              }
            }
          }
        }
      }
    } catch {
      // Ignore if parsing fails
    }
    return dict;
  }, []);

  // Auto-close popover on outside click
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      // Very basic outside click logic
      setSelectedWord(null);
    };
    if (selectedWord) {
      window.addEventListener('click', handleOutsideClick);
    }
    return () => window.removeEventListener('click', handleOutsideClick);
  }, [selectedWord]);

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isEnglish) return;
    
    // We only trigger if the user actually clicked (selection is collapsed)
    const selection = window.getSelection();
    
    // Find the word that was clicked using Range
    let clickedWord = '';
    
    // Fallback simple word detection if selection is empty
    if (!selection || selection.toString().trim() === '') {
      // This is a naive way to get word on click for simplicity in this demo.
      // A better way is to split the text into span elements.
      // We will rely on our span wrapper below instead of caret range.
    }
  };

  const translateWord = async (e: React.MouseEvent<HTMLSpanElement>, word: string) => {
    e.stopPropagation();
    
    // Remove punctuation
    const cleanWord = word.replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, "").trim();
    if (!cleanWord) return;

    const rect = (e.target as HTMLElement).getBoundingClientRect();
    setSelectedWord({ word: cleanWord, rect });
    setTranslation(null);
    setLoading(true);
    setError(false);

    // Check offline dictionary first (instant & works on GitHub Pages)
    const localMatch = offlineDict.get(cleanWord.toLowerCase());
    if (localMatch) {
      setTranslation(localMatch);
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('/api/translate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        // Pass a brief context snippet from the full text (e.g., max 150 chars)
        body: JSON.stringify({ word: cleanWord, context: text.substring(0, 150) })
      });
      
      if (!response.ok) {
        throw new Error('Translation endpoint unavailable');
      }

      const data = await response.json();
      if (data.translation) {
        setTranslation(data.translation);
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  const playAudio = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedWord?.word || isPlayingAudio) return;

    playNaturalEnglishAudio(selectedWord.word, {
      onStart: () => setIsPlayingAudio(true),
      onEnd: () => setIsPlayingAudio(false),
      onError: () => setIsPlayingAudio(false)
    });
  };

  // If Arabic, just render text
  if (!isEnglish) {
    return <p className="text-neutral-800 text-lg leading-relaxed whitespace-pre-wrap">{text}</p>;
  }

  // If English, split text into words and wrap with spans
  const words = text.split(/(\\s+|\\b)/).filter(Boolean);

  return (
    <div className="relative text-neutral-800 text-lg leading-relaxed whitespace-pre-wrap" dir="ltr" onPointerUp={handlePointerUp}>
      {words.map((chunk, index) => {
        // If it's just whitespace or punctuation, render as is
        if (/^[^a-zA-Z0-9]+$/.test(chunk)) {
          return <React.Fragment key={index}>{chunk}</React.Fragment>;
        }
        
        // Render alphabetic words as clickable spans
        return (
          <span
            key={index}
            onClick={(e) => translateWord(e, chunk)}
            className="cursor-pointer hover:bg-neutral-200 hover:text-black rounded px-0.5 transition-colors duration-150 inline-block"
            title="Click to translate"
          >
            {chunk}
          </span>
        );
      })}

      {/* Popover */}
      {selectedWord && createPortal(
        <div 
          onClick={(e) => e.stopPropagation()}
          className="fixed z-[99999] bg-neutral-900 text-white rounded-xl shadow-[0_20px_60px_rgba(0,0,0,0.6)] p-5 flex flex-col gap-4 w-[90vw] max-w-[360px] md:w-auto md:min-w-[260px] md:max-w-[420px] max-h-[85vh] overflow-y-auto border-2 border-neutral-700 animate-in fade-in zoom-in-95 duration-200"
          style={{
            // Position it roughly near the clicked word, but center on screen on mobile
            top: window.innerWidth < 768 ? '50%' : Math.min(selectedWord.rect.bottom + 15, window.innerHeight - 250),
            left: window.innerWidth < 768 ? '50%' : Math.max(15, Math.min(selectedWord.rect.left, window.innerWidth - 300)),
            transform: window.innerWidth < 768 ? 'translate(-50%, -50%)' : 'none'
          }}
        >
          <div className="flex justify-between items-center border-b border-neutral-700 pb-3 shrink-0">
            <span className="font-bold text-neutral-400 text-sm tracking-wide uppercase">Legal Translation</span>
            <button onClick={() => setSelectedWord(null)} className="text-neutral-400 hover:text-white transition-colors bg-neutral-800 hover:bg-neutral-700 rounded-full p-1">
              <X size={18} />
            </button>
          </div>
          
          <div className="flex items-center justify-between gap-3">
            <h4 className="text-2xl font-black">{selectedWord.word}</h4>
            <button 
              onClick={playAudio}
              className="p-2.5 rounded-full bg-neutral-800 text-neutral-300 hover:text-white hover:bg-neutral-600 transition-colors shadow-sm"
              title="Listen"
            >
              <Volume2 size={20} />
            </button>
          </div>

          <div className="mt-1 bg-neutral-800 p-4 rounded-lg text-right border border-neutral-700 shadow-inner" dir="rtl">
            {loading ? (
              <div className="flex items-center justify-center gap-3 text-neutral-400 py-2">
                <Loader2 size={20} className="animate-spin" />
                <span className="text-base font-bold">جارِ الترجمة...</span>
              </div>
            ) : error ? (
              <span className="text-red-400 text-base font-bold block text-center py-2">عذراً، فشلت الترجمة.</span>
            ) : (
              <span className="text-xl font-bold text-amber-400 block break-words whitespace-normal leading-relaxed">{translation}</span>
            )}
          </div>
        </div>,
        document.body
      )}
    </div>
  );
};
