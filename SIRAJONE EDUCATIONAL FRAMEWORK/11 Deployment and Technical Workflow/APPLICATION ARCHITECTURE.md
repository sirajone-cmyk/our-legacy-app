# SIRAJONE EDUCATIONAL FRAMEWORK
## 11 Application Architecture

**Status:** Permanent Reference
**Version:** 1.0
**Date Established:** June 2026
**See also:** DEPLOYMENT WORKFLOW.md (same folder) for the build and deploy pipeline.

---

## PURPOSE

This document describes the OUR LEGACY application's code architecture — how the components are structured, how they connect, how data flows through the system, and why each component exists. A developer who has never seen the codebase should be able to understand the full system from this document before opening a single file.

---

## TECHNOLOGY STACK

| Layer | Technology | Why |
|-------|-----------|-----|
| Framework | React 19 | Component-based UI; large ecosystem; hooks-first architecture |
| Build tool | Vite | Fast HMR; native ESM; minimal config |
| Language | TypeScript | Type safety on lesson page discriminated union; prevents silent data errors |
| Deployment | Firebase Hosting | Global CDN; simple deploy; no backend needed for a read-only content app |
| Service Worker | Custom sw.js | Offline reading; cache versioning per lesson |
| Analytics | Firebase Analytics (gtag) | Usage tracking without a backend |
| Styling | Custom CSS modules | No framework dependency; full control over educational reading experience |

---

## COMPONENT HIERARCHY

```
App.tsx (root router)
|
|-- LibraryHome.tsx          (screen: /library or default)
|   |-- BookCard.tsx         (individual book in the grid)
|   |-- ContinueReadingCard  (inline component: resume last position)
|
|-- BookDetail.tsx           (screen: /book/:id)
|   |-- ChaptersTab          (inline: chapter list with lock states)
|   |-- TimelineTab          (inline: historical milestone cards)
|   |-- MapsTab              (inline: SVG geography cards)
|   |-- ProfilesTab          (inline: character profile cards)
|   |-- ReferencesTab        (inline: tiered source cards)
|
|-- EbookReader.tsx          (screen: /reader/:bookId)
|   |-- CoverPage            (rendered for kind:"cover")
|   |-- PartDividerPage      (rendered for kind:"part-divider")
|   |-- SegmentPage          (rendered for kind:"segment")
|   |-- ReflectionPage       (rendered for kind:"reflection")
|   |   |-- CompanionCTA     (inline: shown on ReflectionPage only)
|   |-- ClosingPage          (rendered for kind:"closing")
|   |-- CompletionPage       (rendered for kind:"completion")
|   |-- ProgressBar          (inline: top of reader, shows saved/total)
|   |-- NavigationButtons    (inline: prev/next page, back to BookDetail)
|
|-- LessonGuide.tsx          (screen: /lesson-guide)
    |-- Section 1: lessonTitle
    |-- Section 2: whyThisMatters
    |-- Section 3: memoryGem
    |-- Section 4: oneMinuteSummary
    |-- Section 5: keyFacts
    |-- Section 6: whatWeLearns
    |-- Section 7: familyDiscussion
    |-- Section 8: quickReview
    |-- Section 9: furtherReading
```

---

## APP.TSX — THE ROOT ROUTER

**File:** `apps/web/src/App.tsx`
**Role:** Manages the application's current screen state and renders the correct component.

**Why it exists:** The app is a single-page application (SPA). There is no URL-based routing library (no React Router). Instead, App.tsx maintains a `screen` state variable that determines which top-level component to render. Navigation is done by calling a `setScreen` function passed as props.

**Screen states:**
```typescript
type Screen =
  | "library"           // LibraryHome
  | "book-detail"       // BookDetail
  | "reader"            // EbookReader
  | "lesson-guide"      // LessonGuide
```

**Navigation flow:**
```
library --> book-detail --> reader --> lesson-guide --> reader (back)
                 ^                          |
                 |__________________________|
                    (Back button from lesson-guide)
```

**State passed through props:**
- `currentBookId` — which book is selected
- `currentPageIndex` — which page the reader is on
- `lessonKey` — the `sirah_journey:N` key for the current Companion
- `setScreen(screen)` — navigate to a new screen
- `savedProgress` — the highest page index stored in localStorage

---

## LIBRARYHOME.TSX — LANDING SCREEN

**File:** `apps/web/src/components/library/LibraryHome.tsx`
**CSS:** `apps/web/src/styles/library-home.css`
**Role:** The main landing page. Displays all available books as cards and shows a Continue Reading card if the user has started a book.

