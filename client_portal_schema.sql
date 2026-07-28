-- Even Ground Co. client portal schema.
-- Run this once in a NEW, SEPARATE Supabase project's SQL editor (do not
-- run against the Sequence project -- each site gets its own infra).
--
-- Phase 1: clients, client_sites, and stat_snapshots are the shipped
-- feature (read-only dashboard, sample data until real rows exist).
-- oauth_connections is schema-ready for Phase 2 (real Google API sync)
-- and unused for now.
--
-- Idempotent: safe to re-run.

-- ============================================================
-- 1. clients -- one row per client business, provisioned by staff
--    via the Supabase dashboard (service role) after a deal closes.
--    user_id starts null and is backfilled by handle_new_user_link_client
--    below the first time the client clicks their magic link.
-- ============================================================
create table if not exists public.clients (
  id uuid primary key default gen_random_uuid(),
  user_id uuid unique references auth.users(id) on delete set null,
  contact_email text not null unique,
  business_name text not null,
  tier text,
  status text not null default 'active',
  created_at timestamptz not null default now()
);

-- SECURITY DEFINER so RLS policies below can check "is this row mine?"
-- without a client needing direct visibility into other clients' rows,
-- and without recursive policy lookups on the clients table itself.
create or replace function public.current_client_id()
returns uuid
language sql
security definer
stable
set search_path = public
as $$
  select id from public.clients where user_id = auth.uid()
$$;

-- Links a newly-confirmed auth user to their pre-provisioned clients row
-- by matching email. Runs as the table owner so it can update a row the
-- new user doesn't have UPDATE rights on themselves.
create or replace function public.handle_new_user_link_client()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  update public.clients
  set user_id = new.id
  where contact_email = new.email
    and user_id is null;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created_link_client on auth.users;
create trigger on_auth_user_created_link_client
  after insert on auth.users
  for each row execute function public.handle_new_user_link_client();

alter table public.clients enable row level security;

drop policy if exists "clients read own row" on public.clients;
create policy "clients read own row" on public.clients
  for select using (user_id = auth.uid());

-- ============================================================
-- 2. client_sites -- a client can have multiple sites/locations;
--    stats are always scoped per-site, not per-client.
-- ============================================================
create table if not exists public.client_sites (
  id uuid primary key default gen_random_uuid(),
  client_id uuid not null references public.clients(id) on delete cascade,
  label text not null,
  domain text not null,
  gbp_location_name text,
  created_at timestamptz not null default now()
);

alter table public.client_sites enable row level security;

drop policy if exists "client_sites read own" on public.client_sites;
create policy "client_sites read own" on public.client_sites
  for select using (client_id = public.current_client_id());

-- ============================================================
-- 3. oauth_connections -- Phase 2, unused for now. Will hold live
--    Google OAuth tokens, so RLS is deny-by-default: no policies for
--    anon/authenticated at all, service-role only.
-- ============================================================
create table if not exists public.oauth_connections (
  id uuid primary key default gen_random_uuid(),
  client_site_id uuid not null references public.client_sites(id) on delete cascade,
  provider text not null default 'google',
  access_token text,
  refresh_token text,
  scopes text,
  expires_at timestamptz,
  status text not null default 'disconnected',
  created_at timestamptz not null default now()
);

alter table public.oauth_connections enable row level security;
-- Deliberately no policies -- service role bypasses RLS entirely, and
-- that's the only role that should ever touch this table.

-- ============================================================
-- 4. stat_snapshots -- periodic synced data (Phase 2 cron target).
--    Stays empty in Phase 1: sample data lives only in application
--    code (components/portal/portalContent.ts), never here, so there
--    is no code path where a demo row could be mistaken for real data.
--
--    payload shapes (documented, not enforced):
--    - search_console: { rows: [{ query, clicks, impressions, ctr, position }] }
--    - ga4:            { sessions: [{ date, sessions, users }], topPages: [{ path, sessions }] }
--    - gbp:             { calls, directionRequests, websiteClicks, period }
-- ============================================================
create table if not exists public.stat_snapshots (
  id uuid primary key default gen_random_uuid(),
  client_site_id uuid not null references public.client_sites(id) on delete cascade,
  category text not null check (category in ('search_console', 'ga4', 'gbp')),
  period_start date not null,
  period_end date not null,
  payload jsonb not null,
  synced_at timestamptz,
  created_at timestamptz not null default now(),
  unique (client_site_id, category, period_start, period_end)
);

alter table public.stat_snapshots enable row level security;

drop policy if exists "stat_snapshots read own" on public.stat_snapshots;
create policy "stat_snapshots read own" on public.stat_snapshots
  for select using (
    client_site_id in (
      select id from public.client_sites where client_id = public.current_client_id()
    )
  );
