"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowDown,
  Mail,
  Phone,
  ExternalLink,
  Download,
  ChevronRight,
  Sparkles,
  Database,
  Brain,
  Layers,
  TerminalSquare,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";

const TYPING_WORDS = [
  "Data Engineering Pipelines",
  "Enterprise RAG Systems",
  "AI/MLOps Solutions",
  "Computer Vision Models",
  "Big Data Architectures",
  "Autonomous AI Agents",
];

function useTypingEffect(words: string[], speed = 60, pause = 1800) {
  const [text, setText] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && charIdx < current.length) {
      timeout = setTimeout(() => setCharIdx((c) => c + 1), speed);
    } else if (!deleting && charIdx === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => setCharIdx((c) => c - 1), speed / 2);
    } else if (deleting && charIdx === 0) {
      setDeleting(false);
      setWordIdx((w) => (w + 1) % words.length);
    }

    setText(current.slice(0, charIdx));
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, wordIdx, words, speed, pause]);

  return text;
}

const stats = [
  { label: "Projects Built", value: "7+", icon: Layers },
  { label: "Tech Stack", value: "30+", icon: Database },
  { label: "AI Systems", value: "3+", icon: Brain },
  { label: "Internships", value: "2", icon: TerminalSquare },
];

export default function Hero() {
  const typedText = useTypingEffect(TYPING_WORDS);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const particles: Array<{
      x: number; y: number; vx: number; vy: number; size: number; opacity: number;
    }> = [];

    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.5 + 0.1,
      });
    }

    let animId: number;
    function draw() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(6,182,212,${p.opacity})`;
        ctx.fill();
      });

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(6,182,212,${0.12 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animId = requestAnimationFrame(draw);
    }

    draw();
    const handleResize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    window.addEventListener("resize", handleResize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden grid-bg"
    >
      {/* Particle canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      {/* Radial glows */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-16">

          {/* ── Left column: all text content ── */}
          <div className="flex flex-col items-start gap-8 flex-1 min-w-0">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-2"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" />
              </span>
              <span className="tag text-xs">
                <Sparkles size={10} className="mr-1 inline" />
                Seeking PFE Internship · Spring 2027 · Data Engineering &amp; AI
              </span>
            </motion.div>

            {/* Name */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
            >
              <div className="mono text-cyan-400/60 text-sm mb-2 tracking-widest">
                &gt; whoami
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-none mb-3">
                <span className="text-white">Mohamed</span>
                <br />
                <span className="gradient-text">Channa</span>
              </h1>
              <div className="flex items-center gap-3 mt-4">
                <div className="h-px w-12 bg-gradient-to-r from-cyan-500 to-transparent" />
                <p className="text-zinc-400 text-lg font-medium">
                  Data &amp; AI Engineer
                  <span className="text-zinc-600 mx-2">·</span>
                  <span className="mono text-cyan-400/80 text-base">ENSA Tétouan</span>
                </p>
              </div>
            </motion.div>

            {/* Typing Effect */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55 }}
              className="flex items-center gap-2"
            >
              <span className="mono text-zinc-500 text-sm">Building</span>
              <span className="mono text-cyan-300 text-lg font-semibold min-w-[280px]">
                {typedText}
                <span className="animate-pulse text-cyan-400">|</span>
              </span>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65 }}
              className="text-zinc-400 text-base sm:text-lg max-w-2xl leading-relaxed"
            >
              Engineering end-to-end data systems—from large-scale ELT pipelines
              (Airbyte, dbt, Snowflake, Databricks) to enterprise{" "}
              <span className="text-cyan-400">RAG agents</span>,{" "}
              <span className="text-indigo-400">autonomous intelligence systems</span>, and{" "}
              <span className="text-violet-400">computer vision</span> deployed in
              production environments.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75 }}
              className="flex flex-wrap gap-3"
            >
              <a href="#projects" className="btn-primary">
                <Layers size={15} />
                Explore Projects
              </a>
              <a href="#experience" className="btn-outline">
                <ChevronRight size={15} />
                View Experience
              </a>
              <a
                href="/cv.pdf"
                download
                className="btn-outline"
              >
                <Download size={15} />
                Download CV
              </a>
              <a href="#contact" className="btn-outline">
                <Mail size={15} />
                Contact Me
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="flex items-center gap-4"
            >
              <a
                href="https://github.com/channa7122"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-zinc-500 hover:text-zinc-200 transition-all group text-sm"
              >
                <GithubIcon size={16} className="group-hover:text-cyan-400 transition-colors" />
                <span>channa7122</span>
              </a>
              <span className="w-px h-4 bg-zinc-700" />
              <a
                href="https://linkedin.com/in/mohamed-channa-3045a0331/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-zinc-500 hover:text-zinc-200 transition-all group text-sm"
              >
                <LinkedinIcon size={16} className="group-hover:text-indigo-400 transition-colors" />
                <span>LinkedIn</span>
              </a>
              <span className="w-px h-4 bg-zinc-700" />
              <a
                href="mailto:channamhmd77@gmail.com"
                className="flex items-center gap-2 text-zinc-500 hover:text-zinc-200 transition-all group text-sm"
              >
                <Mail size={16} className="group-hover:text-violet-400 transition-colors" />
                <span>channamhmd77@gmail.com</span>
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4 w-full max-w-2xl"
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.0 + i * 0.1 }}
                  className="card-glass rounded-xl p-4 text-center group transition-all duration-300 hover:-translate-y-1"
                >
                  <stat.icon
                    size={18}
                    className="mx-auto mb-1.5 text-cyan-400/60 group-hover:text-cyan-400 transition-colors"
                  />
                  <div className="mono text-2xl font-bold text-white">
                    {stat.value}
                  </div>
                  <div className="text-xs text-zinc-500 mt-0.5">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* ── Right column: profile photo ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.7, ease: "easeOut" }}
            className="flex-shrink-0 flex items-center justify-center lg:pt-8"
          >
            {/* Outer decorative orbital ring */}
            <div className="relative">
              {/* Spinning gradient ring */}
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  padding: "3px",
                  background: "linear-gradient(135deg, #06b6d4, #6366f1, #8b5cf6, #06b6d4)",
                  backgroundSize: "300% 300%",
                  animation: "spin-slow 6s linear infinite",
                  borderRadius: "9999px",
                }}
              >
                <div className="w-full h-full rounded-full bg-zinc-950" />
              </div>

              {/* Glow halos */}
              <div className="absolute -inset-4 rounded-full bg-cyan-500/15 blur-2xl pointer-events-none" />
              <div className="absolute -inset-6 rounded-full bg-indigo-500/10 blur-3xl pointer-events-none" />

              {/* Photo frame */}
              <div
                className="relative rounded-full overflow-hidden"
                style={{
                  width: "clamp(220px, 28vw, 320px)",
                  height: "clamp(220px, 28vw, 320px)",
                  border: "3px solid transparent",
                  background: "linear-gradient(#09090b, #09090b) padding-box, linear-gradient(135deg, #06b6d4 0%, #6366f1 50%, #8b5cf6 100%) border-box",
                }}
              >
                <Image
                  src="/profile.png"
                  alt="Mohamed Channa — Data & AI Engineer"
                  fill
                  sizes="(max-width: 768px) 220px, (max-width: 1280px) 28vw, 320px"
                  className="object-cover object-top"
                  priority
                />
              </div>

              {/* Floating badge — top right */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                className="absolute -top-2 -right-4 card-glass rounded-xl px-3 py-1.5 flex items-center gap-1.5 shadow-lg"
              >
                <Brain size={13} className="text-indigo-400" />
                <span className="text-xs text-zinc-300 font-medium">AI Engineer</span>
              </motion.div>

              {/* Floating badge — bottom left */}
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 0.5 }}
                className="absolute -bottom-2 -left-4 card-glass rounded-xl px-3 py-1.5 flex items-center gap-1.5 shadow-lg"
              >
                <Database size={13} className="text-cyan-400" />
                <span className="text-xs text-zinc-300 font-medium">Data Pipelines</span>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="mono text-zinc-600 text-xs">scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ArrowDown size={16} className="text-zinc-600" />
        </motion.div>
      </motion.div>
    </section>
  );
}
