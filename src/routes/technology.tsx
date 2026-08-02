import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Mic, Eye, Compass, Brain, User, Shield, ScrollText, Layers, ArrowRight } from "lucide-react";
import { SiteNav, SiteFooter, PageHero, StageChip } from "@/components/site-chrome";

export const Route = createFileRoute("/technology")({
  head: () => ({
    meta: [
      { title: "Technology — VYOM by Advaya.ai" },
      {
        name: "description",
        content:
          "Voice, vision, context, and reasoning — the AI stack we are designing for VYOM, explained in plain language.",
      },
      { property: "og:title", content: "Technology — VYOM by Advaya.ai" },
      {
        property: "og:description",
        content: "An AI stack designed to feel calm, useful, and private.",
      },
    ],
    links: [{ rel: "canonical", href: "https://advaya-vyom.lovable.app/technology" }],
  }),
  component: TechnologyPage,
});

const pillars = [
  { icon: Mic, title: "Voice intelligence", body: "Understanding what you say, and — more importantly — what you mean." },
  { icon: Eye, title: "Vision understanding", body: "Recognising the world around you the way a helpful companion would." },
  { icon: Compass, title: "Context awareness", body: "Knowing where you are, what you're doing, and when to stay quiet." },
  { icon: Brain, title: "Reasoning", body: "Turning voice, vision, and context into a single, useful response." },
  { icon: User, title: "Personalization", body: "An assistant that learns your preferences — with your permission, and under your control." },
  { icon: Shield, title: "Privacy by design", body: "Sensitive processing kept on-device where possible; you decide what leaves the frame." },
  { icon: ScrollText, title: "Responsible AI", body: "Clear boundaries on what the system will and won't do, and honest labels when we're uncertain." },
  { icon: Layers, title: "Platform vision", body: "An open developer platform for building thoughtful wearable AI experiences." },
];

const flow = [
  { step: "Voice", body: "You speak naturally." },
  { step: "Vision", body: "The device sees what you're seeing." },
  { step: "Context", body: "It understands where and when." },
  { step: "Reasoning", body: "It thinks through the request." },
  { step: "Response", body: "You get a calm, helpful answer." },
];

function TechnologyPage() {
  return (
    <main className="relative">
      <SiteNav />
      <PageHero
        eyebrow="Technology · Under development"
        title="AI, explained the way it should feel."
        lede="We're designing the VYOM stack to behave like a thoughtful companion — attentive, private, and quiet by default. Nothing on this page has shipped yet."
      />

      {/* Signal flow */}
      <section className="relative pb-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="rounded-3xl glass p-8 md:p-12">
            <div className="grid gap-6 md:grid-cols-5">
              {flow.map((s, i) => (
                <motion.div
                  key={s.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative rounded-2xl border border-white/8 p-5"
                >
                  <span className="text-[10px] uppercase tracking-[0.28em] text-accent">0{i + 1}</span>
                  <h3 className="mt-2 font-display text-2xl">{s.step}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{s.body}</p>
                </motion.div>
              ))}
            </div>
            <p className="mt-6 text-center text-xs text-muted-foreground">
              A simplified view of the pipeline we are building.
            </p>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="relative section-pad">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-14 max-w-2xl">
            <span className="text-[11px] uppercase tracking-[0.28em] text-muted-foreground">Pillars</span>
            <h2 className="mt-3 font-display text-4xl leading-tight text-gradient md:text-5xl">
              What we're researching.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {pillars.map((p) => (
              <div key={p.title} className="glass rounded-3xl p-6">
                <div className="flex items-center justify-between">
                  <p.icon className="h-5 w-5 text-accent" />
                  <StageChip stage="planned" />
                </div>
                <h3 className="mt-4 font-display text-xl text-foreground">{p.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy */}
      <section className="relative section-pad">
        <div className="mx-auto max-w-4xl px-6">
          <div className="rounded-3xl glass-strong p-10 md:p-14">
            <span className="text-[11px] uppercase tracking-[0.28em] text-muted-foreground">Privacy</span>
            <h2 className="mt-3 font-display text-4xl text-gradient md:text-5xl">
              You should own the moment.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Wearables can see and hear more than any device we've built before. We
              take that seriously. Our design goals include on-device processing for
              sensitive signals, clear indicators when the device is active, and
              simple controls that a human can actually understand.
            </p>
          </div>
        </div>
      </section>

      <section className="relative py-32">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="font-display text-4xl text-gradient md:text-5xl">See where it's going next.</h2>
          <div className="mt-8 flex items-center justify-center gap-3">
            <Link to="/ecosystem" className="btn-primary">Explore the ecosystem <ArrowRight className="h-4 w-4" /></Link>
            <Link to="/waitlist" className="btn-ghost">Join the Waitlist</Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
