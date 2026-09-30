import React, { useState } from 'react';
import { INTERNSHIPS_DATA, HACKATHONS_DATA } from '../data/portfolioData';
import { motion, AnimatePresence } from 'motion/react';
import { Briefcase, Trophy, Calendar } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'internships' | 'hackathons'>('internships');

  return (
    <section id="experience" className="py-20 border-b border-slate-800/60 scroll-mt-16 relative">
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
              <Briefcase className="w-3.5 h-3.5" />
              <span>05. Journey</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Experience &amp; Hackathons
            </h2>
          </div>

          <div className="flex items-center gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-xl">
            <button
              onClick={() => setActiveTab('internships')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all active:scale-95 ${
                activeTab === 'internships' ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-400 hover:text-white'
              }`}
            >
              Internships (2)
            </button>
            <button
              onClick={() => setActiveTab('hackathons')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all active:scale-95 ${
                activeTab === 'hackathons' ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-400 hover:text-white'
              }`}
            >
              Hackathons (2)
            </button>
          </div>
        </motion.div>

        {/* Tab Content with Animated Transition */}
        <AnimatePresence mode="wait">
          {activeTab === 'internships' && (
            <motion.div
              key="internships"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {INTERNSHIPS_DATA.map((intern, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -4, borderColor: 'rgba(59, 130, 246, 0.4)', transition: { duration: 0.15 } }}
                  className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 space-y-3.5 shadow-sm hover:bg-slate-900/90 transition-colors"
                >
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span className="text-blue-400 font-semibold">{intern.role}</span>
                    <span className="font-mono flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-slate-500 inline" />
                      {intern.period}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white tracking-tight">
                    {intern.organization}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {intern.description}
                  </p>

                  <div className="space-y-1.5 pt-1 text-xs text-slate-300">
                    {intern.keyTakeaways.slice(0, 2).map((point, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2">
                        <span className="text-blue-400 font-bold">&bull;</span>
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2 text-[11px] text-slate-500 font-mono">
                    {intern.tags.join(' · ')}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {activeTab === 'hackathons' && (
            <motion.div
              key="hackathons"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {HACKATHONS_DATA.map((hack, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -4, borderColor: 'rgba(245, 158, 11, 0.4)', transition: { duration: 0.15 } }}
                  className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 space-y-3.5 shadow-sm hover:bg-slate-900/90 transition-colors"
                >
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span className="text-amber-400 font-semibold">{hack.role}</span>
                    <span className="font-mono flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-slate-500 inline" />
                      {hack.period}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white tracking-tight">
                    {hack.organization}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {hack.description}
                  </p>

                  <div className="space-y-1.5 pt-1 text-xs text-slate-300">
                    {hack.keyTakeaways.slice(0, 2).map((point, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2">
                        <span className="text-amber-400 font-bold">&bull;</span>
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2 text-[11px] text-slate-500 font-mono">
                    {hack.tags.join(' · ')}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
