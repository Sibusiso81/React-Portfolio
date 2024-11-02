/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
   */

import { GoogleGenerativeAI } from "@google/generative-ai";
  
  const apiKey = 'AIzaSyAdgypHPvwOqqRwJgM-Yo5rq_Whzz7GJb4';
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };
  
  export async function run(text) {
    try {
      const chatSession = model.startChat({
        generationConfig,
     // safetySettings: Adjust safety settings
     // See https://ai.google.dev/gemini-api/docs/safety-settings
        history: [
          {
            role: "user",
            parts: [
              {text: "you will be tasked with taking text given  and turn it into podcast content that reflects the engaging and exciting energy of Harry Potter, the strategic thinking of chess, the intrigue of sci-fi and thrillers, and the wit of comedy. Weave in fun references to Star Wars or coding when it fits naturally, and tie in current world events or news to keep it timely. Use real-life work examples to make the content relatable, but add a bit of magic or futuristic flair when explaining concepts, like you're describing a spell or advanced tech. Make it charismatic and entertaining, with light jokes to keep the listener smiling. As you explain things, frame them in a way that you'd have to teach someone else—this will help with clarity and make the audience feel involved, like they’re learning alongside you. The output should be one continuous narrative, no dialogue, and it should captivate from start to finish."},
            ],
          },
          {
            role: "model",
            parts: [
              {text: "Alright,"},
            ],
          },
        ],
      });
      const result = await chatSession.sendMessage(text);
       const pdContent = result.response.text()
       /* console.log(pdContent) */
       
       return pdContent
    } catch (error) {
     console.log(`Error encountered:${error}`) 
    }
    
  
   
    /* console.log(result.response.text()); */
  }
 
/* const content = run()
function test(){
  console.log(content)
}
 
test() */