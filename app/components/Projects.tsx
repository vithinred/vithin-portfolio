"use client";
import { motion } from "framer-motion";
import { ExternalLink, Database, Cpu, FileText, MessageSquare } from "lucide-react";

function GithubIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

const projects = [
  {
    title: "Enterprise RAG System",
    subtitle: "Production-Grade Retrieval-Augmented Generation",
    icon: Database,
    featured: true,
    description:
      "A full-stack RAG pipeline designed for enterprise knowledge bases. Ingests PDFs, Word docs, and web pages; chunks and embeds with custom strategies; retrieves via hybrid search (BM25 + dense vectors) and re-ranks with cross-encoders before generating grounded answers.",
    highlights: [
      "Hybrid retrieval: BM25 sparse + dense vector search with late fusion",
      "Context-aware chunking with metadata-aware overlap strategy",
      "LLM re-ranking pipeline using cross-encoder models for precision boost",
      "Streaming response API with source citation and confidence scores",
      "Evaluation harness using RAGAS (faithfulness, relevancy, correctness)",
      "91% answer accuracy on internal enterprise benchmark dataset",
    ],
    stack: ["Python", "LangChain", "Pinecone", "OpenAI", "FastAPI", "FAISS", "RAGAS", "Docker"],
    metrics: [
      { label: "Accuracy", value: "91%" },
      { label: "Latency", value: "<800ms" },
      { label: "Docs Indexed", value: "50K+" },
    ],
  },
  {
    title: "LLM Fine-Tuning Pipeline",
    subtitle: "QLoRA Fine-tuning Framework",
    icon: Cpu,
    featured: false,
    description:
      "Modular fine-tuning framework for instruction-following LLMs using QLoRA on consumer and cloud GPUs. Includes data prep, training, evaluation, and GGUF export for local deployment.",
    highlights: [
      "QLoRA 4-bit quantized training for memory-efficient fine-tuning",
      "Custom instruction dataset curation and augmentation scripts",
      "Automated eval with benchmarks: MMLU, TruthfulQA, HellaSwag",
      "GGUF export for llama.cpp local inference",
    ],
    stack: ["Python", "HuggingFace", "PEFT", "bitsandbytes", "PyTorch", "Axolotl", "W&B"],
    metrics: [
      { label: "Perf Gain", value: "40%" },
      { label: "VRAM", value: "12GB" },
      { label: "Models", value: "5+" },
    ],
  },
  {
    title: "AI Document Intelligence",
    subtitle: "Intelligent Document Processing",
    icon: FileText,
    featured: false,
    description:
      "Automated document processing pipeline that extracts structured data from unstructured PDFs using vision models and NLP. Handles invoices, contracts, and research papers with high accuracy.",
    highlights: [
      "Multi-modal extraction: text + tables + images from PDFs",
      "Named entity recognition for key field extraction",
      "Confidence scoring and human-in-the-loop review queue",
      "REST API with async processing and webhook notifications",
    ],
    stack: ["Python", "PyMuPDF", "spaCy", "GPT-4V", "Celery", "Redis", "FastAPI", "PostgreSQL"],
    metrics: [
      { label: "Accuracy", value: "94%" },
      { label: "Speed", value: "3s/doc" },
      { label: "Docs/day", value: "10K" },
    ],
  },
  {
    title: "Multi-Agent Chatbot",
    subtitle: "Agentic AI Assistant",
    icon: MessageSquare,
    featured: false,
    description:
      "Conversational multi-agent system with tool use, memory, and routing. Uses AutoGen to orchestrate specialized agents for research, analysis, and action planning with persistent conversation history.",
    highlights: [
      "Agent orchestration with AutoGen GroupChat framework",
      "Persistent memory via episodic + semantic memory stores",
      "Tool integrations: web search, code execution, file I/O",
      "Intent-based routing between specialized sub-agents",
    ],
    stack: ["Python", "AutoGen", "LangChain", "OpenAI", "ChromaDB", "FastAPI", "React"],
    metrics: [
      { label: "Task Success", value: "87%" },
      { label: "Agents", value: "6" },
      { label: "Tools", value: "12+" },
    ],
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

export default function Projects() {
  const featured = projects[0];
  const rest = projects.slice(1);

  return (
    <section id="projects" className="py-28 px-6 bg-[#070d16] relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#00d4ff]/4 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <motion.div {...fadeUp()} className="text-center mb-16">
          <span className="font-mono text-[#00d4ff] text-sm tracking-widest uppercase">Work</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 text-white">
            Featured <span className="text-[#00d4ff]">Projects</span>
          </h2>
        </motion.div>

        {/* Featured project */}
        <motion.div {...fadeUp(0.1)} className="mb-10">
          <div className="bg-[#0a1220] border border-[#00d4ff]/25 rounded-2xl p-8 glow-box relative overflow-hidden">
            {/* Accent corner */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#00d4ff]/5 rounded-bl-[100px]" />
            <div className="absolute top-4 right-4">
              <span className="px-3 py-1 text-xs font-mono bg-[#00d4ff]/15 text-[#00d4ff] rounded-full border border-[#00d4ff]/30">
                ★ Featured
              </span>
            </div>

            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-[#00d4ff]/10 border border-[#00d4ff]/20 flex items-center justify-center flex-shrink-0">
                <featured.icon size={24} className="text-[#00d4ff]" />
              </div>
              <div>
                <h3 className="text-white text-2xl font-bold">{featured.title}</h3>
                <p className="text-[#00d4ff] text-sm">{featured.subtitle}</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2 space-y-5">
                <p className="text-slate-400 leading-relaxed">{featured.description}</p>
                <ul className="space-y-2">
                  {featured.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2 text-slate-300 text-sm">
                      <span className="text-[#00d4ff] flex-shrink-0 mt-0.5">›</span>
                      {h}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 pt-2">
                  {featured.stack.map((t) => (
                    <span key={t} className="px-2.5 py-1 text-xs font-mono text-slate-400 bg-[#0d1926] border border-[#1a2535] rounded">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col justify-between">
                <div className="grid grid-cols-1 gap-4">
                  {featured.metrics.map((m) => (
                    <div key={m.label} className="bg-[#050a0f] border border-[#00d4ff]/10 rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-[#00d4ff] glow">{m.value}</div>
                      <div className="text-slate-500 text-xs mt-1">{m.label}</div>
                    </div>
                  ))}
                </div>

                <div className="flex gap-3 mt-6">
                  <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-[#00d4ff] text-[#050a0f] font-bold text-sm rounded hover:bg-[#00b4d8] transition-colors">
                    <GithubIcon size={15} />
                    Code
                  </button>
                  <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 border border-[#00d4ff]/30 text-[#00d4ff] text-sm font-semibold rounded hover:bg-[#00d4ff]/10 transition-colors">
                    <ExternalLink size={15} />
                    Demo
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Other projects */}
        <div className="grid md:grid-cols-3 gap-6">
          {rest.map((p, i) => (
            <motion.div
              key={p.title}
              {...fadeUp(0.1 + i * 0.1)}
              className="bg-[#0a1220] border border-[#00d4ff]/10 rounded-xl p-6 card-hover flex flex-col"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg bg-[#00d4ff]/10 flex items-center justify-center">
                  <p.icon size={18} className="text-[#00d4ff]" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-sm">{p.title}</h3>
                  <p className="text-[#00d4ff] text-xs">{p.subtitle}</p>
                </div>
              </div>

              <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1">{p.description}</p>

              <div className="grid grid-cols-3 gap-2 mb-4">
                {p.metrics.map((m) => (
                  <div key={m.label} className="bg-[#050a0f] rounded-lg p-2 text-center border border-[#00d4ff]/8">
                    <div className="text-sm font-bold text-[#00d4ff]">{m.value}</div>
                    <div className="text-slate-600 text-xs">{m.label}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {p.stack.slice(0, 5).map((t) => (
                  <span key={t} className="px-2 py-0.5 text-xs font-mono text-slate-500 bg-[#0d1926] border border-[#1a2535] rounded">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-2">
                <button className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-xs border border-[#00d4ff]/20 text-slate-400 rounded hover:text-[#00d4ff] hover:border-[#00d4ff]/40 transition-colors">
                  <GithubIcon size={12} /> Code
                </button>
                <button className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-xs border border-[#00d4ff]/20 text-slate-400 rounded hover:text-[#00d4ff] hover:border-[#00d4ff]/40 transition-colors">
                  <ExternalLink size={12} /> View
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
