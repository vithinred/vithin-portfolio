"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Zap, Target, Users } from "lucide-react";

const stats = [
  { value: "2+", label: "Years Experience" },
  { value: "10+", label: "AI/ML Projects" },
  { value: "5+", label: "LLM Deployments" },
  { value: "99%", label: "Uptime Achieved" },
];

const highlights = [
  {
    Icon: Brain,
    title: "LLM Expertise",
    desc: "Deep hands-on experience with GPT-4, Claude, LLaMA, and fine-tuning workflows.",
  },
  {
    Icon: Zap,
    title: "RAG Systems",
    desc: "End-to-end RAG pipelines with vector stores, hybrid search, and re-ranking.",
  },
  {
    Icon: Target,
    title: "Production ML",
    desc: "Shipping models to production with MLflow, FastAPI, Docker, and cloud platforms.",
  },
  {
    Icon: Users,
    title: "Collaboration",
    desc: "Cross-functional work with data engineers, product teams, and enterprise clients.",
  },
];

import { Brain } from "lucide-react";

function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, delay },
  };
}

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section id="about" className="py-28 px-6 relative overflow-hidden">
      {/* subtle background accent */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-[#00d4ff]/5 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <motion.div {...fadeUp()} className="text-center mb-16">
          <span className="font-mono text-[#00d4ff] text-sm tracking-widest uppercase">About Me</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 text-white">
            Building the <span className="text-[#00d4ff]">Future</span> with AI
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          {/* Text */}
          <motion.div {...fadeUp(0.1)} className="space-y-5 text-slate-400 leading-relaxed">
            <p>
              I&apos;m <span className="text-white font-semibold">Sandadi Vithin Reddy</span>, an AI/ML Engineer based in Dallas, TX,
              passionate about transforming raw research into production-ready intelligent systems.
            </p>
            <p>
              At <span className="text-[#00d4ff] font-semibold">Accenture</span>, I architected and deployed LLM-powered applications
              that reduced manual processing time by over 60%, integrating retrieval-augmented generation
              pipelines for enterprise knowledge management.
            </p>
            <p>
              My focus areas include <span className="text-slate-200">LLM fine-tuning</span>,{" "}
              <span className="text-slate-200">vector database design</span>,{" "}
              <span className="text-slate-200">agentic workflows</span>, and{" "}
              <span className="text-slate-200">ML system architecture</span>. I thrive in environments where
              research meets scale.
            </p>
            <div className="flex gap-4 pt-2">
              <a
                href="mailto:vithinreddy0@gmail.com"
                className="px-5 py-2.5 bg-[#00d4ff] text-[#050a0f] font-bold text-sm rounded hover:bg-[#00b4d8] transition-colors"
              >
                Email Me
              </a>
              <a
                href="#experience"
                className="px-5 py-2.5 border border-[#00d4ff]/30 text-[#00d4ff] text-sm font-semibold rounded hover:bg-[#00d4ff]/10 transition-colors"
              >
                My Journey
              </a>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            ref={ref}
            {...fadeUp(0.2)}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map(({ value, label }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="bg-[#0a1220] border border-[#00d4ff]/10 rounded-xl p-6 text-center card-hover glow-box"
              >
                <div className="text-4xl font-bold text-[#00d4ff] glow mb-2">{value}</div>
                <div className="text-slate-400 text-sm">{label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Highlights grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {highlights.map(({ Icon, title, desc }, i) => (
            <motion.div
              key={title}
              {...fadeUp(0.1 * i)}
              className="bg-[#0a1220] border border-[#00d4ff]/10 rounded-xl p-6 card-hover"
            >
              <div className="w-10 h-10 rounded-lg bg-[#00d4ff]/10 flex items-center justify-center mb-4">
                <Icon size={20} className="text-[#00d4ff]" />
              </div>
              <h3 className="text-white font-semibold mb-2">{title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
