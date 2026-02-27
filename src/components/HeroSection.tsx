import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const GlowingOrb = () => (
  <div className="relative w-64 h-64 md:w-80 md:h-80">
    {/* Outer glow */}
    <motion.div
      className="absolute inset-0 rounded-full bg-gradient-to-br from-glow-purple/30 to-glow-cyan/20 blur-3xl"
      animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
    />
    {/* Mid ring */}
    <motion.div
      className="absolute inset-4 rounded-full border border-glow-purple/30 bg-gradient-to-tr from-glow-purple/10 to-glow-cyan/10 backdrop-blur-sm"
      animate={{ rotate: 360 }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
    />
    {/* Inner orb */}
    <motion.div
      className="absolute inset-10 rounded-full bg-gradient-to-br from-glow-purple/40 via-glow-indigo/30 to-glow-cyan/40 backdrop-blur-xl border border-white/10 shadow-2xl"
      animate={{ scale: [1, 1.05, 1] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    />
    {/* Core */}
    <motion.div
      className="absolute inset-20 rounded-full bg-gradient-to-br from-glow-purple/60 to-glow-cyan/40 blur-sm"
      animate={{ opacity: [0.6, 1, 0.6] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    />
    {/* Highlight */}
    <div className="absolute top-12 left-14 w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/10 blur-md" />
  </div>
);

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-mesh">
      {/* Background particles */}
      <div className="absolute inset-0">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-glow-purple/40"
            style={{
              top: `${20 + i * 15}%`,
              left: `${10 + i * 20}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 flex flex-col items-center gap-8 px-4 text-center max-w-5xl mx-auto">
        {/* Orb */}
        <motion.div
          className="animate-float"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <GlowingOrb />
        </motion.div>

        {/* Headline */}
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold font-display tracking-tight glow-text-purple"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <span className="text-gradient">Echo-Prep</span>
          <span className="text-foreground">: Your Context-Aware AI Study Coach.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          className="text-lg md:text-xl text-muted-foreground max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Adaptive scheduling. Real-time focus tracking. Instant contextual tutoring.
        </motion.p>

        {/* CTA */}
        <motion.button
          className="group relative mt-4 px-8 py-4 rounded-xl font-display font-semibold text-lg text-primary-foreground overflow-hidden gradient-border"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          whileHover={{ scale: 1.04, y: -2 }}
          whileTap={{ scale: 0.97 }}
        >
          {/* Button background */}
          <span className="absolute inset-[1px] rounded-xl bg-gradient-to-r from-glow-purple to-glow-indigo z-0" />
          {/* Shimmer */}
          <motion.span
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent z-10"
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          <span className="relative z-20 flex items-center gap-2">
            Start Journey
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </span>
        </motion.button>
      </div>
    </section>
  );
};

export default HeroSection;
