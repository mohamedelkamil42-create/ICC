import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  HelpCircle, 
  X, 
  ChevronRight, 
  ChevronLeft, 
  Search, 
  BookOpen, 
  Volume2, 
  Compass, 
  Layers, 
  Sparkles, 
  Scale, 
  Check, 
  Loader2, 
  ArrowRight, 
  ArrowLeft 
} from 'lucide-react';
import { playNaturalEnglishAudio, stopNaturalSpeech } from './audioUtils';

interface HelpTourModalProps {
  language: 'ar' | 'en';
}

export const HelpTourModal: React.FC<HelpTourModalProps> = ({ language }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [audioSuccess, setAudioSuccess] = useState(false);
  const [demoViewMode, setDemoViewMode] = useState<'list' | 'book'>('list');
  const [hasSeenTour, setHasSeenTour] = useState(() => {
    return localStorage.getItem('icc_tour_completed') === 'true';
  });

  const isRTL = language === 'ar';

  // Keyboard navigation for tour
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose();
      } else if (e.key === 'ArrowRight') {
        if (isRTL) prevStep();
        else nextStep();
      } else if (e.key === 'ArrowLeft') {
        if (isRTL) nextStep();
        else prevStep();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentStep, isRTL]);

  const handleOpen = () => {
    setCurrentStep(0);
    setIsOpen(true);
  };

  const handleClose = () => {
    stopNaturalSpeech();
    setIsPlayingAudio(false);
    setIsOpen(false);
    setHasSeenTour(true);
    localStorage.setItem('icc_tour_completed', 'true');
  };

  const nextStep = () => {
    stopNaturalSpeech();
    setIsPlayingAudio(false);
    if (currentStep < steps.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      handleClose();
    }
  };

  const prevStep = () => {
    stopNaturalSpeech();
    setIsPlayingAudio(false);
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handlePlayDemoAudio = async (term = 'Complementarity') => {
    if (isPlayingAudio) return;
    setIsPlayingAudio(true);
    setAudioSuccess(false);

    await playNaturalEnglishAudio(term, {
      onEnd: () => {
        setIsPlayingAudio(false);
        setAudioSuccess(true);
        setTimeout(() => setAudioSuccess(false), 2000);
      },
      onError: () => {
        setIsPlayingAudio(false);
      }
    });
  };

  const handleTriggerSearch = () => {
    handleClose();
    setTimeout(() => {
      window.dispatchEvent(new CustomEvent('open-smart-search'));
    }, 150);
  };

  const steps = [
    {
      id: 'navigation',
      icon: Compass,
      tagAr: 'الميزة 1: هيكلية التنقل الذكية',
      tagEn: 'Feature 1: Smart Structured Navigation',
      titleAr: 'التنقل الهيكلي بالأدراج ووضعا القراءة',
      titleEn: 'Structured Drawer Navigation & Reading Modes',
      descriptionAr: 'يعتمد التطبيق هيكل الأدراج المترابطة (Nested Drawers) لتصفح الوثائق والقرارات القانونية بسلاسة دون تشويش. يمكنك فتح المواد والتبديل الفوري بين نمط القائمة الكاملة ونمط الكتاب الورقي (صفحة تلو الأخرى)، مع التحكم بحجم الخط واللغة من الشريط العلوي.',
      descriptionEn: 'The application uses a clean drawer hierarchy to organize treaties and legal rules. Switch seamlessly between comprehensive List View and focused Book View (page by page), with real-time bilingual toggling and typography zoom controls.',
      interactiveContent: (
        <div className="bg-neutral-50 p-4 rounded-2xl border border-neutral-200 flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-neutral-600">
              {isRTL ? 'جرّب التبديل بين وضعي القراءة:' : 'Try switching reading modes:'}
            </span>
            <div className="flex items-center gap-1 bg-white p-1 rounded-xl border border-neutral-200">
              <button
                onClick={() => setDemoViewMode('list')}
                className={`px-3 py-1 rounded-lg text-[11px] font-bold transition-all ${
                  demoViewMode === 'list' ? 'bg-black text-white' : 'text-neutral-500 hover:text-black'
                }`}
              >
                {isRTL ? 'عرض القائمة' : 'List View'}
              </button>
              <button
                onClick={() => setDemoViewMode('book')}
                className={`px-3 py-1 rounded-lg text-[11px] font-bold transition-all ${
                  demoViewMode === 'book' ? 'bg-black text-white' : 'text-neutral-500 hover:text-black'
                }`}
              >
                {isRTL ? 'عرض الكتاب' : 'Book View'}
              </button>
            </div>
          </div>
          <div className="p-3 bg-white rounded-xl border border-neutral-100 text-xs text-neutral-500 flex items-center justify-between">
            <span className="font-semibold text-neutral-800">
              {demoViewMode === 'list' 
                ? (isRTL ? '• عرض القائمة: تصفح متصل لجميع المواد مع تمدد الفصول.' : '• List View: Continuous scrolling with expandable chapters.') 
                : (isRTL ? '• عرض الكتاب: تركيز عميق على مادة واحدة في كل صفحة.' : '• Book View: Distraction-free single article reading.')}
            </span>
            <span className="text-[10px] font-bold uppercase px-2 py-0.5 bg-neutral-100 text-neutral-700 rounded">
              {demoViewMode}
            </span>
          </div>
        </div>
      )
    },
    {
      id: 'search',
      icon: Search,
      tagAr: 'الميزة 2: البحث المتزامن والانتقال الفوري',
      tagEn: 'Feature 2: Concurrent Search & Direct Jump',
      titleAr: 'البحث المتزامن في جميع الوثائق والانتقال للموضع',
      titleEn: 'Concurrent Document Search & Instant Jump-to-Content',
      descriptionAr: 'محرك بحث متزامن متقدم يفحص نصوص نظام روما الأساسي وقواعد الإجراءات والإثبات والقاموس في آن واحد. النقر على أي نتيجة ينقلك فوراً إلى المادة المعنية في الوثيقة مع فتح الفصل تلقائياً وتظليل الموضع الدقيق للمصطلح.',
      descriptionEn: 'Search concurrently across all 128 articles of the Rome Statute, 225 rules of Procedure, and legal terms simultaneously. Clicking any search result instantly jumps right to the article and highlights the exact location of the term.',
      interactiveContent: (
        <div className="bg-neutral-50 p-4 rounded-2xl border border-neutral-200 flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-neutral-700">
              {isRTL ? 'تصفية فورية حسب الوثيقة مع إبراز المقتطف:' : 'Instant filtering by document origin with snippet preview:'}
            </span>
            <span className="text-[10px] font-black uppercase tracking-wider bg-black text-white px-2 py-0.5 rounded">
              Live
            </span>
          </div>
          <button
            onClick={handleTriggerSearch}
            className="w-full py-2.5 px-4 bg-white hover:bg-neutral-100 border border-neutral-300 rounded-xl text-xs font-bold text-neutral-800 flex items-center justify-between group transition-all"
          >
            <span className="flex items-center gap-2">
              <Search size={14} className="text-neutral-500 group-hover:text-black transition-colors" />
              <span>{isRTL ? 'افتح محرك البحث المباشر وجرّب الآن' : 'Open Live Search Bar Now'}</span>
            </span>
            {isRTL ? <ArrowLeft size={14} /> : <ArrowRight size={14} />}
          </button>
        </div>
      )
    },
    {
      id: 'dictionary',
      icon: BookOpen,
      tagAr: 'الميزة 3: القاموس والترجمة القانونية المعتمدة',
      tagEn: 'Feature 3: Certified Legal Dictionary & Inline Translation',
      titleAr: 'الترجمة السياقية الفورية وتحليل نصوص المحكمة',
      titleEn: 'ICC-Certified In-Text Translation & Terminology',
      descriptionAr: 'جميع المصطلحات والعبارات القانونية المركبة مميزة بخط منقط؛ انقر على أي منها لعرض المقابل الرسمي المعتمد والشرح القضائي. كما يمكنك تظليل أي نص حر بالفأرة لترجمته قانونياً، أو تصفح بطاقات القاموس الموثقة (1000+ مصطلح).',
      descriptionEn: 'All certified legal terms and multi-word legal phrases are indicated with subtle dotted underlines. Click any term for the official ICC translation and legal rationale, or freely highlight any phrase with your cursor for instant analysis.',
      interactiveContent: (
        <div className="bg-neutral-50 p-4 rounded-2xl border border-neutral-200 flex flex-col gap-3">
          <div className="text-xs font-bold text-neutral-700">
            {isRTL ? 'مثال تفاعلي لمصطلح قانوني معتمد في النص:' : 'Interactive preview of an in-text certified term:'}
          </div>
          <div className="p-3 bg-white rounded-xl border border-neutral-200 text-xs text-neutral-800 leading-relaxed">
            {isRTL ? (
              <>
                تختص المحكمة بمحاكمة مرتكبي{' '}
                <span className="border-b border-dotted border-black font-bold px-1 bg-neutral-100 rounded">
                  الجرائم ضد الإنسانية
                </span>{' '}
                وفقاً لمبدأ{' '}
                <span className="border-b border-dotted border-black font-bold px-1 bg-neutral-100 rounded">
                  التكامل القضائي
                </span>.
              </>
            ) : (
              <>
                The Court exercises jurisdiction over{' '}
                <span className="border-b border-dotted border-black font-bold px-1 bg-neutral-100 rounded" dir="ltr">
                  Crimes against humanity
                </span>{' '}
                under the principle of{' '}
                <span className="border-b border-dotted border-black font-bold px-1 bg-neutral-100 rounded" dir="ltr">
                  Complementarity
                </span>.
              </>
            )}
          </div>
          <div className="text-[11px] text-neutral-500 font-medium">
            {isRTL ? '💡 انقر فوق أي مصطلح منقط أثناء قراءة أي مادة ليظهر لك التحليل القضائي فوراً.' : '💡 Click any dotted term while reading to trigger the certified translation overlay.'}
          </div>
        </div>
      )
    },
    {
      id: 'tts',
      icon: Volume2,
      tagAr: 'الميزة 4: النطق الصوتي الطبيعي',
      tagEn: 'Feature 4: Natural Legal Voice & Text-to-Speech',
      titleAr: 'الاستماع للنطق الإنجليزي المعياري للمصطلحات',
      titleEn: 'Natural Audio Pronunciation for Legal Terms',
      descriptionAr: 'يوفر التطبيق محرك نطق صوتي عالي الدقة يتيح لك الاستماع إلى النطق الإنجليزي الصحيح للمصطلحات الدولية المعقدة. أيقونة النطق متوفرة في بطاقات القاموس، ونافذة الترجمة المنبثقة، ونتائج البحث.',
      descriptionEn: 'Listen to pristine, human-like English pronunciation for complex international criminal law terminology. The audio button is integrated directly across glossary cards, translation popups, and search results.',
      interactiveContent: (
        <div className="bg-neutral-50 p-4 rounded-2xl border border-neutral-200 flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-neutral-700">
              {isRTL ? 'جرّب الاستماع إلى نطق مصطلح قانوني الآن:' : 'Listen to a sample term pronunciation:'}
            </span>
            {audioSuccess && (
              <span className="text-[10px] font-bold text-black flex items-center gap-1">
                <Check size={12} /> {isRTL ? 'اكتمل النطق' : 'Played'}
              </span>
            )}
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => handlePlayDemoAudio('Pre-Trial Chamber')}
              disabled={isPlayingAudio}
              className="flex-1 py-2.5 px-4 bg-black text-white hover:bg-neutral-800 rounded-xl text-xs font-bold flex items-center justify-center gap-2 shadow-sm transition-all disabled:opacity-50"
            >
              {isPlayingAudio ? (
                <Loader2 size={15} className="animate-spin" />
              ) : (
                <Volume2 size={15} />
              )}
              <span dir="ltr">Pre-Trial Chamber</span>
            </button>
            <button
              onClick={() => handlePlayDemoAudio('Complementarity')}
              disabled={isPlayingAudio}
              className="flex-1 py-2.5 px-4 bg-white text-black border border-neutral-300 hover:border-black rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all disabled:opacity-50"
            >
              {isPlayingAudio ? (
                <Loader2 size={15} className="animate-spin" />
              ) : (
                <Volume2 size={15} />
              )}
              <span dir="ltr">Complementarity</span>
            </button>
          </div>
        </div>
      )
    }
  ];

  const currentStepData = steps[currentStep];
  const StepIcon = currentStepData.icon;

  const t = {
    helpButton: isRTL ? 'دليل الاستخدام' : 'App Tour',
    helpTooltip: isRTL ? 'جولة تفاعلية في مزايا التطبيق' : 'Interactive Tour of App Features',
    next: isRTL ? 'التالي' : 'Next',
    prev: isRTL ? 'السابق' : 'Previous',
    finish: isRTL ? 'بدء الاستكشاف' : 'Start Exploring',
    stepOf: isRTL ? `خطوة ${currentStep + 1} من ${steps.length}` : `Step ${currentStep + 1} of ${steps.length}`,
    close: isRTL ? 'إغلاق' : 'Close',
  };

  return (
    <>
      {/* Floating Help Button */}
      <aside 
        aria-label={t.helpTooltip}
        className="fixed bottom-6 end-6 z-40 print:hidden"
      >
        <button
          onClick={handleOpen}
          className="flex items-center gap-2.5 px-4 py-3 bg-black text-white rounded-full shadow-2xl border border-neutral-800 hover:scale-105 active:scale-95 transition-all group"
          title={t.helpTooltip}
        >
          <div className="relative">
            <HelpCircle size={18} className="text-white group-hover:rotate-12 transition-transform" />
            {!hasSeenTour && (
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-white rounded-full ring-2 ring-black animate-pulse" />
            )}
          </div>
          <span className="text-xs font-black tracking-wide hidden sm:inline">
            {t.helpButton}
          </span>
        </button>
      </aside>

      {/* Interactive Tour Modal */}
      <AnimatePresence>
        {isOpen && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
            dir={isRTL ? 'rtl' : 'ltr'}
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleClose}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-lg bg-white rounded-2xl sm:rounded-[2.5rem] shadow-2xl border border-neutral-200 overflow-hidden flex flex-col p-4 sm:p-6 md:p-8 z-10 max-h-[92vh] sm:max-h-[88vh]"
            >
              {/* Header with Step Progress */}
              <div className="flex items-center justify-between mb-4 sm:mb-6 pb-3 sm:pb-4 border-b border-neutral-100 shrink-0">
                <div className="flex items-center gap-2">
                  <div className="p-2 bg-black text-white rounded-xl shrink-0">
                    <StepIcon size={18} />
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-neutral-400 block">
                      {isRTL ? currentStepData.tagAr : currentStepData.tagEn}
                    </span>
                    <span className="text-xs font-bold text-neutral-800">
                      {t.stepOf}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  {/* Step Progress Indicators */}
                  <div className="flex items-center gap-1.5" dir="ltr">
                    {steps.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentStep(index)}
                        className={`h-1.5 rounded-full transition-all ${
                          index === currentStep 
                            ? 'w-6 bg-black' 
                            : 'w-2 bg-neutral-200 hover:bg-neutral-400'
                        }`}
                        title={`Step ${index + 1}`}
                      />
                    ))}
                  </div>

                  <button
                    onClick={handleClose}
                    className="p-1.5 rounded-full hover:bg-neutral-100 text-neutral-400 hover:text-black transition-colors"
                  >
                    <X size={18} />
                  </button>
                </div>
              </div>

              {/* Main Step Content */}
              <div className="flex-1 flex flex-col gap-3 sm:gap-4 overflow-y-auto pr-1">
                <h3 className="text-lg sm:text-2xl font-black text-neutral-900 leading-snug">
                  {isRTL ? currentStepData.titleAr : currentStepData.titleEn}
                </h3>

                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  {isRTL ? currentStepData.descriptionAr : currentStepData.descriptionEn}
                </p>

                {/* Interactive Sandbox for this step */}
                <div className="mt-1">
                  {currentStepData.interactiveContent}
                </div>
              </div>

              {/* Footer Controls */}
              <div className="flex items-center justify-between mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-neutral-100 shrink-0">
                <button
                  onClick={prevStep}
                  disabled={currentStep === 0}
                  className="px-4 py-2.5 rounded-full text-xs font-bold text-neutral-600 hover:text-black hover:bg-neutral-100 disabled:opacity-30 disabled:hover:bg-transparent transition-all flex items-center gap-1.5"
                >
                  {isRTL ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
                  <span>{t.prev}</span>
                </button>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleClose}
                    className="px-4 py-2.5 text-xs font-bold text-neutral-400 hover:text-neutral-700 transition-colors"
                  >
                    {isRTL ? 'تخطي' : 'Skip'}
                  </button>

                  <button
                    onClick={nextStep}
                    className="px-6 py-2.5 bg-black text-white hover:bg-neutral-800 rounded-full text-xs font-black shadow-lg shadow-black/10 active:scale-95 transition-all flex items-center gap-2"
                  >
                    <span>{currentStep === steps.length - 1 ? t.finish : t.next}</span>
                    {currentStep === steps.length - 1 ? (
                      <Check size={14} />
                    ) : (
                      isRTL ? <ChevronLeft size={16} /> : <ChevronRight size={16} />
                    )}
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
