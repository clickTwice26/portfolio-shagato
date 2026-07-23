import type { DsatProduct } from "@/lib/content";
import { ScaledSite } from "./ScaledSite";

/** A live preview of the product's real site, embedded via iframe. */
export function ProductMock({ product }: { product: DsatProduct }) {
  return (
    <div className="overflow-hidden rounded-sm border border-line bg-bg">
      <div className="flex items-center gap-3 border-b border-line px-3 py-2">
        <div className="flex gap-1">
          <span className="h-1.5 w-1.5 rounded-full bg-line" />
          <span className="h-1.5 w-1.5 rounded-full bg-line" />
          <span className="h-1.5 w-1.5 rounded-full bg-line" />
        </div>
        <a
          href={product.href}
          target="_blank"
          rel="noreferrer"
          className="truncate text-[11px] text-faint transition-colors hover:text-accent"
        >
          {product.domain} ↗
        </a>
      </div>
      <div className={product.video ? "aspect-video bg-bg" : "aspect-[16/10] bg-bg"}>
        {product.video ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${product.video}`}
            title={`${product.name} — demo`}
            loading="lazy"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="h-full w-full border-0"
          />
        ) : product.frameable === false ? (
          <div className="flex h-full flex-col items-center justify-center gap-2 px-6 text-center">
            <p className="text-[13px] leading-relaxed text-faint">
              This app blocks embedding.
            </p>
            <a
              href={product.href}
              target="_blank"
              rel="noreferrer"
              className="text-[13px] text-ink underline decoration-1 underline-offset-[3px] decoration-faint transition-colors hover:text-accent hover:decoration-accent"
            >
              open {product.domain} ↗
            </a>
          </div>
        ) : (
          <ScaledSite
            src={product.href}
            title={`${product.name} — ${product.domain}`}
          />
        )}
      </div>
    </div>
  );
}
