import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SiteNav, SiteFooter, PageHero, StageChip } from "@/components/site-chrome";

export const Route = createFileRoute("/ecosystem")({
  head: () => ({
    meta: [
      { title: "Ecosystem — Advaya.ai" },
      {
        name: "description",
        content:
          "VYOM is the first product in a larger AI ecosystem. See how Advaya.ai is thinking about the platform, the device, and what could come next.",
      },
      { property: "og:title", content: "Ecosystem — Advaya.ai" },
      {
        property: "og:description",
        content: "One company. One platform. Many possible experiences.",
      },
    ],
    links: [{ rel: "canonical", href: "/ecosystem" }],
  }),
  component: EcosystemPage,
});

const layers = [
  {
    tag: "Company",
    title: "Advaya.ai",
    body: "The company building intelligence that feels human — patient, principled, and long-term.",
    stage: "current" as const,
  },
  {
    tag: "Platform",
    title: "The AI platform",
    body: "A shared foundation of voice, vision, context, and reasoning that products in our ecosystem can build on.",
    stage: "planned" as const,
  },
  {
    tag: "Device",
    title: "VYOM",
    body: "Our flagship wearable — the first product where the platform meets the real world.",
    stage: "planned" as const,
  },
  {
    tag: "What's next",
    title: "Future AI experiences",
    body: "New form factors, new inputs, new companions — built on top of the same platform, opened up to developers over time.",
    stage: "vision" as const,
  },
];

function EcosystemPage() {
  return (
    <main className="relative">
      <SiteNav />
      <PageHero
        eyebrow="Ecosystem"
        title="One platform. Many possible companions."
        lede="VYOM is the first step in a broader ecosystem we are building at Advaya.ai. Different products, sharing a common intelligence — designed with the same principles."
      />

      <section className="relative section-pad">
        <div className="mx-auto max-w-4xl px-6">
          <ol className="relative border-l border-white/10 pl-8">
            {layers.map((l, i) => (
              <motion.li
                key={l.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative mb-14 last:mb-0"
              >
                <span className="absolute -left-[41px] top-1 grid h-6 w-6 place-items-center rounded-full border border-white/15 bg-background">
                  <span className="h-2 w-2 rounded-full bg-accent" />
                </span>
                <div className="flex items-center gap-3">
                  <span className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
                    {l.tag}
                  </span>
                  <StageChip stage={l.stage} />
                </div>
                <h3 className="mt-3 font-display text-4xl text-gradient">{l.title}</h3>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
                  {l.body}
                </p>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>

      <section className="relative py-32">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="font-display text-4xl text-gradient md:text-5xl">
            Interested in building with us?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Developer, partner, or investor — we'd love to hear from you as this
            ecosystem takes shape.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <Link to="/investors" className="btn-primary">Investors <ArrowRight className="h-4 w-4" /></Link>
            <Link to="/waitlist" className="btn-ghost">Join the Waitlist</Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
