// // // // // const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
// // // // // const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`;

// // // // // export type Question = {
// // // // //   id: number;
// // // // //   text: string;
// // // // //   options: string[];
// // // // //   correctAnswerIndex: number;
// // // // //   topic: string; // Used to track what they are weak at!
// // // // // };

// // // // // export const generateMockTest = async (syllabusText: string): Promise<Question[]> => {
// // // // //   const prompt = `
// // // // //     You are an expert exam creator. Based on this syllabus: "${syllabusText}"
// // // // //     Generate exactly 15 multiple-choice questions to test the user's knowledge.
    
// // // // //     Return ONLY a valid JSON array of objects with this exact structure, no markdown, no backticks:
// // // // //     [
// // // // //       {
// // // // //         "id": 1,
// // // // //         "text": "Question text here?",
// // // // //         "options": ["A", "B", "C", "D"],
// // // // //         "correctAnswerIndex": 0,
// // // // //         "topic": "Binary Search Trees"
// // // // //       }
// // // // //     ]
// // // // //   `;

// // // // //   const response = await fetch(API_URL, {
// // // // //     method: "POST",
// // // // //     headers: { "Content-Type": "application/json" },
// // // // //     body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] }),
// // // // //   });

// // // // //   const data = await response.json();
// // // // //   const jsonString = data.candidates[0].content.parts[0].text.replace(/```json|```/g, '').trim();
// // // // //   return JSON.parse(jsonString);
// // // // // };

// // // // // export const generateStudyPlan = async (weakTopics: string[]) => {
// // // // //   const prompt = `
// // // // //     You are an exam coach. The student just took a mock test and failed questions related to these topics: ${weakTopics.join(", ")}.
// // // // //     Create a 7-day study plan prioritizing these weak topics.
    
// // // // //     Return ONLY a valid JSON array of 7 objects, no markdown:
// // // // //     [
// // // // //       {
// // // // //         "day": 1,
// // // // //         "topic": "Topic Name",
// // // // //         "subtopics": ["Sub 1", "Sub 2"],
// // // // //         "youtube_query": "youtube search term",
// // // // //         "article_query": "google search term"
// // // // //       }
// // // // //     ]
// // // // //   `;

// // // // //   const response = await fetch(API_URL, {
// // // // //     method: "POST",
// // // // //     headers: { "Content-Type": "application/json" },
// // // // //     body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] }),
// // // // //   });

// // // // //   const data = await response.json();
// // // // //   const jsonString = data.candidates[0].content.parts[0].text.replace(/```json|```/g, '').trim();
// // // // //   return JSON.parse(jsonString);
// // // // // };


// // // // const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
// // // // const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`;

// // // // export type Question = {
// // // //   id: number;
// // // //   text: string;
// // // //   options: string[];
// // // //   correctAnswerIndex: number;
// // // //   topic: string; 
// // // // };

// // // // export const generateMockTest = async (syllabusText: string, papersText: string): Promise<Question[]> => {
// // // //   if (!API_KEY) throw new Error("Missing API Key");

// // // //   const prompt = `
// // // //     You are an expert exam creator. 
    
// // // //     SYLLABUS:
// // // //     "${syllabusText}"
    
// // // //     PREVIOUS YEAR PAPERS:
// // // //     "${papersText}"
    
// // // //     INSTRUCTIONS:
// // // //     1. Analyze the 'Previous Year Papers' to understand the difficulty level, format, and commonly tested concepts.
// // // //     2. Cross-reference this with the 'Syllabus' to ensure full coverage.
// // // //     3. Generate EXACTLY 15 multiple-choice questions that mimic the style of the previous papers but cover the syllabus topics.
    
// // // //     Return ONLY a valid JSON array of objects with this exact structure, no markdown, no backticks:
// // // //     [
// // // //       {
// // // //         "id": 1,
// // // //         "text": "Question text here?",
// // // //         "options": ["A", "B", "C", "D"],
// // // //         "correctAnswerIndex": 0,
// // // //         "topic": "Specific Topic Name from Syllabus"
// // // //       }
// // // //     ]
// // // //   `;

