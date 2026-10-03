import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import resumeUrl from "@/assets/Tanisha_Patil_CV.pdf?url";
import startupShot from "@/assets/project-previews/startupos.jpg";
import muhurtaShot from "@/assets/project-previews/muhurta-yatra.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tanisha Patil — Web Developer & AIML Student" },
      {
        name: "description",
        content:
          "Portfolio of Tanisha Patil, a web developer and CSE (AIML) student creating polished digital products and intelligent applications.",
      },
      {
        property: "og:title",
        content: "Tanisha Patil — Web Developer & AIML Student",
      },
      {
        property: "og:description",
        content: "Selected web development and AI projects by Tanisha Patil.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <section className="editorial-hero">
        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 py-16 lg:px-8">
          <div className="grid items-end gap-12 lg:grid-cols-[1fr_.48fr]">
            <div className="kinetic-reveal">
              <div className="mb-8 flex items-center gap-3 text-xs font-semibold uppercase text-primary">
                <span className="h-px w-10 bg-primary" />
                Portfolio · 2026
              </div>
              <h1 className="font-serif text-7xl leading-[.82] sm:text-8xl lg:text-[8.5rem]">
                Tanisha
                <br />
                <span className="ml-[8%] italic text-primary">Patil.</span>
              </h1>
              <p className="mt-12 max-w-xl text-xl leading-8 text-muted-foreground">
                I&apos;m a{" "}
                <strong className="font-medium text-foreground">
                  web developer
                </strong>{" "}
                and CSE (AIML) student who creates thoughtful, responsive
                digital products—from client websites to AI-powered platforms.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Button asChild size="lg" className="h-12 rounded-full px-7">
                  <Link to="/projects">
                    Explore my work <ArrowRight />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="h-12 rounded-full px-7"
                >
                  <a href={resumeUrl} target="_blank" rel="noreferrer">
                    View resume <FileText />
                  </a>
                </Button>
              </div>
            </div>
            <div className="kinetic-reveal-delay flex flex-col gap-8 lg:items-end">
              <div className="editorial-card relative max-w-xs p-8">
                <span className="absolute -right-2 -top-2 size-5 rounded-full bg-primary" />
                <p className="text-xs font-semibold uppercase text-muted-foreground">
                  Current focus
                </p>
                <h2 className="mt-4 font-serif text-4xl leading-none">
                  Web
                  <br />
                  Developer
                </h2>
                <p className="mt-5 text-sm text-muted-foreground">
                  Based in Pune, India
                  <br />
                  Open to opportunities
                </p>
              </div>
              <Link
                to="/contact"
                className="group flex items-center gap-5 text-sm font-semibold"
              >
                Let&apos;s work together{" "}
                <span className="grid size-12 place-items-center rounded-full border border-border transition group-hover:translate-x-1 group-hover:border-primary">
                  <ArrowRight className="size-4" />
                </span>
              </Link>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-6 border-t border-border pt-7 text-sm sm:grid-cols-4">
            <div>
              <span className="block text-xs text-muted-foreground">
                Education
              </span>
              PCCOE · CSE (AIML)
            </div>
            <div>
              <span className="block text-xs text-muted-foreground">
                Academic record
              </span>
              8.6 CGPA
            </div>
            <div>
              <span className="block text-xs text-muted-foreground">
                Core stack
              </span>
              React · TypeScript
            </div>
            <div>
              <span className="block text-xs text-muted-foreground">
                Special interest
              </span>
              AI-powered products
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-secondary/60 py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mb-12 flex items-end justify-between gap-6">
            <div>
              <p className="text-xs font-semibold uppercase text-primary">
                Selected work
              </p>
              <h2 className="mt-3 font-serif text-5xl sm:text-6xl">
                Projects with purpose.
              </h2>
            </div>
            <Link
              to="/projects"
              className="hidden items-center gap-2 text-sm font-semibold sm:flex"
            >
              View all projects <ArrowRight className="size-4" />
            </Link>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            <a
              href="https://startupos-ochre.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="project-panel block"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={startupShot}
                  alt="StartupOS AI platform interface"
                  className="project-shot"
                />
              </div>
              <div className="p-7">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase text-primary">
                      AI Product · Featured
                    </p>
                    <h3 className="mt-2 font-serif text-4xl">StartupOS</h3>
                  </div>
                  <ArrowUpRight />
                </div>
                <p className="mt-4 leading-7 text-muted-foreground">
                  An AI-powered command center that helps founders understand
                  risks, opportunities, and their next best actions.
                </p>
              </div>
            </a>
            <a
              href="https://www.muhurtayatra.com/"
              target="_blank"
              rel="noreferrer"
              className="project-panel block"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={muhurtaShot}
                  alt="Muhurta Yatra travel website"
                  className="project-shot"
                />
              </div>
              <div className="p-7">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase text-primary">
                      Client Website
                    </p>
                    <h3 className="mt-2 font-serif text-4xl">Muhurta Yatra</h3>
                  </div>
                  <ArrowUpRight />
                </div>
                <p className="mt-4 leading-7 text-muted-foreground">
                  An immersive travel website with custom booking, responsive
                  journeys, and a memorable visual identity.
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[.7fr_1.3fr] lg:px-8">
          <div>
            <p className="text-xs font-semibold uppercase text-primary">
              How I work
            </p>
            <h2 className="mt-3 font-serif text-5xl">
              A builder with both sides in view.
            </h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="editorial-card p-7">
              <span className="text-sm text-primary">01</span>
              <h3 className="mt-8 text-xl font-semibold">
                Design with clarity
              </h3>
              <p className="mt-3 leading-7 text-muted-foreground">
                Interfaces should feel inviting and make the product&apos;s
                purpose obvious within seconds.
              </p>
            </div>
            <div className="editorial-card p-7">
              <span className="text-sm text-primary">02</span>
              <h3 className="mt-8 text-xl font-semibold">
                Engineer for real use
              </h3>
              <p className="mt-3 leading-7 text-muted-foreground">
                I turn ideas into responsive, maintainable products using modern
                web and AI tools.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
