"use client";
import { motion } from "framer-motion";
import { MapPin, ChevronDown, Cpu, Brain, Code2 } from "lucide-react";
import { useEffect, useState } from "react";

const roles = [
  "AI/ML Engineer",
  "LLM Systems Builder",
  "RAG Architect",
  "Deep Learning Practitioner",
];

function TypingText() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const role = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < role.length) {
      timeout = setTimeout(() => setDisplayed(role.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === role.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(role.slice(0, displayed.length - 1)), 40);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  return (
    <span className="text-[#00d4ff]">
      {displayed}
      <span className="typing-cursor" />
    </span>
  );
}

const floatingIcons = [
  { Icon: Cpu, x: "10%", y: "20%", delay: 0 },
  { Icon: Brain, x: "85%", y: "25%", delay: 1 },
  { Icon: Code2, x: "75%", y: "70%", delay: 0.5 },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center grid-bg overflow-hidden"
    >
      {/* Radial glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full bg-[#00d4ff]/5 blur-[120px]" />
      </div>

      {/* Floating decorative icons */}
      {floatingIcons.map(({ Icon, x, y, delay }, i) => (
        <motion.div
          key={i}
          className="absolute text-[#00d4ff]/15 pointer-events-none"
          style={{ left: x, top: y }}
          animate={{ y: [0, -16, 0], opacity: [0.1, 0.25, 0.1] }}
          transition={{ duration: 4 + i, repeat: Infinity, delay, ease: "easeInOut" }}
        >
          <Icon size={48} />
        </motion.div>
      ))}

      {/* Scan line */}
      <motion.div
        className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00d4ff]/30 to-transparent pointer-events-none"
        animate={{ y: ["-100vh", "100vh"] }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear", repeatDelay: 3 }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-[#00d4ff]/30 bg-[#00d4ff]/5 text-[#00d4ff] text-sm font-mono"
        >
          <span className="w-2 h-2 rounded-full bg-[#00d4ff] animate-pulse" />
          Available for opportunities
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-5xl md:text-7xl font-bold tracking-tight mb-4 leading-tight"
        >
          Sandadi{" "}
          <span className="text-[#00d4ff] glow">Vithin</span>{" "}
          Reddy
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-2xl md:text-3xl font-semibold text-slate-300 mb-4 h-10"
        >
          <TypingText />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="flex items-center justify-center gap-2 text-slate-500 text-sm mb-8"
        >
          <MapPin size={14} className="text-[#00d4ff]" />
          Dallas, TX
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.75 }}
          className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed mb-10"
        >
          Building intelligent systems at the intersection of{" "}
          <span className="text-[#00d4ff]">large language models</span>,{" "}
          <span className="text-[#00d4ff]">retrieval-augmented generation</span>, and
          production-grade ML infrastructure.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.85 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#projects"
            className="px-8 py-3 bg-[#00d4ff] text-[#050a0f] font-bold rounded hover:bg-[#00b4d8] transition-all duration-200 hover:shadow-[0_0_20px_rgba(0,212,255,0.4)]"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border border-[#00d4ff]/40 text-[#00d4ff] font-semibold rounded hover:bg-[#00d4ff]/10 hover:border-[#00d4ff] transition-all duration-200"
          >
            Get In Touch
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[#00d4ff]/50 hover:text-[#00d4ff] transition-colors"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={28} />
        </motion.div>
      </motion.a>
    </section>
  );
}
