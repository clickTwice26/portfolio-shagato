const cardClass = "w-full rounded-sm border border-line";

/** GitHub activity cards for the given username. */
export function GithubStats({ username }: { username: string }) {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-faint">github</p>

      {/* eslint-disable @next/next/no-img-element */}
      <img
        src={`https://github-readme-stats.shion.dev/api?username=${username}&theme=merko&hide_border=false&include_all_commits=true&count_private=true`}
        alt={`${username}'s GitHub stats`}
        className={cardClass}
        loading="lazy"
      />
      <img
        src={`https://streak-stats.demolab.com/?user=${username}&theme=merko&hide_border=false`}
        alt={`${username}'s contribution streak`}
        className={cardClass}
        loading="lazy"
      />
      <img
        src={`https://github-readme-stats.shion.dev/api/top-langs/?username=${username}&theme=merko&hide_border=false&include_all_commits=true&count_private=true&layout=compact`}
        alt={`${username}'s most used languages`}
        className={cardClass}
        loading="lazy"
      />
      {/* eslint-enable @next/next/no-img-element */}
    </div>
  );
}
