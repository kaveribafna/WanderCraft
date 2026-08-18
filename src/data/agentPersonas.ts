import { AgentPersona, AgentRole } from '../types/travel';

export const AGENT_PERSONAS: Record<AgentRole, AgentPersona> = {
  atlas: {
    id: 'atlas',
    name: 'Atlas',
    codename: 'Route & Transit Master',
    title: 'Geographic Clustering & Logistics Lead',
    tagline: 'Eliminates zig-zag transit and optimizes daily geographic flow.',
    color: '#0284c7', // Sky-600
    accentBg: 'bg-sky-50 text-sky-700 border-sky-200',
    borderColor: 'border-sky-300',
    badgeColor: 'bg-sky-100 text-sky-900 border-sky-300',
    iconName: 'Compass',
    specialty: 'Airport connections, metro rail passes, walkability math, and cluster routing.',
    promptRole: 'You are Atlas, the Logistics & Route Optimization Agent. You analyze maps, metro lines, airport transfers, and walking distances. You strictly prevent itinerary zig-zagging by grouping attractions by neighborhood.'
  },
  ledger: {
    id: 'ledger',
    name: 'Ledger',
    codename: 'Budget & Resource Allocator',
    title: 'Financial Auditor & Cost Optimizer',
    tagline: 'Allocates every single dollar with mathematical precision.',
    color: '#059669', // Emerald-600
    accentBg: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    borderColor: 'border-emerald-300',
    badgeColor: 'bg-emerald-100 text-emerald-900 border-emerald-300',
    iconName: 'Coins',
    specialty: 'Line-item breakdown, daily burn rate, currency exchange, and high-ROI compromises.',
    promptRole: 'You are Ledger, the Budget & Financial Allocation Agent. You ensure the trip stays within the strict budget limit. You divide costs among stays, food, transit, activities, and an emergency buffer.'
  },
  haven: {
    id: 'haven',
    name: 'Haven',
    codename: 'Stay & Neighborhood Scout',
    title: 'Hospitality & Basecamp Curator',
    tagline: 'Matches the safest, best-connected neighborhoods to your vibe.',
    color: '#7c3aed', // Violet-600
    accentBg: 'bg-purple-50 text-purple-700 border-purple-200',
    borderColor: 'border-purple-300',
    badgeColor: 'bg-purple-100 text-purple-900 border-purple-300',
    iconName: 'Hotel',
    specialty: 'Neighborhood safety, walkability, boutique gems, and strategic hub locations.',
    promptRole: 'You are Haven, the Hospitality & Accommodation Agent. You pick strategic basecamps and lodging that fit the traveler budget and style, factoring in walkability, transit access, and local charm.'
  },
  scribe: {
    id: 'scribe',
    name: 'Scribe',
    codename: 'Itinerary Architect & Experiences Curator',
    title: 'Pacing & Timed Schedule Specialist',
    tagline: 'Orchestrates morning-to-night flow with zero rushed fatigue.',
    color: '#d97706', // Amber-600
    accentBg: 'bg-amber-50 text-amber-800 border-amber-200',
    borderColor: 'border-amber-300',
    badgeColor: 'bg-amber-100 text-amber-900 border-amber-300',
    iconName: 'CalendarCheck',
    specialty: 'Timed schedule, crowd evasion tips, reservation lead times, and alternative backups.',
    promptRole: 'You are Scribe, the Itinerary Architect. You build realistic day-by-day itineraries with morning, midday, afternoon, and evening blocks. You manage pacing and provide booking lead times.'
  },
  palate: {
    id: 'palate',
    name: 'Palate',
    codename: 'Culinary & Local Vibe Specialist',
    title: 'Gastronomy & Hidden Gem Scout',
    tagline: 'Finds regional dishes and authentic eateries near your stops.',
    color: '#e11d48', // Rose-600
    accentBg: 'bg-rose-50 text-rose-700 border-rose-200',
    borderColor: 'border-rose-300',
    badgeColor: 'bg-rose-100 text-rose-900 border-rose-300',
    iconName: 'Utensils',
    specialty: 'Street food markets, must-try regional dishes, dietary filters, and coffee culture.',
    promptRole: 'You are Palate, the Culinary & Gastronomy Agent. You scout local dining, street food markets, regional specialties, and coffee spots that coincide with Scribe\'s neighborhood schedule.'
  },
  sentinel: {
    id: 'sentinel',
    name: 'Sentinel',
    codename: 'Contingency Guardian & Trip Auditor',
    title: 'Safety, Climate & Preparedness Lead',
    tagline: 'Shields against bad weather, tourist traps, and forgotten gear.',
    color: '#0d9488', // Teal-600
    accentBg: 'bg-teal-50 text-teal-700 border-teal-200',
    borderColor: 'border-teal-300',
    badgeColor: 'bg-teal-100 text-teal-900 border-teal-300',
    iconName: 'ShieldCheck',
    specialty: 'Seasonal weather advisories, rainy-day indoor swaps, scam warnings, and packing lists.',
    promptRole: 'You are Sentinel, the Contingency Guardian & Safety Auditor. You check weather forecasts for the dates, prepare indoor backup activities, write custom packing checklists, and flag scam risks.'
  }
};

export const AGENT_LIST = Object.values(AGENT_PERSONAS);
