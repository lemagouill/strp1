import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import IntroSection from './components/IntroSection';
import SectionCards from './components/SectionCards';
import Footer from './components/Footer';
import Modals from './components/Modals';
import { familyData } from './data/familyData';

export default function App() {
  const [activeModal, setActiveModal] = useState(null);

  const handleOpenModal = (modalKey) => {
    setActiveModal(modalKey);
  };

  const handleCloseModal = () => {
    setActiveModal(null);
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col font-sans selection:bg-[#1c4482] selection:text-white">
      {/* Header */}
      <Header onOpenModal={handleOpenModal} />

      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero data={familyData.hero} />

        {/* Intro Section (Two Kids. One Wild Time.) */}
        <IntroSection data={familyData.intro} />

        {/* 3 Cards Section (See what's new with the Thomsons) */}
        <SectionCards
          data={familyData.sectionCards}
          onOpenModal={handleOpenModal}
        />
      </main>

      {/* Footer */}
      <Footer
        data={familyData.footer}
        onOpenModal={handleOpenModal}
      />

      {/* Interactive Modals */}
      <Modals
        activeModal={activeModal}
        onClose={handleCloseModal}
        data={familyData}
      />
    </div>
  );
}
