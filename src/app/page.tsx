import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import { About, Contact, Education, Experience, Footer, Projects, Skills } from "@/components/Sections";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="overflow-x-clip">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
