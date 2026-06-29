# SIRAJONE EDUCATIONAL FRAMEWORK
## 04 Companion Framework

**Status:** Permanent Reference  
**Version:** 1.0  
**Date Established:** June 2026

---

## WHAT IS THE LESSON COMPANION?

The Lesson Companion (rendered by `LessonGuide.tsx`, accessible via `lessonEnrichmentData.ts`) is a structured deep-learning tool that accompanies every Reader lesson. It is designed for families, classrooms, study circles, and madrasahs who want to go beyond reading into genuine educational engagement.

The Companion appears on the Reflection page (penultimate page of each lesson) as a CTA card: **"✦ Lesson Companion — Open Lesson Companion →"**

When opened, it displays all 9 sections of the Companion in sequence on a dedicated screen.

---

## THE NINE COMPANION SECTIONS

Every Companion must contain exactly these nine sections, in this order:

### 1. `lessonTitle`
**Type:** string  
**Purpose:** The full lesson title as it appears on the PartDividerPage.  
**Writing rule:** Must match the PartDividerPage title exactly.  
**Example:** `"Khadījah — A Home Prepared by Allah"`

---

### 2. `whyThisMatters`
**Type:** string (1–2 paragraphs)  
**Purpose:** Explains the contemporary relevance of this lesson. Why does this 7th-century event matter to a Muslim family in 2026?  
**Writing rule:**
- Never summarise what is in the Reader. The reader has already read the lesson.
- Connect directly to the reader's present life, family, community, or spiritual development.
- Use the virtue of the lesson as the bridge between history and contemporary life.
- 2–4 sentences.

**Example from L10:**
"In an age that has reduced marriage to a transaction and loyalty to a feeling, this lesson presents a different model: a marriage built on character-based observation, mutual knowledge, and a loyalty that outlasted death. Khadījah bint Khuwaylid was not simply the Prophet's wife — she was the person who, more than anyone else in history, knew him well enough to support him before understanding was complete."

---

