import React, { useState } from 'react';
import { useBureau } from '../context/BureauContext';
import { Sun, Home, User, Award } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { 
    brightMode, 
    cycleBrightMode, 
    openCertificate,
    score,
    setChairModalOpen,
    setProjectsModalOpen,
    setContactModalOpen,
    generateUserRank,
    setPrivacyModalOpen
  } = useBureau();

  // Untouchable flee state for INDEX button
  const [indexOffset, setIndexOffset] = useState({ x: 0, y: 0 });
  // Untouchable flee state for Login button
  const [loginOffset, setLoginOffset] = useState({ x: 0, y: 0 });

  const handleIndexFlee = () => {
    const randomX = (Math.random() - 0.5) * 300;
    const randomY = (Math.random() - 0.5) * 180;
    setIndexOffset({ x: randomX, y: randomY });
  };

  const handleLoginFlee = () => {
    const randomX = (Math.random() - 0.5) * 350;
    const randomY = (Math.random() - 0.5) * 200;
    setLoginOffset({ x: randomX, y: randomY });
  };

  const handleHomeClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="relative z-30 max-w-7xl mx-auto px-4 pt-4 pb-2 space-y-3">
      {/* Top Navbar Row */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        {/* Left logo: INDEX badge now has the fleeing feature */}
        <div className="flex items-center gap-3 relative overflow-visible">
          <button
            onMouseEnter={handleIndexFlee}
            onMouseMove={handleIndexFlee}
            style={{
              transform: `translate(${indexOffset.x}px, ${indexOffset.y}px)`,
              transition: 'transform 0.15s ease-out'
            }}
            className="badge-tape-black text-lg hover:bg-zinc-800 transition-transform active:scale-95 cursor-pointer select-none"
          >
            INDEX
          </button>
          <span className="text-xs font-mono text-zinc-500 hidden sm:inline-block border-l border-zinc-300 pl-3">
            TANKERHUB USELESS PORTAL
          </span>
        </div>

        {/* Top Controls: HOME, DARK MODE, CERTIFICATE */}
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider">
          {/* Home Button */}
          <button
            onClick={handleHomeClick}
            className="px-4 py-2 bg-white text-black border-2 border-black hover:bg-zinc-100 flex items-center gap-1.5 font-mono shadow-[2px_2px_0px_#000] active:translate-y-0.5 cursor-pointer"
          >
            <Home className="w-4 h-4 text-black" />
            <span>HOME</span>
          </button>

          {/* Subverted Dark Mode Toggle */}
          <button
            onClick={cycleBrightMode}
            className={`px-4 py-2 border-2 border-black flex items-center gap-1.5 font-pixel text-xs transition-all cursor-pointer ${
              brightMode > 0 ? 'bg-yellow-300 text-black shadow-[3px_3px_0px_#000]' : 'bg-black text-white hover:bg-zinc-800 shadow-[2px_2px_0px_#000]'
            }`}
            title="Toggle Dark Mode (Warning: Becomes Extra Bright!)"
          >
            <Sun className="w-4 h-4" />
            <span>
              {brightMode === 0 ? "🌙 DARK MODE" : brightMode === 1 ? "☀️ EXTRA BRIGHT" : "💥 ULTRA BLINDING"}
            </span>
          </button>

          {/* Certificate Button */}
          <button
            onClick={openCertificate}
            className="px-3.5 py-2 bg-[#ff77bc] border-2 border-black text-black hover:bg-pink-400 flex items-center gap-1.5 font-pixel text-xs shadow-[2px_2px_0px_#000] cursor-pointer"
          >
            <Award className="w-4 h-4" />
            CERTIFICATE ({score}%)
          </button>
        </div>
      </div>

      {/* Second Row: Navigation Links & Untouchable Login Button */}
      <div className="bg-white border-2 border-black p-2.5 shadow-[4px_4px_0px_#000] flex flex-wrap items-center justify-between gap-2 font-mono text-xs font-bold uppercase relative overflow-visible">
        <div className="flex flex-wrap items-center gap-3 sm:gap-6">
          <button 
            onClick={() => setChairModalOpen(true)}
            className="hover:text-pink-600 flex items-center gap-1 hover:underline cursor-pointer"
          >
            🟢 About
          </button>
          <button 
            onClick={() => setProjectsModalOpen(true)}
            className="hover:text-pink-600 flex items-center gap-1 hover:underline cursor-pointer"
          >
            🟢 Projects
          </button>
          <button 
            onClick={() => setContactModalOpen(true)}
            className="hover:text-pink-600 flex items-center gap-1 hover:underline cursor-pointer"
          >
            🟢 Contact Us
          </button>
          <button 
            onClick={generateUserRank}
            className="hover:text-pink-600 flex items-center gap-1 hover:underline cursor-pointer"
          >
            🟢 Join
          </button>
          <button 
            onClick={() => setPrivacyModalOpen(true)}
            className="hover:text-pink-600 flex items-center gap-1 hover:underline cursor-pointer"
          >
            🟢 Privacy Policy
          </button>
        </div>

        {/* UNTOUCHABLE FLEEING LOGIN BUTTON */}
        <div className="relative">
          <button 
            onMouseEnter={handleLoginFlee}
            onMouseMove={handleLoginFlee}
            style={{
              transform: `translate(${loginOffset.x}px, ${loginOffset.y}px)`,
              transition: 'transform 0.15s ease-out'
            }}
            className="bg-black text-white px-4 py-1.5 hover:bg-pink-500 hover:text-black border-2 border-black font-pixel text-xs flex items-center gap-1 shadow-[2px_2px_0px_#000] cursor-pointer select-none"
          >
            <User className="w-3.5 h-3.5" />
            Login
          </button>
        </div>
      </div>
    </header>
  );
};
