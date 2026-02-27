// // // // import { useState } from "react";
// // // // import { motion } from "framer-motion";
// // // // import { Play, FileText, Clock, Coffee } from "lucide-react";

// // // // const days = [
// // // //   { day: 1, topic: "Binary Search Trees", subtopics: ["Traversal", "Insertion", "Deletion"] },
// // // //   { day: 2, topic: "Graph Algorithms", subtopics: ["BFS", "DFS", "Shortest Path"] },
// // // //   { day: 3, topic: "Dynamic Programming", subtopics: ["Memoization", "Tabulation", "LCS"] },
// // // //   { day: 4, topic: "Sorting Algorithms", subtopics: ["QuickSort", "MergeSort", "HeapSort"] },
// // // //   { day: 5, topic: "Hashing & Maps", subtopics: ["Hash Tables", "Collision", "Probing"] },
// // // //   { day: 6, topic: "Recursion & Backtracking", subtopics: ["N-Queens", "Subsets", "Permutations"] },
// // // //   { day: 7, topic: "Revision & Mock Test", subtopics: ["Full Mock", "Weak Areas", "Speed Drill"] },
// // // // ];

// // // // const Dashboard = () => {
// // // //   const [selectedDay, setSelectedDay] = useState(0);
// // // //   const current = days[selectedDay];

// // // //   return (
// // // //     <section className="relative py-24 px-4" id="dashboard">
// // // //       <div className="max-w-5xl mx-auto">
// // // //         <motion.div
// // // //           className="text-center mb-12"
// // // //           initial={{ opacity: 0, y: 20 }}
// // // //           whileInView={{ opacity: 1, y: 0 }}
// // // //           viewport={{ once: true }}
// // // //         >
// // // //           <h2 className="text-3xl md:text-4xl font-display font-bold text-gradient mb-3">
// // // //             Your 7-Day Smart Plan
// // // //           </h2>
// // // //           <p className="text-muted-foreground">An adaptive, context-aware study schedule.</p>
// // // //         </motion.div>

// // // //         {/* Timeline */}
// // // //         <motion.div
// // // //           className="flex items-center justify-center gap-2 md:gap-4 mb-12 overflow-x-auto pb-2"
// // // //           initial={{ opacity: 0 }}
// // // //           whileInView={{ opacity: 1 }}
// // // //           viewport={{ once: true }}
// // // //           transition={{ delay: 0.2 }}
// // // //         >
// // // //           {days.map((d, i) => (
// // // //             <motion.button
// // // //               key={i}
// // // //               onClick={() => setSelectedDay(i)}
// // // //               className={`relative flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full font-display font-bold text-sm md:text-base transition-all ${
// // // //                 selectedDay === i
// // // //                   ? "bg-primary text-primary-foreground glow-purple scale-110"
// // // //                   : "glass text-muted-foreground hover:text-foreground"
// // // //               }`}
// // // //               whileHover={{ scale: selectedDay === i ? 1.1 : 1.08 }}
// // // //               whileTap={{ scale: 0.95 }}
// // // //             >
// // // //               {d.day}
// // // //               {selectedDay === i && (
// // // //                 <motion.div
// // // //                   className="absolute -inset-1 rounded-full border-2 border-primary/40"
// // // //                   layoutId="timeline-ring"
// // // //                   transition={{ type: "spring", stiffness: 300, damping: 30 }}
// // // //                 />
// // // //               )}
// // // //             </motion.button>
// // // //           ))}
// // // //           {/* Connecting line */}
// // // //         </motion.div>

// // // //         {/* Task Card */}
// // // //         <motion.div
// // // //           key={selectedDay}
// // // //           className="glass rounded-2xl p-8 md:p-10 gradient-border ambient-light max-w-3xl mx-auto"
// // // //           initial={{ opacity: 0, y: 20, scale: 0.97 }}
// // // //           animate={{ opacity: 1, y: 0, scale: 1 }}
// // // //           transition={{ type: "spring", stiffness: 200, damping: 20 }}
// // // //         >
// // // //           <div className="flex items-start justify-between flex-wrap gap-4 mb-6">
// // // //             <div>
// // // //               <p className="text-sm text-muted-foreground font-medium mb-1">Day {current.day}</p>
// // // //               <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground glow-text-purple">
// // // //                 {current.topic}
// // // //               </h3>
// // // //             </div>
// // // //             <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-accent/10 text-accent text-xs font-semibold border border-accent/20">
// // // //               <Coffee className="w-3.5 h-3.5" />
// // // //               Mandatory 15-Min Break
// // // //             </span>
// // // //           </div>

// // // //           <div className="flex flex-wrap gap-2 mb-8">
// // // //             {current.subtopics.map((st) => (
// // // //               <span key={st} className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm">
// // // //                 {st}
// // // //               </span>
// // // //             ))}
// // // //           </div>

