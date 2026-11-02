"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, MapPin } from "lucide-react";
import { profile, projects } from "@/data/profile";
import { fadeUp, GithubIcon, LinkedinIcon, stagger } from "./ui";

function yearsSince(date: Date) {
  return Math.floor((Date.now() - date.getTime()) / (365.25 * 24 * 3600 * 1000));
}

export default function Hero() {
  const years = yearsSince(profile.careerStart);
  const stats = [
    { value: `${years}+`, label: "Years experience" },
    { value: `${projects.length}+`, label: "Production projects" },
    { value: "8.24", label: "M.Sc. IT CGPA" },
  ];

  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="bg-grid pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-accent/25 blur-[120px]" />
      <div className="pointer-events-none absolute top-40 -right-40 h-[360px] w-[360px] rounded-full bg-accent-2/15 blur-[110px]" />

      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.35fr_1fr]"
      >
        <div>
          <motion.div variants={fadeUp} className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-white/[0.03] px-3.5 py-1.5 text-xs text-zinc-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Open to new opportunities
          </motion.div>

          <motion.p variants={fadeUp} className="mb-3 text-lg text-zinc-400">Hi, I&apos;m</motion.p>
          <motion.h1 variants={fadeUp} className="font-display text-5xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl">
            {profile.name.split(" ")[0]} <span className="text-gradient">{profile.name.split(" ").slice(1).join(" ")}</span>
          </motion.h1>
          <motion.h2 variants={fadeUp} className="mt-4 font-display text-2xl font-semibold text-zinc-200 sm:text-3xl">
            {profile.role}
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-5 max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg">
            {profile.tagline} Specialised in Next.js, React and Redux, with {years}+ years shipping e-commerce, SaaS and membership platforms.
          </motion.p>
          <motion.p variants={fadeUp} className="mt-4 flex items-center gap-1.5 text-sm text-zinc-500">
            <MapPin className="h-4 w-4" /> {profile.location}
          </motion.p>

          <motion.div variants={fadeUp} className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent-2 px-6 py-3 text-sm font-semibold text-ink shadow-[0_8px_30px_-8px_rgba(139,123,255,0.6)] transition hover:brightness-110"
            >
              View my work <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={profile.resume}
              download
              className="inline-flex items-center gap-2 rounded-full border border-line bg-white/[0.03] px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/[0.08]"
            >
              <Download className="h-4 w-4" /> Download Resume
            </a>
            <div className="flex items-center gap-2 sm:ml-2">
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="grid h-11 w-11 place-items-center rounded-full border border-line text-zinc-300 transition hover:border-accent hover:text-white">
                <LinkedinIcon className="h-4 w-4" />
              </a>
              <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="grid h-11 w-11 place-items-center rounded-full border border-line text-zinc-300 transition hover:border-accent hover:text-white">
                <GithubIcon className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Profile card */}
        <motion.div variants={fadeUp} className="relative mx-auto w-full max-w-sm">
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="card relative p-7"
          >
            <div className="mx-auto mb-6 grid h-36 w-36 place-items-center rounded-full bg-gradient-to-br from-accent via-accent/60 to-accent-2 p-[3px]">
              <div className="grid h-full w-full place-items-center rounded-full bg-panel font-display text-5xl font-extrabold text-gradient">
                {profile.initials}
              </div>
            </div>
            <div className="text-center">
              <p className="font-display text-xl font-bold text-white">{profile.name}</p>
              <p className="text-sm text-zinc-400">{profile.role} · Alian Software</p>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-2 border-t border-line pt-6">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <p className="font-display text-2xl font-bold text-white">{s.value}</p>
                  <p className="mt-1 text-[11px] leading-tight text-zinc-500">{s.label}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-xl border border-line bg-ink/60 p-4 font-mono text-xs leading-relaxed text-zinc-400">
              <span className="text-accent">const</span> stack = [<span className="text-accent-2">&quot;Next.js&quot;</span>,{" "}
              <span className="text-accent-2">&quot;React&quot;</span>, <span className="text-accent-2">&quot;Redux&quot;</span>];
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
