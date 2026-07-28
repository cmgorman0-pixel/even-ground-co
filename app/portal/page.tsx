import type { Metadata } from "next";
import { isSupabaseConfigured } from "@/lib/supabase/isConfigured";
import { createClient } from "@/lib/supabase/server";
import { SampleDataBanner } from "@/components/portal/SampleDataBanner";
import { KeywordRankingsCard } from "@/components/portal/KeywordRankingsCard";
import { TrafficChartCard } from "@/components/portal/TrafficChartCard";
import { TopPagesCard } from "@/components/portal/TopPagesCard";
import { GbpInsightsCard } from "@/components/portal/GbpInsightsCard";
import { CONTACT_EMAIL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Dashboard | Even Ground Co.",
  robots: { index: false, follow: false },
};

function NotConnected() {
  return (
    <div className="rounded-2xl border border-border bg-surface p-8 text-center">
      <p className="font-display text-lg font-semibold">
        The client portal isn&rsquo;t connected yet.
      </p>
      <p className="mt-2 text-sm text-muted">
        This dashboard will show up here once it&rsquo;s wired up. Email{" "}
        <a href={`mailto:${CONTACT_EMAIL}`} className="text-clay hover:underline">
          {CONTACT_EMAIL}
        </a>{" "}
        with questions.
      </p>
    </div>
  );
}

function AccountNotSetUp() {
  return (
    <div className="rounded-2xl border border-border bg-surface p-8 text-center">
      <p className="font-display text-lg font-semibold">
        Your account isn&rsquo;t set up yet.
      </p>
      <p className="mt-2 text-sm text-muted">
        We couldn&rsquo;t find a client record for your login. Email{" "}
        <a href={`mailto:${CONTACT_EMAIL}`} className="text-clay hover:underline">
          {CONTACT_EMAIL}
        </a>{" "}
        and we&rsquo;ll get it sorted.
      </p>
    </div>
  );
}

export default async function PortalDashboardPage() {
  if (!isSupabaseConfigured()) {
    return <NotConnected />;
  }

  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // Middleware already redirects unauthenticated requests to /portal/login,
  // but guard here too since this page can theoretically render without it.
  if (!user) {
    return <NotConnected />;
  }

  const { data: client } = await supabase
    .from("clients")
    .select("id, business_name")
    .eq("user_id", user.id)
    .maybeSingle();

  if (!client) {
    return <AccountNotSetUp />;
  }

  const { data: sites } = await supabase
    .from("client_sites")
    .select("id")
    .eq("client_id", client.id);

  const siteIds = (sites ?? []).map((s) => s.id);
  const { data: snapshots } = siteIds.length
    ? await supabase
        .from("stat_snapshots")
        .select("id")
        .in("client_site_id", siteIds)
        .limit(1)
    : { data: [] };

  const hasRealData = (snapshots ?? []).length > 0;

  return (
    <div>
      <h1 className="font-display text-2xl font-semibold tracking-tight">
        {client.business_name}
      </h1>
      <p className="mt-1 text-sm text-muted">Your site&rsquo;s stats, at a glance.</p>

      <div className="mt-8">
        {!hasRealData && <SampleDataBanner />}
        <div className="grid gap-6 md:grid-cols-2">
          <div className="md:col-span-2">
            <TrafficChartCard />
          </div>
          <div className="md:col-span-2">
            <KeywordRankingsCard />
          </div>
          <TopPagesCard />
          <GbpInsightsCard />
        </div>
      </div>
    </div>
  );
}
