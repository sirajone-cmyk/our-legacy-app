# SIRAJONE EDUCATIONAL FRAMEWORK
## 21 Changelog Rules

**Status:** Permanent Reference — Part of v1.0 Freeze
**Version:** 1.0
**Date Established:** 29 June 2026
**See also:** 20 — NAMING CONVENTIONS for version number and commit message naming.
**See also:** 18 — BACKUP AND RECOVERY for the 4-location archive protocol.
**See also:** 12 — VERIFICATION CHECKLIST for the verification steps required before a change is finalised.

---

## PURPOSE

This document defines what must be recorded every time a change is made to the OUR LEGACY project — either to the app content, the app code, or the framework documentation. Without a consistent changelog, the project history becomes unreliable. With it, any change can be traced, understood, and reversed if necessary.

The rule is simple: **no change is complete until it is documented.**

---

## PART 1 — SCOPE OF THE CHANGELOG REQUIREMENT

The following types of changes REQUIRE a changelog entry:

| Change Type | Where Logged | Framework Version Bump? | App Deploy Required? |
|-------------|-------------|------------------------|---------------------|
| New lesson added | Release History + Research Archive | Yes (patch) | Yes |
| Companion added or updated | Release History | Yes (patch) | Yes |
| App code changed | Release History | Maybe | Yes |
| Framework document created | VERSION HISTORY | Maybe | No |
| Framework document modified | VERSION HISTORY | Maybe | No |
| New profile/map/reference added | Release History | No | Yes |
| Deploy script updated | Disaster Recovery Register (folder 18) | No | No |
| Bug fix deployed | Release History | No | Yes |
| Google Drive updated | Backup log (folder 18) | No | No |
| GitHub pushed | Release History or version history | No | No |

**Changes that do NOT require a changelog entry:**
- Spelling corrections in framework documents that do not change meaning.
- Internal reformatting with no content change.
- Draft work that is never saved to OneDrive.

---

## PART 2 — REQUIRED FIELDS FOR EVERY CHANGELOG ENTRY

Every changelog entry — whether recorded in Release History, Version History, a Research Archive, or any other document — MUST include all of the following fields:

```
Date:               YYYY-MM-DD
Author:             Name or identifier
Purpose:            Why was this change made? (1-2 sentences)
Files Affected:     List of specific files changed
Lessons Affected:   Which lesson numbers are impacted (or "None")
Breaking Change?:   Yes / No (and explanation if Yes)
Deployment Required?: Yes / No
Verification Required?: Yes / No (and which checklist to run)
Git Commit:         Full commit message (or "N/A — no code change")
Framework Version:  The framework version this change belongs to (e.g., v1.1)
```

---

## PART 3 — WHAT "BREAKING CHANGE" MEANS

A breaking change is any change that:

1. **Breaks the Companion lookup** — e.g., changing a `PartDividerPage` subtitle from `"Part 9"` to anything else.
2. **Breaks the chapter unlock** — e.g., changing a `pageIndex` value to an incorrect page number.
3. **Breaks the progress calculation** — e.g., changing the `libraryData.ts` denominator incorrectly.
4. **Changes the localStorage key** — `"sirah_progress"` is permanently fixed.
5. **Removes or renames a component** that is referenced in another file.
6. **Changes the SW `CACHE_NAME`** without also updating all other deploy script references.
7. **Changes a framework naming convention** in a way that conflicts with existing documents.

If any of the above is true, the changelog entry must say `Breaking Change: Yes` and explain what is breaking and how it is resolved.

---

## PART 4 — WHERE TO LOG CHANGES

Different types of changes go into different documents. Use this table:

| Change | Primary Log Location | Secondary Log Location |
|--------|---------------------|----------------------|
| New lesson | Release History (13) | Research Archive (07) |
| Bug fix | Release History (13) | Disaster Recovery Register (18) if it was a significant incident |
| New framework document | Version History (19) | Master Handbook (ROOT) if the folder count changes |
| Modified framework document | Version History (19) | The document's own version header |
| 4-location backup completed | Backup and Recovery (18) | Version History (19) |
| Framework version freeze | Framework Release document (19) | Version History (19) |

---

## PART 5 — CHANGE ENTRY TEMPLATES

### Template A — Lesson Deploy

Copy and paste this into RELEASE HISTORY.md when deploying a new lesson:

