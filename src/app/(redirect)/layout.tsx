import type { Metadata } from "next";
import { baseMetadata, rootFontVariables } from "@/lib/root-layout-shared";
import "../globals.css";

export const metadata: Metadata = baseMetadata;

/** The bare-root redirect still has an independent root document. */
export default function RedirectRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={rootFontVariables}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
