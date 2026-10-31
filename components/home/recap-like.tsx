"use client";

import { useSyncExternalStore } from "react";

const storageKey = "gorettifest:recap-likes:v1:";
const changeEvent = "gorettifest:like-change";
const sessionLikes = new Map<string, boolean>();

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener(changeEvent, callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(changeEvent, callback);
  };
}

function readLike(id: string) {
  if (sessionLikes.has(id)) return sessionLikes.get(id)!;
  try {
    return window.localStorage.getItem(storageKey + id) === "true";
  } catch {
    return sessionLikes.get(id) ?? false;
  }
}

export function RecapLike({ id, seedLikes, label }: { id: string; seedLikes: number; label: string }) {
  const liked = useSyncExternalStore(subscribe, () => readLike(id), () => false);
  const count = Math.max(0, Math.min(298, Math.floor(seedLikes))) + Number(liked);

  function toggle() {
    const next = !liked;
    try {
      window.localStorage.setItem(storageKey + id, String(next));
    } catch {
      sessionLikes.set(id, next);
      // Storage can be blocked; keep the interaction working in this session.
    }
    window.dispatchEvent(new Event(changeEvent));
  }

  return (
    <button type="button" onClick={toggle} aria-pressed={liked}
      aria-label={`${liked ? "Unlike" : "Like"} ${label}`}
      className="inline-flex min-h-11 items-center gap-2 rounded-full px-2 text-sm font-semibold text-slate-800 hover:text-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-700">
      <svg aria-hidden="true" viewBox="0 0 24 24" className={`h-6 w-6 ${liked ? "fill-red-700 text-red-700" : "fill-none"}`} stroke="currentColor" strokeWidth="1.7">
        <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z" />
      </svg>
      <span aria-live="polite">{count} likes</span>
    </button>
  );
}
