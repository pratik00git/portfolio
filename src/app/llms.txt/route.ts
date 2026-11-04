import { aiCapabilities, experience, profile, projects, services, siteUrl, skillGroups, yearsSince } from "@/data/profile";

// Plain-text summary for AI assistants and AI search engines (llmstxt.org format)
export const dynamic = "force-static";

export function GET() {
  const lines = [
    `# ${profile.name} — ${profile.role}`,
    "",
    `> ${profile.tagline} Based in ${profile.location}, with ${yearsSince(profile.careerStart)}+ years of experience.`,
    "",
    ...profile.about.flatMap((p) => [p, ""]),
    "## Experience",
    ...experience.map((e) => `- ${e.role}, ${e.company} (${e.period}): ${e.points[0]}`),
    "",
    "## Projects",
    ...projects.map((p) => `- ${p.title} (${p.category}): ${p.description} Tech: ${p.tech.join(", ")}.`),
    "",
    "## Skills",
    ...skillGroups.map((g) => `- ${g.title}: ${g.items.map((i) => i.name).join(", ")}`),
    "",
    "## Services",
    ...services.map((s) => `- ${s.title}: ${s.description}`),
    "",
    "## AI features I build",
    ...aiCapabilities.map((c) => `- ${c.title}: ${c.description}`),
    "",
    "## Links",
    `- [Portfolio](${siteUrl})`,
    `- [Resume (PDF)](${siteUrl}${profile.resume})`,
    `- [LinkedIn](${profile.linkedin})`,
    `- [GitHub](${profile.github})`,
    `- Email: ${profile.email}`,
  ];

  return new Response(lines.join("\n") + "\n", {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
