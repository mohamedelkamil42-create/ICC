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
  highlightTerm?: string | null;
  documentTitleAr: string;
  documentTitleEn: string;
  itemLabelAr: string;
  itemLabelEn: string;
}

export const RomeStatuteViewer: React.FC<RomeStatuteViewerProps> = ({ 
  data, 
  language, 
  highlightId, 
  highlightTerm,
  documentTitleAr, 
  documentTitleEn, 
  itemLabelAr, 
  itemLabelEn 
}) => {
  const [viewMode, setViewMode] = useState<'list' | 'book'>('list');
  const [expandedPart, setExpandedPart] = useState<string | null>(data[0]?.id || null);
  const [currentPage, setCurrentPage] = useState(0);
  const isRTL = language === 'ar';
  const viewerTopRef = useRef<HTMLDivElement>(null);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (viewerTopRef.current) {
        const topPos = viewerTopRef.current.getBoundingClientRect().top;
        setShowBackToTop(topPos < -150 || window.scrollY > 350);
      } else {
        setShowBackToTop(window.scrollY > 350);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    if (viewerTopRef.current) {
      const yOffset = -90;
      const y = viewerTopRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };
  
  useEffect(() => {
    if (highlightId) {
      // Find which part contains this article to expand it
      const partWithArticle = data.find(p => p.articles.some(a => a.id === highlightId));
      if (partWithArticle) {
        setExpandedPart(partWithArticle.id);
        setViewMode('list');

        // Immediate and reliable jump to content with retry mechanism
        const tryScroll = (attempts = 0) => {
          const element = document.getElementById(`article-${highlightId}`);
          if (element) {
            const yOffset = -90;
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });

            // If a specific searched term was provided, fine-tune scroll to it after article settles
            if (highlightTerm) {
              setTimeout(() => {
                const termTarget = element.querySelector('#search-highlight-target');
                if (termTarget) {
                  termTarget.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
              }, 400);
            }
          } else if (attempts < 10) {
            setTimeout(() => tryScroll(attempts + 1), 100);
          }
        };

        setTimeout(() => tryScroll(), 120);
      }
    }
  }, [highlightId, highlightTerm, data]);
  
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
    articles: language === 'ar' 
      ? (itemLabelAr === 'القاعدة' ? 'القواعد' : (itemLabelAr === 'اللائحة' ? 'اللوائح' : (itemLabelAr === 'البند' ? 'البنود' : 'المواد'))) 
      : (itemLabelEn === 'Rule' ? 'Rules' : (itemLabelEn === 'Regulation' ? 'Regulations' : 'Articles')),
    listMode: language === 'ar' ? 'عرض القائمة' : 'List View',
    bookMode: language === 'ar' ? 'عرض الكتاب' : 'Book View',
    backToTop: language === 'ar' ? 'الرجوع للأعلى' : 'Back to Top',
    next: language === 'ar' ? `${itemLabelAr} التالية` : `Next ${itemLabelEn}`,
    prev: language === 'ar' ? `${itemLabelAr} السابقة` : `Previous ${itemLabelEn}`,
  };

const observerCallbacks = new Map<Element, () => void>();
let sharedObserver: IntersectionObserver | null = null;

