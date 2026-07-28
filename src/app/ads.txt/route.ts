import { siteConfig } from "@/config/site";

export function GET() {
  const publisher =
    siteConfig.ads.publisherId || "pub-0000000000000000";
  const body = `# ads.txt for ${siteConfig.brand.name}
# Replace publisher ID via NEXT_PUBLIC_ADSENSE_PUBLISHER_ID before going live with ads.
google.com, ${publisher}, DIRECT, f08c47fec0942fa0
`;
  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400",
    },
  });
}
