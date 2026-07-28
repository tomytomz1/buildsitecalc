/**
 * Parse fractional construction measurements like "10 1/2", "3/4", "12.5".
 */
export function parseFraction(input: string | number): number | null {
  if (typeof input === "number") {
    return Number.isFinite(input) ? input : null;
  }

  const raw = input.trim().replace(/,/g, "");
  if (!raw) return null;

  // Mixed number: 10 1/2 or 10-1/2
  const mixed = raw.match(/^(-?\d+)\s+[-\s]?\s*(\d+)\s*\/\s*(\d+)$/);
  if (mixed) {
    const whole = Number(mixed[1]);
    const num = Number(mixed[2]);
    const den = Number(mixed[3]);
    if (!den) return null;
    const sign = whole < 0 ? -1 : 1;
    return sign * (Math.abs(whole) + num / den);
  }

  // Hyphen mixed: 10-1/2
  const hyphenMixed = raw.match(/^(-?\d+)-(\d+)\/(\d+)$/);
  if (hyphenMixed) {
    const whole = Number(hyphenMixed[1]);
    const num = Number(hyphenMixed[2]);
    const den = Number(hyphenMixed[3]);
    if (!den) return null;
    const sign = whole < 0 ? -1 : 1;
    return sign * (Math.abs(whole) + num / den);
  }

  // Simple fraction: 3/4
  const simple = raw.match(/^(-?\d+)\s*\/\s*(\d+)$/);
  if (simple) {
    const num = Number(simple[1]);
    const den = Number(simple[2]);
    if (!den) return null;
    return num / den;
  }

  // Decimal
  const n = Number(raw);
  return Number.isFinite(n) ? n : null;
}

export function toFractionString(value: number, maxDenominator = 16): string {
  if (!Number.isFinite(value)) return "";
  const sign = value < 0 ? "-" : "";
  const abs = Math.abs(value);
  const whole = Math.floor(abs);
  const frac = abs - whole;

  if (frac < 1e-9) return `${sign}${whole}`;

  let bestNum = 1;
  let bestDen = 1;
  let bestErr = Math.abs(frac - 1);

  for (let den = 1; den <= maxDenominator; den++) {
    const num = Math.round(frac * den);
    const err = Math.abs(frac - num / den);
    if (err < bestErr) {
      bestErr = err;
      bestNum = num;
      bestDen = den;
    }
  }

  if (bestNum === 0) return `${sign}${whole}`;
  if (bestNum === bestDen) return `${sign}${whole + 1}`;
  if (whole === 0) return `${sign}${bestNum}/${bestDen}`;
  return `${sign}${whole} ${bestNum}/${bestDen}`;
}
