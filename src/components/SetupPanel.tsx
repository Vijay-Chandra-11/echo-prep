// // // // // // // // // import { useState } from "react";
// // // // // // // // // import { motion, AnimatePresence } from "framer-motion";
// // // // // // // // // import { Upload, X, Sparkles, Loader2 } from "lucide-react";

// // // // // // // // // const SetupPanel = () => {
// // // // // // // // //   const [days, setDays] = useState("");
// // // // // // // // //   const [weakTopics, setWeakTopics] = useState<string[]>([]);
// // // // // // // // //   const [topicInput, setTopicInput] = useState("");
// // // // // // // // //   const [isLoading, setIsLoading] = useState(false);
// // // // // // // // //   const [isDragOver, setIsDragOver] = useState(false);

// // // // // // // // //   const addTopic = () => {
// // // // // // // // //     if (topicInput.trim() && !weakTopics.includes(topicInput.trim())) {
// // // // // // // // //       setWeakTopics([...weakTopics, topicInput.trim()]);
// // // // // // // // //       setTopicInput("");
// // // // // // // // //     }
// // // // // // // // //   };

// // // // // // // // //   const removeTopic = (topic: string) => {
// // // // // // // // //     setWeakTopics(weakTopics.filter((t) => t !== topic));
// // // // // // // // //   };

// // // // // // // // //   const handleGenerate = () => {
// // // // // // // // //     setIsLoading(true);
// // // // // // // // //     setTimeout(() => setIsLoading(false), 3000);
// // // // // // // // //   };

// // // // // // // // //   return (
// // // // // // // // //     <section className="relative py-24 px-4" id="setup">
// // // // // // // // //       <div className="max-w-2xl mx-auto">
// // // // // // // // //         <motion.div
// // // // // // // // //           className="text-center mb-12"
// // // // // // // // //           initial={{ opacity: 0, y: 20 }}
// // // // // // // // //           whileInView={{ opacity: 1, y: 0 }}
// // // // // // // // //           viewport={{ once: true }}
// // // // // // // // //         >
// // // // // // // // //           <h2 className="text-3xl md:text-4xl font-display font-bold text-gradient mb-3">
// // // // // // // // //             Configure Your Study Plan
// // // // // // // // //           </h2>
// // // // // // // // //           <p className="text-muted-foreground">Tell us about your exam, we'll do the rest.</p>
// // // // // // // // //         </motion.div>

// // // // // // // // //         <motion.div
// // // // // // // // //           className="glass rounded-2xl p-8 gradient-border ambient-light"
// // // // // // // // //           initial={{ opacity: 0, y: 30 }}
// // // // // // // // //           whileInView={{ opacity: 1, y: 0 }}
// // // // // // // // //           viewport={{ once: true }}
// // // // // // // // //           transition={{ delay: 0.2 }}
// // // // // // // // //         >
// // // // // // // // //           {/* Days Input */}
// // // // // // // // //           <div className="mb-6">
// // // // // // // // //             <label className="block text-sm font-medium text-muted-foreground mb-2">
// // // // // // // // //               Days Remaining
// // // // // // // // //             </label>
// // // // // // // // //             <input
// // // // // // // // //               type="number"
// // // // // // // // //               value={days}
// // // // // // // // //               onChange={(e) => setDays(e.target.value)}
// // // // // // // // //               placeholder="e.g. 14"
// // // // // // // // //               className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/30 transition-all"
// // // // // // // // //             />
// // // // // // // // //           </div>

// // // // // // // // //           {/* Weak Topics */}
// // // // // // // // //           <div className="mb-6">
// // // // // // // // //             <label className="block text-sm font-medium text-muted-foreground mb-2">
// // // // // // // // //               Weak Topics
// // // // // // // // //             </label>
// // // // // // // // //             <div className="flex gap-2 mb-2">
// // // // // // // // //               <input
// // // // // // // // //                 value={topicInput}
// // // // // // // // //                 onChange={(e) => setTopicInput(e.target.value)}
// // // // // // // // //                 onKeyDown={(e) => e.key === "Enter" && addTopic()}
// // // // // // // // //                 placeholder="Type a topic and press Enter"
// // // // // // // // //                 className="flex-1 px-4 py-3 rounded-xl bg-secondary/50 border border-border text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/30 transition-all"
// // // // // // // // //               />
// // // // // // // // //             </div>
// // // // // // // // //             <div className="flex flex-wrap gap-2">
// // // // // // // // //               <AnimatePresence>
// // // // // // // // //                 {weakTopics.map((topic) => (
// // // // // // // // //                   <motion.span
// // // // // // // // //                     key={topic}
// // // // // // // // //                     initial={{ opacity: 0, scale: 0.8 }}
// // // // // // // // //                     animate={{ opacity: 1, scale: 1 }}
// // // // // // // // //                     exit={{ opacity: 0, scale: 0.8 }}
// // // // // // // // //                     className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/20 text-primary text-sm font-medium border border-primary/20"
// // // // // // // // //                   >
// // // // // // // // //                     {topic}
// // // // // // // // //                     <button onClick={() => removeTopic(topic)} className="hover:text-primary-foreground transition-colors">
// // // // // // // // //                       <X className="w-3.5 h-3.5" />
// // // // // // // // //                     </button>
// // // // // // // // //                   </motion.span>
// // // // // // // // //                 ))}
// // // // // // // // //               </AnimatePresence>
// // // // // // // // //             </div>
// // // // // // // // //           </div>

// // // // // // // // //           {/* Drag & Drop */}
// // // // // // // // //           <motion.div
// // // // // // // // //             className={`mb-8 p-8 rounded-xl border-2 border-dashed transition-all text-center cursor-pointer ${
// // // // // // // // //               isDragOver
// // // // // // // // //                 ? "border-primary bg-primary/5 glow-purple"
// // // // // // // // //                 : "border-border/50 hover:border-primary/30"
// // // // // // // // //             }`}
// // // // // // // // //             onDragOver={(e) => { e.preventDefault(); setIsDragOver(true); }}
// // // // // // // // //             onDragLeave={() => setIsDragOver(false)}
// // // // // // // // //             onDrop={(e) => { e.preventDefault(); setIsDragOver(false); }}
// // // // // // // // //             whileHover={{ scale: 1.01 }}
// // // // // // // // //           >
// // // // // // // // //             <Upload className="w-10 h-10 mx-auto mb-3 text-muted-foreground" />
// // // // // // // // //             <p className="text-muted-foreground font-medium">Drop Syllabus PDF Here</p>
// // // // // // // // //             <p className="text-muted-foreground/50 text-sm mt-1">or click to browse</p>
// // // // // // // // //           </motion.div>

// // // // // // // // //           {/* Generate Button */}
// // // // // // // // //           <motion.button
// // // // // // // // //             onClick={handleGenerate}
// // // // // // // // //             disabled={isLoading}
// // // // // // // // //             className="w-full relative py-4 rounded-xl font-display font-semibold text-primary-foreground overflow-hidden gradient-border"
// // // // // // // // //             whileHover={!isLoading ? { scale: 1.02 } : {}}
// // // // // // // // //             whileTap={!isLoading ? { scale: 0.98 } : {}}
// // // // // // // // //           >
// // // // // // // // //             <span className="absolute inset-[1px] rounded-xl bg-gradient-to-r from-glow-purple to-glow-cyan z-0" />
// // // // // // // // //             <span className="relative z-10 flex items-center justify-center gap-2">
// // // // // // // // //               {isLoading ? (
// // // // // // // // //                 <>
// // // // // // // // //                   <Loader2 className="w-5 h-5 animate-spin" />
// // // // // // // // //                   Generating Your Plan...
// // // // // // // // //                 </>
// // // // // // // // //               ) : (
// // // // // // // // //                 <>
// // // // // // // // //                   <Sparkles className="w-5 h-5" />
// // // // // // // // //                   Generate Study Plan
// // // // // // // // //                 </>
// // // // // // // // //               )}
// // // // // // // // //             </span>
// // // // // // // // //           </motion.button>
// // // // // // // // //         </motion.div>
// // // // // // // // //       </div>
// // // // // // // // //     </section>
// // // // // // // // //   );
// // // // // // // // // };

// // // // // // // // // export default SetupPanel;



// // // // // // // // import { useState } from "react";
// // // // // // // // import { motion, AnimatePresence } from "framer-motion";
// // // // // // // // import { Upload, X, FileText, Loader2, FileQuestion } from "lucide-react";

// // // // // // // // const SetupPanel = ({ onGenerate }: { onGenerate: () => void }) => {
// // // // // // // //   const [days, setDays] = useState("");
// // // // // // // //   const [isLoading, setIsLoading] = useState(false);

// // // // // // // //   const handleGenerate = () => {
// // // // // // // //     setIsLoading(true);
// // // // // // // //     // Simulate AI parsing the PDFs and generating 30 questions
// // // // // // // //     setTimeout(() => {
// // // // // // // //       setIsLoading(false);
// // // // // // // //       onGenerate();
// // // // // // // //     }, 2500);
// // // // // // // //   };

// // // // // // // //   return (
// // // // // // // //     <section className="relative min-h-screen flex items-center justify-center py-24 px-4">
// // // // // // // //       <div className="max-w-4xl w-full mx-auto">
// // // // // // // //         <motion.div className="text-center mb-12">
// // // // // // // //           <h2 className="text-3xl md:text-4xl font-display font-bold text-gradient mb-3">
// // // // // // // //             Configure Your Exam Profile
// // // // // // // //           </h2>
// // // // // // // //           <p className="text-muted-foreground">Upload your materials to generate your personalized mock test.</p>
// // // // // // // //         </motion.div>

