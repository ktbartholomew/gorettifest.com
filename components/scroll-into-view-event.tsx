"use client";

import { useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    plausible: (event: "pageview" | string) => void;
  }
}

export function ScrollIntoViewEvent({ event }: { event: string }) {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const listener = () => {
      if (!ref.current) {
        return;
      }

      const rect = ref.current.getBoundingClientRect();
      if (rect.y > 0 && rect.y < window.innerHeight) {
        setInView(true);
      } else {
        setInView(false);
      }
    };

    window.addEventListener("scroll", listener);

    return () => {
      window.removeEventListener("scroll", listener);
    };
  }, [ref]);

  useEffect(() => {
    if (inView && typeof window.plausible === "function") {
      window.plausible(event);
    }
  }, [event, inView]);

  return <div ref={ref}></div>;
}
