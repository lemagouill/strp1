import React from 'react';
import { Shield, Phone, Mail, MapPin, ArrowUpRight, Lock, CheckCircle2 } from 'lucide-react';

export default function Footer({ t, onOpenLegal, onScrollToAudit }) {
  return (
    <footer className="bg-slate-950 border-t border-slate-850 text-slate-400 text-xs">
      {/* Main Footer Directory */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Column 1: Company Profile (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-brand-600 to-indigo-500 flex items-center justify-center shadow-md">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white font-sans">Corsovault</span>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              {t.footer.aboutDesc}
            </p>

            <div className="pt-2">
              <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px] font-semibold">
                <Lock className="w-3.5 h-3.5" />
                <span>PCI-DSS Compliant Integration Best Practices</span>
              </span>
            </div>
          </div>

          {/* Column 2: Navigation Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              {t.footer.navTitle}
            </h4>
            <ul className="space-y-2">
              <li><a href="#services" className="hover:text-white transition-colors">{t.nav.services}</a></li>
              <li><a href="#guide" className="hover:text-white transition-colors">{t.nav.guide}</a></li>
              <li><a href="#case-studies" className="hover:text-white transition-colors">{t.nav.caseStudies}</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">{t.nav.pricing}</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">{t.nav.faq}</a></li>
              <li>
                <button onClick={onScrollToAudit} className="text-brand-400 hover:text-brand-300 font-semibold flex items-center space-x-1">
                  <span>{t.nav.auditBtn}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Legal & Regulatory Links (3 cols - Mandatory Google Ads) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              {t.footer.legalTitle}
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onOpenLegal('mentions')}
                  className="hover:text-brand-300 text-left transition-colors flex items-center space-x-1.5"
                >
                  <span>{t.footer.legalLinks.mentions}</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenLegal('privacy')}
                  className="hover:text-brand-300 text-left transition-colors flex items-center space-x-1.5"
                >
                  <span>{t.footer.legalLinks.privacy}</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenLegal('terms')}
                  className="hover:text-brand-300 text-left transition-colors flex items-center space-x-1.5"
                >
                  <span>{t.footer.legalLinks.terms}</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenLegal('refund')}
                  className="hover:text-brand-300 text-left transition-colors flex items-center space-x-1.5"
                >
                  <span>{t.footer.legalLinks.refund}</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenLegal('cookies')}
                  className="hover:text-brand-300 text-left transition-colors flex items-center space-x-1.5"
                >
                  <span>{t.footer.legalLinks.cookies}</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Office Coordinates (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              {t.footer.contactTitle}
            </h4>
            <div className="space-y-2 text-xs text-slate-300">
              <p className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-brand-400 shrink-0 mt-0.5" />
                <span>{t.footer.address}</span>
              </p>
              <p className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-brand-400 shrink-0" />
                <a href="tel:+33189714230" className="hover:text-white">{t.footer.phone}</a>
              </p>
              <p className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-brand-400 shrink-0" />
                <a href="mailto:contact@corsovault.com" className="hover:text-white">{t.footer.email}</a>
              </p>
            </div>
            <div className="pt-2 text-[11px] text-slate-400">
              {t.footer.companyReg}
            </div>
          </div>
        </div>

        {/* Non-Affiliation Disclaimer Banner (Google Ads / Trademark Safety) */}
        <div className="mt-12 pt-6 border-t border-slate-900">
          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-850 text-[11px] leading-relaxed text-slate-400">
            {t.footer.disclaimer}
          </div>
        </div>

        {/* Bottom Copyright & Guarantee */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-400 gap-4">
          <div>{t.footer.copyright}</div>
          <div className="flex items-center space-x-4">
            <span className="flex items-center space-x-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>{t.footer.gdprCompliant}</span>
            </span>
            <span className="flex items-center space-x-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>{t.footer.scaCompliant}</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
