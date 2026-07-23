import type { Metadata } from "next";
import { localoy } from "@/lib/content";

export const metadata: Metadata = {
  title: localoy.name,
  description: localoy.tagline,
};

const linkClass =
  "underline decoration-1 underline-offset-[3px] decoration-line transition-colors hover:text-accent hover:decoration-accent";

export default function LocaloyPage() {
  return (
    <main className="fade-in min-h-dvh font-mono text-[17px] leading-[1.75] text-muted">
      <div className="max-w-3xl px-8 py-24 sm:px-12 sm:py-32 md:pl-24 lg:max-w-5xl lg:pl-32 xl:max-w-6xl">
        <a href="/" className={`text-faint ${linkClass}`}>
          ← shagato
        </a>

        <h1 className="mt-10 text-ink">{localoy.name}</h1>
        <p className="mt-2 max-w-[54ch] text-pretty text-ink">
          {localoy.tagline}
        </p>

        <div className="mt-16 flex flex-col gap-14">
          {localoy.groups.map((group) => (
            <section key={group.label}>
              <p className="text-faint">{group.label}</p>

              <div className="mt-5 flex flex-col gap-10">
                {group.projects.map((project) => (
                  <div
                    key={project.name}
                    className="flex flex-col gap-1 lg:flex-row lg:gap-10"
                  >
                    <div className="lg:w-[240px] lg:shrink-0">
                      <h2 className="text-ink">{project.name}</h2>
                      <p className="text-sm text-faint">{project.tag}</p>
                    </div>

                    <div className="lg:flex-1">
                      <p className="text-ink">{project.desc}</p>
                      <p className="mt-2 text-pretty">{project.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        <p className="mt-16 max-w-[64ch] text-pretty text-faint">
          {localoy.also}
        </p>
      </div>
    </main>
  );
}
