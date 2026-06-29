# SIRAJONE EDUCATIONAL FRAMEWORK
# SIRAJONE MASTER HANDBOOK

**Status:** Permanent Reference — Start Here
**Version:** 1.0
**Date Established:** June 2026
**Project:** OUR LEGACY — The Lives That Shaped History

---

## HOW TO USE THIS DOCUMENT

This is the front door to the entire SIRAJONE EDUCATIONAL FRAMEWORK. Read this document first — before opening any other file in the archive. It tells you what exists, where to find it, and in what order to read it.

If you are returning to this project after time away, read this document before doing anything else. It will orient you to the current state in under 20 minutes.

---

## PART 1 — WHAT IS SIRAJONE?

SirajOne is an Islamic educational platform built to make authentic, depth-first Islamic knowledge accessible to Muslim families, classrooms, madrasahs, and individual learners worldwide.

The name comes from Siraj — the Arabic word for lamp. SirajOne is the first lamp in a series: a structured educational journey through the most important lives in Islamic history, built on authenticated classical sources and designed for the realities of contemporary Muslim family life.

SirajOne is not a social media platform, a fatwa service, or a popular summary app. It is a curated educational publisher delivered through a mobile-first progressive web application.

---

## PART 2 — WHAT IS OUR LEGACY?

OUR LEGACY — The Lives That Shaped History is SirajOne's first educational series. It is a multi-volume structured curriculum covering:

**Volume I — The Sīrah of the Prophet ﷺ** (current)
Approximately 30 lessons covering the life of Muḥammad ibn ʿAbdullāh ﷺ from the pre-prophetic period through his death and legacy. Currently 10 lessons complete and deployed.

**Planned Future Volumes:**
- Volume II — The Companions (al-Ṣaḥābah)
- Volume III — The Mothers of the Believers (Ummahāt al-Muʾminīn)
- Volume IV — The Scholars and Transmitters

Each volume will use the same educational framework, writing standards, source hierarchy, and deployment system established in this archive.

The app is live at: **https://sirajone-786.web.app**

---

## PART 3 — WHAT IS THIS FRAMEWORK?

The SIRAJONE EDUCATIONAL FRAMEWORK is the permanent operating manual for the OUR LEGACY project. It is the document archive that allows the project to:

1. Be continued after a period away — without relying on memory or chat history.
2. Be handed to a new contributor — who can understand the full project without prior involvement.
3. Be audited — against consistent, documented standards.
4. Be replicated — for future volumes or other educational projects using the same system.

The framework does NOT write lessons. It does NOT modify the app. It is documentation only. Everything you need to understand, maintain, restore, and continue the project is inside this archive.

---

## PART 4 — FRAMEWORK FOLDER OVERVIEW

The framework is organized into 22 numbered folders plus this Master Handbook at the root. Each folder contains one or more permanent reference documents.

**Framework Version:** 1.0 — Frozen 29 June 2026

