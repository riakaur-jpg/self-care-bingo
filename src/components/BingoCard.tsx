import { useState } from "react";
import { Check, Sparkles, RotateCcw } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const BINGO_ACTIVITIES = [
  "Take a 10-minute walk",
  "Drink 8 glasses of water",
  "Write 3 things you're grateful for",
  "Take a relaxing bath or shower",
  "Listen to your favorite music",
  "Get 7-8 hours of sleep",
  "Eat a healthy meal",
  "Call or text a friend",
  "Practice deep breathing",
  "Spend time in nature",
  "Read for 15 minutes",
  "Do gentle stretching",
  "FREE SPACE ✨",
  "Limit social media",
  "Try meditation",
  "Say positive affirmations",
  "Declutter one space",
  "Take a screen break",
  "Do something creative",
  "Practice saying no",
  "Laugh out loud",
  "Give yourself a compliment",
  "Rest without guilt",
  "Set one small goal",
  "Celebrate a win today",
];

export function BingoCard() {
  const [completed, setCompleted] = useState<Set<number>>(new Set([12])); // Free space

  const toggleCell = (index: number) => {
    if (index === 12) return; // Free space always checked
    const newCompleted = new Set(completed);
    if (newCompleted.has(index)) {
      newCompleted.delete(index);
    } else {
      newCompleted.add(index);
    }
    setCompleted(newCompleted);
  };

  const resetCard = () => {
    setCompleted(new Set([12]));
  };

  const progress = completed.size;
  const hasBingo = checkBingo(completed);

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Header */}
      <div className="text-center mb-6">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Sparkles className="w-6 h-6 text-primary" />
          <span className="text-sm font-display font-semibold text-primary uppercase tracking-widest">
            Self-Care Bingo
          </span>
          <Sparkles className="w-6 h-6 text-primary" />
        </div>
        <p className="text-muted-foreground text-sm">
          Complete a row, column, or diagonal for BINGO!
        </p>
      </div>

      {/* Progress */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-foreground">Progress</span>
          <span className="text-sm font-semibold text-primary">{progress}/25</span>
        </div>
        <div className="h-3 bg-secondary rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-primary rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${(progress / 25) * 100}%` }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
        </div>
      </div>

      {/* Bingo celebration */}
      <AnimatePresence>
        {hasBingo && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="mb-6 p-4 bg-success/20 border border-success/30 rounded-xl text-center"
          >
            <motion.p 
              className="text-success font-display font-bold text-lg"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              🎉 BINGO! You did it! 🎉
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bingo Grid */}
      <div className="grid grid-cols-5 gap-2 sm:gap-3 mb-6">
        {BINGO_ACTIVITIES.map((activity, index) => {
          const isCompleted = completed.has(index);
          const isFreeSpace = index === 12;
          
          return (
            <motion.button
              key={index}
              onClick={() => toggleCell(index)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={cn(
                "aspect-square p-1.5 sm:p-2 rounded-xl border-2 transition-colors duration-300",
                "flex flex-col items-center justify-center text-center",
                "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
                isCompleted
                  ? "bg-primary border-primary text-primary-foreground shadow-lg"
                  : "bg-card border-border hover:border-primary/50 hover:shadow-md",
                isFreeSpace && !isCompleted && "bg-warm border-warm"
              )}
            >
              <AnimatePresence mode="wait">
                {isCompleted ? (
                  <motion.div
                    key="checked"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    exit={{ scale: 0, rotate: 180 }}
                    className="flex flex-col items-center"
                  >
                    <Check className="w-5 h-5 sm:w-6 sm:h-6 mb-0.5" />
                    <span className="text-[8px] sm:text-[10px] font-medium leading-tight line-clamp-2">
                      {activity}
                    </span>
                  </motion.div>
                ) : (
                  <motion.span 
                    key="unchecked"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-[9px] sm:text-xs font-medium leading-tight"
                  >
                    {activity}
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          );
        })}
      </div>

      {/* Reset button */}
      <div className="text-center">
        <Button
          onClick={resetCard}
          variant="outline"
          className="gap-2 font-display"
        >
          <RotateCcw className="w-4 h-4" />
          Reset Card
        </Button>
      </div>
    </div>
  );
}

function checkBingo(completed: Set<number>): boolean {
  // Rows
  for (let row = 0; row < 5; row++) {
    let rowComplete = true;
    for (let col = 0; col < 5; col++) {
      if (!completed.has(row * 5 + col)) rowComplete = false;
    }
    if (rowComplete) return true;
  }

  // Columns
  for (let col = 0; col < 5; col++) {
    let colComplete = true;
    for (let row = 0; row < 5; row++) {
      if (!completed.has(row * 5 + col)) colComplete = false;
    }
    if (colComplete) return true;
  }

  // Diagonals
  const diagonal1 = [0, 6, 12, 18, 24];
  const diagonal2 = [4, 8, 12, 16, 20];
  
  if (diagonal1.every(i => completed.has(i))) return true;
  if (diagonal2.every(i => completed.has(i))) return true;

  return false;
}
