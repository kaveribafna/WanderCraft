import React from 'react';
import { X, Sparkles, Compass, ShieldCheck, Zap, Globe, Cpu } from 'lucide-react';

export const AboutModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-stone-900/60 backdrop-blur-md p-4">
      <div className="w-full max-w-2xl bg-white border border-stone-200 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden relative">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-stone-100 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-amber-100 border border-amber-300 flex items-center justify-center text-amber-900 shadow-xs">
              <Sparkles className="w-6 h-6 text-amber-700" />
            </div>
            <div>
              <h3 className="text-xl font-extrabold text-stone-900 font-display">
                About WanderCraft
              </h3>
              <p className="text-xs text-stone-500 font-medium">
                Next-Generation Autonomous Multi-Agent Travel Architecture
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-stone-400 hover:text-stone-700 transition-colors p-1 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="space-y-4 text-xs sm:text-sm text-stone-700 leading-relaxed font-medium">
          <p>
            Traditional travel planners generate static, generic lists with unrealistic transit times, no budget enforcement, and zero contingency planning when rain or closures strike.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 py-2">
            <div className="bg-[#FAF7F2] p-4 rounded-2xl border border-stone-200 shadow-xs">
              <div className="flex items-center gap-2 text-amber-800 font-bold text-xs uppercase mb-1.5 font-tech">
                <Cpu className="w-4 h-4 text-amber-600" />
                <span>Multi-Agent Swarm</span>
              </div>
              <p className="text-xs text-stone-600 font-medium">
                6 specialized agents (Atlas, Ledger, Haven, Scribe, Palate, Sentinel) collaborate, challenge trade-offs, and reach consensus before producing your plan.
              </p>
            </div>

            <div className="bg-[#FAF7F2] p-4 rounded-2xl border border-stone-200 shadow-xs">
              <div className="flex items-center gap-2 text-emerald-800 font-bold text-xs uppercase mb-1.5 font-tech">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Zero Backtracking & Real Budgets</span>
              </div>
              <p className="text-xs text-stone-600 font-medium">
                Daily neighborhood clustering ensures you never waste hours traveling across town, while ledger constraints keep your trip strictly within your financial cap.
              </p>
            </div>
          </div>

          <p className="text-stone-500 text-xs">
            Powered by modern generative intelligence with real-time refinement capabilities and interactive itinerary management.
          </p>
        </div>

        <div className="mt-6 pt-4 border-t border-stone-100 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-extrabold text-xs transition-colors cursor-pointer shadow-xs"
          >
            Got it
          </button>
        </div>

      </div>
    </div>
  );
};
