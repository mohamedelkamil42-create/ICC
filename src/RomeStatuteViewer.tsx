import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronDown, 
  ChevronUp, 
  BookOpen, 
  List, 
  ArrowUp, 
  ArrowDown, 
  ArrowRight, 
  ArrowLeft,
  Copy,
  Check,
  Bookmark,
  BookmarkCheck,
  Columns,
  Search,
  X,
  Share2
} from 'lucide-react';
import { TranslatableText } from './TranslatableText';
import { safeStorage } from './storageUtils';

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

export interface BookmarkRecord {
  id: string;
  number: string;
  titleAr: string;
  titleEn: string;
  documentTitleAr: string;
  documentTitleEn: string;
  itemLabelAr: string;
  itemLabelEn: string;
  timestamp: number;
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

interface ArticleItemProps {
  art: Article;
  isHighlighted: boolean;
  highlightTermCustom?: string | null;
  language: 'ar' | 'en';
  isRTL: boolean;
  itemLabelAr: string;
  itemLabelEn: string;
  isSaved: boolean;
  isCopied: boolean;
  isCitationCopied: boolean;
  onToggleBookmark: (art: Article) => void;
  onCopyContent: (art: Article, lang: 'ar' | 'en' | 'both') => void;
  onCopyCitation: (art: Article) => void;
  onScrollToTop: () => void;
  tBookmark: string;
  tBookmarked: string;
  tCopyContent: string;
  tCopied: string;
  tCopyCitation: string;
  tCitationCopied: string;
}

const ArticleItem = React.memo<ArticleItemProps>(({
  art,
  isHighlighted,
  highlightTermCustom,
  language,
  isRTL,
  itemLabelAr,
  itemLabelEn,
  isSaved,
  isCopied,
  isCitationCopied,
  onToggleBookmark,
  onCopyContent,
  onCopyCitation,
  onScrollToTop,
  tBookmark,
  tBookmarked,
  tCopyContent,
  tCopied,
  tCopyCitation,
  tCitationCopied,
}) => {
  return (
    <article 
      id={`article-${art.id}`}
      style={{ contentVisibility: 'auto', containIntrinsicSize: '0 200px' }}
      className={`scroll-mt-24 p-5 sm:p-6 md:p-8 bg-white border rounded-2xl sm:rounded-[2.5rem] transition-all group min-h-[140px] ${
        isHighlighted 
          ? 'border-black ring-2 ring-black/80 shadow-2xl bg-neutral-50/40 relative' 
          : 'border-neutral-200/70 shadow-sm hover:shadow-md hover:border-neutral-300'
      }`}
    >
      {isHighlighted && (
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-black text-white text-[11px] font-bold rounded-full mb-4 shadow-sm animate-pulse">
          <span className="w-2 h-2 rounded-full bg-white"></span>
          <span>{language === 'ar' ? 'الموقع المحدد في البحث' : 'Exact Search Match Location'}</span>
        </div>
      )}

      {/* Card Header with Article Title and Action Toolbar */}
      <div className={`flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6 border-b border-neutral-100 pb-4 w-full ${isRTL ? 'items-start text-right' : 'items-start text-left'}`}>
        <div className="flex flex-col min-w-0 flex-1">
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

        {/* Quick Actions Toolbar */}
        <div className="flex items-center gap-1.5 shrink-0 pt-1 flex-wrap">
          {/* Bookmark button */}
          <button
            type="button"
            onClick={() => onToggleBookmark(art)}
            className={`p-2 rounded-xl border text-xs font-bold transition-all flex items-center gap-1 ${
              isSaved 
                ? 'bg-black text-white border-black shadow-sm' 
                : 'bg-white text-neutral-500 border-neutral-200 hover:border-black hover:text-black'
            }`}
            title={isSaved ? tBookmarked : tBookmark}
          >
            {isSaved ? <BookmarkCheck size={14} /> : <Bookmark size={14} />}
            <span className="hidden md:inline text-[10px]">{isSaved ? tBookmarked : tBookmark}</span>
          </button>

          {/* Copy full text button */}
          <button
            type="button"
            onClick={() => onCopyContent(art, language)}
            className="p-2 rounded-xl border border-neutral-200 bg-white text-neutral-500 hover:border-black hover:text-black text-xs font-bold transition-all flex items-center gap-1"
            title={tCopyContent}
          >
            {isCopied ? <Check size={14} className="text-black" /> : <Copy size={14} />}
            <span className="hidden md:inline text-[10px]">{isCopied ? tCopied : tCopyContent}</span>
          </button>

          {/* Copy citation button */}
          <button
            type="button"
            onClick={() => onCopyCitation(art)}
            className="p-2 rounded-xl border border-neutral-200 bg-white text-neutral-500 hover:border-black hover:text-black text-xs font-bold transition-all flex items-center gap-1"
            title={tCopyCitation}
          >
            {isCitationCopied ? <Check size={14} className="text-black" /> : <Share2 size={14} />}
            <span className="hidden md:inline text-[10px]">{isCitationCopied ? tCitationCopied : tCopyCitation}</span>
          </button>
        </div>
      </div>
      
      {/* Article Content - rendered directly and permanently, zero artificial delay or reload */}
      <div className="text-justify leading-relaxed">
        <TranslatableText 
          text={language === 'ar' ? art.contentAr : art.contentEn} 
          isEnglish={language === 'en'} 
          highlightTerm={isHighlighted ? highlightTermCustom : undefined}
        />
      </div>

      {/* Minimal in-card top link */}
      <div className="mt-6 pt-3 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-400">
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

interface BilingualArticleItemProps {
  art: Article;
  isHighlighted: boolean;
  highlightTermCustom?: string | null;
  language: 'ar' | 'en';
  itemLabelAr: string;
  itemLabelEn: string;
  isSaved: boolean;
  isCopied: boolean;
  isCitationCopied: boolean;
  onToggleBookmark: (art: Article) => void;
  onCopyContent: (art: Article, lang: 'ar' | 'en' | 'both') => void;
  onCopyCitation: (art: Article) => void;
  onScrollToTop: () => void;
  tBookmark: string;
  tBookmarked: string;
  tCopyContent: string;
  tCopied: string;
  tCopyCitation: string;
  tCitationCopied: string;
  tArabicOfficial: string;
  tEnglishOfficial: string;
}

const BilingualArticleItem = React.memo<BilingualArticleItemProps>(({
  art,
  isHighlighted,
  highlightTermCustom,
  language,
  itemLabelAr,
  itemLabelEn,
  isSaved,
  isCopied,
  isCitationCopied,
  onToggleBookmark,
  onCopyContent,
  onCopyCitation,
  onScrollToTop,
  tBookmark,
  tBookmarked,
  tCopyContent,
  tCopied,
  tCopyCitation,
  tCitationCopied,
  tArabicOfficial,
  tEnglishOfficial,
}) => {
  return (
    <article 
      id={`article-${art.id}`}
      style={{ contentVisibility: 'auto', containIntrinsicSize: '0 260px' }}
      className={`scroll-mt-24 p-5 sm:p-6 md:p-8 bg-white border rounded-2xl sm:rounded-[2.5rem] transition-all group min-h-[140px] ${
        isHighlighted 
          ? 'border-black ring-2 ring-black/80 shadow-2xl bg-neutral-50/40 relative' 
          : 'border-neutral-200/70 shadow-sm hover:shadow-md'
      }`}
    >
      {/* Header with Title and Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 border-b border-neutral-100 pb-4 w-full">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-xl bg-black text-white text-xs font-black uppercase">
            {itemLabelAr} {art.number} / {itemLabelEn} {art.number}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => onToggleBookmark(art)}
            className={`p-2 rounded-xl border text-xs font-bold transition-all flex items-center gap-1 ${
              isSaved ? 'bg-black text-white border-black' : 'bg-white text-neutral-600 border-neutral-200 hover:border-black'
            }`}
          >
            {isSaved ? <BookmarkCheck size={14} /> : <Bookmark size={14} />}
            <span className="text-[10px]">{isSaved ? tBookmarked : tBookmark}</span>
          </button>

          <button
            type="button"
            onClick={() => onCopyContent(art, 'both')}
            className="p-2 rounded-xl border border-neutral-200 bg-white text-neutral-600 hover:border-black text-xs font-bold transition-all flex items-center gap-1"
          >
            {isCopied ? <Check size={14} className="text-black" /> : <Copy size={14} />}
            <span className="text-[10px]">{isCopied ? tCopied : tCopyContent}</span>
          </button>

          <button
            type="button"
            onClick={() => onCopyCitation(art)}
            className="p-2 rounded-xl border border-neutral-200 bg-white text-neutral-600 hover:border-black text-xs font-bold transition-all flex items-center gap-1"
          >
            {isCitationCopied ? <Check size={14} className="text-black" /> : <Share2 size={14} />}
            <span className="text-[10px]">{isCitationCopied ? tCitationCopied : tCopyCitation}</span>
          </button>
        </div>
      </div>

      {/* Side-by-Side Dual Columns */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 divide-y lg:divide-y-0 lg:divide-x lg:divide-x-reverse divide-neutral-100">
        {/* Arabic Column (RTL) */}
        <div dir="rtl" className="flex flex-col gap-3 font-arabic pt-4 lg:pt-0">
          <div className="flex items-center justify-between border-b border-neutral-100 pb-2">
            <span className="text-[11px] font-black uppercase text-neutral-400 tracking-wider">
              {tArabicOfficial}
            </span>
            <span className="text-xs font-black text-black">
              {itemLabelAr} {art.number}
            </span>
          </div>
          <h4 className="text-lg font-black text-neutral-900 mb-1">
            {art.titleAr}
          </h4>
          <div className="text-justify leading-relaxed">
            <TranslatableText text={art.contentAr} isEnglish={false} highlightTerm={highlightTermCustom} />
          </div>
        </div>

        {/* English Column (LTR) */}
        <div dir="ltr" className="flex flex-col gap-3 pt-6 lg:pt-0 lg:pl-8">
          <div className="flex items-center justify-between border-b border-neutral-100 pb-2">
            <span className="text-[11px] font-black uppercase text-neutral-400 tracking-wider">
              {tEnglishOfficial}
            </span>
            <span className="text-xs font-black text-black">
              {itemLabelEn} {art.number}
            </span>
          </div>
          <h4 className="text-lg font-black text-neutral-900 mb-1">
            {art.titleEn}
          </h4>
          <div className="text-justify leading-relaxed">
            <TranslatableText text={art.contentEn} isEnglish={true} highlightTerm={highlightTermCustom} />
          </div>
        </div>
      </div>

      {/* Card Footer */}
      <div className="mt-6 pt-3 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-400">
        <span>{itemLabelAr} {art.number} | {itemLabelEn} {art.number}</span>
        <button 
          type="button"
          onClick={onScrollToTop}
          className="inline-flex items-center gap-1 text-neutral-400 hover:text-black transition-colors"
        >
          <span>{language === 'ar' ? 'للأعلى' : 'Top'}</span>
          <ArrowUp size={12} />
        </button>
      </div>
    </article>
  );
});

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
  const [viewMode, setViewMode] = useState<'list' | 'bilingual' | 'book'>('list');
  const [expandedPart, setExpandedPart] = useState<string | null>(data[0]?.id || null);
  const [currentPage, setCurrentPage] = useState(0);
  const [filterQuery, setFilterQuery] = useState('');
  const [bookmarks, setBookmarks] = useState<BookmarkRecord[]>(() => {
    try {
      const saved = safeStorage.getItem('icc_bookmarked_articles');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [showBookmarksModal, setShowBookmarksModal] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [citationCopiedId, setCitationCopiedId] = useState<string | null>(null);
  const [linkCopiedId, setLinkCopiedId] = useState<string | null>(null);

  const isRTL = language === 'ar';
  const viewerTopRef = useRef<HTMLDivElement>(null);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Sync bookmarks with storage
  const handleToggleBookmark = useCallback((art: Article) => {
    setBookmarks((prev) => {
      const exists = prev.some((b) => b.id === art.id);
      let updated: BookmarkRecord[];
      if (exists) {
        updated = prev.filter((b) => b.id !== art.id);
      } else {
        const newRecord: BookmarkRecord = {
          id: art.id,
          number: art.number,
          titleAr: art.titleAr,
          titleEn: art.titleEn,
          documentTitleAr,
          documentTitleEn,
          itemLabelAr,
          itemLabelEn,
          timestamp: Date.now(),
        };
        updated = [newRecord, ...prev];
      }
      safeStorage.setItem('icc_bookmarked_articles', JSON.stringify(updated));
      return updated;
    });
  }, [documentTitleAr, documentTitleEn, itemLabelAr, itemLabelEn]);

  const isBookmarked = useCallback((artId: string) => {
    return bookmarks.some((b) => b.id === artId);
  }, [bookmarks]);

  const handleCopyContent = useCallback((art: Article, lang: 'ar' | 'en' | 'both' = 'ar') => {
    let text = '';
    const label = lang === 'ar' ? itemLabelAr : itemLabelEn;
    const title = lang === 'ar' ? art.titleAr : art.titleEn;
    const content = lang === 'ar' ? art.contentAr : art.contentEn;

    if (lang === 'both') {
      text = `[${documentTitleAr} - ${itemLabelAr} ${art.number}: ${art.titleAr}]\n${art.contentAr}\n\n[${documentTitleEn} - ${itemLabelEn} ${art.number}: ${art.titleEn}]\n${art.contentEn}`;
    } else {
      text = `${label} ${art.number}: ${title}\n\n${content}`;
    }

    navigator.clipboard?.writeText(text);
    setCopiedId(art.id);
    setTimeout(() => setCopiedId(null), 2000);
  }, [documentTitleAr, documentTitleEn, itemLabelAr, itemLabelEn]);

  const handleCopyCitation = useCallback((art: Article) => {
    const citation = isRTL 
      ? `[المحكمة الجنائية الدولية] ${documentTitleAr}، ${itemLabelAr} ${art.number} (${art.titleAr}).`
      : `[International Criminal Court] ${documentTitleEn}, ${itemLabelEn} ${art.number} (${art.titleEn}).`;

    navigator.clipboard?.writeText(citation);
    setCitationCopiedId(art.id);
    setTimeout(() => setCitationCopiedId(null), 2000);
  }, [documentTitleAr, documentTitleEn, itemLabelAr, itemLabelEn, isRTL]);

  const handleCopyLink = useCallback((art: Article) => {
    const url = `${window.location.origin}${window.location.pathname}#article-${art.id}`;
    navigator.clipboard?.writeText(url);
    setLinkCopiedId(art.id);
    setTimeout(() => setLinkCopiedId(null), 2000);
  }, []);

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

  const scrollToArticle = (id: string) => {
    const element = document.getElementById(`article-${id}`);
    if (element) {
      const yOffset = -100;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };
  
  useEffect(() => {
    if (highlightId) {
      const partWithArticle = data.find(p => p.articles.some(a => a.id === highlightId));
      if (partWithArticle) {
        setExpandedPart(partWithArticle.id);
        if (viewMode === 'book') setViewMode('list');

        const tryScroll = (attempts = 0) => {
          const element = document.getElementById(`article-${highlightId}`);
          if (element) {
            const yOffset = -90;
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });

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
  }, [highlightId, highlightTerm, data, viewMode]);
  
  // Flatten articles for book mode with part context - Memoized for performance
  const allArticles = useMemo(() => data.flatMap(p => p.articles.map(a => ({
    ...a,
    partTitleAr: p.titleAr,
    partTitleEn: p.titleEn,
    partLabelAr: p.labelAr,
    partLabelEn: p.labelEn
  }))), [data]);

  // Real-time filter within current document
  const filteredData = useMemo(() => {
    const q = filterQuery.trim().toLowerCase();
    if (!q) return data;

    return data
      .map((part) => {
        const matchedArticles = part.articles.filter((art) => {
          const numMatch = art.number.toLowerCase().includes(q);
          const titleArMatch = art.titleAr.toLowerCase().includes(q);
          const titleEnMatch = art.titleEn.toLowerCase().includes(q);
          const contentArMatch = art.contentAr.toLowerCase().includes(q);
          const contentEnMatch = art.contentEn.toLowerCase().includes(q);
          return numMatch || titleArMatch || titleEnMatch || contentArMatch || contentEnMatch;
        });

        return {
          ...part,
          articles: matchedArticles,
        };
      })
      .filter((part) => part.articles.length > 0);
  }, [data, filterQuery]);

  const totalFilteredArticles = useMemo(() => {
    return filteredData.reduce((acc, part) => acc + part.articles.length, 0);
  }, [filteredData]);

  // When searching, auto-expand the first matching part
  useEffect(() => {
    if (filterQuery.trim() && filteredData.length > 0) {
      setExpandedPart(filteredData[0].id);
    }
  }, [filterQuery, filteredData]);

  const t = {
    parts: language === 'ar' ? 'الأبواب' : 'Parts',
    articles: language === 'ar' 
      ? (itemLabelAr === 'القاعدة' ? 'القواعد' : (itemLabelAr === 'اللائحة' ? 'اللوائح' : (itemLabelAr === 'البند' ? 'البنود' : 'المواد'))) 
      : (itemLabelEn === 'Rule' ? 'Rules' : (itemLabelEn === 'Regulation' ? 'Regulations' : 'Articles')),
    listMode: language === 'ar' ? 'عرض القائمة' : 'List View',
    bilingualMode: language === 'ar' ? 'مقارنة اللغتين (عربي / EN)' : 'Bilingual View',
    bookMode: language === 'ar' ? 'عرض الكتاب' : 'Book View',
    bookmarksBtn: language === 'ar' ? `المحفوظات (${bookmarks.length})` : `Saved (${bookmarks.length})`,
    filterPlaceholder: language === 'ar' ? `تصفية سريعة بالرقم أو العنوان داخل هذه الوثيقة (${allArticles.length} ${itemLabelAr === 'القاعدة' ? 'قاعدة' : (itemLabelAr === 'اللائحة' ? 'لائحة' : 'مادة')})...` : `Filter by number or title in this document (${allArticles.length} provisions)...`,
    backToTop: language === 'ar' ? 'الرجوع للأعلى' : 'Back to Top',
    next: language === 'ar' ? `${itemLabelAr} التالية` : `Next ${itemLabelEn}`,
    prev: language === 'ar' ? `${itemLabelAr} السابقة` : `Previous ${itemLabelEn}`,
    copyContent: language === 'ar' ? 'نسخ النص' : 'Copy Text',
    copied: language === 'ar' ? 'تم النسخ' : 'Copied',
    copyCitation: language === 'ar' ? 'نسخ الاستشهاد' : 'Cite',
    citationCopied: language === 'ar' ? 'تم نسخ الاستشهاد' : 'Citation Copied',
    shareLink: language === 'ar' ? 'رابط المادة' : 'Copy Link',
    linkCopied: language === 'ar' ? 'تم نسخ الرابط' : 'Link Copied',
    bookmark: language === 'ar' ? 'حفظ' : 'Save',
    bookmarked: language === 'ar' ? 'محفوظ' : 'Saved',
    noFilteredResults: language === 'ar' ? 'لا توجد نصوص مطابقة للتصفية الحالية' : 'No provisions matched your filter',
    clearFilter: language === 'ar' ? 'إلغاء التصفية' : 'Clear filter',
    savedArticlesModalTitle: language === 'ar' ? 'المواد والنصوص القانونية المحفوظة' : 'Saved Legal Provisions',
    noBookmarksYet: language === 'ar' ? 'لم تقم بحفظ أي مواد بعد. انقر على أيقونة الإشارة المرجعية بجانب أي مادة لحفظها هنا.' : 'No bookmarked provisions yet. Click the bookmark icon on any article to save it here.',
    jumpToProvision: language === 'ar' ? 'انتقال للمادة' : 'Jump to Article',
    removeBookmark: language === 'ar' ? 'إزالة' : 'Remove',
    arabicOfficial: language === 'ar' ? 'النص العربي (المعتمد)' : 'Arabic (Official)',
    englishOfficial: language === 'ar' ? 'النص الإنجليزي (المعتمد)' : 'English (Official)',
  };

  return (
    <div ref={viewerTopRef} dir={isRTL ? 'rtl' : 'ltr'} className={`flex flex-col gap-6 w-full ${isRTL ? 'font-arabic text-right' : 'text-left'}`}>
      
      {/* Top Controls & Search Bar */}
      <div className="flex flex-col gap-3 bg-neutral-50 p-3 sm:p-4 rounded-3xl border border-neutral-200/80 shadow-sm">
        
        {/* Upper Controls Row */}
        <div className="flex flex-wrap items-center justify-between gap-2.5">
          {/* Mode Switcher */}
          <div className="flex items-center gap-1 bg-white p-1 rounded-2xl border border-neutral-200/70 shadow-xs">
            <button 
              onClick={() => setViewMode('list')}
              className={`flex items-center gap-1.5 px-3 sm:px-4 py-2 rounded-xl text-xs font-black transition-all ${viewMode === 'list' ? 'bg-black text-white shadow-sm' : 'text-neutral-500 hover:bg-neutral-100'}`}
              title={t.listMode}
            >
              <List size={14} />
              <span>{t.listMode}</span>
            </button>

            <button 
              onClick={() => setViewMode('bilingual')}
              className={`flex items-center gap-1.5 px-3 sm:px-4 py-2 rounded-xl text-xs font-black transition-all ${viewMode === 'bilingual' ? 'bg-black text-white shadow-sm' : 'text-neutral-500 hover:bg-neutral-100'}`}
              title={t.bilingualMode}
            >
              <Columns size={14} />
              <span>{t.bilingualMode}</span>
            </button>

            <button 
              onClick={() => setViewMode('book')}
              className={`flex items-center gap-1.5 px-3 sm:px-4 py-2 rounded-xl text-xs font-black transition-all ${viewMode === 'book' ? 'bg-black text-white shadow-sm' : 'text-neutral-500 hover:bg-neutral-100'}`}
              title={t.bookMode}
            >
              <BookOpen size={14} />
              <span>{t.bookMode}</span>
            </button>
          </div>

          {/* Bookmarks Quick Access Button */}
          <button
            onClick={() => setShowBookmarksModal(true)}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-2xl border text-xs font-bold transition-all shadow-xs ${
              bookmarks.length > 0 
                ? 'bg-white text-black border-neutral-300 hover:border-black' 
                : 'bg-white/60 text-neutral-400 border-neutral-200 hover:border-neutral-300'
            }`}
          >
            <Bookmark size={14} className={bookmarks.length > 0 ? 'text-black' : 'text-neutral-400'} />
            <span>{t.bookmarksBtn}</span>
          </button>
        </div>

        {/* Live Filter Bar inside current document */}
        <div className="relative w-full">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none text-neutral-400">
            <Search size={15} />
          </div>
          <input
            type="text"
            value={filterQuery}
            onChange={(e) => setFilterQuery(e.target.value)}
            placeholder={t.filterPlaceholder}
            className="w-full h-11 ps-10 pe-10 bg-white border border-neutral-200 rounded-2xl text-xs sm:text-sm font-medium text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all shadow-xs"
          />
          {filterQuery && (
            <button
              onClick={() => setFilterQuery('')}
              className="absolute inset-y-0 end-0 flex items-center pe-3 text-neutral-400 hover:text-black transition-colors"
              title={t.clearFilter}
            >
              <X size={15} />
            </button>
          )}
        </div>

        {/* Filter results status indicator */}
        {filterQuery.trim() && (
          <div className="flex items-center justify-between text-xs text-neutral-600 px-1 pt-1">
            <span>
              {language === 'ar' 
                ? `تم العثور على ${totalFilteredArticles} ${itemLabelAr === 'القاعدة' ? 'قاعدة' : (itemLabelAr === 'اللائحة' ? 'لائحة' : 'مادة')} مطابقة` 
                : `Found ${totalFilteredArticles} matching provisions`}
            </span>
            <button 
              onClick={() => setFilterQuery('')} 
              className="text-neutral-500 hover:text-black underline font-bold"
            >
              {t.clearFilter}
            </button>
          </div>
        )}
      </div>

      {/* Bookmarks Modal / Drawer */}
      <AnimatePresence>
        {showBookmarksModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white border border-neutral-200 rounded-3xl p-5 sm:p-6 w-full max-w-xl max-h-[85vh] flex flex-col shadow-2xl overflow-hidden"
              dir={isRTL ? 'rtl' : 'ltr'}
            >
              <div className="flex items-center justify-between border-b border-neutral-100 pb-4 mb-4">
                <div className="flex items-center gap-2.5">
                  <Bookmark className="text-black" size={18} />
                  <h3 className="font-black text-base sm:text-lg text-neutral-900">{t.savedArticlesModalTitle}</h3>
                </div>
                <button 
                  onClick={() => setShowBookmarksModal(false)}
                  className="p-1.5 rounded-full hover:bg-neutral-100 text-neutral-500 hover:text-black transition-colors"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto space-y-2.5 pe-1">
                {bookmarks.length === 0 ? (
                  <div className="py-12 text-center text-neutral-400 text-sm">
                    <Bookmark size={32} className="mx-auto mb-3 opacity-30" />
                    <p>{t.noBookmarksYet}</p>
                  </div>
                ) : (
                  bookmarks.map((b) => (
                    <div 
                      key={b.id}
                      className="p-3.5 rounded-2xl border border-neutral-100 bg-neutral-50/50 hover:bg-neutral-100/70 transition-all flex items-start justify-between gap-3 group"
                    >
                      <div className="min-w-0 flex-1">
                        <div className="text-[10px] font-black uppercase tracking-wider text-neutral-400 mb-1">
                          {language === 'ar' ? b.documentTitleAr : b.documentTitleEn}
                        </div>
                        <div className="font-bold text-sm text-neutral-900 mb-0.5">
                          {language === 'ar' ? b.itemLabelAr : b.itemLabelEn} {b.number}: {language === 'ar' ? b.titleAr : b.titleEn}
                        </div>
                      </div>

                      <div className="flex items-center gap-1.5 shrink-0 pt-1">
                        <button
                          onClick={() => {
                            setShowBookmarksModal(false);
                            scrollToArticle(b.id);
                          }}
                          className="px-3 py-1.5 rounded-xl bg-black text-white hover:bg-neutral-800 text-xs font-bold transition-all shadow-xs"
                        >
                          {t.jumpToProvision}
                        </button>
                        <button
                          onClick={() => {
                            setBookmarks(prev => {
                              const updated = prev.filter(item => item.id !== b.id);
                              safeStorage.setItem('icc_bookmarked_articles', JSON.stringify(updated));
                              return updated;
                            });
                          }}
                          className="p-1.5 rounded-xl text-neutral-400 hover:text-black hover:bg-neutral-200 transition-colors"
                          title={t.removeBookmark}
                        >
                          <X size={15} />
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Main Content Area: List Mode or Bilingual Mode */}
      {viewMode === 'list' || viewMode === 'bilingual' ? (
        <div className="flex flex-col gap-4">
          
          {/* Navigation Dropdown / Accordion for Parts */}
          {filteredData.map((part) => (
            <div key={part.id} className="border border-neutral-200/80 rounded-3xl overflow-hidden bg-white shadow-xs">
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
                <div className="flex items-center gap-2 shrink-0">
                  <span className="text-[11px] font-black text-neutral-400 bg-neutral-100 px-2.5 py-1 rounded-xl">
                    {part.articles.length}
                  </span>
                  <div className="text-neutral-400">
                    {expandedPart === part.id ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </div>
                </div>
              </button>
              
              <AnimatePresence>
                {expandedPart === part.id && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }} 
                    animate={{ height: 'auto', opacity: 1 }} 
                    exit={{ height: 0, opacity: 0 }}
                    className="border-t border-neutral-100 bg-neutral-50/30"
                  >
                    <div className="p-3 flex flex-col gap-1.5" dir={isRTL ? 'rtl' : 'ltr'}>
                      {part.articles.map((art) => (
                        <button 
                          key={art.id}
                          onClick={() => scrollToArticle(art.id)}
                          className={`flex items-center gap-3 w-full text-right p-3 rounded-2xl bg-white border border-neutral-100 hover:border-black hover:bg-neutral-50 transition-all group ${isRTL ? 'text-right' : 'text-left'}`}
                        >
                          <span className="flex-shrink-0 px-2.5 h-9 flex items-center justify-center rounded-xl bg-neutral-100 group-hover:bg-black group-hover:text-white text-[10px] font-black transition-colors">
                            {language === 'ar' ? itemLabelAr : (itemLabelEn === 'Article' ? 'Art.' : (itemLabelEn === 'Regulation' ? 'Reg.' : itemLabelEn))} {art.number}
                          </span>
                          <span className={`text-[12px] font-bold text-neutral-700 group-hover:text-black transition-colors truncate ${isRTL ? 'font-arabic' : ''}`}>
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

          {filteredData.length === 0 && (
            <div className="py-16 text-center bg-white border border-dashed border-neutral-200 rounded-3xl">
              <p className="text-neutral-600 font-bold mb-2">{t.noFilteredResults}</p>
              <button 
                onClick={() => setFilterQuery('')}
                className="px-4 py-2 bg-black text-white text-xs font-bold rounded-full hover:bg-neutral-800 transition-colors"
              >
                {t.clearFilter}
              </button>
            </div>
          )}

          {/* Full List or Bilingual Content */}
          <div className="mt-8 flex flex-col gap-12">
            {filteredData.map((part) => (
              <div key={`content-${part.id}`} className="flex flex-col gap-8">
                <div className={`py-8 sm:py-10 border-b border-neutral-200 flex flex-col relative w-full ${isRTL ? 'items-start text-right font-arabic pr-6 sm:pr-8' : 'items-start text-left pl-6 sm:pl-8'}`}>
                  <div className={`absolute top-8 sm:top-10 bottom-8 sm:bottom-10 w-1.5 bg-black rounded-full ${isRTL ? 'right-0' : 'left-0'}`}></div>
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-neutral-400 mb-2">{language === 'ar' ? part.labelAr : part.labelEn}</span>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-black leading-tight text-neutral-900 w-full">{language === 'ar' ? part.titleAr : part.titleEn}</h2>
                </div>
                
                {part.articles.map((art) => (
                  viewMode === 'bilingual' ? (
                    <BilingualArticleItem 
                      key={art.id} 
                      art={art} 
                      isHighlighted={art.id === highlightId}
                      highlightTermCustom={highlightTerm}
                      language={language}
                      itemLabelAr={itemLabelAr}
                      itemLabelEn={itemLabelEn}
                      isSaved={isBookmarked(art.id)}
                      isCopied={copiedId === art.id}
                      isCitationCopied={citationCopiedId === art.id}
                      onToggleBookmark={handleToggleBookmark}
                      onCopyContent={handleCopyContent}
                      onCopyCitation={handleCopyCitation}
                      onScrollToTop={scrollToTop}
                      tBookmark={t.bookmark}
                      tBookmarked={t.bookmarked}
                      tCopyContent={t.copyContent}
                      tCopied={t.copied}
                      tCopyCitation={t.copyCitation}
                      tCitationCopied={t.citationCopied}
                      tArabicOfficial={t.arabicOfficial}
                      tEnglishOfficial={t.englishOfficial}
                    />
                  ) : (
                    <ArticleItem 
                      key={art.id} 
                      art={art} 
                      isHighlighted={art.id === highlightId}
                      highlightTermCustom={highlightTerm}
                      language={language}
                      isRTL={isRTL}
                      itemLabelAr={itemLabelAr}
                      itemLabelEn={itemLabelEn}
                      isSaved={isBookmarked(art.id)}
                      isCopied={copiedId === art.id}
                      isCitationCopied={citationCopiedId === art.id}
                      onToggleBookmark={handleToggleBookmark}
                      onCopyContent={handleCopyContent}
                      onCopyCitation={handleCopyCitation}
                      onScrollToTop={scrollToTop}
                      tBookmark={t.bookmark}
                      tBookmarked={t.bookmarked}
                      tCopyContent={t.copyContent}
                      tCopied={t.copied}
                      tCopyCitation={t.copyCitation}
                      tCitationCopied={t.citationCopied}
                    />
                  )
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
              className={`min-h-[420px] sm:min-h-[500px] p-5 sm:p-8 md:p-12 bg-white border border-neutral-200/80 rounded-2xl sm:rounded-[3rem] shadow-xl shadow-black/5 relative overflow-hidden ${isRTL ? 'font-arabic' : ''}`}
            >
              {/* Page Numbering Decoration */}
              <div className={`absolute top-0 opacity-[0.03] pointer-events-none p-4 sm:p-8 ${isRTL ? 'left-0' : 'right-0'}`}>
                <span className="text-[6rem] sm:text-[9rem] md:text-[12rem] font-black leading-none select-none pointer-events-none">{currentPage + 1}</span>
              </div>

              <div className="relative z-10 flex flex-col h-full">
                
                {/* Book Header with Actions */}
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-neutral-400 mb-0.5">
                      {language === 'ar' ? documentTitleAr : documentTitleEn}
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                      {language === 'ar' ? allArticles[currentPage].partTitleAr : allArticles[currentPage].partTitleEn}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <button
                      type="button"
                      onClick={() => handleToggleBookmark(allArticles[currentPage])}
                      className={`p-2 rounded-xl border text-xs font-bold transition-all flex items-center gap-1 ${
                        isBookmarked(allArticles[currentPage].id) 
                          ? 'bg-black text-white border-black' 
                          : 'bg-white text-neutral-500 border-neutral-200 hover:border-black'
                      }`}
                    >
                      {isBookmarked(allArticles[currentPage].id) ? <BookmarkCheck size={14} /> : <Bookmark size={14} />}
                    </button>
                    <button
                      type="button"
                      onClick={() => handleCopyContent(allArticles[currentPage], language)}
                      className="p-2 rounded-xl border border-neutral-200 bg-white text-neutral-500 hover:border-black transition-all"
                      title={t.copyContent}
                    >
                      {copiedId === allArticles[currentPage].id ? <Check size={14} className="text-black" /> : <Copy size={14} />}
                    </button>
                  </div>
                </div>

                <div className={`flex flex-col mb-8 sm:mb-12 w-full ${isRTL ? 'items-start text-right' : 'items-start text-left'}`}>
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

                <div className="flex-grow text-justify leading-relaxed">
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

      {/* Quick Access Back to Top */}
      <AnimatePresence>
        {showBackToTop && (
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
              title={t.backToTop}
              aria-label={t.backToTop}
            >
              <ArrowUp size={18} className="group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
