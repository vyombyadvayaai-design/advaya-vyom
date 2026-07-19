import { Link, useRouterState } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { X, ArrowUpRight } from "lucide-react";
import logoWordmarkAsset from "@/assets/vyom-logo-wordmark.png.asset.json";
import companyProfilePdf from "@/assets/company_profile.pdf.asset.json";
import founderBookPdf from "@/assets/founder_book.pdf.asset.json";
import pitchDeckPdf from "@/assets/pitch_deck.pdf.asset.json";

const logoWordmark = logoWordmarkAsset.url;

const desktopLinks = [
  { to: "/product", label: "Product" },
  { to: "/vision", label: "Vision" },
  { to: "/technology", label: "Technology" },
  { to: "/company", label: "Company" },
  { to: "/investors", label: "Investors" },
] as const;

type MenuItem = { label: string; to?: string; href?: string; external?: boolean };
type MenuGroup = { title: string; items: MenuItem[] };

const menuGroups: MenuGroup[] = [
  {
    title: "Home",
    items: [{ label: "Homepage", to: "/" }],
  },
  {
    title: "About Advaya.ai",
    items: [
      { label: "Company Profile", to: "/company" },
      { label: "Vision", to: "/vision" },
      { label: "Mission", to: "/company" },
      { label: "Core Values", to: "/company" },
      { label: "Leadership Philosophy", to: "/company" },
      { label: "Roadmap", to: "/vision" },
    ],
  },
  {
    title: "Founder",
    items: [
      { label: "Founder Story", to: "/company" },
      { label: "Founder Bio", to: "/company" },
      { label: "Founder Manifesto", to: "/pitch-deck" },
      { label: "Timeline", to: "/company" },
    ],
  },
  {
    title: "VYOM",
    items: [
      { label: "Product Overview", to: "/product" },
      { label: "Why VYOM", to: "/product" },
      { label: "Technology", to: "/technology" },
      { label: "AI Experience", to: "/technology" },
      { label: "Design Philosophy", to: "/product" },
    ],
  },
  {
    title: "Resources",
    items: [
      { label: "Press Kit", to: "/press-kit" },
      { label: "Media Kit", to: "/press-kit" },
      { label: "Brand Assets", to: "/press-kit" },
      { label: "Company Profile (PDF)", href: companyProfilePdf.url, external: true },
      { label: "Founder Bio (PDF)", href: founderBookPdf.url, external: true },
      { label: "Founder Story (PDF)", href: founderBookPdf.url, external: true },
      { label: "Pitch Deck", to: "/pitch-deck" },
      { label: "Pitch Deck (PDF)", href: pitchDeckPdf.url, external: true },
      { label: "FAQ", to: "/investors" },
    ],
  },
  {
    title: "Investors",
    items: [
      { label: "Investor Deck", to: "/pitch-deck" },
      { label: "Investment Thesis", to: "/investors" },
      { label: "Contact", to: "/investors" },
    ],
  },
  {
    title: "Contact",
    items: [{ label: "Get in touch", to: "/company" }],
  },
  {
    title: "Waitlist",
    items: [{ label: "Join the Waitlist", to: "/waitlist" }],
  },
];

const socials: MenuItem[] = [
  { label: "X", href: "https://x.com/advayaai", external: true },
  { label: "Instagram", href: "https://instagram.com/advaya.ai", external: true },
  { label: "LinkedIn", href: "https://linkedin.com/company/advaya-ai", external: true },
  { label: "YouTube", href: "https://youtube.com/@advayaai", external: true },
];

