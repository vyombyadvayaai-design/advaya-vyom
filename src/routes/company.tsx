import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { MapPin, Mail, ArrowRight } from "lucide-react";
import { SiteNav, SiteFooter, PageHero } from "@/components/site-chrome";
import { founderImage as founderAsset } from "@/lib/assets";

export const Route = createFileRoute("/company")({
  head: () => ({
    meta: [
      { title: "Company — Advaya.ai" },
      {
        name: "description",
        content:
          "Advaya.ai is an AI-first technology company based in Lucknow, India, building intelligent wearable experiences. Meet the team and mission behind VYOM.",
      },
      { property: "og:title", content: "Company — Advaya.ai" },
      {
        property: "og:description",
        content: "The team, mission, and philosophy behind Advaya.ai and VYOM.",
      },
    ],
    links: [{ rel: "canonical", href: "https://advaya-vyom.lovable.app/company" }],
  }),
  component: CompanyPage,
});

const values = [
  { title: "Clarity", body: "Say what we're building. Say what we're not." },
  { title: "Craft", body: "Sweat details. Ship things worth wearing." },
  { title: "Calm", body: "Design for attention. Reduce, don't add." },
  { title: "Curiosity", body: "Follow the questions further than the answers." },
];

const timeline = [
  { year: "2024", title: "Idea", body: "The vision for a calmer, wearable AI takes shape." },
  { year: "2025", title: "Advaya.ai founded", body: "Company incorporated to build long-term AI products from India." },
  { year: "2026", title: "VYOM research", body: "Design language, AI stack, and prototype planning underway." },
  { year: "Ahead", title: "Prototypes → beta", body: "Early prototypes shared with waitlist members and partners." },
];

function CompanyPage() {
  return (
    <main className="relative">
      <SiteNav />
      <PageHero
        eyebrow="Company"
        title="Building intelligence that feels human."
        lede="Advaya.ai is an early-stage AI-first company based in Lucknow, India. We are patient, principled, and here for the long term."
      />

      {/* Mission grid */}
      <section className="relative section-pad">
        <div className="mx-auto max-w-6xl px-6 grid gap-6 md:grid-cols-3">
          {[
            { label: "Mission", body: "Make artificial intelligence feel natural, useful, and safely close to daily life." },
            { label: "Vision", body: "A world where AI becomes an invisible companion that helps people think, learn, and create." },
            { label: "Philosophy", body: "Technology should adapt to people — not the other way around." },
          ].map((b) => (
            <div key={b.label} className="glass rounded-3xl p-8">
              <span className="text-[11px] uppercase tracking-[0.28em] text-muted-foreground">{b.label}</span>
              <p className="mt-4 font-display text-2xl leading-snug text-foreground">{b.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="relative section-pad">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-14 max-w-2xl">
            <span className="text-[11px] uppercase tracking-[0.28em] text-muted-foreground">Values</span>
            <h2 className="mt-3 font-display text-4xl leading-tight text-gradient md:text-5xl">
              What we hold to.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title} className="rounded-3xl border border-white/8 p-6">
                <h3 className="font-display text-2xl">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="relative section-pad">
        <div className="mx-auto max-w-4xl px-6">
          <div className="mb-14">
            <span className="text-[11px] uppercase tracking-[0.28em] text-muted-foreground">Journey</span>
            <h2 className="mt-3 font-display text-4xl leading-tight text-gradient md:text-5xl">Where we are.</h2>
          </div>
          <ol className="relative border-l border-white/10 pl-8">
            {timeline.map((t, i) => (
              <motion.li
                key={t.year}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative mb-12 last:mb-0"
              >
                <span className="absolute -left-[41px] top-1 grid h-6 w-6 place-items-center rounded-full border border-white/15 bg-background">
                  <span className="h-2 w-2 rounded-full bg-accent" />
                </span>
                <span className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground">{t.year}</span>
                <h3 className="mt-2 font-display text-2xl">{t.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{t.body}</p>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>

      {/* Founder */}
      <section className="relative section-pad">
        <div className="mx-auto max-w-6xl px-6 grid gap-10 md:grid-cols-[1fr_1.2fr] md:items-center">
          <img decoding="async" loading="lazy" src={founderAsset} alt="Ashutosh Yadav — Founder of Advaya.ai" className="rounded-3xl glass w-full object-cover" />
          <div>
            <span className="text-[11px] uppercase tracking-[0.28em] text-muted-foreground">Founder</span>
            <h2 className="mt-3 font-display text-5xl text-gradient">Ashutosh Yadav</h2>
            <p className="mt-4 text-sm text-muted-foreground">Founder, Advaya.ai & VYOM</p>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              Ashutosh founded Advaya.ai with a vision of making AI more natural,
              accessible, and useful in everyday life. Under Advaya.ai, he is
              building VYOM — an AI smart glasses platform designed to help
              people learn, create, and communicate.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              His long-term mission is to build globally recognized AI products
              from India that improve productivity, learning, and problem-solving
              for millions of people around the world.
            </p>
          </div>
        </div>
      </section>

      {/* Careers + Contact */}
      <section className="relative section-pad">
        <div className="mx-auto max-w-6xl px-6 grid gap-6 md:grid-cols-2">
          <div className="glass rounded-3xl p-8">
            <span className="text-[11px] uppercase tracking-[0.28em] text-muted-foreground">Careers</span>
            <h3 className="mt-3 font-display text-3xl">Roles coming soon.</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              We're a small team today. If our mission resonates with you, join
              the waitlist as "Interested in joining the team" — we'll reach out
              when we open positions.
            </p>
            <Link to="/waitlist" className="btn-ghost mt-6 text-sm">Register interest <ArrowRight className="h-4 w-4" /></Link>
          </div>
          <div className="glass rounded-3xl p-8">
            <span className="text-[11px] uppercase tracking-[0.28em] text-muted-foreground">Contact</span>
            <h3 className="mt-3 font-display text-3xl">Say hello.</h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-3"><MapPin className="h-4 w-4 text-accent" /> Lucknow, Uttar Pradesh · India</li>
              <li className="flex items-center gap-3"><Mail className="h-4 w-4 text-accent" /> vyombyadvayaai@gmail.com</li>
            </ul>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