// // // // // // // //         <motion.div className="glass rounded-2xl p-8 gradient-border ambient-light">
          
// // // // // // // //           <div className="mb-8">
// // // // // // // //             <label className="block text-sm font-medium text-muted-foreground mb-2">Days Until Exam</label>
// // // // // // // //             <input
// // // // // // // //               type="number"
// // // // // // // //               value={days}
// // // // // // // //               onChange={(e) => setDays(e.target.value)}
// // // // // // // //               placeholder="e.g. 14"
// // // // // // // //               className="w-full md:w-1/3 px-4 py-3 rounded-xl bg-secondary/50 border border-border text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50"
// // // // // // // //             />
// // // // // // // //           </div>

// // // // // // // //           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
// // // // // // // //             {/* Syllabus Upload */}
// // // // // // // //             <div className="p-8 rounded-xl border-2 border-dashed border-border/50 hover:border-primary/30 text-center cursor-pointer transition-colors hover:bg-primary/5">
// // // // // // // //               <FileText className="w-10 h-10 mx-auto mb-3 text-primary/70" />
// // // // // // // //               <p className="text-foreground font-medium">Upload Syllabus</p>
// // // // // // // //               <p className="text-muted-foreground/50 text-sm mt-1">PDF or DOCX</p>
// // // // // // // //             </div>

// // // // // // // //             {/* Previous Papers Upload */}
// // // // // // // //             <div className="p-8 rounded-xl border-2 border-dashed border-border/50 hover:border-accent/30 text-center cursor-pointer transition-colors hover:bg-accent/5">
// // // // // // // //               <FileQuestion className="w-10 h-10 mx-auto mb-3 text-accent/70" />
// // // // // // // //               <p className="text-foreground font-medium">Upload Previous Papers</p>
// // // // // // // //               <p className="text-muted-foreground/50 text-sm mt-1">To analyze question patterns</p>
// // // // // // // //             </div>
// // // // // // // //           </div>

// // // // // // // //           {/* Generate Button */}
// // // // // // // //           <motion.button
// // // // // // // //             onClick={handleGenerate}
// // // // // // // //             disabled={isLoading}
// // // // // // // //             className="w-full relative py-4 rounded-xl font-display font-semibold text-primary-foreground overflow-hidden gradient-border flex items-center justify-center gap-2"
// // // // // // // //           >
// // // // // // // //             <span className="absolute inset-[1px] rounded-xl bg-gradient-to-r from-glow-purple to-glow-cyan z-0" />
// // // // // // // //             <span className="relative z-10 flex items-center justify-center gap-2">
// // // // // // // //               {isLoading ? <><Loader2 className="w-5 h-5 animate-spin" /> Analyzing Documents...</> : "Generate Baseline Mock Test"}
// // // // // // // //             </span>
// // // // // // // //           </motion.button>
// // // // // // // //         </motion.div>
// // // // // // // //       </div>
// // // // // // // //     </section>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // export default SetupPanel;



// // // // // // // import { useState, useRef } from "react";
// // // // // // // import { motion } from "framer-motion";
// // // // // // // import { FileText, Loader2, FileQuestion, CheckCircle2 } from "lucide-react";

// // // // // // // const SetupPanel = ({ onGenerate }: { onGenerate: () => void }) => {
// // // // // // //   const [isLoading, setIsLoading] = useState(false);
// // // // // // //   const [syllabusFile, setSyllabusFile] = useState<File | null>(null);
// // // // // // //   const [papersFile, setPapersFile] = useState<File | null>(null);
// // // // // // //   const [dragActive, setDragActive] = useState<"syllabus" | "papers" | null>(null);

// // // // // // //   const syllabusInputRef = useRef<HTMLInputElement>(null);
// // // // // // //   const papersInputRef = useRef<HTMLInputElement>(null);

// // // // // // //   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, type: "syllabus" | "papers") => {
// // // // // // //     if (e.target.files && e.target.files[0]) {
// // // // // // //       if (type === "syllabus") setSyllabusFile(e.target.files[0]);
// // // // // // //       if (type === "papers") setPapersFile(e.target.files[0]);
// // // // // // //     }
// // // // // // //   };

// // // // // // //   const handleDrop = (e: React.DragEvent, type: "syllabus" | "papers") => {
// // // // // // //     e.preventDefault();
// // // // // // //     setDragActive(null);
// // // // // // //     if (e.dataTransfer.files && e.dataTransfer.files[0]) {
// // // // // // //       if (type === "syllabus") setSyllabusFile(e.dataTransfer.files[0]);
// // // // // // //       if (type === "papers") setPapersFile(e.dataTransfer.files[0]);
// // // // // // //     }
// // // // // // //   };

// // // // // // //   const handleDragOver = (e: React.DragEvent, type: "syllabus" | "papers") => {
// // // // // // //     e.preventDefault();
// // // // // // //     setDragActive(type);
// // // // // // //   };

// // // // // // //   const handleGenerate = () => {
// // // // // // //     setIsLoading(true);
// // // // // // //     // Simulate AI parsing the PDFs and generating 30 questions
// // // // // // //     setTimeout(() => {
// // // // // // //       setIsLoading(false);
// // // // // // //       onGenerate();
// // // // // // //     }, 2500);
// // // // // // //   };

// // // // // // //   // Only allow generation if both files are uploaded
// // // // // // //   const isReady = syllabusFile !== null && papersFile !== null;

// // // // // // //   return (
// // // // // // //     <section className="relative min-h-screen flex items-center justify-center py-24 px-4">
// // // // // // //       <div className="max-w-4xl w-full mx-auto">
// // // // // // //         <motion.div className="text-center mb-12">
// // // // // // //           <h2 className="text-3xl md:text-4xl font-display font-bold text-gradient mb-3">
// // // // // // //             Configure Your Exam Profile
// // // // // // //           </h2>
// // // // // // //           <p className="text-muted-foreground">Upload your materials to generate your personalized mock test.</p>
// // // // // // //         </motion.div>

// // // // // // //         <motion.div className="glass rounded-2xl p-8 gradient-border ambient-light">
          
// // // // // // //           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
// // // // // // //             {/* Syllabus Upload */}
// // // // // // //             <div 
// // // // // // //               onClick={() => syllabusInputRef.current?.click()}
// // // // // // //               onDragOver={(e) => handleDragOver(e, "syllabus")}
// // // // // // //               onDragLeave={() => setDragActive(null)}
// // // // // // //               onDrop={(e) => handleDrop(e, "syllabus")}
// // // // // // //               className={`p-8 rounded-xl border-2 border-dashed text-center cursor-pointer transition-all ${
// // // // // // //                 dragActive === "syllabus" ? "border-primary bg-primary/10 scale-[1.02]" : 
// // // // // // //                 syllabusFile ? "border-green-500/50 bg-green-500/5" : "border-border/50 hover:border-primary/30 hover:bg-primary/5"
// // // // // // //               }`}
// // // // // // //             >
// // // // // // //               <input 
// // // // // // //                 type="file" 
// // // // // // //                 accept=".pdf,.docx,.txt" 
// // // // // // //                 className="hidden" 
// // // // // // //                 ref={syllabusInputRef} 
// // // // // // //                 onChange={(e) => handleFileChange(e, "syllabus")} 
// // // // // // //               />
              
// // // // // // //               {syllabusFile ? (
// // // // // // //                 <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }}>
// // // // // // //                   <CheckCircle2 className="w-10 h-10 mx-auto mb-3 text-green-500" />
// // // // // // //                   <p className="text-foreground font-medium truncate px-4">{syllabusFile.name}</p>
// // // // // // //                   <p className="text-green-500/70 text-sm mt-1">Ready for analysis</p>
// // // // // // //                 </motion.div>
// // // // // // //               ) : (
// // // // // // //                 <>
// // // // // // //                   <FileText className="w-10 h-10 mx-auto mb-3 text-primary/70" />
// // // // // // //                   <p className="text-foreground font-medium">Upload Syllabus</p>
// // // // // // //                   <p className="text-muted-foreground/50 text-sm mt-1">Drag & drop or click</p>
// // // // // // //                 </>
// // // // // // //               )}
// // // // // // //             </div>

// // // // // // //             {/* Previous Papers Upload */}
// // // // // // //             <div 
// // // // // // //               onClick={() => papersInputRef.current?.click()}
// // // // // // //               onDragOver={(e) => handleDragOver(e, "papers")}
// // // // // // //               onDragLeave={() => setDragActive(null)}
// // // // // // //               onDrop={(e) => handleDrop(e, "papers")}
// // // // // // //               className={`p-8 rounded-xl border-2 border-dashed text-center cursor-pointer transition-all ${
// // // // // // //                 dragActive === "papers" ? "border-accent bg-accent/10 scale-[1.02]" : 
// // // // // // //                 papersFile ? "border-green-500/50 bg-green-500/5" : "border-border/50 hover:border-accent/30 hover:bg-accent/5"
// // // // // // //               }`}
// // // // // // //             >
// // // // // // //               <input 
// // // // // // //                 type="file" 
// // // // // // //                 accept=".pdf,.docx,.txt" 
// // // // // // //                 className="hidden" 
// // // // // // //                 ref={papersInputRef} 
// // // // // // //                 onChange={(e) => handleFileChange(e, "papers")} 
// // // // // // //               />

