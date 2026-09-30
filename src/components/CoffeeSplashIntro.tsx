import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Coffee, ChevronRight } from 'lucide-react';

interface CoffeeSplashIntroProps {
  onComplete: () => void;
}

export const CoffeeSplashIntro: React.FC<CoffeeSplashIntroProps> = ({ onComplete }) => {
  const [stage, setStage] = useState<'steam' | 'tilt' | 'splash'>('steam');

  useEffect(() => {
    // Stage 1: Steam rises & cup breathes (0 - 600ms)
    const t1 = setTimeout(() => {
      setStage('tilt');
    }, 600);

    // Stage 2: Cup tilts and liquid splashes outward (600 - 1800ms)
    const t2 = setTimeout(() => {
      setStage('splash');
    }, 1200);

    // Stage 3: Smooth exit to reveal portfolio (2200ms)
    const t3 = setTimeout(() => {
      onComplete();
    }, 2400);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      onClick={onComplete}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#070A0F] text-white overflow-hidden cursor-pointer select-none"
    >
      {/* Dynamic Expanding Liquid Splash Wave - Pure Visual Bloom */}
      <AnimatePresence>
        {stage === 'splash' && (
          <motion.div
            initial={{ scale: 0.1, opacity: 0 }}
            animate={{ scale: [0.2, 1.4, 2.4], opacity: [0.2, 0.9, 1] }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="absolute w-[120vw] h-[120vh] rounded-full pointer-events-none -z-10 bg-[radial-gradient(circle_at_center,_rgba(245,158,11,0.28)_0%,_rgba(180,83,9,0.18)_30%,_rgba(30,41,59,0.8)_65%,_transparent_100%)] blur-3xl"
          />
        )}
      </AnimatePresence>

      {/* Subtle Concentric Design Circles */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div 
          animate={{ scale: [1, 1.05, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="w-72 h-72 sm:w-96 sm:h-96 rounded-full border border-amber-500/20"
        />
        <motion.div 
          animate={{ scale: [1, 1.08, 1], opacity: [0.08, 0.16, 0.08] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-[420px] h-[420px] sm:w-[540px] sm:h-[540px] rounded-full border border-amber-500/10"
        />
      </div>

      {/* Main Center Stage Graphic (Pure Animated Visual, Zero Words) */}
      <div className="relative z-10 flex flex-col items-center justify-center">
        
        {/* Animated Steam Plumes */}
        <div className="relative h-10 w-16 mb-1">
          <motion.span
            animate={{ 
              y: [-2, -26],
              x: [-1, 2, -1],
              opacity: [0, 0.9, 0],
              scale: [0.8, 1.3]
            }}
            transition={{ 
              duration: 1.2, 
              repeat: Infinity,
              ease: "easeOut" 
            }}
            className="absolute left-4 top-0 text-amber-300 font-bold text-base pointer-events-none"
          >
            ~
          </motion.span>
          <motion.span
            animate={{ 
              y: [-2, -30],
              x: [1, -2, 1],
              opacity: [0, 0.8, 0],
              scale: [0.7, 1.2]
            }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity,
              delay: 0.3,
              ease: "easeOut" 
            }}
            className="absolute left-8 top-0 text-amber-400 font-bold text-lg pointer-events-none"
          >
            ~
          </motion.span>
        </div>

        {/* The Coffee Cup */}
        <div className="relative">
          <motion.div
            animate={
              stage === 'steam'
                ? { rotate: [0, -2, 2, 0], y: [0, -2, 0], scale: 1 }
                : stage === 'tilt'
                ? { rotate: 38, x: 12, y: -4, scale: 1.1 }
                : { rotate: 48, x: 20, y: 0, scale: 1.15 }
            }
            transition={{ 
              duration: stage === 'steam' ? 1.2 : 0.6, 
              ease: [0.34, 1.56, 0.64, 1] 
            }}
            className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-gradient-to-br from-amber-500 via-amber-600 to-amber-950 p-[1.5px] shadow-2xl shadow-amber-500/20 flex items-center justify-center relative"
          >
            <div className="w-full h-full rounded-[22px] bg-[#0C101A] flex items-center justify-center text-amber-400">
              <Coffee className="w-12 h-12 sm:w-14 sm:h-14 drop-shadow-[0_0_16px_rgba(245,158,11,0.6)]" />
            </div>

            {/* Droplet & Liquid Arc Burst (Animated Spilling Effect) */}
            {(stage === 'tilt' || stage === 'splash') && (
              <>
                {/* Primary Droplet */}
                <motion.div
                  initial={{ scale: 0, x: 0, y: 0, opacity: 1 }}
                  animate={{ 
                    scale: [0, 1.6, 3], 
                    x: [0, 50, 100], 
                    y: [0, 30, 80], 
                    opacity: [1, 0.9, 0] 
                  }}
                  transition={{ duration: 0.9, ease: "easeOut" }}
                  className="absolute right-0 top-1/2 w-6 h-6 rounded-full bg-gradient-to-br from-amber-300 via-amber-500 to-orange-600 blur-[1px] pointer-events-none"
                />

                {/* Secondary Splash Droplets */}
                <motion.div
                  initial={{ scale: 0, x: 0, y: 0, opacity: 1 }}
                  animate={{ 
                    scale: [0, 1.2, 2], 
                    x: [0, 35, 75], 
                    y: [0, -10, 20], 
                    opacity: [1, 0.8, 0] 
                  }}
                  transition={{ duration: 0.7, delay: 0.05, ease: "easeOut" }}
                  className="absolute right-2 top-1/3 w-3.5 h-3.5 rounded-full bg-amber-400 pointer-events-none"
                />
                
                <motion.div
                  initial={{ scale: 0, x: 0, y: 0, opacity: 1 }}
                  animate={{ 
                    scale: [0, 1, 1.8], 
                    x: [0, 60, 110], 
                    y: [0, 10, 50], 
                    opacity: [1, 0.7, 0] 
                  }}
                  transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                  className="absolute right-0 bottom-1/3 w-3 h-3 rounded-full bg-amber-300 pointer-events-none"
                />
              </>
            )}
          </motion.div>
        </div>

        {/* Minimal Animated Loading Line */}
        <div className="w-24 h-1 bg-slate-800/80 rounded-full overflow-hidden mt-8 border border-slate-700/40">
          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 2.3, ease: "easeInOut" }}
            className="h-full bg-gradient-to-r from-amber-400 to-orange-500 rounded-full"
          />
        </div>

      </div>

      {/* Discrete Icon-Only Skip in Corner */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onComplete();
        }}
        className="absolute bottom-8 right-8 p-2.5 rounded-full bg-slate-900/60 hover:bg-slate-800 border border-slate-700/60 text-slate-400 hover:text-white transition-all backdrop-blur"
        title="Enter"
        aria-label="Enter Portfolio"
      >
        <ChevronRight className="w-4 h-4" />
      </button>
    </motion.div>
  );
};
