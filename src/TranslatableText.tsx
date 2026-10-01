import React, { useState, useEffect, useMemo, useRef, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { Volume2, VolumeX, Loader2, X, Book, Scale, Copy, Check, Sparkles } from 'lucide-react';
import { playNaturalEnglishAudio, stopNaturalSpeech } from './audioUtils';
import { 
  fetchLegalTranslation, 
  lookupLocalGlossary, 
  allPhrasesListEn, 
  allPhrasesListAr,
  LegalTranslationResult 
} from './legalTranslationService';
import { lookupLexicon } from './legalLexicon';
import { translateLegalTermOffline, multiWordPhrasesEn, multiWordPhrasesAr } from './legalTranslationEngine';

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
  const [playingTerm, setPlayingTerm] = useState<string | null>(null);
  const [customSelection, setCustomSelection] = useState<{ text: string; rect: DOMRect } | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close popup on outside click and stop active speech
  useEffect(() => {
    if (!selectedTerm && !customSelection) return;
    const hide = () => {
      stopNaturalSpeech();
      setPlayingTerm(null);
      setSelectedTerm(null);
      setCustomSelection(null);
    };
    window.addEventListener('click', hide);
    return () => window.removeEventListener('click', hide);
  }, [selectedTerm, customSelection]);

  const handleToggleAudio = useCallback((termToSpeak: string) => {
    const clean = termToSpeak.trim();
    if (!clean) return;

    if (playingTerm === clean) {
      stopNaturalSpeech();
      setPlayingTerm(null);
      return;
    }

    stopNaturalSpeech();
    setPlayingTerm(clean);
    playNaturalEnglishAudio(clean, {
      onStart: () => setPlayingTerm(clean),
      onEnd: () => setPlayingTerm(null),
      onError: () => setPlayingTerm(null),
    });
  }, [playingTerm]);

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

  // Instant term click handler with persistent local cache and guaranteed offline resolution
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
    const clean = term.trim();
    if (!clean) return;

    // 1. Instant 0ms resolution via lightweight offline legal translation engine and persistent cache
    const offlineResult = translateLegalTermOffline(clean, isAr);
    const resolvedTranslation = predefinedTranslation || offlineResult.translation;

    setSelectedTerm({
      term: clean,
      localTranslation: resolvedTranslation,
      rect,
      isArabic: isAr
    });

    // Provide complete certified definition immediately: zero waiting, zero spinner, if in lexicon
    setApiResult({
      ...offlineResult,
      translation: resolvedTranslation,
    });
    
    // Only show loading state if it is not a certified lexicon match and we are online
    const needsFetch = !offlineResult.isCertified && typeof navigator !== 'undefined' && navigator.onLine;
    setIsLoadingExplanation(needsFetch);

    // 2. Background async enrichment if online and term was not certified from local corpus
    if (needsFetch) {
      fetchLegalTranslation(clean, text, isAr)
        .then((result) => {
          if (result && result.translation) {
            setApiResult(result);
          }
          setIsLoadingExplanation(false);
        })
        .catch(() => {
          setIsLoadingExplanation(false);
          // Offline result already active
        });
    }
  }, [text]);

  const handleCopy = () => {
    const textToCopy = `${selectedTerm?.term} -> ${apiResult?.translation || selectedTerm?.localTranslation}\n${apiResult?.explanation || ''}`;
    navigator.clipboard?.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Compile only unified multi-word legal expressions (containing spaces) sorted strictly longest-first
  const multiWordPhrasesToMatch = useMemo(() => {
    const phrases = isEnglish ? multiWordPhrasesEn : multiWordPhrasesAr;
    const lowerText = text.toLowerCase();
    return phrases
      .filter(p => p.trim().includes(' ') && lowerText.includes(p.toLowerCase()))
      .sort((a, b) => b.length - a.length);
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
  const contentElements = useMemo(() => {
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

    // Pass 1: Match multi-word legal expressions first (longest first) with strict word boundaries
    multiWordPhrasesToMatch.forEach((phrase) => {
      const cleanPhrase = phrase.trim();
      if (!cleanPhrase || !cleanPhrase.includes(' ')) return;

      const newNodes: (string | React.ReactNode)[] = [];
      const escaped = cleanPhrase.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      
      // Strict word boundary pattern: prevents matching inside other words
      const regex = isEnglish
        ? new RegExp(`(^|[^a-zA-Z0-9])(${escaped})($|[^a-zA-Z0-9])`, 'i')
        : new RegExp(`(^|[^\u0621-\u064A0-9])(${escaped})($|[^\u0621-\u064A0-9])`, 'i');

      contentNodes.forEach((node) => {
        if (typeof node !== 'string') {
          newNodes.push(node);
          return;
        }

        let remaining = node;
        while (remaining) {
          const match = remaining.match(regex);
          if (!match || match.index === undefined) {
            newNodes.push(remaining);
            break;
          }

          const prefixBoundary = match[1] || '';
          const matchedText = match[2];
          const suffixBoundary = match[3] || '';

          const matchStart = match.index;
          const matchedLength = match[0].length;

          const before = remaining.slice(0, matchStart) + prefixBoundary;
          if (before) newNodes.push(before);

          newNodes.push(
            <span
              key={`legal-phrase-${keyCounter++}`}
              onClick={(e) => handleTermClick(e, matchedText, '', !isEnglish)}
              className="cursor-pointer border-b border-dotted border-black/40 hover:border-black hover:bg-black/5 rounded-sm px-0.5 transition-all text-black font-semibold"
              title={isEnglish ? "ICC Certified Legal Expression - Click for context" : "تعبير قانوني معتمد - انقر لعرض الترجمة والسياق الكامل"}
            >
              {matchedText}
            </span>
          );

          remaining = suffixBoundary + remaining.slice(matchStart + matchedLength);
        }
      });

      contentNodes = newNodes;
    });

    // Pass 2: Remaining text segmented strictly into intact whole words (no chopping)
    const finalNodes: (string | React.ReactNode)[] = [];

    contentNodes.forEach((node) => {
      if (typeof node !== 'string') {
        finalNodes.push(node);
        return;
      }

      if (isEnglish) {
        const tokens = node.split(/(\s+|[.,;!?:()"'/«»\[\]\-_]+)/);
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
        const tokens = node.split(/([\s،؛.:؟!()"'/«»\[\]\-_]+)/);
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
  }, [text, isEnglish, highlightTerm, multiWordPhrasesToMatch, handleTermClick]);

  return (
    <div 
      ref={containerRef}
      onMouseUp={handleMouseUp}
      className={`relative text-neutral-800 leading-relaxed whitespace-pre-wrap text-justify selection:bg-black selection:text-white ${isEnglish ? '' : 'font-arabic'}`}
      dir={isEnglish ? 'ltr' : 'rtl'}
    >
      {contentElements}

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
            onClick={() => {
              stopNaturalSpeech();
              setPlayingTerm(null);
              setSelectedTerm(null);
            }} 
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
                onClick={() => {
                  stopNaturalSpeech();
                  setPlayingTerm(null);
                  setSelectedTerm(null);
                }}
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
                  onClick={() => handleToggleAudio(selectedTerm.term)} 
                  className={`p-2 rounded-xl transition-all shrink-0 ${
                    playingTerm === selectedTerm.term
                      ? 'bg-black text-white scale-105 shadow-sm'
                      : 'bg-neutral-100 hover:bg-neutral-200 text-black'
                  }`}
                  title={playingTerm === selectedTerm.term ? "إيقاف النطق" : "نطق المصطلح"}
                >
                  {playingTerm === selectedTerm.term ? <VolumeX size={16} /> : <Volume2 size={16} />}
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
                  {(() => {
                    const targetIsArabic = !selectedTerm.isArabic;
                    const trans = apiResult?.translation || selectedTerm.localTranslation;
                    
                    // Strict Target Language Verification:
                    // 1. If target is English (source was Arabic): translation MUST contain English letters and NOT be Arabic!
                    if (!targetIsArabic && trans && /[a-zA-Z]/.test(trans) && trans !== selectedTerm.term) {
                      return trans;
                    }
                    // 2. If target is Arabic (source was English): translation MUST contain Arabic letters and NOT be English!
                    if (targetIsArabic && trans && /[\u0600-\u06FF]/.test(trans) && trans !== selectedTerm.term) {
                      return trans;
                    }

                    // Fallback to lexicon with strict target language enforcement
                    const lex = lookupLexicon(selectedTerm.term, targetIsArabic);
                    if (lex) {
                      const candidate = targetIsArabic ? lex.ar : lex.en;
                      if (candidate && candidate !== selectedTerm.term) {
                        return candidate;
                      }
                    }

                    // Fallback to glossary with strict target language enforcement
                    const local = lookupLocalGlossary(selectedTerm.term, selectedTerm.isArabic);
                    if (local) {
                      const candidate = targetIsArabic ? local.cleanAr : local.cleanEn;
                      if (candidate && candidate !== selectedTerm.term) {
                        return candidate;
                      }
                    }

                    if (isLoadingExplanation) {
                      return (
                        <span className="text-neutral-400 font-normal text-sm animate-pulse">
                          {targetIsArabic ? 'جاري استرجاع المعنى القانوني...' : 'Translating legal term...'}
                        </span>
                      );
                    }

                    // Loading / resolving state - NEVER return Arabic for Arabic input!
                    return targetIsArabic ? 'جاري استرجاع المعنى...' : 'Translating...';
                  })()}
                </span>
                {selectedTerm.isArabic && (apiResult?.translation || selectedTerm.localTranslation) && (
                  <button 
                    onClick={() => handleToggleAudio(apiResult?.translation || selectedTerm.localTranslation)} 
                    className={`p-1.5 rounded-lg transition-all shrink-0 ${
                      playingTerm === (apiResult?.translation || selectedTerm.localTranslation)
                        ? 'bg-black text-white scale-105 shadow-sm'
                        : 'bg-neutral-200/60 hover:bg-neutral-200 text-black'
                    }`}
                    title={playingTerm === (apiResult?.translation || selectedTerm.localTranslation) ? "Stop Pronunciation" : "Pronounce English Term"}
                  >
                    {playingTerm === (apiResult?.translation || selectedTerm.localTranslation) ? <VolumeX size={15} /> : <Volume2 size={15} />}
                  </button>
                )}
              </div>

              {/* Contextual Category / Certification Subtitle */}
              <div className={`flex items-center gap-1.5 mt-0.5 ${selectedTerm.isArabic ? 'justify-start text-neutral-600' : 'justify-end text-white/80'}`}>
                <Scale size={11} />
                <span className="text-[9px] font-black uppercase tracking-widest">
                  {selectedTerm.isArabic 
                    ? (apiResult?.isCertified ? 'Rome Statute Judicial Term' : 'Legal Terminology')
                    : (apiResult?.isCertified ? 'مصطلح قانوني موثق بنظام روما' : 'القاموس القانوني للمحكمة')}
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
                <p className={`text-[12px] leading-relaxed ${selectedTerm.isArabic ? '' : 'font-arabic'}`}>
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