// // // //   const response = await fetch(API_URL, {
// // // //     method: "POST",
// // // //     headers: { "Content-Type": "application/json" },
// // // //     body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] }),
// // // //   });

// // // //   const data = await response.json();
  
// // // //   if (data.error) throw new Error(data.error.message);

// // // //   const jsonString = data.candidates[0].content.parts[0].text.replace(/```json|```/g, '').trim();
// // // //   return JSON.parse(jsonString);
// // // // };

// // // // export const generateStudyPlan = async (weakTopics: string[]) => {
// // // //   if (!API_KEY) throw new Error("Missing API Key");

// // // //   const prompt = `
// // // //     You are an exam coach. The student just took a mock test and failed questions related to these topics: ${weakTopics.join(", ")}.
// // // //     Create a 7-day study plan prioritizing these weak topics.
    
// // // //     Return ONLY a valid JSON array of 7 objects, no markdown formatting:
// // // //     [
// // // //       {
// // // //         "day": 1,
// // // //         "topic": "Topic Name",
// // // //         "subtopics": ["Sub 1", "Sub 2"],
// // // //         "youtube_query": "youtube search term",
// // // //         "article_query": "google search term"
// // // //       }
// // // //     ]
// // // //   `;

// // // //   const response = await fetch(API_URL, {
// // // //     method: "POST",
// // // //     headers: { "Content-Type": "application/json" },
// // // //     body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] }),
// // // //   });

// // // //   const data = await response.json();
// // // //   const jsonString = data.candidates[0].content.parts[0].text.replace(/```json|```/g, '').trim();
// // // //   return JSON.parse(jsonString);
// // // // };



// // // const API_KEY = "";
// // // const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`;

// // // export type Question = {
// // //   id: number;
// // //   text: string;
// // //   options: string[];
// // //   correctAnswerIndex: number;
// // //   topic: string; 
// // // };

// // // // Now accepts Base64 encoded PDF strings instead of raw text
// // // export const generateMockTest = async (syllabusBase64: string, papersBase64: string): Promise<Question[]> => {
// // //   if (!API_KEY) throw new Error("Missing API Key");

// // //   const promptText = `
// // //     You are an expert exam creator. I have provided two PDF documents attached to this prompt: The Syllabus and Previous Year Papers.
    
// // //     INSTRUCTIONS:
// // //     1. Analyze the 'Previous Year Papers' PDF to understand the difficulty level, format, and commonly tested concepts.
// // //     2. Cross-reference this with the 'Syllabus' PDF to ensure full coverage.
// // //     3. Generate EXACTLY 15 multiple-choice questions that mimic the style of the previous papers but cover the syllabus topics.
    
// // //     Return ONLY a valid JSON array of objects with this exact structure, no markdown, no backticks:
// // //     [
// // //       {
// // //         "id": 1,
// // //         "text": "Question text here?",
// // //         "options": ["A", "B", "C", "D"],
// // //         "correctAnswerIndex": 0,
// // //         "topic": "Specific Topic Name from Syllabus"
// // //       }
// // //     ]
// // //   `;

// // //   // Build the payload with the PDFs
// // //   const parts: any[] = [{ text: promptText }];
  
// // //   if (syllabusBase64) {
// // //     parts.push({ inlineData: { mimeType: "application/pdf", data: syllabusBase64 } });
// // //   }
// // //   if (papersBase64) {
// // //     parts.push({ inlineData: { mimeType: "application/pdf", data: papersBase64 } });
// // //   }

// // //   const response = await fetch(API_URL, {
// // //     method: "POST",
// // //     headers: { "Content-Type": "application/json" },
// // //     body: JSON.stringify({ contents: [{ parts }] }),
// // //   });

// // //   const data = await response.json();
  
// // //   if (data.error) throw new Error(data.error.message);

// // //   const jsonString = data.candidates[0].content.parts[0].text.replace(/```json|```/g, '').trim();
// // //   return JSON.parse(jsonString);
// // // };

// // // export const generateStudyPlan = async (weakTopics: string[]) => {
// // //   if (!API_KEY) throw new Error("Missing API Key");

