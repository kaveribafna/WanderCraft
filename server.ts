import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI, Type } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json({ limit: '10mb' }));

// Shared Gemini client setup
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    }
  }
});

// Endpoint: Multi-Agent Plan Trip
app.post('/api/plan-trip', async (req, res) => {
  try {
    const input = req.body;
    if (!input || !input.destination) {
      return res.status(400).json({ error: 'Destination is required' });
    }

    if (!process.env.GEMINI_API_KEY) {
      // Graceful fallback to client generator
      return res.json({ fallback: true });
    }

    const systemPrompt = `You are WanderCraft, an elite collaborative travel planning system composed of 6 specialist travel co-pilots:
1. Atlas (Logistics & Route Master): Transit hubs, airport connections, route efficiency, daily geographic clustering to prevent zig-zagging.
2. Ledger (Budget & Cost Allocator): Strict financial allocation conforming to the total budget and party size.
3. Haven (Stay & Neighborhood Scout): Curated basecamps, neighborhoods, safety, walkability, boutique and value stays.
4. Scribe (Itinerary Architect): Day-by-day morning, midday, afternoon, and evening timed schedules with crowd avoidance tips and alternative swaps.
5. Palate (Culinary Specialist): Regional must-eat dishes, street markets, dietary accommodations, and neighborhood restaurants.
6. Sentinel (Contingency Guardian): Weather advisories for the travel dates, indoor rainy-day backup activities, cultural etiquette, scams to avoid, and packing list.

You must synthesize a complete, highly realistic travel plan formatted strictly in JSON matching the requested schema.`;

    const userPrompt = `Plan a trip with the following parameters:
- Destination: ${input.destination}
- Total Budget: ${input.budgetAmount} ${input.currency}
- Start Date: ${input.startDate}
- End Date: ${input.endDate}
- Party: ${input.partySize} person(s) (${input.partyType})
- Travel Style: ${input.travelStyle}
- Pace: ${input.travelPace}
- Dietary Preferences: ${input.dietaryPreferences?.join(', ') || 'None specified'}
- Special Interests: ${input.specialInterests?.join(', ') || 'Iconic sights, culture, gastronomy'}
- Must-See Spots: ${input.mustSeeSpots || 'Curate best gems'}

Ensure all 6 agents collaborate and provide their specialized outputs.`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.7-flash',
      contents: userPrompt,
      config: {
        systemInstruction: systemPrompt,
        responseMimeType: 'application/json',
      }
    });

    const text = response.text;
    if (!text) {
      return res.json({ fallback: true });
    }

    try {
      const parsedData = JSON.parse(text);
      return res.json({ trip: parsedData });
    } catch (e) {
      console.warn('Failed to parse Gemini JSON output:', e);
      return res.json({ fallback: true });
    }
  } catch (error: any) {
    console.error('Error generating trip plan:', error);
    return res.json({ fallback: true, error: error.message });
  }
});

// Endpoint: Agent Specific Refinement
app.post('/api/agent-refine', async (req, res) => {
  try {
    const { trip, agentId, instruction } = req.body;
    if (!instruction || !agentId) {
      return res.status(400).json({ error: 'Instruction and agentId required' });
    }

    if (!process.env.GEMINI_API_KEY) {
      return res.json({ fallback: true });
    }

    const agentPrompt = `You are specialist ${agentId.toUpperCase()} from the WanderCraft system. 
The user is requesting the following specific modification or consultation regarding their trip to ${trip?.destination || 'their destination'}:
"${instruction}"

Provide a concise, expert reply explaining your modifications, and return a JSON object with:
1. "replyMessage": string (direct, friendly, expert response from your persona)
2. "modificationsSummary": string`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.7-flash',
      contents: agentPrompt,
      config: {
        responseMimeType: 'application/json',
      }
    });

    const text = response.text;
    if (text) {
      const parsed = JSON.parse(text);
      const updatedTrip = { ...trip };
      const newLog = {
        id: `deb-${Date.now()}`,
        round: (updatedTrip.debateLogs?.length || 0) + 1,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
        speaker: agentId,
        type: 'refinement',
        headline: `User Refinement Addressed`,
        message: parsed.replyMessage || `Updated your trip according to "${instruction}".`
      };
      updatedTrip.debateLogs = [...(updatedTrip.debateLogs || []), newLog];

      return res.json({
        updatedTrip,
        replyMessage: parsed.replyMessage
      });
    }

    return res.json({ fallback: true });
  } catch (err: any) {
    console.error('Error in agent refine:', err);
    return res.json({ fallback: true, error: err.message });
  }
});

// Serve Vite build in production
const distPath = path.join(__dirname, 'dist');
app.use(express.static(distPath));

app.get('*', (req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`WanderCraft server running on port ${PORT}`);
});