| Folder | Name | What It Contains |
|--------|------|-----------------|
| ROOT | — | This Master Handbook (entry point) |
| 00 | Master Principles | 10 non-negotiable operating principles. Start here after this handbook. |
| 01 | Educational Philosophy | Why the series exists, who it is for, the virtue framework, session format, audience model, and Educational Decision Register (14 structural decisions with rationale). |
| 02 | Writing Standards | Every rule governing what is written and how — tone, tense, honorifics, hedging, transliteration, editorial review. |
| 03 | Lesson Architecture | Page types, TypeScript data model, page index system, chapter unlocking, Companion lookup, adding a new lesson, discovery notes. Also contains the guide for adding Profiles, Maps, and References. |
| 04 | Companion Framework | The 9-section Companion structure, writing rules, TypeScript interface, export map, CTA placement, quality standards. |
| 05 | Source Hierarchy | Tier 1/2/3 classification of all sources, citation formats, practical rules for using the tier system. |
| 06 | Authentication Standards | The three-question test, worked examples, the "said" standard, scholarly disagreement protocol, ḥadīth number verification. |
| 07 | Research Archive | Per-lesson research records — questions raised, sources consulted, narrations accepted/rejected, editorial decisions made. One file per lesson (L1–L10 complete). |
| 08 | References Library | Two documents: (1) REFERENCES LIBRARY — all sources cited by lesson; (2) SOURCE LIBRARY — permanent research catalogue with full bibliographic data, access instructions, reliability, usage rules, and future research notes for every source. |
| 09 | Editorial Decisions | The Editorial Decisions Log — every significant editorial decision made, with rationale and consequences. |
| 10 | Prompt Library | Reusable AI prompts for lesson writing, Companion writing, verification, and session context. |
| 11 | Deployment and Technical Workflow | Two documents: (1) DEPLOYMENT WORKFLOW — the full build/deploy pipeline, script template, service worker system; (2) APPLICATION ARCHITECTURE — React component hierarchy, routing, data flow, localStorage, progress tracking, all app screens. |
| 12 | Verification and QA | Pre-deploy and post-deploy verification checklists, editorial review checklist, pass/fail reporting format. |
| 13 | Release History | Every app release, bundle details, issues encountered, verification results, content summary. |
| 14 | Future Improvements | Logged improvement items (content, feature, technical, documentation) for future consideration. |
| 15 | Templates | New Lesson Template (5 TypeScript templates for all 5 files that change per lesson). |
| 16 | Checklists | Lesson Completion Checklist — the 6-layer standard, per-layer checklists, deployment status tracker. |
| 17 | Examples | Companion Example L10 — a complete worked example of all 9 Companion sections at production quality. |
| 18 | Backup and Recovery | All 4 archive locations, Permanent Archive Protocol, recovery scenarios, disaster recovery workflow, machine migration procedures, Disaster Recovery Register. |
| 19 | Version History | Full project phase history, document manifest, framework version numbering, and the FRAMEWORK RELEASE v1.0 official release document. |
| 20 | Naming Conventions | All naming rules for the project — folders, files, lesson keys, Companion keys, IDs, components, CSS, deploy scripts, commit messages, version numbers, Google Drive, archive files. |
| 21 | Changelog Rules | How every future change must be documented — required fields, templates for lesson deploys, bug fixes, framework changes, and archive syncs. |

---

## PART 5 — RECOMMENDED READING ORDER

### For a New Contributor (First Time)

Read in this order. Each document is self-contained; you do not need to finish one before starting the next.

1. **This document** (SIRAJONE MASTER HANDBOOK) — complete orientation.
2. **00 — MASTER PRINCIPLES** — understand the 10 non-negotiable rules.
3. **01 — EDUCATIONAL PHILOSOPHY** — understand why the series exists and who it is for.
4. **05 — SOURCE HIERARCHY** — understand the three-tier source system.
5. **03 — LESSON ARCHITECTURE** — understand the page model and data structure.
6. **04 — COMPANION FRAMEWORK** — understand the 9-section Companion.
7. **02 — WRITING STANDARDS** — understand how content is written.
8. **11 — APPLICATION ARCHITECTURE** — understand the app's component structure.
9. **11 — DEPLOYMENT WORKFLOW** — understand how lessons are deployed.
10. **12 — VERIFICATION CHECKLIST** — understand how deployments are verified.
11. **15 — LESSON TEMPLATE** — use this when writing a new lesson.
12. **16 — LESSON COMPLETION CHECKLIST** — use this to declare a lesson complete.

After this reading sequence, you are equipped to write, deploy, and verify a new lesson.

### For Returning After Time Away (Resume)

1. This document (orient yourself to current state).
2. **19 — VERSION HISTORY** (what phase are we in, what was last completed?).
3. **13 — RELEASE HISTORY** (what was last deployed?).
4. **16 — LESSON COMPLETION CHECKLIST** (what is the current completion status?).
5. **14 — FUTURE IMPROVEMENTS** (what is next?).
6. Then proceed with the relevant task documents.