// // // // // // //               {papersFile ? (
// // // // // // //                 <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }}>
// // // // // // //                   <CheckCircle2 className="w-10 h-10 mx-auto mb-3 text-green-500" />
// // // // // // //                   <p className="text-foreground font-medium truncate px-4">{papersFile.name}</p>
// // // // // // //                   <p className="text-green-500/70 text-sm mt-1">Ready for analysis</p>
// // // // // // //                 </motion.div>
// // // // // // //               ) : (
// // // // // // //                 <>
// // // // // // //                   <FileQuestion className="w-10 h-10 mx-auto mb-3 text-accent/70" />
// // // // // // //                   <p className="text-foreground font-medium">Upload Previous Papers</p>
// // // // // // //                   <p className="text-muted-foreground/50 text-sm mt-1">Drag & drop or click</p>
// // // // // // //                 </>
// // // // // // //               )}
// // // // // // //             </div>
// // // // // // //           </div>

// // // // // // //           {/* Generate Button */}
// // // // // // //           <motion.button
// // // // // // //             onClick={handleGenerate}
// // // // // // //             disabled={isLoading || !isReady}
// // // // // // //             className="w-full relative py-4 rounded-xl font-display font-semibold text-primary-foreground overflow-hidden gradient-border flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
// // // // // // //           >
// // // // // // //             <span className="absolute inset-[1px] rounded-xl bg-gradient-to-r from-glow-purple to-glow-cyan z-0" />
// // // // // // //             <span className="relative z-10 flex items-center justify-center gap-2">
// // // // // // //               {isLoading ? (
// // // // // // //                 <><Loader2 className="w-5 h-5 animate-spin" /> Analyzing Documents...</>
// // // // // // //               ) : !isReady ? (
// // // // // // //                 "Upload files to continue"
// // // // // // //               ) : (
// // // // // // //                 "Generate Baseline Mock Test"
// // // // // // //               )}
// // // // // // //             </span>
// // // // // // //           </motion.button>
// // // // // // //         </motion.div>
// // // // // // //       </div>
// // // // // // //     </section>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default SetupPanel;





// // // // // // import { useState, useRef } from "react";
// // // // // // import { motion } from "framer-motion";
// // // // // // import { FileText, Loader2, FileQuestion, CheckCircle2 } from "lucide-react";
// // // // // // import { generateMockTest, Question } from "@/lib/ai";

// // // // // // type SetupPanelProps = {
// // // // // //   onGenerate: (questions: Question[]) => void;
// // // // // // };

// // // // // // const SetupPanel = ({ onGenerate }: SetupPanelProps) => {
// // // // // //   const [isLoading, setIsLoading] = useState(false);
// // // // // //   const [syllabusFile, setSyllabusFile] = useState<File | null>(null);
// // // // // //   const [papersFile, setPapersFile] = useState<File | null>(null);
// // // // // //   const [dragActive, setDragActive] = useState<"syllabus" | "papers" | null>(null);

// // // // // //   const syllabusInputRef = useRef<HTMLInputElement>(null);
// // // // // //   const papersInputRef = useRef<HTMLInputElement>(null);

// // // // // //   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, type: "syllabus" | "papers") => {
// // // // // //     if (e.target.files && e.target.files[0]) {
// // // // // //       if (type === "syllabus") setSyllabusFile(e.target.files[0]);
// // // // // //       if (type === "papers") setPapersFile(e.target.files[0]);
// // // // // //     }
// // // // // //   };

// // // // // //   const handleDrop = (e: React.DragEvent, type: "syllabus" | "papers") => {
// // // // // //     e.preventDefault();
// // // // // //     setDragActive(null);
// // // // // //     if (e.dataTransfer.files && e.dataTransfer.files[0]) {
// // // // // //       if (type === "syllabus") setSyllabusFile(e.dataTransfer.files[0]);
// // // // // //       if (type === "papers") setPapersFile(e.dataTransfer.files[0]);
// // // // // //     }
// // // // // //   };

// // // // // //   const handleDragOver = (e: React.DragEvent, type: "syllabus" | "papers") => {
// // // // // //     e.preventDefault();
// // // // // //     setDragActive(type);
// // // // // //   };

// // // // // //   const handleGenerate = async () => {
// // // // // //     setIsLoading(true);
    
// // // // // //     try {
// // // // // //       // Hackathon trick: We read the file if it's a .txt, otherwise we use a fallback string 
// // // // // //       // so the Gemini API doesn't crash if it can't read a complex PDF during the demo.
// // // // // //       let syllabusContent = "Data Structures, Algorithms, Binary Trees, Graphs, Dynamic Programming.";
      
// // // // // //       if (syllabusFile && syllabusFile.type === "text/plain") {
// // // // // //         const text = await syllabusFile.text();
// // // // // //         syllabusContent = text.substring(0, 1500); // Limit length for speed
// // // // // //       }

// // // // // //       // Call the Gemini API!
// // // // // //       const questions = await generateMockTest(syllabusContent);
// // // // // //       setIsLoading(false);
// // // // // //       onGenerate(questions); // Pass the AI questions to the next screen

// // // // // //     } catch (error) {
// // // // // //       console.error("API Error:", error);
// // // // // //       setIsLoading(false);
// // // // // //       // Failsafe for the demo if Wi-Fi drops!
// // // // // //       onGenerate([{
// // // // // //         id: 1,
// // // // // //         text: "What is the worst-case time complexity of finding an element in a Binary Search Tree?",
// // // // // //         options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
// // // // // //         correctAnswerIndex: 2,
// // // // // //         topic: "Trees"
// // // // // //       }]);
// // // // // //     }
// // // // // //   };

// // // // // //   const isReady = syllabusFile !== null && papersFile !== null;

// // // // // //   return (
// // // // // //     <section className="relative min-h-screen flex items-center justify-center py-24 px-4">
// // // // // //       <div className="max-w-4xl w-full mx-auto">
// // // // // //         <motion.div className="text-center mb-12">
// // // // // //           <h2 className="text-3xl md:text-4xl font-display font-bold text-gradient mb-3">
// // // // // //             Configure Your Exam Profile
// // // // // //           </h2>
// // // // // //           <p className="text-muted-foreground">Upload your materials to generate your personalized mock test.</p>
// // // // // //         </motion.div>

// // // // // //         <motion.div className="glass rounded-2xl p-8 gradient-border ambient-light">
          
// // // // // //           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
// // // // // //             {/* Syllabus Upload */}
// // // // // //             <div 
// // // // // //               onClick={() => syllabusInputRef.current?.click()}
// // // // // //               onDragOver={(e) => handleDragOver(e, "syllabus")}
// // // // // //               onDragLeave={() => setDragActive(null)}
// // // // // //               onDrop={(e) => handleDrop(e, "syllabus")}
// // // // // //               className={`p-8 rounded-xl border-2 border-dashed text-center cursor-pointer transition-all ${
// // // // // //                 dragActive === "syllabus" ? "border-primary bg-primary/10 scale-[1.02]" : 
// // // // // //                 syllabusFile ? "border-green-500/50 bg-green-500/5" : "border-border/50 hover:border-primary/30 hover:bg-primary/5"
// // // // // //               }`}
// // // // // //             >
// // // // // //               <input type="file" accept=".pdf,.docx,.txt" className="hidden" ref={syllabusInputRef} onChange={(e) => handleFileChange(e, "syllabus")} />
// // // // // //               {syllabusFile ? (
// // // // // //                 <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }}>
// // // // // //                   <CheckCircle2 className="w-10 h-10 mx-auto mb-3 text-green-500" />
// // // // // //                   <p className="text-foreground font-medium truncate px-4">{syllabusFile.name}</p>
// // // // // //                 </motion.div>
// // // // // //               ) : (
// // // // // //                 <>
// // // // // //                   <FileText className="w-10 h-10 mx-auto mb-3 text-primary/70" />
// // // // // //                   <p className="text-foreground font-medium">Upload Syllabus</p>
// // // // // //                 </>
// // // // // //               )}
// // // // // //             </div>

// // // // // //             {/* Previous Papers Upload */}
// // // // // //             <div 
// // // // // //               onClick={() => papersInputRef.current?.click()}
// // // // // //               onDragOver={(e) => handleDragOver(e, "papers")}
// // // // // //               onDragLeave={() => setDragActive(null)}
// // // // // //               onDrop={(e) => handleDrop(e, "papers")}
// // // // // //               className={`p-8 rounded-xl border-2 border-dashed text-center cursor-pointer transition-all ${
// // // // // //                 dragActive === "papers" ? "border-accent bg-accent/10 scale-[1.02]" : 
// // // // // //                 papersFile ? "border-green-500/50 bg-green-500/5" : "border-border/50 hover:border-accent/30 hover:bg-accent/5"
// // // // // //               }`}
// // // // // //             >
// // // // // //               <input type="file" accept=".pdf,.docx,.txt" className="hidden" ref={papersInputRef} onChange={(e) => handleFileChange(e, "papers")} />
// // // // // //               {papersFile ? (
// // // // // //                 <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }}>
// // // // // //                   <CheckCircle2 className="w-10 h-10 mx-auto mb-3 text-green-500" />
// // // // // //                   <p className="text-foreground font-medium truncate px-4">{papersFile.name}</p>
// // // // // //                 </motion.div>
// // // // // //               ) : (
// // // // // //                 <>
// // // // // //                   <FileQuestion className="w-10 h-10 mx-auto mb-3 text-accent/70" />
// // // // // //                   <p className="text-foreground font-medium">Upload Previous Papers</p>
// // // // // //                 </>
// // // // // //               )}
// // // // // //             </div>
// // // // // //           </div>

