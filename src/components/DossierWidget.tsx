import React, { useState } from 'react';
import { useBureau } from '../context/BureauContext';
import { Shield, ChevronUp, ChevronDown, Award } from 'lucide-react';

export const DossierWidget: React.FC = () => {
  const { score, secondsOnSite, buttonsClicked, openCertificate } = useBureau();
  const [expanded, setExpanded] = useState<boolean>(false);

  // Format seconds to mm:ss
  const mins = Math.floor(secondsOnSite / 60);
  const secs = secondsOnSite % 60;
  const timeFormatted = `${mins}m ${secs}s`;

  return (
    <div className="fixed bottom-4 left-4 z-40 font-mono w-72 sm:w-80">
      <div className="brutalist-card bg-white border-2 border-black shadow-[6px_6px_0px_#000] overflow-hidden">
        {/* Header Bar */}
        <div 
          onClick={() => setExpanded(!expanded)}
          className="bg-black text-white p-3 flex items-center justify-between cursor-pointer select-none hover:bg-zinc-800 transition-colors"
        >
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-pink-400" />
            <div>
              <div className="text-[10px] text-zinc-400 font-bold uppercase tracking-widest leading-none">
                USELESS POINTS
              </div>
              <div className="text-xs font-bold text-yellow-300">
                SCORE: {score}%
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={(e) => {
                e.stopPropagation();
                openCertificate();
              }}
              className="px-2 py-0.5 bg-[#ff77bc] text-black border border-black font-pixel text-[10px] font-bold hover:bg-pink-400"
            >
              CERTIFICATE
            </button>
            {expanded ? <ChevronDown className="w-4 h-4" /> : <ChevronUp className="w-4 h-4" />}
          </div>
        </div>

        {/* Live Progress Bar */}
        <div className="w-full bg-zinc-200 h-2 border-b border-black">
          <div 
            className="bg-[#ff77bc] h-full transition-all duration-300"
            style={{ width: `${score}%` }}
          ></div>
        </div>

        {/* Expanded Details */}
        {expanded && (
          <div className="p-3 bg-[#faf9f3] text-xs space-y-2 border-t border-zinc-300">
            <div className="flex justify-between text-zinc-700">
              <span>Time Wasted Here:</span>
              <strong className="text-pink-600 font-bold">{timeFormatted}</strong>
            </div>
            <div className="flex justify-between text-zinc-700">
              <span>Unnecessary Clicks:</span>
              <strong className="text-black font-bold">{buttonsClicked}</strong>
            </div>
            <div className="flex justify-between text-zinc-700">
              <span>Purpose Accomplished:</span>
              <strong className="text-emerald-700 font-bold">0.00%</strong>
            </div>

            <button
              onClick={openCertificate}
              className="w-full mt-2 py-2 bg-yellow-300 text-black font-pixel font-bold uppercase text-xs border border-black hover:bg-yellow-400 transition-colors shadow-[2px_2px_0px_#000] flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <Award className="w-4 h-4" />
              CLAIM CERTIFICATE OF NOTHING
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
