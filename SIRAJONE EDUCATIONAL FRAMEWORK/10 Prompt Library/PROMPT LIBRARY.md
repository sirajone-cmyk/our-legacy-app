# SIRAJONE EDUCATIONAL FRAMEWORK
## 10 Prompt Library

**Status:** Living Document  
**Version:** 1.0  
**Date Established:** June 2026

---

## PURPOSE

This library catalogs the most useful prompts developed for working with AI assistants (Claude and others) during the OUR LEGACY project. Each prompt is categorized by purpose and annotated with usage notes.

The goal: any future session should be able to draw on these prompts without reinventing them from scratch.

---

## CATEGORY 1 — LESSON WRITING PROMPTS

### P-W-001 — Segment Writing Prompt (Full)
**Purpose:** Write a complete SegmentPage for a given part number and virtue.  
**When to use:** When starting a new lesson segment from scratch.

```
Write Segment [N] of Lesson [LESSON NUMBER] for the OUR LEGACY Sīrah series.

LESSON TITLE: [Full lesson title]
SEGMENT TITLE (chapterTitle): [Narrative title for this segment]
VIRTUE: [Arabic virtue name] — [English description]
QUR'ĀNIC VERSE: [Surah name, number:verse]
ARABIC TEXT OF VERSE: [Arabic]
ENGLISH TRANSLATION: [Translation]

NARRATIVE SCOPE: This segment covers [describe the events this segment should narrate].

SOURCES:
- Primary: [Sīrat Ibn Hishām / Bukhārī / etc.]
- Supporting: [Any additional sources]

WRITING STANDARDS:
- Present tense narration
- No fabricated dialogue
- No speculation about internal states
- Precision over vagueness
- Hedging language for all Tier 2 claims
- Active voice default
- Paragraphs maximum 5–6 sentences

OUTPUT FORMAT:
Return the segment as a TypeScript object matching this structure:
{
  kind: "segment",
  segmentNumber: N,
  chapterTitle: "...",
  heading: "Virtue: [Arabic] — [English]",
  hadith: {
    type: "ayah",
    arabic: "...",
    translation: "...",
    reference: "Surah [Name], [number]:[verse]"
  },
  sections: [
    { heading: "...", paragraphs: ["...", "..."] },
    ...
  ],
  sectionNote: "..." // optional scholarly context
}
```

---

### P-W-002 — Reflection Page Prompt
**Purpose:** Write the 4–5 reflection questions for a lesson's ReflectionPage.  
**When to use:** After all segments are complete.

```
Write the Reflection page questions for Lesson [N] of OUR LEGACY: [Lesson Title].

The lesson covered:
- Segment 1: [brief description]
- Segment 2: [brief description]
- Segment 3: [brief description]
- Segment 4: [brief description]

The virtues explored were: [list virtues]

Write 4–5 reflection questions that:
1. Are genuinely open-ended (no single "right" answer)
2. Connect the historical events to the reader's present life
3. Do not repeat the same ground as each other
4. Are appropriate for both family and individual reflection
5. Increase in depth from Q1 (personal/concrete) to Q4–5 (theological/principled)

Do NOT ask about the First Revelation or any event from future lessons.

Return as a TypeScript array of strings:
questions: ["...", "...", "...", "...", "..."]
```

---

### P-W-003 — Closing Page Prompt
**Purpose:** Write the ClosingPage for a lesson.  
**When to use:** After segments and reflection page are finalized.

```
Write the Closing page for Lesson [N] of OUR LEGACY: [Lesson Title].

THE LESSON COVERED: [brief summary of what happened]
NEXT LESSON TOPIC: [what Lesson N+1 will be about]
NOTE: Do NOT narrate the First Revelation if the next lesson is L11.

Write:
1. 4–5 closing paragraphs that:
   - Bring the narrative to a dignified close
   - Connect the lesson's virtue(s) to the reader's life
   - End on a note of anticipation (without narrating the next lesson's events)
   
2. A Duʿāʾ in Arabic (with English translation) appropriate to the lesson's theme

3. A nextLessonPreview (2–4 sentences) that:
   - Creates genuine anticipation
   - Does NOT narrate any event from the next lesson
   - May name what will come but not what happens

4. A discoveryNote (1–2 sentences) pointing to:
   - Profiles tab (if a major figure's profile is there)
   - Maps tab (if a location is relevant)
   - References tab (if a key source should be explored)

Return as TypeScript ClosingPage object.
```

---

### P-W-004 — PartDivider Prompt
**Purpose:** Write the PartDividerPage for a new lesson.  
**When to use:** Before writing segments.

