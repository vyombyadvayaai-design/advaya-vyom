import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Mail, Instagram, Linkedin, Download, Quote } from "lucide-react";
import founderAsset from "@/assets/founder.png.asset.json";
import logoWordmarkAsset from "@/assets/vyom-logo-wordmark.png.asset.json";
import heroImg from "@/assets/vyom-hero.png.asset.json";

const founderImg = founderAsset.url;
const logoWordmark = logoWordmarkAsset.url;

export const Route = createFileRoute("/press-kit")({
  head: () => ({
    meta: [
      { title: "Press Kit — Advaya.ai & VYOM" },
      {
        name: "description",
        content:
          "Official press kit for Advaya.ai and VYOM: company overview, founder bio, fact sheet, brand assets, and media contact.",
      },
      { property: "og:title", content: "Press Kit — Advaya.ai & VYOM" },
      {
        property: "og:description",
        content:
          "Company overview, founder bio, fact sheet, and media contact for Advaya.ai and VYOM.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: (heroImg as { url: string }).url },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: (heroImg as { url: string }).url },
    ],
    links: [{ rel: "canonical", href: "/press-kit" }],
  }),
  component: PressKit,
});

function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="border-t border-white/10 py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-6">
        {eyebrow && (
          <div className="mb-3 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            {eyebrow}
          </div>
        )}
        <h2 className="font-serif text-3xl leading-tight text-foreground md:text-5xl">
          {title}
        </h2>
        <div className="mt-8 space-y-6 text-[15px] leading-relaxed text-muted-foreground md:text-base">
          {children}
        </div>
      </div>
    </section>
  );
}

function FactRow({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="grid grid-cols-3 gap-4 border-b border-white/10 py-3">
      <dt className="col-span-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">
        {label}
      </dt>
      <dd className="col-span-2 text-sm text-foreground md:text-base">{value}</dd>
    </div>
  );
}

