import React, { useState } from 'react';
import { useBureau } from '../context/BureauContext';
import { X, RotateCw, CheckCircle2 } from 'lucide-react';

export const JoinModal: React.FC = () => {
  const { joinModalOpen, setJoinModalOpen } = useBureau();
  const [rotated, setRotated] = useState(false);

  if (!joinModalOpen) return null;

  const handleRotateConfirm = () => {
    setRotated(true);
    setTimeout(() => {
      setRotated(false);
      setJoinModalOpen(false);
    }, 1800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="brutalist-card w-full max-w-lg bg-white p-6 relative">
        <button 
          onClick={() => setJoinModalOpen(false)}
          className="absolute top-4 right-4 p-1.5 bg-black text-white hover:bg-pink-500 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="border-b-2 border-black pb-3 mb-4">
          <span className="badge-tape-pink text-xs font-mono mb-1">MEMBERSHIP CALIBRATION PROTOCOL</span>
          <h2 className="font-serif-italic text-3xl text-zinc-900 leading-tight">
            Join TankerHub (Hardware Check)
          </h2>
        </div>

        <div className="text-center my-6">
          <div className="w-24 h-24 mx-auto border-4 border-black bg-yellow-200 rounded-lg flex items-center justify-center text-4xl shadow-[4px_4px_0px_#000] transform -rotate-[37deg] transition-transform duration-500 mb-4">
            ⌨️
          </div>
          <h3 className="font-pixel text-xl font-bold uppercase text-black mb-2">
            PHYSICAL ORIENTATION REQUIRED
          </h3>
          <p className="text-xs font-mono text-zinc-700 max-w-sm mx-auto leading-relaxed">
            To proceed with your TankerHub membership, please physically rotate your phone, laptop, or keyboard exactly <strong className="text-pink-600">37° counter-clockwise</strong>.
          </p>
        </div>

        {rotated && (
          <div className="bg-emerald-100 border border-emerald-500 text-emerald-900 p-3 font-mono text-xs text-center font-bold flex items-center justify-center gap-2 mb-4">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            37° ORIENTATION VERIFIED VIA HONOR SYSTEM!
          </div>
        )}

        <div className="flex justify-end gap-2">
          <button
            onClick={handleRotateConfirm}
            className="w-full py-3 bg-black text-white font-pixel text-xs font-bold uppercase hover:bg-pink-500 hover:text-black border border-black shadow-[3px_3px_0px_#000] flex items-center justify-center gap-2 cursor-pointer"
          >
            <RotateCw className="w-4 h-4" />
            I HAVE ROTATED IT 37° (HONOR SYSTEM)
          </button>
        </div>
      </div>
    </div>
  );
};
