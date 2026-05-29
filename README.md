# Personal Portfolio

Angular portfolio for **Sadeep Rathnayaka**. Content lives in `src/app/data/portfolio.data.ts`.

## Development

```bash
npm install
npm start
```

Open [http://localhost:4200](http://localhost:4200).

## Production build (GitHub Pages)

Live site: **https://sadeeprathnayaka.github.io/personal-portfolio/**

```bash
npm run build:gh-pages
```

## Deploy

1. Push to `main` on [SadeepRathnayaka/personal-portfolio](https://github.com/SadeepRathnayaka/personal-portfolio).
2. Repo **Settings** → **Pages** → **Source**: **GitHub Actions**.
3. The workflow `.github/workflows/deploy.yml` builds and publishes automatically.
