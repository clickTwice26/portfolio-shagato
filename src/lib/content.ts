/**
 * ─────────────────────────────────────────────────────────────
 *  EDIT EVERYTHING ABOUT YOU HERE.
 *  This is the only file you need to touch to make the site yours.
 * ─────────────────────────────────────────────────────────────
 */

export const site = {
  name: "Shagato",
  fullName: "Shagato Chowdhury",
  role: "Software Engineer",
  location: "Dhaka, BD", // first word is used as the city label
  timezone: "Asia/Dhaka", // IANA tz for the live clock (e.g. "Europe/London")
  email: "shagato.work@gmail.com",
  url: "https://shagato.dev", // your deployed URL (used for SEO/OG)

  description:
    "Software engineer building considered software for the web.",
} as const;

export type Project = {
  index: string;
  title: string;
  blurb: string;
  year: string;
  href: string;
};

export const projects: Project[] = [
  {
    index: "01",
    title: "DSAT School",
    blurb: "SAT practice portal.",
    year: "2025–2026",
    href: "/dsat-school",
  },
  {
    index: "02",
    title: "Localoy.dhk",
    blurb: "People, culture, Dhaka.",
    year: "2025–2026",
    href: "/localoy",
  },
  {
    index: "03",
    title: "DIU CPC",
    blurb: "Computer Programming Club of DIU.",
    year: "2026",
    href: "#",
  },
  {
    index: "04",
    title: "DeepHealthLab",
    blurb: "Health research lab.",
    year: "2025",
    href: "#",
  },
];

export type DsatProduct = {
  name: string;
  domain: string;
  href: string;
  desc: string;
  /** Optional longer write-up shown under the one-liner. */
  detail?: string;
  /** Optional links to the source repo(s). */
  repos?: { label: string; href: string }[];
  /**
   * false when the site sends X-Frame-Options / CSP frame-ancestors and so
   * cannot be embedded — we show a fallback card instead of a dead iframe.
   */
  frameable?: boolean;
  /** YouTube video id — shown instead of the site preview when set. */
  video?: string;
};

export const dsatSchool = {
  name: "DSAT School",
  tagline: "SAT prep, built as four small pieces of software.",
  products: [
    {
      name: "Landing",
      domain: "dsatschool.com",
      href: "https://dsatschool.com",
      desc: "The front door — marketing site.",
      detail:
        "A ground-up rebuild of the whole public platform, not just the homepage — marketing pages, course detail pages with country-aware pricing, a mentor system with filters and profiles, a blog, and a full auth + dashboard flow (sign-in, SSO, analytics, content, mentor reviews). Built on Next.js 16, React 19, and TypeScript, with Radix UI primitives, Tailwind, and Framer Motion for the motion work. 200+ commits since December 2025.",
      repos: [
        {
          label: "source",
          href: "https://github.com/clickTwice26/dsatschool-rebranding",
        },
      ],
    },
    {
      name: "SATBuddy",
      domain: "satbuddy.dsatschool.com",
      href: "https://satbuddy.dsatschool.com",
      desc: "Practice portal.",
      frameable: false, // X-Frame-Options: SAMEORIGIN
      video: "EAiGBdedeA4",
      detail:
        "A full SAT/IELTS prep platform, not just a quiz tool — live timed mock tests, skill-based practice, reading and vocabulary drills (350+ words, plus a game mode), an AI chat tutor over WebSockets, a mentor and community system with groups and a social wall, a video library, and a university finder with EFC estimates. The frontend is Next.js 16 + React 19 with Radix UI, drag-and-drop reordering, and in-browser video editing (ffmpeg.wasm); the backend is FastAPI on Postgres + MongoDB with Redis/Celery workers, JWT sessions, and a Gemini-powered AI service. 600+ commits combined across both repos.",
      repos: [
        {
          label: "frontend",
          href: "https://github.com/clickTwice26/sat-buddy-ultimate-frontend-personal",
        },
        {
          label: "backend",
          href: "https://github.com/clickTwice26/sat-buddy-ultimate-backend",
        },
      ],
    },
    {
      name: "LMS",
      domain: "lms.dsatschool.com",
      href: "https://lms.dsatschool.com",
      desc: "Learning management system.",
      frameable: false, // X-Frame-Options: DENY
      detail:
        "A full LMS for the enrolled cohort — courses with lessons and reading modules, timed assessments, live-class scheduling with attendance tracking, a rewards layer, mentorship and community discussions, plus admin tools for analytics, notices, and feature flags. Built on Django 6 with HTMX for dynamic UI, Django Channels and Redis for real-time features, Celery for background jobs (email, SMS, Discord notifications, backups to Cloudflare R2), and a Gemini-powered AI service. 390+ commits since August 2025.",
      repos: [
        {
          label: "source",
          href: "https://github.com/clickTwice26/dsatschool-lms",
        },
      ],
    },
    {
      name: "Pay",
      domain: "pay.dsatschool.com",
      href: "https://pay.dsatschool.com",
      desc: "Payments and marketing.",
      detail:
        "The commerce and subscription backbone for the whole DSAT School ecosystem — SSLCommerz and bKash payment gateways, product bundles and coupon-based checkout, an affiliate/referral system with commission tracking, and a public API (products, subscriptions) that the LMS and other services check against via SSO for membership status. Built on Flask with SQLAlchemy/PostgreSQL, Celery for background jobs, Authlib for OAuth/SSO, and pyHanko for digitally-signed PDF invoices. 160+ commits since May 2025.",
      repos: [
        {
          label: "source",
          href: "https://github.com/clickTwice26/dsatschool-payment",
        },
      ],
    },
  ] satisfies DsatProduct[],
} as const;