// // // //           <div className="flex flex-wrap gap-3">
// // // //             <motion.button
// // // //               className="flex items-center gap-2 px-5 py-3 rounded-xl glass font-medium text-foreground hover:glow-purple transition-shadow"
// // // //               whileHover={{ scale: 1.04, y: -2 }}
// // // //               whileTap={{ scale: 0.97 }}
// // // //             >
// // // //               <Play className="w-4 h-4 text-primary" />
// // // //               Watch Lecture
// // // //             </motion.button>
// // // //             <motion.button
// // // //               className="flex items-center gap-2 px-5 py-3 rounded-xl glass font-medium text-foreground hover:glow-cyan transition-shadow"
// // // //               whileHover={{ scale: 1.04, y: -2 }}
// // // //               whileTap={{ scale: 0.97 }}
// // // //             >
// // // //               <FileText className="w-4 h-4 text-accent" />
// // // //               Read Material
// // // //             </motion.button>
// // // //           </div>

// // // //           {/* Estimated Time */}
// // // //           <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
// // // //             <Clock className="w-4 h-4" />
// // // //             <span>Estimated: 3.5 hours</span>
// // // //           </div>
// // // //         </motion.div>
// // // //       </div>
// // // //     </section>
// // // //   );
// // // // };

// // // // export default Dashboard;




// // // import { useState } from "react";
// // // import { motion } from "framer-motion";
// // // import { Play, FileText, Clock, Coffee } from "lucide-react";

// // // const days = [
// // //   { day: 1, topic: "Binary Search Trees", subtopics: ["Traversal", "Insertion", "Deletion"] },
// // //   { day: 2, topic: "Graph Algorithms", subtopics: ["BFS", "DFS", "Shortest Path"] },
// // //   { day: 3, topic: "Dynamic Programming", subtopics: ["Memoization", "Tabulation", "LCS"] },
// // //   { day: 4, topic: "Sorting Algorithms", subtopics: ["QuickSort", "MergeSort", "HeapSort"] },
// // //   { day: 5, topic: "Hashing & Maps", subtopics: ["Hash Tables", "Collision", "Probing"] },
// // //   { day: 6, topic: "Recursion & Backtracking", subtopics: ["N-Queens", "Subsets", "Permutations"] },
// // //   { day: 7, topic: "Revision & Mock Test", subtopics: ["Full Mock", "Weak Areas", "Speed Drill"] },
// // // ];

// // // // Added the onStartStudy prop here!
// // // const Dashboard = ({ onStartStudy }: { onStartStudy: () => void }) => {
// // //   const [selectedDay, setSelectedDay] = useState(0);
// // //   const current = days[selectedDay];

// // //   return (
// // //     <section className="relative py-24 px-4" id="dashboard">
// // //       <div className="max-w-5xl mx-auto">
// // //         <motion.div
// // //           className="text-center mb-12"
// // //           initial={{ opacity: 0, y: 20 }}
// // //           whileInView={{ opacity: 1, y: 0 }}
// // //           viewport={{ once: true }}
// // //         >
// // //           <h2 className="text-3xl md:text-4xl font-display font-bold text-gradient mb-3">
// // //             Your 7-Day Smart Plan
// // //           </h2>
// // //           <p className="text-muted-foreground">An adaptive, context-aware study schedule.</p>
// // //         </motion.div>

// // //         {/* Timeline */}
// // //         <motion.div
// // //           className="flex items-center justify-center gap-2 md:gap-4 mb-12 overflow-x-auto pb-2"
// // //           initial={{ opacity: 0 }}
// // //           whileInView={{ opacity: 1 }}
// // //           viewport={{ once: true }}
// // //           transition={{ delay: 0.2 }}
// // //         >
// // //           {days.map((d, i) => (
// // //             <motion.button
// // //               key={i}
// // //               onClick={() => setSelectedDay(i)}
// // //               className={`relative flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full font-display font-bold text-sm md:text-base transition-all ${
// // //                 selectedDay === i
// // //                   ? "bg-primary text-primary-foreground glow-purple scale-110"
// // //                   : "glass text-muted-foreground hover:text-foreground"
// // //               }`}
// // //               whileHover={{ scale: selectedDay === i ? 1.1 : 1.08 }}
// // //               whileTap={{ scale: 0.95 }}
// // //             >
// // //               {d.day}
// // //               {selectedDay === i && (
// // //                 <motion.div
// // //                   className="absolute -inset-1 rounded-full border-2 border-primary/40"
// // //                   layoutId="timeline-ring"
// // //                   transition={{ type: "spring", stiffness: 300, damping: 30 }}
// // //                 />
// // //               )}
// // //             </motion.button>
// // //           ))}
// // //         </motion.div>

