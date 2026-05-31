# Database Structure

The database schema is defined in `packages/database/prisma/schema.prisma`.

## Core Tables

- `Organization`: Top-level tenant for networks or institutions.
- `Madrasah`: A school or branch inside an organization.
- `FamilyAccount`: Groups guardians and students for family-based progress tracking.
- `User`: Students, teachers, parents, admins, and super admins.
- `ClassGroup`: Teacher-led classes inside a madrasah.
- `Enrollment`: Links students to classes.
- `Lesson`: Published and draft learning content.
- `AudioAsset`: Audio files, transcripts, and duration metadata.
- `DailyTalim`: Daily reflections and action items.
- `Quiz`: Lesson quiz container.
- `QuizQuestion`: Questions, choices, and correct answers.
- `QuizAttempt`: User quiz results.
- `LessonProgress`: Per-learner lesson completion and audio progress.
- `AuditLog`: Admin and system action history.

## Scale Considerations

- `User.email` is unique for secure authentication.
- `LessonProgress` has a unique `(lessonId, userId)` constraint.
- `Organization`, `Madrasah`, role, teacher, and status fields are indexed for multi-tenant queries.
- JSON fields are used only where flexible answer payloads are appropriate.
- Audit logs are append-only and can later be partitioned by date.