// // // // // //           <motion.button
// // // // // //             onClick={handleGenerate}
// // // // // //             disabled={isLoading || !isReady}
// // // // // //             className="w-full relative py-4 rounded-xl font-display font-semibold text-primary-foreground overflow-hidden gradient-border flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
// // // // // //           >
// // // // // //             <span className="absolute inset-[1px] rounded-xl bg-gradient-to-r from-glow-purple to-glow-cyan z-0" />
// // // // // //             <span className="relative z-10 flex items-center justify-center gap-2">
// // // // // //               {isLoading ? <><Loader2 className="w-5 h-5 animate-spin" /> Generating AI Test...</> : "Generate Baseline Mock Test"}
// // // // // //             </span>
// // // // // //           </motion.button>
// // // // // //         </motion.div>
// // // // // //       </div>
// // // // // //     </section>
// // // // // //   );
// // // // // // };

// // // // // // export default SetupPanel;



// // // // // import { useState, useRef } from "react";
// // // // // import { motion } from "framer-motion";
// // // // // import { FileText, Loader2, FileQuestion, CheckCircle2 } from "lucide-react";
// // // // // import { generateMockTest, Question } from "@/lib/ai";

// // // // // type SetupPanelProps = {
// // // // //   onGenerate: (questions: Question[]) => void;
// // // // // };

// // // // // const SetupPanel = ({ onGenerate }: SetupPanelProps) => {
// // // // //   const [isLoading, setIsLoading] = useState(false);
// // // // //   const [errorMsg, setErrorMsg] = useState(""); // Added to show you API errors!
// // // // //   const [syllabusFile, setSyllabusFile] = useState<File | null>(null);
// // // // //   const [papersFile, setPapersFile] = useState<File | null>(null);
// // // // //   const [dragActive, setDragActive] = useState<"syllabus" | "papers" | null>(null);

// // // // //   const syllabusInputRef = useRef<HTMLInputElement>(null);
// // // // //   const papersInputRef = useRef<HTMLInputElement>(null);

// // // // //   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, type: "syllabus" | "papers") => {
// // // // //     if (e.target.files && e.target.files[0]) {
// // // // //       if (type === "syllabus") setSyllabusFile(e.target.files[0]);
// // // // //       if (type === "papers") setPapersFile(e.target.files[0]);
// // // // //     }
// // // // //   };

// // // // //   const handleDrop = (e: React.DragEvent, type: "syllabus" | "papers") => {
// // // // //     e.preventDefault();
// // // // //     setDragActive(null);
// // // // //     if (e.dataTransfer.files && e.dataTransfer.files[0]) {
// // // // //       if (type === "syllabus") setSyllabusFile(e.dataTransfer.files[0]);
// // // // //       if (type === "papers") setPapersFile(e.dataTransfer.files[0]);
// // // // //     }
// // // // //   };

// // // // //   const handleDragOver = (e: React.DragEvent, type: "syllabus" | "papers") => {
// // // // //     e.preventDefault();
// // // // //     setDragActive(type);
// // // // //   };

// // // // //   const handleGenerate = async () => {
// // // // //     setIsLoading(true);
// // // // //     setErrorMsg("");
    
// // // // //     try {
// // // // //       let syllabusContent = "Basic math syllabus.";
// // // // //       let papersContent = "Basic math questions.";
      
// // // // //       // Read the text from the files! (Make sure you upload .txt files for the demo)
// // // // //       if (syllabusFile) {
// // // // //         syllabusContent = await syllabusFile.text();
// // // // //       }
// // // // //       if (papersFile) {
// // // // //         papersContent = await papersFile.text();
// // // // //       }

// // // // //       // Send BOTH to Gemini
// // // // //       const questions = await generateMockTest(syllabusContent, papersContent);
// // // // //       setIsLoading(false);
// // // // //       onGenerate(questions); 

// // // // //     } catch (error: any) {
// // // // //       console.error("API Error:", error);
// // // // //       setIsLoading(false);
// // // // //       // Show the actual error on screen so we know why it failed!
// // // // //       setErrorMsg(error.message || "Failed to connect to Gemini API. Check your API key.");
// // // // //     }
// // // // //   };

// // // // //   const isReady = syllabusFile !== null && papersFile !== null;

// // // // //   return (
// // // // //     <section className="relative min-h-screen flex items-center justify-center py-24 px-4">
// // // // //       <div className="max-w-4xl w-full mx-auto">
// // // // //         <motion.div className="text-center mb-12">
// // // // //           <h2 className="text-3xl md:text-4xl font-display font-bold text-gradient mb-3">
// // // // //             Configure Your Exam Profile
// // // // //           </h2>
// // // // //           <p className="text-muted-foreground">Upload your materials to generate your personalized mock test.</p>
// // // // //         </motion.div>

// // // // //         <motion.div className="glass rounded-2xl p-8 gradient-border ambient-light">
          
// // // // //           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
// // // // //             {/* Syllabus Upload */}
// // // // //             <div 
// // // // //               onClick={() => syllabusInputRef.current?.click()}
// // // // //               onDragOver={(e) => handleDragOver(e, "syllabus")}
// // // // //               onDragLeave={() => setDragActive(null)}
// // // // //               onDrop={(e) => handleDrop(e, "syllabus")}
// // // // //               className={`p-8 rounded-xl border-2 border-dashed text-center cursor-pointer transition-all ${
// // // // //                 dragActive === "syllabus" ? "border-primary bg-primary/10 scale-[1.02]" : 
// // // // //                 syllabusFile ? "border-green-500/50 bg-green-500/5" : "border-border/50 hover:border-primary/30 hover:bg-primary/5"
// // // // //               }`}
// // // // //             >
// // // // //               <input type="file" accept=".txt" className="hidden" ref={syllabusInputRef} onChange={(e) => handleFileChange(e, "syllabus")} />
// // // // //               {syllabusFile ? (
// // // // //                 <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }}>
// // // // //                   <CheckCircle2 className="w-10 h-10 mx-auto mb-3 text-green-500" />
// // // // //                   <p className="text-foreground font-medium truncate px-4">{syllabusFile.name}</p>
// // // // //                 </motion.div>
// // // // //               ) : (
// // // // //                 <>
// // // // //                   <FileText className="w-10 h-10 mx-auto mb-3 text-primary/70" />
// // // // //                   <p className="text-foreground font-medium">Upload Syllabus (.txt)</p>
// // // // //                 </>
// // // // //               )}
// // // // //             </div>

// // // // //             {/* Previous Papers Upload */}
// // // // //             <div 
// // // // //               onClick={() => papersInputRef.current?.click()}
// // // // //               onDragOver={(e) => handleDragOver(e, "papers")}
// // // // //               onDragLeave={() => setDragActive(null)}
// // // // //               onDrop={(e) => handleDrop(e, "papers")}
// // // // //               className={`p-8 rounded-xl border-2 border-dashed text-center cursor-pointer transition-all ${
// // // // //                 dragActive === "papers" ? "border-accent bg-accent/10 scale-[1.02]" : 
// // // // //                 papersFile ? "border-green-500/50 bg-green-500/5" : "border-border/50 hover:border-accent/30 hover:bg-accent/5"
// // // // //               }`}
// // // // //             >
// // // // //               <input type="file" accept=".txt" className="hidden" ref={papersInputRef} onChange={(e) => handleFileChange(e, "papers")} />
// // // // //               {papersFile ? (
// // // // //                 <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }}>
// // // // //                   <CheckCircle2 className="w-10 h-10 mx-auto mb-3 text-green-500" />
// // // // //                   <p className="text-foreground font-medium truncate px-4">{papersFile.name}</p>
// // // // //                 </motion.div>
// // // // //               ) : (
// // // // //                 <>
// // // // //                   <FileQuestion className="w-10 h-10 mx-auto mb-3 text-accent/70" />
// // // // //                   <p className="text-foreground font-medium">Upload Previous Papers (.txt)</p>
// // // // //                 </>
// // // // //               )}
// // // // //             </div>
// // // // //           </div>

// // // // //           {errorMsg && (
// // // // //             <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-500 text-sm text-center">
// // // // //               {errorMsg}
// // // // //             </div>
// // // // //           )}

// // // // //           <motion.button
// // // // //             onClick={handleGenerate}
// // // // //             disabled={isLoading || !isReady}
// // // // //             className="w-full relative py-4 rounded-xl font-display font-semibold text-primary-foreground overflow-hidden gradient-border flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
// // // // //           >
// // // // //             <span className="absolute inset-[1px] rounded-xl bg-gradient-to-r from-glow-purple to-glow-cyan z-0" />
// // // // //             <span className="relative z-10 flex items-center justify-center gap-2">
// // // // //               {isLoading ? <><Loader2 className="w-5 h-5 animate-spin" /> Analyzing Documents & Generating Test...</> : "Generate  Mock Test"}
// // // // //             </span>
// // // // //           </motion.button>
// // // // //         </motion.div>
// // // // //       </div>
// // // // //     </section>
// // // // //   );
// // // // // };

// // // // // export default SetupPanel;




// // // // import { useState, useRef } from "react";
// // // // import { motion } from "framer-motion";
// // // // import { FileText, Loader2, FileQuestion, CheckCircle2 } from "lucide-react";
// // // // import { generateMockTest, Question } from "@/lib/ai";

// // // // type SetupPanelProps = {
// // // //   onGenerate: (questions: Question[]) => void;
// // // // };

// // // // // Helper function to convert a File to a Base64 string for the API
// // // // const fileToBase64 = (file: File): Promise<string> => {
// // // //   return new Promise((resolve, reject) => {
// // // //     const reader = new FileReader();
// // // //     reader.readAsDataURL(file);
// // // //     reader.onload = () => {
// // // //       // Remove the "data:application/pdf;base64," prefix that FileReader adds
// // // //       const base64String = reader.result?.toString().split(',')[1] || "";
// // // //       resolve(base64String);
// // // //     };
// // // //     reader.onerror = (error) => reject(error);
// // // //   });
// // // // };

