/**
 * BookDetail — Full book landing page.
 *
 * Tab order: Chapters / Timeline / Maps / Profiles / References
 *
 * References tab includes:
 *   - Source list (Qurʾān / Ḥadīth / Sīrah / Historical)
 *   - Source Reliability Summary (Established / Accepted / Discussed)
 *   - Authentication Notes
 *
 * All enrichment data is pulled from bookEnrichmentData.ts.
 * Sections hide automatically when data is absent → backwards-compatible.
 */

import {
  BookOpen,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  Clock,
  List,
  MapPin,
  ScrollText,
  User,
} from "lucide-react";
import React, { useMemo, useState } from "react";
import type { BookEntry } from "../../data/libraryData";
import { getBookProgress } from "../../data/libraryData";
import {
  getBookEnrichment,
  type AuthNote,
  type CharacterProfile,
  type MilestoneEntry,
  type ReferenceEntry,
  type SourceReliabilityEntry,
  type SourceTier,
} from "../../data/bookEnrichmentData";

// ── Chapter data type ─────────────────────────────────────────────────────────

export type ChapterEntry = {
  number: number;
  title: string;
  description: string;
  minutes: number;
  /** Maps to a reader page index — undefined = content not yet wired */
  pageIndex?: number;
};

// ── Sirah chapters ────────────────────────────────────────────────────────────

export const SIRAH_CHAPTERS: ChapterEntry[] = [
  // ── The Sacred Roots (Before Birth) ─────────────────────────────────────────
  {
    number: 1,
    title: "Introduction to Sīrah",
    description: "What is Sīrah, why do we study it, and why does it matter for our lives today?",
    minutes: 10,
    pageIndex: 0,
  },
  {
    number: 2,
    title: "The Meccan Period",
    description: "Ibrāhīm ʿalayhi us-salām, Hājar, the miracle of Zamzam, the tribe of Jurhum, and Hāshim — the sacred roots from which Rasūlullāh ﷺ emerged.",
    minutes: 10,
    pageIndex: 7,
  },

  // ── Birth & The Desert Years (c. 570–576 CE) ────────────────────────────────
  {
    number: 3,
    title: "The Year of the Elephant & the Birth",
    description: "Abraha's army, the miracle of the birds, the death of ʿAbdullāh, and the birth of Rasūlullāh ﷺ on a Monday in Makkah.",
    minutes: 10,
    pageIndex: 14,
  },
  {
    number: 4,
    title: "Ḥalīmah al-Saʿdiyyah and the Desert Years",
    description: "Ḥalīmah al-Saʿdiyyah, the blessings of Banū Saʿd, and the years in the desert — the early formation of the greatest soul.",
    minutes: 10,
    pageIndex: 21,
  },
  {
    number: 5,
    title: "The Opening of the Chest",
    description: "The great miracle of Shaqq al-Ṣadr — two angels, a golden basin of zamzam, and a heart purified for prophethood. Then the return to Makkah.",
    minutes: 10,
    pageIndex: 28,
  },
  {
    number: 6,
    title: "The Death of Āminah",
    description: "The journey to Yathrib, the death of Āminah at Al-Abwāʾ, and the Prophet ﷺ returns to Makkah as a full orphan — under the care of his grandfather ʿAbd al-Muṭṭalib.",
    minutes: 10,
    pageIndex: 35,
  },

  // ── Under the Protection of Others (c. 576–595 CE) ──────────────────────────
  {
    number: 7,
    title: "Under the Wing of ʿAbd al-Muṭṭalib — and His Death",
    description: "Two years of deep love under his grandfather's care. Then a third loss — and the young Prophet ﷺ enters the home of his uncle Abū Ṭālib.",
    minutes: 10,
    pageIndex: 42,
  },
  {
    number: 8,
    title: "The Journey to Shām with Abū Ṭālib",
    description: "A trading caravan, a twelve-year-old boy, and a monk named Baḥīrā — the first sign that something extraordinary was coming.",
    minutes: 10,
  },
  {
    number: 9,
    title: "Baḥīrā the Monk",
    description: "At Buṣrā in Shām, the Christian monk Baḥīrā recognised the signs of prophethood and warned Abū Ṭālib to protect his nephew.",
    minutes: 8,
  },
  {
    number: 10,
    title: "Ḥilf al-Fuḍūl — The Pact of the Virtuous",
    description: "Before prophethood, the young Muḥammad ﷺ participated in a noble pact to defend the oppressed. He said later: I would not exchange it for the finest camels.",
    minutes: 8,
  },

  // ── Marriage, Character & Trust (c. 595–610 CE) ─────────────────────────────
  {
    number: 11,
    title: "Marriage to Khadījah ؓ",
    description: "The noblest of all marriages — how the greatest woman in the world recognised the greatest man, and what their union built for the coming revelation.",
    minutes: 12,
  },
  {
    number: 12,
    title: "Rebuilding of the Kaʿbah",
    description: "The Quraysh rebuild the House of Allāh. A dispute over the Black Stone. And Muḥammad ﷺ — before a single verse of Qurʾān — becomes the peacemaker.",
    minutes: 10,
  },

  // ── Revelation & The Makkī Years (c. 610–622 CE) ────────────────────────────
  {
    number: 13,
    title: "First Revelation — Iqraʾ",
    description: "The Cave of Ḥirāʾ. The angel Jibrīl ʿalayhi us-salām. The trembling. The embrace. The five verses that changed the world forever.",
    minutes: 12,
  },
  {
    number: 14,
    title: "The First Believers",
    description: "Khadījah ؓ, ʿAlī ؓ, Abū Bakr ؓ, Zayd ibn Ḥārithah ؓ — the first hearts to say lā ilāha illallāh after the revelation.",
    minutes: 10,
  },
  {
    number: 15,
    title: "The Open Call — and the First Persecution",
    description: "Allāh commands: Proclaim. The Quraysh respond with ridicule, torture, and the first martyrs of Islām.",
    minutes: 12,
  },
  {
    number: 16,
    title: "The First Hijrah — to Abyssinia",
    description: "Fleeing persecution, the earliest Muslims sought asylum with Najāshī — the Christian king who judged justly. A remarkable chapter in the story of Islām.",
    minutes: 12,
  },
  {
    number: 17,
    title: "The Year of Sorrow",
    description: "In a single year, Rasūlullāh ﷺ lost his uncle Abū Ṭālib and his beloved Khadījah ؓ. The city of Ṭāʾif. And Allāh's response from the heavens.",
    minutes: 12,
  },
  {
    number: 18,
    title: "Isrāʾ and Miʿrāj — The Night Journey",
    description: "From Masjid al-Ḥarām to Masjid al-Aqṣā and then to the highest heavens — a miraculous journey, a gift of prayer, and an unshakeable faith.",
    minutes: 12,
  },

  // ── The Madanī Years (622–632 CE) ───────────────────────────────────────────
  {
    number: 19,
    title: "The Hijrah to Madīnah",
    description: "The cave of Thawr, the desert route, the arrival in Qubāʾ — and the city that waited with flowers and joy for its Prophet ﷺ.",
    minutes: 12,
  },
  {
    number: 20,
    title: "Building a Community — The Madīnan Blueprint",
    description: "The Masjid, the Constitution of Madīnah, the brotherhood of Muhājirīn and Anṣār — how a prophet builds a civilisation from scratch.",
    minutes: 12,
  },
  {
    number: 21,
    title: "The Battle of Badr",
    description: "Three hundred and thirteen against a thousand. The first great battle of Islām — and the day Allāh ﷻ sent His angels.",
    minutes: 12,
  },
  {
    number: 22,
    title: "The Battle of Uḥud",
    description: "A painful lesson in obedience, the loss of Ḥamzah ؓ, and the steadfastness of a Prophet who never abandoned his people.",
    minutes: 12,
  },
  {
    number: 23,
    title: "The Battle of the Trench — Khandaq",
    description: "A trench dug by ten thousand hands, a siege that lasted weeks, and an invisible army from Allāh that ended it all.",
    minutes: 12,
  },
  {
    number: 24,
    title: "The Treaty of Ḥudaybiyyah",
    description: "What looked like defeat became the greatest opening. The treaty the Companions wept over — that Allāh called a manifest victory.",
    minutes: 10,
  },
  {
    number: 25,
    title: "Letters to the Kings of the World",
    description: "The Prophet ﷺ wrote to Heraclius, Chosroes, the Negus, and others. The greatest man on earth reached out — and the world had to respond.",
    minutes: 10,
  },

  // ── The Conquest & Final Years (628–632 CE) ──────────────────────────────────
  {
    number: 26,
    title: "The Conquest of Makkah",
    description: "Ten thousand marching in silence. Sunrise on the Kaʿbah. The Prophet ﷺ granting amnesty to the people who had driven him out.",
    minutes: 12,
  },
  {
    number: 27,
    title: "The Year of Delegations",
    description: "Tribes from across Arabia came to Madīnah. A tidal wave of hearts turning to Allāh — and the completion of Islām as a way of life.",
    minutes: 10,
  },
  {
    number: 28,
    title: "The Farewell Pilgrimage",
    description: "One hundred and twenty-four thousand on the plain of ʿArafah. The last sermon. The final commandment. Allāh's declaration: Today I have perfected your religion.",
    minutes: 12,
  },

  // ── The Passing & Legacy ─────────────────────────────────────────────────────
  {
    number: 29,
    title: "The Passing of Rasūlullāh ﷺ",
    description: "The illness, the final days, the farewell to the Ummah, and the moment the heavens and earth fell silent. A death that became the greatest lesson in Islām.",
    minutes: 12,
  },
  {
    number: 30,
    title: "Legacy — What He Left Behind",
    description: "The Qurʾān, the Sunnah, the Companions, and a light that has reached every corner of the world for fourteen centuries — and will not be extinguished.",
    minutes: 12,
  },
];

// ── Abu Bakr chapters ─────────────────────────────────────────────────────────

