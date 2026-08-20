import 'dotenv/config';
import { GoogleGenAI } from "@google/genai";


const ai = new GoogleGenAI({
    apiKey:process.env.GEMINI_API_KEY
});

const response = await ai.models.generateContent({
  model: "gemini-3.7-flash",
  contents: "Give me 5 JavaScript interview questions.s",
});
console.log(response.text);