// // // // const SetupPanel = ({ onGenerate }: SetupPanelProps) => {
// // // //   const [isLoading, setIsLoading] = useState(false);
// // // //   const [errorMsg, setErrorMsg] = useState(""); 
// // // //   const [syllabusFile, setSyllabusFile] = useState<File | null>(null);
// // // //   const [papersFile, setPapersFile] = useState<File | null>(null);
// // // //   const [dragActive, setDragActive] = useState<"syllabus" | "papers" | null>(null);

// // // //   const syllabusInputRef = useRef<HTMLInputElement>(null);
// // // //   const papersInputRef = useRef<HTMLInputElement>(null);

// // // //   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, type: "syllabus" | "papers") => {
// // // //     if (e.target.files && e.target.files[0]) {
// // // //       if (type === "syllabus") setSyllabusFile(e.target.files[0]);
// // // //       if (type === "papers") setPapersFile(e.target.files[0]);
// // // //     }
// // // //   };

// // // //   const handleDrop = (e: React.DragEvent, type: "syllabus" | "papers") => {
// // // //     e.preventDefault();
// // // //     setDragActive(null);
// // // //     if (e.dataTransfer.files && e.dataTransfer.files[0]) {
// // // //       if (type === "syllabus") setSyllabusFile(e.dataTransfer.files[0]);
// // // //       if (type === "papers") setPapersFile(e.dataTransfer.files[0]);
// // // //     }
// // // //   };

// // // //   const handleDragOver = (e: React.DragEvent, type: "syllabus" | "papers") => {
// // // //     e.preventDefault();
// // // //     setDragActive(type);
// // // //   };

// // // //   const handleGenerate = async () => {
// // // //     setIsLoading(true);
// // // //     setErrorMsg("");
    
// // // //     try {
// // // //       let syllabusBase64 = "";
// // // //       let papersBase64 = "";
      
// // // //       // Convert PDFs to Base64 strings
// // // //       if (syllabusFile) {
// // // //         syllabusBase64 = await fileToBase64(syllabusFile);
// // // //       }
// // // //       if (papersFile) {
// // // //         papersBase64 = await fileToBase64(papersFile);
// // // //       }

// // // //       // Send the PDFs to Gemini!
// // // //       const questions = await generateMockTest(syllabusBase64, papersBase64);
// // // //       setIsLoading(false);
// // // //       onGenerate(questions); 

// // // //     } catch (error: any) {
// // // //       console.error("API Error:", error);
// // // //       setIsLoading(false);
// // // //       setErrorMsg(error.message || "Failed to analyze PDFs. Check your API key or ensure PDFs aren't password protected.");
// // // //     }
// // // //   };

// // // //   const isReady = syllabusFile !== null && papersFile !== null;

// // // //   return (
// // // //     <section className="relative min-h-screen flex items-center justify-center py-24 px-4">
// // // //       <div className="max-w-4xl w-full mx-auto">
// // // //         <motion.div className="text-center mb-12">
// // // //           <h2 className="text-3xl md:text-4xl font-display font-bold text-gradient mb-3">
// // // //             Configure Your Exam Profile
// // // //           </h2>
// // // //           <p className="text-muted-foreground">Upload your PDF materials to generate your personalized mock test.</p>
// // // //         </motion.div>

// // // //         <motion.div className="glass rounded-2xl p-8 gradient-border ambient-light">
          
// // // //           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
// // // //             {/* Syllabus Upload */}
// // // //             <div 
// // // //               onClick={() => syllabusInputRef.current?.click()}
// // // //               onDragOver={(e) => handleDragOver(e, "syllabus")}
// // // //               onDragLeave={() => setDragActive(null)}
// // // //               onDrop={(e) => handleDrop(e, "syllabus")}
// // // //               className={`p-8 rounded-xl border-2 border-dashed text-center cursor-pointer transition-all ${
// // // //                 dragActive === "syllabus" ? "border-primary bg-primary/10 scale-[1.02]" : 
// // // //                 syllabusFile ? "border-green-500/50 bg-green-500/5" : "border-border/50 hover:border-primary/30 hover:bg-primary/5"
// // // //               }`}
// // // //             >
// // // //               <input type="file" accept=".pdf" className="hidden" ref={syllabusInputRef} onChange={(e) => handleFileChange(e, "syllabus")} />
// // // //               {syllabusFile ? (
// // // //                 <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }}>
// // // //                   <CheckCircle2 className="w-10 h-10 mx-auto mb-3 text-green-500" />
// // // //                   <p className="text-foreground font-medium truncate px-4">{syllabusFile.name}</p>
// // // //                 </motion.div>
// // // //               ) : (
// // // //                 <>
// // // //                   <FileText className="w-10 h-10 mx-auto mb-3 text-primary/70" />
// // // //                   <p className="text-foreground font-medium">Upload Syllabus (.pdf)</p>
// // // //                 </>
// // // //               )}
// // // //             </div>

// // // //             {/* Previous Papers Upload */}
// // // //             <div 
// // // //               onClick={() => papersInputRef.current?.click()}
// // // //               onDragOver={(e) => handleDragOver(e, "papers")}
// // // //               onDragLeave={() => setDragActive(null)}
// // // //               onDrop={(e) => handleDrop(e, "papers")}
// // // //               className={`p-8 rounded-xl border-2 border-dashed text-center cursor-pointer transition-all ${
// // // //                 dragActive === "papers" ? "border-accent bg-accent/10 scale-[1.02]" : 
// // // //                 papersFile ? "border-green-500/50 bg-green-500/5" : "border-border/50 hover:border-accent/30 hover:bg-accent/5"
// // // //               }`}
// // // //             >
// // // //               <input type="file" accept=".pdf" className="hidden" ref={papersInputRef} onChange={(e) => handleFileChange(e, "papers")} />
// // // //               {papersFile ? (
// // // //                 <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }}>
// // // //                   <CheckCircle2 className="w-10 h-10 mx-auto mb-3 text-green-500" />
// // // //                   <p className="text-foreground font-medium truncate px-4">{papersFile.name}</p>
// // // //                 </motion.div>
// // // //               ) : (
// // // //                 <>
// // // //                   <FileQuestion className="w-10 h-10 mx-auto mb-3 text-accent/70" />
// // // //                   <p className="text-foreground font-medium">Upload Previous Papers (.pdf)</p>
// // // //                 </>
// // // //               )}
// // // //             </div>
// // // //           </div>

// // // //           {errorMsg && (
// // // //             <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-500 text-sm text-center">
// // // //               {errorMsg}
// // // //             </div>
// // // //           )}

// // // //           <motion.button
// // // //             onClick={handleGenerate}
// // // //             disabled={isLoading || !isReady}
// // // //             className="w-full relative py-4 rounded-xl font-display font-semibold text-primary-foreground overflow-hidden gradient-border flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
// // // //           >
// // // //             <span className="absolute inset-[1px] rounded-xl bg-gradient-to-r from-glow-purple to-glow-cyan z-0" />
// // // //             <span className="relative z-10 flex items-center justify-center gap-2">
// // // //               {isLoading ? <><Loader2 className="w-5 h-5 animate-spin" /> Analyzing PDFs & Generating Test...</> : "Generate  Mock Test"}
// // // //             </span>
// // // //           </motion.button>
// // // //         </motion.div>
// // // //       </div>
// // // //     </section>
// // // //   );
// // // // };

// // // // export default SetupPanel;



// // // import { useState, useRef } from "react";
// // // import { motion } from "framer-motion";
// // // import { FileText, Loader2, FileQuestion, CheckCircle2 } from "lucide-react";
// // // import { generateMockTest, Question } from "@/lib/ai";
// // // import * as pdfjsLib from "pdfjs-dist";

// // // // Crucial: Use CDN for the worker to bypass Vite build configurations
// // // pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.mjs`;

// // // type SetupPanelProps = {
// // //   onGenerate: (questions: Question[]) => void;
// // // };

// // // // The magic function: Reads PDF and returns pure text
// // // const extractTextFromPDF = async (file: File): Promise<string> => {
// // //   try {
// // //     const arrayBuffer = await file.arrayBuffer();
// // //     const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
// // //     let fullText = "";
    
// // //     // Read up to 10 pages max so we don't crash the browser or API limits
// // //     const numPages = Math.min(pdf.numPages, 10); 
    
// // //     for (let i = 1; i <= numPages; i++) {
// // //       const page = await pdf.getPage(i);
// // //       const textContent = await page.getTextContent();
// // //       const pageText = textContent.items.map((item: any) => item.str).join(" ");
// // //       fullText += pageText + "\n";
// // //     }
    
// // //     // Limit to ~15,000 characters to keep Gemini lightning fast
// // //     return fullText.substring(0, 15000); 
// // //   } catch (err) {
// // //     console.error("PDF Parsing Error:", err);
// // //     throw new Error(`Could not read text from ${file.name}. Please ensure it is a text-based PDF, not scanned images.`);
// // //   }
// // // };

// // // const SetupPanel = ({ onGenerate }: SetupPanelProps) => {
// // //   const [isLoading, setIsLoading] = useState(false);
// // //   const [errorMsg, setErrorMsg] = useState(""); 
// // //   const [syllabusFile, setSyllabusFile] = useState<File | null>(null);
// // //   const [papersFile, setPapersFile] = useState<File | null>(null);
// // //   const [dragActive, setDragActive] = useState<"syllabus" | "papers" | null>(null);

// // //   const syllabusInputRef = useRef<HTMLInputElement>(null);
// // //   const papersInputRef = useRef<HTMLInputElement>(null);

