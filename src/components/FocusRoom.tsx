// // import { useState } from "react";
// // import { motion } from "framer-motion";
// // import { Send, Play, Eye, Bot, User } from "lucide-react";

// // const FocusTracker = () => (
// //   <motion.div
// //     className="glass rounded-2xl p-5 gradient-border"
// //     initial={{ opacity: 0, x: 20 }}
// //     whileInView={{ opacity: 1, x: 0 }}
// //     viewport={{ once: true }}
// //     transition={{ delay: 0.3 }}
// //   >
// //     <div className="flex items-center gap-3 mb-4">
// //       <Eye className="w-5 h-5 text-accent" />
// //       <span className="text-sm font-semibold text-foreground">Focus Tracker</span>
// //     </div>

// //     <div className="relative w-24 h-24 mx-auto mb-4">
// //       {/* Camera frame */}
// //       <div className="absolute inset-0 rounded-full border-2 border-accent/40 overflow-hidden">
// //         <div className="absolute inset-0 bg-gradient-to-br from-secondary to-muted flex items-center justify-center">
// //           <User className="w-8 h-8 text-muted-foreground/50" />
// //         </div>
// //         {/* Scan line */}
// //         <motion.div
// //           className="absolute inset-x-0 h-px bg-accent/40"
// //           animate={{ top: ["0%", "100%", "0%"] }}
// //           transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
// //         />
// //         {/* Grid overlay */}
// //         <div className="absolute inset-0 opacity-10"
// //           style={{
// //             backgroundImage: "linear-gradient(hsl(var(--accent)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--accent)) 1px, transparent 1px)",
// //             backgroundSize: "12px 12px",
// //           }}
// //         />
// //       </div>
// //       {/* Pulse ring */}
// //       <motion.div
// //         className="absolute -inset-1 rounded-full border border-accent/30"
// //         animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.2, 0.5] }}
// //         transition={{ duration: 2, repeat: Infinity }}
// //       />
// //     </div>

// //     <div className="text-center">
// //       <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-bold">
// //         <span className="w-2 h-2 rounded-full bg-accent animate-glow-pulse" />
// //         Focus: 98%
// //       </span>
// //     </div>
// //   </motion.div>
// // );

// // type Message = { role: "ai" | "user"; text: string };

// // const initialMessages: Message[] = [
// //   {
// //     role: "ai",
// //     text: "I see you're learning about Binary Search Trees. Are you stuck anywhere?",
// //   },
// // ];

// // const EchoTutor = () => {
// //   const [chatMessages, setChatMessages] = useState<Message[]>(initialMessages);
// //   const [input, setInput] = useState("");

// //   const sendMessage = () => {
// //     if (!input.trim()) return;
// //     setChatMessages([
// //       ...chatMessages,
// //       { role: "user" as const, text: input },
// //       { role: "ai" as const, text: "Great question! Let me break that down for you..." },
// //     ]);
// //     setInput("");
// //   };

// //   return (
// //     <motion.div
// //       className="glass rounded-2xl gradient-border flex flex-col"
// //       initial={{ opacity: 0, x: 20 }}
// //       whileInView={{ opacity: 1, x: 0 }}
// //       viewport={{ once: true }}
// //       transition={{ delay: 0.4 }}
// //       style={{ minHeight: 300 }}
// //     >
// //       {/* Header */}
// //       <div className="px-5 py-4 border-b border-border/50 flex items-center gap-2">
// //         <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
// //           <Bot className="w-4 h-4 text-primary" />
// //         </div>
// //         <div>
// //           <p className="text-sm font-semibold text-foreground">Echo Tutor</p>
// //           <p className="text-xs text-muted-foreground">AI Study Assistant</p>
// //         </div>
// //         <span className="ml-auto w-2 h-2 rounded-full bg-accent animate-glow-pulse" />
// //       </div>

// //       {/* Messages */}
// //       <div className="flex-1 px-5 py-4 space-y-3 overflow-y-auto max-h-60">
// //         {chatMessages.map((msg, i) => (
// //           <motion.div
// //             key={i}
// //             className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
// //             initial={{ opacity: 0, y: 10 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ delay: i * 0.1 }}
// //           >
// //             <div
// //               className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-sm ${
// //                 msg.role === "user"
// //                   ? "bg-primary/20 text-foreground rounded-br-md"
// //                   : "bg-secondary/60 text-foreground rounded-bl-md border border-primary/10"
// //               }`}
// //             >
// //               {msg.text}
// //             </div>
// //           </motion.div>
// //         ))}
// //       </div>

