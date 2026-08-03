import path from "node:path";
import type { NextConfig } from "next";

const baseSecurityHeaders = [
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
];

const frameDenyHeaders = [
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
];

/**
 * `/embed/*` is the only surface a third-party site may frame, because the
 * embeddable widget is a link-acquisition asset: a host site iframes the
 * calculator and keeps the attribution link back here.
 *
 * The carve-out is deliberately narrow. `X-Frame-Options` has no wildcard
 * value, so allowing any origin means omitting the header entirely and stating
 * the intent through CSP `frame-ancestors` instead, which supersedes
 * `X-Frame-Options` in every browser that supports it. Every other route keeps
 * SAMEORIGIN, so nothing that can carry a session or accept input is
 * clickjackable.
 */
const embedHeaders = [
  {
    key: "Content-Security-Policy",
    value: "frame-ancestors *",
  },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  allowedDevOrigins: ["127.0.0.1", "localhost"],
  // Parent lockfiles (e.g. ~/package-lock.json) can make Turbopack pick the
  // wrong workspace root and break module resolution during `next dev`.
  turbopack: {
    root: path.join(__dirname),
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: baseSecurityHeaders,
      },
      {
        source: "/embed/:path*",
        headers: embedHeaders,
      },
      // Matches everything except /embed, so the frame-blocking header is added
      // back for the rest of the site. Ordering alone would not do it: Next
      // merges matching header rules rather than letting the first one win.
      {
        source: "/((?!embed).*)",
        headers: frameDenyHeaders,
      },
    ];
  },
};

export default nextConfig;