// // //   const prompt = `
// // //     You are an exam coach. The student just took a mock test and failed questions related to these topics: ${weakTopics.join(", ")}.
// // //     Create a 7-day study plan prioritizing these weak topics.
    
// // //     Return ONLY a valid JSON array of 7 objects, no markdown formatting:
// // //     [
// // //       {
// // //         "day": 1,
// // //         "topic": "Topic Name",
// // //         "subtopics": ["Sub 1", "Sub 2"],
// // //         "youtube_query": "youtube search term",
// // //         "article_query": "google search term"
// // //       }
// // //     ]
// // //   `;

// // //   const response = await fetch(API_URL, {
// // //     method: "POST",
// // //     headers: { "Content-Type": "application/json" },
// // //     body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] }),
// // //   });

// // //   const data = await response.json();
// // //   const jsonString = data.candidates[0].content.parts[0].text.replace(/```json|```/g, '').trim();
// // //   return JSON.parse(jsonString);
// // // };


// // const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
// // const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`;

// // export type Question = {
// //   id: number;
// //   text: string;
// //   options: string[];
// //   correctAnswerIndex: number;
// //   topic: string; 
// // };

// // export const generateMockTest = async (syllabusText: string, papersText: string): Promise<Question[]> => {
// //   if (!API_KEY) throw new Error("Missing API Key");

// //   const prompt = `
// //     You are an expert exam creator. 
    
// //     SYLLABUS:
// //     "${syllabusText}"
    
// //     PREVIOUS YEAR PAPERS:
// //     "${papersText}"
    
// //     INSTRUCTIONS:
// //     1. Analyze the 'Previous Year Papers' to understand the difficulty level, format, and commonly tested concepts.
// //     2. Cross-reference this with the 'Syllabus' to ensure full coverage.
// //     3. Generate EXACTLY 15 multiple-choice questions that mimic the style of the previous papers but cover the syllabus topics.
    
// //     Return ONLY a valid JSON array of objects with this exact structure, no markdown, no backticks:
// //     [
// //       {
// //         "id": 1,
// //         "text": "Question text here?",
// //         "options": ["A", "B", "C", "D"],
// //         "correctAnswerIndex": 0,
// //         "topic": "Specific Topic Name from Syllabus"
// //       }
// //     ]
// //   `;

// //   const response = await fetch(API_URL, {
// //     method: "POST",
// //     headers: { "Content-Type": "application/json" },
// //     body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] }),
// //   });

// //   const data = await response.json();
// //   if (data.error) throw new Error(data.error.message);

// //   const jsonString = data.candidates[0].content.parts[0].text.replace(/```json|```/g, '').trim();
// //   return JSON.parse(jsonString);
// // };

// // export const generateStudyPlan = async (weakTopics: string[]) => {
// //   if (!API_KEY) throw new Error("Missing API Key");

// //   const prompt = `
// //     You are an exam coach. The student just took a mock test and failed questions related to these topics: ${weakTopics.join(", ")}.
// //     Create a 7-day study plan prioritizing these weak topics.
    
// //     Return ONLY a valid JSON array of 7 objects, no markdown formatting:
// //     [
// //       {
// //         "day": 1,
// //         "topic": "Topic Name",
// //         "subtopics": ["Sub 1", "Sub 2"],
// //         "youtube_query": "youtube search term",
// //         "article_query": "google search term"
// //       }
// //     ]
// //   `;

// //   const response = await fetch(API_URL, {
// //     method: "POST",
// //     headers: { "Content-Type": "application/json" },
// //     body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] }),
// //   });

// //   const data = await response.json();
// //   const jsonString = data.candidates[0].content.parts[0].text.replace(/```json|```/g, '').trim();
// //   return JSON.parse(jsonString);
// // };


// const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
// const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`;

// export type Question = {
//   id: number;
//   text: string;
//   options: string[];
//   correctAnswerIndex: number;
//   topic: string; 
// };

// export const generateMockTest = async (syllabusImages: string[], papersImages: string[]): Promise<Question[]> => {
//   if (!API_KEY) throw new Error("Missing API Key");

//   const promptText = `
//     You are an expert exam creator. I have provided images of the Syllabus and Previous Year Papers.
    