// //       {/* Input */}
// //       <div className="px-4 py-3 border-t border-border/50">
// //         <div className="flex gap-2">
// //           <input
// //             value={input}
// //             onChange={(e) => setInput(e.target.value)}
// //             onKeyDown={(e) => e.key === "Enter" && sendMessage()}
// //             placeholder="Ask Echo anything..."
// //             className="flex-1 px-4 py-2.5 rounded-xl bg-secondary/50 border border-border text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
// //           />
// //           <motion.button
// //             onClick={sendMessage}
// //             className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center text-primary hover:bg-primary/30 transition-colors"
// //             whileHover={{ scale: 1.08 }}
// //             whileTap={{ scale: 0.92 }}
// //           >
// //             <Send className="w-4 h-4" />
// //           </motion.button>
// //         </div>
// //       </div>
// //     </motion.div>
// //   );
// // };

// // const FocusRoom = () => {
// //   return (
// //     <section className="relative py-24 px-4" id="focus">
// //       <div className="max-w-7xl mx-auto">
// //         <motion.div
// //           className="text-center mb-12"
// //           initial={{ opacity: 0, y: 20 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           viewport={{ once: true }}
// //         >
// //           <h2 className="text-3xl md:text-4xl font-display font-bold text-gradient mb-3">
// //             The Focus Room
// //           </h2>
// //           <p className="text-muted-foreground">Immersive learning with AI-powered guidance.</p>
// //         </motion.div>

// //         <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
// //           {/* Left: Learning Player */}
// //           <motion.div
// //             className="lg:col-span-3 glass rounded-2xl overflow-hidden gradient-border ambient-light"
// //             initial={{ opacity: 0, x: -20 }}
// //             whileInView={{ opacity: 1, x: 0 }}
// //             viewport={{ once: true }}
// //             transition={{ delay: 0.2 }}
// //           >
// //             <div className="aspect-video bg-gradient-to-br from-secondary to-muted flex items-center justify-center relative">
// //               {/* Subtle grid */}
// //               <div
// //                 className="absolute inset-0 opacity-5"
// //                 style={{
// //                   backgroundImage: "linear-gradient(hsl(var(--glow-purple)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--glow-purple)) 1px, transparent 1px)",
// //                   backgroundSize: "40px 40px",
// //                 }}
// //               />
// //               <motion.button
// //                 className="relative w-20 h-20 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center glow-purple"
// //                 whileHover={{ scale: 1.1 }}
// //                 whileTap={{ scale: 0.95 }}
// //               >
// //                 <Play className="w-8 h-8 text-primary ml-1" />
// //               </motion.button>
// //             </div>
// //             <div className="p-5">
// //               <h3 className="font-display font-semibold text-foreground">Binary Search Trees — Full Lecture</h3>
// //               <p className="text-sm text-muted-foreground mt-1">Chapter 4 • Prof. Dr. Allen • 45 min</p>
// //             </div>
// //           </motion.div>

// //           {/* Right: Focus Tracker + Echo Tutor */}
// //           <div className="lg:col-span-2 flex flex-col gap-6">
// //             <FocusTracker />
// //             <EchoTutor />
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default FocusRoom;



import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Play, Eye, Bot, User, ArrowLeft } from "lucide-react";

