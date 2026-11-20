import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { libraryDataAr, libraryDataEn } from './data';
import { Article, CrossReference, DrawerItem, Language, ToastNotification } from './types';
import {
  Scale,
  ChevronLeft,
  ArrowLeft,
  ArrowRight,
  Folder,
  FileText,
  ZoomIn,
  ZoomOut,
  Bookmark,
  History,
  CornerUpLeft,
  Check,
  BookOpen,
  X,
} from 'lucide-react';
import { PWAInstallButton } from './PWAInstallButton';
import { TranslatableText } from './TranslatableText';
import { GlossarySectionViewer } from './GlossarySectionViewer';
import { SmartSearchBar } from './SmartSearchBar';
import { useOnlineStatus } from './useOnlineStatus';
import { RomeStatuteViewer } from './RomeStatuteViewer';
import { HelpTourModal } from './HelpTourModal';
import { StudyWorkspaceModal } from './StudyWorkspaceModal';
import { safeStorage } from './storageUtils';
import {
  findArticleById,
  getDocumentByDrawerId,
  getDrawerIdForArticle,
} from './legalDocuments';
import { useLegalStudyStore } from './useLegalStudyStore';

interface CrossRefReturnTarget {
  drawerId: string;
  articleId: string;
  labelAr: string;
  labelEn: string;
}

