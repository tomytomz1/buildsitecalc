"use client";

import { useSyncExternalStore } from "react";
import Link from "next/link";
import { Clock } from "lucide-react";
import { cn } from "@/lib/utils";

const STORAGE_KEY = "pch-recent";
const MAX_ITEMS = 5;
const EMPTY_RECENT: RecentCalculator[] = [];
let cachedSnapshot: RecentCalculator[] = EMPTY_RECENT;
let cachedRaw: string | null = null;

export type RecentCalculator = {
  id: string;
  title: string;
  href: string;
};

export type RecentlyViewedProps = {
  title?: string;
  className?: string;
};

export function readRecentCalculators(): RecentCalculator[] {
  if (typeof window === "undefined") return EMPTY_RECENT;

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (raw === cachedRaw) return cachedSnapshot;
    cachedRaw = raw;
    if (!raw) {
      cachedSnapshot = EMPTY_RECENT;
      return cachedSnapshot;
    }
    const parsed = JSON.parse(raw) as RecentCalculator[];
    cachedSnapshot = Array.isArray(parsed) ? parsed.slice(0, MAX_ITEMS) : EMPTY_RECENT;
    return cachedSnapshot;
  } catch {
    cachedRaw = null;
    cachedSnapshot = EMPTY_RECENT;
    return EMPTY_RECENT;
  }
}

export function recordRecentCalculator(item: RecentCalculator): void {
  if (typeof window === "undefined") return;

  try {
    const existing = readRecentCalculators().filter((entry) => entry.id !== item.id);
    const next = [item, ...existing].slice(0, MAX_ITEMS);
    const raw = JSON.stringify(next);
    window.localStorage.setItem(STORAGE_KEY, raw);
    cachedRaw = raw;
    cachedSnapshot = next;
    window.dispatchEvent(new Event("pch-recent-change"));
  } catch {
    // Ignore quota / privacy errors
  }
}

function subscribeRecent(onStoreChange: () => void): () => void {
  window.addEventListener("storage", onStoreChange);
  window.addEventListener("pch-recent-change", onStoreChange);
  return () => {
    window.removeEventListener("storage", onStoreChange);
    window.removeEventListener("pch-recent-change", onStoreChange);
  };
}

function getRecentSnapshot(): RecentCalculator[] {
  return readRecentCalculators();
}

function getServerRecentSnapshot(): RecentCalculator[] {
  return EMPTY_RECENT;
}

export function RecentlyViewed({
  title = "Recently viewed",
  className,
}: RecentlyViewedProps) {
  const items = useSyncExternalStore(
    subscribeRecent,
    getRecentSnapshot,
    getServerRecentSnapshot,
  );

  if (items.length === 0) return null;

  return (
    <nav
      aria-label={title}
      className={cn(
        "rounded-lg border border-slate-200 bg-white p-4 shadow-sm",
        className,
      )}
    >
      <h2 className="mb-3 flex items-center gap-2 text-sm font-semibold text-slate-900">
        <Clock className="h-4 w-4 text-amber-600" aria-hidden="true" />
        {title}
      </h2>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item.id}>
            <Link
              href={item.href}
              className="block truncate text-sm text-slate-700 underline-offset-2 hover:text-amber-800 hover:underline focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:outline-none"
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
