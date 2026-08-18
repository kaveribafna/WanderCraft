import React, { useState } from 'react';
import { 
  ShieldCheck, 
  CloudSun, 
  Umbrella, 
  AlertTriangle, 
  CheckCircle2, 
  Circle, 
  ArrowRightLeft, 
  Luggage, 
  PhoneCall, 
  Plus,
  Trash2,
  Sparkles
} from 'lucide-react';

export const SentinelView = ({
  trip,
  onUpdateTrip
}) => {
  const [newPackingItem, setNewPackingItem] = useState('');
  const [packingCategory, setPackingCategory] = useState('Clothing & Footwear');

  const togglePackingItem = (id) => {
    const updated = { ...trip };
    const item = updated.sentinel.packingList.find(p => p.id === id);
    if (item) {
      item.packed = !item.packed;
      onUpdateTrip(updated);
    }
  };

  const handleAddPackingItem = (e) => {
    e.preventDefault();
    if (!newPackingItem.trim()) return;

    const newItem = {
      id: `pack-${Date.now()}`,
      category: packingCategory,
      item: newPackingItem.trim(),
      packed: false,
      agentNote: 'User custom item'
    };

    const updated = { ...trip };
    updated.sentinel.packingList = [...updated.sentinel.packingList, newItem];
    onUpdateTrip(updated);
    setNewPackingItem('');
  };

  const packingList = trip.sentinel.packingList || [];
  const packedCount = packingList.filter(p => p.packed).length;
  const totalPackingCount = packingList.length;
  const packPct = totalPackingCount > 0 ? Math.round((packedCount / totalPackingCount) * 100) : 0;

  const weather = trip.sentinel.weather;
  const safetyNotes = trip.sentinel.safetyAndEtiquette || [];
  const backups = trip.sentinel.rainyDayBackups || [];
  const emergencyContacts = trip.sentinel.emergencyContacts || {
    policeNumber: '112 / 911',
    ambulanceNumber: '112 / 911',
    touristHotline: 'Visitor Helpline',
    localTransitApp: 'Citymapper / Maps'
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-8">
      
      {/* Top Banner from Sentinel Agent */}
      <div className="bg-white border border-stone-200/90 rounded-3xl p-6 sm:p-7 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="px-3 py-0.5 rounded-full bg-teal-100 text-teal-900 text-xs font-extrabold font-tech uppercase tracking-wider">
                Contingency Guardian: Sentinel Agent
              </span>
              <span className="text-xs text-stone-500 font-semibold">
                Climate & Safety Risk Audit Active
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 font-display">
              Preparedness, Rainy-Day Backups & Safety
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 mt-1 font-medium">
              Live climate expectations, cultural scams to avoid, emergency contacts, and interactive gear checklist.
            </p>
          </div>

          {/* Emergency Hotlines Cluster */}
          <div className="bg-[#FAF7F2] border border-stone-200 rounded-2xl p-4 flex items-center gap-3 shadow-xs">
            <PhoneCall className="w-5 h-5 text-rose-600 shrink-0" />
            <div className="text-xs">
              <span className="text-stone-500 block text-[10px] uppercase font-tech font-bold">Emergency Hotlines</span>
              <span className="text-stone-900 font-mono font-bold">
                Police: {emergencyContacts.policeNumber} · Ambulance: {emergencyContacts.ambulanceNumber}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Climate & Weather Briefing Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        <div className="lg:col-span-4 bg-white border border-stone-200/90 rounded-3xl p-6 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-extrabold uppercase tracking-wider text-teal-800 flex items-center gap-1.5 font-tech">
                <CloudSun className="w-4 h-4 text-teal-600" />
                <span>Climate Intelligence</span>
              </span>
              <span className="text-xs px-2.5 py-0.5 rounded-md bg-teal-50 text-teal-900 border border-teal-200 font-mono font-bold">
                {weather.seasonLabel}
              </span>
            </div>

            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-4xl font-extrabold text-stone-900 font-mono">
                {weather.temperatureHighC}°C
              </span>
              <span className="text-xs text-stone-500 font-semibold">
                / {weather.temperatureLowC}°C night
              </span>
            </div>

            <p className="text-xs text-stone-600 leading-relaxed font-medium">
              {weather.summary}
            </p>
          </div>

          <div className="mt-4 pt-3.5 border-t border-stone-100 space-y-1.5 text-xs">
            <div className="flex items-center justify-between">
              <span className="text-stone-500 font-medium">Rain Risk:</span>
              <span className="font-mono font-extrabold text-sky-700">{weather.rainfallRisk}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-stone-500 font-medium">Gear advice:</span>
              <span className="text-stone-800 text-right truncate max-w-[170px] font-semibold">{weather.clothingAdvice}</span>
            </div>
          </div>
        </div>

        {/* Scams & Traps to Avoid */}
        <div className="lg:col-span-8 bg-white border border-stone-200/90 rounded-3xl p-6 shadow-xs">
          <h3 className="text-sm font-extrabold text-stone-900 font-display flex items-center gap-2 mb-3.5">
            <AlertTriangle className="w-4 h-4 text-amber-600" />
            <span>Common Tourist Traps & Safety Protocols</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {safetyNotes.map((note, i) => (
              <div
                key={i}
                className="bg-[#FAF7F2] border border-stone-200 rounded-2xl p-3.5 flex items-start gap-2.5"
              >
                <div className={`w-2 h-2 rounded-full mt-1.5 shrink-0 ${
                  note.severity === 'warning' ? 'bg-rose-500' : 'bg-amber-500'
                }`} />
                <div>
                  <span className="text-xs font-bold text-stone-900 block">{note.title}</span>
                  <p className="text-xs text-stone-600 leading-relaxed font-medium mt-0.5">
                    {note.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Rainy-Day / Inclement Weather Plan B Swaps */}
      <div className="bg-white border border-stone-200/90 rounded-3xl p-6 sm:p-7 shadow-xs">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-base font-extrabold text-stone-900 font-display flex items-center gap-2">
              <Umbrella className="w-4 h-4 text-teal-600" />
              <span>Sentinel Indoor Plan B Backup Activities</span>
            </h3>
            <p className="text-xs text-stone-600 mt-0.5 font-medium">
              If rain or closures impact your outdoor schedule, swap in these vetted indoor cultural backups.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {backups.map(backup => (
            <div
              key={backup.id}
              className="bg-[#FAF7F2] border border-stone-200 rounded-2xl p-4 sm:p-5 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-teal-800 font-tech">
                    {backup.neighborhood}
                  </span>
                  <span className="text-xs font-mono font-extrabold text-stone-900">
                    {backup.costEstimate > 0 ? `$${backup.costEstimate}` : 'Free'}
                  </span>
                </div>
                <h4 className="text-sm font-extrabold text-stone-900 font-display">
                  {backup.indoorAlternative}
                </h4>
                <p className="text-xs text-stone-600 mt-1 leading-relaxed font-medium">
                  {backup.whyRecommended}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-stone-200 flex items-center justify-between text-xs">
                <span className="text-stone-500 font-medium">Replaces:</span>
                <span className="text-stone-800 font-bold truncate max-w-[140px]">{backup.replacesActivity}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Packing Checklist */}
      <div className="bg-white border border-stone-200/90 rounded-3xl p-6 sm:p-7 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
          <div>
            <h3 className="text-base font-extrabold text-stone-900 font-display flex items-center gap-2">
              <Luggage className="w-4 h-4 text-amber-600" />
              <span>Smart Packing Checklist</span>
            </h3>
            <p className="text-xs text-stone-600 mt-0.5 font-medium">
              Customized for {trip.destination}'s climate ({weather.seasonLabel}) and your travel pace.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-extrabold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-xl border border-emerald-200">
              {packedCount}/{totalPackingCount} Packed ({packPct}%)
            </span>
          </div>
        </div>

        {/* Add Custom Item */}
        <form onSubmit={handleAddPackingItem} className="flex gap-2 mb-5">
          <input
            type="text"
            value={newPackingItem}
            onChange={e => setNewPackingItem(e.target.value)}
            placeholder="Add custom packing item (e.g. Universal Power Adapter)"
            className="flex-1 px-3.5 py-2.5 bg-[#FAF7F2] border border-stone-200 rounded-xl text-stone-900 placeholder-stone-400 text-xs font-medium focus:outline-hidden focus:border-amber-400"
          />
          <select
            value={packingCategory}
            onChange={e => setPackingCategory(e.target.value)}
            className="px-3.5 py-2.5 bg-[#FAF7F2] border border-stone-200 rounded-xl text-stone-900 text-xs font-medium focus:outline-hidden cursor-pointer"
          >
            <option value="Clothing & Footwear">Clothing & Footwear</option>
            <option value="Tech & Power">Tech & Power</option>
            <option value="Essentials & Docs">Essentials & Docs</option>
            <option value="Toiletries & Health">Toiletries & Health</option>
            <option value="Weather & Gear">Weather & Gear</option>
          </select>
          <button
            type="submit"
            className="px-5 py-2.5 bg-amber-600 hover:bg-amber-700 text-white font-extrabold text-xs rounded-xl transition-colors cursor-pointer shadow-xs"
          >
            Add
          </button>
        </form>

        {/* Checklist Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {packingList.map(item => (
            <div
              key={item.id}
              onClick={() => togglePackingItem(item.id)}
              className={`p-3.5 rounded-2xl border flex items-center justify-between gap-3 cursor-pointer transition-all ${
                item.packed
                  ? 'bg-emerald-50/60 border-emerald-300 text-stone-500'
                  : 'bg-[#FAF7F2] border-stone-200 hover:border-stone-300 text-stone-900 shadow-xs'
              }`}
            >
              <div className="flex items-center gap-3 min-w-0">
                {item.packed ? (
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                ) : (
                  <Circle className="w-5 h-5 text-stone-400 shrink-0" />
                )}
                <div className="min-w-0">
                  <span className={`text-xs font-bold block truncate ${item.packed ? 'line-through text-stone-400' : 'text-stone-900'}`}>
                    {item.item}
                  </span>
                  <span className="text-[10px] text-stone-500 block truncate font-medium">
                    {item.agentNote || 'Essential travel gear'}
                  </span>
                </div>
              </div>

              <span className="text-[9px] px-2 py-0.5 rounded-md bg-white border border-stone-200 text-stone-600 uppercase font-tech font-bold shrink-0">
                {item.category}
              </span>
            </div>
          ))}
        </div>

      </div>

    </div>
  );
};
