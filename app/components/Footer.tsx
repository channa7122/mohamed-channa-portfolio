"use client";

import { Mail, Heart, ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800/60 bg-zinc-950/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <span className="mono text-cyan-400 font-bold text-lg">
              MC<span className="text-indigo-400">.</span>
            </span>
            <div>
              <div className="text-white font-semibold text-sm">Mohamed Channa</div>
              <div className="text-zinc-500 text-xs">
                Data &amp; AI Engineer · ENSA Tétouan
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="flex items-center gap-2">
            <a
              href="https://github.com/channa7122"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl border border-zinc-800 text-zinc-500 hover:text-zinc-200 hover:border-zinc-700 transition-all"
            >
              <GithubIcon size={16} />
            </a>
            <a
              href="https://linkedin.com/in/mohamed-channa-3045a0331/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl border border-zinc-800 text-zinc-500 hover:text-zinc-200 hover:border-zinc-700 transition-all"
            >
              <LinkedinIcon size={16} />
            </a>
            <a
              href="mailto:channamhmd77@gmail.com"
              className="p-2.5 rounded-xl border border-zinc-800 text-zinc-500 hover:text-zinc-200 hover:border-zinc-700 transition-all"
            >
              <Mail size={16} />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-xs text-zinc-600 flex items-center gap-1.5">
            <span>Built with</span>
            <Heart size={11} className="text-rose-500 fill-rose-500" />
            <span>· Next.js · Framer Motion · Tailwind</span>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-zinc-800/40 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-zinc-700 mono">
            © 2026 Mohamed Channa · channamhmd77@gmail.com
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-1.5 text-xs text-zinc-600 hover:text-cyan-400 transition-colors group"
          >
            <ArrowUp
              size={13}
              className="group-hover:-translate-y-0.5 transition-transform"
            />
            Back to top
          </button>
        </div>
      </div>
    </footer>
  );
}
