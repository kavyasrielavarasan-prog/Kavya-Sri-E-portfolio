import React, { useState, useEffect, useRef } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { motion } from 'motion/react';
import { 
  ArrowDown, 
  FileText, 
  Sparkles, 
  MapPin, 
  GraduationCap, 
  Upload, 
  RotateCcw,
  CheckCircle2,
  ShieldCheck
} from 'lucide-react';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [profileImg, setProfileImg] = useState<string>(PERSONAL_INFO.profileImage);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const savedCustomImg = localStorage.getItem('kavya_custom_profile_img');
    if (savedCustomImg) {
      setProfileImg(savedCustomImg);
    }
  }, []);

  const handleCustomPhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64 = reader.result as string;
        setProfileImg(base64);
        localStorage.setItem('kavya_custom_profile_img', base64);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleResetPhoto = () => {
    localStorage.removeItem('kavya_custom_profile_img');
    setProfileImg(PERSONAL_INFO.profileImage);
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden border-b border-slate-800/60">
      {/* Subtle ambient light gradient with gentle floating animation */}
      <motion.div 
        aria-hidden="true" 
        animate={{ 
          scale: [1, 1.08, 1],
          opacity: [0.15, 0.22, 0.15]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 blur-3xl pointer-events-none -z-10 rounded-full" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Core Identity & Purpose */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Student Status Kicker */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="flex flex-wrap items-center gap-2 text-xs font-medium text-slate-400"
            >
              <span className="text-blue-400 font-semibold">{PERSONAL_INFO.role}</span>
              <span aria-hidden="true">&middot;</span>
              <span>{PERSONAL_INFO.currentYear} B.Tech</span>
              <span aria-hidden="true">&middot;</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3 text-slate-400 inline" />
                {PERSONAL_INFO.location}
              </span>
            </motion.div>

            {/* Headline with balanced wrap */}
            <motion.h1 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1] text-balance"
            >
              Building intelligent models, exploring data, and learning full-stack code.
            </motion.h1>

            {/* Subtitle / Roles */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed space-y-2"
            >
              <p className="text-blue-300/90 font-medium">
                {PERSONAL_INFO.subtitles[0]} &middot; {PERSONAL_INFO.subtitles[1]}
              </p>
              <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
                &ldquo;{PERSONAL_INFO.tagline}&rdquo;
              </p>
            </motion.div>

            {/* Proof metrics - Tabular figures & claim-to-proof adjacency */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="pt-2 pb-4 grid grid-cols-2 sm:grid-cols-4 gap-4 border-y border-slate-800/80"
            >
              <div className="group">
                <div className="text-2xl font-bold text-white font-mono tabular-nums group-hover:text-blue-400 transition-colors">9.21</div>
                <div className="text-xs text-slate-400 mt-0.5">B.Tech CGPA</div>
              </div>
              <div className="group">
                <div className="text-2xl font-bold text-white font-mono tabular-nums group-hover:text-blue-400 transition-colors">7+</div>
                <div className="text-xs text-slate-400 mt-0.5">ML Projects Built</div>
              </div>
              <div className="group">
                <div className="text-2xl font-bold text-white font-mono tabular-nums group-hover:text-blue-400 transition-colors">2</div>
                <div className="text-xs text-slate-400 mt-0.5">Internships Completed</div>
              </div>
              <div className="group">
                <div className="text-2xl font-bold text-white font-mono tabular-nums group-hover:text-blue-400 transition-colors">2029</div>
                <div className="text-xs text-slate-400 mt-0.5">Graduation Year</div>
              </div>
            </motion.div>

            {/* Primary Action Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap items-center gap-3 pt-2"
            >
              <button
                onClick={() => scrollTo('projects')}
                className="px-5 py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 active:scale-[0.98] rounded-lg transition-all shadow-sm shadow-blue-900/30 flex items-center gap-2 hover:-translate-y-0.5"
              >
                <span>Explore My Work</span>
                <ArrowDown className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenResume}
                className="px-4 py-2.5 text-sm font-medium text-slate-200 bg-slate-800/90 hover:bg-slate-700 hover:text-white active:scale-[0.98] rounded-lg transition-all border border-slate-700 flex items-center gap-2 hover:-translate-y-0.5"
              >
                <FileText className="w-4 h-4 text-blue-400" />
                <span>View Academic Resume</span>
              </button>

              <button
                onClick={() => scrollTo('ai-lab')}
                className="px-4 py-2.5 text-sm font-medium text-blue-300 hover:text-blue-200 active:scale-[0.98] bg-blue-950/40 hover:bg-blue-900/40 rounded-lg transition-all border border-blue-800/40 flex items-center gap-2 hover:-translate-y-0.5"
              >
                <Sparkles className="w-4 h-4 text-blue-400" />
                <span>Kavya&apos;s AI Lab</span>
              </button>
            </motion.div>

          </div>

          {/* Right Column: Visual Portrait & Verified Student Identity */}
          <div className="lg:col-span-5">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-2xl border border-slate-800 bg-slate-900/80 backdrop-blur p-6 shadow-2xl space-y-6 hover:border-slate-700 transition-colors"
            >
              
              {/* Profile Image Showcase with Framing */}
              <div className="relative group">
                <div className="aspect-square w-full max-w-[340px] mx-auto rounded-xl overflow-hidden border border-slate-700/80 bg-slate-950 shadow-inner relative">
                  <img
                    src={profileImg}
                    alt="Kavya Sri E - AI & Data Science Student"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = PERSONAL_INFO.profileImage;
                    }}
                  />
                  
                  {/* Subtle gradient scrim at bottom of image */}
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent pointer-events-none" />

                  {/* Corner Status Pill in Image */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs">
                    <span className="text-white font-medium drop-shadow-md flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span>{PERSONAL_INFO.name}</span>
                    </span>
                    <span className="text-slate-300 font-mono text-[11px] drop-shadow-md">
                      B.Tech ADS
                    </span>
                  </div>
                </div>

                {/* Upload Custom Photo Option for Kavya */}
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleCustomPhotoUpload}
                  accept="image/*"
                  className="hidden"
                />

                <div className="flex items-center justify-center gap-3 pt-3 text-[11px] text-slate-400">
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="hover:text-blue-400 transition-colors flex items-center gap-1 cursor-pointer"
                    title="Upload your own photo file from your device"
                  >
                    <Upload className="w-3.5 h-3.5" />
                    <span>Upload Your Custom Photo</span>
                  </button>

                  {profileImg !== PERSONAL_INFO.profileImage && (
                    <>
                      <span>&middot;</span>
                      <button
                        onClick={handleResetPhoto}
                        className="hover:text-amber-400 transition-colors flex items-center gap-1"
                        title="Reset back to default portrait"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                        <span>Reset Portrait</span>
                      </button>
                    </>
                  )}
                </div>
              </div>

              {/* Verified Academic Card Details */}
              <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400 flex items-center gap-1.5">
                    <GraduationCap className="w-4 h-4 text-blue-400" />
                    <span>{PERSONAL_INFO.college}</span>
                  </span>
                  <span className="text-emerald-400 font-mono font-semibold">
                    CGPA: {PERSONAL_INFO.cgpa}
                  </span>
                </div>

                <div className="text-xs text-slate-300 flex items-center justify-between pt-1 border-t border-slate-800/80">
                  <span className="text-slate-400">Status</span>
                  <span className="text-slate-200 font-medium">Open to Summer / Fall Internships</span>
                </div>
              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
