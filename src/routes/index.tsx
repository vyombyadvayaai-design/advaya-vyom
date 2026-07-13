import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Shield,
  Cpu,
  Rocket,
  MapPin,
  Mail,
  Instagram,
  Linkedin,
  Youtube,
  Github,
  Twitter,
  Eye,
  Brain,
  Zap,
  Compass,
  Leaf,
  Factory,
  Users,
  Globe2,
  Newspaper,
  FileText,
  Briefcase,
  BookOpen,
} from "lucide-react";
import heroImg from "@/assets/vyom-hero.png.asset.json";
import angleImg from "@/assets/vyom-angle.png.asset.json";
import gridImg from "@/assets/vyom-grid.png.asset.json";
import founderAsset from "@/assets/founder.png.asset.json";
const founderImg = founderAsset.url;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { property: "og:image", content: (heroImg as { url: string }).url },
      { name: "twitter:image", content: (heroImg as { url: string }).url },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Landing,
});

/* ---------------------------------------------------------------- */
/*  Ambient background: stars + aurora + soft particles              */
/* ---------------------------------------------------------------- */
function Starfield() {
  const stars = useMemo(
    () =>
      Array.from({ length: 90 }).map(() => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
        s: Math.random() * 1.6 + 0.4,
        d: Math.random() * 4 + 2,
        delay: Math.random() * 6,
      })),
    []
  );
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {stars.map((s, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-white animate-twinkle"
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: s.s,
            height: s.s,
            animationDuration: `${s.d}s`,
            animationDelay: `${s.delay}s`,
            opacity: 0.4,
          }}
        />
      ))}
    </div>
  );
}

function Aurora({ intensity = 1 }: { intensity?: number }) {
  return (
    <div
      className="pointer-events-none absolute inset-0 aurora-bg animate-aurora"
      style={{ opacity: intensity }}
    />
  );
}

/* ---------------------------------------------------------------- */
/*  Navigation                                                       */
/* ---------------------------------------------------------------- */
function Nav() {
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
          <a href="#top" className="flex items-center gap-2">
            <span className="font-display text-xl tracking-[0.35em] text-foreground">
              VYOM
            </span>
            <span className="hidden text-[10px] uppercase tracking-[0.3em] text-muted-foreground md:inline">
              by Advaya.ai
            </span>
          </a>
          <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
            <a href="#vision" className="transition hover:text-foreground">Vision</a>
            <a href="#product" className="transition hover:text-foreground">Product</a>
            <a href="#roadmap" className="transition hover:text-foreground">Roadmap</a>
            <a href="#founder" className="transition hover:text-foreground">Founder</a>
            <a href="#contact" className="transition hover:text-foreground">Contact</a>
          </nav>
          <a href="#waitlist" className="btn-primary text-sm">
            Join Waitlist
          </a>
        </div>
      </div>
    </header>
  );
}

