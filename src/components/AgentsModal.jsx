import React from 'react';
import { AGENT_LIST } from '../data/agentPersonas';
import { 
  X, 
  Compass, 
  Coins, 
  Hotel, 
  CalendarCheck, 
  Utensils, 
  ShieldCheck, 
  Sparkles,
  Bot
} from 'lucide-react';

const AGENT_ICONS = {
  atlas: Compass,
  ledger: Coins,
  haven: Hotel,
  scribe: CalendarCheck,
  palate: Utensils,
  sentinel: ShieldCheck
};

export const AgentsModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-stone-900/60 backdrop-blur-md p-4">
      <div className="w-full max-w-4xl bg-white border border-stone-200 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden relative max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-stone-100 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-amber-100 border border-amber-300 flex items-center justify-center text-amber-900 shadow-xs">
              <Bot className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-extrabold text-stone-900 font-display">
                The 6 Autonomous Travel Agents
              </h3>
              <p className="text-xs text-stone-500 font-medium">
                Specialized micro-agents that deliberate and synthesize each travel plan.
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

        {/* Agents Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 overflow-y-auto pr-1">
          {AGENT_LIST.map(agent => {
            const Icon = AGENT_ICONS[agent.id];

            return (
              <div
                key={agent.id}
                className="bg-[#FAF7F2] border border-stone-200 rounded-2xl p-5 flex flex-col justify-between shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className={`w-10 h-10 rounded-xl ${agent.accentBg} ${agent.color} flex items-center justify-center shadow-xs`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-stone-500">
                      {agent.codename.split(' ')[0]}
                    </span>
                  </div>

                  <h4 className="text-base font-extrabold text-stone-900 font-display">
                    {agent.name}
                  </h4>
                  <span className="text-xs font-bold text-amber-900 block mb-2 font-display">
                    {agent.codename}
                  </span>

                  <p className="text-xs text-stone-600 leading-relaxed mb-3 font-medium">
                    {agent.tagline}
                  </p>
                </div>

                <div className="pt-3 border-t border-stone-200">
                  <span className="text-[10px] text-stone-500 uppercase font-tech font-bold block mb-1">Core Specialty</span>
                  <span className="text-xs font-semibold text-stone-800">{agent.specialty}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};
