import type { Metadata } from "next";
import { isSupabaseConfigured } from "@/lib/supabase/isConfigured";
import { LoginForm } from "@/components/portal/LoginForm";

export const metadata: Metadata = {
  title: "Client Login | Even Ground Co.",
  robots: { index: false, follow: false },
};

export default function PortalLoginPage() {
  const configured = isSupabaseConfigured();

  return (
    <div className="mx-auto max-w-sm">
      <h1 className="font-display text-2xl font-semibold tracking-tight">
        Client login
      </h1>
      <p className="mt-2 text-sm text-muted">
        Log in to see your site&rsquo;s stats.
      </p>
      <div className="mt-8">
        <LoginForm configured={configured} />
      </div>
    </div>
  );
}
