// // import { useState } from "react";
// // import { motion } from "framer-motion";
// // import { CheckCircle2, ChevronRight, Target } from "lucide-react";

// // // Mocking just 1 question for the UI demo instead of all 30
// // const MOCK_QUESTION = {
// //   id: 1,
// //   text: "What is the worst-case time complexity of finding an element in a Binary Search Tree?",
// //   options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
// // };

// // const MockTest = ({ onComplete }: { onComplete: () => void }) => {
// //   const [selected, setSelected] = useState<number | null>(null);
// //   const [isSubmitted, setIsSubmitted] = useState(false);

// //   if (isSubmitted) {
// //     return (
// //       <section className="min-h-screen flex items-center justify-center py-24 px-4">
// //         <motion.div 
// //           className="max-w-2xl w-full glass rounded-2xl p-8 text-center"
// //           initial={{ opacity: 0, scale: 0.9 }}
// //           animate={{ opacity: 1, scale: 1 }}
// //         >
// //           <Target className="w-16 h-16 mx-auto text-accent mb-4" />
// //           <h2 className="text-3xl font-display font-bold text-foreground mb-2">Analysis Complete</h2>
// //           <p className="text-muted-foreground mb-8">Score: 18/30. We've identified your weak areas: Trees, Graphs, and Dynamic Programming.</p>
          
// //           <button 
// //             onClick={onComplete}
// //             className="px-8 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
// //           >
// //             Generate My Custom Plan
// //           </button>
// //         </motion.div>
// //       </section>
// //     );
// //   }

// //   return (
// //     <section className="min-h-screen flex items-center justify-center py-24 px-4">
// //       <div className="max-w-3xl w-full">
// //         <div className="flex justify-between items-center mb-8">
// //           <h2 className="text-xl font-semibold text-muted-foreground">Diagnostic Mock Test</h2>
// //           <span className="text-accent font-mono bg-accent/10 px-3 py-1 rounded-md">Question 1 / 30</span>
// //         </div>

// //         <motion.div className="glass rounded-2xl p-8 gradient-border">
// //           <h3 className="text-xl md:text-2xl text-foreground font-medium mb-8">
// //             {MOCK_QUESTION.text}
// //           </h3>

// //           <div className="space-y-3 mb-8">
// //             {MOCK_QUESTION.options.map((opt, i) => (
// //               <button
// //                 key={i}
// //                 onClick={() => setSelected(i)}
// //                 className={`w-full text-left px-6 py-4 rounded-xl border transition-all ${
// //                   selected === i 
// //                     ? "border-primary bg-primary/10 text-primary glow-purple" 
// //                     : "border-border/50 bg-secondary/50 text-foreground hover:bg-secondary"
// //                 }`}
// //               >
// //                 {opt}
// //               </button>
// //             ))}
// //           </div>

// //           <button
// //             onClick={() => setIsSubmitted(true)}
// //             disabled={selected === null}
// //             className="w-full md:w-auto ml-auto flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-primary text-primary-foreground font-semibold disabled:opacity-50 transition-colors"
// //           >
// //             Submit Answer <ChevronRight className="w-4 h-4" />
// //           </button>
// //         </motion.div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default MockTest;


// import { useState } from "react";
// import { motion } from "framer-motion";
// import { ChevronRight, Target } from "lucide-react";

// // Mocking just 1 question for the UI demo instead of all 30
// const MOCK_QUESTION = {
//   id: 1,
//   text: "What is the worst-case time complexity of finding an element in a Binary Search Tree?",
//   options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
// };

// const MockTest = ({ onComplete }: { onComplete: () => void }) => {
//   const [selected, setSelected] = useState<number | null>(null);
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   if (isSubmitted) {
//     return (
//       <section className="min-h-screen flex items-center justify-center py-24 px-4">
//         <motion.div 
//           className="max-w-2xl w-full glass rounded-2xl p-8 text-center gradient-border ambient-light"
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{ opacity: 1, scale: 1 }}
//         >
//           <Target className="w-16 h-16 mx-auto text-accent mb-4" />
//           <h2 className="text-3xl font-display font-bold text-foreground mb-2">Analysis Complete</h2>
//           <p className="text-muted-foreground mb-8">Score: 18/30. We've identified your weak areas: Trees, Graphs, and Dynamic Programming.</p>
          
//           <button 
//             onClick={onComplete}
//             className="px-8 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
//           >
//             Generate My Custom Plan
//           </button>
//         </motion.div>
//       </section>
//     );
//   }

//   return (
//     <section className="min-h-screen flex items-center justify-center py-24 px-4">
//       <div className="max-w-3xl w-full">
//         <div className="flex justify-between items-center mb-8">
//           <h2 className="text-xl font-semibold text-muted-foreground">Diagnostic Mock Test</h2>
//           <span className="text-accent font-mono bg-accent/10 px-3 py-1 rounded-md border border-accent/20">Question 1 / 30</span>
//         </div>

//         <motion.div className="glass rounded-2xl p-8 gradient-border ambient-light">
//           <h3 className="text-xl md:text-2xl text-foreground font-medium mb-8">
//             {MOCK_QUESTION.text}
//           </h3>

