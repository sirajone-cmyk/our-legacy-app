# OUR LEGACY

OUR LEGACY is now focused as a premium ebook-style Islamic reader app. Version 1 opens directly into the Sīrah Series reader with a beautiful cover page, segment navigation, Arabic ḥadīth and Qurʾān blocks, reflection questions, closing duʿāʾ, swipe and keyboard navigation, a slide-out table of contents, saved reading progress, night mode, and offline app-shell caching.

## Project Structure

```text
OUR_LEGACY_APP/
  apps/
    web/                 React + Vite ebook reader frontend
    api/                 Optional Node + Express backend API scaffold
  packages/
    database/            Prisma schema and seed script
  assets/
    images/ audio/ icons/ pdfs/
  docs/
    APP_ARCHITECTURE.md
    DATABASE_STRUCTURE.md
    API_DOCUMENTATION.md
    USER_ROLES.md
```

## Install Dependencies

```bash
cd OUR_LEGACY_APP
npm install
cp .env.example .env
```

## Run Locally

Start PostgreSQL:

```bash
docker compose up -d
```

Prepare the database:

```bash
npm run db:generate
npm run db:migrate
npm run db:seed
```

Run the full app:

```bash
npm run dev:all
```

Frontend reader: `http://localhost:5173`

## Build

```bash
npm run build
```

The web build is generated in `apps/web/dist`. The optional API build is generated in `apps/api/dist`.

## Offline Mode

The production web build registers a service worker that caches the app shell and reader assets after the first successful visit. Because the first two Sīrah lessons are bundled into the app, users can reopen the reader without internet once cached. Future downloadable audio and PDF assets should be stored in object storage and added to a managed offline-download queue.

## Build Android Version

Install Android Studio and the Android SDK, then run:

```bash
cd OUR_LEGACY_APP
npm install
npm run android
```

The command builds the web app, syncs Capacitor, and opens the native Android project. Set production API URLs through environment-specific config before release.

## Build iOS Version

iOS builds require macOS with Xcode:

```bash
cd OUR_LEGACY_APP
npm install
npm run ios
```

The command builds the web app, syncs Capacitor, and opens the native iOS project in Xcode.

## Deploy

Recommended production deployment:

1. Host `apps/web/dist` on Vercel, Netlify, Cloudflare Pages, Firebase Hosting, or any static host.
2. Deploy `apps/api` to Render, Fly.io, Railway, AWS ECS, Google Cloud Run, Azure App Service, or a Kubernetes cluster.
3. Use managed PostgreSQL such as Neon, Supabase, RDS, Cloud SQL, or Azure Database for PostgreSQL.
4. Set `DATABASE_URL`, `JWT_SECRET`, `WEB_ORIGIN`, and `NODE_ENV=production`.
5. Run `npm run db:migrate` in the deployment pipeline.
6. Store uploaded images, audio, icons, and PDFs in S3-compatible object storage or a self-hosted equivalent.

The codebase is not tied to a proprietary platform. The frontend, backend, schema, and mobile shell are all editable and portable.