export const ABU_BAKR_CHAPTERS: ChapterEntry[] = [
  {
    number: 1,
    title: "Born in Makkah",
    description: "The family, the time, and the city that shaped Abū Bakr's early character.",
    minutes: 10,
    pageIndex: 0,
  },
  {
    number: 2,
    title: "The Honest Merchant",
    description: "How Abū Bakr earned his reputation for truthfulness long before Islām.",
    minutes: 8,
    pageIndex: 1,
  },
  {
    number: 3,
    title: "The Close Friend",
    description: "The deep bond of brotherhood between Abū Bakr and the Prophet ﷺ.",
    minutes: 10,
  },
  {
    number: 4,
    title: "The First to Believe",
    description: "Without a moment of hesitation, he accepted Islām — and brought others with him.",
    minutes: 10,
  },
  {
    number: 5,
    title: "Giving Everything",
    description: "How Abū Bakr freed enslaved believers and spent his entire wealth for Allāh.",
    minutes: 12,
  },
  {
    number: 6,
    title: "The Journey to Madinah",
    description: "Three nights in a cave, a desert crossing, and arrival in the city of light.",
    minutes: 12,
  },
  {
    number: 7,
    title: "Fighting for Islām",
    description: "From Badr to Uḥud to Khandaq — always beside the Prophet ﷺ.",
    minutes: 10,
  },
  {
    number: 8,
    title: "When the Prophet ﷺ Died",
    description: "The darkest day — and the words that held the ummah together.",
    minutes: 12,
  },
  {
    number: 9,
    title: "The First Caliph",
    description: "By consensus of the Companions, Abū Bakr became the leader of the Muslims.",
    minutes: 10,
  },
  {
    number: 10,
    title: "The Qurʾān Collector",
    description: "The historic decision to compile the Qurʾān into a single manuscript.",
    minutes: 10,
  },
  {
    number: 11,
    title: "A Simple Leader",
    description: "He led the greatest empire on earth while living like the poorest person in it.",
    minutes: 8,
  },
  {
    number: 12,
    title: "The End",
    description: "His final days, his farewell, and his burial beside the one he loved most.",
    minutes: 10,
  },
  {
    number: 13,
    title: "What We Learn",
    description: "Lessons from the life of al-Ṣiddīq — for every age, every heart, every home.",
    minutes: 10,
  },
];

// ── Book chapters map ─────────────────────────────────────────────────────────

const BOOK_CHAPTERS: Record<string, ChapterEntry[]> = {
  "sirah-prophet-001": SIRAH_CHAPTERS,
  "sahabah-abu-bakr": ABU_BAKR_CHAPTERS,
};

function getChaptersForBook(bookId: string): ChapterEntry[] {
  return BOOK_CHAPTERS[bookId] ?? [];
}

function getChapterProgress(
  bookId: string,
  chapter: ChapterEntry,
  lessonKey?: string
): "done" | "current" | "unread" {
  if (lessonKey && chapter.pageIndex !== undefined) {
    // Use the reader's localStorage key — saves page INDEX (0-based)
    const savedPage = Number(
      localStorage.getItem(`our_legacy_reader_page:${lessonKey}`) ?? "-1"
    );
    if (savedPage < 0) return "unread";
    const chapterEnd = chapter.pageIndex + 7; // 7 pages per lesson
    if (savedPage >= chapterEnd) return "done";
    if (savedPage >= chapter.pageIndex) return "current";
    return "unread";
  }
  // Legacy fallback for books without reader content
  const currentPage = Number(
    localStorage.getItem(`our_legacy_book_${bookId}_page`) ?? "-1"
  );
  if (currentPage < 0) return "unread";
  if (currentPage > chapter.number - 1) return "done";
  if (currentPage === chapter.number - 1) return "current";
  return "unread";
}

// ── Sirah era groups ──────────────────────────────────────────────────────────

const SIRAH_ERA_GROUPS: Array<{ label: string; period: string; from: number; to: number }> = [
  { label: "The Sacred Roots",              period: "Before Birth",      from: 1,  to: 2  },
  { label: "Birth & The Desert Years",       period: "c. 570–576 CE",     from: 3,  to: 6  },
  { label: "Under the Protection of Others", period: "c. 576–595 CE",     from: 7,  to: 10 },
  { label: "Marriage, Character & Trust",    period: "c. 595–610 CE",     from: 11, to: 12 },
  { label: "Revelation & The Makkī Years",   period: "c. 610–622 CE",     from: 13, to: 18 },
  { label: "The Madanī Years",               period: "622–632 CE",        from: 19, to: 25 },
  { label: "The Conquest & Final Years",     period: "628–632 CE",        from: 26, to: 28 },
  { label: "Passing & Legacy",               period: "11 AH / 632 CE",   from: 29, to: 30 },
];

// ── Tab type ──────────────────────────────────────────────────────────────────

type DetailTab = "chapters" | "timeline" | "maps" | "profiles" | "references";

// ── Arabic initials map ───────────────────────────────────────────────────────

const ARABIC_INITIAL: Record<string, string> = {
  "sirah-prophet-001": "م",
  "um-khadijah": "خ", "um-sawdah": "س", "um-aisha": "ع",
  "um-hafsah": "ح", "um-zaynab-khuzaymah": "ز", "um-umm-salamah": "هـ",
  "um-zaynab-jahsh": "ز", "um-juwayriyyah": "ج", "um-umm-habibah": "ر",
  "um-safiyyah": "ص", "um-maymunah": "م",
  "ash-abu-bakr": "أ", "ash-umar": "ع", "ash-uthman": "ع",
  "ash-ali": "ع", "ash-talha": "ط", "ash-zubayr": "ز",
  "ash-abdurrahman": "ع", "ash-saad-abi-waqqas": "س",
  "ash-said-zayd": "س", "ash-abu-ubayda": "أ",
  "muf-ibn-masud": "ع", "muf-ubayy": "أ", "muf-zayd": "ز",
  "muf-ibn-abbas": "ع",
  "muh-abu-hurayrah": "أ", "muh-aisha": "ع", "muh-ibn-umar": "ع",
  "muh-jabir": "ج", "muh-anas": "أ",
  "fuq-muadh": "م", "fuq-ali": "ع", "fuq-aisha": "ع",
  "fuq-ibn-masud": "ع", "fuq-zayd": "ز",
  "muj-khalid": "خ", "muj-abu-ubayda": "أ", "muj-amr": "ع",
  "muj-saad": "س", "muj-zubayr": "ز", "muj-bilal": "ب",
  "muj-hamzah": "ح", "muj-jafar": "ج", "muj-muawiyah": "م",
  "muj-nusaybah": "ن", "muj-khawlah": "خ",
  "gw-fatimah": "ف", "gw-asma": "أ", "gw-umm-sulaym": "أ",
  "gw-al-shifa": "ش", "gw-umm-darda": "أ",
  "qr-salim": "س", "qr-abu-darda": "أ",
  "sahabah-abu-bakr": "أ",
};

// ── Sub-components ────────────────────────────────────────────────────────────

function CoverHero({ book }: { book: BookEntry }) {
  const progress = getBookProgress(book.id);
  return (
    <div className="bd-hero" style={{ background: book.coverColor }}>
      <div className="bd-hero-initial" aria-hidden="true">
        {ARABIC_INITIAL[book.id] ?? "◆"}
      </div>
      <div className="bd-hero-content">
        {book.seriesName && <p className="bd-hero-series">{book.seriesName}</p>}
        <h1 className="bd-hero-title">{book.title}</h1>
        {book.subtitle && <p className="bd-hero-subtitle">{book.subtitle}</p>}
        <div className="bd-hero-meta">
          <span className="bd-hero-author">{book.author}</span>
          <span className="bd-hero-sep" aria-hidden="true">·</span>
          <span className="bd-hero-time">
            <Clock size={12} aria-hidden="true" />
            {book.minutesPerSession} min/session
          </span>
        </div>
        {progress > 0 && (
          <div className="bd-hero-progress">
            <div className="bd-hero-progress-track">
              <div className="bd-hero-progress-fill" style={{ width: `${progress}%` }} />
            </div>
            <span className="bd-hero-progress-label">{progress}% complete</span>
          </div>
        )}
      </div>
    </div>
  );
}

function TabBar({
  active,
  onSelect,
  hasProfiles,
}: {
  active: DetailTab;
  onSelect: (t: DetailTab) => void;
  hasProfiles: boolean;
}) {
  const allTabs: Array<{ id: DetailTab; label: string; icon: React.ElementType }> = [
    { id: "chapters",   label: "Chapters",   icon: List },
    { id: "timeline",   label: "Timeline",   icon: Clock },
    { id: "maps",       label: "Maps",       icon: MapPin },
    { id: "profiles",   label: "Profiles",   icon: User },
    { id: "references", label: "References", icon: BookOpen },
  ];

  const tabs = hasProfiles ? allTabs : allTabs.filter((t) => t.id !== "profiles");

  return (
    <nav className="bd-tabs" aria-label="Book sections">
      {tabs.map(({ id, label, icon: Icon }) => (
        <button
          key={id}
          className={`bd-tab ${active === id ? "bd-tab--active" : ""}`}
          onClick={() => onSelect(id)}
          type="button"
          aria-selected={active === id}
          role="tab"
        >
          <Icon size={14} aria-hidden="true" />
          {label}
        </button>
      ))}
    </nav>
  );
}

// ── Chapter card ──────────────────────────────────────────────────────────────

function ChapterCard({
  chapter,
  bookId,
  lessonKey,
  onClick,
}: {
  chapter: ChapterEntry;
  bookId: string;
  lessonKey?: string;
  onClick: () => void;
}) {
  const status = getChapterProgress(bookId, chapter, lessonKey);
  const isLocked = chapter.pageIndex === undefined;

  return (
    <button
      className={`chapter-card ${isLocked ? "chapter-card--locked" : ""} ${status === "current" ? "chapter-card--current" : ""}`}
      onClick={() => { if (!isLocked) onClick(); }}
      type="button"
      disabled={isLocked}
      aria-label={`Chapter ${chapter.number}: ${chapter.title}${isLocked ? " — Coming Soon" : ""}`}
    >
      <div className="chapter-card-num-col" aria-hidden="true">
        {status === "done" ? (
          <CheckCircle size={22} className="chapter-done-icon" />
        ) : (
          <span className={`chapter-num ${status === "current" ? "chapter-num--current" : ""}`}>
            {chapter.number}
          </span>
        )}
      </div>
      <div className="chapter-card-body">
        <p className="chapter-card-title">{chapter.title}</p>
        <p className="chapter-card-desc">{chapter.description}</p>
        <div className="chapter-card-footer">
          <span className="chapter-card-time">
            <Clock size={11} aria-hidden="true" />
            {chapter.minutes} min
          </span>
          {status === "current"                   && <span className="chapter-badge chapter-badge--current">Continue</span>}
          {status === "done"                      && <span className="chapter-badge chapter-badge--done">Read ✓</span>}
          {status === "unread" && !isLocked       && <span className="chapter-badge chapter-badge--start">Start</span>}
          {isLocked                               && <span className="chapter-badge chapter-badge--soon">Soon</span>}
        </div>
      </div>
      {!isLocked && <ChevronRight size={16} className="chapter-card-arrow" aria-hidden="true" />}
    </button>
  );
}

