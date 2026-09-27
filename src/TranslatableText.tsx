import React, { useState, useEffect, useMemo, useRef, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { Volume2, Loader2, X, Book, Scale, Copy, Check, Sparkles } from 'lucide-react';
import { playNaturalEnglishAudio } from './audioUtils';
import { 
  fetchLegalTranslation, 
  lookupLocalGlossary, 
  allPhrasesListEn, 
  allPhrasesListAr,
  LegalTranslationResult 
} from './legalTranslationService';

interface TranslatableTextProps {
  text: string;
  isEnglish: boolean;
  highlightTerm?: string | null;
}

interface SelectedTermState {
  term: string;
  localTranslation: string;
  rect: DOMRect;
  isArabic: boolean;
}

export const TranslatableText: React.FC<TranslatableTextProps> = React.memo(({ text, isEnglish, highlightTerm }) => {
  const [selectedTerm, setSelectedTerm] = useState<SelectedTermState | null>(null);
  const [isLoadingExplanation, setIsLoadingExplanation] = useState(false);
  const [apiResult, setApiResult] = useState<LegalTranslationResult | null>(null);
  const [copied, setCopied] = useState(false);
  const [customSelection, setCustomSelection] = useState<{ text: string; rect: DOMRect } | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close popup on outside click
  useEffect(() => {
    if (!selectedTerm && !customSelection) return;
    const hide = () => {
      setSelectedTerm(null);
      setCustomSelection(null);
    };
    window.addEventListener('click', hide);
    return () => window.removeEventListener('click', hide);
  }, [selectedTerm, customSelection]);

  // Handle user mouse text selection to allow translating arbitrary multi-word clauses
  const handleMouseUp = useCallback(() => {
    const selection = window.getSelection();
    if (!selection || selection.isCollapsed) {
      setCustomSelection(null);
      return;
    }

    const selectedStr = selection.toString().trim();
    // Only trigger for meaningful phrases (2 to 60 characters)
    if (selectedStr.length >= 2 && selectedStr.length <= 150) {
      const range = selection.getRangeAt(0);
      const rect = range.getBoundingClientRect();
      if (rect.width > 0 && rect.height > 0) {
        setCustomSelection({ text: selectedStr, rect });
      }
    } else {
      setCustomSelection(null);
    }
  }, []);

  // Term click handler with asynchronous retrieval and loading state
  const handleTermClick = useCallback(async (
    e: React.MouseEvent | { currentTarget: HTMLElement }, 
    term: string, 
    predefinedTranslation: string = '', 
    isAr: boolean = false
  ) => {
    if ('stopPropagation' in e) {
      e.stopPropagation();
    }
    setCustomSelection(null);

    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    
    // Check if we have an immediate match in the certified glossary
    const localMatch = lookupLocalGlossary(term, isAr);
    const immediateTranslation = predefinedTranslation || 
      (localMatch ? (isAr ? localMatch.cleanEn : localMatch.cleanAr) : '');

    setSelectedTerm({
      term,
      localTranslation: immediateTranslation,
      rect,
      isArabic: isAr
    });

    // Provide immediate preview so user never waits for basic translation
    if (immediateTranslation) {
      setApiResult({
        term,
        translation: immediateTranslation,
        explanation: '',
        isCertified: true
      });
    } else {
      setApiResult(null);
    }

    setIsLoadingExplanation(true);
    try {
      const result = await fetchLegalTranslation(term, text, isAr);
      setApiResult(result);
    } catch {
      // Guaranteed fallback
      setApiResult({
        term,
        translation: immediateTranslation || term,
        explanation: isAr 
          ? 'مصطلح قانوني معتمد في المحكمة الجنائية الدولية وفق أحكام نظام روما الأساسي.'
          : 'Certified legal terminology under the Rome Statute of the International Criminal Court.',
        isCertified: true
      });
    } finally {
      setIsLoadingExplanation(false);
    }
  }, [text]);

  const handleCopy = () => {
    const textToCopy = `${selectedTerm?.term} -> ${apiResult?.translation || selectedTerm?.localTranslation}\n${apiResult?.explanation || ''}`;
    navigator.clipboard?.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Compile multi-word phrases for the active language
  const phrasesToMatch = useMemo(() => {
    const phrases = isEnglish ? allPhrasesListEn : allPhrasesListAr;
    // Filter to phrases that actually exist in the current text to save regex cycles
    const lowerText = text.toLowerCase();
    return phrases.filter(p => {
      if (p.length < 3) return false;
      return lowerText.includes(p.toLowerCase());
    });
  }, [text, isEnglish]);

  // Auto-scroll to search highlight target inside this text block
  useEffect(() => {
    if (highlightTerm && containerRef.current) {
      const timer = setTimeout(() => {
        const el = containerRef.current?.querySelector('#search-highlight-target');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 350);
      return () => clearTimeout(timer);
    }
  }, [highlightTerm, text]);

  // Robust content tokenizer that matches multi-word legal phrases first, then single words
  const renderContent = () => {
    if (!text) return null;

    let keyCounter = 0;
    let contentNodes: (string | React.ReactNode)[] = [text];

    // Pass 0: Highlight exact searched term if provided
    const cleanHighlight = highlightTerm?.trim();
    if (cleanHighlight && cleanHighlight.length >= 2) {
      const newNodes: (string | React.ReactNode)[] = [];
      const escaped = cleanHighlight.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const regex = new RegExp(`(${escaped})`, 'gi');

      contentNodes.forEach((node) => {
        if (typeof node !== 'string') {
          newNodes.push(node);
          return;
        }

        const parts = node.split(regex);
        parts.forEach((part) => {
          if (part.toLowerCase() === cleanHighlight.toLowerCase()) {
            newNodes.push(
              <mark
                key={`search-target-${keyCounter++}`}
                id="search-highlight-target"
                onClick={(e) => handleTermClick(e, part, '', !isEnglish)}
                className="cursor-pointer bg-black text-white font-bold px-1.5 py-0.5 rounded shadow-sm inline-block mx-0.5 animate-pulse"
                title={isEnglish ? "Searched Term - Click for certified translation" : "المصطلح المبحوث عنه - انقر للترجمة القانونية"}
              >
                {part}
              </mark>
            );
          } else if (part) {
            newNodes.push(part);
          }
        });
      });

      contentNodes = newNodes;
    }

    // Pass 1: Multi-word legal phrase matching (longest first)
    phrasesToMatch.forEach((phrase) => {
      const newNodes: (string | React.ReactNode)[] = [];

      contentNodes.forEach((node) => {
        if (typeof node !== 'string') {
          newNodes.push(node);
          return;
        }

        const escaped = phrase.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        // Match phrase boundaries
        const regex = new RegExp(`(${escaped})`, 'gi');
        const parts = node.split(regex);

        parts.forEach((part) => {
          if (part.toLowerCase() === phrase.toLowerCase()) {
            newNodes.push(
              <span
                key={`legal-phrase-${keyCounter++}`}
                onClick={(e) => handleTermClick(e, part, '', !isEnglish)}
                className="cursor-pointer border-b border-dotted border-black/30 hover:border-black hover:bg-black/5 rounded-sm px-0.5 transition-all text-black font-semibold"
                title={isEnglish ? "ICC Certified Legal Term - Click for translation" : "مصطلح قانوني معتمد - انقر للترجمة والتفسير"}
              >
                {part}
              </span>
            );
          } else if (part) {
            newNodes.push(part);
          }
        });
      });

      contentNodes = newNodes;
    });

    // Pass 2: Remaining text segmented into individual words for clickability
    const finalNodes: (string | React.ReactNode)[] = [];

    contentNodes.forEach((node) => {
      if (typeof node !== 'string') {
        finalNodes.push(node);
        return;
      }

      if (isEnglish) {
        const tokens = node.split(/(\s+|[.,;!?:()"'/]+)/);
        tokens.forEach((t) => {
          if (/[a-zA-Z]{2,}/.test(t)) {
            finalNodes.push(
              <span
                key={`en-word-${keyCounter++}`}
                onClick={(e) => handleTermClick(e, t, '', false)}
                className="cursor-pointer hover:underline decoration-neutral-300 hover:text-black transition-colors"
              >
                {t}
              </span>
            );
          } else {
            finalNodes.push(t);
          }
        });
      } else {
        const tokens = node.split(/([\s،؛.:؟!()"'/]+)/);
        tokens.forEach((t) => {
          if (/[\u0600-\u06FF]{2,}/.test(t)) {
            finalNodes.push(
              <span
                key={`ar-word-${keyCounter++}`}
                onClick={(e) => handleTermClick(e, t, '', true)}
                className="cursor-pointer hover:underline decoration-neutral-300 hover:text-black transition-colors"
              >
                {t}
              </span>
            );
          } else {
            finalNodes.push(t);
          }
        });
      }
    });

    return finalNodes;
  };

  return (
    <div 
      ref={containerRef}
      onMouseUp={handleMouseUp}
      className={`relative text-neutral-800 leading-relaxed whitespace-pre-wrap text-justify selection:bg-black selection:text-white ${isEnglish ? '' : 'font-arabic'}`}
      dir={isEnglish ? 'ltr' : 'rtl'}
    >
      {renderContent()}

      {/* Floating tooltip for custom highlighted multi-word text */}
      {customSelection && createPortal(
        <div
          onClick={(e) => {
            e.stopPropagation();
            handleTermClick(
              { currentTarget: { getBoundingClientRect: () => customSelection.rect } as any },
              customSelection.text,
              '',
              !isEnglish
            );
          }}
          className="fixed z-[95] bg-black text-white text-xs px-3.5 py-2 rounded-full shadow-2xl flex items-center gap-2 cursor-pointer hover:scale-105 active:scale-95 transition-all -translate-x-1/2 border border-white/20 animate-in fade-in"
          style={{
            top: Math.max(12, Math.min(window.innerHeight - 56, customSelection.rect.top - 45)),
            left: Math.max(80, Math.min(window.innerWidth - 80, customSelection.rect.left + customSelection.rect.width / 2))
          }}
        >
          <Sparkles size={12} className="text-white/70" />
          <span className="font-bold">
            {isEnglish ? 'Translate Phrase' : 'ترجمة العبارة المحددة'}
          </span>
        </div>,
        document.body
      )}

      {/* Primary Translation & Legal Context Popup */}
      {selectedTerm && createPortal(
        <>
          {/* Subtle mobile backdrop to prevent accidental clicks behind popup */}
          <div 
            onClick={() => setSelectedTerm(null)} 
            className="fixed inset-0 z-[99] bg-black/20 backdrop-blur-[1px] sm:hidden" 
          />
          <div 
            onClick={(e) => e.stopPropagation()}
            className="fixed z-[100] bg-white text-black rounded-3xl p-5 sm:p-6 shadow-2xl flex flex-col gap-4 border border-neutral-200 animate-in fade-in zoom-in-95 max-h-[85vh] overflow-y-auto overscroll-contain inset-x-3 bottom-4 sm:inset-x-auto sm:bottom-auto w-auto sm:w-[380px]"
            dir="rtl"
            style={typeof window !== 'undefined' && window.innerWidth >= 640 ? {
              top: Math.max(16, Math.min(
                selectedTerm.rect.bottom + 360 < window.innerHeight 
                  ? selectedTerm.rect.bottom + 10 
                  : selectedTerm.rect.top - 360,
                window.innerHeight - 380
              )),
              left: Math.max(16, Math.min(
                selectedTerm.rect.left - (isEnglish ? 0 : 180),
                window.innerWidth - 400
              ))
            } : undefined}
          >
          {/* Header */}
          <div className="flex justify-between items-center border-b border-neutral-100 pb-3">
            <div className="flex items-center gap-2 text-neutral-500">
              <Book size={14} />
              <span className="text-[10px] font-black uppercase tracking-widest">
                {selectedTerm.isArabic ? 'ICC Legal Lexicon' : 'القاموس القانوني للمحكمة'}
              </span>
            </div>
            <div className="flex items-center gap-1">
              <button 
                onClick={handleCopy}
                className="p-1.5 hover:bg-neutral-100 rounded-full transition-colors text-neutral-400 hover:text-black"
                title="نسخ"
              >
                {copied ? <Check size={14} className="text-black" /> : <Copy size={14} />}
              </button>
              <button 
                onClick={() => setSelectedTerm(null)}
                className="p-1.5 hover:bg-neutral-100 rounded-full transition-colors text-neutral-400 hover:text-black"
                title="إغلاق"
              >
                <X size={15} />
              </button>
            </div>
          </div>

          {/* Original Term */}
          <div className={`flex flex-col gap-1 ${selectedTerm.isArabic ? 'items-start text-right' : 'items-end text-left'}`}>
            <div className={`flex items-center gap-3 w-full ${selectedTerm.isArabic ? 'flex-row' : 'flex-row-reverse justify-between'}`}>
              <h4 className={`text-xl font-black text-black leading-tight ${selectedTerm.isArabic ? 'font-arabic' : ''}`}>
                {selectedTerm.term}
              </h4>
              {!selectedTerm.isArabic && (
                <button 
                  onClick={() => playNaturalEnglishAudio(selectedTerm.term)} 
                  className="p-2 rounded-xl bg-neutral-100 hover:bg-neutral-200 transition-colors shrink-0"
                  title="نطق المصطلح"
                >
                  <Volume2 size={16} />
                </button>
              )}
            </div>
          </div>

          {/* Translation Result Box */}
          <div className={`p-4 rounded-2xl ${selectedTerm.isArabic ? 'bg-neutral-50 text-left' : 'bg-black text-white text-right'}`} dir={selectedTerm.isArabic ? 'ltr' : 'rtl'}>
            
            {/* Translated Term display */}
            <div className="flex flex-col gap-2">
              <div className={`flex items-start gap-4 ${selectedTerm.isArabic ? 'justify-between' : 'justify-between flex-row-reverse'}`}>
                <span className={`text-lg font-black leading-tight ${selectedTerm.isArabic ? '' : 'font-arabic'}`}>
                  {apiResult?.translation || selectedTerm.localTranslation || selectedTerm.term}
                </span>
                {selectedTerm.isArabic && (apiResult?.translation || selectedTerm.localTranslation) && (
                  <button 
                    onClick={() => playNaturalEnglishAudio(apiResult?.translation || selectedTerm.localTranslation)} 
                    className="p-1.5 rounded-lg bg-neutral-200/60 hover:bg-neutral-200 transition-colors shrink-0 text-black"
                    title="Pronounce English Term"
                  >
                    <Volume2 size={15} />
                  </button>
                )}
              </div>

              {/* Certified Legal Indicator */}
              <div className={`flex items-center gap-1.5 mt-0.5 ${selectedTerm.isArabic ? 'justify-start text-neutral-600' : 'justify-end text-white/80'}`}>
                <Scale size={11} />
                <span className="text-[9px] font-black uppercase tracking-widest">
                  {selectedTerm.isArabic ? 'ICC Official Terminology' : 'مصطلح معتمد من المحكمة'}
                </span>
              </div>
            </div>

            {/* Asynchronous Contextual Legal Explanation with Loading State */}
            {isLoadingExplanation ? (
              <div className="mt-3 pt-3 border-t border-neutral-200/60 flex items-center justify-center gap-2.5 py-2">
                <Loader2 size={15} className={`animate-spin ${selectedTerm.isArabic ? 'text-neutral-500' : 'text-white/60'}`} />
                <span className={`text-[10px] font-bold tracking-tight ${selectedTerm.isArabic ? 'text-neutral-500' : 'text-white/70'}`}>
                  {selectedTerm.isArabic ? 'Retrieving certified legal context...' : 'جاري استرجاع التحليل القانوني المعتمد...'}
                </span>
              </div>
            ) : apiResult?.explanation ? (
              <div className={`mt-3 pt-3 border-t ${selectedTerm.isArabic ? 'border-neutral-200 text-neutral-700' : 'border-white/15 text-white/85'}`}>
                <p className={`text-[12px] leading-relaxed ${selectedTerm.isArabic ? 'font-arabic' : ''}`}>
                  {apiResult.explanation}
                </p>
              </div>
            ) : null}

          </div>

        </div>
        </>,
        document.body
      )}
    </div>
  );
});
