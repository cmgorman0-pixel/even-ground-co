import type { Metadata } from "next";
import { isSupabaseConfigured } from "@/lib/supabase/isConfigured";
import { LoginForm } from "@/components/portal/LoginForm";

export const metadata: Metadata = {
  title: "Log in to Tally | Even Ground Co.",
  robots: { index: false, follow: false },
};

export default function PortalLoginPage() {
  const configured = isSupabaseConfigured();

  return (
    <div className="mx-auto max-w-sm">
      <p className="text-sm font-semibold uppercase tracking-widest text-clay">
        Tally
      </p>
      <h1 className="mt-1 font-display text-2xl font-semibold tracking-tight">
        Log in
      </h1>
      <p className="mt-2 text-sm text-muted">
        See your site&rsquo;s real stats — no fluff, no fake metrics.
      </p>
      <div className="mt-8">
        <LoginForm configured={configured} />
      </div>
    </div>
  );
}
