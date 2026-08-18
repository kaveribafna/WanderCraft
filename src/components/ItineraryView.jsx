import React, { useState } from 'react';
import { 
  Clock, 
  MapPin, 
  DollarSign, 
  CheckCircle2, 
  Circle, 
  Sparkles, 
  Ticket, 
  Footprints, 
  ArrowRightLeft, 
  Info,
  CalendarCheck,
  ChevronDown,
  ChevronUp,
  Plus,
  Zap,
  Flame,
  Camera,
  Compass
} from 'lucide-react';

export const ItineraryView = ({
  trip,
  onUpdateTrip
}) => {
  const [selectedDayNumber, setSelectedDayNumber] = useState(1);
  const [expandedActivityId, setExpandedActivityId] = useState(null);

  const currentDay = trip.itinerary.find(d => d.dayNumber === selectedDayNumber) || trip.itinerary[0];

  const toggleActivityCompletion = (dayNum, actId) => {
    const updated = { ...trip };
    const day = updated.itinerary.find(d => d.dayNumber === dayNum);
    if (day) {
      const act = day.activities.find(a => a.id === actId);
      if (act) {
        act.completed = !act.completed;
        onUpdateTrip(updated);
      }
    }
  };

  const swapWithAlternative = (dayNum, actId, altId) => {
    const updated = { ...trip };
    const day = updated.itinerary.find(d => d.dayNumber === dayNum);
    if (day) {
      const actIdx = day.activities.findIndex(a => a.id === actId);
      if (actIdx !== -1) {
        const currentAct = day.activities[actIdx];
        const alt = currentAct.alternatives?.find(al => al.id === altId);
        if (alt) {
          const originalTitle = currentAct.title;
          const originalDesc = currentAct.description;
          currentAct.title = alt.title;
          currentAct.description = alt.description;
          currentAct.estimatedCost = Math.max(0, currentAct.estimatedCost + alt.costDifference);
          alt.title = originalTitle;
          alt.description = originalDesc;
          alt.costDifference = -alt.costDifference;
          onUpdateTrip(updated);
        }
      }
    }
  };

  const getSlotBadge = (slot) => {
    switch (slot) {
      case 'Morning': return 'bg-amber-100 text-amber-950 border-amber-300';
      case 'Midday': return 'bg-sky-100 text-sky-950 border-sky-300';
      case 'Afternoon': return 'bg-emerald-100 text-emerald-950 border-emerald-300';
      case 'Evening': return 'bg-rose-100 text-rose-950 border-rose-300';
      case 'Night': return 'bg-purple-100 text-purple-950 border-purple-300';
      default: return 'bg-stone-100 text-stone-900 border-stone-300';
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8 select-none">
      
      {/* Day Selector Pills Bar */}
      <div className="mb-6 overflow-x-auto pb-2">
        <div className="flex items-center gap-2.5 min-w-max">
          {trip.itinerary.map(day => {
            const isSelected = day.dayNumber === selectedDayNumber;
            const completedCount = day.activities.filter(a => a.completed).length;
            const totalCount = day.activities.length;

            return (
              <button
                key={day.dayNumber}
                onClick={() => setSelectedDayNumber(day.dayNumber)}
                className={`px-4 py-3 rounded-2xl border-2 text-left transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-stone-950 text-white border-stone-950 shadow-lg scale-102 -translate-y-0.5'
                    : 'bg-white border-stone-900/30 hover:border-stone-900 text-stone-700 hover:text-stone-950 shadow-xs'
                }`}
              >
                <div className="flex items-center justify-between gap-3 mb-1">
                  <span className={`text-xs font-black uppercase tracking-wider font-tech ${isSelected ? 'text-amber-400' : 'text-stone-700'}`}>
                    ⚡ Day {day.dayNumber}
                  </span>
                  <span className={`text-[10px] font-mono font-black px-1.5 py-0.5 rounded ${
                    isSelected ? 'bg-stone-800 text-white' : 'bg-stone-100 text-stone-800'
                  }`}>
                    {completedCount}/{totalCount}
                  </span>
                </div>
                <div className={`text-xs font-black truncate max-w-[150px] font-display ${isSelected ? 'text-white' : 'text-stone-950'}`}>
                  {day.neighborhoodCluster.split('&')[0]}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Selected Day Header Card */}
      {currentDay && (
        <div className="bg-white border-2 border-stone-900 rounded-3xl p-6 sm:p-7 mb-6 shadow-md badge-sticker">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-3.5 py-1 rounded-full bg-amber-400 text-stone-950 text-xs font-black uppercase tracking-wider font-tech shadow-xs border border-amber-300">
                  Day {currentDay.dayNumber} of {trip.totalDays}
                </span>
                <span className="text-xs text-stone-600 font-bold font-tech">
                  {currentDay.date}
                </span>
              </div>
              
              <h2 className="text-2xl sm:text-4xl font-black text-stone-950 font-display tracking-tight leading-tight">
                {currentDay.title}
              </h2>
              
              <p className="text-xs sm:text-sm text-stone-700 mt-1.5 font-medium leading-relaxed">
                <strong className="text-stone-950 font-black">Focus: </strong>
                {currentDay.theme}
              </p>
            </div>

            {/* Daily Metrics */}
            <div className="flex items-center gap-3 shrink-0">
              <div className="px-4 py-3 bg-[#FAF7F2] border-2 border-stone-900 rounded-2xl text-right shadow-xs badge-sticker">
                <span className="text-[10px] text-stone-500 uppercase tracking-wider font-tech font-black block">
                  Walking Distance
                </span>
                <div className="flex items-center justify-end gap-1 text-sm font-black font-mono text-amber-900">
                  <Footprints className="w-4 h-4 text-amber-700" />
                  <span>{currentDay.estimatedWalkingKm} km</span>
                </div>
              </div>

              <div className="px-4 py-3 bg-[#FAF7F2] border-2 border-stone-900 rounded-2xl text-right shadow-xs badge-sticker">
                <span className="text-[10px] text-stone-500 uppercase tracking-wider font-tech font-black block">
                  Sector Hub
                </span>
                <span className="text-xs font-black text-sky-900 truncate max-w-[140px] block font-display">
                  {currentDay.neighborhoodCluster.split('/')[0]}
                </span>
              </div>
            </div>
          </div>

          {/* Transit Summary Banner */}
          <div className="mt-4 pt-3.5 border-t border-stone-200 flex items-center gap-2.5 text-xs text-stone-700 font-medium">
            <span className="px-2.5 py-0.5 rounded-md bg-stone-950 text-white font-black text-[10px] uppercase font-tech shrink-0">
              Atlas Route Strategy
            </span>
            <span className="truncate">{currentDay.transitSummary}</span>
          </div>
        </div>
      )}

      {/* Activity Timeline List */}
      <div className="space-y-4">
        {currentDay?.activities.map((activity) => {
          const isExpanded = expandedActivityId === activity.id;

          return (
            <div
              key={activity.id}
              className={`bg-white border-2 rounded-3xl p-5 sm:p-6 transition-all duration-200 shadow-xs ${
                activity.completed
                  ? 'border-emerald-400 bg-emerald-50/40 opacity-80'
                  : 'border-stone-900 hover:border-amber-600 hover:shadow-lg badge-sticker'
              }`}
            >
              <div className="flex items-start gap-3.5 sm:gap-4">
                
                {/* Complete Toggle Button */}
                <button
                  onClick={() => toggleActivityCompletion(currentDay.dayNumber, activity.id)}
                  className="mt-1 text-stone-400 hover:text-emerald-700 transition-colors shrink-0 cursor-pointer"
                  title="Mark activity completed"
                >
                  {activity.completed ? (
                    <CheckCircle2 className="w-6 h-6 text-emerald-700 fill-emerald-100" />
                  ) : (
                    <Circle className="w-6 h-6 hover:text-amber-700" />
                  )}
                </button>

                {/* Main Content Area */}
                <div className="flex-1 min-w-0">
                  
                  {/* Top Badges Row */}
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className={`px-3 py-1 rounded-xl text-xs font-black border font-tech ${getSlotBadge(activity.timeSlot)}`}>
                      {activity.timeSlot} {activity.startTime ? `· ${activity.startTime}` : ''}
                    </span>

                    <span className="px-2.5 py-0.5 rounded-xl text-[10px] bg-stone-100 text-stone-800 font-bold border border-stone-200">
                      {activity.category}
                    </span>

                    {activity.bookingRequired && (
                      <span className="px-2.5 py-0.5 rounded-xl text-[10px] bg-amber-200 text-stone-950 border border-stone-900 font-black flex items-center gap-1 font-tech">
                        <Ticket className="w-3 h-3 text-stone-950" />
                        <span>Booking Needed</span>
                      </span>
                    )}

                    <span className="ml-auto text-sm font-mono font-black text-stone-950">
                      {activity.estimatedCost > 0 ? `${trip.currency} $${activity.estimatedCost}` : 'Free Entry'}
                    </span>
                  </div>

                  {/* Activity Title */}
                  <h3 className={`text-base sm:text-xl font-black text-stone-950 font-display ${activity.completed ? 'line-through text-stone-400' : ''}`}>
                    {activity.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-stone-700 mt-1.5 leading-relaxed font-medium">
                    {activity.description}
                  </p>

                  {/* Secondary Metadata Info */}
                  <div className="flex flex-wrap items-center gap-3 sm:gap-4 mt-3.5 text-xs text-stone-600">
                    <div className="flex items-center gap-1.5 text-stone-900 font-bold">
                      <MapPin className="w-4 h-4 text-amber-700 shrink-0" />
                      <span className="truncate max-w-[220px]">{activity.location}</span>
                    </div>

                    <div className="flex items-center gap-1 font-semibold">
                      <Clock className="w-4 h-4 text-stone-400 shrink-0" />
                      <span>{activity.durationMinutes} mins</span>
                    </div>

                    {activity.crowdTip && (
                      <div className="flex items-center gap-1.5 text-amber-950 text-xs bg-amber-100/90 px-3 py-1 rounded-xl border border-amber-300 font-semibold">
                        <Sparkles className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                        <span>Tip: {activity.crowdTip}</span>
                      </div>
                    )}
                  </div>

                  {/* Alternatives & Swaps Section */}
                  {activity.alternatives && activity.alternatives.length > 0 && (
                    <div className="mt-4 pt-3.5 border-t border-stone-200">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-black uppercase tracking-wider text-stone-600 font-tech">
                          AI Backup Alternatives
                        </span>
                        <button
                          onClick={() => setExpandedActivityId(isExpanded ? null : activity.id)}
                          className="text-xs text-amber-900 hover:text-amber-950 flex items-center gap-1 font-black cursor-pointer"
                        >
                          <span>{isExpanded ? 'Hide Alternative Swaps' : `${activity.alternatives.length} Swap Available`}</span>
                          {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                        </button>
                      </div>

                      {isExpanded && (
                        <div className="mt-2.5 space-y-2.5">
                          {activity.alternatives.map(alt => (
                            <div
                              key={alt.id}
                              className="bg-[#FAF7F2] border border-stone-300 rounded-2xl p-3.5 flex items-center justify-between gap-3 shadow-xs"
                            >
                              <div>
                                <div className="text-xs font-black text-stone-950 font-display">
                                  {alt.title}
                                </div>
                                <div className="text-[11px] text-stone-700 mt-0.5">
                                  {alt.description}
                                </div>
                                <div className="text-[10px] text-amber-900 font-bold mt-1">
                                  Reason: {alt.whySwap}
                                </div>
                              </div>

                              <button
                                onClick={() => swapWithAlternative(currentDay.dayNumber, activity.id, alt.id)}
                                className="px-3.5 py-1.5 rounded-xl bg-stone-950 text-white text-xs font-extrabold hover:bg-amber-800 transition-colors flex items-center gap-1 whitespace-nowrap shrink-0 cursor-pointer shadow-xs"
                              >
                                <ArrowRightLeft className="w-3.5 h-3.5" />
                                <span>Swap In</span>
                              </button>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}

                </div>

              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
};
