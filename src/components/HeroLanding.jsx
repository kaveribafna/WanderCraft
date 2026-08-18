import React, { useState, useRef, useEffect } from 'react';
import { 
  Compass, 
  MapPin, 
  Calendar, 
  Users, 
  DollarSign, 
  ArrowRight, 
  Sparkles, 
  ChevronRight, 
  SlidersHorizontal,
  Bot,
  Plane,
  Luggage,
  ShieldCheck,
  CheckCircle,
  Search,
  Navigation,
  Flame,
  Zap,
  Globe2,
  Camera,
  UtensilsCrossed,
  HeartHandshake
} from 'lucide-react';
import { GLOBAL_DESTINATIONS, GENZ_PACKAGE_PRESETS } from '../data/globalDestinations';

const POPULAR_CARDS = [
  {
    id: 'tokyo-7d-balanced',
    city: 'Tokyo',
    country: 'Japan',
    subtitle: '7 Days · $2,200',
    stat: '42 travelers active',
    image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=600&q=80',
    category: 'VIRAL EATS & NEON',
    tag: '⚡ 7 DAYS PLAN',
    vibe: 'CULTURE & CYBERPUNK'
  },
  {
    id: 'amalfi-5d-luxury',
    city: 'Amalfi',
    country: 'Italy',
    subtitle: '5 Days · $6,500',
    stat: '28 travelers booked',
    image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=600&q=80',
    category: 'COASTAL LUXE',
    tag: '⚡ 5 DAYS PLAN',
    vibe: 'CLIFFSIDE SUNSETS'
  },
  {
    id: 'greece-6d-aegean',
    city: 'Santorini',
    country: 'Greece',
    subtitle: '6 Days · $2,800',
    stat: '70 people planned',
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=600&q=80',
    category: 'ISLANDS & RUINS',
    tag: '⚡ 6 DAYS PLAN',
    vibe: 'AEGEAN BLUE'
  },
  {
    id: 'scotland-5d-highlands',
    city: 'Edinburgh',
    country: 'Scotland',
    subtitle: '5 Days · $1,950',
    stat: '31 people explored',
    image: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=600&q=80',
    category: 'CASTLES & NATURE',
    tag: '⚡ 5 DAYS PLAN',
    vibe: 'HIGHLAND LOCHS'
  },
  {
    id: 'egypt-7d-pyramids',
    city: 'Cairo',
    country: 'Egypt',
    subtitle: '7 Days · $2,100',
    stat: '27 people queued',
    image: 'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&w=600&q=80',
    category: 'ANCIENT WONDERS',
    tag: '⚡ 7 DAYS PLAN',
    vibe: 'NILE CRUISE'
  }
];