// // //         {/* Task Card */}
// // //         <motion.div
// // //           key={selectedDay}
// // //           className="glass rounded-2xl p-8 md:p-10 gradient-border ambient-light max-w-3xl mx-auto"
// // //           initial={{ opacity: 0, y: 20, scale: 0.97 }}
// // //           animate={{ opacity: 1, y: 0, scale: 1 }}
// // //           transition={{ type: "spring", stiffness: 200, damping: 20 }}
// // //         >
// // //           <div className="flex items-start justify-between flex-wrap gap-4 mb-6">
// // //             <div>
// // //               <p className="text-sm text-muted-foreground font-medium mb-1">Day {current.day}</p>
// // //               <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground glow-text-purple">
// // //                 {current.topic}
// // //               </h3>
// // //             </div>
// // //             <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-accent/10 text-accent text-xs font-semibold border border-accent/20">
// // //               <Coffee className="w-3.5 h-3.5" />
// // //               Mandatory 15-Min Break
// // //             </span>
// // //           </div>

// // //           <div className="flex flex-wrap gap-2 mb-8">
// // //             {current.subtopics.map((st) => (
// // //               <span key={st} className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm">
// // //                 {st}
// // //               </span>
// // //             ))}
// // //           </div>

// // //           <div className="flex flex-wrap gap-3">
// // //             <motion.button
// // //               onClick={onStartStudy} // Attached the prop to this button!
// // //               className="flex items-center gap-2 px-5 py-3 rounded-xl glass font-medium text-foreground hover:glow-purple transition-shadow cursor-pointer"
// // //               whileHover={{ scale: 1.04, y: -2 }}
// // //               whileTap={{ scale: 0.97 }}
// // //             >
// // //               <Play className="w-4 h-4 text-primary" />
// // //               Watch Lecture
// // //             </motion.button>
// // //             <motion.button
// // //               onClick={onStartStudy} // Also attached here for good measure
// // //               className="flex items-center gap-2 px-5 py-3 rounded-xl glass font-medium text-foreground hover:glow-cyan transition-shadow cursor-pointer"
// // //               whileHover={{ scale: 1.04, y: -2 }}
// // //               whileTap={{ scale: 0.97 }}
// // //             >
// // //               <FileText className="w-4 h-4 text-accent" />
// // //               Read Material
// // //             </motion.button>
// // //           </div>

// // //           {/* Estimated Time */}
// // //           <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
// // //             <Clock className="w-4 h-4" />
// // //             <span>Estimated: 3.5 hours</span>
// // //           </div>
// // //         </motion.div>
// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // export default Dashboard;



// // import { useState } from "react";
// // import { motion } from "framer-motion";
// // import { Play, FileText, Clock, Coffee } from "lucide-react";

// // // Fallback data in case the AI generation fails or is empty
// // const DEFAULT_DAYS = [
// //   { day: 1, topic: "Binary Search Trees", subtopics: ["Traversal", "Insertion", "Deletion"] },
// //   { day: 2, topic: "Graph Algorithms", subtopics: ["BFS", "DFS", "Shortest Path"] },
// //   { day: 3, topic: "Dynamic Programming", subtopics: ["Memoization", "Tabulation", "LCS"] },
// //   { day: 4, topic: "Sorting Algorithms", subtopics: ["QuickSort", "MergeSort", "HeapSort"] },
// //   { day: 5, topic: "Hashing & Maps", subtopics: ["Hash Tables", "Collision", "Probing"] },
// //   { day: 6, topic: "Recursion & Backtracking", subtopics: ["N-Queens", "Subsets", "Permutations"] },
// //   { day: 7, topic: "Revision & Mock Test", subtopics: ["Full Mock", "Weak Areas", "Speed Drill"] },
// // ];

// // type DashboardProps = {
// //   plan: any[];
// //   onStartStudy: () => void;
// // };

// // const Dashboard = ({ plan, onStartStudy }: DashboardProps) => {
// //   const [selectedDay, setSelectedDay] = useState(0);
  
// //   // Use the AI generated plan, or use the default if the plan is missing/empty
// //   const displayPlan = plan && plan.length > 0 ? plan : DEFAULT_DAYS;
// //   const current = displayPlan[selectedDay];

// //   return (
// //     <section className="relative py-24 px-4" id="dashboard">
// //       <div className="max-w-5xl mx-auto">
// //         <motion.div
// //           className="text-center mb-12"
// //           initial={{ opacity: 0, y: 20 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           viewport={{ once: true }}
// //         >
// //           <h2 className="text-3xl md:text-4xl font-display font-bold text-gradient mb-3">
// //             Your 7-Day Smart Plan
// //           </h2>
// //           <p className="text-muted-foreground">Tailored exactly to your weak points.</p>
// //         </motion.div>

