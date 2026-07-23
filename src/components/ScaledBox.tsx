"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Lays its children out at a fixed desktop size, then scales the whole thing
 * down to whatever width the container has. Same trick as ScaledSite, but for
 * markup we render ourselves rather than an iframe.
 */
export function ScaledBox({
  width,
  height,
  children,
}: {
  width: number;
  height: number;
  children: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const measure = (w: number) => setScale(w / width);
    measure(el.clientWidth);

    const observer = new ResizeObserver(([entry]) =>
      measure(entry.contentRect.width),
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [width]);

  return (
    <div ref={ref} className="relative h-full w-full overflow-hidden">
      <div
        className="absolute left-0 top-0 origin-top-left"
        style={{ width, height, transform: `scale(${scale})` }}
      >
        {children}
      </div>
    </div>
  );
}
