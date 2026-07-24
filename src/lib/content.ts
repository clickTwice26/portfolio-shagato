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
    title: "TypeTrek",
    blurb: "Typing contests, live leaderboards.",
    year: "2025–2026",
    href: "/typetrek",
  },
  {
    index: "04",
    title: "DIU CPC",
    blurb: "Computer Programming Club of DIU.",
    year: "2026",
    href: "/diu-cpc",
  },
  {
    index: "05",
    title: "DeepHealthLab",
    blurb: "Health research lab.",
    year: "2025",
    href: "/deep-health-lab",
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

export type CaseProject = {
  name: string;
  tag: string; // short stack / role label
  desc: string; // one-liner
  detail: string; // paragraph
  /** Live site to preview alongside the entry. */
  embed?: string;
  /**
   * false when the site sends X-Frame-Options / CSP frame-ancestors and so
   * cannot be embedded — we show a fallback card instead of a dead iframe.
   */
  frameable?: boolean;
  /** Static stand-in to render when the real site can't be framed. */
  mock?: "partner-portal" | "admin-portal" | "diu-cpc" | "typetrek";
};

export type CaseGroup = {
  label: string;
  projects: CaseProject[];
};

export const localoy: {
  name: string;
  tagline: string;
  groups: CaseGroup[];
  also: string;
} = {
  name: "Localoy",
  tagline:
    "Dhaka is full of things to do and no good way to find them. Localoy is the attempt at fixing that — for the people looking, and for the places worth finding.",
  groups: [
    {
      label: "apps",
      projects: [
        {
          name: "Localoy App",
          tag: "for people in Dhaka",
          embed: "https://www.localoy.app/",
          desc: "Finding something to do, without the group-chat archaeology.",
          detail:
            "Most people find events and places the same way — scrolling Facebook groups, asking friends, hearing about it a week after it happened. This puts events, dining and activities in one place, and makes looking through them feel like flipping cards rather than reading a directory: swipe, save the ones worth a second look, come back later. You tell it your area, your interests and where you study, so it stops offering you things across the city you were never going to. There’s a tab for what’s near you right now, a list of everything you’ve saved, and a club section that rewards actually turning up.",
        },
        {
          name: "Partner Portal",
          tag: "for business owners",
          embed: "https://partner.localoy.app/",
          frameable: false, // X-Frame-Options: DENY
          mock: "partner-portal",
          desc: "Somewhere to put what you offer, and keep it true.",
          detail:
            "A café changing its menu, a gym adding a class, an organiser announcing a night — all of that used to mean messaging someone and hoping the listing got updated. Here the business does it directly: post an event, list activities, publish a menu or a product, correct a price, take something down once it’s over. What people see is what the owner last typed.",
        },
        {
          name: "Admin Portal",
          tag: "for the Localoy team",
          mock: "admin-portal",
          desc: "Keeping the platform worth opening.",
          detail:
            "Someone has to bring new partners on, look at what’s being published, and decide what earns the front page. That’s this — adding partners and staff, reviewing listings, dragging the promoted banners into the order people will actually see, and watching whether the whole thing is growing week to week. Support can also step into a partner’s account and see their screen exactly as they see it, which turns “it’s broken on my side” into a thirty-second conversation.",
        },
      ],
    },
    {
      label: "behind the scenes",
      projects: [
        {
          name: "Partner Backend",
          tag: "one shared source",
          desc: "Everything agreeing on the same facts.",
          detail:
            "The app, the partner portal and the admin tool all read and write the same information, so a menu edited in the morning is the menu the app shows at lunch — nobody re-types anything anywhere. It also holds the rules for what a listing is allowed to be, which is what stops a partner ending up with two half-finished versions of the same restaurant.",
        },
        {
          name: "Auth Prime",
          tag: "signing in",
          desc: "A phone number instead of a password.",
          detail:
            "Nobody wants another account to remember. You put in your number, a code arrives by SMS, and you’re in — and you stay in, so opening the app doesn’t start with a login screen every single time.",
        },
        {
          name: "Notify",
          tag: "staying in touch",
          desc: "Telling people the things worth telling them.",
          detail:
            "A saved event is tomorrow, someone replied, something opened near you. Those have to actually reach a person, so they arrive in a notification centre inside the app, as a push on a phone, as a push in a browser, or as an email or SMS when nothing else will land. People pick what they want to hear about, which is the whole difference between useful and noise.",
        },
        {
          name: "AI Proxy",
          tag: "internal tooling",
          desc: "Taking the slow, repetitive work off the team.",
          detail:
            "Writing listing copy and tidying up submissions is the dull half of running a platform, so the internal tools hand it to an AI instead. That work is slow enough that sitting and watching it would waste someone’s afternoon, so it gets handed off and comes back when it’s ready while the team carries on with something else.",
        },
      ],
    },
  ],
  also:
    "There’s also a separate service behind the admin tools, and an internal handbook the team keeps as they go."
};

export const diuCpc: {
  name: string;
  tagline: string;
  groups: CaseGroup[];
  also: string;
} = {
  name: "DIU CPC",
  tagline:
    "The Computer Programming Club of Daffodil International University — 1,200 members, four wings, and eighty events a year, all run from one place.",
  groups: [
    {
      label: "the site",
      projects: [
        {
          name: "Public site",
          tag: "for anyone",
          embed: "https://www.diucpc.app/",
          frameable: false, // X-Frame-Options: DENY + frame-ancestors 'none'
          mock: "diu-cpc",
          desc: "The front of the club.",
          detail:
            "What someone sees before they join — who the club is, and the four wings they could end up in: competitive programming and ICPC training, development and hackathons, mentored research, and the careers wing. Events and seminars each get their own page, past ones leave a gallery behind, and every term’s committee is listed. Joining is a form, an orientation, then picking the wing you want.",
        },
      ],
    },
    {
      label: "behind the login",
      projects: [
        {
          name: "Member dashboard",
          tag: "for the 1,200",
          desc: "Everything you signed up for, in one place.",
          detail:
            "Courses you’re enrolled in, with their assessments and live classes. A calendar of what’s coming. Tasks to pick up, and a leaderboard for the people who keep picking them up. The certificates you’ve earned, downloadable. And a shop for club merchandise.",
        },
        {
          name: "Committee tools",
          tag: "for the people running it",
          desc: "Running a club that size is the real work.",
          detail:
            "Publishing events, seminars and announcements. Building courses, grading what gets submitted, and taking attendance for live classes. Handling recruitment intake, curating the gallery, listing merchandise, and rotating the committee every term. Certificates get a template builder, so three hundred of them go out looking right without anyone opening a design tool.",
        },
      ],
    },
  ],
  also:
    "Roles decide who can see what, and an admin can view the site as a given member — which turns “it’s broken for me” into something you can actually look at.",
};

export const typeTrek: {
  name: string;
  tagline: string;
  groups: CaseGroup[];
  also: string;
} = {
  name: "TypeTrek",
  tagline:
    "A typing test is a solo thing until you turn it into a race. TypeTrek is the race — timed contests, a leaderboard that moves while you type, and a season that runs like a sport, built for DIU CPC.",
  groups: [
    {
      label: "the contest",
      projects: [
        {
          name: "TypeTrek Face-Off",
          tag: "for anyone who wants to race",
          embed: "https://typetrek.diucpc.app/",
          frameable: false, // X-Frame-Options: SAMEORIGIN
          mock: "typetrek",
          desc: "A typing test, turned into a sport.",
          detail:
            "Typing faster is more fun when someone's watching the same clock. This is the front of it — join a contest and type the same passage as everyone else while the rankings shuffle live, or take the solo speed test first to see where you stand. It keeps score across seasons, so there's a running story of who was quickest this term and who beat their own best.",
        },
      ],
    },
    {
      label: "behind the login",
      projects: [
        {
          name: "The speed test",
          tag: "the thing you actually do",
          desc: "Where the words meet the keyboard.",
          detail:
            "The part you sit down to. Pick a mode — a countdown, a fixed number of words, a quote, or your own text — and start typing; letters go green as you land them and red when you miss, and your speed and accuracy tick upward in front of you. Turn punctuation and numbers on when you want it harder. No account needed to try it.",
        },
        {
          name: "Contests & seasons",
          tag: "for the club",
          desc: "The part that makes it a competition.",
          detail:
            "A contest is the same passage, the same timer, and a board that reorders itself as people finish — a handful of levels to climb, friends to challenge, and a rank that updates the instant a result lands. DIU CPC runs it in seasons: weekly matches, a Face-Off final, and a storyboard afterwards that keeps the champions and the record runs on the wall.",
        },
      ],
    },
    {
      label: "behind the scenes",
      projects: [
        {
          name: "One backend",
          tag: "one shared service",
          desc: "Counting the keystrokes.",
          detail:
            "Every finished test is a result the server keeps — the words, the time, the mistakes — so the leaderboards and the personal graphs are reading real history instead of guessing. It handles signing in, saves each run, and holds the rankings in a fast cache so the board can reorder the moment someone crosses the line.",
        },
      ],
    },
  ],
  also:
    "The number on screen is the point: every run is saved against your name, so today's speed becomes a line you can watch climb over weeks — your best, your accuracy, your streak.",
};

export const deepHealth: {
  name: string;
  tagline: string;
  groups: CaseGroup[];
  also: string;
} = {
  name: "DeepHealth Research Lab",
  tagline:
    "A medical-AI research group needs a public face for its work and a private place to do it. DeepHealth is both — the site the world sees, and the workspace the researchers actually use.",
  groups: [
    {
      label: "the site",
      projects: [
        {
          name: "Public site",
          tag: "for anyone",
          embed: "https://deephealthlab.com/",
          desc: "The front of the lab.",
          detail:
            "A research group is only as visible as its website. This is where the lab explains what it works on, shows the projects in progress and the papers already out, introduces the people behind them, and lists the roles it's hiring for. A blog and a news feed cover the in-between work, and anyone can subscribe to a newsletter instead of remembering to check back.",
        },
      ],
    },
    {
      label: "behind the login",
      projects: [
        {
          name: "The workspace",
          tag: "for the researchers",
          desc: "Where the work actually happens.",
          detail:
            "Behind the same login is the private half. Research groups keep each team's threads in one place, an experiments log records what was tried and how it went, and publications are drafted and tracked from idea to paper. A shared file store holds the datasets and documents that otherwise live in a dozen inboxes, and a community feed gives the lab somewhere to talk to itself. Everyone's profile doubles as their public researcher page.",
        },
        {
          name: "Running the lab",
          tag: "for whoever keeps it going",
          desc: "The half nobody sees.",
          detail:
            "Someone keeps the team page current, decides the research areas, writes the posts, sends the newsletter, and reads through job applications. That's this — tools to manage people and what they're allowed to do, publish everything the public site shows, and see who applied to which opening, none of it needing a developer.",
        },
      ],
    },
    {
      label: "behind the scenes",
      projects: [
        {
          name: "One backend",
          tag: "one shared service",
          desc: "Everything reading from the same place.",
          detail:
            "The public site and the private workspace are two faces of one service, so a paper added in the dashboard appears on the site the moment it's saved — nothing is typed twice. It handles signing in, the uploaded files, the emails that go out, a search that reaches across everything, and a quiet record of who changed what, and it's built to keep standing when a lot of people arrive at once.",
        },
      ],
    },
  ],
  also:
    "Roles decide who sees the workspace and who can publish to the public site — a visitor, a lab member, and an admin each get a different door through the same front.",
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
