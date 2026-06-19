# OUR LEGACY — Digital Islamic Library Redesign Plan
**Prepared by:** Senior UX & Engineering Review  
**Date:** June 2026  
**Scope:** Full architecture redesign for long-term growth

---

## EXECUTIVE SUMMARY

The current app is a single-book ebook reader with an elegant aesthetic. The redesign evolves it into a **Digital Islamic Library** — a scalable home for hundreds of books, timelines, maps, and multi-language content — while **preserving and deepening** the timeless, premium Islamic aesthetic. Nothing is modernised toward social media. Everything is deepened toward the classical library tradition.

---

## PART 1 — INFORMATION ARCHITECTURE

### Current Structure (Too Shallow)
```
Splash → Home → Reader (single book)
```

### New Structure (Scalable Library)
```
Splash
└── AppShell (persistent navigation)
    ├── Library Home
    │   ├── Continue Reading (if in progress)
    │   ├── Categories (horizontal scroll)
    │   └── Featured / New Additions
    ├── Library Shelf (by category)
    │   ├── Sīrah of the Prophet ﷺ
    │   ├── Ṣaḥābah (Companions)
    │   ├── Prophets (Anbiyāʾ)
    │   ├── Islamic Civilisation
    │   ├── Daily Taʿlīm
    │   └── Great Scholars
    ├── Book Detail Page
    │   ├── Cover art + description
    │   ├── Table of Contents
    │   ├── About the Author/Sources
    │   └── Begin / Continue Reading
    ├── Reader (full-screen)
    │   ├── Pages (as before)
    │   ├── Table of Contents (slide-in panel)
    │   ├── Maps (location-triggered panel)
    │   ├── Timeline (historical-context panel)
    │   ├── References (footnote system)
    │   └── TTS + Audio Player
    ├── Search
    └── More (Support, Sources, Family Mode, Settings)
```

---

## PART 2 — CATEGORY STRUCTURE

### Primary Categories

| Category | Arabic | Description |
|----------|--------|-------------|
| Sīrah | السيرة النبوية | Biography of Prophet Muhammad ﷺ |
| Ṣaḥābah | الصحابة | Lives of the Companions |
| Anbiyāʾ | الأنبياء | Stories of the Prophets |
| Islamic History | التاريخ الإسلامي | Civilisations, conquests, scholarship |
| Daily Taʿlīm | التعليم اليومي | Family lesson packs |
| Great Scholars | العلماء | Lives of Islamic scholars |

### Sub-categories (for Ṣaḥābah)
- Khulafāʾ Rāshidūn (The Four Rightly-Guided Caliphs)
- Badrī Companions (those present at Badr)
- Female Companions (Ṣaḥābiyyāt)
- Youth Companions

### Age / Audience Tags
- `Family` — suitable for children + adults together
- `Youth` — 12–18 years
- `Adult` — mature historical content
- `Madrasah` — structured lesson format with action points

---

## PART 3 — NEW HOMEPAGE STRUCTURE

### Section Order (mobile scroll)
1. **Bismillah header** — small gold ornament + "بِسْمِ اللهِ الرَّحْمَٰنِ الرَّحِيمِ"
2. **App brand** — "OUR LEGACY" + subtitle
3. **Continue Reading card** (if localStorage has progress)
4. **Category pills** — horizontal scroll row
5. **Featured Books** — 2-up grid (or single featured + related)
6. **Recently Added** — horizontal scroll strip
7. **Sadaqah Jariyah note** — soft, understated, not a sales pitch

### Desktop additions
- Left sidebar with category tree
- Hero splash with featured book cover (large)
- Right column: reading stats, recent activity

---

## PART 4 — NAVIGATION SYSTEM

### Mobile Bottom Tab Bar (5 items)
```
📚 Library  |  🔍 Search  |  📖 Reading  |  👨‍👩‍👧 Family  |  ☰ More
```
- Active tab: gold underline indicator
- Icons: Lucide (BookOpen, Search, BookMarked, Users, MoreHorizontal)
- Height: 64px (matching existing nav)
- Reader mode: nav fades out, reappears on tap

### Desktop Left Sidebar (240px)
```
[OUR LEGACY logo]
─────────────────
📚 Library
  › Sīrah
  › Ṣaḥābah  ← active
  › Prophets
  › History
  › Daily Taʿlīm
─────────────────
🔍 Search
📖 Continue Reading
👨‍👩‍👧 Family Mode
─────────────────
⚙ Settings
❤ Support
```

