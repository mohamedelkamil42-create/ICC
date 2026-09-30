import React, { useState, useEffect, useRef, useMemo, useDeferredValue } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, X, FileText, BookOpen, Sparkles, Volume2, ArrowRight, ArrowLeft, Loader2, BookMarked, Scale } from 'lucide-react';
import { DrawerItem } from './types';
import { buildSearchIndex, performSmartSearch, SearchResultItem, SearchCategory } from './searchUtils';
import { playNaturalEnglishAudio } from './audioUtils';
import { getRecentlySearchedTerms } from './dictionaryCache';

interface SmartSearchBarProps {
  libraryData: DrawerItem[];
  language: 'ar' | 'en';
  onNavigateToItem: (parentPath: DrawerItem[], drawerId: string, artId?: string, searchTerm?: string) => void;
  scrolled?: boolean;
}

interface SearchResultRowProps {
  item: SearchResultItem;
  query: string;
  isRTL: boolean;
  onNavigate: (parentPath: DrawerItem[], id: string, artId?: string, searchTerm?: string) => void;
}

const HighlightedText: React.FC<{ text?: string; query: string }> = ({ text, query }) => {
  if (!text) return null;
  const q = query.trim();
  if (!q || q.length < 2) return <span>{text}</span>;

  const escaped = q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const parts = text.split(new RegExp(`(${escaped})`, 'gi'));

  return (
    <>
      {parts.map((part, i) => 
        part.toLowerCase() === q.toLowerCase() ? (
          <mark key={i} className="bg-black text-white px-1 py-0.5 rounded font-bold text-inherit">
            {part}
          </mark>
        ) : (
          part
        )
      )}
    </>
  );
};

const SearchResultRow: React.FC<SearchResultRowProps> = ({ item, query, isRTL, onNavigate }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const isStatute = item.type === 'statute_article';
  const isGlossary = item.type === 'glossary_term';

  return (
    <div 
      onClick={() => onNavigate(item.parentPath || [], item.drawerIdToOpen || item.id, item.statuteArtId, query)} 
      className="p-3.5 rounded-2xl hover:bg-neutral-100/70 border border-transparent hover:border-neutral-200 cursor-pointer flex flex-col gap-2 transition-all group"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-start gap-3 min-w-0 flex-1">
          <div className="p-2 bg-neutral-100 rounded-xl text-neutral-800 shrink-0 mt-0.5 group-hover:bg-black group-hover:text-white transition-colors">
            {isGlossary ? <BookOpen size={16} /> : (isStatute ? <Scale size={16} /> : <FileText size={16} />)}
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-2 mb-1">
              {item.documentBadge && (
                <span className="text-[10px] font-black uppercase tracking-wider bg-neutral-100 text-neutral-700 px-2 py-0.5 rounded-md border border-neutral-200/60">
                  {item.documentBadge}
                </span>
              )}
              {item.subtitle && (
                <span className="text-[11px] text-neutral-400 font-medium truncate">
                  {item.subtitle}
                </span>
              )}
            </div>

            <div className="text-sm font-bold text-neutral-900 group-hover:text-black transition-colors leading-snug">
              <HighlightedText text={item.title} query={query} />
            </div>

            {isGlossary && item.enTerm && (
              <div className="text-[11px] text-neutral-400 uppercase font-bold mt-0.5 tracking-wider" dir="ltr">
                <HighlightedText text={item.enTerm} query={query} />
              </div>
            )}
          </div>
        </div>

        <div className="flex items-center gap-1 shrink-0 pt-1">
          {isGlossary && (
            <button 
              onClick={async (e) => { 
                e.stopPropagation(); 
                if (isPlaying) return;
                setIsPlaying(true);
                await playNaturalEnglishAudio(item.enTerm!, {
                  onEnd: () => setIsPlaying(false),
                  onError: () => setIsPlaying(false)
                });
              }} 
              className="p-2 rounded-full hover:bg-neutral-200 transition-colors text-neutral-500 hover:text-black"
              disabled={isPlaying}
              title={isRTL ? "نطق المصطلح" : "Listen to pronunciation"}
            >
              {isPlaying ? <Loader2 size={15} className="animate-spin text-neutral-400" /> : <Volume2 size={15} />}
            </button>
          )}

          <div className="p-1.5 rounded-xl bg-neutral-100 text-neutral-400 group-hover:bg-black group-hover:text-white transition-all">
            {isRTL ? <ArrowLeft size={14} /> : <ArrowRight size={14} />}
          </div>
        </div>
      </div>

      {item.contentSnippet && (
        <div className="text-xs text-neutral-600 bg-neutral-50 p-2.5 rounded-xl border border-neutral-100/80 leading-relaxed font-normal">
          <HighlightedText text={item.contentSnippet} query={query} />
        </div>
      )}
    </div>
  );
};

