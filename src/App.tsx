import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { libraryDataAr, libraryDataEn } from './data';
import { DrawerItem } from './types';
import { Scale, ChevronRight, ChevronLeft, ArrowRight, ArrowLeft, Folder, FileText, Globe } from 'lucide-react';
import { PWAInstallButton } from './PWAInstallButton';
import { TranslatableText } from './TranslatableText';
import { GlossaryTermCard } from './GlossaryTermCard';
import { SmartSearchBar } from './SmartSearchBar';
import { prefetchAudio } from './audioUtils';
import { useOnlineStatus } from './useOnlineStatus';
import glossaryData from './glossaryData.json';

export default function App() {
  const [language, setLanguage] = useState<'ar' | 'en'>('ar');
  const [path, setPath] = useState<DrawerItem[]>([]);
  const [openId, setOpenId] = useState<string | null>(null);
  const isOnline = useOnlineStatus();
  const mainRef = useRef<HTMLDivElement>(null);

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
  }, [language]);

  const data = language === 'ar' ? libraryDataAr : libraryDataEn;
  const currentItems = path.length > 0 ? path[path.length - 1].children || [] : data;
  const currentFolder = path.length > 0 ? path[path.length - 1] : null;

  const handleItemClick = (item: DrawerItem) => {
    if (item.type === 'folder') {
      setPath([...path, item]);
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
    setPath(path.slice(0, -1));
    setOpenId(null);
    scrollToRef();
  };

  const toggleLang = () => {
    setLanguage(prev => prev === 'ar' ? 'en' : 'ar');
    setPath([]);
    setOpenId(null);
  };

  const t = {
    title: language === 'ar' ? 'مرجع المحكمة الجنائية الدولية' : 'ICC Reference',
    subtitle: language === 'ar' ? 'دليل قانوني شامل لمتطلبات ووثائق المحكمة.' : 'Comprehensive legal guide for ICC requirements.',
    back: language === 'ar' ? 'رجوع' : 'Back',
    main: language === 'ar' ? 'القائمة الرئيسية' : 'Main Menu',
  };

  const isRTL = language === 'ar';

  return (
    <div className="min-h-screen bg-[#fafafa] text-neutral-900 selection:bg-neutral-200">
      
      {/* Navbar */}
      <nav className={`sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-neutral-100 px-4 py-2.5 flex items-center justify-between ${isRTL ? 'flex-row' : 'flex-row-reverse'}`}>
        <SmartSearchBar libraryData={data} language={language} onNavigateToItem={(p, id) => { 
          setPath(p); 
          setOpenId(id); 
          scrollToRef(id);
        }} />
        
        <div className={`flex items-center gap-2 ${isRTL ? 'flex-row' : 'flex-row-reverse'}`}>
          {!isOnline && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }} 
              animate={{ opacity: 1, scale: 1 }}
              className="bg-neutral-100 text-neutral-500 text-[10px] font-black uppercase px-2 py-1 rounded-md"
            >
              {language === 'ar' ? 'وضع الأوفلاين' : 'Offline Mode'}
            </motion.div>
          )}
          <PWAInstallButton language={language} />
          <button onClick={toggleLang} className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-neutral-200 text-[11px] font-black uppercase tracking-tight hover:bg-neutral-50 transition-all active:scale-95">
            <Globe size={13} className="text-neutral-400" />
            <span>{language === 'ar' ? 'English' : 'العربية'}</span>
          </button>
        </div>
      </nav>

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
        <div className={`flex items-center mb-6 min-h-[40px] ${isRTL ? 'justify-start' : 'justify-end'}`}>
          <AnimatePresence mode="wait">
            {currentFolder ? (
              <motion.button 
                key="back" 
                initial={{ opacity: 0, x: isRTL ? 10 : -10 }} 
                animate={{ opacity: 1, x: 0 }} 
                exit={{ opacity: 0, x: isRTL ? 10 : -10 }} 
                onClick={handleBack} 
                className={`flex items-center gap-2 text-xs font-black uppercase tracking-wider bg-white border border-neutral-200 px-5 py-2.5 rounded-full shadow-sm hover:shadow-md transition-all active:scale-95 ${isRTL ? 'flex-row' : 'flex-row-reverse'}`}
              >
                {isRTL ? <ArrowRight size={14} /> : <ArrowLeft size={14} />}
                <span>{t.back}</span>
              </motion.button>
            ) : (
              <motion.div key="main" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className={`text-neutral-400 font-black text-[10px] uppercase tracking-[0.2em] px-4 w-full ${isRTL ? 'text-right' : 'text-left'}`}>
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
                    className={`w-full flex items-center justify-between p-4 bg-black text-white rounded-2xl shadow-lg shadow-black/5 hover:scale-[1.02] active:scale-95 transition-all group ${isRTL ? 'flex-row' : 'flex-row-reverse'}`}
                  >
                    <div className={`flex items-center gap-3 min-w-0 ${isRTL ? 'flex-row' : 'flex-row-reverse'}`}>
                      <div className="w-10 h-10 shrink-0 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-white/20 transition-colors">
                        {item.type === 'folder' ? <Folder size={20} /> : <FileText size={20} />}
                      </div>
                      <span className={`font-bold text-sm sm:text-base truncate leading-tight ${isRTL ? 'text-right' : 'text-left'}`}>{item.title}</span>
                    </div>
                    {item.type === 'folder' ? (isRTL ? <ChevronLeft size={18} /> : <ChevronRight size={18} />) : <div className="text-[10px] font-black uppercase bg-white/10 px-2 py-1 rounded-md">{isOpen ? 'Close' : 'Open'}</div>}
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden bg-white border border-neutral-200 rounded-3xl p-6 md:p-8 shadow-sm">
                        <h3 className={`text-xl font-black mb-4 border-b pb-4 ${isRTL ? 'text-right' : 'text-left'}`}>{item.title}</h3>
                        {item.type === 'content' && <TranslatableText text={item.content || ''} isEnglish={language === 'en'} />}
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
    </div>
  );
}
