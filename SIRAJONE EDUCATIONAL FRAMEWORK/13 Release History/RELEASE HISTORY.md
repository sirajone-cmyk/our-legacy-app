# SIRAJONE EDUCATIONAL FRAMEWORK
## 13 Release History

**Status:** Living Document — Update with each deploy  
**Version:** 1.0  
**Date Established:** June 2026

---

## FORMAT

Each release entry records:
- Release date
- SW version
- Bundle hash
- What was added
- Lessons now live
- Total pages after release
- Any notable issues or fixes

---

## RELEASE LOG

---

### Release v1 through v10 — Early Lessons
**Status:** Historical — detailed records not fully preserved  
**Lessons added:** L1 through L8  
**Notes:** These releases established the core app architecture. Detailed deploy records for these releases were not formally logged. The codebase at C:\Dev\SirajOne\OUR_LEGACY_APP contains the git history.

---

### Release v11-lesson9 — Lesson 9 (Ḥilf al-Fuḍūl)
**SW Cache Name:** `our-legacy-v11-lesson9`  
**Lesson Added:** Lesson 9 — Ḥilf al-Fuḍūl: The Pact of the Virtuous  
**Companion Added:** `sirah_journey:8` — L9 Companion  
**Chapter Unlocked:** Chapter 10 (Ḥilf al-Fuḍūl)  
**Pages After Release:** 65 (indices 0–64, including CompletionPage at index 64)  
**Progress Denominator:** 63 (last page before CompletionPage)  
**Bundle (superseded):** `index-BjO4qZjI.js` (737KB)  
**Notes:** Lesson 9 was the last lesson before the Volume I CompletionPage and Lesson 10.

---

### Release v12-lesson10 — Lesson 10 (Khadījah)
**Date:** June 2026  
**SW Cache Name:** `our-legacy-v12-lesson10`  
**Bundle:** `index-Ba11uaJw.js` (777,812 bytes)  
**Lesson Added:** Lesson 10 — Khadījah: A Home Prepared by Allah  
**Companion Added:** `sirah_journey:10` — L10 Companion  
**Chapter Unlocked:** Chapter 11 (Marriage to Khadījah ؓ) — `pageIndex: 65`  
**Pages After Release:** 72 (indices 0–71)  
**Progress Denominator:** 71  
**Deploy Script:** `deploy-lesson10.ps1` at C:\Dev\SirajOne\OUR_LEGACY_APP  
**Git Commit:** `feat: Lesson 10 - Khadijah: The First Believer + L10 Companion + Chapter 11 unlock + SW v12`  
*(Note: commit message uses old working title "The First Believer" — cosmetic only)*

**Issues Encountered:**
1. First deploy attempt produced stale bundle (index-BjO4qZjI.js, old L9 content). Root cause: OneDrive sync timing or cached build. Fixed by running deploy script a second time.
2. SW cache split: browser tab active during deploy resulted in stale `/` entry in v12 SW cache. Fixed via manual JS cache correction (not a code change).

**Verification Result:** All 12 live verification items PASSED. L10 declared editorially complete.

**Content Summary:**
- Segment 1: The Trade Journey — Virtue: Ṣidq (Truthfulness) — Surah al-Tawbah 9:119
- Segment 2: She Chose Him — Virtue: Ḥikmah (Wisdom) — Surah al-Rūm 30:21
- Segment 3: The Marriage — Virtue: Wafāʾ (Faithfulness) — Surah al-Baqarah 2:187
- Segment 4: The Years Before the Dawn — Virtue: Thabāt (Steadfastness) — Surah al-Ḍuḥā 93:6–8
- Memory Gem: Ṣaḥīḥ al-Bukhārī Ḥadīth 3816 (the Prophet's statement about Khadījah)
- nextLessonPreview: "One night in the year 610 CE, in that same cave, he found out..."

---

### Framework Release v1.0 — Official Freeze (Non-App Release)
**Date:** 29 June 2026
**Type:** Framework documentation freeze — no app deploy required
**Framework Version:** v1.0 FROZEN
**Git Commit:** `docs: freeze SirajOne Educational Framework v1.0`

**What was completed to reach v1.0:**
- All 22 folders created (00–21)
- 37 documents written (including Master Handbook, FRAMEWORK RELEASE v1.0, NAMING CONVENTIONS, CHANGELOG RULES)
- SOURCE LIBRARY expanded with full bibliographic catalogue fields for all sources
- MASTER HANDBOOK updated to reference all 22 folders and v1.0 freeze status
- VERSION HISTORY updated with complete phase record
- ZIP snapshot created: `SirajOne_Educational_Framework_v1.0_2026-06-29.zip`
- All 4 archive locations verified: C:\Dev, OneDrive, Google Drive, GitHub

**App state:** Unchanged from v12-lesson10. No new lesson content. No app deploy required.
**Framework completeness:** 100% for Version 1.0 scope

**Official Release Document:** See 19 — FRAMEWORK RELEASE v1.0.md

---

## UPCOMING RELEASES (PLANNED)

### Release v13-lesson11 — Lesson 11 (First Revelation)
**Status:** Not yet written  
**SW Cache Name (planned):** `our-legacy-v13-lesson11`  
**Planned Content:**
- The First Revelation in Cave Ḥirāʾ
- Bukhārī 3 (ʿĀʾishah's narration) as the primary source
- Jibrīl's embrace and the five verses of Surah al-ʿAlaq
- Khadījah's response: "Wallāhi, lā yukhzīka Allāhu abadan"
- Waraqah ibn Nawfal's recognition
- The fatrah (gap before the second Revelation)
**Pages After Release (estimated):** 79 (indices 0–78, if 4-segment lesson)
**Progress Denominator (estimated):** 78
**Chapter to Unlock:** Chapter 12 (pageIndex: 72)
**Companion Key:** `sirah_journey:11`
