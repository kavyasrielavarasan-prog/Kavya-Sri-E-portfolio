import React, { useState } from 'react';
import { PROJECTS_DATA, Project } from '../data/portfolioData';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, X, Layers, Clock, CheckCircle2 } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'All' | 'Machine Learning' | 'Web Development' | 'Internship Project'>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filters: Array<'All' | 'Machine Learning' | 'Web Development' | 'Internship Project'> = [
    'All',
    'Machine Learning',
    'Web Development',
    'Internship Project'
  ];

  const filteredProjects = activeFilter === 'All'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter(p => p.category === activeFilter);

  const homeHive = PROJECTS_DATA.find(p => p.id === 'homehive')!;
  const waterQuality = PROJECTS_DATA.find(p => p.id === 'water-quality')!;

  return (
    <section id="projects" className="py-20 border-b border-slate-800/60 scroll-mt-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Scroll Reveal */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.4 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4"
        >
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-1.5 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5" />
              <span>03. Applied Projects</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Featured Work &amp; ML Models
            </h2>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-xl">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all active:scale-95 ${
                  activeFilter === f
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </motion.div>

        {/* ========================================================
            FEATURED 1: HOMEHIVE (Animated Spotlight)
           ======================================================== */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          whileHover={{ y: -3, transition: { duration: 0.2 } }}
          className="mb-8 rounded-2xl border border-blue-500/30 bg-gradient-to-b from-blue-950/20 via-slate-900/60 to-slate-900/80 p-6 sm:p-7 shadow-xl backdrop-blur relative overflow-hidden"
        >
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <span className="text-amber-400 font-semibold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
                  Currently Building
                </span>
                <span aria-hidden="true">&middot;</span>
                <span>Web Development</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">HomeHive &mdash; Home-Service Platform</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                A web platform connecting homeowners with trusted home-service providers for convenient and transparent household maintenance.
              </p>
              <div className="text-xs text-slate-400 font-mono pt-1">
                React &middot; JavaScript &middot; HTML/CSS &middot; Node.js (Planning) &middot; Express &middot; MongoDB
              </div>
            </div>

            {/* Quick 3-Step Animated Milestone Chain */}
            <div className="flex flex-col sm:flex-row gap-2 w-full lg:w-auto text-xs font-mono">
              <div className="p-2.5 rounded-xl bg-emerald-950/40 border border-emerald-800/40 text-emerald-300 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>1. Planning [Done]</span>
              </div>
              <div className="p-2.5 rounded-xl bg-blue-950/60 border border-blue-500/60 text-blue-300 flex items-center gap-1.5 font-bold shadow-md shadow-blue-500/10">
                <Clock className="w-3.5 h-3.5 text-blue-400 animate-spin" />
                <span>2. Frontend [In Progress]</span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-400">
                <span>3. Backend &amp; DB [Next]</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ========================================================
            FEATURED 2: WATER QUALITY (Animated Spotlight)
           ======================================================== */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          whileHover={{ y: -3, transition: { duration: 0.2 } }}
          className="mb-8 rounded-2xl border border-slate-800 bg-slate-900/70 backdrop-blur p-6 sm:p-7 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
        >
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <span className="text-emerald-400 font-semibold">Featured Machine Learning</span>
              <span aria-hidden="true">&middot;</span>
              <span>Random Forest Classifier</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">Water Quality Potability Prediction</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Trained on chemical parameters (pH, chloramines, dissolved solids, turbidity) to predict water safety status as <strong className="text-emerald-400">Stable</strong> vs <strong className="text-rose-400">At Risk</strong>.
            </p>
            <div className="text-xs text-slate-400 font-mono">
              Python &middot; Pandas &middot; scikit-learn &middot; LabelEncoder &middot; train_test_split &middot; Confusion Matrix
            </div>
          </div>

          <button
            onClick={() => setSelectedProject(waterQuality)}
            className="px-4 py-2.5 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 active:scale-95 rounded-xl border border-slate-700 flex items-center gap-1.5 shrink-0 transition-all hover:-translate-y-0.5"
          >
            <span>View ML Pipeline</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </motion.div>

        {/* ========================================================
            GRID OF OTHER PROJECTS (Animated Layout Grid)
           ======================================================== */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence>
            {filteredProjects
              .filter(p => p.id !== 'homehive' && p.id !== 'water-quality')
              .map((project) => (
                <motion.div
                  layout
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25 }}
                  whileHover={{ y: -4, borderColor: 'rgba(59, 130, 246, 0.4)', transition: { duration: 0.15 } }}
                  className="rounded-2xl border border-slate-800 bg-slate-900/60 hover:bg-slate-900/90 transition-all p-5 flex flex-col justify-between group shadow-sm"
                >
                  <div className="space-y-2.5">
                    <div className="flex items-center gap-2 text-[11px] text-slate-400 font-mono">
                      <span className="text-blue-400 font-semibold">{project.category}</span>
                      <span>&middot;</span>
                      <span>{project.status}</span>
                    </div>

                    <h4 className="text-base font-bold text-white group-hover:text-blue-300 transition-colors">
                      {project.title}
                    </h4>

                    <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                      {project.shortDescription}
                    </p>

                    <div className="text-[11px] text-slate-400 font-mono pt-1">
                      {project.technologies.slice(0, 3).join(' · ')}
                    </div>
                  </div>

                  <div className="pt-3 mt-3 border-t border-slate-800/80 flex items-center justify-between">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="text-xs font-semibold text-blue-400 hover:text-blue-300 flex items-center gap-1 active:scale-95 transition-all"
                    >
                      <span>Details</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                    {project.id === 'hand-gesture' && (
                      <a href="#ai-lab" className="text-xs text-amber-400 hover:underline">
                        AI Lab &rarr;
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="w-full max-w-xl rounded-2xl bg-slate-900 border border-slate-700 p-6 space-y-4 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between pb-3 border-b border-slate-800">
                <div>
                  <span className="text-xs text-blue-400 font-semibold">{selectedProject.category}</span>
                  <h3 className="text-xl font-bold text-white">{selectedProject.title}</h3>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-1 text-slate-400 hover:text-white"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-3 text-xs text-slate-300 leading-relaxed">
                <p>{selectedProject.fullDescription}</p>
                
                <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                  <strong className="text-white block mb-1">What I Learned:</strong>
                  {selectedProject.whatILearned}
                </div>

                <div className="font-mono text-slate-400 pt-1">
                  <strong>Tech: </strong>{selectedProject.technologies.join(', ')}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};
