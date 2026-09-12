import React, { useState } from 'react';

export const HeroSection: React.FC = () => {
  const [rotationDeg, setRotationDeg] = useState(0);

  const handleSealHover = () => {
    setRotationDeg(prev => (prev + 45) % 360);
  };

  return (
    <section id="hero" className="relative min-h-[75vh] flex flex-col items-center justify-center text-center px-4 py-16 overflow-hidden">
      {/* Floating pixel particles */}
      <div className="absolute top-16 left-[20%] w-3 h-3 bg-pink-400 animate-pixel-float opacity-75"></div>
      <div className="absolute top-28 right-[25%] w-4 h-4 bg-purple-500 animate-pixel-float opacity-60" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-20 left-[30%] w-3 h-3 bg-green-400 animate-pixel-float opacity-80" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-32 right-[15%] w-4 h-4 bg-yellow-400 animate-pixel-float opacity-70" style={{ animationDelay: '1.5s' }}></div>

      {/* Pinned Left Card (Thanishk) */}
      <div className="hidden lg:block absolute left-6 top-12 w-64 bg-white border border-zinc-300 p-4 shadow-lg transform -rotate-6 transition-transform hover:rotate-0 z-10">
        <div className="pushpin-left"></div>
        <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest block mb-1">RECOGNITION</span>
        <h4 className="font-serif-italic text-2xl text-zinc-900 leading-tight">Thanishk</h4>
        <p className="text-xs font-mono text-zinc-500 mb-3">CHIEF IDLENESS OFFICER</p>
        <div className="relative w-full h-32 bg-pink-100 overflow-hidden border border-zinc-200 flex items-center justify-center">
          <img 
            src="/useless poster.jpeg" 
            alt="Thanishk Photo" 
            className="w-full h-full object-cover grayscale contrast-125"
          />
          <div className="absolute bottom-2 right-2 bg-green-500 text-black font-pixel text-[10px] px-1.5 py-0.5 font-bold">
            TankerHub
          </div>
        </div>
        <p className="text-[11px] text-zinc-600 mt-2 font-mono italic">
          "Created a machine that automatically turns itself off when turned on."
        </p>
      </div>

      {/* Pinned Right Card (Narun) */}
      <div className="hidden lg:block absolute right-6 top-16 w-64 bg-white border border-zinc-300 p-4 shadow-lg transform rotate-6 transition-transform hover:rotate-0 z-10">
        <div className="pushpin-right"></div>
        <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest block mb-1">FEATURED CASE</span>
        <h4 className="font-serif-italic text-2xl text-zinc-900 leading-tight">Narun</h4>
        <p className="text-xs font-mono text-zinc-500 mb-3">SENIOR PROCRASTINATOR</p>
        <div className="relative w-full h-32 bg-emerald-100 overflow-hidden border border-zinc-200 flex items-center justify-center">
          <img 
            src="/ippo sheri poster.jpeg" 
            alt="Narun Photo" 
            className="w-full h-full object-cover"
          />
        </div>
        <p className="text-[11px] text-zinc-600 mt-2 font-mono italic">
          "Spent 3 weeks writing code to delay pressing Enter."
        </p>
      </div>

      {/* Rotating Bureau Seal */}
      <div 
        onClick={handleSealHover}
        className="cursor-pointer mb-6 group relative transition-transform duration-500 inline-block"
        style={{ transform: `rotate(${rotationDeg}deg)` }}
        title="Seal of Absolute Uselessness"
      >
        <div className="w-16 h-16 rounded-full border-2 border-black bg-white flex items-center justify-center shadow-md font-pixel text-xl font-bold">
          📜
        </div>
      </div>

      {/* Main Hero Header - INCREASED TANKER HUB SIZE */}
      <div className="max-w-4xl mx-auto z-10">
        <h3 className="font-pixel text-sm sm:text-base tracking-[0.3em] text-zinc-700 uppercase mb-4 font-bold">
          THE ABSURD GAP BEFORE
        </h3>

        {/* HUGE TANKER HUB pixel header */}
        <h1 className="text-6xl sm:text-8xl md:text-9xl font-pixel font-bold uppercase tracking-tight text-black leading-none mb-6 drop-shadow-[4px_4px_0px_rgba(0,0,0,0.1)]">
          TANKER <span className="inline-block text-emerald-400 font-serif-italic border-4 border-black px-3 py-0 transform -rotate-6 bg-black text-lime-400 drop-shadow-[5px_5px_0px_#000]">HUB</span>
        </h1>

        <p className="text-base sm:text-xl text-zinc-700 max-w-2xl mx-auto leading-relaxed mb-6 font-sans">
          TankerHub is an international coalition of people who buy vegetables and forget them in the fridge until they turn into liquid. We do not build software, but we are very good at sitting down.
        </p>

        <p className="text-xs text-zinc-500 font-mono max-w-xl mx-auto">
          Registered as a non-profit useless portal under societies act XXI of 1860
        </p>
      </div>
    </section>
  );
};
