import React, { useState } from 'react';
import { usePWAInstall } from './usePWAInstall';
import { Download, X } from 'lucide-react';

interface PWAInstallButtonProps {
  language: 'ar' | 'en';
}

export const PWAInstallButton: React.FC<PWAInstallButtonProps> = ({ language }) => {
  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall();
  const [showIOSGuide, setShowIOSGuide] = useState(false);

  if (isInstalled) return null;

  const t = {
    install: language === 'ar' ? 'تثبيت' : 'Install',
    iosTitle: language === 'ar' ? 'تثبيت على iOS' : 'Install on iOS',
    step1: language === 'ar' ? '1. اضغط على زر المشاركة.' : '1. Tap Share button.',
    step2: language === 'ar' ? '2. اختر إضافة للشاشة الرئيسية.' : '2. Add to Home Screen.',
  };

  if (isInstallable) {
    return (
      <button onClick={install} className="flex items-center gap-2 rounded-full bg-black text-white px-3 py-1.5 text-xs font-bold shadow-sm transition active:scale-95">
        <Download size={14} />
        <span>{t.install}</span>
      </button>
    );
  }

  if (isIOS) {
    return (
      <>
        <button onClick={() => setShowIOSGuide(true)} className="flex items-center gap-2 rounded-full border border-neutral-300 bg-white text-black px-3 py-1.5 text-xs font-bold transition active:scale-95">
          <Download size={14} />
          <span>{t.install}</span>
        </button>
        {showIOSGuide && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
            <div className="bg-white rounded-2xl p-6 w-full max-w-xs text-center relative">
              <button onClick={() => setShowIOSGuide(false)} className="absolute top-3 right-3 text-neutral-400"><X size={20} /></button>
              <h3 className="font-black text-lg mb-4">{t.iosTitle}</h3>
              <p className="text-sm mb-2">{t.step1}</p>
              <p className="text-sm mb-6">{t.step2}</p>
            </div>
          </div>
        )}
      </>
    );
  }

  return null;
};
