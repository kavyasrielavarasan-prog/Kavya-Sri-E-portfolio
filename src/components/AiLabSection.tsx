import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FlaskConical, RefreshCw, Sparkles, Activity } from 'lucide-react';

interface GestureClass {
  id: string;
  name: string;
  emoji: string;
  samples: number;
  recordedConfidence: number;
  testConfidences: { [key: string]: number };
}

export const AiLabSection: React.FC = () => {
  const [activeExperiment, setActiveExperiment] = useState<'gesture' | 'water'>('gesture');

  const gestures: GestureClass[] = [
    {
      id: 'open-hand',
      name: 'Open Hand',
      emoji: '✋',
      samples: 70,
      recordedConfidence: 98,
      testConfidences: { 'open-hand': 98.0, 'fist': 1.4, 'thumbs-up': 0.6 }
    },
    {
      id: 'fist',
      name: 'Fist',
      emoji: '✊',
      samples: 76,
      recordedConfidence: 97,
      testConfidences: { 'open-hand': 1.8, 'fist': 97.0, 'thumbs-up': 1.2 }
    },
    {
      id: 'thumbs-up',
      name: 'Thumbs Up',
      emoji: '👍',
      samples: 71,
      recordedConfidence: 100,
      testConfidences: { 'open-hand': 0.0, 'fist': 0.0, 'thumbs-up': 100.0 }
    }
  ];

  const [selectedGesture, setSelectedGesture] = useState<GestureClass>(gestures[0]);
  const [isScanning, setIsScanning] = useState(false);

  const handleSelectGesture = (g: GestureClass) => {
    setSelectedGesture(g);
    setIsScanning(true);
    setTimeout(() => setIsScanning(false), 500);
  };

  // Water experiment simulator state
  const [ph, setPh] = useState<number>(7.2);
  const [chloramines, setChloramines] = useState<number>(3.5);
  const [solids, setSolids] = useState<number>(420);
  const [turbidity, setTurbidity] = useState<number>(3.8);

  const evaluateWaterQuality = () => {
    let riskPoints = 0;
    if (ph < 6.5 || ph > 8.5) riskPoints += 2;
    if (chloramines > 4.0) riskPoints += 2;
    if (solids > 500) riskPoints += 1.5;
    if (turbidity > 5.0) riskPoints += 2;

    const isStable = riskPoints <= 1.5;
    return {
      status: isStable ? 'Stable' : 'At Risk',
      confidence: Math.round(isStable ? Math.max(78, 96 - riskPoints * 12) : Math.min(97, 72 + riskPoints * 8))
    };
  };

  const waterResult = evaluateWaterQuality();

  return (
    <section id="ai-lab" className="py-20 border-b border-slate-800/60 scroll-mt-16 bg-[#090D14] relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-indigo-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Scroll Reveal */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.4 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4"
        >
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-1.5 flex items-center gap-1.5">
              <FlaskConical className="w-3.5 h-3.5 text-blue-400" />
              <span>04. Interactive Exploration</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Kavya&apos;s AI Lab
            </h2>
          </div>

          <div className="flex items-center gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-xl">
            <button
              onClick={() => setActiveExperiment('gesture')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all active:scale-95 ${
                activeExperiment === 'gesture' ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-400 hover:text-white'
              }`}
            >
              ✋ Gesture Recognition
            </button>
            <button
              onClick={() => setActiveExperiment('water')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all active:scale-95 ${
                activeExperiment === 'water' ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-400 hover:text-white'
              }`}
            >
              💧 Water Potability
            </button>
          </div>
        </motion.div>

        {/* ========================================================
            EXPERIMENT 1: HAND GESTURE RECOGNITION (ANIMATED)
           ======================================================== */}
        <AnimatePresence mode="wait">
          {activeExperiment === 'gesture' && (
            <motion.div
              key="gesture"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="rounded-2xl border border-slate-800 bg-slate-900/80 backdrop-blur p-6 sm:p-8 space-y-6 shadow-xl"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-800 text-xs">
                <div>
                  <span className="font-bold text-white text-sm">Google Teachable Machine Vision Benchmark</span>
                  <p className="text-slate-400 text-xs mt-0.5">217 total image captures trained during InAmigos internship</p>
                </div>
                <span className="font-mono text-emerald-400 font-bold self-start sm:self-auto flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5" />
                  <span>{selectedGesture.recordedConfidence}% Empirical Accuracy</span>
                </span>
              </div>

              {/* Gesture Buttons with Animated Scan */}
              <div className="grid grid-cols-3 gap-3 max-w-lg mx-auto">
                {gestures.map((g) => {
                  const isSelected = selectedGesture.id === g.id;
                  return (
                    <motion.button
                      key={g.id}
                      onClick={() => handleSelectGesture(g)}
                      whileHover={{ y: -3, transition: { duration: 0.15 } }}
                      whileTap={{ scale: 0.95 }}
                      className={`p-3.5 rounded-2xl border text-center transition-all relative overflow-hidden ${
                        isSelected
                          ? 'bg-blue-950/70 border-blue-500 shadow-lg shadow-blue-500/20 text-white'
                          : 'bg-slate-950/70 border-slate-800 text-slate-400 hover:border-slate-700'
                      }`}
                    >
                      {/* Laser scanner beam animation */}
                      {isSelected && isScanning && (
                        <motion.div
                          initial={{ top: "-100%" }}
                          animate={{ top: "100%" }}
                          transition={{ duration: 0.5, ease: "linear" }}
                          className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent shadow-lg shadow-blue-400"
                        />
                      )}
                      <span className="text-3xl block mb-1">{g.emoji}</span>
                      <span className="text-xs font-bold block">{g.name}</span>
                      <span className="text-[10px] font-mono text-slate-500">{g.samples} samples</span>
                    </motion.button>
                  );
                })}
              </div>

              {/* Probability Bars with Smooth Animated Fill */}
              <div className="max-w-md mx-auto space-y-2.5 p-4 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-xs font-medium text-slate-400 block mb-2">Class Confidence:</span>
                {gestures.map((g) => {
                  const conf = selectedGesture.testConfidences[g.id] || 0;
                  const isMain = g.id === selectedGesture.id;
                  return (
                    <div key={g.id} className="space-y-1">
                      <div className="flex justify-between text-xs font-mono">
                        <span className={isMain ? 'text-white font-bold flex items-center gap-1.5' : 'text-slate-400'}>
                          <span>{g.emoji}</span>
                          <span>{g.name}</span>
                        </span>
                        <span className={isMain ? 'text-blue-400 font-bold tabular-nums' : 'text-slate-500 tabular-nums'}>
                          {conf.toFixed(1)}%
                        </span>
                      </div>
                      <div className="h-2 w-full bg-slate-900 rounded-full overflow-hidden border border-slate-800/80">
                        <motion.div
                          animate={{ width: `${conf}%` }}
                          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                          className={`h-full rounded-full ${isMain ? 'bg-gradient-to-r from-blue-500 to-indigo-500' : 'bg-slate-700'}`}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* 5-Step ML Workflow Ribbon */}
              <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-mono text-slate-400 pt-2 border-t border-slate-800/80">
                <span className="text-slate-300">Data Collection (217)</span>
                <span>&rarr;</span>
                <span className="text-slate-300">Class Creation</span>
                <span>&rarr;</span>
                <span className="text-slate-300">Training</span>
                <span>&rarr;</span>
                <span className="text-slate-300">Testing</span>
                <span>&rarr;</span>
                <span className="text-emerald-400 font-bold">Prediction (97–100%)</span>
              </div>
            </motion.div>
          )}

          {/* ========================================================
              EXPERIMENT 2: WATER POTABILITY (ANIMATED)
             ======================================================== */}
          {activeExperiment === 'water' && (
            <motion.div
              key="water"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="rounded-2xl border border-slate-800 bg-slate-900/80 backdrop-blur p-6 sm:p-8 space-y-6 shadow-xl"
            >
              <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs">
                <span className="font-bold text-white text-sm">Random Forest Decision Tree Evaluator</span>
                <button
                  onClick={() => { setPh(7.2); setChloramines(3.5); setSolids(420); setTurbidity(3.8); }}
                  className="text-slate-400 hover:text-white flex items-center gap-1 active:scale-95 transition-all"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Reset Defaults</span>
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-xs">
                <div className="space-y-1.5">
                  <div className="flex justify-between">
                    <span className="text-slate-400">pH Level:</span>
                    <span className="font-mono text-white font-semibold">{ph.toFixed(1)}</span>
                  </div>
                  <input
                    type="range" min="0" max="14" step="0.1" value={ph}
                    onChange={(e) => setPh(parseFloat(e.target.value))}
                    className="w-full accent-blue-500 cursor-pointer"
                  />
                </div>

                <div className="space-y-1.5">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Chloramines:</span>
                    <span className="font-mono text-white font-semibold">{chloramines.toFixed(1)} ppm</span>
                  </div>
                  <input
                    type="range" min="0" max="10" step="0.1" value={chloramines}
                    onChange={(e) => setChloramines(parseFloat(e.target.value))}
                    className="w-full accent-blue-500 cursor-pointer"
                  />
                </div>

                <div className="space-y-1.5">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Dissolved Solids:</span>
                    <span className="font-mono text-white font-semibold">{solids} ppm</span>
                  </div>
                  <input
                    type="range" min="50" max="1200" step="10" value={solids}
                    onChange={(e) => setSolids(parseInt(e.target.value))}
                    className="w-full accent-blue-500 cursor-pointer"
                  />
                </div>

                <div className="space-y-1.5">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Turbidity:</span>
                    <span className="font-mono text-white font-semibold">{turbidity.toFixed(1)} NTU</span>
                  </div>
                  <input
                    type="range" min="0.5" max="10" step="0.1" value={turbidity}
                    onChange={(e) => setTurbidity(parseFloat(e.target.value))}
                    className="w-full accent-blue-500 cursor-pointer"
                  />
                </div>
              </div>

              {/* Animated Result Badge */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={waterResult.status}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.2 }}
                  className={`p-5 rounded-2xl text-center font-bold text-lg border shadow-lg ${
                    waterResult.status === 'Stable'
                      ? 'bg-emerald-950/40 border-emerald-500/60 text-emerald-300'
                      : 'bg-rose-950/40 border-rose-500/60 text-rose-300'
                  }`}
                >
                  <span className="text-xs uppercase tracking-wider block font-semibold opacity-80 mb-0.5">Predicted Status</span>
                  <div className="text-2xl font-extrabold">{waterResult.status}</div>
                  <span className="text-xs font-mono font-normal opacity-90 block mt-0.5">
                    {waterResult.confidence}% confidence
                  </span>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
