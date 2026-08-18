import React, { useState, useRef, useEffect } from 'react';
import { SAMPLE_TRIPS } from '../data/sampleTrips';
import { GLOBAL_DESTINATIONS, GENZ_PACKAGE_PRESETS } from '../data/globalDestinations';
import { 
  Sparkles, 
  MapPin, 
  DollarSign, 
  Calendar, 
  Users, 
  Compass, 
  Zap, 
  Utensils, 
  Check,
  ChevronRight,
  ArrowRight,
  Globe2,
  Flame,
  Camera
} from 'lucide-react';

const CURRENCIES = [
  { code: 'USD', symbol: '$' },
  { code: 'EUR', symbol: '€' },
  { code: 'GBP', symbol: '£' },
  { code: 'JPY', symbol: '¥' },
  { code: 'CAD', symbol: 'C$' },
  { code: 'AUD', symbol: 'A$' }
];

const PARTY_TYPES = [
  'Solo Traveler',
  'Couple',
  'Family with Kids',
  'Friends Group',
  'Digital Nomad'
];

const DIETARY_OPTIONS = [
  'Local Specialties & Street Food',
  'Vegetarian Friendly',
  'Vegan Options',
  'Halal Friendly',
  'Gluten-Free',
  'Seafood Lover',
  'Third-Wave Coffee & Bakery'
];

