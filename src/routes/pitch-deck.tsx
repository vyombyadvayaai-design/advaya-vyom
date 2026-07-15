import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useMemo, useState, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Play,
  Grid3x3,
  X,
  Mic,
  Eye,
  Brain,
  Sparkles,
  Shield,
  Users,
  Globe2,
  Rocket,
  Cpu,
  Handshake,
  Factory,
  Lightbulb,
  Heart,
  Target,
  Compass,
  Sun,
  Mail,
} from "lucide-react";
import { z } from "zod";
import heroImg from "@/assets/vyom-hero.png.asset.json";
import angleImg from "@/assets/vyom-angle.png.asset.json";
import gridImg from "@/assets/vyom-grid.png.asset.json";
import founderAsset from "@/assets/founder.png.asset.json";
import logoWordmarkAsset from "@/assets/vyom-logo-wordmark.png.asset.json";

const founderImg = founderAsset.url;
const logoWordmark = logoWordmarkAsset.url;

const searchSchema = z.object({
  slide: z.number().int().min(1).max(20).optional().catch(1),
  grid: z.boolean().optional().catch(false),
});

export const Route = createFileRoute("/pitch-deck")({
  validateSearch: searchSchema,
  head: () => ({
    meta: [
      { title: "Pitch Deck — VYOM by Advaya.ai" },
      {
        name: "description",
        content:
          "The VYOM pitch deck by Advaya.ai — vision, product, market, roadmap, and the future of AI-first wearable computing, designed in India.",
      },
      { property: "og:title", content: "Pitch Deck — VYOM by Advaya.ai" },
      {
        property: "og:description",
        content:
          "Building intelligence that feels human. Explore the VYOM pitch deck.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: (heroImg as { url: string }).url },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: (heroImg as { url: string }).url },
    ],
    links: [{ rel: "canonical", href: "/pitch-deck" }],
  }),
  component: PitchDeck,
});

/* -------------------------- shared UI -------------------------- */

function Kicker({ children }: { children: ReactNode }) {
  return (
    <div className="text-[0.7rem] uppercase tracking-[0.35em] text-muted-foreground/80 font-mono">
      {children}
    </div>
  );
}

function SlideShell({
  index,
  title,
  children,
  bg,
}: {
  index: number;
  title: string;
  children: ReactNode;
  bg?: ReactNode;
}) {
  return (
    <div className="relative w-full min-h-[calc(100vh-4rem)] overflow-hidden">
      <div className="absolute inset-0 aurora-bg opacity-40 pointer-events-none" />
      {bg}
      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 py-16 md:py-24">
        <div className="flex items-center justify-between mb-10">
          <Kicker>
            <span className="text-foreground/60">{String(index).padStart(2, "0")}</span>
            <span className="mx-3 opacity-30">/</span>
            <span>{title}</span>
          </Kicker>
          <Kicker>VYOM · Advaya.ai</Kicker>
        </div>
        {children}
      </div>
    </div>
  );
}

function GlowCard({
  icon,
  title,
  children,
}: {
  icon?: ReactNode;
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="glass rounded-2xl p-6 md:p-7 hover:border-white/20 transition-colors">
      {icon && (
        <div className="w-10 h-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-4 ring-1 ring-white/10">
          {icon}
        </div>
      )}
      <h4 className="font-display text-2xl mb-2 text-foreground">{title}</h4>
      <p className="text-sm text-muted-foreground leading-relaxed">{children}</p>
    </div>
  );
}

function Quote({ children }: { children: ReactNode }) {
  return (
    <blockquote className="font-display text-3xl md:text-5xl leading-[1.15] text-balance text-aurora">
      "{children}"
    </blockquote>
  );
}

/* -------------------------- slides -------------------------- */

function Slide01() {
  return (
    <SlideShell
      index={1}
      title="Cover"
      bg={
        <div className="absolute inset-0">
          <img
            src={(heroImg as { url: string }).url}
            alt="VYOM AI Glasses"
            className="absolute inset-0 w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
        </div>
      }
    >
      <div className="flex flex-col items-center text-center gap-10 pt-10 md:pt-24">
        <div className="font-display text-7xl md:text-[10rem] leading-none tracking-tight text-gradient">
          V
        </div>
        <div>
          <div className="font-display text-6xl md:text-8xl tracking-tight">VYOM</div>
          <div className="mt-3 text-sm tracking-[0.4em] uppercase text-muted-foreground">
            AI Smart Glasses
          </div>
        </div>
        <div className="text-2xl md:text-3xl font-display text-aurora">
          You Expressed. I Do.
        </div>
        <p className="max-w-xl text-muted-foreground text-balance">
          Building the future of human intelligence through AI wearables.
        </p>
        <div className="mt-10 pt-6 border-t border-white/10 w-64">
          <div className="text-sm text-muted-foreground">Presented by</div>
          <div className="font-display text-xl mt-1">Ashutosh Yadav</div>
          <div className="text-xs tracking-widest uppercase text-muted-foreground mt-1">
            Founder · Advaya.ai
          </div>
        </div>
        <div className="text-[0.65rem] tracking-[0.4em] uppercase text-muted-foreground/60">
          Designed & Built in India
        </div>
      </div>
    </SlideShell>
  );
}

function Slide02() {
  const pillars = ["Human-Centered AI", "Accessible Intelligence", "Thoughtful Innovation", "Simplicity", "Trust", "Long-Term Impact"];
  return (
    <SlideShell index={2} title="Vision">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <Kicker>Why VYOM exists</Kicker>
          <h2 className="font-display text-4xl md:text-6xl mt-4 text-balance text-gradient">
            Intelligence should be accessible to everyone.
          </h2>
          <p className="mt-8 text-muted-foreground leading-relaxed">
            At Advaya.ai, we are building VYOM with a simple belief: artificial intelligence should not feel
            like another app or another screen. It should become a natural extension of human life—helping
            people think, learn, create, communicate, and solve problems effortlessly.
          </p>
          <p className="mt-4 text-foreground/90 leading-relaxed">
            <span className="text-aurora">Not to replace human intelligence.</span> To expand it.
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {pillars.map((p) => (
              <span key={p} className="text-xs px-3 py-1.5 rounded-full glass">{p}</span>
            ))}
          </div>
        </div>
        <div className="glass-strong rounded-3xl p-10 md:p-14 text-center">
          <Quote>
            Limitless Intelligence.<br />
            Limitless Vision.<br />
            Limitless Possibilities.
          </Quote>
        </div>
      </div>
    </SlideShell>
  );
}

function Slide03() {
  const problems = [
    { icon: <Eye className="w-5 h-5" />, title: "Constant Attention", body: "Phones compete for our attention instead of supporting it." },
    { icon: <Cpu className="w-5 h-5" />, title: "Fragmented Experience", body: "Information, communication and AI live across many apps and devices." },
    { icon: <Users className="w-5 h-5" />, title: "Limited Accessibility", body: "Many people still face barriers to advanced digital tools." },
    { icon: <Brain className="w-5 h-5" />, title: "AI Isn't Effortless", body: "Powerful AI still asks people to open apps and type prompts." },
  ];
  return (
    <SlideShell index={3} title="The Problem">
      <Kicker>The reality</Kicker>
      <h2 className="font-display text-4xl md:text-6xl mt-4 text-balance">
        Technology has become more powerful. <span className="text-aurora">Not more natural.</span>
      </h2>
      <p className="mt-6 max-w-2xl text-muted-foreground leading-relaxed">
        We spend more time adapting to technology than technology spends adapting to us. Technology has evolved.
        The experience hasn't.
      </p>
      <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {problems.map((p) => (
          <GlowCard key={p.title} icon={p.icon} title={p.title}>{p.body}</GlowCard>
        ))}
      </div>
      <p className="mt-14 font-display text-2xl md:text-3xl text-balance max-w-3xl">
        Technology should disappear into the background. People should stay present.
        <span className="text-aurora"> AI should come to them naturally.</span>
      </p>
    </SlideShell>
  );
}

function Slide04() {
  const eras = ["Mainframes", "Personal Computers", "Smartphones", "Artificial Intelligence", "Wearable Intelligence"];
  return (
    <SlideShell index={4} title="Why Now">
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <Kicker>Inflection point</Kicker>
          <h2 className="font-display text-4xl md:text-6xl mt-4 text-balance">
            A new computing era <span className="text-aurora">is beginning.</span>
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Every major shift in computing has changed how humanity interacts with technology. The next chapter
            is just beginning — and India has the talent, ambition, and infrastructure to lead it.
          </p>
        </div>
        <ol className="relative border-l border-white/10 pl-8 space-y-6">
          {eras.map((e, i) => (
            <li key={e} className="relative">
              <span className={`absolute -left-[37px] top-1.5 w-3 h-3 rounded-full ${i === eras.length - 1 ? "bg-accent shadow-[0_0_20px_var(--color-glow)]" : "bg-white/20"}`} />
              <div className="text-xs tracking-widest uppercase text-muted-foreground">Era {String(i + 1).padStart(2, "0")}</div>
              <div className={`font-display text-2xl ${i === eras.length - 1 ? "text-aurora" : ""}`}>{e}</div>
            </li>
          ))}
        </ol>
      </div>
      <p className="mt-14 font-display text-2xl md:text-3xl text-balance max-w-3xl">
        "The next era of computing will not simply be more powerful. It will be more human."
      </p>
    </SlideShell>
  );
}

function Slide05() {
  const labels = [
    { icon: <Brain className="w-4 h-4" />, t: "AI" },
    { icon: <Eye className="w-4 h-4" />, t: "Vision" },
    { icon: <Mic className="w-4 h-4" />, t: "Voice" },
    { icon: <Sparkles className="w-4 h-4" />, t: "Productivity" },
    { icon: <Heart className="w-4 h-4" />, t: "Accessibility" },
  ];
  return (
    <SlideShell index={5} title="Introducing VYOM">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <Kicker>Meet VYOM</Kicker>
          <h2 className="font-display text-4xl md:text-6xl mt-4 text-balance">
            The future of AI <span className="text-aurora">you'll wear.</span>
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            VYOM is an AI-first wearable platform being developed to make artificial intelligence more natural,
            accessible, and seamlessly integrated into everyday life.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-3">
            {[
              ["Human First", "Designed around people."],
              ["AI First", "Intelligence at its core."],
              ["Minimal by Design", "Elegant. Timeless."],
              ["Everyday Wearable", "Fits naturally into life."],
            ].map(([t, b]) => (
              <div key={t} className="glass rounded-xl p-4">
                <div className="font-display text-lg">{t}</div>
                <div className="text-xs text-muted-foreground mt-1">{b}</div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-aurora font-display text-2xl">You Expressed. I Do.</div>
        </div>
        <div className="relative">
          <div className="relative aspect-square rounded-3xl overflow-hidden glass-strong">
            <img src={(angleImg as { url: string }).url} alt="VYOM" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
          </div>
          <div className="mt-4 flex flex-wrap gap-2 justify-center">
            {labels.map((l) => (
              <span key={l.t} className="text-xs px-3 py-1.5 rounded-full glass inline-flex items-center gap-1.5">
                {l.icon}{l.t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </SlideShell>
  );
}

function Slide06() {
  const day = [
    { t: "Morning", body: "Review schedule and priorities without breaking your routine." },
    { t: "During Work", body: "Stay present in conversations while AI supports you quietly." },
    { t: "While Exploring", body: "Get relevant context naturally, without pulling out a phone." },
    { t: "End of Day", body: "Reflect, organize, and prepare for tomorrow with ease." },
  ];
  return (
    <SlideShell index={6} title="The Experience">
      <Kicker>A day with VYOM</Kicker>
      <h2 className="font-display text-4xl md:text-6xl mt-4 text-balance">
        Technology that works <span className="text-aurora">quietly beside you.</span>
      </h2>
      <div className="mt-14 grid md:grid-cols-4 gap-4">
        {day.map((d, i) => (
          <div key={d.t} className="glass rounded-2xl p-6 relative">
            <div className="text-[0.65rem] tracking-[0.3em] uppercase text-accent">Chapter {i + 1}</div>
            <div className="font-display text-2xl mt-2">{d.t}</div>
            <div className="text-sm text-muted-foreground mt-3">{d.body}</div>
          </div>
        ))}
      </div>
      <div className="mt-14 grid md:grid-cols-4 gap-6">
        {["Natural", "Intelligent", "Focused", "Human"].map((p) => (
          <div key={p} className="border-t border-white/10 pt-4">
            <div className="font-display text-xl">{p}</div>
          </div>
        ))}
      </div>
      <p className="mt-14 font-display text-2xl md:text-3xl text-balance max-w-3xl">
        "The future isn't about using more technology. It's about needing to think about it less."
      </p>
    </SlideShell>
  );
}

function Slide07() {
  const pillars = [
    { icon: <Mic className="w-6 h-6" />, t: "Voice", body: "Speak naturally. No commands. Just conversation." },
    { icon: <Eye className="w-6 h-6" />, t: "Vision", body: "See what you see. Understand the world around you." },
    { icon: <Brain className="w-6 h-6" />, t: "Intelligence", body: "Context, memory and reasoning brought together." },
  ];
  const flow = ["You Speak", "VYOM Understands", "AI Processes Context", "Helpful Response", "You Continue"];
  return (
    <SlideShell index={7} title="How VYOM Works">
      <Kicker>Designed around natural interaction</Kicker>
      <h2 className="font-display text-4xl md:text-6xl mt-4 text-balance">
        Technology should understand people — <span className="text-aurora">not the other way around.</span>
      </h2>
      <div className="mt-12 grid md:grid-cols-3 gap-4">
        {pillars.map((p) => (
          <GlowCard key={p.t} icon={p.icon} title={p.t}>{p.body}</GlowCard>
        ))}
      </div>
      <div className="mt-14 glass-strong rounded-2xl p-6 md:p-8 flex flex-wrap items-center justify-between gap-3">
        {flow.map((f, i) => (
          <div key={f} className="flex items-center gap-3">
            <div className="text-sm md:text-base font-display">{f}</div>
            {i < flow.length - 1 && <ArrowRight className="w-4 h-4 text-accent/60" />}
          </div>
        ))}
      </div>
      <p className="mt-10 font-display text-xl md:text-2xl max-w-2xl">"The best interface is the one that feels invisible."</p>
    </SlideShell>
  );
}

function Slide08() {
  const cards = [
    { icon: <Users className="w-5 h-5" />, t: "Human First", body: "Technology should adapt to people." },
    { icon: <Globe2 className="w-5 h-5" />, t: "AI for Everyone", body: "Accessible beyond experts." },
    { icon: <Compass className="w-5 h-5" />, t: "Built in India", body: "World-class technology, global ambition." },
    { icon: <Rocket className="w-5 h-5" />, t: "Long-Term Vision", body: "Built for the next generation of computing." },
  ];
  return (
    <SlideShell index={8} title="Why VYOM">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="relative rounded-3xl overflow-hidden aspect-[4/5] glass-strong">
          <img src={founderImg} alt="Founder" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
        </div>
        <div>
          <Kicker>Our philosophy</Kicker>
          <h2 className="font-display text-4xl md:text-5xl mt-4 text-balance">
            Designed for people. <span className="text-aurora">Built for the future.</span>
          </h2>
          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            {cards.map((c) => (
              <GlowCard key={c.t} icon={c.icon} title={c.t}>{c.body}</GlowCard>
            ))}
          </div>
          <p className="mt-8 text-sm text-muted-foreground">
            Every decision passes four questions: Does it make life simpler? Does it help people become more capable?
            Does it respect user trust? Will it still matter in ten years?
          </p>
        </div>
      </div>
    </SlideShell>
  );
}

function Slide09() {
  return (
    <SlideShell index={9} title="Market Opportunity">
      <Kicker>A global shift</Kicker>
      <h2 className="font-display text-4xl md:text-6xl mt-4 text-balance">
        The next computing platform <span className="text-aurora">is emerging.</span>
      </h2>
      <div className="mt-12 grid md:grid-cols-2 gap-10 items-center">
        <div className="relative aspect-square max-w-md mx-auto">
          {[
            { l: "AI", pos: "top-0 left-1/2 -translate-x-1/2" },
            { l: "Wearables", pos: "bottom-4 left-4" },
            { l: "Human-Centered", pos: "bottom-4 right-4" },
          ].map((c) => (
            <div key={c.l} className={`absolute w-56 h-56 rounded-full border border-accent/40 flex items-center justify-center bg-accent/5 ${c.pos}`}>
              <span className="font-display text-lg">{c.l}</span>
            </div>
          ))}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="font-display text-4xl text-aurora animate-pulse-glow rounded-full px-6 py-3">VYOM</div>
          </div>
        </div>
        <div className="space-y-5">
          {[
            ["Learn, work, communicate", "AI is becoming part of how people create and decide."],
            ["Beyond phones", "Wearables are moving toward richer everyday experiences."],
            ["India's moment", "Large digital population, strong engineering, growing AI ecosystem."],
          ].map(([t, b]) => (
            <div key={t} className="glass rounded-xl p-5">
              <div className="font-display text-xl">{t}</div>
              <div className="text-sm text-muted-foreground mt-1">{b}</div>
            </div>
          ))}
          <div className="pt-4 text-sm text-aurora font-display text-lg">Designed in India. Built for the World.</div>
        </div>
      </div>
    </SlideShell>
  );
}

function Slide10() {
  const pillars = [
    { icon: <Cpu className="w-5 h-5" />, t: "Hardware", body: "Premium AI smart glasses." },
    { icon: <Brain className="w-5 h-5" />, t: "AI Services", body: "Optional premium AI experiences over time." },
    { icon: <Factory className="w-5 h-5" />, t: "Enterprise", body: "AI-powered workflows for businesses." },
    { icon: <Globe2 className="w-5 h-5" />, t: "Ecosystem", body: "A connected Advaya.ai experience." },
  ];
  const pyramid = ["Ecosystem", "AI Services", "Hardware", "Customer Trust"];
  return (
    <SlideShell index={10} title="Business Model">
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <Kicker>Long-term strategy</Kicker>
          <h2 className="font-display text-4xl md:text-5xl mt-4 text-balance">
            Building a sustainable <span className="text-aurora">AI platform.</span>
          </h2>
          <div className="mt-10 space-y-2">
            {pyramid.map((p, i) => {
              const w = 40 + i * 15;
              return (
                <div
                  key={p}
                  className={`mx-auto glass rounded-lg py-3 text-center font-display ${i === pyramid.length - 1 ? "text-aurora border-accent/40" : ""}`}
                  style={{ width: `${w}%` }}
                >
                  {p}
                </div>
              );
            })}
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          {pillars.map((p) => (
            <GlowCard key={p.t} icon={p.icon} title={p.t}>{p.body}</GlowCard>
          ))}
        </div>
      </div>
      <p className="mt-14 font-display text-2xl md:text-3xl text-balance max-w-3xl">
        "We are building more than a product. We are building a platform designed to evolve with people."
      </p>
    </SlideShell>
  );
}

function Slide11() {
  const layers = [
    { icon: <Eye className="w-5 h-5" />, t: "Perception", body: "Interpret voice and environment with context." },
    { icon: <Brain className="w-5 h-5" />, t: "Intelligence", body: "Process context to generate meaningful help." },
    { icon: <Sparkles className="w-5 h-5" />, t: "Action", body: "Respond naturally, without disruption." },
  ];
  const flow = ["Input", "Understanding", "AI", "Assistance"];
  return (
    <SlideShell index={11} title="The Technology">
      <Kicker>Designed to understand</Kicker>
      <h2 className="font-display text-4xl md:text-6xl mt-4 text-balance">
        Built to <span className="text-aurora">assist.</span>
      </h2>
      <div className="mt-12 grid md:grid-cols-3 gap-4">
        {layers.map((l) => (
          <GlowCard key={l.t} icon={l.icon} title={l.t}>{l.body}</GlowCard>
        ))}
      </div>
      <div className="mt-12 glass-strong rounded-2xl p-6 flex flex-wrap items-center justify-center gap-4">
        {flow.map((f, i) => (
          <div key={f} className="flex items-center gap-3">
            <span className="font-display text-lg">{f}</span>
            {i < flow.length - 1 && <ArrowRight className="w-4 h-4 text-accent/60" />}
          </div>
        ))}
      </div>
      <p className="mt-10 font-display text-xl md:text-2xl max-w-3xl">
        "The future of AI is not about doing more. It's about helping people do what matters — with less effort."
      </p>
    </SlideShell>
  );
}

function Slide12() {
  const cards = [
    { icon: <Users className="w-5 h-5" />, t: "Human First" },
    { icon: <Globe2 className="w-5 h-5" />, t: "AI for Everyone" },
    { icon: <Target className="w-5 h-5" />, t: "Purpose Before Features" },
    { icon: <Shield className="w-5 h-5" />, t: "Trust by Design" },
    { icon: <Compass className="w-5 h-5" />, t: "Built in India" },
  ];
  return (
    <SlideShell index={12} title="Why We Are Different">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <Kicker>Our belief</Kicker>
          <h2 className="font-display text-4xl md:text-5xl mt-4 text-balance">
            A different way of thinking <span className="text-aurora">about technology.</span>
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            The future will not be shaped by technology alone. It will be shaped by the values behind it.
            We build AI to help people become more capable — not to replace them.
          </p>
          <p className="mt-6 font-display text-xl text-aurora">
            "Our greatest innovation will not be what our technology can do. It will be what people become because of it."
          </p>
        </div>
        <div className="space-y-3">
          {cards.map((c) => (
            <div key={c.t} className="glass rounded-xl p-5 flex items-center gap-4 hover:border-accent/40 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-accent/10 text-accent flex items-center justify-center">{c.icon}</div>
              <div className="font-display text-xl">{c.t}</div>
            </div>
          ))}
        </div>
      </div>
    </SlideShell>
  );
}

function Slide13() {
  const journey = [
    { icon: <Users className="w-4 h-4" />, t: "Founder" },
    { icon: <Handshake className="w-4 h-4" />, t: "Community" },
    { icon: <Lightbulb className="w-4 h-4" />, t: "Early Users" },
    { icon: <Rocket className="w-4 h-4" />, t: "Launch" },
    { icon: <Globe2 className="w-4 h-4" />, t: "Ecosystem" },
  ];
  return (
    <SlideShell index={13} title="Go-to-Market">
      <Kicker>Build trust first</Kicker>
      <h2 className="font-display text-4xl md:text-6xl mt-4 text-balance">
        Great missions <span className="text-aurora">build communities.</span>
      </h2>
      <div className="mt-12 grid md:grid-cols-2 gap-10">
        <ol className="space-y-6">
          {journey.map((j, i) => (
            <li key={j.t} className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full glass flex items-center justify-center text-accent">{j.icon}</div>
              <div>
                <div className="text-[0.65rem] tracking-widest uppercase text-muted-foreground">Phase 0{i + 1}</div>
                <div className="font-display text-2xl">{j.t}</div>
              </div>
            </li>
          ))}
        </ol>
        <div className="space-y-4">
          {[
            ["Founder-Led", "People connect with people before products."],
            ["Community-Led", "Listen first. Build second. Improve continuously."],
            ["Product-Led", "A great product is the strongest form of marketing."],
            ["Mission-Led", "The mission outlasts any single product."],
          ].map(([t, b]) => (
            <div key={t} className="glass rounded-xl p-5">
              <div className="font-display text-lg">{t}</div>
              <div className="text-sm text-muted-foreground mt-1">{b}</div>
            </div>
          ))}
        </div>
      </div>
    </SlideShell>
  );
}

function Slide14() {
  const phases = [
    { t: "Research & Discovery", note: "Current focus", body: "User research, market research, product vision." },
    { t: "Design & Prototype", body: "Industrial design, engineering, early prototypes." },
    { t: "Validation", body: "Prototype testing and continuous refinement." },
    { t: "Product Launch", body: "Manufacturing readiness and early customer launch." },
    { t: "Scale & Ecosystem", body: "Future AI products, services and global expansion." },
  ];
  return (
    <SlideShell index={14} title="Roadmap">
      <Kicker>One step at a time</Kicker>
      <h2 className="font-display text-4xl md:text-6xl mt-4 text-balance">
        Building the future, <span className="text-aurora">deliberately.</span>
      </h2>
      <ol className="mt-14 relative border-l border-white/10 pl-8 space-y-8 max-w-3xl">
        {phases.map((p, i) => (
          <li key={p.t} className="relative">
            <span className={`absolute -left-[37px] top-2 w-3 h-3 rounded-full ${i === 0 ? "bg-accent shadow-[0_0_20px_var(--color-glow)]" : "bg-white/20"}`} />
            <div className="text-[0.65rem] tracking-widest uppercase text-muted-foreground">Phase 0{i + 1}{p.note ? ` · ${p.note}` : ""}</div>
            <div className={`font-display text-2xl ${i === 0 ? "text-aurora" : ""}`}>{p.t}</div>
            <div className="text-sm text-muted-foreground mt-1">{p.body}</div>
          </li>
        ))}
      </ol>
    </SlideShell>
  );
}

function Slide15() {
  return (
    <SlideShell index={15} title="The Founder">
      <div className="grid md:grid-cols-5 gap-10 items-center">
        <div className="md:col-span-2 relative rounded-3xl overflow-hidden aspect-[4/5] glass-strong">
          <img src={founderImg} alt="Ashutosh Yadav" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
        </div>
        <div className="md:col-span-3">
          <Kicker>Why this journey began</Kicker>
          <h2 className="font-display text-4xl md:text-5xl mt-4">Ashutosh Yadav</h2>
          <div className="text-sm tracking-widest uppercase text-muted-foreground mt-2">
            Founder · Advaya.ai
          </div>
          <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              I grew up believing technology should improve people's lives — not make them more dependent on screens.
              As smartphones grew powerful, I started asking: what comes after the smartphone?
            </p>
            <p>
              That question became the beginning of VYOM — a future where AI becomes more natural, more accessible,
              and more useful in everyday life.
            </p>
          </div>
          <p className="mt-6 font-display text-xl text-aurora">
            "We don't build AI to replace people. We build AI to help people become more capable."
          </p>
        </div>
      </div>
    </SlideShell>
  );
}

function Slide16() {
  return (
    <SlideShell index={16} title="Advaya.ai">
      <Kicker>The company</Kicker>
      <h2 className="font-display text-4xl md:text-6xl mt-4 text-balance">
        Building the future of <span className="text-aurora">human intelligence.</span>
      </h2>
      <p className="mt-6 max-w-3xl text-muted-foreground leading-relaxed">
        Advaya — from the Sanskrit for "non-duality" — reflects our belief that people and technology
        should work together as one seamless experience.
      </p>
      <div className="mt-12 grid md:grid-cols-3 gap-4">
        <GlowCard icon={<Heart className="w-5 h-5" />} title="Human-Centered AI">
          Technology should adapt to people.
        </GlowCard>
        <GlowCard icon={<Sparkles className="w-5 h-5" />} title="Thoughtful Design">
          Simple, elegant, intentional experiences.
        </GlowCard>
        <GlowCard icon={<Rocket className="w-5 h-5" />} title="Long-Term Innovation">
          Built with decades in mind — not product cycles.
        </GlowCard>
      </div>
      <div className="mt-10 grid md:grid-cols-2 gap-6">
        <div className="glass-strong rounded-2xl p-6">
          <Kicker>Mission</Kicker>
          <p className="mt-3 text-foreground/90">To make AI more accessible, useful, and human through thoughtfully designed technology.</p>
        </div>
        <div className="glass-strong rounded-2xl p-6">
          <Kicker>Vision</Kicker>
          <p className="mt-3 text-foreground/90">To build globally trusted AI products from India that help people unlock more of their potential.</p>
        </div>
      </div>
    </SlideShell>
  );
}

function Slide17() {
  const nodes = ["VYOM", "AI Platform", "Connected Experiences", "Everyday AI"];
  return (
    <SlideShell index={17} title="Future Ecosystem">
      <Kicker>Beyond a single device</Kicker>
      <h2 className="font-display text-4xl md:text-6xl mt-4 text-balance">
        One vision. <span className="text-aurora">Many possibilities.</span>
      </h2>
      <div className="mt-14 relative mx-auto max-w-3xl aspect-square">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-40 h-40 rounded-full glass-strong flex items-center justify-center font-display text-2xl text-aurora animate-pulse-glow">
            Advaya.ai
          </div>
        </div>
        {nodes.map((n, i) => {
          const angle = (i / nodes.length) * Math.PI * 2 - Math.PI / 2;
          const x = 50 + Math.cos(angle) * 40;
          const y = 50 + Math.sin(angle) * 40;
          return (
            <div
              key={n}
              className="absolute glass rounded-full px-4 py-2 text-sm font-display -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${x}%`, top: `${y}%` }}
            >
              {n}
            </div>
          );
        })}
      </div>
      <p className="mt-10 font-display text-xl md:text-2xl text-balance max-w-3xl mx-auto text-center">
        "Great ecosystems aren't built by connecting products. They're built by connecting experiences."
      </p>
    </SlideShell>
  );
}

function Slide18() {
  const asks = [
    { icon: <Handshake className="w-5 h-5" />, t: "Strategic Mentorship", body: "Founders, operators, researchers, industry leaders." },
    { icon: <Factory className="w-5 h-5" />, t: "Manufacturing Guidance", body: "Turning concepts into high-quality hardware." },
    { icon: <Brain className="w-5 h-5" />, t: "Deep-Tech Network", body: "Researchers, universities and innovation labs." },
    { icon: <Globe2 className="w-5 h-5" />, t: "Strategic Partnerships", body: "Aligned on responsible AI and wearables." },
    { icon: <Lightbulb className="w-5 h-5" />, t: "Future Investment", body: "As we reach meaningful product milestones." },
  ];
  return (
    <SlideShell index={18} title="The Ask">
      <Kicker>Building the future together</Kicker>
      <h2 className="font-display text-4xl md:text-6xl mt-4 text-balance">
        Looking for partners who <span className="text-aurora">believe in the future.</span>
      </h2>
      <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {asks.map((a) => (
          <GlowCard key={a.t} icon={a.icon} title={a.t}>{a.body}</GlowCard>
        ))}
      </div>
      <p className="mt-14 font-display text-2xl text-balance max-w-3xl">
        "The right partnership doesn't just accelerate a company. It strengthens the future it is trying to build."
      </p>
    </SlideShell>
  );
}

function Slide19() {
  const items = [
    { icon: <Globe2 className="w-5 h-5" />, t: "More Access" },
    { icon: <Lightbulb className="w-5 h-5" />, t: "More Learning" },
    { icon: <Sparkles className="w-5 h-5" />, t: "More Creativity" },
    { icon: <Handshake className="w-5 h-5" />, t: "More Opportunity" },
    { icon: <Shield className="w-5 h-5" />, t: "More Responsibility" },
  ];
  return (
    <SlideShell
      index={19}
      title="The Future We Want to Build"
      bg={
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-accent/10" />
        </div>
      }
    >
      <div className="flex items-center gap-3 text-amber-300/80"><Sun className="w-5 h-5" /><Kicker>Sunrise</Kicker></div>
      <h2 className="font-display text-4xl md:text-6xl mt-4 text-balance">
        Technology that expands <span className="text-aurora">human potential.</span>
      </h2>
      <div className="mt-12 grid md:grid-cols-5 gap-4">
        {items.map((i) => (
          <div key={i.t} className="glass rounded-xl p-5 text-center">
            <div className="w-10 h-10 mx-auto rounded-full bg-accent/10 text-accent flex items-center justify-center">{i.icon}</div>
            <div className="font-display text-lg mt-3">{i.t}</div>
          </div>
        ))}
      </div>
      <p className="mt-14 font-display text-2xl md:text-3xl text-balance max-w-3xl">
        "I don't dream of building the most talked-about technology. I dream of building technology that quietly helps millions of people live better lives."
      </p>
      <p className="mt-8 font-display text-xl text-aurora">
        The future is not something we wait for. It is something we choose to build — together.
      </p>
    </SlideShell>
  );
}

function Slide20() {
  return (
    <SlideShell
      index={20}
      title="Thank You"
      bg={
        <div className="absolute inset-0">
          <img src={(gridImg as { url: string }).url} alt="" className="absolute inset-0 w-full h-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
        </div>
      }
    >
      <div className="flex flex-col items-center text-center gap-10 pt-10 md:pt-20">
        <img src={logoWordmark} alt="VYOM" className="h-10 opacity-90" />
        <h2 className="font-display text-5xl md:text-7xl text-balance text-gradient">
          The journey begins here.
        </h2>
        <p className="max-w-2xl text-muted-foreground leading-relaxed">
          The future isn't something we wait for. It's something we choose to build. VYOM is our first step
          toward AI that helps people learn faster, create more freely, and unlock more of their potential.
        </p>
        <div className="glass-strong rounded-2xl p-8 max-w-xl">
          <p className="font-display text-xl md:text-2xl text-aurora">
            "We don't measure success by the technology we create. We measure success by the lives it helps improve."
          </p>
          <div className="mt-4 text-sm text-muted-foreground">— Ashutosh Yadav, Founder, Advaya.ai</div>
        </div>
        <div className="pt-6 border-t border-white/10 w-72">
          <div className="font-display text-2xl">Advaya.ai</div>
          <div className="text-xs tracking-[0.35em] uppercase text-muted-foreground mt-1">
            Building Intelligence That Feels Human
          </div>
          <a
            href="mailto:hello@advaya.ai"
            className="mt-4 inline-flex items-center gap-2 text-sm text-accent hover:text-accent/80"
          >
            <Mail className="w-4 h-4" /> hello@advaya.ai
          </a>
        </div>
      </div>
    </SlideShell>
  );
}

const SLIDES: { title: string; render: () => JSX.Element }[] = [
  { title: "Cover", render: Slide01 },
  { title: "Vision", render: Slide02 },
  { title: "The Problem", render: Slide03 },
  { title: "Why Now", render: Slide04 },
  { title: "Introducing VYOM", render: Slide05 },
  { title: "The Experience", render: Slide06 },
  { title: "How VYOM Works", render: Slide07 },
  { title: "Why VYOM", render: Slide08 },
  { title: "Market Opportunity", render: Slide09 },
  { title: "Business Model", render: Slide10 },
  { title: "The Technology", render: Slide11 },
  { title: "Why We Are Different", render: Slide12 },
  { title: "Go-to-Market", render: Slide13 },
  { title: "Roadmap", render: Slide14 },
  { title: "The Founder", render: Slide15 },
  { title: "Advaya.ai", render: Slide16 },
  { title: "Future Ecosystem", render: Slide17 },
  { title: "The Ask", render: Slide18 },
  { title: "The Future We Want", render: Slide19 },
  { title: "Thank You", render: Slide20 },
];

/* -------------------------- container -------------------------- */

function PitchDeck() {
  const search = Route.useSearch();
  const navigate = useNavigate({ from: "/pitch-deck" });
  const current = Math.min(Math.max(search.slide ?? 1, 1), SLIDES.length);
  const gridOpen = !!search.grid;

  const setSlide = (n: number) =>
    navigate({ search: { slide: Math.min(Math.max(n, 1), SLIDES.length), grid: undefined } });

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " " || e.key === "PageDown") {
        e.preventDefault();
        setSlide(current + 1);
      } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
        e.preventDefault();
        setSlide(current - 1);
      } else if (e.key === "g" || e.key === "G") {
        navigate({ search: { slide: current, grid: gridOpen ? undefined : true } });
      } else if (e.key === "Escape" && gridOpen) {
        navigate({ search: { slide: current, grid: undefined } });
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [current, gridOpen, navigate]);

  const Active = useMemo(() => SLIDES[current - 1].render, [current]);
  const progress = (current / SLIDES.length) * 100;

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Top bar */}
      <div className="sticky top-0 z-40 backdrop-blur-xl bg-background/60 border-b border-white/5">
        <div className="mx-auto max-w-7xl px-6 md:px-12 h-16 flex items-center justify-between">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
            <ArrowLeft className="w-4 h-4" />
            Back to site
          </Link>
          <div className="hidden md:flex items-center gap-3 text-xs tracking-widest uppercase text-muted-foreground">
            <span>VYOM · Pitch Deck</span>
            <span className="opacity-30">·</span>
            <span>{String(current).padStart(2, "0")} / {String(SLIDES.length).padStart(2, "0")}</span>
            <span className="opacity-30">·</span>
            <span className="text-foreground/80">{SLIDES[current - 1].title}</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => navigate({ search: { slide: current, grid: gridOpen ? undefined : true } })}
              className="btn-ghost !py-2 !px-3 text-xs"
              aria-label="Toggle overview"
            >
              {gridOpen ? <X className="w-4 h-4" /> : <Grid3x3 className="w-4 h-4" />}
              <span className="hidden sm:inline">{gridOpen ? "Close" : "Overview"}</span>
            </button>
            <button
              onClick={() => setSlide(1)}
              className="btn-primary !py-2 !px-3 text-xs"
              aria-label="Restart"
            >
              <Play className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Restart</span>
            </button>
          </div>
        </div>
        <div className="h-[2px] bg-white/5">
          <div className="h-full bg-accent transition-[width] duration-500" style={{ width: `${progress}%` }} />
        </div>
      </div>

      {/* Slide */}
      <div className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
          >
            <Active />
          </motion.div>
        </AnimatePresence>

        {/* Nav pills */}
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 glass-strong rounded-full flex items-center gap-1 p-1.5">
          <button
            onClick={() => setSlide(current - 1)}
            disabled={current === 1}
            className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-white/10 disabled:opacity-30"
            aria-label="Previous"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <div className="px-4 text-xs font-mono tracking-widest text-muted-foreground">
            {String(current).padStart(2, "0")} / {String(SLIDES.length).padStart(2, "0")}
          </div>
          <button
            onClick={() => setSlide(current + 1)}
            disabled={current === SLIDES.length}
            className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-white/10 disabled:opacity-30"
            aria-label="Next"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Overview grid */}
      <AnimatePresence>
        {gridOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-2xl overflow-y-auto"
          >
            <div className="mx-auto max-w-7xl px-6 md:px-12 py-16">
              <div className="flex items-center justify-between mb-10">
                <div>
                  <Kicker>Overview</Kicker>
                  <h3 className="font-display text-3xl mt-2">All slides</h3>
                </div>
                <button
                  onClick={() => navigate({ search: { slide: current, grid: undefined } })}
                  className="btn-ghost !py-2 !px-3 text-xs"
                >
                  <X className="w-4 h-4" /> Close
                </button>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {SLIDES.map((s, i) => {
                  const n = i + 1;
                  return (
                    <button
                      key={s.title}
                      onClick={() => setSlide(n)}
                      className={`glass rounded-xl p-5 text-left aspect-[4/5] flex flex-col justify-between hover:border-accent/40 transition-colors ${n === current ? "border-accent/60 ring-1 ring-accent/40" : ""}`}
                    >
                      <div className="text-xs font-mono text-muted-foreground">
                        {String(n).padStart(2, "0")}
                      </div>
                      <div>
                        <div className="font-display text-lg leading-tight">{s.title}</div>
                        <div className="text-[0.65rem] tracking-widest uppercase text-muted-foreground mt-2">
                          VYOM · Advaya.ai
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
