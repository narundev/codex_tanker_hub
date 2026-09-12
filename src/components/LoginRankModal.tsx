import React from 'react';
import { useBureau } from '../context/BureauContext';
import { X } from 'lucide-react';

export const LoginRankModal: React.FC = () => {
  const { loginRankModalOpen, setLoginRankModalOpen, userRankInfo } = useBureau();

  if (!loginRankModalOpen || !userRankInfo) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="brutalist-card w-full max-w-lg bg-white p-6 relative">
        <button 
          onClick={() => setLoginRankModalOpen(false)}
          className="absolute top-4 right-4 p-1.5 bg-black text-white hover:bg-pink-500 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="border-b-2 border-black pb-3 mb-4">
          <span className="badge-tape-black text-xs mb-1">CITIZEN IDENTITY RESOLUTION</span>
          <h2 className="font-serif-italic text-3xl text-zinc-900 leading-tight">
            TinkerHub Membership Portal
          </h2>
        </div>

        <div className="bg-[#faf8f0] border-4 border-black p-6 text-center my-4 font-mono shadow-[4px_4px_0px_#000]">
          <div className="w-16 h-16 mx-auto bg-black text-yellow-300 rounded-full flex items-center justify-center font-pixel text-2xl font-bold mb-3">
            🪪
          </div>
          <span className="text-xs uppercase text-zinc-500 font-bold block mb-1">
            MEMBERSHIP VERIFICATION:
          </span>
          <h3 className="font-pixel text-xl sm:text-2xl font-bold text-black my-2">
            You are TinkerHub member #{userRankInfo.memberId}
          </h3>
          <div className="bg-yellow-300 border border-black inline-block px-4 py-1.5 font-bold text-black text-sm my-2">
            Membership status: {userRankInfo.status}
          </div>
          <p className="text-[10px] text-zinc-400 mt-2 uppercase">
            NO PASSWORD REQUIRED • ACCESS GRANTED
          </p>
        </div>

        <div className="flex justify-end">
          <button
            onClick={() => setLoginRankModalOpen(false)}
            className="px-5 py-2.5 bg-black text-white font-pixel text-xs font-bold uppercase hover:bg-pink-500 hover:text-black border border-black shadow-[2px_2px_0px_#000] cursor-pointer"
          >
            CONFIRM MEMBERSHIP #{userRankInfo.memberId}
          </button>
        </div>
      </div>
    </div>
  );
};
