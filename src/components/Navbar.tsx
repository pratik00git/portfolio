"use client";

import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { Download, Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navLinks, profile } from "@/data/profile";

type Theme = "light" | "dark";

function currentTheme(): Theme {
  const set = document.documentElement.dataset.theme;
  if (set === "light" || set === "dark") return set;
  return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
}

export function ThemeToggle() {
  // null until mounted, so server and client render the same markup
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => setTheme(currentTheme()), []);

  const toggle = () => {
    const next: Theme = currentTheme() === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {}
    setTheme(next);
  };

  return (
    <button
      onClick={toggle}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      className="relative grid h-10 w-10 place-items-center overflow-hidden rounded-full border border-line text-fg transition hover:border-accent/30 hover:bg-fg/[0.05]"
    >
      <AnimatePresence mode="wait" initial={false}>
        {theme && (
          <motion.span
            key={theme}
            initial={{ y: 14, rotate: -90, opacity: 0 }}
            animate={{ y: 0, rotate: 0, opacity: 1 }}
            exit={{ y: -14, rotate: 90, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {theme === "dark" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the nav link for the section currently in view
  useEffect(() => {
    const sections = navLinks
      .map((l) => document.querySelector(l.href))
      .filter((el): el is Element => el !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(`#${e.target.id}`));
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5">
      <motion.div style={{ scaleX: progress }} className="fixed inset-x-0 top-0 h-0.5 origin-left bg-gradient-to-r from-accent to-accent-2" />
      <nav
        className={`mx-auto flex h-14 max-w-6xl items-center justify-between rounded-full border pr-2 pl-2 transition-all duration-300 sm:pl-3 ${
          scrolled || open ? "border-line bg-panel/75 shadow-lg shadow-black/5 backdrop-blur-xl" : "border-transparent"
        }`}
      >
        <a href="#home" className="flex items-center gap-2.5 font-display font-bold text-fg">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-accent to-accent-2 text-sm text-ink">
            {profile.initials}
          </span>
          <span className="hidden sm:inline">{profile.name}</span>
        </a>

        <ul className="hidden items-center gap-0.5 lg:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`relative rounded-full px-3.5 py-2 text-sm transition-colors ${
                  active === l.href ? "text-fg" : "text-muted hover:text-fg"
                }`}
              >
                {active === l.href && (
                  <motion.span layoutId="nav-pill" className="absolute inset-0 -z-10 rounded-full bg-fg/[0.07]" transition={{ type: "spring", stiffness: 380, damping: 30 }} />
                )}
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href={profile.resume}
            download
            className="hidden items-center gap-2 rounded-full bg-fg px-4 py-2.5 text-sm font-semibold text-ink transition hover:bg-fg/85 sm:inline-flex"
          >
            <Download className="h-4 w-4" /> Resume
          </a>
          <button
            onClick={() => setOpen((o) => !o)}
            className="grid h-10 w-10 place-items-center rounded-full border border-line text-fg lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="mx-auto mt-2 max-w-6xl rounded-3xl border border-line bg-panel p-3 shadow-xl shadow-black/10 lg:hidden"
          >
            <ul className="grid grid-cols-2 gap-1">
              {navLinks.map((l, i) => (
                <motion.li key={l.href} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.03 * i }}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className={`block rounded-2xl px-4 py-3.5 font-display text-lg font-semibold transition-colors ${
                      active === l.href ? "bg-fg/[0.06] text-fg" : "text-muted hover:bg-fg/[0.04] hover:text-fg"
                    }`}
                  >
                    {l.label}
                  </a>
                </motion.li>
              ))}
            </ul>
            <a
              href={profile.resume}
              download
              className="mt-3 flex items-center justify-center gap-2 rounded-2xl bg-fg px-5 py-3.5 text-sm font-semibold text-ink"
            >
              <Download className="h-4 w-4" /> Download Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
