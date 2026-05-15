export function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}

export function isRecord(value: unknown): value is Record<string, unknown> {
  return Boolean(value && typeof value === "object" && !Array.isArray(value));
}

export function stringOrFallback(value: unknown, fallback: string): string {
  return typeof value === "string" && value.trim() ? value : fallback;
}
