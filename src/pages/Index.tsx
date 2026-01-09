import { HeroSection } from "@/components/HeroSection";
import { BingoCard } from "@/components/BingoCard";
import { Heart } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Decorative background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <main className="container max-w-4xl mx-auto px-4 py-8">
          <HeroSection />
          
          <section className="py-8">
            <BingoCard />
          </section>

          {/* Footer message */}
          <footer className="text-center py-8 border-t border-border mt-8">
            <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
              Made with <Heart className="w-4 h-4 text-primary fill-primary" /> for your well-being
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              Remember: Self-care is not selfish. You deserve to feel good.
            </p>
          </footer>
        </main>
      </div>
    </div>
  );
};

export default Index;
