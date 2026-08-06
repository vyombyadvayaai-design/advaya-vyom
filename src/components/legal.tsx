import { useEffect, useState, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { Cookie } from "lucide-react";

export const LEGAL_EMAIL = "vyombyadvayaai@gmail.com";
export const LEGAL_UPDATED = "6 August 2026";

/* ------------------------------------------------------------------ */
/*  Shared legal page primitives                                       */
/* ------------------------------------------------------------------ */

export function LegalBody({ children }: { children: ReactNode }) {
  return (
    <section className="relative pb-32">
      <div className="mx-auto max-w-3xl px-6">
        <div className="glass-strong rounded-3xl p-8 md:p-12">
          <p className="text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
            Last updated · {LEGAL_UPDATED}
          </p>
          <div className="mt-8 space-y-10">{children}</div>
        </div>
        <p className="mt-8 text-center text-xs text-muted-foreground">
          Questions? Write to{" "}
          <a
            href={`mailto:${LEGAL_EMAIL}`}
            className="text-foreground underline underline-offset-4 transition hover:text-accent"
          >
            {LEGAL_EMAIL}
          </a>
        </p>
        <nav aria-label="Legal pages" className="mt-6 flex flex-wrap justify-center gap-5 text-xs text-muted-foreground">
          <Link to="/privacy" className="transition hover:text-foreground">Privacy Policy</Link>
          <Link to="/terms" className="transition hover:text-foreground">Terms of Service</Link>
          <Link to="/cookies" className="transition hover:text-foreground">Cookie Policy</Link>
        </nav>
      </div>
    </section>
  );
}

export function LegalSection({ n, title, children }: { n: string; title: string; children: ReactNode }) {
  return (
    <section>
      <h2 className="font-display text-2xl leading-tight text-gradient">
        <span className="mr-3 font-sans text-xs align-middle tracking-[0.2em] text-accent">{n}</span>
        {title}
      </h2>
      <div className="mt-4 space-y-4 text-sm leading-relaxed text-muted-foreground">{children}</div>
    </section>
  );
}

export function LegalList({ items }: { items: (string | ReactNode)[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((it, i) => (
        <li key={i} className="flex gap-3">
          <span className="mt-[0.55rem] h-1 w-1 shrink-0 rounded-full bg-accent" />
          <span>{it}</span>
        </li>
      ))}
    </ul>
  );
}

/* ------------------------------------------------------------------ */
/*  Consent checkbox for forms                                         */
/* ------------------------------------------------------------------ */

export function ConsentCheckbox({
  id = "consent",
  checked,
  onChange,
  error,
}: {
  id?: string;
  checked: boolean;
  onChange: (v: boolean) => void;
  error?: boolean;
}) {
  return (
    <div className="flex items-start gap-3 text-left">
      <input
        id={id}
        name="consent"
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        aria-invalid={error || undefined}
        required
        className="mt-0.5 h-4 w-4 shrink-0 cursor-pointer rounded border border-white/20 bg-white/5 accent-[oklch(0.75_0.15_240)]"
      />
      <label
        htmlFor={id}
        className={`cursor-pointer text-xs leading-relaxed ${error ? "text-destructive" : "text-muted-foreground"}`}
      >
        I have read the{" "}
        <Link to="/privacy" className="text-foreground underline underline-offset-4 transition hover:text-accent">
          Privacy Policy
        </Link>{" "}
        and consent to Advaya.ai using my information to contact me regarding VYOM.
      </label>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Cookie consent banner                                              */
/* ------------------------------------------------------------------ */

const COOKIE_KEY = "advaya-cookie-consent";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(COOKIE_KEY)) {
        const t = setTimeout(() => setVisible(true), 1200);
        return () => clearTimeout(t);
      }
    } catch {
      /* storage unavailable — stay hidden */
    }
  }, []);

  const decide = (value: "accepted" | "essential") => {
    try {
      localStorage.setItem(COOKIE_KEY, value);
    } catch {
      /* ignore */
    }
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.45, ease: [0.2, 0.8, 0.2, 1] }}
          role="dialog"
          aria-live="polite"
          aria-label="Cookie consent"
          className="fixed inset-x-4 bottom-4 z-[90] mx-auto max-w-2xl md:inset-x-auto md:right-6 md:bottom-6"
        >
          <div className="glass-strong rounded-2xl p-5 shadow-2xl md:p-6">
            <div className="flex items-start gap-3">
              <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-full bg-accent/15">
                <Cookie className="h-4 w-4 text-accent" strokeWidth={1.5} />
              </span>
              <div className="min-w-0">
                <p className="text-sm font-medium text-foreground">We keep cookies minimal.</p>
                <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                  Essential cookies keep this site working. With your consent we also use simple
                  analytics to understand which pages are useful. Read our{" "}
                  <Link to="/cookies" className="text-foreground underline underline-offset-4 transition hover:text-accent">
                    Cookie Policy
                  </Link>
                  .
                </p>
              </div>
            </div>
            <div className="mt-5 flex flex-col gap-2 sm:flex-row sm:justify-end">
              <button onClick={() => decide("essential")} className="btn-ghost text-sm">
                Essential only
              </button>
              <button onClick={() => decide("accepted")} className="btn-primary text-sm">
                Accept all
              </button>
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