export const HeroLanding = ({
  onPlanTrip,
  onSelectSample,
  onOpenAgentsModal,
  onOpenAboutModal
}) => {
  // Today + defaults
  const today = new Date();
  const defStart = new Date(today);
  defStart.setDate(today.getDate() + 20);
  const defEnd = new Date(defStart);
  defEnd.setDate(defStart.getDate() + 6);

  const [destination, setDestination] = useState('Tokyo, Japan');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedPreset, setSelectedPreset] = useState('tiktok-aesthetic');
  const [startDate, setStartDate] = useState(defStart.toISOString().split('T')[0]);
  const [endDate, setEndDate] = useState(defEnd.toISOString().split('T')[0]);
  const [budget, setBudget] = useState(2200);
  const [currency, setCurrency] = useState('USD');
  const [guests, setGuests] = useState(2);
  const [partyType, setPartyType] = useState('Couple');
  const [travelStyle, setTravelStyle] = useState('Balanced');
  const [travelPace, setTravelPace] = useState('Moderate (3-4 sights/day)');

  const searchContainerRef = useRef(null);

  // Close suggestions on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Filter global destination suggestions
  const filteredDestinations = destination.trim()
    ? GLOBAL_DESTINATIONS.filter(d => 
        d.city.toLowerCase().includes(destination.toLowerCase()) ||
        d.country.toLowerCase().includes(destination.toLowerCase()) ||
        d.tagline.toLowerCase().includes(destination.toLowerCase())
      )
    : GLOBAL_DESTINATIONS.slice(0, 6);

  const handleSelectDestination = (city, country) => {
    setDestination(`${city}, ${country}`);
    setShowSuggestions(false);
  };

  const handlePresetSelect = (presetId) => {
    setSelectedPreset(presetId);
    const preset = GENZ_PACKAGE_PRESETS.find(p => p.id === presetId);
    if (preset) {
      setTravelStyle(preset.style);
      setTravelPace(preset.pace);
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (!destination.trim()) return;

    onPlanTrip({
      destination: destination.trim(),
      budgetAmount: budget,
      currency,
      startDate,
      endDate,
      partySize: guests,
      partyType,
      travelStyle,
      travelPace,
      packagePreset: selectedPreset,
      dietaryPreferences: ['Local Specialties', 'Street Food'],
      specialInterests: [travelStyle]
    });
  };

  return (
    <div className="relative min-h-screen w-full bg-[#EBF4F6] text-stone-900 flex flex-col justify-between overflow-x-hidden font-sans select-none">
      
      {/* 
        BRIGHT, SUN-DRENCHED COASTAL CANVAS
        Left 50%: Warm Golden Sand Dunes & Beach Topography
        Middle: Sculpted Seafoam Lagoon Coral Shelf
        Right 50%: Sparkling Turquoise Azure Tropical Waters with Coordinates
      */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        
        {/* Right Ocean Base - Radiant Crystal Turquoise Shallow Water */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-[#cffafe] via-[#7dd3fc] to-[#0284c7]"
          style={{
            backgroundImage: `radial-gradient(ellipse at 80% 40%, rgba(255,255,255,0.4) 0%, rgba(56, 189, 248, 0.5) 40%, rgba(2, 132, 199, 0.8) 100%), url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2000&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center right'
          }}
        />

        {/* Ocean Wave Caustics Overlay */}
        <div className="absolute inset-0 bg-sky-400/20 mix-blend-overlay" />

        {/* Sculpted Coral Reef / Green Topo Shelf in Center-Left */}
        <div 
          className="hidden md:block absolute -top-20 -bottom-20 left-[24%] w-[28%] opacity-95 pointer-events-none"
          style={{
            background: 'linear-gradient(145deg, #68BAA4 0%, #3D8E7B 50%, #297463 100%)',
            clipPath: 'polygon(55% 0%, 95% 0%, 75% 36%, 88% 68%, 60% 100%, 15% 100%, 42% 64%, 22% 32%)',
            filter: 'drop-shadow(0 25px 35px rgba(28, 70, 60, 0.35))'
          }}
        />

        {/* Left Golden Sand Coastline */}
        <div 
          className="absolute -top-10 -bottom-10 left-0 w-full lg:w-[49%] shadow-2xl"
          style={{
            clipPath: 'polygon(0% 0%, 86% 0%, 75% 35%, 82% 66%, 70% 100%, 0% 100%)',
            background: 'linear-gradient(135deg, #F3DFCA 0%, #E6C8A4 45%, #D4A877 100%)',
            backgroundImage: `radial-gradient(circle at 25% 30%, rgba(255, 255, 255, 0.4), transparent 60%), url('https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&q=80')`,
            backgroundBlendMode: 'soft-light',
            backgroundSize: 'cover'
          }}
        />

        {/* Coordinate Compass Feature (Shipwreck Atoll Marker on Right) */}
        <div className="absolute right-[4%] top-[18%] w-[380px] h-[190px] rounded-full border-4 border-amber-700/30 bg-gradient-to-r from-amber-100/90 via-sky-50/90 to-emerald-50/90 backdrop-blur-md shadow-2xl opacity-90 rotate-[-14deg] hidden xl:flex items-center justify-center p-2.5 border-dashed animate-float">
          <div className="w-full h-full rounded-full border-2 border-stone-400/50 flex items-center justify-around px-8">
            <div className="w-14 h-14 rounded-full border-2 border-amber-600/40 bg-white/90 shadow-md flex flex-col items-center justify-center text-stone-800 text-xs font-bold font-mono">
              <span className="text-[9px] text-amber-700 uppercase font-tech">LAT</span>
              <span>N 35°</span>
            </div>
            <div className="text-center font-display font-black text-xs text-sky-900 tracking-wider">
              <span>WANDER VECTOR</span>
              <span className="block text-[10px] text-teal-700 font-mono">GLOBAL GRID</span>
            </div>
            <div className="w-14 h-14 rounded-full border-2 border-teal-600/40 bg-white/90 shadow-md flex flex-col items-center justify-center text-stone-800 text-xs font-bold font-mono">
              <span className="text-[9px] text-teal-700 uppercase font-tech">LNG</span>
              <span>E 139°</span>
            </div>
          </div>
        </div>

      </div>

      {/* Top Header Bar */}
      <header className="relative z-20 w-full px-6 sm:px-12 pt-6 pb-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Logo Brand */}
          <div 
            onClick={() => window.location.reload()}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-11 h-11 rounded-2xl bg-white/95 border-2 border-stone-900 shadow-md backdrop-blur-md flex items-center justify-center text-amber-700 group-hover:scale-108 transition-transform badge-sticker">
              <Luggage className="w-6 h-6 text-amber-700" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl sm:text-3xl font-black tracking-tight text-stone-950 font-display">
                Wander<span className="text-amber-800 font-serif-accent italic font-normal text-3xl sm:text-4xl ml-1">Craft</span>
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="flex items-center gap-6 sm:gap-8 text-sm font-bold text-stone-900">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="hover:text-amber-800 transition-colors whitespace-nowrap hidden sm:block font-display"
            >
              Home
            </button>
            <button 
              onClick={onOpenAboutModal}
              className="hover:text-amber-800 transition-colors whitespace-nowrap hidden md:block font-display"
            >
              About
            </button>
            <button 
              onClick={onOpenAgentsModal}
              className="hover:text-amber-800 transition-colors whitespace-nowrap flex items-center gap-1.5 font-display"
            >
              <Sparkles className="w-4 h-4 text-amber-600" />
              <span>Trip Co-Pilots (6)</span>
            </button>
            <button 
              onClick={() => onSelectSample('tokyo-7d-balanced')}
              className="hover:text-amber-800 transition-colors whitespace-nowrap hidden lg:block font-display"
            >
              Featured
            </button>

            {/* Explore Outline Pill Button */}
            <button 
              onClick={() => onSelectSample('tokyo-7d-balanced')}
              className="px-5 py-2 rounded-full border-2 border-stone-950 hover:bg-stone-950 hover:text-white text-stone-950 font-extrabold text-xs tracking-wider uppercase bg-white/80 backdrop-blur-xs transition-all shadow-sm cursor-pointer badge-sticker"
            >
              Explore Demo
            </button>
          </nav>

        </div>
      </header>

      {/* Center Hero Content & Popular Cards Section */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 w-full py-4 lg:py-6 flex-1 flex flex-col justify-center">
        
        {/* Category breadcrumb with sticker pill */}
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="px-3 py-1 rounded-full bg-stone-900 text-white font-tech font-extrabold text-[11px] uppercase tracking-widest">
            GLOBAL SEARCH 🌍
          </span>
          <span className="text-[11px] font-extrabold tracking-widest text-stone-800 uppercase font-tech">
            ANY CITY · ANY COUNTRY · CUSTOM PACKAGES
          </span>
        </div>

        {/* Big Bold Innovative Headline */}
        <div className="mb-6 sm:mb-8 max-w-3xl">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-stone-950 font-display tracking-tight leading-[1.08]">
            Curate your next escape
            <span className="block mt-1 font-serif-accent italic font-normal text-4xl sm:text-6xl lg:text-7xl text-amber-950 leading-none">
              crafted effortlessly around your vibe
            </span>
          </h1>
          <p className="mt-3 text-xs sm:text-base text-stone-800 font-medium max-w-xl leading-relaxed">
            Search any destination worldwide. Get a personalized itinerary with zero-backtrack routes, locked-in budgets, aesthetic stays, and viral local spots in seconds.
          </p>
        </div>

        {/* VIBE & PACKAGE PRESETS ROW (Gen-Z) */}
        <div className="mb-6 max-w-5xl">
          <div className="flex items-center gap-2 mb-2.5">
            <Flame className="w-4.5 h-4.5 text-amber-600 fill-amber-500" />
            <h2 className="text-sm sm:text-base font-black uppercase tracking-wider text-stone-900 font-display">
              CHOOSE YOUR TRIP VIBE & PACKAGE
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
            {GENZ_PACKAGE_PRESETS.map((preset) => {
              const isSelected = selectedPreset === preset.id;
              return (
                <div
                  key={preset.id}
                  onClick={() => handlePresetSelect(preset.id)}
                  className={`p-3 rounded-2xl cursor-pointer transition-all duration-200 border-2 select-none ${
                    isSelected
                      ? 'bg-stone-950 text-white border-stone-950 shadow-lg scale-102 -translate-y-1'
                      : 'bg-white/90 hover:bg-white text-stone-900 border-stone-900/40 hover:border-stone-900 shadow-sm hover:-translate-y-0.5'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-2xl">{preset.emoji}</span>
                    <span className={`text-[10px] sm:text-[11px] font-black px-2.5 py-0.5 rounded-full font-tech tracking-wider uppercase ${
                      isSelected ? 'bg-amber-400 text-stone-950' : 'bg-stone-100 text-stone-800'
                    }`}>
                      {preset.badge.split(' ')[0]}
                    </span>
                  </div>
                  <h3 className={`font-black text-sm sm:text-[15px] font-display truncate ${isSelected ? 'text-white' : 'text-stone-950'}`}>
                    {preset.name}
                  </h3>
                  <p className={`text-xs mt-0.5 line-clamp-1 ${isSelected ? 'text-stone-300' : 'text-stone-600'}`}>
                    {preset.tagline}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* MOST POPULAR Section with Cards */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-3 max-w-md">
            <h2 className="text-sm sm:text-base font-black uppercase tracking-wider text-stone-950 font-display flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse" />
              <span>POPULAR VETTED ITINERARIES</span>
            </h2>
            <div 
              onClick={() => onSelectSample('tokyo-7d-balanced')}
              className="flex items-center gap-1.5 text-stone-900 hover:text-amber-800 cursor-pointer text-xs sm:text-sm font-bold"
            >
              <span>View all</span>
              <div className="w-5 h-5 rounded-full border border-stone-900 flex items-center justify-center">
                <ChevronRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>

          {/* Cards Grid with Dimensional Typography */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 max-w-5xl">
            {POPULAR_CARDS.map((card) => (
              <div
                key={card.id}
                onClick={() => onSelectSample(card.id)}
                className="group relative bg-white/95 text-stone-900 rounded-2xl p-2.5 shadow-[0_10px_30px_-5px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_40px_-5px_rgba(0,0,0,0.18)] hover:-translate-y-2 transition-all duration-300 cursor-pointer border-2 border-stone-900/80 overflow-hidden badge-sticker"
              >
                {/* Card Image */}
                <div className="h-28 sm:h-32 w-full rounded-xl overflow-hidden mb-2 relative">
                  <img
                    src={card.image}
                    alt={card.city}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Tag on image */}
                  <div className="absolute top-1.5 left-1.5 px-2.5 py-0.5 rounded-full bg-stone-950 text-white text-[10px] sm:text-xs font-black tracking-wider uppercase font-tech shadow-md">
                    <span>{card.tag}</span>
                  </div>
                </div>

                {/* Card Body with High-Impact Typography */}
                <div className="px-1">
                  <div className="flex items-baseline gap-1">
                    <h3 className="font-black text-base sm:text-lg text-stone-950 font-display">
                      {card.city}
                    </h3>
                    <span className="font-serif-accent italic font-normal text-sm sm:text-base text-amber-800">
                      , {card.country}
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between text-xs sm:text-sm text-stone-700 font-bold mt-0.5">
                    <span>{card.subtitle}</span>
                  </div>
                  
                  <div className="flex items-center gap-1 text-[11px] sm:text-xs text-teal-900 font-black mt-1 font-tech">
                    <Users className="w-3.5 h-3.5 text-teal-700 shrink-0" />
                    <span>{card.stat}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </main>

      {/* Floating Bottom Trip Search & AI Planner Bar */}
      <div className="relative z-30 w-full max-w-7xl mx-auto px-4 sm:px-12 pb-8 pt-2">
        
        {/* Floating Container with Live Search */}
        <form 
          onSubmit={handleSearchSubmit}
          className="bg-white/95 backdrop-blur-2xl rounded-2xl sm:rounded-3xl p-4 shadow-[0_25px_60px_-10px_rgba(0,0,0,0.2)] border-2 border-stone-900 text-stone-800"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
            
            {/* Column 1: Destination with Global Search & Dropdown */}
            <div ref={searchContainerRef} className="md:col-span-4 relative flex items-center gap-3 px-3 py-2 border-b md:border-b-0 md:border-r border-stone-200">
              <div className="w-10 h-10 rounded-2xl bg-amber-100 border border-amber-300 flex items-center justify-center text-amber-800 shrink-0 shadow-xs">
                <Globe2 className="w-5 h-5 text-amber-800" />
              </div>
              <div className="flex-1 min-w-0">
                <label className="block text-[10px] font-black text-stone-500 uppercase tracking-wider font-tech">
                  City or Country (Worldwide)
                </label>
                <input
                  type="text"
                  required
                  value={destination}
                  onFocus={() => setShowSuggestions(true)}
                  onChange={e => {
                    setDestination(e.target.value);
                    setShowSuggestions(true);
                  }}
                  placeholder="e.g. Tokyo, Rome, Bali, Paris, Cape Town..."
                  className="w-full bg-transparent font-black text-stone-950 text-sm focus:outline-hidden placeholder-stone-400 truncate"
                />
              </div>

              {/* Autocomplete Global Dropdown */}
              {showSuggestions && (
                <div className="absolute left-0 right-0 top-full mt-2 bg-white/98 backdrop-blur-xl border-2 border-stone-900 rounded-2xl shadow-2xl overflow-hidden z-50 max-h-72 overflow-y-auto">
                  <div className="p-2 border-b border-stone-100 bg-stone-50 flex items-center justify-between text-[11px] font-bold text-stone-600 font-tech">
                    <span>POPULAR DESTINATIONS</span>
                    <span className="text-[10px] text-amber-700">Type any city or country</span>
                  </div>

                  {filteredDestinations.map((d, idx) => (
                    <div
                      key={idx}
                      onClick={() => handleSelectDestination(d.city, d.country)}
                      className="px-3.5 py-2.5 hover:bg-amber-50 cursor-pointer flex items-center justify-between border-b border-stone-100 last:border-0 transition-colors"
                    >
                      <div className="flex items-center gap-2.5">
                        <MapPin className="w-4 h-4 text-amber-600 shrink-0" />
                        <div>
                          <span className="font-extrabold text-stone-900 text-sm">{d.city}</span>
                          <span className="text-xs text-stone-500 font-medium ml-1">, {d.country}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-stone-100 font-tech font-bold text-stone-700">
                          {d.vibeTags[0] || 'Vetted'}
                        </span>
                      </div>
                    </div>
                  ))}

                  {/* Free form search notice */}
                  <div 
                    onClick={() => setShowSuggestions(false)}
                    className="p-2.5 bg-amber-100/60 hover:bg-amber-100 text-center text-xs font-bold text-stone-900 cursor-pointer transition-colors"
                  >
                    ✨ Use Custom Destination "{destination}"
                  </div>
                </div>
              )}
            </div>

            {/* Column 2: Check-in Date */}
            <div className="md:col-span-2 flex items-center gap-3 px-3 py-2 border-b md:border-b-0 md:border-r border-stone-200">
              <div className="w-10 h-10 rounded-2xl bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-700 shrink-0 shadow-xs">
                <Calendar className="w-5 h-5 text-sky-700" />
              </div>
              <div className="flex-1 min-w-0">
                <label className="block text-[10px] font-black text-stone-500 uppercase tracking-wider font-tech">
                  Check-in
                </label>
                <input
                  type="date"
                  required
                  value={startDate}
                  onChange={e => setStartDate(e.target.value)}
                  className="w-full bg-transparent font-bold text-stone-900 text-xs sm:text-sm focus:outline-hidden"
                />
              </div>
            </div>

            {/* Column 3: Check-out Date */}
            <div className="md:col-span-2 flex items-center gap-3 px-3 py-2 border-b md:border-b-0 md:border-r border-stone-200">
              <div className="w-10 h-10 rounded-2xl bg-teal-50 border border-teal-200 flex items-center justify-center text-teal-700 shrink-0 shadow-xs">
                <Calendar className="w-5 h-5 text-teal-700" />
              </div>
              <div className="flex-1 min-w-0">
                <label className="block text-[10px] font-black text-stone-500 uppercase tracking-wider font-tech">
                  Check-Out
                </label>
                <input
                  type="date"
                  required
                  value={endDate}
                  onChange={e => setEndDate(e.target.value)}
                  className="w-full bg-transparent font-bold text-stone-900 text-xs sm:text-sm focus:outline-hidden"
                />
              </div>
            </div>

            {/* Column 4: Budget & Guests */}
            <div className="md:col-span-2 flex items-center gap-3 px-3 py-2">
              <div className="w-10 h-10 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 shrink-0 shadow-xs">
                <DollarSign className="w-5 h-5 text-emerald-700" />
              </div>
              <div className="flex-1 min-w-0">
                <label className="block text-[10px] font-black text-stone-500 uppercase tracking-wider font-tech">
                  Budget ({currency})
                </label>
                <div className="flex items-center gap-1">
                  <input
                    type="number"
                    min="300"
                    step="100"
                    value={budget}
                    onChange={e => setBudget(Number(e.target.value))}
                    className="w-full bg-transparent font-black text-stone-900 text-xs sm:text-sm focus:outline-hidden font-mono"
                  />
                  <span className="text-[10px] text-stone-500 font-bold whitespace-nowrap">
                    ({guests}p)
                  </span>
                </div>
              </div>
            </div>

            {/* Column 5: Search Button */}
            <div className="md:col-span-2 flex items-center justify-end">
              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 hover:from-amber-300 hover:to-amber-400 text-stone-950 font-black text-sm sm:text-base font-display flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all cursor-pointer whitespace-nowrap shrink-0 border-2 border-stone-950 badge-sticker"
              >
                <Sparkles className="w-4 h-4 text-stone-950" />
                <span>Build Package</span>
              </button>
            </div>

          </div>

          {/* Preferences Quick Bar */}
          <div className="mt-3 pt-2.5 border-t border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs text-stone-600 px-1">
            
            {/* Pace Selector */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-bold text-stone-900">Pace:</span>
              {['Relaxed (1-2 main sights/day)', 'Moderate (3-4 sights/day)', 'High Energy (5+ sights/day)'].map(p => (
                <button
                  key={p}
                  type="button"
                  onClick={() => setTravelPace(p)}
                  className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition-all cursor-pointer ${
                    travelPace === p 
                      ? 'bg-stone-950 text-white shadow-xs' 
                      : 'bg-stone-100 hover:bg-stone-200 text-stone-800 border border-stone-200'
                  }`}
                >
                  {p.split(' ')[0]}
                </button>
              ))}
            </div>

            {/* Party & Travelers */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-stone-900">Travelers:</span>
                <select
                  value={guests}
                  onChange={e => setGuests(Number(e.target.value))}
                  className="bg-stone-100 rounded-lg px-2 py-1 text-[11px] font-bold text-stone-900 border border-stone-200 focus:outline-hidden cursor-pointer"
                >
                  <option value={1}>1 Solo</option>
                  <option value={2}>2 People</option>
                  <option value={3}>3 People</option>
                  <option value={4}>4 People</option>
                  <option value={6}>6+ Group</option>
                </select>
              </div>

              <div className="flex items-center gap-1.5">
                <span className="font-bold text-stone-900">Type:</span>
                <select
                  value={partyType}
                  onChange={e => setPartyType(e.target.value)}
                  className="bg-stone-100 rounded-lg px-2.5 py-1 text-[11px] font-bold text-stone-900 border border-stone-200 focus:outline-hidden cursor-pointer"
                >
                  <option value="Solo Traveler">Solo</option>
                  <option value="Couple">Couple</option>
                  <option value="Friends Group">Friends</option>
                  <option value="Family with Kids">Family</option>
                  <option value="Digital Nomad">Nomad</option>
                </select>
              </div>
            </div>
          </div>

        </form>

      </div>

    </div>
  );
};