export type LocaloyProject = {
  name: string;
  tag: string; // short stack / role label
  desc: string; // one-liner
  detail: string; // paragraph
};

export type LocaloyGroup = {
  label: string;
  projects: LocaloyProject[];
};

export const localoy: {
  name: string;
  tagline: string;
  groups: LocaloyGroup[];
  also: string;
} = {
  name: "Localoy",
  tagline:
    "A local-experiences platform for Dhaka — a consumer app, a partner portal, and the services running underneath.",
  groups: [
    {
      label: "apps",
      projects: [
        {
          name: "Localoy App",
          tag: "Flutter · consumer",
          desc: "The consumer app.",
          detail:
            "A Flutter app for discovering and saving local experiences around Dhaka — Tinder-style swiping through events, dining and activities, onboarding by area, interests and institution, plus nearby (“loco”), saved, and club/rewards tabs. Feature-first architecture with Riverpod (code-gen) and Freezed, GoRouter and Dio; phone-OTP auth with tokens in encrypted secure storage. Ships to iOS, Android, Web (Firebase) and macOS through GitHub Actions + Fastlane. 140+ commits since September 2025.",
        },
        {
          name: "Partner Portal",
          tag: "Next.js · web",
          desc: "Where businesses run their listings.",
          detail:
            "The web app partners use to manage their offerings — events, activities, dining, experiences and products. Next.js 16 on the App Router with Turbopack, Tailwind 4, shadcn/ui and Radix primitives, and Zustand for state. 300+ commits since March 2026.",
        },
        {
          name: "Admin Portal",
          tag: "React · internal",
          desc: "The internal staff dashboard.",
          detail:
            "The tool Localoy staff use to run the platform — partner and staff management, experience moderation, drag-to-reorder campaigns and banners, and a 30-day growth chart. Includes partner impersonation: an admin mints a short-lived token and drops straight into a partner's portal. React 19 + Vite 8, React Router, Recharts, plain CSS.",
        },
      ],
    },
    {
      label: "services",
      projects: [
        {
          name: "Partner Backend",
          tag: "Express · Prisma",
          desc: "The core API.",
          detail:
            "The REST API behind both portals and the data source for the mobile app. Express 4 + Prisma 6 on PostgreSQL, JWT auth, Helmet, and Swagger docs. It models the whole experience domain — Activity, Dining and Store configs each own their items with cascade deletes and one config per partner. 280+ commits since April 2026.",
        },
        {
          name: "Auth Prime",
          tag: "FastAPI · auth",
          desc: "Consumer OTP auth.",
          detail:
            "The consumer auth service — Bangladesh phone-number OTP login and JWT issuance for the mobile app, on its own PostgreSQL + Redis. Async SQLAlchemy + Alembic, one-time session keys and 5-minute OTP windows in Redis, SMS through SMS.net.bd, and OTPs mirrored to Discord in non-prod so you can sign in without a real SIM. 60-minute access / 30-day refresh tokens.",
        },
        {
          name: "Notify",
          tag: "FastAPI · notifications",
          desc: "Cross-app notification broker.",
          detail:
            "One service that takes an event from any Localoy backend and fans it out to a user across every channel they have — in-app centre, mobile push (FCM), web push (VAPID), and email/SMS fallback. FastAPI with a Redis-Streams work queue, a worker pool with a retry scheduler and reaper, and a PostgreSQL system of record, so a notification is a durable record rather than an ephemeral job. mypy --strict clean, 169 tests.",
        },
        {
          name: "AI Proxy",
          tag: "FastAPI · AI queue",
          desc: "Queue-backed LLM broker.",
          detail:
            "A broker for the admin tool's LLM calls. Because a model call can take 5–120s — longer than a browser or reverse proxy will hold a connection — callers POST a request, get a job id back immediately (202), and poll until the answer lands. It holds every provider key (Anthropic, OpenAI, Gemini), so no caller ever touches a vendor key. A Redis Stream + consumer group gives crash recovery for free via XAUTOCLAIM, with exponential backoff and jitter on retries. Redis-only, no database.",
        },
      ],
    },
  ],
  also:
    "Plus an admin API (Express + Prisma, its own database) and localoy-docs, a Quartz static site documenting the whole platform.",
};

export const socials: { label: string; href: string; handle: string }[] = [
  {
    label: "GitHub",
    href: "https://github.com/clicktwice26",
    handle: "@clicktwice26",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/shagato-chowdhury/",
    handle: "in/shagato-chowdhury",
  },
];