### For Auditing the Framework

1. This document.
2. **00 — MASTER PRINCIPLES** (principles to audit against).
3. **12 — VERIFICATION CHECKLIST** (check process).
4. **16 — LESSON COMPLETION CHECKLIST** (check completion status per lesson).
5. **09 — EDITORIAL DECISIONS LOG** (check that decisions are recorded).

---

## PART 6 — QUICK START GUIDE

### "I want to write Lesson 11 (First Revelation)"

1. Read **07 — LESSON 10 RESEARCH ARCHIVE** as your format reference.
2. Read **05 — SOURCE HIERARCHY** to understand Bukhārī 3 (the primary source for L11).
3. Read **02 — WRITING STANDARDS** (Section C on hedging, Section E on what is never written).
4. Read **15 — LESSON TEMPLATE** and copy the 5 TypeScript templates.
5. Write the lesson content (readerContent.ts pages + Companion).
6. Run the pre-deploy checklist (**12 — VERIFICATION CHECKLIST, Part 1**).
7. Create a deploy script following **11 — DEPLOYMENT WORKFLOW**.
8. Deploy and verify (**12 — VERIFICATION CHECKLIST, Part 2**).
9. Update **07 — L11 RESEARCH ARCHIVE**, **09 — EDITORIAL DECISIONS**, **13 — RELEASE HISTORY**.
10. Mark L11 complete in **16 — LESSON COMPLETION CHECKLIST**.

### "I want to add a new profile/map/reference"

See **03 — PROFILES MAPS REFERENCES GUIDE**.

### "The app is broken. I need to restore it."

See **18 — BACKUP AND RECOVERY**.

### "I need to understand the code before changing anything."

See **11 — APPLICATION ARCHITECTURE**.

### "I want to understand why a decision was made."

See **09 — EDITORIAL DECISIONS LOG** (for content decisions) or **01 — EDUCATIONAL DECISION REGISTER** (for educational structure decisions).

### "I need to name something — a file, a key, a script, a commit."

See **20 — NAMING CONVENTIONS**. Check there before naming anything.

### "I want to make a change to an existing document or lesson."

Read **21 — CHANGELOG RULES** first. Every change requires a documented changelog entry with all required fields. No change is complete until it is documented.

---

## PART 7 — EDUCATIONAL PHILOSOPHY SUMMARY

The OUR LEGACY series is built on four pillars:

**1. Authenticity.** Every factual claim traces to a named source of known scholarly standing. The tier of that source determines the confidence level at which the claim is stated. No claim is presented with more certainty than its source warrants.

**2. Depth made accessible.** The series does not simplify Islam — it makes complexity clear. Scholarly disagreements are acknowledged, not hidden. The reader is trusted with the full truth.

**3. Educational structure.** Every lesson is designed not just to transmit information but to produce reflection, discussion, and character development. The virtue framework ensures that knowledge connects to life.

**4. Family-first design.** The primary audience is the Muslim family in its weekly Ta'lim circle. Every lesson is calibrated for 10–12 minutes of reading per segment, with a structured Companion for the discussion that follows.

The full philosophy is documented in **01 — EDUCATIONAL PHILOSOPHY** and **01 — EDUCATIONAL DECISION REGISTER**.

---

## PART 8 — ARCHITECTURE SUMMARY

The OUR LEGACY app is a **React 19 + Vite + TypeScript** progressive web application deployed on **Firebase Hosting**.

**Four core screens:**
- **LibraryHome** — landing page, book selection, Continue Reading card.
- **BookDetail** — 5-tab reference view (Chapters, Timeline, Maps, Profiles, References).
- **EbookReader** — page-by-page lesson reading with progress tracking.
- **LessonGuide** — the 9-section Lesson Companion.

