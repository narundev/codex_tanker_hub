import React from 'react';
import { useBureau } from '../context/BureauContext';
import { X, Navigation, MousePointer } from 'lucide-react';

export const ContactDistanceModal: React.FC = () => {
  const { contactModalOpen, setContactModalOpen, mouseDistance } = useBureau();

  if (!contactModalOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="brutalist-card w-full max-w-lg bg-white p-6 relative">
        <button 
          onClick={() => setContactModalOpen(false)}
          className="absolute top-4 right-4 p-1.5 bg-black text-white hover:bg-pink-500 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="border-b-2 border-black pb-3 mb-4">
          <span className="badge-tape-black text-xs mb-1">CURSOR TELEMETRY DIVISION</span>
          <h2 className="font-serif-italic text-3xl text-zinc-900 leading-tight">
            Contact Us (Distance Calculator)
          </h2>
        </div>

        <div className="bg-yellow-300 border-2 border-black p-5 text-center my-4 font-mono shadow-[4px_4px_0px_#000]">
          <span className="text-xs uppercase text-black font-bold block mb-1">
            CURRENT PHYSICAL CURSOR DISTANCE:
          </span>
          <div className="font-pixel text-4xl font-bold text-black my-2">
            {mouseDistance} PX
          </div>
          <p className="text-[11px] text-zinc-800 italic">
            Administrative urgency level: <strong className="text-pink-700 font-bold">ZERO</strong>
          </p>
        </div>

        <p className="text-xs font-mono text-zinc-600 leading-relaxed mb-6">
          Your cursor has successfully moved <strong>{mouseDistance} pixels</strong> towards contacting us. The Bureau considers this physical effort to be sufficient contact for today. No further communication is required.
        </p>

        <div className="flex justify-end">
          <button
            onClick={() => setContactModalOpen(false)}
            className="px-5 py-2.5 bg-black text-white font-pixel text-xs font-bold uppercase hover:bg-pink-500 hover:text-black border border-black shadow-[2px_2px_0px_#000]"
          >
            CONTACT ESTABLISHED ({mouseDistance}px)
          </button>
        </div>
      </div>
    </div>
  );
};
