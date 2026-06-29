# SIRAJONE EDUCATIONAL FRAMEWORK
## 15 Templates — New Lesson Template

**Status:** Permanent Reference  
**Version:** 1.0  
**Date Established:** June 2026

---

## HOW TO USE THIS TEMPLATE

Copy the TypeScript structures below into the appropriate files. Fill in all `[PLACEHOLDER]` values. Remove all comments before deploying.

---

## TEMPLATE 1 — readerContent.ts (New Pages to Append)

```typescript
// ============================================================
// LESSON [N] — [LESSON TITLE]
// Part Number: [PART NUMBER]
// Pages: indices [START_INDEX] through [END_INDEX]
// ============================================================

{
  kind: "part-divider",
  title: "[LESSON TITLE]",
  subtitle: "Part [N]",  // CRITICAL: must match sirah_journey:[N] Companion key
  description: [
    "[Opening paragraph — set the scene, introduce the historical context]",
    "[Second paragraph — introduce the central figure or event]",
    "[Optional third paragraph — create anticipation for what the lesson will cover]",
  ],
},

// SEGMENT 1
{
  kind: "segment",
  segmentNumber: 1,
  chapterTitle: "[Narrative title for this segment]",
  heading: "Virtue: [Arabic virtue name] — [English description of the virtue in this context]",
  hadith: {
    type: "ayah",  // or "hadith"
    arabic: "[Full Arabic text]",
    translation: "[English translation]",
    reference: "Surah [Name], [Number]:[Verse(s)]",  // or "Ṣaḥīḥ al-Bukhārī, Ḥadīth [N]"
  },
  sections: [
    {
      heading: "[Section heading]",
      paragraphs: [
        "[Paragraph 1 — present tense, no fabricated dialogue, active voice]",
        "[Paragraph 2]",
        "[Paragraph 3]",
      ],
    },
    {
      heading: "[Section heading]",
      paragraphs: [
        "[Paragraph 1]",
        "[Paragraph 2]",
      ],
    },
    // Add more sections as needed
  ],
  // sectionNote: "[Optional: scholarly context or editorial note]",
},

// SEGMENT 2
{
  kind: "segment",
  segmentNumber: 2,
  chapterTitle: "[Narrative title]",
  heading: "Virtue: [Arabic] — [English]",
  hadith: {
    type: "ayah",
    arabic: "[Arabic]",
    translation: "[Translation]",
    reference: "[Reference]",
  },
  sections: [
    { heading: "[Heading]", paragraphs: ["[Para 1]", "[Para 2]", "[Para 3]"] },
    { heading: "[Heading]", paragraphs: ["[Para 1]", "[Para 2]"] },
  ],
},

// SEGMENT 3
{
  kind: "segment",
  segmentNumber: 3,
  chapterTitle: "[Narrative title]",
  heading: "Virtue: [Arabic] — [English]",
  hadith: {
    type: "ayah",
    arabic: "[Arabic]",
    translation: "[Translation]",
    reference: "[Reference]",
  },
  sections: [
    { heading: "[Heading]", paragraphs: ["[Para 1]", "[Para 2]", "[Para 3]"] },
    { heading: "[Heading]", paragraphs: ["[Para 1]", "[Para 2]"] },
  ],
},

// SEGMENT 4 (omit for 3-segment lessons)
{
  kind: "segment",
  segmentNumber: 4,
  chapterTitle: "[Narrative title]",
  heading: "Virtue: [Arabic] — [English]",
  hadith: {
    type: "ayah",
    arabic: "[Arabic]",
    translation: "[Translation]",
    reference: "[Reference]",
  },
  sections: [
    { heading: "[Heading]", paragraphs: ["[Para 1]", "[Para 2]", "[Para 3]"] },
    { heading: "[Heading]", paragraphs: ["[Para 1]", "[Para 2]"] },
  ],
},

// REFLECTION PAGE
{
  kind: "reflection",
  heading: "REFLECT AND DISCUSS",
  subheading: "Carry the Lesson Home",
  questions: [
    "[Q1 — personal/experiential: 'Think of a time when...' or 'Have you ever...']",
    "[Q2 — relational/community: 'What does this teach us about how we...']",
    "[Q3 — theological/deeper: 'What does this event reveal about Allah's...']",
    "[Q4 — application: 'What will you do differently because of this lesson?']",
    // Optional Q5
  ],
},

// CLOSING PAGE
{
  kind: "closing",
  paragraphs: [
    "[Closing para 1 — bring the narrative to rest]",
    "[Closing para 2 — connect the virtue to the reader's life]",
    "[Closing para 3 — reflect on the historical significance]",
    "[Closing para 4 — quiet, dignified conclusion]",
    // Optional para 5
  ],
  duaArabic: "[Arabic Duʿāʾ text]",
  duaTranslation: "[English translation of the Duʿāʾ]",
  nextLessonPreview: "[2–4 sentences anticipating the next lesson WITHOUT narrating it]",
  discoveryNote: "[1–2 sentences pointing to Profiles/Maps/References tab content]",
},
```