// //         {/* Timeline */}
// //         <motion.div className="flex items-center justify-center gap-2 md:gap-4 mb-12 overflow-x-auto pb-2">
// //           {displayPlan.map((d, i) => (
// //             <motion.button
// //               key={i}
// //               onClick={() => setSelectedDay(i)}
// //               className={`relative flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full font-display font-bold text-sm md:text-base transition-all ${
// //                 selectedDay === i
// //                   ? "bg-primary text-primary-foreground glow-purple scale-110"
// //                   : "glass text-muted-foreground hover:text-foreground"
// //               }`}
// //             >
// //               {d.day || i + 1}
// //               {selectedDay === i && (
// //                 <motion.div className="absolute -inset-1 rounded-full border-2 border-primary/40" layoutId="timeline-ring" />
// //               )}
// //             </motion.button>
// //           ))}
// //         </motion.div>

// //         {/* Task Card */}
// //         {current && (
// //           <motion.div
// //             key={selectedDay}
// //             className="glass rounded-2xl p-8 md:p-10 gradient-border ambient-light max-w-3xl mx-auto"
// //             initial={{ opacity: 0, y: 20 }}
// //             animate={{ opacity: 1, y: 0 }}
// //           >
// //             <div className="flex items-start justify-between flex-wrap gap-4 mb-6">
// //               <div>
// //                 <p className="text-sm text-muted-foreground font-medium mb-1">Day {current.day || selectedDay + 1}</p>
// //                 <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground glow-text-purple">
// //                   {current.topic}
// //                 </h3>
// //               </div>
// //               <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-accent/10 text-accent text-xs font-semibold border border-accent/20">
// //                 <Coffee className="w-3.5 h-3.5" />
// //                 Mandatory 15-Min Break
// //               </span>
// //             </div>

// //             <div className="flex flex-wrap gap-2 mb-8">
// //               {current.subtopics && current.subtopics.map((st: string, idx: number) => (
// //                 <span key={idx} className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm">
// //                   {st}
// //                 </span>
// //               ))}
// //             </div>

// //             <div className="flex flex-wrap gap-3">
// //               <motion.button
// //                 onClick={onStartStudy}
// //                 className="flex items-center gap-2 px-5 py-3 rounded-xl glass font-medium text-foreground hover:glow-purple transition-shadow cursor-pointer"
// //               >
// //                 <Play className="w-4 h-4 text-primary" />
// //                 Watch Lecture
// //               </motion.button>
// //               <motion.button
// //                 onClick={onStartStudy}
// //                 className="flex items-center gap-2 px-5 py-3 rounded-xl glass font-medium text-foreground hover:glow-cyan transition-shadow cursor-pointer"
// //               >
// //                 <FileText className="w-4 h-4 text-accent" />
// //                 Read Material
// //               </motion.button>
// //             </div>
// //           </motion.div>
// //         )}
// //       </div>
// //     </section>
// //   );
// // };

// // export default Dashboard;

// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Play, FileText, Coffee, X, ExternalLink, Loader2, Sparkles, Target } from "lucide-react";
// import { StudyDay, SubTopic } from "@/lib/ai";

// // Updated fallback data to match the new AI structure
// const DEFAULT_DAYS: StudyDay[] = [
//   { 
//     day: 1, 
//     topic: "Binary Search Trees", 
//     subtopics: [
//       { name: "Traversal", youtubeQuery: "BST Traversal algorithms", wikiTopic: "Tree_traversal" },
//       { name: "Insertion", youtubeQuery: "BST Insertion", wikiTopic: "Binary_search_tree" }
//     ] 
//   },
//   { 
//     day: 2, 
//     topic: "Graph Algorithms", 
//     subtopics: [
//       { name: "BFS & DFS", youtubeQuery: "Graph BFS DFS", wikiTopic: "Graph_traversal" }
//     ] 
//   }
// ];

// type DashboardProps = {
//   plan: StudyDay[];
//   onStartStudy: () => void;
// };

// const Dashboard = ({ plan, onStartStudy }: DashboardProps) => {
//   const [selectedDay, setSelectedDay] = useState(0);
//   const [selectedSubtopicIdx, setSelectedSubtopicIdx] = useState(0);

//   // Modal States
//   const [viewerUrl, setViewerUrl] = useState<string | null>(null);
//   const [cheatSheetHtml, setCheatSheetHtml] = useState<string | null>(null);
//   const [isGeneratingNote, setIsGeneratingNote] = useState(false);
//   const [viewerTitle, setViewerTitle] = useState("");

//   // Use the AI generated plan, or use the default if missing
//   const displayPlan = plan && plan.length > 0 ? plan : DEFAULT_DAYS;
//   const currentDay = displayPlan[selectedDay];
//   const activeSubtopic = currentDay?.subtopics[selectedSubtopicIdx] || currentDay?.subtopics[0];

