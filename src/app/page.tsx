import Image from "next/image";
import { site, projects, socials } from "@/lib/content";
import { Clock } from "@/components/Clock";
import { GithubStats } from "@/components/GithubStats";

const city = site.location.split(",")[0];
const githubUsername = socials
  .find((s) => s.label === "GitHub")
  ?.handle.replace("@", "");

const linkClass =
  "underline decoration-1 underline-offset-[3px] decoration-line transition-colors hover:text-accent hover:decoration-accent";

export default function Home() {
  return (
    <main className="fade-in min-h-dvh font-mono text-[17px] leading-[1.75] text-muted">
      <div className="mx-auto flex max-w-[76rem] flex-col px-8 py-24 sm:px-12 sm:py-32 lg:flex-row lg:items-start lg:justify-between lg:gap-16 lg:px-12">
        <div className="max-w-2xl lg:flex-1">
          <h1 className="text-2xl text-ink sm:text-3xl">{site.fullName}</h1>
          <p>
            Software engineer · {city}
            <span className="text-accent">.</span>
          </p>

          <p className="mt-10 max-w-[44ch] text-ink">
            I build considered software — the kind that stops feeling like
            software.
          </p>

          <section className="mt-12">
            <p className="text-faint">work</p>
            <ul className="mt-2">
              {projects.map((p) => (
                <li key={p.index}>
                  <a href={p.href} className={`text-ink ${linkClass}`}>
                    {p.title}
                  </a>
                  {" — "}
                  {p.blurb.replace(/\.$/, "")}, {p.year}
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-12">
            <p className="text-faint">stack</p>
            <p className="mt-2">Python · TypeScript · Rust · React · Next.js</p>
          </section>

          <section className="mt-12">
            <p className="text-faint">elsewhere</p>
            <ul className="mt-2">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className={`text-ink ${linkClass}`}
                >
                  {site.email}
                </a>
              </li>
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className={`text-ink ${linkClass}`}
                  >
                    {s.label}
                  </a>{" "}
                  {s.handle}
                </li>
              ))}
            </ul>
          </section>

          <footer className="mt-16 text-faint">
            {city} · <Clock /> local
          </footer>
        </div>

        <aside className="hidden shrink-0 flex-col gap-8 lg:sticky lg:top-24 lg:flex lg:w-[380px] lg:self-start">
          <Image
            src="/portfolio-removebg-preview.png"
            alt="Illustrated portrait of Shagato working on a laptop"
            width={576}
            height={433}
            className="w-full"
            priority
          />
          {githubUsername && <GithubStats username={githubUsername} />}
        </aside>
      </div>
    </main>
  );
}
