import React from 'react';
import { useBureau } from '../context/BureauContext';
import { X, Code, ExternalLink, ShieldCheck } from 'lucide-react';

const FICTIONAL_PROJECTS = [
  {
    title: "Auto-Procrastinator 9000",
    spec: "ENTERPRISE SPECIFICATION V4.2",
    description: "An AI-powered neural network that automatically closes VS Code and launches YouTube whenever a developer writes more than 5 lines of functional code.",
    metrics: "Efficiency Loss: 99.8% • Patent: Rejected"
  },
  {
    title: "Silent Payasam Simulator",
    spec: "WEBGL SENSORY ARCHITECTURE",
    description: "Renders raw RGB pixels designed to subconsciously simulate the aroma of Onam payasam. Tested on 500 users; 0 smelled payasam, but 100% felt hungry.",
    metrics: "Sensory Fidelity: 0.000% • Status: Production Ready"
  },
  {
    title: "Quantum Cursor Offset Engine",
    spec: "SUB-PIXEL MICRO-DIVERTER",
    description: "Silently shifts your mouse cursor by +0.0003px to the left every time you try to click an important 'Save' button, guaranteeing mild existential frustration.",
    metrics: "User Frustration Index: Maximum • Uselessness: Certified"
  }
];

export const UselessProjectsModal: React.FC = () => {
  const { projectsModalOpen, setProjectsModalOpen } = useBureau();

  if (!projectsModalOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="brutalist-card w-full max-w-2xl bg-white p-6 relative max-h-[90vh] overflow-y-auto">
        <button 
          onClick={() => setProjectsModalOpen(false)}
          className="absolute top-4 right-4 p-1.5 bg-black text-white hover:bg-pink-500 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="border-b-2 border-black pb-4 mb-4">
          <span className="badge-tape-pink text-xs font-mono mb-1">NON-EXISTENT PROJECT REPOSITORY</span>
          <h2 className="font-serif-italic text-3xl text-zinc-900 leading-tight">
            Our Projects (Enterprise Documentation)
          </h2>
          <p className="text-xs font-mono text-zinc-500">
            COMPREHENSIVE TECHNICAL SPECS FOR SOFTWARE THAT WILL NEVER BE BUILT
          </p>
        </div>

        <div className="space-y-4 mb-6">
          {FICTIONAL_PROJECTS.map((proj, idx) => (
            <div key={idx} className="border-2 border-black p-4 bg-[#faf9f3] relative">
              <span className="text-[10px] font-mono font-bold bg-black text-yellow-300 px-2 py-0.5 uppercase tracking-wider">
                {proj.spec}
              </span>
              <h3 className="font-pixel text-xl font-bold text-black mt-2 mb-1">
                {proj.title}
              </h3>
              <p className="text-xs font-sans text-zinc-700 leading-relaxed mb-3">
                {proj.description}
              </p>
              <div className="text-[10px] font-mono text-zinc-500 border-t border-zinc-300 pt-2 flex justify-between">
                <span>{proj.metrics}</span>
                <span className="text-pink-600 font-bold">DOCUMENTED & APPROVED</span>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-end pt-2 border-t border-zinc-200">
          <button
            onClick={() => setProjectsModalOpen(false)}
            className="px-5 py-2.5 bg-black text-white font-pixel text-xs font-bold uppercase hover:bg-pink-500 hover:text-black border border-black shadow-[2px_2px_0px_#000]"
          >
            DISMISS DOCUMENTATION
          </button>
        </div>
      </div>
    </div>
  );
};
