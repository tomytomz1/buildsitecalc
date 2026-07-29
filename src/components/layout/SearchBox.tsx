"use client";

import { useCallback, useEffect, useId, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { Search, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { inputClassName } from "@/components/ui/Input";

export type SearchCalculator = {
  id: string;
  title: string;
  href: string;
  category?: string;
};

export type SearchBoxProps = {
  locale?: "en" | "es";
  placeholder?: string;
  calculators?: SearchCalculator[];
  onSearch?: (query: string) => SearchCalculator[];
  className?: string;
  inputClassName?: string;
  maxResults?: number;
};

function defaultFilter(
  calculators: SearchCalculator[],
  query: string,
): SearchCalculator[] {
  const normalized = query.trim().toLowerCase();
  if (!normalized) return [];

  return calculators.filter((item) => {
    const haystack = [item.title, item.category, item.id]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();
    return haystack.includes(normalized);
  });
}

export function SearchBox({
  locale = "en",
  placeholder = "Search calculators…",
  calculators = [],
  onSearch,
  className,
  inputClassName: inputExtraClassName,
  maxResults = 8,
}: SearchBoxProps) {
  const listboxId = useId();
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);

  const results = useMemo(() => {
    const found = onSearch ? onSearch(query) : defaultFilter(calculators, query);
    return found.slice(0, maxResults);
  }, [calculators, maxResults, onSearch, query]);

  const showDropdown = isOpen && query.trim().length > 0;

  const closeDropdown = useCallback(() => {
    setIsOpen(false);
    setActiveIndex(-1);
  }, []);

  useEffect(() => {
    function handlePointerDown(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        closeDropdown();
      }
    }

    document.addEventListener("mousedown", handlePointerDown);
    return () => document.removeEventListener("mousedown", handlePointerDown);
  }, [closeDropdown]);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (!showDropdown) return;

    switch (event.key) {
      case "ArrowDown":
        event.preventDefault();
        setActiveIndex((prev) => (prev < results.length - 1 ? prev + 1 : 0));
        break;
      case "ArrowUp":
        event.preventDefault();
        setActiveIndex((prev) => (prev > 0 ? prev - 1 : results.length - 1));
        break;
      case "Escape":
        closeDropdown();
        break;
      case "Enter":
        if (activeIndex >= 0 && results[activeIndex]) {
          event.preventDefault();
          window.location.href = results[activeIndex].href;
        }
        break;
    }
  };

  return (
    <div ref={containerRef} className={cn("relative w-full max-w-md", className)}>
      <label htmlFor={listboxId} className="sr-only">
        {placeholder}
      </label>
      <div className="relative">
        <Search
          className="pointer-events-none absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-slate-400"
          aria-hidden="true"
        />
        <input
          ref={inputRef}
          id={listboxId}
          type="search"
          role="combobox"
          aria-expanded={showDropdown}
          aria-controls={`${listboxId}-listbox`}
          aria-autocomplete="list"
          aria-activedescendant={
            activeIndex >= 0 ? `${listboxId}-option-${activeIndex}` : undefined
          }
          placeholder={placeholder}
          value={query}
          autoComplete="off"
          lang={locale}
          className={cn(inputClassName(false), "pr-9 pl-9", inputExtraClassName)}
          onChange={(event) => {
            setQuery(event.target.value);
            setIsOpen(true);
            setActiveIndex(-1);
          }}
          onFocus={() => setIsOpen(true)}
          onKeyDown={handleKeyDown}
        />
        {query ? (
          <button
            type="button"
            className="absolute top-1/2 right-2 -translate-y-1/2 rounded p-1 text-slate-400 hover:text-slate-600 focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:outline-none"
            onClick={() => {
              setQuery("");
              closeDropdown();
              inputRef.current?.focus();
            }}
            aria-label="Clear search"
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
        ) : null}
      </div>

      {showDropdown ? (
        <ul
          id={`${listboxId}-listbox`}
          role="listbox"
          className="absolute z-50 mt-1 max-h-72 w-full overflow-auto rounded-md border border-slate-200 bg-white py-1 shadow-lg"
        >
          {results.length === 0 ? (
            <li
              className="px-3 py-2 text-sm text-slate-500"
              role="option"
              aria-selected="false"
            >
              No calculators found
            </li>
          ) : (
            results.map((item, index) => (
              <li
                key={item.id}
                id={`${listboxId}-option-${index}`}
                role="option"
                aria-selected={activeIndex === index}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "block px-3 py-2 text-sm",
                    activeIndex === index
                      ? "bg-amber-50 text-amber-900"
                      : "text-slate-800 hover:bg-slate-50",
                  )}
                  onClick={closeDropdown}
                >
                  <span className="font-medium">{item.title}</span>
                  {item.category ? (
                    <span className="mt-0.5 block text-xs text-slate-500">
                      {item.category}
                    </span>
                  ) : null}
                </Link>
              </li>
            ))
          )}
        </ul>
      ) : null}
    </div>
  );
}
