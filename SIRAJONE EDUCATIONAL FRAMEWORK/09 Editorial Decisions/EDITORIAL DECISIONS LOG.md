# SIRAJONE EDUCATIONAL FRAMEWORK
## 09 Editorial Decisions Log

**Status:** Living Document — Update with each major decision  
**Version:** 1.0  
**Date Established:** June 2026

---

## PURPOSE

This log records every significant editorial decision made during the development of OUR LEGACY. It documents what was decided, why it was decided, what alternatives were considered, and what the consequences of the decision are.

This log exists because editorial decisions often do not appear in the code or the content — they are the "why behind the what." Without this log, a new contributor (or future version of this project) might reverse a carefully considered decision without knowing why it was made.

---

## FORMAT

Each entry follows this structure:
- **Decision ID** — sequential reference number
- **Date** — when the decision was made
- **Lesson(s) Affected** — which lesson(s) does this apply to
- **The Decision** — what was decided
- **Alternatives Considered** — what was rejected and why
- **Authority** — who made the decision
- **Consequences** — what this decision means for future work

---

## DECISIONS LOG

---

### ED-001 — The Series Begins with the Sīrah
**Date:** Project inception  
**Lesson(s) Affected:** All  
**The Decision:** OUR LEGACY begins with the Sīrah of the Prophet ﷺ (Volume I) and not with the Companions, Mothers of the Believers, or any other topic.  
**Alternatives Considered:** Begin with the Mothers of the Believers (Ummahāt al-Muʾminīn). Begin with a specific Companion (e.g., Abū Bakr). Begin with general Islamic history.  
**Authority:** Project founder  
**Consequences:** All systems — Companion framework, source hierarchy, writing standards — are calibrated for Sīrah content first. Future volumes will adapt these systems for other content types.

---

### ED-002 — The First Revelation Rule
**Date:** Early project development  
**Lesson(s) Affected:** All lessons preceding the First Revelation lesson (currently L1–L10)  
**The Decision:** The First Revelation (the encounter in Cave Ḥirāʾ, the descent of Jibrīl, the first five verses of Surah al-ʿAlaq) is never narrated in any lesson prior to the lesson specifically dedicated to that event.  
**Alternatives Considered:** Reference the First Revelation as a "flash-forward" to create context in earlier lessons. Include the revelation scene as the climax of the Khadījah lesson (L10).  
**Why Rejected:** The First Revelation is the most sacred and significant event in the Prophet's life after his birth. Narrating it as a supporting detail in another lesson diminishes its weight. It deserves its own dedicated lesson. Flash-forwards also create structural confusion.  
**Authority:** Project founder  
**Consequences:** Every lesson that approaches this event must end with anticipation. The `nextLessonPreview` of L10 points toward the Revelation without narrating it.

---

### ED-003 — Khadījah's Age: 40 Is the Primary Position
**Date:** L10 writing phase  
**Lesson(s) Affected:** L10  
**The Decision:** The lesson follows the dominant classical position that Khadījah was forty years old at the time of her marriage to the Prophet ﷺ. Alternative traditions (28, 25) are acknowledged but not adopted as the primary position.  
**Alternatives Considered:**
1. Present both positions equally (without preference).
2. Follow the alternative tradition of 25 or 28.
3. Avoid stating any age at all.  
**Why Rejected:** Option 1 creates false equivalence when one position is clearly dominant in classical scholarship. Option 2 contradicts the majority of scholars without a compelling reason. Option 3 is evasive and unsatisfying.  
**Why 40 was chosen:** Ibn Hishām's Sīrah — the earliest and most authoritative biographical source — gives the age as forty. The majority of classical scholars follow this. The alternative traditions are minority opinions without stronger evidence.  
**Authority:** Project founder, following classical scholarly consensus  
**Consequences:** Future updates to L10 must preserve this decision. If a new compelling scholarly case for a different age emerges, the decision log must be updated with that evidence.

---

