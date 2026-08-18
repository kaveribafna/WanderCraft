import { TripPlan } from '../types/travel';

export const SAMPLE_TRIPS: TripPlan[] = [
  {
    id: 'tokyo-7d-balanced',
    destination: 'Tokyo, Japan',
    country: 'Japan',
    tagline: 'Neon Shrines, Tsukiji Aromas & Mountain Vistas',
    overview: 'A hyper-optimized 7-day journey balancing hyper-modern Shibuya/Shinjuku with historic Asakusa, Yanaka old town, and a scenic day trip to Hakone/Mt. Fuji.',
    startDate: '2026-09-12',
    endDate: '2026-09-18',
    totalDays: 7,
    budgetAmount: 2200,
    currency: 'USD',
    partySize: 2,
    partyType: 'Couple',
    travelStyle: 'Balanced',
    travelPace: 'Moderate (3-4 sights/day)',
    heroImage: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1600&q=80',
    createdAt: '2026-08-17T09:00:00Z',
    logistics: {
      airportTransferAdvice: 'Take the Keisei Skyliner from Narita to Ueno (41 mins, $18) or Tokyo Monorail from Haneda to Hamamatsucho (13 mins, $4).',
      recommendedTransitPass: 'Tokyo Subway 72-Hour Ticket + Pasmo/Suica IC Card for JR Lines',
      dailyTransitEstimatedCost: 11,
      routeEfficiencyScore: 96,
      totalEstimatedWalkingKm: 68.5,
      transitTips: [
        'Load 5,000 JPY on a digital Suica card in Apple/Google Wallet before landing.',
        'Tokyo metro runs 05:00 to 00:30; taxis after midnight incur a 20% surcharge.',
        'Follow floor markings for exact subway car door boarding positions.'
      ]
    },
    budget: {
      totalBudget: 2200,
      currency: 'USD',
      tier: 'Balanced Mid-Range',
      localCurrencyCode: 'JPY',
      exchangeRateToUSD: 154.2,
      dailyAllowanceAverage: 85,
      categories: [
        { id: 'stays', name: 'Accommodation (6 nights)', allocatedAmount: 840, spentAmount: 0, percentage: 38, icon: 'Hotel', notes: '$140/night for stylish design hotel in Shinjuku/Ueno' },
        { id: 'food', name: 'Dining & Street Food', allocatedAmount: 630, spentAmount: 0, percentage: 29, icon: 'Utensils', notes: 'Ramen bars, sushi lunches, izakaya dinners (~$45/person/day)' },
        { id: 'activities', name: 'Experiences & Entry Tickets', allocatedAmount: 320, spentAmount: 0, percentage: 15, icon: 'Ticket', notes: 'teamLab Borderless, Shibuya Sky sunset, Hakone ropeway' },
        { id: 'transit', name: 'Local Trains & Airport Express', allocatedAmount: 190, spentAmount: 0, percentage: 9, icon: 'Train', notes: 'Subway passes + Hakone Freepass + IC card top-ups' },
        { id: 'buffer', name: 'Souvenirs & Buffer', allocatedAmount: 220, spentAmount: 0, percentage: 10, icon: 'Shield', notes: 'Matcha snacks, Gachapon, emergency buffer' }
      ],
      savingsTips: [
        { title: 'Convenience Store Breakfasts', savingsEstimate: 75, tradeoff: 'High quality egg sandwiches & onigiri at 7-Eleven/Lawson for $3 instead of $18 sit-down café.', category: 'Dining' },
        { title: 'Subway 72-Hour Pass vs Single Tickets', savingsEstimate: 35, tradeoff: 'Unlimited metro rides for $10 vs $1.70 per individual tap.', category: 'Transit' },
        { title: 'High-end Lunch Sets vs Dinner', savingsEstimate: 120, tradeoff: 'Book Michelin-grade wagyu & omakase during lunch menus for 50% lower price.', category: 'Dining' }
      ]
    },
    stays: [
      {
        id: 'stay-1',
        tier: 'Primary Choice',
        name: 'The Square Hotel Ginza / OMO5 Tokyo Otsuka',
        propertyType: 'Boutique Stay',
        neighborhood: 'Ginza / Otsuka Station',
        pricePerNight: 138,
        estimatedTotal: 828,
        rating: 4.8,
        walkabilityScore: 95,
        description: 'Ultra-clean modern boutique hotel with deep wooden soaker tubs, rooftop terrace, and directly adjacent to Yamanote line transit.',
        amenities: ['Free High-Speed Wi-Fi', 'Public Bath / Sauna', 'Laundry on site', 'Coffee Lounge'],
        pros: ['Steps from subway station', 'Quiet nights away from drunken nightlife noise', 'Luggage delivery forwarder on-site'],
        cons: ['Standard compact Japanese room dimensions (19 sqm)'],
        locationNote: 'Direct 1-seat ride to Shibuya, Shinjuku, and Tokyo Central.'
      },
      {
        id: 'stay-2',
        tier: 'Value Option',
        name: 'Candeo Hotels Tokyo Shimbashi',
        propertyType: 'Hotel',
        neighborhood: 'Shimbashi',
        pricePerNight: 105,
        estimatedTotal: 630,
        rating: 4.6,
        walkabilityScore: 92,
        description: 'Sky Spa with open-air rooftop hot springs overlooking Tokyo Tower at an exceptional mid-range price point.',
        amenities: ['Sky Spa Rooftop Onsen', 'Buffet Breakfast', 'Modern Workstations'],
        pros: ['Incredible rooftop open-air onsen', 'Surrounded by authentic salaryman izakayas'],
        cons: ['Bustling commuter rush hour in morning'],
        locationNote: 'Walking distance to Tsukiji Outer Market and Ginza.'
      },
      {
        id: 'stay-3',
        tier: 'Boutique Upgrade',
        name: 'Trunk Hotel Cat Street Shibuya',
        propertyType: 'Boutique Stay',
        neighborhood: 'Harajuku / Shibuya',
        pricePerNight: 290,
        estimatedTotal: 1740,
        rating: 4.9,
        walkabilityScore: 98,
        description: 'Trendy social hub featuring eco-luxury design, custom vinyl turntables, and local craft cocktail bar.',
        amenities: ['Craft Cocktail Bar', 'Bespoke Interior Design', 'Cat Street terrace'],
        pros: ['Heart of Tokyo streetwear & café culture', 'Spacious rooms with designer balconies'],
        cons: ['Requires increasing total lodging allocation'],
        locationNote: 'Direct access to Harajuku backstreets and Shibuya Crossing.'
      }
    ],
    itinerary: [
      {
        dayNumber: 1,
        date: '2026-09-12',
        title: 'Arrival, Neon Shinjuku & Omoide Yokocho',
        theme: 'Orientation & First Night Izakaya',
        neighborhoodCluster: 'Shinjuku & Kabukicho',
        transitSummary: 'Airport Express to Shinjuku; walking throughout the evening',
        estimatedWalkingKm: 7.2,
        activities: [
          {
            id: 'act-1-1',
            timeSlot: 'Afternoon',
            startTime: '15:00',
            endTime: '17:00',
            title: 'Hotel Check-in & Pocket Wi-Fi / IC Card Setup',
            description: 'Settle into room, activate Pasmo/Suica on phones, grab an iced matcha from FamilyMart, and adjust to the city rhythm.',
            durationMinutes: 90,
            estimatedCost: 0,
            location: 'Hotel Lobby & Shimbashi Station',
            neighborhood: 'Shinjuku',
            lat: 35.6938,
            lng: 139.7034,
            category: 'Relaxation',
            bookingRequired: false,
            crowdTip: 'Beat the evening luggage rush by arriving before 16:30.',
            completed: false
          },
          {
            id: 'act-1-2',
            timeSlot: 'Evening',
            startTime: '17:30',
            endTime: '19:30',
            title: 'Tokyo Metropolitan Government Building Sunset Deck',
            description: 'Ascend to the 45th floor observation deck for panoramic views across Tokyo and Mt. Fuji silhouette at golden hour.',
            durationMinutes: 90,
            estimatedCost: 0,
            location: '2 Chome-8-1 Nishishinjuku',
            neighborhood: 'Nishi-Shinjuku',
            lat: 35.6896,
            lng: 139.6921,
            category: 'Sightseeing',
            bookingRequired: false,
            crowdTip: 'South Observatory is free and less crowded than Roppongi Hills.',
            completed: false,
            alternatives: [
              {
                id: 'alt-1-1',
                title: 'Roppongi Hills Mori Sky Deck',
                description: 'Paid open-air roof deck with Tokyo Tower lit up up-close.',
                costDifference: 18,
                category: 'Sightseeing',
                whySwap: 'Better view of Tokyo Tower lit up at night.'
              }
            ]
          },
          {
            id: 'act-1-3',
            timeSlot: 'Night',
            startTime: '20:00',
            endTime: '22:30',
            title: 'Omoide Yokocho (Memory Lane) Yakitori & Highballs',
            description: 'Dine in the historic narrow lantern-lit alleyways where master grillers serve skewers of charcoal yakitori and draft beer.',
            durationMinutes: 120,
            estimatedCost: 32,
            location: '1 Chome-2 Nishishinjuku',
            neighborhood: 'Shinjuku',
            lat: 35.6931,
            lng: 139.6997,
            category: 'Food',
            bookingRequired: false,
            crowdTip: 'Look for stalls with open wooden counter seats; $3 cover charge is standard for appetizers.',
            completed: false
          }
        ]
      },
      {
        dayNumber: 2,
        date: '2026-09-13',
        title: 'Historic Asakusa & Digital Future in Toyosu',
        theme: 'Old World Edo Meets Digital teamLab',
        neighborhoodCluster: 'Asakusa & Toyosu Waterfront',
        transitSummary: 'Ginza Line to Asakusa, then Yurikamome monorail across Rainbow Bridge',
        estimatedWalkingKm: 11.4,
        activities: [
          {
            id: 'act-2-1',
            timeSlot: 'Morning',
            startTime: '08:00',
            endTime: '10:30',
            title: 'Senso-ji Temple & Nakamise Street at Dawn',
            description: 'Visit Tokyo oldest temple before the tour buses arrive. Walk beneath the giant red Kaminarimon lantern and draw an omikuji fortune.',
            durationMinutes: 120,
            estimatedCost: 5,
            location: '2 Chome-3-1 Asakusa',
            neighborhood: 'Asakusa',
            lat: 35.7148,
            lng: 139.7967,
            category: 'Culture',
            bookingRequired: false,
            crowdTip: 'Arrive before 08:30 for empty temple grounds; shop stalls open at 09:00 with fresh melonpan.',
            completed: false
          },
          {
            id: 'act-2-2',
            timeSlot: 'Midday',
            startTime: '11:15',
            endTime: '12:45',
            title: 'Tsukiji Outer Market Seafood Lunch Crawl',
            description: 'Sample fresh seared king crab legs, tamagoyaki (sweet rolled omelette), and fatty tuna (Otoro) nigiri bowls.',
            durationMinutes: 90,
            estimatedCost: 28,
            location: '4 Chome-16-2 Tsukiji',
            neighborhood: 'Tsukiji',
            lat: 35.6655,
            lng: 139.7708,
            category: 'Food',
            bookingRequired: false,
            crowdTip: 'Cash is king here; carry 1,000 JPY bills for vendor stands.',
            completed: false
          },
          {
            id: 'act-2-3',
            timeSlot: 'Afternoon',
            startTime: '14:00',
            endTime: '16:30',
            title: 'teamLab Borderless (Azabudai Hills) Immersion',
            description: 'Wander through the world-famous digital art museum where fluid light artworks communicate, move, and blend seamlessly.',
            durationMinutes: 150,
            estimatedCost: 38,
            location: 'Azabudai Hills, Minato City',
            neighborhood: 'Azabudai Hills',
            lat: 35.6605,
            lng: 139.7428,
            category: 'Culture',
            bookingRequired: true,
            bookingTip: 'Book official tickets exactly 30 days prior on the teamLab website.',
            crowdTip: 'Wear dark, comfortable flat shoes with pants for mirror flooring.',
            completed: false
          },
          {
            id: 'act-2-4',
            timeSlot: 'Evening',
            startTime: '18:30',
            endTime: '21:00',
            title: 'Odaiba Seaside Deck & Gundam Statue Sunset Walk',
            description: 'Ride the futuristic automated Yurikamome line across the Tokyo Bay Rainbow Bridge and watch the glowing skyline.',
            durationMinutes: 120,
            estimatedCost: 24,
            location: '1 Chome-1-10 Aomi, Koto City',
            neighborhood: 'Odaiba',
            lat: 35.6244,
            lng: 139.7755,
            category: 'Sightseeing',
            bookingRequired: false,
            completed: false
          }
        ]
      },
      {
        dayNumber: 3,
        date: '2026-09-14',
        title: 'Shibuya Energy, Meiji Forest & Harajuku Vintage',
        theme: 'Pop Culture, Fashion & Sacred Shrines',
        neighborhoodCluster: 'Harajuku, Omotesando & Shibuya',
        transitSummary: 'Direct Yamanote Line, primarily walkable district',
        estimatedWalkingKm: 12.1,
        activities: [
          {
            id: 'act-3-1',
            timeSlot: 'Morning',
            startTime: '08:30',
            endTime: '10:30',
            title: 'Meiji Jingu Sacred Forest Walk & Ema Plaque Wishing',
            description: 'Step into a tranquil 170-acre forest of 120,000 evergreen trees in the middle of Tokyo. Write your wishes on a wooden ema plaque.',
            durationMinutes: 120,
            estimatedCost: 5,
            location: '1-1 Yoyogikamizonocho, Shibuya',
            neighborhood: 'Harajuku',
            lat: 35.6764,
            lng: 139.6993,
            category: 'Nature',
            bookingRequired: false,
            crowdTip: 'Enter through the towering cedar Torii gate before 09:00 for total zen silence.',
            completed: false
          },
          {
            id: 'act-3-2',
            timeSlot: 'Midday',
            startTime: '11:00',
            endTime: '13:30',
            title: 'Takeshita Street, Cat Street & Omotesando Architecture',
            description: 'Explore the contrasting vibes of colorful kawaii boutiques on Takeshita Street followed by hip indie vintage thrift shops on Cat Street.',
            durationMinutes: 150,
            estimatedCost: 15,
            location: 'Cat Street, Jingumae',
            neighborhood: 'Harajuku / Omotesando',
            lat: 35.6675,
            lng: 139.7061,
            category: 'Shopping',
            bookingRequired: false,
            completed: false
          },
          {
            id: 'act-3-3',
            timeSlot: 'Afternoon',
            startTime: '15:00',
            endTime: '17:30',
            title: 'Shibuya Scramble Crossing & Shibuya Sky Rooftop',
            description: 'Cross the world’s busiest intersection and take the escalator to Shibuya Sky for a 360-degree glass rooftop observation deck.',
            durationMinutes: 120,
            estimatedCost: 22,
            location: '2 Chome-24-12 Shibuya',
            neighborhood: 'Shibuya',
            lat: 35.6591,
            lng: 139.7006,
            category: 'Sightseeing',
            bookingRequired: true,
            bookingTip: 'Book 4 weeks ahead for the coveted 16:40-17:20 sunset slot.',
            completed: false
          },
          {
            id: 'act-3-4',
            timeSlot: 'Night',
            startTime: '19:00',
            endTime: '22:00',
            title: 'Shibuya Nonbei Yokocho & Craft Cocktail Lounge',
            description: 'Tuck into a 6-seat bar under the train tracks for grilled yakitori followed by custom highballs at Bar Trench or SG Club.',
            durationMinutes: 150,
            estimatedCost: 45,
            location: '1 Chome-25-10 Shibuya',
            neighborhood: 'Shibuya',
            lat: 35.6601,
            lng: 139.7022,
            category: 'Nightlife',
            bookingRequired: false,
            completed: false
          }
        ]
      },
      {
        dayNumber: 4,
        date: '2026-09-15',
        title: 'Day Trip to Hakone Hot Springs & Mt. Fuji Views',
        theme: 'Volcanic Springs, Pirate Ships & Ropeways',
        neighborhoodCluster: 'Hakone & Lake Ashi',
        transitSummary: 'Odakyu Romancecar from Shinjuku to Hakone-Yumoto (85 mins)',
        estimatedWalkingKm: 8.5,
        activities: [
          {
            id: 'act-4-1',
            timeSlot: 'Morning',
            startTime: '07:30',
            endTime: '11:00',
            title: 'Odakyu Romancecar & Hakone Tozan Switchback Train',
            description: 'Glide into the misty cedar mountains of Hakone on the express train, then ride the scenic switchback railway through mountain gorges.',
            durationMinutes: 180,
            estimatedCost: 45,
            location: 'Hakone-Yumoto Station',
            neighborhood: 'Hakone',
            lat: 35.2333,
            lng: 139.1039,
            category: 'Transit',
            bookingRequired: true,
            bookingTip: 'Get the 2-Day Hakone Freepass ($45) which covers all 8 mountain transit networks.',
            completed: false
          },
          {
            id: 'act-4-2',
            timeSlot: 'Midday',
            startTime: '11:30',
            endTime: '13:30',
            title: 'Owakudani Volcanic Valley & Black Eggs (Kuro-tamago)',
            description: 'Ride the Hakone Ropeway over steaming sulfur vents. Eat black eggs boiled in the volcanic mineral springs (said to add 7 years to your life).',
            durationMinutes: 120,
            estimatedCost: 10,
            location: 'Sengokuhara, Hakone',
            neighborhood: 'Owakudani',
            lat: 35.2422,
            lng: 139.0194,
            category: 'Nature',
            bookingRequired: false,
            completed: false
          },
          {
            id: 'act-4-3',
            timeSlot: 'Afternoon',
            startTime: '14:00',
            endTime: '17:00',
            title: 'Lake Ashi Sightseeing Cruise & Hakone Shrine Torii of Peace',
            description: 'Cruise across volcanic Lake Ashi on a whimsical pirate ship, photographing the floating crimson Torii gate with Mt. Fuji behind it.',
            durationMinutes: 150,
            estimatedCost: 0,
            location: '80-1 Motohakone, Hakone',
            neighborhood: 'Lake Ashi',
            lat: 35.2045,
            lng: 139.0255,
            category: 'Sightseeing',
            bookingRequired: false,
            completed: false
          }
        ]
      },
      {
        dayNumber: 5,
        date: '2026-09-16',
        title: 'Old Edo Yanaka, Ueno Park & Akihabara Tech Culture',
        theme: 'Artisanal Retro Alleys to Electric Town',
        neighborhoodCluster: 'Yanaka, Ueno & Akihabara',
        transitSummary: 'Walking along Yanaka Ginza, Yamanote line between Ueno and Akihabara',
        estimatedWalkingKm: 9.8,
        activities: [
          {
            id: 'act-5-1',
            timeSlot: 'Morning',
            startTime: '09:00',
            endTime: '11:30',
            title: 'Yanaka Ginza Nostalgic Walking Tour & Cat Alley',
            description: 'Discover one of Tokyo few surviving pre-war neighborhoods. Stroll through quiet temple graveyards, retro sweet shops, and craft woodblock ateliers.',
            durationMinutes: 150,
            estimatedCost: 10,
            location: '3 Chome-13-1 Yanaka, Taito City',
            neighborhood: 'Yanaka',
            lat: 35.7275,
            lng: 139.7686,
            category: 'Culture',
            bookingRequired: false,
            completed: false
          },
          {
            id: 'act-5-2',
            timeSlot: 'Midday',
            startTime: '12:00',
            endTime: '14:30',
            title: 'Tokyo National Museum & Ueno Park Lotus Pond',
            description: 'View samurai katana swords, ancient kimono silk, and Edo ukiyo-e prints at Japan oldest and largest art museum.',
            durationMinutes: 150,
            estimatedCost: 10,
            location: '13-9 Uenokoen, Taito City',
            neighborhood: 'Ueno',
            lat: 35.7188,
            lng: 139.7765,
            category: 'Culture',
            bookingRequired: false,
            completed: false
          },
          {
            id: 'act-5-3',
            timeSlot: 'Afternoon',
            startTime: '15:30',
            endTime: '18:30',
            title: 'Akihabara Electric Town & Retro Gaming Arcades',
            description: 'Explore 8-floor electronic bazaars, vintage Famicom/Game Boy shops (Super Potato), and multi-story claw machine arcades.',
            durationMinutes: 180,
            estimatedCost: 20,
            location: 'Sotokanda, Chiyoda City',
            neighborhood: 'Akihabara',
            lat: 35.6983,
            lng: 139.7714,
            category: 'Shopping',
            bookingRequired: false,
            completed: false
          }
        ]
      },
      {
        dayNumber: 6,
        date: '2026-09-17',
        title: 'Ginza Luxury Architecture, Ramen Street & Roppongi',
        theme: 'Gourmet Gastronomy & Modern Art',
        neighborhoodCluster: 'Ginza, Tokyo Station & Roppongi',
        transitSummary: 'Marunouchi / Hibiya Subway lines',
        estimatedWalkingKm: 8.9,
        activities: [
          {
            id: 'act-6-1',
            timeSlot: 'Morning',
            startTime: '10:00',
            endTime: '12:30',
            title: 'Ginza Six Rooftop Garden & Itoya 12-Story Stationery Sanctuary',
            description: 'Browse architectural flagships, sample Japanese green teas, and visit the iconic 12-floor paper & pen paradise at Itoya.',
            durationMinutes: 150,
            estimatedCost: 15,
            location: '2 Chome-7-15 Ginza',
            neighborhood: 'Ginza',
            lat: 35.6723,
            lng: 139.7667,
            category: 'Shopping',
            bookingRequired: false,
            completed: false
          },
          {
            id: 'act-6-2',
            timeSlot: 'Midday',
            startTime: '13:00',
            endTime: '14:30',
            title: 'Tokyo Ramen Street Tasting at Tokyo Station',
            description: 'Slurp dipping noodles (tsukemen) with rich pork-seafood broth at Rokurinsha or vegan ramen at T\'s Tantan.',
            durationMinutes: 90,
            estimatedCost: 14,
            location: 'Tokyo Station Underground B1',
            neighborhood: 'Marunouchi',
            lat: 35.6812,
            lng: 139.7671,
            category: 'Food',
            bookingRequired: false,
            completed: false
          },
          {
            id: 'act-6-3',
            timeSlot: 'Evening',
            startTime: '18:00',
            endTime: '21:30',
            title: 'Roppongi Hills Mori Art Museum & Farewell Wagyu Feast',
            description: 'Visit the 53rd floor contemporary art museum followed by an unforgettable A5 Wagyu Sukiyaki dinner with raw egg dip.',
            durationMinutes: 180,
            estimatedCost: 65,
            location: '6 Chome-10-1 Roppongi',
            neighborhood: 'Roppongi',
            lat: 35.6628,
            lng: 139.7292,
            category: 'Food',
            bookingRequired: true,
            bookingTip: 'Book dinner table 2 weeks in advance via tablecheck.',
            completed: false
          }
        ]
      },
      {
        dayNumber: 7,
        date: '2026-09-18',
        title: 'Shinjuku Gyoen Garden, Souvenir Run & Departure',
        theme: 'Peaceful Farewell & Airport Transit',
        neighborhoodCluster: 'Shinjuku & Tokyo Haneda/Narita',
        transitSummary: 'Direct express rail to airport',
        estimatedWalkingKm: 6.4,
        activities: [
          {
            id: 'act-7-1',
            timeSlot: 'Morning',
            startTime: '09:00',
            endTime: '11:30',
            title: 'Shinjuku Gyoen National Garden Glasshouse Walk',
            description: 'Peaceful stroll across French Formal, English Landscape, and Traditional Japanese gardens with koi ponds.',
            durationMinutes: 120,
            estimatedCost: 5,
            location: '11 Naitomachi, Shinjuku City',
            neighborhood: 'Shinjuku',
            lat: 35.6852,
            lng: 139.7101,
            category: 'Nature',
            bookingRequired: false,
            completed: false
          },
          {
            id: 'act-7-2',
            timeSlot: 'Afternoon',
            startTime: '12:30',
            endTime: '14:30',
            title: 'Depachika (Department Store Basement) Food Hall Souvenirs',
            description: 'Pick up Tokyo Banana pastries, premium matcha biscuits, and KitKat regionals at Isetan Shinjuku basement food hall.',
            durationMinutes: 120,
            estimatedCost: 35,
            location: '3 Chome-14-1 Shinjuku',
            neighborhood: 'Shinjuku',
            lat: 35.6917,
            lng: 139.7046,
            category: 'Shopping',
            bookingRequired: false,
            completed: false
          },
          {
            id: 'act-7-3',
            timeSlot: 'Evening',
            startTime: '15:30',
            endTime: '18:00',
            title: 'Airport Transit & Departure',
            description: 'Board the Narita Express or Tokyo Monorail for seamless flight departure check-in.',
            durationMinutes: 150,
            estimatedCost: 18,
            location: 'Airport Terminal',
            neighborhood: 'Narita / Haneda',
            lat: 35.5494,
            lng: 139.7798,
            category: 'Transit',
            bookingRequired: false,
            completed: false
          }
        ]
      }
    ],
    culinary: {
      overview: 'Tokyo is the undisputed gastronomy capital of the world with over 200 Michelin-starred establishments and tens of thousands of cozy alleyway counters.',
      signatureDishes: [
        { id: 'dish-1', name: 'Tonkotsu / Tsukemen Ramen', localName: '豚骨ラーメン', description: 'Rich 18-hour simmered pork broth noodles served with tender chashu pork, seasoned soft-boiled egg, and bamboo shoots.', typicalCost: '$8 - $12', vegetarianFriendly: false, mustTrySpot: 'Rokurinsha (Tokyo Station) or Ichiran' },
        { id: 'dish-2', name: 'Tsukiji Fresh Nigiri Sushi', localName: '江戸前寿司', description: 'Edomae-style sushi with freshly sliced bluefin fatty tuna (Otoro), sea urchin (Uni), and sweet eel (Unagi).', typicalCost: '$22 - $45', vegetarianFriendly: false, mustTrySpot: 'Sushi Zanmai Main Branch, Tsukiji' },
        { id: 'dish-3', name: 'Charcoal Grilled Yakitori', localName: '焼き鳥', description: 'Skewered chicken thigh, scallion, and minced meatballs grilled over binchotan white charcoal with sweet tare glaze.', typicalCost: '$2.50 per skewer', vegetarianFriendly: false, mustTrySpot: 'Torikizoku or Omoide Yokocho stalls' },
        { id: 'dish-4', name: 'Fluffy Souffle Pancakes', localName: 'スフレパンケーキ', description: 'Melt-in-your-mouth cloud-like pancakes served with whipped Hokkaido butter and fresh maple cream.', typicalCost: '$12 - $15', vegetarianFriendly: true, mustTrySpot: 'A Happy Pancake (Omotesando)' },
        { id: 'dish-5', name: 'Matcha Parfait & Warabi Mochi', localName: '抹茶パフェ', description: 'Uji matcha gelato layered with chewy rice dumplings, red bean paste, and toasted soybean kinako powder.', typicalCost: '$7 - $10', vegetarianFriendly: true, mustTrySpot: 'Suzukien Asakusa (Intense Level 7 Matcha)' }
      ],
      restaurants: [
        { id: 'rest-1', name: 'Rokurinsha', mealType: 'Lunch', cuisine: 'Tsukemen Dipping Ramen', neighborhood: 'Tokyo Station B1', priceTier: '$', signatureOrder: 'Tokusei Tsukemen with extra seasoned egg', reservationNeeded: false, reservationTip: 'Expect a 20-minute line; moves fast with ticket vending machines.', dayNumber: 2 },
        { id: 'rest-2', name: 'Afuri Ramen Harajuku', mealType: 'Dinner', cuisine: 'Yuzu Shio Ramen', neighborhood: 'Harajuku', priceTier: '$$', signatureOrder: 'Yuzu Ratanmen (citrus chili ramen)', reservationNeeded: false, reservationTip: 'Offers excellent vegan ramen broth.', dayNumber: 3 },
        { id: 'rest-3', name: 'Gyukatsu Motomura', mealType: 'Lunch', cuisine: 'Deep-fried Beef Cutlet', neighborhood: 'Shibuya', priceTier: '$$', signatureOrder: 'Medium Rare Beef Cutlet grilled on stone tablet', reservationNeeded: false, reservationTip: 'Arrive 15 mins before opening at 11:00.', dayNumber: 3 },
        { id: 'rest-4', name: 'Imahan Sukiyaki Ningyocho', mealType: 'Dinner', cuisine: 'Traditional Sukiyaki Wagyu', neighborhood: 'Nihonbashi / Roppongi', priceTier: '$$$$', signatureOrder: 'Special Kuroge Wagyu Sukiyaki course', reservationNeeded: true, reservationTip: 'Book 30 days prior on TableCheck.', dayNumber: 6 }
      ],
      streetFoodMarkets: [
        { name: 'Tsukiji Outer Market', neighborhood: 'Tsukiji', bestTime: '09:00 - 13:00', highlight: 'Freshly torched scallop skewers with butter and sea urchin' },
        { name: 'Nakamise-dori', neighborhood: 'Asakusa', bestTime: '10:00 - 16:00', highlight: 'Freshly fried Ningyoyaki bean cakes and warm melonpan' },
        { name: 'Ameyoko Market', neighborhood: 'Ueno', bestTime: '15:00 - 19:00', highlight: 'Cheap seasonal fruit skewers (muscat grapes & strawberries)' }
      ],
      foodEtiquetteTips: [
        'Never stick chopsticks vertically into a bowl of rice (associated with funeral rites).',
        'No tipping is allowed in Japan; excellent service is included and tipping can be seen as confusing or insulting.',
        'Slurping ramen noodles is encouraged as it cools the broth and signals appreciation.',
        'Avoid walking while eating street food; finish your snack near the stall where trash bins are provided.'
      ]
    },
    sentinel: {
      weather: {
        seasonLabel: 'Early Autumn (September)',
        temperatureHighC: 27,
        temperatureLowC: 20,
        rainfallRisk: 'Moderate',
        summary: 'Warm and pleasant during the day, cooling into comfortable evenings. Occasional brief rain showers.',
        clothingAdvice: 'Breathable light layers, comfortable slip-on sneakers for temple shoes-off rules, and a compact umbrella.'
      },
      rainyDayBackups: [
        { id: 'rain-1', replacesActivity: 'Meiji Jingu Forest Walk', indoorAlternative: 'Mori Art Museum + Roppongi Hills Observation Deck', neighborhood: 'Roppongi', costEstimate: 16, whyRecommended: 'Fully covered complex with world-class exhibits and indoor skyline panoramas.' },
        { id: 'rain-2', replacesActivity: 'Odaiba Seaside Deck', indoorAlternative: 'Art Aquarium Museum Ginza + Depachika Crawl', neighborhood: 'Ginza', costEstimate: 18, whyRecommended: 'Luminous indoor goldfish glass sculptures and basement pastry tastings.' }
      ],
      safetyAndEtiquette: [
        { category: 'Etiquette', title: 'Train Silence & Phone Calls', description: 'Set phone to "manner mode" (vibrate) on all trains. Avoid phone conversations.', severity: 'info' },
        { category: 'Transit Scam', title: 'Roppongi / Kabukicho Touts', description: 'Never follow street promoters offering "free drinks" or "hostess club discounts". Only enter established venues.', severity: 'warning' },
        { category: 'Money/Tipping', title: 'Trash Cans & Coins', description: 'Public trash bins are rare due to recycling laws; carry a small plastic bag in your daypack.', severity: 'info' }
      ],
      packingList: [
        { id: 'pack-1', category: 'Essentials & Docs', item: 'Passport with at least 6 months validity', packed: true, agentNote: 'Required at tax-free shopping counters' },
        { id: 'pack-2', category: 'Essentials & Docs', item: 'Visit Japan Web QR Code (Fast-track customs)', packed: true, agentNote: 'Fill out online 48 hours before departure' },
        { id: 'pack-3', category: 'Clothing & Footwear', item: 'Slip-on cushioned walking shoes', packed: false, agentNote: 'You will walk 12-15km/day and remove shoes at shrines/izakayas' },
        { id: 'pack-4', category: 'Tech & Power', item: 'Type A 2-prong plug adapter (100V, no ground pin)', packed: true, agentNote: 'Japan uses standard non-grounded 2-prong US style sockets' },
        { id: 'pack-5', category: 'Tech & Power', item: '10,000mAh Power Bank', packed: false, agentNote: 'Essential for intensive Google Maps navigation and Suica taps' },
        { id: 'pack-6', category: 'Weather & Gear', item: 'Ultra-light compact folding umbrella', packed: false, agentNote: 'September brings occasional 30-minute afternoon sprinkles' }
      ],
      emergencyContacts: {
        policeNumber: '110',
        ambulanceNumber: '119',
        touristHotline: '+81-50-3816-2720 (Japan National Tourism Org in English 24/7)',
        localTransitApp: 'Japan Travel by NAVITIME / Google Maps'
      }
    },
    debateLogs: [
      {
        id: 'deb-1',
        round: 1,
        timestamp: '09:00:12',
        speaker: 'atlas',
        type: 'proposal',
        headline: 'Cluster Architecture Initialized',
        message: 'I have partitioned Tokyo into 5 geographical sectors: West (Shinjuku/Shibuya), East (Asakusa/Ueno), Central (Ginza/Marunouchi), South Waterfront (Toyosu/Odaiba), and Mountain Escape (Hakone). This eliminates all cross-city ping-ponging.'
      },
      {
        id: 'deb-2',
        round: 1,
        timestamp: '09:00:15',
        speaker: 'ledger',
        targetAgent: 'haven',
        type: 'critique',
        headline: 'Lodging Allocation Boundary Set',
        message: 'Total budget is $2,200 for 2 travelers. Lodging cannot exceed $840 ($140/night) or we will compromise food and ticket allocations. Haven, please do not select luxury Roppongi hotels that burn 60% of our funds.'
      },
      {
        id: 'deb-3',
        round: 2,
        timestamp: '09:00:18',
        speaker: 'haven',
        targetAgent: 'ledger',
        type: 'consensus',
        headline: 'Boutique Basecamp Locked',
        message: 'Understood, Ledger. Selected The Square Hotel Ginza and OMO5 Tokyo Otsuka at $138/night with 95 walkability score and direct Yamanote line connectivity. Saved $460 compared to high-end chain hotels.'
      },
      {
        id: 'deb-4',
        round: 2,
        timestamp: '09:00:22',
        speaker: 'scribe',
        targetAgent: 'atlas',
        type: 'optimization',
        headline: 'Day 2 Flow Synced with teamLab',
        message: 'Aligned Asakusa Senso-ji early morning (08:00 before crowds) with Tsukiji seafood lunch, leading directly into the afternoon Azabudai teamLab slot. Walking is capped under 12km per day.'
      },
      {
        id: 'deb-5',
        round: 3,
        timestamp: '09:00:25',
        speaker: 'palate',
        targetAgent: 'scribe',
        type: 'proposal',
        headline: 'Gastronomy Nodes Embedded',
        message: 'Injected Rokurinsha ramen for Day 2 lunch, Takeshita crepes for Day 3 afternoon, and an authentic yakitori crawl in Omoide Yokocho on arrival evening. All culinary stops match the immediate neighborhood cluster.'
      },
      {
        id: 'deb-6',
        round: 3,
        timestamp: '09:00:29',
        speaker: 'sentinel',
        type: 'risk_flag',
        headline: 'Contingency & Typhoon Audit Passed',
        message: 'September weather has a 25% afternoon shower probability. Added Mori Art Museum and Roppongi Hills covered skydecks as rain swaps. Verified typhoon transit backup plans and Japanese 100V power adapter checklist.'
      }
    ]
  },
  {
    id: 'amalfi-5d-luxury',
    destination: 'Amalfi Coast, Italy',
    country: 'Italy',
    tagline: 'Cliffside Lemons, Capri Yacht Charters & Mediterranean Romance',
    overview: 'A breathtaking 5-day escape along the UNESCO Amalfi coastline, staying in cliffside Positano, taking a private boat charter around Capri\'s Faraglioni rocks, and dining at Michelin-starred seaside terraces.',
    startDate: '2026-06-10',
    endDate: '2026-06-14',
    totalDays: 5,
    budgetAmount: 6500,
    currency: 'USD',
    partySize: 2,
    partyType: 'Couple',
    travelStyle: 'Food & Wine',
    travelPace: 'Relaxed (1-2 main sights/day)',
    heroImage: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1600&q=80',
    createdAt: '2026-08-17T09:05:00Z',
    logistics: {
      airportTransferAdvice: 'Private Mercedes executive transfer from Naples Capodichino Airport (NAP) or Napoli Centrale train station directly to your Positano hotel (80 mins, €160).',
      recommendedTransitPass: 'Private Chauffeur + Positano-Amalfi-Capri High-Speed Hydrofoil Ferries',
      dailyTransitEstimatedCost: 65,
      routeEfficiencyScore: 94,
      totalEstimatedWalkingKm: 28.0,
      transitTips: [
        'Avoid renting a car; the SS163 cliffside road is intensely narrow with zero public parking.',
        'Travel between Positano and Amalfi via Travelmar ferry for the best coastal views and zero traffic jams.',
        'Book private boat charters departing from Positano Main Pier (Spiaggia Grande).'
      ]
    },
    budget: {
      totalBudget: 6500,
      currency: 'USD',
      tier: 'Luxury Bespoke',
      localCurrencyCode: 'EUR',
      exchangeRateToUSD: 0.92,
      dailyAllowanceAverage: 380,
      categories: [
        { id: 'stays', name: 'Luxury Cliffside Villa (4 nights)', allocatedAmount: 3200, spentAmount: 0, percentage: 49, icon: 'Hotel', notes: '$800/night for oceanfront balcony in Positano / Praiano' },
        { id: 'activities', name: 'Private Capri Yacht & Beach Clubs', allocatedAmount: 1450, spentAmount: 0, percentage: 22, icon: 'Ticket', notes: 'Full-day private Gozzo boat around Capri + La Fontelina sunbeds' },
        { id: 'food', name: 'Michelin & Seafood Dining', allocatedAmount: 1200, spentAmount: 0, percentage: 18, icon: 'Utensils', notes: 'Ristorante La Sponda, Da Adolfo beach lunch, lemon pasta' },
        { id: 'transit', name: 'Private Transfers & Ferries', allocatedAmount: 450, spentAmount: 0, percentage: 7, icon: 'Train', notes: 'Airport Mercedes transfer + luxury ferries' },
        { id: 'buffer', name: 'Limoncello & Artisanal Linen', allocatedAmount: 200, spentAmount: 0, percentage: 4, icon: 'Shield', notes: 'Custom handmade Positano sandals & ceramic keepsakes' }
      ],
      savingsTips: [
        { title: 'Praiano / Ravello Base vs Central Positano', savingsEstimate: 600, tradeoff: 'Stay in neighboring Praiano or hilltop Ravello for 30% larger terrace suites with fewer crowds.', category: 'Lodging' },
        { title: 'Shared Semi-Private Boat vs Full Private Yacht', savingsEstimate: 450, tradeoff: '6-person luxury catamaran to Capri instead of exclusive private gozzo.', category: 'Activities' }
      ]
    },
    stays: [
      {
        id: 'amalfi-stay-1',
        tier: 'Primary Choice',
        name: 'Hotel Marincanto Positano',
        propertyType: 'Boutique Stay',
        neighborhood: 'Positano Cliffside',
        pricePerNight: 780,
        estimatedTotal: 3120,
        rating: 4.9,
        walkabilityScore: 88,
        description: 'Iconic cliffside boutique hotel featuring infinity pool carved into rock, private beach descent, and panoramic terraces overlooking Positano village.',
        amenities: ['Rock-carved Infinity Pool', 'Private Beach Platform', 'Prosecco Terrace Bar', 'Full American Breakfast with Sea View'],
        pros: ['Postcard-perfect sunset views of pastel Positano houses', 'Direct stairs access to Spiaggia Grande'],
        cons: ['Over 150 stairs to climb throughout the property'],
        locationNote: 'Directly on the Positano panoramic cliff.'
      }
    ],
    itinerary: [
      {
        dayNumber: 1,
        date: '2026-06-10',
        title: 'Arrival in Positano & Sunset Aperitivo',
        theme: 'Cliffside Romance & Coastal Welcome',
        neighborhoodCluster: 'Positano Spiaggia Grande',
        transitSummary: 'Private Mercedes transfer from Naples to hotel',
        estimatedWalkingKm: 4.5,
        activities: [
          {
            id: 'amalfi-act-1-1',
            timeSlot: 'Afternoon',
            startTime: '15:00',
            endTime: '17:30',
            title: 'Cliffside Suite Check-in & Limoncello Welcome',
            description: 'Unpack, sip chilled Amalfi limoncello on your private terrace, and absorb the azure Tyrrhenian Sea horizon.',
            durationMinutes: 150,
            estimatedCost: 0,
            location: 'Via Cristoforo Colombo, Positano',
            neighborhood: 'Positano',
            lat: 40.6281,
            lng: 14.4850,
            category: 'Relaxation',
            bookingRequired: false,
            completed: false
          },
          {
            id: 'amalfi-act-1-2',
            timeSlot: 'Evening',
            startTime: '18:30',
            endTime: '21:30',
            title: 'Aperitivo at Franco’s Bar & Candlelit Dinner at La Sponda',
            description: 'Sip bespoke Spritzes at Franco’s Bar open-air terrace, then walk to legendary La Sponda illuminated by 400 beeswax candles.',
            durationMinutes: 180,
            estimatedCost: 220,
            location: 'Via San Sebastiano 2, Positano',
            neighborhood: 'Positano',
            lat: 40.6293,
            lng: 14.4862,
            category: 'Food',
            bookingRequired: true,
            bookingTip: 'Book La Sponda 90 days in advance; Franco’s Bar does not take reservations (arrive at 17:15).',
            completed: false
          }
        ]
      },
      {
        dayNumber: 2,
        date: '2026-06-11',
        title: 'Private Yacht Charter around Capri & Blue Grotto',
        theme: 'Crystal Caves, Faraglioni & Beachfront Lunch',
        neighborhoodCluster: 'Capri & Anacapri',
        transitSummary: 'Private 38ft Apreamare Gozzo motor yacht for the entire day',
        estimatedWalkingKm: 6.0,
        activities: [
          {
            id: 'amalfi-act-2-1',
            timeSlot: 'Morning',
            startTime: '09:30',
            endTime: '13:00',
            title: 'Private Yacht Cruise through Faraglioni Rocks & Green Grotto',
            description: 'Board your private yacht from Positano dock. Swim in secluded turquoise coves and glide directly beneath the Faraglioni stone arch.',
            durationMinutes: 210,
            estimatedCost: 950,
            location: 'Positano Pier to Faraglioni Capri',
            neighborhood: 'Capri Waters',
            lat: 40.5447,
            lng: 14.2505,
            category: 'Nature',
            bookingRequired: true,
            bookingTip: 'Includes skipper, champagne, fresh fruit, and snorkeling gear.',
            completed: false
          },
          {
            id: 'amalfi-act-2-2',
            timeSlot: 'Midday',
            startTime: '13:30',
            endTime: '16:00',
            title: 'Cliffside Seafood Lunch at La Fontelina Capri',
            description: 'Step directly off your boat onto the iconic rocky platforms of La Fontelina for wild sea bass cooked in sea salt and chilled white sangria.',
            durationMinutes: 150,
            estimatedCost: 180,
            location: 'Faraglioni, Capri',
            neighborhood: 'Capri',
            lat: 40.5458,
            lng: 14.2520,
            category: 'Food',
            bookingRequired: true,
            bookingTip: 'Reservations open in January each year and sell out within days.',
            completed: false
          }
        ]
      },
      {
        dayNumber: 3,
        date: '2026-06-12',
        title: 'Path of the Gods Hike & Da Adolfo Beach Feast',
        theme: 'High Altitude Panorama & Rustic Boat Tavern',
        neighborhoodCluster: 'Bomerano to Nocelle & Laurito Beach',
        transitSummary: 'Chauffeur to trail head, red fish wooden boat to Laurito beach',
        estimatedWalkingKm: 9.5,
        activities: [
          {
            id: 'amalfi-act-3-1',
            timeSlot: 'Morning',
            startTime: '08:00',
            endTime: '11:30',
            title: 'Sentiero degli Dei (Path of the Gods) Guided Trek',
            description: 'Hike 650 meters above the Mediterranean with sheer drop cliff views from Bomerano down into Nocelle above Positano.',
            durationMinutes: 210,
            estimatedCost: 40,
            location: 'Bomerano to Nocelle Trail',
            neighborhood: 'Nocelle',
            lat: 40.6355,
            lng: 14.5080,
            category: 'Nature',
            bookingRequired: false,
            crowdTip: 'Start early at 08:00 before midday heat sets on the open cliffs.',
            completed: false
          },
          {
            id: 'amalfi-act-3-2',
            timeSlot: 'Midday',
            startTime: '13:00',
            endTime: '16:30',
            title: 'Da Adolfo Red Fish Boat & Grilled Mozzarella on Lemon Leaves',
            description: 'Board the classic wooden boat with a red fish flag at Positano dock to Laurito cove for pitchers of white wine with peaches.',
            durationMinutes: 210,
            estimatedCost: 120,
            location: 'Spiaggia di Laurito, Positano',
            neighborhood: 'Laurito',
            lat: 40.6225,
            lng: 14.5020,
            category: 'Food',
            bookingRequired: true,
            bookingTip: 'Call or book by phone 2-3 weeks prior.',
            completed: false
          }
        ]
      },
      {
        dayNumber: 4,
        date: '2026-06-13',
        title: 'Hilltop Ravello, Villa Cimbrone & Amalfi Duomo',
        theme: 'Medieval Cloisters & Infinite Terrace Views',
        neighborhoodCluster: 'Ravello & Amalfi Town',
        transitSummary: 'Scenic coastal ferry to Amalfi, vintage Alfa Romeo / Mercedes taxi up to Ravello',
        estimatedWalkingKm: 6.2,
        activities: [
          {
            id: 'amalfi-act-4-1',
            timeSlot: 'Morning',
            startTime: '09:30',
            endTime: '12:30',
            title: 'Villa Cimbrone & The Infinity Terrace (Terrazza dell\'Infinito)',
            description: 'Wander manicured rose gardens in medieval Ravello and stand among marble busts floating 400m above the shimmering sea.',
            durationMinutes: 180,
            estimatedCost: 15,
            location: 'Via Santa Chiara 26, Ravello',
            neighborhood: 'Ravello',
            lat: 40.6475,
            lng: 14.6110,
            category: 'Culture',
            bookingRequired: false,
            completed: false
          },
          {
            id: 'amalfi-act-4-2',
            timeSlot: 'Afternoon',
            startTime: '14:00',
            endTime: '16:30',
            title: 'Amalfi Cathedral of St. Andrew & Artisanal Lemon Sorbet',
            description: 'Climb the monumental 62 stairs to the 9th-century Arab-Norman cathedral and enjoy sorbet served inside whole frozen Amalfi lemons.',
            durationMinutes: 150,
            estimatedCost: 18,
            location: 'Piazza Duomo, Amalfi',
            neighborhood: 'Amalfi',
            lat: 40.6341,
            lng: 14.6027,
            category: 'Culture',
            bookingRequired: false,
            completed: false
          }
        ]
      },
      {
        dayNumber: 5,
        date: '2026-06-14',
        title: 'Positano Artisan Boutiques & Private Departure',
        theme: 'Handmade Linen, Custom Sandals & Farewell',
        neighborhoodCluster: 'Positano Village & Naples Airport',
        transitSummary: 'Private Mercedes transfer back to Naples',
        estimatedWalkingKm: 3.8,
        activities: [
          {
            id: 'amalfi-act-5-1',
            timeSlot: 'Morning',
            startTime: '09:30',
            endTime: '12:00',
            title: 'Custom Made-to-Order Leather Sandal Fitting at Safari Positano',
            description: 'Watch local master cobblers measure your feet and hand-craft bespoke leather sandals decorated with Swarovski crystals in 20 minutes.',
            durationMinutes: 150,
            estimatedCost: 95,
            location: 'Via della Tartana 2, Positano',
            neighborhood: 'Positano',
            lat: 40.6289,
            lng: 14.4858,
            category: 'Shopping',
            bookingRequired: false,
            completed: false
          }
        ]
      }
    ],
    culinary: {
      overview: 'Campanian coastal cooking celebrates sweet San Marzano tomatoes, giant sfusato amalfitano lemons, buffalo mozzarella from Paestum, and fresh catch.',
      signatureDishes: [
        { id: 'amalfi-dish-1', name: 'Scialatielli ai Frutti di Mare', localName: 'Scialatielli ai Frutti di Mare', description: 'Thick hand-rolled ribbon pasta with fresh clams, mussels, prawns, cherry tomatoes, and basil.', typicalCost: '€24 - €32', vegetarianFriendly: false, mustTrySpot: 'Ristorante Max or Chez Black' },
        { id: 'amalfi-dish-2', name: 'Spaghetti al Limone', localName: 'Spaghetti al Limone', description: 'Creamy pasta emulsion made with Sorrento butter, parmigiano reggiano, and grated zest of Amalfi IGP lemons.', typicalCost: '€20 - €26', vegetarianFriendly: true, mustTrySpot: 'Da Gemma Amalfi' },
        { id: 'amalfi-dish-3', name: 'Mozzarella Grilled on Lemon Leaves', localName: 'Mozzarella in Foglia di Limone', description: 'Thick slices of fresh fior di latte smoked and melted between wild fragrant citrus leaves over charcoal.', typicalCost: '€16 - €20', vegetarianFriendly: true, mustTrySpot: 'Da Adolfo Laurito' },
        { id: 'amalfi-dish-4', name: 'Delizia al Limone', localName: 'Delizia al Limone', description: 'Dome-shaped sponge cake filled with delicate lemon custard and glazed with limoncello chantilly cream.', typicalCost: '€8 - €12', vegetarianFriendly: true, mustTrySpot: 'Pasticceria Pansa Amalfi (since 1830)' }
      ],
      restaurants: [
        { id: 'amalfi-rest-1', name: 'La Sponda (Le Sirenuse)', mealType: 'Dinner', cuisine: 'Michelin Mediterranean', neighborhood: 'Positano', priceTier: '$$$$', signatureOrder: 'Lobster ravioli and Amalfi sea bream', reservationNeeded: true, reservationTip: 'Request a candlelit terrace table for 20:00.', dayNumber: 1 },
        { id: 'amalfi-rest-2', name: 'Da Adolfo', mealType: 'Lunch', cuisine: 'Coastal Fisherman Trattoria', neighborhood: 'Laurito Cove', priceTier: '$$$', signatureOrder: 'Mussels marinara, grilled mozzarella, peach wine', reservationNeeded: true, reservationTip: 'Take the complimentary boat from Positano pier.', dayNumber: 3 },
        { id: 'amalfi-rest-3', name: 'Ristorante Rossellinis (Palazzo Avino)', mealType: 'Dinner', cuisine: 'Fine Dining Ravello', neighborhood: 'Ravello', priceTier: '$$$$', signatureOrder: 'Tasting menu paired with Campania Aglianico', reservationNeeded: true, reservationTip: 'Overlooks the dramatic cliff drop into the sea.', dayNumber: 4 }
      ],
      streetFoodMarkets: [
        { name: 'Piazza Duomo Artisanal Stalls', neighborhood: 'Amalfi', bestTime: '10:00 - 18:00', highlight: 'Freshly scooped frozen lemon granita inside real fruit' }
      ],
      foodEtiquetteTips: [
        'Cappuccino is strictly a morning drink in Italy; ordering one after 11:00 AM or after dinner is considered a tourist blunder.',
        'Never ask for grated parmesan cheese on seafood pasta dishes (seen as masking the delicate fresh fish flavor).',
        'Coperto (cover charge, usually €3-€5) is standard on bills for bread and tablecloth service.'
      ]
    },
    sentinel: {
      weather: {
        seasonLabel: 'Early Summer (June)',
        temperatureHighC: 29,
        temperatureLowC: 21,
        rainfallRisk: 'Minimal',
        summary: 'Glorious sunny Mediterranean days with cool sea breezes and warm evening temperatures.',
        clothingAdvice: 'Breathable linen shirts, sun hats, chic swimwear, and polarized sunglasses.'
      },
      rainyDayBackups: [
        { id: 'amalfi-rain-1', replacesActivity: 'Path of the Gods Hike', indoorAlternative: 'Cooking Class & Wine Cellar Tour at Cantine Marisa Cuomo', neighborhood: 'Furore', costEstimate: 140, whyRecommended: 'Dramatic indoor rock wine cellar and hands-on pasta making.' }
      ],
      safetyAndEtiquette: [
        { category: 'Neighborhood Safety', title: 'Stairway Footwear', description: 'Positano has thousands of stone steps that get polished and slick; avoid thin high heels or slippery flip-flops.', severity: 'caution' },
        { category: 'Transit Scam', title: 'Unmetered Taxis', description: 'Always confirm the fixed fare with the driver before getting into white Amalfi coast taxis.', severity: 'warning' }
      ],
      packingList: [
        { id: 'amalfi-pack-1', category: 'Clothing & Footwear', item: 'White or pastel linen shirts & dresses', packed: true, agentNote: 'Ideal for Mediterranean heat & evening dining' },
        { id: 'amalfi-pack-2', category: 'Clothing & Footwear', item: 'Non-slip boat espadrilles / grip sandals', packed: true, agentNote: 'Essential for boat decks and stone staircases' },
        { id: 'amalfi-pack-3', category: 'Essentials & Docs', item: 'Seasickness bands or tablets (Dramamine)', packed: false, agentNote: 'Valuable for ferry crossings on choppy sea days' },
        { id: 'amalfi-pack-4', category: 'Tech & Power', item: 'Waterproof phone pouch for boat swims', packed: true, agentNote: 'For swimming through Capri sea caves' }
      ],
      emergencyContacts: {
        policeNumber: '112',
        ambulanceNumber: '118',
        touristHotline: '+39 089 875067 (Positano Tourist Information)',
        localTransitApp: 'Moovit / Travelmar App'
      }
    },
    debateLogs: [
      {
        id: 'amalfi-deb-1',
        round: 1,
        timestamp: '09:05:10',
        speaker: 'haven',
        type: 'proposal',
        headline: 'Positano Cliffside Sanctuary Selected',
        message: 'For a $6,500 luxury romantic itinerary, basecamp must be Positano. Secured Hotel Marincanto with rock-carved infinity pool and private sea view terrace at $780/night.'
      },
      {
        id: 'amalfi-deb-2',
        round: 1,
        timestamp: '09:05:14',
        speaker: 'atlas',
        targetAgent: 'haven',
        type: 'optimization',
        headline: 'Zero Car Rental Mandate Enforced',
        message: 'Strictly prohibited rental cars. The SS163 road is notoriously congested. Substituted with high-speed Travelmar ferries and private Mercedes airport transfers.'
      },
      {
        id: 'amalfi-deb-3',
        round: 2,
        timestamp: '09:05:18',
        speaker: 'ledger',
        type: 'consensus',
        headline: 'Financial Architecture Balanced',
        message: 'Allocated $3,200 (49%) for cliffside lodging, $1,450 (22%) for Capri yacht and beach club access, leaving $1,200 for Michelin/seafood dining.'
      },
      {
        id: 'amalfi-deb-4',
        round: 2,
        timestamp: '09:05:22',
        speaker: 'scribe',
        targetAgent: 'palate',
        type: 'proposal',
        headline: 'Day-by-Day Cadence Polished',
        message: 'Constructed an unhurried luxury tempo: Day 1 Sunset Aperitivo, Day 2 Capri Yacht, Day 3 Path of the Gods + Da Adolfo, Day 4 Ravello Infinity Terrace, Day 5 Custom Sandals.'
      },
      {
        id: 'amalfi-deb-5',
        round: 3,
        timestamp: '09:05:26',
        speaker: 'sentinel',
        type: 'consensus',
        headline: 'Sun Protection & Sea Cave Safety Verified',
        message: 'Verified high UV index precautions and provided private Furore fjord wine cellar backup in case of rare rain.'
      }
    ]
  }
];
