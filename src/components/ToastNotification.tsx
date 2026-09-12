import React from 'react';
import { useBureau } from '../context/BureauContext';

export const ToastNotification: React.FC = () => {
  const { toastMessage, hideToast } = useBureau();

  if (!toastMessage) return null;

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-[9500] pointer-events-auto max-w-xl w-[92%] sm:w-auto animate-in fade-in slide-in-from-bottom-5 duration-200">
      <div 
        onClick={hideToast}
        className="brutalist-card bg-yellow-300 border-2 border-black p-3.5 sm:p-4 shadow-[5px_5px_0px_#000] flex items-center gap-3 cursor-pointer hover:bg-yellow-200 transition-colors"
      >
        <span className="text-2xl sm:text-3xl shrink-0 select-none animate-bounce">🥥</span>
        <div className="font-mono text-xs sm:text-sm text-black font-bold leading-snug">
          {toastMessage}
        </div>
        <button 
          onClick={(e) => { e.stopPropagation(); hideToast(); }}
          className="ml-2 text-xs font-mono font-bold bg-black text-white px-2 py-1 hover:bg-pink-500 hover:text-black shrink-0"
        >
          DISMISS
        </button>
      </div>
    </div>
  );
};
