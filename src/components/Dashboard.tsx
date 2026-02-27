// // import { useState } from "react";
// // import { motion } from "framer-motion";
// // import { Play, FileText, Clock, Coffee } from "lucide-react";

// // const days = [
// //   { day: 1, topic: "Binary Search Trees", subtopics: ["Traversal", "Insertion", "Deletion"] },
// //   { day: 2, topic: "Graph Algorithms", subtopics: ["BFS", "DFS", "Shortest Path"] },
// //   { day: 3, topic: "Dynamic Programming", subtopics: ["Memoization", "Tabulation", "LCS"] },
// //   { day: 4, topic: "Sorting Algorithms", subtopics: ["QuickSort", "MergeSort", "HeapSort"] },
// //   { day: 5, topic: "Hashing & Maps", subtopics: ["Hash Tables", "Collision", "Probing"] },
// //   { day: 6, topic: "Recursion & Backtracking", subtopics: ["N-Queens", "Subsets", "Permutations"] },
// //   { day: 7, topic: "Revision & Mock Test", subtopics: ["Full Mock", "Weak Areas", "Speed Drill"] },
// // ];

// // const Dashboard = () => {
// //   const [selectedDay, setSelectedDay] = useState(0);
// //   const current = days[selectedDay];

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
// //           <p className="text-muted-foreground">An adaptive, context-aware study schedule.</p>
// //         </motion.div>

// //         {/* Timeline */}
// //         <motion.div
// //           className="flex items-center justify-center gap-2 md:gap-4 mb-12 overflow-x-auto pb-2"
// //           initial={{ opacity: 0 }}
// //           whileInView={{ opacity: 1 }}
// //           viewport={{ once: true }}
// //           transition={{ delay: 0.2 }}
// //         >
// //           {days.map((d, i) => (
// //             <motion.button
// //               key={i}
// //               onClick={() => setSelectedDay(i)}
// //               className={`relative flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full font-display font-bold text-sm md:text-base transition-all ${
// //                 selectedDay === i
// //                   ? "bg-primary text-primary-foreground glow-purple scale-110"
// //                   : "glass text-muted-foreground hover:text-foreground"
// //               }`}
// //               whileHover={{ scale: selectedDay === i ? 1.1 : 1.08 }}
// //               whileTap={{ scale: 0.95 }}
// //             >
// //               {d.day}
// //               {selectedDay === i && (
// //                 <motion.div
// //                   className="absolute -inset-1 rounded-full border-2 border-primary/40"
// //                   layoutId="timeline-ring"
// //                   transition={{ type: "spring", stiffness: 300, damping: 30 }}
// //                 />
// //               )}
// //             </motion.button>
// //           ))}
// //           {/* Connecting line */}
// //         </motion.div>

// //         {/* Task Card */}
// //         <motion.div
// //           key={selectedDay}
// //           className="glass rounded-2xl p-8 md:p-10 gradient-border ambient-light max-w-3xl mx-auto"
// //           initial={{ opacity: 0, y: 20, scale: 0.97 }}
// //           animate={{ opacity: 1, y: 0, scale: 1 }}
// //           transition={{ type: "spring", stiffness: 200, damping: 20 }}
// //         >
// //           <div className="flex items-start justify-between flex-wrap gap-4 mb-6">
// //             <div>
// //               <p className="text-sm text-muted-foreground font-medium mb-1">Day {current.day}</p>
// //               <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground glow-text-purple">
// //                 {current.topic}
// //               </h3>
// //             </div>
// //             <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-accent/10 text-accent text-xs font-semibold border border-accent/20">
// //               <Coffee className="w-3.5 h-3.5" />
// //               Mandatory 15-Min Break
// //             </span>
// //           </div>

// //           <div className="flex flex-wrap gap-2 mb-8">
// //             {current.subtopics.map((st) => (
// //               <span key={st} className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm">
// //                 {st}
// //               </span>
// //             ))}
// //           </div>

// //           <div className="flex flex-wrap gap-3">
// //             <motion.button
// //               className="flex items-center gap-2 px-5 py-3 rounded-xl glass font-medium text-foreground hover:glow-purple transition-shadow"
// //               whileHover={{ scale: 1.04, y: -2 }}
// //               whileTap={{ scale: 0.97 }}
// //             >
// //               <Play className="w-4 h-4 text-primary" />
// //               Watch Lecture
// //             </motion.button>
// //             <motion.button
// //               className="flex items-center gap-2 px-5 py-3 rounded-xl glass font-medium text-foreground hover:glow-cyan transition-shadow"
// //               whileHover={{ scale: 1.04, y: -2 }}
// //               whileTap={{ scale: 0.97 }}
// //             >
// //               <FileText className="w-4 h-4 text-accent" />
// //               Read Material
// //             </motion.button>
// //           </div>

