import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertTriangle, CheckCircle, Eye, TrendingUp } from "lucide-react";
import diseaseSample from "@/assets/disease-sample.jpg";

const ResultsDashboard = () => {
  // Mock analysis results
  const analysisResults = {
    diseaseDetected: true,
    diseaseName: "Bud Rot (Phytophthora palmivora)",
    confidence: 94.7,
    severity: "Moderate",
    recommendations: [
      "Apply copper-based fungicide immediately",
      "Improve drainage around affected trees",
      "Remove and destroy infected plant material",
      "Monitor adjacent trees for early symptoms"
    ]
  };

  return (
    <section id="results" className="py-16">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Analysis Results
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            AI-powered disease detection and treatment recommendations
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid gap-6 lg:grid-cols-3">
          {/* Image Analysis */}
          <Card className="lg:col-span-1 shadow-medium">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Eye className="w-5 h-5 text-primary" />
                Image Analysis
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <img
                  src={diseaseSample}
                  alt="Analyzed leaf sample"
                  className="w-full h-48 object-cover rounded-lg border"
                />
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Confidence</span>
                    <span className="text-sm font-semibold">{analysisResults.confidence}%</span>
                  </div>
                  <Progress value={analysisResults.confidence} className="h-2" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Detection Results */}
          <Card className="lg:col-span-2 shadow-medium">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                Detection Results
              </CardTitle>
              <CardDescription>
                Comprehensive analysis of the uploaded image
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Disease Status Alert */}
              {analysisResults.diseaseDetected ? (
                <Alert className="border-warning/50 bg-warning/10">
                  <AlertTriangle className="h-4 w-4 text-warning" />
                  <AlertDescription className="text-warning-foreground">
                    Disease detected: Immediate attention required
                  </AlertDescription>
                </Alert>
              ) : (
                <Alert className="border-primary/50 bg-primary/10">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <AlertDescription>
                    No diseases detected: Tree appears healthy
                  </AlertDescription>
                </Alert>
              )}

              {/* Disease Information */}
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted-foreground">Disease Type</label>
                  <p className="text-lg font-semibold">{analysisResults.diseaseName}</p>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted-foreground">Severity Level</label>
                  <Badge variant={analysisResults.severity === "High" ? "destructive" : "secondary"}>
                    {analysisResults.severity}
                  </Badge>
                </div>
              </div>

              {/* Recommendations */}
              <div className="space-y-3">
                <h4 className="font-semibold text-foreground">Treatment Recommendations</h4>
                <ul className="space-y-2">
                  {analysisResults.recommendations.map((recommendation, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{recommendation}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ResultsDashboard;