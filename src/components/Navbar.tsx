import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Menu, X, Sun, Moon, FileText, Sparkles, Coffee, Palette } from 'lucide-react';

export type ProfessionalTheme = 'obsidian' | 'zinc' | 'light';

interface NavbarProps {
  currentTheme: ProfessionalTheme;
  setTheme: (theme: ProfessionalTheme) => void;
  onOpenResume: () => void;
  onReplayIntro?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentTheme, setTheme, onOpenResume, onReplayIntro }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [themeDropdownOpen, setThemeDropdownOpen] = useState(false);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'AI Lab', href: '#ai-lab', isLab: true },
    { label: 'Experience', href: '#experience' },
    { label: 'Credentials', href: '#certifications' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const cycleTheme = () => {
    if (currentTheme === 'obsidian') setTheme('zinc');
    else if (currentTheme === 'zinc') setTheme('light');
    else setTheme('obsidian');
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-800/80 bg-[#080C14]/90 backdrop-blur-md transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Zone 1: Identity Branding */}
        <a 
          href="#about"
          className="flex items-center gap-2.5 text-slate-100 font-bold tracking-tight text-base group"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-blue-500 group-hover:scale-125 transition-transform shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
          <span className="font-semibold">{PERSONAL_INFO.name}</span>
        </a>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 text-xs font-semibold text-slate-300">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className={`transition-colors flex items-center gap-1.5 ${
                link.isLab
                  ? 'text-blue-400 hover:text-blue-300 font-bold'
                  : 'hover:text-white'
              }`}
            >
              {link.isLab && <Sparkles className="w-3.5 h-3.5 text-blue-400" />}
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Actions */}
        <div className="flex items-center gap-2.5">
          {/* Coffee Intro Replay */}
          {onReplayIntro && (
            <button
              onClick={onReplayIntro}
              className="p-2 rounded-xl text-amber-400 hover:text-amber-300 hover:bg-amber-950/40 transition-colors border border-amber-500/30 active:scale-95"
              title="Replay Entrance Animation"
              aria-label="Replay Coffee Intro"
            >
              <Coffee className="w-4 h-4" />
            </button>
          )}

          {/* Professional Theme Switcher Dropdown */}
          <div className="relative">
            <button
              onClick={() => setThemeDropdownOpen(!themeDropdownOpen)}
              className="px-2.5 py-1.5 rounded-xl text-slate-300 hover:text-white bg-slate-900/80 hover:bg-slate-800 transition-colors border border-slate-700/60 flex items-center gap-1.5 text-xs font-medium"
              title="Change Professional Theme"
              aria-label="Theme selector"
            >
              <Palette className="w-3.5 h-3.5 text-blue-400" />
              <span className="hidden sm:inline capitalize font-mono text-[11px]">{currentTheme}</span>
            </button>

            {themeDropdownOpen && (
              <div 
                className="absolute right-0 mt-2 w-44 rounded-xl bg-slate-900 border border-slate-700/80 shadow-2xl p-1.5 space-y-1 z-50 text-xs"
                onMouseLeave={() => setThemeDropdownOpen(false)}
              >
                <div className="px-2.5 py-1 text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                  Professional Themes
                </div>
                
                <button
                  onClick={() => { setTheme('obsidian'); setThemeDropdownOpen(false); }}
                  className={`w-full text-left px-2.5 py-1.5 rounded-lg flex items-center justify-between transition-colors ${
                    currentTheme === 'obsidian' ? 'bg-blue-600 text-white font-semibold' : 'text-slate-300 hover:bg-slate-800'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-500" />
                    <span>Obsidian Sapphire</span>
                  </span>
                  {currentTheme === 'obsidian' && <span className="text-[10px] font-mono">✓</span>}
                </button>

                <button
                  onClick={() => { setTheme('zinc'); setThemeDropdownOpen(false); }}
                  className={`w-full text-left px-2.5 py-1.5 rounded-lg flex items-center justify-between transition-colors ${
                    currentTheme === 'zinc' ? 'bg-zinc-700 text-white font-semibold' : 'text-slate-300 hover:bg-slate-800'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-zinc-400" />
                    <span>Midnight Zinc</span>
                  </span>
                  {currentTheme === 'zinc' && <span className="text-[10px] font-mono">✓</span>}
                </button>

                <button
                  onClick={() => { setTheme('light'); setThemeDropdownOpen(false); }}
                  className={`w-full text-left px-2.5 py-1.5 rounded-lg flex items-center justify-between transition-colors ${
                    currentTheme === 'light' ? 'bg-blue-600 text-white font-semibold' : 'text-slate-300 hover:bg-slate-800'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <Sun className="w-2.5 h-2.5 text-amber-400" />
                    <span>Editorial Swiss</span>
                  </span>
                  {currentTheme === 'light' && <span className="text-[10px] font-mono">✓</span>}
                </button>
              </div>
            )}
          </div>

          {/* Academic Resume Button */}
          <button
            onClick={onOpenResume}
            className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 active:scale-95 rounded-xl transition-all shadow-sm shadow-blue-600/20"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Academic Resume</span>
          </button>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl text-slate-300 hover:bg-slate-800 transition-colors border border-slate-700/60"
            aria-label="Open navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-800 bg-[#080C14] px-4 pt-2 pb-6 space-y-3">
          <div className="flex flex-col space-y-1.5">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-between ${
                  link.isLab
                    ? 'text-blue-400 font-semibold bg-blue-950/20'
                    : 'text-slate-300 hover:text-white hover:bg-slate-900'
                }`}
              >
                <span>{link.label}</span>
                {link.isLab && <Sparkles className="w-4 h-4 text-blue-400" />}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
            <button
              onClick={cycleTheme}
              className="px-3 py-1.5 text-xs font-mono text-slate-300 bg-slate-900 border border-slate-800 rounded-lg flex items-center gap-1.5"
            >
              <Palette className="w-3.5 h-3.5 text-blue-400" />
              <span>Theme: {currentTheme}</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="px-3.5 py-1.5 text-xs font-semibold text-white bg-blue-600 rounded-lg flex items-center gap-1.5"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
