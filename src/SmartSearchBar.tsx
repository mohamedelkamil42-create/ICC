import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, X, FileText, BookOpen, Sparkles, Volume2, ChevronRight, ChevronLeft, Loader2 } from 'lucide-react';
import { DrawerItem } from './types';
import { buildSearchIndex, performSmartSearch, SearchResultItem } from './searchUtils';
import { playNaturalEnglishAudio } from './audioUtils';

interface SmartSearchBarProps {
  libraryData: DrawerItem[];
  language: 'ar' | 'en';
  onNavigateToItem: (parentPath: DrawerItem[], drawerId: string) => void;
}

export const SmartSearchBar: React.FC<SmartSearchBarProps> = ({ libraryData, language, onNavigateToItem }) => {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [aiAnswer, setAiAnswer] = useState<string | null>(null);
  const [isLoadingAi, setIsLoadingAi] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const isRTL = language === 'ar';

  const searchIndex = useMemo(() => buildSearchIndex(libraryData, language), [libraryData, language]);
  const results = useMemo(() => performSmartSearch(searchIndex, query, 'all'), [searchIndex, query]);

  useEffect(() => {
    if (isOpen) setTimeout(() => inputRef.current?.focus(), 50);
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
      setAiAnswer('تعذر الاتصال بالذكاء الاصطناعي حالياً.');
    } finally {
      setIsLoadingAi(false);
    }
  };

  const t = {
    trigger: isRTL ? 'بحث ذكي...' : 'Smart Search...',
    placeholder: isRTL ? 'ابحث في الوثائق والمصطلحات...' : 'Search docs & terms...',
    aiBtn: isRTL ? 'إجابة ذكية' : 'AI Answer',
    noResults: isRTL ? 'لا توجد نتائج' : 'No results',
  };

  return (
    <>
      <button onClick={() => setIsOpen(true)} className="w-full max-w-xs h-10 px-4 bg-white border border-neutral-200 rounded-full shadow-sm flex items-center justify-between text-neutral-500 hover:border-neutral-400 transition-all">
        <div className="flex items-center gap-2">
          <Search size={16} />
          <span className="text-xs font-medium">{t.trigger}</span>
        </div>
        <Sparkles size={14} className="text-neutral-300" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[100] flex items-start justify-center p-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsOpen(false)} className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
            <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -20, opacity: 0 }} className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl overflow-hidden mt-12 flex flex-col" dir={isRTL ? 'rtl' : 'ltr'}>
              <div className="flex items-center p-4 border-b gap-3">
                <Search size={20} className="text-neutral-400" />
                <input ref={inputRef} value={query} onChange={(e) => { setQuery(e.target.value); setAiAnswer(null); }} placeholder={t.placeholder} className="flex-1 bg-transparent text-base outline-none" />
                <button onClick={() => setIsOpen(false)} className="text-neutral-400"><X size={20} /></button>
              </div>

              <div className="max-h-[60vh] overflow-y-auto p-2">
                {aiAnswer && (
                  <div className="m-2 p-4 bg-neutral-50 rounded-2xl border border-neutral-100 text-sm leading-relaxed">
                    <div className="flex items-center gap-2 mb-2 text-[10px] font-black uppercase text-neutral-400"><Sparkles size={14} /> AI Insight</div>
                    {aiAnswer}
                  </div>
                )}

                {query.trim() && results.length === 0 && !isLoadingAi && (
                  <div className="p-8 text-center">
                    <p className="text-neutral-400 text-sm mb-4">{t.noResults}</p>
                    <button onClick={handleAskAi} className="px-4 py-2 bg-black text-white rounded-full text-xs font-bold flex items-center gap-2 mx-auto"><Sparkles size={14} /> {t.aiBtn}</button>
                  </div>
                )}

                {results.map(item => (
                  <div key={item.id} onClick={() => { onNavigateToItem(item.parentPath || [], item.drawerIdToOpen || item.id); setIsOpen(false); }} className="p-3 rounded-2xl hover:bg-neutral-50 cursor-pointer flex items-center justify-between group">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-neutral-100 rounded-xl">{item.type === 'glossary_term' ? <BookOpen size={18} /> : <FileText size={18} />}</div>
                      <div>
                        <div className="text-sm font-bold">{item.title}</div>
                        {item.type === 'glossary_term' && <div className="text-[10px] text-neutral-400 uppercase font-bold" dir="ltr">{item.enTerm}</div>}
                      </div>
                    </div>
                    {item.type === 'glossary_term' && (
                      <button onClick={(e) => { e.stopPropagation(); playNaturalEnglishAudio(item.enTerm!); }} className="p-2 rounded-full hover:bg-neutral-200"><Volume2 size={16} /></button>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
