import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Activities } from "@/components/Activities";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <main className="bg-[#050b14] min-h-screen text-slate-200 font-sans selection:bg-blue-500 selection:text-white">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Education />
      <Skills />
      <Projects />
      <Activities />
      <Contact />
      
      {/* Footer */}
      <footer className="py-8 text-center border-t border-slate-800/50">
        <p className="text-slate-500 text-sm">
          Designed & Built by Tanisha Patil &copy; {new Date().getFullYear()}
        </p>
      </footer>
    </main>
  );
}
