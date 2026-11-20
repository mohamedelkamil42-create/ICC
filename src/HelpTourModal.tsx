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
  Check, 
  Loader2, 
  ArrowRight, 
  ArrowLeft 
} from 'lucide-react';
import { playNaturalEnglishAudio, stopNaturalSpeech } from './audioUtils';
import { safeStorage } from './storageUtils';

interface HelpTourModalProps {
  language: 'ar' | 'en';
}

export const HelpTourModal: React.FC<HelpTourModalProps> = ({ language }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [audioSuccess, setAudioSuccess] = useState(false);
  const [demoViewMode, setDemoViewMode] = useState<'list' | 'book'>('list');

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
    safeStorage.setItem('icc_tour_completed', 'true');
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
      titleAr: 'التنقل الهيكلي بالأدراج وأدوات البحث القانوني',
      titleEn: 'Structured Navigation, Notes & Reading Modes',
      descriptionAr: 'يعتمد التطبيق هيكل الأدراج المترابطة لتصفح الوثائق الست بسلاسة. يمكنك التبديل الفوري بين عرض القائمة ومقارنة اللغتين وعرض الكتاب (مع أسهم لوحة المفاتيح)، وتدوين ملاحظات قانونية شخصية على أي مادة، وتتبع الإحالات المرتبطة بين المواد وتصدير مذكرة دراستك.',
      descriptionEn: 'Browse all 6 official ICC legal instruments through clean nested drawers. Switch seamlessly between List, Parallel Bilingual, and Book View (with keyboard arrows), write personal study notes on any provision, follow cross-references, and export your study sheet.',
      interactiveContent: (
        <div className="bg-neutral-50 p-4 rounded-2xl border border-neutral-200 flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-neutral-600">
              {isRTL ? 'جرّب التبديل بين وضعي القراءة:' : 'Try switching reading modes:'}
            </span>
            <div className="flex items-center gap-1 bg-white p-1 rounded-xl border border-neutral-200">
              <button
                type="button"
                onClick={() => setDemoViewMode('list')}
                className={`px-3 py-1 rounded-lg text-[11px] font-bold transition-all ${
                  demoViewMode === 'list' ? 'bg-black text-white' : 'text-neutral-500 hover:text-black'
                }`}
              >
                {isRTL ? 'عرض القائمة' : 'List View'}
              </button>
              <button
                type="button"
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
                ? (isRTL ? '• عرض القائمة: تصفح متصل لجميع المواد مع تمدد الفصول والانتقال بالرقم.' : '• List View: Continuous scrolling with expandable chapters & direct jump.') 
                : (isRTL ? '• عرض الكتاب: تركيز عميق على مادة واحدة في كل صفحة مع مقارنة اللغتين.' : '• Book View: Distraction-free single provision reading with bilingual option.')}
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
      tagAr: 'الميزة 2: البحث المتزامن والانتقال الفوري (Ctrl+K)',
      tagEn: 'Feature 2: Concurrent Search & Direct Jump (Ctrl+K)',
      titleAr: 'البحث المتزامن في الوثائق الست والانتقال برقم المادة',
      titleEn: 'Concurrent Search Across All 6 Instruments & Provision Jump',
      descriptionAr: 'اضغط Ctrl+K في أي وقت للبحث الفوري بالتزامن في نظام روما الأساسي وقواعد الإجراءات وأركان الجرائم واللوائح الثلاث والقاموس، أو اكتب رقم المادة مباشرة (مثل: المادة 25 أو القاعدة 85) للانتقال الفوري إليها وتظليل الموضع الدقيق.',
      descriptionEn: 'Press Ctrl+K anytime to search simultaneously across all 6 ICC legal instruments and 1,000+ glossary terms—or type a provision number directly (e.g. Article 25 or Rule 85) to jump straight to it with exact match highlighting.',
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
      {/* Material 3 Expressive Extended FAB */}
      <aside
        aria-label={t.helpTooltip}
        className="fixed bottom-6 end-6 z-40 print:hidden"
      >
        <button
          type="button"
          onClick={handleOpen}
          className="flex items-center gap-2.5 h-12 sm:h-13 px-4 sm:px-5 bg-[#111111] text-white hover:bg-[#2a2a2a] rounded-[18px] shadow-lg shadow-black/15 active:scale-95 transition-all"
          title={t.helpTooltip}
        >
          <HelpCircle size={19} className="text-white" />
          <span className="text-xs sm:text-sm font-bold hidden sm:inline">
            {t.helpButton}
          </span>
        </button>
      </aside>

      {/* Material 3 Expressive Tour Sheet / Dialog */}
      <AnimatePresence>
        {isOpen && (
          <div
            className="fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:p-6"
            dir={isRTL ? 'rtl' : 'ltr'}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleClose}
              className="absolute inset-0 bg-black/45 backdrop-blur-xs"
            />

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 24 }}
              transition={{ duration: 0.18 }}
              className="relative w-full max-w-lg bg-[#f5f5f5] rounded-t-[28px] sm:rounded-[28px] shadow-2xl border border-black/[0.08] overflow-hidden flex flex-col p-5 sm:p-7 z-10 max-h-[90vh]"
            >
              {/* Mobile M3 Drag Handle */}
              <div className="sm:hidden flex justify-center -mt-2 mb-3">
                <div className="w-9 h-1 rounded-full bg-black/20" />
              </div>

              {/* Header */}
              <div className="flex items-center justify-between mb-5 pb-4 border-b border-black/[0.07] shrink-0">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#111111] text-white rounded-[14px] flex items-center justify-center shrink-0">
                    <StepIcon size={18} />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#666666] block">
                      {isRTL ? currentStepData.tagAr : currentStepData.tagEn}
                    </span>
                    <span className="text-xs font-bold text-[#121212] tabular-nums">
                      {t.stepOf}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5" dir="ltr">
                    {steps.map((_, index) => (
                      <button
                        type="button"
                        key={index}
                        onClick={() => setCurrentStep(index)}
                        className={`h-1.5 rounded-full transition-all ${
                          index === currentStep
                            ? 'w-6 bg-[#111111]'
                            : 'w-2 bg-black/20 hover:bg-black/40'
                        }`}
                        title={`Step ${index + 1}`}
                      />
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={handleClose}
                    className="w-9 h-9 rounded-full bg-[#e8e8e8] hover:bg-[#dcdcdc] text-[#121212] flex items-center justify-center transition-colors"
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
              <div className="flex items-center justify-between mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-black/[0.07] shrink-0">
                <button
                  type="button"
                  onClick={prevStep}
                  disabled={currentStep === 0}
                  className="px-4 py-2.5 rounded-full text-xs font-bold text-[#4a4a4a] hover:text-[#111111] hover:bg-[#e8e8e8] disabled:opacity-30 disabled:hover:bg-transparent transition-all flex items-center gap-1.5"
                >
                  {isRTL ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
                  <span>{t.prev}</span>
                </button>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handleClose}
                    className="px-4 py-2.5 rounded-full text-xs font-bold text-[#666666] hover:text-[#111111] hover:bg-[#e8e8e8] transition-colors"
                  >
                    {isRTL ? 'تخطي' : 'Skip'}
                  </button>

                  <button
                    type="button"
                    onClick={nextStep}
                    className="px-6 py-2.5 bg-[#111111] text-white hover:bg-[#2a2a2a] rounded-full text-xs font-bold active:scale-95 transition-all flex items-center gap-2"
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
