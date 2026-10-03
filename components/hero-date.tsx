"use client";

import { useSyncExternalStore } from "react";

const DEFAULT_DATE = "October 3-4, 2026";
// Explicit CDT offsets keep the windows independent of the visitor's timezone.
const SATURDAY_START = Date.parse("2026-10-03T00:00:00-05:00");
const SATURDAY_END = Date.parse("2026-10-03T20:00:00-05:00");
const SUNDAY_END = Date.parse("2026-10-04T15:00:00-05:00");
const boundaries = [SATURDAY_START, SATURDAY_END, SUNDAY_END];

export function heroDateText(now: number): string {
  if (now >= SATURDAY_START && now < SATURDAY_END) return "TODAY! 10am-8pm";
  if (now >= SATURDAY_END && now < SUNDAY_END) return "TODAY! 10am-3pm";
  return DEFAULT_DATE;
}

function subscribe(onChange: () => void) {
  let timeout: ReturnType<typeof setTimeout>;
  const update = () => {
    clearTimeout(timeout);
    onChange();
    const now = Date.now();
    const next = boundaries.find((boundary) => boundary > now);
    // Check periodically for clock changes and exactly at the next boundary.
    timeout = setTimeout(update, next ? Math.min(next - now, 60_000) : 60_000);
  };
  update();
  window.addEventListener("focus", update);
  document.addEventListener("visibilitychange", update);
  return () => {
    clearTimeout(timeout);
    window.removeEventListener("focus", update);
    document.removeEventListener("visibilitychange", update);
  };
}

function getSnapshot() {
  return heroDateText(Date.now());
}

// Cached HTML and hydration always use the same timeless fallback.
function getServerSnapshot() {
  return DEFAULT_DATE;
}

export function HeroDate() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
