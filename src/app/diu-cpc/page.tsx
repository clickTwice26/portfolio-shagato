import type { Metadata } from "next";
import { diuCpc } from "@/lib/content";
import { SiteFrame } from "@/components/SiteFrame";

export const metadata: Metadata = {
  title: diuCpc.name,
  description: diuCpc.tagline,
};

const linkClass =
  "underline decoration-1 underline-offset-[3px] decoration-faint transition-colors hover:text-accent hover:decoration-accent";

export default function DiuCpcPage() {
  return (
    <main className="fade-in min-h-dvh font-mono text-[17px] leading-[1.75] text-muted">
      <div className="mx-auto max-w-[76rem] px-8 py-24 sm:px-12 sm:py-32">
        <a href="/" className={`text-faint ${linkClass}`}>
          ← shagato
        </a>

        <h1 className="mt-10 text-ink">{diuCpc.name}</h1>
        <p className="mt-2 max-w-[54ch] text-pretty text-ink">
          {diuCpc.tagline}
        </p>

        <div className="mt-16 flex flex-col gap-14">
          {diuCpc.groups.map((group) => (
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

                    {project.embed && (
                      <div className="mt-4 lg:mt-0 lg:w-[340px] lg:shrink-0">
                        <SiteFrame
                          href={project.embed}
                          title={`${project.name} — site`}
                          frameable={project.frameable}
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        <p className="mt-16 max-w-[64ch] text-pretty text-faint">
          {diuCpc.also}
        </p>
      </div>
    </main>
  );
}
