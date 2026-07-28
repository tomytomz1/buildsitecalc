function isPlainObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function cloneDefaultInputs<T extends Record<string, unknown>>(defaults: T): T {
  return JSON.parse(JSON.stringify(defaults)) as T;
}

export function parseUrlValue(raw: string, defaultValue: unknown): unknown | undefined {
  if (defaultValue === undefined) {
    const asNumber = Number(raw);
    if (Number.isFinite(asNumber)) return asNumber;
    if (raw === "0") return false;
    if (raw === "1") return true;
    return raw;
  }

  if (typeof defaultValue === "number") {
    const parsed = Number(raw);
    return Number.isFinite(parsed) ? parsed : undefined;
  }

  if (typeof defaultValue === "boolean") {
    if (raw === "0") return false;
    if (raw === "1") return true;
    return undefined;
  }

  if (typeof defaultValue === "string") {
    return raw;
  }

  if (Array.isArray(defaultValue)) {
    try {
      const parsed: unknown = JSON.parse(raw);
      if (!Array.isArray(parsed)) return undefined;
      if (defaultValue.length === 0) return parsed;
      const sample = defaultValue[0];
      if (!isPlainObject(sample)) return parsed;
      return parsed.filter((item) => isPlainObject(item));
    } catch {
      return undefined;
    }
  }

  if (isPlainObject(defaultValue)) {
    try {
      const parsed: unknown = JSON.parse(raw);
      return isPlainObject(parsed) ? parsed : undefined;
    } catch {
      return undefined;
    }
  }

  return undefined;
}

export function mergeInputsFromSearchParams<T extends Record<string, unknown>>(
  defaults: T,
  params: URLSearchParams,
): T {
  const merged = cloneDefaultInputs(defaults) as Record<string, unknown>;

  for (const key of Object.keys(defaults)) {
    const raw = params.get(key);
    if (raw === null || raw === "") continue;
    const parsed = parseUrlValue(raw, defaults[key]);
    if (parsed !== undefined) {
      merged[key] = parsed;
    }
  }

  return merged as T;
}

export function serializeInputValue(value: unknown): string | undefined {
  if (value === undefined || value === null) return undefined;

  if (typeof value === "boolean") {
    return value ? "1" : "0";
  }

  if (typeof value === "number") {
    return Number.isFinite(value) ? String(value) : undefined;
  }

  if (typeof value === "string") {
    return value === "" ? undefined : value;
  }

  if (Array.isArray(value) || isPlainObject(value)) {
    return JSON.stringify(value);
  }

  return undefined;
}

export function syncInputsToUrl<T extends Record<string, unknown>>(
  inputs: T,
  defaults: T,
): void {
  if (typeof window === "undefined") return;

  const params = new URLSearchParams();

  for (const key of Object.keys(defaults)) {
    const value = inputs[key];
    const serialized = serializeInputValue(value);
    if (serialized !== undefined) {
      params.set(key, serialized);
    }
  }

  const query = params.toString();
  const nextUrl = query
    ? `${window.location.pathname}?${query}`
    : window.location.pathname;

  window.history.replaceState(null, "", nextUrl);
}

export function clearInputsFromUrl(): void {
  if (typeof window === "undefined") return;
  window.history.replaceState(null, "", window.location.pathname);
}
