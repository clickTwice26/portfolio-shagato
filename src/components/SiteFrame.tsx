import { ScaledSite } from "./ScaledSite";

/** A live site preview in browser chrome, rendered at desktop and scaled down. */
export function SiteFrame({
  href,
  title,
}: {
  href: string;
  title: string;
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
        <ScaledSite src={href} title={title} />
      </div>
    </div>
  );
}
