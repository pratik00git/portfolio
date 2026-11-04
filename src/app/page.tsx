import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import { About, Contact, Education, Experience, Footer, Projects, Skills } from "@/components/Sections";
import { AISection, Process, Services, TechMarquee } from "@/components/Showcase";
import { education, profile, siteUrl } from "@/data/profile";

// Structured data so search engines understand who this portfolio belongs to
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  url: siteUrl,
  mainEntity: {
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.role,
    description: profile.tagline,
    url: siteUrl,
    image: `${siteUrl}/opengraph-image`,
    email: `mailto:${profile.email}`,
    address: { "@type": "PostalAddress", addressLocality: "Anand", addressRegion: "Gujarat", addressCountry: "IN" },
    worksFor: { "@type": "Organization", name: "Alian Software" },
    alumniOf: education.slice(0, 2).map((e) => ({ "@type": "EducationalOrganization", name: e.school })),
    sameAs: [profile.linkedin, profile.github],
    knowsAbout: ["Next.js", "React", "Redux", "TypeScript", "JavaScript", "Tailwind CSS", "Web Application Development", "Responsive Design", "AI / LLM Integration"],
  },
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
