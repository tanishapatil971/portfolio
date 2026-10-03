import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const navigation = [
  { to: "/", label: "Home", index: "01" },
  { to: "/projects", label: "Projects", index: "02" },
  { to: "/experience", label: "Experience", index: "03" },
  { to: "/credentials", label: "Credentials", index: "04" },
  { to: "/contact", label: "Contact", index: "05" },
] as const;

export function SiteShell({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur-xl">
        <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 lg:px-8">
          <Link
            to="/"
            className="group flex items-center gap-3"
            onClick={() => setOpen(false)}
          >
            <span className="grid size-9 place-items-center rounded-full bg-foreground font-serif text-base italic text-background">
              T
            </span>
            <span>
              <strong className="block text-sm font-semibold">
                Tanisha Patil
              </strong>
              <span className="block text-[10px] text-muted-foreground">
                Web Developer · AIML Student
              </span>
            </span>
          </Link>
          <nav
            className="hidden items-center gap-1 md:flex"
            aria-label="Primary navigation"
          >
            {navigation.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                className="nav-link"
              >
                <span>{item.index}</span>
                {item.label}
              </Link>
            ))}
          </nav>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X /> : <Menu />}
          </Button>
        </div>
        {open && (
          <nav
            className="border-t border-border bg-background px-5 py-4 md:hidden"
            aria-label="Mobile navigation"
          >
            {navigation.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="mobile-nav-link"
              >
                <span>{item.index}</span>
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </header>
      <main className="relative z-10 pt-18">{children}</main>
      <footer className="relative z-10 border-t border-border/70 bg-background/70">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-8 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <span>© 2026 Tanisha Patil</span>
          <span>Available for internships, projects, and collaborations.</span>
        </div>
      </footer>
    </div>
  );
}

export function PageIntro({
  eyebrow,
  title,
  description,
}: {
  code: string;
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <header className="mb-14 max-w-4xl">
      <div className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase text-primary">
        <span className="h-px w-10 bg-primary/50" />
        {eyebrow}
      </div>
      <h1 className="text-balance font-serif text-5xl leading-none sm:text-7xl">
        {title}
      </h1>
      <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
        {description}
      </p>
    </header>
  );
}

export function HudPanel({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`hud-panel ${className}`}>{children}</div>;
}
