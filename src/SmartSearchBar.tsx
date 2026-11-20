import React, { useState, useEffect, useRef, useMemo, useDeferredValue, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Search,
  X,
  FileText,
  BookOpen,
  Sparkles,
  Volume2,
  ArrowRight,
  ArrowLeft,
  Loader2,
  BookMarked,
  Scale,
  CornerDownLeft,
} from 'lucide-react';
import { DrawerItem, Language } from './types';
import {
  buildSearchIndex,
  performSmartSearch,
  normalizeSearchText,
  SearchResultItem,
  SearchCategory,
} from './searchUtils';
import { playNaturalEnglishAudio } from './audioUtils';
import { getRecentlySearchedTerms } from './dictionaryCache';

interface SmartSearchBarProps {
  libraryData: DrawerItem[];
  language: Language;
  onNavigateToItem: (parentPath: DrawerItem[], drawerId: string, artId?: string, searchTerm?: string) => void;
  scrolled?: boolean;
}

interface SearchResultRowProps {
  item: SearchResultItem;
  query: string;
  isRTL: boolean;
  isActive: boolean;
  onHover: () => void;
  onNavigate: (parentPath: DrawerItem[], id: string, artId?: string, searchTerm?: string) => void;
}

const HighlightedText: React.FC<{ text?: string; query: string }> = ({ text, query }) => {
  if (!text) return null;
  const q = query.trim();
  if (!q || q.length < 2) return <span>{text}</span>;

  const escaped = q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const directRegex = new RegExp(`(${escaped})`, 'gi');

  if (directRegex.test(text)) {
    const parts = text.split(new RegExp(`(${escaped})`, 'gi'));
    return (
      <>
        {parts.map((part, i) =>
          part.toLowerCase() === q.toLowerCase() ? (
            <mark key={i} className="bg-[#111111] text-white px-1 py-0.5 rounded-md font-bold text-inherit">
              {part}
            </mark>
          ) : (
            part
          )
        )}
      </>
    );
  }

  const normQ = normalizeSearchText(q);
  if (normQ.length >= 2) {
    let normStr = '';
    const mapIdx: number[] = [];
    for (let i = 0; i < text.length; i++) {
      const ch = text[i];
      if (/[\u064B-\u065F\u0670\u0640]/.test(ch)) continue;
      normStr += normalizeSearchText(ch);
      mapIdx.push(i);
    }
    const idx = normStr.indexOf(normQ);
    if (idx !== -1 && mapIdx[idx] !== undefined) {
      const start = mapIdx[idx];
      const endPos = idx + normQ.length - 1;
      const end = (mapIdx[endPos] !== undefined ? mapIdx[endPos] : start + normQ.length) + 1;
      return (
        <>
          {text.slice(0, start)}
          <mark className="bg-[#111111] text-white px-1 py-0.5 rounded-md font-bold text-inherit">
            {text.slice(start, end)}
          </mark>
          {text.slice(end)}
        </>
      );
    }
  }

  return <span>{text}</span>;
};

