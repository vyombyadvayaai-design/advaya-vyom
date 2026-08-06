import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, FileText, Mail } from "lucide-react";
import { SiteNav, SiteFooter, PageHero } from "@/components/site-chrome";

export const Route = createFileRoute("/investors")({
  head: () => ({
    meta: [
      { title: "Investors — Advaya.ai" },
      {
        name: "description",
        content:
          "Advaya.ai is building VYOM, an AI-first wearable platform from India. A quiet, long-term thesis on the next era of human–AI interaction.",
      },
      { property: "og:title", content: "Investors — Advaya.ai" },
      {
        property: "og:description",
        content: "The investment thesis behind Advaya.ai and VYOM.",
      },
      { name: "robots", content: "index,follow" },
    ],
    links: [{ rel: "canonical", href: "https://advaya-vyom.lovable.app/investors" }],
  }),
  component: InvestorsPage,
});

const thesis = [
  {
    n: "01",
    title: "The interface is changing.",
    body: "Screens have plateaued. The next platform will be wearable, ambient, and AI-native. We want to help define it — not chase it.",
  },
  {
    n: "02",
    title: "India can build hardware+AI companies.",
    body: "A generation of talent, design, and software engineering makes it possible to build globally competitive AI products from here.",
  },
  {
    n: "03",
    title: "Category, not feature.",
    body: "VYOM is not a smart accessory — it is a new category of intelligent wearable. We are building the platform behind it, not just a device.",
  },
  {
    n: "04",
    title: "Patient, principled capital.",
    body: "This is a long journey. We are looking for partners who value taste, care about users, and can help us build across cycles.",
  },
];

const faqs = [
  { q: "What stage is Advaya.ai at?", a: "Early. Company incorporated, product research and prototyping underway. Not yet raising a priced round." },
  { q: "Is VYOM shipping?", a: "No. VYOM is in development. Everything you see on this site describing capabilities is either 'planned' or 'long-term vision'." },
  { q: "Is there a pitch deck?", a: "Yes. A live deck lives at /pitch-deck. A downloadable investor version is available on request." },
  { q: "Who is the founder?", a: "Ashutosh Yadav — founder of Advaya.ai and VYOM. Based in Lucknow, India." },
];

function InvestorsPage() {
  return (
    <main className="relative">
      <SiteNav />
      <PageHero
        eyebrow="Investors · Early stage"
        title="Backing the next interface between humans and AI."
        lede="A quiet, long-horizon thesis on wearable AI — and why we believe it can be built from India, thoughtfully and at world-class quality."
      >
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link to="/pitch-deck" className="btn-primary">View the pitch deck <ArrowRight className="h-4 w-4" /></Link>
          <a href="mailto:vyombyadvayaai@gmail.com?subject=VYOM%20Investor%20Deck" className="btn-ghost">
            <Mail className="h-4 w-4" /> Request investor deck
          </a>
        </div>
      </PageHero>

      {/* Thesis */}
      <section className="relative section-pad">
        <div className="mx-auto max-w-5xl px-6">
          <span className="text-[11px] uppercase tracking-[0.28em] text-muted-foreground">Thesis</span>
          <h2 className="mt-3 font-display text-4xl leading-tight text-gradient md:text-5xl">
            Four things we believe.
          </h2>
          <div className="mt-14 space-y-14">
            {thesis.map((t, i) => (
              <motion.article
                key={t.n}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="grid gap-6 border-t border-white/8 pt-12 md:grid-cols-[120px_1fr]"
              >
                <span className="font-mono text-sm text-accent">{t.n}</span>
                <div>
                  <h3 className="font-display text-3xl text-foreground md:text-4xl">{t.title}</h3>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">{t.body}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Founder letter */}
      <section className="relative section-pad">
        <div className="mx-auto max-w-3xl px-6">
          <div className="rounded-3xl glass-strong p-10 md:p-14">
            <span className="text-[11px] uppercase tracking-[0.28em] text-muted-foreground">Founder note</span>
            <h2 className="mt-3 font-display text-3xl text-gradient md:text-4xl">A short letter.</h2>
            <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground">
              <p>
                We are early. We are also serious. Advaya.ai is a company being
                built for the long term — around a category we believe will
                define the next decade of computing.
              </p>
              <p>
                We're not looking to ship the fastest device. We're trying to
                design the calmest one. If that philosophy resonates with how you
                deploy capital, we'd love to talk.
              </p>
              <p>— Ashutosh Yadav, Founder</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative section-pad">
        <div className="mx-auto max-w-3xl px-6">
          <span className="text-[11px] uppercase tracking-[0.28em] text-muted-foreground">Investor FAQ</span>
          <h2 className="mt-3 font-display text-4xl text-gradient md:text-5xl">The essentials.</h2>
          <div className="mt-10 divide-y divide-white/8">
            {faqs.map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="cursor-pointer list-none text-base font-medium text-foreground transition group-open:text-accent">
                  {f.q}
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-32">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="font-display text-4xl text-gradient md:text-5xl">Let's talk.</h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Reach out directly. We reply to every serious note.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a href="mailto:vyombyadvayaai@gmail.com?subject=VYOM%20Investor%20Introduction" className="btn-primary">
              <Mail className="h-4 w-4" /> vyombyadvayaai@gmail.com
            </a>
            <Link to="/press-kit" className="btn-ghost"><FileText className="h-4 w-4" /> Press kit</Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