```
Write the PartDividerPage for Lesson [N] of OUR LEGACY.

LESSON TITLE: [Full title following pattern: Subject — Theme/Significance]
PART NUMBER: Part [N]  (this appears in the subtitle field — CRITICAL for Companion lookup)
LESSON SUMMARY: [What this lesson covers]

Write 2–3 description paragraphs that:
- Create anticipation and set the scene
- Introduce the central figures
- State (without narrating) what the lesson is about
- Are written in the warm, dignified tone of the series

Return as TypeScript PartDividerPage:
{
  kind: "part-divider",
  title: "...",
  subtitle: "Part N",
  description: ["...", "...", "..."]
}
```

---

## CATEGORY 2 — COMPANION WRITING PROMPTS

### P-C-001 — Full Companion Generation Prompt
**Purpose:** Write the complete LessonEnrichment object for a lesson.  
**When to use:** After the Reader content (segments, reflection, closing) is finalized.

```
Write the Lesson Companion (LessonEnrichment) for Lesson [N] of OUR LEGACY: [Lesson Title].

LESSON SUMMARY:
[One paragraph summary of what the lesson covered, including key events and figures]

KEY SOURCES:
[List the main sources: e.g., Sīrat Ibn Hishām, Ṣaḥīḥ al-Bukhārī 3816, etc.]

KEY VIRTUES:
Segment 1: [Virtue]
Segment 2: [Virtue]
Segment 3: [Virtue]
Segment 4: [Virtue]

COMPANION KEY: sirah_journey:[N]

Write all 9 sections of the LessonEnrichment interface:
1. lessonTitle — must match PartDividerPage title exactly
2. whyThisMatters — contemporary relevance, not a summary
3. memoryGem — one Tier 1 ḥadīth or verse with EXACT reference and ḥadīth number
4. oneMinuteSummary — 100–150 words, no future lesson content
5. keyFacts — 4–7 items with labels, details, and optional scholarly notes
6. whatWeLearns — 3–4 virtue entries with 2–3 sentence lessons
7. familyDiscussion — 4 questions (Q1 personal → Q4 application) with facilitatorNotes
8. quickReview — 5–6 Q&A pairs (factual → analytical → source-based)
9. furtherReading — 3–6 real obtainable works with lesson-specific notes

CRITICAL RULES:
- memoryGem must have exact source and ḥadīth number — verify before writing
- oneMinuteSummary must NOT narrate First Revelation (reserved for L11)
- familyDiscussion questions must not repeat ReflectionPage questions
- furtherReading works must be real, obtainable books

Return as complete TypeScript LessonEnrichment const.
```

---

### P-C-002 — Memory Gem Verification Prompt
**Purpose:** Verify a ḥadīth citation before including it.  
**When to use:** Before finalizing any Memory Gem.

```
I want to use the following ḥadīth as the Memory Gem for Lesson [N]:

"[The ḥadīth text]"

Citation I have: [Source name] Ḥadīth [Number]

Please:
1. Confirm whether this ḥadīth text matches the cited number and source.
2. If not, identify the correct citation.
3. Provide the exact Arabic text of this ḥadīth.
4. Note any nuances in the translation.
5. Confirm this is from Tier 1 (Bukhārī or Muslim) or identify its actual tier.
```

---

## CATEGORY 3 — DEPLOYMENT AND TECHNICAL PROMPTS

### P-D-001 — Pre-Deploy Verification Prompt
**Purpose:** Verify all 5 changed files before deployment.  
**When to use:** Immediately before running the deploy script.

```
I am about to deploy Lesson [N] to SirajOne (sirajone-786.web.app).

Please verify the following 5 files are consistent and correct:

1. readerContent.ts — new pages start at index [X], total pages now [Y]
2. BookDetail.tsx — Chapter [N+1] has pageIndex: [X]
3. lessonEnrichmentData.ts — exports "sirah_journey:[M]": lesson[N]
4. libraryData.ts — progress denominator is now [Y-1]
5. sw.js — CACHE_NAME is 'our-legacy-v[V]-lesson[N]'

Check that:
- The PartDividerPage subtitle is "Part [M]" (matches Companion key)
- The pageIndex in BookDetail matches the PartDividerPage index
- The progress denominator = last page index (total pages - 1)
- The SW cache version is exactly 1 higher than the previous version

Confirm all 5 checks before I proceed.
```

---

### P-D-002 — Post-Deploy Live Verification Prompt
**Purpose:** Perform systematic live verification after deployment.  
**When to use:** After firebase deploy completes.

```
Lesson [N] has been deployed to sirajone-786.web.app.

Please verify the following on the LIVE site (do not modify any code):

1. App loads without errors at https://sirajone-786.web.app
2. Service Worker shows: our-legacy-v[V]-lesson[N]
3. Reader reaches page index [LAST PAGE INDEX] (the new last page)
4. Progress shows [LAST PAGE INDEX]/[LAST PAGE INDEX] = 100%
5. Chapter [N+1] is unlocked (no "Soon" badge)
6. New lesson title "[LESSON TITLE]" appears on the PartDividerPage
7. All [K] segments render correctly
8. Reflection page shows the Companion CTA
9. Companion loads with lessonTitle: "[LESSON TITLE]"
10. Companion Memory Gem shows correct ḥadīth number
11. Closing page shows correct nextLessonPreview
12. Discovery Note references correct tabs

Report PASS/FAIL for each item. Do not suggest code changes unless an item FAILS on the live site.
```

