import React, { useState, useEffect, useRef } from 'react';
import { PERSONAL_INFO, CERTIFICATIONS_DATA, PROJECTS_DATA, INTERNSHIPS_DATA } from '../data/portfolioData';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  Printer, 
  MapPin, 
  Mail, 
  GraduationCap, 
  FileText, 
  Download, 
  Upload, 
  Trash2, 
  CheckCircle2,
  Award,
  ChevronRight,
  ShieldCheck,
  FileCheck
} from 'lucide-react';

export interface DocumentTarget {
  id: string;
  title: string;
  category: 'Academic CV' | 'Certification' | 'Internship';
  organization: string;
  date?: string;
  description: string;
}

export const ALL_DOCUMENTS: DocumentTarget[] = [
  {
    id: 'main-cv',
    title: 'Kavya Sri E — Main Academic CV / Resume',
    category: 'Academic CV',
    organization: 'J.N.N. Institute of Engineering',
    date: 'Current 2nd Year Record',
    description: 'Comprehensive academic resume covering 9.21 CGPA, machine learning projects, internships at InAmigos and NIT Puducherry, and technical proficiencies.'
  },
  ...CERTIFICATIONS_DATA.map((cert) => ({
    id: cert.id,
    title: cert.title,
    category: cert.id.includes('internship') ? ('Internship' as const) : ('Certification' as const),
    organization: cert.organization,
    date: cert.date,
    description: cert.description
  }))
];

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialDocId?: string;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ 
  isOpen, 
  onClose, 
  initialDocId = 'main-cv' 
}) => {
  const [selectedDocId, setSelectedDocId] = useState<string>(initialDocId);
  const [activeViewTab, setActiveViewTab] = useState<'document' | 'digital'>('document');
  const [docFiles, setDocFiles] = useState<{ [id: string]: { file: string; name: string; type: 'pdf' | 'image' | 'other' } }>({});
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Sync initialDocId when modal opens
  useEffect(() => {
    if (initialDocId) {
      setSelectedDocId(initialDocId);
    }
  }, [initialDocId, isOpen]);

  // Load all saved documents from localStorage
  useEffect(() => {
    const loaded: { [id: string]: { file: string; name: string; type: 'pdf' | 'image' | 'other' } } = {};
    ALL_DOCUMENTS.forEach((doc) => {
      const savedFile = localStorage.getItem(`kavya_doc_file_${doc.id}`);
      const savedName = localStorage.getItem(`kavya_doc_name_${doc.id}`);
      const savedType = (localStorage.getItem(`kavya_doc_type_${doc.id}`) as 'pdf' | 'image' | 'other') || 'pdf';
      if (savedFile) {
        loaded[doc.id] = { file: savedFile, name: savedName || `${doc.title}.pdf`, type: savedType };
      }
    });
    setDocFiles(loaded);
  }, [isOpen]);

  const activeDoc = ALL_DOCUMENTS.find(d => d.id === selectedDocId) || ALL_DOCUMENTS[0];
  const activeDocData = docFiles[activeDoc.id] || null;

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const isPdf = file.type.includes('pdf') || file.name.toLowerCase().endsWith('.pdf');
      const isImg = file.type.includes('image');
      const type: 'pdf' | 'image' | 'other' = isPdf ? 'pdf' : isImg ? 'image' : 'other';

      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;

        // Save exclusively for this specific document ID
        setDocFiles(prev => ({
          ...prev,
          [activeDoc.id]: { file: result, name: file.name, type }
        }));

        try {
          localStorage.setItem(`kavya_doc_file_${activeDoc.id}`, result);
          localStorage.setItem(`kavya_doc_name_${activeDoc.id}`, file.name);
          localStorage.setItem(`kavya_doc_type_${activeDoc.id}`, type);
        } catch {
          // If storage limit is reached, it remains in memory for current session
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveDoc = () => {
    setDocFiles(prev => {
      const updated = { ...prev };
      delete updated[activeDoc.id];
      return updated;
    });

    localStorage.removeItem(`kavya_doc_file_${activeDoc.id}`);
    localStorage.removeItem(`kavya_doc_name_${activeDoc.id}`);
    localStorage.removeItem(`kavya_doc_type_${activeDoc.id}`);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/85 backdrop-blur-md overflow-y-auto"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 15 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 15 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-6xl max-h-[94vh] rounded-2xl bg-slate-900 border border-slate-700 shadow-2xl flex flex-col my-auto relative overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Toolbar */}
            <div className="flex flex-wrap items-center justify-between px-5 py-3 border-b border-slate-800 bg-slate-950/90 print:hidden gap-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-blue-400" />
                  <span>Credential &amp; CV Vault</span>
                </span>
                <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/50 px-2 py-0.5 rounded border border-emerald-800/40">
                  Separate Uploads
                </span>
              </div>

              {/* View Switcher: Uploaded Document vs Digital Format */}
              <div className="flex items-center gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-xl text-xs">
                <button
                  onClick={() => setActiveViewTab('document')}
                  className={`px-3 py-1.5 rounded-lg font-semibold flex items-center gap-1.5 transition-all ${
                    activeViewTab === 'document'
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Uploaded Document</span>
                  {activeDocData && <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />}
                </button>

                <button
                  onClick={() => setActiveViewTab('digital')}
                  className={`px-3 py-1.5 rounded-lg font-semibold flex items-center gap-1.5 transition-all ${
                    activeViewTab === 'digital'
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <FileCheck className="w-3.5 h-3.5" />
                  <span>Digital Format</span>
                </button>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2">
                {activeViewTab === 'document' && activeDocData && (
                  <>
                    <a
                      href={activeDocData.file}
                      download={activeDocData.name || `${activeDoc.title}.pdf`}
                      className="px-3 py-1.5 text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 rounded-lg transition-all flex items-center gap-1.5 border border-slate-700"
                      title="Download this specific document"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">Download</span>
                    </a>

                    <button
                      onClick={() => fileInputRef.current?.click()}
                      className="px-3 py-1.5 text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 rounded-lg transition-all flex items-center gap-1.5 border border-slate-700 cursor-pointer"
                      title="Replace file for this specific certificate/CV"
                    >
                      <Upload className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">Replace</span>
                    </button>

                    <button
                      onClick={handleRemoveDoc}
                      className="p-1.5 text-rose-400 hover:bg-rose-950/40 rounded-lg transition-colors border border-rose-900/40 cursor-pointer"
                      title="Remove this specific document"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </>
                )}

                <button
                  onClick={handlePrint}
                  className="px-3 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-all flex items-center gap-1.5 shadow-sm cursor-pointer"
                  title="Print / Save PDF"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Print</span>
                </button>

                <button
                  onClick={onClose}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors ml-1 cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Hidden Input For Dedicated Upload */}
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileUpload}
              accept=".pdf,image/*"
              className="hidden"
            />

            {/* Main Modal Layout: Left Sidebar Selector + Right Content Viewer */}
            <div className="flex-1 flex flex-col md:flex-row overflow-hidden min-h-[580px]">
              
              {/* Left Column: Dedicated Document Selector List */}
              <div className="w-full md:w-80 border-b md:border-b-0 md:border-r border-slate-800 bg-slate-950/70 p-3 space-y-1.5 overflow-y-auto max-h-48 md:max-h-[78vh] shrink-0">
                <div className="px-2.5 py-1 text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                  Select Specific CV / Certificate
                </div>

                {ALL_DOCUMENTS.map((doc) => {
                  const isSelected = doc.id === activeDoc.id;
                  const hasCustomFile = !!docFiles[doc.id];

                  return (
                    <button
                      key={doc.id}
                      onClick={() => setSelectedDocId(doc.id)}
                      className={`w-full text-left p-2.5 rounded-xl transition-all border text-xs flex flex-col gap-1 cursor-pointer ${
                        isSelected
                          ? 'bg-blue-600/15 border-blue-500/80 shadow-md text-white'
                          : 'bg-slate-900/40 border-slate-800/80 text-slate-300 hover:bg-slate-900/90'
                      }`}
                    >
                      <div className="flex items-center justify-between w-full">
                        <span className="text-[10px] font-mono text-blue-400 uppercase">
                          {doc.category}
                        </span>
                        {hasCustomFile ? (
                          <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                            <CheckCircle2 className="w-3 h-3" />
                            <span>Uploaded</span>
                          </span>
                        ) : (
                          <span className="text-[10px] font-mono text-slate-500">
                            No file
                          </span>
                        )}
                      </div>

                      <div className="font-semibold line-clamp-1 text-white">
                        {doc.title}
                      </div>

                      <div className="text-[11px] text-slate-400 truncate">
                        {doc.organization}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Right Column: Specific Document Viewer & Upload Area */}
              <div className="flex-1 bg-slate-950 p-4 sm:p-6 overflow-y-auto flex flex-col justify-start">
                
                {/* Specific Document Header Info */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 mb-4 border-b border-slate-800 gap-2">
                  <div>
                    <div className="flex items-center gap-2 text-xs text-blue-400 font-mono">
                      <span>{activeDoc.category}</span>
                      <span>&middot;</span>
                      <span>{activeDoc.organization}</span>
                      {activeDoc.date && (
                        <>
                          <span>&middot;</span>
                          <span className="text-slate-400">{activeDoc.date}</span>
                        </>
                      )}
                    </div>
                    <h3 className="text-lg font-bold text-white mt-0.5">{activeDoc.title}</h3>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => fileInputRef.current?.click()}
                      className="px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold flex items-center gap-1.5 shadow-sm cursor-pointer"
                    >
                      <Upload className="w-3.5 h-3.5" />
                      <span>{activeDocData ? 'Upload New Version' : 'Upload This Document'}</span>
                    </button>
                  </div>
                </div>

                {/* VIEW TAB 1: Uploaded Specific Document */}
                {activeViewTab === 'document' && (
                  <div className="flex-1 flex flex-col">
                    {activeDocData ? (
                      <div className="space-y-3 flex-1 flex flex-col">
                        <div className="flex items-center justify-between text-xs text-slate-400">
                          <span className="flex items-center gap-2 text-white font-medium">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                            <span>{activeDocData.name}</span>
                          </span>
                          <span className="font-mono text-[11px] text-slate-500">
                            Saved exclusively for this item
                          </span>
                        </div>

                        {activeDocData.type === 'pdf' ? (
                          <div className="w-full h-[62vh] rounded-xl overflow-hidden border border-slate-800 bg-slate-900 shadow-inner flex-1">
                            <iframe
                              src={`${activeDocData.file}#toolbar=1`}
                              title={`Viewer for ${activeDoc.title}`}
                              className="w-full h-full border-0"
                            />
                          </div>
                        ) : (
                          <div className="w-full max-h-[62vh] overflow-y-auto rounded-xl border border-slate-800 bg-slate-900 p-2 text-center flex-1">
                            <img
                              src={activeDocData.file}
                              alt={activeDoc.title}
                              className="max-w-full max-h-[60vh] mx-auto rounded-lg shadow-xl object-contain"
                            />
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="my-auto py-12 px-6 text-center space-y-4 rounded-2xl border-2 border-dashed border-slate-800 hover:border-blue-500/60 bg-slate-900/40 transition-colors">
                        <div className="w-16 h-16 rounded-2xl bg-blue-950/60 border border-blue-800/40 text-blue-400 flex items-center justify-center mx-auto shadow-inner">
                          <Upload className="w-8 h-8" />
                        </div>

                        <div className="space-y-1">
                          <h4 className="text-base font-bold text-white">
                            No file uploaded for &ldquo;{activeDoc.title}&rdquo;
                          </h4>
                          <p className="text-xs text-slate-400 max-w-md mx-auto leading-relaxed">
                            Upload the specific certificate or CV document for this item. Each document has its own independent storage and will not overwrite other items.
                          </p>
                        </div>

                        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                          <button
                            onClick={() => fileInputRef.current?.click()}
                            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 active:scale-95 text-white text-xs font-semibold flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20 transition-all cursor-pointer"
                          >
                            <Upload className="w-4 h-4" />
                            <span>Upload Specific File (.pdf / image)</span>
                          </button>

                          <button
                            onClick={() => setActiveViewTab('digital')}
                            className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium border border-slate-700 transition-colors"
                          >
                            View Digital Record Instead
                          </button>
                        </div>

                        <div className="pt-2 text-[11px] font-mono text-slate-500">
                          Supports PDF, PNG, JPEG &middot; Independent upload for each credential
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* VIEW TAB 2: Digital Record Format */}
                {activeViewTab === 'digital' && (
                  <div className="space-y-6 text-slate-200">
                    <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">
                          Official Verified Record
                        </span>
                        <span className="text-xs font-mono text-slate-400">{activeDoc.date}</span>
                      </div>

                      <h4 className="text-lg font-bold text-white">{activeDoc.title}</h4>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {activeDoc.description}
                      </p>

                      <div className="pt-2 flex items-center justify-between text-xs border-t border-slate-800 text-slate-400">
                        <span>Issued By: <strong className="text-white">{activeDoc.organization}</strong></span>
                        <span>Recipient: <strong className="text-white">{PERSONAL_INFO.name}</strong></span>
                      </div>
                    </div>

                    {/* If main CV is selected, show full digital CV summary */}
                    {activeDoc.id === 'main-cv' && (
                      <div className="space-y-4 pt-2">
                        <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                          <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block">
                            Academic Standing
                          </span>
                          <div className="text-sm font-bold text-white">
                            {PERSONAL_INFO.college} &mdash; {PERSONAL_INFO.degree}
                          </div>
                          <div className="text-xs font-mono text-emerald-400 font-bold">
                            CGPA: {PERSONAL_INFO.cgpa} / 10.0 (Top Distinction)
                          </div>
                        </div>

                        <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                          <span className="text-xs font-bold text-blue-400 uppercase tracking-wider block">
                            Core Focus
                          </span>
                          <p className="text-xs text-slate-300 leading-relaxed">
                            Practical Machine Learning (scikit-learn, Python, Pandas, Computer Vision) &amp; Web Development (React, JavaScript, Node.js).
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                )}

              </div>
            </div>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
