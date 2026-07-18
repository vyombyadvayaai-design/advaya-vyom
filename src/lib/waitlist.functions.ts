import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const schema = z.object({
  email: z.string().trim().email().max(320),
  name: z.string().trim().max(120).optional().or(z.literal("")),
  source: z.string().trim().max(60).optional().or(z.literal("")),
  interest: z.string().trim().max(60).optional().or(z.literal("")),
});

export const joinWaitlist = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => schema.parse(input))
  .handler(async ({ data }) => {
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
      name: data.name || null,
      source: data.source || null,
      interest: data.interest || null,
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
