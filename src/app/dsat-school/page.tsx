import type { Metadata } from "next";
import { dsatSchool } from "@/lib/content";
import { ProductMock } from "@/components/ProductMock";

export const metadata: Metadata = {
  title: dsatSchool.name,
  description: dsatSchool.tagline,
};

const linkClass =
  "underline decoration-1 underline-offset-[3px] decoration-faint transition-colors hover:text-accent hover:decoration-accent";

export default function DsatSchoolPage() {
  return (
    <main className="fade-in min-h-dvh font-mono text-[17px] leading-[1.75] text-muted">
      <div className="mx-auto max-w-[76rem] px-8 py-24 sm:px-12 sm:py-32">
        <a href="/" className={`text-faint ${linkClass}`}>
          ← shagato
        </a>

        <h1 className="mt-10 text-ink">{dsatSchool.name}</h1>
        <p className="mt-2 max-w-[44ch] text-ink">{dsatSchool.tagline}</p>

        <div className="mt-16 flex flex-col gap-16">
          {dsatSchool.products.map((product) => (
            <section key={product.name}>
              <div className="flex flex-wrap items-baseline gap-x-3">
                <h2 className="text-ink">{product.name}</h2>
                <a
                  href={product.href}
                  target="_blank"
                  rel="noreferrer"
                  className={linkClass}
                >
                  {product.domain}
                </a>
              </div>

              <div className="mt-4 flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-10">
                <div
                  className={`order-2 lg:order-1 lg:shrink-0 ${
                    product.video ? "lg:w-[460px]" : "lg:w-[440px]"
                  }`}
                >
                  <ProductMock product={product} />
                </div>

                <div className="order-1 lg:order-2 lg:flex-1">
                  <p>{product.desc}</p>

                  {product.detail && (
                    <p className="mt-3 text-pretty">
                      {product.detail}
                      {product.repos?.map((repo) => (
                        <span key={repo.href}>
                          {" "}
                          <a
                            href={repo.href}
                            target="_blank"
                            rel="noreferrer"
                            className={linkClass}
                          >
                            {repo.label} ↗
                          </a>
                        </span>
                      ))}
                    </p>
                  )}
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
