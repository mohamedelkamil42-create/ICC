import React, { useState, useEffect, useMemo } from 'react';
import { createPortal } from 'react-dom';
import { Volume2, Loader2, X, Search, Book, Scale } from 'lucide-react';
import { playNaturalEnglishAudio } from './audioUtils';
import glossaryData from './glossaryData.json';

interface TranslatableTextProps {
  text: string;
  isEnglish: boolean;
}

interface GlossaryTerm {
  en: string;
  ar: string;
  defEn?: string;
  defAr?: string;
}

export const TranslatableText: React.FC<TranslatableTextProps> = ({ text, isEnglish }) => {
  const [selectedTerm, setSelectedTerm] = useState<{ term: string, translation: string, rect: DOMRect, isArabic: boolean } | null>(null);
  const [loading, setLoading] = useState(false);
  const [apiResult, setApiResult] = useState<{ translation: string, explanation: string } | null>(null);
  const [translationCache, setTranslationCache] = useState<Record<string, { translation: string, explanation: string }>>({});

  // Flatten and prepare glossary for fast lookup
  const glossaryTerms = useMemo(() => {
    const terms: GlossaryTerm[] = [];
    glossaryData.forEach((cat: any) => {
      cat.terms.forEach((t: any) => {
        terms.push(t);
      });
    });
    // Sort by length descending to match longest phrases first
    return terms.sort((a, b) => b.en.length - a.en.length);
  }, []);

  useEffect(() => {
    if (!selectedTerm) return;
    const hide = () => setSelectedTerm(null);
    window.addEventListener('click', hide);
    return () => window.removeEventListener('click', hide);
  }, [selectedTerm]);

  const handleTermClick = async (e: React.MouseEvent, term: string, translation: string, isAr: boolean) => {
    e.stopPropagation();
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    setSelectedTerm({ term, translation, rect, isArabic: isAr });
    setApiResult(null);
    
    // If we have a direct glossary match, we still might want an AI explanation for context
    // but we can prioritize the local translation
    
    const cacheKey = `${term}-${isAr ? 'ar' : 'en'}`;
    if (translationCache[cacheKey]) {
      setApiResult(translationCache[cacheKey]);
      return;
    }

    setLoading(true);
    try {
      const res = await fetch('/api/translate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          word: term, 
          context: text, // Pass full context for better accuracy
          language: isAr ? 'en' : 'ar' // Translate to the other language
        })
      });
      const data = await res.json();
      const result = {
        translation: data.translation || translation || (isAr ? 'Translation unavailable' : 'تعذر العثور على ترجمة'),
        explanation: data.explanation || ''
      };
      setApiResult(result);
      setTranslationCache(prev => ({ ...prev, [cacheKey]: result }));
    } catch {
      setApiResult({ 
        translation: isAr ? 'Error' : 'خطأ في الاتصال',
        explanation: ''
      });
    } finally {
      setLoading(false);
    }
  };

  const renderContent = () => {
    if (!text) return null;

    let keyCounter = 0;
    // Use a more sophisticated approach: scan for glossary phrases
    let content: (string | React.ReactNode)[] = [text];

    const currentGlossary = isEnglish 
      ? glossaryTerms.filter(t => t.en.length > 3) // Min 3 chars to avoid noisy matches
      : glossaryTerms.filter(t => t.ar && t.ar.length > 3);

    // Apply phrase matching
    currentGlossary.forEach((item) => {
      const termToMatch = isEnglish ? item.en : item.ar;
      const translation = isEnglish ? item.ar : item.en;
      
      if (!termToMatch) return;

      const newContent: (string | React.ReactNode)[] = [];
      content.forEach((node) => {
        if (typeof node !== 'string') {
          newContent.push(node);
          return;
        }

        // Escape regex special chars
        const escaped = termToMatch.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const regex = new RegExp(`(${escaped})`, 'gi');
        const parts = node.split(regex);

        parts.forEach((part) => {
          if (part.toLowerCase() === termToMatch.toLowerCase()) {
            newContent.push(
              <span
                key={`term-${keyCounter++}`}
                onClick={(e) => handleTermClick(e, part, translation, !isEnglish)}
                className="cursor-pointer border-b border-dotted border-black/20 hover:bg-black/5 hover:border-black transition-all px-0.5"
                title={translation}
              >
                {part}
              </span>
            );
          } else if (part) {
            newContent.push(part);
          }
        });
      });
      content = newContent;
    });

    // Final pass for individual words if it's English (to allow clicking anything)
    if (isEnglish) {
      const finalContent: (string | React.ReactNode)[] = [];
      content.forEach((node) => {
        if (typeof node !== 'string') {
          finalContent.push(node);
          return;
        }

        const words = node.split(/(\s+)/);
        words.forEach((w) => {
          if (/\w+/.test(w)) {
            finalContent.push(
              <span
                key={`word-${keyCounter++}`}
                onClick={(e) => handleTermClick(e, w, '', false)}
                className="cursor-pointer hover:underline decoration-neutral-300"
              >
                {w}
              </span>
            );
          } else {
            finalContent.push(w);
          }
        });
      });
      return finalContent;
    }

    // For Arabic, we also want to allow individual word clicks for non-glossary words
    const arabicWordsContent: (string | React.ReactNode)[] = [];
    content.forEach((node) => {
      if (typeof node !== 'string') {
        arabicWordsContent.push(node);
        return;
      }

      // Match individual Arabic words
      const words = node.split(/([\s،؛.:؟!]+)/);
      words.forEach((w) => {
        if (/[\u0600-\u06FF]+/.test(w)) {
          arabicWordsContent.push(
            <span
              key={`ar-word-${keyCounter++}`}
              onClick={(e) => handleTermClick(e, w, '', true)}
              className="cursor-pointer hover:underline decoration-neutral-300"
            >
              {w}
            </span>
          );
        } else {
          arabicWordsContent.push(w);
        }
      });
    });

    return arabicWordsContent;
  };

  return (
    <div 
      className={`relative text-neutral-800 leading-relaxed whitespace-pre-wrap text-justify ${isEnglish ? '' : 'font-arabic'}`}
      dir={isEnglish ? 'ltr' : 'rtl'}
    >
      {renderContent()}

      {selectedTerm && createPortal(
        <div 
          onClick={(e) => e.stopPropagation()}
          className="fixed z-[100] bg-white text-black rounded-3xl p-6 shadow-2xl flex flex-col gap-4 min-w-[280px] max-w-[360px] border border-neutral-100 animate-in fade-in zoom-in-95"
          dir="rtl"
          style={{
            top: Math.min(selectedTerm.rect.bottom + 15, window.innerHeight - 250),
            left: Math.max(20, Math.min(selectedTerm.rect.left, window.innerWidth - 300))
          }}
        >
          <div className="flex justify-between items-center border-b border-neutral-50 pb-3">
            <div className="flex items-center gap-2 text-neutral-400">
              <Book size={14} />
              <span className="text-[10px] font-black uppercase tracking-widest">
                {selectedTerm.isArabic ? 'Legal Dictionary' : 'القاموس القانوني'}
              </span>
            </div>
            <button 
              onClick={() => setSelectedTerm(null)}
              className="p-1 hover:bg-neutral-50 rounded-full transition-colors"
            >
              <X size={16} />
            </button>
          </div>

          <div className={`flex flex-col gap-1 ${selectedTerm.isArabic ? 'items-start' : 'items-end'}`}>
            <div className={`flex items-center gap-3 ${selectedTerm.isArabic ? 'flex-row' : 'flex-row-reverse'}`}>
              <h4 className={`text-xl font-black ${selectedTerm.isArabic ? 'font-arabic text-right' : 'text-left'}`}>
                {selectedTerm.term}
              </h4>
              {!selectedTerm.isArabic && (
                <button 
                  onClick={() => playNaturalEnglishAudio(selectedTerm.term)} 
                  className="p-2 rounded-xl bg-neutral-100 hover:bg-neutral-200 transition-colors"
                  title="Pronounce"
                >
                  <Volume2 size={16} />
                </button>
              )}
            </div>
          </div>

          <div className={`p-4 rounded-2xl ${selectedTerm.isArabic ? 'bg-neutral-50 text-left' : 'bg-black text-white text-right'}`} dir={selectedTerm.isArabic ? 'ltr' : 'rtl'}>
            {loading ? (
              <div className="py-4 flex flex-col items-center gap-3">
                <Loader2 size={24} className="animate-spin text-neutral-400" />
                <div className="flex flex-col items-center gap-1">
                  <span className="text-[10px] font-black uppercase text-neutral-400 tracking-tighter">تحليل سياقي ذكي...</span>
                  <span className="text-[9px] text-neutral-300 uppercase">Contextual Legal Analysis...</span>
                </div>
              </div>
            ) : (
              <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-1">
                  <div className={`flex items-start gap-4 ${selectedTerm.isArabic ? 'justify-between' : 'justify-between flex-row-reverse'}`}>
                    <span className={`text-lg font-black leading-tight ${selectedTerm.isArabic ? '' : 'font-arabic'}`}>
                      {apiResult?.translation || selectedTerm.translation}
                    </span>
                    {selectedTerm.isArabic && (apiResult?.translation || selectedTerm.translation) && (
                      <button 
                        onClick={() => playNaturalEnglishAudio(apiResult?.translation || selectedTerm.translation || '')} 
                        className="p-1.5 rounded-lg bg-neutral-200/50 hover:bg-neutral-200 transition-colors shrink-0"
                        title="Listen to English Pronunciation"
                      >
                        <Volume2 size={14} />
                      </button>
                    )}
                  </div>
                  {(selectedTerm.translation || apiResult?.translation) && (
                    <div className={`flex items-center gap-1.5 mt-1 opacity-50 ${selectedTerm.isArabic ? 'justify-start' : 'justify-end'}`}>
                      <Scale size={10} />
                      <span className="text-[9px] font-bold uppercase tracking-tight">
                        {selectedTerm.isArabic ? 'Verified Legal Term' : 'مصطلح قانوني معتمد'}
                      </span>
                    </div>
                  )}
                </div>

                {apiResult?.explanation && (
                  <div className={`mt-2 pt-3 border-t ${selectedTerm.isArabic ? 'border-neutral-200 text-neutral-600' : 'border-white/10 text-white/70'}`}>
                    <p className={`text-[12px] leading-relaxed italic ${selectedTerm.isArabic ? 'font-arabic' : ''}`}>
                      {apiResult.explanation}
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
          

        </div>,
        document.body
      )}
    </div>
  );
};
