import React from 'react';

export const MarqueeBanner: React.FC = () => {
  return (
    <div className="w-full bg-[#ff77bc] border-y-2 border-black text-black py-2.5 overflow-hidden transform -rotate-1 relative z-20 shadow-md">
      <div className="animate-marquee whitespace-nowrap font-pixel font-bold text-sm tracking-wider uppercase flex items-center">
        <span className="mx-4 flex items-center gap-2">✦ THIS IS A COMPLETELY USELESS WEBSITE ✦</span>
        <span className="mx-4 flex items-center gap-2">DO NOT EXPECT ANYTHING WORKABLE</span>
        <span className="mx-4 flex items-center gap-2">✦ SPENDING TIME HERE REDUCES YOUR IQ BY 12% ✦</span>
        <span className="mx-4 flex items-center gap-2">WELCOME TO TANKERHUB</span>
        <span className="mx-4 flex items-center gap-2">✦ ABSOLUTELY NOTHING WORKS ✦</span>
        <span className="mx-4 flex items-center gap-2">PLEASE ENJOY RESPONSIBLY</span>
      </div>
    </div>
  );
};
