import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Volume2, Loader2, Scale, BookOpen, RotateCcw } from 'lucide-react';
import { playNaturalEnglishAudio } from './audioUtils';
import { fetchLegalTranslation, translateLegalTermOffline, LegalTranslationResult } from './legalTranslationService';

interface GlossaryTermCardProps {
  ar: string;
  en: string;
  isRTL: boolean;
}

export const GlossaryTermCard: React.FC<GlossaryTermCardProps> = ({ ar, en, isRTL }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoadingDetails, setIsLoadingDetails] = useState(false);
  const [legalData, setLegalData] = useState<LegalTranslationResult | null>(null);

  // Instantly retrieve certified legal explanation when flipped to the back
  useEffect(() => {
    let isMounted = true;
    if (isFlipped && !legalData) {
      const offline = translateLegalTermOffline(en, false);
      if (offline && offline.explanation) {
        setLegalData(offline);
        setIsLoadingDetails(false);
      } else {
        setIsLoadingDetails(true);
        fetchLegalTranslation(en, ar, false)
          .then((res) => {
            if (isMounted) {
              setLegalData(res);
              setIsLoadingDetails(false);
            }
          })
          .catch(() => {
            if (isMounted) {
              setLegalData({
                term: en,
                translation: ar,
                explanation: isRTL 
                  ? 'مصطلح قانوني معتمد في المحكمة الجنائية الدولية وفق أحكام نظام روما الأساسي.' 
                  : 'Certified legal terminology under the Rome Statute of the International Criminal Court.',
                isCertified: true,
              });
              setIsLoadingDetails(false);
            }
          });
      }
    }
    return () => {
      isMounted = false;
    };
  }, [isFlipped, en, ar, isRTL, legalData]);

  const handleAudio = async (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isPlaying) return;
    
    setIsPlaying(true);
    await playNaturalEnglishAudio(en, {
      onEnd: () => setIsPlaying(false),
      onError: () => setIsPlaying(false)
    });
  };

  return (
    <div 
      className="group relative h-36 w-full cursor-pointer perspective-1000 select-none"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ 
          duration: 0.6, 
          type: 'spring', 
          stiffness: 220, 
          damping: 24 
        }}
        className="relative w-full h-full preserve-3d transition-shadow duration-300 group-hover:shadow-xl group-hover:shadow-black/5 rounded-2xl"
      >
        {/* Front Face (Arabic Primary) */}
        <div className="absolute inset-0 backface-hidden bg-white border border-neutral-200 rounded-2xl p-4 shadow-sm flex flex-col justify-between text-center overflow-hidden">
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-1.5 text-[9px] font-black uppercase tracking-wider text-neutral-400">
              <Scale size={11} className="text-black/60" />
              <span>{isRTL ? 'مفهوم قانوني معتمد' : 'Certified Legal Concept'}</span>
            </div>
            <div className="w-1.5 h-1.5 rounded-full bg-neutral-300 group-hover:bg-black transition-colors" />
          </div>

          <div className="text-[14px] sm:text-[15px] font-black text-black leading-snug px-1 line-clamp-2 my-auto font-arabic">
            {ar}
          </div>

          <div className="flex items-center justify-between text-[9px] text-neutral-400 font-bold uppercase tracking-wider pt-1 border-t border-neutral-100">
            <span className="truncate max-w-[140px] text-neutral-500 font-medium" dir="ltr">{en}</span>
            <span className="text-neutral-400 group-hover:text-black transition-colors shrink-0">
              {isRTL ? 'التفسير ↺' : 'Analysis ↺'}
            </span>
          </div>
        </div>

        {/* Back Face (English + Certified Explanation) - Rotated 180deg */}
        <div 
          className="absolute inset-0 backface-hidden bg-black border border-black rounded-2xl p-3.5 shadow-lg flex flex-col justify-between text-center rotate-y-180 text-white overflow-hidden"
          dir={isRTL ? 'rtl' : 'ltr'}
        >
          {/* Top header row */}
          <div className="flex items-center justify-between w-full shrink-0">
            <div className="flex items-center gap-1.5 text-[8px] font-black uppercase tracking-widest text-neutral-400">
              <BookOpen size={10} className="text-white/80" />
              <span>ICC Lexicon</span>
            </div>
            <div className="flex items-center gap-1.5">
              <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleAudio}
                disabled={isPlaying}
                className={`p-1.5 rounded-full transition-colors ${isPlaying ? 'bg-white/30' : 'bg-white/15 hover:bg-white/25'} text-white`}
                title="Listen to pronunciation"
              >
                {isPlaying ? <Loader2 size={12} className="animate-spin" /> : <Volume2 size={12} />}
              </motion.button>
              <div className="p-1 rounded-full text-white/50 hover:text-white" title="Flip back">
                <RotateCcw size={10} />
              </div>
            </div>
          </div>

          {/* Term Title */}
          <div className="text-[13px] font-bold text-white leading-tight px-1 truncate shrink-0 my-0.5" dir="ltr">
            {en}
          </div>

          {/* Asynchronous Explanation / Definition Body */}
          <div className="flex-1 flex items-center justify-center overflow-hidden my-1 bg-white/5 rounded-xl p-2 border border-white/10">
            {isLoadingDetails ? (
              <div className="flex items-center gap-2 text-white/60">
                <Loader2 size={12} className="animate-spin text-white/80" />
                <span className="text-[9px] font-bold tracking-tight">
                  {isRTL ? 'استرجاع التفسير المعتمد...' : 'Retrieving legal context...'}
                </span>
              </div>
            ) : (
              <p className="text-[10px] text-white/80 leading-relaxed line-clamp-3 text-justify font-arabic">
                {legalData?.explanation || (isRTL ? ar : en)}
              </p>
            )}
          </div>

          {/* Footer certified badge */}
          <div className="flex items-center justify-center gap-1 text-[8px] text-neutral-400 font-black uppercase tracking-widest shrink-0">
            <Scale size={9} />
            <span>Rome Statute Standard</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
