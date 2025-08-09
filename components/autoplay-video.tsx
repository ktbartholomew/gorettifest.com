"use client";

import { useEffect, useRef } from "react";

export function AutoplayVideo(props: { className?: string; src: string }) {
  const video = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (!video.current) {
      return;
    }

    const el = video.current;
    const timeout = setTimeout(() => el.play(), 500);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <video
      ref={video}
      className={["object-cover", props.className].join(" ")}
      src={props.src}
      loop
      autoPlay
      muted
      playsInline
    ></video>
  );
}
