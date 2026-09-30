import React, { useState } from 'react';
import { SKILLS_DATA, SkillItem } from '../data/portfolioData';
import { motion, AnimatePresence } from 'motion/react';
import { Code, Brain, Layout, Database, Check, Cpu } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'All' | 'Programming' | 'AI / ML' | 'Development' | 'Data'>('All');
  const [selectedSkill, setSelectedSkill] = useState<SkillItem>(SKILLS_DATA[0]);

  const categories: Array<'All' | 'Programming' | 'AI / ML' | 'Development' | 'Data'> = [
    'All',
    'Programming',
    'AI / ML',
    'Development',
    'Data'
  ];

  const filteredSkills = activeCategory === 'All' 
    ? SKILLS_DATA 
    : SKILLS_DATA.filter(skill => skill.category === activeCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Programming':
        return <Code className="w-4 h-4 text-blue-400" />;
      case 'AI / ML':
        return <Brain className="w-4 h-4 text-indigo-400" />;
      case 'Development':
        return <Layout className="w-4 h-4 text-cyan-400" />;
      case 'Data':
        return <Database className="w-4 h-4 text-emerald-400" />;
      default:
        return <Code className="w-4 h-4 text-slate-400" />;
    }
  };

  return (
    <section id="skills" className="py-20 border-b border-slate-800/60 scroll-mt-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Scroll Reveal */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.4 }}
          className="max-w-2xl mb-8"
        >
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-1.5 flex items-center gap-1.5">
            <Cpu className="w-3.5 h-3.5" />
            <span>02. Technical Skills</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Skills &amp; Practical Applications
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm mt-1">
            Click any skill to see where I applied it across my projects and internships.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-xl mb-6 w-fit"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all active:scale-95 ${
                activeCategory === cat
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Skill Selector Grid (7 cols) */}
          <motion.div 
            layout
            className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-2.5"
          >
            <AnimatePresence>
              {filteredSkills.map((skill) => {
                const isSelected = selectedSkill.name === skill.name;
                return (
                  <motion.button
                    layout
                    key={skill.name}
                    onClick={() => setSelectedSkill(skill)}
                    whileHover={{ y: -3, scale: 1.02, transition: { duration: 0.15 } }}
                    whileTap={{ scale: 0.97 }}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className={`p-3 rounded-xl text-left transition-all border text-xs flex flex-col justify-between ${
                      isSelected
                        ? 'bg-slate-800/95 border-blue-500 shadow-md shadow-blue-500/10 text-white'
                        : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:bg-slate-800/50 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between w-full mb-2">
                      {getCategoryIcon(skill.category)}
                      <span className="text-[10px] text-slate-500 font-mono">
                        {skill.usedIn.length} {skill.usedIn.length === 1 ? 'proj' : 'projs'}
                      </span>
                    </div>
                    <span className="font-semibold truncate">{skill.name}</span>
                  </motion.button>
                );
              })}
            </AnimatePresence>
          </motion.div>

          {/* Concise "Where I Used It" Panel (5 cols) with Spring Morph */}
          <div className="lg:col-span-5 sticky top-24">
            <motion.div 
              layout
              className="rounded-2xl border border-slate-800 bg-slate-900/90 backdrop-blur p-5 space-y-4 shadow-xl"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedSkill.name}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-4"
                >
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-lg bg-blue-950/60 border border-blue-800/40">
                        {getCategoryIcon(selectedSkill.category)}
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-white">{selectedSkill.name}</h3>
                        <span className="text-[11px] text-slate-400">{selectedSkill.category}</span>
                      </div>
                    </div>
                    <span className="text-[11px] font-mono text-blue-400 bg-blue-950/40 px-2 py-0.5 rounded border border-blue-800/40">
                      Applied
                    </span>
                  </div>

                  {selectedSkill.notes && (
                    <p className="text-xs text-slate-300 leading-relaxed bg-slate-950/60 p-3 rounded-xl border border-slate-800">
                      {selectedSkill.notes}
                    </p>
                  )}

                  <div className="space-y-2">
                    <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
                      Where I Used It
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {selectedSkill.usedIn.map((p, idx) => (
                        <motion.span
                          key={idx}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.2, delay: idx * 0.05 }}
                          className="text-xs px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800/90 text-blue-300 flex items-center gap-1.5 font-medium shadow-sm"
                        >
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span>{p}</span>
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
};
