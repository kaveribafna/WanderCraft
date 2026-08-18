import React from 'react';
import { 
  Calendar, 
  MapPin, 
  DollarSign, 
  Users, 
  Compass, 
  CloudSun, 
  Sparkles, 
  Award,
  CheckCircle2,
  Zap,
  Flame,
  ShieldCheck,
  Footprints
} from 'lucide-react';

export const TripOverview = ({
  trip,
  activeTab,
  onSelectTab
}) => {
  const tabs = [
    { id: 'itinerary', label: 'Day-by-Day Itinerary', icon: Calendar },
    { id: 'map', label: 'Route & Map', icon: Compass },
    { id: 'budget', label: 'Budget Tracker', icon: DollarSign },
    { id: 'stays', label: 'Stays & Staging', icon: MapPin },
    { id: 'culinary', label: 'Food & Dining', icon: Sparkles },
    { id: 'sentinel', label: 'Sentinel & Packing', icon: ShieldCheck },
    { id: 'agents', label: 'Agent Debate Room', icon: Zap }
  ];

  // Derive city and country if not split
  let cityName = trip.city;
  let countryName = trip.country;
  if (!cityName) {
    if (trip.destination.includes(',')) {
      const parts = trip.destination.split(',');
      cityName = parts[0].trim();
      countryName = parts[1]?.trim() || trip.country || '';
    } else {
      cityName = trip.destination;
      countryName = trip.country || '';
    }
  }

  return (
    <div className="w-full border-b border-stone-200/90 bg-white/90 backdrop-blur-md shadow-xs">
      
      {/* Hero Banner with Curated Image & Editorial Gen-Z Typography */}
      <div className="relative h-72 sm:h-84 md:h-96 w-full overflow-hidden bg-stone-900 select-none">
        <img
          src={trip.heroImage}
          alt={trip.destination}
          className="w-full h-full object-cover object-center scale-102 hover:scale-105 transition-transform duration-700"
        />
        
        {/* Layered Gradient for Contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/50 to-stone-950/20" />
        <div className="absolute inset-0 bg-radial-at-c from-transparent via-transparent to-stone-950/60" />

        {/* Dynamic Top Badge Bar on Image */}
        <div className="absolute top-4 inset-x-0 max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between pointer-events-none">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-stone-900/80 backdrop-blur-md border border-white/20 text-white text-[11px] font-extrabold font-tech uppercase tracking-wider flex items-center gap-1.5 shadow-lg">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Smart Travel Co-Pilots Verified</span>
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-2">
            {trip.vibeTags?.slice(0, 2).map((tag, idx) => (
              <span 
                key={idx}
                className="px-3 py-1 rounded-full bg-amber-400 text-stone-950 font-extrabold text-[11px] uppercase tracking-wider font-tech shadow-md border border-amber-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Content over image */}
        <div className="absolute bottom-0 inset-x-0 max-w-7xl mx-auto px-4 sm:px-6 pb-6 sm:pb-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-5">
            
            <div className="max-w-3xl">
              
              {/* Vibrant Gen-Z Sticker Pills Cluster */}
              <div className="flex flex-wrap items-center gap-2.5 mb-3">
                
                {/* ⚡ 7 DAYS PLAN - Dynamic High-Impact Sticker Badge */}
                <div className="badge-sticker bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 text-stone-950 font-black font-display uppercase tracking-widest text-xs sm:text-sm px-4 py-1.5 rounded-full border-2 border-stone-900 flex items-center gap-1.5 shadow-md">
                  <Zap className="w-4 h-4 fill-stone-950 text-stone-950 shrink-0" />
                  <span>{trip.totalDays} DAYS EXPEDITION</span>
                </div>

                {/* Vibe / Style Badge */}
                <span className="px-3.5 py-1 rounded-full bg-white/95 backdrop-blur-md text-stone-950 text-xs font-black font-tech uppercase tracking-wider shadow-sm border border-stone-200">
                  {trip.packageVibe || trip.travelStyle}
                </span>

                {/* Party Size Pill */}
                <span className="px-3.5 py-1 rounded-full bg-stone-900/80 backdrop-blur-md text-stone-100 text-xs font-bold font-tech shadow-sm border border-white/20">
                  {trip.partyType} ({trip.partySize}p)
                </span>

                {/* Zero Backtracking Pill */}
                <span className="hidden md:inline-flex px-3 py-1 rounded-full bg-teal-400/90 text-stone-950 text-xs font-extrabold font-tech uppercase tracking-wider shadow-sm">
                  ⚡ 0% Backtrack
                </span>
              </div>
              
              {/* Dynamic Duo Typography: City & Country Name */}
              <div className="mt-1">
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white font-display tracking-tight leading-[1.08] drop-shadow-xl">
                  <span>{cityName}</span>
                  {countryName && (
                    <span className="font-serif-accent italic font-normal text-3xl sm:text-5xl lg:text-6xl text-amber-300 ml-2.5 drop-shadow-md">
                      , {countryName}
                    </span>
                  )}
                </h1>
              </div>
              
              <p className="text-xs sm:text-sm text-stone-200 mt-2 font-medium max-w-2xl leading-relaxed line-clamp-2 drop-shadow-sm">
                {trip.tagline}
              </p>
            </div>

            {/* Quick Metrics Floating Glass Pods */}
            <div className="flex items-center gap-3 shrink-0">
              
              {/* Budget Pod */}
              <div className="bg-white/95 backdrop-blur-xl border-2 border-stone-900 rounded-2xl px-4 py-3 text-right shadow-xl min-w-[130px] badge-sticker">
                <span className="text-[10px] text-stone-500 uppercase tracking-wider font-tech font-extrabold block">
                  Budget Locked
                </span>
                <span className="text-lg sm:text-xl font-black font-mono text-emerald-800">
                  {trip.currency} ${trip.budgetAmount.toLocaleString()}
                </span>
                <span className="text-[9px] text-stone-500 font-bold block">
                  ${Math.round(trip.budgetAmount / (trip.totalDays * trip.partySize))}/p/day
                </span>
              </div>
              
              {/* Route Efficiency Pod */}
              <div className="bg-white/95 backdrop-blur-xl border-2 border-stone-900 rounded-2xl px-4 py-3 text-right shadow-xl min-w-[120px] badge-sticker">
                <span className="text-[10px] text-stone-500 uppercase tracking-wider font-tech font-extrabold block">
                  Efficiency
                </span>
                <span className="text-lg sm:text-xl font-black font-mono text-sky-800">
                  {trip.logistics.routeEfficiencyScore}%
                </span>
                <span className="text-[9px] text-stone-500 font-bold block flex items-center justify-end gap-0.5">
                  <Footprints className="w-2.5 h-2.5 text-stone-600" />
                  <span>~{trip.logistics.totalEstimatedWalkingKm || Math.round(trip.totalDays * 8.5)} km walk</span>
                </span>
              </div>

            </div>

          </div>
        </div>
      </div>

      {/* Secondary Fast Stats Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 border-b border-stone-200 flex flex-wrap items-center justify-between gap-3 text-xs text-stone-700 font-medium bg-[#FAF7F2]">
        <div className="flex flex-wrap items-center gap-4 sm:gap-6">
          <div className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4 text-amber-600 shrink-0" />
            <span className="font-bold text-stone-900">{trip.startDate} to {trip.endDate}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-teal-600 shrink-0" />
            <span>Basecamp: <strong className="text-stone-900 font-bold">{trip.stays[0]?.neighborhood || 'Historic Core'}</strong></span>
          </div>
          <div className="flex items-center gap-1.5">
            <CloudSun className="w-4 h-4 text-sky-600 shrink-0" />
            <span className="font-semibold text-stone-800">
              {trip.sentinel.weather.temperatureHighC}°C / {trip.sentinel.weather.seasonLabel}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2 text-stone-800 font-extrabold font-tech text-xs bg-amber-100/70 border border-amber-300/80 px-3 py-1 rounded-xl">
          <Sparkles className="w-3.5 h-3.5 text-amber-700 animate-spin" style={{ animationDuration: '6s' }} />
          <span>6 Autonomous Specialists in Unanimous Consensus</span>
        </div>
      </div>

      {/* Interactive Tabs Row with Animated Pills */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 overflow-x-auto bg-white py-2">
        <div className="flex items-center gap-2 min-w-max">
          {tabs.map(tab => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                onClick={() => onSelectTab(tab.id)}
                className={`px-4 py-2.5 rounded-2xl text-xs font-extrabold whitespace-nowrap transition-all duration-200 font-display flex items-center gap-2 cursor-pointer ${
                  isActive
                    ? 'bg-stone-900 text-white shadow-md scale-102 border border-stone-900'
                    : 'text-stone-600 hover:text-stone-950 hover:bg-stone-100/90 border border-transparent'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-amber-400' : 'text-stone-400'}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

    </div>
  );
};
