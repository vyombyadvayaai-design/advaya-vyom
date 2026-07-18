import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import logoWordmarkAsset from "@/assets/vyom-logo-wordmark.png.asset.json";

const logoWordmark = logoWordmarkAsset.url;

const navLinks = [
  { to: "/product", label: "Product" },
  { to: "/vision", label: "Vision" },
  { to: "/technology", label: "Technology" },
  { to: "/ecosystem", label: "Ecosystem" },
  { to: "/company", label: "Company" },
  { to: "/press-kit", label: "Press" },
  { to: "/investors", label: "Investors" },
] as const;

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div
          className={`flex items-center justify-between rounded-full px-5 py-2.5 transition-all duration-500 ${
            scrolled ? "glass-strong" : ""
          }`}
        >
          <Link to="/" className="flex items-center gap-3">
            <img
              src={logoWordmark}
              alt="VYOM — by Advaya.ai"
              className="h-5 w-auto object-contain"
              loading="eager"
            />
            <span className="hidden text-[10px] uppercase tracking-[0.3em] text-muted-foreground md:inline">
              by Advaya.ai
            </span>
          </Link>
          <nav className="hidden items-center gap-7 text-sm text-muted-foreground lg:flex">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="transition hover:text-foreground"
                activeProps={{ className: "text-foreground" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <Link to="/waitlist" className="btn-primary text-sm">
            Join Waitlist
          </Link>
        </div>
      </div>
    </header>
  );
}

export function SiteFooter() {
  const cols = [
    {
      title: "Product",
      items: [
        { to: "/product", label: "Overview" },
        { to: "/technology", label: "Technology" },
        { to: "/ecosystem", label: "Ecosystem" },
      ],
    },
    {
      title: "Company",
      items: [
        { to: "/company", label: "About" },
        { to: "/vision", label: "Vision" },
        { to: "/pitch-deck", label: "Pitch Deck" },
      ],
    },
    {
      title: "Resources",
      items: [
        { to: "/press-kit", label: "Press Kit" },
        { to: "/investors", label: "Investors" },
        { to: "/waitlist", label: "Waitlist" },
      ],
    },
  ] as const;
  return (
    <footer className="relative border-t border-white/5 pb-10 pt-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Link to="/" className="flex items-center gap-3">
              <img src={logoWordmark} alt="VYOM" className="h-5 w-auto object-contain" />
              <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                by Advaya.ai
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Building intelligence that feels human. VYOM is an AI-first wearable
              platform currently in development in Lucknow, India.
            </p>
          </div>
          {cols.map((col) => (
            <div key={col.title}>
              <h4 className="text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
                {col.title}
              </h4>
              <ul className="mt-4 space-y-3 text-sm">
                {col.items.map((it) => (
                  <li key={it.to}>
                    <Link to={it.to} className="text-foreground/80 transition hover:text-foreground">
                      {it.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-white/5 pt-8 text-xs text-muted-foreground md:flex-row md:items-center">
          <span>© {new Date().getFullYear()} Advaya.ai — All rights reserved.</span>
          <div className="flex flex-wrap items-center gap-5">
            <a href="#" className="transition hover:text-foreground">Privacy</a>
            <a href="#" className="transition hover:text-foreground">Terms</a>
            <a href="#" className="transition hover:text-foreground">Cookies</a>
            <span className="inline-flex items-center gap-1.5">
              <span className="h-1 w-1 rounded-full bg-accent" /> Designed in India
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function PageHero({
  eyebrow,
  title,
  lede,
  children,
}: {
  eyebrow: string;
  title: string;
  lede?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden pt-40 pb-24">
      <div className="pointer-events-none absolute inset-0 aurora-bg opacity-60" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-background" />
      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
          <span className="h-1 w-1 rounded-full bg-accent animate-pulse" /> {eyebrow}
        </span>
        <h1 className="mt-6 font-display text-5xl leading-[0.95] tracking-tight text-balance text-gradient md:text-7xl">
          {title}
        </h1>
        {lede ? (
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground text-balance">
            {lede}
          </p>
        ) : null}
        {children ? <div className="mt-10">{children}</div> : null}
      </div>
    </section>
  );
}

export function StageChip({ stage }: { stage: "current" | "planned" | "vision" }) {
  const map = {
    current: { label: "Current", dot: "bg-emerald-400" },
    planned: { label: "Planned", dot: "bg-amber-400" },
    vision: { label: "Long-term vision", dot: "bg-accent" },
  } as const;
  const v = map[stage];
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 px-2.5 py-1 text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
      <span className={`h-1.5 w-1.5 rounded-full ${v.dot}`} />
      {v.label}
    </span>
  );
}
