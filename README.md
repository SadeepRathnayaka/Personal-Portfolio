# Personal Portfolio 2.0

Angular portfolio for **Sadeep Rathnayaka** — full stack software engineer. Dark, professional theme with content driven from `src/app/data/portfolio.data.ts`.

## Development

```bash
npm install
npm start
```

Open [http://localhost:4200](http://localhost:4200).

## Production build (GitHub Pages)

Configured for `https://sadeeprathnayaka.github.io/Portfolio/` with `baseHref: /Portfolio/`.

```bash
npm run build:gh-pages
```

Output: `dist/personal-portfolio/` (includes `404.html` for SPA routing).

## Deploy

Push to `main` on GitHub with **Pages** source set to **GitHub Actions**. The workflow in `.github/workflows/deploy.yml` builds and deploys automatically.

When ready to replace the static site, copy this project into [SadeepRathnayaka/Portfolio](https://github.com/SadeepRathnayaka/Portfolio) or push this repo and point Pages to it.

## Structure

- `src/app/data/` — portfolio content and TypeScript models
- `src/app/features/` — Home, Timeline, Projects, Skills, Contact
- `src/app/core/` — Header, Footer
- `src/assets/` — images and CV

## Updating content

Edit `src/app/data/portfolio.data.ts` for projects, timeline, skills, and profile text. Add images under `src/assets/images/`.
