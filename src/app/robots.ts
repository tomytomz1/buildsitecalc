import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteConfig.domain.replace(/\/$/, "")}/sitemap.xml`,
    // No `host` directive: it is Yandex-only and ignored by Google and Bing.
  };
}
