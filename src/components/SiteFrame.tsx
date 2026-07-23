import type { ReactNode } from "react";
import { ScaledSite } from "./ScaledSite";

/** A live site preview in browser chrome, rendered at desktop and scaled down. */
export function SiteFrame({
  href,
  title,
  frameable = true,
  children,
}: {
  href: string;
  title: string;
  /** false when the site sends X-Frame-Options / CSP frame-ancestors. */
  frameable?: boolean;
  /** Stand-in preview, used when the real site refuses to be framed. */
  children?: ReactNode;
}) {
  const domain = new URL(href).host.replace(/^www\./, "");

  return (
    <div className="overflow-hidden rounded-sm border border-line bg-bg">
      <div className="flex items-center gap-3 border-b border-line px-3 py-2">
        <div className="flex gap-1">
          <span className="h-1.5 w-1.5 rounded-full bg-line" />
          <span className="h-1.5 w-1.5 rounded-full bg-line" />
          <span className="h-1.5 w-1.5 rounded-full bg-line" />
        </div>
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          className="truncate text-[11px] text-faint transition-colors hover:text-accent"
        >
          {domain} ↗
        </a>
      </div>
      <div className="aspect-[16/10] bg-bg">
        {children ? (
          children
        ) : frameable ? (
          <ScaledSite src={href} title={title} />
        ) : (
          <div className="flex h-full flex-col items-center justify-center gap-2 px-6 text-center">
            <p className="text-[13px] leading-relaxed text-faint">
              Sign-in only — this app blocks embedding.
            </p>
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              className="text-[13px] text-ink underline decoration-1 underline-offset-[3px] decoration-faint transition-colors hover:text-accent hover:decoration-accent"
            >
              open {domain} ↗
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