function observeArticleElement(el: Element, onVisible: () => void): () => void {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
    onVisible();
    return () => {};
  }

  if (!sharedObserver) {
    sharedObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cb = observerCallbacks.get(entry.target);
            if (cb) {
              cb();
              observerCallbacks.delete(entry.target);
              sharedObserver?.unobserve(entry.target);
            }
          }
        });
      },
      { rootMargin: '700px' }
    );
  }

  observerCallbacks.set(el, onVisible);
  sharedObserver.observe(el);

  return () => {
    observerCallbacks.delete(el);
    sharedObserver?.unobserve(el);
  };
}

  // Helper component for lazy rendering of articles to improve performance
  const ArticleItem = React.memo(({ 
    art, 
    isRTL, 
    language, 
    itemLabelAr, 
    itemLabelEn, 
    t,
    isHighlighted,
    highlightTerm,
    onScrollToTop
  }: { 
    art: Article, 
    isRTL: boolean, 
    language: string, 
    itemLabelAr: string, 
    itemLabelEn: string,
    t: any,
    isHighlighted: boolean,
    highlightTerm?: string | null,
    onScrollToTop: () => void
  }) => {
    const [isVisible, setIsVisible] = useState(isHighlighted);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
      if (isHighlighted) {
        setIsVisible(true);
      }
    }, [isHighlighted]);

    useEffect(() => {
      if (isVisible || !ref.current) return;
      return observeArticleElement(ref.current, () => setIsVisible(true));
    }, [isVisible]);

    return (
      <article 
        ref={ref}
        id={`article-${art.id}`}
        className={`scroll-mt-24 p-5 sm:p-6 md:p-8 bg-white border rounded-2xl sm:rounded-[2.5rem] transition-all group min-h-[140px] ${
          isHighlighted 
            ? 'border-black ring-2 ring-black/80 shadow-2xl bg-neutral-50/40 relative' 
            : 'border-neutral-100 shadow-sm hover:shadow-md'
        }`}
      >
        {isHighlighted && (
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-black text-white text-[11px] font-bold rounded-full mb-4 shadow-sm animate-pulse">
            <span className="w-2 h-2 rounded-full bg-white"></span>
            <span>{language === 'ar' ? 'الموقع المحدد في البحث' : 'Exact Search Match Location'}</span>
          </div>
        )}

        <div className={`flex flex-col mb-6 border-b border-neutral-100 pb-4 w-full ${isRTL ? 'items-start text-right' : 'items-start text-left'}`}>
          <div className="inline-flex items-center gap-2.5 mb-2">
            <span className={`text-[11px] font-black uppercase tracking-wider ${isHighlighted ? 'text-black' : 'text-neutral-500'}`}>
              {language === 'ar' ? itemLabelAr : itemLabelEn} {art.number}
            </span>
            <div className={`w-8 h-[2px] rounded-full ${isHighlighted ? 'bg-black' : 'bg-neutral-200'}`}></div>
          </div>
          <h3 className={`text-xl sm:text-2xl font-black text-neutral-900 leading-snug w-full ${isRTL ? 'font-arabic text-right' : 'text-left'}`}>
            {language === 'ar' ? art.titleAr : art.titleEn}
          </h3>
        </div>
        
        <div className="text-justify">
          {isVisible ? (
            <TranslatableText 
              text={language === 'ar' ? art.contentAr : art.contentEn} 
              isEnglish={language === 'en'} 
              highlightTerm={isHighlighted ? highlightTerm : undefined}
            />
          ) : (
            <div className="h-32 flex items-center justify-center border border-dashed border-neutral-100 rounded-2xl bg-neutral-50/30">
              <div className="flex flex-col items-center gap-2">
                <div className="w-6 h-6 border-2 border-neutral-200 border-t-black rounded-full animate-spin"></div>
                <span className="text-[10px] font-black uppercase tracking-widest text-neutral-300">Loading Text...</span>
              </div>
            </div>
          )}
        </div>

        {/* Minimal, elegant in-card top link */}
        <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-400">
          <span>{language === 'ar' ? itemLabelAr : itemLabelEn} {art.number}</span>
          <button 
            type="button"
            onClick={onScrollToTop}
            className="inline-flex items-center gap-1 text-neutral-400 hover:text-black transition-colors"
            title={language === 'ar' ? 'الرجوع للأعلى' : 'Back to top'}
          >
            <span>{language === 'ar' ? 'للأعلى' : 'Top'}</span>
            <ArrowUp size={12} />
          </button>
        </div>
      </article>
    );
  });

  return (
    <div ref={viewerTopRef} dir={isRTL ? 'rtl' : 'ltr'} className={`flex flex-col gap-6 w-full ${isRTL ? 'font-arabic text-right' : 'text-left'}`}>
      
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
                className="w-full flex items-center justify-between p-4 sm:p-5 hover:bg-neutral-50 transition-colors"
              >
                <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                  <div className="w-1.5 h-8 bg-black rounded-full shrink-0"></div>
                  <div className={`flex flex-col min-w-0 ${isRTL ? 'items-start text-right' : 'items-start text-left'}`}>
                    <span className="text-[10px] font-black uppercase text-neutral-400 tracking-wider mb-0.5">{language === 'ar' ? part.labelAr : part.labelEn}</span>
                    <h4 className={`font-black text-sm sm:text-base text-neutral-900 truncate ${isRTL ? 'font-arabic' : ''}`}>{language === 'ar' ? part.titleAr : part.titleEn}</h4>
                  </div>
                </div>
                <div className="text-neutral-400 shrink-0">
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
                    <div className="p-3 flex flex-col gap-1.5" dir={isRTL ? 'rtl' : 'ltr'}>
                      {part.articles.map((art) => (
                        <button 
                          key={art.id}
                          onClick={() => scrollToArticle(art.id)}
                          className={`flex items-center gap-3 w-full text-right p-3 rounded-2xl bg-white border border-neutral-100 hover:border-black hover:bg-neutral-50 transition-all group ${isRTL ? 'text-right' : 'text-left'}`}
                        >
                          <span className="flex-shrink-0 px-2 h-10 flex items-center justify-center rounded-xl bg-neutral-100 group-hover:bg-black group-hover:text-white text-[9px] font-black transition-colors">
                            {language === 'ar' ? itemLabelAr : (itemLabelEn === 'Article' ? 'Art.' : (itemLabelEn === 'Regulation' ? 'Reg.' : itemLabelEn))} {art.number}
                          </span>
                          <span className={`text-[11px] font-bold text-neutral-600 group-hover:text-black transition-colors truncate ${isRTL ? 'font-arabic' : ''}`}>
                            {language === 'ar' ? art.titleAr : art.titleEn}
                          </span>
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
                <div className={`py-8 sm:py-10 border-b border-neutral-100 flex flex-col relative w-full ${isRTL ? 'items-start text-right font-arabic pr-6 sm:pr-8' : 'items-start text-left pl-6 sm:pl-8'}`}>
                  <div className={`absolute top-8 sm:top-10 bottom-8 sm:bottom-10 w-1.5 bg-black rounded-full ${isRTL ? 'right-0' : 'left-0'}`}></div>
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-neutral-400 mb-2">{language === 'ar' ? part.labelAr : part.labelEn}</span>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-black leading-tight text-neutral-900 w-full">{language === 'ar' ? part.titleAr : part.titleEn}</h2>
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
                    isHighlighted={art.id === highlightId}
                    highlightTerm={highlightTerm}
                    onScrollToTop={scrollToTop}
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
              className={`min-h-[420px] sm:min-h-[500px] p-5 sm:p-8 md:p-12 bg-white border border-neutral-100 rounded-2xl sm:rounded-[3rem] shadow-xl shadow-black/5 relative overflow-hidden ${isRTL ? 'font-arabic' : ''}`}
            >
              {/* Page Numbering Decoration */}
              <div className={`absolute top-0 opacity-[0.03] pointer-events-none p-4 sm:p-8 ${isRTL ? 'left-0' : 'right-0'}`}>
                <span className="text-[6rem] sm:text-[9rem] md:text-[12rem] font-black leading-none select-none pointer-events-none">{currentPage + 1}</span>
              </div>

              <div className="relative z-10 flex flex-col h-full">
                <div className={`flex flex-col mb-8 sm:mb-12 w-full ${isRTL ? 'items-start text-right' : 'items-start text-left'}`}>
                  <div className="flex flex-col mb-4 sm:mb-6 w-full">
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-neutral-400 mb-1 block">
                      {language === 'ar' ? documentTitleAr : documentTitleEn}
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                      {language === 'ar' ? allArticles[currentPage].partTitleAr : allArticles[currentPage].partTitleEn}
                    </span>
                  </div>
                  
                  <div className="inline-flex items-center gap-2.5 mb-3">
                    <span className="text-xs font-black uppercase tracking-wider text-neutral-900">
                      {language === 'ar' ? itemLabelAr : itemLabelEn} {allArticles[currentPage].number}
                    </span>
                    <div className="w-8 sm:w-12 h-[2px] bg-black/20 rounded-full"></div>
                  </div>
                  <h2 className={`text-2xl sm:text-4xl md:text-5xl font-black text-neutral-900 leading-tight w-full ${isRTL ? 'font-arabic text-right' : 'text-left'}`}>
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
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
            <button 
              disabled={currentPage === 0}
              onClick={() => setCurrentPage(prev => Math.max(0, prev - 1))}
              className="w-full sm:flex-1 flex items-center justify-center gap-3 p-4 sm:p-5 rounded-2xl sm:rounded-[2rem] border border-neutral-200 bg-white hover:bg-neutral-50 disabled:opacity-30 transition-all active:scale-90 text-sm font-black uppercase tracking-widest order-2 sm:order-1"
            >
              <ArrowLeft size={18} className={isRTL ? 'rotate-180' : ''} />
              <span>{t.prev}</span>
            </button>
            <button 
              disabled={currentPage === allArticles.length - 1}
              onClick={() => setCurrentPage(prev => Math.min(allArticles.length - 1, prev + 1))}
              className="w-full sm:flex-1 flex items-center justify-center gap-3 p-4 sm:p-5 rounded-2xl sm:rounded-[2rem] bg-black text-white hover:bg-neutral-800 shadow-xl shadow-black/10 disabled:opacity-30 transition-all active:scale-90 text-sm font-black uppercase tracking-widest order-1 sm:order-2"
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

      {/* Quick Access Back to Top (Simple, Compact, Effective) */}
      <AnimatePresence>
        {viewMode === 'list' && showBackToTop && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.15 }}
            className="fixed bottom-6 start-6 z-40 print:hidden"
            dir={isRTL ? 'rtl' : 'ltr'}
          >
            <button 
              type="button"
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full bg-black text-white hover:bg-neutral-800 shadow-md border border-neutral-800 flex items-center justify-center hover:scale-105 active:scale-90 transition-all group"
              title={language === 'ar' ? 'الرجوع للأعلى' : 'Back to top'}
              aria-label={language === 'ar' ? 'الرجوع للأعلى' : 'Back to top'}
            >
              <ArrowUp size={18} className="group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