// ── Maps tab ──────────────────────────────────────────────────────────────────

type MapEntry = {
  id: string;
  title: string;
  subtitle: string;
  country?: string;
  importance?: string;
  lesson?: string;
  coming?: true;
  /** Key into MAP_VISUALS — renders an illustrated SVG graphic above the card */
  svgType?: string;
  /** Short items for the "Explore Further" footer */
  exploreFurther?: string[];
};

// ── Educational Sīrah geography maps ──────────────────────────────────────────
// Atlas-style SVGs. Arabian Peninsula grid: x=(lon−32)/26×280+20, y=(32−lat)/20×130+15
// Key positions (320×160 overview): Makkah (104,84) · Madīnah (100,62) · Ṭāʾif (126,84)
//                Badr (86,70) · Al-Abwāʾ (92,74) · Ḥudaybiyyah (98,78) · Tabuk (66,35)

const MAP_VISUALS: Record<string, React.ReactElement> = {

  /* ── Arabia Overview — Makkah ─────────────────────────────────────────────── */
  kaabah: (
    <svg viewBox="0 0 320 160" className="bd-map-svg" aria-hidden="true">
      <rect width="320" height="160" fill="#d4e8e5"/>
      <path d="M42,22 L35,40 L28,62 L30,84 L40,106 L52,126 L66,144 L98,152 L142,148 L188,138 L228,114 L248,90 L252,64 L246,42 L234,28 L210,18 L170,12 L118,12 L76,16 Z" fill="#ede8d0" stroke="#c0b090" strokeWidth="1"/>
      <text x="14" y="86" fontFamily="Georgia,serif" fontSize="5.5" fill="#7aa8a5" transform="rotate(-82,14,86)">Red Sea</text>
      <text x="166" y="156" fontFamily="Georgia,serif" fontSize="5.5" fill="#7aa8a5" textAnchor="middle">Arabian Sea</text>
      <circle cx="100" cy="62" r="2.5" fill="#68726e"/><text x="106" y="66" fontFamily="Georgia,serif" fontSize="6" fill="#68726e">Madīnah</text>
      <circle cx="126" cy="84" r="2" fill="#68726e"/><text x="130" y="82" fontFamily="Georgia,serif" fontSize="5.5" fill="#68726e">Ṭāʾif</text>
      <circle cx="66" cy="35" r="2" fill="#68726e"/><text x="70" y="39" fontFamily="Georgia,serif" fontSize="5.5" fill="#68726e">Tabuk</text>
      <circle cx="86" cy="70" r="2" fill="#68726e"/><text x="90" y="68" fontFamily="Georgia,serif" fontSize="5.5" fill="#68726e">Badr</text>
      <circle cx="104" cy="84" r="7" fill="#b88a32" opacity="0.2"/>
      <circle cx="104" cy="84" r="4.5" fill="#b88a32"/>
      <circle cx="104" cy="84" r="1.8" fill="#f7f3ec"/>
      <text x="104" y="97" fontFamily="Georgia,serif" fontSize="7.5" fontWeight="bold" fill="#12332f" textAnchor="middle">Makkah</text>
      <text x="296" y="19" fontFamily="Georgia,serif" fontSize="8" fill="#68726e" textAnchor="middle">N</text>
      <line x1="296" y1="21" x2="296" y2="33" stroke="#68726e" strokeWidth="1.2"/>
      <polygon points="296,21 293,28 296,26 299,28" fill="#68726e"/>
      <line x1="232" y1="153" x2="282" y2="153" stroke="#68726e" strokeWidth="0.8"/>
      <text x="257" y="158" fontFamily="Georgia,serif" fontSize="5" fill="#68726e" textAnchor="middle">~500 km</text>
    </svg>
  ),

  /* ── Makkah Region — Cave of Ḥirāʾ ───────────────────────────────────────── */
  hira: (
    <svg viewBox="0 0 320 150" className="bd-map-svg" aria-hidden="true">
      <rect width="320" height="150" fill="#f0ebe0"/>
      <ellipse cx="190" cy="80" rx="140" ry="55" fill="#e2d8c4" opacity="0.45"/>
      <path d="M130,46 L158,18 L186,44 L180,54 L136,54 Z" fill="#c8c0a8" stroke="#b0a888" strokeWidth="0.8"/>
      <text x="158" y="14" fontFamily="Georgia,serif" fontSize="6" fill="#68726e" textAnchor="middle">Jabal al-Nūr</text>
      <circle cx="174" cy="37" r="6.5" fill="#b88a32" opacity="0.2"/>
      <circle cx="174" cy="37" r="4" fill="#b88a32"/>
      <circle cx="174" cy="37" r="1.5" fill="#f7f3ec"/>
      <text x="192" y="33" fontFamily="Georgia,serif" fontSize="7.5" fontWeight="bold" fill="#12332f">Cave of Ḥirāʾ</text>
      <text x="192" y="43" fontFamily="Georgia,serif" fontSize="5.5" fill="#68726e">First revelation · 610 CE</text>
      <line x1="160" y1="54" x2="158" y2="78" stroke="#68726e" strokeWidth="0.8" strokeDasharray="3 2" opacity="0.5"/>
      <circle cx="158" cy="82" r="4.5" fill="#12332f"/>
      <circle cx="158" cy="82" r="1.8" fill="#b88a32"/>
      <text x="158" y="94" fontFamily="Georgia,serif" fontSize="7" fill="#12332f" textAnchor="middle">Makkah</text>
      <text x="158" y="102" fontFamily="Georgia,serif" fontSize="5.5" fill="#68726e" textAnchor="middle">Kaʿbah · City centre</text>
      <path d="M112,118 L138,98 L162,116 L157,126 L117,126 Z" fill="#c8c0a8" stroke="#b0a888" strokeWidth="0.8" opacity="0.7"/>
      <text x="136" y="95" fontFamily="Georgia,serif" fontSize="5.5" fill="#68726e" textAnchor="middle">Jabal Thawr</text>
      <circle cx="210" cy="80" r="2.5" fill="#68726e"/><text x="215" y="84" fontFamily="Georgia,serif" fontSize="6" fill="#68726e">Minā</text>
      <circle cx="272" cy="94" r="2.5" fill="#68726e"/><text x="270" y="106" fontFamily="Georgia,serif" fontSize="5.5" fill="#68726e" textAnchor="middle">ʿArafah</text>
      <line x1="14" y1="140" x2="54" y2="140" stroke="#68726e" strokeWidth="0.8"/>
      <text x="34" y="146" fontFamily="Georgia,serif" fontSize="5" fill="#68726e" textAnchor="middle">~10 km</text>
      <text x="296" y="17" fontFamily="Georgia,serif" fontSize="8" fill="#68726e" textAnchor="middle">N</text>
      <line x1="296" y1="19" x2="296" y2="31" stroke="#68726e" strokeWidth="1.2"/>
      <polygon points="296,19 293,26 296,24 299,26" fill="#68726e"/>
    </svg>
  ),

  /* ── Arabia Overview — Al-Abwāʾ on coastal road ──────────────────────────── */
  abwaa: (
    <svg viewBox="0 0 320 160" className="bd-map-svg" aria-hidden="true">
      <rect width="320" height="160" fill="#d4e8e5"/>
      <path d="M42,22 L35,40 L28,62 L30,84 L40,106 L52,126 L66,144 L98,152 L142,148 L188,138 L228,114 L248,90 L252,64 L246,42 L234,28 L210,18 L170,12 L118,12 L76,16 Z" fill="#ede8d0" stroke="#c0b090" strokeWidth="1"/>
      <text x="14" y="86" fontFamily="Georgia,serif" fontSize="5.5" fill="#7aa8a5" transform="rotate(-82,14,86)">Red Sea</text>
      <path d="M104,84 Q96,80 92,74 Q88,68 100,62" stroke="#b88a32" strokeWidth="1.2" strokeDasharray="5 3" fill="none" opacity="0.7"/>
      <circle cx="104" cy="84" r="3.5" fill="#12332f"/>
      <text x="110" y="88" fontFamily="Georgia,serif" fontSize="6.5" fill="#12332f">Makkah</text>
      <circle cx="100" cy="62" r="3.5" fill="#12332f"/>
      <text x="106" y="60" fontFamily="Georgia,serif" fontSize="6.5" fill="#12332f">Madīnah</text>
      <circle cx="92" cy="74" r="7" fill="#b88a32" opacity="0.2"/>
      <circle cx="92" cy="74" r="4.5" fill="#b88a32"/>
      <circle cx="92" cy="74" r="1.8" fill="#f7f3ec"/>
      <text x="79" y="68" fontFamily="Georgia,serif" fontSize="7.5" fontWeight="bold" fill="#12332f" textAnchor="middle">Al-Abwāʾ</text>
      <text x="79" y="78" fontFamily="Georgia,serif" fontSize="5.5" fill="#68726e" textAnchor="middle">Āminah's resting place</text>
      <text x="296" y="19" fontFamily="Georgia,serif" fontSize="8" fill="#68726e" textAnchor="middle">N</text>
      <line x1="296" y1="21" x2="296" y2="33" stroke="#68726e" strokeWidth="1.2"/>
      <polygon points="296,21 293,28 296,26 299,28" fill="#68726e"/>
      <line x1="232" y1="153" x2="282" y2="153" stroke="#68726e" strokeWidth="0.8"/>
      <text x="257" y="158" fontFamily="Georgia,serif" fontSize="5" fill="#68726e" textAnchor="middle">~500 km</text>
    </svg>
  ),

  /* ── Arabia Overview — Ṭāʾif ──────────────────────────────────────────────── */
  taif: (
    <svg viewBox="0 0 320 160" className="bd-map-svg" aria-hidden="true">
      <rect width="320" height="160" fill="#d4e8e5"/>
      <path d="M42,22 L35,40 L28,62 L30,84 L40,106 L52,126 L66,144 L98,152 L142,148 L188,138 L228,114 L248,90 L252,64 L246,42 L234,28 L210,18 L170,12 L118,12 L76,16 Z" fill="#ede8d0" stroke="#c0b090" strokeWidth="1"/>
      <text x="14" y="86" fontFamily="Georgia,serif" fontSize="5.5" fill="#7aa8a5" transform="rotate(-82,14,86)">Red Sea</text>
      <path d="M113,86 L124,72 L135,84 Z" fill="#c8c0a8" opacity="0.65"/>
      <line x1="108" y1="84" x2="122" y2="84" stroke="#68726e" strokeWidth="0.8" strokeDasharray="3 2" opacity="0.5"/>
      <text x="114" y="80" fontFamily="Georgia,serif" fontSize="5" fill="#68726e" textAnchor="middle">~80 km</text>
      <circle cx="104" cy="84" r="3.5" fill="#12332f"/>
      <text x="98" y="92" fontFamily="Georgia,serif" fontSize="6.5" fill="#12332f" textAnchor="middle">Makkah</text>
      <circle cx="100" cy="62" r="2.5" fill="#68726e"/>
      <text x="106" y="60" fontFamily="Georgia,serif" fontSize="6" fill="#68726e">Madīnah</text>
      <circle cx="126" cy="84" r="7" fill="#b88a32" opacity="0.2"/>
      <circle cx="126" cy="84" r="4.5" fill="#b88a32"/>
      <circle cx="126" cy="84" r="1.8" fill="#f7f3ec"/>
      <text x="126" y="97" fontFamily="Georgia,serif" fontSize="7.5" fontWeight="bold" fill="#12332f" textAnchor="middle">Ṭāʾif</text>
      <text x="126" y="106" fontFamily="Georgia,serif" fontSize="5.5" fill="#68726e" textAnchor="middle">Ḥijāz highlands</text>
      <text x="296" y="19" fontFamily="Georgia,serif" fontSize="8" fill="#68726e" textAnchor="middle">N</text>
      <line x1="296" y1="21" x2="296" y2="33" stroke="#68726e" strokeWidth="1.2"/>
      <polygon points="296,21 293,28 296,26 299,28" fill="#68726e"/>
      <line x1="232" y1="153" x2="282" y2="153" stroke="#68726e" strokeWidth="0.8"/>
      <text x="257" y="158" fontFamily="Georgia,serif" fontSize="5" fill="#68726e" textAnchor="middle">~500 km</text>
    </svg>
  ),

  /* ── Cross-Sea — Abyssinia (Ḥabashā) ─────────────────────────────────────── */
  abyssinia: (
    <svg viewBox="0 0 320 160" className="bd-map-svg" aria-hidden="true">
      <rect width="320" height="160" fill="#d4e8e5"/>
      <path d="M10,10 L16,32 L14,58 L18,84 L22,108 L28,130 L38,150 L52,157 L64,150 L70,126 L66,100 L60,74 L56,48 L58,24 L50,10 Z" fill="#ede8d0" stroke="#c0b090" strokeWidth="1"/>
      <path d="M108,10 L116,32 L114,58 L112,84 L113,108 L118,128 L126,150 L320,152 L320,10 Z" fill="#ede8d0" stroke="#c0b090" strokeWidth="1"/>
      <text x="36" y="82" fontFamily="Georgia,serif" fontSize="7" fill="#12332f" textAnchor="middle">Africa</text>
      <text x="36" y="92" fontFamily="Georgia,serif" fontSize="5.5" fill="#68726e" textAnchor="middle">(East)</text>
      <text x="86" y="72" fontFamily="Georgia,serif" fontSize="6" fill="#7aa8a5" textAnchor="middle" transform="rotate(-80,86,72)">Red Sea</text>
      <text x="210" y="46" fontFamily="Georgia,serif" fontSize="6.5" fill="#68726e" textAnchor="middle">Arabian Peninsula</text>
      <circle cx="40" cy="68" r="7.5" fill="#b88a32" opacity="0.2"/>
      <circle cx="40" cy="68" r="5" fill="#b88a32"/>
      <circle cx="40" cy="68" r="2" fill="#f7f3ec"/>
      <text x="40" y="52" fontFamily="Georgia,serif" fontSize="7.5" fontWeight="bold" fill="#12332f" textAnchor="middle">Abyssinia</text>
      <text x="40" y="42" fontFamily="Georgia,serif" fontSize="5.5" fill="#68726e" textAnchor="middle">Ḥabashā · modern Ethiopia</text>
      <circle cx="148" cy="96" r="3" fill="#12332f"/>
      <text x="156" y="94" fontFamily="Georgia,serif" fontSize="6" fill="#12332f">Makkah</text>
      <path d="M52,74 Q68,60 90,68 Q106,74 130,84 Q140,88 145,94" stroke="#b88a32" strokeWidth="1.2" strokeDasharray="5 3" fill="none"/>
      <polygon points="145,90 150,96 142,97" fill="#b88a32"/>
      <text x="90" y="55" fontFamily="Georgia,serif" fontSize="5.5" fill="#b88a32" textAnchor="middle">Sea crossing</text>
      <text x="296" y="19" fontFamily="Georgia,serif" fontSize="8" fill="#68726e" textAnchor="middle">N</text>
      <line x1="296" y1="21" x2="296" y2="33" stroke="#68726e" strokeWidth="1.2"/>
      <polygon points="296,21 293,28 296,26 299,28" fill="#68726e"/>
    </svg>
  ),

  /* ── Arabia Overview — Hijrah Route ───────────────────────────────────────── */
  hijrah: (
    <svg viewBox="0 0 320 160" className="bd-map-svg" aria-hidden="true">
      <rect width="320" height="160" fill="#d4e8e5"/>
      <path d="M42,22 L35,40 L28,62 L30,84 L40,106 L52,126 L66,144 L98,152 L142,148 L188,138 L228,114 L248,90 L252,64 L246,42 L234,28 L210,18 L170,12 L118,12 L76,16 Z" fill="#ede8d0" stroke="#c0b090" strokeWidth="1"/>
      <text x="14" y="86" fontFamily="Georgia,serif" fontSize="5.5" fill="#7aa8a5" transform="rotate(-82,14,86)">Red Sea</text>
      <path d="M104,84 Q103,91 98,90 Q90,88 82,78 Q76,68 82,64 Q90,60 100,62" stroke="#b88a32" strokeWidth="1.5" strokeDasharray="6 3" fill="none"/>
      <polygon points="99,58 103,64 96,64" fill="#b88a32"/>
      <text x="65" y="78" fontFamily="Georgia,serif" fontSize="5.5" fill="#b88a32" textAnchor="middle">Hijrah Route</text>
      <text x="65" y="85" fontFamily="Georgia,serif" fontSize="5" fill="#68726e" textAnchor="middle">622 CE</text>
      <circle cx="102" cy="90" r="2.5" fill="#68726e"/>
      <text x="108" y="95" fontFamily="Georgia,serif" fontSize="5.5" fill="#68726e">Cave of Thawr</text>
      <circle cx="104" cy="84" r="4.5" fill="#12332f"/>
      <circle cx="104" cy="84" r="1.8" fill="#b88a32"/>
      <text x="104" y="97" fontFamily="Georgia,serif" fontSize="7" fill="#12332f" textAnchor="middle">Makkah</text>
      <circle cx="100" cy="62" r="7" fill="#b88a32" opacity="0.2"/>
      <circle cx="100" cy="62" r="4.5" fill="#b88a32"/>
      <circle cx="100" cy="62" r="1.8" fill="#f7f3ec"/>
      <text x="100" y="52" fontFamily="Georgia,serif" fontSize="7.5" fontWeight="bold" fill="#12332f" textAnchor="middle">Madīnah</text>
      <text x="296" y="19" fontFamily="Georgia,serif" fontSize="8" fill="#68726e" textAnchor="middle">N</text>
      <line x1="296" y1="21" x2="296" y2="33" stroke="#68726e" strokeWidth="1.2"/>
      <polygon points="296,21 293,28 296,26 299,28" fill="#68726e"/>
      <line x1="232" y1="153" x2="282" y2="153" stroke="#68726e" strokeWidth="0.8"/>
      <text x="257" y="158" fontFamily="Georgia,serif" fontSize="5" fill="#68726e" textAnchor="middle">~500 km</text>
    </svg>
  ),

  /* ── Madinah Region — Al-Madīnah ──────────────────────────────────────────── */
  madinah: (
    <svg viewBox="0 0 320 150" className="bd-map-svg" aria-hidden="true">
      <rect width="320" height="150" fill="#f0ebe0"/>
      <ellipse cx="190" cy="85" rx="138" ry="50" fill="#e2d8c4" opacity="0.4"/>
      <path d="M92,30 L122,14 L175,12 L214,16 L234,30 L226,40 L100,40 Z" fill="#c8c0a8" stroke="#b0a888" strokeWidth="0.8"/>
      <text x="164" y="9" fontFamily="Georgia,serif" fontSize="6" fill="#68726e" textAnchor="middle">Jabal Uḥud (north)</text>
      <rect x="80" y="55" width="32" height="5" rx="1.5" fill="#68726e" opacity="0.4"/>
      <text x="96" y="50" fontFamily="Georgia,serif" fontSize="5.5" fill="#68726e" textAnchor="middle">Trench site (NW)</text>
      <circle cx="158" cy="90" r="8.5" fill="#b88a32" opacity="0.18"/>
      <circle cx="158" cy="90" r="5.5" fill="#b88a32"/>
      <circle cx="158" cy="90" r="2.2" fill="#f7f3ec"/>
      <text x="158" y="103" fontFamily="Georgia,serif" fontSize="7.5" fontWeight="bold" fill="#12332f" textAnchor="middle">Al-Madīnah</text>
      <text x="158" y="112" fontFamily="Georgia,serif" fontSize="5.5" fill="#68726e" textAnchor="middle">Masjid al-Nabawī</text>
      <circle cx="150" cy="122" r="2.5" fill="#68726e"/>
      <text x="156" y="126" fontFamily="Georgia,serif" fontSize="6" fill="#68726e">Masjid Qubāʾ</text>
      <line x1="14" y1="140" x2="54" y2="140" stroke="#68726e" strokeWidth="0.8"/>
      <text x="34" y="146" fontFamily="Georgia,serif" fontSize="5" fill="#68726e" textAnchor="middle">~10 km</text>
      <text x="296" y="17" fontFamily="Georgia,serif" fontSize="8" fill="#68726e" textAnchor="middle">N</text>
      <line x1="296" y1="19" x2="296" y2="31" stroke="#68726e" strokeWidth="1.2"/>
      <polygon points="296,19 293,26 296,24 299,26" fill="#68726e"/>
    </svg>
  ),

  /* ── Arabia Overview — Battle of Badr ────────────────────────────────────── */
  badr: (
    <svg viewBox="0 0 320 160" className="bd-map-svg" aria-hidden="true">
      <rect width="320" height="160" fill="#d4e8e5"/>
      <path d="M42,22 L35,40 L28,62 L30,84 L40,106 L52,126 L66,144 L98,152 L142,148 L188,138 L228,114 L248,90 L252,64 L246,42 L234,28 L210,18 L170,12 L118,12 L76,16 Z" fill="#ede8d0" stroke="#c0b090" strokeWidth="1"/>
      <text x="14" y="86" fontFamily="Georgia,serif" fontSize="5.5" fill="#7aa8a5" transform="rotate(-82,14,86)">Red Sea</text>
      <path d="M72,40 Q66,55 70,72 Q74,88 80,102" stroke="#68726e" strokeWidth="0.8" strokeDasharray="3 2" fill="none" opacity="0.35"/>
      <text x="54" y="70" fontFamily="Georgia,serif" fontSize="5" fill="#68726e" textAnchor="middle">Coastal trade route</text>
      <circle cx="104" cy="84" r="3" fill="#12332f"/>
      <text x="110" y="82" fontFamily="Georgia,serif" fontSize="6" fill="#12332f">Makkah</text>
      <circle cx="100" cy="62" r="3" fill="#12332f"/>
      <text x="106" y="60" fontFamily="Georgia,serif" fontSize="6" fill="#12332f">Madīnah</text>
      <circle cx="86" cy="70" r="7.5" fill="#b88a32" opacity="0.2"/>
      <circle cx="86" cy="70" r="5" fill="#b88a32"/>
      <circle cx="86" cy="70" r="2" fill="#f7f3ec"/>
      <text x="86" y="59" fontFamily="Georgia,serif" fontSize="7.5" fontWeight="bold" fill="#12332f" textAnchor="middle">Badr</text>
      <text x="86" y="50" fontFamily="Georgia,serif" fontSize="5.5" fill="#68726e" textAnchor="middle">Wells of Badr</text>
      <text x="296" y="19" fontFamily="Georgia,serif" fontSize="8" fill="#68726e" textAnchor="middle">N</text>
      <line x1="296" y1="21" x2="296" y2="33" stroke="#68726e" strokeWidth="1.2"/>
      <polygon points="296,21 293,28 296,26 299,28" fill="#68726e"/>
      <line x1="232" y1="153" x2="282" y2="153" stroke="#68726e" strokeWidth="0.8"/>
      <text x="257" y="158" fontFamily="Georgia,serif" fontSize="5" fill="#68726e" textAnchor="middle">~500 km</text>
    </svg>
  ),

  /* ── Madinah Region — Jabal Uḥud ──────────────────────────────────────────── */
  uhud: (
    <svg viewBox="0 0 320 150" className="bd-map-svg" aria-hidden="true">
      <rect width="320" height="150" fill="#f0ebe0"/>
      <ellipse cx="190" cy="90" rx="135" ry="48" fill="#e2d8c4" opacity="0.4"/>
      <path d="M76,46 L110,20 L162,14 L215,18 L248,42 L240,54 L88,54 Z" fill="#c0b898" stroke="#b0a888" strokeWidth="1"/>
      <path d="M88,54 L110,32 L162,24 L210,28 L240,54" stroke="#b88a32" strokeWidth="1.5" fill="none"/>
      <circle cx="164" cy="32" r="6.5" fill="#b88a32" opacity="0.22"/>
      <circle cx="164" cy="32" r="4.5" fill="#b88a32"/>
      <circle cx="164" cy="32" r="1.8" fill="#f7f3ec"/>
      <text x="164" y="12" fontFamily="Georgia,serif" fontSize="7.5" fontWeight="bold" fill="#12332f" textAnchor="middle">Jabal Uḥud</text>
      <circle cx="116" cy="70" r="2.5" fill="#68726e"/>
      <text x="122" y="74" fontFamily="Georgia,serif" fontSize="5.5" fill="#68726e">Archers' Hill</text>
      <text x="168" y="72" fontFamily="Georgia,serif" fontSize="6" fill="#68726e" textAnchor="middle">Plain of Uḥud</text>
      <line x1="164" y1="57" x2="162" y2="90" stroke="#68726e" strokeWidth="0.8" strokeDasharray="3 2" opacity="0.5"/>
      <circle cx="162" cy="96" r="4.5" fill="#12332f"/>
      <circle cx="162" cy="96" r="1.8" fill="#b88a32"/>
      <text x="162" y="109" fontFamily="Georgia,serif" fontSize="7" fill="#12332f" textAnchor="middle">Al-Madīnah</text>
      <text x="162" y="117" fontFamily="Georgia,serif" fontSize="5.5" fill="#68726e" textAnchor="middle">~5 km south</text>
      <line x1="14" y1="140" x2="54" y2="140" stroke="#68726e" strokeWidth="0.8"/>
      <text x="34" y="146" fontFamily="Georgia,serif" fontSize="5" fill="#68726e" textAnchor="middle">~5 km</text>
      <text x="296" y="17" fontFamily="Georgia,serif" fontSize="8" fill="#68726e" textAnchor="middle">N</text>
      <line x1="296" y1="19" x2="296" y2="31" stroke="#68726e" strokeWidth="1.2"/>
      <polygon points="296,19 293,26 296,24 299,26" fill="#68726e"/>
    </svg>
  ),

  /* ── Madinah Region — The Trench (Khandaq) ────────────────────────────────── */
  khandaq: (
    <svg viewBox="0 0 320 150" className="bd-map-svg" aria-hidden="true">
      <rect width="320" height="150" fill="#f0ebe0"/>
      <ellipse cx="185" cy="88" rx="138" ry="50" fill="#e2d8c4" opacity="0.4"/>
      <path d="M86,26 L118,12 L174,10 L214,14 L232,26 L224,34 L94,34 Z" fill="#c8c0a8" stroke="#b0a888" strokeWidth="0.8" opacity="0.6"/>
      <text x="158" y="8" fontFamily="Georgia,serif" fontSize="5.5" fill="#68726e" textAnchor="middle">Jabal Uḥud (north)</text>
      <text x="248" y="47" fontFamily="Georgia,serif" fontSize="5.5" fill="#68726e" textAnchor="middle">Coalition</text>
      <text x="248" y="55" fontFamily="Georgia,serif" fontSize="5.5" fill="#68726e" textAnchor="middle">forces ↓</text>
      <rect x="68" y="52" width="134" height="7" rx="2" fill="#b88a32" opacity="0.35"/>
      <rect x="68" y="52" width="134" height="7" rx="2" fill="none" stroke="#b88a32" strokeWidth="1.4"/>
      <text x="135" y="46" fontFamily="Georgia,serif" fontSize="7.5" fontWeight="bold" fill="#12332f" textAnchor="middle">The Trench (Khandaq)</text>
      <text x="135" y="38" fontFamily="Georgia,serif" fontSize="5.5" fill="#68726e" textAnchor="middle">Dug in 6 days · ~5.5 km long</text>
      <circle cx="158" cy="98" r="5" fill="#12332f"/>
      <circle cx="158" cy="98" r="2" fill="#b88a32"/>
      <text x="158" y="111" fontFamily="Georgia,serif" fontSize="7" fill="#12332f" textAnchor="middle">Al-Madīnah</text>
      <text x="158" y="119" fontFamily="Georgia,serif" fontSize="5.5" fill="#68726e" textAnchor="middle">defended by the trench</text>
      <circle cx="150" cy="128" r="2" fill="#68726e"/>
      <text x="156" y="132" fontFamily="Georgia,serif" fontSize="5.5" fill="#68726e">Qubāʾ</text>
      <line x1="14" y1="140" x2="54" y2="140" stroke="#68726e" strokeWidth="0.8"/>
      <text x="34" y="146" fontFamily="Georgia,serif" fontSize="5" fill="#68726e" textAnchor="middle">~5 km</text>
      <text x="296" y="17" fontFamily="Georgia,serif" fontSize="8" fill="#68726e" textAnchor="middle">N</text>
      <line x1="296" y1="19" x2="296" y2="31" stroke="#68726e" strokeWidth="1.2"/>
      <polygon points="296,19 293,26 296,24 299,26" fill="#68726e"/>
    </svg>
  ),

  /* ── Arabia Overview — Ḥudaybiyyah ───────────────────────────────────────── */
  hudaybiyyah: (
    <svg viewBox="0 0 320 160" className="bd-map-svg" aria-hidden="true">
      <rect width="320" height="160" fill="#d4e8e5"/>
      <path d="M42,22 L35,40 L28,62 L30,84 L40,106 L52,126 L66,144 L98,152 L142,148 L188,138 L228,114 L248,90 L252,64 L246,42 L234,28 L210,18 L170,12 L118,12 L76,16 Z" fill="#ede8d0" stroke="#c0b090" strokeWidth="1"/>
      <text x="14" y="86" fontFamily="Georgia,serif" fontSize="5.5" fill="#7aa8a5" transform="rotate(-82,14,86)">Red Sea</text>
      <circle cx="100" cy="62" r="3" fill="#12332f"/>
      <text x="106" y="60" fontFamily="Georgia,serif" fontSize="6" fill="#12332f">Madīnah</text>
      <path d="M100,65 Q101,71 100,75" stroke="#68726e" strokeWidth="0.8" strokeDasharray="3 2" fill="none" opacity="0.5"/>
      <circle cx="104" cy="84" r="3.5" fill="#12332f"/>
      <text x="110" y="88" fontFamily="Georgia,serif" fontSize="6" fill="#12332f">Makkah</text>
      <circle cx="98" cy="78" r="7" fill="#b88a32" opacity="0.2"/>
      <circle cx="98" cy="78" r="4.5" fill="#b88a32"/>
      <circle cx="98" cy="78" r="1.8" fill="#f7f3ec"/>
      <text x="82" y="73" fontFamily="Georgia,serif" fontSize="7.5" fontWeight="bold" fill="#12332f" textAnchor="middle">Ḥudaybiyyah</text>
      <text x="82" y="63" fontFamily="Georgia,serif" fontSize="5.5" fill="#68726e" textAnchor="middle">~22 km NW of Makkah</text>
      <rect x="148" y="54" width="68" height="22" rx="3" fill="#f7f3ec" stroke="#b88a32" strokeWidth="1"/>
      <text x="182" y="65" fontFamily="Georgia,serif" fontSize="5.5" fill="#b88a32" textAnchor="middle">Treaty of Ḥudaybiyyah</text>
      <text x="182" y="72" fontFamily="Georgia,serif" fontSize="5" fill="#68726e" textAnchor="middle">6 AH · 628 CE</text>
      <text x="296" y="19" fontFamily="Georgia,serif" fontSize="8" fill="#68726e" textAnchor="middle">N</text>
      <line x1="296" y1="21" x2="296" y2="33" stroke="#68726e" strokeWidth="1.2"/>
      <polygon points="296,21 293,28 296,26 299,28" fill="#68726e"/>
      <line x1="232" y1="153" x2="282" y2="153" stroke="#68726e" strokeWidth="0.8"/>
      <text x="257" y="158" fontFamily="Georgia,serif" fontSize="5" fill="#68726e" textAnchor="middle">~500 km</text>
    </svg>
  ),

  /* ── Arabia Overview — Conquest of Makkah ────────────────────────────────── */
  conquest: (
    <svg viewBox="0 0 320 160" className="bd-map-svg" aria-hidden="true">
      <rect width="320" height="160" fill="#d4e8e5"/>
      <path d="M42,22 L35,40 L28,62 L30,84 L40,106 L52,126 L66,144 L98,152 L142,148 L188,138 L228,114 L248,90 L252,64 L246,42 L234,28 L210,18 L170,12 L118,12 L76,16 Z" fill="#ede8d0" stroke="#c0b090" strokeWidth="1"/>
      <text x="14" y="86" fontFamily="Georgia,serif" fontSize="5.5" fill="#7aa8a5" transform="rotate(-82,14,86)">Red Sea</text>
      <path d="M100,65 Q102,73 104,80" stroke="#b88a32" strokeWidth="1.6" strokeDasharray="6 3" fill="none"/>
      <polygon points="101,80 107,83 104,88" fill="#b88a32"/>
      <circle cx="100" cy="62" r="4.5" fill="#12332f"/>
      <circle cx="100" cy="62" r="1.8" fill="#b88a32"/>
      <text x="100" y="53" fontFamily="Georgia,serif" fontSize="6.5" fill="#12332f" textAnchor="middle">Madīnah</text>
      <text x="100" y="45" fontFamily="Georgia,serif" fontSize="5" fill="#68726e" textAnchor="middle">10,000 set out</text>
      <circle cx="104" cy="84" r="7.5" fill="#b88a32" opacity="0.2"/>
      <circle cx="104" cy="84" r="5.5" fill="#b88a32"/>
      <circle cx="104" cy="84" r="2.2" fill="#f7f3ec"/>
      <text x="104" y="98" fontFamily="Georgia,serif" fontSize="7.5" fontWeight="bold" fill="#12332f" textAnchor="middle">Makkah</text>
      <text x="104" y="107" fontFamily="Georgia,serif" fontSize="5.5" fill="#68726e" textAnchor="middle">Conquered · 8 AH · 630 CE</text>
      <circle cx="66" cy="35" r="2" fill="#68726e"/>
      <text x="70" y="39" fontFamily="Georgia,serif" fontSize="5.5" fill="#68726e">Tabuk</text>
      <circle cx="97" cy="52" r="2" fill="#68726e"/>
      <text x="103" y="50" fontFamily="Georgia,serif" fontSize="5.5" fill="#68726e">Khaybar</text>
      <text x="296" y="19" fontFamily="Georgia,serif" fontSize="8" fill="#68726e" textAnchor="middle">N</text>
      <line x1="296" y1="21" x2="296" y2="33" stroke="#68726e" strokeWidth="1.2"/>
      <polygon points="296,21 293,28 296,26 299,28" fill="#68726e"/>
      <line x1="232" y1="153" x2="282" y2="153" stroke="#68726e" strokeWidth="0.8"/>
      <text x="257" y="158" fontFamily="Georgia,serif" fontSize="5" fill="#68726e" textAnchor="middle">~500 km</text>
    </svg>
  ),

};


