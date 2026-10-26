# mohariz.me portfolio

Gatsby 5 + React 18 + TypeScript. Deployed at https://mohariz.me.

## Commands
- `npm run develop` — dev server on :8000
- `npm run typecheck` — must pass (0 errors) after every change
- `npx eslint --quiet src` — must pass
- `npm run build` — needs the env vars below; the full end-to-end check
- After removing a Gatsby plugin, Netlify needs one "Clear cache and deploy site" (its restored
  `.cache` still lists the old plugin)

## Content lives in WordPress, not this repo
- Skill sets, experiences, About Me, and projects come from headless WordPress via
  `gatsby-source-wordpress` (`allWpSkillSet`, `allWpExperience`, `wpPage`, `allWpProject`).
  To change that copy, edit it in WordPress, not here.
- Hard-coded in the repo: Hero (`src/components/Hero`), Education, page `<Head>` meta tags.
- Project pages are generated in `gatsby-node.js` at `/projects/<slug>/`.

## Env vars (`.env.development` / `.env.production`, gitignored)
`GATSBY_WORDPRESS_URL` (GraphQL endpoint), `GATSBY_LINKEDIN_URL`, `GATSBY_GITHUB_LINK`,
`GATSBY_RESUME_LINK`, `GATSBY_GOOGLE_ANALYTICS_TRACKING_ID`.

## Conventions
- Import with aliases: `@components/...`, `@hooks/...`, `@src/...` (defined in both
  `gatsby-config.ts` and `tsconfig.json` — keep them in sync).
- Internal routes: Gatsby `<Link>`. External URLs: `@components/ExternalLink` — never `<Link>`.
- Text: use `@components/Typography` with a `variant`, not raw `<h1>`/`<p>`.
- Styling: prefer Tailwind classes for new code. Chakra is used for `Tag`/`Tooltip`; SCSS only
  for WordPress HTML content styling (`*-content` classes).
- Dark mode via Tailwind `dark:` classes; keep the black/white bordered-card look consistent.
- Fonts: Poppins is self-hosted via `@fontsource/poppins` (Latin subset) in `gatsby-browser.js` and
  applied through the Chakra theme (`src/theme.ts`). Don't add Google Fonts back.
- Headings: use `Typography`'s `as` prop to keep h1 → h2 → h3 order independent of visual size.
- Prettier: single quotes, JSX single quotes, no trailing commas, 100 cols.
