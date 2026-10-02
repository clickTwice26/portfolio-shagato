import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DIUKonnect",
};

const linkClass = "pencil-link";

export default function DiuKonnectPage() {
  return (
    <main className="fade-in min-h-dvh font-mono text-[17px] leading-[1.75] text-muted">
      <div className="mx-auto max-w-[76rem] px-8 py-24 sm:px-12 sm:py-32">
        <a href="/" className={`text-faint ${linkClass}`}>
          ← shagato
        </a>

        <h1 className="mt-10 text-ink">DIUKonnect</h1>
        <p className="mt-2 max-w-[54ch] text-pretty text-faint">
          Write-up coming soon.
        </p>
      </div>
    </main>
  );
}
