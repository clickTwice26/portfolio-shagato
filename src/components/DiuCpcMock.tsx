import { ScaledBox } from "./ScaledBox";

/**
 * A static recreation of diucpc.app's home page.
 *
 * The real site refuses to be framed (X-Frame-Options: DENY and CSP
 * frame-ancestors 'none'), so this stands in for it — laid out at desktop
 * size and scaled down to match the previews beside it.
 */

const W = 1280;
const H = 800;

/* ── the network sphere ──────────────────────────────────────────────
   Points are placed with a Fibonacci sphere and edges are derived from
   3D distance. Deterministic on purpose: anything random here would
   render differently on the server and the client and break hydration. */
const SPHERE = (() => {
  const count = 88;
  const golden = Math.PI * (3 - Math.sqrt(5));
  const pts: { x: number; y: number; z: number }[] = [];

  for (let i = 0; i < count; i++) {
    const y = 1 - (i / (count - 1)) * 2;
    const radius = Math.sqrt(Math.max(0, 1 - y * y));
    const theta = golden * i;
    pts.push({
      x: Math.cos(theta) * radius,
      y,
      z: Math.sin(theta) * radius,
    });
  }

  const edges: [number, number][] = [];
  for (let i = 0; i < pts.length; i++) {
    for (let j = i + 1; j < pts.length; j++) {
      const dx = pts[i].x - pts[j].x;
      const dy = pts[i].y - pts[j].y;
      const dz = pts[i].z - pts[j].z;
      if (Math.sqrt(dx * dx + dy * dy + dz * dz) < 0.42) edges.push([i, j]);
    }
  }

  return { pts, edges };
})();

function NetworkSphere() {
  const R = 148;
  const cx = 160;
  const cy = 160;
  const at = (p: { x: number; y: number }) => ({
    x: cx + p.x * R,
    y: cy + p.y * R,
  });

  return (
    <svg viewBox="0 0 320 320" className="h-full w-full">
      <defs>
        <radialGradient id="cpc-glow">
          <stop offset="0%" stopColor="#93c5fd" stopOpacity="0.55" />
          <stop offset="70%" stopColor="#bfdbfe" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>
      </defs>

      <circle cx={cx} cy={cy} r={R * 0.82} fill="url(#cpc-glow)" />

      {SPHERE.edges.map(([a, b], i) => {
        const p = at(SPHERE.pts[a]);
        const q = at(SPHERE.pts[b]);
        const depth = (SPHERE.pts[a].z + SPHERE.pts[b].z) / 2;
        return (
          <line
            key={i}
            x1={p.x}
            y1={p.y}
            x2={q.x}
            y2={q.y}
            stroke="#60a5fa"
            strokeWidth={0.55}
            opacity={0.2 + (depth + 1) * 0.2}
          />
        );
      })}

      {SPHERE.pts.map((p, i) => {
        const s = at(p);
        return (
          <circle
            key={i}
            cx={s.x}
            cy={s.y}
            r={1.1 + (p.z + 1) * 0.7}
            fill={i % 11 === 0 ? "#f0a63c" : "#2563eb"}
            opacity={0.35 + (p.z + 1) * 0.3}
          />
        );
      })}

      <circle cx={cx} cy={cy} r={13} fill="#3b82f6" opacity={0.5} />
    </svg>
  );
}

const STATS = [
  { n: "1200+", label: "Active members" },
  { n: "80+", label: "Events per year" },
  { n: "15+", label: "ICPC finalists" },
  { n: "3", label: "Specialized wings" },
];

const SOCIALS = ["f", "𝕏", "▶", "in", "✉"];

