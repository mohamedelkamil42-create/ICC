import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, ChevronUp, BookOpen, List, ArrowUp, ArrowDown, ArrowRight, ArrowLeft } from 'lucide-react';
import { TranslatableText } from './TranslatableText';

export interface Article {
  id: string;
  number: string;
  titleAr: string;
  titleEn: string;
  contentAr: string;
  contentEn: string;
}

export interface Part {
  id: string;
  labelAr: string;
  labelEn: string;
  titleAr: string;
  titleEn: string;
  articles: Article[];
}

interface RomeStatuteViewerProps {
  data: Part[];
  language: 'ar' | 'en';
  highlightId?: string | null;
  documentTitleAr: string;
  documentTitleEn: string;
  itemLabelAr: string;
  itemLabelEn: string;
}

export const RomeStatuteViewer: React.FC<RomeStatuteViewerProps> = ({ data, language, highlightId, documentTitleAr, documentTitleEn, itemLabelAr, itemLabelEn }) => {
  const [viewMode, setViewMode] = useState<'list' | 'book'>('list');
  const [expandedPart, setExpandedPart] = useState<string | null>(data[0]?.id || null);
  const [currentPage, setCurrentPage] = useState(0);
  const isRTL = language === 'ar';
  
  useEffect(() => {
    if (highlightId) {
      // Find which part contains this article to expand it
      const partWithArticle = data.find(p => p.articles.some(a => a.id === highlightId));
      if (partWithArticle) {
        setExpandedPart(partWithArticle.id);
        // Small delay to allow expansion animation
        setTimeout(() => {
          scrollToArticle(highlightId);
        }, 300);
      }
    }
  }, [highlightId, data]);
  
  // Flatten articles for book mode with part context - Memoized for performance
  const allArticles = React.useMemo(() => data.flatMap(p => p.articles.map(a => ({
    ...a,
    partTitleAr: p.titleAr,
    partTitleEn: p.titleEn,
    partLabelAr: p.labelAr,
    partLabelEn: p.labelEn
  }))), [data]);

  const scrollToArticle = (id: string) => {
    const element = document.getElementById(`article-${id}`);
    if (element) {
      const yOffset = -100;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const t = {
    parts: language === 'ar' ? 'الأبواب' : 'Parts',
    articles: language === 'ar' ? (itemLabelAr === 'القاعدة' ? 'القواعد' : 'المواد') : (itemLabelEn === 'Rule' ? 'Rules' : 'Articles'),
    listMode: language === 'ar' ? 'عرض القائمة' : 'List View',
    bookMode: language === 'ar' ? 'عرض الكتاب' : 'Book View',
    backToTop: language === 'ar' ? 'الرجوع للأعلى' : 'Back to Top',
    next: language === 'ar' ? `${itemLabelAr} التالية` : `Next ${itemLabelEn}`,
    prev: language === 'ar' ? `${itemLabelAr} السابقة` : `Previous ${itemLabelEn}`,
  };

  // Helper component for lazy rendering of articles to improve performance
  const ArticleItem = React.memo(({ art, isRTL, language, itemLabelAr, itemLabelEn, t }: { 
    art: Article, 
    isRTL: boolean, 
    language: string, 
    itemLabelAr: string, 
    itemLabelEn: string,
    t: any
  }) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        },
        { rootMargin: '600px' } // Load well before it comes into view
      );

      if (ref.current) observer.observe(ref.current);
      return () => observer.disconnect();
    }, []);

    return (
      <article 
        ref={ref}
        id={`article-${art.id}`}
        className="scroll-mt-24 p-6 sm:p-8 bg-white border border-neutral-100 rounded-[2.5rem] shadow-sm hover:shadow-md transition-all group min-h-[150px]"
      >
        <div className={`flex flex-col mb-8 ${isRTL ? 'items-start text-right' : 'items-start text-left'}`}>
          <div className={`inline-flex items-center gap-3 mb-4 ${isRTL ? 'flex-row-reverse' : 'flex-row'}`}>
            <div className="w-8 h-[2px] bg-black/10"></div>
            <span className="text-[11px] font-black uppercase tracking-widest text-neutral-400">
              {language === 'ar' ? itemLabelAr : itemLabelEn} {art.number}
            </span>
          </div>
          <h3 className={`text-2xl font-black text-neutral-900 leading-snug ${isRTL ? 'font-arabic' : ''}`}>
            {language === 'ar' ? art.titleAr : art.titleEn}
          </h3>
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="p-3 rounded-full hover:bg-neutral-50 text-neutral-200 hover:text-black transition-all"
            title={t.backToTop}
          >
            <ArrowUp size={18} />
          </button>
        </div>
        
        <div className="text-justify">
          {isVisible ? (
            <TranslatableText text={language === 'ar' ? art.contentAr : art.contentEn} isEnglish={language === 'en'} />
          ) : (
            <div className="h-32 flex items-center justify-center border border-dashed border-neutral-100 rounded-2xl bg-neutral-50/30">
              <div className="flex flex-col items-center gap-2">
                <div className="w-6 h-6 border-2 border-neutral-200 border-t-black rounded-full animate-spin"></div>
                <span className="text-[10px] font-black uppercase tracking-widest text-neutral-300">Loading Text...</span>
              </div>
            </div>
          )}
        </div>
      </article>
    );
  });

  return (
    <div className="flex flex-col gap-6">
      
      {/* Controls */}
      <div className="flex items-center justify-between bg-neutral-50 p-2 rounded-2xl border border-neutral-100">
        <div className="flex items-center gap-1">
          <button 
            onClick={() => setViewMode('list')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-black transition-all ${viewMode === 'list' ? 'bg-black text-white shadow-lg' : 'text-neutral-400 hover:bg-neutral-100'}`}
          >
            <List size={14} />
            <span>{t.listMode}</span>
          </button>
          <button 
            onClick={() => setViewMode('book')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-black transition-all ${viewMode === 'book' ? 'bg-black text-white shadow-lg' : 'text-neutral-400 hover:bg-neutral-100'}`}
          >
            <BookOpen size={14} />
            <span>{t.bookMode}</span>
          </button>
        </div>
      </div>

      {viewMode === 'list' ? (
        <div className="flex flex-col gap-4">
          {/* Navigation Dropdown / Accordion for Parts */}
          {data.map((part) => (
            <div key={part.id} className="border border-neutral-100 rounded-3xl overflow-hidden bg-white">
              <button 
                onClick={() => setExpandedPart(expandedPart === part.id ? null : part.id)}
                className={`w-full flex items-center justify-between p-5 hover:bg-neutral-50 transition-colors ${isRTL ? 'flex-row-reverse text-right' : 'flex-row text-left'}`}
              >
                <div className={`flex items-center gap-4 ${isRTL ? 'flex-row-reverse' : 'flex-row'}`}>
                  <div className="w-1 h-8 bg-black/5 rounded-full"></div>
                  <div className={`flex flex-col ${isRTL ? 'items-start' : 'items-start'}`}>
                    <span className="text-[10px] font-black uppercase text-neutral-400 tracking-[0.2em] mb-0.5">{language === 'ar' ? part.labelAr : part.labelEn}</span>
                    <h4 className={`font-black text-sm sm:text-base ${isRTL ? 'font-arabic leading-relaxed' : ''}`}>{language === 'ar' ? part.titleAr : part.titleEn}</h4>
                  </div>
                </div>
                <div className="text-neutral-300">
                  {expandedPart === part.id ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </div>
              </button>
              
              <AnimatePresence>
                {expandedPart === part.id && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }} 
                    animate={{ height: 'auto', opacity: 1 }} 
                    exit={{ height: 0, opacity: 0 }}
                    className="border-t border-neutral-50 bg-neutral-50/30"
                  >
                    <div className="p-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2" dir={isRTL ? 'rtl' : 'ltr'}>
                      {part.articles.map((art) => (
                        <button 
                          key={art.id}
                          onClick={() => scrollToArticle(art.id)}
                          className={`text-[11px] font-bold p-2.5 rounded-xl bg-white border border-neutral-100 hover:border-black hover:scale-105 active:scale-95 transition-all text-center ${isRTL ? 'font-arabic' : ''}`}
                        >
                          {language === 'ar' ? itemLabelAr : (itemLabelEn === 'Article' ? 'Art.' : itemLabelEn)} {art.number}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}

          {/* Full List Content */}
          <div className="mt-8 flex flex-col gap-12">
            {data.map((part) => (
              <div key={`content-${part.id}`} className="flex flex-col gap-8">
                <div className={`py-12 border-b border-neutral-100 flex flex-col relative ${isRTL ? 'items-start text-right font-arabic pr-8' : 'items-start text-left pl-8'}`}>
                  <div className={`absolute top-12 bottom-12 w-1.5 bg-black rounded-full ${isRTL ? 'right-0' : 'left-0'}`}></div>
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] text-neutral-400 mb-3">{language === 'ar' ? part.labelAr : part.labelEn}</span>
                  <h2 className="text-3xl sm:text-4xl font-black max-w-3xl leading-tight text-neutral-900">{language === 'ar' ? part.titleAr : part.titleEn}</h2>
                </div>
                
                {part.articles.map((art) => (
                  <ArticleItem 
                    key={art.id} 
                    art={art} 
                    isRTL={isRTL} 
                    language={language} 
                    itemLabelAr={itemLabelAr} 
                    itemLabelEn={itemLabelEn}
                    t={t}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      ) : (
        /* Book Mode (One article at a time) */
        <div className="flex flex-col gap-6">
          <AnimatePresence mode="wait">
            <motion.article 
              key={`page-${currentPage}`}
              initial={{ opacity: 0, x: isRTL ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: isRTL ? 20 : -20 }}
              className={`min-h-[500px] p-8 sm:p-12 bg-white border border-neutral-100 rounded-[3rem] shadow-xl shadow-black/5 relative overflow-hidden ${isRTL ? 'font-arabic' : ''}`}
            >
              {/* Page Numbering Decoration */}
              <div className={`absolute top-0 opacity-[0.03] pointer-events-none p-8 ${isRTL ? 'left-0' : 'right-0'}`}>
                <span className="text-[12rem] font-black leading-none">{currentPage + 1}</span>
              </div>

              <div className="relative z-10 flex flex-col h-full">
                <div className={`flex flex-col mb-12 ${isRTL ? 'items-start text-right' : 'items-start text-left'}`}>
                  <div className={`flex flex-col mb-6 ${isRTL ? 'items-start' : 'items-start'}`}>
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-neutral-300 mb-1 block">
                      {language === 'ar' ? documentTitleAr : documentTitleEn}
                    </span>
                    <span className="text-[11px] font-black uppercase tracking-widest text-neutral-500">
                      {language === 'ar' ? allArticles[currentPage].partTitleAr : allArticles[currentPage].partTitleEn}
                    </span>
                  </div>
                  
                  <div className={`inline-flex items-center gap-3 mb-4 ${isRTL ? 'flex-row-reverse' : 'flex-row'}`}>
                    <div className="w-12 h-[2px] bg-black/10"></div>
                    <span className="text-[11px] font-black uppercase tracking-widest text-neutral-400">
                      {language === 'ar' ? itemLabelAr : itemLabelEn} {allArticles[currentPage].number}
                    </span>
                  </div>
                  <h2 className={`text-3xl sm:text-5xl font-black text-neutral-900 leading-tight ${isRTL ? 'font-arabic' : ''}`}>
                    {language === 'ar' ? allArticles[currentPage].titleAr : allArticles[currentPage].titleEn}
                  </h2>
                </div>

                <div className="flex-grow">
                   <TranslatableText text={language === 'ar' ? allArticles[currentPage].contentAr : allArticles[currentPage].contentEn} isEnglish={language === 'en'} />
                </div>
              </div>
            </motion.article>
          </AnimatePresence>

          {/* Book Navigation */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <button 
              disabled={currentPage === 0}
              onClick={() => setCurrentPage(prev => Math.max(0, prev - 1))}
              className="w-full sm:flex-1 flex items-center justify-center gap-3 p-5 rounded-[2rem] border border-neutral-200 bg-white hover:bg-neutral-50 disabled:opacity-30 transition-all active:scale-90 text-sm font-black uppercase tracking-widest order-2 sm:order-1"
            >
              <ArrowLeft size={18} className={isRTL ? 'rotate-180' : ''} />
              <span>{t.prev}</span>
            </button>
            <button 
              disabled={currentPage === allArticles.length - 1}
              onClick={() => setCurrentPage(prev => Math.min(allArticles.length - 1, prev + 1))}
              className="w-full sm:flex-1 flex items-center justify-center gap-3 p-5 rounded-[2rem] bg-black text-white hover:bg-neutral-800 shadow-xl shadow-black/10 disabled:opacity-30 transition-all active:scale-90 text-sm font-black uppercase tracking-widest order-1 sm:order-2"
            >
              <span>{t.next}</span>
              <ArrowRight size={18} className={isRTL ? 'rotate-180' : ''} />
            </button>
          </div>
          
          <div className="text-center text-[10px] font-black text-neutral-400 uppercase tracking-widest">
            {currentPage + 1} / {allArticles.length}
          </div>
        </div>
      )}

      {/* Quick Access Sidebar (Floating on Desktop) */}
      {viewMode === 'list' && (
        <div className="fixed bottom-8 end-8 z-50 flex flex-col gap-2">
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-90 transition-all"
            title={t.backToTop}
          >
            <ArrowUp size={20} />
          </button>
        </div>
      )}
    </div>
  );
};