const BOOK_MAPS: Record<string, MapEntry[]> = {
  "sirah-prophet-001": [
    {
      id: "makkah",
      title: "Makkah al-Mukarramah",
      subtitle: "Birthplace of the Prophet ﷺ",
      country: "Saudi Arabia",
      importance: "The sacred city where the Prophet ﷺ was born, received the first revelation, and completed his Farewell Pilgrimage. The most honoured city on earth.",
      lesson: "Key location in the early Sīrah",
      svgType: "kaabah",
      exploreFurther: [
        "The Kaʿbah was built by Ibrāhīm ﷺ and his son Ismāʿīl ﷺ",
        "Makkah is located in the Ḥijāz region of modern Saudi Arabia",
        "The Masjid al-Ḥarām surrounds the Kaʿbah — the most visited site on earth",
        "The Prophet ﷺ was born in the Year of the Elephant (~570 CE)",
      ],
    },
    {
      id: "cave-hira",
      title: "Cave of Ḥirāʾ",
      subtitle: "Where the first revelation descended",
      country: "Saudi Arabia",
      importance: "On Jabal al-Nūr, this mountain cave is where Jibrīl ʿalayhi us-salām first appeared and brought the words of the Qurʾān to the Prophet ﷺ.",
      lesson: "First Revelation — Coming Soon",
      svgType: "hira",
      exploreFurther: [
        "Jabal al-Nūr (Mountain of Light) stands ~640 m above Makkah",
        "The cave is approximately 3.7 m long and 1.6 m wide",
        "The Prophet ﷺ would spend nights there in seclusion (taḥannuth) before prophethood",
        "The first revealed word was iqraʾ — 'Read' (Sūrah al-ʿAlaq 96:1)",
      ],
    },
    {
      id: "al-abwaa",
      title: "Al-Abwāʾ",
      subtitle: "Where Āminah bint Wahb is buried",
      country: "Saudi Arabia",
      importance: "The town between Makkah and Madīnah where the Prophet's ﷺ beloved mother passed away. He was approximately six years old. Years later, he ﷺ visited her grave and wept.",
      lesson: "Where the Prophet's ﷺ mother is buried",
      svgType: "abwaa",
      exploreFurther: [
        "Al-Abwāʾ lies roughly halfway between Makkah and Madīnah",
        "Āminah bint Wahb passed away while returning from a visit to her husband's grave in Yathrib",
        "Books of Sīrah mention the Prophet ﷺ wept at her grave — showing the human depth of his grief",
        "After her death, his grandfather ʿAbd al-Muṭṭalib became his guardian",
      ],
    },
    {
      id: "taif",
      title: "Ṭāʾif",
      subtitle: "City of the rejection — and the unshaken Prophet ﷺ",
      country: "Saudi Arabia",
      importance: "The mountain city the Prophet ﷺ visited after the Year of Sorrow seeking support. He was driven out with stones — yet he ﷺ refused Jibrīl's offer to destroy them.",
      lesson: "Year of Sorrow — Coming Soon",
      svgType: "taif",
      exploreFurther: [
        "Ṭāʾif is a highland city ~80 km from Makkah, known for its cool climate and vineyards",
        "The Prophet ﷺ walked to Ṭāʾif — a journey of approximately 3 days on foot",
        "He ﷺ sought the support of the Thaqīf tribe, who mocked and expelled him",
        "The Angel Jibrīl offered to bring the mountains crashing — the Prophet ﷺ replied: 'Perhaps Allāh will bring from their descendants people who worship Him alone'",
      ],
    },
    {
      id: "abyssinia",
      title: "Abyssinia (Ḥabashā)",
      subtitle: "The first Hijrah — refuge under al-Najāshī",
      country: "Ethiopia",
      importance: "The Christian king al-Najāshī granted sanctuary to the early Muslims, refusing to hand them back to the Quraysh despite political pressure. He later accepted Islām.",
      lesson: "First Hijrah — Coming Soon",
      svgType: "abyssinia",
      exploreFurther: [
        "Modern-day Ethiopia and Eritrea correspond to the ancient Kingdom of Aksum",
        "Some historians record that over 80 men emigrated, along with women and children",
        "The famous speech of Jaʿfar ibn Abī Ṭālib ﷺ moved al-Najāshī to tears",
        "Al-Najāshī (Aṣḥamah) accepted Islām and the Prophet ﷺ later prayed his funeral prayer in absentia",
      ],
    },
    {
      id: "hijrah-route",
      title: "The Hijrah Route",
      subtitle: "Makkah → Cave of Thawr → Madīnah",
      country: "Saudi Arabia",
      importance: "The historic migration route taken by the Prophet ﷺ and Abū Bakr رضي الله عنه — a journey of faith that marks Year 1 of the Islamic calendar.",
      lesson: "The Hijrah — Coming Soon",
      svgType: "hijrah",
      exploreFurther: [
        "The Hijrah took place in 622 CE — Year 1 AH of the Islamic calendar",
        "The Prophet ﷺ and Abū Bakr hid in the Cave of Thawr for three nights before heading north",
        "Allāh sent a spider web and a dove's nest to conceal the cave entrance (books of Sīrah mention this)",
        "The journey covered roughly 450 km — mostly through desert terrain",
      ],
    },
    {
      id: "madinah",
      title: "Al-Madīnah al-Munawwarah",
      subtitle: "City of the Hijrah — the seat of the Islamic state",
      country: "Saudi Arabia",
      importance: "The radiant city that welcomed the Prophet ﷺ and became the seat of the first Islamic state. The Prophet ﷺ is buried here in the most honoured grave on earth.",
      lesson: "Madīnah Period — Coming Soon",
      svgType: "madinah",
      exploreFurther: [
        "Previously known as Yathrib — the Prophet ﷺ renamed it al-Madīnah al-Munawwarah",
        "The Prophet ﷺ built Masjid al-Nabawī here — his house and the mosque were one",
        "He ﷺ established the Constitution of Madīnah — a foundational political charter",
        "The Prophet ﷺ passed away here on 12 Rabīʿ al-Awwal, 11 AH (632 CE)",
      ],
    },
    {
      id: "badr",
      title: "The Battle of Badr",
      subtitle: "17 Ramaḍān, 2 AH — Furqān: The Decisive Day",
      country: "Saudi Arabia",
      importance: "The first major battle of Islām — 313 believers against 1,000. Allāh sent angels to assist. A decisive divine victory that Allāh called 'Yawm al-Furqān'.",
      lesson: "Battle of Badr — Coming Soon",
      svgType: "badr",
      exploreFurther: [
        "The wells of Badr are ~150 km southwest of Madīnah near the Red Sea trade route",
        "The Quraysh lost 70 men and 70 were captured; the Muslims lost 14 martyrs",
        "Allāh revealed: 'It was not you who slew them, but Allāh slew them' (Sūrah al-Anfāl 8:17)",
        "The battle was fought on 17 Ramaḍān, 2 AH (March 624 CE)",
      ],
    },
    {
      id: "uhud",
      title: "The Battle of Uḥud",
      subtitle: "3 AH — The Trial of the Archers",
      country: "Saudi Arabia",
      importance: "The second major battle — the archers abandoned their post and the tide turned. Seventy Companions were martyred. A profound lesson in obedience and trust in Allāh.",
      lesson: "Battle of Uḥud — Coming Soon",
      svgType: "uhud",
      exploreFurther: [
        "Jabal Uḥud is a mountain ~5 km north of the Prophet's Mosque in Madīnah",
        "The archers left their position in pursuit of spoils, against the Prophet's ﷺ direct order",
        "Sayyidunā Ḥamzah رضي الله عنه — the 'Lion of Allāh' — was martyred at Uḥud",
        "The Prophet ﷺ was wounded but said: 'How can a people who wound their Prophet succeed?'",
      ],
    },
    {
      id: "khandaq",
      title: "The Battle of al-Khandaq (The Trench)",
      subtitle: "5 AH — Coalition of 10,000 repelled",
      country: "Saudi Arabia",
      importance: "A coalition of 10,000 besieged Madīnah. On Salmān al-Fārisī's advice, the Prophet ﷺ ordered a trench dug — and Allāh sent a storm that scattered the enemy.",
      lesson: "The Trench — Coming Soon",
      svgType: "khandaq",
      exploreFurther: [
        "Salmān al-Fārisī رضي الله عنه — the Persian Companion — suggested the trench strategy, inspired by Persian military tactics",
        "The trench was approximately 5 km long and took six days to dig",
        "Allāh sent wind, cold, and disorder that forced the coalition to retreat (Sūrah al-Aḥzāb 33:9)",
        "The battle is also called 'Ghazwat al-Aḥzāb' — the Battle of the Confederates",
      ],
    },
    {
      id: "hudaybiyyah",
      title: "Al-Ḥudaybiyyah",
      subtitle: "6 AH — The Treaty that was a manifest victory",
      country: "Saudi Arabia",
      importance: "The Prophet ﷺ led 1,400 Companions for ʿUmrah but the Quraysh blocked the way. A treaty was signed — seemingly unfavourable — yet Allāh called it 'a manifest victory'.",
      lesson: "Treaty of Ḥudaybiyyah — Coming Soon",
      svgType: "hudaybiyyah",
      exploreFurther: [
        "Al-Ḥudaybiyyah is a village ~20 km from Makkah on the road from Madīnah",
        "The Companions gave the Bayʿat al-Riḍwān — the Pledge of the Tree — showing total trust",
        "The Treaty stipulated a 10-year ceasefire, return of Muslim emigrants to Quraysh, and pilgrimage the following year",
        "Allāh revealed: 'Verily We have granted you a manifest victory' (Sūrah al-Fatḥ 48:1)",
      ],
    },
    {
      id: "makkah-conquest",
      title: "Conquest of Makkah — al-Fatḥ al-Mubīn",
      subtitle: "20 Ramaḍān, 8 AH — The Great Victory",
      country: "Saudi Arabia",
      importance: "The Prophet ﷺ entered Makkah with 10,000 Companions. He ﷺ declared a general amnesty, destroyed the idols, and purified the Kaʿbah. The prophecy was fulfilled.",
      lesson: "The Conquest — Coming Soon",
      svgType: "conquest",
      exploreFurther: [
        "The conquest was largely bloodless — the Prophet ﷺ granted general amnesty (ʿafwun ʿāmm)",
        "360 idols were placed around the Kaʿbah — all were destroyed on the day of conquest",
        "The Prophet ﷺ entered on his camel, head bowed in humility, reciting Sūrah al-Fatḥ",
        "The Quraysh embraced Islām en masse — fulfilling decades of patience and sacrifice",
      ],
    },
  ],
  "sahabah-abu-bakr": [
    { id: "hijrah-route", title: "The Hijrah Route",        subtitle: "Makkah → Cave of Thawr → Madinah" },
    { id: "battle-badr",  title: "The Battle of Badr",      subtitle: "17 Ramaḍān 2 AH" },
    { id: "ridda-wars",   title: "The Ridda Wars",          subtitle: "Restoration of Islām across Arabia" },
    { id: "iraq-syria",   title: "Iraq & Syria Campaigns",  subtitle: "Conquest under Abū Bakr رضي الله عنه", coming: true },
  ],
  "sahabah-umar": [
    { id: "jerusalem",  title: "Al-Quds (Jerusalem)", subtitle: "Conquest under ʿUmar رضي الله عنه" },
    { id: "persia",     title: "Persia Campaign",     subtitle: "Battle of Qadisiyyah", coming: true },
    { id: "egypt",      title: "Egypt Campaign",      subtitle: "ʿAmr ibn al-ʿĀṣ رضي الله عنه", coming: true },
  ],
  "sahabah-khalid": [
    { id: "battle-walaja",   title: "Battle of al-Walaja",  subtitle: "Iraq Campaign" },
    { id: "battle-ullais",   title: "Battle of Ullais",     subtitle: "River of Blood" },
    { id: "battle-yarmuk",   title: "Battle of Yarmuk",     subtitle: "Syria — Decisive Victory", coming: true },
    { id: "battle-damascus", title: "Conquest of Damascus", subtitle: "Syria", coming: true },
  ],
};

