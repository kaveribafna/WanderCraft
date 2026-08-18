import React from 'react';
import { Compass, Sparkles, PlusCircle, Share2, Luggage } from 'lucide-react';

export const Navbar = ({
  activeTab,
  onSelectTab,
  onNewTrip,
  onOpenExport,
  hasTrip
}) => {
  const navItems = [
    { id: 'itinerary', label: 'Itinerary' },
    { id: 'map', label: 'Route Map' },
    { id: 'budget', label: 'Budget' },
    { id: 'stays', label: 'Stays' },
    { id: 'culinary', label: 'Culinary' },
    { id: 'sentinel', label: 'Sentinel & Gear' },
    { id: 'agents', label: 'Agent Room' }
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-stone-200/80 bg-[#FAF7F2]/95 backdrop-blur-md px-4 sm:px-6 shadow-xs">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16">
        
        {/* Brand Zone */}
        <div 
          onClick={onNewTrip}
          className="flex items-center gap-2.5 cursor-pointer select-none group"
        >
          <div className="w-9 h-9 rounded-xl bg-amber-100 border border-amber-300/80 flex items-center justify-center text-amber-700 group-hover:scale-105 transition-transform shadow-xs">
            <Luggage className="w-5 h-5 text-amber-700" />
          </div>
          <span className="text-xl font-extrabold tracking-tight text-stone-900 font-display whitespace-nowrap">
            Wander<span className="text-amber-700 font-serif-accent italic font-normal text-2xl ml-0.5">Craft</span>
          </span>
        </div>

        {/* Navigation Links Zone */}
        {hasTrip && (
          <nav className="hidden md:flex items-center gap-1 bg-stone-100/90 p-1 rounded-xl border border-stone-200">
            {navItems.slice(0, 5).map(item => (
              <button
                key={item.id}
                onClick={() => onSelectTab(item.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap shrink-0 transition-all font-display ${
                  activeTab === item.id
                    ? 'bg-white text-amber-900 shadow-xs border border-stone-200/60'
                    : 'text-stone-600 hover:text-stone-950 hover:bg-stone-200/50'
                }`}
              >
                {item.label}
              </button>
            ))}
            
            {/* Overflow nav items */}
            {navItems.slice(5).map(item => (
              <button
                key={item.id}
                onClick={() => onSelectTab(item.id)}
                className={`hidden lg:block px-3.5 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap shrink-0 transition-all font-display ${
                  activeTab === item.id
                    ? 'bg-white text-amber-900 shadow-xs border border-stone-200/60'
                    : 'text-stone-600 hover:text-stone-950 hover:bg-stone-200/50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        )}

        {/* Primary Action Zone */}
        <div className="flex items-center gap-2.5">
          {hasTrip && (
            <button
              onClick={onOpenExport}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl border border-stone-300 bg-white text-stone-700 text-xs font-bold hover:bg-stone-50 hover:border-stone-400 transition-colors whitespace-nowrap shrink-0 shadow-xs cursor-pointer"
              title="Export itinerary to PDF, Markdown or JSON"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>Export</span>
            </button>
          )}

          <button
            onClick={onNewTrip}
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-xl bg-gradient-to-r from-amber-600 to-amber-700 text-white text-xs font-bold hover:from-amber-700 hover:to-amber-800 transition-all shadow-xs whitespace-nowrap shrink-0 cursor-pointer"
          >
            <PlusCircle className="w-3.5 h-3.5" />
            <span>{hasTrip ? 'New Trip' : 'Plan Trip'}</span>
          </button>
        </div>

      </div>
    </header>
  );
};
