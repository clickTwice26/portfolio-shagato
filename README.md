# Shagato — Portfolio

A minimal, artful one-page portfolio. Monochrome with a single accent, big type,
serif-italic accents, grain texture, a live local clock, and a smooth dark/light
toggle.

## Stack

- **[Next.js 16](https://nextjs.org)** (App Router, Turbopack) · **React 19**
- **[Tailwind CSS v4](https://tailwindcss.com)**
- **[Motion](https://motion.dev)** for scroll + entrance animation
- **[Geist](https://vercel.com/font)** (sans + mono) & **Instrument Serif** via `next/font`
- TypeScript, fully static (SSG)

## Develop

```bash
npm run dev     # start the dev server → http://localhost:3000
npm run build   # production build
npm run start   # serve the production build
npm run lint    # eslint
```

## Make it yours

**Everything personal lives in one file:** [`src/lib/content.ts`](src/lib/content.ts).

Edit it to change:

- `site` — your name, role, location, timezone (for the live clock), email, availability
- `hero` — the headline (wrap a word in the `accent` field to get the italic serif treatment)
- `about` — your bio (wrap any phrase in `*asterisks*` to italicize it)
- `projects` — your selected work (title, blurb, year, tags, link)
- `stack` — the skills columns
- `marquee` — the scrolling tech strip
- `socials` — your links

No other file needs to change for the content.

### Tweak the look

- **Colors** (the accent, ink, paper, dark palette): the CSS variables at the top of
  [`src/app/globals.css`](src/app/globals.css).
- **Fonts**: swap in [`src/app/layout.tsx`](src/app/layout.tsx).
- **Favicon**: [`src/app/icon.svg`](src/app/icon.svg).

## Deploy

Any static/Node host works. The one-click path is [Vercel](https://vercel.com/new):
push to GitHub and import the repo — no configuration needed. Set `site.url` in
`content.ts` to your final domain so the SEO/social tags are correct.
