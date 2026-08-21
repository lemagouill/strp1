import React, { useEffect } from 'react';
import { X, Shield, FileText, Lock, RefreshCw, Cookie, Printer } from 'lucide-react';
import { legalDocs } from '../data/translations';

const docIcons = {
  mentions: FileText,
  privacy: Lock,
  terms: Shield,
  refund: RefreshCw,
  cookies: Cookie,
};

export default function LegalModal({ docKey, lang, onClose }) {
  const currentDocs = legalDocs[lang] || legalDocs.fr;
  const doc = currentDocs[docKey] || currentDocs.mentions;
  const IconComponent = docIcons[docKey] || FileText;

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 lg:p-8 animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 sm:p-7 border-b border-slate-800 bg-slate-950/70">
          <div className="flex items-center space-x-3.5">
            <div className="w-10 h-10 rounded-xl bg-brand-500/10 border border-brand-500/20 text-brand-400 flex items-center justify-center">
              <IconComponent className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white leading-tight">
                {doc.title}
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                Corsovault Advisory SAS • Document Réglementaire Officiel
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={handlePrint}
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors text-xs flex items-center space-x-1"
              title="Imprimer le document"
            >
              <Printer className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
              aria-label="Fermer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body - Scrollable Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
          <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 text-slate-400 italic">
            {doc.subtitle}
          </div>

          {doc.sections.map((sec, idx) => (
            <div key={idx} className="space-y-2.5 pt-2">
              <h4 className="text-sm sm:text-base font-bold text-white border-b border-slate-800/80 pb-1.5 text-brand-300">
                {sec.heading}
              </h4>
              <div className="whitespace-pre-line text-slate-300">
                {sec.content}
              </div>
            </div>
          ))}
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-6 border-t border-slate-800 bg-slate-950/70 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            Pour toute question juridique : <a href="mailto:legal@corsovault.com" className="text-brand-400 underline">legal@corsovault.com</a>
          </div>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-brand-500 hover:bg-brand-600 text-white font-semibold text-xs shadow-md transition-all"
          >
            Fermer la fenêtre
          </button>
        </div>
      </div>
    </div>
  );
}
