"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Download, MapPin } from "lucide-react";
import { profile, projects } from "@/data/profile";
import { useEffect, useState } from "react";
import { fadeUp, GithubIcon, LinkedinIcon, stagger, yearsSince } from "./ui";

function RotatingRole() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % profile.roles.length), 2600);
    return () => clearInterval(id);
  }, []);
  return (
    <span className="relative inline-flex h-[1.3em] overflow-hidden align-bottom">
      <AnimatePresence mode="wait">
        <motion.span
          key={profile.roles[index]}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="inline-block whitespace-nowrap"
        >
          {profile.roles[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
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
      <div className="glow pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-accent/20 blur-[120px]" />
      <div className="glow pointer-events-none absolute top-40 -right-40 h-[360px] w-[360px] rounded-full bg-accent-2/12 blur-[110px]" />

      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.35fr_1fr]"
      >
        <div>
          <motion.div variants={fadeUp} className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-fg/[0.03] px-3.5 py-1.5 text-xs text-fg/80">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
            </span>
            Open to new opportunities
          </motion.div>

          <motion.p variants={fadeUp} className="mb-3 text-lg text-muted">Hi, I&apos;m</motion.p>
          <motion.h1 variants={fadeUp} className="font-display text-5xl font-extrabold leading-[1.05] tracking-tight text-fg sm:text-6xl md:text-7xl">
            {profile.name.split(" ")[0]} <span className="text-gradient">{profile.name.split(" ").slice(1).join(" ")}</span>
          </motion.h1>
          <motion.h2 variants={fadeUp} className="mt-4 font-display text-2xl font-semibold text-fg/90 sm:text-3xl">
            <span className="sr-only">{profile.role}</span>
            <span aria-hidden="true">
              <RotatingRole />
            </span>
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            {profile.tagline} {years}+ years shipping e-commerce, SaaS and membership platforms for clients in India, Australia and New Zealand.
          </motion.p>
          <motion.p variants={fadeUp} className="mt-4 flex items-center gap-1.5 text-sm text-subtle">
            <MapPin className="h-4 w-4" /> {profile.location}
          </motion.p>

          <motion.div variants={fadeUp} className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent-2 px-6 py-3 text-sm font-semibold text-ink shadow-soft transition hover:brightness-110"
            >
              View my work <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={profile.resume}
              download
              className="inline-flex items-center gap-2 rounded-full border border-line bg-fg/[0.03] px-6 py-3 text-sm font-semibold text-fg transition hover:bg-fg/[0.08]"
            >
              <Download className="h-4 w-4" /> Download Resume
            </a>
            <div className="flex items-center gap-2 sm:ml-2">
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="grid h-11 w-11 place-items-center rounded-full border border-line text-fg/80 transition hover:border-accent hover:text-fg">
                <LinkedinIcon className="h-4 w-4" />
              </a>
              <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="grid h-11 w-11 place-items-center rounded-full border border-line text-fg/80 transition hover:border-accent hover:text-fg">
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
              <p className="font-display text-xl font-bold text-fg">{profile.name}</p>
              <p className="text-sm text-muted">{profile.role} · Alian Software</p>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-2 border-t border-line pt-6">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <p className="font-display text-2xl font-bold text-fg">{s.value}</p>
                  <p className="mt-1 text-[11px] leading-tight text-subtle">{s.label}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-xl border border-line bg-ink/60 p-4 font-mono text-xs leading-relaxed text-muted">
              <span className="text-accent">const</span> stack = [<span className="text-accent-2">&quot;Next.js&quot;</span>,{" "}
              <span className="text-accent-2">&quot;React&quot;</span>, <span className="text-accent-2">&quot;TypeScript&quot;</span>];
              <br />
              <span className="text-accent">const</span> ai = [<span className="text-accent-2">&quot;Claude&quot;</span>, <span className="text-accent-2">&quot;AI SDK&quot;</span>,{" "}
              <span className="text-accent-2">&quot;RAG&quot;</span>];
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
