"use client";

/**
 * Saved estimates: browser storage.
 *
 * Mirrors the `RecentlyViewed` store deliberately - one `localStorage` key, a
 * custom event so components in the same tab re-render, and a module-level cache
 * so `useSyncExternalStore` gets a referentially stable snapshot. No auth, no
 * backend, nothing leaves the device.
 *
 * The key is versioned: a future shape change ships under `-v2` and simply
 * ignores the old data rather than attempting a migration nobody can test.
 */

import { useSyncExternalStore } from "react";
import {
  createEstimate,
  parseEstimates,
  removeEstimate,
  serializeEstimates,
  upsertEstimate,
  type SavedEstimate,
  type SavedEstimateInput,
} from "./model";

const STORAGE_KEY = "bsc-estimates-v1";
const CHANGE_EVENT = "bsc-estimates-change";
const EMPTY: SavedEstimate[] = [];

let cachedRaw: string | null = null;
let cachedSnapshot: SavedEstimate[] = EMPTY;

export function readSavedEstimates(): SavedEstimate[] {
  if (typeof window === "undefined") return EMPTY;

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (raw === cachedRaw) return cachedSnapshot;
    cachedRaw = raw;
    cachedSnapshot = parseEstimates(raw);
    return cachedSnapshot;
  } catch {
    cachedRaw = null;
    cachedSnapshot = EMPTY;
    return EMPTY;
  }
}

function write(list: SavedEstimate[]): void {
  const raw = serializeEstimates(list);
  window.localStorage.setItem(STORAGE_KEY, raw);
  cachedRaw = raw;
  cachedSnapshot = list;
  window.dispatchEvent(new Event(CHANGE_EVENT));
}

/** Returns the stored estimate, or null when the input or storage was unusable. */
export function saveEstimate(input: SavedEstimateInput): SavedEstimate | null {
  if (typeof window === "undefined") return null;

  const estimate = createEstimate(input);
  if (!estimate) return null;

  try {
    write(upsertEstimate(readSavedEstimates(), estimate));
    return estimate;
  } catch {
    // Quota exceeded or storage blocked by privacy settings. Saving is a
    // convenience, so failing silently is better than an error dialog.
    return null;
  }
}

export function deleteSavedEstimate(id: string): void {
  if (typeof window === "undefined") return;

  try {
    write(removeEstimate(readSavedEstimates(), id));
  } catch {
    // Ignore
  }
}

export function clearSavedEstimates(): void {
  if (typeof window === "undefined") return;

  try {
    write([]);
  } catch {
    // Ignore
  }
}

function subscribe(onStoreChange: () => void): () => void {
  window.addEventListener("storage", onStoreChange);
  window.addEventListener(CHANGE_EVENT, onStoreChange);
  return () => {
    window.removeEventListener("storage", onStoreChange);
    window.removeEventListener(CHANGE_EVENT, onStoreChange);
  };
}

function getServerSnapshot(): SavedEstimate[] {
  return EMPTY;
}

export function useSavedEstimates(): SavedEstimate[] {
  return useSyncExternalStore(subscribe, readSavedEstimates, getServerSnapshot);
}

export const SAVED_ESTIMATES_STORAGE_KEY = STORAGE_KEY;
export const SAVED_ESTIMATES_CHANGE_EVENT = CHANGE_EVENT;
