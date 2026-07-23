const cardClass = "w-full rounded-sm border border-line";

/**
 * Palette pulled from globals.css so the cards read as part of the paper
 * rather than three black boxes dropped onto it. Backgrounds are fully
 * transparent, so the page's own texture shows through.
 */
const INK = "14120d";
const MUTED = "4a453c";
const FAINT = "6f6a5e";
const LINE = "d8d2c4";
const ACCENT = "b8341c";
const TRANSPARENT = "00000000";

/** GitHub activity cards for the given username. */
export function GithubStats({ username }: { username: string }) {
  const stats = new URLSearchParams({
    username,
    bg_color: TRANSPARENT,
    title_color: INK,
    text_color: MUTED,
    icon_color: ACCENT,
    ring_color: ACCENT,
    border_color: LINE,
    include_all_commits: "true",
    count_private: "true",
  });

  const streak = new URLSearchParams({
    user: username,
    background: TRANSPARENT,
    border: LINE,
    stroke: LINE,
    ring: ACCENT,
    fire: ACCENT,
    currStreakNum: INK,
    sideNums: INK,
    currStreakLabel: MUTED,
    sideLabels: MUTED,
    dates: FAINT,
  });

  const langs = new URLSearchParams({
    username,
    bg_color: TRANSPARENT,
    title_color: INK,
    text_color: MUTED,
    border_color: LINE,
    layout: "compact",
    include_all_commits: "true",
    count_private: "true",
  });

  return (
    <div className="flex flex-col gap-4">
      <p className="text-faint">github</p>

      {/* eslint-disable @next/next/no-img-element */}
      <img
        src={`https://github-readme-stats.shion.dev/api?${stats}`}
        alt={`${username}'s GitHub stats`}
        className={cardClass}
        loading="lazy"
      />
      <img
        src={`https://streak-stats.demolab.com/?${streak}`}
        alt={`${username}'s contribution streak`}
        className={cardClass}
        loading="lazy"
      />
      <img
        src={`https://github-readme-stats.shion.dev/api/top-langs/?${langs}`}
        alt={`${username}'s most used languages`}
        className={cardClass}
        loading="lazy"
      />
      {/* eslint-enable @next/next/no-img-element */}
    </div>
  );
}
