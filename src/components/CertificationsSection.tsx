import React, { useState, useEffect } from 'react';
import { CERTIFICATIONS_DATA } from '../data/portfolioData';
import { motion } from 'motion/react';
import { Award, FileText, ExternalLink, ShieldCheck, CheckCircle2, Upload } from 'lucide-react';

interface CertificationsSectionProps {
  onOpenDocument: (docId: string) => void;
}

export const CertificationsSection: React.FC<CertificationsSectionProps> = ({ onOpenDocument }) => {
  const [uploadedMap, setUploadedMap] = useState<{ [id: string]: boolean }>({});

  useEffect(() => {
    const map: { [id: string]: boolean } = {};
    CERTIFICATIONS_DATA.forEach(c => {
      map[c.id] = !!localStorage.getItem(`kavya_doc_file_${c.id}`);
    });
    map['main-cv'] = !!localStorage.getItem('kavya_doc_file_main-cv');
    setUploadedMap(map);
  }, []);

  return (
    <section id="certifications" className="py-20 border-b border-slate-800/60 scroll-mt-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Scroll Reveal & Action to View Main CV */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4 }}
            className="max-w-2xl"
          >
            <div className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-1.5 flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5" />
              <span>06. Credentials &amp; Certifications</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Certifications &amp; Job Simulations
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm mt-1">
              Click any certificate to upload and preview its official original document separately.
            </p>
          </motion.div>

          {/* Quick Action: Open Main Academic CV */}
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => onOpenDocument('main-cv')}
            className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold flex items-center gap-2 shadow-lg shadow-blue-600/20 active:scale-95 transition-all self-start sm:self-auto cursor-pointer"
          >
            <FileText className="w-4 h-4" />
            <span>Open Main Academic CV</span>
            {uploadedMap['main-cv'] ? (
              <span className="w-2 h-2 rounded-full bg-emerald-400" title="File uploaded" />
            ) : (
              <ExternalLink className="w-3.5 h-3.5 opacity-80" />
            )}
          </motion.button>
        </div>

        {/* Compact Animated Grid - Each has its separate document */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {CERTIFICATIONS_DATA.map((cert, idx) => {
            const hasUploadedFile = uploadedMap[cert.id];

            return (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                whileHover={{ y: -4, borderColor: 'rgba(59, 130, 246, 0.5)', transition: { duration: 0.15 } }}
                onClick={() => onOpenDocument(cert.id)}
                className="rounded-2xl border border-slate-800 bg-slate-900/60 hover:bg-slate-900/95 transition-all p-5 space-y-3 flex flex-col justify-between group shadow-sm cursor-pointer relative"
                title={`Click to view or upload document for ${cert.title}`}
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-[11px] text-slate-400">
                    <span className="text-blue-400 font-semibold">{cert.organization}</span>
                    <span className="font-mono">{cert.date}</span>
                  </div>

                  <h3 className="text-sm font-bold text-white group-hover:text-blue-300 transition-colors leading-snug">
                    {cert.title}
                  </h3>

                  <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                    {cert.description}
                  </p>
                </div>

                <div className="pt-2.5 border-t border-slate-800/80 flex items-center justify-between gap-2 text-[10px] font-mono">
                  {hasUploadedFile ? (
                    <span className="text-emerald-400 font-semibold flex items-center gap-1 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-800/40">
                      <CheckCircle2 className="w-3 h-3" />
                      <span>Document Attached</span>
                    </span>
                  ) : (
                    <span className="text-slate-400 flex items-center gap-1 bg-slate-950 px-2 py-0.5 rounded border border-slate-800">
                      <Upload className="w-3 h-3 text-slate-500" />
                      <span>Attach Document</span>
                    </span>
                  )}

                  <span className="text-blue-400 group-hover:text-blue-300 font-sans font-semibold flex items-center gap-1 shrink-0 text-xs">
                    <span>View / Upload</span>
                    <ExternalLink className="w-3 h-3" />
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mt-8 p-4 rounded-2xl border border-blue-500/20 bg-blue-950/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs"
        >
          <div className="flex items-center gap-2.5 text-slate-300">
            <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
            <span>Each credential has its own independent document storage. Uploading to one certificate will not affect your main CV or other certificates.</span>
          </div>
          <button
            onClick={() => onOpenDocument('main-cv')}
            className="px-3.5 py-1.5 rounded-lg bg-blue-600/30 hover:bg-blue-600/50 text-blue-300 border border-blue-500/30 font-semibold flex items-center gap-1.5 transition-all shrink-0 active:scale-95 cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Open Main Academic CV</span>
          </button>
        </motion.div>

      </div>
    </section>
  );
};
