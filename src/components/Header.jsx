import React, { useState } from 'react';
import { Search, Menu, X } from 'lucide-react';

export default function Header({ onOpenModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-[#121212] text-white border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          {/* Logo / Brand Name */}
          <a href="#" className="text-base sm:text-lg font-bold tracking-tight text-white hover:text-neutral-200 transition-colors">
            Parents. Again.
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-6 text-xs font-semibold text-neutral-200">
            <a href="#" className="hover:text-white transition-colors">
              Home
            </a>
            <button
              onClick={() => onOpenModal('photos')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Family Photos
            </button>
            <button
              onClick={() => onOpenModal('stories')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Stories & Updates
            </button>
            <button
              onClick={() => onOpenModal('tips')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Parenting Tips
            </button>
            <button
              onClick={() => onOpenModal('about')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              About
            </button>
            <button
              onClick={() => onOpenModal('search')}
              className="p-1 text-neutral-300 hover:text-white transition-colors"
              aria-label="Search"
            >
              <Search className="w-4 h-4" />
            </button>
          </nav>

          {/* Mobile menu trigger */}
          <div className="flex items-center space-x-3 md:hidden">
            <button
              onClick={() => onOpenModal('search')}
              className="p-1.5 text-neutral-300 hover:text-white"
              aria-label="Search"
            >
              <Search className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-neutral-300 hover:text-white"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#181818] border-b border-neutral-800 px-4 pt-3 pb-5 space-y-2 text-sm font-medium">
          <a
            href="#"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md hover:bg-neutral-800 text-neutral-200"
          >
            Home
          </a>
          <button
            onClick={() => { setMobileMenuOpen(false); onOpenModal('photos'); }}
            className="w-full text-left block px-3 py-2 rounded-md hover:bg-neutral-800 text-neutral-200"
          >
            Family Photos
          </button>
          <button
            onClick={() => { setMobileMenuOpen(false); onOpenModal('stories'); }}
            className="w-full text-left block px-3 py-2 rounded-md hover:bg-neutral-800 text-neutral-200"
          >
            Stories & Updates
          </button>
          <button
            onClick={() => { setMobileMenuOpen(false); onOpenModal('tips'); }}
            className="w-full text-left block px-3 py-2 rounded-md hover:bg-neutral-800 text-neutral-200"
          >
            Parenting Tips
          </button>
          <button
            onClick={() => { setMobileMenuOpen(false); onOpenModal('about'); }}
            className="w-full text-left block px-3 py-2 rounded-md hover:bg-neutral-800 text-neutral-200"
          >
            About
          </button>
        </div>
      )}
    </header>
  );
}
