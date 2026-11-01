type Entry = { visibility: number; userPaused: boolean; silent: boolean };

export class VideoCoordinator {
  private entries = new Map<HTMLVideoElement, Entry>();
  private active: HTMLVideoElement | null = null;
  private hidden = false;
  private muted = true;
  private listeners = new Set<() => void>();
  getMuted = () => this.muted;
  subscribe = (listener: () => void) => {
    this.listeners.add(listener);
    return () => { this.listeners.delete(listener); };
  };

  setMuted = (muted: boolean) => {
    this.muted = muted;
    for (const [video, entry] of this.entries) {
      const target = entry.silent || muted;
      if (video.muted !== target) video.muted = target;
    }
    this.listeners.forEach(listener => listener());
  };

  register(video: HTMLVideoElement, silent = false) {
    this.entries.set(video, { visibility: 0, userPaused: false, silent });
    video.muted = silent || this.muted;
    const onPlay = () => {
      if (video.paused) return;
      if (this.hidden || !this.entries.get(video)?.visibility) {
        video.pause();
        return;
      }
      this.active = video;
      this.entries.get(video)!.userPaused = false;
      for (const other of this.entries.keys()) if (other !== video) other.pause();
    };
    const onPlaying = () => {
      // A play promise can finish after scrolling has selected another video.
      if (this.active !== video || this.hidden) video.pause();
    };
    const onPause = () => {
      if (this.active === video) this.entries.get(video)!.userPaused = true;
    };
    const onVolume = () => {
      if (!silent && video.muted !== this.muted) this.setMuted(video.muted);
    };
    video.addEventListener('play', onPlay);
    video.addEventListener('playing', onPlaying);
    video.addEventListener('pause', onPause);
    video.addEventListener('volumechange', onVolume);
    return () => {
      video.removeEventListener('play', onPlay);
      video.removeEventListener('playing', onPlaying);
      video.removeEventListener('pause', onPause);
      video.removeEventListener('volumechange', onVolume);
      this.entries.delete(video);
      if (this.active === video) this.active = null;
      video.pause();
      this.reconcile();
    };
  }

  visibility(video: HTMLVideoElement, ratio: number) {
    const entry = this.entries.get(video);
    if (!entry) return;
    entry.visibility = ratio;
    if (!ratio) entry.userPaused = false;
  }

  setHidden(hidden: boolean) {
    this.hidden = hidden;
    this.reconcile();
  }

  reconcile() {
    let next: HTMLVideoElement | null = null;
    let best = 0;
    if (!this.hidden) {
      for (const [video, entry] of this.entries) {
        if (video.hasAttribute('src') && entry.visibility > best) {
          next = video;
          best = entry.visibility;
        }
      }
    }
    if (next === this.active) return;
    this.active = next;
    for (const video of this.entries.keys()) if (video !== next) video.pause();
    if (next && !this.entries.get(next)!.userPaused && !next.ended) {
      // Browsers may reject audible autoplay; native controls remain available.
      void next.play().catch(() => {});
    }
  }
}
