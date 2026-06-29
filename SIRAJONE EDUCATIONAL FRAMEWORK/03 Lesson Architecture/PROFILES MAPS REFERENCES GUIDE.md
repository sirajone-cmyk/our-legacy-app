# SIRAJONE EDUCATIONAL FRAMEWORK
## 03 Profiles, Maps, and References Guide

**Status:** Permanent Reference
**Version:** 1.0
**Date Established:** June 2026
**See also:** LESSON ARCHITECTURE.md (same folder) for the Reader page model.
**See also:** 11 — APPLICATION ARCHITECTURE for how BookDetail.tsx is structured.

---

## PURPOSE

This document explains how to add new Profiles, Maps, and References to the OUR LEGACY app. These three features live in the BookDetail screen's Chapters tab system. They are reference content — supplementary to the Reader but independently accessible.

A developer who has never worked on the project should be able to add a new profile, map, or reference entry after reading this document.

---

## WHERE THE DATA LIVES

All three data sets are defined as TypeScript arrays inside `BookDetail.tsx`:

```
apps/web/src/components/library/BookDetail.tsx
```

This file is the source of truth for:
- `SIRAH_CHAPTERS` — chapter list with lock states
- `TIMELINE_MILESTONES` — historical timeline
- `SIRAH_PROFILES` — character profiles
- `MAP_VISUALS` — geographical map cards
- `SIRAH_REFERENCES` — source reference cards

When adding new entries to any of these arrays, edit the OneDrive copy of `BookDetail.tsx` and include the update in the next lesson deploy (or a standalone deploy if urgent).

**File path (OneDrive):**
`C:\Users\User\OneDrive\Documents\New project\OUR_LEGACY_APP\apps\web\src\components\library\BookDetail.tsx`

---

## PART 1 — ADDING A PROFILE

### What is a Profile?

Profiles appear in the Profiles tab of BookDetail. Each profile card represents a major historical figure who appears in the OUR LEGACY lessons — Companions, Mothers of the Believers, key Meccan personalities, family members of the Prophet ﷺ.

A Profile is not a biography. It is a structured reference card — enough detail to answer the question "Who is this person?" without duplicating the lesson narrative.

### When to Add a Profile

Add a profile when:
- A historical figure appears prominently in a new lesson for the first time.
- The figure is significant enough that a reader might want to reference their details between lessons.
- The figure has a verifiable lineage and documented role.

Do NOT add a profile for minor figures who appear in a single sentence and are not referenced again.

### TypeScript Data Structure

```typescript
{
  id: number,                    // Unique sequential ID (e.g., 1, 2, 3...)
  name: string,                  // English transliterated name
  arabicName: string,            // Arabic name in Arabic script
  title: string,                 // Role or honorific (e.g., "The First Believer")
  lineage: string,               // Father and mother; full nasab if known
  born: string,                  // Year/period of birth (approximate if unknown)
  died: string,                  // Year/period of death (or "—" if still living in narrative)
  role: string,                  // Their primary role in relation to the Prophet ﷺ
  keyFacts: string[],            // Array of 3-6 factual statements
  significance: string,          // 2-3 sentences on their place in Islamic history
  sources: string[],             // Array of source citations (Tier 1 or 2)
  lessons: number[]              // Array of lesson numbers where they appear
}
```

### Required Fields

All fields are required. Use `"—"` for unknown dates. Use `"Unknown"` for genuinely unknown lineage elements.

### Authentication Expectations

Every field must be traceable to a named source:
- `name` and `arabicName` — from Sīrat Ibn Hishām or verified classical sources.
- `lineage` — from Ibn Saʿd's al-Ṭabaqāt al-Kubrā where possible (it is the most detailed biographical dictionary).
- `keyFacts` — each fact must be from a Tier 1 or Tier 2 source.
- `significance` — may draw on Tier 3 synthesis works but must not claim more than the sources support.

**Common mistake:** Writing a profile from memory or from a popular summary and not verifying against classical sources. All "well-known facts" about major figures should be verified in al-Ṭabaqāt or the Sīrat Ibn Hishām before inclusion.

### Discovery Link Integration

If a ClosingPage discoveryNote refers to a specific profile ("Her full profile is in the Profiles tab"), that profile must exist in `SIRAH_PROFILES` before the lesson is deployed. Do not reference content that does not exist.

### Example Entry

