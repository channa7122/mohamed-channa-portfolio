"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  Send,
  MapPin,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "channamhmd77@gmail.com",
    href: "mailto:channamhmd77@gmail.com",
    color: "text-cyan-400",
    borderColor: "border-cyan-500/30",
    bgColor: "bg-cyan-500/5",
    hoverBg: "hover:bg-cyan-500/10",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+212 623-821611",
    href: "tel:+212623821611",
    color: "text-indigo-400",
    borderColor: "border-indigo-500/30",
    bgColor: "bg-indigo-500/5",
    hoverBg: "hover:bg-indigo-500/10",
  },
  {
    icon: GithubIcon,
    label: "GitHub",
    value: "github.com/channa7122",
    href: "https://github.com/channa7122",
    color: "text-zinc-300",
    borderColor: "border-zinc-700",
    bgColor: "bg-zinc-800/30",
    hoverBg: "hover:bg-zinc-800/60",
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    value: "Mohamed Channa",
    href: "https://linkedin.com/in/mohamed-channa-3045a0331/",
    color: "text-blue-400",
    borderColor: "border-blue-500/30",
    bgColor: "bg-blue-500/5",
    hoverBg: "hover:bg-blue-500/10",
  },
];

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, subject, message } = formState;
    const mailtoLink = `mailto:channamhmd77@gmail.com?subject=${encodeURIComponent(
      subject || `Portfolio contact from ${name}`
    )}&body=${encodeURIComponent(
      `Hi Mohamed,\n\nMy name is ${name} (${email}).\n\n${message}`
    )}`;
    window.open(mailtoLink, "_blank");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <div className="mono text-cyan-400/60 text-sm mb-2 tracking-widest">
          &gt; open_channel --mode=hire
        </div>
        <h2 className="section-title text-white mb-3">
          Let&apos;s{" "}
          <span className="gradient-text">Connect</span>
        </h2>
        <p className="text-zinc-500 text-base max-w-2xl">
          Open to PFE internship opportunities in Data Engineering, AI/MLOps, and Big Data for Spring 2027. Let&apos;s discuss how I can contribute to your team.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Left: Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col gap-6"
        >
          {/* PFE Availability Card */}
          <div className="relative overflow-hidden rounded-2xl border border-cyan-500/25 bg-gradient-to-br from-cyan-500/10 to-indigo-500/10 p-6">
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-3">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500" />
                </span>
                <span className="mono text-cyan-400 text-xs font-semibold tracking-widest">
                  OPEN TO OPPORTUNITIES
                </span>
              </div>
              <h3 className="text-white font-bold text-lg mb-2">
                Seeking PFE Internship — Spring 2027
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Actively looking for a final-year internship (PFE) in{" "}
                <span className="text-cyan-400">Data Engineering</span>,{" "}
                <span className="text-indigo-400">AI/MLOps</span>, or{" "}
                <span className="text-violet-400">Big Data</span> to apply my
                expertise in production-grade AI and data systems.
              </p>
              <div className="flex items-center gap-2 mt-3 text-xs text-zinc-500">
                <MapPin size={12} />
                Based in Tétouan, Morocco · Open to relocation
              </div>
            </div>
          </div>

          {/* Contact links */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {contactLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className={`flex items-center gap-3 p-4 rounded-xl border ${link.borderColor} ${link.bgColor} ${link.hoverBg} transition-all duration-200 group`}
              >
                <div
                  className={`p-2 rounded-lg bg-zinc-900/50 ${link.color} flex-shrink-0`}
                >
                  <link.icon size={16} />
                </div>
                <div className="min-w-0">
                  <div className="text-xs text-zinc-500 mb-0.5">{link.label}</div>
                  <div className="text-sm text-zinc-300 font-medium truncate group-hover:text-white transition-colors">
                    {link.value}
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Availability banner */}
          <div className="flex items-center gap-3 p-4 rounded-xl bg-zinc-900/50 border border-zinc-800">
            <Sparkles size={16} className="text-indigo-400 flex-shrink-0" />
            <p className="text-xs text-zinc-500 leading-relaxed">
              Also available for freelance AI/data consulting, open-source
              collaboration, and speaking opportunities at tech events.
            </p>
          </div>
        </motion.div>

        {/* Right: Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-zinc-800/60 card-glass p-6 flex flex-col gap-4"
          >
            <h3 className="font-bold text-white text-lg mb-1">Send a Message</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs text-zinc-500 mb-1.5 mono">
                  Your Name *
                </label>
                <input
                  required
                  type="text"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  placeholder="John Doe"
                  className="w-full bg-zinc-900/60 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20 transition-all"
                />
              </div>
              <div>
                <label className="block text-xs text-zinc-500 mb-1.5 mono">
                  Email Address *
                </label>
                <input
                  required
                  type="email"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  placeholder="john@company.com"
                  className="w-full bg-zinc-900/60 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20 transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs text-zinc-500 mb-1.5 mono">
                Subject
              </label>
              <input
                type="text"
                value={formState.subject}
                onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                placeholder="PFE Internship Opportunity — Spring 2027"
                className="w-full bg-zinc-900/60 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20 transition-all"
              />
            </div>

            <div>
              <label className="block text-xs text-zinc-500 mb-1.5 mono">
                Message *
              </label>
              <textarea
                required
                rows={5}
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                placeholder="Hi Mohamed, I'd like to discuss a potential collaboration..."
                className="w-full bg-zinc-900/60 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20 transition-all resize-none"
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm transition-all duration-200 ${
                submitted
                  ? "bg-emerald-500/20 border border-emerald-500/40 text-emerald-400"
                  : "btn-primary"
              }`}
            >
              {submitted ? (
                <>
                  <CheckCircle2 size={16} />
                  Message Sent! Check your email client.
                </>
              ) : (
                <>
                  <Send size={15} />
                  Send Message
                </>
              )}
            </motion.button>

            <p className="text-xs text-zinc-600 text-center">
              This will open your email client with a pre-filled message.
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
