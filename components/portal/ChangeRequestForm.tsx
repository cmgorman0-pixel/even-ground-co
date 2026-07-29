"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { CONTACT_EMAIL } from "@/lib/site";

type Status = "idle" | "submitting" | "success" | "unavailable" | "error";

export function ChangeRequestForm() {
  const router = useRouter();
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/portal/change-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
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
      setMessage("");
      router.refresh();
    } catch {
      setErrorMessage("Something went wrong. Please try again.");
      setStatus("error");
    }
  }

  if (status === "unavailable") {
    return (
      <div className="rounded-2xl border border-border bg-surface p-6 text-center">
        <p className="text-sm text-muted">
          Change requests aren&rsquo;t connected yet. Email{" "}
          <a href={`mailto:${CONTACT_EMAIL}`} className="text-clay hover:underline">
            {CONTACT_EMAIL}
          </a>{" "}
          instead.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-border bg-surface p-6">
      <label htmlFor="change-message" className="text-sm font-medium text-foreground">
        Request a change
      </label>
      <p className="mt-1 text-sm text-muted">
        Tell us what you&rsquo;d like updated — we&rsquo;ll make the edit ourselves and
        follow up, not an AI editing your live site.
      </p>
      <textarea
        id="change-message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
        rows={4}
        maxLength={2000}
        placeholder="e.g. Update our hours to close at 9pm on weekends"
        className="mt-3 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground outline-none transition-colors focus:border-clay"
      />

      {status === "error" && (
        <p className="mt-2 text-sm text-red-500">{errorMessage}</p>
      )}
      {status === "success" && (
        <p className="mt-2 text-sm text-clay">
          Sent — we&rsquo;ll follow up soon.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-4 rounded-full bg-clay px-6 py-2.5 text-sm font-semibold text-white shadow-md shadow-clay/25 transition-all hover:-translate-y-0.5 hover:bg-clay-dark hover:shadow-lg disabled:opacity-60 disabled:hover:translate-y-0"
      >
        {status === "submitting" ? "Sending…" : "Send request"}
      </button>
    </form>
  );
}
