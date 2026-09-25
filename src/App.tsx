import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { libraryDataAr, libraryDataEn } from './data';
import { DrawerItem } from './types';
import { Scale, ChevronRight, ChevronLeft, ArrowRight, ArrowLeft, Folder, FileText, Globe, ZoomIn, ZoomOut } from 'lucide-react';
import { PWAInstallButton } from './PWAInstallButton';
import { TranslatableText } from './TranslatableText';
import { GlossaryTermCard } from './GlossaryTermCard';
import { SmartSearchBar } from './SmartSearchBar';
import { prefetchAudio } from './audioUtils';
import { useOnlineStatus } from './useOnlineStatus';
import glossaryData from './glossaryData.json';
import { RomeStatuteViewer } from './RomeStatuteViewer';
import { romeStatuteParts } from './romeStatuteData';
import { rulesOfProcedureParts } from './rulesOfProcedureData';

export default function App() {
  const [language, setLanguage] = useState<'ar' | 'en'>(() => {
    const saved = localStorage.getItem('icc-app-language');
    return (saved === 'ar' || saved === 'en') ? saved : 'ar';
  });
  const [pathIds, setPathIds] = useState<string[]>([]);
  const [openId, setOpenId] = useState<string | null>(null);
  const [highlightArtId, setHighlightArtId] = useState<string | null>(null);
  const [fontSize, setFontSize] = useState(() => {
    const saved = localStorage.getItem('icc-app-font-size');
    return saved ? parseInt(saved, 10) : 90;
  });
  const [scrolled, setScrolled] = useState(false);
  const isOnline = useOnlineStatus();
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smart scrolling effect
  const scrollToRef = (targetOpenId?: string) => {
    // Small delay to allow layout animations/DOM updates to start
    setTimeout(() => {
      if (targetOpenId) {
        const element = document.getElementById(`item-${targetOpenId}`);
        if (element) {
          const yOffset = -80; // Account for sticky navbar height
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      } else {
        // Scroll to top of main content for folder navigation
        if (mainRef.current) {
          const yOffset = -100;
          const y = mainRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }
    }, 100);
  };

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    localStorage.setItem('icc-app-language', language);
  }, [language]);

  useEffect(() => {
    document.documentElement.style.fontSize = `${fontSize}%`;
    localStorage.setItem('icc-app-font-size', fontSize.toString());
  }, [fontSize]);

  const data = language === 'ar' ? libraryDataAr : libraryDataEn;
  
  // Resolve path IDs to objects from current data
  const resolvePath = (ids: string[], rootItems: DrawerItem[]): DrawerItem[] => {
    const result: DrawerItem[] = [];
    let currentLevel = rootItems;
    for (const id of ids) {
      const found = currentLevel.find(item => item.id === id);
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
      scrollToRef();
    } else {
      const willOpen = openId !== item.id;
      setOpenId(willOpen ? item.id : null);
      if (willOpen) {
        scrollToRef(item.id);
      }
    }
  };

  const handleBack = () => {
    setPathIds(pathIds.slice(0, -1));
    setOpenId(null);
    scrollToRef();
  };

  const toggleLang = () => {
    setLanguage(prev => prev === 'ar' ? 'en' : 'ar');
  };

  const adjustFontSize = (delta: number) => {
    setFontSize(prev => Math.min(150, Math.max(50, prev + delta)));
  };

  const t = {
    title: language === 'ar' ? 'مرجع المحكمة الجنائية الدولية' : 'ICC Reference',
    subtitle: language === 'ar' ? 'دليل قانوني شامل لمتطلبات ووثائق المحكمة.' : 'Comprehensive legal guide for ICC requirements.',
    back: language === 'ar' ? 'رجوع' : 'Back',
    main: language === 'ar' ? 'القائمة الرئيسية' : 'Main Menu',
  };

  const isRTL = language === 'ar';

  return (
    <div dir={isRTL ? 'rtl' : 'ltr'} className={`min-h-screen bg-[#fafafa] text-neutral-900 selection:bg-neutral-200 transition-all duration-150 ${isRTL ? 'font-arabic' : ''}`}>
      
      {/* Navbar */}
      <nav className={`sticky top-0 z-40 px-4 py-3 flex items-center justify-between transition-all duration-300 ${scrolled ? 'bg-white/70 backdrop-blur-xl border-b border-neutral-100 shadow-sm' : 'bg-transparent border-b border-transparent'}`}>
        <div className="flex items-center gap-4">
          <SmartSearchBar libraryData={data} language={language} scrolled={scrolled} onNavigateToItem={(p, id, artId) => { 
            setPathIds(p.map(item => item.id)); 
            setOpenId(id); 
            setHighlightArtId(artId || null);
            scrollToRef(id);
          }} />
        </div>
        
        <div className="flex items-center gap-2">
          {!isOnline && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }} 
              animate={{ opacity: 1, scale: 1 }}
              className="bg-neutral-100 text-neutral-500 text-[10px] font-black uppercase px-2 py-1 rounded-md"
            >
              {language === 'ar' ? 'أوفلاين' : 'Offline'}
            </motion.div>
          )}
          
          <div className={`flex items-center border border-neutral-200 rounded-full h-10 p-1 shadow-sm transition-all duration-300 ${scrolled ? 'bg-white/50' : 'bg-white/80'}`}>
            <button 
              onClick={toggleLang} 
              className={`flex items-center justify-center px-4 h-full rounded-full text-[11px] font-black uppercase tracking-tight transition-all active:scale-95 ${language === 'en' ? 'bg-black text-white' : 'text-neutral-400 hover:bg-neutral-50'}`}
            >
              EN
            </button>
            <button 
              onClick={toggleLang} 
              className={`flex items-center justify-center px-4 h-full rounded-full text-[12px] font-black uppercase tracking-tight transition-all active:scale-95 ${language === 'ar' ? 'bg-black text-white' : 'text-neutral-400 hover:bg-neutral-50'}`}
            >
              <span className="font-arabic">عربي</span>
            </button>
          </div>

          <div className={`flex items-center border border-neutral-200 rounded-full h-10 overflow-hidden shadow-sm transition-all duration-300 ${scrolled ? 'bg-white/50' : 'bg-white/80'}`}>
            <button 
              onClick={() => adjustFontSize(-1)}
              className="px-3 h-full hover:bg-neutral-50 text-neutral-500 transition-colors border-r border-neutral-100"
              title={language === 'ar' ? 'تصغير الخط' : 'Smaller font'}
            >
              <ZoomOut size={16} />
            </button>
            <button 
              onClick={() => adjustFontSize(1)}
              className="px-3 h-full hover:bg-neutral-50 text-neutral-500 transition-colors"
              title={language === 'ar' ? 'تكبير الخط' : 'Larger font'}
            >
              <ZoomIn size={16} />
            </button>
          </div>
          
          <PWAInstallButton language={language} />
        </div>
      </nav>

      {/* 3D Content Container */}
      <motion.div
        key={language}
        initial={{ rotateY: isRTL ? -15 : 15, opacity: 0, scale: 0.95 }}
        animate={{ rotateY: 0, opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        style={{ perspective: 1000 }}
      >
        {/* Hero */}
        <header className="pt-12 pb-8 px-4 text-center max-w-2xl mx-auto">
          <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="inline-flex p-4 bg-black rounded-3xl text-white mb-6 shadow-xl shadow-black/10">
            <Scale size={32} strokeWidth={1.5} />
          </motion.div>
          <h1 className="text-2xl sm:text-3xl font-black mb-3 tracking-tight">{t.title}</h1>
          <p className="text-neutral-500 text-sm sm:text-base leading-relaxed">{t.subtitle}</p>
        </header>

        {/* Content */}
        <main ref={mainRef} className="max-w-4xl mx-auto px-4 pb-20">
          
          {/* Breadcrumb / Back */}
          <div className="flex items-center mb-6 min-h-[40px] justify-start">
            <AnimatePresence mode="wait">
              {currentFolder ? (
                <motion.button 
                  key="back" 
                  initial={{ opacity: 0, x: isRTL ? 10 : -10 }} 
                  animate={{ opacity: 1, x: 0 }} 
                  exit={{ opacity: 0, x: isRTL ? 10 : -10 }} 
                  onClick={handleBack} 
                  className="flex items-center gap-2 text-xs font-black uppercase tracking-wider bg-white border border-neutral-200 px-5 py-2.5 rounded-full shadow-sm hover:shadow-md transition-all active:scale-95"
                >
                  <ArrowLeft size={14} className={isRTL ? 'rotate-180' : ''} />
                  <span>{t.back}</span>
                </motion.button>
              ) : (
                <motion.div key="main" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-neutral-400 font-black text-[10px] uppercase tracking-[0.2em] px-4 w-full">
                  {t.main}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Drawer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <AnimatePresence mode="popLayout">
              {currentItems.map((item) => {
                const isOpen = openId === item.id;
                return (
                  <motion.div 
                    key={item.id} 
                    id={`item-${item.id}`}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className={`flex flex-col gap-2 transition-all duration-300 ${isOpen ? 'col-span-full' : ''}`}
                  >
                    <button
                      onClick={() => handleItemClick(item)}
                      className={`w-full flex items-center justify-between p-4 bg-black text-white rounded-2xl shadow-lg shadow-black/5 hover:scale-[1.02] active:scale-95 transition-all group`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="w-10 h-10 shrink-0 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-white/20 transition-colors">
                          {item.type === 'folder' ? <Folder size={20} /> : <FileText size={20} />}
                        </div>
                        <span className="font-bold text-sm sm:text-base truncate leading-tight">{item.title}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        {item.type === 'folder' ? (
                          <ChevronLeft size={18} className={isRTL ? '' : 'rotate-180'} />
                        ) : (
                          <div className="text-[10px] font-black uppercase bg-white/10 px-2 py-1 rounded-md">
                            {isOpen ? (isRTL ? 'إغلاق' : 'Close') : (isRTL ? 'فتح' : 'Open')}
                          </div>
                        )}
                      </div>
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden bg-white border border-neutral-200 rounded-3xl p-6 md:p-8 shadow-sm">
                          <h3 className={`text-xl font-black mb-4 border-b pb-4 ${isRTL ? 'text-right' : 'text-left'}`}>{item.title}</h3>
                          {item.type === 'content' && <TranslatableText text={item.content || ''} isEnglish={language === 'en'} />}
                          {item.type === 'statute' && (
                            <RomeStatuteViewer 
                              data={item.id === '2-2' ? rulesOfProcedureParts : romeStatuteParts} 
                              language={language} 
                              highlightId={isOpen ? highlightArtId : null}
                              documentTitleAr={item.id === '2-2' ? 'قواعد الإجراءات والإثبات' : 'نظام روما الأساسي'}
                              documentTitleEn={item.id === '2-2' ? 'Rules of Procedure and Evidence' : 'Rome Statute'}
                              itemLabelAr={item.id === '2-2' ? 'القاعدة' : 'المادة'}
                              itemLabelEn={item.id === '2-2' ? 'Rule' : 'Article'}
                            />
                          )}
                          {item.type === 'glossary' && item.terms && (
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                              {item.terms.map((term, i) => <GlossaryTermCard key={i} ar={term.ar} en={term.en} isRTL={isRTL} />)}
                            </div>
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
      </motion.div>
    </div>
  );
}
