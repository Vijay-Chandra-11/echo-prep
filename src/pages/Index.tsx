// // // // import HeroSection from "@/components/HeroSection";
// // // // import SetupPanel from "@/components/SetupPanel";
// // // // import Dashboard from "@/components/Dashboard";
// // // // import FocusRoom from "@/components/FocusRoom";

// // // // const Index = () => {
// // // //   return (
// // // //     <div className="min-h-screen bg-background bg-mesh">
// // // //       <HeroSection />
// // // //       <SetupPanel />
// // // //       <Dashboard />
// // // //       <FocusRoom />
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Index;




// // // import { useState } from "react";
// // // import HeroSection from "@/components/HeroSection";
// // // import SetupPanel from "@/components/SetupPanel";
// // // import MockTest from "@/components/MockTest";
// // // import Dashboard from "@/components/Dashboard";
// // // import FocusRoom from "@/components/FocusRoom";

// // // export type AppStep = "hero" | "setup" | "test" | "review" | "dashboard" | "focus";

// // // const Index = () => {
// // //   const [currentStep, setCurrentStep] = useState<AppStep>("hero");

// // //   return (
// // //     <div className="min-h-screen bg-background bg-mesh">
// // //       {currentStep === "hero" && (
// // //         <HeroSection onStart={() => setCurrentStep("setup")} />
// // //       )}
// // //       {currentStep === "setup" && (
// // //         <SetupPanel onGenerate={() => setCurrentStep("test")} />
// // //       )}
// // //       {currentStep === "test" && (
// // //         <MockTest onComplete={() => setCurrentStep("dashboard")} />
// // //       )}
// // //       {currentStep === "dashboard" && (
// // //         <Dashboard onStartStudy={() => setCurrentStep("focus")} />
// // //       )}
// // //       {currentStep === "focus" && <FocusRoom />}
// // //     </div>
// // //   );
// // // };

// // // export default Index;


// // import { useState } from "react";
// // import HeroSection from "@/components/HeroSection";
// // import SetupPanel from "@/components/SetupPanel";
// // import MockTest from "@/components/MockTest";
// // import Dashboard from "@/components/Dashboard";
// // import FocusRoom from "@/components/FocusRoom";
// // import { Question } from "@/lib/ai";

// // export type AppStep = "hero" | "setup" | "test" | "review" | "dashboard" | "focus";

// // const Index = () => {
// //   const [currentStep, setCurrentStep] = useState<AppStep>("hero");
// //   const [questions, setQuestions] = useState<Question[]>([]);
// //   const [studyPlan, setStudyPlan] = useState<any[]>([]);

// //   return (
// //     <div className="min-h-screen bg-background bg-mesh">
// //       {currentStep === "hero" && (
// //         <HeroSection onStart={() => setCurrentStep("setup")} />
// //       )}
// //       {currentStep === "setup" && (
// //         <SetupPanel 
// //           onGenerate={(generatedQuestions) => {
// //             setQuestions(generatedQuestions);
// //             setCurrentStep("test");
// //           }} 
// //         />
// //       )}
// //       {currentStep === "test" && (
// //         <MockTest 
// //           questions={questions}
// //           onPlanGenerated={(plan) => {
// //             setStudyPlan(plan);
// //             setCurrentStep("dashboard");
// //           }} 
// //         />
// //       )}
// //       {currentStep === "dashboard" && (
// //         <Dashboard plan={studyPlan} onStartStudy={() => setCurrentStep("focus")} />
// //       )}
// //       {/* {currentStep === "focus" && <FocusRoom />} */}
// //     </div>
// //   );
// // };

// // export default Index;



// import { useState } from "react";
// import SetupPanel from "@/components/SetupPanel";
// import MockTest from "@/components/MockTest";
// import Dashboard from "@/components/Dashboard";
// import { StudyDay } from "@/lib/ai";

// function Index() {
//   // Removed "focus" from the state!
//   const [currentStep, setCurrentStep] = useState<"setup" | "test" | "dashboard">("setup");
//   const [studyPlan, setStudyPlan] = useState<StudyDay[]>([]);

//   const handleTestComplete = (plan: StudyDay[]) => {
//     setStudyPlan(plan);
//     setCurrentStep("dashboard");
//   };

//   return (
//     <main className="min-h-screen bg-[#050505] text-foreground font-sans">
      
//       {currentStep === "setup" && (
//         <SetupPanel onStartTest={() => setCurrentStep("test")} />
//       )}
      
//       {currentStep === "test" && (
//         <MockTest onComplete={handleTestComplete} />
//       )}
      
//       {/* Just pass the plan, no onStartStudy needed! */}
//       {currentStep === "dashboard" && (
//         <Dashboard plan={studyPlan} />
//       )}

//     </main>
//   );
// }

// export default Index;



import { useState } from "react";
import SetupPanel from "@/components/SetupPanel";
import MockTest from "@/components/MockTest";
import Dashboard from "@/components/Dashboard";
import { StudyDay, Question } from "@/lib/ai"; // Make sure Question is imported!

function Index() {
  const [currentStep, setCurrentStep] = useState<"setup" | "test" | "dashboard">("setup");
  
  // States to hold the data as it moves through the app
  const [testQuestions, setTestQuestions] = useState<Question[]>([]);
  const [studyPlan, setStudyPlan] = useState<StudyDay[]>([]);

  // 1. Triggered when SetupPanel finishes generating the questions from Python
  const handleTestGenerated = (generatedQuestions: Question[]) => {
    setTestQuestions(generatedQuestions);
    setCurrentStep("test");
  };

  // 2. Triggered when MockTest finishes the timer and generates the 7-day plan from Python
  const handlePlanGenerated = (plan: StudyDay[]) => {
    setStudyPlan(plan);
    setCurrentStep("dashboard");
  };

  return (
    <main className="min-h-screen bg-[#050505] text-foreground font-sans selection:bg-primary/30">
      
      {currentStep === "setup" && (
        <SetupPanel onGenerate={handleTestGenerated} />
      )}
      
      {currentStep === "test" && (
        <MockTest 
          questions={testQuestions} 
          onPlanGenerated={handlePlanGenerated} 
        />
      )}
      
      {currentStep === "dashboard" && (
        <Dashboard plan={studyPlan} />
      )}

    </main>
  );
}

export default Index;