//   // Reset selected subtopic when changing days
//   useEffect(() => {
//     setSelectedSubtopicIdx(0);
//   }, [selectedDay]);

//   const openVideo = (subtopic: SubTopic) => {
//     if (!subtopic) return;
    
//     // YouTube strictly blocks search iframes now. 
//     // The safest hackathon move is to open a new tab directly to the exact video search.
//     const searchUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(subtopic.youtubeQuery)}`;
    
//     // Opens securely in a new tab
//     window.open(searchUrl, "_blank", "noopener,noreferrer");
//   };

//   const openReading = async (subtopic: SubTopic) => {
//     if (!subtopic) return;
//     setViewerTitle(`AI Notes: ${subtopic.name}`);
//     setViewerUrl(null);
//     setCheatSheetHtml(null);
//     setIsGeneratingNote(true);

//     try {
//       const response = await fetch("http://localhost:8000/generate-cheat-sheet", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ topic: subtopic.name }),
//       });

//       if (!response.ok) throw new Error("Server error");
      
//       const data = await response.json();
//       setCheatSheetHtml(data.html || "<p>Failed to generate notes.</p>");
//     } catch (error) {
//       console.error(error);
//       setCheatSheetHtml("<p class='text-red-400'>Error connecting to AI. Please try again.</p>");
//     } finally {
//       setIsGeneratingNote(false);
//     }
//   };

//   const closeModal = () => {
//     setViewerUrl(null);
//     setCheatSheetHtml(null);
//     setIsGeneratingNote(false);
//   };

//   return (
//     <section className="relative py-24 px-4 min-h-screen" id="dashboard">
//       <div className="max-w-5xl mx-auto">
//         <motion.div
//           className="text-center mb-12"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//         >
//           <h2 className="text-3xl md:text-4xl font-display font-bold text-gradient mb-3">
//             Your 7-Day Smart Plan
//           </h2>
//           <p className="text-muted-foreground">Tailored exactly to your weak points.</p>
//         </motion.div>

//         {/* Timeline */}
//         <motion.div className="flex items-center justify-center gap-2 md:gap-4 mb-12 overflow-x-auto pb-2">
//           {displayPlan.map((d, i) => (
//             <motion.button
//               key={i}
//               onClick={() => setSelectedDay(i)}
//               className={`relative flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full font-display font-bold text-sm md:text-base transition-all ${
//                 selectedDay === i
//                   ? "bg-primary text-primary-foreground glow-purple scale-110"
//                   : "glass text-muted-foreground hover:text-foreground hover:scale-105"
//               }`}
//             >
//               {d.day || i + 1}
//               {selectedDay === i && (
//                 <motion.div className="absolute -inset-1 rounded-full border-2 border-primary/40" layoutId="timeline-ring" />
//               )}
//             </motion.button>
//           ))}
//         </motion.div>

//         {/* Task Card */}
//         {currentDay && (
//           <motion.div
//             key={selectedDay}
//             className="glass rounded-2xl p-8 md:p-10 gradient-border ambient-light max-w-3xl mx-auto"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//           >
//             <div className="flex items-start justify-between flex-wrap gap-4 mb-6">
//               <div>
//                 <p className="text-sm text-muted-foreground font-medium mb-1">Day {currentDay.day || selectedDay + 1}</p>
//                 <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground glow-text-purple">
//                   {currentDay.topic}
//                 </h3>
//               </div>
//               <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-accent/10 text-accent text-xs font-semibold border border-accent/20">
//                 <Coffee className="w-3.5 h-3.5" />
//                 Mandatory 15-Min Break
//               </span>
//             </div>

//             {/* Interactive Subtopic Pills */}
//             <div className="mb-8">
//               <p className="text-sm text-muted-foreground mb-3">Select a subtopic to study:</p>
//               <div className="flex flex-wrap gap-2">
//                 {currentDay.subtopics && currentDay.subtopics.map((st, idx) => (
//                   <button 
//                     key={idx} 
//                     onClick={() => setSelectedSubtopicIdx(idx)}
//                     className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
//                       selectedSubtopicIdx === idx 
//                         ? "bg-primary text-primary-foreground shadow-[0_0_15px_rgba(var(--primary),0.4)]" 
//                         : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
//                     }`}
//                   >
//                     {st.name}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             {/* Action Buttons for the Selected Subtopic */}
//             <div className="flex flex-wrap gap-4 pt-4 border-t border-border/50">
//               <motion.button
//                 onClick={() => openVideo(activeSubtopic)}
//                 className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-secondary/50 font-medium text-foreground hover:bg-secondary border border-border/50 hover:border-red-500/50 hover:text-red-400 transition-all cursor-pointer"
//                 whileHover={{ scale: 1.02 }}
//                 whileTap={{ scale: 0.98 }}
//               >
//                 <Play className="w-5 h-5 text-red-500" />
//                 Watch Lecture
//               </motion.button>
              
