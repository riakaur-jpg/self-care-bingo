import { Heart, Leaf, Sun } from "lucide-react";

export function HeroSection() {
  return (
    <section className="text-center py-12 px-4">
      {/* Decorative icons */}
      <div className="flex justify-center gap-4 mb-6">
        <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
          <Leaf className="w-6 h-6 text-primary" />
        </div>
        <div className="w-14 h-14 rounded-full bg-warm flex items-center justify-center">
          <Heart className="w-7 h-7 text-primary" />
        </div>
        <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
          <Sun className="w-6 h-6 text-primary" />
        </div>
      </div>

      {/* Main title */}
      <h1 className="text-4xl sm:text-5xl font-display font-bold text-foreground mb-4 leading-tight">
        Self-Care for a<br />
        <span className="text-primary">Healthier Mind</span>
      </h1>

      {/* Description */}
      <p className="max-w-2xl mx-auto text-muted-foreground leading-relaxed mb-8">
        Self-care is essential for a person living with depression. Depression often drains 
        energy and motivation, making basic needs easy to ignore. Practicing self-care helps 
        maintain physical and emotional balance and reminds you that you deserve care and attention.
      </p>

      {/* Benefits cards */}
      <div className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto mb-8">
        <div className="p-4 bg-card rounded-2xl border border-border">
          <div className="w-10 h-10 rounded-full bg-secondary mx-auto mb-3 flex items-center justify-center">
            <span className="text-xl">🧘</span>
          </div>
          <h3 className="font-display font-semibold text-foreground mb-1">Reduces Stress</h3>
          <p className="text-sm text-muted-foreground">Lowers cortisol levels and calms your mind</p>
        </div>
        <div className="p-4 bg-card rounded-2xl border border-border">
          <div className="w-10 h-10 rounded-full bg-warm mx-auto mb-3 flex items-center justify-center">
            <span className="text-xl">💪</span>
          </div>
          <h3 className="font-display font-semibold text-foreground mb-1">Builds Strength</h3>
          <p className="text-sm text-muted-foreground">Supports healing and mental resilience</p>
        </div>
        <div className="p-4 bg-card rounded-2xl border border-border">
          <div className="w-10 h-10 rounded-full bg-secondary mx-auto mb-3 flex items-center justify-center">
            <span className="text-xl">✨</span>
          </div>
          <h3 className="font-display font-semibold text-foreground mb-1">Improves Well-being</h3>
          <p className="text-sm text-muted-foreground">Supports healthy brain chemicals like serotonin</p>
        </div>
      </div>

      {/* Intro to bingo */}
      <div className="max-w-2xl mx-auto p-6 bg-warm/50 rounded-2xl border border-border">
        <h2 className="font-display font-semibold text-lg text-foreground mb-2">
          🎯 How to Play
        </h2>
        <p className="text-muted-foreground text-sm">
          Our Self-Care Bingo card includes 25 activities designed to nurture your mind, body, and soul. 
          Complete a row, column, diagonal, or even the entire board! Each square is a small yet powerful 
          step toward better mental health.
        </p>
      </div>
    </section>
  );
}
