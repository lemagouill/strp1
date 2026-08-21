import React from 'react';
import { TrendingUp, ArrowRight, ShieldCheck, CheckCircle2, Award } from 'lucide-react';

export default function CaseStudies({ t, onScrollToAudit }) {
  return (
    <section id="case-studies" className="py-20 bg-slate-900/40 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>{t.caseStudies.tag}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">
            {t.caseStudies.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            {t.caseStudies.subtitle}
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {t.caseStudies.items.map((cs) => (
            <div
              key={cs.id}
              className="bg-slate-900 border border-slate-800 rounded-3xl p-7 flex flex-col justify-between hover:border-brand-500/30 transition-all shadow-xl group"
            >
              <div>
                {/* Badge Category & Client */}
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-300 text-[11px] font-semibold">
                    {cs.category}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-4 group-hover:text-brand-300 transition-colors">
                  {cs.client}
                </h3>

                {/* Challenge & Solution */}
                <div className="space-y-4 mb-6 text-xs sm:text-sm text-slate-300">
                  <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                    <span className="font-bold text-red-400 block mb-1">Défi Initial :</span>
                    <p className="text-slate-400 leading-relaxed">{cs.challenge}</p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                    <span className="font-bold text-emerald-400 block mb-1">Solution Corsovault :</span>
                    <p className="text-slate-400 leading-relaxed">{cs.solution}</p>
                  </div>
                </div>

                {/* Key Metrics Results Grid */}
                <div className="grid grid-cols-3 gap-2 pt-4 border-t border-slate-800">
                  {cs.results.map((res, rIdx) => (
                    <div key={rIdx} className="text-center p-2 rounded-lg bg-slate-950/40 border border-slate-800/50">
                      <div className="text-base sm:text-lg font-extrabold text-brand-400 mb-0.5">
                        {res.metric}
                      </div>
                      <div className="text-[10px] text-slate-400 leading-tight">
                        {res.desc}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4">
                <button
                  onClick={onScrollToAudit}
                  className="w-full flex items-center justify-center space-x-2 py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-colors"
                >
                  <span>Obtenir les mêmes résultats</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