export function DiuCpcMock() {
  return (
    <ScaledBox width={W} height={H}>
      <div className="flex h-full w-full flex-col bg-white font-sans">
        {/* utility bar */}
        <div className="flex items-center justify-between border-b border-[#eef1f6] px-[26px] py-[6px] text-[8.5px] text-[#1e3a8a]">
          <span>Daffodil International University — DIU CPC</span>
          <div className="flex items-center gap-[9px] text-[#3b82f6]">
            {SOCIALS.map((s, i) => (
              <span key={i}>{s}</span>
            ))}
          </div>
          <div className="flex items-center gap-[13px] text-[#334155]">
            <span>About Us</span>
            <span>Contact</span>
            <span>Join Us</span>
          </div>
        </div>

        {/* nav */}
        <div className="flex items-center justify-between px-[26px] py-[9px]">
          <div className="leading-none">
            <div className="text-[19px] font-black tracking-tight">
              <span className="text-[#e8722c]">c</span>
              <span className="text-[#2563eb]">p</span>
              <span className="text-[#0d9488]">c</span>
            </div>
            <div className="mt-[2px] text-[4.5px] font-semibold uppercase tracking-[0.08em] text-[#64748b]">
              Computer &amp; Programming Club
            </div>
          </div>

          <div className="flex items-center gap-[22px] text-[10px] text-[#475569]">
            <span className="border-b-[1.5px] border-[#111827] pb-[3px] font-semibold text-[#111827]">
              Home
            </span>
            <span>Events</span>
            <span>Gallery</span>
          </div>

          <div className="flex items-center gap-[14px]">
            <span className="text-[10px] text-[#475569]">Login</span>
            <span className="rounded-full bg-gradient-to-b from-[#edb04a] to-[#e0942c] px-[16px] py-[7px] text-[9px] font-bold tracking-[0.04em] text-white">
              JOIN THE CLUB
            </span>
          </div>
        </div>

        {/* live ticker */}
        <div className="flex items-center gap-[16px] bg-[#16265c] px-[16px] py-[5px] text-[8px] text-white/85">
          <span className="flex items-center gap-[5px] whitespace-nowrap font-semibold">
            <span className="h-[4px] w-[4px] rounded-full bg-[#f0a63c]" />
            LIVE
          </span>
          <div className="flex flex-1 items-center gap-[14px] overflow-hidden">
            {Array.from({ length: 11 }).map((_, i) => (
              <span key={i} className="flex items-center gap-[14px] whitespace-nowrap">
                Registration
                <span className="text-white/40">·</span>
              </span>
            ))}
          </div>
          <span className="text-white/60">×</span>
        </div>

        {/* hero */}
        <div className="flex flex-1 items-start gap-[30px] px-[52px] pt-[46px]">
          <div className="w-[54%] shrink-0">
            <h1 className="text-[47px] font-black leading-[1.04] tracking-[-0.02em] text-[#101828]">
              Computer &amp;
              <br />
              <span className="text-[#1d4ed8]">Programming Club</span>
            </h1>
            <div className="mt-[9px] text-[11.5px] font-bold text-[#1d4ed8]">
              Daffodil International University
            </div>
            <p className="mt-[11px] max-w-[430px] text-[11px] leading-[1.65] text-[#4b5563]">
              DIU CPC is the most primitive and extensive club as well as the
              biggest club in Daffodil International University. We work
              together to explore every field of Computer Science.
            </p>

            <div className="mt-[18px] flex items-center gap-[13px]">
              <span className="rounded-full bg-gradient-to-b from-[#edb04a] to-[#e0942c] px-[24px] py-[9px] text-[9.5px] font-bold tracking-[0.05em] text-white">
                JOIN THE CLUB
              </span>
              <span className="rounded-full border-[1.5px] border-[#e0942c] px-[24px] py-[9px] text-[9.5px] font-bold tracking-[0.05em] text-[#c07d1f]">
                EXPLORE EVENTS
              </span>
            </div>

            <div className="mt-[24px] flex gap-[30px]">
              {STATS.map((s) => (
                <div key={s.label}>
                  <div className="text-[19px] font-black leading-none text-[#101828]">
                    {s.n}
                  </div>
                  <div className="mt-[4px] max-w-[62px] text-[6.5px] font-semibold uppercase tracking-[0.07em] text-[#64748b]">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-[60px] h-[290px] flex-1">
            <NetworkSphere />
          </div>
        </div>

        <div className="h-[10px] w-full bg-[#1257b0]" />
      </div>
    </ScaledBox>
  );
}
