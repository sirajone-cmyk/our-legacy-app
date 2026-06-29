# SIRAJONE EDUCATIONAL FRAMEWORK
## 03 Lesson Architecture

**Status:** Permanent Reference  
**Version:** 1.0  
**Date Established:** June 2026

---

## OVERVIEW

Every lesson in the OUR LEGACY series is built from a fixed set of page types. Understanding this architecture is essential for anyone writing a new lesson, debugging a rendering issue, or building a new feature.

The data model is a TypeScript discriminated union. Every page has a `kind` property that determines its type and its data shape. The reader renders each `kind` differently.

---

## THE COMPLETE PAGE-TYPE SYSTEM

### 1. CoverPage (`kind: "cover"`)
**Purpose:** The first page of the entire Sīrah Series. Appears once.  
**Fields:** title, subtitle, description, arabicTitle, author, publisher.  
**Rendered as:** Full-screen illustrated cover with title and series branding.  
**Count:** 1 total (shared across all lessons).

### 2. PartDividerPage (`kind: "part-divider"`)
**Purpose:** Opens each new lesson. Serves as the lesson's title page.  
**Fields:** title, subtitle (e.g., "Part 9"), description (array of 2–3 paragraphs).  
**Critical:** The `subtitle` field determines the Companion lookup key. A subtitle of "Part 10" produces the key `sirah_journey:10`. This is how the EbookReader knows which Companion to display.  
**Rendered as:** Full-screen divider with large lesson title, part number, and teaser text.  
**Count:** 1 per lesson (e.g., pages 9, 16, 23, 31, 38, 45, 51, 58, 66 in the current build).

### 3. SegmentPage (`kind: "segment"`)
**Purpose:** The main reading content. Each lesson has 3 or 4 segments.  
**Fields:**
- `segmentNumber` (1–4)
- `chapterTitle` — the thematic title of this segment
- `heading` — "Virtue: [Arabic Virtue] — [English subtitle]"
- `hadith` — object with `type` ("ayah" | "hadith"), `arabic`, `translation`, `reference`
- `sections` — array of sections, each with `heading` and `paragraphs` (array of strings)
- `sectionNote` (optional) — editorial note for scholarly context

**Rendered as:** Long-form reading view with drop-cap, Arabic ḥadīth block, section headings, and body text.  
**Typical length:** 1,200–1,500 words of body text per segment.  
**Count:** 3–4 per lesson (Lessons 1–10 use 4 segments; some earlier lessons had 3).

### 4. ReflectionPage (`kind: "reflection"`)
**Purpose:** The penultimate page of each lesson. Contains discussion questions and the Lesson Companion CTA.  
**Fields:**
- `heading` — always "REFLECT AND DISCUSS"
- `subheading` — always "Carry the Lesson Home"
- `questions` — array of 4–5 strings (reflection questions)
- The Companion CTA is rendered here by EbookReader based on the current lesson's Companion data.

**Rendered as:** Clean white page with questions and the "Open Lesson Companion →" CTA card.  
**Count:** 1 per lesson.

### 5. ClosingPage (`kind: "closing"`)
**Purpose:** The final page of each lesson. Wraps up the narrative, includes Duʿāʾ, nextLessonPreview, and discovery note.  
**Fields:**
- `paragraphs` — array of 4–5 concluding paragraphs
- `duaArabic` — the Arabic text of the closing Duʿāʾ
- `duaTranslation` — English translation of the Duʿāʾ
- `nextLessonPreview` — teaser text for the next lesson (2–4 sentences)
- `discoveryNote` — pointer to related content in Profiles, Maps, or References tabs

**Rendered as:** Narrative conclusion, Arabic Duʿāʾ block, next lesson teaser, discovery note.  
**Count:** 1 per lesson.

### 6. CompletionPage (`kind: "completion"`)
**Purpose:** Appears at the end of major milestones (e.g., after Lesson 9, before Lesson 10 begins — "Volume I Complete" page).  
**Fields:** volumeTitle, text (narrative summary of the journey so far).  
**Count:** As needed at major volume milestones.

---

## LESSON PAGE SEQUENCE

Every lesson follows this exact sequence:

```
[PartDividerPage]     — Lesson title, part number, teaser
[SegmentPage × 1]     — Part 1 | ~10 min
[SegmentPage × 2]     — Part 2 | ~10 min
[SegmentPage × 3]     — Part 3 | ~10 min
[SegmentPage × 4]     — Part 4 | ~10 min  (omit if 3-segment lesson)
[ReflectionPage]      — Reflect and Discuss + Companion CTA
[ClosingPage]         — Conclusion + Duʿāʾ + Next Lesson Preview
```

