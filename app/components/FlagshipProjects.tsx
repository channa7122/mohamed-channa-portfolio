"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  ChevronRight,
  X,
  ArrowRight,
  Bot,
  Radio,
  Layers,
  FileText,
  Database,
  Cpu,
  Zap,
  Network,
} from "lucide-react";
import { GithubIcon } from "./BrandIcons";

/* ───────────────────────────── Architecture Flowchart ───────────────────────────── */
const bythosPipelineSteps = [
  {
    id: "rfq",
    label: "Legacy RFQ\n& Norms",
    icon: FileText,
    color: "border-amber-500/40 bg-amber-500/5 text-amber-400",
  },
  {
    id: "chunk",
    label: "Semantic\nSection Chunking",
    icon: Layers,
    color: "border-cyan-500/40 bg-cyan-500/5 text-cyan-400",
  },
  {
    id: "embed",
    label: "Vertex AI\nEmbeddings",
    icon: Cpu,
    color: "border-indigo-500/40 bg-indigo-500/5 text-indigo-400",
  },
  {
    id: "faiss",
    label: "FAISS\n(Component Filter)",
    icon: Database,
    color: "border-violet-500/40 bg-violet-500/5 text-violet-400",
  },
  {
    id: "claude",
    label: "Claude Sonnet\n(Tool Calling)",
    icon: Bot,
    color: "border-cyan-400/40 bg-cyan-400/5 text-cyan-300",
  },
  {
    id: "output",
    label: "Branded Word\n& Excel Matrix",
    icon: FileText,
    color: "border-emerald-500/40 bg-emerald-500/5 text-emerald-400",
  },
];