---

## TEMPLATE 2 — lessonEnrichmentData.ts (New Companion)

```typescript
// Add this const before the export map
const lesson[N]: LessonEnrichment = {
  lessonTitle: "[LESSON TITLE — must match PartDividerPage title exactly]",
  
  whyThisMatters: "[2–4 sentences on contemporary relevance. NOT a summary. Connect to the reader's life.]",
  
  memoryGem: "[Quote]. — [Attribution], [Source], Ḥadīth [Number]",
  // VERIFY: Read the full ḥadīth text and confirm the number before writing this
  
  oneMinuteSummary: "[100–150 words. Include key figures, events, outcomes. NO future lesson content.]",
  
  keyFacts: [
    {
      label: "[Fact label]",
      detail: "[The answer]",
      note: "[Optional: scholarly context or alternative positions]",
    },
    // 4–7 total entries
  ],
  
  whatWeLearns: [
    {
      virtue: "[Arabic virtue name] — [English]",
      lesson: "[2–3 sentences stating what this virtue means as illustrated by this lesson]",
    },
    // 3–4 entries
  ],
  
  familyDiscussion: [
    {
      question: "[Q1 — personal/experiential]",
      facilitatorNote: "[Guide for the discussion leader: what to draw out, how to redirect if it stalls]",
    },
    {
      question: "[Q2 — relational/community]",
      facilitatorNote: "[Guide]",
    },
    {
      question: "[Q3 — theological/deeper]",
      facilitatorNote: "[Guide]",
    },
    {
      question: "[Q4 — application]",
      facilitatorNote: "[Guide]",
    },
  ],
  
  quickReview: [
    { question: "[Factual Q1]", answer: "[Precise answer]" },
    { question: "[Factual Q2]", answer: "[Precise answer]" },
    { question: "[Factual Q3]", answer: "[Precise answer]" },
    { question: "[Analytical Q4]", answer: "[Precise answer]" },
    { question: "[Analytical Q5]", answer: "[Precise answer]" },
    { question: "[Source-based Q6]", answer: "[Precise answer]" },
  ],
  
  furtherReading: [
    {
      title: "[Book title]",
      author: "[Author name]",
      note: "[Why this specific source is valuable for THIS specific lesson]",
    },
    // 3–6 entries
  ],
};

// Add to the export map:
export const lessonEnrichmentMap: Record<string, LessonEnrichment> = {
  // ... existing entries ...
  "sirah_journey:[N]": lesson[N],
};
```

---

## TEMPLATE 3 — BookDetail.tsx Chapter Entry

```typescript
// Find the chapter entry for this lesson and add pageIndex:
{ 
  id: [CHAPTER_ID], 
  title: "[Chapter Title]", 
  pageIndex: [PAGE_INDEX_OF_PARTDIVIDER]
},
```

---

## TEMPLATE 4 — libraryData.ts Progress Update

```typescript
// Find and update the progress formula:
// Before: Math.min(100, Math.round((saved / [OLD_DENOMINATOR]) * 100))
// After:  Math.min(100, Math.round((saved / [NEW_DENOMINATOR]) * 100))

// NEW_DENOMINATOR = OLD_DENOMINATOR + 7 (4-segment lesson)
// NEW_DENOMINATOR = OLD_DENOMINATOR + 6 (3-segment lesson)
```

---

## TEMPLATE 5 — Deploy Script Checklist Section

Fill in these verification values in the deploy script before running:

```
Lesson title string:     "[KEY PHRASE THAT MUST BE IN READER CONTENT]"
Segment phrase:          "[UNIQUE PHRASE FROM A SEGMENT]"
pageIndex value:         "pageIndex: [N]"
Companion key:           "sirah_journey:[N]"
Progress denominator:    "saved / [DENOMINATOR]"
SW cache name:           "our-legacy-v[VERSION]-lesson[LESSON]"
```