### Reader Navigation
- Top bar: Back button + Book title (fades on scroll)
- Bottom bar: Page indicator + Prev/Next (existing, keep)
- Left edge swipe → TOC panel opens
- TOC: slide-in from left, 80% width on mobile, 320px on desktop

---

## PART 5 — LIBRARY LAYOUT

### Book Grid
- Mobile: 2 columns
- Tablet: 3 columns  
- Desktop: 4 columns (in main area, sidebar present)

### Book Card Design
Each card shows:
1. **Cover** — coloured background (forest green / deep plum / midnight blue) with Islamic geometric gold ornament SVG overlay
2. **Series badge** — e.g. "Ṣaḥābah Series"
3. **Title** — in serif font
4. **Author** — muted
5. **Progress ring** — circular SVG if started (% complete)
6. **Status badge** — "New" / "Continue" / "Complete" / "Coming Soon"
7. **Estimated read time** — "~12 min per session"

### Shelf Filtering
- Filter chips (horizontal scroll): All · Makkī · Madanī · Badr · Short Read
- Sort: Default · A–Z · Recently Added · Shortest First

---

## PART 6 — READER PAGE DESIGN ENHANCEMENTS

### Keep (working well)
- Warm cream paper background
- EB Garamond for all prose
- Sacred text boxes (Hadith, Āyah, Duʿāʾ)
- Swipe left/right for pages
- Night mode
- Font size control
- Read Aloud bar
- Audio player

### Add
- **Reading breadcrumb**: small pill at top — "Sīrah · Part 3 · Makkī Period"
- **Chapter progress**: thin gold line at top (% of book)
- **Map trigger button**: appears when `page.locations` array is present
- **Timeline trigger**: appears when `page.timelineEvents` array is present
- **Footnote superscripts**: `[1]` → tap → slides up footnote card
- **Contextual sidebar** (desktop only): TOC on left, footnotes on right

---

## PART 7 — TABLE OF CONTENTS SYSTEM

### Panel Design
- Slides in from left (mobile) or is docked left (tablet+)
- Background: `--paper` with slight blur backdrop
- Shows all pages grouped by Part
- Each entry: icon + title + page number + reading-done checkmark
- Current page: highlighted with left gold border
- Scroll-spy: auto-highlights as you read

### Data Structure Enhancement
```typescript
type TocEntry = {
  pageIndex: number;
  kind: ReaderPage["kind"];
  label: string;
  partLabel?: string;
  estimatedMinutes?: number;
  completed?: boolean; // from localStorage
};
```

---

## PART 8 — MAPS INTEGRATION

### Philosophy
Maps should feel like pages from a **hand-illustrated atlas** — not Google Maps. Think: cream vellum background, hand-drawn coastlines, gold location markers, Arabic calligraphy place names.

### Technical Approach
Use **SVG-based illustrated maps** with:
- Pre-drawn SVG base map (Arabian Peninsula, levant, etc.)
- Location data as coordinate arrays relative to SVG viewBox
- Animated route paths (stroke-dasharray animation)
- Tap a location marker → shows popup with event name + date + description

### Example: Hijrah Route Map
```
Locations on map:
• Makkah (start — green marker)
• Cave of Thawr (3 nights)
• Coastal Route (dotted path)
• Madinah (end — gold marker)

Popup on "Cave of Thawr":
  Title: Cave of Thawr
  Event: The Prophet ﷺ and Abu Bakr رضي الله عنه 
         took refuge here for three nights
  Reference: [Sahih al-Bukhari, 3652]
```

### Map Data Structure
```typescript
type MapLocation = {
  id: string;
  name: string;          // English name
  nameAr?: string;       // Arabic name
  description: string;
  reference?: string;
  markerType: "start" | "event" | "end" | "battle" | "city";
  coords: [number, number]; // SVG viewBox percentage [x%, y%]
};

type ReaderMap = {
  id: string;
  title: string;
  subtitle?: string;
  svgBaseMap: string;    // path to base SVG
  locations: MapLocation[];
  routes?: Array<{ from: string; to: string; style: "solid" | "dotted" }>;
};
```

### Trigger in Reader
When `page.mapId` is set, a subtle "Map" button appears in the reader page:
```tsx
{page.mapId && (
  <button className="book-map-trigger" onClick={() => setMapOpen(true)}>
    <MapPin size={15} />
    View on Map
  </button>
)}
```

