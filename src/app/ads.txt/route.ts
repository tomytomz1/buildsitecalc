import { siteConfig } from "@/config/site";

export function GET() {
  const publisher = siteConfig.ads.publisherId.trim();
  const lines = [
    `# ads.txt for ${siteConfig.brand.name}`,
    `# Set NEXT_PUBLIC_ADSENSE_PUBLISHER_ID before enabling ads.`,
  ];

  if (publisher) {
    lines.push(`google.com, ${publisher}, DIRECT, f08c47fec0942fa0`);
  } else {
    lines.push(
      `# No publisher ID configured — ads are inactive. This file intentionally has no ad system records.`,
    );
  }

  const body = `${lines.join("\n")}\n`;
  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400",
    },
  });
}
