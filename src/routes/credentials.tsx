import { createFileRoute } from "@tanstack/react-router";
import { Award, Download, ExternalLink, ShieldCheck } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { PageIntro } from "@/components/portfolio/SiteShell";
import { credentials, skillGroups } from "@/lib/portfolio-data";

export const Route = createFileRoute("/credentials")({
  head: () => ({
    meta: [
      { title: "Skills & Credentials — Tanisha Patil" },
      {
        name: "description",
        content:
          "Tanisha Patil's AI, machine learning, web development skills and verified professional credentials.",
      },
      { property: "og:title", content: "Skills & Credentials — Tanisha Patil" },
      {
        property: "og:description",
        content:
          "Technical skills across AI, web engineering, languages, databases, and certified learning.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CredentialsPage,
});

const skillFilters = [
  "All",
  "AI & ML",
  "Web & App",
  "Languages",
  "Databases & Tools",
] as const;
function CredentialsPage() {
  const [filter, setFilter] = useState<(typeof skillFilters)[number]>("All");
  const [selected, setSelected] = useState<(typeof credentials)[number] | null>(
    null,
  );
  const downloadSummary = () => {
    if (!selected) return;
    const file = new Blob(
      [
        `${selected.title}\n${selected.subtitle}\nIssuer: ${selected.issuer}\nCredential ID: ${selected.id}\nVerification: ${selected.verification}`,
      ],
      { type: "text/plain" },
    );
    const url = URL.createObjectURL(file);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${selected.title.replaceAll(" ", "-")}-verification.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };
  return (
    <section className="page-shell">
      <PageIntro
        code="04"
        eyebrow="Skills & certifications"
        title="Tools, models, and continued learning."
        description="A practical toolkit for turning raw data and ideas into reliable, human-centered software."
      />
      <div className="mb-8 flex flex-wrap gap-2">
        {skillFilters.map((item) => (
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
      <div className="grid gap-4 md:grid-cols-2">
        {skillGroups
          .filter((group) => filter === "All" || group.title === filter)
          .map((group) => (
            <article className="editorial-card p-7" key={group.title}>
              <h2 className="font-serif text-3xl">{group.title}</h2>
              <div className="mt-6 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span className="skill-chip" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
      </div>
      <div className="mb-8 mt-20">
        <p className="text-xs font-semibold uppercase text-primary">
          Continued learning
        </p>
        <h2 className="mt-2 font-serif text-5xl">Credentials</h2>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {credentials.map((credential) => (
          <button
            className="credential-card text-left"
            key={credential.title}
            onClick={() => setSelected(credential)}
          >
            <span className="credential-icon">
              <Award />
            </span>
            <span className="text-xs font-semibold uppercase text-primary">
              Certification
            </span>
            <strong className="mt-4 block text-lg">{credential.title}</strong>
            <span className="mt-1 block text-sm text-muted-foreground">
              {credential.subtitle}
            </span>
            <span className="mt-6 flex items-center gap-2 text-xs text-status">
              <ShieldCheck className="size-3" /> View details{" "}
              <ExternalLink className="ml-auto size-3 text-muted-foreground" />
            </span>
          </button>
        ))}
      </div>
      <Dialog
        open={selected !== null}
        onOpenChange={(open) => {
          if (!open) setSelected(null);
        }}
      >
        <DialogContent className="max-w-2xl rounded-2xl border-border bg-background/95 p-0 backdrop-blur-xl">
          <DialogHeader className="border-b border-border p-6 text-left">
            <p className="text-xs font-semibold text-primary">
              Certification details
            </p>
            <DialogTitle className="mt-2 pr-8 font-serif text-3xl">
              {selected?.title}
            </DialogTitle>
            <DialogDescription>{selected?.subtitle}</DialogDescription>
          </DialogHeader>
          <div className="p-6">
            <div className="credential-preview">
              <Award className="size-10 text-primary" />
              <p className="text-xs text-muted-foreground">Issuing authority</p>
              <strong>{selected?.issuer}</strong>
              <div className="my-5 h-px bg-border" />
              <dl className="grid gap-4 text-sm sm:grid-cols-2">
                <div>
                  <dt className="text-muted-foreground">Credential ID</dt>
                  <dd className="mt-1">{selected?.id}</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Verification</dt>
                  <dd className="mt-1">{selected?.verification}</dd>
                </div>
              </dl>
            </div>
            <div className="mt-5 flex flex-wrap gap-3">
              <Button className="rounded-full" onClick={downloadSummary}>
                <Download /> Download details
              </Button>
              <Button asChild variant="outline" className="rounded-full">
                <a
                  href={`mailto:tanisha.patil.ai@gmail.com?subject=${encodeURIComponent(`Credential verification: ${selected?.title ?? ""}`)}`}
                >
                  Request source file
                </a>
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
