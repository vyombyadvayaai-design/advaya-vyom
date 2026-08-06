import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useState, useRef } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { SiteNav, SiteFooter, PageHero } from "@/components/site-chrome";
import { joinWaitlist } from "@/lib/waitlist.functions";

export const Route = createFileRoute("/waitlist")({
  head: () => ({
    meta: [
      { title: "Join the VYOM Waitlist — Advaya.ai" },
      {
        name: "description",
        content:
          "Be first to experience VYOM — an AI-first wearable platform in development by Advaya.ai. No spam. Occasional updates. Early-access priority.",
      },
      { property: "og:title", content: "Join the VYOM Waitlist" },
      {
        property: "og:description",
        content: "Early access to the future of AI you'll wear.",
      },
      { name: "robots", content: "index,follow" },
    ],
    links: [{ rel: "canonical", href: "https://advaya-vyom.lovable.app/waitlist" }],
  }),
  component: WaitlistPage,
});

function WaitlistPage() {
  const submit = useServerFn(joinWaitlist);
  const [state, setState] = useState<"idle" | "loading" | "done" | "error">("idle");
  const [message, setMessage] = useState<string>("");
  const [consent, setConsent] = useState(false);
  const startedAtRef = useRef<number>(Date.now());

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const email = String(f.get("email") ?? "").trim();
    if (!/^[^\s@]+@[^\s@.]+\.[^\s@]{2,}$/.test(email)) {
      setState("error");
      setMessage("Please enter a valid email address.");
      return;
    }
    if (!consent) {
      setState("error");
      setMessage("Please accept the Privacy Policy consent to continue.");
      return;
    }
    setState("loading");
    setMessage("");
    try {
      const res = await submit({
        data: {
          email,
          name: String(f.get("name") ?? "").trim().slice(0, 120),
          interest: String(f.get("interest") ?? ""),
          source: "waitlist-page",
          website: String(f.get("website") ?? ""),
          startedAt: startedAtRef.current,
        },
      });

      setState("done");
      setMessage(
        res.alreadyJoined
          ? "You're already on the list — we'll be in touch."
          : "You're on the list. Welcome to the journey."
      );
    } catch (err) {
      setState("error");
      setMessage(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <main className="relative min-h-screen">
      <SiteNav />
      <PageHero
        eyebrow="Waitlist · In development"
        title="Be first to see what we've been building."
        lede="VYOM is not shipping yet. Join the waitlist to receive milestones, prototype reveals, and early-access invitations directly from the founder."
      />
      <section className="relative pb-32">
        <div className="mx-auto max-w-xl px-6">
          {state === "done" ? (
            <div className="glass-strong rounded-3xl p-10 text-center">
              <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-accent/15">
                <CheckCircle2 className="h-7 w-7 text-accent" />
              </div>
              <h2 className="mt-6 font-display text-3xl text-gradient">Thank you.</h2>
              <p className="mt-3 text-sm text-muted-foreground">{message}</p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="glass-strong rounded-3xl p-8 md:p-10">
              <div className="space-y-5">
                <Field label="Full name" name="name" placeholder="Your name" />
                <input
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  className="hidden"
                />
                <Field label="Email" name="email" type="email" required placeholder="you@domain.com" />
                <div>
                  <label className="text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
                    I'm interested as
                  </label>
                  <select
                    name="interest"
                    defaultValue="early-user"
                    className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-foreground outline-none transition focus:border-accent/60"
                  >
                    <option value="early-user">An early user</option>
                    <option value="investor">An investor</option>
                    <option value="partner">A potential partner</option>
                    <option value="press">Press / media</option>
                    <option value="talent">Interested in joining the team</option>
                  </select>
                </div>
                <ConsentCheckbox
                  checked={consent}
                  onChange={setConsent}
                  error={state === "error" && !consent}
                />
              </div>
              <button
                type="submit"
                disabled={state === "loading"}
                className="btn-primary mt-8 w-full disabled:opacity-70"
              >
                {state === "loading" ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" /> Joining…
                  </>
                ) : (
                  "Join the Waitlist"
                )}
              </button>
              {state === "error" ? (
                <p className="mt-4 text-center text-xs text-destructive">{message}</p>
              ) : (
                <p className="mt-4 text-center text-[11px] text-muted-foreground">
                  We'll never share your email. Unsubscribe anytime.
                </p>
              )}
            </form>
          )}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
        {label}
        {required ? <span className="ml-1 text-accent">*</span> : null}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        maxLength={type === "email" ? 320 : 120}
        className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition focus:border-accent/60"
      />
    </div>
  );
}