```typescript
{
  id: 3,
  name: "Khadijah bint Khuwaylid",
  arabicName: "خديجة بنت خويلد",
  title: "The First Believer — Mother of the Believers",
  lineage: "Daughter of Khuwaylid ibn Asad ibn Abd al-Uzza. Mother: Fatimah bint Zaidah.",
  born: "c. 555 CE (approximately 68 BH)",
  died: "619 CE (10 BH) — the Year of Grief",
  role: "First wife of the Prophet; first Muslim; primary supporter in the early years of prophethood.",
  keyFacts: [
    "She was a successful merchant of Mecca, trading as far as Syria.",
    "She proposed marriage to the Prophet through an intermediary (Nafisah bint Munabbih). He accepted.",
    "Classical sources place her age at marriage as forty years. Some narrations suggest a younger age.",
    "She was the mother of six of the Prophet's children: Qasim, Zaynab, Ruqayyah, Umm Kulthum, Fatimah, and Abd Allah.",
    "She died before the Hijrah, in the year 619 CE.",
    "The Prophet said of her: 'She believed in me when people disbelieved me.' (Bukhari 3816)"
  ],
  significance: "Khadijah bint Khuwaylid occupies a unique place in Islamic history as the first person to accept Islam and the Prophet's most intimate supporter in the early years of prophethood. Her role is documented extensively in Sirat Ibn Hisham and confirmed in Sahih al-Bukhari.",
  sources: ["Sirat Ibn Hisham", "Sahih al-Bukhari (Hadith 3816)", "Ibn Saad — al-Tabaqat al-Kubra"],
  lessons: [10]
}
```

---

## PART 2 — ADDING A MAP

### What is a Map?

Map entries appear in the Maps tab of BookDetail. Each entry is a geographic card with an SVG illustration and educational description for a location relevant to the Sīrah.

Maps are educational illustrations — stylized and historically grounded, not satellite images. They are rendered as inline SVG strings so they work offline without external image hosting.

### When to Add a Map

Add a map entry when:
- A new lesson introduces a significant geographical location for the first time.
- The location is directly relevant to events narrated in the lesson.
- The location has a documented historical identity traceable to classical sources.

Do NOT add map entries for vague references to "the desert" or "a road" without specific historical grounding.

### TypeScript Data Structure

```typescript
{
  id: number,                    // Unique sequential ID
  name: string,                  // English name of the location
  arabicName: string,            // Arabic name in Arabic script
  region: string,                // Broader region (e.g., "Hijaz", "Arabian Peninsula")
  description: string,           // 2-4 sentences describing the location historically
  significance: string,          // Why this location matters to the Sīrah
  svgContent: string,            // Inline SVG string (educational illustration)
  lessons: number[]              // Lesson numbers where this location appears
}
```

### Required Fields

All fields are required. The `svgContent` field is an inline SVG string — it must be a valid SVG element beginning with `<svg>` and ending with `</svg>`.

### Authentication Expectations

- `name` and `arabicName` — from classical sources. Do not invent Arabic names.
- `description` — historical facts about the location from Sīrat Ibn Hishām or al-Ṭabarī.
- `significance` — the connection to specific events in the Sīrah, sourced.

**Common mistake:** Adding a modern description of a location as it exists today (e.g., modern Mecca with the Masjid al-Ḥarām expansion) rather than a historically accurate description of how it appeared in the 7th century CE.

### SVG Content Standards

