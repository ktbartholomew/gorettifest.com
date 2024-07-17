"use client";

import { useEffect, useRef, useState } from "react";

const LEFT = "left";
const RIGHT = "right";

export function ImageScrollLoader({
  children,
  midPointOffset = 0.5,
  offScreenDirection = LEFT,
}: {
  children: React.ReactNode[];
  offScreenDirection?: typeof LEFT | typeof RIGHT;
  /**
   * how far
   */
  midPointOffset: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [showIndex, setShowIndex] = useState<number>(0);

  useEffect(() => {
    if (!ref.current || !(ref.current instanceof HTMLDivElement)) {
      return;
    }

    const el = ref.current as HTMLDivElement;
    const listener = () => {
      let scrollProgress =
        (el.getBoundingClientRect().top +
          el.getBoundingClientRect().height / (1 / midPointOffset)) /
        window.innerHeight;
      scrollProgress = Math.min(1, Math.max(0, scrollProgress));

      setShowIndex(Math.round((1 - scrollProgress) * (children.length - 1)));
    };

    window.addEventListener("scroll", listener);

    return () => {
      window.removeEventListener("scroll", listener);
    };
  }, [ref, midPointOffset, children.length]);

  return (
    <>
      <div className="relative" ref={ref}>
        {children[0]}

        {children.slice(1).map((c, idx) => (
          <div
            key={idx + 1}
            className="absolute top-0"
            style={{
              transition: "transform 250ms ease-in-out",
              transform:
                showIndex < idx + 1
                  ? `translate3d(${
                      offScreenDirection === "left" ? "-" : ""
                    }75vw, 0, 0)`
                  : "translate3d(0, 0, 0)",
            }}
          >
            {children[idx + 1]}
          </div>
        ))}
      </div>
    </>
  );
}
