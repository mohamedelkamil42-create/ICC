import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Volume2, Loader2, Scale } from 'lucide-react';
import { playNaturalEnglishAudio } from './audioUtils';

interface GlossaryTermCardProps {
  ar: string;
  en: string;
  isRTL: boolean;
}

export const GlossaryTermCard: React.FC<GlossaryTermCardProps> = ({ ar, en, isRTL }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

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
      className="group relative h-28 w-full cursor-pointer perspective-1000"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ 
          duration: 0.7, 
          type: 'spring', 
          stiffness: 200, 
          damping: 25 
        }}
        className="relative w-full h-full preserve-3d transition-shadow duration-500 group-hover:shadow-xl group-hover:shadow-black/5 rounded-2xl"
      >
        {/* Front Face (Arabic) */}
        <div className="absolute inset-0 backface-hidden bg-white border border-neutral-200 rounded-2xl p-4 shadow-sm flex flex-col justify-center items-center text-center">
          <div className="absolute top-3 left-3 flex items-center gap-1 text-[8px] font-black uppercase tracking-tighter text-neutral-300">
            <Scale size={10} />
            <span>Legal Concept</span>
          </div>
          <div className="text-[15px] font-black text-black leading-tight mb-2">
            {ar}
          </div>
          <div className="text-[9px] text-neutral-400 font-bold uppercase tracking-[0.15em] opacity-0 group-hover:opacity-100 transition-opacity">
            {isRTL ? 'انقر للترجمة المعتمدة' : 'Click for certified translation'}
          </div>
        </div>

        {/* Back Face (English) - Already rotated 180deg */}
        <div 
          className="absolute inset-0 backface-hidden bg-black border border-black rounded-2xl p-4 shadow-lg flex flex-col justify-center items-center text-center rotate-y-180"
        >
          <div className="text-sm font-bold text-white leading-snug mb-3 px-1">
            {en}
          </div>
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleAudio}
            disabled={isPlaying}
            className={`p-2 rounded-full transition-colors ${isPlaying ? 'bg-white/30' : 'bg-white/15 hover:bg-white/25'} text-white`}
            title="Listen"
          >
            {isPlaying ? <Loader2 size={16} className="animate-spin" /> : <Volume2 size={16} />}
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};
