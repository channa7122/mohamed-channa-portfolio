"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Eye } from "lucide-react";

type Category =
  | "All"
  | "Generative AI & Agents"
  | "Data Engineering"
  | "Computer Vision"
  | "BI & Analytics";

const categories: Category[] = [
  "All",
  "Generative AI & Agents",
  "Data Engineering",
  "Computer Vision",
  "BI & Analytics",
];

interface Project {
  title: string;
  description: string;
  category: Category;
  stack: string[];
  highlights: string[];
  color: string;
  accentColor: string;
  borderColor: string;
  emoji: string;
}

const projects: Project[] = [
  {
    title: "Telecom Customer Churn ELT Pipeline",
    description:
      "Production-grade data lakehouse built on Snowflake with medallion architecture. Automated dimensional modeling, churn probability scoring, and CLTV calculation via dbt transformations.",
    category: "Data Engineering",
    stack: ["Snowflake", "dbt Core", "Airbyte", "SQL"],
    highlights: [
      "Medallion architecture (Bronze → Silver → Gold)",
      "Automated dimensional modeling",
      "Churn probability scoring",
      "Customer Lifetime Value (CLTV) calculation",
    ],
    color: "from-cyan-500/10 to-blue-500/10",
    accentColor: "text-cyan-400",
    borderColor: "border-cyan-500/20",
    emoji: "🏗️",
  },
  {
    title: "Crypto Market Analytics Pipeline",
    description:
      "Distributed analytics platform on Azure Databricks with PySpark. Ingests crypto REST APIs, computes rolling window functions, and schedules automated reporting workflows.",
    category: "Data Engineering",
    stack: ["Azure Databricks", "PySpark", "Databricks Workflows", "Power BI"],
    highlights: [
      "REST API ingestion at scale",
      "Distributed SMA & rolling volatility",
      "Automated workflow scheduling",
      "Power BI executive dashboards",
    ],
    color: "from-blue-500/10 to-indigo-500/10",
    accentColor: "text-blue-400",
    borderColor: "border-blue-500/20",
    emoji: "📊",
  },
  {
    title: "Smart Parking Vision System",
    description:
      "Real-time computer vision system for 3D Smart Factory. Detects vehicles and tracks parking vacancy using YOLOv11 and VGG16, streamed via low-latency Flask video API.",
    category: "Computer Vision",
    stack: ["YOLOv11", "VGG16", "OpenCV", "Flask", "Python"],
    highlights: [
      "Real-time vehicle detection",
      "Vacancy tracking system",
      "Classifier vs. detector comparative evaluation",
      "Low-latency video streaming",
    ],
    color: "from-violet-500/10 to-purple-500/10",
    accentColor: "text-violet-400",
    borderColor: "border-violet-500/20",
    emoji: "🚗",
  },
  {
    title: "Industrial Surface Anomaly Detection",
    description:
      "Visual anomaly inspection for manufacturing quality control using PatchCore few-shot learning. Sub-second inference served via FastAPI REST endpoint.",
    category: "Computer Vision",
    stack: ["PyTorch", "PatchCore", "FastAPI", "Python"],
    highlights: [
      "Manufacturing quality control",
      "Few-shot PatchCore anomaly detection",
      "Sub-second inference latency",
      "FastAPI REST deployment",
    ],
    color: "from-rose-500/10 to-red-500/10",
    accentColor: "text-rose-400",
    borderColor: "border-rose-500/20",
    emoji: "🔍",
  },
  {
    title: "Bank Loan Risk & Performance Dashboard",
    description:
      "End-to-end financial intelligence dashboard with cross-validated KPIs. Builds relational models in MS SQL Server and validates against Power BI DAX computations.",
    category: "BI & Analytics",
    stack: ["Power BI", "MS SQL Server", "DAX", "T-SQL"],
    highlights: [
      "Financial KPI tracking",
      "Cross-validated SQL vs. DAX computations",
      "Risk segmentation modeling",
      "Executive-level reporting",
    ],
    color: "from-amber-500/10 to-yellow-500/10",
    accentColor: "text-amber-400",
    borderColor: "border-amber-500/20",
    emoji: "🏦",
  },
];

export default function ProjectsGrid() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-10"
      >
        <div className="mono text-cyan-400/60 text-sm mb-2 tracking-widest">
          &gt; ls ./projects
        </div>
        <h2 className="section-title text-white mb-3">
          More{" "}
          <span className="gradient-text">Technical Projects</span>
        </h2>
        <p className="text-zinc-500 text-base max-w-2xl">
          A breadth of engineering work spanning data pipelines, computer vision, and business intelligence.
        </p>
      </motion.div>

      {/* Filter tabs */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="flex flex-wrap gap-2 mb-10"
      >
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 border ${
              activeCategory === cat
                ? "bg-cyan-500/15 border-cyan-500/40 text-cyan-300"
                : "bg-zinc-900/50 border-zinc-800 text-zinc-400 hover:border-zinc-700 hover:text-zinc-300"
            }`}
          >
            {cat}
          </button>
        ))}
      </motion.div>

      {/* Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        <AnimatePresence mode="popLayout">
          {filtered.map((project, i) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, delay: i * 0.06 }}
              className={`relative overflow-hidden rounded-2xl border ${project.borderColor} card-glass group cursor-pointer`}
              onClick={() =>
                setExpandedProject(
                  expandedProject === project.title ? null : project.title
                )
              }
            >
              {/* Background gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-50 pointer-events-none transition-opacity duration-300 group-hover:opacity-80`}
              />

              <div className="relative z-10 p-5">
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{project.emoji}</span>
                    <div>
                      <span className="tag mb-1.5 block w-fit">
                        {project.category}
                      </span>
                      <h3 className="font-bold text-white text-base leading-tight">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                  <motion.div
                    animate={{ rotate: expandedProject === project.title ? 180 : 0 }}
                    className={`flex-shrink-0 p-1.5 rounded-lg border border-zinc-700 ${project.accentColor}`}
                  >
                    <Eye size={13} />
                  </motion.div>
                </div>

                <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Highlights (collapsible) */}
                <AnimatePresence>
                  {expandedProject === project.title && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mb-4"
                    >
                      <ul className="space-y-1.5">
                        {project.highlights.map((h) => (
                          <li
                            key={h}
                            className="flex items-start gap-2 text-xs text-zinc-400"
                          >
                            <span className={`mt-0.5 ${project.accentColor}`}>▹</span>
                            {h}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Stack */}
                <div className="flex flex-wrap gap-1">
                  {project.stack.map((s) => (
                    <span key={s} className="tag mono">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
