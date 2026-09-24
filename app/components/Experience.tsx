"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  Briefcase,
  Users,
  MapPin,
  Calendar,
  ChevronRight,
} from "lucide-react";

type ItemType = "education" | "work" | "extra";

interface TimelineItem {
  type: ItemType;
  period: string;
  title: string;
  org: string;
  location: string;
  description: string;
  tags: string[];
  highlight?: string;
}

const timeline: TimelineItem[] = [
  {
    type: "work",
    period: "2025 (PFA Internship)",
    title: "AI Software Engineer",
    org: "Capgemini Engineering",
    location: "Morocco",
    description:
      "Designed and built the Bythos RFQ/ST AI Agent for Stellantis — an end-to-end bilingual RAG system generating automotive Technical Specifications from legacy RFQs. Architected the full pipeline: semantic chunking, Vertex AI embeddings, FAISS retrieval with component-level filtering, Claude Sonnet tool calling, and automated Word/Excel document assembly. Delivered Docker-containerized, production-ready system.",
    tags: ["LangChain", "FAISS", "Claude Sonnet", "Vertex AI", "Flask", "Docker", "MongoDB"],
    highlight: "For Stellantis",
  },
  {
    type: "work",
    period: "Jul 2025 – Aug 2025",
    title: "Data Science & Computer Vision Intern",
    org: "3D Smart Factory",
    location: "Morocco",
    description:
      "Built a Smart Parking Vision System for real-time vehicle detection and vacancy tracking. Evaluated and compared YOLOv11 (object detection) vs. VGG16 (classification) approaches. Implemented live video streaming via Flask API for production deployment.",
    tags: ["YOLOv11", "VGG16", "OpenCV", "Flask", "Python", "Computer Vision"],
    highlight: undefined,
  },
  {
    type: "education",
    period: "2024 – 2027",
    title: "Cycle d'Ingénieur — Data Engineering & AI",
    org: "ENSA Tétouan",
    location: "Tétouan, Morocco",
    description:
      "Engineering degree specializing in Data Engineering and Artificial Intelligence. Coursework covers distributed systems, machine learning, big data architectures, cloud computing, and software engineering. Currently preparing for PFE (Projet de Fin d'Études) in 2027.",
    tags: ["Data Engineering", "AI/ML", "Big Data", "Cloud", "Software Engineering"],
    highlight: "Engineering Cycle 2024–2027",
  },
  {
    type: "education",
    period: "2022 – 2024",
    title: "Classes Préparatoires Intégrées",
    org: "ENSA Tétouan",
    location: "Tétouan, Morocco",
    description:
      "Integrated preparatory cycle covering mathematics, physics, computer science, and engineering fundamentals. Strong foundation in algorithms, data structures, and scientific computing.",
    tags: ["Mathematics", "Algorithms", "Physics", "Programming"],
    highlight: undefined,
  },
  {
    type: "extra",
    period: "2024 – Present",
    title: "Active Member",
    org: "AI Geeks Club",
    location: "ENSA Tétouan",
    description:
      "Active participant in the AI Geeks Club at ENSA Tétouan. Engages in workshops, hackathons, and collaborative AI/ML projects. Shares knowledge through peer learning sessions on emerging AI technologies.",
    tags: ["AI/ML", "Community", "Workshops", "Hackathons"],
    highlight: undefined,
  },
];

const typeConfig: Record<ItemType, { icon: React.ComponentType<{ size?: number; className?: string }>; color: string; borderColor: string; bgColor: string; label: string }> = {
  work: {
    icon: Briefcase,
    color: "text-cyan-400",
    borderColor: "border-cyan-500/40",
    bgColor: "bg-cyan-500/10",
    label: "Work",
  },
  education: {
    icon: GraduationCap,
    color: "text-indigo-400",
    borderColor: "border-indigo-500/40",
    bgColor: "bg-indigo-500/10",
    label: "Education",
  },
  extra: {
    icon: Users,
    color: "text-violet-400",
    borderColor: "border-violet-500/40",
    bgColor: "bg-violet-500/10",
    label: "Extracurricular",
  },
};

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <div className="mono text-cyan-400/60 text-sm mb-2 tracking-widest">
          &gt; cat timeline.json
        </div>
        <h2 className="section-title text-white mb-3">
          Experience &amp;{" "}
          <span className="gradient-text">Education</span>
        </h2>
        <p className="text-zinc-500 text-base max-w-2xl">
          Academic journey and professional experience building production-grade AI and data systems.
        </p>
      </motion.div>

      {/* Legend */}
      <div className="flex flex-wrap gap-4 mb-10">
        {(Object.entries(typeConfig) as [ItemType, typeof typeConfig.work][]).map(
          ([key, cfg]) => (
            <div key={key} className="flex items-center gap-2">
              <div className={`p-1.5 rounded-lg ${cfg.bgColor} border ${cfg.borderColor}`}>
                <cfg.icon size={12} className={cfg.color} />
              </div>
              <span className="text-xs text-zinc-500">{cfg.label}</span>
            </div>
          )
        )}
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/40 via-indigo-500/20 to-transparent hidden sm:block" />

        <div className="flex flex-col gap-6">
          {timeline.map((item, i) => {
            const cfg = typeConfig[item.type];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="relative flex gap-6"
              >
                {/* Icon node */}
                <div className="relative z-10 flex-shrink-0">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center ${cfg.bgColor} border ${cfg.borderColor} shadow-lg`}
                  >
                    <cfg.icon size={18} className={cfg.color} />
                  </div>
                </div>

                {/* Card */}
                <div className="flex-1 pb-2">
                  <div className={`rounded-2xl border ${cfg.borderColor} card-glass p-5 group hover:scale-[1.01] transition-transform duration-200`}>
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                      <div>
                        <div className="flex items-center gap-2 flex-wrap mb-1">
                          <span className={`tag ${item.type === "work" ? "" : item.type === "education" ? "tag-indigo" : "tag-violet"}`}>
                            {cfg.label}
                          </span>
                          {item.highlight && (
                            <span className="tag tag-amber">{item.highlight}</span>
                          )}
                        </div>
                        <h3 className="text-white font-bold text-base">{item.title}</h3>
                        <div className="flex items-center gap-3 mt-1 text-sm">
                          <span className={`font-semibold ${cfg.color}`}>{item.org}</span>
                          <span className="flex items-center gap-1 text-zinc-500 text-xs">
                            <MapPin size={11} />
                            {item.location}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-zinc-500 bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-1.5 flex-shrink-0">
                        <Calendar size={11} />
                        {item.period}
                      </div>
                    </div>

                    <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                      {item.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5">
                      {item.tags.map((tag) => (
                        <span key={tag} className="tag mono">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
