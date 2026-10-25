# mohariz.me

Personal portfolio site for Muhammad Hariz, live at [mohariz.me](https://mohariz.me).

Built with [Gatsby 5](https://www.gatsbyjs.com/), React 18 and TypeScript, styled with
Tailwind CSS (plus Chakra UI and Framer Motion). Content is managed in a headless WordPress
instance and pulled in at build time.

## Getting started

```bash
npm install
cp .env.example .env.development   # then fill in the values
npm run develop                    # http://localhost:8000
```

### Environment variables

| Variable | Purpose |
| --- | --- |
| `GATSBY_WORDPRESS_URL` | WordPress GraphQL endpoint (WPGraphQL) |
| `GATSBY_LINKEDIN_URL` | LinkedIn profile link |
| `GATSBY_GITHUB_LINK` | GitHub profile link |
| `GATSBY_RESUME_LINK` | Resume link |
| `GATSBY_GOOGLE_ANALYTICS_TRACKING_ID` | Google Analytics ID |

`gatsby-config.ts` loads `.env.${NODE_ENV}` (`.env.development` for `develop`,
`.env.production` for `build`). Both are gitignored.

## Scripts

| Command | What it does |
| --- | --- |
| `npm run develop` | Start the dev server |
| `npm run build` | Production build into `public/` |
| `npm run serve` | Serve the production build locally |
| `npm run typecheck` | TypeScript check (`tsc --noEmit`) |
| `npm run clean` | Clear Gatsby's cache |

A Husky pre-commit hook runs ESLint and Prettier on staged files.

## Project structure

```
src/
  components/   UI sections (Hero, Experiences, SkillSets, AboutMe, ...) and shared pieces
  hooks/        Scroll-behavior hooks
  pages/        Routes: / , /projects , 404
  styles/       Global CSS (Tailwind)
gatsby-node.js  Creates a page per WordPress project at /projects/<slug>/
```

## Content

Skill sets, experiences, the About Me section and projects are edited in WordPress. The
hero, education section and page meta tags are in the code.
