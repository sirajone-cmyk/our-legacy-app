# SIRAJONE EDUCATIONAL FRAMEWORK
## 20 Naming Conventions

**Status:** Permanent Reference — Part of v1.0 Freeze
**Version:** 1.0
**Date Established:** 29 June 2026
**See also:** 21 — CHANGELOG RULES for how to document changes.
**See also:** 11 — APPLICATION ARCHITECTURE for where files are located.

---

## PURPOSE

This document defines the naming rules for every named entity in the SirajOne project. Names must be consistent across the codebase, framework documents, Google Drive, and GitHub. When in doubt, look here first.

Inconsistent naming is the most common source of integration bugs (e.g., wrong Companion key, wrong chapter unlock, wrong cache name). Every naming convention here exists because a mistake was made or nearly made during development.

---

## PART 1 — FOLDER NAMES

### Framework Folders

Pattern: `{NN} {Title Case Name}`

- Two-digit prefix (00–21)
- Single space
- Title case name (no underscores, no hyphens)

**Examples:**
```
00 Master Principles
01 Educational Philosophy
07 Research Archive
11 Deployment and Technical Workflow
20 Naming Conventions
```

**Rules:**
- Never use underscores or hyphens in framework folder names.
- Folder numbers are fixed and never reassigned. If a folder is deprecated, it remains at its number with a note.
- New folders continue the sequence (22, 23...) — never insert between existing numbers.

### App Source Folders

Pattern: `camelCase` (React convention)

```
apps/web/src/components/library/
apps/web/src/components/reader/
apps/web/src/components/guide/
apps/web/src/data/
apps/web/src/styles/
apps/web/public/
```

**Rules:** Follow standard Vite/React project structure. Do not create new top-level directories without updating APPLICATION ARCHITECTURE.

---

## PART 2 — FILE NAMES

### Framework Documents

Pattern: `SCREAMING SNAKE CASE with spaces.md`
All words capitalised. Spaces between words. `.md` extension.

**Examples:**
```
MASTER PRINCIPLES.md
LESSON ARCHITECTURE.md
EDUCATIONAL DECISION REGISTER.md
LESSON 10 RESEARCH ARCHIVE.md
FRAMEWORK RELEASE v1.0.md
SOURCE LIBRARY.md
```

**Rules:**
- Never use underscores in framework document names (e.g., NOT `MASTER_PRINCIPLES.md`).
- Version numbers in filenames use lowercase `v`: `FRAMEWORK RELEASE v1.0.md`.
- Research Archive files follow the pattern: `LESSON {N} RESEARCH ARCHIVE.md` (single digit for L1–L9, no leading zero).

### Snapshot/Archive Files

Pattern: `SirajOne_Educational_Framework_v{VERSION}_{YYYY-MM-DD}`

**Examples:**
```
SirajOne_Educational_Framework_v1.0_2026-06-29     (folder snapshot)
SirajOne_Educational_Framework_v1.0_2026-06-29.zip (ZIP archive)
```

**Rules:**
- Use underscores (not spaces) because these are filesystem-safe filenames.
- Always include the date in ISO 8601 format (YYYY-MM-DD).
- The folder snapshot and ZIP use the same name; the ZIP adds `.zip`.

### App Source Files

Pattern: `camelCase.ts` or `PascalCase.tsx`

```
readerContent.ts
lessonEnrichmentData.ts
libraryData.ts
App.tsx
EbookReader.tsx
BookDetail.tsx
LibraryHome.tsx
LessonGuide.tsx
```

**Rules:**
- TypeScript files: `.ts` (non-JSX), `.tsx` (JSX).
- Data files: `camelCase.ts` (e.g., `readerContent.ts`).
- Component files: `PascalCase.tsx` (e.g., `EbookReader.tsx`).
- CSS files: `kebab-case.css` matching the component name (e.g., `book-detail.css` for `BookDetail.tsx`).

### Deploy Scripts

