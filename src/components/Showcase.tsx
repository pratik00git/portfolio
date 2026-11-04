"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Bot,
  Check,
  Code2,
  FileText,
  Gauge,
  LayoutTemplate,
  MessageSquare,
  PenLine,
  Plug,
  Search,
  Send,
  Sparkles,
  Wand2,
  type LucideIcon,
} from "lucide-react";
import { useEffect, useState } from "react";
import { aiCapabilities, aiWorkflow, services, techStrip, workProcess } from "@/data/profile";
import { Chip, fadeUp, Reveal, Section, stagger } from "./ui";

const icons: Record<string, LucideIcon> = {
  code: Code2,
  layout: LayoutTemplate,
  sparkles: Sparkles,
  gauge: Gauge,
  plug: Plug,
  wand: Wand2,
  message: MessageSquare,
  search: Search,
  pen: PenLine,
  file: FileText,
  bot: Bot,
};

export function TechMarquee() {
  const items = [...techStrip, ...techStrip];
  return (
    <div className="border-y border-line bg-fg/[0.015] py-5">
      <div className="mask-fade-x overflow-hidden">
        <div className="flex w-max animate-marquee gap-10 hover:[animation-play-state:paused]">
          {items.map((t, i) => (
            <span key={i} aria-hidden={i >= techStrip.length} className="flex items-center gap-3 font-display text-sm font-semibold whitespace-nowrap text-subtle">
              <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-accent to-accent-2" />
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Services() {
  return (
    <Section id="services" eyebrow="What I do" title={<>Services I can <span className="text-gradient">help you with</span></>}>
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
      >
        {services.map((s) => {
          const Icon = icons[s.icon];
          return (
            <motion.div
              key={s.title}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="card group relative overflow-hidden p-7 transition-colors hover:border-accent/25"
            >
              <div className="glow pointer-events-none absolute -top-20 -right-20 h-40 w-40 rounded-full bg-accent/10 blur-3xl transition-colors group-hover:bg-accent/15" />
              <span className="mb-5 grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-accent/20 to-accent-2/20 text-fg transition group-hover:from-accent group-hover:to-accent-2 group-hover:text-ink">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mb-2 font-display text-lg font-semibold text-fg">{s.title}</h3>
              <p className="mb-5 text-sm leading-relaxed text-muted">{s.description}</p>
              <ul className="space-y-2">
                {s.points.map((p) => (
                  <li key={p} className="flex items-center gap-2 text-sm text-fg/80">
                    <Check className="h-3.5 w-3.5 text-accent-2" /> {p}
                  </li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </motion.div>
    </Section>
  );
}

const demoQuestion = "Which membership plan suits a family of four?";
const demoAnswer =
  "Based on your location and interests, the Family Plus plan is the best fit — it covers 4 members, includes dining and activity offers, and saves about 30% compared to individual plans.";

// Looping mock of a streaming chat response
function ChatDemo() {
  const reduce = useReducedMotion();
  const [chars, setChars] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => setChars((c) => (c > demoAnswer.length + 60 ? 0 : c + 2)), 35);
    return () => clearInterval(id);
  }, [reduce]);

  const shown = reduce ? demoAnswer : demoAnswer.slice(0, chars);
  const streaming = !reduce && chars < demoAnswer.length;

  return (
    <div className="card flex h-full flex-col overflow-hidden">
      <div className="flex items-center justify-between border-b border-line px-5 py-3.5">
        <div className="flex items-center gap-2.5">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-accent to-accent-2 text-ink">
            <Sparkles className="h-4 w-4" />
          </span>
          <div>
            <p className="text-sm font-semibold text-fg">AI Assistant</p>
            <p className="text-[11px] text-subtle">Next.js · Vercel AI SDK · Claude</p>
          </div>
        </div>
        <span className="flex items-center gap-1.5 text-[11px] text-success">
          <span className="h-1.5 w-1.5 rounded-full bg-success" /> Live demo
        </span>
      </div>
      <div className="flex-1 space-y-4 p-5">
        <div className="ml-auto max-w-[85%] rounded-2xl rounded-br-md bg-accent/90 px-4 py-2.5 text-sm text-ink">{demoQuestion}</div>
        <div className="flex max-w-[92%] gap-2.5">
          <span className="mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-md bg-fg/[0.06] text-accent-2">
            <Bot className="h-3.5 w-3.5" />
          </span>
          <div className="min-h-[96px] rounded-2xl rounded-tl-md border border-line bg-ink/60 px-4 py-2.5 text-sm leading-relaxed text-fg/80">
            {shown}
            {streaming && <span className="ml-0.5 inline-block h-3.5 w-1.5 translate-y-0.5 animate-blink bg-accent-2" />}
          </div>
        </div>
      </div>
      <div className="m-4 mt-0 flex items-center gap-2 rounded-xl border border-line bg-ink/60 px-4 py-2.5 text-sm text-subtle">
        <span className="flex-1">Ask anything…</span>
        <span className="grid h-7 w-7 place-items-center rounded-lg bg-fg/[0.06] text-fg/80">
          <Send className="h-3.5 w-3.5" />
        </span>
      </div>
    </div>
  );
}

export function AISection() {
  return (
    <Section id="ai" eyebrow="AI-powered development" title={<>Building with <span className="text-gradient">AI</span>, for the web</>}>
      <Reveal className="-mt-6 mb-12 max-w-2xl text-base leading-relaxed text-muted sm:text-lg md:-mt-10">
        I combine solid frontend engineering with modern LLM APIs to add genuinely useful AI features to products — and I use AI tools every day to
        deliver cleaner code, faster.
      </Reveal>

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
      >
        {aiCapabilities.map((c) => {
          const Icon = icons[c.icon];
          return (
            <motion.div key={c.title} variants={fadeUp} className="card group relative overflow-hidden p-6 transition-colors hover:border-accent-2/25">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-2 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="mb-4 flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-accent-2/10 text-accent-2">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="font-display text-base font-semibold text-fg">{c.title}</h3>
              </div>
              <p className="mb-5 text-sm leading-relaxed text-muted">{c.description}</p>
              <div className="flex flex-wrap gap-2">
                {c.stack.map((s) => (
                  <span key={s} className="font-mono text-[11px] text-subtle">
                    #{s}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      <div className="mt-8 grid gap-5 lg:grid-cols-2">
        <Reveal>
          <ChatDemo />
        </Reveal>
        <Reveal delay={0.1} className="card relative overflow-hidden p-7">
          <div className="glow pointer-events-none absolute -right-24 -bottom-24 h-56 w-56 rounded-full bg-accent/15 blur-3xl" />
          <p className="mb-2 font-mono text-xs tracking-[0.2em] text-accent-2 uppercase">My AI workflow</p>
          <h3 className="mb-5 font-display text-xl font-semibold text-fg">How AI makes me a faster developer</h3>
          <ul className="mb-7 space-y-3">
            {aiWorkflow.uses.map((u) => (
              <li key={u} className="flex gap-3 text-sm leading-relaxed text-fg/80">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-2" />
                {u}
              </li>
            ))}
          </ul>
          <p className="mb-3 text-xs tracking-wider text-subtle uppercase">Tools I use daily</p>
          <div className="relative flex flex-wrap gap-2">
            {aiWorkflow.tools.map((t) => (
              <Chip key={t}>{t}</Chip>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

export function Process() {
  return (
    <Section id="process" eyebrow="How I work" title={<>From idea to <span className="text-gradient">launch</span></>}>
      <motion.ol
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
      >
        {workProcess.map((p) => (
          <motion.li key={p.step} variants={fadeUp} className="card group relative overflow-hidden p-6 transition-colors hover:border-accent/25">
            <span className="pointer-events-none absolute -top-4 -right-2 font-display text-8xl font-extrabold text-fg/[0.04] transition-colors group-hover:text-accent/10">
              {p.step}
            </span>
            <span className="relative mb-5 grid h-11 w-11 place-items-center rounded-full border border-accent/50 bg-ink font-mono text-sm font-semibold text-accent-2">
              {p.step}
            </span>
            <h3 className="mb-2 font-display text-lg font-semibold text-fg">{p.title}</h3>
            <p className="text-sm leading-relaxed text-muted">{p.description}</p>
          </motion.li>
        ))}
      </motion.ol>
    </Section>
  );
}