const FocusTracker = () => (
  <motion.div
    className="glass rounded-2xl p-5 gradient-border"
    initial={{ opacity: 0, x: 20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay: 0.3 }}
  >
    <div className="flex items-center gap-3 mb-4">
      <Eye className="w-5 h-5 text-accent" />
      <span className="text-sm font-semibold text-foreground">Focus Tracker</span>
    </div>

    <div className="relative w-24 h-24 mx-auto mb-4">
      {/* Camera frame */}
      <div className="absolute inset-0 rounded-full border-2 border-accent/40 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary to-muted flex items-center justify-center">
          <User className="w-8 h-8 text-muted-foreground/50" />
        </div>
        {/* Scan line */}
        <motion.div
          className="absolute inset-x-0 h-px bg-accent/40"
          animate={{ top: ["0%", "100%", "0%"] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "linear-gradient(hsl(var(--accent)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--accent)) 1px, transparent 1px)",
            backgroundSize: "12px 12px",
          }}
        />
      </div>
      {/* Pulse ring */}
      <motion.div
        className="absolute -inset-1 rounded-full border border-accent/30"
        animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.2, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </div>

    <div className="text-center">
      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-bold">
        <span className="w-2 h-2 rounded-full bg-accent animate-glow-pulse" />
        Focus: 98%
      </span>
    </div>
  </motion.div>
);

type Message = { role: "ai" | "user"; text: string };

const initialMessages: Message[] = [
  {
    role: "ai",
    text: "I see you're starting your session. Are you stuck anywhere?",
  },
];

