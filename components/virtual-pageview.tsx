"use client";

import { ReactNode, useEffect, useRef } from "react";

declare global {
  interface Window {
    plausible: (event: "pageview", url?: string) => void;
  }
}

export function VirtualPageview({
  id,
  children,
}: {
  children: ReactNode;
  id: string;
}) {
  const div = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const listener = () => {
      const plausible = window.plausible;
      if (!plausible || !div.current) {
        return;
      }

      const rect = div.current.getBoundingClientRect();
      if (rect.y > 0 && rect.y < window.innerHeight) {
        plausible("pageview", `${window.location.pathname}#${id}`);
      }
    };
    window.addEventListener("scrollend", listener);

    return () => {
      window.removeEventListener("scrollend", listener);
    };
  }, [id, div]);
  return <div ref={div}>{children}</div>;
}
