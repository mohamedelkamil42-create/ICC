import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, 
  X, 
  FileText, 
  Folder, 
  BookOpen, 
  Sparkles, 
  Volume2, 
  ChevronRight,
  ChevronLeft,
  Loader2,
  CornerDownLeft,
  Flame
} from 'lucide-react';
import { DrawerItem } from './types';
import { 
  buildSearchIndex, 
  performSmartSearch, 
  SearchResultItem, 
  SearchCategory 
} from './searchUtils';

interface SmartSearchBarProps {
  libraryData: DrawerItem[];
  language: 'ar' | 'en';
  onNavigateToItem: (parentPath: DrawerItem[], drawerId: string) => void;
}

export const SmartSearchBar: React.FC<SmartSearchBarProps> = ({
  libraryData,
  language,
  onNavigateToItem,
}) => {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [category, setCategory] = useState<SearchCategory>('all');
  const [aiAnswer, setAiAnswer] = useState<string | null>(null);
  const [isLoadingAi, setIsLoadingAi] = useState(false);
  const [hasAskedAi, setHasAskedAi] = useState(false);
  const [playingTerm, setPlayingTerm] = useState<string | null>(null);

  const inputRef = useRef<HTMLInputElement>(null);

  const isRTL = language === 'ar';

  // Build searchable index when libraryData or language changes
  const searchIndex = useMemo(() => {
    return buildSearchIndex(libraryData, language);
  }, [libraryData, language]);

  // Compute search results
  const results = useMemo(() => {
    return performSmartSearch(searchIndex, query, category);
  }, [searchIndex, query, category]);

  // Category counts
  const allResultsCount = useMemo(() => {
    return performSmartSearch(searchIndex, query, 'all').length;
  }, [searchIndex, query]);

  const docResultsCount = useMemo(() => {
    return performSmartSearch(searchIndex, query, 'documents').length;
  }, [searchIndex, query]);

  const termResultsCount = useMemo(() => {
    return performSmartSearch(searchIndex, query, 'terms').length;
  }, [searchIndex, query]);

  // Quick suggestions for instant search
  const quickSuggestions = isRTL ? [
    { label: 'نظام روما الأساسي', q: 'نظام روما' },
    { label: 'أركان الجرائم', q: 'اركان الجرائم' },
    { label: 'جرائم الحرب', q: 'جرائم حرب' },
    { label: 'قيد المحامين', q: 'المحامين' },
    { label: 'المساعدة القانونية', q: 'المساعدة القانونية' },
    { label: 'الاختصاص القضائي', q: 'الاختصاص' },
  ] : [
    { label: 'Rome Statute', q: 'Rome Statute' },
    { label: 'Elements of Crimes', q: 'Elements' },
    { label: 'War Crimes', q: 'War Crimes' },
    { label: 'Counsel Registration', q: 'Counsel' },
    { label: 'Legal Assistance', q: 'Legal Assistance' },
    { label: 'Jurisdiction', q: 'Jurisdiction' },
  ];

  // Auto-focus input when modal opens
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Keyboard shortcut Ctrl+K or / to open/close
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      } else if (e.key === 'Escape' && isOpen) {
        e.preventDefault();
        setIsOpen(false);
      }
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Reset AI answer when query changes
  useEffect(() => {
    setAiAnswer(null);
    setHasAskedAi(false);
  }, [query]);

  // Handle AI Smart Search
  const handleAskAi = async () => {
    if (!query.trim() || isLoadingAi) return;
    setIsLoadingAi(true);
    setHasAskedAi(true);

    try {
      const res = await fetch('/api/smart-search', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: query.trim(), language }),
      });

      if (!res.ok) {
        throw new Error('AI search request failed');
      }

      const data = await res.json();
      setAiAnswer(data.answer || null);
    } catch (err) {
      console.warn('AI search error:', err);
      setAiAnswer(isRTL 
        ? 'تعذر الوصول لخدمة الذكاء الاصطناعي حالياً، يرجى مراجعة نتائج الوثائق والمصطلحات المباشرة أدناه.' 
        : 'Smart search is temporarily unavailable. Please check the direct document and term results below.');
    } finally {
      setIsLoadingAi(false);
    }
  };

  // Play audio pronunciation for terms
  const handlePlayTermAudio = (enText: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (!('speechSynthesis' in window)) return;
    
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(enText);
    utterance.lang = 'en-US';
    utterance.rate = 0.95;

    const voices = window.speechSynthesis.getVoices();
    const englishVoice = voices.find(v => 
      v.lang.startsWith('en') && 
      (v.name.includes('Natural') || v.name.includes('Google') || v.name.includes('Samantha'))
    ) || voices.find(v => v.lang.startsWith('en'));

    if (englishVoice) {
      utterance.voice = englishVoice;
    }

    utterance.onstart = () => setPlayingTerm(enText);
    utterance.onend = () => setPlayingTerm(null);
    utterance.onerror = () => setPlayingTerm(null);

    setPlayingTerm(enText);
    window.speechSynthesis.speak(utterance);
  };

  const handleSelectResult = (item: SearchResultItem) => {
    if (item.type === 'document' || item.type === 'folder') {
      onNavigateToItem(item.parentPath || [], item.drawerIdToOpen || item.id);
      setIsOpen(false);
    } else if (item.type === 'glossary_term' && item.sectionId) {
      const glossaryFolder = libraryData.find(d => d.id === '8');
      if (glossaryFolder) {
        onNavigateToItem([glossaryFolder], item.sectionId);
        setIsOpen(false);
      }
    }
  };

  const t = {
    triggerButton: isRTL ? 'بحث في المرجع والمصطلحات...' : 'Search reference & terms...',
    modalPlaceholder: isRTL 
      ? 'ابحث في الوثائق، القوانين، وأكثر من 1000 مصطلح قانوني...' 
      : 'Search documents, statutes, and 1000+ legal terms...',
    all: isRTL ? 'الكل' : 'All',
    documents: isRTL ? 'الوثائق والأنظمة' : 'Documents & Laws',
    terms: isRTL ? 'المصطلحات' : 'Glossary Terms',
    askAiBtn: isRTL ? 'إجابة ذكية بالذكاء الاصطناعي' : 'AI Smart Answer',
    aiHeading: isRTL ? 'إجابة ذكية من واقع وثائق المحكمة' : 'Smart Legal Insight (ICC Documents)',
    noResults: isRTL ? 'لم يتم العثور على نتائج تطابق بحثك' : 'No matching results found',
    noResultsHint: isRTL 
      ? 'جرب البحث بكلمات أخرى أو اضغط على زر الإجابة الذكية.' 
      : 'Try different keywords or click the AI Smart Answer button.',
    openDoc: isRTL ? 'فتح الوثيقة' : 'Open document',
    openSection: isRTL ? 'عرض في المسرد' : 'View in glossary',
    quickTopics: isRTL ? 'موضوعات شائعة مقترحة' : 'Popular Topics',
    escHint: isRTL ? 'إغلاق' : 'Close',
  };

  return (
    <>
      {/* 1. Smart Top Bar Search Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="w-full h-10 sm:h-11 px-3.5 sm:px-4 bg-white hover:bg-neutral-100 active:scale-95 border border-neutral-300 rounded-full shadow-sm hover:shadow transition-all flex items-center justify-between gap-2.5 text-neutral-800 text-xs sm:text-sm font-semibold group cursor-pointer"
        title="فتح البحث الذكي (Ctrl+K)"
        dir={isRTL ? 'rtl' : 'ltr'}
      >
        <div className="flex items-center gap-2.5 overflow-hidden flex-1 min-w-0">
          <Search size={16} className="text-neutral-500 group-hover:text-black shrink-0 transition-colors" />
          <span className="text-neutral-500 group-hover:text-neutral-900 truncate font-normal select-none">
            {t.triggerButton}
          </span>
        </div>

        <div className="flex items-center gap-1.5 shrink-0">
          <kbd className="hidden sm:inline-flex items-center px-2 py-0.5 text-[10px] font-mono text-neutral-400 bg-neutral-100 rounded border border-neutral-200">
            Ctrl K
          </kbd>
          <Sparkles size={14} className="text-neutral-400 group-hover:text-neutral-800 transition-colors" />
        </div>
      </button>

      {/* 2. Smart Spotlight Search Modal (Command Palette Style) */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[100] flex items-start justify-center p-3 sm:p-4 md:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-neutral-950/50 backdrop-blur-sm transition-opacity"
            />

            {/* Modal Dialog Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: -16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: -16 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="relative w-full max-w-2xl bg-white border border-neutral-200 rounded-3xl shadow-2xl overflow-hidden mt-6 sm:mt-12 md:mt-16 flex flex-col z-10 max-h-[85vh]"
              dir={isRTL ? 'rtl' : 'ltr'}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Top Search Bar Header */}
              <div className="flex items-center px-4 sm:px-5 py-3.5 sm:py-4 border-b border-neutral-200 bg-white gap-3">
                <Search size={22} className="text-neutral-400 shrink-0" />
                
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder={t.modalPlaceholder}
                  className="w-full bg-transparent text-sm sm:text-base md:text-lg text-neutral-900 placeholder-neutral-400 focus:outline-none leading-normal font-sans py-1"
                  dir={isRTL ? 'rtl' : 'ltr'}
                />

                {query ? (
                  <button
                    type="button"
                    onClick={() => {
                      setQuery('');
                      inputRef.current?.focus();
                    }}
                    className="p-1.5 rounded-full hover:bg-neutral-100 text-neutral-400 hover:text-neutral-700 transition"
                    title="مسح النص"
                  >
                    <X size={18} />
                  </button>
                ) : null}

                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="px-2.5 py-1 text-xs font-semibold text-neutral-500 hover:text-neutral-900 bg-neutral-100 hover:bg-neutral-200 rounded-lg border border-neutral-200 transition shrink-0 hidden sm:inline-flex items-center gap-1"
                >
                  <span>Esc</span>
                </button>
              </div>

              {/* Sub-bar: Category Filter Chips & AI Button */}
              <div className="px-4 sm:px-5 py-2.5 border-b border-neutral-100 bg-neutral-50/80 flex flex-wrap items-center justify-between gap-2 text-xs font-semibold">
                <div className="flex items-center gap-1.5 overflow-x-auto py-0.5">
                  <button
                    type="button"
                    onClick={() => setCategory('all')}
                    className={`px-3 py-1.5 rounded-full transition-colors whitespace-nowrap ${
                      category === 'all'
                        ? 'bg-neutral-900 text-white shadow-sm'
                        : 'bg-white border border-neutral-200 text-neutral-600 hover:bg-neutral-100'
                    }`}
                  >
                    {t.all} {query ? `(${allResultsCount})` : ''}
                  </button>

                  <button
                    type="button"
                    onClick={() => setCategory('documents')}
                    className={`px-3 py-1.5 rounded-full transition-colors whitespace-nowrap flex items-center gap-1.5 ${
                      category === 'documents'
                        ? 'bg-neutral-900 text-white shadow-sm'
                        : 'bg-white border border-neutral-200 text-neutral-600 hover:bg-neutral-100'
                    }`}
                  >
                    <FileText size={13} />
                    {t.documents} {query ? `(${docResultsCount})` : ''}
                  </button>

                  <button
                    type="button"
                    onClick={() => setCategory('terms')}
                    className={`px-3 py-1.5 rounded-full transition-colors whitespace-nowrap flex items-center gap-1.5 ${
                      category === 'terms'
                        ? 'bg-neutral-900 text-white shadow-sm'
                        : 'bg-white border border-neutral-200 text-neutral-600 hover:bg-neutral-100'
                    }`}
                  >
                    <BookOpen size={13} />
                    {t.terms} {query ? `(${termResultsCount})` : ''}
                  </button>
                </div>

                {/* AI Assistant Action Button */}
                {query.trim().length > 1 && (
                  <button
                    type="button"
                    onClick={handleAskAi}
                    disabled={isLoadingAi}
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-neutral-900 hover:bg-neutral-800 active:scale-95 text-white rounded-full text-xs font-bold transition shadow-sm ml-auto disabled:opacity-50"
                  >
                    {isLoadingAi ? (
                      <Loader2 size={13} className="animate-spin" />
                    ) : (
                      <Sparkles size={13} />
                    )}
                    <span>{t.askAiBtn}</span>
                  </button>
                )}
              </div>

              {/* AI Smart Answer Panel */}
              {(isLoadingAi || aiAnswer) && (
                <div className="p-4 sm:p-5 bg-neutral-100 border-b border-neutral-200">
                  <div className="flex items-center gap-2 mb-2 text-neutral-900 font-bold text-xs uppercase tracking-wider">
                    <Sparkles size={15} />
                    <span>{t.aiHeading}</span>
                  </div>
                  {isLoadingAi ? (
                    <div className="flex items-center gap-3 py-2 text-neutral-600 text-sm font-sans">
                      <Loader2 size={18} className="animate-spin text-neutral-900" />
                      <span>{isRTL ? 'جاري استخراج الإجابة الذكية من وثائق المحكمة...' : 'Retrieving legal guidance from ICC texts...'}</span>
                    </div>
                  ) : (
                    <p className="text-neutral-900 text-sm sm:text-base leading-relaxed font-sans whitespace-pre-line">
                      {aiAnswer}
                    </p>
                  )}
                </div>
              )}

              {/* Body Content */}
              <div className="overflow-y-auto p-3 sm:p-4 flex flex-col gap-2 divide-y divide-neutral-100">
                {/* When Query is Empty: Show Quick Topics */}
                {!query.trim() && (
                  <div className="py-4 px-2">
                    <div className="flex items-center gap-2 text-xs font-bold text-neutral-400 uppercase tracking-wider mb-3">
                      <Flame size={14} className="text-neutral-500" />
                      <span>{t.quickTopics}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {quickSuggestions.map((topic, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => {
                            setQuery(topic.q);
                            inputRef.current?.focus();
                          }}
                          className="px-3.5 py-2 bg-neutral-100 hover:bg-neutral-200 text-neutral-800 rounded-full text-xs sm:text-sm font-semibold transition active:scale-95 border border-neutral-200 shadow-sm"
                        >
                          {topic.label}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* When Query is Present but No Results */}
                {query.trim() && results.length === 0 && !isLoadingAi && (
                  <div className="py-10 text-center px-4">
                    <p className="font-bold text-neutral-800 text-base mb-1">{t.noResults}</p>
                    <p className="text-neutral-500 text-xs sm:text-sm mb-5">{t.noResultsHint}</p>
                    {!hasAskedAi && (
                      <button
                        type="button"
                        onClick={handleAskAi}
                        className="inline-flex items-center gap-2 px-4 py-2.5 bg-neutral-900 text-white rounded-full text-xs sm:text-sm font-bold hover:bg-neutral-800 transition shadow-sm active:scale-95"
                      >
                        <Sparkles size={15} />
                        {t.askAiBtn}
                      </button>
                    )}
                  </div>
                )}

                {/* Results List */}
                {query.trim() && results.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => handleSelectResult(item)}
                    className="p-3 rounded-2xl hover:bg-neutral-100 transition-colors cursor-pointer group flex items-start justify-between gap-3 text-right"
                  >
                    <div className="flex items-start gap-3 flex-1 min-w-0">
                      <div className="p-2.5 rounded-xl bg-neutral-100 group-hover:bg-neutral-200 text-neutral-800 shrink-0 mt-0.5 transition-colors">
                        {item.type === 'glossary_term' ? (
                          <BookOpen size={18} />
                        ) : item.type === 'folder' ? (
                          <Folder size={18} />
                        ) : (
                          <FileText size={18} />
                        )}
                      </div>

                      <div className="flex-1 min-w-0">
                        {item.subtitle && (
                          <div className="text-[11px] text-neutral-400 font-semibold truncate mb-0.5">
                            {item.subtitle}
                          </div>
                        )}

                        <div className="font-bold text-neutral-900 text-sm sm:text-base leading-snug">
                          {item.title}
                        </div>

                        {item.type === 'glossary_term' && (
                          <div className="text-xs sm:text-sm text-neutral-600 mt-1 font-sans flex items-center gap-2" dir="ltr">
                            <span className="font-semibold text-neutral-900">{item.enTerm}</span>
                            <span className="text-neutral-300">•</span>
                            <span className="text-neutral-600" dir="rtl">{item.arTerm}</span>
                          </div>
                        )}

                        {item.contentSnippet && (
                          <p className="text-xs sm:text-sm text-neutral-500 line-clamp-2 mt-1 leading-relaxed">
                            {item.contentSnippet}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="shrink-0 flex items-center gap-2 self-center">
                      {item.type === 'glossary_term' && item.enTerm && (
                        <button
                          type="button"
                          onClick={(e) => handlePlayTermAudio(item.enTerm!, e)}
                          className={`p-2 rounded-full border transition-all ${
                            playingTerm === item.enTerm
                              ? 'bg-neutral-900 text-white border-black scale-105 shadow-sm'
                              : 'bg-white text-neutral-600 border-neutral-200 hover:text-black hover:bg-neutral-50'
                          }`}
                          title="استمع للنطق الإنجليزي"
                        >
                          <Volume2 size={16} className={playingTerm === item.enTerm ? 'animate-pulse' : ''} />
                        </button>
                      )}

                      <div className="hidden sm:flex items-center text-xs font-bold text-neutral-400 group-hover:text-neutral-900 transition-colors">
                        <span>{item.type === 'glossary_term' ? t.openSection : t.openDoc}</span>
                        {isRTL ? <ChevronLeft size={16} className="mr-1" /> : <ChevronRight size={16} className="ml-1" />}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Modal Footer */}
              <div className="px-4 py-2.5 bg-neutral-50 border-t border-neutral-100 flex items-center justify-between text-[11px] text-neutral-400 font-medium">
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1">
                    <kbd className="px-1.5 py-0.5 bg-white border border-neutral-200 rounded text-neutral-600 font-mono">↵</kbd>
                    <span>{isRTL ? 'للاختيار' : 'to select'}</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <kbd className="px-1.5 py-0.5 bg-white border border-neutral-200 rounded text-neutral-600 font-mono">Esc</kbd>
                    <span>{t.escHint}</span>
                  </span>
                </div>

                <div className="flex items-center gap-1 text-neutral-500 font-semibold">
                  <Sparkles size={12} />
                  <span>{isRTL ? 'بحث ذكي وفوري' : 'Instant smart search'}</span>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