**Why it exists:** The app may eventually have multiple books (Sīrah, Companions, Mothers of the Believers, etc.). LibraryHome is the catalogue. Even with one book, it provides the entry point with branding, the series tagline, and navigation to the book.

**Key behaviors:**
- On mount, reads `localStorage.getItem("sirah_progress")` to determine if the user has reading progress.
- If `saved > 0`, renders the Continue Reading card with the last page position.
- Renders `BookCard` components for each book in `libraryData.ts`.
- Tapping a BookCard navigates to `book-detail` for that book.
- Tapping the Continue Reading card navigates directly to `reader` at the saved page index.

**Data source:** `apps/web/src/data/libraryData.ts` — contains `BOOKS` array with metadata for each book (id, title, subtitle, cover description, progress formula).

---

## BOOKDETAIL.TSX — FIVE-TAB REFERENCE SCREEN

**File:** `apps/web/src/components/library/BookDetail.tsx`
**CSS:** `apps/web/src/styles/book-detail.css`
**Role:** A 5-tab reference view for a specific book. Displays supplementary educational content organized by tab.

**Why it exists:** The app separates narrative content (Reader) from reference content (BookDetail). A reader can explore maps, profiles, historical timelines, and references without interrupting the reading flow. BookDetail is the encyclopedic companion to the narrative.

**The Five Tabs:**

### Tab 1 — Chapters
**Purpose:** Allows jumping to any lesson directly. Shows which lessons are available, in progress, or locked.

**Chapter lock states:**
- **Unlocked:** `pageIndex` is set AND `savedProgress >= pageIndex`. Tapping navigates to reader at that page.
- **In progress:** `savedProgress > 0 AND savedProgress < pageIndex`. Shows current position.
- **Locked (Soon):** No `pageIndex` set, or `savedProgress < pageIndex`. Shows "Soon" badge.

**Data source:** `SIRAH_CHAPTERS` array in `BookDetail.tsx` — each chapter object has: `id`, `title`, `description`, and optionally `pageIndex`.

### Tab 2 — Timeline
**Purpose:** Historical milestone cards covering the major events of the Prophet's life in chronological order.

**Data source:** `TIMELINE_MILESTONES` array in `BookDetail.tsx` — each entry has: `period`, `year`, `event`, `significance`, `source`.

**Why five fields:** Each milestone needs enough context to be educationally useful without becoming a lesson. The `source` field ensures every milestone is traceable.

### Tab 3 — Maps
**Purpose:** SVG-illustrated geographic cards for key locations in the Sīrah.

**Data source:** `MAP_VISUALS` array in `BookDetail.tsx` — each entry has: `name`, `arabicName`, `description`, `significance`, `svgContent` (inline SVG string), `lessons` (array of lesson numbers where this location appears).

**Why SVG:** Maps are rendered as inline SVGs for offline availability (no external image hosting). Each SVG is a stylized educational illustration, not a satellite map.

**How to add a new map entry:** See **03 — PROFILES MAPS REFERENCES GUIDE**.

### Tab 4 — Profiles
**Purpose:** Character profile cards for major historical figures — their lineage, role, key facts, and significance.

**Data source:** `SIRAH_PROFILES` array in `BookDetail.tsx` — each entry has: `name`, `arabicName`, `title`, `lineage`, `role`, `keyFacts` (array), `significance`, `sources` (array), `lessons` (array of lesson numbers).

**How to add a new profile:** See **03 — PROFILES MAPS REFERENCES GUIDE**.

### Tab 5 — References
**Purpose:** Source cards documenting every book and text cited in the lessons, organized by reliability tier.

**Data source:** `SIRAH_REFERENCES` array in `BookDetail.tsx` — each entry has: `title`, `author`, `type` ("quran" | "hadith" | "sirah" | "history" | "modern"), `tier` (1 | 2 | 3), `description`, `usedIn` (array of lesson numbers).

**How to add a new reference:** See **03 — PROFILES MAPS REFERENCES GUIDE**.

---

## EBOOKREADER.TSX — THE LESSON READER

**File:** `apps/web/src/components/reader/EbookReader.tsx`
**CSS:** `apps/web/src/styles/reader.css`
**Role:** The page-by-page reading interface. Renders the lesson content from `readerContent.ts` one page at a time.

**Why it exists:** The core educational experience. Every lesson is delivered through the Reader. The design is deliberately minimal — no distractions, drop-cap opening, Arabic ḥadīth blocks, section headings, and clean typography — to support sustained reading.

### The Page Array

