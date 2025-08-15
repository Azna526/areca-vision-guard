import { Button } from "@/components/ui/button";
import { Leaf, Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Leaf className="h-8 w-8 text-primary" />
          <div className="flex flex-col">
            <h1 className="text-lg font-bold text-foreground">AreCare AI</h1>
            <p className="text-xs text-muted-foreground">Disease Detection Framework</p>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <a href="#about" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            About
          </a>
          <a href="#analysis" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            Analysis
          </a>
          <a href="#results" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            Results
          </a>
        </nav>

        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
        </Button>
      </div>
    </header>
  );
};

export default Header;