**Total pages per lesson:** 7 (4 segments) or 6 (3 segments).

---

## PAGE INDEX SYSTEM

Every page in the entire series has a 0-indexed position in the `readerLessons[0].pages` array.

As of the end of Lesson 10, the page map is:

| Index | Page | Lesson |
|-------|------|--------|
| 0 | Cover | — |
| 1 | Part 0 divider (Intro) | L1 |
| 2–7 | L1 segments 1–4, reflection, closing | L1 |
| 8 | Part 1 divider (Meccan Period) | L2 |
| 9–14 | L2 segments 1–4, reflection, closing | L2 |
| 15 | Part 2 divider (Year of the Elephant) | L3 |
| 16–21 | L3 segments 1–4, reflection, closing | L3 |
| 22 | Part 3 divider (Ḥalīmah) | L4 |
| 23–28 | L4 segments 1–4, reflection, closing | L4 |
| 29 | Part 4 divider (Opening of the Chest) | L5 |
| 30–35 | L5 segments 1–4, reflection, closing | L5 |
| 36 | Part 5 divider (Death of Āminah) | L6 |
| 37–42 | L6 segments 1–4, reflection, closing | L6 |
| 43 | Part 6 divider (ʿAbd al-Muṭṭalib) | L7 |
| 44–49 | L7 segments 1–3 (3-seg lesson), reflection, closing | L7 |
| 50 | Part 7 divider (Journey to Shām) | L8 |
| 51–56 | L8 segments 1–4, reflection, closing | L8 |
| 57 | Part 8 divider (Ḥilf al-Fuḍūl) | L9 |
| 58–63 | L9 segments 1–3, reflection, closing | L9 |
| 64 | Volume I Complete (CompletionPage) | — |
| 65 | Part 10 divider (Khadījah) | L10 |
| 66–69 | L10 segments 1–4 | L10 |
| 70 | L10 Reflection | L10 |
| 71 | L10 Closing | L10 |

**Total pages (current):** 72 (indices 0–71)  
**Progress denominator (current):** 71

---

## HOW CHAPTER UNLOCKING WORKS

The `BookDetail.tsx` file contains `SIRAH_CHAPTERS` — an array of chapter entries. Each chapter has a `pageIndex` field. When a reader has visited a page with index ≥ `pageIndex`, that chapter becomes readable (unlocked).

Example:
```typescript
{ id: 11, title: "Marriage to Khadījah ؓ", pageIndex: 65 }
```

This means: Chapter 11 unlocks when the reader visits page 65 (the Part 10 divider). Before that, Chapter 11 shows with a "Soon" badge.

If a chapter has no `pageIndex`, it is locked by default ("Soon" state).

---

## THE PART-NUMBER → COMPANION LOOKUP

This is the critical link between the Reader and the Lesson Companion.

**How it works:**
1. The PartDividerPage has `subtitle: "Part 10"`.
2. EbookReader tracks the most recently seen PartDivider and extracts its part number.
3. The Companion lookup key is constructed as `sirah_journey:10`.
4. `lessonEnrichmentData.ts` exports a map `{ "sirah_journey:10": lesson10 }`.
5. EbookReader calls `getLessonEnrichment("sirah_journey:10")` to retrieve the Companion.
6. The Companion CTA is displayed on the ReflectionPage for that lesson.

**Important:** If the subtitle of the PartDividerPage is wrong, the Companion will not load. The subtitle must exactly match the pattern `"Part [N]"`.

**Current mapping:**
```
"Part 0"  → sirah_journey:0  → L1 Companion (Intro to Sīrah)
"Part 1"  → sirah_journey:1  → L2 Companion (The Meccan Period)
"Part 2"  → sirah_journey:2  → L3 Companion (Year of the Elephant)
"Part 3"  → sirah_journey:3  → L4 Companion (Ḥalīmah)
"Part 4"  → sirah_journey:4  → L5 Companion (Opening of the Chest)
"Part 5"  → sirah_journey:5  → L6 Companion (Death of Āminah)
"Part 6"  → sirah_journey:6  → L7 Companion (ʿAbd al-Muṭṭalib)
"Part 7"  → sirah_journey:7  → L8 Companion (Journey to Shām)
"Part 8"  → sirah_journey:8  → L9 Companion (Ḥilf al-Fuḍūl)
"Part 10" → sirah_journey:10 → L10 Companion (Khadījah)
```

