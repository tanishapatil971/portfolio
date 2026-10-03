import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { PageIntro } from "@/components/portfolio/SiteShell";
import { projects } from "@/lib/portfolio-data";
import startupShot from "@/assets/project-previews/startupos.jpg";
import muhurtaShot from "@/assets/project-previews/muhurta-yatra.jpg";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Tanisha Patil" },
      {
        name: "description",
        content:
          "Explore Tanisha Patil's AI, machine learning, and client web development projects.",
      },
      { property: "og:title", content: "Projects — Tanisha Patil" },
      {
        property: "og:description",
        content: "StartupOS, Muhurta Yatra, and polished digital products.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProjectsPage,
});

const filters = ["All", "AI & Machine Learning", "Web & Client Work"] as const;
const shots = { StartupOS: startupShot, "Muhurta Yatra": muhurtaShot };
function ProjectsPage() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const visible = projects.filter(
    (project) => filter === "All" || project.type === filter,
  );
  return (
    <section className="page-shell">
      <PageIntro
        code="02"
        eyebrow="Selected work"
        title="Thoughtful products, built to be used."
        description="A closer look at the web and AI products I have designed, developed, and delivered."
      />
      <div className="mb-10 flex flex-wrap gap-2">
        {filters.map((item) => (
          <Button
            key={item}
            variant={filter === item ? "default" : "outline"}
            className="rounded-full"
            onClick={() => setFilter(item)}
          >
            {item}
          </Button>
        ))}
      </div>
      <div className="space-y-10">
        {visible.map((project) => (
          <article key={project.title} className="project-panel">
            <div className="project-visual">
              <img
                src={shots[project.title]}
                alt={`${project.title} website preview`}
                className="project-shot"
              />
            </div>
            <div className="p-7 sm:p-10">
              <p className="text-xs font-semibold uppercase text-primary">
                {project.label.replaceAll(" / ", " · ")}
              </p>
              <h2 className="mt-3 font-serif text-5xl">{project.title}</h2>
              <p className="mt-5 max-w-2xl leading-7 text-muted-foreground">
                {project.summary}
              </p>
              <div className="mt-7 grid gap-2 sm:grid-cols-2">
                {project.architecture.map((item) => (
                  <span
                    className="border-l-2 border-primary/25 pl-3 text-sm"
                    key={item}
                  >
                    {item}
                  </span>
                ))}
              </div>
              <div className="mt-7 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span className="tech-chip" key={item}>
                    {item}
                  </span>
                ))}
              </div>
              <Button asChild className="mt-8 rounded-full px-6">
                <a href={project.url} target="_blank" rel="noreferrer">
                  View live project <ArrowUpRight />
                </a>
              </Button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
