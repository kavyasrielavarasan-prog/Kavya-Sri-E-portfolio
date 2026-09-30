import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowUp, Github, Linkedin, Mail, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-slate-800 bg-[#070A0F] text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-slate-800/80">
          
          {/* Brand & Affiliation */}
          <div className="space-y-1.5">
            <div className="text-base font-bold text-white tracking-tight flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500" />
              <span>{PERSONAL_INFO.name}</span>
            </div>
            <p className="text-xs text-slate-400">
              {PERSONAL_INFO.role} &middot; {PERSONAL_INFO.college}, {PERSONAL_INFO.location}
            </p>
          </div>

          {/* Quick Nav Anchors */}
          <div className="flex flex-wrap items-center gap-6 text-xs font-medium text-slate-300">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#ai-lab" className="hover:text-blue-400 transition-colors">AI Lab</a>
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
            <a href="#certifications" className="hover:text-white transition-colors">Certifications</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-lg border border-slate-800 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors flex items-center gap-2"
            title="Scroll to top"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <div>
            &copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. Built with React, Vite &amp; Tailwind CSS.
          </div>
          <div className="flex items-center gap-4">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="hover:text-slate-300 transition-colors flex items-center gap-1"
            >
              <Mail className="w-3 h-3" />
              <span>{PERSONAL_INFO.email}</span>
            </a>
            <span>&middot;</span>
            <span className="text-slate-400 font-mono">B.Tech ADS 2025–2029</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
