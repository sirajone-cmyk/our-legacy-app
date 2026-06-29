# SIRAJONE EDUCATIONAL FRAMEWORK
# OFFICIAL RELEASE DOCUMENT

---

## FRAMEWORK RELEASE: VERSION 1.0

**Release Date:** 29 June 2026
**Released by:** ustaath (madrassatahseenulquraan@gmail.com)
**Status:** FROZEN — Permanent Reference

---

## 1. VERSION NUMBER

**SIRAJONE EDUCATIONAL FRAMEWORK — Version 1.0**

This is the first formal, frozen, and permanently archived release of the SIRAJONE Educational Framework. All documents in this release are considered stable and complete for the scope defined in Section 3.

Future changes must follow the Changelog Rules (see folder 21) and be assigned to Version 1.1 or higher.

---

## 2. PURPOSE

The SIRAJONE Educational Framework v1.0 is the permanent operating manual for the OUR LEGACY educational series. It exists to:

1. Allow the project to be resumed after any period away — without relying on memory or conversation history.
2. Allow a new contributor to understand and continue the project without prior involvement.
3. Provide a permanent, auditable record of every educational, editorial, technical, and administrative decision made.
4. Establish consistent standards that all future content (Lessons 11–30, Volume II, Volume III) will follow.
5. Serve as the reference standard against which all future work is verified.

---

## 3. SCOPE

### What Version 1.0 Covers

Version 1.0 covers the complete framework necessary to produce, deploy, verify, and maintain the OUR LEGACY Sīrah series through the currently deployed state: **10 lessons, 72 pages, 10 Companion guides**.

Specifically, v1.0 covers:

**Educational Framework**
- Master principles (non-negotiable operating rules)
- Educational philosophy (why the series exists and who it is for)
- Educational decision register (14 structural design decisions with rationale)
- Writing standards (every rule governing how content is written)
- Lesson architecture (page types, TypeScript data model, chapter system)
- Companion framework (9-section Companion structure and standards)
- Source hierarchy (3-tier source classification)
- Authentication standards (the 3-question test and scholarly disagreement protocol)

**Research Documentation**
- Research archives for all 10 deployed lessons (L1–L10)
- References library (lesson-by-lesson citation catalogue)
- Source library (master catalogue of all primary and secondary sources)
- Editorial decisions log (all significant content decisions with rationale)

**Technical Documentation**
- Application architecture (React component hierarchy, routing, data flow)
- Deployment workflow (full build and deploy pipeline)
- Verification and QA (pre-deploy and post-deploy checklists)
- Backup and recovery (4-location archive protocol, machine migration, disaster recovery register)

**Project Management**
- Prompt library (reusable AI prompts)
- Templates (5-file lesson template)
- Checklists (6-layer lesson completion standard)
- Examples (complete Companion example, Lesson 10)
- Future improvements (logged items for v1.1 and beyond)
- Release history (all deploys through v12-lesson10)
- Version history (full project phase history)
- Naming conventions (all naming standards for the project)
- Changelog rules (how all future changes must be documented)

**Navigation**
- SIRAJONE Master Handbook (entry point and complete orientation guide)

### What Version 1.0 Intentionally Does NOT Cover

- Lesson 11 or any future educational content. Lesson 11 (The First Revelation) is the first work item for Version 1.1.
- Medīnan-period Sīrah content (belongs to future lessons).
- Volume II (Companions), Volume III (Mothers of the Believers), or Volume IV (Scholars).
- User authentication, cross-device progress sync, or any features listed as "v2" in the Application Architecture document.
- Audio narration, search, or any other future app features.

---

## 4. WHAT'S INCLUDED — COMPLETE DOCUMENT MANIFEST

### Root Level

| File | Purpose |
|------|---------|
| SIRAJONE MASTER HANDBOOK.md | Entry point and complete orientation guide |

### Numbered Folders

| Folder | Name | Documents |
|--------|------|-----------|
| 00 | Master Principles | MASTER PRINCIPLES.md |
| 01 | Educational Philosophy | EDUCATIONAL PHILOSOPHY.md; EDUCATIONAL DECISION REGISTER.md |
| 02 | Writing Standards | WRITING STANDARDS.md |
| 03 | Lesson Architecture | LESSON ARCHITECTURE.md; PROFILES MAPS REFERENCES GUIDE.md |
| 04 | Companion Framework | COMPANION FRAMEWORK.md |
| 05 | Source Hierarchy | SOURCE HIERARCHY.md |
| 06 | Authentication Standards | AUTHENTICATION STANDARDS.md |
| 07 | Research Archive | LESSON 1–10 RESEARCH ARCHIVE.md (10 files) |
| 08 | References Library | REFERENCES LIBRARY.md; SOURCE LIBRARY.md |
| 09 | Editorial Decisions | EDITORIAL DECISIONS LOG.md |
| 10 | Prompt Library | PROMPT LIBRARY.md |
| 11 | Deployment and Technical Workflow | DEPLOYMENT WORKFLOW.md; APPLICATION ARCHITECTURE.md |
| 12 | Verification and QA | VERIFICATION CHECKLIST.md |
| 13 | Release History | RELEASE HISTORY.md |
| 14 | Future Improvements | FUTURE IMPROVEMENTS.md |
| 15 | Templates | LESSON TEMPLATE.md |
| 16 | Checklists | LESSON COMPLETION CHECKLIST.md |
| 17 | Examples | COMPANION EXAMPLE L10.md |
| 18 | Backup and Recovery | BACKUP AND RECOVERY.md |
| 19 | Version History | VERSION HISTORY.md; FRAMEWORK RELEASE v1.0.md (this file) |
| 20 | Naming Conventions | NAMING CONVENTIONS.md |
| 21 | Changelog Rules | CHANGELOG RULES.md |

