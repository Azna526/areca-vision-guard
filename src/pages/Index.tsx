import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import AnalysisUpload from "@/components/AnalysisUpload";
import ResultsDashboard from "@/components/ResultsDashboard";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <AnalysisUpload />
        <ResultsDashboard />
      </main>
    </div>
  );
};

export default Index;