### Map Subjects to Create
**Abu Bakr رضي الله عنه:**
- Makkah → Cave of Thawr → Madinah (Hijrah)
- Madinah → Badr
- Madinah → Uhud
- Khandaq (trench)
- Riddah Wars (map showing regions)
- Iraq and Syria campaigns

**Umar رضي الله عنه:**
- Jerusalem entry route
- Expansion of Islamic state (political map)

**Khalid ibn al-Walid رضي الله عنه:**
- Battle routes across Arabia, Levant, Persia

---

## PART 9 — TIMELINE INTEGRATION

### Design
- Horizontal scroll on mobile, vertical on desktop
- Style: dark parchment with gold timeline line, white event cards
- Each event: date chip (Hijrī + CE) + icon + title + 2-line description
- Key milestones: larger cards with golden border

### Data Structure
```typescript
type TimelineEvent = {
  id: string;
  date: string;          // "10 BH / 612 CE" or "Ramadan 2 AH"
  dateHijri?: string;
  dateCE?: string;
  title: string;
  description: string;
  category: "birth" | "revelation" | "battle" | "death" | "hijrah" | "conquest";
  importance: "major" | "standard";
  pageLink?: number;     // jump to reader page
};
```

### Trigger
When `page.timelineEventIds` is set, a "Timeline" button appears in the reader.

---

## PART 10 — READING PROGRESS SYSTEM

### Storage
```typescript
// Key pattern in localStorage
`our_legacy_book_${bookId}_page`       // current page index
`our_legacy_book_${bookId}_scroll_${pageIndex}` // scroll on each page
`our_legacy_book_${bookId}_completed`   // boolean
`our_legacy_book_${bookId}_started_at`  // timestamp
`our_legacy_book_${bookId}_last_read`   // timestamp
```

### Progress Display
1. **Book card**: Circular ring (SVG) showing % complete
2. **Book detail page**: "You are on page 7 of 24 · 42% complete"
3. **Reader top bar**: Thin gold progress line at very top
4. **Library shelf**: Completed books get a small gold checkmark badge

### Continue Reading Card
- Shows on Library Home if any book has been started
- Shows: book title, chapter name, "Resume" button
- Deep links to exact page + scroll position

---

## PART 11 — SEARCH EXPERIENCE

### Trigger
- Mobile: Search tab in bottom nav
- Desktop: Search icon in sidebar / Cmd+K shortcut

### Design
Full-screen overlay (like the reader), white/cream background:
1. Search input (auto-focused)
2. Recent searches (chips)
3. Browse by category (grid)
4. Live results as you type (debounced, 300ms)

### Search Scope
- Book titles
- Chapter/segment titles  
- Author names
- Category names
- (Future: full-text content search)

### Results
Each result shows:
- Category icon
- Book title
- Chapter name
- Snippet of matching text

---

## PART 12 — FAMILY READING MODE

### Activation
- "Family Mode" tab in bottom nav (Users icon)
- Or: toggle in More menu

### Changes in Family Mode
1. **Font size**: +20% base (easier for children + elderly)
2. **Line height**: increased to 1.9
3. **Page controls**: larger tap targets (56px minimum)
4. **Reflection questions**: shown prominently with space to discuss
5. **Action points**: highlighted with gold border, encourage discussion
6. **Distraction-free**: no TTS controls visible by default (simpler UI)
7. **Timer**: optional session timer "Reading for 15 minutes"
8. **Quranic/Hadith boxes**: extra large, clearly separated

### Visual Changes
- Banner at top: "Family Reading Mode" (soft gold, dismissable)
- Larger heading sizes
- More generous white space between sections

---

## PART 13 — TYPOGRAPHY SYSTEM

### Font Stack (keep existing, refine)

| Role | Font | Weight | Usage |
|------|------|--------|-------|
| Display | EB Garamond | 400, 500, 600 | Book titles, chapter heads |
| Body reading | EB Garamond | 400 | All prose in reader |
| UI | Inter | 400, 500, 600 | Navigation, labels, badges |
| Arabic | Noto Naskh Arabic | 400, 700 | All Arabic text |
| Urdu | Noto Nastaliq Urdu | 400 | Urdu translations |

### Type Scale (Modular 1.25)
```
--text-xs:    12px   (meta, references, badges)
--text-sm:    14px   (nav labels, captions)
--text-base:  16px   (body, UI)
--text-md:    20px   (sub-headings, kickers)
--text-lg:    25px   (h3, section heads)
--text-xl:    31px   (h2, chapter titles)
--text-2xl:   39px   (h1, book titles)
--text-3xl:   49px   (display, cover titles)
--text-4xl:   61px   (hero, splash)
```