// //           {/* Estimated Time */}
// //           <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
// //             <Clock className="w-4 h-4" />
// //             <span>Estimated: 3.5 hours</span>
// //           </div>
// //         </motion.div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default Dashboard;




// import { useState } from "react";
// import { motion } from "framer-motion";
// import { Play, FileText, Clock, Coffee } from "lucide-react";

// const days = [
//   { day: 1, topic: "Binary Search Trees", subtopics: ["Traversal", "Insertion", "Deletion"] },
//   { day: 2, topic: "Graph Algorithms", subtopics: ["BFS", "DFS", "Shortest Path"] },
//   { day: 3, topic: "Dynamic Programming", subtopics: ["Memoization", "Tabulation", "LCS"] },
//   { day: 4, topic: "Sorting Algorithms", subtopics: ["QuickSort", "MergeSort", "HeapSort"] },
//   { day: 5, topic: "Hashing & Maps", subtopics: ["Hash Tables", "Collision", "Probing"] },
//   { day: 6, topic: "Recursion & Backtracking", subtopics: ["N-Queens", "Subsets", "Permutations"] },
//   { day: 7, topic: "Revision & Mock Test", subtopics: ["Full Mock", "Weak Areas", "Speed Drill"] },
// ];

// // Added the onStartStudy prop here!
// const Dashboard = ({ onStartStudy }: { onStartStudy: () => void }) => {
//   const [selectedDay, setSelectedDay] = useState(0);
//   const current = days[selectedDay];

//   return (
//     <section className="relative py-24 px-4" id="dashboard">
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
//           <p className="text-muted-foreground">An adaptive, context-aware study schedule.</p>
//         </motion.div>

//         {/* Timeline */}
//         <motion.div
//           className="flex items-center justify-center gap-2 md:gap-4 mb-12 overflow-x-auto pb-2"
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.2 }}
//         >
//           {days.map((d, i) => (
//             <motion.button
//               key={i}
//               onClick={() => setSelectedDay(i)}
//               className={`relative flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full font-display font-bold text-sm md:text-base transition-all ${
//                 selectedDay === i
//                   ? "bg-primary text-primary-foreground glow-purple scale-110"
//                   : "glass text-muted-foreground hover:text-foreground"
//               }`}
//               whileHover={{ scale: selectedDay === i ? 1.1 : 1.08 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               {d.day}
//               {selectedDay === i && (
//                 <motion.div
//                   className="absolute -inset-1 rounded-full border-2 border-primary/40"
//                   layoutId="timeline-ring"
//                   transition={{ type: "spring", stiffness: 300, damping: 30 }}
//                 />
//               )}
//             </motion.button>
//           ))}
//         </motion.div>

//         {/* Task Card */}
//         <motion.div
//           key={selectedDay}
//           className="glass rounded-2xl p-8 md:p-10 gradient-border ambient-light max-w-3xl mx-auto"
//           initial={{ opacity: 0, y: 20, scale: 0.97 }}
//           animate={{ opacity: 1, y: 0, scale: 1 }}
//           transition={{ type: "spring", stiffness: 200, damping: 20 }}
//         >
//           <div className="flex items-start justify-between flex-wrap gap-4 mb-6">
//             <div>
//               <p className="text-sm text-muted-foreground font-medium mb-1">Day {current.day}</p>
//               <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground glow-text-purple">
//                 {current.topic}
//               </h3>
//             </div>
//             <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-accent/10 text-accent text-xs font-semibold border border-accent/20">
//               <Coffee className="w-3.5 h-3.5" />
//               Mandatory 15-Min Break
//             </span>
//           </div>

//           <div className="flex flex-wrap gap-2 mb-8">
//             {current.subtopics.map((st) => (
//               <span key={st} className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm">
//                 {st}
//               </span>
//             ))}
//           </div>