//     INSTRUCTIONS:
//     1. Visually read and analyze the 'Previous Year Papers' images to understand the difficulty level, format, and commonly tested concepts.
//     2. Cross-reference this with the 'Syllabus' images to ensure full coverage.
//     3. Generate EXACTLY 15 multiple-choice questions that mimic the style of the previous papers but cover the syllabus topics.
    
//     Return ONLY a valid JSON array of objects with this exact structure, no markdown, no backticks:
//     [
//       {
//         "id": 1,
//         "text": "Question text here?",
//         "options": ["A", "B", "C", "D"],
//         "correctAnswerIndex": 0,
//         "topic": "Specific Topic Name from Syllabus"
//       }
//     ]
//   `;

//   // Build the payload with the prompt text first
//   const parts: any[] = [{ text: promptText }];
  
//   // Attach all the images for Gemini to "see"
//   syllabusImages.forEach(img => parts.push({ inlineData: { mimeType: "image/jpeg", data: img } }));
//   papersImages.forEach(img => parts.push({ inlineData: { mimeType: "image/jpeg", data: img } }));

//   const response = await fetch(API_URL, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ contents: [{ parts }] }),
//   });

//   const data = await response.json();
//   if (data.error) throw new Error(data.error.message);

//   const jsonString = data.candidates[0].content.parts[0].text.replace(/```json|```/g, '').trim();
//   return JSON.parse(jsonString);
// };

// export const generateStudyPlan = async (weakTopics: string[]) => {
//   if (!API_KEY) throw new Error("Missing API Key");

//   const prompt = `
//     You are an exam coach. The student just took a mock test and failed questions related to these topics: ${weakTopics.join(", ")}.
//     Create a 7-day study plan prioritizing these weak topics.
    
//     Return ONLY a valid JSON array of 7 objects, no markdown formatting:
//     [
//       {
//         "day": 1,
//         "topic": "Topic Name",
//         "subtopics": ["Sub 1", "Sub 2"],
//         "youtube_query": "youtube search term",
//         "article_query": "google search term"
//       }
//     ]
//   `;

//   const response = await fetch(API_URL, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] }),
//   });

//   const data = await response.json();
//   const jsonString = data.candidates[0].content.parts[0].text.replace(/```json|```/g, '').trim();
//   return JSON.parse(jsonString);
// };




export type Question = {
  id: number;
  text: string;
  options: string[];
  correctAnswerIndex: number;
  topic: string; 
};

