import React, { useState } from 'react';
import { 
  Hotel, 
  MapPin, 
  Star, 
  Footprints, 
  ShieldCheck, 
  Check, 
  ExternalLink, 
  DollarSign, 
  Sparkles,
  Heart,
  Train,
  CheckCircle2
} from 'lucide-react';

export const StaysView = ({
  trip,
  onUpdateTrip
}) => {
  const [selectedStayId, setSelectedStayId] = useState(trip.stays[0]?.id || '');

  const totalNights = Math.max(1, trip.totalDays - 1);

  const handleSelectBasecamp = (id) => {
    setSelectedStayId(id);
    const updated = { ...trip };
    const selected = updated.stays.find(s => s.id === id);
    if (selected) {
      // Re-order stays so selected is primary
      updated.stays = [selected, ...updated.stays.filter(s => s.id !== id)];
      onUpdateTrip(updated);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-8">
      
      {/* Header Banner from Haven Agent */}
      <div className="bg-white border border-stone-200/90 rounded-3xl p-6 sm:p-7 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="px-3 py-0.5 rounded-full bg-purple-100 text-purple-900 text-xs font-extrabold font-tech uppercase tracking-wider">
                Scouted by Haven Agent
              </span>
              <span className="text-xs text-stone-500 font-semibold">
                Optimized for Walkability & Zero Cross-Town Backtracking
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 font-display">
              Boutique Basecamps & Neighborhood Lodging
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 mt-1 font-medium">
              Curated boutique accommodations with high walkability, safety scores, and direct transit access.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="px-4 py-2.5 bg-[#FAF7F2] border border-stone-200 rounded-2xl text-right shadow-xs">
              <span className="text-[10px] text-stone-500 uppercase tracking-wider font-tech font-bold block">Duration</span>
              <span className="text-sm font-extrabold font-mono text-amber-800">
                {totalNights} Nights ({trip.startDate} - {trip.endDate})
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Accommodations Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {trip.stays.map((stay, idx) => {
          const isPrimary = idx === 0;
          const totalCost = stay.estimatedTotal || (stay.pricePerNight * totalNights);

          return (
            <div
              key={stay.id}
              className={`bg-white border rounded-3xl overflow-hidden flex flex-col justify-between transition-all duration-200 ${
                isPrimary
                  ? 'border-amber-400 ring-2 ring-amber-300/40 shadow-lg'
                  : 'border-stone-200/90 hover:border-stone-300 shadow-xs hover:shadow-md'
              }`}
            >
              {/* Header Box */}
              <div className="p-6 bg-gradient-to-b from-[#FAF7F2] to-white border-b border-stone-100 relative">
                <div className="flex items-center justify-between mb-3">
                  <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wide font-tech ${
                    stay.tier === 'Primary Choice'
                      ? 'bg-amber-100 text-amber-900 border border-amber-300'
                      : stay.tier === 'Boutique Upgrade'
                      ? 'bg-purple-100 text-purple-900 border border-purple-300'
                      : 'bg-emerald-100 text-emerald-900 border border-emerald-300'
                  }`}>
                    {stay.tier}
                  </span>

                  <div className="flex items-center gap-1 bg-white px-2.5 py-0.5 rounded-full text-xs font-mono font-bold text-amber-900 border border-stone-200 shadow-xs">
                    <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                    <span>{stay.rating} / 5.0</span>
                  </div>
                </div>

                <h3 className="text-lg font-extrabold text-stone-900 font-display">
                  {stay.name}
                </h3>

                <div className="flex items-center gap-1.5 text-xs text-stone-600 mt-1 font-medium">
                  <MapPin className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                  <span>{stay.neighborhood}</span>
                </div>

                <div className="flex items-baseline justify-between mt-4 pt-3 border-t border-stone-200/70">
                  <div>
                    <span className="text-xl font-extrabold font-mono text-stone-900">${stay.pricePerNight}</span>
                    <span className="text-xs text-stone-500 font-medium"> / night</span>
                  </div>
                  <span className="text-xs font-mono font-bold text-stone-500">
                    Total: ${totalCost.toLocaleString()}
                  </span>
                </div>
              </div>

              {/* Body Details */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <p className="text-xs text-stone-600 leading-relaxed font-medium">
                    {stay.description}
                  </p>

                  {/* Walkability & Transit Score */}
                  <div className="grid grid-cols-2 gap-2 mt-4 pt-4 border-t border-stone-100">
                    <div className="bg-[#FAF7F2] p-2.5 rounded-2xl border border-stone-200">
                      <span className="text-[10px] text-stone-500 uppercase font-tech font-bold block">Walk Score</span>
                      <div className="flex items-center gap-1 text-xs font-extrabold text-emerald-700 mt-0.5">
                        <Footprints className="w-3.5 h-3.5" />
                        <span>{stay.walkabilityScore}/100</span>
                      </div>
                    </div>

                    <div className="bg-[#FAF7F2] p-2.5 rounded-2xl border border-stone-200">
                      <span className="text-[10px] text-stone-500 uppercase font-tech font-bold block">Property Type</span>
                      <div className="flex items-center gap-1 text-xs font-bold text-stone-800 mt-0.5 truncate">
                        <Hotel className="w-3.5 h-3.5 text-purple-600 shrink-0" />
                        <span className="truncate">{stay.propertyType}</span>
                      </div>
                    </div>
                  </div>

                  {/* Amenities */}
                  <div className="mt-3.5 flex flex-wrap gap-1.5">
                    {stay.amenities.map((amenity, i) => (
                      <span key={i} className="px-2.5 py-0.5 rounded-lg bg-[#FAF7F2] border border-stone-200 text-[11px] text-stone-700 font-medium">
                        {amenity}
                      </span>
                    ))}
                  </div>

                  {/* Location note / Haven Verdict */}
                  <div className="mt-3.5 p-3 bg-purple-50 rounded-2xl border border-purple-200/80 text-xs text-purple-950">
                    <span className="text-purple-900 font-extrabold text-[10px] uppercase font-tech block mb-0.5">Haven Transit Verdict</span>
                    <p className="text-[11px] text-purple-800 leading-snug font-medium">{stay.locationNote}</p>
                  </div>
                </div>

                {/* Select Basecamp Button */}
                <div className="pt-2">
                  <button
                    onClick={() => handleSelectBasecamp(stay.id)}
                    className={`w-full py-3 rounded-2xl font-bold text-xs font-display flex items-center justify-center gap-2 transition-all cursor-pointer ${
                      isPrimary
                        ? 'bg-amber-100 border border-amber-300 text-amber-950 pointer-events-none'
                        : 'bg-stone-900 hover:bg-stone-800 text-white shadow-xs'
                    }`}
                  >
                    {isPrimary ? (
                      <>
                        <CheckCircle2 className="w-4 h-4 text-amber-700" />
                        <span>Active Basecamp</span>
                      </>
                    ) : (
                      <span>Set as Primary Basecamp</span>
                    )}
                  </button>
                </div>

              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
};
