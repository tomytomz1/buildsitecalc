# Google search-visibility incident audit (October 16, 2026)

## Verified timeline and boundaries

Source: Google Search Console Web search performance accessed through the
connected Windsor.ai `searchconsole` connector, `sc-domain:buildsitecalc.com`,
with screenshot-confirmed URL Inspection and Page indexing reports.

- July 30–August 15: **1,996 impressions in 17 days** (117.4/day).
- August 16: 39 impressions, down from 161 on August 15.
- August 17: 6 impressions.
- August 20–October 13: **26 impressions in 55 days** (0.47/day).
- The August 16–17 break is real, sustained and visible across both devices
  and multiple countries. There were no site deployments between August 3
  and October 13 according to production Vercel deployment history.
- The Spanish square-footage page had 884 impressions before August 16
  and 7 after August 20; this page accounts for a disproportionate share
  of the original Google visibility.
- Google Page indexing report (last updated Oct 11): 92 indexed pages,
  16 excluded URLs across three unexamined reasons. The overall indexed
  count stayed roughly flat during the traffic decline.
- Manual Actions and Security Issues reports both say "No issues detected."
- The Spanish square-footage calculator's Search Console URL Inspection:
  **on Google**, last crawled by Googlebot smartphone Sep 19, page fetch
  successful, crawling and indexing allowed, user-declared and Google-selected
  canonicals both the inspected URL. It appears in the sitemap.
- Production robots allows crawling; canonical and index/follow checks for the
  four affected calculators succeed on currently served pages.
- Google's Oct 8 retrieval of the sitemap, per Windsor.ai, had no errors;
  its `indexed` metric is deprecated, so DO NOT interpret its zero as zero
  indexed pages. Search Console's direct indexing report is authoritative.

**Conclusion:** No evidence of mass deindexing, manual action, sitewide
robots/noindex accident or a deployment at the initial break. The primary
symptom is a severe loss of *search exposure by otherwise indexed pages*.
Neither a specific spam signal nor an algorithmic penalty is proven.

## Competitor review (public search results, October 16)

- Spanish square-footage query: [Omni Calculator](https://www.omnicalculator.com/es/construccion/calculadora-pies-cuadrados)
  offers immediate width/length/area and unit conversion;
  [Square Foot Calculator](https://squarefootcalculators.com/es/for-room/)
  offers room presets but itself has untranslated English choices.
- Flooring: [Omni Calculator](https://www.omnicalculator.com/es/construccion/calculadora-pisos)
  gives dimensions, waste, and price in a compact form.
- Roofing: [Shiftflow](https://www.shiftflow.app/es/free-tools/free-roof-shingle-calculator)
  covers packs, roofing area and waste plus optional fasteners and labor.
- BuildSiteCalc already has functional calculations, worked examples,
  formula disclosure, reference links and substantial unique Spanish copy.
  Replacing the prose, publishing near-duplicate keyword pages or changing
  canonicals without new evidence is **not justified**.

## Specific quality defect fixed by this branch

A key audit found seven shared form keys without translated labels in BOTH
language dictionaries: `amount`, `dimensions`, `itemName`,
`materialName`, `roomName`, `unitCost`, `wallLength`. With no localized
fallback, the HTML form prints raw internal keys such as `roomName`.
Furthermore the square-footage engine's default room name is `Room 1`
and the UI exposed that English value and a redundant
`Habitación 1: Room 1` legend.

Fix: add seven explicit EN/ES labels and localize only **automatically
generated** room names at presentation time. Do not mutate engine defaults,
URLs or user-supplied names. Add server-rendered HTML and label tests.

These are verified UX fixes, **not a claim of Google ranking recovery**.
Google has not identified a specific ranking system or penalty here.

## Next evidence-based investigation

1. Download Search Console Performance for separate English and Spanish
   page groups using comparable pre- and post-break periods, preserving
   page-level query and country information. Windsor reports very sparse
   query detail after August 16 due to anonymized low-volume queries.
2. In Search Console Pages → Not indexed, capture the **three exact reasons**
   and inspect any sitemap URL in those exclusions to distinguish normal
   redirects/duplicates from actual important-page exclusions.
3. Compare Googlebot crawl logs with Aug 16–21 response codes, if historical
   Vercel/edge access logs exist. A present-day HTTP 200 cannot establish
   a historical HTTP 200.
4. Ask a Spanish-speaking editor to review calculator controls and instructions
   in four priority tools (square footage, flooring, shingles, painting).
   Check mobile load, translations, numeric formatting and real use cases.
5. Build backlinks through genuine editorial citations rather than mass
   directory or link purchases. Use the existing authority prospect tracker.
6. Observe **28-day** Search Console impressions and CTR for the affected
   pages after fixes. Do not claim recovery from a one-day spike.

No broad automatic reindex request or content purge has been performed.