export const SmartSearchBar: React.FC<SmartSearchBarProps> = ({ libraryData, language, onNavigateToItem, scrolled }) => {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<SearchCategory>('all');
  const [aiAnswer, setAiAnswer] = useState<string | null>(null);
  const [isLoadingAi, setIsLoadingAi] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const isRTL = language === 'ar';

  const deferredQuery = useDeferredValue(query);

  const searchIndex = useMemo(() => buildSearchIndex(libraryData, language), [libraryData, language]);
  
  // All results for calculating concurrent counts - single search pass
  const allResults = useMemo(() => performSmartSearch(searchIndex, deferredQuery, 'all', language), [searchIndex, deferredQuery, language]);
  
  // Filtered results for the active tab without re-scanning all 1600+ articles
  const filteredResults = useMemo(() => {
    if (activeCategory === 'all') return allResults;
    if (activeCategory === 'terms') return allResults.filter(r => r.type === 'glossary_term');
    return allResults.filter(r => r.documentOrigin === activeCategory);
  }, [allResults, activeCategory]);

  const displayedResults = useMemo(() => filteredResults.slice(0, 40), [filteredResults]);

  const categoryCounts = useMemo(() => {
    return {
      all: allResults.length,
      rome_statute: allResults.filter(r => r.documentOrigin === 'rome_statute').length,
      rules_of_procedure: allResults.filter(r => r.documentOrigin === 'rules_of_procedure').length,
      elements_of_crimes: allResults.filter(r => r.documentOrigin === 'elements_of_crimes').length,
      regulations_of_the_court: allResults.filter(r => r.documentOrigin === 'regulations_of_the_court').length,
      regulations_of_the_prosecutor: allResults.filter(r => r.documentOrigin === 'regulations_of_the_prosecutor').length,
      terms: allResults.filter(r => r.type === 'glossary_term').length,
    };
  }, [allResults]);

  const [recentTerms, setRecentTerms] = useState<{ term: string; translation: string; targetLang: 'ar' | 'en' }[]>([]);

  useEffect(() => {
    const handleOpenEvent = () => setIsOpen(true);
    window.addEventListener('open-smart-search', handleOpenEvent);
    return () => window.removeEventListener('open-smart-search', handleOpenEvent);
  }, []);

  useEffect(() => {
    if (isOpen) {
      setRecentTerms(getRecentlySearchedTerms(8));
      setTimeout(() => inputRef.current?.focus(), 60);
    }
  }, [isOpen]);

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
      setAiAnswer(isRTL ? 'تعذر الاتصال بالذكاء الاصطناعي حالياً. يرجى التحقق من اتصال الإنترنت.' : 'Unable to connect to AI assistant at the moment.');
    } finally {
      setIsLoadingAi(false);
    }
  };

  const t = {
    trigger: isRTL ? 'بحث شامل في الوثائق والمصطلحات...' : 'Search all documents & terms...',
    placeholder: isRTL ? 'ابحث عن مصطلح، مادة، أو قاعدة قانونية...' : 'Search for a term, article, or rule...',
    aiBtn: isRTL ? 'إجابة ذكية بالذكاء الاصطناعي' : 'AI Assistant Insight',
    noResults: isRTL ? 'لا توجد نتائج مطابقة لبحثك' : 'No matching results found',
    noResultsHint: isRTL ? 'يمكنك الاستعانة بالمرشد الذكي لتحديد النصوص المنطبقة' : 'You can ask the AI guide to locate relevant provisions',
    allTab: isRTL ? 'الكل' : 'All',
    romeStatuteTab: isRTL ? 'نظام روما' : 'Rome Statute',
    rulesTab: isRTL ? 'قواعد الإجراءات' : 'Rules of Procedure',
    elementsTab: isRTL ? 'أركان الجرائم' : 'Elements of Crimes',
    regulationsTab: isRTL ? 'لوائح المحكمة' : 'Regulations of the Court',
    prosecutorTab: isRTL ? 'لائحة المدعي العام' : 'Regulations of OTP',
    termsTab: isRTL ? 'المصطلحات' : 'Glossary',
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)} 
        className={`h-9 sm:h-10 px-3 sm:px-4 border border-neutral-200 rounded-full shadow-sm flex items-center justify-between text-neutral-600 hover:border-black hover:bg-white transition-all group min-w-0 flex-1 sm:flex-initial sm:min-w-[220px] max-w-[160px] sm:max-w-none ${scrolled ? 'bg-white/70' : 'bg-white/90'}`}
      >
        <div className="flex items-center gap-2 overflow-hidden min-w-0">
          <Search size={15} className="shrink-0 text-neutral-500 group-hover:text-black transition-colors" />
          <span className="text-[11px] sm:text-[12px] font-semibold truncate hidden min-[380px]:inline">{t.trigger}</span>
          <span className="text-[11px] font-semibold truncate min-[380px]:hidden">{isRTL ? 'بحث' : 'Search'}</span>
        </div>
        <Sparkles size={13} className="text-neutral-400 shrink-0 hidden min-[340px]:block" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[100] flex items-center sm:items-start justify-center p-2 sm:p-4 md:p-6 overflow-y-auto">
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }} 
              onClick={() => setIsOpen(false)} 
              className="fixed inset-0 bg-black/50 backdrop-blur-sm" 
            />

            <motion.div 
              initial={{ y: -15, opacity: 0, scale: 0.98 }} 
              animate={{ y: 0, opacity: 1, scale: 1 }} 
              exit={{ y: -15, opacity: 0, scale: 0.98 }} 
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-2xl bg-white rounded-2xl sm:rounded-[2rem] shadow-2xl overflow-hidden my-auto sm:mt-10 flex flex-col border border-neutral-200 max-h-[92vh] sm:max-h-[85vh]" 
              dir={isRTL ? 'rtl' : 'ltr'}
            >
              {/* Search Header */}
              <div className="flex items-center p-4 sm:p-5 border-b border-neutral-100 gap-3">
                <Search size={20} className="text-neutral-500 shrink-0" />
                <input 
                  ref={inputRef} 
                  value={query} 
                  onChange={(e) => { 
                    setQuery(e.target.value); 
                    setAiAnswer(null); 
                  }} 
                  placeholder={t.placeholder} 
                  className="flex-1 bg-transparent text-base sm:text-lg font-medium outline-none text-neutral-900 placeholder:text-neutral-400" 
                />
                {query && (
                  <button 
                    onClick={() => { setQuery(''); setAiAnswer(null); }} 
                    className="p-1 rounded-full hover:bg-neutral-100 text-neutral-400 hover:text-black transition-colors"
                  >
                    <X size={16} />
                  </button>
                )}
                <button 
                  onClick={() => setIsOpen(false)} 
                  className="p-1.5 rounded-full hover:bg-neutral-100 text-neutral-400 hover:text-black transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Filter Tabs */}
              {query.trim().length > 0 && (
                <div className="flex items-center gap-1.5 px-4 py-2.5 bg-neutral-50/80 border-b border-neutral-100 overflow-x-auto scrollbar-none">
                  <button
                    onClick={() => setActiveCategory('all')}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 whitespace-nowrap ${
                      activeCategory === 'all' 
                        ? 'bg-black text-white shadow-sm' 
                        : 'text-neutral-500 hover:bg-neutral-200/60'
                    }`}
                  >
                    <span>{t.allTab}</span>
                    <span className={`text-[10px] px-1.5 py-0.2 rounded-md ${activeCategory === 'all' ? 'bg-white/20' : 'bg-neutral-200 text-neutral-700'}`}>
                      {categoryCounts.all}
                    </span>
                  </button>

                  <button
                    onClick={() => setActiveCategory('rome_statute')}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 whitespace-nowrap ${
                      activeCategory === 'rome_statute' 
                        ? 'bg-black text-white shadow-sm' 
                        : 'text-neutral-500 hover:bg-neutral-200/60'
                    }`}
                  >
                    <span>{t.romeStatuteTab}</span>
                    <span className={`text-[10px] px-1.5 py-0.2 rounded-md ${activeCategory === 'rome_statute' ? 'bg-white/20' : 'bg-neutral-200 text-neutral-700'}`}>
                      {categoryCounts.rome_statute}
                    </span>
                  </button>

                  <button
                    onClick={() => setActiveCategory('rules_of_procedure')}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 whitespace-nowrap ${
                      activeCategory === 'rules_of_procedure' 
                        ? 'bg-black text-white shadow-sm' 
                        : 'text-neutral-500 hover:bg-neutral-200/60'
                    }`}
                  >
                    <span>{t.rulesTab}</span>
                    <span className={`text-[10px] px-1.5 py-0.2 rounded-md ${activeCategory === 'rules_of_procedure' ? 'bg-white/20' : 'bg-neutral-200 text-neutral-700'}`}>
                      {categoryCounts.rules_of_procedure}
                    </span>
                  </button>

                  <button
                    onClick={() => setActiveCategory('elements_of_crimes')}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 whitespace-nowrap ${
                      activeCategory === 'elements_of_crimes' 
                        ? 'bg-black text-white shadow-sm' 
                        : 'text-neutral-500 hover:bg-neutral-200/60'
                    }`}
                  >
                    <span>{t.elementsTab}</span>
                    <span className={`text-[10px] px-1.5 py-0.2 rounded-md ${activeCategory === 'elements_of_crimes' ? 'bg-white/20' : 'bg-neutral-200 text-neutral-700'}`}>
                      {categoryCounts.elements_of_crimes}
                    </span>
                  </button>

                  <button
                    onClick={() => setActiveCategory('regulations_of_the_court')}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 whitespace-nowrap ${
                      activeCategory === 'regulations_of_the_court' 
                        ? 'bg-black text-white shadow-sm' 
                        : 'text-neutral-500 hover:bg-neutral-200/60'
                    }`}
                  >
                    <span>{t.regulationsTab}</span>
                    <span className={`text-[10px] px-1.5 py-0.2 rounded-md ${activeCategory === 'regulations_of_the_court' ? 'bg-white/20' : 'bg-neutral-200 text-neutral-700'}`}>
                      {categoryCounts.regulations_of_the_court}
                    </span>
                  </button>

                  <button
                    onClick={() => setActiveCategory('regulations_of_the_prosecutor')}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 whitespace-nowrap ${
                      activeCategory === 'regulations_of_the_prosecutor' 
                        ? 'bg-black text-white shadow-sm' 
                        : 'text-neutral-500 hover:bg-neutral-200/60'
                    }`}
                  >
                    <span>{t.prosecutorTab}</span>
                    <span className={`text-[10px] px-1.5 py-0.2 rounded-md ${activeCategory === 'regulations_of_the_prosecutor' ? 'bg-white/20' : 'bg-neutral-200 text-neutral-700'}`}>
                      {categoryCounts.regulations_of_the_prosecutor}
                    </span>
                  </button>

                  <button
                    onClick={() => setActiveCategory('terms')}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 whitespace-nowrap ${
                      activeCategory === 'terms' 
                        ? 'bg-black text-white shadow-sm' 
                        : 'text-neutral-500 hover:bg-neutral-200/60'
                    }`}
                  >
                    <span>{t.termsTab}</span>
                    <span className={`text-[10px] px-1.5 py-0.2 rounded-md ${activeCategory === 'terms' ? 'bg-white/20' : 'bg-neutral-200 text-neutral-700'}`}>
                      {categoryCounts.terms}
                    </span>
                  </button>
                </div>
              )}

              {/* Results Container */}
              <div className="flex-1 overflow-y-auto p-3 space-y-2">
                {aiAnswer && (
                  <div className="p-4 bg-neutral-50 rounded-2xl border border-neutral-200 text-sm leading-relaxed mb-3">
                    <div className="flex items-center gap-2 mb-2 text-[10px] font-black uppercase text-neutral-600">
                      <Sparkles size={14} className="text-black" />
                      <span>{isRTL ? 'إيضاح قانوني ذكي' : 'AI Legal Insight'}</span>
                    </div>
                    <p className="text-neutral-800">{aiAnswer}</p>
                  </div>
                )}

                {query.trim().length > 0 && filteredResults.length === 0 && (
                  <div className="py-12 px-6 text-center">
                    <p className="text-neutral-900 font-bold text-base mb-1">{t.noResults}</p>
                    <p className="text-neutral-400 text-xs mb-5 max-w-sm mx-auto">{t.noResultsHint}</p>
                    <button 
                      onClick={handleAskAi} 
                      disabled={isLoadingAi}
                      className="px-5 py-2.5 bg-black text-white hover:bg-neutral-800 rounded-full text-xs font-bold flex items-center gap-2 mx-auto shadow-sm active:scale-95 transition-all disabled:opacity-50"
                    >
                      {isLoadingAi ? <Loader2 size={14} className="animate-spin" /> : <Sparkles size={14} />}
                      <span>{t.aiBtn}</span>
                    </button>
                  </div>
                )}

                {displayedResults.map(item => (
                  <SearchResultRow 
                    key={item.id} 
                    item={item} 
                    query={query}
                    isRTL={isRTL}
                    onNavigate={(p, id, artId, searchTerm) => {
                      onNavigateToItem(p, id, artId, searchTerm);
                      setIsOpen(false);
                    }}
                  />
                ))}

                {filteredResults.length > 40 && (
                  <div className="text-center py-2.5 text-[11px] font-bold text-neutral-400 bg-neutral-50/70 rounded-xl border border-neutral-100">
                    {isRTL ? `يتم عرض أول 40 نتيجة من أصل ${filteredResults.length}` : `Showing top 40 of ${filteredResults.length} results`}
                  </div>
                )}

                {!query.trim() && (
                  <div className="py-6 px-4">
                    {recentTerms.length > 0 ? (
                      <div className="text-left w-full" dir={isRTL ? 'rtl' : 'ltr'}>
                        <div className="flex items-center gap-2 mb-3 px-1 text-[11px] font-black uppercase tracking-wider text-neutral-400">
                          <Sparkles size={13} className="text-neutral-500" />
                          <span>{isRTL ? 'مصطلحات في الذاكرة السريعة (Cache)' : 'Cached Legal Terms'}</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {recentTerms.map((t, idx) => (
                            <button
                              key={idx}
                              onClick={() => {
                                setQuery(t.term);
                                inputRef.current?.focus();
                              }}
                              className="px-3 py-1.5 bg-neutral-100 hover:bg-black hover:text-white rounded-xl text-xs font-bold transition-all text-neutral-800 flex items-center gap-2 border border-neutral-200/60 group"
                            >
                              <span>{t.term}</span>
                              <span className="text-[10px] text-neutral-400 group-hover:text-white/60">→</span>
                              <span className="text-[11px] text-neutral-500 group-hover:text-white/80">{t.translation}</span>
                            </button>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <div className="py-6 text-center text-neutral-400">
                        <BookMarked size={32} className="mx-auto mb-3 opacity-30" />
                        <p className="text-xs font-medium">
                          {isRTL 
                            ? 'ابحث بالتزامن في مواد نظام روما الأساسي وقواعد الإجراءات والمصطلحات القانونية' 
                            : 'Search concurrently across Rome Statute articles, Rules of Procedure, and legal terms'}
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