### Line Height
```
--leading-tight:   1.2   (headings)
--leading-normal:  1.5   (UI)
--leading-relaxed: 1.75  (body prose)
--leading-loose:   1.9   (family mode)
```

### Measure (Line Length)
```
--measure-sm:  55ch   (narrow reading)
--measure:     65ch   (optimal reading — body prose)
--measure-lg:  80ch   (layout/cards)
```

---

## PART 14 — SPACING SYSTEM

### Base Unit: 4px
```
--space-1:   4px
--space-2:   8px
--space-3:   12px
--space-4:   16px
--space-5:   20px
--space-6:   24px
--space-8:   32px
--space-10:  40px
--space-12:  48px
--space-16:  64px
--space-20:  80px
--space-24:  96px
--space-32:  128px
```

### Component Spacing
- Card padding: `--space-5` (20px)
- Section padding: `--space-12` top/bottom (48px)
- Reader page padding: `--space-8` horizontal (32px), `--space-12` top (48px)
- Bottom nav height: 64px (keep)
- Sidebar width: 240px

---

## PART 15 — COLOUR PALETTE (REFINED)

### Keep All Existing Tokens
```css
--ink:        #18211f   /* Deep near-black — primary text */
--muted:      #68726e   /* Secondary text, captions */
--paper:      #f7f3ec   /* Warm cream — page background */
--panel:      #ffffff   /* Card surfaces, panels */
--forest:     #12332f   /* Deep Islamic green — headers, accents */
--leaf:       #2e6f5b   /* Mid green — interactive, active states */
--gold:       #b88a32   /* Islamic gold — primary accent */
--champagne:  #e7d3a1   /* Light gold — borders, dividers */
--plum:       #55334f   /* Deep plum — alternating category accent */
--night:      #071820   /* Near black — night mode base */
--sky:        #d9e9ef   /* Pale blue-grey — subtle backgrounds */
```

### Add New Tokens
```css
--amber:      #c4830a   /* Stronger gold for warnings, highlights */
--dust:       #c9bba5   /* Warm grey for disabled states */
--vellum:     #f0e9d6   /* Slightly darker parchment for nested panels */
--olive:      #4a5c35   /* Olive green — alternate category colour */
--crimson:    #7a1f2e   /* Deep crimson — for battle/conflict markers on maps */
--azure:      #1a3d5c   /* Deep blue — water on maps, night accents */

/* Semantic tokens */
--color-primary:      var(--forest)
--color-accent:       var(--gold)
--color-surface:      var(--paper)
--color-surface-raised: var(--panel)
--color-text:         var(--ink)
--color-text-muted:   var(--muted)
--color-border:       var(--line)
--color-progress:     var(--leaf)
```

### Night Mode Additions
```css
.night {
  --paper:  #0e1a18
  --panel:  #162420
  --ink:    #e8dfc8
  --muted:  #8a9490
  --line:   rgba(232, 223, 200, 0.12)
  --forest: #2e6f5b    /* brighter in dark */
  --gold:   #d4a843    /* brighter in dark */
  --vellum: #192e2a
}
```

---

## PART 16 — ACCESSIBILITY IMPROVEMENTS

### Current State (Good)
- Color contrast: WCAG AA on most elements
- Arabic: dir="rtl" lang="ar"
- Focus visible: gold outline on buttons
- Min touch targets: ~44px

### Improvements Needed

1. **Skip to content link**
```html
<a href="#main-content" class="skip-link">Skip to main content</a>
```

2. **Landmarks**
- `<nav aria-label="Main navigation">`
- `<main id="main-content">`
- `<aside aria-label="Table of contents">`

3. **Keyboard navigation in reader**
- `← →` arrow keys: prev/next page
- `t` key: toggle TOC
- `Escape`: close any open panel

4. **Reduced motion**
```css
@media (prefers-reduced-motion: reduce) {
  .book-page-transition,
  .golden-horizon,
  .splash-stars { animation: none; }
}
```

5. **Focus trap** in TOC, Map, and Search modals

6. **ARIA live region** for page announcements
```html
<div aria-live="polite" aria-atomic="true" class="sr-only">
  Page 7 of 24: The Migration to Madinah
</div>
```

7. **Reader font size**: min 16px (existing okay), allow up to 24px in settings

