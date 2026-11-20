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
      <button
        type="button"
        onClick={install}
        className="flex items-center gap-1.5 rounded-full bg-[#111111] hover:bg-[#2a2a2a] text-white px-4 h-10 text-xs font-bold transition-all active:scale-95 whitespace-nowrap"
      >
        <Download size={15} />
        <span>{t.install}</span>
      </button>
    );
  }

  if (isIOS) {
    return (
      <>
        <button
          type="button"
          onClick={() => setShowIOSGuide(true)}
          className="flex items-center gap-1.5 rounded-full bg-[#e8e8e8] hover:bg-[#dcdcdc] text-[#121212] px-4 h-10 text-xs font-bold transition-all active:scale-95 whitespace-nowrap"
        >
          <Download size={15} />
          <span>{t.install}</span>
        </button>
        {showIOSGuide && (
          <div
            onClick={() => setShowIOSGuide(false)}
            className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/45 sm:p-4 backdrop-blur-xs"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="bg-[#f5f5f5] rounded-t-[28px] sm:rounded-[28px] p-6 w-full sm:max-w-xs text-center relative shadow-2xl"
            >
              <button
                type="button"
                onClick={() => setShowIOSGuide(false)}
                className="absolute top-4 end-4 w-8 h-8 rounded-full bg-[#e8e8e8] flex items-center justify-center text-[#121212]"
              >
                <X size={16} />
              </button>
              <h3 className="font-black text-lg text-[#121212] mb-4">{t.iosTitle}</h3>
              <p className="text-sm text-[#444] mb-2">{t.step1}</p>
              <p className="text-sm text-[#444] mb-4">{t.step2}</p>
            </div>
          </div>
        )}
      </>
    );
  }

  return null;
};
