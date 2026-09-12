import React from 'react';
import { useBureau } from '../context/BureauContext';
import { X, Skull } from 'lucide-react';

export const PrivacyPolicyModal: React.FC = () => {
  const { privacyModalOpen, setPrivacyModalOpen } = useBureau();

  if (!privacyModalOpen) return null;

  const handleAcceptFate = () => {
    setPrivacyModalOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="brutalist-card w-full max-w-lg bg-white p-6 relative">
        <button 
          onClick={() => setPrivacyModalOpen(false)}
          className="absolute top-4 right-4 p-1.5 bg-black text-white hover:bg-pink-500 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="border-b-2 border-black pb-3 mb-4">
          <span className="badge-tape-black text-xs mb-1">LEGAL DISCLOSURE</span>
          <h2 className="font-serif-italic text-3xl text-zinc-900 leading-tight">
            Privacy Policy
          </h2>
        </div>

        <div className="bg-pink-100 border-2 border-black p-5 text-center my-4 font-mono shadow-[4px_4px_0px_#000]">
          <div className="w-12 h-12 mx-auto bg-black text-pink-400 rounded-full flex items-center justify-center text-2xl mb-3">
            🔒
          </div>
          <h3 className="font-pixel text-xl font-bold text-black mb-2">
            We respect your privacy.
          </h3>
          <p className="text-sm font-semibold text-zinc-800 leading-relaxed">
            Unfortunately, we have no idea what we're doing with your data.
          </p>
        </div>

        <p className="text-xs font-mono text-zinc-600 mb-6 leading-relaxed">
          By clicking the button below, you officially forfeit your expectations of algorithmic competence, data encryption, or logical processing.
        </p>

        <div className="flex justify-end">
          <button
            onClick={handleAcceptFate}
            className="w-full py-3.5 bg-black text-white font-pixel text-sm font-bold uppercase hover:bg-pink-500 hover:text-black border border-black shadow-[4px_4px_0px_#000] flex items-center justify-center gap-2 cursor-pointer"
          >
            <Skull className="w-4 h-4 text-yellow-300" />
            [ I ACCEPT MY FATE ]
          </button>
        </div>
      </div>
    </div>
  );
};
