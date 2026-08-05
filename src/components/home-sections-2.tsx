import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Play,
  Film,
  MousePointerClick,
  MessagesSquare,
  Images,
  Mic,
  Camera,
  Compass,
  Database,
  Cloud,
  Lock,
  ShieldCheck,
  GraduationCap,
  Stethoscope,
  Wrench,
  Palette,
  Plane,
  Briefcase,
  Code2,
  Check,
  Minus,
  Newspaper,
  FlaskConical,
  Terminal,
  Handshake,
  Users,
  Sparkles,
  CalendarDays,
  Hammer,
  NotebookPen,
  GitCommitHorizontal,
  Aperture,
  ArrowRight,
} from "lucide-react";
import { SectionLabel, FadeIn } from "@/components/home-sections";

/* ---------------------------------------------------------------- */
/*  1. Experience VYOM                                                */
/* ---------------------------------------------------------------- */
export function ExperienceVyom() {
  const items = [
    {
      icon: Play,
      t: "Product demo",
      s: "In production",
      d: "A short film showing a real day with VYOM — glance, ask, move on.",
    },
    {
      icon: Film,
      t: "Concept animation",
      s: "In design",
      d: "How the frame, optics and interface come together, rendered end to end.",
    },
    {
      icon: MousePointerClick,
      t: "Interactive walkthrough",
      s: "Planned",
      d: "A browser experience of the VYOM interaction model, step by step.",
    },
    {
      icon: MessagesSquare,
      t: "AI conversation demo",
      s: "Planned",
      d: "A sample exchange showing tone, brevity and when the assistant stays quiet.",
    },
    {
      icon: Images,
      t: "Product gallery",
      s: "Coming soon",
      d: "Studio photography of the frame, materials and finishes as they are finalised.",
    },
  ];

  return (
    <section id="experience" className="section-pad relative scroll-mt-24">
      <div className="mx-auto max-w-7xl px-6">
        <FadeIn>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <SectionLabel>Experience VYOM</SectionLabel>
              <h2 className="font-display text-balance text-[clamp(2rem,5vw,4rem)] leading-[1.02] tracking-[-0.02em] text-gradient">
                Five ways to see it,
                <br />
                <span className="italic text-muted-foreground/80">as soon as they exist.</span>
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              Each of these is being made now. Waitlist members see them first.
            </p>
          </div>
        </FadeIn>

        <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((c, i) => (
            <FadeIn key={c.t} delay={i * 0.04}>
              <div className="group glass flex h-full flex-col rounded-2xl p-6 transition-all duration-500 hover:-translate-y-1 hover:border-white/20">
                <div className="flex items-start justify-between gap-3">
                  <c.icon className="h-5 w-5 text-accent" strokeWidth={1.5} />
                  <span className="rounded-full border border-white/12 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    {c.s}
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
/*  2. How VYOM works                                                 */
/* ---------------------------------------------------------------- */
export function HowItWorks() {
  const steps = [
    { icon: Mic, t: "Voice AI", d: "Natural speech in, natural speech out — no wake-word gymnastics." },
    { icon: Camera, t: "Camera intelligence", d: "Understands what is in front of you, only when you ask it to look." },
    { icon: Compass, t: "Context awareness", d: "Place, time and activity shape the answer before a word is spoken." },
    { icon: Database, t: "AI memory", d: "A private, searchable record of what mattered — readable and erasable." },
    { icon: Cloud, t: "Cloud intelligence", d: "Heavier reasoning escalates only when it earns the trip." },
    { icon: Lock, t: "Privacy", d: "Explicit capture indicators, per-session consent, on-device where possible." },
    { icon: ShieldCheck, t: "Security", d: "Encrypted at rest and in transit, least-privilege services throughout." },
  ];

  return (
    <section id="how-it-works" className="section-pad relative scroll-mt-24">
      <div className="mx-auto max-w-7xl px-6">
        <FadeIn>
          <div className="max-w-2xl">
            <SectionLabel>How VYOM works</SectionLabel>
            <h2 className="font-display text-balance text-[clamp(2rem,5vw,4rem)] leading-[1.02] tracking-[-0.02em] text-gradient">
              Seven parts,
              <br />
              <span className="italic text-muted-foreground/80">one instinct.</span>
            </h2>
            <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground">
              A high-level view of the system. The principles are public; the specifics stay in
              the lab.
            </p>
          </div>
        </FadeIn>

        <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <FadeIn key={s.t} delay={i * 0.04}>
              <div className="group glass relative h-full overflow-hidden rounded-2xl p-6 transition-all duration-500 hover:-translate-y-1 hover:border-white/20">
                <span className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground">
                  0{i + 1}
                </span>
                <s.icon className="mb-8 mt-4 h-5 w-5 text-accent" strokeWidth={1.5} />
                <div className="text-base font-medium text-foreground">{s.t}</div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- */
/*  3. Use cases — story journeys                                     */
/* ---------------------------------------------------------------- */
const journeys = [
  {
    icon: GraduationCap,
    who: "Student",
    line: "A lecture that doesn't need to be re-watched.",
    flow: [
      "Walks into a lecture and taps once to start a session.",
      "Asks quietly for the term the professor just used.",
      "Looks at a diagram; VYOM captures it against the lecture.",
      "Later that night, asks what the lecture concluded — and gets it back.",
    ],
  },
  {
    icon: Stethoscope,
    who: "Doctor",
    line: "Hands stay clinical, notes stay complete.",
    flow: [
      "Starts a consent-visible session before rounds.",
      "Dictates observations without breaking sterile field.",
      "Asks for the patient's last recorded vitals hands-free.",
      "Ends the session; the summary is drafted, not scattered.",
    ],
  },
  {
    icon: Wrench,
    who: "Engineer",
    line: "The manual comes to the machine.",
    flow: [
      "Looks at an assembly and asks what the tolerance should be.",
      "Gets a spoken step, then silence while working.",
      "Flags an anomaly by voice with the frame capturing the view.",
      "Reviews the flagged moments at the end of the shift.",
    ],
  },
  {
    icon: Palette,
    who: "Creator",
    line: "Capture the idea before it leaves.",
    flow: [
      "Frames a shot and asks how the light reads.",
      "Records a spoken note attached to what was seen.",
      "Asks for the three ideas from this morning's walk.",
      "Exports the session into the edit.",
    ],
  },
  {
    icon: Plane,
    who: "Traveller",
    line: "A guide that never asks you to look down.",
    flow: [
      "Looks at a sign and asks what it says.",
      "Asks which platform, and hears just the number.",
      "Requests a short read on the building ahead.",
      "Ends the day with a memory of where the good places were.",
    ],
  },
  {
    icon: Briefcase,
    who: "Business founder",
    line: "Every conversation, actually remembered.",
    flow: [
      "Starts a visible session before a meeting.",
      "Keeps eye contact instead of typing notes.",
      "Asks afterwards what was committed to, and by whom.",
      "Turns the answer into follow-ups the same hour.",
    ],
  },
  {
    icon: Code2,
    who: "Developer",
    line: "Build on the frame, not around it.",
    flow: [
      "Prototypes an experience against the VYOM interaction model.",
      "Tests voice, vision and context as first-class inputs.",
      "Ships to a small cohort of early units.",
      "Iterates with real hands-free usage data.",
    ],
  },
];

export function UseCases() {
  const [active, setActive] = useState(0);
  const j = journeys[active]!;

  return (
    <section id="use-cases" className="section-pad relative scroll-mt-24">
      <div className="mx-auto max-w-7xl px-6">
        <FadeIn>
          <div className="max-w-2xl">
            <SectionLabel>Use cases</SectionLabel>
            <h2 className="font-display text-balance text-[clamp(2rem,5vw,4rem)] leading-[1.02] tracking-[-0.02em] text-gradient">
              Seven lives,
              <br />
              <span className="italic text-muted-foreground/80">same quiet help.</span>
            </h2>
          </div>
        </FadeIn>

        <FadeIn delay={0.05}>
          <div className="mt-12 flex flex-wrap gap-2">
            {journeys.map((x, i) => (
              <button
                key={x.who}
                type="button"
                onClick={() => setActive(i)}
                aria-pressed={active === i}
                className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs uppercase tracking-[0.18em] transition-all duration-300 ${
                  active === i
                    ? "border-white/25 bg-white/10 text-foreground"
                    : "border-white/10 text-muted-foreground hover:border-white/20 hover:text-foreground"
                }`}
              >
                <x.icon className="h-3.5 w-3.5 text-accent" strokeWidth={1.5} />
                {x.who}
              </button>
            ))}
          </div>
        </FadeIn>

        <div className="mt-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={j.who}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.45, ease: [0.2, 0.8, 0.2, 1] }}
              className="glass-strong rounded-3xl p-8 md:p-12"
            >
              <div className="flex items-center gap-3">
                <j.icon className="h-5 w-5 text-accent" strokeWidth={1.5} />
                <span className="text-xs uppercase tracking-[0.28em] text-muted-foreground">
                  {j.who}
                </span>
              </div>
              <p className="mt-5 font-display text-2xl leading-snug text-foreground md:text-3xl">
                {j.line}
              </p>
              <ol className="mt-8 grid gap-3 md:grid-cols-2">
                {j.flow.map((f, i) => (
                  <li
                    key={f}
                    className="flex items-start gap-4 rounded-2xl border border-white/8 p-5 text-sm leading-relaxed text-muted-foreground"
                  >
                    <span className="font-mono text-[10px] tracking-[0.2em] text-accent">
                      0{i + 1}
                    </span>
                    {f}
                  </li>
                ))}
              </ol>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- */
/*  4. Why VYOM — comparison                                          */
/* ---------------------------------------------------------------- */
const columns = ["Smartphone", "Smart glasses", "AI assistant", "VYOM"];
const rows: { label: string; values: (boolean | "partial")[] }[] = [
  { label: "Natural interaction", values: ["partial", "partial", true, true] },
  { label: "Sees your context", values: [false, "partial", false, true] },
  { label: "Long-term memory", values: [false, false, "partial", true] },
  { label: "Truly hands-free", values: [false, true, "partial", true] },
  { label: "Privacy controls on the device", values: ["partial", "partial", false, true] },
  { label: "Helps without pulling attention", values: [false, "partial", "partial", true] },
];

function Mark({ v }: { v: boolean | "partial" }) {
  if (v === true) return <Check className="mx-auto h-4 w-4 text-accent" strokeWidth={2} />;
  if (v === "partial")
    return <span className="mx-auto block h-1.5 w-3 rounded-full bg-muted-foreground/50" />;
  return <Minus className="mx-auto h-4 w-4 text-muted-foreground/40" strokeWidth={1.5} />;
}

export function WhyComparison() {
  return (
    <section id="why-compare" className="section-pad relative scroll-mt-24">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <div className="max-w-2xl">
            <SectionLabel>Why VYOM</SectionLabel>
            <h2 className="font-display text-balance text-[clamp(2rem,5vw,4rem)] leading-[1.02] tracking-[-0.02em] text-gradient">
              A fair comparison,
              <br />
              <span className="italic text-muted-foreground/80">honestly drawn.</span>
            </h2>
            <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground">
              VYOM is in development — this compares design intent against categories that exist
              today, not measured benchmarks.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.05}>
          <div className="glass mt-12 overflow-x-auto rounded-3xl">
            <table className="w-full min-w-[560px] border-collapse text-sm">
              <thead>
                <tr>
                  <th className="p-5 text-left text-[11px] font-normal uppercase tracking-[0.24em] text-muted-foreground">
                    Capability
                  </th>
                  {columns.map((c) => (
                    <th
                      key={c}
                      className={`p-5 text-center text-[11px] font-normal uppercase tracking-[0.18em] ${
                        c === "VYOM" ? "text-foreground" : "text-muted-foreground"
                      }`}
                    >
                      {c}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r.label} className="border-t border-white/8">
                    <td className="p-5 text-left text-muted-foreground">{r.label}</td>
                    {r.values.map((v, i) => (
                      <td
                        key={i}
                        className={`p-5 text-center ${i === 3 ? "bg-white/[0.03]" : ""}`}
                      >
                        <Mark v={v} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </FadeIn>

        <FadeIn delay={0.08}>
          <div className="mt-4 flex flex-wrap items-center gap-5 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-2">
              <Check className="h-3.5 w-3.5 text-accent" strokeWidth={2} /> Core to the design
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="h-1.5 w-3 rounded-full bg-muted-foreground/50" /> Partial or
              app-dependent
            </span>
            <span className="inline-flex items-center gap-2">
              <Minus className="h-3.5 w-3.5" strokeWidth={1.5} /> Not a strength of the category
            </span>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- */
/*  5. Building the future together                                   */
/* ---------------------------------------------------------------- */
export function BuildTogether() {
  const areas = [
    { icon: Newspaper, t: "Media", s: "Open", d: "Briefings, assets and interviews for journalists covering wearable AI." },
    { icon: FlaskConical, t: "Research", s: "Coming soon", d: "Notes on human factors, optics and multimodal interaction as they mature." },
    { icon: Terminal, t: "Developers", s: "Coming soon", d: "An SDK and early units for builders who want voice and vision as inputs." },
    { icon: Handshake, t: "Partners", s: "In conversation", d: "Component, optics and manufacturing partners. Nothing announced yet." },
    { icon: Users, t: "Community", s: "Open", d: "Early members who follow the build and shape what gets prioritised." },
    { icon: Sparkles, t: "Collaborations", s: "Open", d: "Designers, researchers and studios who want to work on the frame with us." },
  ];

  return (
    <section id="together" className="section-pad relative scroll-mt-24">
      <div className="mx-auto max-w-7xl px-6">
        <FadeIn>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <SectionLabel>Building the future together</SectionLabel>
              <h2 className="font-display text-balance text-[clamp(2rem,5vw,4rem)] leading-[1.02] tracking-[-0.02em] text-gradient">
                Six doors,
                <br />
                <span className="italic text-muted-foreground/80">all of them open.</span>
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              We have no announced partners or investors yet. When we do, they will appear here
              — named.
            </p>
          </div>
        </FadeIn>

        <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {areas.map((a, i) => (
            <FadeIn key={a.t} delay={i * 0.04}>
              <div className="glass flex h-full flex-col rounded-2xl p-6 transition-all duration-500 hover:-translate-y-1 hover:border-white/20">
                <div className="flex items-start justify-between gap-3">
                  <a.icon className="h-5 w-5 text-accent" strokeWidth={1.5} />
                  <span className="rounded-full border border-white/12 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    {a.s}
                  </span>
                </div>
                <div className="mt-8 text-base font-medium text-foreground">{a.t}</div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a.d}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.1}>
          <a href="#contact" className="btn-ghost mt-8 inline-flex text-sm">
            Start a conversation
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </FadeIn>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- */
/*  6. Build in public                                                */
/* ---------------------------------------------------------------- */
export function BuildInPublic() {
  const streams = [
    { icon: CalendarDays, t: "Weekly updates", s: "Starting soon", d: "A short written note each week on what moved and what didn't." },
    { icon: Hammer, t: "Prototype progress", s: "In progress", d: "Mock-ups, materials and fit studies as the frame takes shape." },
    { icon: NotebookPen, t: "Engineering journal", s: "Coming soon", d: "Longer entries on the hard problems and the choices behind them." },
    { icon: GitCommitHorizontal, t: "Development log", s: "Coming soon", d: "A running log of milestones, reversals and rewrites." },
    { icon: Aperture, t: "Behind the scenes", s: "Coming soon", d: "The desk, the workshop, the parts that don't make the render." },
    { icon: Images, t: "Photos", s: "Coming soon", d: "Design studies and shop-floor images, published as they happen." },
    { icon: Film, t: "Videos", s: "Coming soon", d: "Short clips from the bench — unedited, unpolished, real." },
    { icon: FlaskConical, t: "Research notes", s: "In progress", d: "What we're reading, testing and discarding on the way." },
  ];

  return (
    <section id="build-in-public" className="section-pad relative scroll-mt-24">
      <div className="mx-auto max-w-7xl px-6">
        <FadeIn>
          <div className="max-w-2xl">
            <SectionLabel>Build in public</SectionLabel>
            <h2 className="font-display text-balance text-[clamp(2rem,5vw,4rem)] leading-[1.02] tracking-[-0.02em] text-gradient">
              The work,
              <br />
              <span className="italic text-muted-foreground/80">as it happens.</span>
            </h2>
            <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground">
              No launch theatre. Progress is published while it is still uncertain.
            </p>
          </div>
        </FadeIn>

        <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {streams.map((s, i) => (
            <FadeIn key={s.t} delay={i * 0.03}>
              <div className="glass flex h-full flex-col rounded-2xl p-6 transition-all duration-500 hover:-translate-y-1 hover:border-white/20">
                <div className="flex items-start justify-between gap-3">
                  <s.icon className="h-5 w-5 text-accent" strokeWidth={1.5} />
                  <span className="rounded-full border border-white/12 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    {s.s}
                  </span>
                </div>
                <div className="mt-8 text-base font-medium text-foreground">{s.t}</div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.1}>
          <a href="#waitlist" className="btn-primary mt-8 inline-flex text-sm">
            Follow the build
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </FadeIn>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- */
/*  7. Product philosophy                                             */
/* ---------------------------------------------------------------- */
export function Philosophy() {
  const beliefs = [
    {
      n: "01",
      t: "Why VYOM exists",
      d: "Because the most capable technology we've built still asks us to look away from the world to use it.",
    },
    {
      n: "02",
      t: "Why AI must move beyond phones",
      d: "An assistant that cannot see what you see is guessing. Context is the difference between answers and help.",
    },
    {
      n: "03",
      t: "How computing changes next",
      d: "Interfaces recede. Intelligence becomes ambient, spoken and situational — closer to a companion than an app.",
    },
    {
      n: "04",
      t: "Human-centered, long term",
      d: "We optimise for attention returned, not attention captured. That is a decade-long commitment, not a feature.",
    },
  ];

  return (
    <section id="philosophy" className="section-pad relative scroll-mt-24">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <div className="max-w-2xl">
            <SectionLabel>Product philosophy</SectionLabel>
            <h2 className="font-display text-balance text-[clamp(2rem,5vw,4rem)] leading-[1.02] tracking-[-0.02em] text-gradient">
              Fewer beliefs,
              <br />
              <span className="italic text-muted-foreground/80">held longer.</span>
            </h2>
          </div>
        </FadeIn>

        <div className="mt-14 space-y-3">
          {beliefs.map((b, i) => (
            <FadeIn key={b.n} delay={i * 0.04}>
              <div className="glass grid gap-4 rounded-3xl p-8 md:grid-cols-[80px_1fr_1.2fr] md:items-baseline md:p-10">
                <span className="font-mono text-xs tracking-[0.2em] text-accent">{b.n}</span>
                <h3 className="font-display text-2xl leading-tight text-foreground md:text-3xl">
                  {b.t}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                  {b.d}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
