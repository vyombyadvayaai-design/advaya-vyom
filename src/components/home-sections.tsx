import { motion } from "framer-motion";
import {
  Cpu,
  Cloud,
  ShieldCheck,
  Lock,
  Layers,
  Wrench,
  Activity,
  FlaskConical,
  Handshake,
  Newspaper,
  Mail,
  Users,
  PenLine,
  Quote,
  ArrowRight,
} from "lucide-react";

/* Shared primitives (kept identical to the homepage design language) */

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-5 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.35em] text-muted-foreground">
      <span className="h-px w-8 bg-white/30" />
      {children}
    </div>
  );
}

export function FadeIn({
  children,
  delay = 0,
  y = 24,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, delay, ease: [0.2, 0.8, 0.2, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ---------------------------------------------------------------- */
/*  Technology — engineering depth, no confidential detail            */
/* ---------------------------------------------------------------- */
export function TechStack() {
  const layers = [
    {
      icon: Layers,
      t: "AI architecture",
      d: "A multimodal stack where voice, vision and context resolve into one intent before anything is spoken back.",
    },
    {
      icon: Cpu,
      t: "On-device intelligence",
      d: "Wake, sense and the most sensitive inference stay on the frame — low latency, low exposure.",
    },
    {
      icon: Cloud,
      t: "Cloud intelligence",
      d: "Heavier reasoning escalates to the cloud only when it earns the trip, with the minimum context required.",
    },
    {
      icon: Lock,
      t: "Privacy-first approach",
      d: "Explicit capture indicators, per-session consent, and memory you can read, export or erase.",
    },
    {
      icon: ShieldCheck,
      t: "Security philosophy",
      d: "Encrypted at rest and in transit, least-privilege services, and a hardware root of trust as a design goal.",
    },
    {
      icon: Wrench,
      t: "Hardware vision",
      d: "Optics, thermals and weight balance developed together so the intelligence disappears into the frame.",
    },
  ];

  return (
    <section id="technology" className="section-pad relative scroll-mt-24">
      <div className="mx-auto max-w-7xl px-6">
        <FadeIn>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <SectionLabel>Technology</SectionLabel>
              <h2 className="font-display text-balance text-[clamp(2rem,5vw,4rem)] leading-[1.02] tracking-[-0.02em] text-gradient">
                Deep engineering,
                <br />
                <span className="italic text-muted-foreground/80">quietly applied.</span>
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              A high-level view of how VYOM is being built. Specifics stay in the lab; the
              principles are public.
            </p>
          </div>
        </FadeIn>

        <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {layers.map((l, i) => (
            <FadeIn key={l.t} delay={i * 0.04}>
              <div className="group glass relative h-full overflow-hidden rounded-2xl p-6 transition-all duration-500 hover:-translate-y-1 hover:border-white/20">
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(120% 90% at 50% 0%, oklch(0.75 0.15 240 / 0.12), transparent 70%)",
                  }}
                />
                <l.icon className="relative mb-8 h-5 w-5 text-accent" strokeWidth={1.5} />
                <div className="relative text-base font-medium text-foreground">{l.t}</div>
                <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">{l.d}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- */
/*  Signals — transparent trust placeholders                          */
/* ---------------------------------------------------------------- */
export function Signals() {
  const cards = [
    {
      icon: Activity,
      t: "Development progress",
      status: "Live",
      d: "Research and industrial design are active. Prototype build begins next.",
    },
    {
      icon: FlaskConical,
      t: "Research",
      status: "In progress",
      d: "Human factors, optics and multimodal model studies. Notes published as they mature.",
    },
    {
      icon: Newspaper,
      t: "Press & media",
      status: "No coverage yet",
      d: "Nothing published so far. Journalists can reach us directly for early briefings.",
    },
    {
      icon: Handshake,
      t: "Partnerships",
      status: "Open",
      d: "In conversation with component, optics and manufacturing partners. None announced.",
    },
    {
      icon: Users,
      t: "Waitlist",
      status: "Open",
      d: "Early members receive prototype reveals and first access when units are ready.",
    },
    {
      icon: Mail,
      t: "Investor updates",
      status: "Monthly",
      d: "A written update on progress, spend and learnings — available on request.",
    },
  ];

  return (
    <section id="signals" className="section-pad relative scroll-mt-24">
      <div className="mx-auto max-w-7xl px-6">
        <FadeIn>
          <div className="max-w-2xl">
            <SectionLabel>Where we stand</SectionLabel>
            <h2 className="font-display text-balance text-[clamp(2rem,5vw,4rem)] leading-[1.02] tracking-[-0.02em] text-gradient">
              Honest signals,
              <br />
              <span className="italic text-muted-foreground/80">not claims.</span>
            </h2>
            <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground">
              We publish exactly what is true today. Empty is fine — invented is not.
            </p>
          </div>
        </FadeIn>

        <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((c, i) => (
            <FadeIn key={c.t} delay={i * 0.04}>
              <div className="glass h-full rounded-2xl p-6 transition-all duration-500 hover:border-white/20">
                <div className="flex items-start justify-between gap-3">
                  <c.icon className="h-5 w-5 text-accent" strokeWidth={1.5} />
                  <span className="rounded-full border border-white/12 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    {c.status}
                  </span>
                </div>
                <div className="mt-8 text-base font-medium text-foreground">{c.t}</div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.d}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- */
/*  Founder letter + building in public                               */
/* ---------------------------------------------------------------- */
export function FounderLetter() {
  return (
    <section id="letter" className="section-pad relative scroll-mt-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-3 lg:grid-cols-[1.4fr_1fr]">
          <FadeIn>
            <article className="glass-strong h-full rounded-3xl p-8 md:p-12">
              <SectionLabel>A letter from the founder</SectionLabel>
              <Quote className="h-6 w-6 text-accent" strokeWidth={1.5} aria-hidden />
              <div className="mt-6 space-y-5 text-sm leading-relaxed text-muted-foreground md:text-base">
                <p>
                  I started Advaya.ai because the most powerful technology of our lifetime is
                  still trapped behind a rectangle of glass. We look down to look things up. We
                  step out of the moment to understand it.
                </p>
                <p>
                  VYOM is my attempt at the opposite: intelligence that stays beside you, sees
                  what you see, remembers what matters, and speaks only when it helps. That is a
                  hardware problem, a model problem and, above all, a trust problem — and we are
                  treating all three with the same seriousness.
                </p>
                <p>
                  We are early. Nothing has shipped. What we can promise today is honesty about
                  where we are, and a decade of patience to get it right.
                </p>
              </div>
              <div className="mt-8 border-t border-white/8 pt-6">
                <p className="font-display text-2xl italic text-foreground">Ashutosh Yadav</p>
                <p className="mt-1 text-xs uppercase tracking-[0.25em] text-muted-foreground">
                  Founder · Advaya.ai · Lucknow, India
                </p>
              </div>
            </article>
          </FadeIn>

          <FadeIn delay={0.06}>
            <div className="glass flex h-full flex-col justify-between rounded-3xl p-8">
              <div>
                <PenLine className="mb-8 h-5 w-5 text-accent" strokeWidth={1.5} />
                <div className="text-base font-medium text-foreground">Building in public</div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Progress notes, design studies and honest setbacks — shared as they happen
                  rather than polished into a launch.
                </p>
                <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
                  {[
                    "Monthly written progress note",
                    "Design and prototype reveals",
                    "Research notes as they mature",
                    "Open questions we are still solving",
                  ].map((t) => (
                    <li key={t} className="flex items-start gap-3">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
              <a href="#waitlist" className="btn-primary mt-8 inline-flex text-sm">
                Follow the build
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
