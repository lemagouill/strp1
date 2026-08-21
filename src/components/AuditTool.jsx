import React, { useState } from 'react';
import { 
  Sparkles, 
  Send, 
  CheckCircle2, 
  Calculator, 
  TrendingUp, 
  ShieldCheck, 
  AlertCircle, 
  ArrowRight, 
  ArrowLeft,
  Building,
  User,
  Mail,
  Phone,
  HelpCircle
} from 'lucide-react';

export default function AuditTool({ t, onOpenLegal }) {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    volume: t.audit.form.volumeOptions[1],
    gateway: t.audit.form.gatewayOptions[0],
    cms: t.audit.form.cmsOptions[0],
    markets: t.audit.form.marketsOptions[0],
    friction: t.audit.form.frictionOptions[0],
    name: '',
    email: '',
    phone: '',
    company: '',
    notes: '',
    gdpr: false
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: null }));
    }
  };

  const validateStep1 = () => {
    return true; // volume & gateway have defaults
  };

  const validateStep2 = () => {
    return true; // cms, markets & friction have defaults
  };

  const validateStep3 = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = "Le nom est requis";
    if (!formData.email.trim() || !formData.email.includes('@')) errs.email = "Une adresse e-mail professionnelle valide est requise";
    if (!formData.company.trim()) errs.company = "Le nom de l'entreprise est requis";
    if (!formData.gdpr) errs.gdpr = "Veuillez accepter les conditions de confidentialité";

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleNext = () => {
    if (step === 1 && validateStep1()) setStep(2);
    else if (step === 2 && validateStep2()) setStep(3);
  };

  const handlePrev = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateStep3()) return;

    setIsSubmitting(true);

    // Simulate sending lead & generating report
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  return (
    <section id="audit" className="py-20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>{t.audit.tag}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">
            {t.audit.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            {t.audit.subtitle}
          </p>
        </div>

        {/* Audit Tool Main Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Form Card */}
          <div className="lg:col-span-8 bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl relative">
            {!isSuccess ? (
              <div>
                {/* Step Progress Indicators */}
                <div className="flex items-center justify-between mb-8 pb-6 border-b border-slate-800">
                  {[1, 2, 3].map((s) => (
                    <div key={s} className="flex items-center space-x-2">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs transition-colors ${
                          step === s
                            ? 'bg-brand-500 text-white ring-4 ring-brand-500/20'
                            : step > s
                            ? 'bg-emerald-500 text-white'
                            : 'bg-slate-800 text-slate-400'
                        }`}
                      >
                        {step > s ? <CheckCircle2 className="w-4 h-4" /> : s}
                      </div>
                      <span className={`text-xs font-semibold hidden sm:inline ${step === s ? 'text-white' : 'text-slate-500'}`}>
                        {s === 1 ? 'Volumétrie' : s === 2 ? 'Infrastructure' : 'Coordonnées'}
                      </span>
                    </div>
                  ))}
                </div>

                <form onSubmit={handleSubmit}>
                  {/* Step 1: Volume & Gateway */}
                  {step === 1 && (
                    <div className="space-y-6">
                      <h3 className="text-lg font-bold text-white mb-4">
                        {t.audit.form.step1Title}
                      </h3>

                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-3">
                          {t.audit.form.volumeLabel}
                        </label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {t.audit.form.volumeOptions.map((opt, idx) => (
                            <button
                              key={idx}
                              type="button"
                              onClick={() => handleInputChange('volume', opt)}
                              className={`p-3.5 rounded-xl text-left text-xs sm:text-sm font-medium transition-all ${
                                formData.volume === opt
                                  ? 'bg-brand-500/15 border-brand-500 text-white border-2'
                                  : 'bg-slate-950/60 border-slate-800 text-slate-300 border hover:border-slate-700'
                              }`}
                            >
                              {opt}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="pt-4">
                        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-3">
                          {t.audit.form.gatewayLabel}
                        </label>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                          {t.audit.form.gatewayOptions.map((gw, idx) => (
                            <button
                              key={idx}
                              type="button"
                              onClick={() => handleInputChange('gateway', gw)}
                              className={`p-3 rounded-xl text-center text-xs font-semibold transition-all ${
                                formData.gateway === gw
                                  ? 'bg-brand-500 text-white shadow-md shadow-brand-500/20'
                                  : 'bg-slate-950/60 border border-slate-800 text-slate-300 hover:border-slate-700'
                              }`}
                            >
                              {gw}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 2: CMS, Markets & Friction */}
                  {step === 2 && (
                    <div className="space-y-6">
                      <h3 className="text-lg font-bold text-white mb-4">
                        {t.audit.form.step2Title}
                      </h3>

                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                          {t.audit.form.cmsLabel}
                        </label>
                        <select
                          value={formData.cms}
                          onChange={(e) => handleInputChange('cms', e.target.value)}
                          className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-sm text-white focus:outline-none focus:border-brand-500"
                        >
                          {t.audit.form.cmsOptions.map((cms, idx) => (
                            <option key={idx} value={cms}>{cms}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                          {t.audit.form.marketsLabel}
                        </label>
                        <select
                          value={formData.markets}
                          onChange={(e) => handleInputChange('markets', e.target.value)}
                          className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-sm text-white focus:outline-none focus:border-brand-500"
                        >
                          {t.audit.form.marketsOptions.map((m, idx) => (
                            <option key={idx} value={m}>{m}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                          {t.audit.form.frictionLabel}
                        </label>
                        <div className="space-y-2">
                          {t.audit.form.frictionOptions.map((fric, idx) => (
                            <button
                              key={idx}
                              type="button"
                              onClick={() => handleInputChange('friction', fric)}
                              className={`w-full p-3 rounded-xl text-left text-xs font-medium transition-all ${
                                formData.friction === fric
                                  ? 'bg-brand-500/15 border-brand-500 text-white border-2'
                                  : 'bg-slate-950/60 border border-slate-800 text-slate-300 hover:border-slate-700'
                              }`}
                            >
                              {fric}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 3: Contact & Submission */}
                  {step === 3 && (
                    <div className="space-y-5">
                      <h3 className="text-lg font-bold text-white mb-2">
                        {t.audit.form.step3Title}
                      </h3>
                      <p className="text-xs text-slate-400 mb-4">
                        Où devons-nous vous transmettre le rapport d'analyse préliminaire ?
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-medium text-slate-300 mb-1">
                            {t.audit.form.nameLabel} *
                          </label>
                          <input
                            type="text"
                            value={formData.name}
                            onChange={(e) => handleInputChange('name', e.target.value)}
                            placeholder={t.audit.form.namePlaceholder}
                            className={`w-full px-4 py-2.5 rounded-xl bg-slate-950 border text-sm text-white placeholder-slate-500 focus:outline-none ${
                              errors.name ? 'border-red-500' : 'border-slate-800 focus:border-brand-500'
                            }`}
                          />
                          {errors.name && <p className="text-[11px] text-red-400 mt-1">{errors.name}</p>}
                        </div>

                        <div>
                          <label className="block text-xs font-medium text-slate-300 mb-1">
                            {t.audit.form.companyLabel} *
                          </label>
                          <input
                            type="text"
                            value={formData.company}
                            onChange={(e) => handleInputChange('company', e.target.value)}
                            placeholder={t.audit.form.companyPlaceholder}
                            className={`w-full px-4 py-2.5 rounded-xl bg-slate-950 border text-sm text-white placeholder-slate-500 focus:outline-none ${
                              errors.company ? 'border-red-500' : 'border-slate-800 focus:border-brand-500'
                            }`}
                          />
                          {errors.company && <p className="text-[11px] text-red-400 mt-1">{errors.company}</p>}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-medium text-slate-300 mb-1">
                            {t.audit.form.emailLabel} *
                          </label>
                          <input
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleInputChange('email', e.target.value)}
                            placeholder={t.audit.form.emailPlaceholder}
                            className={`w-full px-4 py-2.5 rounded-xl bg-slate-950 border text-sm text-white placeholder-slate-500 focus:outline-none ${
                              errors.email ? 'border-red-500' : 'border-slate-800 focus:border-brand-500'
                            }`}
                          />
                          {errors.email && <p className="text-[11px] text-red-400 mt-1">{errors.email}</p>}
                        </div>

                        <div>
                          <label className="block text-xs font-medium text-slate-300 mb-1">
                            {t.audit.form.phoneLabel}
                          </label>
                          <input
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => handleInputChange('phone', e.target.value)}
                            placeholder={t.audit.form.phonePlaceholder}
                            className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-brand-500"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-slate-300 mb-1">
                          {t.audit.form.notesLabel}
                        </label>
                        <textarea
                          rows={2}
                          value={formData.notes}
                          onChange={(e) => handleInputChange('notes', e.target.value)}
                          placeholder={t.audit.form.notesPlaceholder}
                          className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-brand-500"
                        />
                      </div>

                      {/* GDPR Consent Checkbox */}
                      <div className="pt-2">
                        <label className="flex items-start space-x-3 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={formData.gdpr}
                            onChange={(e) => handleInputChange('gdpr', e.target.checked)}
                            className="mt-1 w-4 h-4 rounded border-slate-700 bg-slate-950 text-brand-500 focus:ring-brand-500"
                          />
                          <span className="text-xs text-slate-400 leading-relaxed">
                            {t.audit.form.gdprConsent}{' '}
                            <button
                              type="button"
                              onClick={() => onOpenLegal('privacy')}
                              className="text-brand-400 underline hover:text-brand-300"
                            >
                              Politique de confidentialité
                            </button>.
                          </span>
                        </label>
                        {errors.gdpr && <p className="text-[11px] text-red-400 mt-1">{errors.gdpr}</p>}
                      </div>
                    </div>
                  )}

                  {/* Navigation Buttons */}
                  <div className="flex items-center justify-between pt-8 mt-6 border-t border-slate-800">
                    {step > 1 ? (
                      <button
                        type="button"
                        onClick={handlePrev}
                        className="flex items-center space-x-1.5 px-4 py-2.5 rounded-xl border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800 text-xs font-semibold transition-colors"
                      >
                        <ArrowLeft className="w-4 h-4" />
                        <span>Précédent</span>
                      </button>
                    ) : <div></div>}

                    {step < 3 ? (
                      <button
                        type="button"
                        onClick={handleNext}
                        className="flex items-center space-x-2 px-6 py-3 rounded-xl bg-brand-500 hover:bg-brand-600 text-white text-xs sm:text-sm font-bold shadow-lg shadow-brand-500/25 transition-all"
                      >
                        <span>Continuer</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    ) : (
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="flex items-center space-x-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white text-xs sm:text-sm font-bold shadow-lg shadow-emerald-500/25 transition-all disabled:opacity-50"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            <span>{t.audit.form.submitting}</span>
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4" />
                            <span>{t.audit.form.submitBtn}</span>
                          </>
                        )}
                      </button>
                    )}
                  </div>
                </form>
              </div>
            ) : (
              /* Success Confirmation Card */
              <div className="text-center py-8 space-y-6">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/20 animate-bounce">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                    {t.audit.form.successTitle}
                  </h3>
                  <p className="text-sm text-slate-300 max-w-lg mx-auto leading-relaxed">
                    {t.audit.form.successSubtitle}
                  </p>
                </div>

                {/* Recap Box */}
                <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 text-left max-w-md mx-auto text-xs space-y-2 text-slate-300">
                  <p className="font-bold text-white border-b border-slate-800 pb-2">
                    {t.audit.form.successRecap}
                  </p>
                  <p><span className="text-slate-400">Entreprise :</span> {formData.company}</p>
                  <p><span className="text-slate-400">Passerelle analysée :</span> {formData.gateway}</p>
                  <p><span className="text-slate-400">Volumétrie :</span> {formData.volume}</p>
                  <p><span className="text-slate-400">Défi sélectionné :</span> {formData.friction}</p>
                </div>

                <p className="text-xs text-brand-400 font-medium">
                  {t.audit.form.nextSteps}
                </p>

                <button
                  onClick={() => {
                    setIsSuccess(false);
                    setStep(1);
                  }}
                  className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-300"
                >
                  Effectuer un autre diagnostic
                </button>
              </div>
            )}
          </div>

          {/* Right Column: Live Diagnostic Preview Widget */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-gradient-to-b from-brand-950/60 via-slate-900 to-slate-900 border border-brand-500/30 rounded-3xl p-6 sm:p-7 shadow-xl relative overflow-hidden">
              <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-brand-500/20 text-brand-300 text-[11px] font-semibold mb-4 border border-brand-500/30">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{t.audit.diagnosticPreview.badge}</span>
              </div>

              <h4 className="text-base font-bold text-white mb-2">
                {t.audit.diagnosticPreview.title}
              </h4>

              <div className="my-5 p-4 rounded-2xl bg-slate-950/80 border border-slate-800 text-center">
                <span className="text-3xl font-extrabold bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent block mb-1">
                  {t.audit.diagnosticPreview.potentialLift}
                </span>
                <p className="text-[11px] text-slate-400">
                  {t.audit.diagnosticPreview.liftDesc}
                </p>
              </div>

              <div className="space-y-3 text-xs text-slate-300">
                <div className="flex items-center space-x-2.5 p-2.5 rounded-xl bg-slate-950/40 border border-slate-800/60">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{t.audit.diagnosticPreview.securityScore}</span>
                </div>
                <div className="flex items-center space-x-2.5 p-2.5 rounded-xl bg-slate-950/40 border border-slate-800/60">
                  <TrendingUp className="w-4 h-4 text-brand-400 shrink-0" />
                  <span>Routage intelligent de devises disponible</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800 text-[11px] text-slate-400 leading-relaxed">
                🔒 Vos informations sont strictement confidentielles et ne sont jamais partagées avec des tiers.
              </div>
            </div>

            {/* Direct Phone Support Card */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5 text-xs text-slate-300 space-y-2">
              <p className="font-semibold text-white">Besoin d'un avis d'expert immédiat ?</p>
              <p className="text-slate-400">Nos consultants répondent du lundi au vendredi de 9h à 19h.</p>
              <a href="tel:+33189714230" className="inline-flex items-center space-x-2 font-bold text-brand-400 hover:text-brand-300 pt-1">
                <Phone className="w-3.5 h-3.5" />
                <span>+33 1 89 71 42 30</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
