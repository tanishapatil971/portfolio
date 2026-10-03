import { createFileRoute } from "@tanstack/react-router";
import { Check, Copy, Github, Linkedin, Mail, Phone, Send } from "lucide-react";
import { type FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { HudPanel, PageIntro } from "@/components/portfolio/SiteShell";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Tanisha Patil" },
      {
        name: "description",
        content:
          "Contact Tanisha Patil for AI, machine learning, and web development opportunities.",
      },
      { property: "og:title", content: "Contact — Tanisha Patil" },
      {
        property: "og:description",
        content:
          "Start a conversation about an intelligent product, web build, or engineering opportunity.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [copied, setCopied] = useState(false);
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "");
    const subject = String(data.get("subject") ?? "Portfolio enquiry");
    const message = String(data.get("message") ?? "");
    window.location.href = `mailto:tanisha.patil.ai@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Hi Tanisha,\n\n${message}\n\nFrom,\n${name}`)}`;
  };
  const copyEmail = async () => {
    await navigator.clipboard.writeText("tanisha.patil.ai@gmail.com");
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };
  return (
    <section className="page-shell">
      <PageIntro
        code="05"
        eyebrow="Let’s connect"
        title="Have something in mind?"
        description="Whether it is a website, an AI-powered idea, an internship, or a collaboration, I would love to hear about it."
      />
      <div className="grid gap-6 lg:grid-cols-[.8fr_1.2fr]">
        <div className="space-y-4">
          <HudPanel className="p-6">
            <p className="text-xs text-muted-foreground">Email me directly</p>
            <a
              href="mailto:tanisha.patil.ai@gmail.com"
              className="mt-3 block break-all text-lg font-medium text-primary"
            >
              tanisha.patil.ai@gmail.com
            </a>
            <Button
              variant="outline"
              size="sm"
              className="mt-5 rounded-full"
              onClick={copyEmail}
            >
              {copied ? <Check /> : <Copy />}
              {copied ? "Copied" : "Copy email"}
            </Button>
          </HudPanel>
          <a href="tel:+919702108546" className="contact-row">
            <Phone />
            <span>
              <small>Phone</small>+91 9702108546
            </span>
          </a>
          <a
            href="https://www.linkedin.com/in/tanishapatil971"
            target="_blank"
            rel="noreferrer"
            className="contact-row"
          >
            <Linkedin />
            <span>
              <small>Professional profile</small>LinkedIn
            </span>
          </a>
          <a
            href="https://github.com/tanishapatil971"
            target="_blank"
            rel="noreferrer"
            className="contact-row"
          >
            <Github />
            <span>
              <small>Code and projects</small>GitHub
            </span>
          </a>
        </div>
        <HudPanel className="p-6 sm:p-9">
          <div className="mb-7 flex items-center gap-3 border-b border-border pb-5">
            <Mail className="text-primary" />
            <div>
              <h2 className="font-serif text-3xl">Send a message</h2>
              <p className="text-xs text-muted-foreground">
                This opens in your email app
              </p>
            </div>
          </div>
          <form className="space-y-5" onSubmit={submit}>
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="form-field">
                Your name
                <Input name="name" required placeholder="Name" />
              </label>
              <label className="form-field">
                Your email
                <Input
                  name="email"
                  required
                  type="email"
                  placeholder="you@domain.com"
                />
              </label>
            </div>
            <label className="form-field">
              Subject
              <Input
                name="subject"
                required
                placeholder="Project or opportunity"
              />
            </label>
            <label className="form-field">
              Message
              <Textarea
                name="message"
                required
                rows={7}
                placeholder="Tell me a little about your idea..."
              />
            </label>
            <Button type="submit" size="lg" className="h-12 rounded-full px-7">
              Send message <Send />
            </Button>
          </form>
        </HudPanel>
      </div>
    </section>
  );
}