const SearchResultRow: React.FC<SearchResultRowProps> = ({
  item,
  query,
  isRTL,
  isActive,
  onHover,
  onNavigate,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const isStatute = item.type === 'statute_article';
  const isGlossary = item.type === 'glossary_term';

  return (
    <div
      role="option"
      aria-selected={isActive}
      onMouseEnter={onHover}
      onClick={() =>
        onNavigate(
          item.parentPath || [],
          item.drawerIdToOpen || item.id,
          item.statuteArtId,
          isGlossary ? item.enTerm || query : query
        )
      }
      className={`m3-list-item p-3.5 sm:p-4 cursor-pointer flex flex-col gap-2 transition-all group ${
        isActive ? 'bg-[#e8e8e8]' : 'bg-white hover:bg-[#f0f0f0]'
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-start gap-3 min-w-0 flex-1">
          <div
            className={`w-10 h-10 rounded-[14px] flex items-center justify-center shrink-0 transition-colors ${
              isActive
                ? 'bg-[#111111] text-white'
                : 'bg-[#f0f0f0] text-[#121212] group-hover:bg-[#111111] group-hover:text-white'
            }`}
          >
            {isGlossary ? <BookOpen size={16} /> : isStatute ? <Scale size={16} /> : <FileText size={16} />}
          </div>
          <div className="min-w-0 flex-1">
            {/* Clean Unboxed Metadata */}
            <div className="flex flex-wrap items-center gap-1.5 text-[11px] font-semibold text-[#666666] mb-0.5">
              {item.documentBadge && <span>{item.documentBadge}</span>}
              {item.documentBadge && item.subtitle && <span aria-hidden="true">·</span>}
              {item.subtitle && <span className="truncate">{item.subtitle}</span>}
            </div>

            <div className="text-sm font-bold text-[#121212] leading-snug">
              <HighlightedText text={item.title} query={query} />
            </div>

            {isGlossary && item.enTerm && (
              <div className="text-xs text-[#595959] font-semibold mt-0.5" dir="ltr">
                <HighlightedText text={item.enTerm} query={query} />
              </div>
            )}
          </div>
        </div>

        <div className="flex items-center gap-1 shrink-0 pt-0.5">
          {isGlossary && item.enTerm && (
            <button
              type="button"
              onClick={async (e) => {
                e.stopPropagation();
                if (isPlaying) return;
                setIsPlaying(true);
                await playNaturalEnglishAudio(item.enTerm!, {
                  onEnd: () => setIsPlaying(false),
                  onError: () => setIsPlaying(false),
                });
              }}
              className="w-9 h-9 rounded-full hover:bg-black/10 flex items-center justify-center transition-colors text-[#555555] hover:text-[#121212]"
              disabled={isPlaying}
              title={isRTL ? 'نطق المصطلح' : 'Listen to pronunciation'}
            >
              {isPlaying ? <Loader2 size={15} className="animate-spin" /> : <Volume2 size={15} />}
            </button>
          )}

          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
              isActive
                ? 'bg-[#111111] text-white'
                : 'text-[#666666] group-hover:bg-[#111111] group-hover:text-white'
            }`}
          >
            {isRTL ? <ArrowLeft size={14} /> : <ArrowRight size={14} />}
          </div>
        </div>
      </div>

      {item.contentSnippet && (
        <div className="text-xs text-[#4a4a4a] bg-[#f5f5f5] px-3 py-2.5 rounded-[14px] leading-relaxed">
          <HighlightedText text={item.contentSnippet} query={query} />
        </div>
      )}
    </div>
  );
};

export const SmartSearchBar: React.FC<SmartSearchBarProps> = ({
  libraryData,
  language,
  onNavigateToItem,
}) => {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<SearchCategory>('all');
  const [activeIndex, setActiveIndex] = useState(0);
  const [aiAnswer, setAiAnswer] = useState<string | null>(null);
  const [isLoadingAi, setIsLoadingAi] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const isRTL = language === 'ar';

  const deferredQuery = useDeferredValue(query);

  const searchIndex = useMemo(() => buildSearchIndex(libraryData, language), [libraryData, language]);
  const allResults = useMemo(
    () => performSmartSearch(searchIndex, deferredQuery, 'all', language),
    [searchIndex, deferredQuery, language]
  );

  const filteredResults = useMemo(() => {
    if (activeCategory === 'all') return allResults;
    if (activeCategory === 'terms') return allResults.filter((r) => r.type === 'glossary_term');
    return allResults.filter((r) => r.documentOrigin === activeCategory);
  }, [allResults, activeCategory]);

  const displayedResults = useMemo(() => filteredResults.slice(0, 40), [filteredResults]);

  useEffect(() => {
    setActiveIndex(0);
  }, [deferredQuery, activeCategory]);

  const categoryCounts = useMemo(
    () => ({
      all: allResults.length,
      rome_statute: allResults.filter((r) => r.documentOrigin === 'rome_statute').length,
      rules_of_procedure: allResults.filter((r) => r.documentOrigin === 'rules_of_procedure').length,
      elements_of_crimes: allResults.filter((r) => r.documentOrigin === 'elements_of_crimes').length,
      regulations_of_the_court: allResults.filter((r) => r.documentOrigin === 'regulations_of_the_court').length,
      regulations_of_the_registry: allResults.filter((r) => r.documentOrigin === 'regulations_of_the_registry').length,
      regulations_of_the_prosecutor: allResults.filter((r) => r.documentOrigin === 'regulations_of_the_prosecutor').length,
      terms: allResults.filter((r) => r.type === 'glossary_term').length,
    }),
    [allResults]
  );

  const [recentTerms, setRecentTerms] = useState<
    { term: string; translation: string; targetLang: 'ar' | 'en' }[]
  >([]);

  useEffect(() => {
    const handleOpenEvent = () => setIsOpen(true);
    window.addEventListener('open-smart-search', handleOpenEvent);
    return () => window.removeEventListener('open-smart-search', handleOpenEvent);
  }, []);

  useEffect(() => {
    if (isOpen) {
      setRecentTerms(getRecentlySearchedTerms(8));
      const timer = setTimeout(() => inputRef.current?.focus(), 60);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const selectResult = useCallback(
    (item: SearchResultItem) => {
      onNavigateToItem(
        item.parentPath || [],
        item.drawerIdToOpen || item.id,
        item.statuteArtId,
        item.type === 'glossary_term' ? item.enTerm || query : query
      );
      setIsOpen(false);
    },
    [onNavigateToItem, query]
  );

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        setIsOpen(false);
      } else if (e.key === 'ArrowDown' && displayedResults.length > 0) {
        e.preventDefault();
        setActiveIndex((prev) => (prev + 1) % displayedResults.length);
      } else if (e.key === 'ArrowUp' && displayedResults.length > 0) {
        e.preventDefault();
        setActiveIndex((prev) => (prev - 1 + displayedResults.length) % displayedResults.length);
      } else if (e.key === 'Enter' && displayedResults[activeIndex]) {
        e.preventDefault();
        selectResult(displayedResults[activeIndex]);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, displayedResults, activeIndex, selectResult]);

  const handleAskAi = async () => {
    if (!query.trim()) return;
    setIsLoadingAi(true);
    try {
      const res = await fetch('/api/smart-search', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: query.trim(), language }),
      });
      const data = await res.json();
      setAiAnswer(data.answer);
    } catch {
      setAiAnswer(
        isRTL
          ? 'تعذر الاتصال بخدمة الإيضاح الذكي حالياً. يرجى التحقق من اتصال الإنترنت.'
          : 'Unable to connect to smart legal guide at the moment.'
      );
    } finally {
      setIsLoadingAi(false);
    }
  };

  const tabs: { id: SearchCategory; label: string; count: number }[] = [
    { id: 'all', label: isRTL ? 'الكل' : 'All', count: categoryCounts.all },
    { id: 'rome_statute', label: isRTL ? 'نظام روما' : 'Rome Statute', count: categoryCounts.rome_statute },
    { id: 'rules_of_procedure', label: isRTL ? 'قواعد الإجراءات' : 'Rules of Procedure', count: categoryCounts.rules_of_procedure },
    { id: 'elements_of_crimes', label: isRTL ? 'أركان الجرائم' : 'Elements of Crimes', count: categoryCounts.elements_of_crimes },
    { id: 'regulations_of_the_court', label: isRTL ? 'لوائح المحكمة' : 'Regulations of the Court', count: categoryCounts.regulations_of_the_court },
    { id: 'regulations_of_the_registry', label: isRTL ? 'لوائح قلم المحكمة' : 'Regulations of Registry', count: categoryCounts.regulations_of_the_registry },
    { id: 'regulations_of_the_prosecutor', label: isRTL ? 'لائحة المدعي العام' : 'Regulations of OTP', count: categoryCounts.regulations_of_the_prosecutor },
    { id: 'terms', label: isRTL ? 'المصطلحات' : 'Glossary', count: categoryCounts.terms },
  ];

  const quickExamples = isRTL
    ? ['المادة 5', 'المادة 25', 'القاعدة 85', 'التكامل', 'الإبادة الجماعية', 'حصانة']
    : ['Article 5', 'Article 25', 'Rule 85', 'Complementarity', 'Genocide', 'Immunity'];

  return (
    <>
      {/* Material 3 Expressive Tonal Search Pill */}
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="h-10 sm:h-11 px-3.5 sm:px-4 rounded-full bg-[#e8e8e8] hover:bg-[#dfdfdf] flex items-center justify-between gap-2.5 text-[#4a4a4a] hover:text-[#121212] transition-all active:scale-[0.98] min-w-0 flex-1 sm:flex-initial sm:min-w-[260px] max-w-[190px] sm:max-w-none"
        aria-label={isRTL ? 'بحث شامل (Ctrl+K)' : 'Search all documents (Ctrl+K)'}
      >
        <div className="flex items-center gap-2.5 overflow-hidden min-w-0">
          <Search size={16} className="shrink-0 text-[#121212]" />
          <span className="text-xs sm:text-[13px] font-semibold truncate hidden min-[380px]:inline">
            {isRTL ? 'بحث في الوثائق والمصطلحات...' : 'Search documents & terms...'}
          </span>
          <span className="text-xs font-semibold truncate min-[380px]:hidden">
            {isRTL ? 'بحث' : 'Search'}
          </span>
        </div>
        <kbd
          className="hidden md:inline-flex items-center text-[10px] font-bold text-[#666666] px-1.5 py-0.5 rounded-md bg-white/70 shrink-0"
          dir="ltr"
        >
          Ctrl+K
        </kbd>
      </button>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[100] flex items-end sm:items-start justify-center sm:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/45 backdrop-blur-xs"
            />

            {/* Material 3 Expressive Search View / Sheet */}
            <motion.div
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 24, opacity: 0 }}
              transition={{ duration: 0.18 }}
              className="relative w-full sm:max-w-2xl bg-[#f5f5f5] rounded-t-[28px] sm:rounded-[28px] shadow-2xl overflow-hidden sm:mt-8 flex flex-col border border-black/[0.08] max-h-[92vh] sm:max-h-[84vh]"
              dir={isRTL ? 'rtl' : 'ltr'}
              role="dialog"
              aria-modal="true"
              aria-label={isRTL ? 'محرك البحث القانوني الشامل' : 'Comprehensive Legal Search'}
            >
              {/* Mobile M3 Drag Handle */}
              <div className="sm:hidden flex justify-center pt-2.5 pb-1">
                <div className="w-9 h-1 rounded-full bg-black/20" />
              </div>

              {/* M3 Search Input Bar */}
              <div className="flex items-center px-4 sm:px-5 py-3.5 sm:py-4 bg-white border-b border-black/[0.07] gap-3">
                <Search size={20} className="text-[#121212] shrink-0" />
                <input
                  ref={inputRef}
                  value={query}
                  onChange={(e) => {
                    setQuery(e.target.value);
                    setAiAnswer(null);
                  }}
                  placeholder={
                    isRTL
                      ? 'ابحث برقم المادة (مثل: المادة 25)، أو قاعدة، أو مصطلح...'
                      : 'Search by provision (e.g. Article 25, Rule 85) or term...'
                  }
                  className="flex-1 bg-transparent text-base font-semibold outline-none text-[#121212] placeholder:text-[#8a8a8a]"
                />
                {query && (
                  <button
                    type="button"
                    onClick={() => {
                      setQuery('');
                      setAiAnswer(null);
                      inputRef.current?.focus();
                    }}
                    className="w-8 h-8 rounded-full hover:bg-[#efefef] text-[#666666] hover:text-[#121212] flex items-center justify-center transition-colors"
                    title={isRTL ? 'مسح البحث' : 'Clear search'}
                  >
                    <X size={16} />
                  </button>
                )}
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="w-9 h-9 rounded-full bg-[#f0f0f0] hover:bg-[#e3e3e3] text-[#121212] flex items-center justify-center transition-colors"
                  title={isRTL ? 'إغلاق (Esc)' : 'Close (Esc)'}
                >
                  <X size={18} />
                </button>
              </div>

              {/* M3 Interactive Filter Bar */}
              {query.trim().length > 0 && (
                <div className="flex items-center gap-1.5 px-4 py-2.5 bg-white/80 border-b border-black/[0.06] overflow-x-auto scrollbar-none">
                  {tabs.map((tab) => (
                    <button
                      type="button"
                      key={tab.id}
                      onClick={() => setActiveCategory(tab.id)}
                      className={`h-8 px-3 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 whitespace-nowrap shrink-0 ${
                        activeCategory === tab.id
                          ? 'bg-[#111111] text-white'
                          : 'bg-[#ececec] text-[#4a4a4a] hover:bg-[#e0e0e0] hover:text-[#121212]'
                      }`}
                    >
                      <span>{tab.label}</span>
                      <span className="tabular-nums opacity-75">{tab.count}</span>
                    </button>
                  ))}
                </div>
              )}

              {/* Results Container */}
              <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-3">
                {aiAnswer && (
                  <div className="p-4 bg-white rounded-[22px] border border-black/[0.08] text-sm leading-relaxed">
                    <div className="flex items-center gap-2 mb-2 text-xs font-bold text-[#595959]">
                      <Sparkles size={14} className="text-[#121212]" />
                      <span>{isRTL ? 'إيضاح قانوني ذكي' : 'Smart Legal Insight'}</span>
                    </div>
                    <p className="text-[#121212] whitespace-pre-wrap">{aiAnswer}</p>
                  </div>
                )}

                {query.trim().length > 0 && filteredResults.length === 0 && (
                  <div className="py-12 px-6 text-center bg-white rounded-[24px]">
                    <p className="text-[#121212] font-bold text-base mb-1">
                      {isRTL ? 'لا توجد نتائج مطابقة لبحثك' : 'No matching results found'}
                    </p>
                    <p className="text-[#666666] text-xs mb-5 max-w-sm mx-auto">
                      {isRTL
                        ? 'يمكنك الاستعانة بالمرشد القانوني الذكي لتحديد النصوص المنطبقة'
                        : 'You can ask the smart legal guide to locate relevant ICC provisions'}
                    </p>
                    <button
                      type="button"
                      onClick={handleAskAi}
                      disabled={isLoadingAi}
                      className="h-10 px-5 bg-[#111111] text-white hover:bg-[#2a2a2a] rounded-full text-xs font-bold inline-flex items-center gap-2 transition-all active:scale-95 disabled:opacity-50"
                    >
                      {isLoadingAi ? <Loader2 size={14} className="animate-spin" /> : <Sparkles size={14} />}
                      <span>{isRTL ? 'إيضاح قانوني ذكي' : 'Smart Legal Insight'}</span>
                    </button>
                  </div>
                )}

                {displayedResults.length > 0 && (
                  <div className="m3-list-group flex flex-col gap-[3px]" role="listbox">
                    {displayedResults.map((item, idx) => (
                      <SearchResultRow
                        key={item.id}
                        item={item}
                        query={query}
                        isRTL={isRTL}
                        isActive={idx === activeIndex}
                        onHover={() => setActiveIndex(idx)}
                        onNavigate={(p, id, artId, searchTerm) => {
                          onNavigateToItem(p, id, artId, searchTerm);
                          setIsOpen(false);
                        }}
                      />
                    ))}
                  </div>
                )}

                {filteredResults.length > 40 && (
                  <div className="text-center py-2 text-xs font-semibold text-[#666666]">
                    {isRTL
                      ? `يتم عرض أول 40 نتيجة من أصل ${filteredResults.length}`
                      : `Showing top 40 of ${filteredResults.length} results`}
                  </div>
                )}

                {!query.trim() && (
                  <div className="p-4 sm:p-5 bg-white rounded-[24px] space-y-5">
                    <div>
                      <div className="text-xs font-bold text-[#666666] mb-3">
                        {isRTL ? 'بحث سريع مقترح' : 'Quick Search Suggestions'}
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {quickExamples.map((example) => (
                          <button
                            type="button"
                            key={example}
                            onClick={() => {
                              setQuery(example);
                              inputRef.current?.focus();
                            }}
                            className="h-9 px-3.5 bg-[#f0f0f0] hover:bg-[#111111] hover:text-white rounded-full text-xs font-bold text-[#121212] transition-all"
                          >
                            {example}
                          </button>
                        ))}
                      </div>
                    </div>

                    {recentTerms.length > 0 ? (
                      <div className="w-full pt-4 border-t border-black/[0.06]" dir={isRTL ? 'rtl' : 'ltr'}>
                        <div className="text-xs font-bold text-[#666666] mb-3">
                          {isRTL ? 'مصطلحات تمت ترجمتها مؤخراً' : 'Recently Translated Terms'}
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {recentTerms.map((item, idx) => (
                            <button
                              type="button"
                              key={idx}
                              onClick={() => {
                                setQuery(item.term);
                                inputRef.current?.focus();
                              }}
                              className="h-9 px-3.5 bg-[#f0f0f0] hover:bg-[#111111] hover:text-white rounded-full text-xs font-bold transition-all text-[#121212] flex items-center gap-2 group"
                            >
                              <span>{item.term}</span>
                              <span className="text-[11px] opacity-50">→</span>
                              <span className="opacity-75">{item.translation}</span>
                            </button>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <div className="py-4 text-center text-[#777777]">
                        <BookMarked size={26} className="mx-auto mb-2 opacity-30" />
                        <p className="text-xs font-medium">
                          {isRTL
                            ? 'ابحث بالتزامن في جميع الوثائق القانونية والقاموس المعتمد'
                            : 'Search simultaneously across all ICC legal instruments and glossary'}
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Footer Shortcut Hint */}
              <div className="hidden sm:flex items-center justify-between px-5 py-3 bg-white border-t border-black/[0.07] text-xs text-[#666666] font-medium">
                <div className="flex items-center gap-4">
                  <span className="inline-flex items-center gap-1">
                    <CornerDownLeft size={12} />
                    {isRTL ? 'للانتقال' : 'Open'}
                  </span>
                  <span>↑↓ {isRTL ? 'للتنقل' : 'Navigate'}</span>
                  <span>Esc {isRTL ? 'للإغلاق' : 'Close'}</span>
                </div>
                {query.trim().length > 0 && filteredResults.length > 0 && (
                  <button
                    type="button"
                    onClick={handleAskAi}
                    disabled={isLoadingAi}
                    className="inline-flex items-center gap-1.5 text-[#121212] hover:opacity-75 font-bold transition-opacity disabled:opacity-40"
                  >
                    {isLoadingAi ? <Loader2 size={13} className="animate-spin" /> : <Sparkles size={13} />}
                    <span>{isRTL ? 'إيضاح قانوني ذكي' : 'Smart Legal Insight'}</span>
                  </button>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
