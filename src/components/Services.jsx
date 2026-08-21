import React from 'react';
import { 
  Layers, 
  ShieldCheck, 
  Globe, 
  AlertTriangle, 
  FileSpreadsheet, 
  ArrowLeftRight, 
  CheckCircle2, 
  ArrowUpRight 
} from 'lucide-react';

const iconMap = {
  Layers: Layers,
  ShieldCheck: ShieldCheck,
  Globe: Globe,
  AlertTriangle: AlertTriangle,
  FileSpreadsheet: FileSpreadsheet,
  ArrowLeftRight: ArrowLeftRight,
};

export default function Services({ t, onScrollToAudit }) {
  return (
    <section id="services" className="py-20 bg-slate-900/50 border-t border-slate-800/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-bold uppercase tracking-wider mb-3">
            {t.services.tag}
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">
            {t.services.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            {t.services.subtitle}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {t.services.items.map((service) => {
            const IconComponent = iconMap[service.icon] || Layers;
            return (
              <div
                key={service.id}
                className="group relative p-7 rounded-2xl bg-slate-900 border border-slate-800 hover:border-brand-500/40 shadow-lg hover:shadow-brand-500/10 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Icon Header */}
                  <div className="w-12 h-12 rounded-xl bg-brand-500/10 border border-brand-500/20 text-brand-400 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-brand-500 group-hover:text-white transition-all duration-300 shadow-sm">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg font-bold text-white mb-2.5 group-hover:text-brand-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
                    {service.desc}
                  </p>

                  {/* Feature Bullets */}
                  <div className="space-y-2 pt-4 border-t border-slate-800/80">
                    {service.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start space-x-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action */}
                <div className="mt-8 pt-4">
                  <button
                    onClick={onScrollToAudit}
                    className="w-full flex items-center justify-between text-xs font-semibold text-brand-400 hover:text-white py-2 px-3 rounded-lg bg-slate-950/60 border border-slate-800 hover:border-brand-500/30 transition-colors"
                  >
                    <span>{t.audit.tag}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
