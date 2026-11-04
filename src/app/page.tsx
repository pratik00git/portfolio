import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import { About, Contact, Education, Experience, Footer, Projects, Skills } from "@/components/Sections";
import { AISection, Process, Services, TechMarquee } from "@/components/Showcase";
import { education, experience, profile, projects, siteUrl, skillGroups } from "@/data/profile";

const personId = `${siteUrl}/#person`;
const websiteId = `${siteUrl}/#website`;

// Structured data (schema.org) so search engines understand who this portfolio belongs to
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": websiteId,
      url: siteUrl,
      name: `${profile.name} — Portfolio`,
      description: profile.tagline,
      inLanguage: "en",
      author: { "@id": personId },
      publisher: { "@id": personId },
    },
    {
      "@type": "ProfilePage",
      "@id": `${siteUrl}/#profilepage`,
      url: siteUrl,
      name: `${profile.name} — ${profile.role}`,
      isPartOf: { "@id": websiteId },
      mainEntity: { "@id": personId },
      dateModified: new Date().toISOString(),
      inLanguage: "en",
    },
    {
      "@type": "Person",
      "@id": personId,
      name: profile.name,
      givenName: "Pratik",
      familyName: "Thakkar",
      jobTitle: profile.role,
      description: profile.tagline,
      url: siteUrl,
      image: `${siteUrl}/opengraph-image`,
      email: `mailto:${profile.email}`,
      address: { "@type": "PostalAddress", addressLocality: "Anand", addressRegion: "Gujarat", addressCountry: "IN" },
      worksFor: { "@type": "Organization", name: experience[0].company },
      alumniOf: education.slice(0, 2).map((e) => ({ "@type": "EducationalOrganization", name: e.school })),
      hasOccupation: {
        "@type": "Occupation",
        name: profile.role,
        occupationLocation: { "@type": "Country", name: "India" },
        skills: skillGroups.flatMap((g) => g.items.filter((i) => i.level === "Expert" || i.level === "Advanced").map((i) => i.name)).join(", "),
      },
      knowsAbout: ["Next.js", "React", "Redux", "TypeScript", "JavaScript", "Tailwind CSS", "Web Application Development", "Responsive Design", "AI / LLM Integration"],
      sameAs: [profile.linkedin, profile.github],
    },
    {
      "@type": "ItemList",
      "@id": `${siteUrl}/#projects`,
      name: "Featured projects",
      itemListElement: projects.map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "CreativeWork",
          name: p.title,
          description: p.description,
          genre: p.category,
          keywords: p.tech.join(", "),
          creator: { "@id": personId },
        },
      })),
    },
  ],
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />
      <main className="overflow-x-clip">
        <Hero />
        <TechMarquee />
        <About />
        <Services />
        <Skills />
        <AISection />
        <Experience />
        <Projects />
        <Process />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