All lesson content lives in a single flat array: `readerLessons[0].pages`. Every page is a TypeScript discriminated union type (`ReaderPage`) with a `kind` property. EbookReader renders a different layout for each `kind`.

Current page count: 72 pages (indices 0–71).

### Reading Progress

Progress is tracked as a single integer: the highest page index the reader has reached.

```typescript
// Read from localStorage on mount
const saved = parseInt(localStorage.getItem("sirah_progress") ?? "0", 10);

// Written to localStorage whenever the reader advances past a new highest page
localStorage.setItem("sirah_progress", Math.max(saved, currentPage).toString());
```

**Key:** `"sirah_progress"` in localStorage.
**Value:** Integer string (highest page index reached).
**Reset:** Never automatic. A manual "reset progress" feature does not exist in v1.

### The Progress Bar

Displayed at the top of the reader. Formula (from `libraryData.ts`):

```typescript
Math.min(100, Math.round((saved / 71) * 100))
```

Where `71` is the current progress denominator (last page index). Updated to `78` when L11 (4-segment lesson) is added.

### Companion CTA Logic

The Companion CTA appears ONLY on the `ReflectionPage`. It does NOT appear on the `ClosingPage`.

**How the Companion key is determined:**
1. As pages are rendered, EbookReader tracks the most recently seen `PartDividerPage`.
2. The PartDividerPage's `subtitle` field ("Part 10") is parsed to extract the number (10).
3. The lookup key is constructed: `sirah_journey:10`.
4. `getLessonEnrichment("sirah_journey:10")` is called against `lessonEnrichmentMap`.
5. If a Companion exists for that key, the CTA is shown on the ReflectionPage.
6. Tapping the CTA navigates to the `lesson-guide` screen.

**Critical dependency:** If a PartDividerPage's `subtitle` is wrong or malformed, the Companion will not load. The subtitle must match exactly: `"Part N"` (capital P, space, number).

### Discovery Note

Rendered on the `ClosingPage`. Reads directly from `closingPage.discoveryNote`. No logic — it is a plain text field. The editorial decision about what the discoveryNote says is documented in **03 — LESSON ARCHITECTURE**.

---

## LESSONGUIDE.TSX — THE LESSON COMPANION

**File:** `apps/web/src/components/guide/LessonGuide.tsx`
**CSS:** `apps/web/src/styles/lesson-guide.css`
**Role:** Renders all 9 sections of the Lesson Companion for the current lesson.

**Why it exists:** The Companion is the deep-learning layer of the educational experience. The Reader delivers narrative. The Companion provides reflection tools, key facts, family discussion questions, and further reading. They are designed to be used together but can stand alone.

**Data source:** `lessonEnrichmentData.ts` — exports `lessonEnrichmentMap`, a `Record<string, LessonEnrichment>`. The `getLessonEnrichment(key)` function is called with the current `lessonKey` (e.g., `"sirah_journey:10"`).

**Navigation:** A Back button returns the reader to the EbookReader at the same page they left. The reader does not lose their page position when opening the Companion.

**Full Companion data structure and writing rules:** See **04 — COMPANION FRAMEWORK**.

---

## DATA FLOW DIAGRAM

```
ONEDRIVE (content source of truth)
        |
        | [deploy script copies]
        v
C:\DEV (build machine)
        |
        | [npm run build + firebase deploy]
        v
FIREBASE HOSTING (CDN)
        |
        | [browser fetches assets]
        v
SERVICE WORKER (caches assets for offline use)
        |
        | [serves cached or fresh assets]
        v
REACT APP IN BROWSER
        |
        |-- readerContent.ts ----> EbookReader (renders pages)
        |-- lessonEnrichmentData.ts -> LessonGuide (renders Companion)
        |-- libraryData.ts -------> LibraryHome (progress formula)
        |-- BookDetail.tsx -------> BookDetail (chapters, maps, profiles, refs)
        |
        | [reading progress]
        v
localStorage ("sirah_progress" key)
        |
        | [read on app mount]
        v
LibraryHome (Continue Reading card) + EbookReader (progress bar)
```

---

## LOCALSTORAGE USAGE

The app uses exactly one localStorage key:

| Key | Value | Purpose |
|-----|-------|---------|
| `"sirah_progress"` | Integer string (e.g., "65") | Highest page index the reader has reached |

**There is no user account.** There is no authentication. Progress is local to the device and browser. It persists across sessions but is cleared if the user clears their browser data.

**Future plan:** Cross-device progress sync requires Firebase Firestore + user authentication (see 14 — FUTURE IMPROVEMENTS, B1).

