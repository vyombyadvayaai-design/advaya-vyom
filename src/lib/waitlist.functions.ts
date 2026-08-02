import { createServerFn } from "@tanstack/react-start";
import { getRequest } from "@tanstack/react-start/server";
import { z } from "zod";

/** Common throwaway/disposable domains — basic spam protection. */
const DISPOSABLE_DOMAINS = new Set([
  "mailinator.com",
  "yopmail.com",
  "guerrillamail.com",
  "10minutemail.com",
  "tempmail.com",
  "trashmail.com",
  "sharklasers.com",
  "getnada.com",
  "dispostable.com",
  "fakeinbox.com",
]);

const clean = (v?: string) =>
  (v ?? "")
    .replace(/[\u0000-\u001f\u007f]/g, "") // strip control chars
    .replace(/[<>]/g, "") // strip angle brackets (no markup)
    .trim()
    .slice(0, 200);

const schema = z.object({
  email: z
    .string()
    .trim()
    .toLowerCase()
    .max(320)
    .email("Please enter a valid email address")
    .refine((e) => /^[^\s@]+@[^\s@.]+\.[^\s@]{2,}$/.test(e), "Please enter a valid email address")
    .refine((e) => !DISPOSABLE_DOMAINS.has(e.split("@")[1] ?? ""), "Please use a permanent email address"),
  name: z.string().trim().max(120).optional().or(z.literal("")),
  source: z.string().trim().max(60).optional().or(z.literal("")),
  interest: z.string().trim().max(60).optional().or(z.literal("")),
  /** Honeypot — must stay empty; bots fill it in. */
  website: z.string().max(200).optional().or(z.literal("")),
  /** Client timestamp when the form was rendered (ms epoch) — blocks instant bot posts. */
  startedAt: z.number().optional(),
});

/** Simple sliding-window rate limiter (per instance). */
const HITS = new Map<string, number[]>();
const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 5;

function rateLimited(key: string) {
  const now = Date.now();
  const hits = (HITS.get(key) ?? []).filter((t) => now - t < WINDOW_MS);
  hits.push(now);
  HITS.set(key, hits);
  if (HITS.size > 5000) HITS.clear();
  return hits.length > MAX_PER_WINDOW;
}

function clientKey() {
  try {
    const req = getRequest();
    const h = req.headers;
    return (
      h.get("cf-connecting-ip") ||
      h.get("x-real-ip") ||
      h.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      "unknown"
    );
  } catch {
    return "unknown";
  }
}

export const joinWaitlist = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => schema.parse(input))
  .handler(async ({ data }) => {
    // Bot protection: honeypot filled, or submitted implausibly fast.
    if (data.website && data.website.trim() !== "") {
      return { ok: true, alreadyJoined: false as const };
    }
    if (data.startedAt && Date.now() - data.startedAt < 1200) {
      throw new Error("Please take a moment and try again.");
    }

    if (rateLimited(clientKey())) {
      throw new Error("Too many attempts. Please try again in a minute.");
    }

    const { createClient } = await import("@supabase/supabase-js");
    const url = process.env.SUPABASE_URL!;
    const key = process.env.SUPABASE_PUBLISHABLE_KEY!;
    const supabase = createClient(url, key, {
      auth: { persistSession: false, autoRefreshToken: false },
      global: {
        fetch: (input, init) => {
          const h = new Headers(init?.headers);
          if (key.startsWith("sb_") && h.get("Authorization") === `Bearer ${key}`) h.delete("Authorization");
          h.set("apikey", key);
          return fetch(input, { ...init, headers: h });
        },
      },
    });

    const { error } = await supabase.from("waitlist").insert({
      email: data.email.toLowerCase(),
      name: clean(data.name) || null,
      source: clean(data.source) || null,
      interest: clean(data.interest) || null,
    });

    if (error) {
      // 23505 = unique violation → already on list; treat as success
      if ((error as { code?: string }).code === "23505") {
        return { ok: true, alreadyJoined: true as const };
      }
      throw new Error(error.message);
    }
    return { ok: true, alreadyJoined: false as const };
  });