function MapsTab({ bookId }: { bookId: string }) {
  const mapList = BOOK_MAPS[bookId];
  if (!mapList) {
    return (
      <section className="bd-tab-body bd-coming-panel" aria-label="Maps">
        <div className="bd-coming-icon" aria-hidden="true"><MapPin size={40} /></div>
        <h3 className="bd-coming-heading">Maps Coming Soon</h3>
        <p className="bd-coming-desc">Interactive maps for this book are being prepared.</p>
      </section>
    );
  }
  return (
    <section className="bd-tab-body" aria-label="Sīrah Geography">
      <p className="bd-section-intro">
        Key locations in this biography — their historical significance, modern geography, and connection to the lessons. <em>Sīrah Geography</em> helps you walk in the footsteps of the Prophet ﷺ.
      </p>
      <div className="bd-manuscript-divider" aria-hidden="true">◆</div>
      <div className="bd-map-grid">
        {mapList.map((m) => (
          <div key={m.id} className={`bd-map-card${m.coming ? " bd-map-card--soon" : ""}`}>
            {/* Illustrated SVG visual */}
            {m.svgType && MAP_VISUALS[m.svgType] && (
              <div className="bd-map-visual">
                {MAP_VISUALS[m.svgType]}
              </div>
            )}

            {/* Card header */}
            <div className="bd-map-card-header">
              <div className="bd-map-pin-wrap" aria-hidden="true">
                <MapPin size={15} />
              </div>
              <div className="bd-map-card-title-group">
                <h4 className="bd-map-card-title">{m.title}</h4>
                {m.country && <span className="bd-map-country-chip">{m.country}</span>}
              </div>
              {m.coming && <span className="bd-map-soon-badge">Soon</span>}
            </div>

            {/* Card body */}
            <p className="bd-map-card-subtitle">{m.subtitle}</p>
            {m.importance && <p className="bd-map-card-importance">{m.importance}</p>}
            {m.lesson && (
              <div className="bd-map-lesson-chip">
                <ScrollText size={11} aria-hidden="true" />
                {m.lesson}
              </div>
            )}

            {/* Explore Further */}
            {m.exploreFurther && m.exploreFurther.length > 0 && (
              <div className="bd-map-explore">
                <p className="bd-map-explore-label">Explore Further</p>
                <ul className="bd-map-explore-list">
                  {m.exploreFurther.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

// ── Timeline tab ──────────────────────────────────────────────────────────────

function TimelineTab({
  book,
  milestones,
}: {
  book: BookEntry;
  milestones?: MilestoneEntry[];
}) {
  if (!milestones || milestones.length === 0) {
    return (
      <section className="bd-tab-body bd-coming-panel" aria-label="Timeline">
        <div className="bd-coming-icon" aria-hidden="true"><Clock size={40} /></div>
        <h3 className="bd-coming-heading">Historical Timeline</h3>
        <p className="bd-coming-desc">
          A complete chronological timeline covering {book.title} is being prepared.
        </p>
      </section>
    );
  }

  return (
    <section className="bd-tab-body" aria-label="Historical Timeline">
      <p className="bd-section-intro">A complete chronological record of the life of Rasūlullāh ﷺ — from birth to the Day of Farewell.</p>
      <div className="bd-manuscript-divider" aria-hidden="true">◆</div>
      <div className="bd-timeline">
        {milestones.map((ms, i) => (
          <div
            key={i}
            className={`bd-milestone ${ms.highlight ? "bd-milestone--highlight" : ""}`}
          >
            {/* Connector line */}
            <div className="bd-milestone-track" aria-hidden="true">
              <div className="bd-milestone-dot" />
              {i < milestones.length - 1 && <div className="bd-milestone-line" />}
            </div>
            {/* Content */}
            <div className="bd-milestone-body">
              {/* Row 1: year pill + age pill + location */}
              <div className="bd-milestone-meta">
                <span className="bd-milestone-year">{ms.year}</span>
                {ms.age && <span className="bd-milestone-age">{ms.age}</span>}
                {ms.location && (
                  <span className="bd-milestone-location">
                    <MapPin size={9} aria-hidden="true" />
                    {ms.location}
                  </span>
                )}
              </div>
              {/* Row 2: event title */}
              <h4 className="bd-milestone-title">{ms.title}</h4>
              {/* Row 3: description */}
              <p className="bd-milestone-desc">{ms.description}</p>
              {/* Row 4: significance — gold italic, hairline above */}
              {ms.significance && (
                <p className="bd-milestone-significance">{ms.significance}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ── Profiles tab ──────────────────────────────────────────────────────────────

function ProfilesTab({ profiles }: { profiles: CharacterProfile[] }) {
  return (
    <section className="bd-tab-body" aria-label="Character Profiles">
      <p className="bd-section-intro">Key personalities in this biography — their roles, their connection to Rasūlullāh ﷺ, and their place in history.</p>
      <div className="bd-manuscript-divider" aria-hidden="true">◆</div>
      <div className="bd-profiles-grid">
        {profiles.map((p, i) => (
          <div key={i} className="bd-profile-card">
            {/* Arabic name band — hero header */}
            <div className="bd-profile-arabic-band">
              {p.arabicName
                ? <p className="bd-profile-arabic-name" dir="rtl" lang="ar">{p.arabicName}</p>
                : <p className="bd-profile-arabic-name bd-profile-arabic-name--fallback">{p.name}</p>}
              <p className="bd-profile-band-relation">{p.relationship}</p>
            </div>
            {/* Body */}
            <div className="bd-profile-body">
              <h4 className="bd-profile-name">{p.name}</h4>
              {p.status && (
                <p className="bd-profile-status-line">
                  <span className="bd-profile-appears-label">Status</span>
                  {p.status}
                </p>
              )}
              <div className="bd-manuscript-divider bd-manuscript-divider--sm" aria-hidden="true">◆</div>
              <p className="bd-profile-known">{p.knownFor}</p>
              {p.appearsIn && (
                <p className="bd-profile-appears-in">
                  <span className="bd-profile-appears-label">Appears In</span>
                  {p.appearsIn}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ── References tab ─────────────────────────────�
// ── References tab ────────────────────────────────────────────────────────────

const TIER_LABELS: Record<string, string> = {
  established: "Established Facts",
  accepted: "Widely Accepted Reports",
  discussed: "Reports Discussed by Scholars",
};

const TIER_MARKERS: Record<string, string> = {
  established: "✓",
  accepted: "◎",
  discussed: "⚠",
};

const REF_CATEGORY_LABELS: Record<string, string> = {
  quran: "Qurʾān",
  hadith: "Ḥadīth",
  sirah: "Sīrah Sources",
  historical: "Historical Works",
};

const REF_CATEGORY_ICONS: Record<string, string> = {
  quran:      "ق",
  hadith:     "ح",
  sirah:      "ك",
  historical: "ت",
};

function SourceReliabilitySection({ entries }: { entries: SourceReliabilityEntry[] }) {
  const tiers: SourceTier[] = ["established", "accepted", "discussed"];
  return (
    <div className="bd-reliability" aria-label="Source Reliability Summary">
      <h3 className="bd-ref-section-heading">Source Reliability Summary</h3>
      {tiers.map((tier) => {
        const tierEntries = entries.filter((e) => e.tier === tier);
        if (tierEntries.length === 0) return null;
        return (
          <div key={tier} className={`bd-reliability-tier bd-reliability-tier--${tier}`}>
            <div className="bd-reliability-tier-header">
              <span className="bd-reliability-marker" aria-hidden="true">
                {TIER_MARKERS[tier]}
              </span>
              <span className="bd-reliability-tier-label">{TIER_LABELS[tier]}</span>
            </div>
            <ul className="bd-reliability-list">
              {tierEntries.map((e, i) => (
                <li key={i} className="bd-reliability-item">{e.text}</li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}

function AuthNotesSection({ notes }: { notes: AuthNote[] }) {
  return (
    <div className="bd-auth-notes" aria-label="Authentication Notes">
      <h3 className="bd-ref-section-heading">Authentication Notes</h3>
      <ul className="bd-auth-list">
        {notes.map((n, i) => (
          <li key={i} className={`bd-auth-item bd-auth-item--${n.marker === "✓" ? "established" : n.marker === "◎" ? "accepted" : "discussed"}`}>
            <span className="bd-auth-marker" aria-hidden="true">{n.marker}</span>
            <span className="bd-auth-text">{n.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ReferencesSection({ refs }: { refs: ReferenceEntry[] }) {
  const categories = ["quran", "hadith", "sirah", "historical"] as const;
  return (
    <div className="bd-refs-list" aria-label="Reference list">
      {categories.map((cat) => {
        const catRefs = refs.filter((r) => r.category === cat);
        if (catRefs.length === 0) return null;
        return (
          <div key={cat} className="bd-ref-category">
            <h4 className="bd-ref-category-label">{REF_CATEGORY_LABELS[cat]}</h4>
            <div className="bd-ref-cards">
              {catRefs.map((r, i) => (
                <div key={i} className="bd-ref-card">
                  {/* Left: Arabic category icon */}
                  <div
                    className={`bd-ref-cat-icon bd-ref-cat-icon--${r.category}`}
                    aria-hidden="true"
                    lang="ar"
                    dir="rtl"
                  >
                    {REF_CATEGORY_ICONS[r.category]}
                  </div>
                  {/* Right: source details */}
                  <div className="bd-ref-card-body">
                    <div className="bd-ref-card-header">
                      <p className="bd-ref-title">{r.title}</p>
                      {r.reliabilityTier && (
                        <span className={`bd-ref-tier-badge bd-ref-tier-badge--${r.reliabilityTier}`}>
                          {TIER_MARKERS[r.reliabilityTier]}
                        </span>
                      )}
                    </div>
                    <p className="bd-ref-detail">{r.detail}</p>
                    {r.usedFor && (
                      <p className="bd-ref-used-for">
                        <span className="bd-ref-used-for-label">Used For</span>
                        {r.usedFor}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

function ReferencesTab({
  book,
  refs,
  sourceReliability,
  authNotes,
}: {
  book: BookEntry;
  refs?: ReferenceEntry[];
  sourceReliability?: SourceReliabilityEntry[];
  authNotes?: AuthNote[];
}) {
  const hasData = (refs && refs.length > 0) || (sourceReliability && sourceReliability.length > 0);

  if (!hasData) {
    return (
      <section className="bd-tab-body" aria-label="References">
        <div className="bd-ref-pending">
          <p className="bd-ref-pending-title">References Being Compiled</p>
          <p className="bd-ref-pending-body">
            References for {book.title} will be added once the content has been fully
            verified against its primary sources.
          </p>
          <p className="bd-ref-pending-note">
            All content in Our Legacy is compiled from the Qurʾān, Ṣaḥīḥ Aḥādīth,
            and established classical works of Islamic scholarship.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="bd-tab-body" aria-label="References">
      <p className="bd-section-intro">Primary sources, classical works, and scholarly authentication notes for this biography.</p>
      <div className="bd-manuscript-divider" aria-hidden="true">◆</div>
      {refs && refs.length > 0 && <ReferencesSection refs={refs} />}
      {sourceReliability && sourceReliability.length > 0 && (
        <>
          <div className="bd-manuscript-divider" aria-hidden="true">◆</div>
          <SourceReliabilitySection entries={sourceReliability} />
        </>
      )}
      {authNotes && authNotes.length > 0 && (
        <>
          <div className="bd-manuscript-divider" aria-hidden="true">◆</div>
          <AuthNotesSection notes={authNotes} />
        </>
      )}
    </section>
  );
}

// ── BookDetail ────────────────────────────────────────────────────────────────

type BookDetailProps = {
  book: BookEntry;
  onBack: () => void;
  onOpenChapter: (chapter: ChapterEntry) => void;
  onOpenMap: (mapId: string) => void;
};

export function BookDetail({ book, onBack, onOpenChapter, onOpenMap: _onOpenMap }: BookDetailProps) {
  const enrichment = useMemo(() => getBookEnrichment(book.id), [book.id]);
  const hasProfiles = Boolean(enrichment?.characterProfiles?.length);

  const [activeTab, setActiveTab] = useState<DetailTab>("chapters");
  const chapters = useMemo(() => getChaptersForBook(book.id), [book.id]);
  const hasChapters = chapters.length > 0;

  return (
    <div className="book-detail">
      <button className="bd-back" onClick={onBack} type="button" aria-label="Back to library">
        <ChevronLeft size={18} aria-hidden="true" />
        Library
      </button>

      <CoverHero book={book} />

      <div className="bd-description">
        <p>{book.description}</p>
            {!hasChapters && book.status !== "available" && (
          <div className="bd-coming-soon-note">
            <p className="bd-coming-soon-intro">
              This biography is being prepared with care. We only publish what has been reviewed and verified.
              May Allāh put barakah in the effort. Āmīn.
            </p>
            <p className="bd-coming-soon-outline-heading">This entry will include:</p>
                      <ul className="bd-coming-soon-outline">
              <li>Life story, background and historical context</li>
              <li>Character, virtues and contributions to Islām</li>
              <li>Key events on the historical timeline</li>
              <li>Maps of their journeys and battles</li>
              <li>Ḥadīth, quotes and primary source references</li>
              <li>Character profiles of key personalities</li>
              <li>Source reliability notes for every major claim</li>
            </ul>
          </div>
        )}
      </div>

      <TabBar active={activeTab} onSelect={setActiveTab} hasProfiles={hasProfiles} />

      {activeTab === "chapters" && (
        <section className="bd-tab-body" aria-label="Chapter list">
          {hasChapters ? (
            book.id === "sirah-prophet-001" ? (
              <div className="bd-chapter-era-list">
                {SIRAH_ERA_GROUPS.map((era) => {
                  const eraChapters = chapters.filter(
                    (ch) => ch.number >= era.from && ch.number <= era.to
                  );
                  if (eraChapters.length === 0) return null;
                  return (
                    <div key={era.label} className="bd-chapter-era-group">
                      <div className="bd-chapter-era-header" aria-label={`${era.label} — ${era.period}`}>
                        <span className="bd-chapter-era-label">{era.label}</span>
                        <span className="bd-chapter-era-period">{era.period}</span>
                      </div>
                      <ul className="chapter-list" role="list">
                        {eraChapters.map((ch) => (
                          <li key={ch.number} role="listitem">
                            <ChapterCard
                              chapter={ch}
                              bookId={book.id}
                              lessonKey={book.lessonKey}
                              onClick={() => onOpenChapter(ch)}
                            />
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            ) : (
              <ul className="chapter-list" role="list">
                {chapters.map((ch) => (
                  <li key={ch.number} role="listitem">
                    <ChapterCard
                      chapter={ch}
                      bookId={book.id}
                      lessonKey={book.lessonKey}
                      onClick={() => onOpenChapter(ch)}
                    />
                  </li>
                ))}
              </ul>
            )
          ) : (
            <div className="bd-coming-panel">
              <div className="bd-coming-icon" aria-hidden="true"><BookOpen size={40} /></div>
              <h3 className="bd-coming-heading">Chapters Coming Soon</h3>
              <p className="bd-coming-desc">
                The content for this book is being reviewed and prepared.
                May Allāh make it a means of benefit for the Ummah.
              </p>
            </div>
          )}
        </section>
      )}

      {activeTab === "timeline" && (
        <TimelineTab book={book} milestones={enrichment?.milestones} />
      )}

      {activeTab === "maps" && <MapsTab bookId={book.id} />}

      {activeTab === "profiles" && enrichment?.characterProfiles && (
        <ProfilesTab profiles={enrichment.characterProfiles} />
      )}

 
      {activeTab === "references" && (
        <ReferencesTab
          book={book}
          refs={enrichment?.references}
          sourceReliability={enrichment?.sourceReliability}
          authNotes={enrichment?.authNotes}
        />
      )}
    </div>
  );
}
