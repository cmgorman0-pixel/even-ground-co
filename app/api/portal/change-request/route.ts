import { NextResponse } from "next/server";
import { isSupabaseConfigured } from "@/lib/supabase/isConfigured";
import { createClient } from "@/lib/supabase/server";
import { rateLimit } from "@/lib/rateLimit";
import { CONTACT_EMAIL } from "@/lib/site";

const escHtml = (s: string) =>
  s.replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[
      c
    ] as string)
  );

export async function POST(req: Request) {
  if (!isSupabaseConfigured()) {
    return NextResponse.json({ skipped: true });
  }

  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) {
    return NextResponse.json({ error: "Not signed in" }, { status: 401 });
  }

  const { allowed } = rateLimit(`change-request:user:${user.id}`, {
    max: 10,
    windowMs: 60 * 60 * 1000,
  });
  if (!allowed) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }
  const message = String(body.message || "").trim().slice(0, 2000);
  if (!message) {
    return NextResponse.json({ error: "Message is required" }, { status: 400 });
  }

  const { data: client } = await supabase
    .from("clients")
    .select("id, business_name")
    .eq("user_id", user.id)
    .maybeSingle();
  if (!client) {
    return NextResponse.json({ error: "No client account found" }, { status: 404 });
  }

  // RLS enforces client_id = current_client_id() -- this insert can only
  // ever write a row owned by the signed-in user, regardless of what
  // client_id the request body claims.
  const { error: insertError } = await supabase
    .from("change_requests")
    .insert({ client_id: client.id, message });
  if (insertError) {
    return NextResponse.json({ error: "Could not save your request" }, { status: 500 });
  }

  // Staff notification is best-effort -- the request is already saved in
  // the database, which is the source of truth. A missing/failed email
  // just means slower staff pickup, not a broken client-facing promise.
  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.RESEND_FROM_EMAIL;
  if (apiKey && fromEmail) {
    const html = `<!DOCTYPE html>
<html>
<head><meta charset="utf-8" /></head>
<body style="margin:0;padding:0;background:#F6F1E7;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
  <div style="max-width:520px;margin:32px auto;background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">
    <div style="background:#211C17;padding:20px 28px;">
      <div style="font-size:16px;font-weight:700;color:#F6F1E7;">Tally</div>
      <div style="font-size:11px;color:rgba(246,241,231,0.6);text-transform:uppercase;letter-spacing:1px;margin-top:2px;">New change request</div>
    </div>
    <div style="padding:24px 28px;font-size:14px;color:#211C17;">
      <p><strong>Client:</strong> ${escHtml(client.business_name)}</p>
      <p style="margin-top:16px;white-space:pre-line;">${escHtml(message)}</p>
    </div>
  </div>
</body>
</html>`;
    try {
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          from: fromEmail,
          to: [CONTACT_EMAIL],
          subject: `Tally change request from ${client.business_name}`,
          html,
        }),
      }).catch(() => {});
    } catch {
      // Best-effort, see comment above.
    }
  }

  return NextResponse.json({ sent: true });
}
