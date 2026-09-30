import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { motion } from 'motion/react';
import { GraduationCap, Award, CheckCircle2, Sparkles, BookOpen } from 'lucide-react';

export const AboutEducation: React.FC = () => {
  return (
    <section id="about" className="py-20 border-b border-slate-800/60 scroll-mt-16 relative overflow-hidden">
      {/* Subtle ambient animated backdrop light */}
      <motion.div
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.08, 0.14, 0.08]
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 -right-20 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl pointer-events-none -z-10"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Staggered Entrance */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.4 }}
          className="max-w-2xl mb-10"
        >
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-1.5 flex items-center gap-1.5">
            <BookOpen className="w-3.5 h-3.5" />
            <span>01. About Me</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Background &amp; Education
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Short Punchy Bio with Scroll Reveal */}
          <motion.div 
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7 space-y-4 text-sm text-slate-300 leading-relaxed"
          >
            <p>
              I am a 2nd-year <strong className="text-white font-semibold">B.Tech Artificial Intelligence &amp; Data Science</strong> student at <strong className="text-white font-semibold">J.N.N. Institute of Engineering</strong> with a <strong className="text-emerald-400 font-mono font-semibold">9.21 CGPA</strong>.
            </p>
            
            <p>
              My philosophy is simple: <span className="text-blue-300 font-medium">&ldquo;I learn by building, explore AI, and turn ideas into working projects.&rdquo;</span> I focus on hands-on machine learning—handling messy datasets, preventing data leakage, and training models using Python and scikit-learn.
            </p>

            <p>
              Having completed internships with <strong className="text-white font-semibold">InAmigos Foundation</strong> and <strong className="text-white font-semibold">NIT Puducherry</strong>, I am now expanding into frontend and full-stack development through projects like <strong className="text-white font-semibold">HomeHive</strong>.
            </p>

            {/* Quick Interactive Badges */}
            <div className="pt-2 flex flex-wrap gap-3 text-xs">
              <motion.div 
                whileHover={{ scale: 1.03 }}
                className="flex items-center gap-1.5 p-2 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-200 shadow-sm"
              >
                <CheckCircle2 className="w-4 h-4 text-blue-400" />
                <span>Hands-on ML &amp; Datasets</span>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.03 }}
                className="flex items-center gap-1.5 p-2 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-200 shadow-sm"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Hackathon Finalist &amp; Team Leader</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column: Animated Education Card */}
          <motion.div 
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-5"
          >
            <motion.div 
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="rounded-2xl border border-slate-800 bg-slate-900/80 backdrop-blur p-6 space-y-5 shadow-xl hover:border-slate-700 transition-colors relative overflow-hidden"
            >
              {/* Subtle accent corner glow */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 rounded-full blur-xl pointer-events-none" />

              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-blue-950/70 text-blue-400 border border-blue-800/50 shadow-inner">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">{PERSONAL_INFO.college}</h3>
                    <p className="text-[11px] text-slate-400">{PERSONAL_INFO.location}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-3 text-xs">
                <div>
                  <span className="text-slate-400 text-[10px] uppercase font-semibold block tracking-wider">Degree Program</span>
                  <span className="text-white font-semibold text-sm">{PERSONAL_INFO.degree}</span>
                  <span className="text-slate-400 block text-[11px] mt-0.5">
                    {PERSONAL_INFO.currentYear} &middot; Expected Graduation: {PERSONAL_INFO.expectedGraduation}
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800/90 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-slate-400 block font-mono">CUMULATIVE GPA</span>
                    <span className="text-2xl font-bold text-white font-mono">{PERSONAL_INFO.cgpa} <span className="text-xs font-normal text-slate-500">/ 10.0</span></span>
                  </div>
                  <span className="text-xs font-semibold text-emerald-400 bg-emerald-950/60 px-2.5 py-1 rounded-md border border-emerald-800/40 shadow-sm">
                    Distinction
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
