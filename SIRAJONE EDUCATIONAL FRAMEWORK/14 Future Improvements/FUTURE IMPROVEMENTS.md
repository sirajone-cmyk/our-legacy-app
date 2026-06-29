# SIRAJONE EDUCATIONAL FRAMEWORK
## 14 Future Improvements

**Status:** Living Document — Add items as they are identified  
**Version:** 1.0  
**Date Established:** June 2026

---

## PURPOSE

This document records improvements, features, and enhancements that have been identified but not yet implemented. Items are organized by priority and category. This is a planning document, not a commitment list.

**Critical Rule:** Items in this document are NOT to be implemented during the Documentation Phase. This phase is documentation-only. All items here are for future consideration after the framework archive is complete and new lessons resume.

---

## CATEGORY A — CONTENT IMPROVEMENTS

### A1 — Per-Lesson Research Archives (L2–L9)
**Status:** Partially complete (L1 and L10 archives written in this framework)  
**Needed:** Write Research Archives for Lessons 2 through 9.  
**Priority:** High — these archives ensure editorial decisions for early lessons are preserved.

### A2 — Backfill Reader Content to Minimum Standard
**Status:** Pending review  
**Needed:** Verify that all 10 existing lessons meet the current writing standards. Earlier lessons (L1–L5) may predate some of the writing standards now documented.  
**Priority:** Medium — do not alter working content unless a genuine standard violation is found.

### A3 — Lesson 11 — The First Revelation
**Status:** Not started  
**Primary source:** Ṣaḥīḥ al-Bukhārī, Ḥadīth 3  
**Scope:** The cave of Ḥirāʾ, the encounter with Jibrīl, the first five verses, Khadījah's response, Waraqah ibn Nawfal, the fatrah.  
**Priority:** Highest — this is the next lesson to write after the framework archive is complete.

---

## CATEGORY B — FEATURE IMPROVEMENTS

### B1 — Lesson Progress Persistence Across Devices
**Current behavior:** Progress (highest page index reached) is stored locally.  
**Improvement:** Sync progress across devices via user account.  
**Technical requirement:** User authentication + cloud storage (Firebase Firestore).

### B2 — Audio Reader
**Current behavior:** Text-only reading.  
**Improvement:** Audio narration for each segment — enabling listening rather than reading.  
**Technical requirement:** Audio files hosted on Firebase Storage or CDN; player integrated into EbookReader.

### B3 — Bookmarking
**Current behavior:** App remembers the last page visited but not manual bookmarks.  
**Improvement:** Allow readers to bookmark specific pages with notes.

### B4 — Search Within Reader
**Current behavior:** No in-app search.  
**Improvement:** Search across all lesson content.

### B5 — Downloadable Companion PDFs
**Current behavior:** Companion is in-app only.  
**Improvement:** Allow downloading the Companion as a PDF for madrasah/classroom use.

---

## CATEGORY C — TECHNICAL IMPROVEMENTS

### C1 — Automated Deploy Verification
**Current behavior:** Post-deploy verification is manual.  
**Improvement:** Automated verification script that checks the live site for all standard items and outputs a PASS/FAIL report.

### C2 — SW Cache Management in Deploy Script
**Current behavior:** SW cache version is bumped via find-replace. Cache split risk exists.  
**Improvement:** Add a step to the deploy script that clears the SW registration on the test device before verification begins.

### C3 — TypeScript Type Strictness
**Current behavior:** TypeScript compilation is run during build.  
**Improvement:** Add `tsc --noEmit` step to the deploy script's verification stage, separate from the build step.

---

## CATEGORY D — DOCUMENTATION IMPROVEMENTS

### D1 — Per-Lesson Research Archives (L2–L9)
Identified also under A1. Creating these archives is one of the highest-priority documentation tasks remaining.

### D2 — Companion Examples Gallery
**Needed:** A document in folder 17 (Examples) showing complete worked examples of all 9 Companion sections for L9 and L10 as reference models.

### D3 — Lesson Writing Walkthrough
**Needed:** A step-by-step guide in folder 15 (Templates) showing exactly how to write a new lesson from first draft to deployed content.