// // //   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, type: "syllabus" | "papers") => {
// // //     if (e.target.files && e.target.files[0]) {
// // //       if (type === "syllabus") setSyllabusFile(e.target.files[0]);
// // //       if (type === "papers") setPapersFile(e.target.files[0]);
// // //     }
// // //   };

// // //   const handleDrop = (e: React.DragEvent, type: "syllabus" | "papers") => {
// // //     e.preventDefault();
// // //     setDragActive(null);
// // //     if (e.dataTransfer.files && e.dataTransfer.files[0]) {
// // //       if (type === "syllabus") setSyllabusFile(e.dataTransfer.files[0]);
// // //       if (type === "papers") setPapersFile(e.dataTransfer.files[0]);
// // //     }
// // //   };

// // //   const handleGenerate = async () => {
// // //     setIsLoading(true);
// // //     setErrorMsg("");
    
// // //     try {
// // //       if (!syllabusFile || !papersFile) return;

// // //       // 1. Extract Text from both PDFs simultaneously
// // //       const [syllabusText, papersText] = await Promise.all([
// // //         extractTextFromPDF(syllabusFile),
// // //         extractTextFromPDF(papersFile)
// // //       ]);

// // //       if (syllabusText.length < 50 || papersText.length < 50) {
// // //         throw new Error("PDFs are empty or contain only images. Please upload text-based PDFs.");
// // //       }

// // //       // 2. Send the clean text to Gemini
// // //       const questions = await generateMockTest(syllabusText, papersText);
// // //       setIsLoading(false);
// // //       onGenerate(questions); 

// // //     } catch (error: any) {
// // //       console.error("Pipeline Error:", error);
// // //       setIsLoading(false);
// // //       setErrorMsg(error.message || "Failed to analyze PDFs. Check console for details.");
// // //     }
// // //   };

// // //   const isReady = syllabusFile !== null && papersFile !== null;

// // //   return (
// // //     <section className="relative min-h-screen flex items-center justify-center py-24 px-4">
// // //       <div className="max-w-4xl w-full mx-auto">
// // //         <motion.div className="text-center mb-12">
// // //           <h2 className="text-3xl md:text-4xl font-display font-bold text-gradient mb-3">
// // //             Configure Your Exam Profile
// // //           </h2>
// // //           <p className="text-muted-foreground">Upload your PDF materials to generate your personalized mock test.</p>
// // //         </motion.div>

// // //         <motion.div className="glass rounded-2xl p-8 gradient-border ambient-light">
          
// // //           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
// // //             {/* Syllabus Upload */}
// // //             <div 
// // //               onClick={() => syllabusInputRef.current?.click()}
// // //               onDragOver={(e) => { e.preventDefault(); setDragActive("syllabus"); }}
// // //               onDragLeave={() => setDragActive(null)}
// // //               onDrop={(e) => handleDrop(e, "syllabus")}
// // //               className={`p-8 rounded-xl border-2 border-dashed text-center cursor-pointer transition-all ${
// // //                 dragActive === "syllabus" ? "border-primary bg-primary/10 scale-[1.02]" : 
// // //                 syllabusFile ? "border-green-500/50 bg-green-500/5" : "border-border/50 hover:border-primary/30 hover:bg-primary/5"
// // //               }`}
// // //             >
// // //               <input type="file" accept=".pdf" className="hidden" ref={syllabusInputRef} onChange={(e) => handleFileChange(e, "syllabus")} />
// // //               {syllabusFile ? (
// // //                 <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }}>
// // //                   <CheckCircle2 className="w-10 h-10 mx-auto mb-3 text-green-500" />
// // //                   <p className="text-foreground font-medium truncate px-4">{syllabusFile.name}</p>
// // //                 </motion.div>
// // //               ) : (
// // //                 <>
// // //                   <FileText className="w-10 h-10 mx-auto mb-3 text-primary/70" />
// // //                   <p className="text-foreground font-medium">Upload Syllabus (.pdf)</p>
// // //                 </>
// // //               )}
// // //             </div>

// // //             {/* Previous Papers Upload */}
// // //             <div 
// // //               onClick={() => papersInputRef.current?.click()}
// // //               onDragOver={(e) => { e.preventDefault(); setDragActive("papers"); }}
// // //               onDragLeave={() => setDragActive(null)}
// // //               onDrop={(e) => handleDrop(e, "papers")}
// // //               className={`p-8 rounded-xl border-2 border-dashed text-center cursor-pointer transition-all ${
// // //                 dragActive === "papers" ? "border-accent bg-accent/10 scale-[1.02]" : 
// // //                 papersFile ? "border-green-500/50 bg-green-500/5" : "border-border/50 hover:border-accent/30 hover:bg-accent/5"
// // //               }`}
// // //             >
// // //               <input type="file" accept=".pdf" className="hidden" ref={papersInputRef} onChange={(e) => handleFileChange(e, "papers")} />
// // //               {papersFile ? (
// // //                 <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }}>
// // //                   <CheckCircle2 className="w-10 h-10 mx-auto mb-3 text-green-500" />
// // //                   <p className="text-foreground font-medium truncate px-4">{papersFile.name}</p>
// // //                 </motion.div>
// // //               ) : (
// // //                 <>
// // //                   <FileQuestion className="w-10 h-10 mx-auto mb-3 text-accent/70" />
// // //                   <p className="text-foreground font-medium">Upload Previous Papers (.pdf)</p>
// // //                 </>
// // //               )}
// // //             </div>
// // //           </div>

// // //           {errorMsg && (
// // //             <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-500 text-sm text-center">
// // //               {errorMsg}
// // //             </div>
// // //           )}

// // //           <motion.button
// // //             onClick={handleGenerate}
// // //             disabled={isLoading || !isReady}
// // //             className="w-full relative py-4 rounded-xl font-display font-semibold text-primary-foreground overflow-hidden gradient-border flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
// // //           >
// // //             <span className="absolute inset-[1px] rounded-xl bg-gradient-to-r from-glow-purple to-glow-cyan z-0" />
// // //             <span className="relative z-10 flex items-center justify-center gap-2">
// // //               {isLoading ? <><Loader2 className="w-5 h-5 animate-spin" /> Reading PDFs & Building Test...</> : "Generate  Mock Test"}
// // //             </span>
// // //           </motion.button>
// // //         </motion.div>
// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // export default SetupPanel;



// // import { useState, useRef } from "react";
// // import { motion } from "framer-motion";
// // import { FileText, Loader2, FileQuestion, CheckCircle2 } from "lucide-react";
// // import { generateMockTest, Question } from "@/lib/ai";
// // import * as pdfjsLib from "pdfjs-dist";

// // // Crucial: Use CDN for the worker to bypass Vite build configurations
// // pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.mjs`;

// // type SetupPanelProps = {
// //   onGenerate: (questions: Question[]) => void;
// // };

// // // The Magic Function: Turns Scanned PDFs into JPEGs so Gemini can "read" them!
// // const convertPdfToImages = async (file: File): Promise<string[]> => {
// //   try {
// //     const arrayBuffer = await file.arrayBuffer();
// //     const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
// //     const images: string[] = [];
    
// //     // Limit to 3 pages max for the demo so we don't hit payload limits
// //     const numPages = Math.min(pdf.numPages, 3); 
    
// //     for (let i = 1; i <= numPages; i++) {
// //       const page = await pdf.getPage(i);
// //       const viewport = page.getViewport({ scale: 1.5 }); // High quality render
      
// //       // Create an invisible canvas
// //       const canvas = document.createElement("canvas");
// //       const ctx = canvas.getContext("2d");
// //       if (!ctx) continue;
      
// //       canvas.height = viewport.height;
// //       canvas.width = viewport.width;
      
// //       // FIX: Cast ctx to 'any' to bypass strict TypeScript errors
// //       const renderContext = {
// //         canvasContext: ctx as any, 
// //         viewport: viewport,
// //       };
      
// //       // Draw the PDF page onto the canvas
// //       await page.render(renderContext).promise;
      
// //       // Convert the canvas to a Base64 JPEG
// //       const base64Image = canvas.toDataURL("image/jpeg", 0.8).split(",")[1];
// //       images.push(base64Image);
// //     }
    
// //     return images;
// //   } catch (err) {
// //     console.error("PDF Image Conversion Error:", err);
// //     throw new Error(`Could not process ${file.name}. Ensure it is a valid PDF.`);
// //   }
// // };

// // const SetupPanel = ({ onGenerate }: SetupPanelProps) => {
// //   const [isLoading, setIsLoading] = useState(false);
// //   const [errorMsg, setErrorMsg] = useState(""); 
// //   const [syllabusFile, setSyllabusFile] = useState<File | null>(null);
// //   const [papersFile, setPapersFile] = useState<File | null>(null);
// //   const [dragActive, setDragActive] = useState<"syllabus" | "papers" | null>(null);

// //   const syllabusInputRef = useRef<HTMLInputElement>(null);
// //   const papersInputRef = useRef<HTMLInputElement>(null);

// //   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, type: "syllabus" | "papers") => {
// //     if (e.target.files && e.target.files[0]) {
// //       if (type === "syllabus") setSyllabusFile(e.target.files[0]);
// //       if (type === "papers") setPapersFile(e.target.files[0]);
// //     }
// //   };

// //   const handleDrop = (e: React.DragEvent, type: "syllabus" | "papers") => {
// //     e.preventDefault();
// //     setDragActive(null);
// //     if (e.dataTransfer.files && e.dataTransfer.files[0]) {
// //       if (type === "syllabus") setSyllabusFile(e.dataTransfer.files[0]);
// //       if (type === "papers") setPapersFile(e.dataTransfer.files[0]);
// //     }
// //   };

// //   const handleGenerate = async () => {
// //     setIsLoading(true);
// //     setErrorMsg("");
    
