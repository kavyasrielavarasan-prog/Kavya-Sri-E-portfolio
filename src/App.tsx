import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import { Navbar, ProfessionalTheme } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutEducation } from './components/AboutEducation';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { AiLabSection } from './components/AiLabSection';
import { ExperienceSection } from './components/ExperienceSection';
import { CertificationsSection } from './components/CertificationsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { CoffeeSplashIntro } from './components/CoffeeSplashIntro';

export default function App() {
  const [theme, setTheme] = useState<ProfessionalTheme>(() => {
    const saved = localStorage.getItem('kavya_theme');
    return (saved as ProfessionalTheme) || 'obsidian';
  });
  
  const [isResumeOpen, setIsResumeOpen] = useState<boolean>(false);
  const [activeDocId, setActiveDocId] = useState<string>('main-cv');
  const [showCoffeeIntro, setShowCoffeeIntro] = useState<boolean>(true);

  useEffect(() => {
    localStorage.setItem('kavya_theme', theme);
    const root = document.documentElement;

    // Reset theme classes
    root.classList.remove('dark', 'light', 'theme-obsidian', 'theme-zinc', 'theme-light');

    if (theme === 'light') {
      root.classList.add('light', 'theme-light');
    } else if (theme === 'zinc') {
      root.classList.add('dark', 'theme-zinc');
    } else {
      root.classList.add('dark', 'theme-obsidian');
    }
  }, [theme]);

  const handleOpenDocument = (docId: string = 'main-cv') => {
    setActiveDocId(docId);
    setIsResumeOpen(true);
  };

  return (
    <div className={`min-h-screen transition-colors duration-200 ${
      theme === 'light' ? 'bg-[#F8FAFC] text-slate-900' : 'bg-[#080C14] text-slate-100'
    }`}>
      {/* Signature "Spill the Coffee" Entrance Animation */}
      <AnimatePresence>
        {showCoffeeIntro && (
          <CoffeeSplashIntro onComplete={() => setShowCoffeeIntro(false)} />
        )}
      </AnimatePresence>

      {/* 3-Zone Top Navigation with Professional Theme Switcher */}
      <Navbar
        currentTheme={theme}
        setTheme={setTheme}
        onOpenResume={() => handleOpenDocument('main-cv')}
        onReplayIntro={() => setShowCoffeeIntro(true)}
      />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <Hero onOpenResume={() => handleOpenDocument('main-cv')} />

        {/* About & Formal Education */}
        <AboutEducation />

        {/* Interactive Skills with "Where I Used It" */}
        <SkillsSection />

        {/* Featured Projects: HomeHive & Water Quality Pipeline */}
        <ProjectsSection />

        {/* Signature Feature: Kavya's AI Lab */}
        <AiLabSection />

        {/* Internship Experience & Hackathon Journey */}
        <ExperienceSection />

        {/* Certifications & Industry Simulations Gallery with Specific Document Opening */}
        <CertificationsSection onOpenDocument={handleOpenDocument} />

        {/* Direct Contact (Email & Socials) */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Verified Academic Resume & Certificate Document Vault Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        initialDocId={activeDocId}
      />
    </div>
  );
}
