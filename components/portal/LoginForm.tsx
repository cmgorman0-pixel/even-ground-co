"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { CONTACT_EMAIL } from "@/lib/site";

type Status = "idle" | "submitting" | "sent" | "unavailable" | "error";

export function LoginForm({ configured }: { configured: boolean }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>(configured ? "idle" : "unavailable");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const supabase = createClient();
      const { error } = await supabase.auth.signInWithOtp({
        email,
        options: { emailRedirectTo: `${window.location.origin}/auth/callback` },
      });
      if (error) {
        setErrorMessage(error.message);
        setStatus("error");
        return;
      }
      setStatus("sent");
    } catch {
      setErrorMessage("Something went wrong. Please try again.");
      setStatus("error");
    }
  }

  if (status === "unavailable") {
    return (
      <div className="rounded-2xl border border-border bg-surface p-8 text-center">
        <p className="font-display text-lg font-semibold">
          The client portal isn&rsquo;t connected yet.
        </p>
        <p className="mt-2 text-sm text-muted">
          Email{" "}
          <a href={`mailto:${CONTACT_EMAIL}`} className="text-clay hover:underline">
            {CONTACT_EMAIL}
          </a>{" "}
          if you were expecting access.
        </p>
      </div>
    );
  }

  if (status === "sent") {
    return (
      <div className="rounded-2xl border border-clay/30 bg-surface p-8 text-center">
        <p className="font-display text-lg font-semibold">Check your email.</p>
        <p className="mt-2 text-sm text-muted">
          We sent a login link to {email}. Click it to access your dashboard.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-border bg-surface p-8 text-left"
    >
      <label htmlFor="email" className="text-sm font-medium text-foreground">
        Email
      </label>
      <input
        id="email"
        name="email"
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground outline-none transition-colors focus:border-clay"
      />
      <p className="mt-2 text-xs text-muted">
        We&rsquo;ll email you a link — no password needed.
      </p>

      {status === "error" && (
        <p className="mt-3 text-sm text-red-500">{errorMessage}</p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-6 w-full rounded-full bg-clay px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-clay/25 transition-all hover:-translate-y-0.5 hover:bg-clay-dark hover:shadow-xl disabled:opacity-60 disabled:hover:translate-y-0"
      >
        {status === "submitting" ? "Sending…" : "Send login link"}
      </button>
    </form>
  );
}