**Note:** "Part 9" is currently unassigned. Chapter 9 (Baḥīrā) is locked. When that lesson is written, it will use `sirah_journey:9`.

---

## THE TYPESCRIPT TYPE DEFINITIONS

The full discriminated union is defined in `apps/web/src/data/readerContent.ts`:

```typescript
type CoverPage = {
  kind: "cover";
  title: string;
  subtitle: string;
  description: string[];
  arabicTitle: string;
  author: string;
  publisher: string;
};

type PartDividerPage = {
  kind: "part-divider";
  title: string;
  subtitle: string;  // "Part N" — CRITICAL for Companion lookup
  description: string[];
};

type SegmentPage = {
  kind: "segment";
  segmentNumber: number;
  chapterTitle: string;
  heading: string;
  hadith: {
    type: "ayah" | "hadith";
    arabic: string;
    translation?: string;
    reference: string;
  };
  sections: Array<{
    heading: string;
    paragraphs?: string[];
  }>;
  sectionNote?: string;
};

type ReflectionPage = {
  kind: "reflection";
  heading: string;
  subheading: string;
  questions: string[];
};

type ClosingPage = {
  kind: "closing";
  paragraphs: string[];
  duaArabic: string;
  duaTranslation: string;
  nextLessonPreview: string;
  discoveryNote: string;
};

type CompletionPage = {
  kind: "completion";
  volumeTitle: string;
  text: string;
};

type ReaderPage = 
  | CoverPage 
  | SegmentPage 
  | ReflectionPage 
  | ClosingPage 
  | PartDividerPage 
  | CompletionPage;

type ReaderLesson = {
  id: string;
  pages: ReaderPage[];
};
```

---

## ADDING A NEW LESSON — TECHNICAL STEPS

When writing a new lesson (e.g., Lesson 11), the following files must all be updated in a single deploy:

1. **`readerContent.ts`** — Add 7 new pages after the current last page.
2. **`BookDetail.tsx`** — Add `pageIndex` to the corresponding chapter entry in `SIRAH_CHAPTERS`.
3. **`lessonEnrichmentData.ts`** — Add the new `lessonN` const and add `"sirah_journey:N": lessonN` to the export map.
4. **`libraryData.ts`** — Update the progress denominator from the old value to the new value (old + 7 for a 4-segment lesson, old + 6 for a 3-segment lesson).
5. **`sw.js`** (in C:\Dev only) — Bump the CACHE_NAME from the current version to the next version.

The deploy script handles the copy, bump, build, and deploy automatically. See 11 Deployment and Technical Workflow.

---

## LESSON NAMING CONVENTIONS

### Part-Divider Titles
The lesson title on the PartDividerPage follows the pattern:
`[Subject] — [Theme or Significance]`

Examples:
- "Khadījah — A Home Prepared by Allah"
- "The Year of the Elephant and the Birth of Rasūlullāh ﷺ"
- "Ḥilf al-Fuḍūl — The Pact of the Virtuous"

The title must describe what the lesson is actually about. Titles that describe what happens in a future lesson are not permitted.

### Segment Headings
The segment heading follows the pattern:
`"Virtue: [Arabic name] — [English description of the virtue in this context]"`

Examples:
- "Virtue: Ṣidq — The Currency of Character"
- "Virtue: Wafāʾ — Twenty-Five Years of One Love"
- "Virtue: Thabāt — The Steadfastness That Supports Without Demanding to Understand"

### Segment Chapter Titles
The chapterTitle for each segment is a narrative title describing what happens in that segment:
- "The Trade Journey — When Character Became Currency"
- "She Chose Him — The Proposal That Changed History"

---

## THE DISCOVERY NOTE SYSTEM

Every ClosingPage has a `discoveryNote` — a brief pointer directing readers to related content in the Profiles tab, Maps tab, or References tab.

**Rules for Discovery Notes:**
- Must describe the educational benefit of exploring that content — not just instruct the user to click.
- Must reference real content that actually exists in the mentioned tab.
- Must not instruct users on how to use the UI ("click the Maps tab," "go to Profiles").
- Maximum 2 sentences.

**Examples from live lessons:**
- "Khadījah bint Khuwaylid is one of the most significant personalities in Islamic history. Her full profile — lineage, children, and her place among the greatest women — is in the Profiles tab. The trade route to Syria is explored in the Maps tab under Shām."
- "The geography of this lesson connects directly to the sacred sites discussed in the Maps tab. Ḥilf al-Fuḍūl — the pact made in this lesson — is referenced in the References tab under Tier 2 sources."
