import React from 'react';
import { useBureau } from '../context/BureauContext';
import { X, Award, Info, History } from 'lucide-react';

export const ChairHistoryModal: React.FC = () => {
  const { chairModalOpen, setChairModalOpen } = useBureau();

  if (!chairModalOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="brutalist-card w-full max-w-xl bg-white p-6 relative max-h-[90vh] overflow-y-auto">
        <button 
          onClick={() => setChairModalOpen(false)}
          className="absolute top-4 right-4 p-1.5 bg-black text-white hover:bg-pink-500 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="border-b-2 border-black pb-4 mb-4">
          <span className="badge-tape-black text-xs mb-1">OFFICIAL ARCHIVAL DOCUMENTATION</span>
          <h2 className="font-serif-italic text-3xl text-zinc-900 leading-tight">
            About TinkerHub: The Legend of Chair #14-B
          </h2>
          <p className="text-xs font-mono text-zinc-500">
            CATALOG REF: VENUE-SEATING-14B • MANUFACTURED CIRCA 2018
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4 bg-yellow-50 border border-black p-4 mb-4">
          <div className="w-24 h-24 bg-white border border-black flex items-center justify-center text-5xl shrink-0 shadow-md">
            🪑
          </div>
          <div className="text-xs font-mono text-zinc-800 space-y-1">
            <p><strong className="text-black">MODEL:</strong> Supreme Monobloc Plastic Chair (White)</p>
            <p><strong className="text-black">ORIGIN:</strong> Acquired in 2019 from a local wedding hall caterer</p>
            <p><strong className="text-black">STATUS:</strong> Holds 4 internal awards for holding humans quietly</p>
            <p><strong className="text-black">KNOWN DEFECTS:</strong> Slightly squeaks when leaned 12° to the left</p>
          </div>
        </div>

        <div className="space-y-3 font-sans text-xs text-zinc-700 leading-relaxed mb-6">
          <h4 className="font-mono font-bold text-black uppercase text-sm">ARCHIVAL CHRONOLOGY</h4>
          <p>
            While most organizations document their founders or vision, the TankerHub Bureau dedicated its entire history budget to documenting <strong>Chair #14-B</strong>. 
          </p>
          <p>
            In October 2021, a developer sat in Chair #14-B for 14 hours straight without writing a single line of code. The chair did not collapse. For this bravery, Chair #14-B was awarded the <em>National Certificate of Passive Support</em>.
          </p>
          <p>
            Current location: Third row from the back, near the power socket that only works if you jiggle the plug twice.
          </p>
        </div>

        <div className="flex justify-end pt-2 border-t border-zinc-200">
          <button
            onClick={() => setChairModalOpen(false)}
            className="px-5 py-2.5 bg-black text-white font-pixel text-xs font-bold uppercase hover:bg-pink-500 hover:text-black border border-black shadow-[2px_2px_0px_#000]"
          >
            I RESPECT THIS CHAIR
          </button>
        </div>
      </div>
    </div>
  );
};
