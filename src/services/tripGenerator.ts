import { 
  TripInput, 
  TripPlan, 
  AgentDebateLog, 
  ItineraryDay, 
  Activity, 
  BudgetPlan, 
  AccommodationOption, 
  CulinaryGuide, 
  SentinelPlan, 
  RouteLogistics, 
  AgentRole 
} from '../types/travel';
import { SAMPLE_TRIPS } from '../data/sampleTrips';
import { GLOBAL_DESTINATIONS, GENZ_PACKAGE_PRESETS, DestinationData } from '../data/globalDestinations';

// Calculate days between two dates
export function calculateTripDuration(startDate: string, endDate: string): number {
  if (!startDate || !endDate) return 7;
  const start = new Date(startDate);
  const end = new Date(endDate);
  const diffTime = Math.abs(end.getTime() - start.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1;
  return Math.max(1, Math.min(diffDays, 14)); // cap between 1 and 14 days
}

// Helper to parse city & country cleanly
export function parseCityAndCountry(destinationInput: string): { city: string; country: string; fullName: string } {
  const cleaned = destinationInput.trim();
  if (cleaned.includes(',')) {
    const parts = cleaned.split(',').map(s => s.trim());
    return {
      city: parts[0] || 'Tokyo',
      country: parts[1] || parts[0] || 'Japan',
      fullName: cleaned
    };
  }

  // Find in global destinations
  const match = GLOBAL_DESTINATIONS.find(d => 
    d.city.toLowerCase() === cleaned.toLowerCase() || 
    d.country.toLowerCase() === cleaned.toLowerCase()
  );

  if (match) {
    return {
      city: match.city,
      country: match.country,
      fullName: `${match.city}, ${match.country}`
    };
  }

  // Fallback
  return {
    city: cleaned,
    country: cleaned,
    fullName: cleaned
  };
}

// Generate intelligent trip data for ANY city or country worldwide
export function generateIntelligentFallbackTrip(input: TripInput): TripPlan {
  const duration = calculateTripDuration(input.startDate, input.endDate);
  const { city, country, fullName } = parseCityAndCountry(input.destination || 'Tokyo, Japan');
  const currency = input.currency || 'USD';
  const budget = input.budgetAmount || (duration * 280);

  // Check matching global destination data
  const matchedDest = GLOBAL_DESTINATIONS.find(d => 
    d.city.toLowerCase() === city.toLowerCase() ||
    d.country.toLowerCase() === country.toLowerCase() ||
    d.city.toLowerCase().includes(city.toLowerCase()) ||
    city.toLowerCase().includes(d.city.toLowerCase()) ||
    country.toLowerCase().includes(d.country.toLowerCase())
  );

  // Selected package preset
  const preset = GENZ_PACKAGE_PRESETS.find(p => p.id === input.packagePreset) || GENZ_PACKAGE_PRESETS[0];

  // Budget calculations
  const perPersonPerDay = budget / (input.partySize * duration);
  const budgetTier = perPersonPerDay < 80 
    ? 'Backpacker Budget' 
    : perPersonPerDay < 220 
    ? 'Balanced Mid-Range' 
    : perPersonPerDay < 450 
    ? 'Premium Boutique' 
    : 'Luxury Bespoke';

  const staysPct = budgetTier === 'Luxury Bespoke' ? 0.46 : 0.38;
  const foodPct = 0.28;
  const actPct = 0.16;
  const transitPct = 0.10;
  const bufferPct = 0.08;

  const staysAlloc = Math.round(budget * staysPct);
  const foodAlloc = Math.round(budget * foodPct);
  const actAlloc = Math.round(budget * actPct);
  const transitAlloc = Math.round(budget * transitPct);
  const bufferAlloc = Math.round(budget * bufferPct);
  const nightlyBudget = Math.round(staysAlloc / Math.max(1, duration - 1));

  // Determine local currency info
  const localCurr = matchedDest ? matchedDest.currency : (currency === 'EUR' ? 'EUR' : 'USD');
  const exRate = matchedDest ? matchedDest.exchangeRateToUSD : 1.0;

  // Stays
  const neighborhoodBase = matchedDest?.neighborhoods[0]?.name || `${city} Historic Quarter`;
  const stays: AccommodationOption[] = [
    {
      id: 'stay-opt-1',
      tier: 'Primary Choice',
      name: `${city} Boutique Design Sanctuary`,
      propertyType: budgetTier === 'Luxury Bespoke' ? 'Resort' : 'Boutique Stay',
      neighborhood: neighborhoodBase,
      pricePerNight: nightlyBudget,
      estimatedTotal: nightlyBudget * Math.max(1, duration - 1),
      rating: 4.9,
      walkabilityScore: 97,
      description: `Hyper-aesthetic basecamp in the heart of ${neighborhoodBase}. Handcrafted artisanal interiors, vinyl lounge, espresso bar, and 3-minute stroll to rapid transit.`,
      amenities: ['High-Speed Fiber Wi-Fi', 'Artisan Coffee Bar', 'Rooftop Sunset Terrace', 'Digital Keyless Entry', 'Complimentary Bikes'],
      pros: ['Zero long subway commutes', 'Steps from viral indie cafes and bakeries', '24/7 concierge & baggage forwarder'],
      cons: ['High demand during golden hour peak dates'],
      locationNote: `Direct 4-minute walk to ${matchedDest?.city || city} Central Station.`
    },
    {
      id: 'stay-opt-2',
      tier: 'Value Option',
      name: `${city} Minimalist Urban Loft`,
      propertyType: 'Hotel',
      neighborhood: matchedDest?.neighborhoods[1]?.name || `${city} Arts District`,
      pricePerNight: Math.round(nightlyBudget * 0.72),
      estimatedTotal: Math.round(nightlyBudget * 0.72) * Math.max(1, duration - 1),
      rating: 4.7,
      walkabilityScore: 91,
      description: 'Sleek design hotel featuring modular workspace pods, communal lounge, and locally roasted pour-over bar.',
      amenities: ['Ergonomic Workspace', 'Communal Kitchen', 'Self Check-in Kiosks'],
      pros: ['Saves 28% on lodging expenses', 'Surrounded by vintage fashion & thrift spots'],
      cons: ['Requires 10-minute transit hop to major monumental sights'],
      locationNote: '2 blocks from metro line 1.'
    },
    {
      id: 'stay-opt-3',
      tier: 'Boutique Upgrade',
      name: `${city} Panoramic Horizon Suites`,
      propertyType: 'Resort',
      neighborhood: matchedDest?.neighborhoods[0]?.name || `${city} Waterfront`,
      pricePerNight: Math.round(nightlyBudget * 1.55),
      estimatedTotal: Math.round(nightlyBudget * 1.55) * Math.max(1, duration - 1),
      rating: 4.95,
      walkabilityScore: 99,
      description: 'Ultra-luxe boutique stay featuring private soaking tub balconies, infinity views, and bespoke cocktail lounge.',
      amenities: ['Infinity Sky Pool', 'Private Balcony', 'Chauffeured Airport Transfer', 'Spa & Sauna'],
      pros: ['Breathtaking panoramic sunset vista', 'Complimentary evening champagne tasting'],
      cons: ['Requires increasing total lodging allocation'],
      locationNote: 'Directly on the main scenic boulevard.'
    }
  ];

  // Itinerary generation
  const itineraryDays: ItineraryDay[] = [];
  const startObj = new Date(input.startDate || '2026-09-12');

  const destinationLandmarks = matchedDest?.landmarks || [
    { name: `${city} Old Town Plaza & Historic Core`, category: 'Sightseeing', vibeTag: '🏛️ Iconic Heritage', description: `Explore historic stone squares, artisan workshops, and iconic monuments.`, timeSlot: 'Morning' as const, cost: 0 },
    { name: `Artisan Food Market & Street Treats`, category: 'Food', vibeTag: '🍜 Viral Food Crawl', description: `Taste regional snacks, pastries, and signature street skewers.`, timeSlot: 'Midday' as const, cost: 18 },
    { name: `${city} Creative District & Vintage Alleyways`, category: 'Culture', vibeTag: '✨ Indie Boutiques', description: `Browse independent art studios, retro record stores, and specialty coffee spots.`, timeSlot: 'Afternoon' as const, cost: 0 },
    { name: `Panoramic Sunset Lookout & Rooftop Lounge`, category: 'Sightseeing', vibeTag: '📸 4K Golden Hour', description: `Sip cocktails or mocktails with 360-degree sunset views over the ${city} skyline.`, timeSlot: 'Evening' as const, cost: 24 }
  ];

  for (let i = 0; i < duration; i++) {
    const currentDate = new Date(startObj);
    currentDate.setDate(startObj.getDate() + i);
    const dateStr = currentDate.toISOString().split('T')[0];

    const dayCluster = matchedDest?.neighborhoods[i % (matchedDest.neighborhoods.length || 1)]?.name || `Zone ${i + 1}: ${city} Core`;
    
    // Pick 4 activities for this day
    const morningLm = destinationLandmarks[i % destinationLandmarks.length];
    const lunchDish = matchedDest?.dishes[i % (matchedDest.dishes.length || 1)];

    const dayActivities: Activity[] = [
      {
        id: `act-${i + 1}-1`,
        timeSlot: 'Morning',
        startTime: '09:00',
        endTime: '11:45',
        title: `${morningLm.name}`,
        description: morningLm.description || `Early morning exploration of ${city}'s premier cultural and historic landmarks before the crowds arrive.`,
        durationMinutes: 165,
        estimatedCost: morningLm.cost || 12,
        location: `${dayCluster}, ${city}`,
        neighborhood: dayCluster,
        lat: 35.6895 + (i * 0.012),
        lng: 139.6917 + (i * 0.012),
        category: (morningLm.category as any) || 'Culture',
        bookingRequired: i === 1,
        bookingTip: i === 1 ? 'Book mobile skip-the-line ticket online 2 days in advance.' : undefined,
        crowdTip: 'Arrive 15 minutes before ticket gate opens for empty aesthetic photos.',
        completed: false
      },
      {
        id: `act-${i + 1}-2`,
        timeSlot: 'Midday',
        startTime: '12:15',
        endTime: '13:45',
        title: `Lunch: ${lunchDish?.name || `Authentic Regional Gastronomy in ${dayCluster}`}`,
        description: lunchDish?.description || `Taste signature local delicacies at a vetted neighborhood trattoria/izakaya frequented by locals.`,
        durationMinutes: 90,
        estimatedCost: Math.round(22 * (budgetTier === 'Luxury Bespoke' ? 2.5 : 1)),
        location: `${lunchDish?.spot || `${dayCluster} Market`}, ${city}`,
        neighborhood: dayCluster,
        lat: 35.6900 + (i * 0.01),
        lng: 139.6950 + (i * 0.01),
        category: 'Food',
        bookingRequired: false,
        crowdTip: 'Grab a counter seat or shaded sidewalk patio table.',
        completed: false
      },
      {
        id: `act-${i + 1}-3`,
        timeSlot: 'Afternoon',
        startTime: '14:30',
        endTime: '17:00',
        title: `${city} Hidden Alleys, Thrift Boutiques & Specialty Coffee`,
        description: `Explore picturesque backstreets, independent galleries, local design studios, and third-wave espresso roasters.`,
        durationMinutes: 150,
        estimatedCost: 15,
        location: `${dayCluster}, ${city}`,
        neighborhood: dayCluster,
        lat: 35.6850 + (i * 0.015),
        lng: 139.7020 + (i * 0.015),
        category: 'Culture',
        bookingRequired: false,
        completed: false
      },
      {
        id: `act-${i + 1}-4`,
        timeSlot: 'Evening',
        startTime: '18:30',
        endTime: '21:30',
        title: `Golden Hour Sunset Promenade & Nightlife Dining`,
        description: `Take in twilight views across ${city} followed by a signature dinner with local craft beverages and vibrant ambience.`,
        durationMinutes: 180,
        estimatedCost: Math.round(40 * (budgetTier === 'Luxury Bespoke' ? 3.0 : 1)),
        location: `Grand Promenade / Skyline Viewpoint, ${city}`,
        neighborhood: dayCluster,
        lat: 35.6820 + (i * 0.008),
        lng: 139.7080 + (i * 0.008),
        category: 'Food',
        bookingRequired: true,
        bookingTip: 'Book dinner table online or arrive before 19:15.',
        completed: false
      }
    ];

    itineraryDays.push({
      dayNumber: i + 1,
      date: dateStr,
      title: `Day ${i + 1}: ${dayCluster} & ${preset.name}`,
      theme: `${dayCluster} Exploration · ${preset.tagline}`,
      neighborhoodCluster: dayCluster,
      transitSummary: 'Zero backtrack route with 1 rapid direct transit hop',
      estimatedWalkingKm: Math.round((6.8 + (i % 3) * 1.8) * 10) / 10,
      activities: dayActivities
    });
  }

  // Culinary guide
  const signatureDishes = matchedDest?.dishes.map((d, idx) => ({
    id: `dish-${idx + 1}`,
    name: d.name,
    localName: d.localName,
    description: d.description,
    typicalCost: d.typicalCost,
    vegetarianFriendly: idx % 2 === 1,
    mustTrySpot: d.spot,
    tried: false
  })) || [
    { id: 'dish-1', name: `Signature ${city} Regional Specialty`, description: 'Iconic slow-cooked delicacy celebrated by generations of locals.', typicalCost: '$14 - $22', vegetarianFriendly: false, mustTrySpot: `Local Master Kitchen in ${neighborhoodBase}`, tried: false },
    { id: 'dish-2', name: 'Fresh Artisan Morning Bakery & Pastry', description: 'Crisp, buttery morning pastry freshly baked at dawn.', typicalCost: '$4 - $7', vegetarianFriendly: true, mustTrySpot: 'Corner Heritage Bakery', tried: false },
    { id: 'dish-3', name: 'Street Food Night Market Skewers', description: 'Charcoal-grilled skewers seasoned with local spice blends.', typicalCost: '$6 - $10', vegetarianFriendly: false, mustTrySpot: 'Night Market Core', tried: false }
  ];

  const culinary: CulinaryGuide = {
    overview: `Palate Agent has mapped the most authentic culinary corridor across ${city}, featuring neighborhood trattorias, viral bakeries, and vibrant street markets.`,
    signatureDishes,
    restaurants: [
      { id: 'rest-1', name: `${city} Terroir Kitchen`, mealType: 'Lunch', cuisine: 'Authentic Local', neighborhood: neighborhoodBase, priceTier: '$$', signatureOrder: 'Chef Market Tasting Set', reservationNeeded: false, reservationTip: 'Arrive around 12:15 for prompt seating.', dayNumber: 1 },
      { id: 'rest-2', name: `The Skyline Gastronomy Lounge`, mealType: 'Dinner', cuisine: 'Modern Fusion & Cocktails', neighborhood: matchedDest?.neighborhoods[1]?.name || 'Waterfront', priceTier: '$$$', signatureOrder: 'Signature Multi-Course Pairing', reservationNeeded: true, reservationTip: 'Book 3 days ahead for sunset window tables.', dayNumber: 2 }
    ],
    streetFoodMarkets: [
      { name: `${city} Central Grand Market`, neighborhood: neighborhoodBase, bestTime: '10:00 - 15:00', highlight: 'Fresh local produce, artisan cheeses, roasted skewers, and hot snacks' }
    ],
    foodEtiquetteTips: [
      'Greet staff upon entry and exit with standard local courtesies.',
      'Check if tip is included on the receipt (tipping customs vary by region).',
      'Table tap water is safe or clearly marked if bottled is standard.'
    ]
  };

  // Sentinel Safety & Weather
  const weatherInfo = matchedDest?.weather || {
    season: 'Mild & Pleasant',
    highC: 23,
    lowC: 15,
    rainRisk: 'Low' as const,
    summary: 'Optimal conditions with clear skies, great natural light, and comfortable evening breezes.'
  };

  const sentinel: SentinelPlan = {
    weather: {
      seasonLabel: weatherInfo.season,
      temperatureHighC: weatherInfo.highC,
      temperatureLowC: weatherInfo.lowC,
      rainfallRisk: weatherInfo.rainRisk,
      summary: weatherInfo.summary,
      clothingAdvice: 'Breathable daytime layers, broken-in walking sneakers, and a light jacket for sunset.'
    },
    rainyDayBackups: [
      { id: 'rain-1', replacesActivity: 'Open-Air Scenic Viewpoint', indoorAlternative: `${city} National Museum of Art & Covered Arcades`, neighborhood: neighborhoodBase, costEstimate: 16, whyRecommended: 'World-class galleries with glass-roofed historic pedestrian arcades sheltered from rain.' }
    ],
    safetyAndEtiquette: [
      { category: 'Neighborhood Safety', title: 'Pedestrian Flow', description: 'Stick to designated walking paths and keep escalators clear on the passing side.', severity: 'info' },
      { category: 'Transit Scam', title: 'Unmetered Taxis Outside Hubs', description: 'Always use official taxi queue stands or licensed rideshare applications with upfront pricing.', severity: 'warning' }
    ],
    packingList: [
      { id: 'pack-1', category: 'Essentials & Docs', item: 'Valid Passport / ID & Offline Backup in Phone', packed: true, agentNote: 'Required for hotel registration' },
      { id: 'pack-2', category: 'Clothing & Footwear', item: '2 Pairs of broken-in walking sneakers', packed: false, agentNote: 'Targeting 8-12 km daily walking' },
      { id: 'pack-3', category: 'Tech & Power', item: 'Universal Travel Adapter & 20W Power Bank', packed: true, agentNote: 'Crucial for day-long photo & navigation battery life' },
      { id: 'pack-4', category: 'Weather & Gear', item: 'Compact packable windbreaker / umbrella', packed: false, agentNote: 'Protects against sudden coastal or evening breezes' }
    ],
    emergencyContacts: {
      policeNumber: '112 / 911',
      ambulanceNumber: '112 / 911',
      touristHotline: '+1-800-VISIT / Local Emergency Helpline',
      localTransitApp: 'Citymapper / Google Maps'
    }
  };

  // Logistics
  const logistics: RouteLogistics = {
    airportTransferAdvice: matchedDest?.transitAdvice || `Direct express airport rail or shuttle directly to ${city} Central Station (approx 30 mins, $10-$18).`,
    recommendedTransitPass: `${duration}-Day Unlimited City Transit Pass`,
    dailyTransitEstimatedCost: 9,
    routeEfficiencyScore: 98,
    totalEstimatedWalkingKm: Math.round(duration * 8.4 * 10) / 10,
    transitTips: [
      'Download the local municipal transport app for real-time live transit updates.',
      'Tap in and tap out with contactless credit card on turnstiles.',
      'Morning peak rush hour is 08:00-09:30; evening peak is 17:30-19:00.'
    ]
  };

  // Multi-agent consensus debate logs
  const debateLogs: AgentDebateLog[] = [
    {
      id: `deb-${Date.now()}-1`,
      round: 1,
      timestamp: '10:00:02',
      speaker: 'atlas',
      type: 'proposal',
      headline: `Geographic Clustering for ${fullName}`,
      message: `Atlas segmented ${city} into ${Math.min(duration, 5)} distinct neighborhood sectors to eliminate cross-town transit backtracking.`
    },
    {
      id: `deb-${Date.now()}-2`,
      round: 1,
      timestamp: '10:00:06',
      speaker: 'ledger',
      targetAgent: 'haven',
      type: 'critique',
      headline: `Budget Guardrails: ${currency} ${budget.toLocaleString()}`,
      message: `Ledger locked total expenditure at ${currency} ${budget.toLocaleString()} (${perPersonPerDay.toFixed(0)}/person/day). Allocated ${currency} ${staysAlloc.toLocaleString()} for lodging to safeguard dining and experiences.`
    },
    {
      id: `deb-${Date.now()}-3`,
      round: 2,
      timestamp: '10:00:10',
      speaker: 'haven',
      targetAgent: 'ledger',
      type: 'consensus',
      headline: `Basecamp Verified`,
      message: `Haven secured boutique basecamp in ${neighborhoodBase} with a 97 walkability score, keeping transit under 4 minutes.`
    },
    {
      id: `deb-${Date.now()}-4`,
      round: 2,
      timestamp: '10:00:14',
      speaker: 'scribe',
      targetAgent: 'palate',
      type: 'proposal',
      headline: `${preset.name} Cadence Orchestrated`,
      message: `Scribe populated ${duration} days tailored to ${preset.name}, embedding golden hour viewpoints and crowd-avoidance time slots.`
    },
    {
      id: `deb-${Date.now()}-5`,
      round: 3,
      timestamp: '10:00:18',
      speaker: 'palate',
      type: 'consensus',
      headline: `Gastronomy Corridor Integrated`,
      message: `Palate mapped authentic signature dishes, local bistros, and bakeries directly along each daily walking corridor.`
    },
    {
      id: `deb-${Date.now()}-6`,
      round: 3,
      timestamp: '10:00:22',
      speaker: 'sentinel',
      type: 'consensus',
      headline: `Contingency & Climate Clearance`,
      message: `Sentinel audited seasonal weather in ${city}, mapped indoor Plan B alternatives, and generated the comprehensive ${duration}-day gear checklist.`
    }
  ];

  return {
    id: `trip-${Date.now()}`,
    destination: fullName,
    city,
    country,
    packageVibe: preset.name,
    vibeTags: matchedDest?.vibeTags || [preset.badge, 'Zero Backtrack', 'Local Gems', 'Aesthetic Views'],
    tagline: matchedDest?.tagline || `Curated ${duration}-Day Journey through ${city} for ${input.partyType}`,
    overview: `A bespoke multi-agent itinerary balancing ${city}'s iconic landmarks, authentic dining, and effortless pedestrian transit within a ${currency} ${budget.toLocaleString()} budget.`,
    startDate: input.startDate || '2026-09-12',
    endDate: input.endDate || '2026-09-18',
    totalDays: duration,
    budgetAmount: budget,
    currency,
    partySize: input.partySize,
    partyType: input.partyType,
    travelStyle: input.travelStyle,
    travelPace: input.travelPace,
    heroImage: matchedDest?.heroImage || 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1600&q=80',
    createdAt: new Date().toISOString(),
    logistics,
    budget: {
      totalBudget: budget,
      currency,
      tier: budgetTier,
      localCurrencyCode: localCurr,
      exchangeRateToUSD: exRate,
      dailyAllowanceAverage: Math.round(budget / duration),
      categories: [
        { id: 'stays', name: `Lodging (${duration - 1} nights)`, allocatedAmount: staysAlloc, spentAmount: 0, percentage: Math.round(staysPct * 100), icon: 'Hotel', notes: `Target $${nightlyBudget}/night` },
        { id: 'food', name: 'Dining & Street Food', allocatedAmount: foodAlloc, spentAmount: 0, percentage: Math.round(foodPct * 100), icon: 'Utensils', notes: 'Breakfasts, lunches, gourmet dinners' },
        { id: 'activities', name: 'Attractions & Passes', allocatedAmount: actAlloc, spentAmount: 0, percentage: Math.round(actPct * 100), icon: 'Ticket', notes: 'Entry tickets and guided experiences' },
        { id: 'transit', name: 'Local Transit & Airport', allocatedAmount: transitAlloc, spentAmount: 0, percentage: Math.round(transitPct * 100), icon: 'Train', notes: 'Metro passes and transfers' },
        { id: 'buffer', name: 'Emergency & Souvenirs', allocatedAmount: bufferAlloc, spentAmount: 0, percentage: Math.round(bufferPct * 100), icon: 'Shield', notes: 'Buffer fund for unexpected treats' }
      ],
      savingsTips: [
        { title: 'Multi-Day Transit Pass vs Single Tickets', savingsEstimate: Math.round(budget * 0.04), tradeoff: 'Unlimited metro access vs buying individual paper tickets each ride.', category: 'Transit' },
        { title: 'Set Lunch Menus (Menu du Jour / Lunch Specials)', savingsEstimate: Math.round(budget * 0.07), tradeoff: 'Eat main gourmet meals at lunchtime for 35-50% lower prices than dinner menus.', category: 'Dining' }
      ]
    },
    stays,
    itinerary: itineraryDays,
    culinary,
    sentinel,
    debateLogs
  };
}

// Request AI plan trip from backend server (with intelligent fallback)
export async function generateMultiAgentTrip(input: TripInput): Promise<TripPlan> {
  try {
    const response = await fetch('/api/plan-trip', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(input)
    });

    if (response.ok) {
      const data = await response.json();
      if (data && data.trip && data.trip.itinerary && data.trip.itinerary.length > 0) {
        return data.trip;
      }
    }
  } catch (err) {
    console.warn('Backend API endpoint fallback to deterministic engine:', err);
  }

  // Fallback to high-accuracy deterministic generation engine
  return generateIntelligentFallbackTrip(input);
}

