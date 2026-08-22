import React from 'react';

export default function Hero({ data }) {
  return (
    <section className="relative w-full h-[70vh] sm:h-[80vh] md:h-[88vh] overflow-hidden bg-neutral-900 flex items-center justify-center">
      {/* Background Image */}
      <img
        src={data.image}
        alt="Father kissing son on cheek"
        className="absolute inset-0 w-full h-full object-cover object-center brightness-[0.88]"
      />

      {/* Subtle overlay for text clarity */}
      <div className="absolute inset-0 bg-black/25"></div>

      {/* Centered Hero Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-white tracking-tight drop-shadow-md mb-3 font-sans">
          {data.title}
        </h1>
        <p className="text-sm sm:text-base md:text-lg font-medium text-white/95 tracking-wide drop-shadow">
          {data.subtitle}
        </p>
      </div>
    </section>
  );
}
