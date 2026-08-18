import React, { useState } from 'react';
import { 
  Utensils, 
  Sparkles, 
  MapPin, 
  DollarSign, 
  CheckCircle2, 
  Circle, 
  AlertTriangle, 
  Coffee, 
  Store,
  BookOpen
} from 'lucide-react';

export const CulinaryView = ({
  trip,
  onUpdateTrip
}) => {
  const [activeCategory, setActiveCategory] = useState('dishes');

  const toggleDishTasted = (dishId) => {
    const updated = { ...trip };
    const dish = updated.culinary.signatureDishes.find(d => d.id === dishId);
    if (dish) {
      dish.tried = !dish.tried;
      onUpdateTrip(updated);
    }
  };

  const signatureDishes = trip.culinary.signatureDishes || [];
  const restaurants = trip.culinary.restaurants || [];
  const streetMarkets = trip.culinary.streetFoodMarkets || [];
  const etiquetteTips = trip.culinary.foodEtiquetteTips || [];

  const tastedCount = signatureDishes.filter(d => d.tried).length;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-8">
      
      {/* Header Banner from Palate Agent */}
      <div className="bg-white border border-stone-200/90 rounded-3xl p-6 sm:p-7 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="px-3 py-0.5 rounded-full bg-rose-100 text-rose-900 text-xs font-extrabold font-tech uppercase tracking-wider">
                Curated by Palate Agent
              </span>
              <span className="text-xs text-stone-500 font-semibold">
                Local Gastronomic Compass
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 font-display">
              Gastronomy & Regional Culinary Compass
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 mt-1 font-medium">
              {trip.culinary.overview || 'Neighborhood trattorias, street food stalls, and iconic regional dishes tailored along your walking route.'}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="px-4 py-2.5 bg-[#FAF7F2] border border-stone-200 rounded-2xl text-right shadow-xs">
              <span className="text-[10px] text-stone-500 uppercase tracking-wider font-tech font-bold block">Dishes Checked Off</span>
              <span className="text-sm font-extrabold font-mono text-amber-800">
                {tastedCount} / {signatureDishes.length} Tasted
              </span>
            </div>
          </div>
        </div>

        {/* Local Dining Etiquette Alert */}
        {etiquetteTips.length > 0 && (
          <div className="mt-4 pt-4 border-t border-stone-100 flex items-start gap-2.5 text-xs text-stone-700">
            <BookOpen className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-amber-900 mr-1">Palate's Local Etiquette Guide:</span>
              <span className="font-medium">{etiquetteTips.join(' · ')}</span>
            </div>
          </div>
        )}
      </div>

      {/* Category Filter Tabs */}
      <div className="flex items-center gap-2.5 border-b border-stone-200 pb-3">
        <button
          onClick={() => setActiveCategory('dishes')}
          className={`px-4 py-2 rounded-xl text-xs font-bold font-display transition-all cursor-pointer ${
            activeCategory === 'dishes'
              ? 'bg-amber-600 text-white shadow-xs'
              : 'bg-white text-stone-600 hover:text-stone-900 border border-stone-200 shadow-xs'
          }`}
        >
          Must-Try Regional Dishes ({signatureDishes.length})
        </button>

        <button
          onClick={() => setActiveCategory('spots')}
          className={`px-4 py-2 rounded-xl text-xs font-bold font-display transition-all cursor-pointer ${
            activeCategory === 'spots'
              ? 'bg-amber-600 text-white shadow-xs'
              : 'bg-white text-stone-600 hover:text-stone-900 border border-stone-200 shadow-xs'
          }`}
        >
          Recommended Dining Spots ({restaurants.length})
        </button>

        <button
          onClick={() => setActiveCategory('markets')}
          className={`px-4 py-2 rounded-xl text-xs font-bold font-display transition-all cursor-pointer ${
            activeCategory === 'markets'
              ? 'bg-amber-600 text-white shadow-xs'
              : 'bg-white text-stone-600 hover:text-stone-900 border border-stone-200 shadow-xs'
          }`}
        >
          Street Markets ({streetMarkets.length})
        </button>
      </div>

      {/* 1. Regional Dishes Tab */}
      {activeCategory === 'dishes' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {signatureDishes.map((dish) => (
            <div
              key={dish.id}
              className={`bg-white border rounded-2xl p-5 flex flex-col justify-between transition-all ${
                dish.tried
                  ? 'border-emerald-300 bg-emerald-50/40'
                  : 'border-stone-200/90 hover:border-stone-300 shadow-xs hover:shadow-md'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-rose-800 bg-rose-50 px-2 py-0.5 rounded-md border border-rose-200 font-tech">
                    {dish.vegetarianFriendly ? 'Vegetarian Friendly' : 'Signature Specialty'}
                  </span>
                  <button
                    onClick={() => toggleDishTasted(dish.id)}
                    className="text-stone-400 hover:text-emerald-600 transition-colors cursor-pointer"
                    title="Toggle tasted"
                  >
                    {dish.tried ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    ) : (
                      <Circle className="w-5 h-5" />
                    )}
                  </button>
                </div>

                <h3 className={`text-base font-extrabold text-stone-900 font-display ${dish.tried ? 'line-through text-stone-400' : ''}`}>
                  {dish.name}
                </h3>
                {dish.localName && (
                  <span className="text-[11px] font-medium text-stone-500 italic block">{dish.localName}</span>
                )}
                <p className="text-xs text-stone-600 mt-1.5 leading-relaxed font-medium">
                  {dish.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-stone-100">
                <span className="text-[10px] text-stone-500 uppercase font-tech font-bold block">Where to get it:</span>
                <span className="text-xs font-bold text-stone-800 truncate block mt-0.5">
                  {dish.mustTrySpot}
                </span>
                <div className="flex items-center justify-between text-xs mt-2 font-mono">
                  <span className="text-stone-500 font-medium">Typical price:</span>
                  <span className="font-extrabold text-amber-800">{dish.typicalCost}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* 2. Recommended Dining Spots */}
      {activeCategory === 'spots' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {restaurants.map((spot) => (
            <div
              key={spot.id}
              className="bg-white border border-stone-200/90 hover:border-stone-300 rounded-3xl p-6 shadow-xs hover:shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-extrabold text-rose-700 uppercase tracking-wider font-tech">
                    {spot.cuisine} · {spot.mealType}
                  </span>
                  <span className="text-xs font-mono font-bold text-stone-500">
                    {spot.priceTier}
                  </span>
                </div>

                <h3 className="text-base font-extrabold text-stone-900 font-display">
                  {spot.name}
                </h3>
                
                <div className="flex items-center gap-1.5 text-xs text-stone-600 mt-1 font-medium">
                  <MapPin className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                  <span>{spot.neighborhood}</span>
                </div>

                <p className="text-xs text-stone-600 mt-2.5 leading-relaxed font-medium">
                  {spot.reservationTip || 'Walk-in or arrive early for table seating.'}
                </p>
              </div>

              <div className="mt-4 pt-3.5 border-t border-stone-100 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-stone-500 font-medium">Signature order:</span>
                  <span className="font-bold text-amber-900 truncate max-w-[170px]">{spot.signatureOrder}</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-stone-500 font-medium">Reservations:</span>
                  <span className={`px-2.5 py-0.5 rounded-lg text-[10px] font-bold font-tech ${
                    spot.reservationNeeded ? 'bg-amber-100 text-amber-900' : 'bg-stone-100 text-stone-700'
                  }`}>
                    {spot.reservationNeeded ? 'Recommended' : 'Walk-in OK'}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* 3. Street Markets */}
      {activeCategory === 'markets' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {streetMarkets.map((market, idx) => (
            <div
              key={idx}
              className="bg-white border border-stone-200/90 rounded-3xl p-6 shadow-xs flex items-start gap-4"
            >
              <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200/80 flex items-center justify-center text-amber-700 shrink-0 shadow-xs">
                <Store className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-extrabold text-stone-900 font-display">
                    {market.name}
                  </h3>
                  <span className="text-xs font-mono font-bold text-stone-500 bg-stone-100 px-2 py-0.5 rounded-md">
                    {market.bestTime}
                  </span>
                </div>
                <div className="flex items-center gap-1 text-xs text-stone-500 mt-0.5">
                  <MapPin className="w-3 h-3 text-amber-600" />
                  <span>{market.neighborhood}</span>
                </div>
                <p className="text-xs text-stone-600 mt-2 font-medium">
                  {market.highlight}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

    </div>
  );
};