---

### P-D-003 — SW Cache Debug Prompt
**Purpose:** Diagnose and resolve Service Worker cache issues.  
**When to use:** When the app shows stale content after a new deploy.

```
After deploying Lesson [N], the app at sirajone-786.web.app is showing stale content.

Current symptoms:
- [Describe what is showing — e.g., "Page count shows 65/65 instead of 71/71"]
- [Describe SW version shown — e.g., "SW shows v12-lesson10 but content is old"]

Please:
1. Check whether the ISSUE is with the Firebase deployment itself (wrong bundle) or with the browser-side SW cache (correct bundle exists but cache serves stale content).
2. If the deployment is correct (right bundle exists, new content is in it), help me fix the browser-side SW cache without making any code changes.
3. Distinguish between:
   a. A `/` cache entry pointing to old HTML
   b. An old JS bundle in the cache
   c. The new JS bundle missing from the cache
4. Provide JavaScript to inspect and correct the SW cache via the browser console or Chrome extension.
```

---

## CATEGORY 4 — RESEARCH AND AUTHENTICATION PROMPTS

### P-R-001 — Source Identification Prompt
**Purpose:** Identify the classical source for a Sīrah event.  
**When to use:** Before writing any new lesson segment.

```
I am writing about the following event from the Sīrah of the Prophet ﷺ:
[Describe the event]

Please:
1. Identify the primary classical source(s) for this event.
2. Assign the source(s) to Tier 1, 2, or 3 per the OUR LEGACY Source Hierarchy.
3. Note any significant scholarly disagreements about this event.
4. Note any aspects of this event that have weak or disputed narrations.
5. Suggest the appropriate hedging language for the Reader text.

Do not suggest including any ḍaʿīf or mawḍūʿ narrations as supporting evidence.
```

---

### P-R-002 — Scholarly Disagreement Resolution Prompt
**Purpose:** Resolve a specific disputed historical detail.  
**When to use:** When two or more classical sources give conflicting information.

```
There is a scholarly disagreement about the following detail in Lesson [N]:
[Describe the dispute — e.g., "Khadijah's age at marriage"]

Source A says: [position]
Source B says: [position]

Please:
1. Identify which position is dominant in classical Sīrah scholarship.
2. Identify which scholars support each position.
3. Evaluate the strength of each position's evidence.
4. Recommend which position OUR LEGACY should follow.
5. Suggest the exact language to use in the Reader and in the Companion Key Facts section.

Follow the OUR LEGACY Writing Standards C3 protocol for scholarly disagreements.
```

---

## CATEGORY 5 — QUALITY ASSURANCE PROMPTS

### P-Q-001 — Editorial Review Prompt
**Purpose:** Final check of a completed lesson before deployment.  
**When to use:** After all pages are written, before running the deploy script.

```
Please perform an editorial review of the complete Lesson [N] content for OUR LEGACY.

Check against the following standards (from the Writing Standards document):

A. SOURCE CHECK — does every factual claim have a traceable source?
B. HEDGE LEVEL CHECK — is every claim hedged at the correct level for its tier?
C. QUOTATION CHECK — is every direct quotation from an authenticated text?
D. CONTINUITY CHECK — does the lesson narrate any events belonging to future lessons?
E. VIRTUE ALIGNMENT — is the virtue in each segment genuinely illustrated by its narrative?
F. TONE CHECK — is the writing precise, dignified, and readable?
G. HONORIFIC CHECK — are all honorifics correctly placed (ﷺ, ؓ, عليه السلام)?
H. TRANSLITERATION CHECK — are all Arabic names correctly transliterated?
I. NEXT LESSON PREVIEW CHECK — does the preview anticipate without narrating?
J. COMPANION CONSISTENCY — does the Companion match the Reader content?

Report any failures with the specific text that fails and what the correction should be.
```

---

## HOW TO USE THIS LIBRARY

1. Find the prompt that matches your task.
2. Fill in the [BRACKETED] fields with the specific lesson information.
3. Run the prompt in a new Claude conversation with sufficient context.
4. Always provide the relevant standards documents (Writing Standards, Source Hierarchy, Authentication Standards) as context for complex prompts.
5. When a new prompt is developed that proves more useful than an existing one, update this library.

---

## CONTRIBUTING NEW PROMPTS

New prompts should be added here when:
- A prompt is used more than once across different sessions.
- A prompt produces consistently high-quality results.
- A prompt resolves a recurring problem (like the SW cache debug prompt).

New prompts should follow the existing format: Category, ID, Purpose, When to Use, Prompt Text.