---

## THE SERVICE WORKER (sw.js)

**File:** `apps/web/public/sw.js` (C:\Dev only — not in OneDrive)
**Role:** Caches all app assets for offline use. Versioned per lesson deploy.

**Cache name pattern:** `our-legacy-v{VERSION}-lesson{LESSON}`
**Current:** `our-legacy-v12-lesson10`

**How it works:**
1. On first load, the SW installs and caches all assets listed in `CACHE_FILES`.
2. On subsequent loads, assets are served from cache (offline-capable).
3. When a new SW with a different `CACHE_NAME` is deployed, the browser installs the new SW.
4. The new SW deletes the old cache and installs the fresh assets.

**Critical maintenance rule:** The SW file lives ONLY in `C:\Dev\SirajOne\OUR_LEGACY_APP\apps\web\public\`. It is never copied to OneDrive. The deploy script updates it in place on the Dev machine.

**Cache split risk:** If a browser tab is open during a deploy, the SW may cache stale assets. Prevention: hard reload (Ctrl+Shift+R) before verification. Full documented procedure in **11 — DEPLOYMENT WORKFLOW**.

---

## ROUTING ARCHITECTURE

The app does NOT use a URL-based router. Navigation state is managed in React component state in `App.tsx`.

**Advantages:** Simpler deployment (no server-side routing needed); Firebase Hosting serves the same `index.html` for all paths.

**Trade-off:** The URL does not change when navigating between screens. Browser back/forward does not work as expected. Deep-linking to specific pages is not possible in v1.

**Navigation is done through:**
1. BookCard tap → `setScreen("book-detail")`
2. "Start Reading" / "Continue Reading" → `setScreen("reader")`
3. "Open Lesson Companion" CTA → `setScreen("lesson-guide")`
4. Back button in LessonGuide → `setScreen("reader")`
5. Back button in EbookReader → `setScreen("book-detail")`
6. Back button in BookDetail → `setScreen("library")`

---

## FIREBASE ANALYTICS

**Loaded via:** `gtag` script tag in `apps/web/index.html`
**Measurement ID:** `G-XXXXXXXXXX` (see current index.html for actual value)
**Why in index.html:** An earlier implementation placed analytics in a React component, causing duplicate loads. The current implementation loads gtag directly in the HTML head for reliable single initialization.
**Events tracked:** Standard page views. No custom events in v1.

---

## FILE MAP — WHAT CHANGES PER LESSON

| File | Location | What changes with each new lesson |
|------|----------|----------------------------------|
| readerContent.ts | apps/web/src/data/ | New pages appended (6 or 7) |
| lessonEnrichmentData.ts | apps/web/src/data/ | New LessonEnrichment const + export map entry |
| libraryData.ts | apps/web/src/data/ | Progress denominator updated |
| BookDetail.tsx | apps/web/src/components/library/ | Chapter pageIndex added; new profiles/maps as needed |
| sw.js | apps/web/public/ (C:\Dev only) | CACHE_NAME bumped |

**Files that NEVER change between lessons:**
- App.tsx (routing structure)
- EbookReader.tsx (unless a new page type is introduced)
- LessonGuide.tsx (unless a new Companion section is introduced)
- All CSS files (unless visual design changes)
- index.html (unless a new script is added)

---

## ADDING A NEW PAGE TYPE

If a future lesson requires a new page type (e.g., a quiz page, an image page, a map page embedded in the Reader):

1. Add a new TypeScript type to the discriminated union in `readerContent.ts`.
2. Add a rendering case to EbookReader.tsx for the new `kind`.
3. Add a template to **15 — LESSON TEMPLATE**.
4. Document the new type in **03 — LESSON ARCHITECTURE**.
5. Add the type to the Verification Checklist (**12**) if it requires specific QA.

Do not add a new page type to fix a content problem. New types are warranted only when no existing type can serve the educational purpose.

---

## KNOWN ARCHITECTURAL LIMITATIONS (v1)

| Limitation | Impact | Future Resolution |
|-----------|--------|------------------|
| No URL routing | No deep linking; no browser back | Add React Router in v2 |
| No user account | Progress local only | Firebase Auth + Firestore in v2 |
| Single flat page array | All lesson pages in one array; will grow large | Lazy loading by lesson in v2 |
| SW cache covers all assets | Large initial cache on first visit | Lesson-level cache splitting in v2 |
| No search | Cannot search across lessons | Full-text search feature (see 14 — B4) |
| Progress not resettable | Reader cannot restart without clearing localStorage | Add reset option in v2 |