const EchoTutor = () => {
  const [chatMessages, setChatMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;
    setChatMessages([
      ...chatMessages,
      { role: "user" as const, text: input },
      { role: "ai" as const, text: "Great question! Let me break that down for you based on the syllabus..." },
    ]);
    setInput("");
  };

  return (
    <motion.div
      className="glass rounded-2xl gradient-border flex flex-col"
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.4 }}
      style={{ minHeight: 300 }}
    >
      {/* Header */}
      <div className="px-5 py-4 border-b border-border/50 flex items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
          <Bot className="w-4 h-4 text-primary" />
        </div>
        <div>
          <p className="text-sm font-semibold text-foreground">Echo Tutor</p>
          <p className="text-xs text-muted-foreground">AI Study Assistant</p>
        </div>
        <span className="ml-auto w-2 h-2 rounded-full bg-accent animate-glow-pulse" />
      </div>

      {/* Messages */}
      <div className="flex-1 px-5 py-4 space-y-3 overflow-y-auto max-h-60">
        {chatMessages.map((msg, i) => (
          <motion.div
            key={i}
            className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <div
              className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-sm ${
                msg.role === "user"
                  ? "bg-primary/20 text-foreground rounded-br-md"
                  : "bg-secondary/60 text-foreground rounded-bl-md border border-primary/10"
              }`}
            >
              {msg.text}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Input */}
      <div className="px-4 py-3 border-t border-border/50">
        <div className="flex gap-2">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            placeholder="Ask Echo anything..."
            className="flex-1 px-4 py-2.5 rounded-xl bg-secondary/50 border border-border text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
          />
          <motion.button
            onClick={sendMessage}
            className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center text-primary hover:bg-primary/30 transition-colors"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
          >
            <Send className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

type FocusRoomProps = {
  onBack: () => void;
};

const FocusRoom = ({ onBack }: FocusRoomProps) => {
  return (
    <section className="relative py-24 px-4 min-h-screen flex flex-col" id="focus">
      <div className="max-w-7xl mx-auto w-full">
        {/* Back Button */}
        <motion.button
          onClick={onBack}
          className="mb-8 flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <div className="p-2 rounded-lg bg-secondary/50 group-hover:bg-secondary transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </div>
          <span className="font-medium">Back to Dashboard</span>
        </motion.button>

        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gradient mb-3">
            The Focus Room
          </h2>
          <p className="text-muted-foreground">Immersive learning with AI-powered guidance.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Left: Learning Player */}
          <motion.div
            className="lg:col-span-3 glass rounded-2xl overflow-hidden gradient-border ambient-light"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="aspect-video bg-gradient-to-br from-secondary to-muted flex items-center justify-center relative">
              <div
                className="absolute inset-0 opacity-5"
                style={{
                  backgroundImage: "linear-gradient(hsl(var(--glow-purple)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--glow-purple)) 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                }}
              />
              <motion.button
                className="relative w-20 h-20 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center glow-purple"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Play className="w-8 h-8 text-primary ml-1" />
              </motion.button>
            </div>
            <div className="p-5">
              <h3 className="font-display font-semibold text-foreground">Today's Focus Lecture</h3>
              <p className="text-sm text-muted-foreground mt-1">AI Curated Content • 45 min</p>
            </div>
          </motion.div>

          {/* Right: Focus Tracker + Echo Tutor */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <FocusTracker />
            <EchoTutor />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FocusRoom;




// import { useState, useEffect, useRef } from "react";
// import { motion } from "framer-motion";
// import Webcam from "react-webcam";
// import { Clock, Eye, AlertTriangle, X, CheckCircle2, BrainCircuit } from "lucide-react";

// type FocusRoomProps = {
//   onLeave: () => void;
// };

// const FocusRoom = ({ onLeave }: FocusRoomProps) => {
//   // Timer State (25 Minute Pomodoro)
//   const [timeLeft, setTimeLeft] = useState(25 * 60);
//   const [isActive, setIsActive] = useState(false);

//   // Simulated Computer Vision Metrics (For the Jury Demo)
//   const [focusScore, setFocusScore] = useState(95);
//   const [gazeStatus, setGazeStatus] = useState("Centered");
//   const [drowsinessLevel, setDrowsinessLevel] = useState("Alert");

//   const webcamRef = useRef<Webcam>(null);

//   // Handle the Countdown Timer
//   useEffect(() => {
//     let interval: NodeJS.Timeout;
//     if (isActive && timeLeft > 0) {
//       interval = setInterval(() => setTimeLeft((t) => t - 1), 1000);
//     }
//     return () => clearInterval(interval);
//   }, [isActive, timeLeft]);

//   // Simulate real-time CV fluctuations to make the demo look alive
//   useEffect(() => {
//     if (!isActive) return;
//     const interval = setInterval(() => {
//       // Fluctuate focus score slightly
//       setFocusScore((prev) => {
//         const variance = Math.floor(Math.random() * 5) - 2;
//         return Math.min(100, Math.max(0, prev + variance));
//       });

//       // Randomly simulate a distraction or blink
//       const randomEvent = Math.random();
//       if (randomEvent > 0.95) {
//         setGazeStatus("Off-Screen");
//         setTimeout(() => setGazeStatus("Centered"), 3000);
//       } else if (randomEvent > 0.90) {
//         setDrowsinessLevel("Drowsy");
//         setTimeout(() => setDrowsinessLevel("Alert"), 3000);
//       }
//     }, 2000);

//     return () => clearInterval(interval);
//   }, [isActive]);

//   const formatTime = (seconds: number) => {
//     const m = Math.floor(seconds / 60);
//     const s = seconds % 60;
//     return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
//   };

//   return (
//     <motion.div 
//       initial={{ opacity: 0 }} 
//       animate={{ opacity: 1 }} 
//       exit={{ opacity: 0 }}
//       className="fixed inset-0 z-50 bg-[#050505] flex flex-col p-6"
//     >
//       {/* Header */}
//       <header className="flex items-center justify-between mb-6">
//         <div className="flex items-center gap-3">
//           <div className="p-2 bg-primary/20 rounded-lg">
//             <BrainCircuit className="w-6 h-6 text-primary" />
//           </div>
//           <h1 className="text-2xl font-display font-bold text-foreground">Deep Focus Session</h1>
//         </div>
//         <button 
//           onClick={onLeave}
//           className="flex items-center gap-2 px-4 py-2 rounded-xl bg-red-500/10 text-red-500 font-medium hover:bg-red-500/20 transition-colors"
//         >
//           <X className="w-5 h-5" /> End Session
//         </button>
//       </header>

//       <div className="flex-1 flex flex-col lg:flex-row gap-6">
//         {/* Left Column: Task & Timer */}
//         <div className="flex-1 flex flex-col gap-6">
//           <div className="glass flex-1 rounded-3xl p-8 border border-border/50 flex flex-col items-center justify-center relative overflow-hidden">
//             {/* Background Glow */}
//             <div className={`absolute inset-0 opacity-20 transition-colors duration-1000 ${isActive ? "bg-primary" : "bg-muted"}`} />
            
//             <Clock className="w-12 h-12 text-muted-foreground mb-6 z-10" />
//             <h2 className="text-7xl font-display font-bold text-foreground mb-8 tracking-tight z-10">
//               {formatTime(timeLeft)}
//             </h2>
            
//             <div className="flex gap-4 z-10">
//               <button 
//                 onClick={() => setIsActive(!isActive)}
//                 className={`px-8 py-4 rounded-xl font-bold text-lg transition-all ${
//                   isActive 
//                     ? "bg-secondary text-foreground hover:bg-secondary/80" 
//                     : "bg-primary text-primary-foreground shadow-[0_0_30px_rgba(var(--primary),0.4)] hover:scale-105"
//                 }`}
//               >
//                 {isActive ? "Pause Focus" : "Start Deep Work"}
//               </button>
//             </div>
//           </div>

//           <div className="glass h-48 rounded-3xl p-6 border border-border/50 flex flex-col justify-center">
//             <h3 className="text-lg font-medium text-muted-foreground mb-4">Current Objective</h3>
//             <p className="text-2xl font-display font-semibold text-foreground">Mastering {gazeStatus === "Off-Screen" ? "..." : "Selected Topic"}</p>
//           </div>
//         </div>

//         {/* Right Column: Webcam & AI Tracking */}
//         <div className="w-full lg:w-[450xl] glass rounded-3xl border border-border/50 overflow-hidden flex flex-col relative">
          
//           {/* Live Webcam Feed */}
//           <div className="relative flex-1 bg-black">
//             <Webcam
//               ref={webcamRef}
//               audio={false}
//               className="absolute inset-0 w-full h-full object-cover"
//               mirrored={true}
//             />
            
//             {/* CV HUD Overlay */}
//             <div className="absolute inset-0 pointer-events-none border-[1px] border-primary/30 m-4 rounded-xl">
//               {/* Corner brackets for sci-fi feel */}
//               <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary" />
//               <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary" />
//               <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-primary" />
//               <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary" />
              
//               {/* Scanning Line Animation */}
//               {isActive && (
//                 <motion.div 
//                   className="w-full h-1 bg-primary/50 shadow-[0_0_15px_rgba(var(--primary),1)]"
//                   animate={{ y: ["0%", "400%"] }}
//                   transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
//                 />
//               )}
//             </div>
//           </div>

//           {/* Telemetry Dashboard */}
//           <div className="p-6 bg-[#0a0a0a] border-t border-border/50 grid grid-cols-2 gap-4">
//             {/* Gaze Tracking */}
//             <div className="bg-secondary/40 rounded-xl p-4 flex flex-col gap-2">
//               <div className="flex items-center gap-2 text-sm text-muted-foreground">
//                 <Eye className="w-4 h-4" /> Gaze Tracking
//               </div>
//               <div className={`font-bold text-lg flex items-center gap-2 ${gazeStatus === "Centered" ? "text-green-400" : "text-yellow-400"}`}>
//                 {gazeStatus === "Centered" ? <CheckCircle2 className="w-5 h-5" /> : <AlertTriangle className="w-5 h-5" />}
//                 {gazeStatus}
//               </div>
//             </div>

//             {/* Drowsiness Detection */}
//             <div className="bg-secondary/40 rounded-xl p-4 flex flex-col gap-2">
//               <div className="flex items-center gap-2 text-sm text-muted-foreground">
//                 <AlertTriangle className="w-4 h-4" /> Drowsiness
//               </div>
//               <div className={`font-bold text-lg flex items-center gap-2 ${drowsinessLevel === "Alert" ? "text-green-400" : "text-red-400"}`}>
//                 {drowsinessLevel === "Alert" ? <CheckCircle2 className="w-5 h-5" /> : <AlertTriangle className="w-5 h-5" />}
//                 {drowsinessLevel}
//               </div>
//             </div>

//             {/* Total Focus Score */}
//             <div className="col-span-2 bg-secondary/40 rounded-xl p-4 flex items-center justify-between">
//               <span className="text-sm font-medium text-muted-foreground">Real-time Focus Score</span>
//               <div className="flex items-center gap-3">
//                 <div className="w-32 h-2 bg-secondary rounded-full overflow-hidden">
//                   <motion.div 
//                     className="h-full bg-primary"
//                     animate={{ width: `${focusScore}%` }}
//                     transition={{ type: "spring", stiffness: 100 }}
//                   />
//                 </div>
//                 <span className="font-display font-bold text-xl text-primary">{focusScore}%</span>
//               </div>
//             </div>
//           </div>

//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default FocusRoom;