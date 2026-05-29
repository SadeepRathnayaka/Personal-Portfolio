# Personal Portfolio

Angular portfolio for **Sadeep Rathnayaka**. Content lives in `src/app/data/portfolio.data.ts`.

## Development

```bash
npm install
npm start
```

Open [http://localhost:4200](http://localhost:4200).

## Production build (GitHub Pages)

Live site: **https://sadeeprathnayaka.github.io/Personal-Portfolio/**

The `baseHref` in `angular.json` must match the **exact GitHub repository name** (case-sensitive in the URL).

```bash
npm run build:gh-pages
```

## Deploy

You do **not** need `ng add angular-cli-ghpages` — this repo already deploys via `.github/workflows/deploy.yml`.

1. Push to `main` on GitHub.
2. **Settings** → **Pages** → **Source**: **GitHub Actions**.
3. Wait for the **Deploy to GitHub Pages** workflow to finish (green check).

## Troubleshooting

| Problem | Fix |
|--------|-----|
| GitHub says “live” but blank / 404 | Open the URL from **Settings → Pages** (not a guessed URL). |
| Page loads but no styles / blank app | `baseHref` must match repo name exactly, e.g. `/Personal-Portfolio/`. |
| Old site still shows | Hard refresh (Ctrl+F5) or try incognito. |
