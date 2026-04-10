"use client";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

const categories = [
  {
    label: "AI / Machine Learning",
    skills: [
      { name: "PyTorch / TensorFlow", level: 90 },
      { name: "Transformers / HuggingFace", level: 92 },
      { name: "LLM Fine-tuning (LoRA/QLoRA)", level: 85 },
      { name: "LangChain / LlamaIndex", level: 90 },
      { name: "Scikit-learn", level: 88 },
    ],
  },
  {
    label: "RAG & Vector Systems",
    skills: [
      { name: "Pinecone / Weaviate", level: 88 },
      { name: "FAISS / ChromaDB", level: 85 },
      { name: "Semantic Search", level: 87 },
      { name: "Embeddings (OpenAI, BGE)", level: 90 },
      { name: "Hybrid Retrieval & Re-ranking", level: 83 },
    ],
  },
  {
    label: "Engineering & Infra",
    skills: [
      { name: "Python", level: 95 },
      { name: "FastAPI / Flask", level: 88 },
      { name: "Docker / Kubernetes", level: 80 },
      { name: "AWS / Azure", level: 82 },
      { name: "MLflow / Weights & Biases", level: 84 },
    ],
  },
  {
    label: "Data & Databases",
    skills: [
      { name: "SQL / PostgreSQL", level: 86 },
      { name: "Spark / Pandas", level: 84 },
      { name: "MongoDB", level: 80 },
      { name: "Data Pipelines (Airflow)", level: 78 },
      { name: "Tableau / Power BI", level: 75 },
    ],
  },
];

const techBadges = [
  "Python", "PyTorch", "TensorFlow", "Transformers", "LangChain",
  "LlamaIndex", "OpenAI API", "FastAPI", "Docker", "AWS",
  "Pinecone", "FAISS", "MLflow", "Git", "Linux", "SQL",
  "Kubernetes", "Azure", "Spark", "Redis",
];

function SkillBar({ name, level, inView }: { name: string; level: number; inView: boolean }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-slate-300 text-sm font-medium">{name}</span>
        <span className="text-[#00d4ff] text-xs font-mono">{level}%</span>
      </div>
      <div className="h-1.5 bg-[#0d1926] rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full skill-bar"
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-28 px-6 bg-[#070d16] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#00d4ff]/4 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-[#00d4ff] text-sm tracking-widest uppercase">Tech Stack</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 text-white">
            Skills &amp; <span className="text-[#00d4ff]">Expertise</span>
          </h2>
        </motion.div>

        {/* Skill bars grid */}
        <div ref={ref} className="grid md:grid-cols-2 gap-10 mb-16">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: ci * 0.1 }}
              className="bg-[#0a1220] border border-[#00d4ff]/10 rounded-xl p-6"
            >
              <h3 className="text-[#00d4ff] font-semibold text-sm uppercase tracking-wider mb-6 pb-3 border-b border-[#00d4ff]/10">
                {cat.label}
              </h3>
              {cat.skills.map((s) => (
                <SkillBar key={s.name} {...s} inView={inView} />
              ))}
            </motion.div>
          ))}
        </div>

        {/* Tech badges */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <p className="text-slate-500 text-sm mb-5 uppercase tracking-widest font-mono">Also proficient in</p>
          <div className="flex flex-wrap justify-center gap-2">
            {techBadges.map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.03 }}
                whileHover={{ scale: 1.05, borderColor: "#00d4ff", color: "#00d4ff" }}
                className="px-3 py-1.5 text-xs font-mono text-slate-400 bg-[#0a1220] border border-[#1a2535] rounded-full cursor-default transition-colors duration-200"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