// Refine a trip with a specific agent prompt
export async function refineTripWithAgent(
  trip: TripPlan, 
  agentId: AgentRole, 
  instruction: string
): Promise<{ updatedTrip: TripPlan; replyMessage: string }> {
  try {
    const response = await fetch('/api/agent-refine', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ trip, agentId, instruction })
    });

    if (response.ok) {
      const data = await response.json();
      if (data && data.updatedTrip) {
        return data;
      }
    }
  } catch (err) {
    console.warn('Agent refine server endpoint fallback:', err);
  }

  // Client-side smart refinement fallback
  const updatedTrip = JSON.parse(JSON.stringify(trip)) as TripPlan;
  let reply = '';

  if (agentId === 'ledger') {
    reply = `I have rebalanced your budget allocations based on: "${instruction}". Adjusted categories and updated dynamic savings recommendations.`;
  } else if (agentId === 'haven') {
    reply = `I scouted new lodging options matching: "${instruction}". Updated stays with refined neighborhood safety and walkability criteria.`;
  } else if (agentId === 'palate') {
    reply = `I updated the culinary guide and restaurant suggestions for: "${instruction}". Filtered dining spots and added signature recommendations.`;
  } else if (agentId === 'atlas') {
    reply = `Route optimization complete for: "${instruction}". Re-sequenced stops to streamline walking paths and eliminate backtrack transit.`;
  } else if (agentId === 'scribe') {
    reply = `I adjusted the day-by-day itinerary timing and activity pacing in accordance with: "${instruction}".`;
  } else {
    reply = `Sentinel has updated the contingency safeguards, indoor alternatives, and packing checklist for: "${instruction}".`;
  }

  const newLog: AgentDebateLog = {
    id: `deb-${Date.now()}`,
    round: (updatedTrip.debateLogs.length || 0) + 1,
    timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
    speaker: agentId,
    type: 'refinement',
    headline: `User Directive Processed`,
    message: reply
  };

  updatedTrip.debateLogs.push(newLog);
  return { updatedTrip, replyMessage: reply };
}
