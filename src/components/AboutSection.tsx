import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Target, Zap, Shield } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: Brain,
      title: "Deep Learning Architecture",
      description: "Advanced heterogeneous neural networks trained on thousands of arecanut disease samples for superior accuracy."
    },
    {
      icon: Target,
      title: "Early Detection",
      description: "Identify diseases in their initial stages, enabling timely intervention and preventing widespread crop damage."
    },
    {
      icon: Zap,
      title: "Real-time Analysis",
      description: "Get instant results with our optimized inference pipeline, processing images in under 3 seconds."
    },
    {
      icon: Shield,
      title: "Precision Agriculture",
      description: "Reduce pesticide usage and optimize treatment plans with targeted disease-specific recommendations."
    }
  ];

  return (
    <section id="about" className="py-16 bg-secondary/30">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            About the Framework
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Our heterogeneous deep learning framework combines multiple state-of-the-art neural network 
            architectures to provide unparalleled accuracy in arecanut tree disease identification and categorization.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="text-center shadow-soft hover:shadow-medium transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-left">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          <Card className="bg-gradient-card shadow-medium">
            <CardHeader>
              <CardTitle>Technical Specifications</CardTitle>
              <CardDescription>
                Built with cutting-edge machine learning technologies
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-3">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-2">15+</div>
                  <div className="text-sm text-muted-foreground">Disease Categories</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-2">50,000+</div>
                  <div className="text-sm text-muted-foreground">Training Images</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-2">99.2%</div>
                  <div className="text-sm text-muted-foreground">Classification Accuracy</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;