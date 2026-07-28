# BuildSiteCalc

Bilingual (English / Spanish) home-improvement calculator website for homeowners and contractors.

**EN:** Every measurement, material, and project-cost calculator a homeowner or contractor needs.  
**ES:** Todas las calculadoras de medidas, materiales y costos que necesita para su proyecto.

## Features

- **25 fully functional calculators** across 10 project categories
- **Bilingual UI** with locale-prefixed routes (`/en/...`, `/es/...`)
- **Client-side calculations** — no server dependency, no account required
- US customary + metric units, fractional inputs, waste/contingency factors
- Shareable URL state, print/copy/share, transparent formulas & FAQs
- SEO: sitemap, robots, canonicals, hreflang, structured data
- AdSense / affiliate / analytics hooks (inactive until configured)
- Vitest unit tests + Playwright e2e coverage

## Tech stack

- Next.js App Router (TypeScript strict)
- Tailwind CSS 4
- Zod (available), Vitest, Playwright
- lucide-react icons
- Deploy target: Vercel (or any Node host)

## Getting started

```bash
npm install
cp .env.example .env.local   # optional; ads/analytics off by default
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) (redirects to `/en`).

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Development server |
| `npm run build` | Production build |
| `npm run start` | Serve production build |
| `npm run lint` | ESLint |
| `npm run typecheck` | TypeScript check |
| `npm run format` | Prettier write |
| `npm run test` | Vitest unit tests |
| `npm run test:e2e` | Playwright e2e |
| `npm run qa` | format check + lint + typecheck + unit tests + build |
| `npm run smoke` | Production smoke against BASE_URL (default http://127.0.0.1:3000) |
| `npm run audit:routes` | Crawl public routes against BASE_URL |

## Configuration

Central brand and monetization settings live in **`src/config/site.ts`**.

Environment variables (see `.env.example`):

- `NEXT_PUBLIC_GA_MEASUREMENT_ID` — Google Analytics (inactive when empty)
- `NEXT_PUBLIC_GTM_ID` — Google Tag Manager
- `NEXT_PUBLIC_ADS_ENABLED` — `true` to show ad slots in production
- `NEXT_PUBLIC_ADSENSE_CLIENT_ID` / `NEXT_PUBLIC_ADSENSE_PUBLISHER_ID`
- `NEXT_PUBLIC_AFFILIATES_ENABLED` — sponsored modules

Update `siteConfig.domain`, `contactEmail`, and social profiles before launch.

## Project structure

```
src/
  app/                 # App Router pages, sitemap, robots, ads.txt
  components/          # UI, calculator shell, layout, ads
  config/site.ts       # Brand, domain, ads, analytics IDs
  hooks/               # Calculator URL state
  lib/
    calculators/       # Pure calc engines + registry
    i18n/              # EN/ES dictionaries
    seo.tsx, routes.ts, search.ts, analytics.ts
```

## Calculators (25)

Concrete slab, concrete bags, paint, flooring, tile, drywall, roofing shingles, mulch, gravel, topsoil, fence material, deck boards, stairs, wallpaper, insulation, HVAC BTU, moving truck size, dumpster size, project waste factor, board foot, square footage, room volume, labor markup, material cost, project budget.

## Testing

```bash
npm run test          # unit
npx playwright install chromium   # once
npm run test:e2e      # e2e (starts/reuses dev server)
```

## Deployment (Vercel)

1. Push repo to GitHub/GitLab.
2. Import project in Vercel dashboard (do **not** require Vercel CLI).
3. Set environment variables from `.env.example`.
4. Set production domain and update `src/config/site.ts` `domain`.
5. Deploy. Verify `/sitemap.xml`, `/robots.txt`, `/ads.txt`.
6. After AdSense approval, set ads env vars and update `ads.txt` publisher ID.

## License / disclaimer

Estimates are for planning only. Verify with professionals, local codes, and product manufacturer data. See `/en/disclaimer` and `/en/methodology`.

## More detail

See **[BUILD_REPORT.md](./BUILD_REPORT.md)** for decisions, QA results, limitations, and remaining launch steps.
