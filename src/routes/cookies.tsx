import { createFileRoute } from "@tanstack/react-router";
import { SiteNav, SiteFooter, PageHero } from "@/components/site-chrome";
import { LegalBody, LegalSection, LegalList, LEGAL_EMAIL } from "@/components/legal";

export const Route = createFileRoute("/cookies")({
  head: () => ({
    meta: [
      { title: "Cookie Policy — Advaya.ai (VYOM)" },
      {
        name: "description",
        content:
          "Which cookies and similar technologies the Advaya.ai website uses, why we use them, and how you can manage or withdraw your consent.",
      },
      { property: "og:title", content: "Cookie Policy — Advaya.ai" },
      {
        property: "og:description",
        content: "Essential cookies, optional analytics, third-party services and how to manage your choices.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "https://advaya-vyom.lovable.app/cookies" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://advaya-vyom.lovable.app/cookies" }],
  }),
  component: CookiesPage,
});

function CookiesPage() {
  return (
    <main className="relative min-h-screen">
      <SiteNav />
      <PageHero
        eyebrow="Legal · Cookies"
        title="Cookie Policy"
        lede="We keep cookies to the minimum needed to run the site — and ask before anything optional."
      />
      <LegalBody>
        <LegalSection n="01" title="What cookies are">
          <p>
            Cookies are small text files stored by your browser when you visit a website. We also use similar
            technologies such as <span className="font-mono text-xs">localStorage</span>, which stores a small
            value on your device. Together we refer to these as “cookies” in this policy.
          </p>
        </LegalSection>

        <LegalSection n="02" title="Essential cookies">
          <p>
            These are required for the Site to function and load securely. They are set on the basis of
            legitimate use and cannot be switched off.
          </p>
          <LegalList
            items={[
              <>
                <span className="font-mono text-xs text-foreground">advaya-cookie-consent</span> — remembers
                your cookie choice so we do not ask again on every visit. Stored locally on your device.
              </>,
              "Security and abuse-prevention signals — used for rate limiting and to block automated form submissions.",
              "Hosting and load-balancing cookies set by our infrastructure provider to route your request and keep the connection stable.",
            ]}
          />
        </LegalSection>

        <LegalSection n="03" title="Analytics cookies">
          <p>
            We use privacy-respecting, aggregated analytics to understand which pages people find useful — for
            example, how many visitors read the product page or open the pitch deck. These are{" "}
            <strong className="text-foreground">optional</strong> and are only used if you choose “Accept all”
            in the cookie banner.
          </p>
          <LegalList
            items={[
              "We measure page views, referrers, approximate region and device type in aggregate.",
              "We do not build advertising profiles, run retargeting, or link analytics to your waitlist email.",
              "Choosing “Essential only” means no analytics cookies are used, and the Site works exactly the same.",
            ]}
          />
        </LegalSection>

        <LegalSection n="04" title="Third-party services">
          <p>
            A small number of third parties can set cookies or receive technical data when you use the Site:
          </p>
          <LegalList
            items={[
              "Our hosting and content-delivery provider, which serves pages, images and documents.",
              "Our managed database and backend provider, which securely receives waitlist submissions.",
              "Google Fonts, which serves the typefaces used across the Site.",
              "External links to our Instagram and X profiles — once you follow a link, that platform's own cookie and privacy policies apply, not ours.",
            ]}
          />
          <p>
            We do not embed advertising networks or social tracking pixels, and we do not sell any data
            collected through cookies.
          </p>
        </LegalSection>

        <LegalSection n="05" title="Managing cookies">
          <LegalList
            items={[
              "Use the banner shown on your first visit to accept all cookies or keep only essential ones.",
              <>
                To change your choice later, clear this site's stored data in your browser (Settings → Privacy
                → Cookies and site data) — the banner will appear again on your next visit.
              </>,
              "All major browsers let you block or delete cookies entirely; blocking essential cookies may affect how the Site behaves.",
              "Most browsers also offer a “Do Not Track” setting, which we honour by not enabling optional analytics.",
            ]}
          />
        </LegalSection>

        <LegalSection n="06" title="Updates and contact">
          <p>
            As VYOM develops we may add or remove tools, and this policy will be updated accordingly with a
            revised date at the top of the page. For any cookie or privacy question, write to{" "}
            <a href={`mailto:${LEGAL_EMAIL}`} className="text-foreground underline underline-offset-4 hover:text-accent">
              {LEGAL_EMAIL}
            </a>
            .
          </p>
        </LegalSection>
      </LegalBody>
      <SiteFooter />
    </main>
  );
}
