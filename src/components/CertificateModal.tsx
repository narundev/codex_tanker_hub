import React, { useState } from 'react';
import { useBureau } from '../context/BureauContext';
import { X, Award, Share2, Printer, Check, User } from 'lucide-react';

export const CertificateModal: React.FC = () => {
  const { 
    isCertificateOpen, 
    closeCertificate, 
    score, 
    secondsOnSite, 
    buttonsClicked,
    customCertificateName,
    setCustomCertificateName
  } = useBureau();

  const [copied, setCopied] = useState(false);

  if (!isCertificateOpen) return null;

  // Time format
  const mins = Math.floor(secondsOnSite / 60);
  const secs = secondsOnSite % 60;
  const timeWastedStr = `${mins} min${mins !== 1 ? 's' : ''} ${secs} sec${secs !== 1 ? 's' : ''}`;

  const shareText = `I spent ${timeWastedStr} wasting time on TankerHub and received an official CERTIFICATE OF ABSOLUTELY NOTHING (${score}% Useless)! #TankerHub #UselessProjects`;

  const handleCopyShare = () => {
    navigator.clipboard.writeText(shareText);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs animate-in fade-in duration-200 overflow-y-auto">
      <div className="brutalist-card w-full max-w-2xl bg-white p-6 sm:p-8 relative my-8">
        {/* Close Button */}
        <button 
          onClick={closeCertificate}
          className="absolute top-4 right-4 p-2 bg-black text-white hover:bg-pink-500 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Input Field for Custom Name */}
        <div className="bg-yellow-100 border-2 border-black p-3 mb-6 font-mono">
          <label className="block text-xs font-bold text-black uppercase mb-1 flex items-center gap-1.5">
            <User className="w-4 h-4 text-pink-600" />
            ENTER YOUR NAME FOR CERTIFICATION:
          </label>
          <input 
            type="text"
            value={customCertificateName}
            onChange={(e) => setCustomCertificateName(e.target.value)}
            placeholder="Type your name here..."
            className="w-full p-2 bg-white border border-black font-mono text-sm font-bold text-black focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
        </div>

        {/* Certificate Printable Frame */}
        <div className="border-8 border-black p-6 sm:p-10 bg-[#faf8f0] relative text-center shadow-inner">
          {/* Faux Ribbon Seal */}
          <div className="absolute top-6 left-6 w-16 h-16 rounded-full border-4 border-black bg-yellow-400 flex items-center justify-center font-pixel font-bold text-xs shadow-md transform -rotate-12">
            <span className="text-center">OFFICIAL<br/>SEAL</span>
          </div>

          <div className="badge-tape-black text-xs mb-3">
            REGISTRATION ACT XXI OF 1860 • TANKERHUB USELESS EDITION
          </div>

          <h1 className="font-pixel text-2xl sm:text-4xl font-bold uppercase tracking-tight text-black mb-2">
            CERTIFICATE OF ABSOLUTELY NOTHING
          </h1>

          <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-6">
            THIS OFFICIAL DIPLOMA CONFIRMS THAT THE INDIVIDUAL NAMED BELOW HAS DILIGENTLY ACCOMPLISHED ZERO OUTCOMES.
          </p>

          <div className="my-6 py-4 border-y-2 border-dashed border-black">
            <span className="text-xs font-mono text-zinc-500 uppercase">PROUD RECIPIENT</span>
            <h2 className="font-serif-italic text-4xl sm:text-5xl text-pink-600 font-bold my-1">
              {customCertificateName.trim() || "Anonymous Idler"}
            </h2>

            <div className="my-4">
              <span className="text-xs font-mono text-zinc-500 uppercase block mb-1">TOTAL TIME WASTED ON THIS WEBSITE</span>
              <div className="inline-block bg-black text-yellow-300 font-pixel text-2xl sm:text-3xl font-bold px-6 py-2 border-2 border-black shadow-[4px_4px_0px_#ff77bc]">
                ⏱️ {timeWastedStr}
              </div>
            </div>

            <div className="text-xs font-mono text-zinc-600 font-bold">
              USELESSNESS SCORE: <span className="text-pink-600 font-pixel text-lg">{score}%</span> • UNNECESSARY CLICKS: {buttonsClicked}
            </div>
          </div>

          {/* Signatures */}
          <div className="flex justify-between items-end pt-4 font-mono text-xs text-zinc-600">
            <div className="text-left">
              <div className="w-28 border-b border-black mb-1"></div>
              <span>TankerHub Board</span>
            </div>
            <div className="text-right">
              <div className="w-28 border-b border-black mb-1"></div>
              <span>Chief Nothing Officer</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-between gap-3 mt-6">
          <button
            onClick={handleCopyShare}
            className="px-4 py-2.5 bg-yellow-300 text-black border border-black font-mono text-xs font-bold uppercase hover:bg-yellow-400 flex items-center gap-2 cursor-pointer"
          >
            {copied ? <Check className="w-4 h-4 text-green-700" /> : <Share2 className="w-4 h-4" />}
            {copied ? "BRAGGING TEXT COPIED!" : "COPY SOCIAL BRAG TEXT"}
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-4 py-2.5 bg-zinc-100 text-black border border-black font-mono text-xs font-bold uppercase hover:bg-zinc-200 flex items-center gap-2 cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              PRINT CERTIFICATE
            </button>
            <button
              onClick={closeCertificate}
              className="px-5 py-2.5 bg-black text-white font-pixel text-xs font-bold uppercase hover:bg-pink-500 hover:text-black border border-black shadow-[2px_2px_0px_#000] cursor-pointer"
            >
              CLOSE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
