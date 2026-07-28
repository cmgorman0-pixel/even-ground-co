import { NextResponse } from "next/server";
import { rateLimit, clientIp } from "@/lib/rateLimit";
import { CONTACT_EMAIL } from "@/lib/site";
import { INTEREST_OPTIONS } from "@/lib/contactOptions";

const escHtml = (s: string) =>
  s.replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[
      c
    ] as string)
  );

const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

export async function POST(req: Request) {
  const { allowed, retryAfterMs } = rateLimit(`contact:ip:${clientIp(req)}`, {
    max: 5,
    windowMs: 10 * 60 * 1000,
  });
  if (!allowed) {
    return NextResponse.json(
      { error: "Too many requests" },
      { status: 429, headers: { "Retry-After": String(Math.ceil(retryAfterMs / 1000)) } }
    );
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  // Honeypot: real visitors never see or fill this field (hidden off-screen
  // in ContactForm.tsx). A non-empty value is a bot. Respond as if the
  // message was sent -- don't tip the bot off that it was caught.
  if (String(body.website || "").trim()) {
    return NextResponse.json({ sent: true });
  }

  const name = String(body.name || "").trim().slice(0, 200);
  const email = String(body.email || "").trim().slice(0, 200);
  const business = String(body.business || "").trim().slice(0, 200);
  const interestRaw = String(body.interest || "").trim();
  const interest = (INTEREST_OPTIONS as readonly string[]).includes(interestRaw)
    ? interestRaw
    : "";
  const message = String(body.message || "").trim().slice(0, 2000);

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email, and message are required" },
      { status: 400 }
    );
  }
  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.RESEND_FROM_EMAIL;
  if (!apiKey || !fromEmail) {
    // Distinct from both success and error: the client checks `skipped`
    // specifically and shows an honest "email a message directly" fallback
    // instead of a false "message sent" confirmation.
    return NextResponse.json({ skipped: true });
  }

  const html = `<!DOCTYPE html>
<html>
<head><meta charset="utf-8" /></head>
<body style="margin:0;padding:0;background:#F6F1E7;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
  <div style="max-width:520px;margin:32px auto;background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">
    <div style="background:#211C17;padding:20px 28px;">
      <div style="font-size:16px;font-weight:700;color:#F6F1E7;">Even Ground Co.</div>
      <div style="font-size:11px;color:rgba(246,241,231,0.6);text-transform:uppercase;letter-spacing:1px;margin-top:2px;">New contact form submission</div>
    </div>
    <div style="padding:24px 28px;font-size:14px;color:#211C17;">
      <p><strong>Name:</strong> ${escHtml(name)}</p>
      <p><strong>Email:</strong> ${escHtml(email)}</p>
      ${business ? `<p><strong>Business:</strong> ${escHtml(business)}</p>` : ""}
      ${interest ? `<p><strong>Looking to:</strong> ${escHtml(interest)}</p>` : ""}
      <p style="margin-top:16px;white-space:pre-line;">${escHtml(message)}</p>
    </div>
  </div>
</body>
</html>`;

  try {
    const r = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [CONTACT_EMAIL],
        reply_to: email,
        subject: `New inquiry from ${name}`,
        html,
      }),
    });
    if (!r.ok) {
      return NextResponse.json({ error: "Delivery failed" }, { status: 502 });
    }
    return NextResponse.json({ sent: true });
  } catch {
    return NextResponse.json({ error: "Delivery failed" }, { status: 500 });
  }
}
