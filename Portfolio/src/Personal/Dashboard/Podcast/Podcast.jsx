import React, { useState } from 'react'
import JSZip from 'jszip';
import { run } from '../Components/Resources/chatBot';
import fs from "node:fs/promises";
/* import { text } from 'stream/consumers'; */
/* import { json } from 'stream/consumers'; */
function Podcast() {
    /*To do
    
    1)Input file
    2)Convert slides to text
    3)Pass slide Text  to gemini api
    4)Generate podcast with gemini api
    5)Read text from gemini api with js tts


    
    */




/* Chatbot */

    /* File Upload */
    const [podcastContent, setPodcastContent] = useState('');
    const [slideContent,setSlideContent] = useState('')
    const [test,setTest] =useState();
    const [audioSrc,setAudioSrc]=useState(null);
    const[error,setError]=useState(null);


    
   /*  run().then(result =>{
      setPodcastContent(result)
    }) */

    const handleFileUpload = (event) => {
      const file = event.target.files[0];
      if (!file) return;
  
      const reader = new FileReader();
      
      reader.onload = function(e) {
        const arrayBuffer = e.target.result;
  
        JSZip.loadAsync(arrayBuffer).then(function(zip) {
          // Get slide files from PowerPoint archive
          const slideFiles = Object.keys(zip.files).filter(name => name.startsWith("ppt/slides/") && name.endsWith(".xml"));
  
          let extractedText = '';
  
          // Loop through each slide file to extract text
          Promise.all(slideFiles.map(slideFile =>
            zip.files[slideFile].async("string").then(function(content) {
              // Parse XML content
              const parser = new DOMParser();
              const xmlDoc = parser.parseFromString(content, "application/xml");
  
              // Extract text from <a:t> elements
              const texts = xmlDoc.getElementsByTagName("a:t");
              for (let i = 0; i < texts.length; i++) {
                extractedText += texts[i].textContent + " ";
              }
            })
          )).then(() => {
            // Update state with extracted text
            setSlideContent(extractedText)
            
            /* setPodcastContent(run(extractedText)); */
            
            
          });
        });
      };
      
      reader.readAsArrayBuffer(file);
    };
    async function genPodcastContent(slideContent){
      setPodcastContent(await run(slideContent))
      console.log(podcastContent)
    }
    genPodcastContent(slideContent)
    const API_BASE_URL = "https://api.sws.speechify.com";

const API_KEY = "UBshl2jNR0D8o-jsm_DwPl8uvdwR1W7a4SR6S2vGEvQ=";

const VOICE_ID = "george";
   
      // import fetch from "node-fetch" // uncomment if using Node older than v21.x


      const getAudio = async (podcastContent) => {
        try {
          const res = await fetch(`${API_BASE_URL}/v1/audio/speech`, {
            method: "POST",
            body: JSON.stringify({
              input: `<speak>${podcastContent}</speak>`,
              voice_id: VOICE_ID,
              audio_format: "mp3",
            }),
            headers: {
              Authorization: `Bearer ${API_KEY}`,
              "content-type": "application/json",
            },
          });
    
          if (!res.ok) {
            throw new Error(`${res.status} ${res.statusText}\n${await res.text()}`);
          }
    
          const responseData = await res.json();
          
          // Decode the base64 audio data
          const audioData = responseData.audio_data;
          const audioBlob = new Blob([Uint8Array.from(atob(audioData), c => c.charCodeAt(0))], { type: 'audio/mp3' });
    
          // Create a URL for the Blob
          const audioURL = URL.createObjectURL(audioBlob);
          setAudioSrc(audioURL); // Set the audio source to play the audio
        } catch (err) {
          setError(err.message);
          console.error('Error:', err.message);
        }
      };
    
      const handleGenerateAudio = () => {
        const podcast = podcastContent; // Define your podcast content
        console.log(podcastContent)
        getAudio(podcast);
      };
    
  return (
    <div className='text-white'>
    <h1>Convert PowerPoint to Text</h1>
    <input type="file" accept=".pptx" onChange={handleFileUpload} />
    <div>
      <h2>Extracted Text:</h2>
      {/* <p>{text}</p> */}
      {slideContent}
    </div>
    <button onClick={handleGenerateAudio }>Generate annd Play Audio</button>
    {audioSrc && <audio controls src={audioSrc}/>}
    {error && <p style={{color:'red'}}>Error:{error}</p>}
  </div>
  )

}
export default Podcast