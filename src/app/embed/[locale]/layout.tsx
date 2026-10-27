import { notFound } from "next/navigation";
import { isLocale, siteConfig } from "@/config/site";
import { baseMetadata, rootFontVariables } from "@/lib/root-layout-shared";
import type { Metadata } from "next";
import "../../globals.css";

export const metadata: Metadata = baseMetadata;

export function generateStaticParams() {
  return siteConfig.locale.supported.map((locale) => ({ locale }));
}

/** Embedded calculators are independent HTML documents, not nested inside a
 * site-wide navigation root. They must declare the actual document language.
 */
export default async function EmbedRootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return (
    <html lang={locale} className={rootFontVariables}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