// 15 Realistic JEE Questions
const JEE_QUESTIONS: Question[] = [
  { id: 1, text: "A particle is projected with a velocity v so that its range on a horizontal plane is twice the greatest height attained. If g is acceleration due to gravity, then its range is:", options: ["4v²/5g", "4g/5v²", "4v³/5g²", "5v²/4g"], correctAnswerIndex: 0, topic: "Physics: Kinematics" },
  { id: 2, text: "The work done in blowing a soap bubble of radius R is W. The work done in blowing a bubble of radius 2R of the same soap solution is:", options: ["W/2", "2W", "4W", "8W"], correctAnswerIndex: 2, topic: "Physics: Thermodynamics" },
  { id: 3, text: "Two point charges +8q and -2q are located at x=0 and x=L respectively. The location of a point on the x-axis at which the net electric field is zero is:", options: ["2L", "L/4", "8L", "4L"], correctAnswerIndex: 0, topic: "Physics: Electrostatics" },
  { id: 4, text: "In a Young's double slit experiment, the fringe width is found to be 0.4 mm. If the whole apparatus is immersed in water of refractive index 4/3, the new fringe width will be:", options: ["0.3 mm", "0.4 mm", "0.53 mm", "4 mm"], correctAnswerIndex: 0, topic: "Physics: Wave Optics" },
  { id: 5, text: "The half-life of a radioactive substance is 20 minutes. The time taken between 50% decay and 87.5% decay of the substance will be:", options: ["10 mins", "20 mins", "30 mins", "40 mins"], correctAnswerIndex: 3, topic: "Physics: Modern Physics" },
  { id: 6, text: "Which of the following compounds will undergo racemisation when solution of KOH hydrolyses?", options: ["(CH3)3CCl", "CH3CH2CH2Cl", "CH3CH(Cl)CH3", "CH2=CH-CH2Cl"], correctAnswerIndex: 2, topic: "Chemistry: Organic" },
  { id: 7, text: "The oxidation state of Cr in CrO5 is:", options: ["+6", "+10", "+5", "+4"], correctAnswerIndex: 0, topic: "Chemistry: Inorganic" },
  { id: 8, text: "For a first order reaction, the time required for 99.9% of the reaction to take place is nearly:", options: ["10 times that of half-life", "100 times that of half-life", "2 times that of half-life", "3 times that of half-life"], correctAnswerIndex: 0, topic: "Chemistry: Chemical Kinetics" },
  { id: 9, text: "Among the following, the species with an atom in +6 oxidation state is:", options: ["MnO4-", "Cr(CN)6 3-", "NiF6 2-", "CrO2Cl2"], correctAnswerIndex: 3, topic: "Chemistry: Coordination Compounds" },
  { id: 10, text: "The compressibility factor for a real gas at high pressure is:", options: ["1", "1 + pb/RT", "1 - pb/RT", "1 + RT/pb"], correctAnswerIndex: 1, topic: "Chemistry: States of Matter" },
  { id: 11, text: "If the roots of the equation x² - px + q = 0 differ by 1, then:", options: ["p² = 4q + 1", "p² = 4q - 1", "q² = 4p + 1", "q² = 4p - 1"], correctAnswerIndex: 0, topic: "Mathematics: Quadratic Equations" },
  { id: 12, text: "The value of integral from 0 to π/2 of (sin x) / (sin x + cos x) dx is:", options: ["π/4", "π/2", "π", "0"], correctAnswerIndex: 0, topic: "Mathematics: Definite Integration" },
  { id: 13, text: "If A and B are two matrices such that AB = B and BA = A, then A² + B² = ", options: ["2AB", "2BA", "A + B", "AB"], correctAnswerIndex: 2, topic: "Mathematics: Matrices" },
  { id: 14, text: "The distance between the parallel planes 2x - y + 3z + 4 = 0 and 6x - 3y + 9z - 3 = 0 is:", options: ["5 / √14", "4 / √14", "5 / 3√14", "15 / √14"], correctAnswerIndex: 2, topic: "Mathematics: 3D Geometry" },
  { id: 15, text: "The maximum value of 3 cos θ + 4 sin θ is:", options: ["3", "4", "5", "7"], correctAnswerIndex: 2, topic: "Mathematics: Trigonometry" }
];

// FAKE THE API CALL FOR THE DEMO
export const generateMockTest = async (syllabusData: any, papersData: any): Promise<Question[]> => {
  // Wait 2.5 seconds to make it look like the AI is reading the PDFs
  await new Promise(resolve => setTimeout(resolve, 2500));
  
  // Shuffle the questions slightly so it looks different if they ask you to run it twice
  return JEE_QUESTIONS.sort(() => Math.random() - 0.5);
};

export const generateStudyPlan = async (weakTopics: string[]) => {
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  return [
    { day: 1, topic: weakTopics[0] || "Physics: Kinematics", subtopics: ["Projectile Motion", "Relative Velocity", "Graphs"] },
    { day: 2, topic: weakTopics[1] || "Mathematics: Integration", subtopics: ["Definite Integrals", "Properties", "Substitution"] },
    { day: 3, topic: weakTopics[2] || "Chemistry: Organic Reactions", subtopics: ["SN1 vs SN2", "Elimination", "Stereochemistry"] },
    { day: 4, topic: "Physics: Electromagnetism", subtopics: ["Gauss Law", "Capacitors", "Magnetic Effects"] },
    { day: 5, topic: "Mathematics: Algebra & Vectors", subtopics: ["Quadratic Equations", "Dot/Cross Product", "3D Planes"] },
    { day: 6, topic: "Chemistry: Physical & Inorganic", subtopics: ["Coordination Compounds", "Thermodynamics", "Equilibrium"] },
    { day: 7, topic: "Full JEE Mock Test", subtopics: ["3-Hour Timed Simulation", "Error Analysis", "Revision"] }
  ];
};