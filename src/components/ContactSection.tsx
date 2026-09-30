import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Copy, Check, Send, Github, Linkedin, MapPin, MessageSquare } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSendMail = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoSubject = encodeURIComponent(subject || 'Connecting with Kavya Sri E');
    const mailtoBody = encodeURIComponent(message);
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
  };

  return (
    <section id="contact" className="py-20 border-b border-slate-800/60 scroll-mt-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Scroll Reveal */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.4 }}
          className="max-w-2xl mb-10"
        >
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-1.5 flex items-center gap-1.5">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>07. Contact &amp; Connect</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Get in Touch
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm mt-1">
            Open for machine learning internships, technical discussions, and collaborative projects.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Direct Info */}
          <motion.div 
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-4"
          >
            <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/80 backdrop-blur space-y-4 shadow-xl">
              <div className="flex items-center justify-between">
                <span className="text-xs text-blue-400 font-semibold uppercase tracking-wider">Primary Email</span>
                <span className="text-xs text-slate-400 flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-slate-400" />
                  {PERSONAL_INFO.location}
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between gap-2 shadow-inner">
                <span className="font-mono text-xs sm:text-sm text-white select-all truncate">
                  {PERSONAL_INFO.email}
                </span>
                <button
                  onClick={copyEmail}
                  className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors shrink-0 active:scale-90"
                  title="Copy email address"
                  aria-label="Copy email address"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition-all shadow-sm active:scale-[0.98]"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Open in Email Client</span>
              </a>
            </div>

            {/* Socials with Animated Hover */}
            <div className="flex gap-3">
              <motion.a
                whileHover={{ y: -3, transition: { duration: 0.15 } }}
                whileTap={{ scale: 0.98 }}
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="flex-1 p-3.5 rounded-2xl border border-slate-800 bg-slate-900/60 hover:bg-slate-850 hover:border-slate-700 text-slate-200 text-xs font-medium flex items-center justify-center gap-2 transition-colors shadow-sm"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </motion.a>
              <motion.a
                whileHover={{ y: -3, transition: { duration: 0.15 } }}
                whileTap={{ scale: 0.98 }}
                href={PERSONAL_INFO.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="flex-1 p-3.5 rounded-2xl border border-slate-800 bg-slate-900/60 hover:bg-slate-850 hover:border-slate-700 text-slate-200 text-xs font-medium flex items-center justify-center gap-2 transition-colors shadow-sm"
              >
                <Linkedin className="w-4 h-4 text-blue-400" />
                <span>LinkedIn</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Direct Message Drafter with Entrance */}
          <motion.div 
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <form onSubmit={handleSendMail} className="p-6 rounded-2xl border border-slate-800 bg-slate-900/80 backdrop-blur space-y-4 shadow-xl">
              <div className="space-y-1.5">
                <label htmlFor="subject" className="text-xs font-medium text-slate-300">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="e.g. Internship Opportunity / Machine Learning Project"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-blue-500 transition-colors"
                  required
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="msg" className="text-xs font-medium text-slate-300">
                  Message
                </label>
                <textarea
                  id="msg"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Hi Kavya, I reviewed your work..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-blue-500 resize-none transition-colors"
                  required
                />
              </div>

              <div className="flex justify-between items-center pt-1">
                <span className="text-[11px] text-slate-500 font-mono">Drafts directly to your email app</span>
                <button
                  type="submit"
                  className="px-5 py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-xl flex items-center gap-2 active:scale-95 transition-all shadow-sm"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Message</span>
                </button>
              </div>
            </form>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
