// Fix: Implemented AI service functions using @google/genai to resolve compilation errors.
import { GoogleGenAI } from "@google/genai";
import { Review, GroundingChunk } from '../types';

// The API key is sourced from environment variables as per guidelines.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

/**
 * Summarizes a list of reviews using the Gemini model.
 * @param reviews - An array of review objects.
 * @returns A string containing the AI-generated summary.
 */
export const summarizeReviews = async (reviews: Review[]): Promise<string> => {
  if (reviews.length === 0) {
    return "There are no reviews yet. Be the first to write one!";
  }

  const reviewsText = reviews.map(r => `- Rating: ${r.rating}/5, Review: "${r.text}"`).join('\n');
  const prompt = `Summarize the following customer reviews for a business. Provide a balanced overview, highlighting the main pros and cons mentioned by reviewers. The summary should be concise and helpful for a potential customer. Do not mention specific user names. Here are the reviews:\n\n${reviewsText}`;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });
    return response.text;
  } catch (error) {
    console.error("Error summarizing reviews:", error);
    return "Could not generate AI summary at this time.";
  }
};

/**
 * Performs a search grounded with Google Search results.
 * @param query - The user's search query.
 * @returns An object containing the AI-generated text and an array of source chunks.
 */
export const searchWithGrounding = async (query: string): Promise<{ text: string; chunks: GroundingChunk[] }> => {
    try {
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: `Based on web search results, provide a helpful answer for the following query: "${query}". Focus on finding relevant businesses or services in Nigeria if the query implies a location.`,
            config: {
                tools: [{googleSearch: {}}],
            },
        });
        
        const text = response.text;
        const chunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks || [];

        return { text, chunks };
    } catch (error) {
        console.error("Error with grounded search:", error);
        return { text: "AI-powered search is currently unavailable.", chunks: [] };
    }
};
