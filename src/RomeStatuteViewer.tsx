import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ChevronDown,
  ChevronUp,
  BookOpen,
  List,
  ArrowUp,
  ArrowRight,
  ArrowLeft,
  Copy,
  Check,
  Bookmark,
  BookmarkCheck,
  Columns,
  Search,
  X,
  Quote,
  Link2,
  Printer,
  StickyNote,
  Hash,
  CornerDownLeft,
} from 'lucide-react';
import { Article, ArticleNote, BookmarkRecord, CrossReference, Language, Part } from './types';
import { TranslatableText } from './TranslatableText';
import { ArticleCard } from './ArticleCard';
import { normalizeSearchText } from './searchUtils';
import { extractCrossReferences, findArticleByNumber } from './legalDocuments';
import { ProvisionMeta } from './useLegalStudyStore';

// Preserve named exports required by all 6 untouched ICC legal data files
export type { Article, Part, BookmarkRecord };

interface RomeStatuteViewerProps {
  drawerId: string;
  data: Part[];
  language: Language;
  highlightId?: string | null;
  highlightTerm?: string | null;
  documentTitleAr: string;
  documentTitleEn: string;
  itemLabelAr: string;
  itemLabelEn: string;
  bookmarks: BookmarkRecord[];
  notes: Record<string, ArticleNote>;
  onToggleBookmark: (art: Article, meta: ProvisionMeta) => boolean;
  onSaveNote: (art: Article, content: string, meta: ProvisionMeta) => void;
  onRecordHistory: (art: Article, meta: ProvisionMeta) => void;
  onNavigateCrossRef: (ref: CrossReference, fromDrawerId: string, fromArt: Article) => void;
  onOpenStudyWorkspace: () => void;
  onNotify: (message: string) => void;
}

