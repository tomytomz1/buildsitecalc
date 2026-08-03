# Measurement loop: day 30, 60, 90

The point of this document is to make the checkpoints mechanical. A young domain
produces months of ambiguous data, and ambiguous data is where plans go to die
quietly — you keep publishing because nothing has definitively failed. So the
comparison is a script with a fixed threshold, and the day-60 decision has an
exit code.

## The baseline

`docs/seo/metrics/baseline.json`, captured 2026-08-03 from the 28-day export:

| Metric                  | Baseline | Why it is here                                                          |
| ----------------------- | -------- | ----------------------------------------------------------------------- |
| Impressions             | 387      | Moves first. Google finding pages precedes Google ranking them.         |
| Unique queries          | 216      | Breadth of matching. Grows when new content matches new phrasings.      |
| Money-page avg position | 71.81    | Impression-weighted over the 8 money pages, both locales.               |
| Pages with impressions  | 34       | Indexation reach. 34 of ~60 indexable URLs surfaced at all.             |
| Clicks                  | 1        | Reported, never used as a gate before day 90. It was branded, on `/en`. |

Two things about that table matter more than the numbers.

The 387 comes from the **Devices** sheet, not the Queries sheet. The Queries
sheet sums to 272 because Google withholds low-volume queries; 115 impressions
(30%) are anonymized. If you eyeball the Queries tab and see the total go up,
that may be Google revealing more queries rather than the site earning more
impressions. The script always reads the device total, so the comparison is
apples to apples.

Money-page position is **impression-weighted**, not a simple mean. An unweighted
mean lets a page with 2 impressions at position 12 mask five pages stuck at 80.
Weighting means the number can only improve if the pages people actually see
improve.

## What to re-export

Same export, same settings, every time. Changing the date range or adding a
filter invalidates the comparison.

1. Search Console → Performance → **Search results**
2. Date: **Last 28 days**. Not 3 months, not a custom range.
3. Search type: **Web**. No country or device filter.
4. Export → Download XLSX
5. Separately: Indexing → **Pages** → export, and record indexed vs not-indexed
   in the table at the bottom of this file. The script does not read this one;
   Google does not include it in the performance export.

## Running the comparison

```bash
# Day 30
npm run gsc:track -- "<path-to-export>.xlsx" --label day-30 --out docs/seo/metrics/day-30.json --against docs/seo/metrics/baseline.json

# Day 60 — --gate makes the kill criterion exit non-zero
npm run gsc:track -- "<path-to-export>.xlsx" --label day-60 --out docs/seo/metrics/day-60.json --against docs/seo/metrics/baseline.json --gate day-60

# Day 90 — compare against both baseline and day 60
npm run gsc:track -- "<path>.xlsx" --label day-90 --out docs/seo/metrics/day-90.json --against docs/seo/metrics/baseline.json
npm run gsc:track -- "<path>.xlsx" --label day-90 --against docs/seo/metrics/day-60.json
```

Also re-run the clustering so you can see which queries moved:

```bash
npm run gsc:cluster -- "<path>.xlsx" --out docs/seo/metrics/day-30-clusters.json
```

## Thresholds

### Day 30 — is anything happening at all

Expect movement in crawling and impressions only. Rankings do not respond to
content in four weeks on a domain with no links.

| Signal                 | Working                              | Concerning                                   |
| ---------------------- | ------------------------------------ | -------------------------------------------- |
| Impressions            | 500+ (30% over baseline)             | Flat or below 387                            |
| Unique queries         | 260+                                 | Still ~216 — new content is matching nothing |
| Pages with impressions | 40+ (workflow hubs surfacing at all) | Still 34 — the 4 new hubs are not indexed    |
| Money-page position    | Any improvement, even 2-3 places     | Worse by 5+                                  |
| Clicks                 | Ignore                               | Ignore                                       |

If pages-with-impressions has not moved, the problem is indexation, not content:
check the Pages indexing report for the `/projects/*` URLs specifically and
request indexing manually.

### Day 60 — the kill criterion

The rule from the plan, enforced by `--gate day-60`:

> If impressions have **not** doubled (387 → 774) **and** money-page average
> position has **not** improved by 15+ places (71.81 → 56.81 or better), stop
> publishing and move 80% of effort to authority.

Either one passing is enough to continue. Both failing means content is not the
binding constraint — links are — and more content will not change that. The
script exits 2 in that case so you cannot accidentally read past it.

What "move 80% to authority" concretely means: stop writing QuickAnswers and new
workflow hubs, and spend the time on the outreach list in
`docs/seo/authority-prospects.md` — 25 sends/week instead of 10, plus the
directory submissions and HARO monitoring.

### Day 90 — does the funnel exist

| Signal              | Working                 | Kill                                       |
| ------------------- | ----------------------- | ------------------------------------------ |
| Non-branded clicks  | 1+                      | 0 with position still 60+                  |
| Money-page position | Under 50                | Still 65+                                  |
| Queries in top 20   | 5+                      | 0                                          |
| Referring domains   | 5+ (the authority goal) | 0-1 — outreach approach is wrong, not slow |
| Spanish pages       | Holding under 15        | Drifted past 30                            |

A single non-branded click at day 90 is a real result for a domain this age. The
honest failure mode to watch for is the opposite one: impressions tripling while
position stays at 70, which means Google is showing the pages for queries they
cannot compete on. That is a links problem wearing a content costume.

## The queries that are not the test

These stay unwinnable inside 90 days regardless of what the numbers say, so do
not read their positions as a signal:

- `mulch calculator`, `paint calculator`, `concrete calculator` and other bare
  head terms. Home Depot, Lowe's and Omni own these. Position 60 → 45 on these
  is noise.
- `hvac btu` queries. 84 impressions, the site's largest cluster, at position
  75 — and the SERP is dominated by manufacturer sizing tools with decades of
  authority. The page is fine; the competition is unbeatable this year.

The test is the long-tail set the QuickAnswers target: gallons-to-coverage,
steps-for-a-given-rise, mulch-bags-to-yards, and the Spanish equivalents. Watch
those specifically in the day-30 cluster re-run.

## Log

Fill this in at each checkpoint. Indexed/not-indexed come from the Pages
indexing report, which the script cannot read.

| Date       | Label    | Impressions | Queries | Money pos | Pages w/ impr | Clicks | Indexed | Not indexed | Referring domains |
| ---------- | -------- | ----------- | ------- | --------- | ------------- | ------ | ------- | ----------- | ----------------- |
| 2026-08-03 | baseline | 387         | 216     | 71.81     | 34            | 1      |         |             | 0                 |
|            | day-30   |             |         |           |               |        |         |             |                   |
|            | day-60   |             |         |           |               |        |         |             |                   |
|            | day-90   |             |         |           |               |        |         |             |                   |
