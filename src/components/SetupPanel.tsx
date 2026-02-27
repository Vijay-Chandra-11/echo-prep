import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Upload, X, Sparkles, Loader2 } from "lucide-react";

const SetupPanel = () => {
  const [days, setDays] = useState("");
  const [weakTopics, setWeakTopics] = useState<string[]>([]);
  const [topicInput, setTopicInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isDragOver, setIsDragOver] = useState(false);

  const addTopic = () => {
    if (topicInput.trim() && !weakTopics.includes(topicInput.trim())) {
      setWeakTopics([...weakTopics, topicInput.trim()]);
      setTopicInput("");
    }
  };

  const removeTopic = (topic: string) => {
    setWeakTopics(weakTopics.filter((t) => t !== topic));
  };

  const handleGenerate = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 3000);
  };

  return (
    <section className="relative py-24 px-4" id="setup">
      <div className="max-w-2xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gradient mb-3">
            Configure Your Study Plan
          </h2>
          <p className="text-muted-foreground">Tell us about your exam, we'll do the rest.</p>
        </motion.div>

        <motion.div
          className="glass rounded-2xl p-8 gradient-border ambient-light"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {/* Days Input */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-muted-foreground mb-2">
              Days Remaining
            </label>
            <input
              type="number"
              value={days}
              onChange={(e) => setDays(e.target.value)}
              placeholder="e.g. 14"
              className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/30 transition-all"
            />
          </div>

          {/* Weak Topics */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-muted-foreground mb-2">
              Weak Topics
            </label>
            <div className="flex gap-2 mb-2">
              <input
                value={topicInput}
                onChange={(e) => setTopicInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && addTopic()}
                placeholder="Type a topic and press Enter"
                className="flex-1 px-4 py-3 rounded-xl bg-secondary/50 border border-border text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/30 transition-all"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              <AnimatePresence>
                {weakTopics.map((topic) => (
                  <motion.span
                    key={topic}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/20 text-primary text-sm font-medium border border-primary/20"
                  >
                    {topic}
                    <button onClick={() => removeTopic(topic)} className="hover:text-primary-foreground transition-colors">
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </motion.span>
                ))}
              </AnimatePresence>
            </div>
          </div>

          {/* Drag & Drop */}
          <motion.div
            className={`mb-8 p-8 rounded-xl border-2 border-dashed transition-all text-center cursor-pointer ${
              isDragOver
                ? "border-primary bg-primary/5 glow-purple"
                : "border-border/50 hover:border-primary/30"
            }`}
            onDragOver={(e) => { e.preventDefault(); setIsDragOver(true); }}
            onDragLeave={() => setIsDragOver(false)}
            onDrop={(e) => { e.preventDefault(); setIsDragOver(false); }}
            whileHover={{ scale: 1.01 }}
          >
            <Upload className="w-10 h-10 mx-auto mb-3 text-muted-foreground" />
            <p className="text-muted-foreground font-medium">Drop Syllabus PDF Here</p>
            <p className="text-muted-foreground/50 text-sm mt-1">or click to browse</p>
          </motion.div>

          {/* Generate Button */}
          <motion.button
            onClick={handleGenerate}
            disabled={isLoading}
            className="w-full relative py-4 rounded-xl font-display font-semibold text-primary-foreground overflow-hidden gradient-border"
            whileHover={!isLoading ? { scale: 1.02 } : {}}
            whileTap={!isLoading ? { scale: 0.98 } : {}}
          >
            <span className="absolute inset-[1px] rounded-xl bg-gradient-to-r from-glow-purple to-glow-cyan z-0" />
            <span className="relative z-10 flex items-center justify-center gap-2">
              {isLoading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Generating Your Plan...
                </>
              ) : (
                <>
                  <Sparkles className="w-5 h-5" />
                  Generate Study Plan
                </>
              )}
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default SetupPanel;
