# Google visibility recovery baseline — 2026-10-27

## New verified Search Console comparison

Property: `sc-domain:buildsitecalc.com` through Windsor.ai, Web Search, page-level data.

| Metric | Jul 31–Aug 15 | Aug 17–Sep 1 |
| --- | ---: | ---: |
| Total page impressions | 1,983 | 28 |
| Pages receiving impressions | 52 | 4 |
| Google clicks | 3 | 0 |

October 1–23: 9 page impressions across 6 URLs and no clicks. Query-level sums cannot equal page-level totals because many low-volume queries are anonymized.

Largest pre-break pages:
- `/es/calculators/pies-cuadrados`: 884 impressions, avg position 10.64; post-break 24 impressions at avg position 1.79 (a sparse, different query mix: **do not** compare those average positions as a ranking improvement).
- `/es/calculators/pisos`: 130 impressions; post-break 0.
- `/es/calculators/tejas-asfalticas`: 126 impressions; post-break 0.
- `/en/calculators/hvac-btu`: 112 impressions; pre-break average position 71.9.
- `/es/calculators/pintura`: 67 impressions; post-break 0.

## Already-verified incident checks (Oct 16 investigation)

See `docs/seo/google-visibility-audit-2026-10-16.md`:
- Search Console Manual Actions: **No issues detected**.
- Search Console Security Issues: **No issues detected**.
- Indexed URLs: 92 (Oct 11 report), 16 excluded across three reasons requiring detailed review.
- Spanish square-footage URL Inspection: indexed, Googlebot fetched, Google-selected canonical matches user canonical.
- No production deployment during the initial Aug 16–17 collapse.
- Robots and sitemap valid. No sitewide robots/noindex or canonical accident established.

This supports a Google *search exposure* problem more strongly than sitewide technical deindexing.

## Ahrefs backlink review (Oct 25/27)

- 548 live referring domains, 1,066 live backlinks, DR 0.
- Top 100 high-DR referring domains: 99 flagged spam; all 100 were nofollow.
- Exactly four spam-flagged dofollow referring domains in filtered Ahrefs domain data. First seen Sep 16 or later, after the Aug 16 Google break.
- This appears to be an unsolicited automated link network also targeting Statement Reconcile, but there is no demonstrated Google penalty and it should **not** be bulk-disavowed.

## Distinct accessibility/localization issue to fix separately

Current root `src/app/layout.tsx` emits `<html lang="en">` for all server-rendered pages; `src/components/layout/HtmlLang.tsx` changes language to `es` via client `useEffect` after hydration. For Spanish URLs the original server HTML has an inaccurate lang attribute. This is an accessibility/HTML correctness defect, not a demonstrated ranking cause: Google says it detects page language from visible content, not the HTML lang attribute.

Suggested proper fix: route-group root-layout restructuring so the `/[locale]` segment is the root layout and renders `<html lang={locale}>` on the server, preserving locale-specific static generation and leaving `/robots.txt`, `/sitemap.xml`, API and embed routes working. Requires full `next build`, route checks, localization tests before merging. **Do not make a dynamic root layout just to read request headers**, or ship an untested structure change.

## Recovery actions ordered by evidence

1. Compare 16 excluded GSC URLs with 104 sitemap URLs; do not extrapolate indexed counts from sitemap API deprecated fields.
2. Verify the four priority Spanish URLs with URL Inspection and live fetch, focusing on selected canonical and mobile fetch.
3. Fix the server `<html lang>` defect on an isolated, fully tested feature branch; no claim it fixes Google rankings.
4. Improve genuinely user-serving calculator functionality, mobile controls, examples and research-backed citations before adding URLs. Spanish square footage and flooring first.
5. Seek legitimate editorial citation opportunities from contractor and trade resources, not paid link networks or disavows.
6. 28-day tracking of impressions and clicks split by `/es/` and `/en/`, indexed URL counts, and calculator usage. A temporary one-day boost does not establish recovery.

Do not replace the site's unique calculator prose, change self canonicals, rewrite URLs, or mass-submit index requests without a proven defect.

Google's drop diagnosis: https://developers.google.com/search/docs/monitor-debug/debugging-search-traffic-drops
Google's language detection: https://developers.google.com/search/docs/specialty/international/managing-multi-regional-sites
