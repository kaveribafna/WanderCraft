export interface DestinationData {
  city: string;
  country: string;
  region: 'Europe' | 'Asia' | 'Americas' | 'Africa' | 'Oceania' | 'Middle East';
  tagline: string;
  heroImage: string;
  currency: string;
  currencySymbol: string;
  exchangeRateToUSD: number;
  avgBudgetDailyUSD: number;
  vibeTags: string[];
  neighborhoods: {
    name: string;
    vibe: string;
    isBasecamp: boolean;
    walkability: number;
  }[];
  landmarks: {
    name: string;
    category: string;
    vibeTag: string;
    description: string;
    timeSlot: 'Morning' | 'Midday' | 'Afternoon' | 'Evening';
    cost: number;
  }[];
  dishes: {
    name: string;
    localName?: string;
    description: string;
    typicalCost: string;
    spot: string;
  }[];
  weather: {
    season: string;
    highC: number;
    lowC: number;
    rainRisk: 'Low' | 'Moderate' | 'High';
    summary: string;
  };
  airport: string;
  transitAdvice: string;
}

export const GLOBAL_DESTINATIONS: DestinationData[] = [
  {
    city: 'Tokyo',
    country: 'Japan',
    region: 'Asia',
    tagline: 'Neon Shibuya Crossings, Secret Izakayas & Cyberpunk Alleys',
    heroImage: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1600&q=80',
    currency: 'JPY',
    currencySymbol: '¥',
    exchangeRateToUSD: 154.0,
    avgBudgetDailyUSD: 120,
    vibeTags: ['Viral Eats', 'Aesthetic Shrines', 'Streetwear Mecca', 'High Energy'],
    neighborhoods: [
      { name: 'Shinjuku & Kabukicho', vibe: 'Neon alleys, skyscraper view decks, nightlife', isBasecamp: true, walkability: 96 },
      { name: 'Shibuya & Harajuku', vibe: 'Street fashion, viral cafes, vinyl bars', isBasecamp: false, walkability: 98 },
      { name: 'Asakusa & Yanaka', vibe: 'Historic temples, traditional street food, retro streets', isBasecamp: false, walkability: 92 },
      { name: 'Akihabara & Ueno', vibe: 'Retro gaming, tech markets, museum park', isBasecamp: false, walkability: 90 },
      { name: 'Roppongi & Ginza', vibe: 'Art galleries, luxury shopping, skyline dining', isBasecamp: false, walkability: 94 }
    ],
    landmarks: [
      { name: 'Shibuya Sky Observation Deck', category: 'Sightseeing', vibeTag: '📸 4K Golden Hour', description: '360-degree glass rooftop deck overlooking the world\'s busiest pedestrian scramble.', timeSlot: 'Evening', cost: 18 },
      { name: 'teamLab Borderless / Planets', category: 'Culture', vibeTag: '✨ Viral Digital Art', description: 'Mind-bending interactive projection light rooms and crystal corridors.', timeSlot: 'Morning', cost: 28 },
      { name: 'Senso-ji Temple & Nakamise Dori', category: 'Culture', vibeTag: '⛩️ Historic Soul', description: 'Tokyo’s oldest Buddhist temple framed by giant red lanterns and street snack stalls.', timeSlot: 'Morning', cost: 0 },
      { name: 'Omoide Yokocho (Memory Lane)', category: 'Food', vibeTag: '🍢 Hidden Izakaya Alley', description: 'Narrow post-war alley lined with smoking yakitori stalls and ice-cold draft beer.', timeSlot: 'Evening', cost: 25 },
      { name: 'Meiji Jingu Forest Sanctuary', category: 'Relaxation', vibeTag: '🌿 Zen Oasis', description: 'Towering cedar woodland in the heart of the metropolis.', timeSlot: 'Afternoon', cost: 0 },
      { name: 'Tsukiji Outer Seafood Market', category: 'Food', vibeTag: '🍣 Street Food Crawl', description: 'Wagyu skewers, grilled king crab legs, and fresh tamagoyaki cooked right before you.', timeSlot: 'Midday', cost: 22 }
    ],
    dishes: [
      { name: 'Rich Tonkotsu / Tsukemen Ramen', localName: 'つけ麺', description: 'Thick chewy noodles dipped into an ultra-concentrated broth reduction with molten egg.', typicalCost: '¥1,100 ($7.50)', spot: 'Fuunji / Rokurinsha' },
      { name: 'A5 Wagyu Beef Skewers', localName: '和牛串', description: 'Melt-in-your-mouth marbled beef torched with garlic soy glaze.', typicalCost: '¥1,500 ($10)', spot: 'Tsukiji Outer Market' },
      { name: 'Souffle Fluffy Pancakes', localName: 'スフレパンケーキ', description: 'Impossibly tall, cloud-like pancakes served with whipped butter and honeycomb.', typicalCost: '¥1,400 ($9)', spot: 'A Happy Pancake Omotesando' },
      { name: 'Matcha Gelato Level 7', localName: '抹茶ジェラート', description: 'The world\'s richest and most intense stone-ground green tea gelato.', typicalCost: '¥650 ($4.20)', spot: 'Suzukien Asakusa' }
    ],
    weather: { season: 'Crisp & Pleasant', highC: 22, lowC: 14, rainRisk: 'Low', summary: 'Clear blue skies with cool autumn/spring breeze. Perfect for heavy walking.' },
    airport: 'Haneda (HND) / Narita (NRT)',
    transitAdvice: 'Subway 72-Hour Tourist Pass + Apple/Google Wallet digital Suica IC card.'
  },
  {
    city: 'Seoul',
    country: 'South Korea',
    region: 'Asia',
    tagline: 'K-Pop Culture, Han River Sunsets & Late-Night K-BBQ',
    heroImage: 'https://images.unsplash.com/photo-1538485399081-7191377e8241?auto=format&fit=crop&w=1600&q=80',
    currency: 'KRW',
    currencySymbol: '₩',
    exchangeRateToUSD: 1380.0,
    avgBudgetDailyUSD: 100,
    vibeTags: ['K-Aesthetic', 'Night Owl City', 'Skincare Mecca', 'Street Eats'],
    neighborhoods: [
      { name: 'Hongdae & Yeonnam-dong', vibe: 'Indie youth cafes, live busking, photo booths', isBasecamp: true, walkability: 97 },
      { name: 'Seongsu-dong (Seoul\'s Brooklyn)', vibe: 'Brutalist concept stores, bakeries, craft coffee', isBasecamp: false, walkability: 94 },
      { name: 'Bukchon Hanok & Insadong', vibe: 'Traditional wooden houses, tea houses, royal palace', isBasecamp: false, walkability: 91 },
      { name: 'Gangnam & Apgujeong Rodeo', vibe: 'K-fashion boutiques, rooftop lounges, design cafes', isBasecamp: false, walkability: 93 },
      { name: 'Euljiro (Hipjiro)', vibe: 'Hidden speakeasies tucked in printing factory alleys', isBasecamp: false, walkability: 89 }
    ],
    landmarks: [
      { name: 'Gyeongbokgung Palace in Hanbok', category: 'Culture', vibeTag: '👘 Royal Aesthetic', description: 'Rent traditional Hanbok for free palace entry and cinematic courtyard photos.', timeSlot: 'Morning', cost: 15 },
      { name: 'Seongsu Concept Store Crawl', category: 'Sightseeing', vibeTag: '✨ Trend Capital', description: 'Explore iconic pop-ups like Tamburins, Gentle Monster Haus Nowhere, and Daelim Changgo.', timeSlot: 'Afternoon', cost: 0 },
      { name: 'Namsan Seoul Tower Sunset', category: 'Sightseeing', vibeTag: '🌆 Skyline Romance', description: 'Cable car ascent for golden hour views across the sprawling Han River basin.', timeSlot: 'Evening', cost: 12 },
      { name: 'Gwangjang Food Market', category: 'Food', vibeTag: '🥟 Netflix Famous', description: 'Legendary stalls serving crispy bindaetteok, handmade kalguksu, and spicy tteokbokki.', timeSlot: 'Midday', cost: 14 }
    ],
    dishes: [
      { name: 'Charcoal Pork Belly K-BBQ', localName: '삼겹살', description: 'Crisp pork belly wrapped in perilla leaves with garlic, ssamjang, and cold draft beer.', typicalCost: '₩18,000 ($13)', spot: 'Geumdwaeji Sikdang (Gold Pig)' },
      { name: 'Chimaek (Korean Fried Chicken & Beer)', localName: '치맥', description: 'Ultra-crispy double-fried chicken coated in honey-soy garlic or sweet spicy gochujang.', typicalCost: '₩22,000 ($16)', spot: 'BHC / Kyochon Hongdae' },
      { name: 'Salt Bread & Sweet Potato Cream Bun', localName: '소금빵', description: 'Viral chewy golden crust salt bread with molten French butter interior.', typicalCost: '₩3,800 ($2.75)', spot: 'Jayeondo Salt Bread Seongsu' }
    ],
    weather: { season: 'Pleasant & Cool', highC: 21, lowC: 12, rainRisk: 'Low', summary: 'Sunny days with dry air and vibrant cafe patio weather.' },
    airport: 'Incheon International (ICN)',
    transitAdvice: 'AREX Airport Express train into Seoul Station + T-Money card.'
  },
  {
    city: 'Paris',
    country: 'France',
    region: 'Europe',
    tagline: 'Haussmann Balconies, Natural Wine Bars & Seine Golden Hour',
    heroImage: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1600&q=80',
    currency: 'EUR',
    currencySymbol: '€',
    exchangeRateToUSD: 0.92,
    avgBudgetDailyUSD: 160,
    vibeTags: ['Editorial Chic', 'Art & Romance', 'Cafe Culture', 'Thrift & Vintage'],
    neighborhoods: [
      { name: 'Le Marais (3rd/4th Arr.)', vibe: 'Designer thrift shops, art galleries, lively terraces', isBasecamp: true, walkability: 98 },
      { name: 'Montmartre (18th Arr.)', vibe: 'Cobblestone hills, artist squares, Sacré-Cœur vistas', isBasecamp: false, walkability: 91 },
      { name: 'Saint-Germain-des-Prés (6th)', vibe: 'Historic literary cafes, Luxembourg Gardens, luxury boutiques', isBasecamp: false, walkability: 96 },
      { name: 'Canal Saint-Martin (10th)', vibe: 'Natural wine caves, specialty bakeries, canal picnics', isBasecamp: false, walkability: 95 }
    ],
    landmarks: [
      { name: 'Louvre Pyramid at Sunset', category: 'Culture', vibeTag: '🏛️ Iconic Masterpiece', description: 'Skip daytime crowds with Thursday/Friday evening nocturne entry.', timeSlot: 'Evening', cost: 22 },
      { name: 'Musée d\'Orsay Clock Tower', category: 'Culture', vibeTag: '📸 Impressionist Window', description: 'Silhouettes through the giant historic train station clock face overlooking the Seine.', timeSlot: 'Morning', cost: 16 },
      { name: 'Seine River Sunset Picnic at Pont des Arts', category: 'Relaxation', vibeTag: '🥖 Local Parisian Vibe', description: 'Grab sourdough, Comté cheese, and wine for a dreamy golden hour by the water.', timeSlot: 'Evening', cost: 15 },
      { name: 'Sainte-Chapelle Stained Glass', category: 'Sightseeing', vibeTag: '✨ Jewel Box Gothic', description: '1,113 stained glass panels shimmering with intense sapphire and ruby hues.', timeSlot: 'Morning', cost: 13 }
    ],
    dishes: [
      { name: 'Laminated Butter Croissant', localName: 'Croissant au Beurre', description: 'Flaky, shattering golden layers with rich butter aroma.', typicalCost: '€1.60 ($1.75)', spot: 'Du Pain et des Idées / Cedric Grolet' },
      { name: 'Steak Frites with Herb Butter', localName: 'Steak Frites', description: 'Seared hanger steak topped with secret green sauce and unlimited crisp fries.', typicalCost: '€29 ($31)', spot: 'Le Relais de l\'Entrecôte' },
      { name: 'Duck Confit with Crispy Potatoes', localName: 'Confit de Canard', description: 'Crisp skin with tender fall-apart meat braised in its own rich juices.', typicalCost: '€22 ($24)', spot: 'Chez Janou Marais' }
    ],
    weather: { season: 'Mild Temperate', highC: 22, lowC: 13, rainRisk: 'Moderate', summary: 'Comfortable days for walking with romantic afternoon cloudscapes.' },
    airport: 'Charles de Gaulle (CDG) / Orly (ORY)',
    transitAdvice: 'RER B into Châtelet-Les Halles + Navigo Easy contactless pass.'
  },
  {
    city: 'Rome',
    country: 'Italy',
    region: 'Europe',
    tagline: 'Ancient Colosseum Echoes, Truffle Pasta & Piazza Evenings',
    heroImage: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1600&q=80',
    currency: 'EUR',
    currencySymbol: '€',
    exchangeRateToUSD: 0.92,
    avgBudgetDailyUSD: 140,
    vibeTags: ['Dolce Vita', 'Ancient Wonders', 'Gelato Crawls', 'Piazza Life'],
    neighborhoods: [
      { name: 'Trastevere', vibe: 'Cobblestone lanes, ivy-draped facades, bustling trattorias', isBasecamp: true, walkability: 95 },
      { name: 'Monti', vibe: 'Boho vintage shops, wine bars, steps from Colosseum', isBasecamp: false, walkability: 96 },
      { name: 'Centro Storico (Pantheon / Navona)', vibe: 'Grand piazzas, baroque fountains, lively gelato spots', isBasecamp: false, walkability: 98 },
      { name: 'Testaccio', vibe: 'Authentic Roman foodie hub and historic covered market', isBasecamp: false, walkability: 90 }
    ],
    landmarks: [
      { name: 'Colosseum & Roman Forum at Sunrise', category: 'Culture', vibeTag: '⚔️ Gladiator Arena', description: 'Early morning ticket to walk the gladiatorial arena floor before heat and crowds.', timeSlot: 'Morning', cost: 24 },
      { name: 'Pantheon Oculus & Espresso Stop', category: 'Sightseeing', vibeTag: '🏛️ Architectural Wonder', description: '2,000-year-old unreinforced concrete dome followed by granita di caffe at Sant\'Eustachio.', timeSlot: 'Midday', cost: 5 },
      { name: 'Trevi Fountain Night Walk', category: 'Sightseeing', vibeTag: '🪙 Coin Toss Magic', description: 'Visit after 23:00 when crowds dissipate and the illuminated turquoise waters glow.', timeSlot: 'Evening', cost: 0 },
      { name: 'Borghese Gallery & Villa Gardens', category: 'Culture', vibeTag: '🎨 Bernini Sculptures', description: 'Stunning Bernini marble masterpieces in an intimate cardinal palace.', timeSlot: 'Afternoon', cost: 20 }
    ],
    dishes: [
      { name: 'Authentic Carbonara (Guanciale & Pecorino)', localName: 'Pasta alla Carbonara', description: 'Creamy egg yolk emulsion with crispy cured pork cheek and black pepper (no cream!).', typicalCost: '€14 ($15)', spot: 'Trattoria Da Enzo al 29' },
      { name: 'Cacio e Pepe Tonnarelli', localName: 'Cacio e Pepe', description: 'Handmade pasta swirled in aged Pecorino Romano and toasted black pepper broth.', typicalCost: '€13 ($14)', spot: 'Roscioli Salumeria con Cucina' },
      { name: 'Artisanal Pistachio & Ricotta Gelato', localName: 'Gelato Artigianale', description: 'Silky whipped gelato made with Bronte pistachios and zero artificial colorings.', typicalCost: '€3.50 ($3.80)', spot: 'Frigidarium / Giolitti' },
      { name: 'Roman Suppli (Fried Rice Mozzarella Croquette)', localName: 'Supplì al Telefono', description: 'Golden fried arborio rice ball with molten mozzarella pulling like a telephone cord.', typicalCost: '€2.50 ($2.70)', spot: 'Supplizio' }
    ],
    weather: { season: 'Sun-Drenched Warmth', highC: 26, lowC: 17, rainRisk: 'Low', summary: 'Sunny golden days with balmy evening breezes in open piazzas.' },
    airport: 'Fiumicino Leonardo da Vinci (FCO)',
    transitAdvice: 'Leonardo Express train (32 mins direct to Roma Termini).'
  },
  {
    city: 'Bali',
    country: 'Indonesia',
    region: 'Asia',
    tagline: 'Cliffside Beach Clubs, Jungle Waterfalls & Sunset Surf',
    heroImage: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1600&q=80',
    currency: 'IDR',
    currencySymbol: 'Rp',
    exchangeRateToUSD: 16200.0,
    avgBudgetDailyUSD: 70,
    vibeTags: ['Tropical Vibes', 'Wellness & Yoga', 'Beach Clubs', 'Nomad Hub'],
    neighborhoods: [
      { name: 'Canggu & Pererenan', vibe: 'Sunset beach bars, surf breaks, aesthetic cafes, nomad vibe', isBasecamp: true, walkability: 78 },
      { name: 'Ubud Jungle Sanctuary', vibe: 'Rice terraces, yoga shalas, sacred monkey forest, waterfalls', isBasecamp: false, walkability: 82 },
      { name: 'Uluwatu Cliffs', vibe: 'Dramatic cliffside ocean clubs, world-class surf, Kecak dance', isBasecamp: false, walkability: 65 },
      { name: 'Seminyak', vibe: 'Boutique shopping, luxury villas, beach sunset lounges', isBasecamp: false, walkability: 85 }
    ],
    landmarks: [
      { name: 'Uluwatu Cliffside Sunset & Kecak Fire Dance', category: 'Culture', vibeTag: '🔥 Fire Chant Epic', description: 'Trance choir chanting against the backdrop of crashing ocean waves and blazing sunset.', timeSlot: 'Evening', cost: 12 },
      { name: 'Tegallalang Rice Terraces & Jungle Swing', category: 'Sightseeing', vibeTag: '🌴 Emerald Canopy', description: 'Walk through sculpted ancient subak irrigation terraces and lush coconut palms.', timeSlot: 'Morning', cost: 8 },
      { name: 'Savaya or Single Fin Cliffside Club', category: 'Relaxation', vibeTag: '🍸 Infinity Views', description: 'World-renowned architecture perched 100 meters above the Indian Ocean.', timeSlot: 'Afternoon', cost: 25 },
      { name: 'Tibumana / Kanto Lampo Secret Waterfall', category: 'Sightseeing', vibeTag: '💦 Natural Plunge', description: 'Cool swim under natural rainforest cascades in secluded rock canyons.', timeSlot: 'Morning', cost: 4 }
    ],
    dishes: [
      { name: 'Babi Guling (Balinese Roast Pork)', localName: 'Babi Guling', description: 'Crispy crackling skin, lemongrass-turmeric spiced tender pork with steamed rice.', typicalCost: 'Rp 55,000 ($3.50)', spot: 'Warung Babi Guling Ibu Oka Ubud' },
      { name: 'Dragonfruit Acai Smoothie Bowl', description: 'Blended pink dragonfruit topped with chia seeds, granola, passionfruit, and toasted coconut.', typicalCost: 'Rp 70,000 ($4.30)', spot: 'Crate Cafe Canggu' },
      { name: 'Nasi Campur Bali', localName: 'Nasi Campur', description: 'Fragrant rice surrounded by chicken satay, sambal matah, spiced tempeh, and green beans.', typicalCost: 'Rp 45,000 ($2.80)', spot: 'Warung Local Canggu' }
    ],
    weather: { season: 'Tropical Dry Season', highC: 29, lowC: 23, rainRisk: 'Low', summary: 'Warm tropical sunshine with refreshing afternoon sea breezes.' },
    airport: 'Ngurah Rai Denpasar (DPS)',
    transitAdvice: 'Grab / Gojek scooter rides or private driver day hire ($40/day).'
  },
  {
    city: 'New York City',
    country: 'United States',
    region: 'Americas',
    tagline: 'Skyline Rooftops, SOHO Brownstones & Speakeasy Jazz',
    heroImage: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=1600&q=80',
    currency: 'USD',
    currencySymbol: '$',
    exchangeRateToUSD: 1.0,
    avgBudgetDailyUSD: 220,
    vibeTags: ['Main Character Energy', 'Skyline Magic', 'Broadway & Jazz', 'Iconic Pizza'],
    neighborhoods: [
      { name: 'SOHO & Greenwich Village', vibe: 'Cast-iron architecture, indie boutiques, jazz clubs, coffee', isBasecamp: true, walkability: 99 },
      { name: 'Williamsburg Brooklyn', vibe: 'Skyline waterfront, flea markets, rooftop bars, indie music', isBasecamp: false, walkability: 96 },
      { name: 'Chelsea & Meatpacking', vibe: 'High Line elevated park, Chelsea Market, modern art galleries', isBasecamp: false, walkability: 97 },
      { name: 'DUMBO & Brooklyn Heights', vibe: 'Manhattan Bridge cobblestone view, waterfront park promenades', isBasecamp: false, walkability: 94 }
    ],
    landmarks: [
      { name: 'Summit One Vanderbilt Glass Skybox', category: 'Sightseeing', vibeTag: '🪞 Mirrored Infinity', description: 'Multi-sensory glass elevators and reflective rooms floating 1,200 feet over Midtown.', timeSlot: 'Morning', cost: 42 },
      { name: 'The High Line & Little Island Stroll', category: 'Relaxation', vibeTag: '🌿 Urban Skyline Park', description: 'Reclaimed elevated railway planted with wildflowers winding through West Chelsea.', timeSlot: 'Afternoon', cost: 0 },
      { name: 'Brooklyn Bridge Golden Hour Walk', category: 'Sightseeing', vibeTag: '🌉 Sunset Crossing', description: 'Walk from DUMBO into Manhattan as the skyline lights ignite at twilight.', timeSlot: 'Evening', cost: 0 },
      { name: 'Village Vanguard / Smalls Jazz Club', category: 'Culture', vibeTag: '🎷 Underground Beats', description: 'Historic subterranean jazz sanctuaries in Greenwich Village.', timeSlot: 'Evening', cost: 35 }
    ],
    dishes: [
      { name: 'Crispy New York Pepperoni Slice', description: 'Foldable thin crust slice with cupping charred pepperoni and hot honey drizzle.', typicalCost: '$4.50 - $5.50', spot: 'Joe\'s Pizza / Scarr\'s' },
      { name: 'Everything Bagel with Lox & Scallion Cream Cheese', description: 'Freshly boiled, chewy malt bagel packed with smoked salmon and capers.', typicalCost: '$14.00', spot: 'Russ & Daughters / Ess-a-Bagel' },
      { name: 'Pastrami on Rye with Mustard', description: 'Warm, hand-carved spiced cured brisket piled high on seedless rye.', typicalCost: '$28.00', spot: 'Katz\'s Delicatessen' }
    ],
    weather: { season: 'Crisp Autumn / Spring', highC: 20, lowC: 12, rainRisk: 'Low', summary: 'Brisk energy with clear visibility for skyline views.' },
    airport: 'JFK / LGA / EWR',
    transitAdvice: 'OMNY contactless tap-to-pay on all NYC Subway lines ($2.90/ride).'
  },
  {
    city: 'London',
    country: 'United Kingdom',
    region: 'Europe',
    tagline: 'Historic Pubs, Royal Parks & Shoreditch Street Art',
    heroImage: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1600&q=80',
    currency: 'GBP',
    currencySymbol: '£',
    exchangeRateToUSD: 0.79,
    avgBudgetDailyUSD: 175,
    vibeTags: ['Royal Heritage', 'Vinyl & Vintage', 'Pub Culture', 'Theatre District'],
    neighborhoods: [
      { name: 'Soho & Covent Garden', vibe: 'West End theatres, bustling dining, pedestrian alleys', isBasecamp: true, walkability: 99 },
      { name: 'Shoreditch & Hackney', vibe: 'Street art murals, vintage markets, craft breweries', isBasecamp: false, walkability: 94 },
      { name: 'Notting Hill & Kensington', vibe: 'Pastel houses, Portobello antique market, royal palace', isBasecamp: false, walkability: 93 },
      { name: 'South Bank & Borough', vibe: 'Tate Modern, river walk, world-famous food market', isBasecamp: false, walkability: 97 }
    ],
    landmarks: [
      { name: 'Borough Market Food Exploration', category: 'Food', vibeTag: '🧀 Gourmet Heaven', description: 'Gooey raclette, wild mushroom risotto, and hot chocolate underneath Victorian rail bridges.', timeSlot: 'Midday', cost: 18 },
      { name: 'Tate Modern Turbine Hall & Blavatnik Deck', category: 'Culture', vibeTag: '🎨 Modern Giant', description: 'World-leading contemporary art gallery with free entry and Thames views.', timeSlot: 'Afternoon', cost: 0 },
      { name: 'Sky Garden Free Panoramic Lounge', category: 'Sightseeing', vibeTag: '🌿 360° Glass Dome', description: 'Lush indoor botanical garden 35 stories above the River Thames.', timeSlot: 'Morning', cost: 0 },
      { name: 'Tower Bridge Glass Floor Walk', category: 'Sightseeing', vibeTag: '🌉 Victorian Wonder', description: 'Look down onto river traffic and red double-decker buses through the high walkways.', timeSlot: 'Morning', cost: 15 }
    ],
    dishes: [
      { name: 'Crispy Beer-Battered Fish & Chips', description: 'Flaky cod in golden IPA batter with triple-cooked chips, mushy peas, and tartar sauce.', typicalCost: '£16.50 ($21)', spot: 'Poppies / The Golden Hind' },
      { name: 'Sunday Roast with Yorkshire Pudding', description: 'Roast beef sirloin, fluffy roast potatoes, giant Yorkshire pudding, and bone marrow gravy.', typicalCost: '£22 ($28)', spot: 'The Quality Chop House / Hawksmoor' },
      { name: 'Brick Lane Salt Beef Bagel', description: 'Cured brisket with fiery English mustard and pickles in freshly boiled bagel.', typicalCost: '£6.00 ($7.60)', spot: 'Beigel Bake Brick Lane' }
    ],
    weather: { season: 'Brisk & Fresh', highC: 19, lowC: 11, rainRisk: 'Moderate', summary: 'Cool breezy days, great for cozy sweaters and pub evenings.' },
    airport: 'Heathrow (LHR) / Gatwick (LGW)',
    transitAdvice: 'Elizabeth Line direct to Central London + Contactless card on Tube.'
  },
  {
    city: 'Barcelona',
    country: 'Spain',
    region: 'Europe',
    tagline: 'Gaudí Architecture, Tapas Trails & Mediterranean Beaches',
    heroImage: 'https://images.unsplash.com/photo-1583422409516-2895a77efded?auto=format&fit=crop&w=1600&q=80',
    currency: 'EUR',
    currencySymbol: '€',
    exchangeRateToUSD: 0.92,
    avgBudgetDailyUSD: 130,
    vibeTags: ['Gaudí Magic', 'Tapas & Sangria', 'Beach Sunsets', 'Gothic Quarters'],
    neighborhoods: [
      { name: 'El Born & Gothic Quarter', vibe: 'Medieval stone alleys, indie boutiques, vibrant tapas bars', isBasecamp: true, walkability: 98 },
      { name: 'Eixample & Gràcia', vibe: 'Modernist architecture, Passeig de Gràcia, bohemian squares', isBasecamp: false, walkability: 96 },
      { name: 'Barceloneta & Poblenou', vibe: 'Seafood chiringuitos, beach volleyball, Mediterranean vibes', isBasecamp: false, walkability: 92 },
      { name: 'Montjuïc', vibe: 'Castle hill, botanical gardens, Olympic stadium, skyline vistas', isBasecamp: false, walkability: 82 }
    ],
    landmarks: [
      { name: 'Sagrada Família Basilique Interior', category: 'Culture', vibeTag: '✨ Stone Forest Light', description: 'Gaudí\'s masterpiece bathed in mesmerizing rainbow stained-glass sunlight.', timeSlot: 'Morning', cost: 26 },
      { name: 'Park Güell Mosaic Serpent Terrace', category: 'Sightseeing', vibeTag: '🦎 Fairy-Tale City', description: 'Colorful mosaic gingerbread pavilions overlooking the Mediterranean Sea.', timeSlot: 'Afternoon', cost: 10 },
      { name: 'Bunkers del Carmel Sunset 360°', category: 'Sightseeing', vibeTag: '🌅 Panoramic Golden Hour', description: 'Old anti-aircraft bunkers offering the greatest panoramic viewpoint in Barcelona.', timeSlot: 'Evening', cost: 0 },
      { name: 'La Boqueria Tapas Bar Crawl', category: 'Food', vibeTag: '🦪 Market Energy', description: 'Fresh oysters, pimientos de padrón, and jamón ibérico sliced fresh from the leg.', timeSlot: 'Midday', cost: 20 }
    ],
    dishes: [
      { name: 'Jamón Ibérico de Bellota & Pan con Tomate', description: 'Acorn-fed cured ham served over toasted sourdough rubbed with ripe tomato and olive oil.', typicalCost: '€18 ($20)', spot: 'Bar Cañete / El Xampanyet' },
      { name: 'Seafood Paella & Fideuà', description: 'Saffron bomba rice with prawns, mussels, calamari, and caramelized socarrat crust.', typicalCost: '€22 ($24)', spot: 'Can Solé / 7 Portes' },
      { name: 'Patatas Bravas with Spicy Alioli', description: 'Crispy fried potato cubes draped in spicy smoked paprika oil and garlic aioli.', typicalCost: '€6.50 ($7)', spot: 'Bar Tomás de Sarrià' },
      { name: 'Warm Churros with Thick Hot Chocolate', description: 'Freshly fried star churros dunked in dark, pudding-thick melted dipping chocolate.', typicalCost: '€5.00 ($5.50)', spot: 'Granja M. Viader' }
    ],
    weather: { season: 'Mediterranean Sun', highC: 25, lowC: 17, rainRisk: 'Low', summary: 'Sunny warm days with cool sea breezes at sunset.' },
    airport: 'Josep Tarradellas Barcelona-El Prat (BCN)',
    transitAdvice: 'Aerobús into Plaça de Catalunya + T-Casual 10-trip card.'
  },
  {
    city: 'Dubai',
    country: 'United Arab Emirates',
    region: 'Middle East',
    tagline: 'Futuristic Skyscrapers, Golden Desert Dunes & Luxury Marinas',
    heroImage: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1600&q=80',
    currency: 'AED',
    currencySymbol: 'د.إ',
    exchangeRateToUSD: 3.67,
    avgBudgetDailyUSD: 190,
    vibeTags: ['Future City', 'Desert Dune Safari', 'Luxury Beach Clubs', 'Skyline Vistas'],
    neighborhoods: [
      { name: 'Downtown Dubai', vibe: 'Burj Khalifa, Dubai Mall fountains, luxury dining', isBasecamp: true, walkability: 92 },
      { name: 'Dubai Marina & JBR', vibe: 'Yacht promenades, sandy beach, beachfront restaurants', isBasecamp: false, walkability: 94 },
      { name: 'Old Dubai (Al Fahidi & Deira)', vibe: 'Historic wind towers, spice and gold souks, abra boats', isBasecamp: false, walkability: 88 }
    ],
    landmarks: [
      { name: 'Burj Khalifa Sky Lounge (148th Floor)', category: 'Sightseeing', vibeTag: '☁️ Top of the World', description: 'The tallest building on earth with views stretching across the Arabian Gulf.', timeSlot: 'Evening', cost: 45 },
      { name: 'Desert Dune Safari & Stargazing', category: 'Sightseeing', vibeTag: '🐪 Red Dune Adventure', description: '4x4 dune bashing, sandboarding, and Bedouin camp dinner under desert constellations.', timeSlot: 'Afternoon', cost: 55 },
      { name: 'Museum of the Future', category: 'Culture', vibeTag: '🚀 Architectural Marvel', description: 'Torus-shaped calligraphy wonder exploring human life in the year 2071.', timeSlot: 'Morning', cost: 40 },
      { name: 'Old Dubai Abra Creek Crossing', category: 'Culture', vibeTag: '🛶 Traditional Water Taxi', description: 'Glide across Dubai Creek on a historic wooden motorized boat for just 1 AED.', timeSlot: 'Midday', cost: 0.30 }
    ],
    dishes: [
      { name: 'Emirati Lamb Machboos', description: 'Slow-simmered tender spiced lamb over fragrant basmati rice with dried black lime and saffron.', typicalCost: 'AED 65 ($18)', spot: 'Al Fanar Restaurant' },
      { name: 'Shish Tawook & Garlic Toum with Fresh Bread', description: 'Charcoal-grilled marinated chicken skewers with creamy whipped garlic dip.', typicalCost: 'AED 45 ($12)', spot: 'Al Safadi Downtown' },
      { name: 'Warm Kunafa with Pistachio', description: 'Crispy shredded filo pastry filled with melted sweet cheese and drenched in rosewater syrup.', typicalCost: 'AED 25 ($6.80)', spot: 'Firas Sweets' }
    ],
    weather: { season: 'Warm & Sunny', highC: 28, lowC: 20, rainRisk: 'Low', summary: 'Clear blue skies with warm desert sunshine.' },
    airport: 'Dubai International (DXB)',
    transitAdvice: 'Red Line Metro with Silver Nol card + Careem rideshare.'
  },
  {
    city: 'Cape Town',
    country: 'South Africa',
    region: 'Africa',
    tagline: 'Table Mountain Hikes, Boulders Beach Penguins & Atlantic Coastlines',
    heroImage: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1600&q=80',
    currency: 'ZAR',
    currencySymbol: 'R',
    exchangeRateToUSD: 18.2,
    avgBudgetDailyUSD: 95,
    vibeTags: ['Coastal Dramatics', 'Penguin Beach', 'Wine Valleys', 'Mountain Hikes'],
    neighborhoods: [
      { name: 'Camps Bay & Clifton', vibe: 'Pristine white sand beaches, 12 Apostles mountain views, sunset cocktails', isBasecamp: true, walkability: 88 },
      { name: 'V&A Waterfront', vibe: 'Harbor dining, shopping, seal watching, helicopter tours', isBasecamp: false, walkability: 96 },
      { name: 'Kloof Street & Bo-Kaap', vibe: 'Colorful pastel houses, trendy coffee spots, Cape Malay cuisine', isBasecamp: false, walkability: 92 }
    ],
    landmarks: [
      { name: 'Table Mountain Cableway Sunset', category: 'Sightseeing', vibeTag: '⛰️ Natural Wonder', description: 'Rotating cable car up to the flat-topped summit overlooking the Atlantic Ocean.', timeSlot: 'Evening', cost: 22 },
      { name: 'Boulders Beach African Penguin Colony', category: 'Sightseeing', vibeTag: '🐧 Wild Penguins', description: 'Walk along wooden boardwalks right beside wild African penguins nesting on granite sands.', timeSlot: 'Morning', cost: 10 },
      { name: 'Lion\'s Head Sunrise Scramble', category: 'Sightseeing', vibeTag: '🥾 360° Dawn Panorama', description: 'Exciting 90-minute hike with ladders offering views across Camps Bay and the City Bowl.', timeSlot: 'Morning', cost: 0 },
      { name: 'Kirstenbosch Botanical Canopy Walk', category: 'Relaxation', vibeTag: '🌿 Boomslang Bridge', description: 'Elevated curved timber walkway winding above the tree canopy.', timeSlot: 'Afternoon', cost: 12 }
    ],
    dishes: [
      { name: 'Cape Malay Chicken Curry with Roti', description: 'Fragrant sweet-and-savory spiced curry with cardamom, dried apricots, and flaky flatbread.', typicalCost: 'R 130 ($7.20)', spot: 'Bo-Kaap Kombuis' },
      { name: 'Fresh Kingklip or Linefish on the Grill', description: 'Locally caught Atlantic linefish grilled with lemon herb butter and crisp chips.', typicalCost: 'R 185 ($10.20)', spot: 'Chapman\'s Peak Hotel' },
      { name: 'Braai Platter & Biltong', description: 'South African wood-fired BBQ with boerewors sausage, lamb chops, and cured beef biltong.', typicalCost: 'R 220 ($12)', spot: 'Mzoli\'s Place' }
    ],
    weather: { season: 'Sunny & Coastal', highC: 24, lowC: 15, rainRisk: 'Low', summary: 'Crisp ocean breezes with bright blue sunshine.' },
    airport: 'Cape Town International (CPT)',
    transitAdvice: 'Uber is extremely fast, cheap, and safe everywhere across Cape Town.'
  },
  {
    city: 'Reykjavik',
    country: 'Iceland',
    region: 'Europe',
    tagline: 'Northern Lights, Geothermal Blue Lagoons & Volcanic Waterfalls',
    heroImage: 'https://images.unsplash.com/photo-1504893524553-b855bce32c67?auto=format&fit=crop&w=1600&q=80',
    currency: 'ISK',
    currencySymbol: 'kr',
    exchangeRateToUSD: 139.0,
    avgBudgetDailyUSD: 210,
    vibeTags: ['Aurora Glow', 'Geothermal Spas', 'Volcano Trails', 'Glacier Lagoons'],
    neighborhoods: [
      { name: 'Downtown 101 Reykjavik', vibe: 'Colorful corrugated iron houses, cozy bakeries, design shops', isBasecamp: true, walkability: 98 },
      { name: 'Grandi Harbour District', vibe: 'Converted fish packing warehouses with ice cream and galleries', isBasecamp: false, walkability: 90 }
    ],
    landmarks: [
      { name: 'Sky Lagoon Pure Ritual Soak', category: 'Relaxation', vibeTag: '🧖 Geothermal Ocean Infinity', description: 'Oceanfront thermal pool with a 7-step cold plunge, sauna, and sea mist scrub.', timeSlot: 'Afternoon', cost: 75 },
      { name: 'Golden Circle (Geysir, Gullfoss & Thingvellir)', category: 'Sightseeing', vibeTag: '🌋 Erupting Geysers', description: 'Witness Strokkur geyser blast steam 30 meters high and tectonic plate rifts.', timeSlot: 'Morning', cost: 60 },
      { name: 'Hallgrimskirkja Tower Ascent', category: 'Sightseeing', vibeTag: '⛪ Basalt Columns View', description: 'Iconic church inspired by volcanic basalt columns with 360° colorful rooftop views.', timeSlot: 'Midday', cost: 10 },
      { name: 'Northern Lights (Aurora) Night Expedition', category: 'Sightseeing', vibeTag: '🌌 Dancing Aurora', description: 'Chasing the emerald geomagnetic dancing curtains in dark volcanic fields.', timeSlot: 'Evening', cost: 50 }
    ],
    dishes: [
      { name: 'Icelandic Lamb Stew (Kjötsúpa)', description: 'Hearty traditional soup with tender free-range lamb, root vegetables, and fragrant herbs.', typicalCost: '2,800 ISK ($20)', spot: 'Icelandic Street Food' },
      { name: 'Famous Icelandic Hot Dog (Pylsur)', description: 'Lamb-based hot dog with crispy fried onions, raw onions, sweet brown mustard, and remoulade.', typicalCost: '750 ISK ($5.40)', spot: 'Bæjarins Beztu Pylsur' },
      { name: 'Fresh Cinnamon Cardamom Bun (Snúður)', description: 'Giant freshly baked warm cinnamon bun with chocolate glaze.', typicalCost: '650 ISK ($4.70)', spot: 'Brauð & Co' }
    ],
    weather: { season: 'Crisp Arctic Mild', highC: 13, lowC: 6, rainRisk: 'Moderate', summary: 'Crisp clean air, dramatic sky light, pack windproof layers.' },
    airport: 'Keflavik International (KEF)',
    transitAdvice: 'Flybus direct transfer from KEF into BSI Bus Terminal (45 mins).'
  }
];

