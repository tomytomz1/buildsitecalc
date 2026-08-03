"use client";

import { useCallback, useState } from "react";
import { Check, Copy } from "lucide-react";
import { Button } from "@/components/ui/Button";

export type EmbedSnippetLabels = {
  heading: string;
  description: string;
  copy: string;
  copied: string;
  failed: string;
};

/**
 * The copy-paste iframe snippet.
 *
 * This is the site's main non-outreach link acquisition path: a blog or trade
 * site that wants a working calculator can have one, and the markup it pastes
 * carries a followed link back here. The visible `<p>` fallback link outside the
 * iframe matters — an iframe alone passes no link equity, so without it the
 * embed would cost bandwidth and return nothing.
 */
export function EmbedSnippet({
  embedUrl,
  pageUrl,
  title,
  labels,
}: {
  embedUrl: string;
  pageUrl: string;
  title: string;
  labels: EmbedSnippetLabels;
}) {
  const [copied, setCopied] = useState(false);
  const [failed, setFailed] = useState(false);

  const snippet = [
    `<iframe src="${embedUrl}" width="100%" height="720" style="border:1px solid #e2e8f0;border-radius:8px" loading="lazy" title="${title}"></iframe>`,
    `<p><a href="${pageUrl}" target="_blank" rel="noopener">${title}</a></p>`,
  ].join("\n");

  const handleCopy = useCallback(async () => {
    setFailed(false);
    try {
      await navigator.clipboard.writeText(snippet);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setFailed(true);
    }
  }, [snippet]);

  return (
    <section className="no-print space-y-3">
      <h2 className="text-lg font-semibold text-slate-900">{labels.heading}</h2>
      <p className="text-sm leading-relaxed text-slate-700">{labels.description}</p>

      <div className="overflow-x-auto rounded-lg border border-slate-200 bg-slate-50 p-3">
        <pre className="text-xs leading-relaxed text-slate-800">
          <code>{snippet}</code>
        </pre>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <Button type="button" variant="outline" size="sm" onClick={handleCopy}>
          {copied ? (
            <Check className="h-4 w-4 text-green-600" aria-hidden="true" />
          ) : (
            <Copy className="h-4 w-4" aria-hidden="true" />
          )}
          {copied ? labels.copied : labels.copy}
        </Button>
        {failed ? (
          <p className="text-sm text-red-700" role="alert">
            {labels.failed}
          </p>
        ) : null}
      </div>
    </section>
  );
}
