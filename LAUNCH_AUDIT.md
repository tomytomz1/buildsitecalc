# Launch Audit — BuildSiteCalc

**Date:** 2026-07-28
**Auditor:** Independent launch audit (fresh pass; prior completion claims not trusted)
**Repo:** https://github.com/tomytomz1/buildsitecalc
**Production domain:** https://buildsitecalc.com
**Contact:** hello@buildsitecalc.com

## Launch recommendation: CONDITIONAL GO

Ship to Vercel after human completes DNS/domain wiring, attorney review of legal pages, and a smoke check on production. Core product math, branding, bilingual parity, SEO plumbing, ads-safe defaults, and unit/e2e/build gates are verified green in this audit.

## Executive results

| Gate | Result |
|------|--------|
| Brand (BuildSiteCalc, domain, email) | Fixed and verified |
| npm install / lockfile sync | Pass (lockfile refreshed) |
| Lint | Pass (0 errors) |
| Typecheck | Pass |
| Unit tests | 104 passed |
| E2E | 22 passed |
| Production build | Pass — 99 static pages |
| Route crawl | 97/97 OK (audit/route-audit.json) |
| Visual QA | 39 screenshots (audit/screenshots/) |
| Ads without IDs | Inactive; ads.txt has no fake publisher when unset |
| Analytics without IDs | Inactive |

## Issues found then fixed

1. Brand was "BuildSite Calc" (spaced) across config, i18n, logo, contact, docs → BuildSiteCalc.
2. P0 fence pickets used fence feet for inch lumber sizes (18 vs ~214) → separate inch units.
3. P0 deck boards same unit bug (7 vs 58) → separate inch units.
4. P1 insulation batt length 8 ft vs docs 48 in (55 vs 110) → editable battLength default 48 in.
5. P1 drywall defaults contradicted wall-area example → default area 352 ft2 → 13 sheets.
6. P1 NaN waste/contingency accepted → require finite >= 0.
7. P1 wallpaper default waste 15% vs assumptions 10% → default 10%.
8. Stair worked example used floor division; code uses ceil → examples synced to 16 risers / 6.75 in.
9. Stair/HVAC meta disclaimers not rendered in UI → shown beside results.
10. ads.txt emitted pub-000 placeholder → comment-only until publisher ID set.
11. Search empty option missing aria-selected → fixed.
12. Engine eslint-disable any removed; unused form destructures cleaned.

## Remaining human next actions

1. Vercel dashboard deploy (see VERCEL_DEPLOYMENT.md). Do not invent DNS values.
2. Attorney review of Privacy / Terms / Cookies / Disclaimer.
3. Production smoke after DNS: /en, /es, one calculator, sitemap, robots, ads.txt.
4. Enable GA/GTM/AdSense only after consent + approval.
5. Optional non-blocking: metric paint openings still ft2; stair shares one length unit; Next audit highs deferred; middleware→proxy migration later.
6. Social URLs still empty in siteConfig.social.

## Route / bilingual / SEO

- Crawl total 97 URLs; EN and ES content parity for home, directory, 9 static pages, 10 categories, 25 calculators.
- Canonicals use https://buildsitecalc.com without query params; hreflang en/es/x-default verified in e2e.
- No ProjectCalc / projectcalchub leftovers after brand pass.

## Recommendation rationale

CONDITIONAL GO: in-repo blockers repaired and re-verified; DNS/Vercel attachment and attorney sign-off remain external human gates.