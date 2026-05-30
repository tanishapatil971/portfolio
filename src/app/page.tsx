import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Achievements } from "@/components/Achievements";
import { Activities } from "@/components/Activities";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-[#050b14] min-h-screen text-slate-200 font-sans selection:bg-blue-500 selection:text-white">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 top-24 w-96 h-96 rounded-full bg-blue-500/20 blur-3xl animate-blob" />
        <div className="absolute right-0 bottom-0 w-[520px] h-[520px] rounded-full bg-cyan-400/20 blur-3xl animate-blob" style={{ animationDelay: "1.5s" }} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.12),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(34,211,238,0.1),transparent_20%)] animate-background-shift" />
        <div className="absolute inset-x-0 top-1/2 h-px bg-[linear-gradient(to_right,transparent,rgba(56,189,248,0.16),transparent)] animate-wave-x" />
      </div>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Education />
      <Skills />
      <Projects />
      <Achievements />
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
