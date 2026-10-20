import Link from "next/link";
import { getConfiguredSocialLinks, siteConfig, type Locale } from "@/config/site";
import { CookieSettingsButton } from "./CookieSettingsButton";
import { Logo } from "./Logo";
import { cn } from "@/lib/utils";

export type FooterLink = {
  href: string;
  label: string;
};

export type FooterProps = {
  locale: Locale;
  links: {
    about: string;
    methodology: string;
    glossary: string;
    contact: string;
    privacy: string;
    terms: string;
    disclaimer: string;
    accessibility: string;
    cookies: string;
  };
  className?: string;
};

export function Footer({ locale, links, className }: FooterProps) {
  const footerLinks: FooterLink[] = [
    { href: `/${locale}/about`, label: links.about },
    { href: `/${locale}/methodology`, label: links.methodology },
    { href: `/${locale}/glossary`, label: links.glossary },
    { href: `/${locale}/contact`, label: links.contact },
    { href: `/${locale}/privacy`, label: links.privacy },
    { href: `/${locale}/terms`, label: links.terms },
    { href: `/${locale}/disclaimer`, label: links.disclaimer },
    { href: `/${locale}/accessibility`, label: links.accessibility },
    { href: `/${locale}/cookies`, label: links.cookies },
  ];

  const socialLinks = getConfiguredSocialLinks();

  return (
    <footer
      className={cn(
        "mt-auto border-t border-slate-200 bg-slate-900 text-slate-300",
        className,
      )}
    >
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="space-y-3">
            <Logo
              locale={locale}
              className="[&_.text-amber-700]:text-amber-400 [&_.text-slate-600]:text-slate-400 [&_.text-slate-800]:text-white [&_span]:text-white [&_span_span]:text-white"
            />
            <p className="max-w-sm text-sm leading-relaxed text-slate-400">
              {siteConfig.brand.tagline[locale]}
            </p>
            <p className="text-sm">
              <a
                href={`mailto:${siteConfig.contactEmail}`}
                className="text-amber-400 underline-offset-2 hover:underline focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:outline-none"
              >
                {siteConfig.contactEmail}
              </a>
            </p>
            {socialLinks.length > 0 ? (
              <ul className="flex flex-wrap gap-3 pt-1" aria-label="Social media">
                {socialLinks.map((link) => (
                  <li key={link.network}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-slate-400 underline-offset-2 hover:text-amber-300 hover:underline focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:outline-none"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>

          <nav aria-label="Footer">
            <ul className="grid grid-cols-2 gap-x-8 gap-y-2 sm:grid-cols-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 underline-offset-2 hover:text-amber-300 hover:underline focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:outline-none"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <CookieSettingsButton
                  label={locale === "es" ? "Configuración de cookies" : "Cookie settings"}
                />
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-8 border-t border-slate-800 pt-6 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} {siteConfig.legal.companyName}. All rights
            reserved.
          </p>
          <p className="mt-2 text-slate-300">
            Built by{" "}
            <a
              href="https://beltran.digital/"
              target="_blank"
              rel="noopener"
              className="underline underline-offset-4 hover:text-amber-300 focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:outline-none"
            >
              Beltrán Digital
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