function ArchFlowchart({ steps }: { steps: typeof bythosPipelineSteps }) {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div className="w-full overflow-x-auto pb-4">
      <div className="flex items-center gap-2 min-w-max mx-auto justify-center">
        {steps.map((step, i) => (
          <div key={step.id} className="flex items-center gap-2">
            <motion.div
              onMouseEnter={() => setHovered(step.id)}
              onMouseLeave={() => setHovered(null)}
              whileHover={{ scale: 1.05, y: -3 }}
              className={`flex flex-col items-center gap-2 p-3 rounded-xl border cursor-default transition-all duration-200 ${step.color} ${
                hovered === step.id ? "shadow-lg" : ""
              }`}
              style={{ minWidth: "90px" }}
            >
              <step.icon size={20} />
              <span className="text-center text-xs font-medium leading-tight whitespace-pre-line">
                {step.label}
              </span>
            </motion.div>
            {i < steps.length - 1 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: i * 0.15 }}
              >
                <ArrowRight size={16} className="text-zinc-600 flex-shrink-0" />
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ───────────────────────────── Flagship Projects ───────────────────────────── */
const flagshipProjects = [
  {
    id: "bythos",
    badge: "PFA · Capgemini Engineering",
    badgeClass: "tag-indigo",
    title: "Bythos RFQ/ST AI Agent",
    subtitle: "Automotive Technical Specification Generator",
    client: "Stellantis",
    description:
      "End-to-end bilingual RAG system generating structured automotive Technical Specifications from legacy RFQs. Reduces drafting cycles from hours to minutes with strict context isolation, hybrid document compilation, and multi-turn conversational memory.",
    highlights: [
      {
        icon: Network,
        title: "Bilingual RAG Pipeline",
        text: "FR/EN specs from legacy RFQs — hours to minutes",
      },
      {
        icon: Database,
        title: "Context Isolation",
        text: "FAISS + metadata filtering by vehicle component",
      },
      {
        icon: FileText,
        title: "Hybrid Document Assembly",
        text: "python-docx + openpyxl; LLM reserved for reasoning",
      },
      {
        icon: Bot,
        title: "Interactive Chat Expert",
        text: "Multi-turn memory with in-document patching",
      },
      {
        icon: Zap,
        title: "Industrialized",
        text: "Contradiction detection, fallback, full Docker containerization",
      },
    ],
    stack: [
      "Python",
      "Flask",
      "LangChain",
      "FAISS",
      "Claude Sonnet 4.6",
      "Vertex AI",
      "MongoDB",
      "Docker",
      "Pydantic",
    ],
    architecture: bythosPipelineSteps,
    color: "from-indigo-500/20 to-cyan-500/20",
    accentColor: "text-indigo-400",
    borderColor: "border-indigo-500/30",
  },
  {
    id: "intel",
    badge: "Open Source",
    badgeClass: "tag",
    title: "AI Intel Agent",
    subtitle: "Autonomous Multi-Source News & Intelligence Agent",
    client: null,
    githubUrl: "https://github.com/channa7122/ai-intel-agent",
    description:
      "Autonomous intelligence pipeline ingesting multi-source technical news, performing deduplication, fact-checking, and developer-impact analysis via Groq inference, delivered through Discord bot and a Next.js real-time dashboard.",
    highlights: [
      {
        icon: Radio,
        title: "Multi-Stream Ingestion",
        text: "RSS feeds + news APIs → normalized schema",
      },
      {
        icon: Cpu,
        title: "Deduplication Engine",
        text: "Automated clustering, scoring, developer-impact analysis",
      },
      {
        icon: Bot,
        title: "Discord Integration",
        text: "Push mode digests + pull mode contextual QA",
      },
      {
        icon: Layers,
        title: "Web Dashboard",
        text: "Next.js real-time search across past digests",
      },
    ],
    stack: ["Python", "Groq (Llama-3)", "SQLite", "ChromaDB", "Discord.py", "Next.js"],
    color: "from-cyan-500/20 to-violet-500/20",
    accentColor: "text-cyan-400",
    borderColor: "border-cyan-500/30",
  },
];

function FlagshipCard({ project }: { project: (typeof flagshipProjects)[0] }) {
  const [showArch, setShowArch] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6 }}
        className={`relative overflow-hidden rounded-2xl border ${project.borderColor} card-glass group`}
      >
        {/* Gradient header */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-30 pointer-events-none`}
        />

        <div className="relative z-10 p-6 sm:p-8">
          {/* Top row */}
          <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className={`tag ${project.badgeClass}`}>{project.badge}</span>
                {project.client && (
                  <span className="tag tag-amber">for {project.client}</span>
                )}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                {project.title}
              </h3>
              <p className={`text-sm font-medium ${project.accentColor}`}>
                {project.subtitle}
              </p>
            </div>
            <div className="flex gap-2">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline text-xs py-1.5 px-3"
                >
                  <GithubIcon size={13} /> GitHub
                </a>
              )}
              {project.architecture && (
                <button
                  onClick={() => setShowArch(true)}
                  className="btn-primary text-xs py-1.5 px-3"
                >
                  <Network size={13} /> Architecture
                </button>
              )}
            </div>
          </div>

          <p className="text-zinc-400 text-sm leading-relaxed mb-6">
            {project.description}
          </p>

          {/* Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3 mb-6">
            {project.highlights.map((h) => (
              <div
                key={h.title}
                className="flex gap-3 p-3 rounded-xl bg-zinc-900/50 border border-zinc-800/60 hover:border-zinc-700/60 transition-colors"
              >
                <div
                  className={`mt-0.5 flex-shrink-0 p-1.5 rounded-lg bg-zinc-800 ${project.accentColor}`}
                >
                  <h.icon size={13} />
                </div>
                <div>
                  <div className="text-xs font-semibold text-zinc-200 mb-0.5">
                    {h.title}
                  </div>
                  <div className="text-xs text-zinc-500 leading-snug">{h.text}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Stack */}
          <div className="flex flex-wrap gap-1.5">
            {project.stack.map((s) => (
              <span key={s} className="tag mono">
                {s}
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Architecture Modal */}
      <AnimatePresence>
        {showArch && project.architecture && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
            onClick={() => setShowArch(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl bg-zinc-950 border border-zinc-800 rounded-2xl p-6 sm:p-8 shadow-2xl"
            >
              <button
                onClick={() => setShowArch(false)}
                className="absolute top-4 right-4 p-2 rounded-lg hover:bg-zinc-800 text-zinc-400 hover:text-zinc-200 transition-all"
              >
                <X size={18} />
              </button>
              <div className="mb-6">
                <h4 className="text-lg font-bold text-white mb-1">
                  {project.title} — Architecture
                </h4>
                <p className="text-sm text-zinc-500">
                  End-to-end data flow from ingestion to output
                </p>
              </div>
              <ArchFlowchart steps={project.architecture} />
              <div className="mt-6 p-4 rounded-xl bg-zinc-900 border border-zinc-800">
                <p className="text-xs text-zinc-500 leading-relaxed">
                  <span className="text-cyan-400 font-semibold">Key design principle:</span>{" "}
                  FAISS vector index with rigid metadata filtering by vehicle component ensures
                  strict context isolation — preventing cross-contamination across automotive
                  parts. The LLM (Claude Sonnet) is reserved exclusively for reasoning and
                  tool calling, while document assembly is handled programmatically.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default function FlagshipProjects() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <div className="mono text-cyan-400/60 text-sm mb-2 tracking-widest">
          &gt; featured_work
        </div>
        <h2 className="section-title text-white mb-3">
          Flagship{" "}
          <span className="gradient-text">Projects</span>
        </h2>
        <p className="text-zinc-500 text-base max-w-2xl">
          Production-grade AI systems and data engineering solutions built for real-world enterprise environments.
        </p>
      </motion.div>

      <div className="flex flex-col gap-8">
        {flagshipProjects.map((project) => (
          <FlagshipCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