8. **Line spacing**: user-adjustable (standard / relaxed / family)

---

## PART 17 — REFERENCES SECTION

### Footnote System in Reader
When a segment has `references` array:
- Superscript number `¹` appears inline in text
- Tap → slides up a footnote card from bottom
- Shows: reference text + source book/hadith number
- "See full references →" link

### Full References Page
Available from book detail page and more menu:
- Groups by: Qurʾān, Ḥadīth, Classical Works, Modern Works
- Each entry: numbered citation in proper academic style

---

## PART 18 — IMPLEMENTATION ROADMAP

### Phase 1 — Foundation (Weeks 1–4)
- [ ] New design token CSS file
- [ ] AppShell with bottom nav
- [ ] Library data structure (libraryData.ts)
- [ ] BookCard component
- [ ] LibraryHome page
- [ ] Update App.tsx router

### Phase 2 — Content (Weeks 5–8)
- [ ] TableOfContents panel
- [ ] Reading progress system (upgrade from current)
- [ ] Book Detail page
- [ ] Search modal (basic title/category search)
- [ ] Add 3–5 more book entries to library data

### Phase 3 — Enrichment (Weeks 9–16)
- [ ] Map component + SVG base maps
- [ ] Timeline component
- [ ] Footnote/reference system
- [ ] Multi-language content layer
- [ ] Family Reading Mode

### Phase 4 — Scale (Months 5–12)
- [ ] Full-text search (with Fuse.js or Firebase full-text)
- [ ] User accounts (Firebase Auth)
- [ ] Progress sync across devices
- [ ] Desktop layout (proper sidebar)
- [ ] Push notifications for daily Taʿlīm
- [ ] Offline support (service worker — already started)

---

## PART 19 — COMPONENT FILE STRUCTURE

```
apps/web/src/
├── components/
│   ├── EbookReader.tsx          (existing — keep, enhance)
│   ├── AppShell.tsx             (NEW — navigation wrapper)
│   ├── library/
│   │   ├── LibraryHome.tsx      (NEW — homepage/library landing)
│   │   ├── BookCard.tsx         (NEW — individual book card)
│   │   ├── BookDetail.tsx       (NEW — book landing page)
│   │   └── CategoryPill.tsx     (NEW — horizontal scroll categories)
│   ├── reader/
│   │   ├── TableOfContents.tsx  (NEW — slide-in TOC panel)
│   │   ├── ReadingProgress.tsx  (NEW — progress bar + ring)
│   │   └── ReaderBreadcrumb.tsx (NEW — top breadcrumb)
│   ├── search/
│   │   └── SearchModal.tsx      (NEW — full-screen search)
│   ├── enrichment/
│   │   ├── IslamicMap.tsx       (NEW — SVG map panel)
│   │   └── HistoryTimeline.tsx  (NEW — horizontal timeline)
│   └── family/
│       └── FamilyModeWrapper.tsx (NEW — family mode HOC)
├── data/
│   ├── readerContent.ts         (existing — keep, enhance types)
│   ├── libraryData.ts           (NEW — book catalog)
│   └── mapData.ts               (NEW — location + route data)
├── styles/
│   ├── global.css               (existing — keep core, reduce duplication)
│   ├── design-tokens.css        (NEW — canonical token file)
│   ├── library.css              (NEW — library & card styles)
│   ├── reader-enhanced.css      (NEW — map, timeline, TOC styles)
│   └── family.css               (NEW — family mode overrides)
└── App.tsx                      (update router)
```

---

## PART 20 — BEST PRACTICES SUMMARY

### What Makes This App Special
The existing app already has the **right aesthetic instinct**. The redesign is about:
1. Scaling the information architecture without losing intimacy
2. Adding depth (maps, timelines, references) without adding noise
3. Making the library feel curated, not commercialised
4. Making content accessible to children AND scholars simultaneously

### What to Avoid
- No gamification (points, streaks, badges)
- No social features (likes, comments, sharing of reading)
- No ads or promotional content within the reader
- No auto-playing media
- No infinite scroll (library has a natural end per category)
- No pop-ups, banners, cookie notices within the Islamic content

### The Golden Rule of This Design
> The reader should feel like they picked up a beautifully bound book from a quiet Islamic library shelf, sat in a warm chair by a window, and disappeared into the life of the Prophet ﷺ and his companions.

Every design decision should be tested against this feeling.

---

*Components are provided in the accompanying .tsx and .css files in the `src/` directory.*
