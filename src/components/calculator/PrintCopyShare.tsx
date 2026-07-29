"use client";

import { useCallback, useState } from "react";
import { Check, Copy, Link2, Printer, Share2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export type PrintCopyShareProps = {
  getShareText: () => string;
  getShareUrl: () => string;
  labels?: {
    print?: string;
    copyResults?: string;
    copyLink?: string;
    share?: string;
    copied?: string;
    shareFailed?: string;
  };
  className?: string;
};

export function PrintCopyShare({
  getShareText,
  getShareUrl,
  labels = {},
  className,
}: PrintCopyShareProps) {
  const {
    print: printLabel = "Print",
    copyResults: copyResultsLabel = "Copy results",
    copyLink: copyLinkLabel = "Copy link",
    share: shareLabel = "Share",
    copied: copiedLabel = "Copied!",
    shareFailed: shareFailedLabel = "Could not share",
  } = labels;

  const [copiedAction, setCopiedAction] = useState<"results" | "link" | null>(null);
  const [shareError, setShareError] = useState(false);

  const flashCopied = useCallback((action: "results" | "link") => {
    setCopiedAction(action);
    window.setTimeout(() => setCopiedAction(null), 2000);
  }, []);

  const copyToClipboard = useCallback(async (text: string) => {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
      return;
    }

    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "absolute";
    textarea.style.left = "-9999px";
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
  }, []);

  const handlePrint = useCallback(() => {
    window.print();
  }, []);

  const handleCopyResults = useCallback(async () => {
    try {
      await copyToClipboard(getShareText());
      flashCopied("results");
    } catch {
      setShareError(true);
    }
  }, [copyToClipboard, flashCopied, getShareText]);

  const handleCopyLink = useCallback(async () => {
    try {
      await copyToClipboard(getShareUrl());
      flashCopied("link");
    } catch {
      setShareError(true);
    }
  }, [copyToClipboard, flashCopied, getShareUrl]);

  const handleShare = useCallback(async () => {
    setShareError(false);
    const text = getShareText();
    const url = getShareUrl();

    if (navigator.share) {
      try {
        await navigator.share({ title: document.title, text, url });
        return;
      } catch (error) {
        if (error instanceof DOMException && error.name === "AbortError") {
          return;
        }
      }
    }

    try {
      await copyToClipboard(`${text}\n\n${url}`);
      flashCopied("results");
    } catch {
      setShareError(true);
    }
  }, [copyToClipboard, flashCopied, getShareText, getShareUrl]);

  return (
    <div
      className={cn("flex flex-wrap items-center gap-2 print:hidden", className)}
      role="group"
      aria-label="Share and export results"
    >
      <Button type="button" variant="outline" size="sm" onClick={handlePrint}>
        <Printer className="h-4 w-4" aria-hidden="true" />
        {printLabel}
      </Button>

      <Button
        type="button"
        variant="outline"
        size="sm"
        onClick={handleCopyResults}
        aria-live="polite"
      >
        {copiedAction === "results" ? (
          <Check className="h-4 w-4 text-green-600" aria-hidden="true" />
        ) : (
          <Copy className="h-4 w-4" aria-hidden="true" />
        )}
        {copiedAction === "results" ? copiedLabel : copyResultsLabel}
      </Button>

      <Button type="button" variant="outline" size="sm" onClick={handleCopyLink}>
        {copiedAction === "link" ? (
          <Check className="h-4 w-4 text-green-600" aria-hidden="true" />
        ) : (
          <Link2 className="h-4 w-4" aria-hidden="true" />
        )}
        {copiedAction === "link" ? copiedLabel : copyLinkLabel}
      </Button>

      <Button type="button" variant="secondary" size="sm" onClick={handleShare}>
        <Share2 className="h-4 w-4" aria-hidden="true" />
        {shareLabel}
      </Button>

      {shareError ? (
        <p className="w-full text-sm text-red-700" role="alert">
          {shareFailedLabel}
        </p>
      ) : null}
    </div>
  );
}
