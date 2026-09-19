import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { libraryDataAr, libraryDataEn } from './data';
import { DrawerItem } from './types';
import { Scale, ChevronLeft, ChevronRight, ArrowRight, ArrowLeft, Folder, FileText, Globe } from 'lucide-react';
import { PWAInstallButton } from './PWAInstallButton';
import { TranslatableText } from './TranslatableText';
import { GlossaryTermCard } from './GlossaryTermCard';
import { SmartSearchBar } from './SmartSearchBar';

export default function App() {
  const [language, setLanguage] = useState<'ar' | 'en'>('ar');
  const [path, setPath] = useState<DrawerItem[]>([]);
  const [openContentId, setOpenContentId] = useState<string | null>(null);

  // Sync the document language and direction
  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  const libraryData = language === 'ar' ? libraryDataAr : libraryDataEn;

  // Determine which items to show based on the current folder path
  const currentItems = path.length > 0 ? path[path.length - 1].children || [] : libraryData;
  const currentFolder = path.length > 0 ? path[path.length - 1] : null;

  const handleItemClick = (item: DrawerItem) => {
    if (item.type === 'folder') {
      setPath([...path, item]);
      setOpenContentId(null);
    } else {
      setOpenContentId(openContentId === item.id ? null : item.id);
    }
  };

  const handleBack = () => {
    setPath(path.slice(0, -1));
    setOpenContentId(null);
  };

  const toggleLanguage = () => {
    setLanguage(prev => (prev === 'ar' ? 'en' : 'ar'));
    // Reset path to avoid mismatched data items between languages
    setPath([]);
    setOpenContentId(null);
  };

  const handleNavigateToItem = (parentPath: DrawerItem[], drawerId: string) => {
    setPath(parentPath);
    setOpenContentId(drawerId);

    setTimeout(() => {
      const el = document.getElementById(`drawer-${drawerId}`);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 200);
  };

  const text = {
    title: language === 'ar' ? 'مرجع المحكمة الجنائية الدولية' : 'ICC Reference',
    subtitle: language === 'ar' ? 'منصة مرجعية منظمة لتسهيل الوصول إلى متطلبات ووثائق المحكمة.' : 'An organized platform to access the requirements and documents of the Court.',
    backTo: language === 'ar' ? 'العودة إلى' : 'Back to',
    mainMenu: language === 'ar' ? 'القائمة الرئيسية' : 'Main Menu',
    open: language === 'ar' ? 'فتح' : 'Open',
    close: language === 'ar' ? 'إغلاق' : 'Close',
    langToggle: language === 'ar' ? 'English' : 'العربية',
  };

  const isRTL = language === 'ar';

  return (
    <div className={`min-h-screen bg-[#fafafa] text-neutral-900 p-4 md:p-8 flex flex-col items-center ${isRTL ? 'font-sans' : 'font-sans'}`}>
      
      {/* Top Controls Bar: Search on the left, Language (+ PWA) on the right */}
      <div className="w-full max-w-3xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl flex items-center justify-between gap-3 mb-6 relative z-40" dir="ltr">
        {/* Search Bar - positioned at top of site on the left */}
        <div className="flex-1 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
          <SmartSearchBar
            libraryData={libraryData}
            language={language}
            onNavigateToItem={handleNavigateToItem}
          />
        </div>

        {/* Right controls: Language toggle & PWA */}
        <div className="flex items-center gap-2 shrink-0">
          <PWAInstallButton language={language} />
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 rounded-full border border-neutral-300 px-3.5 sm:px-4 py-2 text-xs sm:text-sm font-bold text-neutral-800 bg-white hover:bg-neutral-100 transition active:scale-95 shadow-sm"
          >
            <Globe size={16} />
            <span>{text.langToggle}</span>
          </button>
        </div>
      </div>

      {/* Header Area */}
      <header className="mb-6 md:mb-8 text-center max-w-2xl w-full">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }} 
          animate={{ scale: 1, opacity: 1 }} 
          className="inline-flex items-center justify-center p-3.5 sm:p-4 bg-neutral-900 rounded-full text-white mb-4 shadow-sm"
        >
          <Scale size={32} className="sm:w-9 sm:h-9" strokeWidth={1.5} />
        </motion.div>
        <motion.h1 
          initial={{ y: 20, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }} 
          transition={{ delay: 0.1 }}
          className="text-xl sm:text-2xl md:text-3xl font-extrabold mb-2.5 text-black tracking-tight"
        >
          {text.title}
        </motion.h1>
        <motion.p 
          initial={{ y: 20, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }} 
          transition={{ delay: 0.2 }}
          className="text-neutral-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl mx-auto"
        >
          {text.subtitle}
        </motion.p>
      </header>

      {/* Main Container - Responsive width adapting to screen type */}
      <main className="w-full max-w-3xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl flex flex-col gap-5 md:gap-6 relative">
        
        {/* Navigation / Back Button */}
        <div className="flex items-center min-h-[44px] relative z-20">
          <AnimatePresence mode="wait">
            {currentFolder ? (
              <motion.button
                key="back-btn"
                initial={{ opacity: 0, x: isRTL ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: isRTL ? -20 : 20 }}
                onClick={handleBack}
                className={`flex items-center text-neutral-900 bg-white border border-neutral-300 hover:bg-neutral-100 transition-colors text-sm md:text-base font-bold py-2 px-4 md:px-5 rounded-full shadow-sm hover:shadow active:scale-95 max-w-full ${isRTL ? 'ml-auto' : 'mr-auto'}`}
              >
                {isRTL ? <ArrowRight size={18} className="ml-2 shrink-0" /> : <ArrowLeft size={18} className="mr-2 shrink-0" />}
                <span className="truncate">
                  {text.backTo} {path.length > 1 ? path[path.length - 2].title : text.mainMenu}
                </span>
              </motion.button>
            ) : (
              <motion.div
                key="shelf-title"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-neutral-500 font-bold text-sm sm:text-base md:text-lg w-full text-center"
              >
                {text.mainMenu}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Drawers Container - Responsive layout adapting to screen size */}
        <div className="flex flex-col gap-4 relative z-10">
          <AnimatePresence mode="popLayout">
            <motion.div
              key={currentFolder ? currentFolder.id : 'root'}
              initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: isRTL ? -50 : 50 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4 md:gap-4.5"
            >
              {currentItems.map((item) => {
                const isOpen = openContentId === item.id;
                return (
                  <div 
                    key={item.id} 
                    id={`drawer-${item.id}`} 
                    className={`flex flex-col relative scroll-mt-24 transition-all duration-200 ${
                      isOpen ? 'col-span-1 md:col-span-2 lg:col-span-3' : 'col-span-1'
                    }`}
                  >
                    
                    {/* Drawer Front (Material Surface) */}
                    <button
                      onClick={() => handleItemClick(item)}
                      className={`group relative z-10 w-full flex items-center justify-between p-4 sm:p-5 bg-neutral-900 text-white rounded-2xl shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all overflow-hidden border border-black min-h-[76px] sm:min-h-[84px] ${isRTL ? 'text-right' : 'text-left'}`}
                    >
                      <div className={`flex items-center relative z-10 flex-1 min-w-0 ${isRTL ? 'pl-2' : 'pr-2'}`}>
                        <div className={`w-9 h-9 sm:w-11 sm:h-11 shrink-0 rounded-full bg-white text-black flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform ${isRTL ? 'ml-3' : 'mr-3'}`}>
                          {item.type === 'folder' ? <Folder size={18} className="sm:w-5 sm:h-5" /> : <FileText size={18} className="sm:w-5 sm:h-5" />}
                        </div>
                        <span className={`font-bold text-sm sm:text-base leading-snug line-clamp-2 ${isRTL ? 'text-right' : 'text-left'}`}>
                          {item.title}
                        </span>
                      </div>
                      
                      {/* Visual hint for Drawer */}
                      <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-10 h-1 bg-neutral-700 rounded-full opacity-40 group-hover:opacity-100 transition-opacity hidden md:block"></div>

                      <div className="relative z-10 flex items-center shrink-0">
                        {item.type === 'folder' ? (
                          isRTL ? <ChevronLeft className="text-neutral-400 group-hover:text-white group-hover:-translate-x-1 transition-all" size={20} /> : <ChevronRight className="text-neutral-400 group-hover:text-white group-hover:translate-x-1 transition-all" size={20} />
                        ) : (
                          <div className="text-neutral-400 text-xs font-bold px-2.5 sm:px-3 py-1 rounded-full border border-neutral-700 group-hover:text-white group-hover:border-neutral-500 transition-colors whitespace-nowrap">
                            {isOpen ? text.close : text.open}
                          </div>
                        )}
                      </div>
                    </button>

                    {/* Drawer Content (Slides out from underneath) */}
                    <AnimatePresence>
                      {(item.type === 'content' || item.type === 'glossary') && isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0, y: -20 }}
                          animate={{ height: 'auto', opacity: 1, y: 0 }}
                          exit={{ height: 0, opacity: 0, y: -20 }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                          className="relative z-0 mx-2 md:mx-4 overflow-hidden"
                        >
                          {/* The document inside */}
                          <div className={`bg-white border-x border-b border-neutral-200 rounded-b-2xl shadow-md p-4 sm:p-6 md:p-8 pt-8 -mt-6 ${isRTL ? 'text-right' : 'text-left'}`}>
                            <h3 className="text-lg md:text-xl font-black text-black mb-4 border-b-2 border-neutral-100 pb-3">
                              {item.title}
                            </h3>
                            
                            {item.type === 'content' && (
                              <TranslatableText text={item.content || ''} isEnglish={!isRTL} />
                            )}
                            
                            {item.type === 'glossary' && item.terms && (
                              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5">
                                {item.terms.map((term, tIdx) => (
                                  <GlossaryTermCard key={tIdx} ar={term.ar} en={term.en} isRTL={isRTL} />
                                ))}
                              </div>
                            )}
                            
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                  </div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}
