import type { ComponentType, SVGProps } from "react";
import { ScaledBox } from "./ScaledBox";

/**
 * A static recreation of the Localoy Admin dashboard, scrolled to the tool
 * grid. The real portal is internal-only and can't be reached publicly, so
 * this stands in for it. Laid out at desktop size and scaled to fit.
 */

const W = 1280;
const H = 800;

type Icon = ComponentType<SVGProps<SVGSVGElement>>;

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const Grid: Icon = (p) => (
  <svg viewBox="0 0 24 24" {...stroke} {...p}>
    <rect x="3" y="3" width="7" height="7" rx="1.5" />
    <rect x="14" y="3" width="7" height="7" rx="1.5" />
    <rect x="3" y="14" width="7" height="7" rx="1.5" />
    <rect x="14" y="14" width="7" height="7" rx="1.5" />
  </svg>
);
const Trend: Icon = (p) => (
  <svg viewBox="0 0 24 24" {...stroke} {...p}>
    <path d="m3 17 5-5 4 4 6-7" />
    <path d="M14 9h4v4" />
  </svg>
);
const Contact: Icon = (p) => (
  <svg viewBox="0 0 24 24" {...stroke} {...p}>
    <rect x="3" y="4" width="18" height="16" rx="2" />
    <circle cx="9" cy="10" r="2" />
    <path d="M6 16.5c.6-1.4 1.7-2 3-2s2.4.6 3 2" />
    <path d="M15 9.5h3.5M15 13h3.5" />
  </svg>
);
const Bank: Icon = (p) => (
  <svg viewBox="0 0 24 24" {...stroke} {...p}>
    <path d="m12 3 9 5H3Z" />
    <path d="M6 10v7M10 10v7M14 10v7M18 10v7" />
    <path d="M3 20h18" />
  </svg>
);
const Compass: Icon = (p) => (
  <svg viewBox="0 0 24 24" {...stroke} {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="m15.5 8.5-2.2 5.3-5.3 2.2 2.2-5.3Z" />
  </svg>
);
const Gamepad: Icon = (p) => (
  <svg viewBox="0 0 24 24" {...stroke} {...p}>
    <rect x="2.5" y="7.5" width="19" height="10" rx="4.5" />
    <path d="M7 11v3M5.5 12.5h3" />
    <circle cx="16" cy="11.8" r="1" />
    <circle cx="18.4" cy="14" r="1" />
  </svg>
);
const Book: Icon = (p) => (
  <svg viewBox="0 0 24 24" {...stroke} {...p}>
    <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v18H6.5A2.5 2.5 0 0 1 4 18.5Z" />
    <path d="M9 3v18" />
  </svg>
);
const Search: Icon = (p) => (
  <svg viewBox="0 0 24 24" {...stroke} {...p}>
    <circle cx="11" cy="11" r="7" />
    <path d="m20 20-3.6-3.6" />
  </svg>
);
const Shield: Icon = (p) => (
  <svg viewBox="0 0 24 24" {...stroke} {...p}>
    <path d="m12 3 7.5 3v6c0 4.2-3.2 7.4-7.5 9-4.3-1.6-7.5-4.8-7.5-9V6Z" />
    <path d="m8.8 12 2.2 2.2 4.2-4.4" />
  </svg>
);
const Sliders: Icon = (p) => (
  <svg viewBox="0 0 24 24" {...stroke} {...p}>
    <path d="M4 7h16M4 12h16M4 17h16" />
    <circle cx="9" cy="7" r="1.9" />
    <circle cx="15" cy="12" r="1.9" />
    <circle cx="8" cy="17" r="1.9" />
  </svg>
);
const Users: Icon = (p) => (
  <svg viewBox="0 0 24 24" {...stroke} {...p}>
    <circle cx="9" cy="8.5" r="3" />
    <path d="M3.5 19.5c0-3 2.5-5 5.5-5s5.5 2 5.5 5" />
    <circle cx="17.5" cy="9.5" r="2.4" />
    <path d="M16.5 14.8c2.6.2 4 2.1 4 4.7" />
  </svg>
);
const User: Icon = (p) => (
  <svg viewBox="0 0 24 24" {...stroke} {...p}>
    <circle cx="12" cy="8.5" r="3.4" />
    <path d="M5.5 20c0-3.4 2.9-5.8 6.5-5.8S18.5 16.6 18.5 20" />
  </svg>
);
const Bars: Icon = (p) => (
  <svg viewBox="0 0 24 24" {...stroke} {...p}>
    <path d="M5.5 20v-8M12 20V5M18.5 20v-6" />
  </svg>
);
const Megaphone: Icon = (p) => (
  <svg viewBox="0 0 24 24" {...stroke} {...p}>
    <path d="M4 10.5v3a1 1 0 0 0 1 1h3l7 4V5.5l-7 4H5a1 1 0 0 0-1 1Z" />
    <path d="M18 9.5a3.4 3.4 0 0 1 0 5" />
  </svg>
);
const Star: Icon = (p) => (
  <svg viewBox="0 0 24 24" {...stroke} {...p}>
    <path d="m12 3.5 2.6 5.4 5.9.8-4.3 4.1 1 5.9-5.2-2.8-5.2 2.8 1-5.9L3.5 9.7l5.9-.8Z" />
  </svg>
);
const Video: Icon = (p) => (
  <svg viewBox="0 0 24 24" {...stroke} {...p}>
    <rect x="3" y="6" width="12.5" height="12" rx="2.5" />
    <path d="m21 8.5-5.5 3.5 5.5 3.5Z" />
  </svg>
);
const Pin: Icon = (p) => (
  <svg viewBox="0 0 24 24" {...stroke} {...p}>
    <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
);
const Layers: Icon = (p) => (
  <svg viewBox="0 0 24 24" {...stroke} {...p}>
    <path d="m12 3 9 4.8-9 4.8-9-4.8Z" />
    <path d="m3 13 9 4.8 9-4.8" />
  </svg>
);
const Schema: Icon = (p) => (
  <svg viewBox="0 0 24 24" {...stroke} {...p}>
    <rect x="3" y="3.5" width="7" height="6" rx="1.2" />
    <rect x="14" y="3.5" width="7" height="6" rx="1.2" />
    <rect x="8.5" y="14.5" width="7" height="6" rx="1.2" />
    <path d="M6.5 9.5v2.5h11V9.5M12 12v2.5" />
  </svg>
);
const Lock: Icon = (p) => (
  <svg viewBox="0 0 24 24" {...stroke} {...p}>
    <rect x="5" y="10.5" width="14" height="9.5" rx="2" />
    <path d="M8 10.5V7.5a4 4 0 0 1 8 0v3" />
  </svg>
);

const NAV_GENERAL: { label: string; icon: Icon; active?: boolean }[] = [
  { label: "Dashboard", icon: Grid, active: true },
  { label: "Monitor", icon: Trend },
  { label: "Partners", icon: Contact },
  { label: "Reference Data", icon: Bank },
  { label: "Experiences", icon: Compass },
  { label: "Fun Zone", icon: Gamepad },
  { label: "API Docs", icon: Book },
  { label: "Scrap Restaurant", icon: Search },
];

const NAV_ADMIN: { label: string; icon: Icon }[] = [
  { label: "Partner Approvals", icon: Shield },
  { label: "Management", icon: Sliders },
  { label: "Staffs", icon: Users },
  { label: "Staff Activity", icon: Trend },
  { label: "App Users", icon: User },
  { label: "App Analytics", icon: Bars },
  { label: "Campaigns", icon: Megaphone },
  { label: "Home Ordering", icon: Grid },
];

type Tool = { title: string; desc: string; icon: Icon; hover?: boolean };

const PARTNERS: Tool[] = [
  {
    title: "Partners",
    desc: "Browse partner accounts, edit details and impersonate.",
    icon: Contact,
  },
  {
    title: "Experiences",
    desc: "All partner offerings across every module.",
    icon: Compass,
  },
  {
    title: "Scrap Restaurant",
    desc: "Pull restaurant details from an external source.",
    icon: Search,
  },
  {
    title: "Partner Approvals",
    desc: "Review and approve partners waiting to go live.",
    icon: Shield,
  },
];

const APP_CONTENT: Tool[] = [
  {
    title: "Fun Zone",
    desc: "Games and playful surfaces inside the app.",
    icon: Gamepad,
  },
  {
    title: "Campaigns",
    desc: "Promotional campaigns surfaced in the app.",
    icon: Megaphone,
  },
  {
    title: "Home Ordering",
    desc: "Arrange banners and sections on the app home…",
    icon: Grid,
  },
  {
    title: "Public Figures",
    desc: "Directory of performers, creators and cast.",
    icon: Star,
  },
  {
    title: "Creator Videos",
    desc: "Video content published by creators.",
    icon: Video,
  },
];

const PEOPLE: Tool[] = [
  {
    title: "Management",
    desc: "Service controls and portal-wide settings.",
    icon: Sliders,
    hover: true,
  },
  { title: "Staffs", desc: "Internal admin and staff accounts.", icon: Users },
  {
    title: "App Users",
    desc: "Consumer accounts registered through the mobil…",
    icon: User,
  },
];

const REFERENCE: Tool[] = [
  { title: "Reference Data", desc: "Lookup tables and institutions", icon: Bank },
  { title: "API Docs", desc: "Endpoint reference for the", icon: Book },
  { title: "Zones & Areas", desc: "Geographic zones and areas", icon: Pin },
  { title: "Attribute Registry", desc: "Source of truth for", icon: Layers },
  { title: "Database Schema", desc: "Explore Prisma models, fields", icon: Schema },
];

function ToolCard({ tool }: { tool: Tool }) {
  const Icon = tool.icon;
  return (
    <div
      className={`relative w-[161px] rounded-[7px] border bg-white p-[13px] ${
        tool.hover ? "border-[#2563eb]" : "border-[#e5e7eb]"
      }`}
    >
      {tool.hover && (
        <span className="absolute right-[10px] top-[9px] text-[12px] leading-none text-[#9ca3af]">
          +
        </span>
      )}
      <div className="grid h-[32px] w-[32px] place-items-center rounded-[8px] bg-[#e8f0fe]">
        <Icon className="h-[17px] w-[17px] text-[#2563eb]" />
      </div>
      <div className="mt-[11px] text-[10.5px] font-semibold text-[#111827]">
        {tool.title}
      </div>
      <p className="mt-[4px] text-[9px] leading-[1.45] text-[#6b7280]">
        {tool.desc}
      </p>
    </div>
  );
}

function Section({ label, tools }: { label: string; tools: Tool[] }) {
  return (
    <div className="mt-[22px]">
      <div className="text-[7.5px] font-semibold uppercase tracking-[0.09em] text-[#6b7280]">
        {label}
      </div>
      <div className="mt-[9px] flex w-[861px] flex-wrap items-stretch gap-[14px]">
        {tools.map((t) => (
          <ToolCard key={t.title} tool={t} />
        ))}
      </div>
    </div>
  );
}

function NavItem({
  label,
  icon: Icon,
  active,
}: {
  label: string;
  icon: Icon;
  active?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-[10px] rounded-[6px] px-[11px] py-[7px] ${
        active ? "bg-[#eaf0f7]" : ""
      }`}
    >
      <Icon
        className={`h-[14px] w-[14px] ${active ? "text-[#2563eb]" : "text-[#374151]"}`}
      />
      <span className="text-[10px] text-[#111827]">{label}</span>
    </div>
  );
}

export function AdminPortalMock() {
  return (
    <ScaledBox width={W} height={H}>
      <div className="flex h-full w-full bg-white font-sans">
        {/* sidebar */}
        <div className="flex w-[193px] shrink-0 flex-col border-r border-[#e5e7eb] bg-white">
          <div className="flex items-center justify-between px-[14px] pb-[12px] pt-[16px]">
            <span className="text-[13px] font-semibold text-[#111827]">
              Localoy Admin
            </span>
            <svg viewBox="0 0 24 24" {...stroke} className="h-[11px] w-[11px] text-[#6b7280]">
              <path d="m14 6-6 6 6 6" />
            </svg>
          </div>

          <div className="px-[10px]">
            <div className="px-[11px] pb-[5px] text-[7px] font-semibold uppercase tracking-[0.1em] text-[#6b7280]">
              General
            </div>
            {NAV_GENERAL.map((n) => (
              <NavItem key={n.label} {...n} />
            ))}

            <div className="flex items-center gap-[4px] px-[11px] pb-[5px] pt-[16px] text-[7px] font-semibold uppercase tracking-[0.1em] text-[#6b7280]">
              <Lock className="h-[8px] w-[8px]" />
              Admin only
            </div>
            {NAV_ADMIN.map((n) => (
              <NavItem key={n.label} {...n} />
            ))}
          </div>
        </div>

        {/* main */}
        <div className="flex min-w-0 flex-1 flex-col bg-white">
          <div className="flex items-center justify-end gap-[8px] px-[26px] pb-[12px] pt-[14px]">
            <div className="grid h-[21px] w-[21px] place-items-center rounded-full bg-[#3b74d4] text-[9px] font-semibold text-white">
              S
            </div>
            <div className="leading-tight">
              <div className="text-[10px] font-semibold text-[#111827]">
                Shagato Chowdhury
              </div>
              <div className="text-[8px] text-[#6b7280]">ADMIN</div>
            </div>
            <svg viewBox="0 0 24 24" {...stroke} className="h-[9px] w-[9px] text-[#6b7280]">
              <path d="m6 9 6 6 6-6" />
            </svg>
          </div>

          <div className="flex-1 overflow-hidden bg-[#fbfbfc] px-[26px] pt-[2px]">
            <div className="flex w-[861px] flex-wrap items-stretch gap-[14px]">
              {PARTNERS.map((t) => (
                <ToolCard key={t.title} tool={t} />
              ))}
            </div>
            <Section label="App content" tools={APP_CONTENT} />
            <Section label="People & access" tools={PEOPLE} />
            <Section label="Reference & docs" tools={REFERENCE} />
          </div>
        </div>
      </div>
    </ScaledBox>
  );
}