**Total documents: 37**
**Total folders (numbered): 22 (00–21)**

---

## 5. RELEASE NOTES

### What Was Built

The framework was built progressively alongside the development of 10 deployed lessons. The complete framework (all 22 folders, 37 documents) was formally assembled and completed in June 2026.

### Key Milestones That Led to This Release

1. **App architecture established** — React 19 + Vite + TypeScript + Firebase Hosting, 10 lessons deployed.
2. **Companion system introduced** — 9-section Lesson Companion framework built (Lesson 6 onwards), backfilled to L1.
3. **Framework documentation (Phase 1)** — 20 numbered folders created; 21 core documents written.
4. **Framework documentation (Phase 2)** — 8 gap-fill documents added; BACKUP AND RECOVERY expanded; Master Handbook written.
5. **v1.0 freeze (this release)** — NAMING CONVENTIONS and CHANGELOG RULES added; SOURCE LIBRARY expanded; formal release document written; 4-location backup completed.

### Issues Resolved Before This Release

- archive-sync.ps1 em-dash encoding bug: fixed and documented in Disaster Recovery Register (folder 18).
- archive-sync.ps1 StreamAlreadyRedirected bug: fixed and documented in Disaster Recovery Register (folder 18).
- Bukhārī 3 vs. Bukhārī 3816 citation confusion: resolved and documented in L10 Research Archive (folder 07).
- Progress denominator tracking: documented in Application Architecture (folder 11).
- Companion CTA placement: documented in Editorial Decisions Log entry ED-004 (folder 09).

---

## 6. CHANGELOG (v1.0)

This is the complete changelog from project inception to Version 1.0 freeze.

| Phase | Date | Change | Documents |
|-------|------|--------|-----------|
| App Phase 1 | Pre-June 2026 | App architecture established; L1–L8 written and deployed | readerContent.ts, BookDetail.tsx, App.tsx |
| App Phase 2 | June 2026 | L9, L10 written; Companion system introduced; backfill to L1 | lessonEnrichmentData.ts, LessonGuide.tsx |
| Framework Phase 1 | June 2026 | 20 folders, 21 core documents written | All core documents |
| Framework Phase 2 | June 2026 | 8 gap-fill documents; Master Handbook; expanded Backup & Recovery | See folders 01, 03, 07, 08, 11, 18 |
| v1.0 Freeze | 29 June 2026 | NAMING CONVENTIONS, CHANGELOG RULES, SOURCE LIBRARY expansion, formal release, 4-location backup | Folders 19, 20, 21 |

---

## 7. SUPPORTED PROJECTS

Version 1.0 of this framework supports:

**OUR LEGACY — The Lives That Shaped History**
Volume I: The Sīrah of the Prophet ﷺ
Status: 10 lessons complete and deployed (L1–L10)
App URL: https://sirajone-786.web.app

The framework is designed to support all future volumes of OUR LEGACY and any future SirajOne educational series that adopts the same educational standards.

---

## 8. FUTURE VERSIONS

| Version | Planned Content |
|---------|----------------|
| v1.1 | First update after Lesson 11 deploy; updated Research Archive, References Library, Release History |
| v1.2–v1.9 | Progressive updates as L12–L20 are written; Source Library additions; future profile/map expansions |
| v2.0 | Major update at completion of Volume I (all ~30 lessons); planning documents for Volume II |
| v3.0 | Volume II framework (Companions series) — builds on v2.0 |

**Rule for version increments:**
- Patch update (v1.0 → v1.1): New lesson added, minor document additions.
- Minor update (v1.x → v2.0): Volume I complete; major architectural changes.
- Major update (vN.0 → v(N+1).0): New volume of OUR LEGACY begins.

---

## 9. HOW TO USE THIS RELEASE DOCUMENT

**If you are resuming work after time away:**
This document confirms that all framework documentation is complete and frozen at v1.0. Read the SIRAJONE MASTER HANDBOOK for current project state. Check VERSION HISTORY for what phase comes next. The next task is Lesson 11.

**If you are a new contributor:**
Version 1.0 is your starting point. Read the SIRAJONE MASTER HANDBOOK first, then follow the Recommended Reading Order in Part 5 of that document.

**If you need to make a change to the framework:**
Read CHANGELOG RULES (folder 21) before making any change. All changes to frozen documents must be versioned as v1.1 or later and documented in the Changelog.

---

*This document is the permanent record of the SIRAJONE Educational Framework Version 1.0 release. It may not be modified. Future releases will create new release documents (FRAMEWORK RELEASE v1.1.md, etc.) alongside this one.*

*Frozen: 29 June 2026*
