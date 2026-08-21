import React, { useState, useEffect } from 'react';
import { Cookie, Shield, Check, X } from 'lucide-react';

export default function CookieBanner({ t, onOpenLegal }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('corsovault_cookie_consent');
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('corsovault_cookie_consent', 'accepted');
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('corsovault_cookie_consent', 'declined');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md z-40 bg-slate-900 border border-slate-700/80 rounded-2xl p-5 shadow-2xl shadow-black/80 animate-in slide-in-from-bottom duration-300">
      <div className="flex items-start space-x-3.5 mb-3">
        <div className="p-2 rounded-xl bg-brand-500/10 text-brand-400 border border-brand-500/20 shrink-0">
          <Cookie className="w-5 h-5" />
        </div>
        <div>
          <h4 className="text-sm font-bold text-white">
            {t.cookie.title}
          </h4>
          <p className="text-xs text-slate-300 mt-1 leading-relaxed">
            {t.cookie.text}{' '}
            <button
              onClick={() => onOpenLegal('cookies')}
              className="text-brand-400 underline hover:text-brand-300"
            >
              En savoir plus
            </button>.
          </p>
        </div>
      </div>

      <div className="flex items-center space-x-2 pt-2">
        <button
          onClick={handleAccept}
          className="flex-1 py-2 px-3 rounded-lg bg-brand-500 hover:bg-brand-600 text-white text-xs font-semibold shadow-sm transition-colors text-center"
        >
          {t.cookie.accept}
        </button>
        <button
          onClick={handleDecline}
          className="py-2 px-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-medium transition-colors"
        >
          {t.cookie.decline}
        </button>
      </div>
    </div>
  );
}
