import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Volume2, Loader2, X } from 'lucide-react';
import { playNaturalEnglishAudio } from './audioUtils';

interface TranslatableTextProps {
  text: string;
  isEnglish: boolean;
}

export const TranslatableText: React.FC<TranslatableTextProps> = ({ text, isEnglish }) => {
  const [selectedWord, setSelectedWord] = useState<{ word: string, rect: DOMRect } | null>(null);
  const [translation, setTranslation] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!selectedWord) return;
    const hide = () => setSelectedWord(null);
    window.addEventListener('click', hide);
    return () => window.removeEventListener('click', hide);
  }, [selectedWord]);

  const translate = async (e: React.MouseEvent, word: string) => {
    e.stopPropagation();
    const clean = word.replace(/[^\w\s]|_/g, "").trim();
    if (!clean) return;

    setSelectedWord({ word: clean, rect: (e.target as HTMLElement).getBoundingClientRect() });
    setLoading(true);
    setTranslation(null);

    try {
      const res = await fetch('/api/translate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ word: clean, context: text.substring(0, 100) })
      });
      const data = await res.json();
      setTranslation(data.translation || 'تعذر العثور على ترجمة');
    } catch {
      setTranslation('خطأ في الاتصال');
    } finally {
      setLoading(false);
    }
  };

  if (!isEnglish) return <p className="text-neutral-800 text-lg leading-relaxed whitespace-pre-wrap text-justify">{text}</p>;

  const words = text.split(/(\s+)/);

  return (
    <div className="relative text-neutral-800 text-lg leading-relaxed whitespace-pre-wrap text-justify" dir="ltr">
      {words.map((w, i) => (
        /\w+/.test(w) ? (
          <span key={i} onClick={(e) => translate(e, w)} className="cursor-pointer hover:bg-neutral-200 rounded px-0.5 transition-colors">
            {w}
          </span>
        ) : <React.Fragment key={i}>{w}</React.Fragment>
      ))}

      {selectedWord && createPortal(
        <div 
          onClick={(e) => e.stopPropagation()}
          className="fixed z-[100] bg-black text-white rounded-2xl p-5 shadow-2xl flex flex-col gap-3 min-w-[240px] max-w-[320px] border border-neutral-800 animate-in fade-in zoom-in-95"
          style={{
            top: Math.min(selectedWord.rect.bottom + 10, window.innerHeight - 200),
            left: Math.max(10, Math.min(selectedWord.rect.left, window.innerWidth - 250))
          }}
        >
          <div className="flex justify-between items-center border-b border-neutral-800 pb-2">
            <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest">Translation</span>
            <button onClick={() => setSelectedWord(null)}><X size={16} /></button>
          </div>
          <div className="flex items-center justify-between gap-2">
            <h4 className="text-xl font-black truncate">{selectedWord.word}</h4>
            <button onClick={() => playNaturalEnglishAudio(selectedWord.word)} className="p-1.5 rounded-full bg-neutral-800 hover:bg-neutral-700"><Volume2 size={16} /></button>
          </div>
          <div className="bg-neutral-900 p-3 rounded-xl text-right" dir="rtl">
            {loading ? <Loader2 size={16} className="animate-spin mx-auto text-neutral-500" /> : <span className="text-lg font-bold text-amber-400">{translation}</span>}
          </div>
        </div>,
        document.body
      )}
    </div>
  );
};
