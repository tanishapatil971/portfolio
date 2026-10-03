import { createFileRoute } from "@tanstack/react-router";
import { Activity, Building2, CalendarDays, GraduationCap } from "lucide-react";
import { HudPanel, PageIntro } from "@/components/portfolio/SiteShell";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Experience & Academics — Tanisha Patil" },
      {
        name: "description",
        content:
          "Tanisha Patil's web development experience at Probity Technologies and academic record at PCCOE.",
      },
      {
        property: "og:title",
        content: "Experience & Academics — Tanisha Patil",
      },
      {
        property: "og:description",
        content:
          "Engineering experience, education timeline, and academic milestones.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ExperiencePage,
});

const education = [
  {
    year: "2028",
    title: "B.Tech · CSE (AIML)",
    place: "Pimpri Chinchwad College of Engineering",
    detail: "Expected May 2028 · CGPA 8.6 / 10",
    active: true,
  },
  {
    year: "2024",
    title: "Higher Secondary Certificate",
    place: "Sau. Tarabai Shankarlal Mutha Kanya Prashala & Jr. College",
    detail: "91.33% · MHT-CET PCM 98.93 percentile",
    active: false,
  },
  {
    year: "2022",
    title: "Secondary School Certificate",
    place: "Patil Bal Mandir School & Jr. College",
    detail: "91.80%",
    active: false,
  },
];
function ExperiencePage() {
  return (
    <section className="page-shell">
      <PageIntro
        code="03"
        eyebrow="Experience & education"
        title="Learning fast. Building for production."
        description="Hands-on engineering experience backed by a strong academic foundation in computer science, AI, and machine learning."
      />
      <div className="grid gap-12 lg:grid-cols-[1.1fr_.9fr]">
        <div>
          <p className="section-label">
            <Building2 /> Work experience
          </p>
          <HudPanel className="p-7 sm:p-9">
            <div className="flex flex-col justify-between gap-5 sm:flex-row">
              <div>
                <p className="text-sm font-semibold text-primary">
                  Web Developer Intern
                </p>
                <h2 className="mt-2 font-serif text-3xl">
                  Probity Technologies Pvt. Ltd.
                </h2>
              </div>
              <span className="shrink-0 text-xs text-muted-foreground">
                <CalendarDays className="mr-2 inline size-3" />
                May — July 2026 · 2 months
              </span>
            </div>
            <div className="my-7 h-px bg-border" />
            <p className="leading-7 text-muted-foreground">
              Developed an Enterprise Maintenance Management System for
              manufacturing with React.js, TypeScript, and Ant Design.
            </p>
            <ul className="mt-6 space-y-4">
              {[
                "Implemented role-based access control and reusable master modules.",
                "Engineered downtime tracking and maintenance action workflows.",
                "Built interactive analytics for machine status and open/closed records.",
                "Improved reliability through persistent data handling and workflow optimization.",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-6">
                  <Activity className="mt-1 size-4 shrink-0 text-primary" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-7 flex flex-wrap gap-2">
              {[
                "React.js",
                "TypeScript",
                "Ant Design",
                "RBAC",
                "Dashboard Analytics",
              ].map((item) => (
                <span className="tech-chip" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </HudPanel>
        </div>
        <div>
          <p className="section-label">
            <GraduationCap /> Education
          </p>
          <div className="timeline">
            {education.map((item) => (
              <article className="timeline-item" key={item.year}>
                <span
                  className={
                    item.active ? "timeline-node active" : "timeline-node"
                  }
                />
                <p className="text-xs font-semibold text-primary">
                  {item.year}
                </p>
                <h2 className="mt-2 text-lg font-semibold">{item.title}</h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  {item.place}
                </p>
                <p className="mt-3 text-xs text-foreground/70">{item.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-14 grid gap-4 sm:grid-cols-3">
        {[
          ["8.6 / 10", "Current CGPA"],
          ["98.93", "MHT-CET percentile"],
          ["91.80%", "SSC score"],
        ].map(([value, label]) => (
          <div className="editorial-card p-7" key={label}>
            <strong className="font-serif text-4xl text-primary">
              {value}
            </strong>
            <span className="mt-2 block text-xs text-muted-foreground">
              {label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
