"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Award, Briefcase, Code2, GraduationCap, Layers, Mail, MapPin, Phone, Wrench } from "lucide-react";
import { achievements, education, experience, profile, projects, skillGroups } from "@/data/profile";
import { Chip, fadeUp, GithubIcon, LinkedinIcon, Reveal, Section, stagger } from "./ui";

export function About() {
  const facts = [
    { icon: MapPin, label: "Based in", value: profile.location },
    { icon: Briefcase, label: "Currently", value: "Frontend Developer @ Alian Software" },
    { icon: GraduationCap, label: "Education", value: "M.Sc. IT — ISTAR" },
  ];
  return (
    <Section id="about" eyebrow="About me" title={<>Turning ideas into <span className="text-gradient">delightful interfaces</span></>}>
      <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
        <Reveal className="space-y-5 text-base leading-relaxed text-zinc-400 sm:text-lg">
          {profile.about.map((p) => (
            <p key={p.slice(0, 20)}>{p}</p>
          ))}
        </Reveal>
        <Reveal delay={0.1} className="card divide-y divide-white/[0.06] p-2">
          {facts.map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex items-center gap-4 p-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent/10 text-accent">
                <Icon className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs uppercase tracking-wider text-zinc-500">{label}</p>
                <p className="font-medium text-white">{value}</p>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </Section>
  );
}

const skillIcons = [Code2, Layers, Wrench];

export function Skills() {
  return (
    <Section id="skills" eyebrow="Technical skills" title={<>Tools & technologies <span className="text-gradient">I work with</span></>}>
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="grid gap-5 md:grid-cols-3"
      >
        {skillGroups.map((g, i) => {
          const Icon = skillIcons[i % skillIcons.length];
          return (
            <motion.div
              key={g.title}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="card group relative overflow-hidden p-7 transition-colors hover:border-accent/40"
            >
              <div className="pointer-events-none absolute -top-20 -right-20 h-40 w-40 rounded-full bg-accent/10 blur-3xl transition-opacity group-hover:bg-accent/20" />
              <span className="mb-5 grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-accent/20 to-accent-2/20 text-white">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mb-5 font-display text-xl font-semibold text-white">{g.title}</h3>
              <div className="flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <Chip key={s}>{s}</Chip>
                ))}
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </Section>
  );
}

export function Experience() {
  return (
    <Section id="experience" eyebrow="Work experience" title={<>Where I&apos;ve <span className="text-gradient">made an impact</span></>}>
      <div className="relative">
        <div className="absolute top-2 bottom-2 left-[11px] w-px bg-gradient-to-b from-accent via-accent-2/50 to-transparent md:left-1/2" />
        <div className="space-y-10 md:space-y-14">
          {experience.map((job, i) => (
            <Reveal key={job.period} className={`relative pl-10 md:w-1/2 md:pl-0 ${i % 2 === 0 ? "md:pr-12" : "md:ml-auto md:pl-12"}`}>
              <span
                className={`absolute top-6 left-0 grid h-6 w-6 place-items-center rounded-full border border-accent/50 bg-ink md:left-auto ${
                  i % 2 === 0 ? "md:-right-3" : "md:-left-3"
                }`}
              >
                <span className={`h-2.5 w-2.5 rounded-full ${job.current ? "bg-accent-2 shadow-[0_0_12px_#3ee0cf]" : "bg-accent"}`} />
              </span>
              <div className="card p-6 transition-colors hover:border-accent/40 sm:p-7">
                <div className="mb-3 flex flex-wrap items-center gap-2">
                  <span className="font-mono text-xs text-accent-2">{job.period}</span>
                  {job.current && (
                    <span className="rounded-full bg-emerald-400/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-emerald-300">Current</span>
                  )}
                </div>
                <h3 className="font-display text-xl font-semibold text-white">{job.role}</h3>
                <p className="mb-4 text-sm text-zinc-400">
                  {job.company} · {job.location}
                </p>
                <ul className="space-y-2.5">
                  {job.points.map((p) => (
                    <li key={p} className="flex gap-3 text-sm leading-relaxed text-zinc-400">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

export function Projects() {
  return (
    <Section id="projects" eyebrow="Featured projects" title={<>Things I&apos;ve <span className="text-gradient">built</span></>}>
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            variants={fadeUp}
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 300, damping: 24 }}
            className="card group relative flex flex-col overflow-hidden p-6 transition-colors hover:border-accent/40"
          >
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            <div className="mb-5 flex items-start justify-between">
              <span className="font-mono text-sm text-zinc-600">{String(i + 1).padStart(2, "0")}</span>
              <ArrowUpRight className="h-5 w-5 text-zinc-600 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-2" />
            </div>
            <p className="mb-2 text-xs font-medium uppercase tracking-wider text-accent">{p.category}</p>
            <h3 className="mb-3 font-display text-xl font-semibold text-white">{p.title}</h3>
            <p className="mb-4 text-sm leading-relaxed text-zinc-400">{p.description}</p>
            <ul className="mb-6 space-y-1.5">
              {p.highlights.map((h) => (
                <li key={h} className="flex items-center gap-2 text-sm text-zinc-300">
                  <span className="h-1 w-1 rounded-full bg-accent-2" /> {h}
                </li>
              ))}
            </ul>
            <div className="mt-auto flex flex-wrap gap-2 border-t border-line pt-5">
              {p.tech.map((t) => (
                <span key={t} className="font-mono text-[11px] text-zinc-500">
                  #{t}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </motion.div>
    </Section>
  );
}

export function Education() {
  return (
    <Section id="education" eyebrow="Education & achievements" title={<>Learning & <span className="text-gradient">milestones</span></>}>
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-4">
          {education.map((e, i) => (
            <Reveal key={e.degree} delay={i * 0.08}>
              <div className="card flex items-start gap-5 p-6 transition-colors hover:border-accent/40">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-accent/10 text-accent">
                  <GraduationCap className="h-5 w-5" />
                </span>
                <div className="flex-1">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-display text-lg font-semibold text-white">{e.degree}</h3>
                    <span className="font-mono text-xs text-zinc-500">{e.year}</span>
                  </div>
                  <p className="text-sm text-zinc-400">
                    {e.school}, {e.location}
                  </p>
                  <span className="mt-3 inline-block rounded-full bg-accent-2/10 px-3 py-1 text-xs font-semibold text-accent-2">{e.score}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.15} className="card relative overflow-hidden p-7">
          <div className="pointer-events-none absolute -bottom-24 -left-24 h-56 w-56 rounded-full bg-accent-2/10 blur-3xl" />
          <div className="mb-6 flex items-center gap-3">
            <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-accent to-accent-2 text-ink">
              <Award className="h-5 w-5" />
            </span>
            <h3 className="font-display text-xl font-semibold text-white">Key achievements</h3>
          </div>
          <ul className="space-y-4">
            {achievements.map((a) => (
              <li key={a} className="flex gap-3 text-zinc-300">
                <span className="mt-1.5 grid h-4 w-4 shrink-0 place-items-center rounded-full border border-accent/50">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                </span>
                <span className="text-sm leading-relaxed sm:text-base">{a}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}

export function Contact() {
  const channels = [
    { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    { icon: Phone, label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
    { icon: LinkedinIcon, label: "LinkedIn", value: "pratik-thakkar", href: profile.linkedin },
    { icon: GithubIcon, label: "GitHub", value: "View profile", href: profile.github },
  ];
  return (
    <Section id="contact" eyebrow="Contact" title={<>Let&apos;s build something <span className="text-gradient">great together</span></>}>
      <Reveal className="card relative overflow-hidden p-6 sm:p-10 md:p-14">
        <div className="pointer-events-none absolute -top-32 right-0 h-72 w-72 rounded-full bg-accent/20 blur-[100px]" />
        <div className="relative grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div>
            <p className="text-lg leading-relaxed text-zinc-400">
              I&apos;m open to frontend and full-stack roles, freelance projects and collaborations. Have a project in mind or just want to say hi? My inbox is always open.
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent-2 px-7 py-3.5 text-sm font-semibold text-ink shadow-[0_8px_30px_-8px_rgba(139,123,255,0.6)] transition hover:brightness-110"
            >
              Say hello <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {channels.map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group flex items-center gap-4 rounded-2xl border border-line bg-ink/50 p-4 transition hover:-translate-y-1 hover:border-accent/50"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/[0.05] text-zinc-200 transition group-hover:bg-accent group-hover:text-ink">
                  <Icon className="h-4 w-4" />
                </span>
                <div className="min-w-0">
                  <p className="text-xs text-zinc-500">{label}</p>
                  <p className="truncate text-sm font-medium text-white">{value}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 text-sm text-zinc-500 sm:flex-row sm:px-8">
        <p>
          © {new Date().getFullYear()} {profile.name}. Built with Next.js, Tailwind & Framer Motion.
        </p>
        <div className="flex items-center gap-4">
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="transition hover:text-white">
            <LinkedinIcon className="h-4 w-4" />
          </a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="transition hover:text-white">
            <GithubIcon className="h-4 w-4" />
          </a>
          <a href="#home" className="transition hover:text-white">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