/* ---------------------------------------------------------------- */
/*  Hero                                                             */
/* ---------------------------------------------------------------- */
function Hero() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-1, 1], [8, -8]), { stiffness: 60, damping: 12 });
  const ry = useSpring(useTransform(mx, [-1, 1], [-10, 10]), { stiffness: 60, damping: 12 });
  const tx = useSpring(useTransform(mx, [-1, 1], [-20, 20]), { stiffness: 60, damping: 12 });
  const ty = useSpring(useTransform(my, [-1, 1], [-12, 12]), { stiffness: 60, damping: 12 });

  const onMove = (e: React.MouseEvent) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set(((e.clientX - r.left) / r.width) * 2 - 1);
    my.set(((e.clientY - r.top) / r.height) * 2 - 1);
  };

  return (
    <section
      id="top"
      onMouseMove={onMove}
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden"
    >
      <Aurora />
      <Starfield />
      {/* Vignette */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(ellipse at center, transparent 40%, oklch(0.06 0.005 260) 100%)" }}
      />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-16 px-6 pt-32 md:pt-24">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
            className="mx-auto mb-8 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-muted-foreground"
          >
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent animate-pulse-glow" />
            In development · Est. 2026
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.1, ease: [0.2, 0.8, 0.2, 1] }}
            className="font-display text-balance text-[clamp(2.75rem,7.5vw,6.5rem)] leading-[0.95] tracking-[-0.02em] text-gradient"
          >
            The Future of AI
            <br />
            <span className="italic text-aurora">You'll Wear.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.35 }}
            className="mx-auto mt-8 max-w-2xl text-balance text-base leading-relaxed text-muted-foreground md:text-lg"
          >
            VYOM is an AI-first wearable platform being developed to make artificial
            intelligence feel natural, intuitive, and always available. Built in India
            with global ambitions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-3"
          >
            <a href="#waitlist" className="btn-primary">
              Join Waitlist <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#vision" className="btn-ghost">
              Explore Our Vision
            </a>
          </motion.div>
        </div>

        {/* 3D floating glasses */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.94 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.4, delay: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
          style={{ perspective: 1400 }}
          className="relative mx-auto w-full max-w-5xl"
        >
          <motion.div
            style={{ rotateX: rx, rotateY: ry, x: tx, y: ty, transformStyle: "preserve-3d" }}
            className="relative animate-float-slow"
          >
            {/* Glow underlay */}
            <div className="absolute inset-x-10 bottom-0 h-40 rounded-[50%] blur-3xl"
              style={{ background: "radial-gradient(ellipse, oklch(0.75 0.15 240 / 0.55), transparent 70%)" }}
            />
            <img
              src={heroImg.url}
              alt="VYOM AI smart glasses concept render"
              width={1600}
              height={1200}
              className="relative mx-auto w-full drop-shadow-[0_60px_80px_rgba(0,0,0,0.6)]"
            />
          </motion.div>
        </motion.div>

        <div className="pointer-events-none mx-auto -mt-10 flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.35em] text-muted-foreground">
          <span>Scroll</span>
          <span className="block h-10 w-px bg-gradient-to-b from-transparent via-white/30 to-transparent" />
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- */
/*  Section wrapper                                                   */
/* ---------------------------------------------------------------- */
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-5 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.35em] text-muted-foreground">
      <span className="h-px w-8 bg-white/30" />
      {children}
    </div>
  );
}

