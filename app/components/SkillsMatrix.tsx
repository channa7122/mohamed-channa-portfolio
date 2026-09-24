"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Database,
  Brain,
  Eye,
  BarChart3,
  Container,
  ChevronDown,
} from "lucide-react";

interface Skill {
  name: string;
  level: number; // 1-5
}

interface SkillCategory {
  id: string;
  label: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  color: string;
  borderColor: string;
  accentColor: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    id: "data-engineering",
    label: "Data Engineering & Cloud",
    icon: Database,
    color: "from-cyan-500/10 to-blue-500/10",
    borderColor: "border-cyan-500/25",
    accentColor: "bg-cyan-500",
    skills: [
      { name: "Snowflake", level: 5 },
      { name: "dbt Core", level: 5 },
      { name: "Airbyte", level: 4 },
      { name: "Azure Databricks", level: 4 },
      { name: "PySpark", level: 4 },
      { name: "Apache Airflow", level: 3 },
      { name: "Kafka", level: 3 },
      { name: "AWS (Glue, S3, Lambda)", level: 3 },
      { name: "SQL (Advanced)", level: 5 },
      { name: "Azure Data Factory", level: 3 },
    ],
  },
  {
    id: "gen-ai",
    label: "Generative AI & LLMs",
    icon: Brain,
    color: "from-indigo-500/10 to-violet-500/10",
    borderColor: "border-indigo-500/25",
    accentColor: "bg-indigo-500",
    skills: [
      { name: "RAG Architectures", level: 5 },
      { name: "LangChain", level: 5 },
      { name: "Claude API (Anthropic)", level: 5 },
      { name: "Google Vertex AI", level: 4 },
      { name: "FAISS", level: 5 },
      { name: "ChromaDB", level: 4 },
      { name: "Groq (Llama-3)", level: 4 },
      { name: "Tool Calling / Agents", level: 5 },
      { name: "Pydantic", level: 5 },
      { name: "Prompt Engineering", level: 4 },
    ],
  },
  {
    id: "ml-vision",
    label: "Machine Learning & Vision",
    icon: Eye,
    color: "from-violet-500/10 to-rose-500/10",
    borderColor: "border-violet-500/25",
    accentColor: "bg-violet-500",
    skills: [
      { name: "PyTorch", level: 4 },
      { name: "TensorFlow", level: 3 },
      { name: "YOLOv11", level: 4 },
      { name: "OpenCV", level: 4 },
      { name: "PatchCore", level: 4 },
      { name: "Scikit-learn", level: 4 },
      { name: "Pandas / NumPy", level: 5 },
      { name: "DeepFace", level: 3 },
    ],
  },
  {
    id: "bi",
    label: "BI & Analytics",
    icon: BarChart3,
    color: "from-amber-500/10 to-orange-500/10",
    borderColor: "border-amber-500/25",
    accentColor: "bg-amber-500",
    skills: [
      { name: "Power BI", level: 4 },
      { name: "DAX", level: 4 },
      { name: "Dimensional Modeling", level: 5 },
      { name: "Financial KPIs", level: 4 },
      { name: "MS SQL Server", level: 4 },
    ],
  },
  {
    id: "devops",
    label: "DevOps & Software Engineering",
    icon: Container,
    color: "from-emerald-500/10 to-teal-500/10",
    borderColor: "border-emerald-500/25",
    accentColor: "bg-emerald-500",
    skills: [
      { name: "Docker / Docker Compose", level: 5 },
      { name: "FastAPI", level: 4 },
      { name: "Flask", level: 5 },
      { name: "Git / GitHub", level: 5 },
      { name: "Linux / Bash", level: 4 },
      { name: "Pytest", level: 3 },
      { name: "REST APIs", level: 5 },
      { name: "python-docx / openpyxl", level: 4 },
    ],
  },
];

function SkillBar({ name, level, accentColor }: { name: string; level: number; accentColor: string }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <span className="mono text-xs text-zinc-300 min-w-0 flex-1 truncate">{name}</span>
      <div className="flex gap-1 flex-shrink-0">
        {[1, 2, 3, 4, 5].map((dot) => (
          <motion.div
            key={dot}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: dot * 0.05 }}
            className={`w-2 h-2 rounded-full ${
              dot <= level ? accentColor : "bg-zinc-800"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default function SkillsMatrix() {
  const [expanded, setExpanded] = useState<string | null>("data-engineering");

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <div className="mono text-cyan-400/60 text-sm mb-2 tracking-widest">
          &gt; skills --matrix
        </div>
        <h2 className="section-title text-white mb-3">
          Technical{" "}
          <span className="gradient-text">Skills Matrix</span>
        </h2>
        <p className="text-zinc-500 text-base max-w-2xl">
          Full-stack data engineering expertise from ingestion to intelligence.
        </p>
      </motion.div>

      <div className="flex flex-col gap-4">
        {skillCategories.map((cat, catIdx) => (
          <motion.div
            key={cat.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: catIdx * 0.1 }}
            className={`rounded-2xl border ${cat.borderColor} card-glass overflow-hidden`}
          >
            <button
              onClick={() => setExpanded(expanded === cat.id ? null : cat.id)}
              className="w-full flex items-center justify-between p-5 group"
            >
              <div className="flex items-center gap-4">
                <div className={`p-2.5 rounded-xl bg-gradient-to-br ${cat.color} border ${cat.borderColor}`}>
                  <cat.icon size={18} className="text-zinc-200" />
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-white text-sm">{cat.label}</h3>
                  <p className="text-xs text-zinc-500 mt-0.5">
                    {cat.skills.length} technologies
                  </p>
                </div>
              </div>
              <motion.div
                animate={{ rotate: expanded === cat.id ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronDown size={16} className="text-zinc-500 group-hover:text-zinc-300 transition-colors" />
              </motion.div>
            </button>

            <AnimatePresence>
              {expanded === cat.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-5 pb-5 border-t border-zinc-800/60 pt-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
                      {cat.skills.map((skill) => (
                        <SkillBar
                          key={skill.name}
                          name={skill.name}
                          level={skill.level}
                          accentColor={cat.accentColor}
                        />
                      ))}
                    </div>
                    <div className="flex items-center gap-4 mt-4 pt-3 border-t border-zinc-800/40">
                      <span className="text-xs text-zinc-600">Proficiency:</span>
                      {["Familiar", "Competent", "Proficient", "Advanced", "Expert"].map(
                        (label, i) => (
                          <div key={label} className="flex items-center gap-1">
                            <div className={`w-1.5 h-1.5 rounded-full ${cat.accentColor}`} />
                            <span className="text-xs text-zinc-600">{i + 1}={label}</span>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
