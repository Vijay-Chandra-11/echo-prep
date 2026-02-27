// import { Toaster } from "@/components/ui/toaster";
// import { Toaster as Sonner } from "@/components/ui/sonner";
// import { TooltipProvider } from "@/components/ui/tooltip";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Index from "./pages/Index";
// import NotFound from "./pages/NotFound";

// const queryClient = new QueryClient();

// const App = () => (
//   <QueryClientProvider client={queryClient}>
//     <TooltipProvider>
//       <Toaster />
//       <Sonner />
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Index />} />
//           {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
//           <Route path="*" element={<NotFound />} />
//         </Routes>
//       </BrowserRouter>
//     </TooltipProvider>
//   </QueryClientProvider>
// );

// export default App;






import { useState } from "react";
import SetupPanel from "@/components/SetupPanel";
import MockTest from "@/components/MockTest";
import Dashboard from "@/components/Dashboard";
import { StudyDay, Question } from "@/lib/ai"; // Added Question import

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