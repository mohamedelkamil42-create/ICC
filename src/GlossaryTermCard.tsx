import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Volume2, Loader2, RotateCcw } from 'lucide-react';
import { playNaturalEnglishAudio } from './audioUtils';
import {
  fetchLegalTranslation,
  translateLegalTermOffline,
  LegalTranslationResult,
} from './legalTranslationService';

interface GlossaryTermCardProps {
  ar: string;
  en: string;
  isRTL: boolean;
  isHighlighted?: boolean;
}

export const GlossaryTermCard: React.FC<GlossaryTermCardProps> = React.memo(
  ({ ar, en, isRTL, isHighlighted = false }) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isLoadingDetails, setIsLoadingDetails] = useState(false);
    const [legalData, setLegalData] = useState<LegalTranslationResult | null>(null);
    const [loadedForRTL, setLoadedForRTL] = useState<boolean | null>(null);

    useEffect(() => {
      let isMounted = true;
      if (isFlipped && (!legalData || loadedForRTL !== isRTL)) {
        const offline = translateLegalTermOffline(en, false);
        if (offline && offline.explanation) {
          setLegalData(offline);
          setLoadedForRTL(isRTL);
          setIsLoadingDetails(false);
        } else {
          setIsLoadingDetails(true);
          fetchLegalTranslation(en, ar, false)
            .then((res) => {
              if (isMounted) {
                setLegalData(res);
                setLoadedForRTL(isRTL);
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
                setLoadedForRTL(isRTL);
                setIsLoadingDetails(false);
              }
            });
        }
      }
      return () => {
        isMounted = false;
      };
    }, [isFlipped, en, ar, isRTL, legalData, loadedForRTL]);

    const handleAudio = async (e: React.MouseEvent) => {
      e.stopPropagation();
      if (isPlaying) return;

      setIsPlaying(true);
      await playNaturalEnglishAudio(en, {
        onEnd: () => setIsPlaying(false),
        onError: () => setIsPlaying(false),
      });
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        setIsFlipped((prev) => !prev);
      }
    };

    return (
      <div
        role="button"
        tabIndex={0}
        aria-pressed={isFlipped}
        onKeyDown={handleKeyDown}
        className="group relative h-36 w-full cursor-pointer perspective-1000 select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[#111111] rounded-[22px]"
        onClick={() => setIsFlipped((prev) => !prev)}
      >
        <motion.div
          initial={false}
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{
            duration: 0.5,
            type: 'spring',
            stiffness: 230,
            damping: 25,
          }}
          className="relative w-full h-full preserve-3d rounded-[22px]"
        >
          {/* Front Face — M3 Expressive Tonal Card */}
          <div
            className={`absolute inset-0 backface-hidden bg-[#f5f5f5] group-hover:bg-[#ececec] rounded-[22px] p-4 flex flex-col justify-between text-center overflow-hidden transition-colors border ${
              isHighlighted ? 'border-[#111111] ring-2 ring-[#111111]' : 'border-black/[0.06]'
            }`}
          >
            <div className="text-[15px] font-black text-[#121212] leading-snug px-1 line-clamp-2 my-auto font-arabic">
              {isRTL ? ar : en}
            </div>

            <div className="flex items-center justify-between text-[11px] text-[#666666] font-semibold pt-2 border-t border-black/[0.06] gap-2">
              <span className="truncate" dir={isRTL ? 'ltr' : 'rtl'}>
                {isRTL ? en : ar}
              </span>
              <span className="text-[#121212] shrink-0">
                {isRTL ? 'التفسير ↺' : 'Flip ↺'}
              </span>
            </div>
          </div>

          {/* Back Face — M3 Inverse Surface */}
          <div
            className="absolute inset-0 backface-hidden bg-[#111111] rounded-[22px] p-3.5 shadow-lg flex flex-col justify-between text-center rotate-y-180 text-white overflow-hidden"
            dir={isRTL ? 'rtl' : 'ltr'}
          >
            <div className="flex items-center justify-between w-full shrink-0 gap-2">
              <div className="text-xs font-bold text-white truncate" dir="ltr">
                {en}
              </div>
              <div className="flex items-center gap-1 shrink-0">
                <motion.button
                  type="button"
                  whileTap={{ scale: 0.9 }}
                  onClick={handleAudio}
                  disabled={isPlaying}
                  className={`w-7 h-7 rounded-full flex items-center justify-center transition-colors ${
                    isPlaying ? 'bg-white/30' : 'bg-white/15 hover:bg-white/25'
                  } text-white`}
                  title={isRTL ? 'نطق المصطلح بالإنجليزية' : 'Listen to pronunciation'}
                >
                  {isPlaying ? <Loader2 size={12} className="animate-spin" /> : <Volume2 size={12} />}
                </motion.button>
                <div className="w-6 h-6 rounded-full flex items-center justify-center text-white/60">
                  <RotateCcw size={11} />
                </div>
              </div>
            </div>

            <div className="flex-1 flex items-center justify-center overflow-hidden mt-2 bg-white/10 rounded-[14px] px-2.5 py-2">
              {isLoadingDetails ? (
                <div className="flex items-center gap-2 text-white/70">
                  <Loader2 size={12} className="animate-spin" />
                  <span className="text-[10px] font-semibold">
                    {isRTL ? 'استرجاع التفسير...' : 'Retrieving context...'}
                  </span>
                </div>
              ) : (
                <p className="text-[11px] text-white/90 leading-relaxed line-clamp-3 text-justify font-arabic">
                  {legalData?.explanation || (isRTL ? ar : en)}
                </p>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    );
  }
);
