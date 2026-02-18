
import { GoogleGenAI } from "@google/genai";

const SYSTEM_PROMPT = `
You are the "Fitstreet 2026 Festival Guide", a helpful, high-energy AI assistant for the Fitstreet HEATWAVE event held on May 9-10, 2026, at Bonifacio High Street, Philippines.

Key information:
- Vibe: The Coachella of Wellness.
- Zones: Play Zone (5th Ave), Heal & Glow (C1 Park), Eat Zone (Bridgeway), The Arena (Amphitheater).
- Major Events: Morning Hydro Rave, Hyrox Challenge, Cold Plunge Party, Neon Street Party.
- Festival Director: Karla Kangleon.
- Ticket price: Free for basic access, P1,000 for VIP early bird.

Answer questions about the event, activities, zones, and schedule. Be enthusiastic, motivating, and wellness-focused. Keep answers concise.
`;

let ai: GoogleGenAI | null = null;

export async function askAssistant(prompt: string) {
  try {
    if (!ai) {
      const apiKey = process.env.API_KEY || process.env.GEMINI_API_KEY || "";
      if (!apiKey) {
        console.warn("Gemini API Key is missing");
        return "I'm currently offline (missing API key). Please check back later!";
      }
      ai = new GoogleGenAI({ apiKey });
    }

    const response = await ai.models.generateContent({
      model: 'gemini-2.0-flash', // Updated to latest stable if available, or keep preview
      contents: prompt,
      config: {
        systemInstruction: SYSTEM_PROMPT,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having a bit of a hydration break. Please try again in a moment!";
  }
}
