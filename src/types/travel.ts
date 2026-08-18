export type AgentRole = 'atlas' | 'ledger' | 'haven' | 'scribe' | 'palate' | 'sentinel';

export interface AgentPersona {
  id: AgentRole;
  name: string;
  codename: string;
  title: string;
  tagline: string;
  color: string;
  accentBg: string;
  borderColor: string;
  badgeColor: string;
  iconName: string;
  specialty: string;
  promptRole: string;
}

export type TravelStyle = 'Balanced' | 'Cultural Immersion' | 'Food & Wine' | 'Adventure & Outdoors' | 'Relaxed Leisure' | 'Photography & Sights' | 'Fast-Paced Explorer';
export type TravelPace = 'Relaxed (1-2 main sights/day)' | 'Moderate (3-4 sights/day)' | 'High Energy (5+ sights/day)';
export type PartyType = 'Solo Traveler' | 'Couple' | 'Family with Kids' | 'Friends Group' | 'Digital Nomad';
export type BudgetTier = 'Backpacker Budget' | 'Balanced Mid-Range' | 'Premium Boutique' | 'Luxury Bespoke';

export interface TripInput {
  destination: string;
  budgetAmount: number;
  currency: string;
  startDate: string;
  endDate: string;
  partySize: number;
  partyType: PartyType;
  travelStyle: TravelStyle;
  travelPace: TravelPace;
  dietaryPreferences: string[];
  specialInterests: string[];
  mustSeeSpots?: string;
  packagePreset?: string;
}

export interface ActivityAlternative {
  id: string;
  title: string;
  description: string;
  costDifference: number;
  category: string;
  whySwap: string;
}

export interface Activity {
  id: string;
  timeSlot: 'Morning' | 'Midday' | 'Afternoon' | 'Evening' | 'Night';
  startTime?: string;
  endTime?: string;
  title: string;
  description: string;
  durationMinutes: number;
  estimatedCost: number;
  location: string;
  neighborhood: string;
  lat: number;
  lng: number;
  category: 'Sightseeing' | 'Culture' | 'Food' | 'Nature' | 'Shopping' | 'Transit' | 'Relaxation' | 'Nightlife';
  bookingRequired: boolean;
  bookingTip?: string;
  crowdTip?: string;
  completed?: boolean;
  notes?: string;
  alternatives?: ActivityAlternative[];
}

export interface ItineraryDay {
  dayNumber: number;
  date: string;
  title: string;
  theme: string;
  neighborhoodCluster: string;
  transitSummary: string;
  estimatedWalkingKm: number;
  activities: Activity[];
}

export interface AccommodationOption {
  id: string;
  tier: 'Primary Choice' | 'Value Option' | 'Boutique Upgrade';
  name: string;
  propertyType: 'Hotel' | 'Boutique Stay' | 'Apartment' | 'Ryokan / Traditional' | 'Resort' | 'Design Hostel';
  neighborhood: string;
  pricePerNight: number;
  estimatedTotal: number;
  rating: number;
  walkabilityScore: number;
  description: string;
  amenities: string[];
  pros: string[];
  cons: string[];
  locationNote: string;
}

export interface BudgetCategory {
  id: string;
  name: string;
  allocatedAmount: number;
  spentAmount: number;
  percentage: number;
  icon: string;
  notes: string;
}

export interface SavingsTip {
  title: string;
  savingsEstimate: number;
  tradeoff: string;
  category: string;
}

export interface BudgetPlan {
  totalBudget: number;
  currency: string;
  tier: BudgetTier;
  categories: BudgetCategory[];
  savingsTips: SavingsTip[];
  localCurrencyCode: string;
  exchangeRateToUSD: number;
  dailyAllowanceAverage: number;
}

export interface SignatureDish {
  id: string;
  name: string;
  localName?: string;
  description: string;
  typicalCost: string;
  vegetarianFriendly: boolean;
  mustTrySpot: string;
  tried?: boolean;
}

export interface RestaurantRecommendation {
  id: string;
  name: string;
  mealType: 'Breakfast' | 'Lunch' | 'Dinner' | 'Coffee & Snack' | 'Cocktails & Night';
  cuisine: string;
  neighborhood: string;
  priceTier: '$' | '$$' | '$$$' | '$$$$';
  signatureOrder: string;
  reservationNeeded: boolean;
  reservationTip: string;
  dayNumber: number;
}

export interface CulinaryGuide {
  overview: string;
  signatureDishes: SignatureDish[];
  restaurants: RestaurantRecommendation[];
  streetFoodMarkets: { name: string; neighborhood: string; bestTime: string; highlight: string }[];
  foodEtiquetteTips: string[];
}

export interface WeatherAdvisory {
  seasonLabel: string;
  temperatureHighC: number;
  temperatureLowC: number;
  rainfallRisk: 'Minimal' | 'Low' | 'Moderate' | 'High';
  summary: string;
  clothingAdvice: string;
}

export interface RainyDayBackup {
  id: string;
  replacesActivity: string;
  indoorAlternative: string;
  neighborhood: string;
  costEstimate: number;
  whyRecommended: string;
}

export interface SafetyEtiquetteNote {
  category: 'Etiquette' | 'Transit Scam' | 'Neighborhood Safety' | 'Money/Tipping' | 'Emergency Info';
  title: string;
  description: string;
  severity: 'info' | 'caution' | 'warning';
}

export interface PackingItem {
  id: string;
  category: 'Essentials & Docs' | 'Clothing & Footwear' | 'Tech & Power' | 'Toiletries & Health' | 'Weather & Gear';
  item: string;
  packed: boolean;
  agentNote?: string;
}

export interface SentinelPlan {
  weather: WeatherAdvisory;
  rainyDayBackups: RainyDayBackup[];
  safetyAndEtiquette: SafetyEtiquetteNote[];
  packingList: PackingItem[];
  emergencyContacts: {
    policeNumber: string;
    ambulanceNumber: string;
    touristHotline: string;
    localTransitApp: string;
  };
}

export interface RouteLogistics {
  airportTransferAdvice: string;
  recommendedTransitPass: string;
  dailyTransitEstimatedCost: number;
  routeEfficiencyScore: number;
  totalEstimatedWalkingKm: number;
  transitTips: string[];
}

export interface AgentDebateLog {
  id: string;
  round: number;
  timestamp: string;
  speaker: AgentRole;
  targetAgent?: AgentRole;
  type: 'proposal' | 'critique' | 'optimization' | 'consensus' | 'risk_flag' | 'refinement';
  headline: string;
  message: string;
}

export interface TripPlan {
  id: string;
  destination: string;
  city?: string;
  country: string;
  tagline: string;
  overview: string;
  packageVibe?: string;
  vibeTags?: string[];
  startDate: string;
  endDate: string;
  totalDays: number;
  budgetAmount: number;
  currency: string;
  partySize: number;
  partyType: PartyType;
  travelStyle: TravelStyle;
  travelPace: TravelPace;
  heroImage: string;
  createdAt: string;
  
  // Agent-synthesized modules
  logistics: RouteLogistics;
  budget: BudgetPlan;
  stays: AccommodationOption[];
  itinerary: ItineraryDay[];
  culinary: CulinaryGuide;
  sentinel: SentinelPlan;
  debateLogs: AgentDebateLog[];
  
  // User custom tracked expenses
  customExpenses?: { id: string; categoryId: string; description: string; amount: number; date: string }[];
}