//           <div className="space-y-3 mb-8">
//             {MOCK_QUESTION.options.map((opt, i) => (
//               <button
//                 key={i}
//                 onClick={() => setSelected(i)}
//                 className={`w-full text-left px-6 py-4 rounded-xl border transition-all ${
//                   selected === i 
//                     ? "border-primary bg-primary/10 text-primary glow-purple" 
//                     : "border-border/50 bg-secondary/50 text-foreground hover:bg-secondary"
//                 }`}
//               >
//                 {opt}
//               </button>
//             ))}
//           </div>

//           <button
//             onClick={() => setIsSubmitted(true)}
//             disabled={selected === null}
//             className="w-full md:w-auto ml-auto flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-primary text-primary-foreground font-semibold disabled:opacity-50 transition-colors"
//           >
//             Submit Answer <ChevronRight className="w-4 h-4" />
//           </button>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default MockTest;



import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight, Target, Loader2 } from "lucide-react";
import { Question, generateStudyPlan } from "@/lib/ai";

type MockTestProps = {
  questions: Question[];
  onPlanGenerated: (plan: any[]) => void;
};

const MockTest = ({ questions, onPlanGenerated }: MockTestProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [answers, setAnswers] = useState<{questionId: number, isCorrect: boolean, topic: string}[]>([]);
  const [isGeneratingPlan, setIsGeneratingPlan] = useState(false);

  // If questions haven't loaded yet (safety check)
  if (!questions || questions.length === 0) return null;

  const currentQ = questions[currentIndex];
  const isFinished = currentIndex >= questions.length;

  const handleNext = () => {
    if (selectedOption === null) return;
    
    // Save answer
    const isCorrect = selectedOption === currentQ.correctAnswerIndex;
    setAnswers([...answers, { questionId: currentQ.id, isCorrect, topic: currentQ.topic }]);
    
    setSelectedOption(null);
    setCurrentIndex(currentIndex + 1);
  };

  const handleFinish = async () => {
    setIsGeneratingPlan(true);
    
    // 1. Calculate Score
    const score = answers.filter(a => a.isCorrect).length;
    
    // 2. Find Weak Topics (topics where they got the question wrong)
    const weakTopics = answers.filter(a => !a.isCorrect).map(a => a.topic);
    // Remove duplicates
    const uniqueWeakTopics = [...new Set(weakTopics)];
    
    // 3. Generate Plan
    try {
      // If they got a perfect score, pass a default topic, otherwise pass weak topics
      const topicsToTarget = uniqueWeakTopics.length > 0 ? uniqueWeakTopics : ["Advanced " + questions[0].topic];
      const plan = await generateStudyPlan(topicsToTarget);
      onPlanGenerated(plan);
    } catch (error) {
      console.error("Failed to generate plan:", error);
      setIsGeneratingPlan(false);
    }
  };

  if (isFinished) {
    const score = answers.filter(a => a.isCorrect).length;
    
    return (
      <section className="min-h-screen flex items-center justify-center py-24 px-4">
        <motion.div 
          className="max-w-2xl w-full glass rounded-2xl p-8 text-center gradient-border"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <Target className="w-16 h-16 mx-auto text-accent mb-4" />
          <h2 className="text-3xl font-display font-bold text-foreground mb-2">Analysis Complete</h2>
          <p className="text-muted-foreground mb-8">
            Score: {score}/{questions.length}. We are building a custom 7-day schedule based on your missed questions.
          </p>
          
          <button 
            onClick={handleFinish}
            disabled={isGeneratingPlan}
            className="w-full py-4 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors flex justify-center items-center gap-2"
          >
            {isGeneratingPlan ? <><Loader2 className="w-5 h-5 animate-spin" /> Building Master Plan...</> : "Generate My Custom Plan"}
          </button>
        </motion.div>
      </section>
    );
  }

  return (
    <section className="min-h-screen flex items-center justify-center py-24 px-4">
      <div className="max-w-3xl w-full">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-xl font-semibold text-muted-foreground">Diagnostic Mock Test</h2>
          <span className="text-accent font-mono bg-accent/10 px-3 py-1 rounded-md border border-accent/20">
            Question {currentIndex + 1} / {questions.length}
          </span>
        </div>

        <motion.div 
          key={currentIndex} // Forces animation on question change
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="glass rounded-2xl p-8 gradient-border"
        >
          <span className="text-sm text-primary mb-2 block font-medium">{currentQ.topic}</span>
          <h3 className="text-xl md:text-2xl text-foreground font-medium mb-8">
            {currentQ.text}
          </h3>

          <div className="space-y-3 mb-8">
            {currentQ.options.map((opt, i) => (
              <button
                key={i}
                onClick={() => setSelectedOption(i)}
                className={`w-full text-left px-6 py-4 rounded-xl border transition-all ${
                  selectedOption === i 
                    ? "border-primary bg-primary/10 text-primary glow-purple" 
                    : "border-border/50 bg-secondary/50 text-foreground hover:bg-secondary"
                }`}
              >
                {opt}
              </button>
            ))}
          </div>

          <button
            onClick={handleNext}
            disabled={selectedOption === null}
            className="w-full md:w-auto ml-auto flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-primary text-primary-foreground font-semibold disabled:opacity-50 transition-colors"
          >
            {currentIndex === questions.length - 1 ? "Finish Test" : "Next Question"} <ChevronRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default MockTest;