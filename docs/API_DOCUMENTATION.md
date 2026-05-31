# API Documentation

Base URL: `http://localhost:4200`

## Health

`GET /health`

Returns service status.

## Auth

`POST /api/auth/login`

```json
{
  "email": "student@ourlegacy.test",
  "password": "password"
}
```

Returns:

```json
{
  "user": {
    "id": "usr_student_001",
    "name": "Amina Patel",
    "email": "student@ourlegacy.test",
    "role": "STUDENT"
  },
  "token": "jwt-token"
}
```

`GET /api/auth/me`

Requires `Authorization: Bearer <token>`.

## Learning

`GET /api/talim/today`

Returns the current Daily Ta'lim entry.

`GET /api/lessons`

Returns published lesson metadata.

`GET /api/progress`

Returns lesson progress for the authenticated user.

`POST /api/progress`

```json
{
  "lessonId": "lesson_001",
  "percent": 100,
  "quizScore": 100
}
```

Creates or updates progress for the authenticated user.

## Teacher

`GET /api/teacher/dashboard`

Requires `TEACHER` or `ADMIN`.

Returns teacher lessons, learners, and learner progress.

## Admin

`GET /api/admin/overview`

Requires `ADMIN`.

Returns counts, madrasahs, and recent lessons.

`GET /api/admin/users`

Requires `ADMIN`.

Returns safe user records without password hashes.
