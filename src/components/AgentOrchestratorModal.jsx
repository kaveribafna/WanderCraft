import React, { useEffect, useState } from 'react';
import { AGENT_LIST } from '../data/agentPersonas';
import { Compass, Coins, Hotel, CalendarCheck, Utensils, ShieldCheck, CheckCircle2, Sparkles, Loader2 } from 'lucide-react';

const AGENT_ICONS = {
  atlas: Compass,
  ledger: Coins,
  haven: Hotel,
  scribe: CalendarCheck,
  palate: Utensils,
  sentinel: ShieldCheck
};

export const AgentOrchestratorModal = ({
  destination,
  budgetAmount,
  currency,
  onComplete
}) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [activeLogs, setActiveLogs] = useState([]);

  const steps = [
    {
      agent: 'atlas',
      title: 'Geographic Clustering & Transit Mapping',
      detail: `Partitioning ${destination} into neighborhood sectors to eliminate cross-city backtracking and compute transit times.`,
      log: `Atlas: Established daily route clusters. Transit passes & airport connections identified.`
    },
    {
      agent: 'ledger',
      title: 'Budget Allocation & Spending Guardrails',
      detail: `Allocating ${currency} ${budgetAmount.toLocaleString()} across stays, dining, attraction tickets, and contingency buffers.`,
      log: `Ledger: Daily spend limits locked. Lodging ceiling enforced with high-ROI trade-offs.`
    },
    {
      agent: 'haven',
      title: 'Basecamp Scouting & Safety Verification',
      detail: `Evaluating neighborhood walkability, safety scores, and boutique hotels near central transport lines.`,
      log: `Haven: Selected high-walkability basecamp within budget with zero long subway transfers.`
    },
    {
      agent: 'scribe',
      title: 'Pacing & Timed Schedule Architecture',
      detail: `Crafting day-by-day morning, afternoon, and evening schedules with crowd-avoidance windows and skip-the-line tips.`,
      log: `Scribe: Timed itinerary constructed with realistic pacing and verified opening hours.`
    },
    {
      agent: 'palate',
      title: 'Gastronomy & Signature Local Dining',
      detail: `Curating regional dishes, street food markets, and neighborhood trattorias/bistros directly along the walking route.`,
      log: `Palate: Injected must-try regional dishes, bakery pitstops, and dinner reservations.`
    },
    {
      agent: 'sentinel',
      title: 'Readiness, Climate & Contingency Audit',
      detail: `Analyzing historical weather patterns, assembling indoor rainy-day backup plans, and building the customized packing checklist.`,
      log: `Sentinel: Weather advisory verified. Indoor Plan B swaps and safety protocols approved.`
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStepIndex(prev => {
        if (prev < steps.length - 1) {
          const next = prev + 1;
          setActiveLogs(l => [...l, steps[next].log]);
          return next;
        } else {
          clearInterval(interval);
          setTimeout(() => {
            onComplete();
          }, 800);
          return prev;
        }
      });
    }, 750);

    // Initial log
    setActiveLogs([steps[0].log]);

    return () => clearInterval(interval);
  }, []);

  const progressPercent = Math.round(((currentStepIndex + 1) / steps.length) * 100);
  const currentStep = steps[currentStepIndex];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-stone-900/60 backdrop-blur-md p-4">
      <div className="w-full max-w-2xl bg-white border border-stone-200 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden relative">
        
        {/* Subtle top amber glow line */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-sky-500 via-amber-500 to-rose-500" />

        {/* Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-extrabold uppercase tracking-wider mb-2 font-tech">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Multi-Agent Swarm Active</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-stone-900 font-display">
            Synthesizing Your Trip to <span className="text-amber-800">{destination}</span>
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 mt-1 font-medium">
            6 specialized AI agents are collaborating in real-time to optimize routes, budget, stays, and contingency plans.
          </p>
        </div>

        {/* Agent Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-2.5 mb-6">
          {AGENT_LIST.map((agent, idx) => {
            const Icon = AGENT_ICONS[agent.id];
            const isCurrent = idx === currentStepIndex;
            const isDone = idx < currentStepIndex;

            return (
              <div
                key={agent.id}
                className={`flex flex-col items-center p-3 rounded-2xl border transition-all text-center ${
                  isCurrent
                    ? `${agent.accentBg} ${agent.borderColor} ring-2 ring-amber-400/40 scale-105 shadow-md`
                    : isDone
                    ? 'bg-emerald-50 border-emerald-200 text-emerald-950 shadow-xs'
                    : 'bg-[#FAF7F2] border-stone-200 text-stone-400 opacity-60'
                }`}
              >
                <div className="relative mb-1.5">
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors shadow-xs ${
                      isCurrent
                        ? 'bg-white text-amber-800'
                        : isDone
                        ? 'bg-white text-emerald-700'
                        : 'bg-stone-200 text-stone-500'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  {isDone && (
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 absolute -top-1 -right-1 bg-white rounded-full" />
                  )}
                  {isCurrent && (
                    <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500"></span>
                    </span>
                  )}
                </div>
                <span className="text-xs font-bold font-display whitespace-nowrap text-stone-900">{agent.name}</span>
                <span className="text-[10px] text-stone-500 truncate max-w-full font-medium">{agent.codename.split(' ')[0]}</span>
              </div>
            );
          })}
        </div>

        {/* Current Active Agent Status Card */}
        <div className="bg-[#FAF7F2] border border-stone-200 rounded-2xl p-4 sm:p-5 mb-5 shadow-xs">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <Loader2 className="w-4 h-4 text-amber-700 animate-spin" />
              <span className="text-xs font-bold text-stone-900 uppercase tracking-wide font-tech">
                Phase {currentStepIndex + 1} of 6: {currentStep.title}
              </span>
            </div>
            <span className="text-xs font-mono font-extrabold text-amber-900">{progressPercent}%</span>
          </div>
          <p className="text-xs text-stone-600 leading-relaxed font-medium">
            {currentStep.detail}
          </p>

          {/* Progress Bar */}
          <div className="w-full bg-stone-200 h-2 rounded-full overflow-hidden mt-3">
            <div
              className="bg-amber-600 h-full transition-all duration-500 rounded-full"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Agent Live Communication Terminal */}
        <div className="bg-[#FAF7F2] border border-stone-200 rounded-2xl p-3.5 font-mono text-[11px] h-28 overflow-y-auto flex flex-col-reverse gap-1.5 select-none">
          {activeLogs.slice().reverse().map((log, i) => (
            <div key={i} className="flex items-start gap-2 text-stone-700 font-medium">
              <span className="text-amber-700 select-none font-bold">&gt;</span>
              <span className="leading-snug">{log}</span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
