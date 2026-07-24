import { ScaledBox } from "./ScaledBox";

/**
 * A static recreation of typetrek.diucpc.app's home hero — "TypeTrek Face-Off".
 *
 * The real site refuses to be framed (X-Frame-Options: SAMEORIGIN), so this
 * stands in for it, laid out at desktop size and scaled down to match the
 * previews beside it.
 */

const W = 1280;
const H = 800;

/* ── the pixel mascot ────────────────────────────────────────────────
   A person typing at a CRT, drawn as a pixel map so it renders identically
   on the server and the client. Each character is one cell; the legend maps
   it to a fill. */
const PIXELS = [
  "..............HHHH........",
  ".............HHHHHHH......",
  "............HHHHHHHHH.....",
  "............HHFFFFFFH.....",
  "...CCCCCC...HFFFFFFFFH....",
  "..CccccccC..HFFFFFFFF.....",
  "..CccccccC...FFFFFFF......",
  "..CccccccC...FFFFFF.......",
  "..CccccccC...FSSSSSF......",
  "...CCCCCC...SSSSTSSSS.....",
  "....CCCC....SSSSTSSSSS....",
  ".....CC....SSSSSTSSSSSS...",
  "....WWWW...SSSSSTSSSSSS...",
  "..KKKKKKKKKKKKKKKKKKKKKK..",
  ".WWWWWWWWWWWWWWWWWWWWWWWWW",
  ".wWWWWWWWWWWWWWWWWWWWWWWWw",
  ".w.....................w.",
  ".w.....................w.",
  ".ww...................ww.",
];

const FILL: Record<string, string> = {
  H: "#16182e", // hair
  F: "#f0b184", // skin
  S: "#4f97e4", // shirt
  T: "#e23b3b", // tie
  C: "#c9d2dd", // monitor shell
  c: "#6b7688", // screen
  K: "#eef1f6", // keyboard
  W: "#a9762f", // desk
  w: "#7c5420", // desk shadow
};

function Mascot() {
  const u = 7;
  const cols = Math.max(...PIXELS.map((r) => r.length));
  return (
    <svg
      width={cols * u}
      height={PIXELS.length * u}
      viewBox={`0 0 ${cols * u} ${PIXELS.length * u}`}
      shapeRendering="crispEdges"
    >
      {PIXELS.flatMap((row, y) =>
        row.split("").map((ch, x) =>
          FILL[ch] ? (
            <rect
              key={`${x}-${y}`}
              x={x * u}
              y={y * u}
              width={u}
              height={u}
              fill={FILL[ch]}
            />
          ) : null,
        ),
      )}
    </svg>
  );
}

/* ── small inline icons ──────────────────────────────────────────── */
function Bolt() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="#fde047">
      <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8z" />
    </svg>
  );
}
function Check() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" fill="#ffffff" opacity="0.9" />
      <path
        d="M7 12.5l3 3 7-7"
        stroke="#2563eb"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function Trophy() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="#1d4ed8">
      <path d="M18 3h3v3a4 4 0 0 1-4 4h-.35A6 6 0 0 1 13 13.9V17h3v2H8v-2h3v-3.1A6 6 0 0 1 7.35 10H7a4 4 0 0 1-4-4V3h3V2h12v1zM6 5H5v1a2 2 0 0 0 1 1.7V5zm13 0h-1v2.7A2 2 0 0 0 19 6V5z" />
    </svg>
  );
}
function Keyboard() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
      <rect
        x="2"
        y="6"
        width="20"
        height="12"
        rx="2"
        stroke="#ffffff"
        strokeWidth="1.8"
      />
      <path
        d="M6 10h.01M10 10h.01M14 10h.01M18 10h.01M8 14h8"
        stroke="#ffffff"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function StatCard({
  label,
  value,
  labelColor,
  className,
}: {
  label: string;
  value: string;
  labelColor: string;
  className: string;
}) {
  return (
    <div
      className={`absolute rounded-2xl bg-white px-[18px] py-[12px] shadow-[0_16px_40px_rgba(15,23,80,0.28)] ${className}`}
    >
      <div
        className="text-[11px] font-bold tracking-[0.02em]"
        style={{ color: labelColor }}
      >
        {label}
      </div>
      <div className="mt-[3px] text-[22px] font-black leading-none text-[#0b1220]">
        {value}
      </div>
    </div>
  );
}

