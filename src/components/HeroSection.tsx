import { Button } from "@/components/ui/button";
import { ArrowRight, Upload, Brain } from "lucide-react";
import heroImage from "@/assets/hero-arecanut.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-background/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-8 text-center">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="text-foreground">Heterogeneous Deep Learning</span>
              <br />
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                Framework
              </span>
            </h1>
            <p className="mx-auto max-w-[700px] text-lg text-muted-foreground md:text-xl">
              Advanced AI-powered early identification and categorization of arecanut tree diseases. 
              Leveraging cutting-edge deep learning for precision agriculture.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="hero" size="xl">
              <Upload className="w-5 h-5" />
              Start Analysis
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="outline" size="xl">
              <Brain className="w-5 h-5" />
              Learn More
            </Button>
          </div>

          <div className="flex items-center gap-8 pt-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">99.2%</div>
              <div className="text-sm text-muted-foreground">Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">15+</div>
              <div className="text-sm text-muted-foreground">Disease Types</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">Real-time</div>
              <div className="text-sm text-muted-foreground">Analysis</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;