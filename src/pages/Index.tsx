import HeroSection from "@/components/HeroSection";
import SetupPanel from "@/components/SetupPanel";
import Dashboard from "@/components/Dashboard";
import FocusRoom from "@/components/FocusRoom";

const Index = () => {
  return (
    <div className="min-h-screen bg-background bg-mesh">
      <HeroSection />
      <SetupPanel />
      <Dashboard />
      <FocusRoom />
    </div>
  );
};

export default Index;
