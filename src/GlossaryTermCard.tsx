import React from 'react';
import { motion } from 'motion/react';

interface GlossaryTermCardProps {
  ar: string;
  en: string;
  isRTL: boolean;
}

export const GlossaryTermCard: React.FC<GlossaryTermCardProps> = ({ ar, en, isRTL }) => {
  return (
    <motion.div 
      whileHover={{ y: -2, scale: 1.01 }}
      className="bg-white border border-neutral-200 rounded-xl p-3.5 shadow-sm flex flex-col gap-1.5 transition-all hover:border-neutral-400 group"
    >
      <div className={`text-sm font-black text-black leading-tight ${isRTL ? 'text-right' : 'text-left'}`}>
        {ar}
      </div>
      <div className={`text-[11px] font-bold text-neutral-400 group-hover:text-neutral-600 transition-colors uppercase tracking-wider ${isRTL ? 'text-right font-sans' : 'text-left'}`}>
        {en}
      </div>
    </motion.div>
  );
};
