import { NextResponse, type NextRequest } from "next/server";
import { isSupabaseConfigured } from "@/lib/supabase/isConfigured";
import { updateSession } from "@/lib/supabase/middleware";

export async function middleware(request: NextRequest) {
  // Supabase isn't wired up yet (no project created/env vars set) -- let the
  // page itself render the honest "not connected" state instead of ever
  // throwing here.
  if (!isSupabaseConfigured()) {
    return NextResponse.next();
  }
  return updateSession(request);
}

export const config = {
  matcher: ["/portal/:path*"],
};
