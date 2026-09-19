import React, { useState } from 'react';
import { usePWAInstall } from './usePWAInstall';
import { Download } from 'lucide-react';

interface PWAInstallButtonProps {
  language: 'ar' | 'en';
}

export const PWAInstallButton: React.FC<PWAInstallButtonProps> = ({ language }) => {
  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall();
  const [showIOSGuide, setShowIOSGuide] = useState(false);

  // If already running as an installed PWA, hide the button
  if (isInstalled) {
    return null;
  }

  const text = {
    install: language === 'ar' ? 'تثبيت التطبيق' : 'Install App',
    installIOS: language === 'ar' ? 'تثبيت على iOS' : 'Install on iOS',
    iosGuideTitle: language === 'ar' ? 'تثبيت على الآيفون / الآيباد' : 'Install on iPhone / iPad',
    step1: language === 'ar' ? '1. اضغط على زر "المشاركة" في شريط أدوات سفاري.' : '1. Tap the Share button in Safari toolbar.',
    step2: language === 'ar' ? '2. قم بالتمرير لأسفل واضغط على "إضافة إلى الشاشة الرئيسية".' : '2. Scroll down and tap Add to Home Screen.',
    close: language === 'ar' ? 'إغلاق' : 'Close',
  };

  // Chromium / Android / Desktop flow
  if (isInstallable) {
    return (
      <button
        onClick={install}
        className="flex items-center gap-2 rounded-full bg-neutral-900 px-4 py-2 text-sm font-bold text-white shadow-sm hover:bg-neutral-800 transition active:scale-95"
      >
        <Download size={16} />
        {text.install}
      </button>
    );
  }

  // iOS Safari flow
  if (isIOS) {
    return (
      <>
        <button
          onClick={() => setShowIOSGuide(true)}
          className="flex items-center gap-2 rounded-full border border-neutral-300 px-4 py-2 text-sm font-bold text-neutral-800 bg-white hover:bg-neutral-100 transition active:scale-95"
        >
          <Download size={16} />
          {text.installIOS}
        </button>

        {showIOSGuide && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4" dir={language === 'ar' ? 'rtl' : 'ltr'}>
            <div className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-xl text-neutral-900">
              <h3 className="text-lg font-black mb-4">{text.iosGuideTitle}</h3>
              <p className="mt-2 text-sm text-neutral-600 mb-2 font-medium">
                {text.step1}
              </p>
              <p className="text-sm text-neutral-600 mb-6 font-medium">
                {text.step2}
              </p>
              <button
                onClick={() => setShowIOSGuide(false)}
                className="w-full rounded-xl bg-neutral-100 py-3 text-sm font-bold text-neutral-900 hover:bg-neutral-200 transition"
              >
                {text.close}
              </button>
            </div>
          </div>
        )}
      </>
    );
  }

  return null;
};
