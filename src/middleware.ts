import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const LOCALES = ["en", "es"] as const;

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".") ||
    pathname.startsWith("/ads.txt") ||
    // Embed URLs live on third-party pages and carry their locale in the path
    // already. A redirect here would break every existing embed, so this route
    // is exempt from locale normalization.
    pathname.startsWith("/embed")
  ) {
    return NextResponse.next();
  }

  // 308, not the default 307: these locale redirects are permanent, and a
  // temporary status tells Google to keep the un-prefixed URL as the canonical
  // candidate and re-crawl it indefinitely.
  if (pathname === "/") {
    const url = request.nextUrl.clone();
    url.pathname = "/en";
    return NextResponse.redirect(url, 308);
  }

  const segment = pathname.split("/")[1];
  if (!LOCALES.includes(segment as (typeof LOCALES)[number])) {
    const url = request.nextUrl.clone();
    url.pathname = `/en${pathname}`;
    return NextResponse.redirect(url, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