### 3. `memoryGem`
**Type:** string  
**Purpose:** A single memorable hadith or Qur'ānic verse that encapsulates the lesson.  
**Writing rule:**
- Must be from a Tier 1 source (Qur'ān, Bukhārī, Muslim) where possible.
- If from Tier 2, must be clearly attributed and hedged.
- This is the one quote families will carry with them after the lesson. Choose it deliberately.
- Do not use the same ḥadīth that was used in the Reader segments unless it is truly the definitive quote for the lesson.
- Always include full reference (book + hadith number).

**Example from L10:**
"She believed in me when people disbelieved me. She assisted me with her wealth when people deprived me. And Allah blessed me with children through her. — The Prophet ﷺ about Khadījah bint Khuwaylid, Ṣaḥīḥ al-Bukhārī, Ḥadīth 3816"

**Critical note:** Bukhārī 3816 is the Prophet's statement about Khadījah after her death. Bukhārī 3 is the narration of the First Revelation. These are two different ḥadīths. They were confused in early drafts of the L10 Companion and corrected. The Memory Gem for L10 must always cite 3816, not 3.

---

### 4. `oneMinuteSummary`
**Type:** string (1 paragraph)  
**Purpose:** A precise one-paragraph summary of the entire lesson for someone who has not yet read it — or for a quick review.  
**Writing rule:**
- Must include all key historical figures (names, roles).
- Must include the key event.
- Must include the historical outcome.
- Must NOT narrate content from future lessons (especially: must not narrate the First Revelation in any lesson prior to the First Revelation lesson).
- ~100–150 words.

**Structural template:**
"[Context]. [Key event/figure]. [Development/consequence]. [Significance]. [Bridge to next lesson if appropriate]."

---

### 5. `keyFacts`
**Type:** Array of objects: `{ label: string, detail: string, note?: string }`  
**Purpose:** A structured fact-check and reference section covering the most important verifiable details of the lesson.  
**Writing rule:**
- 4–7 key facts.
- Each fact is a claim that students, parents, or teachers might research or be asked about.
- The `detail` is the answer to the `label`.
- The `note` (optional) provides scholarly context — e.g., "This is the dominant position in classical scholarship; some sources suggest a different figure."
- Sources are cited where relevant.

**Example from L10:**
```
{ label: "Age of the Prophet at marriage", 
  detail: "Twenty-five years old, according to the classical Sīrah — Sīrat Ibn Hishām drawing on Ibn Isḥāq.",
  note: "This is the widely accepted position across classical scholarship." }

{ label: "Age of Khadījah at marriage", 
  detail: "The most widely transmitted classical position is forty years old. Some narrations suggest a younger age.",
  note: "The classical position of forty is followed by the majority of scholars." }
```

---

### 6. `whatWeLearns`
**Type:** Array of objects: `{ virtue: string, lesson: string }`  
**Purpose:** A structured virtue-lesson section that extracts the practical Islamic values from the narrative.  
**Writing rule:**
- One entry per major virtue taught in the lesson (usually 3–4).
- The `virtue` is the virtue name (in English with Arabic where helpful).
- The `lesson` is 2–3 sentences stating what this virtue means, illustrated by this lesson's events.
- Do not moralize or preach. State what the example shows.

**Example from L10:**
```
{ virtue: "Ṣidq — Truthfulness in trade",
  lesson: "The Prophet had no authority watching him on the road to Syria. He was honest because that was who he was. Character is what we do in the unsupervised spaces of our lives." }
```

---

### 7. `familyDiscussion`
**Type:** Array of objects: `{ question: string, facilitatorNote: string }`  
**Purpose:** 4 structured discussion questions for family, classroom, or group use, with facilitator guidance.  
**Writing rule:**
- Q1: Opens with personal experience — "Think of a time when you..." "Have you ever..."
- Q2: Moves to relationships and community — "What does this tell us about how we treat..."
- Q3: Goes deeper into Islamic values or theology — "What does this event reveal about Allah's plan..."
- Q4: Closes with application — "What will you do differently because of this lesson?"
- Each question has a `facilitatorNote` that explains what the question is designed to draw out, and suggests how to guide the conversation.
- Questions must not have a single "right" answer. They are genuinely open.
- Questions must not repeat what was already asked on the Reader's Reflection page.

---

### 8. `quickReview`
**Type:** Array of objects: `{ question: string, answer: string }`  
**Purpose:** A knowledge check covering the key facts and events of the lesson.  
**Writing rule:**
- 5–6 questions.
- Questions test specific knowledge (names, events, sources, dates).
- Answers are precise — not vague.
- Can be used as a quiz in classroom or family settings.
- Questions are ordered from factual (Q1–Q3) to analytical (Q4–Q5) to source-based (Q5–Q6).

---

### 9. `furtherReading`
**Type:** Array of objects: `{ title: string, author: string, note: string }`  
**Purpose:** A curated reading list for students who want to go deeper.  
**Writing rule:**
- 3–6 entries.
- Include both classical Arabic sources and accessible modern English works.
- The `note` explains why this specific source is valuable for this specific lesson — not a generic description of the source.
- Sources must be real, obtainable works.
- Tier assignment (1, 2, or 3) noted where helpful.

---

## THE COMPANION DATA STRUCTURE (TypeScript)

From `lessonEnrichmentTypes.ts`:

```typescript
interface LessonEnrichment {
  lessonTitle: string;
  whyThisMatters: string;
  memoryGem: string;
  oneMinuteSummary: string;
  keyFacts: Array<{ label: string; detail: string; note?: string }>;
  whatWeLearns: Array<{ virtue: string; lesson: string }>;
  familyDiscussion: Array<{ question: string; facilitatorNote: string }>;
  quickReview: Array<{ question: string; answer: string }>;
  furtherReading: Array<{ title: string; author: string; note: string }>;
}
```

All fields are required. No optional markers on the top-level fields.

---

## THE COMPANION EXPORT MAP

In `lessonEnrichmentData.ts`, each Companion is exported as a `const` and referenced in the export map:

```typescript
export const lessonEnrichmentMap: Record<string, LessonEnrichment> = {
  "sirah_journey:0": lesson0,   // L1 — Intro to Sīrah
  "sirah_journey:1": lesson1,   // L2 — The Meccan Period
  "sirah_journey:2": lesson2,   // L3 — Year of the Elephant
  "sirah_journey:3": lesson3,   // L4 — Ḥalīmah
  "sirah_journey:4": lesson4,   // L5 — Opening of the Chest
  "sirah_journey:5": lesson5,   // L6 — Death of Āminah
  "sirah_journey:6": lesson6,   // L7 — ʿAbd al-Muṭṭalib
  "sirah_journey:7": lesson7,   // L8 — Journey to Shām
  "sirah_journey:8": lesson8,   // L9 — Ḥilf al-Fuḍūl
  // sirah_journey:9 reserved  // L10-alt — Baḥīrā (not yet written)
  "sirah_journey:10": lesson10, // L10 — Khadījah
};
```

The key format is always: `"sirah_journey:N"` where N is the PartDividerPage subtitle number.

---

## THE COMPANION CTA PLACEMENT

The Companion CTA appears on the **ReflectionPage** (not on the ClosingPage).

This placement was decided deliberately after testing. The correct reading flow is:
1. Finish reading all 4 segments.
2. Reach the Reflection page.
3. Open the Companion to deepen reflection.
4. Return to read the Closing page as a conclusion.

Previous implementations placed the CTA on the ClosingPage. This was changed (Task #146, Phase 4 fixes). The change improved the educational flow because the Companion supplements the reflection — not the conclusion.

---

## COMPANION QUALITY STANDARDS

A Companion is not approved until it meets all of the following:

- [ ] `lessonTitle` matches the PartDividerPage title exactly.
- [ ] `memoryGem` cites a Tier 1 source where possible, and the citation is precise (book + ḥadīth number).
- [ ] `oneMinuteSummary` does not narrate content from future lessons.
- [ ] `keyFacts` are accurate and include scholarly notes where disagreement exists.
- [ ] `whatWeLearns` entries are grounded in the lesson content — not generic virtue statements.
- [ ] `familyDiscussion` has 4 questions following the Q1→Q4 structural arc.
- [ ] Each `facilitatorNote` provides real guidance (not just restates the question).
- [ ] `quickReview` has 5–6 questions covering different types of knowledge.
- [ ] `furtherReading` entries are real, obtainable works with lesson-specific notes.
- [ ] All Arabic names, terms, and honorifics are correct.
- [ ] TypeScript compiles with 0 errors after the Companion is added to the export map.

---

## COMPANION BACKFILL ORDER (COMPLETED)

All 10 Companions have been written and deployed. The backfill order was:

1. L6 (Death of Āminah) — the first Companion written; established the template.
2. L3 (Year of the Elephant) — first backfill.
3. L4 (Ḥalīmah) — second backfill.
4. L5 (Opening of the Chest) — third backfill.
5. L2 (The Meccan Period) — fourth backfill.
6. L1 (Intro to Sīrah) — fifth backfill, required Part 0 divider insertion.
7. L7 (ʿAbd al-Muṭṭalib) — written alongside the lesson.
8. L8 (Journey to Shām) — written alongside the lesson.
9. L9 (Ḥilf al-Fuḍūl) — written alongside the lesson.
10. L10 (Khadījah) — written alongside the lesson.

All 10 Companions are live as of the June 2026 deployment.