function useLockBodyScroll(locked: boolean) {
  useEffect(() => {
    if (!locked) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [locked]);
}

function HamburgerButton({
  open,
  onClick,
}: {
  open: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={open ? "Close menu" : "Open menu"}
      aria-expanded={open}
      className="group relative grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md transition hover:border-accent/40 hover:bg-white/[0.06]"
    >
      <span className="sr-only">Menu</span>
      <span className="relative block h-3 w-5">
        <span
          className={`absolute left-0 top-0 block h-px w-5 bg-foreground transition-all duration-300 ${
            open ? "translate-y-[6px] rotate-45" : ""
          }`}
        />
        <span
          className={`absolute left-0 top-[6px] block h-px w-5 bg-foreground transition-all duration-300 ${
            open ? "opacity-0" : "opacity-100"
          }`}
        />
        <span
          className={`absolute left-0 top-[12px] block h-px w-5 bg-foreground transition-all duration-300 ${
            open ? "-translate-y-[6px] -rotate-45" : ""
          }`}
        />
      </span>
    </button>
  );
}

function MenuLink({
  item,
  active,
  onNavigate,
}: {
  item: MenuItem;
  active: boolean;
  onNavigate: () => void;
}) {
  const base =
    "group/link relative flex items-center gap-2 py-1.5 text-[15px] tracking-tight text-white/60 transition-all duration-300 hover:text-white hover:translate-x-1";
  const activeCls = active ? " text-white" : "";
  const dot = (
    <span
      className={`inline-block h-1 w-1 rounded-full transition-all duration-300 ${
        active
          ? "bg-accent opacity-100"
          : "bg-accent opacity-0 group-hover/link:opacity-100"
      }`}
      style={{ boxShadow: active ? "0 0 10px hsl(var(--accent))" : undefined }}
    />
  );
  const arrow = item.external ? (
    <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-all duration-300 group-hover/link:opacity-100" />
  ) : null;

  if (item.external && item.href) {
    return (
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className={base + activeCls}
        onClick={onNavigate}
      >
        {dot}
        <span>{item.label}</span>
        {arrow}
      </a>
    );
  }
  return (
    <Link
      to={item.to ?? "/"}
      className={base + activeCls}
      onClick={onNavigate}
    >
      {dot}
      <span>{item.label}</span>
    </Link>
  );
}

function MenuPanel({ open, onClose }: { open: boolean; onClose: () => void }) {
  useLockBodyScroll(open);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open ? (
        <>
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onClick={onClose}
            className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm"
          />
          <motion.aside
            key="panel"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed right-0 top-0 z-[70] flex h-[100dvh] w-full max-w-[560px] flex-col overflow-hidden border-l border-white/10"
            style={{
              background:
                "linear-gradient(180deg, rgba(5,5,5,0.92) 0%, rgba(5,5,5,0.96) 100%)",
              backdropFilter: "blur(28px) saturate(140%)",
            }}
            role="dialog"
            aria-modal="true"
            aria-label="Navigation"
          >
            {/* accent glows */}
            <div
              className="pointer-events-none absolute -top-40 -right-32 h-96 w-96 rounded-full opacity-40"
              style={{
                background:
                  "radial-gradient(closest-side, hsl(var(--accent) / 0.35), transparent 70%)",
              }}
            />
            <div
              className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 rounded-full opacity-30"
              style={{
                background:
                  "radial-gradient(closest-side, hsl(var(--accent) / 0.25), transparent 70%)",
              }}
            />

            <div className="relative flex items-center justify-between border-b border-white/5 px-6 py-5 sm:px-10">
              <Link to="/" onClick={onClose} className="flex items-center gap-3">
                <img src={logoWordmark} alt="VYOM" className="h-5 w-auto object-contain" />
                <span className="text-[10px] uppercase tracking-[0.3em] text-white/50">
                  by Advaya.ai
                </span>
              </Link>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close menu"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.03] transition hover:border-accent/40 hover:bg-white/[0.06]"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="relative flex-1 overflow-y-auto px-6 py-8 sm:px-10 sm:py-10">
              <motion.div
                initial="hidden"
                animate="show"
                variants={{
                  hidden: {},
                  show: { transition: { staggerChildren: 0.04, delayChildren: 0.1 } },
                }}
                className="space-y-8"
              >
                {menuGroups.map((group) => (
                  <motion.div
                    key={group.title}
                    variants={{
                      hidden: { opacity: 0, y: 12 },
                      show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
                    }}
                  >
                    <h4 className="mb-3 text-[10px] font-medium uppercase tracking-[0.3em] text-white/40">
                      {group.title}
                    </h4>
                    <ul className="space-y-0.5">
                      {group.items.map((item) => (
                        <li key={item.label + (item.to ?? item.href ?? "")}>
                          <MenuLink
                            item={item}
                            active={!!item.to && item.to === pathname}
                            onNavigate={onClose}
                          />
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}

                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 12 },
                    show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
                  }}
                  className="border-t border-white/5 pt-6"
                >
                  <h4 className="mb-3 text-[10px] font-medium uppercase tracking-[0.3em] text-white/40">
                    Socials
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {socials.map((s) => (
                      <a
                        key={s.label}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/social inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.02] px-3.5 py-1.5 text-xs text-white/70 transition-all duration-300 hover:border-accent/50 hover:bg-accent/10 hover:text-white"
                      >
                        {s.label}
                        <ArrowUpRight className="h-3 w-3 opacity-50 transition group-hover/social:opacity-100" />
                      </a>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </div>

            <div className="relative border-t border-white/5 px-6 py-5 sm:px-10">
              <Link
                to="/waitlist"
                onClick={onClose}
                className="btn-primary flex w-full items-center justify-center text-sm"
              >
                Join the Waitlist
              </Link>
              <p className="mt-3 text-center text-[10px] uppercase tracking-[0.28em] text-white/30">
                Lucknow · India
              </p>
            </div>
          </motion.aside>
        </>
      ) : null}
    </AnimatePresence>
  );
}

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div
            className={`flex items-center justify-between rounded-full px-3 py-2 transition-all duration-500 sm:px-5 sm:py-2.5 ${
              scrolled || open ? "glass-strong" : ""
            }`}
          >
            <Link to="/" className="flex items-center gap-3 pl-2">
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
              {desktopLinks.map((l) => {
                const active = pathname === l.to;
                return (
                  <Link
                    key={l.to}
                    to={l.to}
                    className={`relative transition hover:text-foreground ${
                      active ? "text-foreground" : ""
                    }`}
                  >
                    {l.label}
                    {active ? (
                      <span
                        className="absolute -bottom-1 left-1/2 h-px w-6 -translate-x-1/2 bg-accent"
                        style={{ boxShadow: "0 0 8px hsl(var(--accent))" }}
                      />
                    ) : null}
                  </Link>
                );
              })}
            </nav>

            <div className="flex items-center gap-2 sm:gap-3">
              <Link to="/waitlist" className="btn-primary hidden text-sm sm:inline-flex">
                Join Waitlist
              </Link>
              <HamburgerButton open={open} onClick={() => setOpen((v) => !v)} />
            </div>
          </div>
        </div>
      </header>

      <MenuPanel open={open} onClose={() => setOpen(false)} />
    </>
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
