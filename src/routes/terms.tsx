import { createFileRoute } from "@tanstack/react-router";
import { SiteNav, SiteFooter, PageHero } from "@/components/site-chrome";
import { LegalBody, LegalSection, LegalList, LEGAL_EMAIL } from "@/components/legal";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service — Advaya.ai (VYOM)" },
      {
        name: "description",
        content:
          "The terms governing use of the Advaya.ai website: acceptable use, intellectual property, development-stage disclaimers, liability and Indian governing law.",
      },
      { property: "og:title", content: "Terms of Service — Advaya.ai" },
      {
        property: "og:description",
        content: "Website usage rules, IP ownership, disclaimers and governing law for Advaya.ai and VYOM.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "https://advaya-vyom.lovable.app/terms" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://advaya-vyom.lovable.app/terms" }],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <main className="relative min-h-screen">
      <SiteNav />
      <PageHero
        eyebrow="Legal · Terms"
        title="Terms of Service"
        lede="Plain terms for using the Advaya.ai website while VYOM is being built."
      />
      <LegalBody>
        <LegalSection n="01" title="Agreement to these terms">
          <p>
            These Terms of Service govern your access to and use of the Advaya.ai website and all content,
            documents and forms made available on it (the “Site”). The Site is operated by Advaya.ai, an
            early-stage company based in Lucknow, Uttar Pradesh, India.
          </p>
          <p>
            By using the Site you agree to these terms. If you do not agree, please do not use the Site. If
            you use the Site on behalf of an organisation, you confirm you are authorised to bind it.
          </p>
        </LegalSection>

        <LegalSection n="02" title="Using the site">
          <LegalList
            items={[
              "The Site is provided for information about Advaya.ai and VYOM, and to let you join the waitlist or contact us.",
              "You must be at least 18 years old, or have the consent of a parent or guardian, to submit information through the Site.",
              "Information you submit must be accurate, your own, and not impersonate any other person or entity.",
              "We may change, suspend or withdraw any part of the Site — including pages, documents and the waitlist — at any time, without notice.",
              "Joining the waitlist creates no entitlement to a device, to early access, to pricing, or to any commercial relationship.",
            ]}
          />
        </LegalSection>

        <LegalSection n="03" title="Intellectual property">
          <p>
            All content on the Site — including the Advaya.ai and VYOM names, logos, wordmarks, product
            renders, photography, copy, design system, code, the pitch deck, company profile and press-kit
            materials — is owned by Advaya.ai or its licensors and is protected by Indian and international
            intellectual property law.
          </p>
          <LegalList
            items={[
              "You may view, download and share Site content for personal, non-commercial, editorial or evaluation purposes, with attribution to Advaya.ai.",
              "Press-kit assets may be used for editorial coverage of Advaya.ai and VYOM, unmodified except for cropping and scaling.",
              "You may not use our brand assets to imply endorsement, partnership or affiliation without written permission.",
              "You may not copy, republish, resell, reverse-engineer or create derivative works from the Site or its code for commercial purposes.",
            ]}
          />
          <p>
            Feedback or ideas you voluntarily send us may be used freely by Advaya.ai without obligation or
            compensation, unless we have agreed otherwise in writing.
          </p>
        </LegalSection>

        <LegalSection n="04" title="Acceptable use">
          <p>You agree not to:</p>
          <LegalList
            items={[
              "Submit false, misleading, unlawful, abusive, defamatory or infringing content.",
              "Use bots, scrapers, automated submissions or bulk requests against the Site or its forms.",
              "Attempt to gain unauthorised access to the Site, its database, its APIs or any connected system.",
              "Probe, scan, overload, disrupt or circumvent security, rate limiting or access controls.",
              "Introduce malware, or use the Site to distribute spam or unsolicited marketing.",
              "Use the Site in violation of any applicable Indian or local law.",
            ]}
          />
          <p>
            We may block access, remove submissions or terminate use of the Site by anyone who breaches these
            terms.
          </p>
        </LegalSection>

        <LegalSection n="05" title="VYOM is under development">
          <p>
            <strong className="text-foreground">
              VYOM is a product in active development and is not commercially available.
            </strong>{" "}
            Everything shown on this Site — including renders, concepts, capabilities, specifications,
            timelines, roadmap phases and demonstrations — is indicative of our current direction and is
            subject to change, delay or cancellation.
          </p>
          <LegalList
            items={[
              "Product visuals are concept representations and may not reflect the final device.",
              "Roadmap dates, milestones and feature descriptions are goals, not commitments or guarantees.",
              "Investor, press and pitch materials are for information only. They are not an offer, invitation or solicitation to invest in any security, and they contain forward-looking statements that involve risk and uncertainty.",
              "Nothing on the Site constitutes a contract, warranty, pre-order or promise of availability, pricing or performance.",
            ]}
          />
        </LegalSection>

        <LegalSection n="06" title="Disclaimer of warranties">
          <p>
            The Site is provided “as is” and “as available”, without warranties of any kind, whether express
            or implied, including merchantability, fitness for a particular purpose and non-infringement. We
            do not warrant that the Site will be uninterrupted, error-free or secure, or that its content is
            complete, current or accurate. Third-party links are provided for convenience and we are not
            responsible for third-party sites or their content.
          </p>
        </LegalSection>

        <LegalSection n="07" title="Limitation of liability">
          <p>
            To the maximum extent permitted by law, Advaya.ai, its founder, team members and service
            providers will not be liable for any indirect, incidental, special, consequential or punitive
            damages, or for any loss of profits, revenue, data, goodwill or business opportunity arising from
            or related to your use of, or inability to use, the Site — even if we have been advised of the
            possibility of such damages.
          </p>
          <p>
            Our total aggregate liability for any claim relating to the Site is limited to INR 1,000. Nothing
            in these terms excludes liability that cannot be excluded under applicable Indian law.
          </p>
        </LegalSection>

        <LegalSection n="08" title="Privacy">
          <p>
            Our handling of personal data is described in our Privacy Policy and Cookie Policy, which form
            part of these terms. By using the Site you also agree to those policies.
          </p>
        </LegalSection>

        <LegalSection n="09" title="Governing law and jurisdiction">
          <p>
            These terms are governed by the laws of India. Any dispute arising out of or in connection with
            the Site or these terms will be subject to the exclusive jurisdiction of the competent courts at
            Lucknow, Uttar Pradesh, India. We encourage you to contact us first so we can try to resolve any
            issue directly.
          </p>
        </LegalSection>

        <LegalSection n="10" title="Changes and contact">
          <p>
            We may update these terms as Advaya.ai and VYOM develop. Updates take effect when posted here,
            with a revised date at the top of the page. Questions about these terms can be sent to{" "}
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
