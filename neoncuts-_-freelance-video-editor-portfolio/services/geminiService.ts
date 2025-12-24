
import { GoogleGenAI } from "@google/genai";
import { USER_DATA } from "../constants";

export class GeminiService {
  private ai: GoogleGenAI;

  constructor() {
    if (!process.env.API_KEY) {
      throw new Error("API Key is not configured");
    }
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }

  async brainstormConcept(clientInput: string) {
    try {
      const response = await this.ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Act as a creative director for ${USER_DATA.fullName}. A potential client has this request: "${clientInput}". 
        Provide a professional pitch in this exact format:
        1. THE VISION: (A 2-sentence visual overview)
        2. EDITING STYLE: (Specific techniques like speed ramping, jump cuts, or color palettes)
        3. SOUNDSCAPE: (The mood of the music and SFX)
        Make it sound expensive, modern, and exciting.`,
        config: {
          temperature: 0.85,
          topP: 0.95,
          maxOutputTokens: 600
        }
      });
      return response.text;
    } catch (error) {
      console.error("Gemini brainstorming error:", error);
      return "I'm experiencing a creative block right now. Let's talk directly about your project!";
    }
  }
}

export const geminiService = new GeminiService();