//           <div className="flex flex-wrap gap-3">
//             <motion.button
//               onClick={onStartStudy} // Attached the prop to this button!
//               className="flex items-center gap-2 px-5 py-3 rounded-xl glass font-medium text-foreground hover:glow-purple transition-shadow cursor-pointer"
//               whileHover={{ scale: 1.04, y: -2 }}
//               whileTap={{ scale: 0.97 }}
//             >
//               <Play className="w-4 h-4 text-primary" />
//               Watch Lecture
//             </motion.button>
//             <motion.button
//               onClick={onStartStudy} // Also attached here for good measure
//               className="flex items-center gap-2 px-5 py-3 rounded-xl glass font-medium text-foreground hover:glow-cyan transition-shadow cursor-pointer"
//               whileHover={{ scale: 1.04, y: -2 }}
//               whileTap={{ scale: 0.97 }}
//             >
//               <FileText className="w-4 h-4 text-accent" />
//               Read Material
//             </motion.button>
//           </div>

//           {/* Estimated Time */}
//           <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
//             <Clock className="w-4 h-4" />
//             <span>Estimated: 3.5 hours</span>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Dashboard;



import { useState } from "react";
import { motion } from "framer-motion";
import { Play, FileText, Clock, Coffee } from "lucide-react";

// Fallback data in case the AI generation fails or is empty
const DEFAULT_DAYS = [
  { day: 1, topic: "Binary Search Trees", subtopics: ["Traversal", "Insertion", "Deletion"] },
  { day: 2, topic: "Graph Algorithms", subtopics: ["BFS", "DFS", "Shortest Path"] },
  { day: 3, topic: "Dynamic Programming", subtopics: ["Memoization", "Tabulation", "LCS"] },
  { day: 4, topic: "Sorting Algorithms", subtopics: ["QuickSort", "MergeSort", "HeapSort"] },
  { day: 5, topic: "Hashing & Maps", subtopics: ["Hash Tables", "Collision", "Probing"] },
  { day: 6, topic: "Recursion & Backtracking", subtopics: ["N-Queens", "Subsets", "Permutations"] },
  { day: 7, topic: "Revision & Mock Test", subtopics: ["Full Mock", "Weak Areas", "Speed Drill"] },
];

type DashboardProps = {
  plan: any[];
  onStartStudy: () => void;
};

const Dashboard = ({ plan, onStartStudy }: DashboardProps) => {
  const [selectedDay, setSelectedDay] = useState(0);
  
  // Use the AI generated plan, or use the default if the plan is missing/empty
  const displayPlan = plan && plan.length > 0 ? plan : DEFAULT_DAYS;
  const current = displayPlan[selectedDay];

  return (
    <section className="relative py-24 px-4" id="dashboard">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gradient mb-3">
            Your 7-Day Smart Plan
          </h2>
          <p className="text-muted-foreground">Tailored exactly to your weak points.</p>
        </motion.div>

        {/* Timeline */}
        <motion.div className="flex items-center justify-center gap-2 md:gap-4 mb-12 overflow-x-auto pb-2">
          {displayPlan.map((d, i) => (
            <motion.button
              key={i}
              onClick={() => setSelectedDay(i)}
              className={`relative flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full font-display font-bold text-sm md:text-base transition-all ${
                selectedDay === i
                  ? "bg-primary text-primary-foreground glow-purple scale-110"
                  : "glass text-muted-foreground hover:text-foreground"
              }`}
            >
              {d.day || i + 1}
              {selectedDay === i && (
                <motion.div className="absolute -inset-1 rounded-full border-2 border-primary/40" layoutId="timeline-ring" />
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Task Card */}
        {current && (
          <motion.div
            key={selectedDay}
            className="glass rounded-2xl p-8 md:p-10 gradient-border ambient-light max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex items-start justify-between flex-wrap gap-4 mb-6">
              <div>
                <p className="text-sm text-muted-foreground font-medium mb-1">Day {current.day || selectedDay + 1}</p>
                <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground glow-text-purple">
                  {current.topic}
                </h3>
              </div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-accent/10 text-accent text-xs font-semibold border border-accent/20">
                <Coffee className="w-3.5 h-3.5" />
                Mandatory 15-Min Break
              </span>
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              {current.subtopics && current.subtopics.map((st: string, idx: number) => (
                <span key={idx} className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm">
                  {st}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <motion.button
                onClick={onStartStudy}
                className="flex items-center gap-2 px-5 py-3 rounded-xl glass font-medium text-foreground hover:glow-purple transition-shadow cursor-pointer"
              >
                <Play className="w-4 h-4 text-primary" />
                Watch Lecture
              </motion.button>
              <motion.button
                onClick={onStartStudy}
                className="flex items-center gap-2 px-5 py-3 rounded-xl glass font-medium text-foreground hover:glow-cyan transition-shadow cursor-pointer"
              >
                <FileText className="w-4 h-4 text-accent" />
                Read Material
              </motion.button>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Dashboard;