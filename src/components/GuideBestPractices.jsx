import React, { useState } from 'react';
import { BookOpen, Check, Copy, CheckCircle2, ShieldCheck, Terminal, Lightbulb, ExternalLink } from 'lucide-react';

export default function GuideBestPractices({ t }) {
  const [activeTab, setActiveTab] = useState(0);
  const [copied, setCopied] = useState(false);

  const currentTab = t.guide.tabs[activeTab];

  const handleCopyCode = (code) => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="guide" className="py-20 bg-slate-950 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-bold uppercase tracking-wider mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            <span>{t.guide.tag}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">
            {t.guide.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            {t.guide.subtitle}
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {t.guide.tabs.map((tab, idx) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(idx)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeTab === idx
                  ? 'bg-brand-500 text-white shadow-lg shadow-brand-500/25 border border-brand-400'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-850 border border-slate-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content Box */}
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl">
          <div className="max-w-4xl mx-auto">
            {/* Guide Title & Intro */}
            <div className="mb-8">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                {currentTab.title}
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed bg-slate-950/60 p-4 rounded-xl border border-slate-800/80">
                {currentTab.intro}
              </p>
            </div>

            {/* Checklist Section */}
            <div className="mb-10">
              <h4 className="text-sm sm:text-base font-bold text-white flex items-center space-x-2 mb-4">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                <span>{currentTab.checklistTitle}</span>
              </h4>

              <div className="space-y-3">
                {currentTab.checkpoints.map((point, pIdx) => (
                  <div
                    key={pIdx}
                    className="flex items-start space-x-3 p-3.5 rounded-xl bg-slate-950/40 border border-slate-800/60 text-xs sm:text-sm text-slate-200"
                  >
                    <div className="w-5 h-5 rounded-full bg-brand-500/10 text-brand-400 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                      {pIdx + 1}
                    </div>
                    <span className="leading-relaxed">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Code Snippet Box */}
            <div className="mt-8">
              <div className="flex items-center justify-between bg-slate-950 border border-b-0 border-slate-800 px-4 py-2.5 rounded-t-xl text-xs">
                <div className="flex items-center space-x-2 text-slate-400 font-mono">
                  <Terminal className="w-4 h-4 text-brand-400" />
                  <span className="font-semibold">{currentTab.codeTitle}</span>
                </div>
                <button
                  onClick={() => handleCopyCode(currentTab.codeSnippet)}
                  className="flex items-center space-x-1.5 px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors text-[11px]"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copié !</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copier</span>
                    </>
                  )}
                </button>
              </div>

              <div className="bg-slate-950 border border-slate-800 p-4 rounded-b-xl overflow-x-auto text-xs font-mono text-slate-300 leading-relaxed">
                <pre>{currentTab.codeSnippet}</pre>
              </div>
            </div>

            {/* Expert Advice Note */}
            <div className="mt-8 flex items-start space-x-3 p-4 rounded-xl bg-indigo-950/30 border border-indigo-500/20 text-xs sm:text-sm text-indigo-200">
              <Lightbulb className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-white block mb-0.5">Conseil d'Architecture Corsovault :</span>
                Ne déployez jamais une règle anti-fraude en mode "Block" immédiat sans avoir analysé son impact pendant au moins 14 jours en mode "Review" ou "Test". Cela protège vos acheteurs VIP d'un blocage intempestif.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
