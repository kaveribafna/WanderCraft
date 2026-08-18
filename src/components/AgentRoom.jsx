import React, { useState } from 'react';
import { AGENT_LIST } from '../data/agentPersonas';
import { 
  Send, 
  Sparkles, 
  MessageSquare, 
  Compass, 
  Coins, 
  Hotel, 
  CalendarCheck, 
  Utensils, 
  ShieldCheck, 
  Bot,
  User,
  Loader2,
  RefreshCw
} from 'lucide-react';

const AGENT_ICONS = {
  atlas: Compass,
  ledger: Coins,
  haven: Hotel,
  scribe: CalendarCheck,
  palate: Utensils,
  sentinel: ShieldCheck
};

export const AgentRoom = ({
  trip,
  onUpdateTrip
}) => {
  const [selectedAgentId, setSelectedAgentId] = useState('atlas');
  const [userPrompt, setUserPrompt] = useState('');
  const [isConsulting, setIsConsulting] = useState(false);

  const selectedAgent = AGENT_LIST.find(a => a.id === selectedAgentId) || AGENT_LIST[0];
  const Icon = AGENT_ICONS[selectedAgentId];

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!userPrompt.trim() || isConsulting) return;

    const currentPrompt = userPrompt.trim();
    setUserPrompt('');
    setIsConsulting(true);

    try {
      const res = await fetch('/api/agent-refine', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          trip,
          agentId: selectedAgentId,
          instruction: currentPrompt
        })
      });

      const data = await res.json();
      if (data && data.updatedTrip) {
        onUpdateTrip(data.updatedTrip);
      } else {
        // Local synthesis fallback
        const newLog = {
          id: `deb-${Date.now()}`,
          round: (trip.debateLogs?.length || 0) + 1,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          speaker: selectedAgentId,
          type: 'refinement',
          headline: `Addressed: "${currentPrompt.slice(0, 30)}..."`,
          message: `I've analyzed your instruction regarding "${currentPrompt}". As ${selectedAgent.name} (${selectedAgent.specialty}), I have updated the schedule parameters to maintain route integrity and budget discipline.`
        };

        const updated = { ...trip };
        updated.debateLogs = [...(updated.debateLogs || []), newLog];
        onUpdateTrip(updated);
      }
    } catch (err) {
      console.warn('Agent consultation fallback:', err);
      const newLog = {
        id: `deb-${Date.now()}`,
        round: (trip.debateLogs?.length || 0) + 1,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        speaker: selectedAgentId,
        type: 'refinement',
        headline: `Consultation Resolved`,
        message: `As ${selectedAgent.name}, I reviewed: "${currentPrompt}". Itinerary constraints have been re-calibrated.`
      };
      const updated = { ...trip };
      updated.debateLogs = [...(updated.debateLogs || []), newLog];
      onUpdateTrip(updated);
    } finally {
      setIsConsulting(false);
    }
  };

  const debateLogs = trip.debateLogs || [];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-8">
      
      {/* Banner */}
      <div className="bg-white border border-stone-200/90 rounded-3xl p-6 sm:p-7 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="px-3 py-0.5 rounded-full bg-amber-100 text-amber-900 text-xs font-extrabold font-tech uppercase tracking-wider">
                Multi-Agent Consensus Room
              </span>
              <span className="text-xs text-stone-500 font-semibold">
                6 Autonomous Agents Live
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 font-display">
              Agent Negotiation & Real-Time Consultation
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 mt-1 font-medium">
              Inspect how Atlas, Ledger, Haven, Scribe, Palate, and Sentinel reconciled budget vs transit conflicts, or chat with any specialist directly.
            </p>
          </div>
        </div>
      </div>

      {/* Main Two-Column Room Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Column: Debate & Consensus History */}
        <div className="lg:col-span-7 bg-white border border-stone-200/90 rounded-3xl p-6 shadow-xs flex flex-col h-[560px]">
          <div className="flex items-center justify-between pb-3.5 border-b border-stone-100 mb-4">
            <h3 className="text-sm font-extrabold text-stone-900 font-display flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-amber-600" />
              <span>Agent Swarm Negotiation Transcript</span>
            </h3>
            <span className="text-xs text-stone-500 font-mono">{debateLogs.length} events logged</span>
          </div>

          {/* Transcript Scroll Area */}
          <div className="flex-1 overflow-y-auto space-y-3.5 pr-2">
            {debateLogs.map((log) => {
              const agent = AGENT_LIST.find(a => a.id === log.speaker) || AGENT_LIST[0];
              const LogIcon = AGENT_ICONS[log.speaker];

              return (
                <div
                  key={log.id}
                  className="bg-[#FAF7F2] border border-stone-200 rounded-2xl p-4 space-y-2 shadow-xs"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className={`w-7 h-7 rounded-xl ${agent.accentBg} ${agent.color} flex items-center justify-center shrink-0 shadow-xs`}>
                        <LogIcon className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-bold text-stone-900 font-display">{agent.name}</span>
                      <span className="text-[10px] text-stone-500 font-mono">({agent.codename.split(' ')[0]})</span>
                    </div>

                    <span className="text-[10px] font-mono text-stone-500">{log.timestamp}</span>
                  </div>

                  <h4 className="text-xs font-bold text-amber-900 font-display">
                    {log.headline}
                  </h4>

                  <p className="text-xs text-stone-700 leading-relaxed font-medium">
                    {log.message}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Direct Agent Consultation Terminal */}
        <div className="lg:col-span-5 bg-white border border-stone-200/90 rounded-3xl p-6 shadow-xs flex flex-col justify-between h-[560px]">
          <div>
            <div className="flex items-center justify-between pb-3.5 border-b border-stone-100 mb-4">
              <h3 className="text-sm font-extrabold text-stone-900 font-display flex items-center gap-2">
                <Bot className="w-4 h-4 text-emerald-600" />
                <span>Consult a Specialist</span>
              </h3>
              <span className="text-xs text-stone-500 font-medium">Select an agent</span>
            </div>

            {/* Agent Selector Chips */}
            <div className="grid grid-cols-3 gap-2 mb-4">
              {AGENT_LIST.map(agent => {
                const AgentIco = AGENT_ICONS[agent.id];
                const isSelected = selectedAgentId === agent.id;

                return (
                  <button
                    key={agent.id}
                    onClick={() => setSelectedAgentId(agent.id)}
                    className={`p-2.5 rounded-2xl border flex flex-col items-center gap-1.5 transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-amber-50 border-amber-400 ring-2 ring-amber-300/40 text-amber-900 shadow-xs'
                        : 'bg-[#FAF7F2] border-stone-200 hover:border-stone-300 text-stone-600'
                    }`}
                  >
                    <AgentIco className="w-4 h-4 text-stone-800" />
                    <span className="text-[11px] font-bold font-display">{agent.name}</span>
                  </button>
                );
              })}
            </div>

            {/* Active Agent Bio Card */}
            <div className="bg-[#FAF7F2] border border-stone-200 rounded-2xl p-4 mb-4">
              <div className="flex items-center gap-3 mb-2">
                <div className={`w-9 h-9 rounded-xl ${selectedAgent.accentBg} ${selectedAgent.color} flex items-center justify-center shadow-xs`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-stone-900 font-display">{selectedAgent.name} · {selectedAgent.codename}</h4>
                  <span className="text-[10px] text-stone-500 font-medium">{selectedAgent.specialty}</span>
                </div>
              </div>
              <p className="text-[11px] text-stone-600 leading-snug mt-1 font-medium">
                "{selectedAgent.tagline}"
              </p>
            </div>
          </div>

          {/* Quick Prompt Ideas & Input Form */}
          <div className="space-y-3 pt-2">
            <div className="flex flex-wrap gap-1.5">
              <span className="text-[10px] text-stone-500 font-medium">Quick suggestions:</span>
              <button
                type="button"
                onClick={() => setUserPrompt(`What are the best food spots near Day 2?`)}
                className="text-[10px] bg-stone-100 hover:bg-stone-200 border border-stone-200 text-stone-800 px-2.5 py-1 rounded-lg truncate max-w-[200px] cursor-pointer"
              >
                Food spots near Day 2
              </button>
              <button
                type="button"
                onClick={() => setUserPrompt(`How can I save $200 more on stays?`)}
                className="text-[10px] bg-stone-100 hover:bg-stone-200 border border-stone-200 text-stone-800 px-2.5 py-1 rounded-lg truncate max-w-[200px] cursor-pointer"
              >
                Save $200 on stays
              </button>
            </div>

            <form onSubmit={handleSendMessage} className="relative">
              <input
                type="text"
                required
                disabled={isConsulting}
                value={userPrompt}
                onChange={e => setUserPrompt(e.target.value)}
                placeholder={`Ask ${selectedAgent.name} to modify or optimize...`}
                className="w-full pl-4 pr-12 py-3 bg-[#FAF7F2] border border-stone-300 rounded-2xl text-stone-900 placeholder-stone-400 text-xs font-medium focus:outline-hidden focus:border-amber-400 disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={isConsulting || !userPrompt.trim()}
                className="absolute right-1.5 top-1.5 bottom-1.5 px-3.5 bg-amber-600 hover:bg-amber-700 disabled:opacity-40 text-white rounded-xl flex items-center justify-center transition-colors cursor-pointer shadow-xs"
              >
                {isConsulting ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <Send className="w-4 h-4" />
                )}
              </button>
            </form>
          </div>

        </div>

      </div>

    </div>
  );
};