//               <motion.button
//                 onClick={() => openReading(activeSubtopic)}
//                 className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-secondary/50 font-medium text-foreground hover:bg-secondary border border-border/50 hover:border-blue-500/50 hover:text-blue-400 transition-all cursor-pointer group"
//                 whileHover={{ scale: 1.02 }}
//                 whileTap={{ scale: 0.98 }}
//               >
//                 <Sparkles className="w-5 h-5 text-blue-500 group-hover:animate-pulse" />
//                 Read AI Notes
//               </motion.button>

//               {/* Keep the original Focus Room trigger */}
//               <motion.button
//                 onClick={onStartStudy}
//                 className="ml-auto flex items-center gap-2 px-6 py-3.5 rounded-xl bg-primary/20 text-primary font-bold hover:bg-primary hover:text-primary-foreground transition-all cursor-pointer"
//                 whileHover={{ scale: 1.02 }}
//                 whileTap={{ scale: 0.98 }}
//               >
//                 <Target className="w-5 h-5" />
//                 Enter Focus Room
//               </motion.button>
//             </div>
//           </motion.div>
//         )}
//       </div>

//       {/* IN-APP VIEWER MODAL */}
//       <AnimatePresence>
//         {(viewerUrl || isGeneratingNote || cheatSheetHtml) && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
//           >
//             <motion.div
//               initial={{ scale: 0.95, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               exit={{ scale: 0.95, opacity: 0 }}
//               className="w-full max-w-4xl h-[80vh] bg-[#0a0a0a] border border-border rounded-2xl overflow-hidden flex flex-col shadow-2xl"
//             >
//               {/* Modal Header */}
//               <div className="flex items-center justify-between px-6 py-4 border-b border-border bg-secondary/20">
//                 <div className="flex items-center gap-3">
//                   <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
//                     {viewerUrl ? <Play className="w-4 h-4 text-red-500" /> : <Sparkles className="w-4 h-4 text-primary" />}
//                   </div>
//                   <h3 className="font-semibold text-foreground">{viewerTitle}</h3>
//                 </div>
//                 <button
//                   onClick={closeModal}
//                   className="p-2 rounded-lg hover:bg-white/10 text-muted-foreground hover:text-white transition-colors"
//                 >
//                   <X className="w-5 h-5" />
//                 </button>
//               </div>

//               {/* Dynamic Content Area */}
//               <div className="flex-1 w-full relative overflow-y-auto">
//                 {/* 1. Show Video */}
//                 {viewerUrl && (
//                   <iframe
//                     src={viewerUrl}
//                     className="absolute inset-0 w-full h-full border-0"
//                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                     allowFullScreen
//                   />
//                 )}

//                 {/* 2. Show Loading State for AI Notes */}
//                 {isGeneratingNote && (
//                   <div className="absolute inset-0 flex flex-col items-center justify-center text-primary">
//                     <Loader2 className="w-12 h-12 animate-spin mb-4" />
//                     <p className="animate-pulse font-medium">Gemini AI is crafting your study guide...</p>
//                   </div>
//                 )}

//                 {/* 3. Show Rendered AI Cheat Sheet */}
//                 {cheatSheetHtml && (
//                   <div 
//                     className="p-8 prose prose-invert max-w-none text-foreground leading-relaxed"
//                     dangerouslySetInnerHTML={{ __html: cheatSheetHtml }}
//                   />
//                 )}
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </section>
//   );
// };

// export default Dashboard;




import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Coffee, X, Loader2, Sparkles, AlertTriangle, Eye, Video } from "lucide-react";
import Webcam from "react-webcam";
import { StudyDay, SubTopic } from "@/lib/ai";

const DEFAULT_DAYS: StudyDay[] = [
  { day: 1, topic: "Binary Search Trees", subtopics: [{ name: "Traversal", youtubeQuery: "BST Traversal algorithms", wikiTopic: "Tree_traversal" }] }
];

type DashboardProps = {
  plan: StudyDay[];
};

