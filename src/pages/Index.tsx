// // import HeroSection from "@/components/HeroSection";
// // import SetupPanel from "@/components/SetupPanel";
// // import Dashboard from "@/components/Dashboard";
// // import FocusRoom from "@/components/FocusRoom";

// // const Index = () => {
// //   return (
// //     <div className="min-h-screen bg-background bg-mesh">
// //       <HeroSection />
// //       <SetupPanel />
// //       <Dashboard />
// //       <FocusRoom />
// //     </div>
// //   );
// // };

// // export default Index;




// import { useState } from "react";
// import HeroSection from "@/components/HeroSection";
// import SetupPanel from "@/components/SetupPanel";
// import MockTest from "@/components/MockTest";
// import Dashboard from "@/components/Dashboard";
// import FocusRoom from "@/components/FocusRoom";

// export type AppStep = "hero" | "setup" | "test" | "review" | "dashboard" | "focus";

// const Index = () => {
//   const [currentStep, setCurrentStep] = useState<AppStep>("hero");

//   return (
//     <div className="min-h-screen bg-background bg-mesh">
//       {currentStep === "hero" && (
//         <HeroSection onStart={() => setCurrentStep("setup")} />
//       )}
//       {currentStep === "setup" && (
//         <SetupPanel onGenerate={() => setCurrentStep("test")} />
//       )}
//       {currentStep === "test" && (
//         <MockTest onComplete={() => setCurrentStep("dashboard")} />
//       )}
//       {currentStep === "dashboard" && (
//         <Dashboard onStartStudy={() => setCurrentStep("focus")} />
//       )}
//       {currentStep === "focus" && <FocusRoom />}
//     </div>
//   );
// };

// export default Index;


import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import SetupPanel from "@/components/SetupPanel";
import MockTest from "@/components/MockTest";
import Dashboard from "@/components/Dashboard";
import FocusRoom from "@/components/FocusRoom";
import { Question } from "@/lib/ai";

export type AppStep = "hero" | "setup" | "test" | "review" | "dashboard" | "focus";

const Index = () => {
  const [currentStep, setCurrentStep] = useState<AppStep>("hero");
  const [questions, setQuestions] = useState<Question[]>([]);
  const [studyPlan, setStudyPlan] = useState<any[]>([]);

  return (
    <div className="min-h-screen bg-background bg-mesh">
      {currentStep === "hero" && (
        <HeroSection onStart={() => setCurrentStep("setup")} />
      )}
      {currentStep === "setup" && (
        <SetupPanel 
          onGenerate={(generatedQuestions) => {
            setQuestions(generatedQuestions);
            setCurrentStep("test");
          }} 
        />
      )}
      {currentStep === "test" && (
        <MockTest 
          questions={questions}
          onPlanGenerated={(plan) => {
            setStudyPlan(plan);
            setCurrentStep("dashboard");
          }} 
        />
      )}
      {currentStep === "dashboard" && (
        <Dashboard plan={studyPlan} onStartStudy={() => setCurrentStep("focus")} />
      )}
      {/* {currentStep === "focus" && <FocusRoom />} */}
    </div>
  );
};

export default Index;