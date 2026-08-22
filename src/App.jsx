import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import GuideBestPractices from './components/GuideBestPractices';
import AuditTool from './components/AuditTool';
import CaseStudies from './components/CaseStudies';
import Testimonials from './components/Testimonials';
import PricingPlans from './components/PricingPlans';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import LegalModal from './components/LegalModal';
import CookieBanner from './components/CookieBanner';
import { translations } from './data/translations';

export default function App() {
  const [lang, setLang] = useState('en');
  const [activeLegalModal, setActiveLegalModal] = useState(null);

  const t = translations[lang] || translations.en;

  // Update document title and meta description dynamically
  useEffect(() => {
    document.title = t.meta.title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', t.meta.description);
    }
  }, [lang, t]);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenLegal = (docKey) => {
    setActiveLegalModal(docKey);
  };

  const handleCloseLegal = () => {
    setActiveLegalModal(null);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-brand-500 selection:text-white">
      {/* Header */}
      <Header
        lang={lang}
        setLang={setLang}
        t={t}
        onOpenLegal={handleOpenLegal}
        onScrollToAudit={() => scrollToSection('audit')}
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero
          t={t}
          onScrollToAudit={() => scrollToSection('audit')}
          onScrollToGuide={() => scrollToSection('guide')}
        />

        {/* Services Overview */}
        <Services
          t={t}
          onScrollToAudit={() => scrollToSection('audit')}
        />

        {/* Guide & Best Practices (Deep Technical Content) */}
        <GuideBestPractices
          t={t}
        />

        {/* Free Audit Form & Interactive Diagnostic Tool */}
        <AuditTool
          t={t}
          lang={lang}
          onOpenLegal={handleOpenLegal}
        />

        {/* Case Studies & Metrics */}
        <CaseStudies
          t={t}
          onScrollToAudit={() => scrollToSection('audit')}
        />

        {/* Testimonials */}
        <Testimonials
          t={t}
        />

        {/* Pricing & Service Packages */}
        <PricingPlans
          t={t}
          onScrollToAudit={() => scrollToSection('audit')}
        />

        {/* FAQ Accordion */}
        <FAQ
          t={t}
        />
      </main>

      {/* Footer */}
      <Footer
        t={t}
        onOpenLegal={handleOpenLegal}
        onScrollToAudit={() => scrollToSection('audit')}
      />

      {/* Legal Document Modal */}
      {activeLegalModal && (
        <LegalModal
          docKey={activeLegalModal}
          lang={lang}
          t={t}
          onClose={handleCloseLegal}
        />
      )}

      {/* Cookie Consent Banner */}
      <CookieBanner
        t={t}
        onOpenLegal={handleOpenLegal}
      />
    </div>
  );
}
