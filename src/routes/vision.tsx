import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SiteNav, SiteFooter, PageHero } from "@/components/site-chrome";

export const Route = createFileRoute("/vision")({
  head: () => ({
    meta: [
      { title: "Our Vision — Advaya.ai" },
      {
        name: "description",
        content:
          "The next era of computing won't be something we hold — it will be something we naturally wear. Read the long-term vision behind Advaya.ai and VYOM.",
      },
      { property: "og:title", content: "Our Vision — Advaya.ai" },
      {
        property: "og:description",
        content: "Technology should adapt to people, not people to technology.",
      },
    ],
    links: [{ rel: "canonical", href: "https://advaya-vyom.lovable.app/vision" }],
  }),
  component: VisionPage,
});

const beliefs = [
  {
    n: "01",
    title: "Attention is precious.",
    body: "Screens have won the market by demanding more of us. The next platform must win by asking for less.",
  },
  {
    n: "02",
    title: "Intelligence should be ambient.",
    body: "AI is most useful when it disappears into the moment — showing up only when it can help, and staying silent when it can't.",
  },
  {
    n: "03",
    title: "Wearables are the interface.",
    body: "Glasses see what you see and hear what you hear. That shared context is what lets an assistant become genuinely useful.",
  },
  {
    n: "04",
    title: "Made in India, made for the world.",
    body: "We believe a globally competitive AI hardware company can be built from India — thoughtfully, patiently, and openly.",
  },
];

function VisionPage() {
  return (
    <main className="relative">
      <SiteNav />
      <PageHero
        eyebrow="Vision"
        title="A quieter, more human relationship with intelligence."
        lede="Advaya.ai exists to build a calmer kind of computing — one where AI adapts to people, not the other way around. VYOM is the first product on that path."
      />

      <section className="relative pb-16">
        <div className="mx-auto max-w-4xl px-6">
          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-3xl glass-strong p-10 text-center md:p-14"
          >
            <p className="font-display text-3xl leading-snug text-gradient md:text-4xl">
              "The future of computing won't stay in our hands — it will become part
              of how we see, think, and interact with the world."
            </p>
            <footer className="mt-6 text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
              Ashutosh Yadav · Founder
            </footer>
          </motion.blockquote>
        </div>
      </section>

      <section className="relative section-pad">
        <div className="mx-auto max-w-5xl px-6">
          <div className="space-y-14">
            {beliefs.map((b, i) => (
              <motion.article
                key={b.n}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className="grid gap-6 border-t border-white/8 pt-14 md:grid-cols-[120px_1fr]"
              >
                <span className="font-mono text-sm text-accent">{b.n}</span>
                <div>
                  <h2 className="font-display text-4xl leading-tight text-foreground md:text-5xl">
                    {b.title}
                  </h2>
                  <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                    {b.body}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-32">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="font-display text-4xl text-gradient md:text-5xl">
            Vision is not a promise — it's a direction.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            We are early. We are honest about it. If this direction resonates,
            we'd love to have you on the journey.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <Link to="/waitlist" className="btn-primary">Join the Waitlist <ArrowRight className="h-4 w-4" /></Link>
            <Link to="/company" className="btn-ghost">About the company</Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
