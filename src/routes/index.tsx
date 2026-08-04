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
  Bot,
  Database,
  Mic,
  Camera,
  GraduationCap,
  ListChecks,
  Navigation,
  MessageSquare,
  CheckCircle2,
  Loader2,
  Clock,
} from "lucide-react";
import { useServerFn } from "@tanstack/react-start";
import { joinWaitlist } from "@/lib/waitlist.functions";
import { SiteNav } from "@/components/site-chrome";
import { TechStack, Signals, FounderLetter } from "@/components/home-sections";
import { vyomHero as heroImg, vyomAngle as angleImg, vyomGrid as gridImg, founderImage as founderAsset, vyomLogoWordmark as logoWordmarkAsset, companyProfilePdfUrl as companyPdf, founderBookPdfUrl as founderPdf } from "@/lib/assets";

const founderImg = founderAsset;
const logoWordmark = logoWordmarkAsset;


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "VYOM by Advaya.ai — AI Smart Glasses Built in India" },
      {
        name: "description",
        content:
          "VYOM is an AI-first wearable platform in development by Advaya.ai — hands-free computing with memory, vision and voice, designed privacy-first in Lucknow, India.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:title", content: "VYOM by Advaya.ai — AI Smart Glasses" },
      {
        property: "og:description",
        content: "AI you wear. Hands-free, context-aware, privacy-first computing in development.",
      },
      { property: "og:image", content: `https://advaya-vyom.lovable.app${heroImg}` },
      { name: "twitter:image", content: `https://advaya-vyom.lovable.app${heroImg}` },
    ],
    links: [
      { rel: "canonical", href: "https://advaya-vyom.lovable.app/" },
      { rel: "preload", as: "image", href: heroImg, fetchpriority: "high" },
    ],
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
// Nav is provided by the shared premium SiteNav (hamburger + desktop bar).


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
            Stop looking down.
            <br />
            <span className="italic text-aurora">Start seeing more.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.35 }}
            className="mx-auto mt-8 max-w-xl text-balance text-base leading-relaxed text-muted-foreground md:text-lg"
          >
            VYOM is an AI-first wearable — smart glasses that see what you see, remember
            what matters, and answer without a screen. Built in India, for the world.
          </motion.p>

          <motion.ul
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.45 }}
            className="mx-auto mt-7 flex max-w-2xl flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[11px] uppercase tracking-[0.22em] text-muted-foreground"
          >
            {["Hands-free", "Context aware", "Privacy first"].map((t) => (
              <li key={t} className="inline-flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-accent" />
                {t}
              </li>
            ))}
          </motion.ul>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.55 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-3"
          >
            <a href="#waitlist" className="btn-primary">
              Join Waitlist <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#why" className="btn-ghost">
              Why VYOM
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
              decoding="async"
              loading="eager"
              fetchPriority="high"
              src={heroImg}
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
            <img decoding="async"
              src={angleImg}
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
            { label: "Multiple angles · Frame study", src: gridImg },
            { label: "Front-facing · Optical clarity", src: heroImg },
          ].map((f) => (
            <FadeIn key={f.label}>
              <div className="glass overflow-hidden rounded-3xl">
                <img decoding="async"
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

        {/* Feature cards */}
        <FadeIn delay={0.05}>
          <div className="mt-20 max-w-2xl">
            <SectionLabel>Capabilities · Planned</SectionLabel>
            <h3 className="font-display text-balance text-[clamp(1.75rem,4vw,3rem)] leading-[1.05] tracking-[-0.02em] text-gradient">
              Eight ways VYOM
              <span className="italic text-muted-foreground/80"> shows up for you.</span>
            </h3>
          </div>
        </FadeIn>
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Bot, t: "AI Assistant", d: "Ask anything, hands-free. Answers in your ear, not on a screen." },
            { icon: Database, t: "Memory", d: "Recalls names, places and moments you'd otherwise forget." },
            { icon: Mic, t: "Voice", d: "Natural speech in and out — no wake-word gymnastics." },
            { icon: Camera, t: "Camera Intelligence", d: "Understands objects, text and scenes in front of you." },
            { icon: GraduationCap, t: "Learning", d: "Explain, translate and summarise the world in real time." },
            { icon: ListChecks, t: "Productivity", d: "Capture notes, tasks and meeting summaries as they happen." },
            { icon: Navigation, t: "Navigation", d: "Turn-by-turn guidance that stays in your periphery." },
            { icon: MessageSquare, t: "Communication", d: "Live captions and translation for clearer conversations." },
          ].map((f, i) => (
            <FadeIn key={f.t} delay={i * 0.04}>
              <div className="group glass relative h-full overflow-hidden rounded-2xl p-6 transition-all duration-500 hover:-translate-y-1 hover:border-white/20">
                <div
                  className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{ background: "radial-gradient(circle at 30% 0%, oklch(0.75 0.15 240 / 0.16), transparent 70%)" }}
                />
                <div className="relative">
                  <f.icon className="mb-8 h-5 w-5 text-accent" strokeWidth={1.5} />
                  <div className="text-base font-medium text-foreground">{f.t}</div>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.d}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- */
