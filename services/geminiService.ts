
import { GoogleGenAI } from "@google/genai";
import { AIPlanResponse, ChatMessage } from '../types';
import { GOOGLE_API_KEY } from '../constants';

// Helper to safely get the API key handling different environments (Node, Vite, Local Fallback)
const getApiKey = (): string => {
  let key = "";

  // 1. Try process.env (Standard Node/CRA)
  try {
    if (typeof process !== 'undefined' && process.env?.API_KEY) {
      key = process.env.API_KEY;
    }
  } catch (e) {}

  // 2. Try import.meta.env (Vite standard)
  if (!key) {
    try {
      // @ts-ignore
      if (typeof import.meta !== 'undefined' && import.meta.env?.VITE_API_KEY) {
        // @ts-ignore
        key = import.meta.env.VITE_API_KEY;
      }
    } catch (e) {}
  }

  // 3. Try Hardcoded Constant (Local Dev Fallback)
  if (!key && GOOGLE_API_KEY) {
    key = GOOGLE_API_KEY;
  }

  if (!key) {
    console.error("Gemini API Key is missing. Please set it in process.env.API_KEY, .env file, or constants.ts (GOOGLE_API_KEY).");
  }
  
  return key;
};

export const generatePhotoShootIdea = async (mood: string, setting: string): Promise<AIPlanResponse | null> => {
  const apiKey = getApiKey();
  if (!apiKey) return null;

  const ai = new GoogleGenAI({ apiKey });

  const prompt = `
    As a professional photography creative director for Nidhi Studio, create a brief photo shoot plan based on these inputs:
    Mood: ${mood}
    Setting: ${setting}

    Return ONLY a valid JSON object with this structure:
    {
      "concept": "A creative title and brief summary",
      "lighting": "Specific lighting advice",
      "wardrobe": "Outfit suggestions",
      "pose": "Posing guidance"
    }
    Do not include markdown formatting like \`\`\`json. Just the raw JSON string.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        responseMimeType: "application/json",
      }
    });

    const text = response.text;
    if (!text) return null;

    return JSON.parse(text) as AIPlanResponse;
  } catch (error) {
    console.error("Error generating photo shoot idea:", error);
    return null;
  }
};

export const sendChatMessage = async (history: ChatMessage[], userMessage: string): Promise<string | null> => {
  const apiKey = getApiKey();
  if (!apiKey) return "I am currently offline (API Key missing). Please check the console configuration.";

  const ai = new GoogleGenAI({ apiKey });

  // System context for the chatbot
  const systemContext = `
    You are the virtual assistant for Nidhi Studio (Nanu Photography).
    Owner: Nayan (Lead Photographer).
    Contact: nikunj7943@gmail.com, +91 98765 43210.
    Location: Main Market, City Center.
    
    Your Goal: Answer visitor questions about photography services (Weddings, Portraits, Events), styling, and booking.
    Tone: Professional, artistic, warm, and helpful.
    
    If asked about booking, guide them to the contact form or provide the email.
    If asked about prices, say packages are custom tailored and suggest they contact us for a quote.
  `;

  try {
    // Prepare contents: Map history + new message
    const contents = [
      ...history.map(msg => ({
        role: msg.role,
        parts: [{ text: msg.text }]
      })),
      { role: 'user', parts: [{ text: userMessage }] }
    ];

    const response = await ai.models.generateContent({
      model: 'gemini-3-pro-preview',
      contents: contents,
      config: {
        systemInstruction: systemContext,
        thinkingConfig: { thinkingBudget: 32768 } 
      }
    });

    return response.text || "I couldn't generate a response at this time.";
  } catch (error) {
    console.error("Error in chat:", error);
    return "Sorry, I'm having trouble connecting right now. Please try again later.";
  }
};