Pattern: `deploy-{scope}.ps1` (stored at `C:\Dev\SirajOne\OUR_LEGACY_APP\`)

**Examples:**
```
deploy-lesson10.ps1
deploy-lesson11.ps1
archive-sync.ps1
```

**Rules:**
- Deploy scripts are NEVER stored in OneDrive (permanent rule — see 00 MASTER PRINCIPLES, Principle 8).
- Scripts use lowercase kebab-case names.
- The `archive-sync.ps1` script is the standard multi-purpose sync script; lesson deploys use `deploy-lessonN.ps1`.

---

## PART 3 — LESSON AND COMPANION KEYS

### Lesson Part Numbers

Pattern: `Part {N}` (displayed in the PartDividerPage `subtitle` field)

The Part number is the single most critical naming element — it drives the Companion lookup.

```
Part 0     (Lesson 1 — Introduction)
Part 1     (Lesson 2 — Meccan Period)
Part 2     (Lesson 3 — Year of the Elephant)
Part 3     (Lesson 4 — Halimah)
Part 4     (Lesson 5 — Opening of the Chest)
Part 5     (Lesson 6 — Death of Aminah)
Part 6     (Lesson 7 — Abd al-Muttalib)
Part 7     (Lesson 8 — Journey to Sham)
Part 8     (Lesson 9 — Hilf al-Fudul)
Part 9     (Lesson 10 — Khadijah)
Part 10    (Lesson 11 — First Revelation — planned)
```

**Rules:**
- Always capital `P` in `Part`.
- Always a space between `Part` and the number.
- The number is the integer that will be extracted to build the Companion key.
- If the `subtitle` is ever set incorrectly (e.g., `part 3` instead of `Part 3`), the Companion will silently fail to load. This is a breaking naming error.

### Companion Keys

Pattern: `sirah_journey:{N}` (N = Part number from PartDividerPage subtitle)

```
sirah_journey:0     (Lesson 1 Companion)
sirah_journey:1     (Lesson 2 Companion)
sirah_journey:2     (Lesson 3 Companion)
sirah_journey:3     (Lesson 4 Companion)
sirah_journey:4     (Lesson 5 Companion)
sirah_journey:5     (Lesson 6 Companion)
sirah_journey:6     (Lesson 7 Companion)
sirah_journey:7     (Lesson 8 Companion)
sirah_journey:8     (Lesson 9 Companion)
sirah_journey:9     (Lesson 10 Companion)
sirah_journey:10    (Lesson 11 Companion — planned)
```

**Rules:**
- Always lowercase.
- Always `sirah_journey:` prefix (with underscore, with colon, no space).
- The number after `:` MUST match the `Part N` subtitle in the corresponding PartDividerPage.
- This key is used in THREE places and must be consistent across all three: (1) `lessonEnrichmentData.ts` export map, (2) the `getLessonEnrichment()` function call, and (3) the Research Archive file.

### localStorage Key

```
sirah_progress
```

**This key is fixed and must never be changed.** Changing it breaks progress for all existing users (their saved progress is stored under the old key and becomes unreachable).

---

## PART 4 — IDs FOR PROFILES, MAPS, REFERENCES

All three data sets in `BookDetail.tsx` use sequential integer IDs.

### Profile IDs

Pattern: Integer starting at `1`, incrementing by `1`.

```typescript
{ id: 1, name: "..." }
{ id: 2, name: "..." }
{ id: 3, name: "..." }
```

**Rules:** IDs are never reassigned or reused. If a profile is removed (rare), its ID is skipped permanently.

### Map IDs

Pattern: Same as Profile IDs — sequential integers starting at `1`.

### Reference IDs

Pattern: Same — sequential integers starting at `1`.

---

## PART 5 — REACT COMPONENT NAMES

Pattern: `PascalCase`

```
App
LibraryHome
BookCard
BookDetail
EbookReader
LessonGuide
```

**Rules:**
- All components use PascalCase.
- Component names match their filename exactly (e.g., `EbookReader` in `EbookReader.tsx`).
- The four screen names in App.tsx match their respective component names: `"library"` → `LibraryHome`, `"book-detail"` → `BookDetail`, `"reader"` → `EbookReader`, `"lesson-guide"` → `LessonGuide`.

### Page Kind Values (TypeScript discriminated union)

These are the `kind` field values in the `ReaderPage` discriminated union:

```typescript
"cover"
"part-divider"
"segment"
"reflection"
"closing"
"completion"
```

**Rules:** Always lowercase with hyphens. Adding a new `kind` requires updates to EbookReader.tsx, LESSON ARCHITECTURE.md, and the LESSON TEMPLATE.

---

## PART 6 — CSS NAMING

Pattern: `kebab-case` for both files and class names.

**File names:**
```
library-home.css
book-detail.css
reader.css
lesson-guide.css
```

**Class names:**
```css
.book-card {}
.chapter-tab {}
.progress-bar {}
.companion-cta {}
```

**Rules:**
- No camelCase in CSS class names.
- No BEM (Block-Element-Modifier) required — simple descriptive kebab-case is sufficient for this project's scale.
- Avoid generic names like `.container` or `.wrapper` without a module prefix (e.g., `.reader-container`).

---

## PART 7 — SERVICE WORKER CACHE NAMES

Pattern: `our-legacy-v{VERSION}-lesson{LESSON_NUMBER}`

```
our-legacy-v1-lesson1       (historical — earliest)
our-legacy-v11-lesson9      (Lesson 9 deploy)
our-legacy-v12-lesson10     (Lesson 10 deploy — current)
our-legacy-v13-lesson11     (Lesson 11 — planned)
```

**Rules:**
- The version number in the SW cache name increments with EVERY deploy, not just lesson deploys. If a hotfix is deployed between lessons, the SW version increments (e.g., v12 → v13) even without a new lesson number.
- The lesson number in the cache name refers to the HIGHEST lesson now available in the app.
- Changing the `CACHE_NAME` string is what triggers the browser to install the new SW and delete the old cache. If `CACHE_NAME` is not bumped, returning users get stale content.

---

## PART 8 — GIT COMMIT NAMING

Pattern: `{type}: {short description}` (Conventional Commits style)

**Types used in this project:**
```
feat:      New lesson or new feature added
fix:       Bug fix (SW cache, rendering error, etc.)
docs:      Documentation-only change (framework documents)
chore:     Build, deploy script, or config change
refactor:  Code restructure with no behaviour change
```

**Examples:**
```
feat: Lesson 10 - Khadijah + L10 Companion + Chapter 11 unlock + SW v12
fix: archive-sync.ps1 encoding bug (em-dash replacement)
docs: freeze SirajOne Educational Framework v1.0
docs: add Naming Conventions and Changelog Rules (Framework v1.0)
chore: bump SW cache to our-legacy-v13-lesson11
```

**Rules:**
- Keep the subject line under 72 characters.
- Do NOT use the em-dash (`—`) in commit messages. Use a hyphen (`-`).
- Every lesson deploy commit must include: lesson number, lesson title (abbreviated), SW version.

---

## PART 9 — VERSION NAMING

### Framework Versions

Pattern: `v{MAJOR}.{MINOR}` (no patch number)

```
v1.0    First formal freeze (29 June 2026)
v1.1    First update after Lesson 11
v2.0    Volume I complete (~30 lessons)
v3.0    Volume II begins
```

### App / SW Versions

Pattern: `v{INCREMENT}` (single integer — increments with every deploy)

```
v12     Current (lesson10 deploy)
v13     Next (lesson11 deploy)
```

The app version and framework version are independent. The app version is a simple incrementing integer; the framework version uses semantic versioning.

### Lesson Numbering

Lessons are numbered L1–L30 (estimated) for the Sīrah volume. The lesson number in the Reader is not the same as the Part number. Mapping:

| Lesson | Part |
|--------|------|
| L1 (Introduction) | Part 0 |
| L2 (Meccan Period) | Part 1 |
| L3 (Year of Elephant) | Part 2 |
| ... | ... |
| L10 (Khadijah) | Part 9 |
| L11 (First Revelation) | Part 10 |

**The Part number is always one less than the Lesson number** (because L1 uses Part 0). This is a fixed convention that must not change.

---

## PART 10 — GOOGLE DRIVE NAMING

### Main Folder Structure

```
My Drive/
    SirajOne/
        Educational Framework/
            [numbered folders 00–21]/
            SIRAJONE MASTER HANDBOOK.md
        Version 1.0/
            SirajOne_Educational_Framework_v1.0_2026-06-29.zip
            [all 37 documents — flat or structured]
```

### Upload File Naming

When uploading to Google Drive, file names should match the OneDrive names exactly. Do not add prefixes, dates, or other suffixes to uploaded files (the folder provides the versioning context).

---

## PART 11 — BACKUP AND ARCHIVE NAMING

### ZIP Archive Pattern

`SirajOne_Educational_Framework_v{VERSION}_{YYYY-MM-DD}.zip`

```
SirajOne_Educational_Framework_v1.0_2026-06-29.zip
SirajOne_Educational_Framework_v1.1_2026-09-15.zip   (hypothetical)
```

### Snapshot Folder Pattern

`SirajOne_Educational_Framework_v{VERSION}_{YYYY-MM-DD}`

```
SirajOne_Educational_Framework_v1.0_2026-06-29
```

**Rules:**
- Snapshot folders are placed inside `C:\Dev\SirajOne\` (not inside `OUR_LEGACY_APP\` itself, to avoid including the snapshot in its own future snapshot).
- ZIP archives are also placed at `C:\Dev\SirajOne\` for the same reason.