const Dashboard = ({ plan }: DashboardProps) => {
  const [selectedDay, setSelectedDay] = useState(0);
  const [selectedSubtopicIdx, setSelectedSubtopicIdx] = useState(0);

  // Focus Mode & WebRTC State
  const [isFocusMode, setIsFocusMode] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [cvAlerts, setCvAlerts] = useState({ drowsy: false, distracted: false, focusScore: 100 });
  const webcamRef = useRef<Webcam>(null);
  const wsRef = useRef<WebSocket | null>(null);

  // Background Loop for sending frames to Python MediaPipe
  const captureAndSendFrame = useCallback(() => {
    if (!isFocusMode || !webcamRef.current || !wsRef.current) return;
    if (wsRef.current.readyState === WebSocket.OPEN) {
      const imageSrc = webcamRef.current.getScreenshot();
      if (imageSrc) {
        wsRef.current.send(imageSrc);
      }
    }
  }, [isFocusMode]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isFocusMode) {
      // 1. Connect to Python WebSocket
      wsRef.current = new WebSocket("ws://localhost:8000/ws/focus");
      
      wsRef.current.onmessage = (event) => {
        const data = JSON.parse(event.data);
        setCvAlerts(data);
      };

      // 2. Start sending frames every 500ms
      interval = setInterval(captureAndSendFrame, 500);
    } else {
      // Cleanup when Focus Mode is disabled
      if (wsRef.current) wsRef.current.close();
      setShowVideo(false);
      setCvAlerts({ drowsy: false, distracted: false, focusScore: 100 });
    }

    return () => clearInterval(interval);
  }, [isFocusMode, captureAndSendFrame]);

  // Handle Changing Days
  useEffect(() => setSelectedSubtopicIdx(0), [selectedDay]);
  const displayPlan = plan && plan.length > 0 ? plan : DEFAULT_DAYS;
  const currentDay = displayPlan[selectedDay];
  const activeSubtopic = currentDay?.subtopics[selectedSubtopicIdx] || currentDay?.subtopics[0];

  const openVideo = (subtopic: SubTopic) => {
    if (!subtopic) return;
    const searchUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(subtopic.youtubeQuery)}`;
    window.open(searchUrl, "_blank", "noopener,noreferrer");
  };

  // AI Notes Modal State (Simplified for length)
  const [cheatSheetHtml, setCheatSheetHtml] = useState<string | null>(null);
  const [isGeneratingNote, setIsGeneratingNote] = useState(false);

  const openReading = async (subtopic: SubTopic) => {
    if (!subtopic) return;
    setIsGeneratingNote(true);
    try {
      const response = await fetch("http://localhost:8000/generate-cheat-sheet", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ topic: subtopic.name }),
      });
      const data = await response.json();
      setCheatSheetHtml(data.html || "<p>Failed to generate notes.</p>");
    } catch {
      setCheatSheetHtml("<p class='text-red-400'>Error connecting to AI.</p>");
    } finally {
      setIsGeneratingNote(false);
    }
  };

  return (
    <section className="relative py-24 px-4 min-h-screen" id="dashboard">
      <div className="max-w-5xl mx-auto">
        
        {/* TOP BAR: FOCUS MODE TOGGLE */}
        <div className="flex flex-col md:flex-row items-center justify-between bg-secondary/20 border border-border/50 rounded-2xl p-4 mb-12 shadow-xl backdrop-blur-md">
          <div>
            <h2 className="text-xl font-display font-bold text-foreground">Dashboard</h2>
            <p className="text-sm text-muted-foreground">Your 7-Day Action Plan</p>
          </div>
          
          <div className="flex items-center gap-6 mt-4 md:mt-0">
            {/* Real-time Alerts */}
            {isFocusMode && (
              <div className="flex items-center gap-4 mr-4 animate-in fade-in zoom-in">
                {cvAlerts.distracted && <span className="flex items-center gap-1.5 text-xs font-bold text-yellow-500 bg-yellow-500/10 px-3 py-1.5 rounded-full"><Eye className="w-3.5 h-3.5"/> Distracted</span>}
                {cvAlerts.drowsy && <span className="flex items-center gap-1.5 text-xs font-bold text-red-500 bg-red-500/10 px-3 py-1.5 rounded-full"><AlertTriangle className="w-3.5 h-3.5 animate-pulse"/> Drowsy</span>}
                <div className="flex flex-col items-end">
                  <span className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider">Focus Score</span>
                  <span className={`text-lg font-bold leading-none ${cvAlerts.focusScore < 70 ? 'text-red-400' : 'text-primary'}`}>{cvAlerts.focusScore}%</span>
                </div>
              </div>
            )}

            {/* Video Toggle */}
            {isFocusMode && (
              <button 
                onClick={() => setShowVideo(!showVideo)}
                className={`p-2 rounded-lg transition-colors ${showVideo ? 'bg-primary text-black' : 'bg-white/5 text-muted-foreground hover:bg-white/10'}`}
                title="Toggle Video Feed"
              >
                <Video className="w-5 h-5" />
              </button>
            )}

            {/* Main Mode Toggle */}
            <div className="flex items-center gap-3 bg-[#0a0a0a] px-4 py-2 rounded-xl border border-white/5">
              <span className={`text-sm font-semibold transition-colors ${!isFocusMode ? 'text-white' : 'text-muted-foreground'}`}>Normal</span>
              
              <button 
                onClick={() => setIsFocusMode(!isFocusMode)}
                className={`relative w-12 h-6 rounded-full transition-colors ${isFocusMode ? 'bg-primary' : 'bg-secondary'}`}
              >
                <motion.div 
                  layout
                  className="absolute top-1 bottom-1 w-4 bg-white rounded-full shadow-md"
                  animate={{ left: isFocusMode ? '1.75rem' : '0.25rem' }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              </button>

              <span className={`text-sm font-semibold transition-colors flex items-center gap-1.5 ${isFocusMode ? 'text-primary glow-text-cyan' : 'text-muted-foreground'}`}>
                 Focus
              </span>
            </div>
          </div>
        </div>

        {/* Hidden or PiP Webcam */}
        {isFocusMode && (
          <div className={`fixed bottom-6 right-6 z-50 overflow-hidden border border-border/50 rounded-2xl shadow-2xl transition-all duration-500 ${showVideo ? 'w-64 h-48 opacity-100' : 'w-0 h-0 opacity-0'}`}>
            <Webcam
              ref={webcamRef}
              audio={false}
              screenshotFormat="image/jpeg"
              videoConstraints={{ facingMode: "user" }}
              className="w-full h-full object-cover"
              mirrored={true}
            />
            {/* Status Overlay on Video */}
            <div className="absolute top-2 left-2 flex flex-col gap-1">
               {cvAlerts.distracted && <span className="bg-yellow-500 text-black text-[10px] font-bold px-2 py-0.5 rounded-md">Distracted</span>}
               {cvAlerts.drowsy && <span className="bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-md">Drowsy</span>}
            </div>
          </div>
        )}

        {/* Timeline */}
        <motion.div className="flex items-center justify-center gap-2 md:gap-4 mb-12 overflow-x-auto pb-2">
          {displayPlan.map((d, i) => (
            <button key={i} onClick={() => setSelectedDay(i)} className={`relative w-14 h-14 rounded-full font-bold transition-all ${selectedDay === i ? "bg-primary text-black scale-110" : "glass text-muted-foreground"}`}>
              {d.day || i + 1}
            </button>
          ))}
        </motion.div>

        {/* Task Card */}
        {currentDay && (
          <motion.div key={selectedDay} className="glass rounded-2xl p-8 md:p-10 gradient-border max-w-3xl mx-auto">
            <div className="flex justify-between items-start mb-6">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Day {currentDay.day}</p>
                <h3 className="text-3xl font-display font-bold glow-text-purple">{currentDay.topic}</h3>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              {currentDay.subtopics && currentDay.subtopics.map((st, idx) => (
                <button key={idx} onClick={() => setSelectedSubtopicIdx(idx)} className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${selectedSubtopicIdx === idx ? "bg-primary text-black" : "bg-secondary text-secondary-foreground"}`}>
                  {st.name}
                </button>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 pt-4 border-t border-border/50">
              <button onClick={() => openVideo(activeSubtopic)} className="flex items-center gap-2 px-6 py-3 rounded-xl bg-secondary/50 font-medium hover:bg-secondary border border-border/50 hover:border-red-500/50 hover:text-red-400 transition-all">
                <Play className="w-5 h-5 text-red-500" /> Watch Lecture
              </button>
              <button onClick={() => openReading(activeSubtopic)} className="flex items-center gap-2 px-6 py-3 rounded-xl bg-secondary/50 font-medium hover:bg-secondary border border-border/50 hover:border-blue-500/50 hover:text-blue-400 transition-all">
                <Sparkles className="w-5 h-5 text-blue-500" /> Read AI Notes
              </button>
            </div>
          </motion.div>
        )}
      </div>

      {/* AI Notes Modal */}
      <AnimatePresence>
        {(isGeneratingNote || cheatSheetHtml) && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm">
            <div className="w-full max-w-4xl h-[80vh] bg-[#0a0a0a] border border-border rounded-2xl flex flex-col">
              <div className="flex justify-between p-4 border-b border-border">
                <h3 className="font-bold flex items-center gap-2"><Sparkles className="w-4 h-4 text-primary"/> AI Cheat Sheet</h3>
                <button onClick={() => setCheatSheetHtml(null)} className="p-2 hover:bg-white/10 rounded-lg"><X className="w-5 h-5" /></button>
              </div>
              <div className="flex-1 overflow-y-auto p-8">
                {isGeneratingNote ? (
                  <div className="flex flex-col items-center justify-center h-full text-primary"><Loader2 className="w-10 h-10 animate-spin mb-4" /> Generating...</div>
                ) : (
                  <div className="prose prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: cheatSheetHtml! }} />
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Dashboard;