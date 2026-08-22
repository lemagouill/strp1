import React, { useState } from 'react';
import { X, Search, Calendar, Clock, Heart, BookOpen, Camera, ShieldCheck, Mail } from 'lucide-react';

export default function Modals({ activeModal, onClose, data }) {
  const [searchQuery, setSearchQuery] = useState('');

  if (!activeModal) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-white rounded-xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col border border-neutral-200">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-200 bg-neutral-50">
          <div className="flex items-center space-x-2.5">
            <span className="text-lg font-bold text-[#1e3a8a]">
              {activeModal === 'photos' && 'Family Photos & Memories'}
              {activeModal === 'stories' && 'Stories & Family Updates'}
              {activeModal === 'tips' && 'Practical Parenting Tips'}
              {activeModal === 'about' && 'About the Thomson Family'}
              {activeModal === 'search' && 'Search the Blog'}
              {activeModal === 'info' && 'About Parents Again & Legal Information'}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-neutral-500 hover:text-neutral-900 hover:bg-neutral-200 transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm text-neutral-700 leading-relaxed">
          
          {/* Photos Gallery Modal */}
          {activeModal === 'photos' && (
            <div className="space-y-6">
              <p className="text-neutral-600">
                Here is a collection of our family's favorite moments outdoors, on road trips, and at home.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {data.photosGallery.map((item, idx) => (
                  <div key={idx} className="rounded-lg overflow-hidden border border-neutral-200 bg-neutral-50">
                    <img src={item.image} alt={item.title} className="w-full h-44 object-cover" />
                    <div className="p-3.5 space-y-1">
                      <div className="flex items-center justify-between text-xs text-neutral-500">
                        <span className="font-semibold text-[#1e3a8a]">{item.title}</span>
                        <span>{item.date}</span>
                      </div>
                      <p className="text-xs text-neutral-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Stories Modal */}
          {activeModal === 'stories' && (
            <div className="space-y-6">
              {data.stories.map((story) => (
                <article key={story.id} className="p-5 rounded-xl border border-neutral-200 bg-neutral-50 space-y-3">
                  <div className="flex items-center justify-between text-xs text-neutral-500">
                    <span className="inline-flex items-center space-x-1">
                      <Calendar className="w-3.5 h-3.5 text-neutral-400" />
                      <span>{story.date}</span>
                    </span>
                    <span className="inline-flex items-center space-x-1">
                      <Clock className="w-3.5 h-3.5 text-neutral-400" />
                      <span>{story.readTime}</span>
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-neutral-900">
                    {story.title}
                  </h3>
                  <div className="text-xs sm:text-sm text-neutral-700 whitespace-pre-line leading-relaxed">
                    {story.content}
                  </div>
                </article>
              ))}
            </div>
          )}

          {/* Parenting Tips Modal */}
          {activeModal === 'tips' && (
            <div className="space-y-4">
              <p className="text-neutral-600">
                Honest, practical hacks that helped us survive the baby and toddler years (and keep our sanity intact):
              </p>
              <div className="grid grid-cols-1 gap-4">
                {data.parentingTips.map((tip, idx) => (
                  <div key={idx} className="p-4 rounded-xl border border-neutral-200 bg-neutral-50 space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="font-bold text-neutral-900 text-sm sm:text-base">
                        {tip.title}
                      </h4>
                      <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-blue-100 text-[#1e3a8a]">
                        {tip.tag}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                      {tip.content}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* About Modal */}
          {activeModal === 'about' && (
            <div className="space-y-4">
              <div className="flex items-center space-x-4 mb-2">
                <img
                  src="https://images.unsplash.com/photo-1544717302-de2939b7ef71?auto=format&fit=crop&w=300&q=80"
                  alt="Graham and family"
                  className="w-20 h-20 rounded-full object-cover border-2 border-[#1e3a8a]"
                />
                <div>
                  <h3 className="text-lg font-bold text-neutral-900">{data.aboutUs.title}</h3>
                  <p className="text-xs font-semibold text-[#1e3a8a]">{data.aboutUs.subtitle}</p>
                </div>
              </div>
              <div className="text-neutral-700 whitespace-pre-line text-xs sm:text-sm leading-relaxed p-4 rounded-xl bg-neutral-50 border border-neutral-200">
                {data.aboutUs.bio}
              </div>
              <div className="pt-2 flex items-center space-x-2 text-xs text-neutral-500">
                <Mail className="w-4 h-4 text-[#1e3a8a]" />
                <span>Contact the family: <strong className="text-neutral-800">hello@parentsagain.blog</strong></span>
              </div>
            </div>
          )}

          {/* Search Modal */}
          {activeModal === 'search' && (
            <div className="space-y-4">
              <div className="relative">
                <Search className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search stories, tips, photos..."
                  className="w-full pl-11 pr-4 py-2.5 rounded-lg border border-neutral-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#1e3a8a]"
                  autoFocus
                />
              </div>

              {searchQuery.trim() ? (
                <div className="space-y-2 pt-2">
                  <p className="text-xs text-neutral-500 font-semibold">Results for "{searchQuery}":</p>
                  <div className="p-3 rounded-lg border border-neutral-200 bg-neutral-50 text-xs">
                    <p className="font-bold text-neutral-900">The Great Coast-to-Coast Road Trip</p>
                    <p className="text-neutral-600 mt-0.5">Found in Stories & Updates...</p>
                  </div>
                  <div className="p-3 rounded-lg border border-neutral-200 bg-neutral-50 text-xs">
                    <p className="font-bold text-neutral-900">The 15-Minute Reset Routine</p>
                    <p className="text-neutral-600 mt-0.5">Found in Parenting Tips...</p>
                  </div>
                </div>
              ) : (
                <p className="text-xs text-neutral-500">
                  Type any keyword (e.g. "road trip", "toddler", "beach", "chalk") to explore our memories.
                </p>
              )}
            </div>
          )}

          {/* Info / Policies Modal */}
          {activeModal === 'info' && (
            <div className="space-y-5 text-xs text-neutral-700 leading-relaxed">
              <div>
                <h4 className="font-bold text-sm text-neutral-900 mb-1">About Parents Again</h4>
                <p>{data.footer.infoText}</p>
              </div>

              <div className="pt-2 border-t border-neutral-200">
                <h4 className="font-bold text-sm text-neutral-900 mb-1">Privacy & Cookie Notice</h4>
                <p>
                  We value your privacy. This personal family blog uses standard technical cookies for page navigation and does not sell or share personal data with advertisers.
                </p>
              </div>

              <div className="pt-2 border-t border-neutral-200">
                <h4 className="font-bold text-sm text-neutral-900 mb-1">Terms of Use</h4>
                <p>
                  All photographs, writing, and family stories published on Parents Again are original works protected by copyright. Reproduction without permission is prohibited.
                </p>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 border-t border-neutral-200 bg-neutral-50 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-[#1c4482] hover:bg-[#153364] text-white text-xs font-semibold transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