```markdown
### Release v{SW_VERSION}-lesson{N} — Lesson {N} ({Title})
**Date:** {YYYY-MM-DD}
**SW Cache Name:** `our-legacy-v{SW_VERSION}-lesson{N}`
**Bundle:** `index-{HASH}.js` ({SIZE} bytes)
**Lesson Added:** Lesson {N} — {Full Title}
**Companion Added:** `sirah_journey:{PART_NUMBER}` — L{N} Companion
**Chapter Unlocked:** Chapter {CHAPTER_NUMBER} — `pageIndex: {PAGE_INDEX}`
**Pages After Release:** {TOTAL_PAGES} (indices 0–{LAST_INDEX})
**Progress Denominator:** {DENOMINATOR}
**Deploy Script:** `deploy-lesson{N}.ps1` at C:\Dev\SirajOne\OUR_LEGACY_APP
**Git Commit:** `{FULL_COMMIT_MESSAGE}`

**Issues Encountered:** {List any issues, or "None"}

**Verification Result:** {All N items PASSED / FAILED — details}

**Content Summary:**
- Segment 1: {Title} — Virtue: {Virtue (Arabic)} — {Quranic reference}
- Segment 2: {Title} — Virtue: {Virtue (Arabic)} — {Quranic reference}
- Segment 3: {Title} — Virtue: {Virtue (Arabic)} — {Quranic reference}
- Segment 4: {Title} — Virtue: {Virtue (Arabic)} — {Quranic reference}
- Memory Gem: {Source and hadith number}
- nextLessonPreview: "{First line of preview text}"

---
```

### Template B — Framework Document Change

Copy and paste this into VERSION HISTORY.md when adding or modifying a framework document:

```markdown
### Framework Change — {YYYY-MM-DD}
**Framework Version:** v{VERSION}
**Author:** {Name}
**Purpose:** {Why was this change made?}
**Files Affected:**
- {Folder/FILENAME.md} — {what changed}
**Lessons Affected:** {N or "None"}
**Breaking Change:** {Yes/No}
**Deployment Required:** {Yes/No}
**Verification Required:** {Yes/No — if yes, which checklist}
**Git Commit:** `{docs: commit message}`
```

### Template C — Bug Fix

Copy and paste this into RELEASE HISTORY.md and the Disaster Recovery Register:

```markdown
### Bug Fix — {YYYY-MM-DD}
**Date:** {YYYY-MM-DD}
**Author:** {Name}
**Bug Description:** {What was broken?}
**Root Cause:** {Why did it break?}
**Fix Applied:** {What was changed?}
**Files Changed:**
- {Filename} — {description of change}
**Breaking Change:** {Yes/No}
**Deployment Required:** {Yes/No}
**SW Version Bumped:** {Yes/No — if yes, from v{N} to v{N+1}}
**Git Commit:** `fix: {description}`
**Verification:** {How was the fix verified?}
```

### Template D — 4-Location Archive Sync

Copy into BACKUP AND RECOVERY.md when a manual archive sync is completed:

```markdown
### Archive Sync — {YYYY-MM-DD}
**Trigger:** {What prompted this sync? e.g., "v1.0 framework freeze"}
**C:\Dev:** {Verified / Updated — details}
**OneDrive:** {Already current / Synced}
**Google Drive:** {Documents uploaded / Updated — list any new uploads}
**GitHub:** {Commit hash — `{HASH}`}
**ZIP Archive:** {Created / Not required — filename if created}
**Result:** {All 4 locations confirmed current / Issues — details}
```

---

## PART 6 — THE GOLDEN RULE

> **A change that is not documented did not happen.**

If you make a change to the app, fix a bug, update a framework document, or complete an archive sync — and you do not record it in the appropriate changelog location — then for any future contributor (or for yourself after time away), it will appear as though the change never occurred. They will repeat the work, make the same mistakes, or overwrite the fix.

Documentation is not overhead. Documentation IS the project's memory.

---

## PART 7 — VERSION NUMBERS AND WHEN TO BUMP THEM

### Framework Version

| Trigger | Bump Type | Example |
|---------|-----------|---------|
| New lesson deployed | Minor (x.Y) | v1.0 → v1.1 |
| New framework document added | Minor if adds folder; none if adds to existing | v1.1 → v1.2 |
| Volume I complete | Major (X.0) | v1.9 → v2.0 |
| New volume begins | Major | v2.x → v3.0 |

**The framework version is bumped by creating a new FRAMEWORK RELEASE document** (e.g., `FRAMEWORK RELEASE v1.1.md`) in folder 19. Do NOT overwrite the previous release document.

### App SW Version

Bumped with every deploy. Simple integer. No semantic versioning.

**Rule:** If you are not 100% certain whether to bump the SW version, always bump it. A redundant bump is harmless. A missing bump delivers stale content to returning users. This is the most important deploy rule.

---

## PART 8 — WHAT NEVER CHANGES

The following are fixed permanently and must NEVER be changed, regardless of version:

| Item | Fixed Value | Why |
|------|------------|-----|
| localStorage key | `"sirah_progress"` | Changing it silently discards all user progress |
| Part 0 divider key | `sirah_journey:0` | Lesson 1 Companion is already live |
| Folder number assignments | 00–21 (fixed forever) | Renumbering would break all cross-references |
| Tier definitions | T1/T2/T3 (as documented in folder 05) | Changing tiers retroactively misrepresents past editorial decisions |