The SVG illustration should:
- Be educational and stylized, not photorealistic.
- Use a limited color palette (earth tones, muted greens, deep blues — consistent with the app's visual style).
- Show geographic features relevant to the lesson (trade routes, mountain features, distance relationships).
- Include a simple label or title within the SVG.
- Be self-contained (no external image references inside the SVG).

Keep SVG content under 5,000 characters. Complex SVGs slow rendering on mobile devices.

### Discovery Link Integration

If a ClosingPage discoveryNote refers to a specific location ("The trade route to Syria is explored in the Maps tab"), that map entry must exist before the lesson is deployed.

---

## PART 3 — ADDING A REFERENCE

### What is a Reference?

Reference entries appear in the References tab of BookDetail. Each entry is a source card documenting a book, text, or collection cited in the lessons, organized by reliability tier.

References are not duplicated in the References Library (08). The References Library is the framework's internal catalogue. The References tab in the app is the public-facing version for readers.

### When to Add a Reference

Add a reference entry when:
- A new lesson uses a source that is not already in `SIRAH_REFERENCES`.
- The source is significant enough that a curious reader might want to find and read it.
- The source is a real, obtainable work (not a manuscript accessible only to specialists).

Do NOT add entries for sources cited in one footnote that a general reader would never access.

### TypeScript Data Structure

```typescript
{
  id: number,                    // Unique sequential ID
  title: string,                 // English title (or transliterated title)
  arabicTitle: string,           // Arabic title in Arabic script (or "—" if modern English work)
  author: string,                // Author's full name
  type: "quran" | "hadith" | "sirah" | "history" | "modern",  // Source category
  tier: 1 | 2 | 3,              // Source tier (see 05 — SOURCE HIERARCHY)
  description: string,           // 1-2 sentences on what the source contains
  relevance: string,             // How this source is used specifically in OUR LEGACY
  usedIn: number[]               // Lesson numbers where this source is cited
}
```

### Required Fields

All fields are required. `arabicTitle` uses `"—"` for modern English works without an Arabic title.

### Authentication Expectations

- `tier` must match the tier assigned in **05 — SOURCE HIERARCHY**. Do not assign a different tier than documented.
- `description` must be accurate. Do not describe a source as "the most reliable" or "definitive" unless that characterization is defensible in classical Islamic scholarship.
- `relevance` should explain specifically how OUR LEGACY uses this source — which lessons, which type of claim.

### Example Entry

```typescript
{
  id: 1,
  title: "Sirat Ibn Hisham",
  arabicTitle: "السيرة النبوية",
  author: "Abd al-Malik ibn Hisham (d. 218 AH / 833 CE)",
  type: "sirah",
  tier: 2,
  description: "The earliest surviving comprehensive biography of the Prophet, abridging and editing the original Sirah of Muhammad ibn Ishaq.",
  relevance: "The primary narrative source for all Meccan-period lessons (L2-L10). Used for birth narrative, childhood events, trade journeys, and the marriage to Khadijah.",
  usedIn: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
}
```

---

## PART 4 — DEPLOYMENT PROCEDURE FOR NEW ENTRIES

When adding new Profiles, Maps, or References to the app:

1. **Edit `BookDetail.tsx`** in OneDrive (add the new array entry).
2. **Check for consistency:** verify that any discoveryNotes in ClosingPages that reference this entry are already deployed or are included in the same deploy.
3. **Include the change in the lesson deploy script.** The deploy script already copies BookDetail.tsx from OneDrive to C:\Dev. No separate copy step is needed.
4. **Verify the entry renders** in the live app as part of the post-deploy verification (Part 2 of the Verification Checklist — see 12 — VERIFICATION CHECKLIST).
5. **Update the References Library (08)** if a new source is added to `SIRAH_REFERENCES`.

---

## PART 5 — COMMON MISTAKES

**1. Adding a profile before verifying the lineage.**
The lineage of a historical figure often contains contested details (e.g., the exact tribe, mother's name). Always verify against al-Ṭabaqāt al-Kubrā (Ibn Saʿd) before writing.

**2. Referencing a profile or map in a discoveryNote that does not yet exist in the app.**
The discoveryNote goes live immediately on deploy. If it points to content that does not exist, it is a broken reference. Always verify that referenced content exists before deploying.

**3. Writing profiles that duplicate the lesson narrative.**
A profile is a reference card, not a retelling of the lesson. It should complement the lesson, not repeat it. Key facts should be the kind of details a reader might forget or want to look up — dates, lineage, children, other roles — not a summary of the narrative.

**4. Adding map SVGs that are too complex.**
SVG strings above approximately 5,000 characters slow rendering on mobile devices. If a map is very detailed, simplify it. The educational value is in the geographic orientation, not the artistic detail.

**5. Assigning a wrong tier to a reference.**
The tier assigned in `SIRAH_REFERENCES` must match the tier documented in **05 — SOURCE HIERARCHY**. Inconsistencies mislead readers who compare the app against the framework.

---

## PART 6 — BEST PRACTICES

- Add Profiles and Maps proactively — write them while writing the lesson, not after.
- Use consistent name spellings across profiles, map labels, and lesson text.
- When a new figure appears in multiple lessons, add them to the `lessons` array for all relevant lessons — even retroactively if the figure was in an earlier lesson but the profile was written later.
- Keep profile `keyFacts` arrays to 6 entries maximum. More than 6 dilutes the "key" quality.
- Cross-reference: if a Profile and a Map both relate to the same lesson event, note the connection in both entries' descriptions.
