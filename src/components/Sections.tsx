"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  Award,
  Briefcase,
  Check,
  Code2,
  Database,
  Gauge,
  GraduationCap,
  Layers,
  Mail,
  MapPin,
  Palette,
  Phone,
  Smartphone,
  Sparkles,
  Wrench,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { useState } from "react";
import { achievements, education, experience, profile, projects, skillGroups, type SkillGroup, type SkillLevel } from "@/data/profile";
import { Chip, fadeUp, GithubIcon, LinkedinIcon, Reveal, Section, stagger, yearsSince } from "./ui";

const highlightIcons = [Smartphone, Code2, Zap, Sparkles];

export function About() {
  const years = yearsSince(profile.careerStart);
  return (
    <Section id="about" eyebrow="About me" title={<>Turning ideas into <span className="text-gradient">delightful interfaces</span></>}>
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
      >
        <motion.div variants={fadeUp} className="card relative overflow-hidden p-7 sm:col-span-2 lg:row-span-5 sm:p-8">
          <div className="glow pointer-events-none absolute -top-24 -left-24 h-56 w-56 rounded-full bg-accent/15 blur-3xl" />
          <div className="relative space-y-4 text-base leading-relaxed text-muted">
            {profile.about.map((p, i) => (
              <p key={p.slice(0, 20)} className={i === 0 ? "font-display text-lg font-medium leading-relaxed text-fg" : ""}>
                {p}
              </p>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="relative overflow-hidden rounded-[1.25rem] bg-gradient-to-br from-accent to-accent-2 p-7 text-ink sm:col-span-2"
        >
          <Briefcase className="absolute -right-4 -bottom-6 h-32 w-32 opacity-15" />
          <p className="text-xs font-semibold tracking-wider uppercase opacity-80">Currently</p>
          <p className="mt-2 font-display text-2xl font-bold">{profile.role}</p>
          <p className="mt-1 opacity-90">Alian Software · handling the Entertainment web app for an Australian product team</p>
        </motion.div>

        <motion.div variants={fadeUp} className="card flex flex-col justify-between p-6">
          <p className="font-display text-5xl font-extrabold text-gradient">{years}+</p>
          <p className="mt-2 text-sm text-muted">Years building production web apps</p>
        </motion.div>
        <motion.div variants={fadeUp} className="card flex flex-col justify-between p-6">
          <p className="font-display text-5xl font-extrabold text-gradient">{projects.length}+</p>
          <p className="mt-2 text-sm text-muted">Projects shipped for India, AUS & NZ</p>
        </motion.div>

        <motion.div variants={fadeUp} className="card flex items-start gap-4 p-6">
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent/10 text-accent">
            <MapPin className="h-5 w-5" />
          </span>
          <div>
            <p className="text-xs tracking-wider text-subtle uppercase">Based in</p>
            <p className="font-medium text-fg">{profile.location}</p>
            <p className="text-xs text-subtle">IST · comfortable with AUS time zones</p>
          </div>
        </motion.div>
        <motion.div variants={fadeUp} className="card flex items-start gap-4 p-6">
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent-2/10 text-accent-2">
            <GraduationCap className="h-5 w-5" />
          </span>
          <div>
            <p className="text-xs tracking-wider text-subtle uppercase">Education</p>
            <p className="font-medium text-fg">M.Sc. IT — ISTAR</p>
            <p className="text-xs text-subtle">8.24 CGPA</p>
          </div>
        </motion.div>

        {profile.highlights.map((h, i) => {
          const Icon = highlightIcons[i % highlightIcons.length];
          return (
            <motion.div key={h.value} variants={fadeUp} className="card group p-6 transition-colors hover:border-accent/25">
              <Icon className="mb-4 h-5 w-5 text-accent transition-transform group-hover:scale-110" />
              <p className="font-display text-lg font-bold text-fg">{h.value}</p>
              <p className="mt-1 text-sm leading-relaxed text-muted">{h.label}</p>
            </motion.div>
          );
        })}
      </motion.div>
    </Section>
  );
}

const skillIcons: Record<SkillGroup["key"], LucideIcon> = {
  frontend: Code2,
  styling: Palette,
  state: Database,
  quality: Gauge,
  ai: Sparkles,
  backend: Layers,
  tools: Wrench,
};

const levelMeta: Record<SkillLevel, { dots: number; className: string }> = {
  Expert: { dots: 4, className: "text-accent-2" },
  Advanced: { dots: 3, className: "text-accent" },
  Proficient: { dots: 2, className: "text-fg/80" },
  Learning: { dots: 1, className: "text-subtle" },
};

export function Skills() {
  const [activeKey, setActiveKey] = useState<SkillGroup["key"]>(skillGroups[0].key);
  const active = skillGroups.find((g) => g.key === activeKey) ?? skillGroups[0];
  const ActiveIcon = skillIcons[active.key];
  const total = skillGroups.reduce((n, g) => n + g.items.length, 0);

  return (
    <Section id="skills" eyebrow="Technical skills" title={<>Tools & technologies <span className="text-gradient">I work with</span></>}>
      <Reveal className="-mt-6 mb-10 flex flex-wrap items-center justify-between gap-4 md:-mt-10">
        <p className="max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
          {total}+ skills across the modern frontend stack — from core frameworks and styling to performance, testing and AI.
        </p>
        <div className="flex flex-wrap gap-3 text-xs text-subtle">
          {(Object.keys(levelMeta) as SkillLevel[]).map((l) => (
            <span key={l} className="flex items-center gap-1.5">
              <LevelDots level={l} /> {l}
            </span>
          ))}
        </div>
      </Reveal>

      <div className="grid gap-5 lg:grid-cols-[280px_1fr]">
        <Reveal>
          <div role="tablist" aria-label="Skill categories" className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-2 sm:mx-0 sm:px-0 lg:flex-col lg:overflow-visible lg:pb-0">
            {skillGroups.map((g) => {
              const Icon = skillIcons[g.key];
              const selected = g.key === activeKey;
              return (
                <button
                  key={g.key}
                  role="tab"
                  aria-selected={selected}
                  onClick={() => setActiveKey(g.key)}
                  className={`relative flex shrink-0 items-center gap-3 rounded-xl px-4 py-3 text-left text-sm font-medium transition-colors ${
                    selected ? "text-fg" : "text-muted hover:bg-fg/[0.03] hover:text-fg"
                  }`}
                >
                  {selected && (
                    <motion.span
                      layoutId="skill-tab"
                      className="absolute inset-0 -z-10 rounded-xl border border-accent/40 bg-gradient-to-r from-accent/15 to-accent-2/5"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  <Icon className={`h-4 w-4 ${selected ? "text-accent-2" : ""}`} />
                  <span className="whitespace-nowrap">{g.title}</span>
                  <span className="ml-auto hidden font-mono text-xs text-subtle lg:inline">{g.items.length}</span>
                </button>
              );
            })}
          </div>
        </Reveal>

        <Reveal delay={0.1} className="card relative overflow-hidden p-6 sm:p-8">
          <div className="glow pointer-events-none absolute -top-24 -right-24 h-56 w-56 rounded-full bg-accent/15 blur-3xl" />
          <AnimatePresence mode="wait">
            <motion.div
              key={active.key}
              role="tabpanel"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className="relative"
            >
              <div className="mb-6 flex items-start gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-accent to-accent-2 text-ink">
                  <ActiveIcon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-display text-xl font-semibold text-fg">{active.title}</h3>
                  <p className="text-sm text-muted">{active.blurb}</p>
                </div>
              </div>
              <ul className="grid gap-3 sm:grid-cols-2">
                {active.items.map((s, i) => (
                  <motion.li
                    key={s.name}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.03 * i }}
                    className="flex items-center justify-between gap-3 rounded-xl border border-line bg-ink/50 px-4 py-3 transition-colors hover:border-accent/25"
                  >
                    <span className="text-sm font-medium text-fg/90">{s.name}</span>
                    <span className={`flex shrink-0 items-center gap-2 text-[11px] font-medium ${levelMeta[s.level].className}`}>
                      <LevelDots level={s.level} />
                      <span className="hidden sm:inline">{s.level}</span>
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        </Reveal>
      </div>
    </Section>
  );
}

function LevelDots({ level }: { level: SkillLevel }) {
  const { dots } = levelMeta[level];
  return (
    <span className="flex gap-0.5" aria-label={level}>
      {[0, 1, 2, 3].map((i) => (
        <span key={i} className={`h-1.5 w-1.5 rounded-full ${i < dots ? "bg-gradient-to-r from-accent to-accent-2" : "bg-fg/10"}`} />
      ))}
    </span>
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
                <span className={`h-2.5 w-2.5 rounded-full ${job.current ? "bg-accent-2 shadow-[0_0_8px_color-mix(in_srgb,var(--accent-2)_45%,transparent)]" : "bg-accent"}`} />
              </span>
              <div className="card p-6 transition-colors hover:border-accent/25 sm:p-7">
                <div className="mb-3 flex flex-wrap items-center gap-2">
                  <span className="font-mono text-xs text-accent-2">{job.period}</span>
                  {job.current && (
                    <span className="rounded-full bg-success/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-success">Current</span>
                  )}
                </div>
                <h3 className="font-display text-xl font-semibold text-fg">{job.role}</h3>
                <p className="mb-4 text-sm text-muted">
                  {job.company} · {job.location}
                </p>
                <ul className="space-y-2.5">
                  {job.points.map((p) => (
                    <li key={p} className="flex gap-3 text-sm leading-relaxed text-muted">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      {p}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex flex-wrap gap-2 border-t border-line pt-4">
                  {job.tech.map((t) => (
                    <Chip key={t}>{t}</Chip>
                  ))}
                </div>
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
        {projects.map((p, i) => {
          // The first project with a badge is the long-term featured client
          const featured = i === 0 && Boolean(p.badge);
          return (
            <motion.article
              key={p.title}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
              className={`card group relative flex flex-col overflow-hidden p-6 transition-colors hover:border-accent/25 ${
                featured ? "sm:col-span-2 lg:row-span-2 sm:p-8" : ""
              }`}
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              {featured && (
                <div className="glow pointer-events-none absolute -right-24 -bottom-24 h-72 w-72 rounded-full bg-accent-2/12 blur-3xl" />
              )}
              <div className="relative mb-5 flex items-start justify-between">
                <span className="flex items-center gap-2">
                  <span className="font-mono text-sm text-subtle/70">{String(i + 1).padStart(2, "0")}</span>
                  {p.badge && (
                    <span className="rounded-full bg-success/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-success">{p.badge}</span>
                  )}
                  {featured && (
                    <span className="rounded-full bg-accent/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-accent">Featured</span>
                  )}
                </span>
                <ArrowUpRight className="h-5 w-5 text-subtle/70 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-2" />
              </div>
              <p className="relative mb-2 text-xs font-medium uppercase tracking-wider text-accent">{p.category}</p>
              <h3 className={`relative mb-3 font-display font-semibold text-fg ${featured ? "text-2xl sm:text-3xl" : "text-xl"}`}>{p.title}</h3>
              <p className={`relative mb-5 leading-relaxed text-muted ${featured ? "max-w-2xl text-base" : "text-sm"}`}>{p.description}</p>
              <ul className={`relative mb-6 ${featured ? "grid gap-3 sm:grid-cols-2" : "space-y-1.5"}`}>
                {p.highlights.map((h) =>
                  featured ? (
                    <li key={h} className="flex items-center gap-3 rounded-xl border border-line bg-ink/40 px-4 py-3 text-sm font-medium text-fg/90">
                      <Check className="h-4 w-4 shrink-0 text-accent-2" /> {h}
                    </li>
                  ) : (
                    <li key={h} className="flex items-center gap-2 text-sm text-fg/80">
                      <span className="h-1 w-1 rounded-full bg-accent-2" /> {h}
                    </li>
                  ),
                )}
              </ul>
              <div className="relative mt-auto flex flex-wrap gap-2 border-t border-line pt-5">
                {p.tech.map((t) =>
                  featured ? (
                    <Chip key={t}>{t}</Chip>
                  ) : (
                    <span key={t} className="font-mono text-[11px] text-subtle">
                      #{t}
                    </span>
                  ),
                )}
              </div>
            </motion.article>
          );
        })}
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
              <div className="card flex items-start gap-5 p-6 transition-colors hover:border-accent/25">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-accent/10 text-accent">
                  <GraduationCap className="h-5 w-5" />
                </span>
                <div className="flex-1">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-display text-lg font-semibold text-fg">{e.degree}</h3>
                    <span className="font-mono text-xs text-subtle">{e.year}</span>
                  </div>
                  <p className="text-sm text-muted">
                    {e.school}, {e.location}
                  </p>
                  <span className="mt-3 inline-block rounded-full bg-accent-2/10 px-3 py-1 text-xs font-semibold text-accent-2">{e.score}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.15} className="card relative overflow-hidden p-7">
          <div className="glow pointer-events-none absolute -bottom-24 -left-24 h-56 w-56 rounded-full bg-accent-2/10 blur-3xl" />
          <div className="mb-6 flex items-center gap-3">
            <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-accent to-accent-2 text-ink">
              <Award className="h-5 w-5" />
            </span>
            <h3 className="font-display text-xl font-semibold text-fg">Key achievements</h3>
          </div>
          <ul className="space-y-4">
            {achievements.map((a) => (
              <li key={a} className="flex gap-3 text-fg/80">
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
        <div className="glow pointer-events-none absolute -top-32 right-0 h-72 w-72 rounded-full bg-accent/12 blur-[100px]" />
        <div className="relative grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div>
            <p className="text-lg leading-relaxed text-muted">
              I&apos;m open to frontend and full-stack roles, freelance projects and collaborations. Have a project in mind or just want to say hi? My inbox is always open.
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent-2 px-7 py-3.5 text-sm font-semibold text-ink shadow-soft transition hover:brightness-110"
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
                className="group flex items-center gap-4 rounded-2xl border border-line bg-ink/50 p-4 transition hover:-translate-y-1 hover:border-accent/30"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-fg/[0.05] text-fg/90 transition group-hover:bg-accent group-hover:text-ink">
                  <Icon className="h-4 w-4" />
                </span>
                <div className="min-w-0">
                  <p className="text-xs text-subtle">{label}</p>
                  <p className="truncate text-sm font-medium text-fg">{value}</p>
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
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 text-sm text-subtle sm:flex-row sm:px-8">
        <p>
          © {new Date().getFullYear()} {profile.name}. Built with Next.js, Tailwind & Framer Motion.
        </p>
        <div className="flex items-center gap-4">
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="transition hover:text-fg">
            <LinkedinIcon className="h-4 w-4" />
          </a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="transition hover:text-fg">
            <GithubIcon className="h-4 w-4" />
          </a>
          <a href="#home" className="transition hover:text-fg">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
