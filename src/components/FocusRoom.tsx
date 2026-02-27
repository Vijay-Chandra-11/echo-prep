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