export default function App() {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = safeStorage.getItem('icc-app-language');
    return saved === 'ar' || saved === 'en' ? saved : 'ar';
  });
  const [pathIds, setPathIds] = useState<string[]>([]);
  const [openId, setOpenId] = useState<string | null>(null);
  const [highlightArtId, setHighlightArtId] = useState<string | null>(null);
  const [highlightSearchTerm, setHighlightSearchTerm] = useState<string | null>(null);
  const [returnStack, setReturnStack] = useState<CrossRefReturnTarget[]>([]);
  const [fontSize, setFontSize] = useState<number>(() => {
    const saved = safeStorage.getItem('icc-app-font-size');
    const parsed = saved ? parseInt(saved, 10) : 95;
    return Number.isFinite(parsed) && parsed >= 70 && parsed <= 135 ? parsed : 95;
  });
  const [scrolled, setScrolled] = useState(false);
  const [showWorkspaceModal, setShowWorkspaceModal] = useState(false);
  const [toast, setToast] = useState<ToastNotification | null>(null);

  const isOnline = useOnlineStatus();
  const mainRef = useRef<HTMLDivElement>(null);
  const toastTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const studyStore = useLegalStudyStore();
  const isRTL = language === 'ar';

  const notify = useCallback((message: string) => {
    if (toastTimerRef.current) clearTimeout(toastTimerRef.current);
    setToast({ id: Date.now(), message });
    toastTimerRef.current = setTimeout(() => setToast(null), 2400);
  }, []);

  useEffect(() => {
    return () => {
      if (toastTimerRef.current) clearTimeout(toastTimerRef.current);
    };
  }, []);

  const scrollToRef = useCallback((targetOpenId?: string) => {
    setTimeout(() => {
      if (targetOpenId) {
        const element = document.getElementById(`item-${targetOpenId}`);
        if (element) {
          const yOffset = -84;
          const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
          window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
        }
      } else if (mainRef.current) {
        const yOffset = -96;
        const y = mainRef.current.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
      }
    }, 90);
  }, []);

  const jumpToProvision = useCallback(
    (drawerId: string | undefined, articleId: string, searchTerm?: string | null) => {
      const targetDrawerId = drawerId || getDrawerIdForArticle(articleId);
      setPathIds(['2']);
      setOpenId(targetDrawerId);
      setHighlightArtId(articleId);
      setHighlightSearchTerm(searchTerm || null);
      scrollToRef(targetDrawerId);
    },
    [scrollToRef]
  );

  // URL hash deep-linking (#doc=2-1&art=art-5 or #article-art-5)
  useEffect(() => {
    const applyHash = () => {
      const hash = window.location.hash;
      if (!hash || hash.length < 2) return;

      if (hash.startsWith('#doc=')) {
        const params = new URLSearchParams(hash.slice(1));
        const docId = params.get('doc');
        const artId = params.get('art');
        if (artId && findArticleById(artId)) {
          jumpToProvision(docId || undefined, artId);
        } else if (docId) {
          setPathIds(['2']);
          setOpenId(docId);
          scrollToRef(docId);
        }
      } else if (hash.startsWith('#article-')) {
        const artId = hash.slice('#article-'.length);
        if (artId && findArticleById(artId)) {
          jumpToProvision(undefined, artId);
        }
      }
    };

    applyHash();
    window.addEventListener('hashchange', applyHash);
    return () => window.removeEventListener('hashchange', applyHash);
  }, [jumpToProvision, scrollToRef]);

  // Global Ctrl+K / Cmd+K shortcut
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        window.dispatchEvent(new CustomEvent('open-smart-search'));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 16;
      setScrolled((prev) => (prev !== isScrolled ? isScrolled : prev));
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    safeStorage.setItem('icc-app-language', language);
  }, [language]);

  useEffect(() => {
    document.documentElement.style.fontSize = `${fontSize}%`;
    safeStorage.setItem('icc-app-font-size', fontSize.toString());
  }, [fontSize]);

  const data = language === 'ar' ? libraryDataAr : libraryDataEn;

  const resolvePath = (ids: string[], rootItems: DrawerItem[]): DrawerItem[] => {
    const result: DrawerItem[] = [];
    let currentLevel = rootItems;
    for (const id of ids) {
      const found = currentLevel.find((item) => item.id === id);
      if (found) {
        result.push(found);
        currentLevel = found.children || [];
      }
    }
    return result;
  };

  const path = resolvePath(pathIds, data);
  const currentFolder = path.length > 0 ? path[path.length - 1] : null;
  const currentItems = currentFolder ? currentFolder.children || [] : data;

  const handleItemClick = (item: DrawerItem) => {
    if (item.type === 'folder') {
      setPathIds([...pathIds, item.id]);
      setOpenId(null);
      setHighlightArtId(null);
      setHighlightSearchTerm(null);
      scrollToRef();
    } else {
      const willOpen = openId !== item.id;
      setOpenId(willOpen ? item.id : null);
      if (!willOpen) {
        setHighlightSearchTerm(null);
        setHighlightArtId(null);
      } else {
        scrollToRef(item.id);
      }
    }
  };

  const handleNavigateCrossRef = useCallback(
    (ref: CrossReference, fromDrawerId: string, fromArt: Article) => {
      const fromDoc = getDocumentByDrawerId(fromDrawerId);
      setReturnStack((prev) => [
        {
          drawerId: fromDrawerId,
          articleId: fromArt.id,
          labelAr: `${fromDoc.itemLabelAr} ${fromArt.number} (${fromDoc.shortTitleAr})`,
          labelEn: `${fromDoc.itemLabelEn} ${fromArt.number} (${fromDoc.shortTitleEn})`,
        },
        ...prev.slice(0, 9),
      ]);
      jumpToProvision(ref.drawerId, ref.articleId);
    },
    [jumpToProvision]
  );

  const handleReturnToPreviousProvision = () => {
    const [latest, ...rest] = returnStack;
    if (!latest) return;
    setReturnStack(rest);
    jumpToProvision(latest.drawerId, latest.articleId);
  };

  const handleBack = () => {
    setPathIds(pathIds.slice(0, -1));
    setOpenId(null);
    setHighlightArtId(null);
    setHighlightSearchTerm(null);
    scrollToRef();
  };

  const handleBreadcrumbJump = (depth: number) => {
    setPathIds(pathIds.slice(0, depth));
    setOpenId(null);
    setHighlightArtId(null);
    setHighlightSearchTerm(null);
    scrollToRef();
  };

  const adjustFontSize = (delta: number) => {
    setFontSize((prev) => Math.min(135, Math.max(70, prev + delta)));
  };

  const handleExport = () => {
    const exported = studyStore.exportStudySheet(language);
    if (exported) {
      notify(isRTL ? 'تم تصدير مذكرة الدراسة القانونية بنجاح' : 'Legal study sheet exported');
    }
  };

  const savedCount = studyStore.bookmarks.length + Object.keys(studyStore.notes).length;
  const latestReturn = returnStack[0] || null;

  return (
    <div
      dir={isRTL ? 'rtl' : 'ltr'}
      className={`min-h-screen bg-[#f5f5f5] text-[#121212] selection:bg-[#111111] selection:text-white ${
        isRTL ? 'font-arabic' : ''
      }`}
    >
      {/* Material 3 Expressive (Android 17) Top App Bar */}
      <nav
        className={`sticky top-0 z-40 transition-all duration-200 w-full print:hidden ${
          scrolled
            ? 'bg-[#f5f5f5]/85 backdrop-blur-xl border-b border-black/[0.07]'
            : 'bg-[#f5f5f5]/60 backdrop-blur-md border-b border-transparent'
        }`}
      >
        <div className="max-w-5xl mx-auto px-3 sm:px-6 h-14 sm:h-16 flex items-center justify-between gap-2 sm:gap-3">
          {/* M3 Search Pill Trigger */}
          <div className="flex items-center min-w-0 flex-1 sm:flex-initial">
            <SmartSearchBar
              libraryData={data}
              language={language}
              scrolled={scrolled}
              onNavigateToItem={(p, id, artId, searchTerm) => {
                setPathIds(p.map((item) => item.id));
                setOpenId(id);
                setHighlightArtId(artId || null);
                setHighlightSearchTerm(searchTerm || null);
                scrollToRef(id);
              }}
            />
          </div>

          {/* M3 Expressive Action Controls */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            {!isOnline && (
              <span className="text-[11px] font-bold text-[#595959] px-2">
                {isRTL ? 'دون اتصال' : 'Offline'}
              </span>
            )}

            {/* M3 Tonal Study Hub Button */}
            <button
              type="button"
              onClick={() => setShowWorkspaceModal(true)}
              className="flex items-center justify-center gap-1.5 h-9 sm:h-10 min-w-[36px] sm:min-w-[40px] px-2.5 sm:px-3 rounded-full bg-[#e8e8e8] hover:bg-[#dedede] text-[#121212] transition-all active:scale-95 active:rounded-[16px]"
              title={isRTL ? 'المحفوظات والملاحظات والسجل' : 'Saved provisions, notes & history'}
              aria-label={isRTL ? 'المحفوظات والملاحظات' : 'Study Workspace'}
            >
              <Bookmark size={16} className={savedCount > 0 ? 'fill-[#121212]' : ''} />
              {savedCount > 0 && (
                <span className="text-xs font-bold tabular-nums">{savedCount}</span>
              )}
            </button>

            {/* M3 Connected Segmented Language Toggle */}
            <div className="m3-segmented-track flex items-center h-9 sm:h-10">
              <button
                type="button"
                onClick={() => setLanguage('en')}
                aria-pressed={language === 'en'}
                className={`px-2.5 sm:px-3 h-full rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                  language === 'en'
                    ? 'bg-[#111111] text-white shadow-xs'
                    : 'text-[#595959] hover:text-[#121212]'
                }`}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setLanguage('ar')}
                aria-pressed={language === 'ar'}
                className={`px-2.5 sm:px-3 h-full rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                  language === 'ar'
                    ? 'bg-[#111111] text-white shadow-xs'
                    : 'text-[#595959] hover:text-[#121212]'
                }`}
              >
                عربي
              </button>
            </div>

            {/* M3 Tonal Typography Scale Stepper */}
            <div className="flex items-center h-9 sm:h-10 bg-[#e8e8e8] rounded-full overflow-hidden">
              <button
                type="button"
                onClick={() => adjustFontSize(-5)}
                disabled={fontSize <= 70}
                className="h-full px-2 sm:px-2.5 hover:bg-[#dcdcdc] text-[#121212] disabled:opacity-30 transition-colors"
                title={isRTL ? 'تصغير الخط' : 'Smaller font'}
                aria-label={isRTL ? 'تصغير الخط' : 'Smaller font'}
              >
                <ZoomOut size={15} />
              </button>
              <button
                type="button"
                onClick={() => setFontSize(95)}
                className="hidden sm:flex items-center justify-center h-full px-1.5 text-[11px] font-bold tabular-nums text-[#444] hover:bg-[#dcdcdc] transition-colors min-w-[40px]"
                title={isRTL ? 'إعادة ضبط حجم الخط' : 'Reset font size'}
              >
                {fontSize}%
              </button>
              <button
                type="button"
                onClick={() => adjustFontSize(5)}
                disabled={fontSize >= 135}
                className="h-full px-2 sm:px-2.5 hover:bg-[#dcdcdc] text-[#121212] disabled:opacity-30 transition-colors"
                title={isRTL ? 'تكبير الخط' : 'Larger font'}
                aria-label={isRTL ? 'تكبير الخط' : 'Larger font'}
              >
                <ZoomIn size={15} />
              </button>
            </div>

            <PWAInstallButton language={language} />
          </div>
        </div>
      </nav>

      {/* Clean Compact M3 Expressive Hero (Ensures all main drawers appear on screen) */}
      <header className="pt-3 sm:pt-6 pb-3 sm:pb-5 px-4 text-center max-w-2xl mx-auto">
        <div className="inline-flex items-center justify-center w-10 h-10 sm:w-13 sm:h-13 bg-[#111111] text-white rounded-[14px] sm:rounded-[18px] mb-2 sm:mb-3 shadow-md shadow-black/10">
          <Scale size={20} strokeWidth={1.7} className="sm:w-6 sm:h-6" />
        </div>
        <h1 className="text-lg sm:text-3xl font-black tracking-tight text-[#121212] leading-tight text-balance mb-1">
          {isRTL ? 'مرجع المحكمة الجنائية الدولية' : 'International Criminal Court Reference'}
        </h1>
        <p className="text-[#595959] text-xs sm:text-sm leading-snug max-w-lg mx-auto">
          {isRTL
            ? 'الدليل القانوني الشامل لنظام روما الأساسي وقواعد ولوائح المحكمة.'
            : 'Comprehensive bilingual reference for the Rome Statute, Rules, and ICC Regulations.'}
        </p>
      </header>

      {/* Main Content Surface */}
      <main ref={mainRef} className="max-w-5xl mx-auto px-3 sm:px-6 pb-24 w-full">
        {/* Continue Reading Expressive Tonal Banner */}
        {!currentFolder && studyStore.lastRead && (
          <div className="mb-3 sm:mb-4 py-2.5 px-3.5 sm:px-5 bg-white border border-black/[0.08] rounded-[20px] flex items-center justify-between gap-3 print:hidden">
            <div className="flex items-center gap-2.5 sm:gap-3.5 min-w-0">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-[13px] bg-[#efefef] text-[#121212] flex items-center justify-center shrink-0">
                <History size={16} />
              </div>
              <div className="min-w-0">
                <div className="text-[11px] font-bold text-[#666666]">
                  {isRTL ? 'متابعة القراءة' : 'Continue Reading'}
                </div>
                <div className="text-xs sm:text-sm font-bold text-[#121212] truncate">
                  {isRTL ? studyStore.lastRead.documentTitleAr : studyStore.lastRead.documentTitleEn}
                  {' · '}
                  {isRTL ? studyStore.lastRead.itemLabelAr : studyStore.lastRead.itemLabelEn}{' '}
                  {studyStore.lastRead.number}:{' '}
                  {isRTL ? studyStore.lastRead.titleAr : studyStore.lastRead.titleEn}
                </div>
              </div>
            </div>
            <button
              type="button"
              onClick={() => jumpToProvision(studyStore.lastRead!.drawerId, studyStore.lastRead!.articleId)}
              className="px-3.5 h-8 sm:h-9 rounded-full bg-[#111111] text-white hover:bg-[#2a2a2a] text-xs font-bold transition-all active:scale-95 shrink-0 flex items-center gap-1.5 whitespace-nowrap"
            >
              <span>{isRTL ? 'استئناف' : 'Resume'}</span>
              {isRTL ? <ArrowLeft size={13} /> : <ArrowRight size={13} />}
            </button>
          </div>
        )}

        {/* Cross-Reference Return Bar */}
        {latestReturn && (
          <div className="mb-3 sm:mb-4 flex items-center justify-between bg-[#111111] text-white px-4 py-2.5 rounded-[20px] shadow-sm print:hidden">
            <button
              type="button"
              onClick={handleReturnToPreviousProvision}
              className="flex items-center gap-2 text-xs sm:text-sm font-bold hover:opacity-85 transition-opacity"
            >
              <CornerUpLeft size={15} />
              <span>
                {isRTL
                  ? `العودة إلى ${latestReturn.labelAr}`
                  : `Return to ${latestReturn.labelEn}`}
              </span>
            </button>
            <button
              type="button"
              onClick={() => setReturnStack([])}
              className="p-1.5 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors"
              aria-label={isRTL ? 'إخفاء' : 'Dismiss'}
            >
              <X size={15} />
            </button>
          </div>
        )}

        {/* Material 3 Expressive Navigation Header & Breadcrumbs */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5 sm:mb-4 min-h-[32px] sm:min-h-[40px] print:hidden">
          {currentFolder ? (
            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={handleBack}
                className="flex items-center gap-1.5 h-9 px-3.5 rounded-full bg-[#e8e8e8] hover:bg-[#dcdcdc] text-[#121212] text-xs font-bold transition-all active:scale-95 whitespace-nowrap"
              >
                <ArrowLeft size={15} className={isRTL ? 'rotate-180' : ''} />
                <span>{isRTL ? 'رجوع' : 'Back'}</span>
              </button>

              <div className="flex items-center gap-1.5 text-xs sm:text-sm text-[#666666] font-semibold px-1">
                <button
                  type="button"
                  onClick={() => handleBreadcrumbJump(0)}
                  className="hover:text-[#121212] transition-colors"
                >
                  {isRTL ? 'الرئيسية' : 'Home'}
                </button>
                {path.map((folder, idx) => (
                  <span key={folder.id} className="inline-flex items-center gap-1.5">
                    <span className="text-[#a0a0a0]">/</span>
                    <button
                      type="button"
                      onClick={() => handleBreadcrumbJump(idx + 1)}
                      className={
                        idx === path.length - 1
                          ? 'text-[#121212] font-bold'
                          : 'hover:text-[#121212] transition-colors'
                      }
                    >
                      {folder.title}
                    </button>
                  </span>
                ))}
              </div>
            </div>
          ) : (
            <h2 className="text-xs sm:text-sm font-bold text-[#595959] px-1">
              {isRTL ? 'أقسام المرجع القانوني' : 'Reference Library'}
            </h2>
          )}
        </div>

        {/* Classic Practical Horizontal Black Drawers — All Drawers Fit Cleanly Across Mobile, Tablet & Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3">
          <AnimatePresence mode="popLayout">
            {currentItems.map((item) => {
              const isOpen = openId === item.id;
              const docConfig = item.type === 'statute' ? getDocumentByDrawerId(item.id) : null;

              const subtitleText =
                item.type === 'folder' && item.children
                  ? isRTL
                    ? `${item.children.length} أقسام`
                    : `${item.children.length} sections`
                  : docConfig
                    ? `${docConfig.articleCount} ${isRTL ? docConfig.pluralLabelAr : docConfig.pluralLabelEn}`
                    : item.type === 'glossary' && item.terms
                      ? `${item.terms.length} ${isRTL ? 'مصطلح قانوني' : 'legal terms'}`
                      : isRTL
                        ? 'نص قانوني'
                        : 'Legal text';

              return (
                <motion.div
                  key={item.id}
                  id={`item-${item.id}`}
                  layout
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6 }}
                  transition={{ duration: 0.18 }}
                  className={`flex flex-col gap-3 ${isOpen ? 'col-span-full' : ''}`}
                >
                  {/* Material 3 Expressive Black Horizontal Drawer Bar */}
                  <button
                    type="button"
                    onClick={() => handleItemClick(item)}
                    className={`w-full m3-drawer-card flex items-center justify-between gap-3 py-2.5 px-3.5 sm:p-4 group print:hidden ${
                      isOpen ? 'bg-black ring-2 ring-black/15' : ''
                    }`}
                  >
                    <div className="flex items-center gap-3 min-w-0 flex-1">
                      <div
                        className={`w-9 h-9 sm:w-11 sm:h-11 shrink-0 rounded-[12px] sm:rounded-[15px] flex items-center justify-center transition-all duration-200 ${
                          isOpen
                            ? 'bg-white text-[#111111]'
                            : 'bg-white/12 text-white group-hover:bg-white group-hover:text-[#111111] group-hover:rounded-[13px]'
                        }`}
                      >
                        {item.type === 'folder' ? (
                          <Folder size={17} strokeWidth={1.8} className="sm:w-5 sm:h-5" />
                        ) : item.type === 'glossary' ? (
                          <BookOpen size={17} strokeWidth={1.8} className="sm:w-5 sm:h-5" />
                        ) : (
                          <FileText size={17} strokeWidth={1.8} className="sm:w-5 sm:h-5" />
                        )}
                      </div>

                      <div className={`min-w-0 flex-1 ${isRTL ? 'text-right' : 'text-left'}`}>
                        <span className="font-bold text-[13.5px] sm:text-[15px] leading-snug block truncate md:line-clamp-2 md:whitespace-normal text-white">
                          {item.title}
                        </span>
                        <span className="text-[11px] sm:text-xs font-medium mt-0.5 block tabular-nums text-white/60">
                          {subtitleText}
                        </span>
                      </div>
                    </div>

                    <div className="shrink-0">
                      {item.type === 'folder' ? (
                        <div className="w-8 h-8 rounded-full bg-white/10 group-hover:bg-white/20 text-white flex items-center justify-center transition-colors">
                          <ChevronLeft size={16} className={isRTL ? '' : 'rotate-180'} />
                        </div>
                      ) : (
                        <span
                          className={`inline-flex items-center justify-center h-8 px-3 rounded-full text-xs font-bold whitespace-nowrap transition-colors ${
                            isOpen
                              ? 'bg-white text-[#111111] hover:bg-neutral-200'
                              : 'bg-white/12 text-white group-hover:bg-white/22'
                          }`}
                        >
                          {isOpen ? (isRTL ? 'إغلاق' : 'Close') : isRTL ? 'فتح' : 'Open'}
                        </span>
                      )}
                    </div>
                  </button>

                  {/* Expanded Reading Surface */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden bg-white border border-black/[0.08] rounded-[28px] p-5 sm:p-7 md:p-8"
                      >
                        <h3
                          className={`text-lg sm:text-2xl font-black text-[#121212] mb-5 pb-4 border-b border-black/[0.07] print-hide-on-single ${
                            isRTL ? 'text-right' : 'text-left'
                          }`}
                        >
                          {item.title}
                        </h3>

                        {item.type === 'content' && (
                          <div className="max-w-3xl">
                            <TranslatableText
                              text={item.content || ''}
                              isEnglish={language === 'en'}
                              highlightTerm={isOpen ? highlightSearchTerm : null}
                            />
                          </div>
                        )}

                        {item.type === 'statute' && docConfig && (
                          <RomeStatuteViewer
                            drawerId={docConfig.drawerId}
                            data={docConfig.parts}
                            language={language}
                            highlightId={isOpen ? highlightArtId : null}
                            highlightTerm={isOpen ? highlightSearchTerm : null}
                            documentTitleAr={docConfig.titleAr}
                            documentTitleEn={docConfig.titleEn}
                            itemLabelAr={docConfig.itemLabelAr}
                            itemLabelEn={docConfig.itemLabelEn}
                            bookmarks={studyStore.bookmarks}
                            notes={studyStore.notes}
                            onToggleBookmark={studyStore.toggleBookmark}
                            onSaveNote={studyStore.saveNote}
                            onRecordHistory={studyStore.recordHistory}
                            onNavigateCrossRef={handleNavigateCrossRef}
                            onOpenStudyWorkspace={() => setShowWorkspaceModal(true)}
                            onNotify={notify}
                          />
                        )}

                        {item.type === 'glossary' && item.terms && (
                          <GlossarySectionViewer
                            terms={item.terms}
                            isRTL={isRTL}
                            initialFilter={highlightSearchTerm}
                          />
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </main>

      {/* Unified Legal Study Workspace Sheet */}
      <StudyWorkspaceModal
        isOpen={showWorkspaceModal}
        onClose={() => setShowWorkspaceModal(false)}
        language={language}
        bookmarks={studyStore.bookmarks}
        notes={studyStore.notes}
        history={studyStore.history}
        onJumpToArticle={(drawerId, artId) => jumpToProvision(drawerId, artId)}
        onRemoveBookmark={studyStore.removeBookmark}
        onClearBookmarks={studyStore.clearAllBookmarks}
        onDeleteNote={studyStore.deleteNote}
        onClearHistory={studyStore.clearHistory}
        onExportStudySheet={handleExport}
      />

      {/* Material 3 Expressive Snackbar Toast */}
      <AnimatePresence>
        {toast && (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.16 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[120] bg-[#1c1c1c] text-white px-5 py-3 rounded-[16px] shadow-xl flex items-center gap-2.5 text-xs sm:text-sm font-semibold pointer-events-none print:hidden"
          >
            <Check size={15} />
            <span>{toast.message}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Material 3 Expressive Floating Help FAB & Tour */}
      <HelpTourModal language={language} />
    </div>
  );
}
