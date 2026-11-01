"use client";

import Image from "next/image";
import { RecapVideo } from "./recap-video";
import { type CSSProperties, useState } from "react";
import type { RecapMedia as Media } from "@/content/recap";
import styles from "./thank-you.module.css";

export function RecapMedia({ media, index, unoptimized = false }: { media: Media; index: number; unoptimized?: boolean }) {
  const [failed, setFailed] = useState(false);
  const ratio = typeof media.aspectRatio === "number" ? media.aspectRatio : media.aspectRatio === "vertical" ? 9 / 16 : 1;
  return (
    <div className={styles.media} style={{ aspectRatio: ratio, "--media-ratio": ratio } as CSSProperties} data-format={media.aspectRatio} data-tone={index % 4}>
      {media.src && !failed ? (
        media.kind === "photo" ? (
          <Image unoptimized={unoptimized} src={media.src} alt={media.alt} fill sizes="(max-width: 640px) 100vw, 608px"
            className="object-contain" onError={() => setFailed(true)} />
        ) : (
          <RecapVideo media={media} onError={() => setFailed(true)} />
        )
      ) : (
        <div className={styles.placeholder}>
          <span className={styles.mediaIcon} aria-hidden="true">{media.kind === "video" ? "▷" : "▧"}</span>
          <span className={styles.placeholderLabel}>{media.placeholderLabel}</span>
          <span className={styles.format}>{failed ? "Media unavailable" : `${ratio === 1 ? "Square" : ratio < 1 ? "Portrait" : "Landscape"} ${media.kind} · Coming soon`}</span>
        </div>
      )}
    </div>
  );
}
