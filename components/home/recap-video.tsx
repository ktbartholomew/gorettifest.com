"use client";

import { createContext, useContext, useEffect, useId, useRef, useState, useSyncExternalStore, type ReactNode } from "react";
import type { RecapMedia } from "@/content/recap";
import { VideoCoordinator } from "./video-coordinator";

const PlaybackContext = createContext<VideoCoordinator | null>(null);

export function RecapVideoProvider({ children }: { children: ReactNode }) {
  const [coordinator] = useState(() => new VideoCoordinator());
  useEffect(() => {
    const update = () => coordinator.setHidden(document.hidden);
    update();
    document.addEventListener("visibilitychange", update);
    return () => document.removeEventListener("visibilitychange", update);
  }, [coordinator]);
  return <PlaybackContext.Provider value={coordinator}>{children}</PlaybackContext.Provider>;
}

function usePlayback() {
  const coordinator = useContext(PlaybackContext);
  if (!coordinator) throw new Error("Recap videos require RecapVideoProvider");
  return coordinator;
}

export function RecapVideo({ media, onError, background = false }: { background?: boolean; media: Extract<RecapMedia, { kind: "video" }>; onError: () => void }) {
  const coordinator = usePlayback();
  const ref = useRef<HTMLVideoElement>(null);
  const videoId = useId();
  const [playing, setPlaying] = useState(false);
  const muted = useSyncExternalStore(coordinator.subscribe, coordinator.getMuted, () => true);
  const togglePlayback = () => {
    const video = ref.current;
    if (!video) return;
    if (video.paused) void video.play().catch(() => {});
    else video.pause();
  };
  useEffect(() => {
    const video = ref.current!;
    const unregister = coordinator.register(video, background);
    const near = new IntersectionObserver(entries => {
      if (!entries.some(entry => entry.isIntersecting)) return;
      if (media.poster) video.poster = media.poster;
      if (media.src) video.src = media.src;
      const track = video.querySelector("track");
      if (track && media.captions) track.src = media.captions.src;
      near.disconnect();
      coordinator.reconcile();
    }, { rootMargin: "400px" });
    const visible = new IntersectionObserver(entries => {
      for (const entry of entries) coordinator.visibility(video, entry.isIntersecting ? entry.intersectionRatio : 0);
      coordinator.reconcile();
    }, { threshold: Array.from({ length: 21 }, (_, i) => i / 20) });
    near.observe(video);
    visible.observe(video);
    return () => { near.disconnect(); visible.disconnect(); unregister(); };
  }, [coordinator, media.src, media.poster, media.captions, background]);
  const controlClass = "pointer-events-auto flex h-12 w-12 items-center justify-center rounded-full text-white drop-shadow-md transition-colors hover:bg-black/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";
  return <>
    <video ref={ref} id={videoId} playsInline muted loop preload="none" aria-hidden={background || undefined}
      aria-label={media.alt} className={background ? "absolute inset-0 h-full w-full object-cover" : "h-full w-full object-contain bg-slate-900"}
      crossOrigin={media.captions ? "anonymous" : undefined}
      onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)} onEnded={() => setPlaying(false)}
      onError={onError} data-recap-video>
      {media.captions && <track kind="captions" srcLang={media.captions.language} label={media.captions.label} default />}
    </video>
    {!background && <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-black/50 to-transparent px-2 pb-2 pt-8">
      <button type="button" className={controlClass} onClick={togglePlayback}
        aria-controls={videoId} aria-label={playing ? "Pause video" : "Play video"} title={playing ? "Pause" : "Play"}>
        <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          {playing ? <><rect x="6" y="4" width="4" height="16" rx="1" /><rect x="14" y="4" width="4" height="16" rx="1" /></> : <path d="M6 3.8a1 1 0 0 1 1.5-.86l13 8.2a1 1 0 0 1 0 1.72l-13 8.2A1 1 0 0 1 6 20.2Z" />}
        </svg>
      </button>
      <button type="button" className={controlClass} onClick={() => coordinator.setMuted(!muted)}
        aria-label={muted ? "Unmute all videos" : "Mute all videos"} title={muted ? "Unmute" : "Mute"}>
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M11 4 6 8H3v8h3l5 4Z" fill="currentColor" stroke="none" />
          {muted ? <path d="m16 9 6 6m0-6-6 6" /> : <><path d="M15 8a6 6 0 0 1 0 8" /><path d="M18 4a11 11 0 0 1 0 16" /></>}
        </svg>
      </button>
    </div>}
  </>;
}

export function RecapHeroVideo({ src }: { src: string }) {
  return <RecapVideo background media={{ kind: "video", src, aspectRatio: "square", alt: "", placeholderLabel: "" }} onError={() => {}} />;
}