function FadeIn({
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
/*  Trust                                                            */
/* ---------------------------------------------------------------- */
function Trust() {
  const items = [
    { icon: MapPin, label: "Built in India" },
    { icon: Sparkles, label: "AI First" },
    { icon: Shield, label: "Privacy Focused" },
    { icon: Cpu, label: "Deep Tech" },
    { icon: Rocket, label: "Future Ready" },
  ];
  return (
    <section className="relative border-y border-white/5 py-14">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {items.map((it, i) => (
            <FadeIn key={it.label} delay={i * 0.05}>
              <div className="glass flex items-center gap-3 rounded-2xl px-5 py-4">
                <it.icon className="h-4 w-4 text-accent" strokeWidth={1.5} />
                <span className="text-sm text-foreground/90">{it.label}</span>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- */
/*  Problem                                                           */
/* ---------------------------------------------------------------- */
function Problem() {
  const points = [
    "People constantly switch between phones, apps, laptops and notifications.",
    "AI still feels disconnected from everyday life.",
    "Technology should become invisible.",
  ];
  return (
    <section className="section-pad relative">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <SectionLabel>The Problem</SectionLabel>
          <h2 className="font-display text-balance text-[clamp(2rem,5vw,4rem)] leading-[1.02] tracking-[-0.02em] text-gradient">
            Today's technology demands
            <br />
            <span className="italic text-muted-foreground/80">too much attention.</span>
          </h2>
        </FadeIn>
        <div className="mt-16 grid gap-4 md:grid-cols-3">
          {points.map((p, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <div className="glass h-full rounded-2xl p-8">
                <div className="mb-6 font-mono text-xs text-accent">
                  0{i + 1}
                </div>
                <p className="text-lg leading-relaxed text-foreground/85">{p}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- */
/*  Vision                                                            */
/* ---------------------------------------------------------------- */
function Vision() {
  return (
    <section id="vision" className="section-pad relative overflow-hidden">
      <Aurora intensity={0.5} />
      <div className="relative mx-auto max-w-6xl px-6 text-center">
        <FadeIn>
          <SectionLabel>Our Vision</SectionLabel>
        </FadeIn>
        <FadeIn delay={0.05}>
          <h2 className="font-display text-balance text-[clamp(2.25rem,6vw,5rem)] leading-[1.02] tracking-[-0.02em] text-gradient">
            AI that disappears
            <br />
            <span className="italic text-aurora">into everyday life.</span>
          </h2>
        </FadeIn>
        <FadeIn delay={0.15}>
          <div className="mx-auto mt-12 grid max-w-4xl gap-6 text-left md:grid-cols-3">
            {[
              {
                k: "Our goal",
                v: "To build the wearable interface where AI stops being an app and starts being a companion.",
              },
              {
                k: "Our vision",
                v: "A world where computing lives lightly on the human body — always present, never intrusive.",
              },
              {
                k: "We are designing",
                v: "A platform that listens, sees, and acts on your behalf with quiet, considered intelligence.",
              },
            ].map((b) => (
              <div key={b.k} className="glass rounded-2xl p-7">
                <div className="mb-3 text-xs uppercase tracking-[0.25em] text-accent">
                  {b.k}
                </div>
                <p className="text-base leading-relaxed text-foreground/85">{b.v}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- */
/*  Product                                                           */
/* ---------------------------------------------------------------- */
function Product() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0.2, 0.6], [40, -40]);
  return (
    <section id="product" className="section-pad relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <SectionLabel>The Product · Concept</SectionLabel>
            <h2 className="font-display text-balance text-[clamp(2.25rem,6vw,5rem)] leading-[1.02] tracking-[-0.02em] text-gradient">
              Wearable intelligence,
              <br />
              <span className="italic">rendered in obsidian.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-sm text-muted-foreground">
              Early industrial concept renders. Final hardware in active development.
            </p>
          </div>
        </FadeIn>

        {/* Hero product frame */}
        <FadeIn delay={0.05}>
          <motion.div
            style={{ y }}
            className="glass relative mt-16 overflow-hidden rounded-[2rem]"
          >
            <div className="pointer-events-none absolute inset-0 aurora-bg opacity-40" />
            <img
              src={angleImg.url}
              alt="VYOM smart glasses — angled hero render"
              loading="lazy"
              width={1600}
              height={1200}
              className="relative mx-auto w-full"
            />
            <div className="absolute inset-x-0 bottom-0 flex flex-wrap items-end justify-between gap-4 p-8 text-xs uppercase tracking-[0.28em] text-muted-foreground">
              <span>VYOM · Concept 001</span>
              <span>Aluminum · Acetate · Optical Grade Glass</span>
            </div>
          </motion.div>
        </FadeIn>

        {/* Grid of views */}
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          {[
            { label: "Multiple angles · Frame study", src: gridImg.url },
            { label: "Front-facing · Optical clarity", src: heroImg.url },
          ].map((f) => (
            <FadeIn key={f.label}>
              <div className="glass overflow-hidden rounded-3xl">
                <img
                  src={f.src}
                  alt={f.label}
                  loading="lazy"
                  width={1600}
                  height={1200}
                  className="w-full"
                />
                <div className="border-t border-white/5 p-5 text-xs uppercase tracking-[0.25em] text-muted-foreground">
                  {f.label}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Spec strip */}
        <FadeIn delay={0.1}>
          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {[
              { k: "See", v: "Ambient AI vision", icon: Eye },
              { k: "Understand", v: "On-device reasoning", icon: Brain },
              { k: "Act", v: "Voice + gesture", icon: Zap },
            ].map((s) => (
              <div key={s.k} className="glass flex items-center gap-4 rounded-2xl p-5">
                <s.icon className="h-5 w-5 text-accent" strokeWidth={1.5} />
                <div>
                  <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                    {s.k}
                  </div>
                  <div className="text-sm text-foreground/90">{s.v}</div>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- */
/*  Why VYOM                                                          */
/* ---------------------------------------------------------------- */
function WhyVyom() {
  const cards = [
    { icon: Sparkles, t: "AI-first approach", d: "Every design decision starts with intelligence, not the screen." },
    { icon: Compass, t: "Natural interaction", d: "Voice, gaze, and gesture — no menus to learn, no muscle memory to build." },
    { icon: MapPin, t: "Designed in India", d: "Product design, engineering, and vision — all rooted at home." },
    { icon: Globe2, t: "Wearable ecosystem", d: "An open platform being built for a future of ambient devices." },
    { icon: Rocket, t: "Productivity focused", d: "Cut through noise. Return your attention to what matters." },
    { icon: Leaf, t: "Accessibility focused", d: "Interfaces that adapt to the human, not the other way around." },
    { icon: Cpu, t: "Industrial design", d: "Premium materials, honest form, considered weight." },
    { icon: Shield, t: "Privacy by design", d: "On-device intelligence wherever possible. Consent, always." },
  ];
  return (
    <section className="section-pad relative">
      <div className="mx-auto max-w-7xl px-6">
        <FadeIn>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <SectionLabel>Why VYOM</SectionLabel>
              <h2 className="font-display text-balance text-[clamp(2rem,5vw,4rem)] leading-[1.02] tracking-[-0.02em] text-gradient">
                Eight principles.
                <br />
                <span className="italic text-muted-foreground/80">One quiet product.</span>
              </h2>
            </div>
            <p className="max-w-sm text-sm text-muted-foreground">
              A short list of the ideas we return to whenever we make a decision about VYOM.
            </p>
          </div>
        </FadeIn>
        <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c, i) => (
            <FadeIn key={c.t} delay={i * 0.04}>
              <div className="group glass h-full rounded-2xl p-6 transition-all duration-500 hover:-translate-y-1 hover:border-white/20">
                <c.icon className="mb-8 h-5 w-5 text-accent" strokeWidth={1.5} />
                <div className="text-base font-medium text-foreground">{c.t}</div>
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
/*  Roadmap                                                           */
/* ---------------------------------------------------------------- */
function Roadmap() {
  const steps = [
    { p: "Now", t: "Research", d: "Human factors, model architecture, and optical R&D." },
    { p: "Now", t: "Industrial Design", d: "Frame studies, weight balancing, material selection." },
    { p: "Next", t: "Prototype", d: "First functional developer prototypes." },
    { p: "Next", t: "Testing", d: "Closed-cohort ergonomics and reliability testing." },
    { p: "Later", t: "Pilot", d: "Invite-only pilot with early creators and developers." },
    { p: "Later", t: "Launch", d: "First public product, made in India." },
    { p: "Vision", t: "Global Expansion", d: "Bringing VYOM to wearers around the world." },
  ];
  return (
    <section id="roadmap" className="section-pad relative">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <SectionLabel>Roadmap</SectionLabel>
          <h2 className="font-display text-balance text-[clamp(2rem,5vw,4rem)] leading-[1.02] tracking-[-0.02em] text-gradient">
            A long horizon,
            <br />
            <span className="italic">walked step by step.</span>
          </h2>
        </FadeIn>

        <div className="relative mt-16">
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-transparent via-white/15 to-transparent md:left-1/2" />
          <ul className="space-y-8">
            {steps.map((s, i) => (
              <FadeIn key={s.t} delay={i * 0.05}>
                <li
                  className={`relative grid gap-4 md:grid-cols-2 ${
                    i % 2 === 0 ? "" : "md:[&>*:first-child]:col-start-2"
                  }`}
                >
                  <div className="glass ml-12 rounded-2xl p-6 md:ml-0 md:mr-8 md:[&:where(:nth-child(1))]:mr-0">
                    <div className="mb-2 flex items-center gap-3">
                      <span className="rounded-full border border-white/15 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
                        {s.p}
                      </span>
                      <span className="font-mono text-xs text-muted-foreground">
                        Phase 0{i + 1}
                      </span>
                    </div>
                    <div className="text-xl font-medium text-foreground">{s.t}</div>
                    <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
                  </div>
                  {/* Node */}
                  <span
                    className="absolute left-4 top-6 -translate-x-1/2 md:left-1/2"
                    aria-hidden
                  >
                    <span className="block h-3 w-3 rounded-full bg-accent shadow-[0_0_0_6px_oklch(0.75_0.15_240/0.12)]" />
                  </span>
                </li>
              </FadeIn>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- */
/*  Founder                                                           */
/* ---------------------------------------------------------------- */
function Founder() {
  return (
    <section id="founder" className="section-pad relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-16 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <FadeIn>
            <div className="glass relative overflow-hidden rounded-[2rem]">
              <img
                src={founderImg}
                alt="Ashutosh Yadav — Founder, Advaya.ai"
                loading="lazy"
                width={1024}
                height={1280}
                className="w-full grayscale-[15%]"
              />
              <div className="pointer-events-none absolute inset-0"
                style={{ background: "linear-gradient(180deg, transparent 55%, oklch(0.06 0.005 260) 100%)" }}
              />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <div className="font-display text-2xl text-foreground">Ashutosh Yadav</div>
                <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                  Founder, Advaya.ai
                </div>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <SectionLabel>Founder</SectionLabel>
            <blockquote className="font-display text-balance text-[clamp(1.75rem,3.6vw,3rem)] leading-[1.12] tracking-[-0.01em] text-gradient">
              <span className="mr-2 text-accent">"</span>
              We are not building another gadget. We are building the future of{" "}
              <span className="italic">wearable intelligence</span> from India.
              <span className="ml-1 text-accent">"</span>
            </blockquote>
            <p className="mt-8 text-sm leading-relaxed text-muted-foreground">
              Advaya.ai is a deep-tech company incubated in India, focused on the
              intersection of hardware, human interface, and applied AI.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- */
/*  Why India                                                         */
/* ---------------------------------------------------------------- */
function WhyIndia() {
  const items = [
    { icon: Cpu, t: "Engineering talent", d: "One of the world's largest pools of engineers, designers, and researchers." },
    { icon: Sparkles, t: "Innovation", d: "A generation building original products, not just services." },
    { icon: Factory, t: "Manufacturing", d: "A maturing electronics and hardware manufacturing base." },
    { icon: Users, t: "Young population", d: "A digitally native audience shaping the next decade of computing." },
    { icon: Rocket, t: "Startup ecosystem", d: "Capital, mentorship, and infrastructure now within reach." },
    { icon: Globe2, t: "Global potential", d: "A launchpad for products designed for the world." },
  ];
  return (
    <section className="section-pad relative overflow-hidden">
      <Aurora intensity={0.35} />
      <div className="relative mx-auto max-w-6xl px-6">
        <FadeIn>
          <div className="max-w-3xl">
            <SectionLabel>Why India</SectionLabel>
            <h2 className="font-display text-balance text-[clamp(2rem,5vw,4rem)] leading-[1.02] tracking-[-0.02em] text-gradient">
              A generational
              <br />
              <span className="italic text-aurora">moment.</span>
            </h2>
            <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground">
              India is uniquely positioned to build the next global platform in AI hardware.
              VYOM is our contribution to that opportunity.
            </p>
          </div>
        </FadeIn>
        <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <FadeIn key={it.t} delay={i * 0.04}>
              <div className="glass h-full rounded-2xl p-6">
                <it.icon className="mb-6 h-5 w-5 text-accent" strokeWidth={1.5} />
                <div className="text-base font-medium text-foreground">{it.t}</div>
                <p className="mt-2 text-sm text-muted-foreground">{it.d}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- */
/*  Waitlist                                                          */
/* ---------------------------------------------------------------- */
function Waitlist() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "ok">("idle");
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setState("ok");
    setEmail("");
    setTimeout(() => setState("idle"), 4000);
  };
  return (
    <section id="waitlist" className="section-pad relative overflow-hidden">
      <div className="mx-auto max-w-4xl px-6">
        <div className="glass-strong relative overflow-hidden rounded-[2rem] px-8 py-16 text-center md:px-16 md:py-24">
          <div className="pointer-events-none absolute inset-0 aurora-bg opacity-70" />
          <div className="relative">
            <FadeIn>
              <SectionLabel>Waitlist</SectionLabel>
              <h2 className="font-display text-balance text-[clamp(2.25rem,6vw,4.5rem)] leading-[1.02] tracking-[-0.02em] text-gradient">
                Join the <span className="italic">Future.</span>
              </h2>
              <p className="mx-auto mt-5 max-w-md text-sm text-muted-foreground">
                Be among the first to follow VYOM's journey.
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <form
                onSubmit={submit}
                className="glass mx-auto mt-10 flex max-w-xl flex-col gap-2 rounded-full p-2 sm:flex-row"
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  className="flex-1 rounded-full bg-transparent px-5 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
                />
                <button type="submit" className="btn-primary shrink-0">
                  {state === "ok" ? "You're in ✓" : "Request access"}
                  {state !== "ok" && <ArrowRight className="h-4 w-4" />}
                </button>
              </form>
              <p className="mt-4 text-xs text-muted-foreground">
                No spam. Occasional updates on our progress.
              </p>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- */
/*  Media                                                             */
/* ---------------------------------------------------------------- */
function Media() {
  const cards = [
    { icon: FileText, t: "Pitch Deck", s: "Coming Soon" },
    { icon: Newspaper, t: "Press Kit", s: "Coming Soon" },
    { icon: Briefcase, t: "Careers", s: "Coming Soon" },
    { icon: BookOpen, t: "Blog", s: "Read" },
  ];
  return (
    <section className="section-pad relative">
      <div className="mx-auto max-w-7xl px-6">
        <FadeIn>
          <SectionLabel>Media</SectionLabel>
          <h2 className="font-display text-balance text-[clamp(2rem,5vw,3.5rem)] leading-[1.02] tracking-[-0.02em] text-gradient">
            Resources.
          </h2>
        </FadeIn>
        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c, i) => (
            <FadeIn key={c.t} delay={i * 0.04}>
              <a
                href="#"
                className="group glass block rounded-2xl p-6 transition hover:-translate-y-1 hover:border-white/20"
              >
                <div className="flex items-start justify-between">
                  <c.icon className="h-5 w-5 text-accent" strokeWidth={1.5} />
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground transition group-hover:text-foreground" />
                </div>
                <div className="mt-10 text-base font-medium text-foreground">{c.t}</div>
                <div className="mt-1 text-xs uppercase tracking-[0.25em] text-muted-foreground">
                  {c.s}
                </div>
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- */
/*  Social + Contact + Footer                                         */
/* ---------------------------------------------------------------- */
function Social() {
  const socials = [
    { icon: Instagram, t: "Instagram" },
    { icon: Linkedin, t: "LinkedIn" },
    { icon: Youtube, t: "YouTube" },
    { icon: Twitter, t: "X" },
    { icon: Github, t: "GitHub" },
    { icon: Mail, t: "Email" },
  ];
  return (
    <section className="relative py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="glass flex flex-wrap items-center justify-between gap-6 rounded-2xl p-6">
          <div className="text-xs uppercase tracking-[0.28em] text-muted-foreground">
            Follow the journey
          </div>
          <div className="flex flex-wrap gap-2">
            {socials.map((s) => (
              <a
                key={s.t}
                href="#"
                aria-label={s.t}
                className="glass grid h-10 w-10 place-items-center rounded-full transition hover:border-white/25"
              >
                <s.icon className="h-4 w-4 text-foreground/80" strokeWidth={1.5} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section-pad relative">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 md:grid-cols-2">
          <FadeIn>
            <SectionLabel>Contact</SectionLabel>
            <h2 className="font-display text-balance text-[clamp(2rem,5vw,3.75rem)] leading-[1.02] tracking-[-0.02em] text-gradient">
              Say hello.
            </h2>
            <p className="mt-5 max-w-md text-sm text-muted-foreground">
              For business inquiries, partnerships, or press — we'd love to hear from you.
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="grid gap-3">
              <a
                href="mailto:hello@advaya.ai"
                className="glass flex items-center justify-between rounded-2xl p-6 transition hover:border-white/20"
              >
                <div>
                  <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                    Email
                  </div>
                  <div className="mt-1 text-lg text-foreground">hello@advaya.ai</div>
                </div>
                <Mail className="h-5 w-5 text-accent" strokeWidth={1.5} />
              </a>
              <div className="glass flex items-center justify-between rounded-2xl p-6">
                <div>
                  <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                    Location
                  </div>
                  <div className="mt-1 text-lg text-foreground">Bengaluru · India</div>
                </div>
                <MapPin className="h-5 w-5 text-accent" strokeWidth={1.5} />
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/5 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
        <div className="flex items-center gap-3">
          <span className="font-display text-lg tracking-[0.35em]">VYOM</span>
          <span className="text-xs uppercase tracking-[0.28em] text-muted-foreground">
            by Advaya.ai
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-6 text-xs text-muted-foreground">
          <a href="#" className="transition hover:text-foreground">Privacy</a>
          <a href="#" className="transition hover:text-foreground">Terms</a>
          <a href="#" className="transition hover:text-foreground">Cookies</a>
          <span>© {new Date().getFullYear()} Advaya.ai</span>
          <span className="inline-flex items-center gap-1.5">
            <span className="h-1 w-1 rounded-full bg-accent" /> Designed in India
          </span>
        </div>
      </div>
    </footer>
  );
}

/* ---------------------------------------------------------------- */
/*  Landing                                                           */
/* ---------------------------------------------------------------- */
function Landing() {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <Trust />
      <Problem />
      <Vision />
      <Product />
      <WhyVyom />
      <Roadmap />
      <Founder />
      <WhyIndia />
      <Waitlist />
      <Media />
      <Social />
      <Contact />
      <Footer />
    </main>
  );
}
