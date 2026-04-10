"use client";
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, ChevronRight } from "lucide-react";

const experiences = [
  {
    company: "Accenture",
    role: "AI/ML Engineer",
    period: "Jul 2022 – Present",
    location: "Dallas, TX",
    type: "Full-time",
    color: "#00d4ff",
    achievements: [
      "Architected and deployed an enterprise RAG pipeline for internal knowledge management, reducing document retrieval time by 65% and increasing answer accuracy to 91%.",
      "Fine-tuned LLaMA-2 and Mistral models using QLoRA on domain-specific datasets, achieving a 40% improvement over baseline on client benchmarks.",
      "Built multi-agent orchestration workflows using LangChain and AutoGen for automated report generation, saving 200+ analyst hours per month.",
      "Designed a real-time ML inference API using FastAPI + Docker that handles 5k+ requests/min with 99.9% uptime on AWS ECS.",
      "Led end-to-end MLOps modernization, implementing MLflow experiment tracking and CI/CD pipelines that cut model deployment time from 3 days to 4 hours.",
      "Mentored junior engineers and delivered internal LLM workshops to 50+ consultants, accelerating AI adoption across practice areas.",
    ],
    stack: ["Python", "LangChain", "PyTorch", "FastAPI", "AWS", "MLflow", "Pinecone", "Docker"],
  },
  {
    company: "Academic Research",
    role: "ML Research Assistant",
    period: "Jan 2021 – Jun 2022",
    location: "Remote",
    type: "Research",
    color: "#0077b6",
    achievements: [
      "Researched transformer architectures for NLP tasks including text classification, summarization, and question answering.",
      "Implemented and evaluated BERT, RoBERTa, and T5 variants on benchmark datasets, publishing findings to department repository.",
      "Built data collection and preprocessing pipelines for large-scale text corpora using Python and Spark.",
      "Collaborated with professors on grant proposal for NSF-funded NLP research initiative.",
    ],
    stack: ["Python", "HuggingFace", "PyTorch", "Spark", "NLTK", "scikit-learn"],
  },
];

function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, delay },
  };
}

export default function Experience() {
  return (
    <section id="experience" className="py-28 px-6 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0077b6]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        <motion.div {...fadeUp()} className="text-center mb-16">
          <span className="font-mono text-[#00d4ff] text-sm tracking-widest uppercase">Career</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 text-white">
            Work <span className="text-[#00d4ff]">Experience</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[#00d4ff]/50 via-[#00d4ff]/20 to-transparent hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company + exp.role}
                {...fadeUp(0.15 * i)}
                className="relative md:pl-16"
              >
                {/* Timeline dot */}
                <div
                  className="absolute left-3.5 top-6 w-5 h-5 rounded-full border-2 border-[#00d4ff] bg-[#050a0f] hidden md:flex items-center justify-center"
                  style={{ boxShadow: `0 0 12px ${exp.color}60` }}
                >
                  <div className="w-2 h-2 rounded-full bg-[#00d4ff]" />
                </div>

                <div className="bg-[#0a1220] border border-[#00d4ff]/10 rounded-2xl p-7 card-hover">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Briefcase size={16} className="text-[#00d4ff]" />
                        <span className="text-[#00d4ff] font-bold text-lg">{exp.company}</span>
                        <span className="px-2 py-0.5 text-xs font-mono bg-[#00d4ff]/10 text-[#00d4ff] rounded-full border border-[#00d4ff]/20">
                          {exp.type}
                        </span>
                      </div>
                      <h3 className="text-white font-semibold text-xl">{exp.role}</h3>
                    </div>
                    <div className="text-right flex flex-col gap-1">
                      <div className="flex items-center justify-end gap-1.5 text-slate-400 text-sm">
                        <Calendar size={13} />
                        {exp.period}
                      </div>
                      <div className="flex items-center justify-end gap-1.5 text-slate-500 text-sm">
                        <MapPin size={13} />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  {/* Achievements */}
                  <ul className="space-y-3 mb-6">
                    {exp.achievements.map((a, j) => (
                      <motion.li
                        key={j}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.05 * j }}
                        className="flex items-start gap-3 text-slate-400 text-sm leading-relaxed"
                      >
                        <ChevronRight size={14} className="text-[#00d4ff] flex-shrink-0 mt-0.5" />
                        {a}
                      </motion.li>
                    ))}
                  </ul>

                  {/* Stack */}
                  <div className="flex flex-wrap gap-2">
                    {exp.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs font-mono text-slate-400 bg-[#0d1926] border border-[#1a2535] rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