export const RomeStatuteViewer: React.FC<RomeStatuteViewerProps> = ({
  drawerId,
  data,
  language,
  highlightId,
  highlightTerm,
  documentTitleAr,
  documentTitleEn,
  itemLabelAr,
  itemLabelEn,
  bookmarks,
  notes,
  onToggleBookmark,
  onSaveNote,
  onRecordHistory,
  onNavigateCrossRef,
  onOpenStudyWorkspace,
  onNotify,
}) => {
  const [viewMode, setViewMode] = useState<'list' | 'bilingual' | 'book'>('list');
  const [bookBilingual, setBookBilingual] = useState(false);
  const [expandedPart, setExpandedPart] = useState<string | null>(data[0]?.id || null);
  const [currentPage, setCurrentPage] = useState(0);
  const [filterQuery, setFilterQuery] = useState('');
  const [jumpNumber, setJumpNumber] = useState('');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [citationCopiedId, setCitationCopiedId] = useState<string | null>(null);
  const [linkCopiedId, setLinkCopiedId] = useState<string | null>(null);
  const [bookNoteOpen, setBookNoteOpen] = useState(false);
  const [bookNoteDraft, setBookNoteDraft] = useState('');
  const [scrollProgress, setScrollProgress] = useState(0);

  const isRTL = language === 'ar';
  const viewerTopRef = useRef<HTMLDivElement>(null);
  const lastHandledHighlightRef = useRef<string | null>(null);
  const [showBackToTop, setShowBackToTop] = useState(false);

  const provisionMeta: ProvisionMeta = useMemo(
    () => ({
      drawerId,
      documentTitleAr,
      documentTitleEn,
      itemLabelAr,
      itemLabelEn,
    }),
    [drawerId, documentTitleAr, documentTitleEn, itemLabelAr, itemLabelEn]
  );

  const bookmarkedIds = useMemo(() => new Set(bookmarks.map((b) => b.id)), [bookmarks]);

  const allArticles = useMemo(
    () =>
      data.flatMap((p) =>
        p.articles.map((a) => ({
          ...a,
          partId: p.id,
          partTitleAr: p.titleAr,
          partTitleEn: p.titleEn,
          partLabelAr: p.labelAr,
          partLabelEn: p.labelEn,
        }))
      ),
    [data]
  );

  useEffect(() => {
    setExpandedPart(data[0]?.id || null);
    setCurrentPage(0);
    setFilterQuery('');
    setJumpNumber('');
    lastHandledHighlightRef.current = null;
  }, [drawerId, data]);

  const safePageIndex = Math.min(Math.max(0, currentPage), Math.max(0, allArticles.length - 1));
  const currentBookArticle = allArticles[safePageIndex] || null;

  useEffect(() => {
    if (currentBookArticle) {
      setBookNoteDraft(notes[currentBookArticle.id]?.content || '');
    }
  }, [currentBookArticle, notes]);

  useEffect(() => {
    if (viewMode === 'book' && currentBookArticle) {
      onRecordHistory(currentBookArticle, provisionMeta);
    }
  }, [viewMode, currentBookArticle, onRecordHistory, provisionMeta]);

  useEffect(() => {
    if (viewMode !== 'book') return;
    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      if (target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable)) {
        return;
      }
      if (e.key === 'ArrowRight') {
        setCurrentPage((prev) =>
          isRTL ? Math.max(0, prev - 1) : Math.min(allArticles.length - 1, prev + 1)
        );
      } else if (e.key === 'ArrowLeft') {
        setCurrentPage((prev) =>
          isRTL ? Math.min(allArticles.length - 1, prev + 1) : Math.max(0, prev - 1)
        );
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [viewMode, isRTL, allArticles.length]);

  const handleToggleBookmark = useCallback(
    (art: Article) => {
      const added = onToggleBookmark(art, provisionMeta);
      onNotify(
        added
          ? isRTL
            ? `تم حفظ ${itemLabelAr} ${art.number} في المحفوظات`
            : `Saved ${itemLabelEn} ${art.number} to bookmarks`
          : isRTL
            ? `تمت إزالة ${itemLabelAr} ${art.number} من المحفوظات`
            : `Removed ${itemLabelEn} ${art.number} from bookmarks`
      );
    },
    [onToggleBookmark, provisionMeta, onNotify, isRTL, itemLabelAr, itemLabelEn]
  );

  const handleSaveNote = useCallback(
    (art: Article, content: string) => {
      onSaveNote(art, content, provisionMeta);
      onNotify(
        content.trim()
          ? isRTL
            ? `تم حفظ ملاحظتك على ${itemLabelAr} ${art.number}`
            : `Saved note for ${itemLabelEn} ${art.number}`
          : isRTL
            ? 'تم حذف الملاحظة'
            : 'Note deleted'
      );
    },
    [onSaveNote, provisionMeta, onNotify, isRTL, itemLabelAr, itemLabelEn]
  );

  const handleCopyContent = useCallback(
    (art: Article, lang: 'ar' | 'en' | 'both' = 'ar') => {
      let text = '';
      if (lang === 'both') {
        text = `[${documentTitleAr} - ${itemLabelAr} ${art.number}: ${art.titleAr}]\n${art.contentAr}\n\n[${documentTitleEn} - ${itemLabelEn} ${art.number}: ${art.titleEn}]\n${art.contentEn}`;
      } else {
        const label = lang === 'ar' ? itemLabelAr : itemLabelEn;
        const title = lang === 'ar' ? art.titleAr : art.titleEn;
        const content = lang === 'ar' ? art.contentAr : art.contentEn;
        text = `${label} ${art.number}: ${title}\n\n${content}`;
      }

      navigator.clipboard?.writeText(text);
      setCopiedId(art.id);
      setTimeout(() => setCopiedId((prev) => (prev === art.id ? null : prev)), 1800);
      onNotify(isRTL ? 'تم نسخ النص القانوني بنجاح' : 'Legal text copied to clipboard');
    },
    [documentTitleAr, documentTitleEn, itemLabelAr, itemLabelEn, onNotify, isRTL]
  );

  const handleCopyCitation = useCallback(
    (art: Article) => {
      const citation = isRTL
        ? `المحكمة الجنائية الدولية، ${documentTitleAr}، ${itemLabelAr} ${art.number} (${art.titleAr}).`
        : `International Criminal Court, ${documentTitleEn}, ${itemLabelEn} ${art.number} (${art.titleEn}).`;

      navigator.clipboard?.writeText(citation);
      setCitationCopiedId(art.id);
      setTimeout(() => setCitationCopiedId((prev) => (prev === art.id ? null : prev)), 1800);
      onNotify(isRTL ? 'تم نسخ الاستشهاد القانوني الرسمي' : 'Formal legal citation copied');
    },
    [documentTitleAr, documentTitleEn, itemLabelAr, itemLabelEn, isRTL, onNotify]
  );

  const handleCopyLink = useCallback(
    (art: Article) => {
      const url = `${window.location.origin}${window.location.pathname}#doc=${drawerId}&art=${art.id}`;
      navigator.clipboard?.writeText(url);
      setLinkCopiedId(art.id);
      setTimeout(() => setLinkCopiedId((prev) => (prev === art.id ? null : prev)), 1800);
      onNotify(isRTL ? 'تم نسخ الرابط المباشر للمادة' : 'Direct link to provision copied');
    },
    [drawerId, isRTL, onNotify]
  );

  const handlePrintArticle = useCallback((artId: string) => {
    const targetEl = document.getElementById(`article-${artId}`);
    if (!targetEl) {
      window.print();
      return;
    }
    document.body.classList.add('print-single-article');
    targetEl.classList.add('print-target-article');
    const cleanup = () => {
      document.body.classList.remove('print-single-article');
      targetEl.classList.remove('print-target-article');
      window.removeEventListener('afterprint', cleanup);
    };
    window.addEventListener('afterprint', cleanup);
    window.print();
    setTimeout(cleanup, 1200);
  }, []);

  const handleCrossRef = useCallback(
    (ref: CrossReference, fromArt: Article) => {
      onNavigateCrossRef(ref, drawerId, fromArt);
    },
    [onNavigateCrossRef, drawerId]
  );

  useEffect(() => {
    const handleScroll = () => {
      if (viewerTopRef.current) {
        const rect = viewerTopRef.current.getBoundingClientRect();
        const totalHeight = Math.max(1, viewerTopRef.current.scrollHeight - window.innerHeight);
        const scrolledPast = Math.max(0, -rect.top);
        setScrollProgress(Math.min(100, Math.round((scrolledPast / totalHeight) * 100)));
        setShowBackToTop(rect.top < -150 || window.scrollY > 350);
      } else {
        setShowBackToTop(window.scrollY > 350);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [viewMode]);

  const scrollToTop = useCallback(() => {
    if (viewerTopRef.current) {
      const yOffset = -90;
      const y = viewerTopRef.current.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

  const scrollToArticle = useCallback(
    (art: Article) => {
      onRecordHistory(art, provisionMeta);
      if (viewMode === 'book') {
        const idx = allArticles.findIndex((a) => a.id === art.id);
        if (idx !== -1) {
          setCurrentPage(idx);
          scrollToTop();
        }
        return;
      }

      const element = document.getElementById(`article-${art.id}`);
      if (element) {
        const yOffset = -96;
        const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
      }
    },
    [viewMode, allArticles, onRecordHistory, provisionMeta, scrollToTop]
  );

  useEffect(() => {
    if (!highlightId) return;
    const highlightKey = `${drawerId}:${highlightId}:${highlightTerm || ''}`;
    if (lastHandledHighlightRef.current === highlightKey) return;

    const partWithArticle = data.find((p) => p.articles.some((a) => a.id === highlightId));
    if (!partWithArticle) return;

    const targetArt = partWithArticle.articles.find((a) => a.id === highlightId);
    lastHandledHighlightRef.current = highlightKey;

    setExpandedPart(partWithArticle.id);
    if (targetArt) {
      onRecordHistory(targetArt, provisionMeta);
      const bookIdx = allArticles.findIndex((a) => a.id === targetArt.id);
      if (bookIdx !== -1) setCurrentPage(bookIdx);
    }

    if (viewMode === 'book') {
      setViewMode('list');
    }

    const tryScroll = (attempts = 0) => {
      const element = document.getElementById(`article-${highlightId}`);
      if (element) {
        const yOffset = -96;
        const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });

        if (highlightTerm) {
          setTimeout(() => {
            const termTarget = element.querySelector('#search-highlight-target');
            if (termTarget) {
              termTarget.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
          }, 320);
        }
      } else if (attempts < 10) {
        setTimeout(() => tryScroll(attempts + 1), 90);
      }
    };

    const timer = setTimeout(() => tryScroll(), 120);
    return () => clearTimeout(timer);
  }, [highlightId, highlightTerm, data, drawerId, allArticles, onRecordHistory, provisionMeta, viewMode]);

  const filteredData = useMemo(() => {
    const q = filterQuery.trim().toLowerCase();
    if (!q) return data;
    const qNorm = normalizeSearchText(q);

    return data
      .map((part) => {
        const matchedArticles = part.articles.filter((art) => {
          if (
            art.number.toLowerCase().includes(q) ||
            art.titleAr.toLowerCase().includes(q) ||
            art.titleEn.toLowerCase().includes(q) ||
            art.contentAr.toLowerCase().includes(q) ||
            art.contentEn.toLowerCase().includes(q)
          ) {
            return true;
          }
          if (qNorm.length >= 2) {
            return (
              normalizeSearchText(art.titleAr).includes(qNorm) ||
              normalizeSearchText(art.contentAr).includes(qNorm) ||
              normalizeSearchText(art.number).includes(qNorm)
            );
          }
          return false;
        });

        return {
          ...part,
          articles: matchedArticles,
        };
      })
      .filter((part) => part.articles.length > 0);
  }, [data, filterQuery]);

  const totalFilteredArticles = useMemo(
    () => filteredData.reduce((acc, part) => acc + part.articles.length, 0),
    [filteredData]
  );

  useEffect(() => {
    if (filterQuery.trim() && filteredData.length > 0) {
      setExpandedPart(filteredData[0].id);
    }
  }, [filterQuery, filteredData]);

  const handleDirectJump = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = jumpNumber.trim();
    if (!trimmed) return;

    const found = findArticleByNumber(drawerId, trimmed);
    if (!found) {
      onNotify(
        isRTL
          ? `لم يتم العثور على ${itemLabelAr} رقم "${trimmed}" في هذه الوثيقة`
          : `${itemLabelEn} "${trimmed}" not found in this document`
      );
      return;
    }

    setFilterQuery('');
    const partContaining = data.find((p) => p.articles.some((a) => a.id === found.id));
    if (partContaining) setExpandedPart(partContaining.id);

    if (viewMode === 'book') {
      const idx = allArticles.findIndex((a) => a.id === found.id);
      if (idx !== -1) setCurrentPage(idx);
      onRecordHistory(found, provisionMeta);
    } else {
      setTimeout(() => scrollToArticle(found), 60);
    }
    setJumpNumber('');
  };

  const currentBookCrossRefs = useMemo(() => {
    if (!currentBookArticle) return [];
    return extractCrossReferences(
      currentBookArticle.contentAr,
      currentBookArticle.contentEn,
      drawerId,
      currentBookArticle.id
    );
  }, [currentBookArticle, drawerId]);

  const effectiveProgress =
    viewMode === 'book' && allArticles.length > 0
      ? Math.round(((safePageIndex + 1) / allArticles.length) * 100)
      : scrollProgress;

  const pluralUnitAr =
    itemLabelAr === 'القاعدة' ? 'قاعدة' : itemLabelAr === 'اللائحة' ? 'لائحة' : 'مادة';

  return (
    <div
      ref={viewerTopRef}
      dir={isRTL ? 'rtl' : 'ltr'}
      className={`flex flex-col gap-6 w-full ${isRTL ? 'font-arabic text-right' : 'text-left'}`}
    >
      {/* M3 Linear Reading Progress Bar */}
      <div className="w-full h-1 bg-[#ebebeb] rounded-full overflow-hidden print:hidden">
        <div
          className="h-full bg-[#111111] transition-all duration-200 rounded-full"
          style={{ width: `${effectiveProgress}%` }}
        />
      </div>

      {/* Material 3 Expressive Workspace Toolbar */}
      <div className="flex flex-col gap-3 bg-[#f5f5f5] p-3.5 sm:p-4 rounded-[24px] print:hidden">
        <div className="flex flex-wrap items-center justify-between gap-2.5">
          {/* M3 Connected Segmented Button Group */}
          <div className="m3-segmented-track flex items-center gap-0.5 flex-wrap">
            <button
              type="button"
              onClick={() => setViewMode('list')}
              className={`flex items-center gap-1.5 h-9 px-3.5 sm:px-4 rounded-full text-xs font-bold transition-all whitespace-nowrap ${
                viewMode === 'list' ? 'bg-[#111111] text-white shadow-xs' : 'text-[#555555] hover:text-[#121212]'
              }`}
            >
              <List size={14} />
              <span>{isRTL ? 'عرض القائمة' : 'List View'}</span>
            </button>

            <button
              type="button"
              onClick={() => setViewMode('bilingual')}
              className={`flex items-center gap-1.5 h-9 px-3.5 sm:px-4 rounded-full text-xs font-bold transition-all whitespace-nowrap ${
                viewMode === 'bilingual' ? 'bg-[#111111] text-white shadow-xs' : 'text-[#555555] hover:text-[#121212]'
              }`}
            >
              <Columns size={14} />
              <span>{isRTL ? 'مقارنة اللغتين' : 'Bilingual'}</span>
            </button>

            <button
              type="button"
              onClick={() => setViewMode('book')}
              className={`flex items-center gap-1.5 h-9 px-3.5 sm:px-4 rounded-full text-xs font-bold transition-all whitespace-nowrap ${
                viewMode === 'book' ? 'bg-[#111111] text-white shadow-xs' : 'text-[#555555] hover:text-[#121212]'
              }`}
            >
              <BookOpen size={14} />
              <span>{isRTL ? 'عرض الكتاب' : 'Book View'}</span>
            </button>
          </div>

          <div className="flex items-center gap-2">
            {/* Direct Provision Quick-Jump Pill */}
            <form
              onSubmit={handleDirectJump}
              className="flex items-center h-10 bg-white rounded-full overflow-hidden border border-black/[0.08] focus-within:border-[#111111] transition-colors"
            >
              <span className="ps-3 text-[#777777]">
                <Hash size={13} />
              </span>
              <input
                type="text"
                value={jumpNumber}
                onChange={(e) => setJumpNumber(e.target.value)}
                placeholder={isRTL ? `رقم ${itemLabelAr}...` : `${itemLabelEn} #...`}
                className="w-24 sm:w-28 h-full px-2 text-xs font-bold text-[#121212] placeholder:text-[#888888] bg-transparent focus:outline-none"
                aria-label={isRTL ? `انتقال سريع برقم ${itemLabelAr}` : `Jump to ${itemLabelEn} number`}
              />
              <button
                type="submit"
                className="h-full px-3.5 bg-[#111111] hover:bg-[#2a2a2a] text-white text-xs font-bold transition-colors whitespace-nowrap"
              >
                {isRTL ? 'انتقال' : 'Go'}
              </button>
            </form>

            {/* Study Workspace Tonal Trigger */}
            <button
              type="button"
              onClick={onOpenStudyWorkspace}
              className="flex items-center gap-1.5 h-10 px-3.5 rounded-full bg-white hover:bg-[#ececec] border border-black/[0.08] text-xs font-bold text-[#121212] transition-colors whitespace-nowrap"
            >
              <Bookmark size={14} />
              <span className="hidden sm:inline">
                {isRTL ? `المفكرة (${bookmarks.length})` : `Study Hub (${bookmarks.length})`}
              </span>
              <span className="sm:hidden tabular-nums">{bookmarks.length}</span>
            </button>
          </div>
        </div>

        {/* M3 Tonal Filter Bar */}
        {viewMode !== 'book' && (
          <div className="relative w-full">
            <div className="absolute inset-y-0 start-0 flex items-center ps-4 pointer-events-none text-[#666666]">
              <Search size={16} />
            </div>
            <input
              type="text"
              value={filterQuery}
              onChange={(e) => setFilterQuery(e.target.value)}
              placeholder={
                isRTL
                  ? `تصفية سريعة داخل هذه الوثيقة (${allArticles.length} ${pluralUnitAr})...`
                  : `Filter inside this document (${allArticles.length} provisions)...`
              }
              className="w-full h-11 ps-11 pe-10 bg-white rounded-full text-xs sm:text-sm font-medium text-[#121212] placeholder:text-[#888888] border border-black/[0.07] focus:outline-none focus:border-[#111111] transition-colors"
            />
            {filterQuery && (
              <button
                type="button"
                onClick={() => setFilterQuery('')}
                className="absolute inset-y-0 end-0 flex items-center pe-3.5 text-[#777] hover:text-[#121212] transition-colors"
                title={isRTL ? 'إلغاء التصفية' : 'Clear filter'}
              >
                <X size={16} />
              </button>
            )}
          </div>
        )}

        {viewMode !== 'book' && filterQuery.trim() && (
          <div className="flex items-center justify-between text-xs text-[#595959] px-2">
            <span className="tabular-nums">
              {isRTL
                ? `تم العثور على ${totalFilteredArticles} ${pluralUnitAr} مطابقة`
                : `Found ${totalFilteredArticles} matching provisions`}
            </span>
            <button
              type="button"
              onClick={() => setFilterQuery('')}
              className="text-[#121212] hover:underline font-bold"
            >
              {isRTL ? 'إلغاء التصفية' : 'Clear filter'}
            </button>
          </div>
        )}
      </div>

      {/* Main Content Area: List / Bilingual vs Book Mode */}
      {viewMode === 'list' || viewMode === 'bilingual' ? (
        <div className="flex flex-col gap-6">
          {/* Android 17 Grouped Parts Accordion (Table of Contents) */}
          <div className="m3-list-group flex flex-col gap-[3px] print:hidden">
            {filteredData.map((part) => {
              const isExpanded = expandedPart === part.id;
              return (
                <div
                  key={part.id}
                  className="m3-list-item bg-[#f5f5f5] overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => setExpandedPart(isExpanded ? null : part.id)}
                    className="w-full flex items-center justify-between p-4 sm:px-5 hover:bg-[#ededed] transition-colors"
                  >
                    <div className={`flex flex-col min-w-0 ${isRTL ? 'items-start text-right' : 'items-start text-left'}`}>
                      <span className="text-[11px] font-bold text-[#666666] mb-0.5">
                        {isRTL ? part.labelAr : part.labelEn}
                      </span>
                      <h4 className={`font-bold text-sm sm:text-base text-[#121212] truncate ${isRTL ? 'font-arabic' : ''}`}>
                        {isRTL ? part.titleAr : part.titleEn}
                      </h4>
                    </div>
                    <div className="flex items-center gap-3 shrink-0">
                      <span className="text-xs font-bold text-[#666666] tabular-nums">
                        {part.articles.length}
                      </span>
                      <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#121212]">
                        {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                      </div>
                    </div>
                  </button>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.18 }}
                        className="overflow-hidden"
                      >
                        <div className="px-3 pb-3 pt-1 flex flex-col gap-1.5" dir={isRTL ? 'rtl' : 'ltr'}>
                          {part.articles.map((art) => {
                            const hasBookmark = bookmarkedIds.has(art.id);
                            const hasNote = Boolean(notes[art.id]?.content);
                            return (
                              <button
                                type="button"
                                key={art.id}
                                onClick={() => scrollToArticle(art)}
                                className={`flex items-center justify-between gap-3 w-full px-3.5 py-2.5 rounded-[16px] bg-white hover:bg-[#111111] hover:text-white transition-all group ${
                                  isRTL ? 'text-right' : 'text-left'
                                }`}
                              >
                                <div className="flex items-center gap-3 min-w-0">
                                  <span className="shrink-0 text-xs font-black tabular-nums opacity-70 group-hover:opacity-100">
                                    {isRTL
                                      ? `${itemLabelAr} ${art.number}`
                                      : `${itemLabelEn === 'Article' ? 'Art.' : itemLabelEn === 'Regulation' ? 'Reg.' : itemLabelEn} ${art.number}`}
                                  </span>
                                  <span className={`text-xs sm:text-[13px] font-semibold truncate ${isRTL ? 'font-arabic' : ''}`}>
                                    {isRTL ? art.titleAr : art.titleEn}
                                  </span>
                                </div>
                                {(hasBookmark || hasNote) && (
                                  <div className="flex items-center gap-1.5 shrink-0 opacity-75">
                                    {hasBookmark && <BookmarkCheck size={13} />}
                                    {hasNote && <StickyNote size={13} />}
                                  </div>
                                )}
                              </button>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {filteredData.length === 0 && (
            <div className="py-16 text-center bg-[#f5f5f5] rounded-[28px]">
              <p className="text-[#121212] font-bold mb-3">
                {isRTL ? 'لا توجد نصوص مطابقة للتصفية الحالية' : 'No provisions matched your filter'}
              </p>
              <button
                type="button"
                onClick={() => setFilterQuery('')}
                className="h-10 px-5 bg-[#111111] text-white text-xs font-bold rounded-full hover:bg-[#2a2a2a] transition-colors"
              >
                {isRTL ? 'إلغاء التصفية' : 'Clear filter'}
              </button>
            </div>
          )}

          {/* Full Provision List or Bilingual Parallel View */}
          <div className="mt-4 flex flex-col gap-12">
            {filteredData.map((part) => (
              <section key={`content-${part.id}`} className="flex flex-col gap-6">
                <div
                  className={`pt-4 pb-5 border-b border-black/[0.1] flex flex-col w-full print-hide-on-single ${
                    isRTL ? 'items-start text-right font-arabic' : 'items-start text-left'
                  }`}
                >
                  <span className="text-xs font-bold text-[#666666] mb-1">
                    {isRTL ? part.labelAr : part.labelEn}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-black leading-tight text-[#121212] w-full">
                    {isRTL ? part.titleAr : part.titleEn}
                  </h2>
                </div>

                {part.articles.map((art) => (
                  <ArticleCard
                    key={art.id}
                    art={art}
                    drawerId={drawerId}
                    bilingual={viewMode === 'bilingual'}
                    isHighlighted={art.id === highlightId}
                    highlightTerm={highlightTerm}
                    language={language}
                    itemLabelAr={itemLabelAr}
                    itemLabelEn={itemLabelEn}
                    isSaved={bookmarkedIds.has(art.id)}
                    noteContent={notes[art.id]?.content}
                    isCopied={copiedId === art.id}
                    isCitationCopied={citationCopiedId === art.id}
                    isLinkCopied={linkCopiedId === art.id}
                    onToggleBookmark={handleToggleBookmark}
                    onSaveNote={handleSaveNote}
                    onCopyContent={handleCopyContent}
                    onCopyCitation={handleCopyCitation}
                    onCopyLink={handleCopyLink}
                    onPrintArticle={handlePrintArticle}
                    onNavigateCrossRef={handleCrossRef}
                    onScrollToTop={scrollToTop}
                  />
                ))}
              </section>
            ))}
          </div>
        </div>
      ) : currentBookArticle ? (
        /* Material 3 Expressive Book Mode (Clean Editorial Card — No Ghost Watermarks) */
        <div className="flex flex-col gap-5">
          <div className="flex flex-wrap items-center justify-between gap-2 px-1 print:hidden">
            <span className="text-xs font-medium text-[#666666] tabular-nums">
              {isRTL
                ? `صفحة ${safePageIndex + 1} من ${allArticles.length} · استخدم أسهم لوحة المفاتيح (← / →)`
                : `Page ${safePageIndex + 1} of ${allArticles.length} · Use keyboard arrows (← / →)`}
            </span>
            <button
              type="button"
              onClick={() => setBookBilingual((prev) => !prev)}
              className={`h-9 px-3.5 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 ${
                bookBilingual
                  ? 'bg-[#111111] text-white'
                  : 'bg-[#ececec] text-[#121212] hover:bg-[#e0e0e0]'
              }`}
            >
              <Columns size={14} />
              <span>{isRTL ? 'مقارنة اللغتين في الصفحة' : 'Parallel Bilingual'}</span>
            </button>
          </div>

          <AnimatePresence mode="wait">
            <motion.article
              key={`page-${drawerId}-${currentBookArticle.id}`}
              id={`article-${currentBookArticle.id}`}
              initial={{ opacity: 0, x: isRTL ? -14 : 14 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: isRTL ? 14 : -14 }}
              transition={{ duration: 0.16 }}
              className={`min-h-[420px] sm:min-h-[480px] p-6 sm:p-8 md:p-10 bg-white border border-black/[0.08] rounded-[28px] relative ${
                isRTL ? 'font-arabic' : ''
              }`}
            >
              <div className="flex flex-col h-full">
                {/* Book Header & M3 Tonal Action Cluster */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-6 pb-4 border-b border-black/[0.06]">
                  <div className="flex flex-col gap-0.5">
                    <span className="text-xs font-bold text-[#666666]">
                      {isRTL ? documentTitleAr : documentTitleEn} ·{' '}
                      {isRTL ? currentBookArticle.partTitleAr : currentBookArticle.partTitleEn}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 flex-wrap print:hidden">
                    <button
                      type="button"
                      onClick={() => handleToggleBookmark(currentBookArticle)}
                      className={`h-9 w-9 rounded-full flex items-center justify-center transition-all ${
                        bookmarkedIds.has(currentBookArticle.id)
                          ? 'bg-[#111111] text-white'
                          : 'bg-[#efefef] text-[#333] hover:bg-[#e2e2e2]'
                      }`}
                      title={isRTL ? 'حفظ المادة' : 'Save provision'}
                    >
                      {bookmarkedIds.has(currentBookArticle.id) ? <BookmarkCheck size={15} /> : <Bookmark size={15} />}
                    </button>
                    <button
                      type="button"
                      onClick={() => setBookNoteOpen((prev) => !prev)}
                      className={`h-9 w-9 rounded-full flex items-center justify-center transition-all ${
                        notes[currentBookArticle.id]?.content || bookNoteOpen
                          ? 'bg-[#111111] text-white'
                          : 'bg-[#efefef] text-[#333] hover:bg-[#e2e2e2]'
                      }`}
                      title={isRTL ? 'ملاحظة قانونية' : 'Study note'}
                    >
                      <StickyNote size={15} />
                    </button>
                    <button
                      type="button"
                      onClick={() => handleCopyContent(currentBookArticle, bookBilingual ? 'both' : language)}
                      className="h-9 w-9 rounded-full bg-[#efefef] text-[#333] hover:bg-[#e2e2e2] flex items-center justify-center transition-all"
                      title={isRTL ? 'نسخ النص' : 'Copy text'}
                    >
                      {copiedId === currentBookArticle.id ? <Check size={15} /> : <Copy size={15} />}
                    </button>
                    <button
                      type="button"
                      onClick={() => handleCopyCitation(currentBookArticle)}
                      className="h-9 w-9 rounded-full bg-[#efefef] text-[#333] hover:bg-[#e2e2e2] flex items-center justify-center transition-all"
                      title={isRTL ? 'نسخ الاستشهاد' : 'Copy citation'}
                    >
                      {citationCopiedId === currentBookArticle.id ? <Check size={15} /> : <Quote size={15} />}
                    </button>
                    <button
                      type="button"
                      onClick={() => handleCopyLink(currentBookArticle)}
                      className="h-9 w-9 rounded-full bg-[#efefef] text-[#333] hover:bg-[#e2e2e2] flex items-center justify-center transition-all"
                      title={isRTL ? 'نسخ الرابط المباشر' : 'Copy link'}
                    >
                      {linkCopiedId === currentBookArticle.id ? <Check size={15} /> : <Link2 size={15} />}
                    </button>
                    <button
                      type="button"
                      onClick={() => handlePrintArticle(currentBookArticle.id)}
                      className="h-9 w-9 rounded-full bg-[#efefef] text-[#333] hover:bg-[#e2e2e2] flex items-center justify-center transition-all"
                      title={isRTL ? 'طباعة' : 'Print'}
                    >
                      <Printer size={15} />
                    </button>
                  </div>
                </div>

                <div className={`flex flex-col mb-7 w-full ${isRTL ? 'items-start text-right' : 'items-start text-left'}`}>
                  <span className="text-xs font-bold text-[#666666] mb-1.5 tabular-nums">
                    {isRTL ? itemLabelAr : itemLabelEn} {currentBookArticle.number}
                  </span>
                  <h2 className={`text-2xl sm:text-3xl md:text-4xl font-black text-[#121212] leading-tight w-full ${isRTL ? 'font-arabic text-right' : 'text-left'}`}>
                    {isRTL ? currentBookArticle.titleAr : currentBookArticle.titleEn}
                  </h2>
                </div>

                {bookBilingual ? (
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 divide-y lg:divide-y-0 lg:divide-x lg:divide-x-reverse divide-black/[0.07]">
                    <div dir="rtl" className="font-arabic text-justify leading-relaxed pt-2 lg:pt-0">
                      <TranslatableText text={currentBookArticle.contentAr} isEnglish={false} />
                    </div>
                    <div dir="ltr" className="text-justify leading-relaxed pt-5 lg:pt-0 lg:pl-6">
                      <TranslatableText text={currentBookArticle.contentEn} isEnglish={true} />
                    </div>
                  </div>
                ) : (
                  <div className="flex-grow text-justify leading-relaxed">
                    <TranslatableText
                      text={isRTL ? currentBookArticle.contentAr : currentBookArticle.contentEn}
                      isEnglish={!isRTL}
                    />
                  </div>
                )}

                {bookNoteOpen && (
                  <div className="mt-6 p-4 rounded-[22px] bg-[#f2f2f2] print:hidden">
                    <textarea
                      value={bookNoteDraft}
                      onChange={(e) => setBookNoteDraft(e.target.value)}
                      rows={3}
                      placeholder={isRTL ? 'دوّن ملاحظتك القانونية هنا...' : 'Write your legal note here...'}
                      className="w-full p-3.5 bg-white rounded-[16px] text-xs sm:text-sm text-[#121212] focus:outline-none focus:ring-2 focus:ring-[#111111]"
                    />
                    <div className="flex justify-end gap-2 mt-2.5">
                      <button
                        type="button"
                        onClick={() => setBookNoteOpen(false)}
                        className="h-9 px-4 rounded-full text-xs font-bold text-[#555] hover:bg-black/5"
                      >
                        {isRTL ? 'إلغاء' : 'Cancel'}
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          handleSaveNote(currentBookArticle, bookNoteDraft);
                          setBookNoteOpen(false);
                        }}
                        className="h-9 px-5 rounded-full bg-[#111111] text-white text-xs font-bold hover:bg-[#2a2a2a]"
                      >
                        {isRTL ? 'حفظ الملاحظة' : 'Save Note'}
                      </button>
                    </div>
                  </div>
                )}

                {currentBookCrossRefs.length > 0 && (
                  <div className="mt-6 pt-4 border-t border-black/[0.06] print:hidden">
                    <div className="text-xs font-bold text-[#666666] mb-2">
                      {isRTL ? 'إحالات ومواد مرتبطة' : 'Referenced Provisions'}
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {currentBookCrossRefs.map((ref) => (
                        <button
                          type="button"
                          key={`${ref.drawerId}-${ref.articleId}`}
                          onClick={() => handleCrossRef(ref, currentBookArticle)}
                          className="inline-flex items-center gap-1.5 h-8 px-3 rounded-full bg-[#f0f0f0] hover:bg-[#111111] hover:text-white text-xs font-semibold text-[#121212] transition-all"
                        >
                          <CornerDownLeft size={11} />
                          <span>{isRTL ? ref.labelAr : ref.labelEn}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.article>
          </AnimatePresence>

          {/* M3 Expressive Book Pagination Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 print:hidden">
            <button
              type="button"
              disabled={safePageIndex === 0}
              onClick={() => setCurrentPage((prev) => Math.max(0, prev - 1))}
              className="w-full sm:flex-1 h-14 flex items-center justify-center gap-2.5 rounded-full bg-[#e8e8e8] hover:bg-[#dcdcdc] text-[#121212] disabled:opacity-35 transition-all active:scale-[0.98] text-sm font-bold order-2 sm:order-1"
            >
              <ArrowLeft size={18} className={isRTL ? 'rotate-180' : ''} />
              <span>{isRTL ? `${itemLabelAr} السابقة` : `Previous ${itemLabelEn}`}</span>
            </button>
            <button
              type="button"
              disabled={safePageIndex >= allArticles.length - 1}
              onClick={() => setCurrentPage((prev) => Math.min(allArticles.length - 1, prev + 1))}
              className="w-full sm:flex-1 h-14 flex items-center justify-center gap-2.5 rounded-full bg-[#111111] text-white hover:bg-[#2a2a2a] disabled:opacity-35 transition-all active:scale-[0.98] text-sm font-bold order-1 sm:order-2"
            >
              <span>{isRTL ? `${itemLabelAr} التالية` : `Next ${itemLabelEn}`}</span>
              <ArrowRight size={18} className={isRTL ? 'rotate-180' : ''} />
            </button>
          </div>
        </div>
      ) : null}

      {/* Material 3 Expressive Squircle Back-to-Top FAB */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.85 }}
            transition={{ duration: 0.15 }}
            className="fixed bottom-6 start-6 z-40 print:hidden"
            dir={isRTL ? 'rtl' : 'ltr'}
          >
            <button
              type="button"
              onClick={scrollToTop}
              className="w-12 h-12 rounded-[18px] bg-[#111111] text-white hover:bg-[#2a2a2a] shadow-lg shadow-black/15 flex items-center justify-center active:scale-95 transition-all"
              title={isRTL ? 'الرجوع للأعلى' : 'Back to Top'}
              aria-label={isRTL ? 'الرجوع للأعلى' : 'Back to Top'}
            >
              <ArrowUp size={20} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
