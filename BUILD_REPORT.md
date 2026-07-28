# ProjectCalc Hub — Build Report

**Date:** 2026-07-28  
**Working brand:** ProjectCalc Hub  
**Stack:** Next.js 16 App Router, TypeScript strict, Tailwind CSS 4, Vitest, Playwright  

## Executive summary

Production-ready bilingual (EN/ES) home-improvement calculator site with **25 fully functional client-side calculators**, shared unit/waste/markup engines, SEO (sitemap, robots, hreflang, structured data), policy pages, ad/analytics hooks (inactive by default), and passing unit + e2e suites.

## Decisions & commercial defaults

| Topic | Default | Location |
|-------|---------|----------|
| Domain | `https://projectcalchub.com` | `src/config/site.ts` |
| Contact | `hello@projectcalchub.com` | `src/config/site.ts` |
| Default locale | `/en` (root redirects) | middleware + `siteConfig` |
| Currency display | USD / `en-US` formatting | utils + currency inputs |
| Concrete bag volumes | 40/60/80 lb → 0.30 / 0.45 / 0.60 ft³ | `units.ts` |
| Paint coverage | 350 ft²/gal default | paint calculator |
| Gravel densities | loose 1520 / compacted 1760 / crushed 1600 kg/m³ (disclosed) | `units.ts` + gravel calc |
| Stair guidance | Informational; IRC/code disclaimer in meta | stair calculator |
| HVAC BTU | Rule-of-thumb only; **not Manual J** | hvac-btu calculator |
| Ads / affiliates / GA | Off until env IDs set | `.env.example`, `siteConfig` |
| Social profiles | Empty strings until provided | `siteConfig.social` |

## Architecture

- **Pure calc logic** in `src/lib/calculators/*` (no React)
- **Registry** drives nav, categories, search, sitemap, related links
- **i18n** typed dictionaries `src/lib/i18n/{en,es}.ts`
- **Client widgets** only for interactive calculator sections
- **URL query state** restores inputs; canonicals omit query params
- **Consent + analytics** integration points without loading trackers in empty-config/dev

## Calculators completed (25)

1. Concrete slab  
2. Concrete bags  
3. Paint  
4. Flooring  
5. Tile  
6. Drywall  
7. Roofing shingle  
8. Mulch  
9. Gravel  
10. Topsoil  
11. Fence material  
12. Deck board  
13. Stair  
14. Wallpaper  
15. Insulation  
16. HVAC BTU  
17. Moving truck size  
18. Dumpster size  
19. Project waste factor  
20. Board foot  
21. Square footage  
22. Room volume  
23. Labor markup  
24. Material cost  
25. Project budget  

## QA results (2026-07-28)

| Check | Command | Result |
|-------|---------|--------|
| Unit tests | `npm run test` / `npx vitest run` | **93 passed** / 11 files |
| E2E | `npx playwright test` | **18 passed** |
| Typecheck | `npm run typecheck` | Pass |
| ESLint errors | `npx eslint src --quiet` | Pass (0 errors) |
| Production build | `npm run build` | Pass — **99** static routes generated |
| Dependency audit | `npm audit --omit=dev` | 3 high in Next.js transitive `postcss`/`sharp`; force-fix would downgrade Next — deferred until upstream Next patch |
| Middleware note | Next.js 16 deprecates `middleware` → `proxy` | Documented; still functional |

### Known lint warnings (non-blocking)

- Unused destructured `labels` / helpers in some form branches (`all-forms.tsx`)
- Unused `locale` params in shared form helpers
- `jsx-a11y` option `aria-selected` suggestion on SearchBox options
- Next.js middleware → proxy migration advisory

## Sitemap & SEO sanity

- `/sitemap.xml` — locales × home, calculators, categories, static pages, 25 tools  
- `/robots.txt` — allow all, sitemap pointer  
- `/ads.txt` — placeholder publisher until `NEXT_PUBLIC_ADSENSE_PUBLISHER_ID` set  
- Canonical + `hreflang` en / es / x-default via `buildPageMetadata`  
- JSON-LD: WebSite, Organization, WebApplication, BreadcrumbList, FAQPage, ItemList (no fake Review schema)

## Git status

- Branch: `master`
- Initial release commit created locally
- **No remote configured** — push when ready:

```bash
git remote add origin <your-repo-url>
git push -u origin master
```

Do not force-push. Do not rewrite shared history.
## External items the operator must provide

1. Real production domain + DNS  
2. `contactEmail` confirmation / inbox  
3. Social profile URLs (optional)  
4. Google Analytics / GTM IDs (optional)  
5. AdSense client + publisher IDs after approval  
6. Legal review of Privacy / Terms / Cookies for target jurisdictions  
7. Professional verification of construction formulas for regulated work (stairs, HVAC, structural)

## Remaining deployment steps

1. `git remote add origin <url>` if needed; `git push -u origin main` (or `master`)  
2. Import repo in Vercel (dashboard — no CLI required)  
3. Set env vars from `.env.example`  
4. Update `siteConfig.domain` to the live URL  
5. Deploy production  
6. Verify `/en`, `/es`, `/sitemap.xml`, `/robots.txt`, `/ads.txt`  
7. Submit sitemap in Google Search Console + Bing Webmaster  
8. Enable ads only after AdSense approval + consent UX review  

## Real limitations (professional verification required)

- **Stairs:** Not a building-code compliance tool; local IRC/amendments vary.  
- **HVAC BTU:** Not ACCA Manual J; hire an HVAC professional for equipment sizing.  
- **Concrete / structural:** Mix design, reinforcement, soil, and frost depth require engineer/contractor judgment.  
- **Roofing:** Pitch, valleys, waste, and underlayment vary by product and climate.  
- **Gravel/soil tonnage:** Densities are typical bulk averages; supplier tickets control.  
- **Costs:** Material and labor prices are user-entered estimates, not live market data.  
- **Accessibility:** Aimed at WCAG 2.2 AA; run axe/Lighthouse on staging before launch claims.  
- **Ads CSP:** Headers are CSP-*compatible* for future AdSense; a strict CSP may need allowlists when ads go live.

## File map (key)

- `src/config/site.ts` — brand hub  
- `src/lib/calculators/` — engines + registry  
- `src/lib/i18n/` — EN/ES content  
- `src/app/[locale]/` — all pages  
- `BUILD_REPORT.md` / `README.md` / `.env.example`  
