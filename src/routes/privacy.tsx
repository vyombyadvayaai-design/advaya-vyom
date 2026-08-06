import { createFileRoute } from "@tanstack/react-router";
import { SiteNav, SiteFooter, PageHero } from "@/components/site-chrome";
import { LegalBody, LegalSection, LegalList, LEGAL_EMAIL } from "@/components/legal";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Advaya.ai (VYOM)" },
      {
        name: "description",
        content:
          "How Advaya.ai collects, uses and protects personal data for the VYOM waitlist and website, in line with India's Digital Personal Data Protection Act, 2023.",
      },
      { property: "og:title", content: "Privacy Policy — Advaya.ai" },
      {
        property: "og:description",
        content: "Our DPDP-aligned commitments on data collection, retention, security and your rights.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "https://advaya-vyom.lovable.app/privacy" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://advaya-vyom.lovable.app/privacy" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <main className="relative min-h-screen">
      <SiteNav />
      <PageHero
        eyebrow="Legal · Privacy"
        title="Privacy Policy"
        lede="We collect very little, we tell you exactly what it is, and you can ask us to delete it at any time."
      />
      <LegalBody>
        <LegalSection n="01" title="Who we are">
          <p>
            Advaya.ai (“Advaya”, “we”, “us”) is an early-stage artificial intelligence company based in
            Lucknow, Uttar Pradesh, India, founded by Ashutosh Yadav. We are building VYOM, an AI-first
            wearable platform.
          </p>
          <p>
            For the purposes of India's Digital Personal Data Protection Act, 2023 (the “DPDP Act”),
            Advaya.ai is the Data Fiduciary for personal data collected through this website. You — the
            person whose data it is — are the Data Principal.
          </p>
          <p>
            Grievances and privacy requests:{" "}
            <a href={`mailto:${LEGAL_EMAIL}`} className="text-foreground underline underline-offset-4 hover:text-accent">
              {LEGAL_EMAIL}
            </a>
            .
          </p>
        </LegalSection>

        <LegalSection n="02" title="Our product, and what this policy covers">
          <p>
            VYOM is currently <strong className="text-foreground">in development</strong>. It is not
            available for purchase, and no VYOM device is collecting data from anyone today. This policy
            covers only the Advaya.ai website — the waitlist form, contact and enquiry emails, downloadable
            materials such as the press kit and pitch deck, and basic website analytics.
          </p>
          <p>
            When VYOM hardware and software ship, we will publish a separate, product-specific privacy
            notice covering on-device processing, capture indicators, memory and any cloud features — before
            any device collects data.
          </p>
        </LegalSection>

        <LegalSection n="03" title="What we collect">
          <LegalList
            items={[
              <>
                <strong className="text-foreground">Waitlist information</strong> — your email address, and
                optionally your name and the capacity you are interested in (early user, investor, partner,
                press, or joining the team).
              </>,
              <>
                <strong className="text-foreground">Contact and enquiry messages</strong> — anything you
                choose to send us by email, including your name, email address and message content.
              </>,
              <>
                <strong className="text-foreground">Technical and device information</strong> — IP address,
                browser type, device type, referring page and timestamps, processed automatically when you
                load the site and used for security, spam prevention and rate limiting.
              </>,
              <>
                <strong className="text-foreground">Aggregated analytics</strong> — page views and general
                usage patterns, where analytics are enabled and you have consented. See our Cookie Policy.
              </>,
            ]}
          />
          <p>
            We do not knowingly collect data from children, we do not ask for sensitive personal data
            (financial, health, biometric or government identifiers) through this website, and we never buy
            or scrape contact lists.
          </p>
        </LegalSection>

        <LegalSection n="04" title="Why we collect it, and on what basis">
          <LegalList
            items={[
              "To add you to the VYOM waitlist and confirm your place on it.",
              "To send you development milestones, prototype reveals and early-access invitations.",
              "To respond to investor, partnership, press, hiring and general enquiries.",
              "To protect the site against spam, abuse and automated submissions.",
              "To understand which pages are useful so we can improve the website.",
            ]}
          />
          <p>
            Our legal basis under the DPDP Act is your consent, given when you tick the consent box and
            submit a form, or when you email us directly. Certain limited processing — such as security
            logging and preventing abuse — is carried out as a legitimate use necessary to operate the
            service safely. We do not use your data for automated decision-making or profiling, and we do
            not sell it or use it for third-party advertising.
          </p>
        </LegalSection>

        <LegalSection n="05" title="Who we share it with">
          <p>
            We do not sell, rent or trade personal data. We share it only with service providers who help us
            operate the website and communicate with you — our website hosting and infrastructure provider,
            our managed database provider, and our email provider. These processors act on our instructions
            under contractual confidentiality and security obligations.
          </p>
          <p>
            Some of these providers may process or store data outside India on infrastructure we select for
            reliability and security. We disclose personal data to public authorities only where we are
            legally required to do so.
          </p>
        </LegalSection>

        <LegalSection n="06" title="How we protect your information">
          <LegalList
            items={[
              "All traffic is served over HTTPS/TLS, with HSTS and a strict Content Security Policy.",
              "Data is stored in a managed database with row-level access controls; the waitlist table is write-only from the public website and cannot be read by visitors.",
              "Form submissions are validated server-side, rate limited by IP and protected by honeypot bot detection.",
              "Access to stored data is limited to the founder and, where strictly necessary, a small number of trusted collaborators.",
              "We practise data minimisation — we ask for the least information that makes the service work.",
            ]}
          />
          <p>
            No system is perfectly secure. If a personal data breach affecting you occurs, we will notify you
            and the Data Protection Board of India as required under the DPDP Act.
          </p>
        </LegalSection>

        <LegalSection n="07" title="How long we keep it">
          <LegalList
            items={[
              "Waitlist records: kept until VYOM launches and the waitlist is fulfilled, or until you ask us to remove you — whichever comes first.",
              "Email correspondence: kept for up to 24 months from our last exchange, unless a longer period is needed for legal or accounting reasons.",
              "Security and rate-limiting logs: retained for a short operational window and then discarded.",
            ]}
          />
          <p>
            When personal data is no longer needed for the purpose it was collected for, we delete or
            irreversibly anonymise it.
          </p>
        </LegalSection>

        <LegalSection n="08" title="Your rights">
          <p>Under the DPDP Act you may, at any time:</p>
          <LegalList
            items={[
              "Access a summary of the personal data we hold about you and how it is processed.",
              "Correct, complete or update inaccurate personal data.",
              "Request erasure of your personal data, unless we must retain it by law.",
              "Withdraw your consent — as easily as you gave it — after which we stop processing and remove you from all communications.",
              "Nominate another individual to exercise these rights on your behalf in the event of death or incapacity.",
              "Raise a grievance with us, and escalate to the Data Protection Board of India if you are not satisfied with our response.",
            ]}
          />
          <p>
            Email{" "}
            <a href={`mailto:${LEGAL_EMAIL}`} className="text-foreground underline underline-offset-4 hover:text-accent">
              {LEGAL_EMAIL}
            </a>{" "}
            with the subject line “Privacy Request”. We respond within 7 working days and resolve requests
            within 30 days. You are asked to provide accurate information and not to impersonate anyone else
            when making a request.
          </p>
        </LegalSection>

        <LegalSection n="09" title="Changes to this policy">
          <p>
            VYOM is evolving, and this policy will evolve with it. When we make a material change we will
            update the date at the top of this page and, where the change affects how we use data you have
            already given us, notify waitlist members by email before it takes effect. Continued use of the
            website after an update means you accept the revised policy.
          </p>
        </LegalSection>
      </LegalBody>
      <SiteFooter />
    </main>
  );
}