export function TypeTrekMock() {
  return (
    <ScaledBox width={W} height={H}>
      <div className="flex h-full w-full flex-col bg-gradient-to-br from-[#2563eb] via-[#1d4ed8] to-[#1e3a8a] font-sans text-white">
        {/* nav */}
        <div className="flex items-center justify-between px-[44px] py-[20px]">
          <div className="text-[26px] font-black italic leading-[0.92] tracking-[-0.01em] [text-shadow:0_2px_8px_rgba(0,0,0,0.25)]">
            TYPETREK
            <br />
            FACE-OFF
          </div>
          <div className="flex flex-col gap-[5px]">
            <span className="h-[3px] w-[26px] rounded bg-white" />
            <span className="h-[3px] w-[26px] rounded bg-white" />
            <span className="h-[3px] w-[26px] rounded bg-white" />
          </div>
        </div>

        {/* hero body */}
        <div className="flex flex-1 flex-col items-center px-[40px]">
          {/* badges */}
          <div className="flex items-center gap-[14px]">
            <span className="flex items-center gap-[7px] rounded-full border border-white/25 bg-white/15 px-[15px] py-[7px] text-[13px] font-semibold">
              <Bolt />
              TypeTrek Face-Off
            </span>
            <span className="flex items-center gap-[7px] rounded-full border border-white/25 bg-white/15 px-[15px] py-[7px] text-[13px] font-semibold">
              <Check />
              Powered by DIU CPC
            </span>
          </div>

          {/* headline */}
          <h1 className="mt-[26px] text-[62px] font-black leading-[1.02] tracking-[-0.02em] [text-shadow:0_4px_16px_rgba(0,0,0,0.2)]">
            Compete. <span className="text-[#bcd3fb]">Improve.</span> Win.
          </h1>

          {/* subhead */}
          <p className="mt-[18px] max-w-[620px] text-center text-[18px] leading-[1.5] text-[#c9d8f7]">
            Professional typing contests with real-time leaderboards and
            analytics. Practice solo or challenge others across timed levels.
          </p>

          {/* CTAs */}
          <div className="mt-[26px] flex items-center gap-[16px]">
            <span className="flex items-center gap-[9px] rounded-2xl bg-white px-[26px] py-[14px] text-[16px] font-bold text-[#1d4ed8] shadow-[0_12px_30px_rgba(0,0,0,0.2)]">
              <Trophy />
              Join Contest
            </span>
            <span className="flex items-center gap-[9px] rounded-2xl border-[1.5px] border-white/45 px-[26px] py-[14px] text-[16px] font-bold text-white">
              <Keyboard />
              Try Speed Test
            </span>
          </div>

          {/* mascot + floating cards */}
          <div className="relative mt-[30px] h-[190px] w-[420px]">
            <div className="absolute left-1/2 top-[26px] -translate-x-1/2">
              <Mascot />
            </div>
            <StatCard
              label="Accuracy"
              value="92%"
              labelColor="#16a34a"
              className="right-[36px] top-0"
            />
            <StatCard
              label="Consistency"
              value="92%"
              labelColor="#7c3aed"
              className="left-[10px] bottom-[6px]"
            />
            <StatCard
              label="Peak"
              value="98 WPM"
              labelColor="#2563eb"
              className="right-[6px] bottom-[16px]"
            />
          </div>

          {/* bottom stats */}
          <div className="mt-[18px] flex items-end gap-[26px]">
            {[
              { l: "Today", v: "69 WPM" },
              { l: "Best", v: "101 WPM" },
              { l: "Streak", v: "6d" },
            ].map((s, i) => (
              <div key={s.l} className="flex items-end gap-[26px]">
                {i > 0 && <span className="pb-[8px] text-white/40">·</span>}
                <div className="text-center">
                  <div className="text-[13px] text-[#a9c3f2]">{s.l}</div>
                  <div className="mt-[3px] text-[22px] font-black leading-none">
                    {s.v}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ScaledBox>
  );
}
