import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Volume2 } from 'lucide-react';
import { playNaturalEnglishAudio } from './audioUtils';

interface GlossaryTermCardProps {
  ar: string;
  en: string;
  isRTL: boolean;
}

export const GlossaryTermCard: React.FC<GlossaryTermCardProps> = ({ ar, en, isRTL }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleAudio = (e: React.MouseEvent) => {
    e.stopPropagation();
    playNaturalEnglishAudio(en);
  };

  return (
    <div 
      className="relative h-24 w-full cursor-pointer perspective-1000"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: 'spring', stiffness: 260, damping: 20 }}
        className="relative w-full h-full preserve-3d"
      >
        {/* Front Face (Arabic) */}
        <div className="absolute inset-0 backface-hidden bg-white border border-neutral-200 rounded-xl p-3 shadow-sm flex flex-col justify-center items-center text-center">
          <div className="text-sm font-black text-black leading-tight mb-1">
            {ar}
          </div>
          <div className="text-[10px] text-neutral-400 font-bold uppercase tracking-wider">
            {isRTL ? 'انقر للترجمة' : 'Click to translate'}
          </div>
        </div>

        {/* Back Face (English) */}
        <div 
          className="absolute inset-0 backface-hidden bg-neutral-900 border border-black rounded-xl p-3 shadow-sm flex flex-col justify-center items-center text-center rotate-y-180"
        >
          <div className="text-xs font-bold text-white leading-tight mb-2 px-2">
            {en}
          </div>
          <button 
            onClick={handleAudio}
            className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <Volume2 size={14} />
          </button>
        </div>
      </motion.div>
    </div>
  );
};