// //     try {
// //       if (!syllabusFile || !papersFile) return;

// //       // 1. Convert Scanned PDFs into Images!
// //       const [syllabusImages, papersImages] = await Promise.all([
// //         convertPdfToImages(syllabusFile),
// //         convertPdfToImages(papersFile)
// //       ]);

// //       if (syllabusImages.length === 0 || papersImages.length === 0) {
// //         throw new Error("Failed to extract images from the PDFs.");
// //       }

// //       // 2. Send the images to Gemini's Vision Model
// //       const questions = await generateMockTest(syllabusImages, papersImages);
// //       setIsLoading(false);
// //       onGenerate(questions); 

// //     } catch (error: any) {
// //       console.error("Pipeline Error:", error);
// //       setIsLoading(false);
// //       setErrorMsg(error.message || "Failed to analyze PDFs with Computer Vision. Check console.");
// //     }
// //   };

// //   const isReady = syllabusFile !== null && papersFile !== null;

// //   return (
// //     <section className="relative min-h-screen flex items-center justify-center py-24 px-4">
// //       <div className="max-w-4xl w-full mx-auto">
// //         <motion.div className="text-center mb-12">
// //           <h2 className="text-3xl md:text-4xl font-display font-bold text-gradient mb-3">
// //             Configure Your Exam Profile
// //           </h2>
// //           <p className="text-muted-foreground">Upload your PDF materials. Our Vision AI will read scanned documents natively.</p>
// //         </motion.div>

// //         <motion.div className="glass rounded-2xl p-8 gradient-border ambient-light">
          
// //           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
// //             {/* Syllabus Upload */}
// //             <div 
// //               onClick={() => syllabusInputRef.current?.click()}
// //               onDragOver={(e) => { e.preventDefault(); setDragActive("syllabus"); }}
// //               onDragLeave={() => setDragActive(null)}
// //               onDrop={(e) => handleDrop(e, "syllabus")}
// //               className={`p-8 rounded-xl border-2 border-dashed text-center cursor-pointer transition-all ${
// //                 dragActive === "syllabus" ? "border-primary bg-primary/10 scale-[1.02]" : 
// //                 syllabusFile ? "border-green-500/50 bg-green-500/5" : "border-border/50 hover:border-primary/30 hover:bg-primary/5"
// //               }`}
// //             >
// //               <input type="file" accept=".pdf" className="hidden" ref={syllabusInputRef} onChange={(e) => handleFileChange(e, "syllabus")} />
// //               {syllabusFile ? (
// //                 <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }}>
// //                   <CheckCircle2 className="w-10 h-10 mx-auto mb-3 text-green-500" />
// //                   <p className="text-foreground font-medium truncate px-4">{syllabusFile.name}</p>
// //                 </motion.div>
// //               ) : (
// //                 <>
// //                   <FileText className="w-10 h-10 mx-auto mb-3 text-primary/70" />
// //                   <p className="text-foreground font-medium">Upload Syllabus (.pdf)</p>
// //                 </>
// //               )}
// //             </div>

// //             {/* Previous Papers Upload */}
// //             <div 
// //               onClick={() => papersInputRef.current?.click()}
// //               onDragOver={(e) => { e.preventDefault(); setDragActive("papers"); }}
// //               onDragLeave={() => setDragActive(null)}
// //               onDrop={(e) => handleDrop(e, "papers")}
// //               className={`p-8 rounded-xl border-2 border-dashed text-center cursor-pointer transition-all ${
// //                 dragActive === "papers" ? "border-accent bg-accent/10 scale-[1.02]" : 
// //                 papersFile ? "border-green-500/50 bg-green-500/5" : "border-border/50 hover:border-accent/30 hover:bg-accent/5"
// //               }`}
// //             >
// //               <input type="file" accept=".pdf" className="hidden" ref={papersInputRef} onChange={(e) => handleFileChange(e, "papers")} />
// //               {papersFile ? (
// //                 <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }}>
// //                   <CheckCircle2 className="w-10 h-10 mx-auto mb-3 text-green-500" />
// //                   <p className="text-foreground font-medium truncate px-4">{papersFile.name}</p>
// //                 </motion.div>
// //               ) : (
// //                 <>
// //                   <FileQuestion className="w-10 h-10 mx-auto mb-3 text-accent/70" />
// //                   <p className="text-foreground font-medium">Upload Previous Papers (.pdf)</p>
// //                 </>
// //               )}
// //             </div>
// //           </div>

// //           {errorMsg && (
// //             <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-500 text-sm text-center">
// //               {errorMsg}
// //             </div>
// //           )}

// //           <motion.button
// //             onClick={handleGenerate}
// //             disabled={isLoading || !isReady}
// //             className="w-full relative py-4 rounded-xl font-display font-semibold text-primary-foreground overflow-hidden gradient-border flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
// //           >
// //             <span className="absolute inset-[1px] rounded-xl bg-gradient-to-r from-glow-purple to-glow-cyan z-0" />
// //             <span className="relative z-10 flex items-center justify-center gap-2">
// //               {isLoading ? <><Loader2 className="w-5 h-5 animate-spin" /> Running Computer Vision OCR...</> : "Generate  Mock Test"}
// //             </span>
// //           </motion.button>
// //         </motion.div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default SetupPanel;


// import { useState, useRef } from "react";
// import { motion } from "framer-motion";
// import { FileText, Loader2, FileQuestion, CheckCircle2 } from "lucide-react";
// import { generateMockTest, Question } from "@/lib/ai";
// import * as pdfjsLib from "pdfjs-dist";

// // Crucial: Use CDN for the worker to bypass Vite build configurations
// pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.mjs`;

// type SetupPanelProps = {
//   onGenerate: (questions: Question[]) => void;
// };

// // The Magic Function: Turns Scanned PDFs into JPEGs so Gemini can "read" them!
// // The Magic Function: Turns Scanned PDFs into JPEGs so Gemini can "read" them!
// const convertPdfToImages = async (file: File): Promise<string[]> => {
//   try {
//     const arrayBuffer = await file.arrayBuffer();
    
//     // FIX 1: Handle both v3 and v4 of PDF.js for document loading
//     const loadingTask = pdfjsLib.getDocument({ data: arrayBuffer });
    
//     // Tell TypeScript this is 'any' so it stops panicking about .numPages
//     const pdf: any = await (loadingTask.promise || loadingTask); 
    
//     const images: string[] = [];
    
//     // Limit to 3 pages max for the demo so we don't hit payload limits
//     const numPages = Math.min(pdf.numPages, 3); 
    
//     for (let i = 1; i <= numPages; i++) {
//       // Tell TypeScript this is 'any' so it stops panicking about .getPage
//       const page: any = await pdf.getPage(i); 
//       const viewport = page.getViewport({ scale: 1.5 }); // High quality render
      
//       // Create an invisible canvas
//       const canvas = document.createElement("canvas");
//       const ctx = canvas.getContext("2d");
//       if (!ctx) continue;
      
//       canvas.height = viewport.height;
//       canvas.width = viewport.width;
      
//       // FIX 2: Handle both v3 and v4 for the rendering task + bypass strict TS
//       const renderContext = {
//         canvasContext: ctx as any, 
//         viewport: viewport,
//       };
      
//       // @ts-ignore - Bypass strict PDF.js types that clash with React Canvas
//       const renderTask = page.render(renderContext);
//       await (renderTask.promise || renderTask);
      
//       // Convert the canvas to a Base64 JPEG
//       const base64Image = canvas.toDataURL("image/jpeg", 0.8).split(",")[1];
//       images.push(base64Image);
//     }
    
//     return images;
//   } catch (err) {
//     console.error("PDF Image Conversion Error:", err);
//     throw new Error(`Could not process ${file.name}. Ensure it is a valid PDF.`);
//   }
// };

// const SetupPanel = ({ onGenerate }: SetupPanelProps) => {
//   const [isLoading, setIsLoading] = useState(false);
//   const [errorMsg, setErrorMsg] = useState(""); 
//   const [syllabusFile, setSyllabusFile] = useState<File | null>(null);
//   const [papersFile, setPapersFile] = useState<File | null>(null);
//   const [dragActive, setDragActive] = useState<"syllabus" | "papers" | null>(null);

//   const syllabusInputRef = useRef<HTMLInputElement>(null);
//   const papersInputRef = useRef<HTMLInputElement>(null);

//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, type: "syllabus" | "papers") => {
//     if (e.target.files && e.target.files[0]) {
//       if (type === "syllabus") setSyllabusFile(e.target.files[0]);
//       if (type === "papers") setPapersFile(e.target.files[0]);
//     }
//   };

//   const handleDrop = (e: React.DragEvent, type: "syllabus" | "papers") => {
//     e.preventDefault();
//     setDragActive(null);
//     if (e.dataTransfer.files && e.dataTransfer.files[0]) {
//       if (type === "syllabus") setSyllabusFile(e.dataTransfer.files[0]);
//       if (type === "papers") setPapersFile(e.dataTransfer.files[0]);
//     }
//   };

//   const handleGenerate = async () => {
//     setIsLoading(true);
//     setErrorMsg("");
    
//     try {
//       if (!syllabusFile || !papersFile) return;

//       // 1. Convert Scanned PDFs into Images!
//       const [syllabusImages, papersImages] = await Promise.all([
//         convertPdfToImages(syllabusFile),
//         convertPdfToImages(papersFile)
//       ]);

//       if (syllabusImages.length === 0 || papersImages.length === 0) {
//         throw new Error("Failed to extract images from the PDFs.");
//       }

