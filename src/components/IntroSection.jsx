import React from 'react';

export default function IntroSection({ data }) {
  return (
    <section className="w-full bg-[#cfe0fb] py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center space-y-6">
        {/* Main Blue Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1e3a8a] tracking-tight">
          {data.heading}
        </h2>

        {/* Descriptive Paragraphs */}
        <div className="space-y-4 text-sm sm:text-base md:text-[17px] text-slate-800 leading-relaxed font-normal">
          <p>
            {data.paragraph1}
          </p>
          <p>
            {data.paragraph2}
          </p>
        </div>
      </div>
    </section>
  );
}
