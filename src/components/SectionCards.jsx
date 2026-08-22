import React from 'react';
import { Link2 } from 'lucide-react';

export default function SectionCards({ data, onOpenModal }) {
  return (
    <section className="w-full bg-white py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading with link icon */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="inline-flex items-center space-x-2 text-2xl sm:text-3xl md:text-4xl font-bold text-[#1e3a8a] tracking-tight">
            <span>{data.heading}</span>
            <Link2 className="w-5 h-5 sm:w-6 sm:h-6 text-[#1e3a8a] stroke-[2.5]" />
          </h2>
        </div>

        {/* 3 Columns Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
          {data.cards.map((card) => (
            <div key={card.id} className="flex flex-col group">
              {/* Card Image Container */}
              <div 
                onClick={() => onOpenModal(card.id)}
                className="w-full h-56 sm:h-60 md:h-52 lg:h-60 overflow-hidden rounded-none cursor-pointer bg-slate-100 mb-4"
              >
                <img
                  src={card.image}
                  alt={card.alt || card.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Blue Action Button Bar */}
              <button
                onClick={() => onOpenModal(card.id)}
                className="w-full py-2.5 px-4 bg-[#1c4482] hover:bg-[#153364] text-white text-xs sm:text-sm font-semibold text-center transition-colors cursor-pointer rounded-sm shadow-sm"
              >
                {card.title}
              </button>

              {/* Description Text */}
              <p className="mt-3.5 text-xs sm:text-sm text-slate-800 leading-relaxed font-normal">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
