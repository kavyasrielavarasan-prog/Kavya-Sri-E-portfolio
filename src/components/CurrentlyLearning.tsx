import React from 'react';
import { CURRENTLY_LEARNING } from '../data/portfolioData';
import { BookOpen, ArrowUpRight, Code, Cpu } from 'lucide-react';

export const CurrentlyLearning: React.FC = () => {
  return (
    <section className="py-20 border-b border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-2">
            07. Active Growth Focus
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white text-balance">
            Currently Learning & Exploring
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            As a 2nd-year student, my growth is continuous. Here are the core topics and technologies I am actively studying today.
          </p>
        </div>

        {/* Learning Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CURRENTLY_LEARNING.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl border border-slate-800 bg-slate-900/50 hover:bg-slate-900/80 transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-2.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-mono text-blue-400">PURSUE_FOCUS // 0{idx + 1}</span>
                  <span className="text-slate-400 font-medium">{item.associatedProject}</span>
                </div>
                <h3 className="text-lg font-bold text-white tracking-tight">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {item.focus}
                </p>
              </div>

              <div className="pt-2 text-xs text-slate-400 flex items-center gap-1.5 border-t border-slate-800/80">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                <span>Active Daily Study & Implementation</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
