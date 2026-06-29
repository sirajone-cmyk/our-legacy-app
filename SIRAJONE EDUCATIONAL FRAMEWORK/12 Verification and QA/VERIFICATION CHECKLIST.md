# SIRAJONE EDUCATIONAL FRAMEWORK
## 12 Verification and QA — Master Checklist

**Status:** Permanent Reference  
**Version:** 1.0  
**Date Established:** June 2026

---

## PART 1 — PRE-DEPLOY VERIFICATION (Before Running the Script)

Run this checklist before executing any deploy script. All items must PASS before proceeding.

### 1A — Content Verification (readerContent.ts)

- [ ] New PartDividerPage title matches the final lesson title exactly
- [ ] New PartDividerPage subtitle is `"Part N"` (with the correct part number)
- [ ] Segment 1 has `segmentNumber: 1`
- [ ] Segment 2 has `segmentNumber: 2`
- [ ] Segment 3 has `segmentNumber: 3`
- [ ] Segment 4 has `segmentNumber: 4` (omit if 3-segment lesson)
- [ ] Each segment has a correctly formatted `heading: "Virtue: [Arabic] — [English]"`
- [ ] Each segment has a `hadith` block with Arabic, translation (if applicable), and reference
- [ ] ReflectionPage has 4–5 questions (none referencing future lessons)
- [ ] ClosingPage has `nextLessonPreview` (anticipates without narrating)
- [ ] ClosingPage has `discoveryNote` pointing to real content in the app
- [ ] No segment narrates events from future lessons
- [ ] No First Revelation scene appears in lessons prior to the dedicated Revelation lesson

### 1B — Chapter Unlock Verification (BookDetail.tsx)

- [ ] The new lesson's chapter entry has `pageIndex` set
- [ ] The `pageIndex` value matches the index of the new PartDividerPage in readerContent.ts

### 1C — Companion Verification (lessonEnrichmentData.ts)

- [ ] New `lessonN` const is defined
- [ ] `lessonTitle` matches the PartDividerPage title exactly
- [ ] `memoryGem` cites a Tier 1 source (Qur'ān, Bukhārī, Muslim) where possible
- [ ] ḥadīth number in `memoryGem` is correct (verified by reading the ḥadīth text)
- [ ] `oneMinuteSummary` does not narrate First Revelation content
- [ ] `keyFacts` has 4–7 items with scholarly notes where disagreement exists
- [ ] `whatWeLearns` has 3–4 virtue entries
- [ ] `familyDiscussion` has exactly 4 questions with facilitatorNotes
- [ ] `quickReview` has 5–6 Q&A pairs
- [ ] `furtherReading` has 3–6 real works with lesson-specific notes
- [ ] Export map includes `"sirah_journey:N": lessonN`

### 1D — Progress Denominator Verification (libraryData.ts)

- [ ] Formula is `saved / [LAST PAGE INDEX]`
- [ ] `[LAST PAGE INDEX]` = number of total pages − 1
- [ ] `[LAST PAGE INDEX]` = previous denominator + 7 (4-segment) or + 6 (3-segment)

### 1E — TypeScript Compilation

- [ ] `npm run build` completes with 0 TypeScript errors
- [ ] Build output produces a new bundle with a different hash from the previous build

---

## PART 2 — POST-DEPLOY LIVE VERIFICATION (After Firebase Deploy)

Wait 2–3 minutes after `firebase deploy` completes. Then verify all items on the live site.

**Site:** https://sirajone-786.web.app  
**Rule:** Do not modify any code unless an item FAILS verification.

### 2A — App Load
- [ ] App loads at https://sirajone-786.web.app without console errors
- [ ] App loads without white-screen crash

### 2B — Service Worker
- [ ] SW version in Application → Service Workers = `our-legacy-v[N]-lesson[LESSON]`
- [ ] SW status = "activated and running"

### 2C — Reader Navigation
- [ ] Can navigate to the new lesson's PartDividerPage
- [ ] New lesson title is displayed correctly
- [ ] All segments render without errors
- [ ] ReflectionPage loads and displays the Companion CTA
- [ ] ClosingPage loads with Duʿāʾ and nextLessonPreview

### 2D — Progress
- [ ] Progress calculation = `[LAST PAGE INDEX] / [LAST PAGE INDEX]` = 100% when on last page
- [ ] Progress formula in source matches `saved / [LAST PAGE INDEX]`

### 2E — Chapter Unlock
- [ ] New chapter is visible in the Chapters/Library tab
- [ ] New chapter does NOT show a "Soon" badge
- [ ] Clicking the new chapter navigates to the correct PartDividerPage

### 2F — Companion
- [ ] Companion CTA appears on the ReflectionPage
- [ ] Tapping "Open Lesson Companion" opens the Companion screen
- [ ] `lessonTitle` in Companion matches the lesson title
- [ ] `memoryGem` is displayed with correct text and source
- [ ] All 9 Companion sections render without error

### 2G — Specific Content Spot Checks
Verify at least 3 unique phrases or facts from the new lesson are present:
- [ ] Key phrase 1: `[e.g., "A Home Prepared by Allah"]` — found in PartDividerPage
- [ ] Key phrase 2: `[e.g., specific segment text]` — found in Reader
- [ ] Key phrase 3: `[e.g., Memory Gem text]` — found in Companion

---

## PART 3 — EDITORIAL REVIEW CHECKLIST (Before Content Lock)

Run before finalising any lesson's content. Can be run before or during writing.

### 3A — Source Standards
- [ ] Every factual claim has an identified source
- [ ] Every Tier 2 claim uses appropriate hedging language
- [ ] No Tier 2 claim is presented with Tier 1 confidence
- [ ] No ḍaʿīf narration is presented as historical fact
- [ ] No mawḍūʿ narration is included

### 3B — Writing Standards
- [ ] Narrative is in present tense
- [ ] No fabricated dialogue
- [ ] No speculation about internal states
- [ ] Paragraphs do not exceed 5–6 sentences
- [ ] Active voice is used throughout
- [ ] Tone is dignified and precise

### 3C — Islamic Terminology
- [ ] Honorifics: ﷺ after every mention of the Prophet's name
- [ ] Honorifics: ؓ after Companions' and Mothers of the Believers' names
- [ ] All Arabic names are correctly transliterated
- [ ] Arabic terms are explained on first use in each lesson

### 3D — Structural Continuity
- [ ] Lesson does not narrate events from future lessons
- [ ] If approaching the First Revelation, lesson ends before the Revelation scene
- [ ] `nextLessonPreview` anticipates but does not narrate

---

## PASS/FAIL REPORTING FORMAT

When reporting verification results, use this table format:

```
| # | Check | Result | Notes |
|---|-------|--------|-------|
| 1 | App loads without errors | PASS | — |
| 2 | SW version = our-legacy-v12-lesson10 | PASS | — |
| 3 | Page count 71/71 | PASS | — |
| 4 | Chapter 11 unlocked | PASS | — |
| 5 | "A Home Prepared by Allah" visible | PASS | Found on PartDivider |
| 6 | Companion loads | PASS | — |
| 7 | Memory Gem: Bukhārī 3816 | PASS | — |
...
```

If ALL items PASS → Lesson is declared: **Written ✅ Built ✅ Deployed ✅ Live Verified ✅ Editorially Complete ✅**
