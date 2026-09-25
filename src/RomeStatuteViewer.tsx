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
  
  // Flatten articles for book mode
  const allArticles = data.flatMap(p => p.articles);

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
                className={`w-full flex items-center justify-between p-5 hover:bg-neutral-50 transition-colors ${isRTL ? 'flex-row' : 'flex-row-reverse'}`}
              >
                <div className={`flex flex-col ${isRTL ? 'text-right' : 'text-left'}`}>
                  <span className="text-[10px] font-black uppercase text-neutral-400 tracking-widest mb-1">{language === 'ar' ? part.labelAr : part.labelEn}</span>
                  <h4 className="font-black text-sm sm:text-base">{language === 'ar' ? part.titleAr : part.titleEn}</h4>
                </div>
                <div className="text-neutral-400">
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
                <div className={`py-8 border-y-2 border-black/5 flex flex-col items-center text-center ${isRTL ? 'font-arabic' : ''}`}>
                  <span className="text-xs font-black uppercase tracking-[0.3em] text-neutral-300 mb-4">{language === 'ar' ? part.labelAr : part.labelEn}</span>
                  <h2 className="text-2xl font-black max-w-xl leading-tight">{language === 'ar' ? part.titleAr : part.titleEn}</h2>
                </div>
                
                {part.articles.map((art) => (
                  <article 
                    key={art.id} 
                    id={`article-${art.id}`}
                    className="scroll-mt-24 p-6 sm:p-8 bg-white border border-neutral-100 rounded-[2.5rem] shadow-sm hover:shadow-md transition-all group"
                  >
                    <div className={`flex items-start justify-between mb-6 ${isRTL ? 'flex-row' : 'flex-row-reverse'}`}>
                      <div className={`flex flex-col ${isRTL ? 'items-start' : 'items-end'}`}>
                        <span className="text-[10px] font-black bg-black text-white px-3 py-1 rounded-full mb-3 uppercase tracking-tighter">
                          {language === 'ar' ? itemLabelAr : itemLabelEn} {art.number}
                        </span>
                        <h3 className={`text-lg sm:text-xl font-black ${isRTL ? 'text-right' : 'text-left'}`}>
                          {language === 'ar' ? art.titleAr : art.titleEn}
                        </h3>
                      </div>
                      <button 
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="p-3 rounded-full hover:bg-neutral-50 text-neutral-200 hover:text-black transition-all"
                        title={t.backToTop}
                      >
                        <ArrowUp size={18} />
                      </button>
                    </div>
                    
                    <div className="text-justify">
                      <TranslatableText text={language === 'ar' ? art.contentAr : art.contentEn} isEnglish={language === 'en'} />
                    </div>
                  </article>
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

              <div className={`relative z-10 flex flex-col h-full ${isRTL ? 'text-right' : 'text-left'}`}>
                <div className="mb-8">
                  <span className="text-xs font-black uppercase text-neutral-400 tracking-widest mb-4 block">
                    {language === 'ar' ? documentTitleAr : documentTitleEn}
                  </span>
                  <span className="inline-block text-[10px] font-black bg-neutral-100 text-neutral-500 px-3 py-1 rounded-full mb-3 uppercase tracking-widest">
                    {language === 'ar' ? itemLabelAr : itemLabelEn} {allArticles[currentPage].number}
                  </span>
                  <h2 className="text-2xl sm:text-4xl font-black leading-tight">
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
          <div className="flex items-center justify-between gap-4">
            <button 
              disabled={currentPage === allArticles.length - 1}
              onClick={() => setCurrentPage(prev => Math.min(allArticles.length - 1, prev + 1))}
              className="flex-1 flex items-center justify-center gap-3 p-5 rounded-[2rem] bg-black text-white hover:bg-neutral-800 shadow-xl shadow-black/10 disabled:opacity-30 transition-all active:scale-90 text-sm font-black uppercase tracking-widest"
            >
              <span>{t.next}</span>
              <ArrowRight size={18} className={isRTL ? 'rotate-180' : ''} />
            </button>
            <button 
              disabled={currentPage === 0}
              onClick={() => setCurrentPage(prev => Math.max(0, prev - 1))}
              className="flex-1 flex items-center justify-center gap-3 p-5 rounded-[2rem] border border-neutral-200 bg-white hover:bg-neutral-50 disabled:opacity-30 transition-all active:scale-90 text-sm font-black uppercase tracking-widest"
            >
              <ArrowLeft size={18} className={isRTL ? 'rotate-180' : ''} />
              <span>{t.prev}</span>
            </button>
          </div>
          
          <div className="text-center text-[10px] font-black text-neutral-400 uppercase tracking-widest">
            {currentPage + 1} / {allArticles.length}
          </div>
        </div>
      )}

      {/* Quick Access Sidebar (Floating on Desktop) */}
      {viewMode === 'list' && (
        <div className={`fixed bottom-8 z-50 flex flex-col gap-2 ${isRTL ? 'left-8' : 'right-8'}`}>
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