function PressKit() {
  const handlePrint = () => {
    if (typeof window !== "undefined") window.print();
  };

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Top bar */}
      <div className="border-b border-white/10">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-muted-foreground transition hover:text-foreground"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Back
          </Link>
          <img src={logoWordmark} alt="VYOM" className="h-4 w-auto object-contain" />
          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-1.5 text-xs uppercase tracking-[0.2em] text-muted-foreground transition hover:border-white/40 hover:text-foreground"
          >
            <Download className="h-3.5 w-3.5" /> Save PDF
          </button>
        </div>
      </div>

      {/* Hero */}
      <header className="mx-auto max-w-5xl px-6 pb-4 pt-16 md:pt-24">
        <div className="text-[10px] uppercase tracking-[0.35em] text-muted-foreground">
          Press Kit · v1.0
        </div>
        <h1 className="mt-4 font-serif text-5xl leading-[1.05] text-foreground md:text-7xl">
          Advaya.ai
          <span className="block text-muted-foreground">
            Building Intelligence That Feels Human.
          </span>
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
          Official press kit for Advaya.ai and our flagship product,{" "}
          <span className="text-foreground">VYOM</span> — an AI-first wearable platform
          currently in development. Designed in India. Built for the world.
        </p>
      </header>

      {/* Company Overview */}
      <Section id="overview" eyebrow="01 — Company" title="Company Overview">
        <p>
          At Advaya.ai, we believe the next era of computing won't be something people
          hold in their hands — it will be something they naturally wear and interact
          with.
        </p>
        <p>
          We are building an AI-first technology company focused on creating intelligent
          wearable experiences that seamlessly integrate into everyday life. Our mission
          is to make artificial intelligence more intuitive, accessible, and genuinely
          useful through thoughtful design and advanced engineering.
        </p>
        <p>
          Our flagship product,{" "}
          <span className="text-foreground">VYOM</span>, is an AI smart glasses platform
          currently in development. Rather than treating AI as another app on a screen,
          our long-term vision is to enable natural interactions through voice, vision,
          and contextual intelligence — helping people stay informed, productive, and
          connected without constantly reaching for a smartphone.
        </p>
        <blockquote className="border-l-2 border-white/30 pl-6 font-serif text-xl italic text-foreground md:text-2xl">
          Technology should adapt to people — not force people to adapt to technology.
        </blockquote>
        <p>
          We are committed to building products with a focus on human-centered design,
          privacy-conscious innovation, and long-term trust. Every step of our journey is
          driven by the ambition to create globally competitive AI technology designed in
          India and built for the world.
        </p>
        <p className="text-foreground">
          This is only the beginning. We are not just creating a product — we are
          building the foundation for the future of wearable intelligence.
        </p>
      </Section>

      {/* Mission / Vision / Principles */}
      <Section id="mission" eyebrow="02 — Purpose" title="Mission, Vision & Principles">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              Our Mission
            </div>
            <p className="mt-3 text-foreground">
              To build world-class AI products that make technology feel effortless,
              natural, and meaningful for everyone.
            </p>
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              Our Vision
            </div>
            <p className="mt-3 text-foreground">
              To become a globally trusted AI company that pioneers the future of
              wearable intelligence, empowering millions through beautifully designed,
              human-centered technology.
            </p>
          </div>
        </div>

        <div className="mt-10">
          <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            Guiding Principles
          </div>
          <ul className="mt-4 grid gap-3 md:grid-cols-2">
            {[
              ["Human First", "Technology should simplify life, not complicate it."],
              ["Purposeful Innovation", "Solve real problems with thoughtful engineering."],
              ["Design with Intent", "Every detail should serve a purpose."],
              ["Build for Trust", "Privacy, transparency, and reliability come first."],
              [
                "Think Globally, Build from India",
                "Create world-class technology rooted in Indian innovation.",
              ],
            ].map(([t, d]) => (
              <li key={t} className="rounded-xl border border-white/10 p-5">
                <div className="text-sm font-medium text-foreground">{t}</div>
                <div className="mt-1 text-sm text-muted-foreground">{d}</div>
              </li>
            ))}
          </ul>
        </div>

        <blockquote className="mt-10 border-l-2 border-white/30 pl-6 font-serif text-lg italic text-foreground md:text-xl">
          We don't build technology to impress people. We build technology that empowers
          people.
        </blockquote>
      </Section>

      {/* Founder */}
      <Section id="founder" eyebrow="03 — Founder" title="Ashutosh Yadav">
        <div className="grid gap-10 md:grid-cols-[240px_1fr] md:items-start">
          <div className="overflow-hidden rounded-2xl border border-white/10">
            <img
              src={founderImg}
              alt="Ashutosh Yadav, Founder of Advaya.ai"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="space-y-5">
            <div>
              <div className="text-sm text-muted-foreground">Founder, Advaya.ai</div>
              <div className="mt-1 text-xs uppercase tracking-[0.25em] text-muted-foreground">
                Lucknow, Uttar Pradesh · India
              </div>
            </div>
            <p>
              Ashutosh Yadav is the Founder of Advaya.ai, an Indian deep-tech startup
              building VYOM — an AI-first wearable platform currently in development.
            </p>
            <p>
              His vision began with a simple question: <em>What comes after the
              smartphone?</em> Observing that smartphones were becoming more powerful
              but not fundamentally changing how people interact with technology, he set
              out to explore a more natural way to bring AI into everyday life.
            </p>
            <p>
              His long-term mission is to make artificial intelligence accessible to
              everyone — not just experts or those with the latest devices. Through
              VYOM, he envisions technology that helps people become more productive,
              learn more effectively, and perform everyday tasks more naturally. He is
              especially motivated by the idea that AI can expand opportunities for
              people who face physical, educational, or other barriers.
            </p>
            <p>
              Inspired by leaders such as Dr. A.P.J. Abdul Kalam, Ratan Tata, Swami
              Vivekananda, Subhas Chandra Bose, Steve Jobs, and Elon Musk, Ashutosh
              believes technology should ultimately serve humanity.
            </p>
          </div>
        </div>

        <div className="mt-12 rounded-2xl border border-white/10 p-8 md:p-10">
          <Quote className="h-6 w-6 text-muted-foreground" />
          <p className="mt-4 font-serif text-2xl leading-snug text-foreground md:text-3xl">
            "Technology should not replace human potential. It should help every person
            discover more of it."
          </p>
          <div className="mt-4 text-xs uppercase tracking-[0.25em] text-muted-foreground">
            — Ashutosh Yadav
          </div>
        </div>

        <div className="mt-12">
          <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            Founder Manifesto
          </div>
          <div className="mt-4 space-y-4 font-serif text-lg leading-relaxed text-foreground md:text-xl">
            <p>I don't want to build technology simply because it is possible.</p>
            <p>I want to build technology because it can improve lives.</p>
            <p className="text-muted-foreground">
              I believe artificial intelligence should not belong only to a few. It
              should become a tool that empowers everyone to learn, create, and solve
              problems more effectively.
            </p>
            <p className="text-muted-foreground">
              My dream is to help build products that contribute to a future where
              innovation is more accessible, opportunities are more equal, and
              technology serves people with simplicity, responsibility, and purpose.
            </p>
            <p>
              If our work helps even one person unlock more of their potential, then we
              have moved in the right direction.
            </p>
            <p>This is why we are building Advaya.ai. This is why we are building VYOM.</p>
          </div>
        </div>
      </Section>

      {/* Fact Sheet */}
      <Section id="facts" eyebrow="04 — Fact Sheet" title="Company Fact Sheet">
        <dl className="mt-2">
          <FactRow label="Company" value="Advaya.ai" />
          <FactRow label="Flagship Product" value="VYOM" />
          <FactRow
            label="Industry"
            value="Artificial Intelligence · Wearable Technology · DeepTech"
          />
          <FactRow label="Stage" value="Product Development" />
          <FactRow label="Headquarters" value="Lucknow, Uttar Pradesh, India" />
          <FactRow label="Founder" value="Ashutosh Yadav" />
          <FactRow label="Initial Market" value="India" />
          <FactRow label="Long-Term Vision" value="Global" />
          <FactRow
            label="Category"
            value="AI Wearables · Smart Glasses Platform"
          />
        </dl>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-white/10 p-6">
            <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              Target Users
            </div>
            <ul className="mt-3 space-y-1.5 text-sm text-foreground">
              <li>Students</li>
              <li>Professionals</li>
              <li>Entrepreneurs</li>
              <li>Developers</li>
              <li>Content Creators</li>
              <li>Enterprise Teams</li>
            </ul>
          </div>
          <div className="rounded-xl border border-white/10 p-6">
            <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              Core Values
            </div>
            <ul className="mt-3 space-y-1.5 text-sm text-foreground">
              <li>Human First</li>
              <li>Responsible Innovation</li>
              <li>Accessibility</li>
              <li>Simplicity</li>
              <li>Trust</li>
              <li>Long-Term Thinking</li>
            </ul>
          </div>
        </div>

        <div className="mt-10">
          <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            What Makes Advaya.ai Different?
          </div>
          <ul className="mt-4 grid gap-3 md:grid-cols-2">
            {[
              "AI-first approach",
              "Human-centered design philosophy",
              "Long-term wearable AI vision",
              "Focus on accessibility and productivity",
              "Built in India with global ambitions",
            ].map((v) => (
              <li
                key={v}
                className="rounded-lg border border-white/10 px-4 py-3 text-sm text-foreground"
              >
                {v}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Product */}
      <Section id="product" eyebrow="05 — Product" title="VYOM — AI Smart Glasses">
        <p>
          VYOM is an AI-first smart glasses platform currently under development. It is
          designed to bring intelligence naturally into everyday life through voice,
          vision, and contextual understanding.
        </p>
        <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
          <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            Planned Capabilities (Under Development)
          </div>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {[
              "Natural voice interaction",
              "AI assistant",
              "Computer vision",
              "Live translation",
              "Smart notifications",
              "Meeting assistance",
              "Productivity support",
              "Accessibility-focused experiences",
            ].map((f) => (
              <div
                key={f}
                className="rounded-lg border border-white/10 px-4 py-3 text-sm text-foreground"
              >
                {f}
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-muted-foreground">
            Note: Because VYOM is in active development, capabilities are presented as
            planned vision rather than final specifications.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              Design Philosophy
            </div>
            <p className="mt-3 text-foreground">Minimal. Intelligent. Timeless.</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Aerospace-inspired aesthetics, lightweight frame, premium materials, and
              all-day comfort.
            </p>
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              Audio & Camera
            </div>
            <p className="mt-3 text-foreground">
              Open-ear audio, beamforming mics, hands-free capture, AI-assisted visual
              understanding.
            </p>
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              Ecosystem
            </div>
            <p className="mt-3 text-foreground">
              VYOM is part of the Advaya.ai ecosystem — designed to work seamlessly with
              future AI products and services.
            </p>
          </div>
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" eyebrow="06 — Media" title="Press Contact">
        <p>
          For media interviews, press inquiries, speaking opportunities, partnerships,
          and official company information, please reach out using the details below.
        </p>

        <div className="rounded-2xl border border-white/10 p-6 md:p-8">
          <div className="text-sm text-muted-foreground">Media & Press Inquiries</div>
          <div className="mt-2 text-xl text-foreground">Ashutosh Yadav</div>
          <div className="text-sm text-muted-foreground">Founder, Advaya.ai</div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <a
              href="mailto:hello@advaya.ai"
              className="flex items-center gap-3 rounded-lg border border-white/10 px-4 py-3 text-sm text-foreground transition hover:border-white/30"
            >
              <Mail className="h-4 w-4 text-muted-foreground" />
              hello@advaya.ai
            </a>
            <a
              href="https://www.instagram.com/vyom.vision?igsh=MWV0NWtiejV5MmpzMg=="
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-lg border border-white/10 px-4 py-3 text-sm text-foreground transition hover:border-white/30"
            >
              <Instagram className="h-4 w-4 text-muted-foreground" />
              @vyom.vision
            </a>
            <div className="flex items-center gap-3 rounded-lg border border-white/10 px-4 py-3 text-sm text-muted-foreground">
              <Linkedin className="h-4 w-4" />
              LinkedIn — coming soon
            </div>
            <a
              href="mailto:press@advaya.ai"
              className="flex items-center gap-3 rounded-lg border border-white/10 px-4 py-3 text-sm text-foreground transition hover:border-white/30"
            >
              <Mail className="h-4 w-4 text-muted-foreground" />
              press@advaya.ai
            </a>
          </div>
        </div>

        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Advaya.ai — Designed in India. Built for the World.
        </p>
      </Section>
    </main>
  );
}
