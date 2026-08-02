import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Sparkles,
  Eye,
  Mic,
  Brain,
  Feather,
  Shield,
  Accessibility,
  Leaf,
  ArrowRight,
} from "lucide-react";
import { SiteNav, SiteFooter, PageHero, StageChip } from "@/components/site-chrome";
import { vyomHero as heroImg, vyomAngle as angleImg, vyomGrid as gridImg } from "@/lib/assets";

export const Route = createFileRoute("/product")({
  head: () => ({
    meta: [
      { title: "VYOM — The Product | Advaya.ai" },
      {
        name: "description",
        content:
          "VYOM is an AI-first wearable platform in development. A calm, human-centered product designed to help you learn, create, and communicate more naturally.",
      },
      { property: "og:title", content: "VYOM — The Product" },
      {
        property: "og:description",
        content: "AI-first smart glasses in development, designed around you.",
      },
      { property: "og:image", content: (heroImg as { url: string }).url },
      { name: "twitter:image", content: (heroImg as { url: string }).url },
    ],
    links: [{ rel: "canonical", href: "/product" }],
  }),
  component: ProductPage,
});

const useCases = [
  { title: "Learning", body: "Ask, explain, translate, and understand — hands-free, wherever you are." },
  { title: "Productivity", body: "Capture ideas, summarize meetings, and stay on top of what matters." },
  { title: "Communication", body: "Real-time context that helps you speak, listen, and connect." },
  { title: "Travel", body: "See a new place with an intelligent companion that knows what you're looking at." },
];

const philosophy = [
  { icon: Feather, title: "Comfort", body: "Lightweight materials designed for all-day wear." },
  { icon: Sparkles, title: "Simplicity", body: "One clear interaction — voice, glance, gesture." },
  { icon: Shield, title: "Craftsmanship", body: "Premium materials, precision engineering, quiet confidence." },
];

const capabilities = [
  { icon: Mic, label: "Voice intelligence", note: "planned" as const },
  { icon: Eye, label: "Vision understanding", note: "planned" as const },
  { icon: Brain, label: "Contextual reasoning", note: "planned" as const },
  { icon: Accessibility, label: "Accessibility-first modes", note: "planned" as const },
  { icon: Shield, label: "On-device privacy", note: "planned" as const },
  { icon: Leaf, label: "Sustainable materials", note: "vision" as const },
];

function ProductPage() {
  return (
    <main className="relative">
      <SiteNav />

      <PageHero
        eyebrow="Product · In development"
        title="A quieter kind of computer. Worn, not held."
        lede="VYOM is being designed as an AI-first wearable platform. Instead of demanding your attention, it fades into your day and shows up only when it can help."
      >
        <div className="flex items-center justify-center gap-3">
          <Link to="/waitlist" className="btn-primary">
            Join the Waitlist <ArrowRight className="h-4 w-4" />
          </Link>
          <Link to="/technology" className="btn-ghost">Explore the technology</Link>
        </div>
      </PageHero>

      {/* Hero product image */}
      <section className="relative -mt-8 pb-24">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9 }}
            className="relative overflow-hidden rounded-3xl glass"
          >
            <img src={(angleImg as { url: string }).url} alt="VYOM smart glasses" className="w-full object-cover" />
          </motion.div>
        </div>
      </section>

      {/* Philosophy */}
      <Section eyebrow="Design philosophy" title="Human-centered by default.">
        <div className="grid gap-6 md:grid-cols-3">
          {philosophy.map((p) => (
            <div key={p.title} className="glass rounded-3xl p-8">
              <p.icon className="h-6 w-6 text-accent" />
              <h3 className="mt-4 font-display text-2xl text-foreground">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Everyday use cases */}
      <Section eyebrow="Everyday experiences" title="Small moments, meaningfully improved.">
        <div className="grid gap-6 md:grid-cols-2">
          {useCases.map((u, i) => (
            <motion.div
              key={u.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="glass rounded-3xl p-8"
            >
              <span className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
                0{i + 1}
              </span>
              <h3 className="mt-3 font-display text-3xl text-gradient">{u.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{u.body}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Planned capabilities */}
      <Section
        eyebrow="Planned capabilities"
        title="What we're building toward."
        note="Everything below is under active development. Nothing has shipped yet."
      >
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((c) => (
            <div key={c.label} className="flex items-start justify-between gap-4 rounded-2xl border border-white/8 p-5">
              <div className="flex items-start gap-3">
                <c.icon className="mt-0.5 h-5 w-5 text-accent" />
                <span className="text-sm text-foreground">{c.label}</span>
              </div>
              <StageChip stage={c.note} />
            </div>
          ))}
        </div>
      </Section>

      {/* Design gallery */}
      <Section eyebrow="Concept renders" title="A first look at the direction.">
        <div className="grid gap-6 md:grid-cols-2">
          <img src={(heroImg as { url: string }).url} alt="VYOM front render" className="rounded-3xl glass w-full object-cover" />
          <img src={(gridImg as { url: string }).url} alt="VYOM side render" className="rounded-3xl glass w-full object-cover" />
        </div>
        <p className="mt-4 text-center text-xs text-muted-foreground">
          Renders shown are early design concepts and do not represent the final product.
        </p>
      </Section>

      {/* Trust rows */}
      <Section eyebrow="Principles" title="Trust is the feature.">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { title: "Privacy by design", body: "You should own what you see, say, and share." },
            { title: "Accessibility first", body: "Designed for a wider range of eyes, ears, and abilities." },
            { title: "Sustainable intent", body: "Long-lifecycle materials, repairability, and responsible sourcing as long-term goals." },
          ].map((p) => (
            <div key={p.title} className="glass rounded-3xl p-8">
              <h3 className="font-display text-2xl">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <section className="relative py-32">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="font-display text-4xl text-gradient md:text-5xl">Be part of the beginning.</h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Waitlist members receive prototype reveals and are invited first when early access opens.
          </p>
          <div className="mt-8">
            <Link to="/waitlist" className="btn-primary">Join the Waitlist <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

function Section({
  eyebrow,
  title,
  note,
  children,
}: {
  eyebrow: string;
  title: string;
  note?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="relative section-pad">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14 max-w-2xl">
          <span className="text-[11px] uppercase tracking-[0.28em] text-muted-foreground">{eyebrow}</span>
          <h2 className="mt-3 font-display text-4xl leading-tight text-gradient md:text-5xl">{title}</h2>
          {note ? <p className="mt-3 text-sm text-muted-foreground">{note}</p> : null}
        </div>
        {children}
      </div>
    </section>
  );
}
