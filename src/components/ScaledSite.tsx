"use client";

import { useEffect, useRef, useState } from "react";

/** The viewport the site is rendered at before being scaled down. */
const DESKTOP_W = 1280;
const DESKTOP_H = 800; // 16:10 — matches the card's aspect ratio exactly

/**
 * Renders a live site at a real desktop viewport, then scales the whole frame
 * down to fit the card — so it reads as a shrunken desktop screenshot rather
 * than the site's mobile layout.
 */
export function ScaledSite({ src, title }: { src: string; title: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const measure = (width: number) => setScale(width / DESKTOP_W);
    measure(el.clientWidth);

    const observer = new ResizeObserver(([entry]) =>
      measure(entry.contentRect.width),
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="relative h-full w-full overflow-hidden">
      <iframe
        src={src}
        title={title}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
        className="absolute left-0 top-0 border-0"
        style={{
          width: DESKTOP_W,
          height: DESKTOP_H,
          transform: `scale(${scale})`,
          transformOrigin: "top left",
        }}
      />
    </div>
  );
}
