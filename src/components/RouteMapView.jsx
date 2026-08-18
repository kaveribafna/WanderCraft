import React, { useState } from 'react';
import { 
  MapPin, 
  Navigation, 
  Train, 
  Compass, 
  Footprints, 
  ArrowRight, 
  Layers, 
  ExternalLink,
  Info
} from 'lucide-react';

export const RouteMapView = ({ trip }) => {
  const [selectedDayNum, setSelectedDayNum] = useState(1);
  const selectedDay = trip.itinerary.find(d => d.dayNumber === selectedDayNum) || trip.itinerary[0];

  const totalWalkingKm = trip.itinerary.reduce((sum, d) => sum + d.estimatedWalkingKm, 0);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-8">
      
      {/* Banner */}
      <div className="bg-white border border-stone-200/90 rounded-3xl p-6 sm:p-7 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="px-3 py-0.5 rounded-full bg-sky-100 text-sky-900 text-xs font-extrabold font-tech uppercase tracking-wider">
                Engineered by Atlas Agent
              </span>
              <span className="text-xs text-stone-500 font-semibold">
                Geographic Clustering & Transit Sequencing
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 font-display">
              Route Map & Transit Logistics
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 mt-1 font-medium">
              Zero backtracking guarantee: activities are strictly grouped by neighborhood radius.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="px-4 py-2.5 bg-[#FAF7F2] border border-stone-200 rounded-2xl text-right shadow-xs">
              <span className="text-[10px] text-stone-500 uppercase tracking-wider font-tech font-bold block">Efficiency Score</span>
              <span className="text-lg font-extrabold font-mono text-sky-800">
                {trip.logistics.routeEfficiencyScore}% Optimized
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Visual Map & Day Route Selector */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Column: Visual Route Canvas */}
        <div className="lg:col-span-8 bg-white border border-stone-200/90 rounded-3xl p-6 shadow-xs flex flex-col justify-between">
          <div className="flex items-center justify-between pb-3.5 border-b border-stone-100 mb-4">
            <div className="flex items-center gap-2">
              <Compass className="w-4 h-4 text-amber-600" />
              <span className="text-sm font-extrabold text-stone-900 font-display">
                Day {selectedDay.dayNumber} Route Graph: {selectedDay.neighborhoodCluster}
              </span>
            </div>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                `${trip.destination} ${selectedDay.neighborhoodCluster}`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-amber-800 hover:text-amber-900 flex items-center gap-1 font-bold"
            >
              <span>Open in Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Stylized Node-based Route Sequence */}
          <div className="bg-[#FAF7F2] border border-stone-200 rounded-2xl p-6 relative overflow-hidden my-2">
            
            {/* Background Grid Pattern */}
            <div 
              className="absolute inset-0 opacity-20 pointer-events-none"
              style={{
                backgroundImage: 'radial-gradient(circle, #0284c7 1px, transparent 1px)',
                backgroundSize: '24px 24px'
              }}
            />

            {/* Basecamp Departure Marker */}
            <div className="flex items-center gap-3 mb-6 relative z-10">
              <div className="w-10 h-10 rounded-2xl bg-purple-100 border border-purple-300 flex items-center justify-center text-purple-900 font-extrabold text-sm shrink-0 shadow-xs font-display">
                H
              </div>
              <div className="bg-white border border-stone-200 rounded-xl px-4 py-2 flex-1 shadow-xs">
                <span className="text-[10px] text-stone-500 uppercase font-tech font-bold block">Depart from Basecamp</span>
                <span className="text-xs font-bold text-stone-900">{trip.stays[0]?.name || 'Central Hotel'} ({trip.stays[0]?.neighborhood})</span>
              </div>
            </div>

            {/* Step Sequence */}
            <div className="space-y-4 relative z-10 pl-4 border-l-2 border-dashed border-stone-300 ml-4">
              {selectedDay.activities.map((act, i) => (
                <div key={act.id} className="relative pl-6">
                  {/* Step Dot */}
                  <div className="absolute -left-[25px] top-1.5 w-6 h-6 rounded-full bg-white border-2 border-amber-500 flex items-center justify-center text-[10px] font-extrabold text-amber-900 shadow-xs font-tech">
                    {i + 1}
                  </div>

                  <div className="bg-white border border-stone-200/90 hover:border-stone-300 rounded-2xl p-3.5 flex items-start justify-between gap-3 shadow-xs">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono font-extrabold text-amber-800 uppercase bg-amber-50 px-2 py-0.5 rounded">
                          {act.timeSlot} · {act.startTime}
                        </span>
                        <span className="text-xs font-bold text-stone-900 font-display">
                          {act.title}
                        </span>
                      </div>
                      <div className="flex items-center gap-1 text-[11px] text-stone-500 mt-1.5 font-medium">
                        <MapPin className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                        <span>{act.location}</span>
                      </div>
                    </div>

                    <span className="text-[11px] font-mono font-bold text-stone-600 bg-stone-100 px-2 py-0.5 rounded shrink-0">
                      {act.durationMinutes}m
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Day Route Summary Footer */}
            <div className="mt-6 pt-4 border-t border-stone-200 flex flex-wrap items-center justify-between text-xs text-stone-600 relative z-10">
              <div className="flex items-center gap-2 font-medium">
                <Footprints className="w-4 h-4 text-emerald-600" />
                <span>Estimated walk: <strong className="text-stone-900">{selectedDay.estimatedWalkingKm} km</strong></span>
              </div>
              <div className="flex items-center gap-2 font-medium">
                <Train className="w-4 h-4 text-sky-600" />
                <span>Transit: <strong className="text-stone-900">{selectedDay.transitSummary}</strong></span>
              </div>
            </div>

          </div>

          {/* Day Selector Buttons */}
          <div className="flex items-center gap-2 overflow-x-auto pt-3">
            {trip.itinerary.map(d => (
              <button
                key={d.dayNumber}
                onClick={() => setSelectedDayNum(d.dayNumber)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap font-display ${
                  selectedDayNum === d.dayNumber
                    ? 'bg-amber-600 text-white shadow-xs'
                    : 'bg-stone-100 text-stone-700 hover:text-stone-900 border border-stone-200'
                }`}
              >
                Day {d.dayNumber}
              </button>
            ))}
          </div>
        </div>

        {/* Right Column: Transit Passes & Airport Transfers */}
        <div className="lg:col-span-4 space-y-4">
          
          {/* Airport Connection Card */}
          <div className="bg-white border border-stone-200/90 rounded-3xl p-6 shadow-xs">
            <h3 className="text-sm font-extrabold text-stone-900 font-display flex items-center gap-2 mb-3.5">
              <Navigation className="w-4 h-4 text-sky-600" />
              <span>Arrival & Airport Connection</span>
            </h3>

            <div className="space-y-2.5 text-xs">
              <div className="bg-[#FAF7F2] p-3.5 rounded-2xl border border-stone-200">
                <span className="text-[10px] text-stone-500 uppercase font-tech font-bold block">Primary Airport</span>
                <span className="font-bold text-stone-900">{trip.logistics.primaryAirport}</span>
              </div>

              <div className="bg-[#FAF7F2] p-3.5 rounded-2xl border border-stone-200">
                <span className="text-[10px] text-stone-500 uppercase font-tech font-bold block">Fastest Connection to Basecamp</span>
                <span className="font-bold text-sky-900">{trip.logistics.recommendedAirportTransit}</span>
              </div>
            </div>
          </div>

          {/* Recommended Transit Card / Passes */}
          <div className="bg-white border border-stone-200/90 rounded-3xl p-6 shadow-xs">
            <h3 className="text-sm font-extrabold text-stone-900 font-display flex items-center gap-2 mb-3.5">
              <Train className="w-4 h-4 text-emerald-600" />
              <span>Recommended Transit Passes</span>
            </h3>

            <div className="bg-[#FAF7F2] p-4 rounded-2xl border border-stone-200">
              <span className="text-xs font-bold text-emerald-900 block mb-1">
                {trip.logistics.transitPassRecommended}
              </span>
              <p className="text-[11px] text-stone-600 leading-relaxed font-medium">
                Purchase upon arrival at the airport or load directly onto Apple/Google Wallet for tap-to-ride access across subways and buses.
              </p>
            </div>

            <div className="mt-3.5 bg-[#FAF7F2] p-4 rounded-2xl border border-stone-200">
              <span className="text-[10px] text-stone-500 uppercase font-tech font-bold block">Trip Footprint Total</span>
              <span className="text-xs font-mono font-extrabold text-amber-900">
                ~{totalWalkingKm.toFixed(1)} km total walking across {trip.totalDays} days
              </span>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