export const GENZ_PACKAGE_PRESETS = [
  {
    id: 'tiktok-aesthetic',
    name: 'Social & Aesthetic',
    emoji: '📸',
    tagline: 'Viral Cafes, Hidden Speakeasies & Golden Hour Views',
    badge: 'VIRAL SPOTS 🔥',
    style: 'Balanced',
    pace: 'Moderate (3-4 sights/day)',
    emphasis: 'Photo spots, design boutiques, indie bakeries, sunset decks'
  },
  {
    id: 'foodie-odyssey',
    name: 'Foodie & Night Markets',
    emoji: '🍜',
    tagline: 'Street Food Crawls, Michelin Lunches & Local Izakayas',
    badge: 'MICHELIN + STREET 🤤',
    style: 'Food & Wine',
    pace: 'Moderate (3-4 sights/day)',
    emphasis: 'Artisan bakeries, chef tasting counters, night food stalls'
  },
  {
    id: 'nomad-wellness',
    name: 'Slow Travel & Wellness',
    emoji: '🌿',
    tagline: 'Thermal Spas, Work-Friendly Cafes & Mindful Walks',
    badge: 'ZERO BURNOUT 🧘',
    style: 'Relaxed Leisure',
    pace: 'Relaxed (1-2 main sights/day)',
    emphasis: 'Quiet neighborhood gems, saunas, scenic gardens, slow brunch'
  },
  {
    id: 'backpacker-nightlife',
    name: 'Party, Thrills & Backpacker',
    emoji: '⚡',
    tagline: 'Underground Beats, Budget Hacks & High Energy',
    badge: 'HIGH ENERGY 🚀',
    style: 'Adventure & Outdoors',
    pace: 'High Energy (5+ sights/day)',
    emphasis: 'Rooftop DJ sets, late night bites, scooter tours, budget basecamps'
  },
  {
    id: 'luxe-bespoke',
    name: 'Luxe Boutique Escape',
    emoji: '💎',
    tagline: 'Design Hotels, Private Tastings & Scenic Helicopter Vistas',
    badge: 'OLD MONEY LUXE ✨',
    style: 'Cultural Immersion',
    pace: 'Moderate (3-4 sights/day)',
    emphasis: 'Rooftop cocktail lounges, private boat charters, heritage stays'
  }
];