/*  Why VYOM                                                          */
/* ---------------------------------------------------------------- */
function WhyVyom() {
  const cards = [
    { icon: Sparkles, t: "AI-first wearable", d: "Built around intelligence from the first sketch — not a phone strapped to your face." },
    { icon: Compass, t: "Natural interaction", d: "Voice, gaze and gesture. Nothing to learn, nothing to unlock." },
    { icon: Shield, t: "Privacy-first architecture", d: "On-device wherever possible. Clear indicators, explicit consent, your data yours." },
    { icon: Zap, t: "Hands-free computing", d: "Your hands stay free for the work, the wheel, the tools, the people." },
    { icon: Database, t: "Long-term memory", d: "A private, searchable memory of what you saw, said and decided." },
    { icon: Eye, t: "Context awareness", d: "Knows where you are and what's in front of you before you ask." },
    { icon: Users, t: "Human-centered AI", d: "It helps, then gets out of the way. No feeds, no dark patterns." },
    { icon: MapPin, t: "Designed in India", d: "Product design, engineering and manufacturing ambition rooted at home." },
  ];
  return (
    <section id="why" className="section-pad relative scroll-mt-24">
      <div className="mx-auto max-w-7xl px-6">
        <FadeIn>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <SectionLabel>Why VYOM</SectionLabel>
              <h2 className="font-display text-balance text-[clamp(2rem,5vw,4rem)] leading-[1.02] tracking-[-0.02em] text-gradient">
                Eight advantages.
                <br />
                <span className="italic text-muted-foreground/80">One quiet product.</span>
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              What separates VYOM from a screen you wear — the principles behind every decision.
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
/*  See VYOM in Action                                                */
/* ---------------------------------------------------------------- */
function InAction() {
  return (
    <section id="in-action" className="section-pad relative scroll-mt-24">
      <div className="mx-auto max-w-7xl px-6">
        <FadeIn>
          <div className="max-w-2xl">
            <SectionLabel>See VYOM in action</SectionLabel>
            <h2 className="font-display text-balance text-[clamp(2rem,5vw,4rem)] leading-[1.02] tracking-[-0.02em] text-gradient">
              A first look,
              <br />
              <span className="italic text-muted-foreground/80">coming soon.</span>
            </h2>
          </div>
        </FadeIn>

        <div className="mt-14 grid gap-3 lg:grid-cols-[1.6fr_1fr]">
          <FadeIn>
            <figure className="group glass relative overflow-hidden rounded-2xl">
              <div className="relative aspect-video w-full overflow-hidden">
                <img
                  src={angleImg}
                  alt="VYOM smart glasses shown at an angle — product demo preview"
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover opacity-60 transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                <div className="absolute inset-0 grid place-items-center">
                  <div className="glass-strong flex items-center gap-3 rounded-full px-5 py-2.5 text-xs uppercase tracking-[0.28em] text-muted-foreground">
                    <Clock className="h-3.5 w-3.5 text-accent" strokeWidth={1.5} />
                    Product film in production
                  </div>
                </div>
              </div>
              <figcaption className="flex flex-wrap items-center justify-between gap-3 border-t border-white/5 px-6 py-5">
                <span className="text-sm text-foreground">The VYOM demo film</span>
                <span className="text-xs text-muted-foreground">
                  Released to the waitlist first.
                </span>
              </figcaption>
            </figure>
          </FadeIn>

          <FadeIn delay={0.06}>
            <div className="glass flex h-full flex-col justify-between rounded-2xl p-6">
              <div>
                <Sparkles className="mb-8 h-5 w-5 text-accent" strokeWidth={1.5} />
                <div className="text-base font-medium text-foreground">
                  Interactive prototype
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  A browser walkthrough of the VYOM interface — glance, ask, remember — is being
                  built alongside the first developer units.
                </p>
              </div>
              <a href="#waitlist" className="btn-primary mt-8 inline-flex text-sm">
                Get early access
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </FadeIn>
        </div>

        <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: Eye,
              t: "Product simulation",
              s: "In design",
              d: "A guided simulation of a day with VYOM — what it notices, and when it stays silent.",
            },
            {
              icon: Compass,
              t: "Product walkthrough",
              s: "In production",
              d: "A narrated tour of the frame, the optics and the interaction model.",
            },
            {
              icon: Cpu,
              t: "Developer prototype",
              s: "Planned",
              d: "First functional units, shared with a small cohort of builders before launch.",
            },
          ].map((c, i) => (
            <FadeIn key={c.t} delay={i * 0.04}>
              <div className="glass flex h-full flex-col rounded-2xl p-6 transition-all duration-500 hover:-translate-y-1 hover:border-white/20">
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
/*  Roadmap                                                           */
/* ---------------------------------------------------------------- */
function Roadmap() {
  const steps = [
    { p: "Now", status: "In progress", pct: 70, t: "Research", d: "Human factors, model architecture, and optical R&D." },
    { p: "Now", status: "In progress", pct: 55, t: "Industrial Design", d: "Frame studies, weight balancing, material selection." },
    { p: "Next", status: "Up next", pct: 20, t: "Prototype", d: "First functional developer prototypes." },
    { p: "Next", status: "Up next", pct: 10, t: "Testing", d: "Closed-cohort ergonomics and reliability testing." },
    { p: "Later", status: "Planned", pct: 0, t: "Pilot", d: "Invite-only pilot with early creators and developers." },
    { p: "Later", status: "Planned", pct: 0, t: "Launch", d: "First public product, made in India." },
    { p: "Vision", status: "Long term", pct: 0, t: "Global Expansion", d: "Bringing VYOM to wearers around the world." },
  ];
  return (
    <section id="roadmap" className="section-pad relative scroll-mt-24">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <SectionLabel>Roadmap</SectionLabel>
          <h2 className="font-display text-balance text-[clamp(2rem,5vw,4rem)] leading-[1.02] tracking-[-0.02em] text-gradient">
            A long horizon,
            <br />
            <span className="italic">walked step by step.</span>
          </h2>
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground">
            Honest status, updated as we go. Nothing has shipped yet — here's exactly where we are.
          </p>
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
                  <div className="glass ml-12 rounded-2xl p-6 transition-all duration-500 hover:border-white/20 md:ml-0 md:mr-8 md:[&:where(:nth-child(1))]:mr-0">
                    <div className="mb-3 flex flex-wrap items-center gap-2">
                      <span className="rounded-full border border-white/15 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
                        {s.p}
                      </span>
                      <span
                        className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[10px] uppercase tracking-[0.18em] ${
                          s.pct > 0
                            ? "bg-accent/15 text-accent"
                            : "bg-white/5 text-muted-foreground"
                        }`}
                      >
                        {s.pct > 0 ? (
                          <Zap className="h-3 w-3" strokeWidth={2} />
                        ) : (
                          <Clock className="h-3 w-3" strokeWidth={2} />
                        )}
                        {s.status}
                      </span>
                      <span className="ml-auto font-mono text-xs text-muted-foreground">
                        Phase 0{i + 1}
                      </span>
                    </div>
                    <div className="text-xl font-medium text-foreground">{s.t}</div>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
                    <div
                      className="mt-5 h-1 w-full overflow-hidden rounded-full bg-white/8"
                      role="progressbar"
                      aria-valuenow={s.pct}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      aria-label={`${s.t} progress`}
                    >
                      <motion.span
                        initial={{ width: 0 }}
                        whileInView={{ width: `${s.pct}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.1, delay: 0.15, ease: [0.2, 0.8, 0.2, 1] }}
                        className="block h-full rounded-full bg-gradient-to-r from-accent/60 to-accent"
                      />
                    </div>
                  </div>
                  {/* Node */}
                  <span
                    className="absolute left-4 top-6 -translate-x-1/2 md:left-1/2"
                    aria-hidden
                  >
                    <span
                      className={`block h-3 w-3 rounded-full ${
                        s.pct > 0
                          ? "bg-accent shadow-[0_0_0_6px_oklch(0.75_0.15_240/0.12)]"
                          : "bg-white/25"
                      }`}
                    />
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
  const timeline = [
    { y: "2023", t: "The question", d: "Why does AI still live behind a screen we have to look down at?" },
    { y: "2024", t: "First sketches", d: "Optical studies, weight balancing, and early frame concepts." },
    { y: "2025", t: "Advaya.ai founded", d: "A company formed in Lucknow to build AI hardware from India." },
    { y: "2026", t: "VYOM in development", d: "Prototype engineering, model architecture, and early cohort testing." },
  ];
  return (
    <section id="founder" className="section-pad relative overflow-hidden scroll-mt-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-start gap-16 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <FadeIn>
            <motion.div
              initial={{ opacity: 0, scale: 0.97, filter: "blur(12px)" }}
              whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1.1, ease: [0.2, 0.8, 0.2, 1] }}
              className="glass group relative overflow-hidden rounded-[2rem]"
            >
              <img decoding="async"
                src={founderImg}
                alt="Ashutosh Yadav — Founder of Advaya.ai and VYOM"
                loading="lazy"
                width={1024}
                height={1280}
                className="w-full grayscale-[15%] transition-transform duration-[1.2s] ease-out group-hover:scale-[1.03]"
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
            </motion.div>

            {/* Signature */}
            <FadeIn delay={0.15}>
              <div className="mt-6 flex items-end justify-between gap-4 px-1">
                <div>
                  <div className="font-display text-3xl italic text-foreground/90">
                    Ashutosh Yadav
                  </div>
                  <div className="mt-1 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                    Founder & CEO · Lucknow, India
                  </div>
                </div>
                <span className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent" />
              </div>
            </FadeIn>
          </FadeIn>

          <FadeIn delay={0.1}>
            <SectionLabel>Founder</SectionLabel>
            <blockquote className="font-display text-balance text-[clamp(1.75rem,3.6vw,3rem)] leading-[1.12] tracking-[-0.01em] text-gradient">
              <span className="mr-2 text-accent">"</span>
              The future of computing won't stay in our hands — it will become part of how we see, think, and interact with the world.
              <span className="ml-1 text-accent">"</span>
            </blockquote>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                { icon: Compass, k: "Mission", v: "Make AI natural, accessible and genuinely useful in everyday life." },
                { icon: Globe2, k: "Vision", v: "Globally recognised AI products, designed and built from India." },
              ].map((m) => (
                <div key={m.k} className="glass rounded-2xl p-5">
                  <m.icon className="mb-4 h-4 w-4 text-accent" strokeWidth={1.5} />
                  <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">{m.k}</div>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/85">{m.v}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 space-y-4 text-sm leading-relaxed text-muted-foreground">
              <p className="text-foreground">
                <span className="font-medium">Ashutosh Yadav</span> — Founder, Advaya.ai & VYOM
              </p>
              <p>
                An Indian entrepreneur building the future of AI-powered wearable computing. He
                founded Advaya.ai to make artificial intelligence feel natural in everyday life —
                and is building VYOM, an AI smart glasses platform for learning, creating,
                communicating and working hands-free.
              </p>
              <p>
                His conviction is simple: technology should empower people rather than distract
                them. That belief shapes every material, model and interaction choice in VYOM.
              </p>
            </div>

            {/* Timeline */}
            <div className="mt-10">
              <div className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
                The journey
              </div>
              <ul className="mt-5 space-y-4 border-l border-white/10 pl-6">
                {timeline.map((t, i) => (
                  <FadeIn key={t.y} delay={i * 0.06} y={12}>
                    <li className="relative">
                      <span
                        className="absolute -left-[27px] top-2 h-2 w-2 rounded-full bg-accent shadow-[0_0_0_5px_oklch(0.75_0.15_240/0.12)]"
                        aria-hidden
                      />
                      <div className="font-mono text-xs text-accent">{t.y}</div>
                      <div className="mt-0.5 text-sm font-medium text-foreground">{t.t}</div>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{t.d}</p>
                    </li>
                  </FadeIn>
                ))}
              </ul>
            </div>
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
  const join = useServerFn(joinWaitlist);
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [state, setState] = useState<"idle" | "loading" | "ok" | "error">("idle");
  const [message, setMessage] = useState("");
  const startedAtRef = useRef<number>(Date.now());

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const value = email.trim();
    if (!/^[^\s@]+@[^\s@.]+\.[^\s@]{2,}$/.test(value)) {
      setState("error");
      setMessage("Please enter a valid email address.");
      return;
    }
    setState("loading");
    try {
      const res = await join({
        data: { email: value, source: "homepage", website, startedAt: startedAtRef.current },
      });
      setMessage(
        res.alreadyJoined
          ? "You're already on the list — we'll be in touch."
          : "You're in. Welcome to the journey."
      );
      setState("ok");
      setEmail("");
    } catch (err) {
      setState("error");
      setMessage(err instanceof Error ? err.message : "Something went wrong.");
    }
  };


  const benefits = [
    { icon: Sparkles, t: "Exclusive early access", d: "First invitations when the pilot cohort opens." },
    { icon: Eye, t: "Prototype reveals", d: "See hardware and software before anyone else." },
    { icon: Users, t: "Community updates", d: "Founder notes on progress, setbacks and decisions." },
  ];

  return (
    <section id="waitlist" className="section-pad relative overflow-hidden scroll-mt-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="glass-strong relative overflow-hidden rounded-[2rem] px-8 py-16 text-center md:px-16 md:py-20">
          <div className="pointer-events-none absolute inset-0 aurora-bg opacity-70" />
          <div className="relative">
            <FadeIn>
              <SectionLabel>Waitlist</SectionLabel>
              <h2 className="font-display text-balance text-[clamp(2.25rem,6vw,4.5rem)] leading-[1.02] tracking-[-0.02em] text-gradient">
                Join the <span className="italic">Future.</span>
              </h2>
              <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
                A few hundred people will shape VYOM before the world sees it. Be one of them.
              </p>
            </FadeIn>

            <FadeIn delay={0.1}>
              {state === "ok" ? (
                <div className="mx-auto mt-10 flex max-w-xl flex-col items-center gap-3">
                  <div className="grid h-12 w-12 place-items-center rounded-full bg-accent/15">
                    <CheckCircle2 className="h-6 w-6 text-accent" strokeWidth={1.5} />
                  </div>
                  <p className="text-sm text-foreground">{message}</p>
                </div>
              ) : (
                <form
                  onSubmit={submit}
                  className="glass mx-auto mt-10 flex max-w-xl flex-col gap-2 rounded-3xl p-2 sm:flex-row sm:rounded-full"
                >
                  <label htmlFor="waitlist-email" className="sr-only">
                    Email address
                  </label>
                  <input
                    type="text"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                    className="hidden"
                  />
                  <input
                    id="waitlist-email"
                    type="email"
                    name="email"
                    required
                    maxLength={320}
                    autoComplete="email"
                    inputMode="email"
                    spellCheck={false}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    aria-invalid={state === "error"}
                    className="flex-1 rounded-full bg-transparent px-5 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
                  />

                  <button type="submit" disabled={state === "loading"} className="btn-primary shrink-0 disabled:opacity-70">
                    {state === "loading" ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" /> Joining…
                      </>
                    ) : (
                      <>
                        Request access <ArrowRight className="h-4 w-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
              <p className={`mt-4 text-xs ${state === "error" ? "text-destructive" : "text-muted-foreground"}`}>
                {state === "error" ? message : "No spam. Occasional updates on our progress."}
              </p>
            </FadeIn>

            <div className="mt-12 grid gap-3 text-left sm:grid-cols-3">
              {benefits.map((b, i) => (
                <FadeIn key={b.t} delay={0.15 + i * 0.05} y={14}>
                  <div className="glass h-full rounded-2xl p-5">
                    <b.icon className="mb-4 h-4 w-4 text-accent" strokeWidth={1.5} />
                    <div className="text-sm font-medium text-foreground">{b.t}</div>
                    <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{b.d}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
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
    { icon: FileText, t: "Pitch Deck", s: "Interactive · 20 slides", d: "The full investor narrative, slide by slide.", href: "/pitch-deck", ext: false },
    { icon: Newspaper, t: "Press Kit", s: "View", d: "Company facts, founder bio, brand assets.", href: "/press-kit", ext: false },
    { icon: Briefcase, t: "Company Profile", s: "PDF", d: "Overview of Advaya.ai and the VYOM platform.", href: companyPdf, ext: true },
    { icon: BookOpen, t: "Founder Book", s: "PDF", d: "The story and philosophy behind the company.", href: founderPdf, ext: true },
  ];
  return (
    <section id="resources" className="section-pad relative scroll-mt-24">
      <div className="mx-auto max-w-7xl px-6">
        <FadeIn>
          <SectionLabel>Media</SectionLabel>
          <h2 className="font-display text-balance text-[clamp(2rem,5vw,3.5rem)] leading-[1.02] tracking-[-0.02em] text-gradient">
            Resources.
          </h2>
          <p className="mt-5 max-w-lg text-sm leading-relaxed text-muted-foreground">
            Everything you need to understand the company, the product and the plan.
          </p>
        </FadeIn>
        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c, i) => (
            <FadeIn key={c.t} delay={i * 0.04}>
              <a
                href={c.href}
                {...(c.ext ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="group glass relative block h-full overflow-hidden rounded-2xl p-6 transition-all duration-500 hover:-translate-y-1 hover:border-white/20"
              >
                <span
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{ background: "radial-gradient(120% 90% at 50% 0%, oklch(0.75 0.15 240 / 0.14), transparent 70%)" }}
                  aria-hidden
                />
                <div className="relative flex items-start justify-between">
                  <c.icon className="h-5 w-5 text-accent" strokeWidth={1.5} />
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
                </div>
                <div className="relative mt-10 text-base font-medium text-foreground">{c.t}</div>
                <p className="relative mt-1.5 text-xs leading-relaxed text-muted-foreground">{c.d}</p>
                <div className="relative mt-4 text-[10px] uppercase tracking-[0.25em] text-accent">
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
    {
      icon: Instagram,
      t: "Instagram",
      href: "https://www.instagram.com/ashhvision?igsh=djg1Mnlmb2UxNW04",
    },
    { icon: Twitter, t: "X", href: "https://x.com/ashh_vision" },
    { icon: Mail, t: "Email", href: "mailto:hello@advaya.ai" },
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
                href={s.href}
                aria-label={s.t}
                {...(s.href.startsWith("http")
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
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
                  <div className="mt-1 text-lg text-foreground">Lucknow, Uttar Pradesh · India</div>
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
          <img decoding="async"
            src={logoWordmark}
            alt="VYOM"
            className="h-4 w-auto object-contain"
            loading="lazy"
          />
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
      <SiteNav />
      <Hero />
      <Trust />
      <Problem />
      <Vision />
      <Product />
      <WhyVyom />
      <InAction />
      <TechStack />
      <Roadmap />
      <Signals />
      <Founder />
      <FounderLetter />
      <WhyIndia />
      <Waitlist />
      <Media />
      <Social />
      <Contact />
      <Footer />
    </main>
  );
}