**Data is held in four TypeScript files:**
- `readerContent.ts` — all lesson pages (the Reader content).
- `lessonEnrichmentData.ts` — all Companion data (the 10 LessonEnrichment objects).
- `libraryData.ts` — book metadata, progress formula.
- `BookDetail.tsx` — chapter list, profiles, maps, references, timeline data.

**Reading progress** is stored in `localStorage` as the highest page index (`saved`) the reader has reached.

The full architecture is documented in **11 — APPLICATION ARCHITECTURE**.

---

## PART 9 — RESEARCH STANDARDS SUMMARY

All content in OUR LEGACY must meet the following standards before inclusion:

**Tier 1 sources** (Qur'ān, Ṣaḥīḥ al-Bukhārī, Ṣaḥīḥ Muslim): stated as established fact, no hedging required.

**Tier 2 sources** (Sīrat Ibn Hishām, al-Ṭabarī, Ibn Saʿd, al-Bayhaqī): stated with attribution ("Ibn Hishām narrates..."), hedging language applied.

**Tier 3 sources** (Al-Raḥīq al-Makhtūm, Ibn Kathīr, Sunan Abū Dāwūd): used for context and cross-reference only. Never cited as a primary source.

No fabricated dialogue. No speculation about internal states. No ḍaʿīf narrations presented as historical fact. No mawḍūʿ narrations under any circumstances.

The full research standard is in **05 — SOURCE HIERARCHY** and **06 — AUTHENTICATION STANDARDS**. The source catalogue is in **08 — SOURCE LIBRARY**.

---

## PART 10 — DEPLOYMENT SUMMARY

**Every lesson deploy follows this sequence:**

1. Write content in OneDrive (content source of truth).
2. Create deploy script at `C:\Dev\SirajOne\OUR_LEGACY_APP\deploy-lessonN.ps1`.
3. Run the script: it copies files, bumps SW cache version, verifies critical strings, builds, deploys.
4. Wait 2–3 minutes.
5. Run live verification checklist (12 — VERIFICATION CHECKLIST, Part 2).
6. Git commit is included in the deploy script.

**Deploy scripts live in `C:\Dev\SirajOne\OUR_LEGACY_APP` — never in OneDrive.** This is a permanent rule (see 00 — MASTER PRINCIPLES, Principle 8).

The current live SW version: `our-legacy-v12-lesson10`.
The next SW version (for L11): `our-legacy-v13-lesson11`.

The full deployment process is in **11 — DEPLOYMENT WORKFLOW**.

---

## PART 11 — VERIFICATION SUMMARY

**Pre-deploy checks (Part 1 of Verification Checklist):**
Content, chapter unlock, Companion, progress denominator, TypeScript compilation.

**Post-deploy checks (Part 2 of Verification Checklist):**
App loads, SW version correct, all lesson pages render, progress formula correct, chapter unlocked, Companion works, spot-check 3 unique phrases.

**A lesson is declared complete only when all 6 layers pass:**
Reader pages, Companion, Profiles, Maps, References, Discovery links.

The full checklist is in **12 — VERIFICATION CHECKLIST**.

---

## PART 12 — BACKUP STRATEGY SUMMARY

The project is maintained across four independent archive locations:

| Location | Purpose | Status |
|----------|---------|--------|
| C:\Dev\SirajOne\OUR_LEGACY_APP | Build and deploy machine; git repository | Primary technical source |
| OneDrive (C:\Users\User\OneDrive\Documents\New project\OUR_LEGACY_APP) | Content source of truth | Always current |
| Google Drive (SirajOne folder) | Independent cloud archive | Manual sync at milestones |
| GitHub | Source-controlled archive with full history | Synced via git push |

**Before starting any new lesson, verify all four locations are current.** This is the Permanent Archive Protocol (see 18 — BACKUP AND RECOVERY).

The `archive-sync.ps1` script at the root of OneDrive handles the OneDrive-to-Dev copy and GitHub push.

---

## PART 13 — CURRENT PROJECT STATE

### Lessons Complete (as of June 2026)

| Lesson | Title | Status |
|--------|-------|--------|
| L1 | Introduction to the Sīrah | Written / Built / Deployed / Verified / Complete |
| L2 | The Meccan Period | Written / Built / Deployed / Verified / Complete |
| L3 | The Year of the Elephant and the Birth of Rasūlullāh ﷺ | Written / Built / Deployed / Verified / Complete |
| L4 | Ḥalīmah al-Saʿdiyyah and the Desert Years | Written / Built / Deployed / Verified / Complete |
| L5 | The Opening of the Chest | Written / Built / Deployed / Verified / Complete |
| L6 | The Death of Āminah | Written / Built / Deployed / Verified / Complete |
| L7 | ʿAbd al-Muṭṭalib and the Years of Guardianship | Written / Built / Deployed / Verified / Complete |
| L8 | The Journey to Shām | Written / Built / Deployed / Verified / Complete |
| L9 | Ḥilf al-Fuḍūl — The Pact of the Virtuous | Written / Built / Deployed / Verified / Complete |
| L10 | Khadījah — A Home Prepared by Allah | Written / Built / Deployed / Verified / Complete |
| L11 | The First Revelation | NOT STARTED |

### Technical State
- Live URL: https://sirajone-786.web.app
- SW Version: our-legacy-v12-lesson10
- Total pages: 72 (indices 0–71)
- Progress denominator: 71
- All 10 Companions live and verified

---

## PART 14 — FUTURE ROADMAP

### Immediate Next Step
Write Lesson 11 — The First Revelation.
Primary source: Ṣaḥīḥ al-Bukhārī, Ḥadīth 3 (ʿĀʾishah's narration).
Key content: Cave Ḥirāʾ, the embrace, the first five verses, Khadījah's response, Waraqah ibn Nawfal, the fatrah.

### Near-Term (L11–L15)
- Continue the Meccan period through the Hijrah.
- Write Research Archives for L2–L9 (documentation gap, not blocking).
- Expand the Profiles and Maps tabs as more lesson content is added.

### Medium-Term
- Complete Volume I (approximately 30 lessons, through the Prophet's ﷺ passing and legacy).
- Begin planning Volume II.
- Consider audio narration feature (see 14 — FUTURE IMPROVEMENTS, B2).

### Long-Term
- Volume II: The Companions.
- Volume III: The Mothers of the Believers.
- Cross-device progress sync (requires user authentication).

---

## PART 15 — FRAMEWORK VERSION INFORMATION

**SIRAJONE EDUCATIONAL FRAMEWORK**
Version: 1.0 — FROZEN
Release Date: 29 June 2026

**What Version 1.0 Contains:**
- 22 numbered folders (00–21)
- 37 documents (including this Master Handbook)
- Covering: educational philosophy, writing standards, lesson architecture, Companion framework, source hierarchy, authentication standards, research archives (L1–L10), references library, source library, editorial decisions, prompt library, deployment workflow, application architecture, verification, release history, future improvements, templates, checklists, examples, backup/recovery, version history, naming conventions, and changelog rules

**Official Release Document:** See **19 — FRAMEWORK RELEASE v1.0.md**
**Version History:** See **19 — VERSION HISTORY.md** for full project phase history and document manifest.
**How to make changes:** See **21 — CHANGELOG RULES** before modifying any document in this framework.

---

## PART 16 — CONTACTS AND IDENTIFIERS

**Project founder:** ustaath
**Contact:** madrassatahseenulquraan@gmail.com
**Firebase project:** sirajone-786
**Live URL:** https://sirajone-786.web.app
**Repository:** C:\Dev\SirajOne\OUR_LEGACY_APP (git)
**OneDrive source:** C:\Users\User\OneDrive\Documents\New project\OUR_LEGACY_APP
**Google Drive:** SirajOne folder (accessible via madrassatahseenulquraan@gmail.com)

---

*This document is the entry point to the SIRAJONE EDUCATIONAL FRAMEWORK. Everything else builds from here.*
