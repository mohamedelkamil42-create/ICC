import React, { useState } from 'react';
import { Volume2 } from 'lucide-react';
import { playNaturalEnglishAudio } from './audioUtils';

interface GlossaryTermCardProps {
  ar: string;
  en: string;
  isRTL: boolean;
}

export const GlossaryTermCard: React.FC<GlossaryTermCardProps> = ({ ar, en, isRTL }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const playAudio = (e: React.MouseEvent) => {
    e.stopPropagation();
    
    if (isPlaying) return;

    playNaturalEnglishAudio(en, {
      onStart: () => setIsPlaying(true),
      onEnd: () => setIsPlaying(false),
      onError: () => setIsPlaying(false)
    });
  };

  return (
    <div 
      className="relative w-full h-[76px] sm:h-[80px] [perspective:1000px] cursor-pointer"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div 
        className={`w-full h-full transition-transform duration-500 [transform-style:preserve-3d] relative rounded-lg shadow-sm hover:shadow-md ${isFlipped ? '[transform:rotateY(180deg)]' : ''}`}
      >
        {/* Front Face */}
        <div className="absolute inset-0 w-full h-full bg-white border border-neutral-200 rounded-lg p-2 sm:p-3 [backface-visibility:hidden] flex flex-col justify-center gap-1">
          <span className="font-bold text-neutral-900 text-sm md:text-base text-center leading-tight line-clamp-2">
            {isRTL ? ar : en}
          </span>
          <span className="text-[10px] text-neutral-400 text-center font-bold tracking-wider uppercase">
            {isRTL ? 'اضغط للترجمة' : 'Tap to translate'}
          </span>
        </div>

        {/* Back Face */}
        <div className="absolute inset-0 w-full h-full bg-neutral-900 border border-black rounded-lg p-2 sm:p-3 [backface-visibility:hidden] [transform:rotateY(180deg)] flex justify-between items-center text-white">
          <span className="font-bold text-white text-sm md:text-base text-center leading-tight flex-1 line-clamp-2 px-1" dir={isRTL ? 'ltr' : 'rtl'}>
            {isRTL ? en : ar}
          </span>
          
          <button 
            type="button"
            onClick={playAudio}
            className={`shrink-0 p-1.5 sm:p-2 rounded-full transition-all ml-1 ${
              isPlaying 
                ? 'bg-white text-neutral-900 scale-110 ring-2 ring-neutral-400' 
                : 'bg-neutral-800 text-neutral-300 hover:text-white hover:bg-neutral-700 active:scale-95'
            }`}
            title="نطق المصطلح بالإنجليزي"
          >
            <Volume2 size={16} className={isPlaying ? 'animate-pulse' : ''} />
          </button>
        </div>
      </div>
    </div>
  );
};

