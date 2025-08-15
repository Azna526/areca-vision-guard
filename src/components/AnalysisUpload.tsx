import { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Upload, Image, FileCheck, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const AnalysisUpload = () => {
  const [isDragOver, setIsDragOver] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const { toast } = useToast();

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    
    const files = Array.from(e.dataTransfer.files);
    const imageFile = files.find(file => file.type.startsWith('image/'));
    
    if (imageFile) {
      setUploadedFile(imageFile);
      toast({
        title: "Image uploaded successfully",
        description: `${imageFile.name} is ready for analysis`,
      });
    } else {
      toast({
        title: "Invalid file type",
        description: "Please upload an image file",
        variant: "destructive",
      });
    }
  }, [toast]);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadedFile(file);
      toast({
        title: "Image uploaded successfully",
        description: `${file.name} is ready for analysis`,
      });
    }
  };

  const startAnalysis = () => {
    if (!uploadedFile) return;
    
    setIsAnalyzing(true);
    // Simulate analysis time
    setTimeout(() => {
      setIsAnalyzing(false);
      toast({
        title: "Analysis complete",
        description: "Disease detection results are ready",
      });
    }, 3000);
  };

  return (
    <section id="analysis" className="py-16 bg-accent/30">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Disease Analysis
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Upload an image of arecanut tree leaves for AI-powered disease detection
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="border-2 border-dashed border-primary/20 bg-gradient-card shadow-medium">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Image className="w-5 h-5 text-primary" />
                Upload Tree Image
              </CardTitle>
              <CardDescription>
                Drag and drop or click to select an image of arecanut tree leaves
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div
                className={`relative border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                  isDragOver 
                    ? 'border-primary bg-primary/5' 
                    : 'border-border hover:border-primary/50'
                }`}
                onDragOver={(e) => {
                  e.preventDefault();
                  setIsDragOver(true);
                }}
                onDragLeave={() => setIsDragOver(false)}
                onDrop={handleDrop}
              >
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileSelect}
                  className="absolute inset-0 opacity-0 cursor-pointer"
                />
                
                {uploadedFile ? (
                  <div className="space-y-4">
                    <FileCheck className="w-12 h-12 text-primary mx-auto" />
                    <div>
                      <p className="font-medium text-foreground">{uploadedFile.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {(uploadedFile.size / 1024 / 1024).toFixed(2)} MB
                      </p>
                    </div>
                    <Button 
                      variant="analysis" 
                      size="lg" 
                      onClick={startAnalysis}
                      disabled={isAnalyzing}
                    >
                      {isAnalyzing ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Analyzing...
                        </>
                      ) : (
                        <>
                          <Upload className="w-5 h-5" />
                          Start Analysis
                        </>
                      )}
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <Upload className="w-12 h-12 text-muted-foreground mx-auto" />
                    <div>
                      <p className="text-lg font-medium text-foreground">
                        Drop your image here
                      </p>
                      <p className="text-sm text-muted-foreground">
                        or click to browse files
                      </p>
                    </div>
                    <Button variant="outline">
                      Select Image
                    </Button>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AnalysisUpload;