### ED-004 — Companion CTA Placed on Reflection Page, Not Closing Page
**Date:** Phase 4 Companion fixes (estimated Task #146)  
**Lesson(s) Affected:** All lessons  
**The Decision:** The Lesson Companion CTA appears on the ReflectionPage — the penultimate page of each lesson — rather than on the ClosingPage.  
**Alternatives Considered:** Place the CTA on the ClosingPage (after the narrative conclusion and Duʿāʾ).  
**Why Rejected:** Testing revealed that placing the CTA at the Closing disrupted the emotional flow. The Closing page is meant to bring the lesson to a quiet, reflective end. Introducing an interactive CTA after the Duʿāʾ felt abrupt. The Reflection page is the natural moment to deepen engagement — it is where the discussion questions are, and the Companion extends that discussion.  
**Authority:** Project founder  
**Consequences:** EbookReader renders the Companion CTA on every ReflectionPage. The ClosingPage renders the Duʿāʾ and nextLessonPreview without any CTA. This must be preserved in future EbookReader updates.

---

### ED-005 — Progress Denominator Tracks Index of Last Page (Not Total Pages)
**Date:** L10 integration  
**Lesson(s) Affected:** All  
**The Decision:** The progress bar denominator is the index of the last page, not the total number of pages.  
**Current value:** `saved / 71` (not `saved / 72`) — because the last page is index 71.  
**Alternatives Considered:** Use total page count (72).  
**Why Rejected:** Using total count (72) would make 100% progress require reading a page with index 72 — which does not exist. Using the last index (71) makes 100% reachable at the last real page.  
**Authority:** Technical decision — project founder  
**Consequences:** Every time a new lesson is added, the denominator must be updated to match the new last page index (old denominator + 7 for a 4-segment lesson, + 6 for a 3-segment lesson).

---

### ED-006 — SW Cache Version Naming Convention
**Date:** Early deployment phase  
**Lesson(s) Affected:** All  
**The Decision:** The Service Worker CACHE_NAME follows the pattern `our-legacy-v{N}-lesson{M}` where N is the sequential version number and M is the lesson number.  
**Current:** `our-legacy-v12-lesson10`  
**History:**
- v1 through v11: Earlier versions through Lesson 9
- v12: Lesson 10  
**Alternatives Considered:** Date-based naming (e.g., `our-legacy-2026-06`). Content-hash-based naming.  
**Why Rejected:** Date-based naming is not meaningful after the fact. Content-hash naming would require computing the hash programmatically. Sequential + lesson naming makes it immediately clear what version is live without reading the content.  
**Authority:** Technical decision — project founder  
**Consequences:** Every deploy must increment N by 1. The deploy script automates this with a find-replace on the SW file before build.

---

### ED-007 — The Virtue Framework Is Non-Negotiable
**Date:** Project inception  
**Lesson(s) Affected:** All  
**The Decision:** Every segment of every lesson must be anchored to a specific, named Islamic virtue illustrated by the events of that segment. A segment without a clear virtue connection is not complete.  
**Alternatives Considered:** Virtue framework is recommended but optional (writers can omit it for segments where a virtue is hard to find).  
**Why Rejected:** The virtue framework is what makes OUR LEGACY educational rather than merely biographical. Without it, the series becomes a more elaborate way to learn the same facts already available in any Sīrah book. The virtue is what creates the bridge between history and the reader's life.  
**Authority:** Project founder  
**Consequences:** Every segment heading must include "Virtue: [Arabic name] — [English description]." The virtue selection is a deliberate editorial choice, not an afterthought. If a writer cannot identify a genuine virtue for a segment, the segment's scope and content must be revisited.

---

### ED-008 — Ḥadīth Number Verification Protocol (Bukhārī 3 vs. 3816 Error)
**Date:** L10 Companion drafting  
**Lesson(s) Affected:** All  
**The Decision:** After an error in which Bukhārī 3816 was initially cited as Bukhārī 3 in the L10 Memory Gem, a new verification protocol was established: every ḥadīth citation must be verified by reading back the full ḥadīth text and confirming it matches the cited number.  
**The Error:** The L10 Memory Gem — "She believed in me when people disbelieved me..." — is Bukhārī 3816. It was incorrectly cited as Bukhārī 3 in an early draft. Bukhārī 3 is the completely different narration of the First Revelation by ʿĀʾishah.  
**Correction:** The correct ḥadīth number (3816) was confirmed and the Companion was updated before deployment.  
**Consequences:** All future Companion drafts require explicit ḥadīth verification before finalisation. See Authentication Standards for the full protocol.

---

### ED-009 — Part 0 Divider Added Retroactively for L1 Companion Compatibility
**Date:** Companion backfill phase  
**Lesson(s) Affected:** L1  
**The Decision:** When the L1 Companion was created (the last of the backfill Companions), it required a PartDividerPage at the beginning of the lesson with `subtitle: "Part 0"` to allow the Companion lookup system to identify the lesson. This page was added retroactively.  
**Why Needed:** The Companion lookup system derives the lesson key from the subtitle of the most recently seen PartDividerPage. Without a PartDividerPage for L1, the system had no way to identify which Companion to display.  
**Impact:** Adding the Part 0 divider shifted all subsequent page indices by 1. The progress denominator was updated accordingly.  
**Consequences:** Every lesson must begin with a PartDividerPage with the correct subtitle. This is now structural — not optional.

---

### ED-010 — No Dialogue Fabrication Policy
**Date:** Writing Standards established  
**Lesson(s) Affected:** All  
**The Decision:** No lesson fabricates dialogue for any historical figure. Words attributed to any person must come from an authenticated source. Events can be narrated; conversations cannot be invented.  
**Alternatives Considered:** Allow "illustrative dialogue" in clearly fictional contexts (e.g., "he might have said..." or "imagine him saying...").  
**Why Rejected:** The series positions itself as grounded in authentic sources. Introducing invented dialogue — even flagged as illustrative — blurs the line between history and fiction. Families teaching children cannot easily distinguish "what he said" from "what he might have said." The risk of the invented dialogue being passed on as historical fact is too high.  
**Authority:** Project founder  
**Consequences:** Writers who are tempted to add dialogue to make a scene more vivid must instead find narration-based ways to convey the same information.

---

### ED-011 — Lesson 10 Title Changed (Cosmetic — Commit Message vs. App)
**Date:** L10 deployment  
**The Decision:** The deploy script commit message used an earlier working title: "Khadijah: The First Believer." The actual lesson title deployed and live on the app is "Khadijah — A Home Prepared by Allah."  
**Status:** Cosmetic only. The commit message is a git artifact and does not affect any code, content, or live experience.  
**Consequences:** When reading the git log for L10, the commit message title will not match the live title. This is known and documented here. No correction needed.
