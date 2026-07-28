"use client";

import { useState } from "react";
import { INTEREST_OPTIONS } from "@/lib/contactOptions";
import { CONTACT_EMAIL } from "@/lib/site";

type Status = "idle" | "submitting" | "success" | "unavailable" | "error";

const fieldClass =
  "mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground outline-none transition-colors focus:border-clay";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      business: (form.elements.namedItem("business") as HTMLInputElement)
        .value,
      interest: (form.elements.namedItem("interest") as HTMLSelectElement)
        .value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement)
        .value,
      // Honeypot -- real visitors never see or fill this field (hidden
      // off-screen below); bots that fill every input usually do.
      website: (form.elements.namedItem("website") as HTMLInputElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) {
        setErrorMessage(json.error || "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }
      if (json.skipped) {
        setStatus("unavailable");
        return;
      }
      setStatus("success");
      form.reset();
    } catch {
      setErrorMessage("Something went wrong. Please try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-clay/30 bg-surface p-8 text-center">
        <p className="font-display text-lg font-semibold">Message sent.</p>
        <p className="mt-2 text-sm text-muted">
          Thanks for reaching out — we&rsquo;ll get back to you shortly.
        </p>
      </div>
    );
  }

  if (status === "unavailable") {
    return (
      <div className="rounded-2xl border border-border bg-surface p-8 text-center">
        <p className="font-display text-lg font-semibold">
          This form isn&rsquo;t connected yet.
        </p>
        <p className="mt-2 text-sm text-muted">
          Email us directly at{" "}
          <a href={`mailto:${CONTACT_EMAIL}`} className="text-clay hover:underline">
            {CONTACT_EMAIL}
          </a>{" "}
          and we&rsquo;ll get back to you.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="relative rounded-2xl border border-border bg-surface p-8 text-left"
    >
      {/* Honeypot -- hidden from sighted users and screen readers, and
          skipped in tab order, so only an automated filler ever touches it. */}
      <div aria-hidden="true" className="absolute left-[-9999px]" style={{ height: 0, overflow: "hidden" }}>
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-medium text-foreground">
            Name
          </label>
          <input id="name" name="name" type="text" required maxLength={200} className={fieldClass} />
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-medium text-foreground">
            Email
          </label>
          <input id="email" name="email" type="email" required maxLength={200} className={fieldClass} />
        </div>
      </div>

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="business" className="text-sm font-medium text-foreground">
            Business name (optional)
          </label>
          <input id="business" name="business" type="text" maxLength={200} className={fieldClass} />
        </div>
        <div>
          <label htmlFor="interest" className="text-sm font-medium text-foreground">
            What are you looking to do?
          </label>
          <select id="interest" name="interest" defaultValue="" className={fieldClass}>
            <option value="" disabled>
              Select one
            </option>
            {INTEREST_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-4">
        <label htmlFor="message" className="text-sm font-medium text-foreground">
          Anything else we should know?
        </label>
        <textarea id="message" name="message" required rows={4} maxLength={2000} className={fieldClass} />
      </div>

      {status === "error" && (
        <p className="mt-3 text-sm text-red-500">{errorMessage}</p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-6 rounded-full bg-clay px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-clay/25 transition-all hover:-translate-y-0.5 hover:bg-clay-dark hover:shadow-xl disabled:opacity-60 disabled:hover:translate-y-0"
      >
        {status === "submitting" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
