# App Architecture

OUR LEGACY uses a scalable monorepo architecture.

## Layers

- `apps/web`: React + Vite frontend. It contains the V1 learning experience, local demo state, reusable UI components, dashboards, lesson pages, quiz UI, and audio player.
- `apps/api`: Node + Express backend. It exposes authentication, learning, progress, teacher, and admin endpoints.
- `packages/database`: Prisma schema and seed data for PostgreSQL.
- `assets`: Organized static assets for images, audio, icons, and PDFs.

## Version 1 Flow

1. Splash screen introduces the brand experience.
2. Login creates a role-aware session.
3. Student home shows progress, Daily Ta'lim, lessons, and family-account readiness.
4. Lesson pages support listening progress, quiz completion, and persisted frontend progress.
5. Teacher dashboard summarizes class and lesson health.
6. Admin panel summarizes madrasahs, teachers, families, lessons, uploads, and access controls.

## Production Scaling Direction

- Use PostgreSQL for relational integrity across organizations, madrasahs, users, families, classes, lessons, progress, quizzes, and audit logs.
- Use object storage for audio, PDFs, icons, and images.
- Keep API stateless with JWTs so traffic can scale horizontally.
- Add background workers for audio processing, transcript generation, notifications, and reporting.
- Add CDN caching for published assets and lesson metadata.
- Add tenant-aware middleware around `organizationId` and `madrasahId`.