export const TripForm = ({
  onSubmit,
  onSelectSample,
  isLoading
}) => {
  const today = new Date();
  const defaultStart = new Date(today);
  defaultStart.setDate(today.getDate() + 25);
  const defaultEnd = new Date(defaultStart);
  defaultEnd.setDate(defaultStart.getDate() + 6);

  const [destination, setDestination] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedPreset, setSelectedPreset] = useState('tiktok-aesthetic');
  const [budgetAmount, setBudgetAmount] = useState(2200);
  const [currency, setCurrency] = useState('USD');
  const [startDate, setStartDate] = useState(defaultStart.toISOString().split('T')[0]);
  const [endDate, setEndDate] = useState(defaultEnd.toISOString().split('T')[0]);
  const [partySize, setPartySize] = useState(2);
  const [partyType, setPartyType] = useState('Couple');
  const [travelStyle, setTravelStyle] = useState('Balanced');
  const [travelPace, setTravelPace] = useState('Moderate (3-4 sights/day)');
  const [dietaryPreferences, setDietaryPreferences] = useState(['Local Specialties & Street Food']);
  const [mustSeeSpots, setMustSeeSpots] = useState('');

  const searchBoxRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (searchBoxRef.current && !searchBoxRef.current.contains(e.target)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  // Filter global destination suggestions
  const filteredDestinations = destination.trim()
    ? GLOBAL_DESTINATIONS.filter(d => 
        d.city.toLowerCase().includes(destination.toLowerCase()) ||
        d.country.toLowerCase().includes(destination.toLowerCase())
      )
    : GLOBAL_DESTINATIONS.slice(0, 8);

  const handleSelectDest = (city, country) => {
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

  // Calculate day count
  const start = new Date(startDate);
  const end = new Date(endDate);
  const diffDays = Math.max(1, Math.ceil(Math.abs(end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)) + 1);

  const toggleDietary = (item) => {
    if (dietaryPreferences.includes(item)) {
      setDietaryPreferences(dietaryPreferences.filter(i => i !== item));
    } else {
      setDietaryPreferences([...dietaryPreferences, item]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!destination.trim()) return;

    onSubmit({
      destination: destination.trim(),
      budgetAmount,
      currency,
      startDate,
      endDate,
      partySize,
      partyType,
      travelStyle,
      travelPace,
      packagePreset: selectedPreset,
      dietaryPreferences,
      specialInterests: [travelStyle],
      mustSeeSpots: mustSeeSpots.trim()
    });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12 select-none">
      
      {/* Hero Headline */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-stone-950 text-white text-xs font-black uppercase tracking-wider mb-4 font-tech badge-sticker">
          <Globe2 className="w-4 h-4 text-amber-400" />
          <span>Worldwide Custom Engine</span>
        </div>
        
        <h1 className="text-3xl sm:text-5xl font-black text-stone-950 tracking-tight font-display mb-3">
          Design your custom journey.<br />
          <span className="text-amber-900 font-serif-accent italic font-normal text-4xl sm:text-6xl">
            Any city, country & curated vibe.
          </span>
        </h1>
        <p className="text-sm sm:text-base text-stone-700 max-w-2xl mx-auto leading-relaxed font-medium">
          6 autonomous co-pilots synthesize routes, check weather, lock budgets, and map food corridors in seconds.
        </p>
      </div>

      {/* Main Form Card with Bold Borders */}
      <form onSubmit={handleSubmit} className="bg-white border-2 border-stone-900 rounded-3xl p-6 sm:p-9 shadow-xl mb-12 badge-sticker">
        <div className="space-y-6">
          
          {/* Section 1: Global Destination Search */}
          <div ref={searchBoxRef} className="relative">
            <label className="block text-xs font-black uppercase tracking-wider text-stone-900 mb-2 font-tech flex items-center justify-between">
              <span>1. Enter Any City or Country in the World</span>
              <span className="text-amber-800 text-[10px] lowercase font-semibold">autocomplete active</span>
            </label>
            
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-stone-400">
                <MapPin className="w-5 h-5 text-amber-700" />
              </div>
              <input
                type="text"
                required
                value={destination}
                onFocus={() => setShowSuggestions(true)}
                onChange={e => {
                  setDestination(e.target.value);
                  setShowSuggestions(true);
                }}
                placeholder="e.g. Tokyo, Rome, Bali, Paris, Cape Town, Zurich..."
                className="w-full pl-11 pr-4 py-3.5 bg-[#FAF7F2] border-2 border-stone-900 rounded-2xl text-stone-950 placeholder-stone-400 text-base font-extrabold focus:outline-hidden focus:bg-white transition-colors"
              />
            </div>

            {/* Suggestions Dropdown */}
            {showSuggestions && (
              <div className="absolute left-0 right-0 top-full mt-2 bg-white border-2 border-stone-900 rounded-2xl shadow-2xl overflow-hidden z-50 max-h-72 overflow-y-auto">
                <div className="p-2.5 bg-stone-100 border-b border-stone-200 flex items-center justify-between text-[11px] font-bold text-stone-700 font-tech">
                  <span>WORLDWIDE CITIES & COUNTRIES</span>
                  <span className="text-[10px] text-amber-800">Select or keep typing freely</span>
                </div>

                {filteredDestinations.map((d, idx) => (
                  <div
                    key={idx}
                    onClick={() => handleSelectDest(d.city, d.country)}
                    className="px-4 py-3 hover:bg-amber-50 cursor-pointer flex items-center justify-between border-b border-stone-100 last:border-0 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <MapPin className="w-4 h-4 text-amber-700 shrink-0" />
                      <div>
                        <span className="font-black text-stone-950 text-sm font-display">{d.city}</span>
                        <span className="text-xs text-stone-600 font-medium ml-1">, {d.country}</span>
                      </div>
                    </div>
                    <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-stone-100 font-tech font-extrabold text-stone-800">
                      {d.vibeTags[0] || 'Vetted'}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {/* Quick Popular Pills */}
            <div className="flex flex-wrap items-center gap-1.5 mt-3">
              <span className="text-[11px] text-stone-600 font-extrabold font-tech mr-1">Trending:</span>
              {['Tokyo, Japan', 'Amalfi Coast, Italy', 'Bali, Indonesia', 'Paris, France', 'Rome, Italy', 'Seoul, South Korea'].map(dest => (
                <button
                  key={dest}
                  type="button"
                  onClick={() => setDestination(dest)}
                  className="px-3 py-1 rounded-xl text-xs bg-[#FAF7F2] hover:bg-amber-100 text-stone-900 border border-stone-300 transition-colors whitespace-nowrap font-bold cursor-pointer"
                >
                  {dest.split(',')[0]}
                </button>
              ))}
            </div>
          </div>

          {/* Section 2: Vibe & Package Presets (Gen-Z) */}
          <div className="pt-2">
            <label className="block text-xs font-black uppercase tracking-wider text-stone-900 mb-2 font-tech flex items-center gap-1.5">
              <Flame className="w-4 h-4 text-amber-600 fill-amber-500" />
              <span>2. Select Trip Package & Vibe</span>
            </label>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
              {GENZ_PACKAGE_PRESETS.map((preset) => {
                const isSelected = selectedPreset === preset.id;
                return (
                  <div
                    key={preset.id}
                    onClick={() => handlePresetSelect(preset.id)}
                    className={`p-3 rounded-2xl cursor-pointer transition-all duration-200 border-2 select-none ${
                      isSelected
                        ? 'bg-stone-950 text-white border-stone-950 shadow-md scale-102'
                        : 'bg-[#FAF7F2] hover:bg-white text-stone-900 border-stone-300'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xl">{preset.emoji}</span>
                      <span className={`text-[9px] font-black px-2 py-0.5 rounded-full font-tech tracking-wider uppercase ${
                        isSelected ? 'bg-amber-400 text-stone-950' : 'bg-stone-200 text-stone-800'
                      }`}>
                        {preset.badge.split(' ')[0]}
                      </span>
                    </div>
                    <h4 className="font-black text-xs font-display truncate">
                      {preset.name}
                    </h4>
                    <p className={`text-[10px] mt-0.5 line-clamp-1 ${isSelected ? 'text-stone-300' : 'text-stone-600'}`}>
                      {preset.tagline}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Section 3: Budget & Currency */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="sm:col-span-2">
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-black uppercase tracking-wider text-stone-900 font-tech">
                  3. Total Trip Budget
                </label>
                <span className="text-xs font-mono font-black text-emerald-800">
                  {currency} ${budgetAmount.toLocaleString()} (${Math.round(budgetAmount / (partySize * diffDays))}/p/day)
                </span>
              </div>
              <div className="relative flex items-center">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-stone-400">
                  <DollarSign className="w-5 h-5 text-emerald-700" />
                </div>
                <input
                  type="number"
                  min="200"
                  max="100000"
                  step="50"
                  value={budgetAmount}
                  onChange={e => setBudgetAmount(Number(e.target.value))}
                  className="w-full pl-11 pr-4 py-3 bg-[#FAF7F2] border-2 border-stone-900 rounded-2xl text-stone-950 text-base font-mono font-black focus:outline-hidden focus:bg-white transition-colors"
                />
              </div>

              {/* Quick Budget Presets */}
              <div className="flex items-center gap-2 mt-2">
                {[1200, 2200, 4500, 7500].map(val => (
                  <button
                    key={val}
                    type="button"
                    onClick={() => setBudgetAmount(val)}
                    className={`px-3 py-1 rounded-xl text-xs font-mono border transition-colors cursor-pointer ${
                      budgetAmount === val
                        ? 'bg-emerald-200 text-emerald-950 border-emerald-500 font-black'
                        : 'bg-[#FAF7F2] text-stone-700 border-stone-300 hover:text-stone-950'
                    }`}
                  >
                    ${val.toLocaleString()}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-black uppercase tracking-wider text-stone-900 mb-2 font-tech">
                Currency
              </label>
              <select
                value={currency}
                onChange={e => setCurrency(e.target.value)}
                className="w-full py-3.5 px-3.5 bg-[#FAF7F2] border-2 border-stone-900 rounded-2xl text-stone-950 text-sm font-bold focus:outline-hidden cursor-pointer"
              >
                {CURRENCIES.map(c => (
                  <option key={c.code} value={c.code}>
                    {c.code} ({c.symbol})
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Section 4: Dates & Duration */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div>
              <label className="block text-xs font-black uppercase tracking-wider text-stone-900 mb-2 font-tech">
                4. Start Date
              </label>
              <input
                type="date"
                required
                value={startDate}
                onChange={e => setStartDate(e.target.value)}
                className="w-full px-3.5 py-3 bg-[#FAF7F2] border-2 border-stone-900 rounded-2xl text-stone-950 text-sm font-bold focus:outline-hidden"
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-black uppercase tracking-wider text-stone-900 font-tech">
                  End Date
                </label>
                <span className="text-xs font-black px-3 py-0.5 rounded-full bg-amber-300 border border-stone-900 text-stone-950 font-tech badge-sticker">
                  ⚡ {diffDays} DAYS PLAN
                </span>
              </div>
              <input
                type="date"
                required
                value={endDate}
                onChange={e => setEndDate(e.target.value)}
                className="w-full px-3.5 py-3 bg-[#FAF7F2] border-2 border-stone-900 rounded-2xl text-stone-950 text-sm font-bold focus:outline-hidden"
              />
            </div>
          </div>

          {/* Section 5: Party & Style */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div>
              <label className="block text-xs font-black uppercase tracking-wider text-stone-900 mb-2 font-tech">
                Travelers
              </label>
              <select
                value={partySize}
                onChange={e => setPartySize(Number(e.target.value))}
                className="w-full py-3 px-3.5 bg-[#FAF7F2] border-2 border-stone-900 rounded-2xl text-stone-950 text-sm font-bold focus:outline-hidden cursor-pointer"
              >
                <option value={1}>1 Solo Adventurer</option>
                <option value={2}>2 Travelers (Couple / Duo)</option>
                <option value={3}>3 People Group</option>
                <option value={4}>4 People Group</option>
                <option value={6}>6+ Large Group</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-black uppercase tracking-wider text-stone-900 mb-2 font-tech">
                Party Type
              </label>
              <select
                value={partyType}
                onChange={e => setPartyType(e.target.value)}
                className="w-full py-3 px-3.5 bg-[#FAF7F2] border-2 border-stone-900 rounded-2xl text-stone-950 text-sm font-bold focus:outline-hidden cursor-pointer"
              >
                {PARTY_TYPES.map(p => (
                  <option key={p} value={p}>{p}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Section 6: Dietary Preferences */}
          <div className="pt-2">
            <label className="block text-xs font-black uppercase tracking-wider text-stone-900 mb-2 font-tech">
              Culinary Focus (Palate Agent)
            </label>
            <div className="flex flex-wrap gap-2">
              {DIETARY_OPTIONS.map(diet => {
                const isSelected = dietaryPreferences.includes(diet);
                return (
                  <button
                    key={diet}
                    type="button"
                    onClick={() => toggleDietary(diet)}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-extrabold border-2 transition-all flex items-center gap-1.5 cursor-pointer ${
                      isSelected
                        ? 'bg-amber-300 text-stone-950 border-stone-900 shadow-sm'
                        : 'bg-[#FAF7F2] text-stone-700 border-stone-300 hover:border-stone-900 hover:text-stone-950'
                    }`}
                  >
                    {isSelected && <Check className="w-3.5 h-3.5 text-stone-950" />}
                    <span>{diet}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              disabled={isLoading || !destination.trim()}
              className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 hover:from-amber-300 hover:to-amber-400 disabled:opacity-50 text-stone-950 font-black text-base font-display flex items-center justify-center gap-2.5 shadow-xl transition-all cursor-pointer border-2 border-stone-900 badge-sticker"
            >
              <Sparkles className="w-5 h-5 text-stone-950" />
              <span>Synthesize Custom {diffDays}-Day Trip</span>
              <ArrowRight className="w-5 h-5 text-stone-950" />
            </button>
          </div>

        </div>
      </form>

      {/* Instant Curated Sample Trips */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xs font-black uppercase tracking-wider text-stone-900 font-tech flex items-center gap-2">
            <Zap className="w-4 h-4 text-amber-700" />
            <span>Or Explore Instant Pre-Synthesized Itineraries</span>
          </h3>
          <span className="text-xs text-stone-600 font-bold">1-click instant preview</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {SAMPLE_TRIPS.map(trip => (
            <div
              key={trip.id}
              onClick={() => onSelectSample(trip.id)}
              className="group relative overflow-hidden bg-white border-2 border-stone-900 hover:border-amber-600 rounded-2xl p-5 cursor-pointer transition-all hover:shadow-lg badge-sticker"
            >
              <div className="flex items-start justify-between gap-3 mb-2">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-black text-amber-900 font-display">
                      ⚡ {trip.totalDays} DAYS IN {trip.destination.toUpperCase()}
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-stone-100 text-stone-900 font-mono font-black">
                      {trip.currency} ${trip.budgetAmount.toLocaleString()}
                    </span>
                  </div>
                  <h4 className="text-sm font-black text-stone-950 group-hover:text-amber-900 transition-colors font-display">
                    {trip.tagline}
                  </h4>
                </div>
                <div className="w-8 h-8 rounded-full bg-stone-100 border border-stone-900 flex items-center justify-center text-stone-900 group-hover:bg-amber-400 transition-colors shrink-0">
                  <ChevronRight className="w-4 h-4" />
                </div>
              </div>
              <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed font-medium">
                {trip.overview}
              </p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
