import React, { useState } from 'react';
import { useBureau } from '../context/BureauContext';
import { ChevronRight } from 'lucide-react';

export const Footer: React.FC = () => {
  const { getFaqAnswer, setPrivacyModalOpen } = useBureau();
  const [faqAnswers, setFaqAnswers] = useState<{ [key: number]: string }>({});

  const handleFaqClick = (index: number) => {
    const ans = getFaqAnswer(); // Always returns "We don't know."
    setFaqAnswers(prev => ({ ...prev, [index]: ans }));
  };

  return (
    <footer className="bg-white border-t-2 border-black pt-12 pb-16 font-sans">
      <div className="max-w-6xl mx-auto px-4 space-y-12">
        
        {/* FAQ Section Restored Under Stories */}
        <div className="brutalist-card p-6 bg-white max-w-3xl mx-auto">
          <div className="badge-tape-pink text-xs font-mono mb-2">🟢 FREQUENTLY ASKED QUESTIONS</div>
          <h4 className="font-serif-italic text-3xl text-zinc-900 mb-4">
            Frequently Asked Questions
          </h4>
          <div className="space-y-3 font-mono text-xs">
            {[
              "What is the official purpose of TankerHub?",
              "How do I register for an event?",
              "Who is in charge of this organization?",
              "What will happen to my data?"
            ].map((q, idx) => (
              <div key={idx} className="border border-black p-3 bg-zinc-50">
                <button 
                  onClick={() => handleFaqClick(idx)}
                  className="w-full text-left font-bold text-zinc-900 flex justify-between items-center hover:text-pink-600 cursor-pointer"
                >
                  <span>{idx + 1}. {q}</span>
                  <ChevronRight className="w-4 h-4 shrink-0 text-zinc-400" />
                </button>
                {faqAnswers[idx] && (
                  <div className="mt-2 pt-2 border-t border-zinc-200 text-pink-700 font-bold text-sm">
                    ↳ {faqAnswers[idx]}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Minimal Footer Bar */}
        <div className="border-t border-zinc-200 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-zinc-600">
          <div>
            <span className="font-bold text-black uppercase">TANKERHUB USELESS PORTAL</span>
            <span className="text-zinc-400 text-[11px] block sm:inline sm:ml-2">
              © 2026 • Completely Useless Edition
            </span>
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <button 
              onClick={() => setPrivacyModalOpen(true)}
              className="text-pink-600 font-bold underline hover:text-black cursor-pointer"
            >
              🟢 Privacy Policy
            </button>
            <span>•</span>
            <span>Powered by Bouncing Coconuts 🥥</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