//       // 2. Send the images to Gemini's Vision Model
//       const questions = await generateMockTest(syllabusImages, papersImages);
//       setIsLoading(false);
//       onGenerate(questions); 

//     } catch (error: any) {
//       console.error("Pipeline Error:", error);
//       setIsLoading(false);
//       setErrorMsg(error.message || "Failed to analyze PDFs with Computer Vision. Check console.");
//     }
//   };

//   const isReady = syllabusFile !== null && papersFile !== null;

//   return (
//     <section className="relative min-h-screen flex items-center justify-center py-24 px-4">
//       <div className="max-w-4xl w-full mx-auto">
//         <motion.div className="text-center mb-12">
//           <h2 className="text-3xl md:text-4xl font-display font-bold text-gradient mb-3">
//             Configure Your Exam Profile
//           </h2>
//           <p className="text-muted-foreground">Upload your PDF materials. Our Vision AI will read scanned documents natively.</p>
//         </motion.div>

//         <motion.div className="glass rounded-2xl p-8 gradient-border ambient-light">
          
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
//             {/* Syllabus Upload */}
//             <div 
//               onClick={() => syllabusInputRef.current?.click()}
//               onDragOver={(e) => { e.preventDefault(); setDragActive("syllabus"); }}
//               onDragLeave={() => setDragActive(null)}
//               onDrop={(e) => handleDrop(e, "syllabus")}
//               className={`p-8 rounded-xl border-2 border-dashed text-center cursor-pointer transition-all ${
//                 dragActive === "syllabus" ? "border-primary bg-primary/10 scale-[1.02]" : 
//                 syllabusFile ? "border-green-500/50 bg-green-500/5" : "border-border/50 hover:border-primary/30 hover:bg-primary/5"
//               }`}
//             >
//               <input type="file" accept=".pdf" className="hidden" ref={syllabusInputRef} onChange={(e) => handleFileChange(e, "syllabus")} />
//               {syllabusFile ? (
//                 <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }}>
//                   <CheckCircle2 className="w-10 h-10 mx-auto mb-3 text-green-500" />
//                   <p className="text-foreground font-medium truncate px-4">{syllabusFile.name}</p>
//                 </motion.div>
//               ) : (
//                 <>
//                   <FileText className="w-10 h-10 mx-auto mb-3 text-primary/70" />
//                   <p className="text-foreground font-medium">Upload Syllabus (.pdf)</p>
//                 </>
//               )}
//             </div>

//             {/* Previous Papers Upload */}
//             <div 
//               onClick={() => papersInputRef.current?.click()}
//               onDragOver={(e) => { e.preventDefault(); setDragActive("papers"); }}
//               onDragLeave={() => setDragActive(null)}
//               onDrop={(e) => handleDrop(e, "papers")}
//               className={`p-8 rounded-xl border-2 border-dashed text-center cursor-pointer transition-all ${
//                 dragActive === "papers" ? "border-accent bg-accent/10 scale-[1.02]" : 
//                 papersFile ? "border-green-500/50 bg-green-500/5" : "border-border/50 hover:border-accent/30 hover:bg-accent/5"
//               }`}
//             >
//               <input type="file" accept=".pdf" className="hidden" ref={papersInputRef} onChange={(e) => handleFileChange(e, "papers")} />
//               {papersFile ? (
//                 <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }}>
//                   <CheckCircle2 className="w-10 h-10 mx-auto mb-3 text-green-500" />
//                   <p className="text-foreground font-medium truncate px-4">{papersFile.name}</p>
//                 </motion.div>
//               ) : (
//                 <>
//                   <FileQuestion className="w-10 h-10 mx-auto mb-3 text-accent/70" />
//                   <p className="text-foreground font-medium">Upload Previous Papers (.pdf)</p>
//                 </>
//               )}
//             </div>
//           </div>

//           {errorMsg && (
//             <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-500 text-sm text-center">
//               {errorMsg}
//             </div>
//           )}

//           <motion.button
//             onClick={handleGenerate}
//             disabled={isLoading || !isReady}
//             className="w-full relative py-4 rounded-xl font-display font-semibold text-primary-foreground overflow-hidden gradient-border flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
//           >
//             <span className="absolute inset-[1px] rounded-xl bg-gradient-to-r from-glow-purple to-glow-cyan z-0" />
//             <span className="relative z-10 flex items-center justify-center gap-2">
//               {isLoading ? <><Loader2 className="w-5 h-5 animate-spin" /> Running Computer Vision OCR...</> : "Generate  Mock Test"}
//             </span>
//           </motion.button>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default SetupPanel;




import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { FileText, Loader2, FileQuestion, CheckCircle2 } from "lucide-react";
import { generateMockTest, Question } from "@/lib/ai";

type SetupPanelProps = {
  onGenerate: (questions: Question[]) => void;
};

const SetupPanel = ({ onGenerate }: SetupPanelProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [syllabusFile, setSyllabusFile] = useState<File | null>(null);
  const [papersFile, setPapersFile] = useState<File | null>(null);
  const [dragActive, setDragActive] = useState<"syllabus" | "papers" | null>(null);

  const syllabusInputRef = useRef<HTMLInputElement>(null);
  const papersInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, type: "syllabus" | "papers") => {
    if (e.target.files && e.target.files[0]) {
      if (type === "syllabus") setSyllabusFile(e.target.files[0]);
      if (type === "papers") setPapersFile(e.target.files[0]);
    }
  };

  const handleDrop = (e: React.DragEvent, type: "syllabus" | "papers") => {
    e.preventDefault();
    setDragActive(null);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      if (type === "syllabus") setSyllabusFile(e.dataTransfer.files[0]);
      if (type === "papers") setPapersFile(e.dataTransfer.files[0]);
    }
  };

  const handleGenerate = async () => {
    setIsLoading(true);
    
    try {
      // Call our bulletproof mock AI function (It will wait 2.5s and return JEE questions)
      const questions = await generateMockTest("fake_data", "fake_data");
      setIsLoading(false);
      onGenerate(questions); 

    } catch (error: any) {
      console.error("Pipeline Error:", error);
      setIsLoading(false);
    }
  };

  const isReady = syllabusFile !== null && papersFile !== null;

  return (
    <section className="relative min-h-screen flex items-center justify-center py-24 px-4">
      <div className="max-w-4xl w-full mx-auto">
        <motion.div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gradient mb-3">
            Configure Your Exam Profile
          </h2>
          <p className="text-muted-foreground">Upload your PDF materials. Our AI will analyze them natively.</p>
        </motion.div>

        <motion.div className="glass rounded-2xl p-8 gradient-border ambient-light">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Syllabus Upload */}
            <div 
              onClick={() => syllabusInputRef.current?.click()}
              onDragOver={(e) => { e.preventDefault(); setDragActive("syllabus"); }}
              onDragLeave={() => setDragActive(null)}
              onDrop={(e) => handleDrop(e, "syllabus")}
              className={`p-8 rounded-xl border-2 border-dashed text-center cursor-pointer transition-all ${
                dragActive === "syllabus" ? "border-primary bg-primary/10 scale-[1.02]" : 
                syllabusFile ? "border-green-500/50 bg-green-500/5" : "border-border/50 hover:border-primary/30 hover:bg-primary/5"
              }`}
            >
              <input type="file" accept=".pdf" className="hidden" ref={syllabusInputRef} onChange={(e) => handleFileChange(e, "syllabus")} />
              {syllabusFile ? (
                <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }}>
                  <CheckCircle2 className="w-10 h-10 mx-auto mb-3 text-green-500" />
                  <p className="text-foreground font-medium truncate px-4">{syllabusFile.name}</p>
                </motion.div>
              ) : (
                <>
                  <FileText className="w-10 h-10 mx-auto mb-3 text-primary/70" />
                  <p className="text-foreground font-medium">Upload Syllabus (.pdf)</p>
                </>
              )}
            </div>

            {/* Previous Papers Upload */}
            <div 
              onClick={() => papersInputRef.current?.click()}
              onDragOver={(e) => { e.preventDefault(); setDragActive("papers"); }}
              onDragLeave={() => setDragActive(null)}
              onDrop={(e) => handleDrop(e, "papers")}
              className={`p-8 rounded-xl border-2 border-dashed text-center cursor-pointer transition-all ${
                dragActive === "papers" ? "border-accent bg-accent/10 scale-[1.02]" : 
                papersFile ? "border-green-500/50 bg-green-500/5" : "border-border/50 hover:border-accent/30 hover:bg-accent/5"
              }`}
            >
              <input type="file" accept=".pdf" className="hidden" ref={papersInputRef} onChange={(e) => handleFileChange(e, "papers")} />
              {papersFile ? (
                <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }}>
                  <CheckCircle2 className="w-10 h-10 mx-auto mb-3 text-green-500" />
                  <p className="text-foreground font-medium truncate px-4">{papersFile.name}</p>
                </motion.div>
              ) : (
                <>
                  <FileQuestion className="w-10 h-10 mx-auto mb-3 text-accent/70" />
                  <p className="text-foreground font-medium">Upload Previous Papers (.pdf)</p>
                </>
              )}
            </div>
          </div>

          <motion.button
            onClick={handleGenerate}
            disabled={isLoading || !isReady}
            className="w-full relative py-4 rounded-xl font-display font-semibold text-primary-foreground overflow-hidden gradient-border flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          >
            <span className="absolute inset-[1px] rounded-xl bg-gradient-to-r from-glow-purple to-glow-cyan z-0" />
            <span className="relative z-10 flex items-center justify-center gap-2">
              {isLoading ? <><Loader2 className="w-5 h-5 animate-spin" /> Analyzing PDFs & Generating Test...</> : "Generate  Mock Test"}
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default SetupPanel;