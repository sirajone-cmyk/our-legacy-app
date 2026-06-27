/**
 * OUR LEGACY — Library Catalogue
 *
 * 7 sections in fixed order. No duplicates.
 * personalities with multiple roles carry a `roles` array.
 * Only status:"available" books have reader content linked.
 */

export type BookStatus = "available" | "coming-soon" | "in-progress";

export type AudienceTag =
  | "family"
  | "youth"
  | "adult"
  | "madrasah"
  | "children";

export type CategoryId =
  | "sirah"              // Featured hero only — Prophet \u00b7 not in section pills
  | "ummahatul_muminin"  // Section 1 — Mothers of the Believers
  | "asharah_mubasharah" // Section 2 — Ten Promised Paradise
  | "mufassirun"         // Section 3 — Great Mufassir\u016bn
  | "muhaddithin"        // Section 4 — Great Mu\u1e25addith\u016bn
  | "fuqaha"             // Section 5 — Great Fuqah\u0101\u02be
  | "mujahidin"          // Section 6 — Great Muj\u0101hid\u012bn
  | "qurra"             // Section 6 — Great Qurrāʾ of the Ṣaḥābah
  | "great_women";       // Section 8 — Great Women of Islam

export type BookEntry = {
  id: string;
  categoryId: CategoryId;
  /**
   * Additional sections this personality belongs to.
   * Used to avoid duplicate cards — one entry, multiple roles shown via tags.
   */
  roles?: CategoryId[];
  title: string;
  subtitle?: string;
  seriesName?: string;
  seriesNumber?: number;
  author: string;
  description: string;
  minutesPerSession: number;
  totalPages: number;
  audience: AudienceTag[];
  status: BookStatus;
  coverColor: string;
  accentColor?: string;
  year?: number;
  lessonKey?: string;
};

export type LibraryCategory = {
  id: CategoryId;
  /** Full descriptive title — used as section heading in the book grid. */
  label: string;
  /** Short chip label — shown on mobile category pills. Falls back to label if absent. */
  chipLabel?: string;
  labelAr: string;
  description: string;
  icon: string;
  color: string;
  sectionNumber?: number;
};

// ── Categories ─────────────────────────────────────────────────────────────

export const LIBRARY_CATEGORIES: LibraryCategory[] = [
  {
    id: "sirah",
    label: "S\u012brah",
    labelAr: "\u0627\u0644\u0633\u064a\u0631\u0629 \u0627\u0644\u0646\u0628\u0648\u064a\u0629",
    description: "Biography of the Prophet \u00b7 featured above.",
    icon: "BookOpen",
    color: "var(--forest)",
  },
  {
    id: "ummahatul_muminin",
    label: "Mothers of the Believers",
    chipLabel: "Mothers of the Believers",
    labelAr: "\u0623\u0645\u0647\u0627\u062a \u0627\u0644\u0645\u0624\u0645\u0646\u064a\u0646",
    description: "The eleven blessed wives of the Prophet \u00b7 — models of faith, wisdom and devotion.",
    icon: "HeartHandshake",
    color: "#7a3a5a",
    sectionNumber: 1,
  },
  {
    id: "asharah_mubasharah",
    label: "The Asharah Mubashsharah",
    chipLabel: "Asharah Mubashsharah",
    labelAr: "\u0627\u0644\u0639\u0634\u0631\u0629 \u0627\u0644\u0645\u0628\u0634\u0631\u0648\u0646",
    description: "The ten Companions promised Jannah by the Prophet \u00b7 in a single narration.",
    icon: "Award",
    color: "var(--forest)",
    sectionNumber: 2,
  },
  {
    id: "mufassirun",
    label: "Mufassir\u016bn of the \u1e62a\u1e25\u0101bah",
    chipLabel: "Mufassir\u016bn",
    labelAr: "\u0643\u0628\u0627\u0631 \u0627\u0644\u0645\u0641\u0633\u0631\u064a\u0646",
    description: "Companions who became the foremost interpreters of the Qur\u02be\u0101n.",
    icon: "BookOpen",
    color: "var(--azure)",
    sectionNumber: 3,
  },
  {
    id: "muhaddithin",
    label: "Mu\u1e25addith\u016bn of the \u1e62a\u1e25\u0101bah",
    chipLabel: "Mu\u1e25addith\u016bn",
    labelAr: "\u0643\u0628\u0627\u0631 \u0627\u0644\u0645\u062d\u062f\u062b\u064a\u0646",
    description: "Companions who preserved and transmitted the words and actions of the Prophet \u00b7.",
    icon: "ScrollText",
    color: "#8b6914",
    sectionNumber: 4,
  },
  {
    id: "fuqaha",
    label: "Fuqah\u0101\u02be of the \u1e62a\u1e25\u0101bah",
    chipLabel: "Fuqah\u0101\u02be",
    labelAr: "\u0643\u0628\u0627\u0631 \u0627\u0644\u0641\u0642\u0647\u0627\u0621",
    description: "Companions who built the foundations of Islamic law and jurisprudence.",
    icon: "Scale",
    color: "var(--leaf)",
    sectionNumber: 5,
  },
  {
    id: "qurra",
    label: "Qurr\u0101\u02be of the \u1e62a\u1e25\u0101bah",
    chipLabel: "Qurr\u0101\u02be",
    labelAr: "\u0643\u0628\u0627\u0631 \u0627\u0644\u0642\u0631\u0627\u0621 \u0645\u0646 \u0627\u0644\u0635\u062d\u0627\u0628\u0629",
    description: "Companions recognised as the foremost reciters, memorisers and teachers of the Qur\u02be\u0101n.",
    icon: "BookMarked",
    color: "#1a3a5c",
    sectionNumber: 6,
  },
  {
    id: "mujahidin",
    label: "Muj\u0101hid\u012bn of the \u1e62a\u1e25\u0101bah",
    chipLabel: "Muj\u0101hid\u012bn",
    labelAr: "\u0643\u0628\u0627\u0631 \u0627\u0644\u0645\u062c\u0627\u0647\u062f\u064a\u0646",
    description: "Men and women of unmatched courage who carried the message across the world.",
    icon: "Shield",
    color: "#7a1f1f",
    sectionNumber: 7,
  },
  {
    id: "great_women",
    label: "Great Women of Islam",
    chipLabel: "Great Women",
    labelAr: "\u0639\u0638\u064a\u0645\u0627\u062a \u0627\u0644\u0625\u0633\u0644\u0627\u0645",
    description: "Women of unmatched piety, sacrifice and steadfastness in the path of All\u0101h.",
    icon: "Users",
    color: "#6a2a4a",
    sectionNumber: 8,
  },
];

// ── Book Catalogue ─────────────────────────────────────────────────────────

export const LIBRARY_BOOKS: BookEntry[] = [

  // ── FEATURED — S\u012brah (not in section pills) ────────────────────────────
  {
    id: "sirah-prophet-001",
    categoryId: "sirah",
    title: "The Seal of the Prophets",
    subtitle: "The Life of Prophet Mu\u1e25ammad \u00b7",
    seriesName: "Our Legacy S\u012brah Series",
    seriesNumber: 1,
    author: "Compiled by Ust\u0101dh H\u0101shim \u00b7 SirajOne",
    description:
      "A family-friendly, Qur\u02be\u0101n and Sunnah-based journey through the life of the greatest human being who ever lived \u2014 Prophet Mu\u1e25ammad \u00b7. Covering his birth, prophethood, Hijrah, and the establishment of the Islamic state.",
    minutesPerSession: 12,
    totalPages: 24,
    audience: ["family", "madrasah", "youth"],
    status: "available",
    coverColor: "#12332f",
    accentColor: "#b88a32",
    year: 2026,
    lessonKey: "sirah_journey",
  },

  // ═══════════════════════════════════════════════════════════════════
  // SECTION 1 — MOTHERS OF THE BELIEVERS (Umm\u0101h\u0101t al-Mu\u02bemin\u012bn)
  // ═══════════════════════════════════════════════════════════════════

  {
    id: "um-khadijah",
    categoryId: "ummahatul_muminin",
    seriesNumber: 1,
    title: "Khad\u012bjah bint Khuwaylid",
    subtitle: "The First Mother of the Believers",
    seriesName: "Mothers of the Believers",
    author: "Compiled by Ust\u0101dh H\u0101shim \u00b7 SirajOne",
    description:
      "The first Muslim, the first to believe when the world rejected. Khad\u012bjah \u0631\u0636\u064a \u0627\u0644\u0644\u0647 \u0639\u0646\u0647\u0627 was the anchor of the Prophet\u2019s \u00b7 life in Makkah \u2014 a woman of wealth, wisdom, and unwavering faith. Jibr\u012bl himself sent her sal\u0101m from All\u0101h.",
    minutesPerSession: 10,
    totalPages: 16,
    audience: ["family", "madrasah", "youth"],
    status: "coming-soon",
    coverColor: "#2d0a1a",
    accentColor: "#e7d3a1",
  },
  {
    id: "um-sawdah",
    categoryId: "ummahatul_muminin",
    seriesNumber: 2,
    title: "Sawdah bint Zam\u02bfah",
    subtitle: "The Steadfast Mother",
    seriesName: "Mothers of the Believers",
    author: "Compiled by Ust\u0101dh H\u0101shim \u00b7 SirajOne",
    description:
      "One of the earliest women to accept Islam and among the first to make Hijrah to Abyssinia. Sawdah \u0631\u0636\u064a \u0627\u0644\u0644\u0647 \u0639\u0646\u0647\u0627 married the Prophet \u00b7 after Khad\u012bjah\u2019s passing and brought warmth and stability to his household at its most vulnerable moment.",
    minutesPerSession: 8,
    totalPages: 12,
    audience: ["family", "madrasah"],
    status: "coming-soon",
    coverColor: "#3a1a2a",
    accentColor: "#d4a843",
  },
  {
    id: "um-aisha",
    categoryId: "ummahatul_muminin",
    seriesNumber: 3,
    title: "\u02bf\u0100\u02beisha bint Ab\u012b Bakr",
    subtitle: "The Scholar of the Ummah",
    seriesName: "Mothers of the Believers",
    author: "Compiled by Ust\u0101dh H\u0101shim \u00b7 SirajOne",
    description:
      "The most learned woman in Islamic history. \u02bf\u0100\u02beisha \u0631\u0636\u064a \u0627\u0644\u0644\u0647 \u0639\u0646\u0647\u0627 narrated over 2,000 \u1e25ad\u012bth and taught the Ummah for decades after the Prophet\u2019s \u00b7 passing. The Companions came to her to verify what they had heard. If you removed her narrations from the Sunnah, a great pillar of the D\u012bn would be lost.",
    minutesPerSession: 12,
    totalPages: 18,
    audience: ["family", "madrasah"],
    status: "coming-soon",
    coverColor: "#1a0a2d",
    accentColor: "#d4a843",
  },
  {
    id: "um-hafsah",
    categoryId: "ummahatul_muminin",
    seriesNumber: 4,
    title: "\u1e24af\u1e63ah bint \u02bfUmar",
    subtitle: "The Keeper of the Qur\u02be\u0101n",
    seriesName: "Mothers of the Believers",
    author: "Compiled by Ust\u0101dh H\u0101shim \u00b7 SirajOne",
    description:
      "Daughter of \u02bfUmar ibn al-Kha\u1e6d\u1e6d\u0101b and wife of the Prophet \u00b7. The original written copy of the Qur\u02be\u0101n was entrusted to \u1e24af\u1e63ah \u0631\u0636\u064a \u0627\u0644\u0644\u0647 \u0639\u0646\u0647\u0627 for safekeeping \u2014 making her the guardian of the most precious text in human history.",
    minutesPerSession: 8,
    totalPages: 12,
    audience: ["family", "madrasah"],
    status: "coming-soon",
    coverColor: "#1a1a0d",
    accentColor: "#b88a32",
  },
  {
    id: "um-zaynab-k",
    categoryId: "ummahatul_muminin",
    seriesNumber: 5,
    title: "Zaynab bint Khuzaymah",
    subtitle: "Mother of the Poor",
    seriesName: "Mothers of the Believers",
    author: "Compiled by Ust\u0101dh H\u0101shim \u00b7 SirajOne",
    description:
      "Known even before Islam as \u201cUmm al-Mas\u0101k\u012bn\u201d \u2014 Mother of the Poor \u2014 for her generosity to those in need. Zaynab \u0631\u0636\u064a \u0627\u0644\u0644\u0647 \u0639\u0646\u0647\u0627 lived only a short time as the wife of the Prophet \u00b7, but her legacy of charity and compassion endures.",
    minutesPerSession: 7,
    totalPages: 10,
    audience: ["family", "madrasah"],
    status: "coming-soon",
    coverColor: "#2a1a0a",
    accentColor: "#e7d3a1",
  },
  {
    id: "um-umm-salamah",
    categoryId: "ummahatul_muminin",
    seriesNumber: 6,
    title: "Umm Salamah",
    subtitle: "The Wise Mother",
    seriesName: "Mothers of the Believers",
    author: "Compiled by Ust\u0101dh H\u0101shim \u00b7 SirajOne",
    description:
      "Among the wisest of the Prophet\u2019s \u00b7 wives. Umm Salamah \u0631\u0636\u064a \u0627\u0644\u0644\u0647 \u0639\u0646\u0647\u0627 was one of the first to make Hijrah to Abyssinia, a transmitter of over 300 \u1e25ad\u012bth, and the woman whose counsel at \u1e24udaybiyyah resolved a crisis that could have torn the Muslim community apart.",
    minutesPerSession: 10,
    totalPages: 14,
    audience: ["family", "madrasah"],
    status: "coming-soon",
    coverColor: "#0a1a2a",
    accentColor: "#d4a843",
  },
  {
    id: "um-zaynab-j",
    categoryId: "ummahatul_muminin",
    seriesNumber: 7,
    title: "Zaynab bint Ja\u1e25sh",
    subtitle: "The One Whose Marriage All\u0101h Performed",
    seriesName: "Mothers of the Believers",
    author: "Compiled by Ust\u0101dh H\u0101shim \u00b7 SirajOne",
    description:
      "Her marriage to the Prophet \u00b7 was announced directly in the Qur\u02be\u0101n (33:37) \u2014 a distinction no other wife shares. Zaynab \u0631\u0636\u064a \u0627\u0644\u0644\u0647 \u0639\u0646\u0647\u0627 was known for her fasting, prayer, charity, and for working with her own hands to give to the poor.",
    minutesPerSession: 8,
    totalPages: 12,
    audience: ["family", "madrasah"],
    status: "coming-soon",
    coverColor: "#1a0a1a",
    accentColor: "#b88a32",
  },
  {
    id: "um-juwayriyyah",
    categoryId: "ummahatul_muminin",
    seriesNumber: 8,
    title: "Juwayriyyah bint al-\u1e24\u0101rith",
    subtitle: "The Blessed Marriage",
    seriesName: "Mothers of the Believers",
    author: "Compiled by Ust\u0101dh H\u0101shim \u00b7 SirajOne",
    description:
      "Through her marriage to the Prophet \u00b7, the Muslims freed one hundred households of the Ban\u016b al-Mu\u1e63\u1e6dalaq \u2014 more captives freed through a single marriage than through any battle. Juwayriyyah \u0631\u0636\u064a \u0627\u0644\u0644\u0647 \u0639\u0646\u0647\u0627 was known for lengthy prayers and constant dhikr.",
    minutesPerSession: 7,
    totalPages: 10,
    audience: ["family", "madrasah"],
    status: "coming-soon",
    coverColor: "#0a2a1a",
    accentColor: "#d4a843",
  },
  {
    id: "um-umm-habibah",
    categoryId: "ummahatul_muminin",
    seriesNumber: 9,
    title: "Umm \u1e24ab\u012bbah",
    subtitle: "The Daughter Who Chose Islam",
    seriesName: "Mothers of the Believers",
    author: "Compiled by Ust\u0101dh H\u0101shim \u00b7 SirajOne",
    description:
      "Daughter of Ab\u016b Sufy\u0101n \u2014 the greatest enemy of Islam \u2014 who chose All\u0101h\u2019s Messenger \u00b7 over her own father. Umm \u1e24ab\u012bbah \u0631\u0636\u064a \u0627\u0644\u0644\u0647 \u0639\u0646\u0647\u0627 made Hijrah to Abyssinia, lost her first husband to apostasy, and remained steadfast in her faith at every trial.",
    minutesPerSession: 8,
    totalPages: 12,
    audience: ["family", "madrasah", "youth"],
    status: "coming-soon",
    coverColor: "#2a0a0a",
    accentColor: "#e7d3a1",
  },
  {
    id: "um-safiyyah",
    categoryId: "ummahatul_muminin",
    seriesNumber: 10,
    title: "\u1e62afiyyah bint \u1e24uyayy",
    subtitle: "The Noble Lineage",
    seriesName: "Mothers of the Believers",
    author: "Compiled by Ust\u0101dh H\u0101shim \u00b7 SirajOne",
    description:
      "A descendant of Prophet H\u0101r\u016bn (Aaron) \u00b7, \u1e62afiyyah \u0631\u0636\u064a \u0627\u0644\u0644\u0647 \u0639\u0646\u0647\u0627 came from the most noble lineage and chose Islam with clarity and conviction. When taunted about her origins, the Prophet \u00b7 taught her how to respond with honour.",
    minutesPerSession: 8,
    totalPages: 12,
    audience: ["family", "madrasah"],
    status: "coming-soon",
    coverColor: "#0a1a2d",
    accentColor: "#d4a843",
  },
  {
    id: "um-maymunah",
    categoryId: "ummahatul_muminin",
    seriesNumber: 11,
    title: "Maym\u016bnah bint al-\u1e24\u0101rith",
    subtitle: "The Last of the Mothers",
    seriesName: "Mothers of the Believers",
    author: "Compiled by Ust\u0101dh H\u0101shim \u00b7 SirajOne",
    description:
      "The last woman the Prophet \u00b7 married and the last of the Mothers of the Believers to pass away. Maym\u016bnah \u0631\u0636\u064a \u0627\u0644\u0644\u0647 \u0639\u0646\u0647\u0627 was known for her immense generosity and is buried at the very place where she married the Prophet \u00b7.",
    minutesPerSession: 7,
    totalPages: 10,
    audience: ["family", "madrasah"],
    status: "coming-soon",
    coverColor: "#1a0d2a",
    accentColor: "#b88a32",
  },

  // ═══════════════════════════════════════════════════════════════════
  // SECTION 2 — ASHARAH MUBASHARAH (Ten Promised Jannah)
  // ═══════════════════════════════════════════════════════════════════

  {
    id: "ash-abu-bakr",
    categoryId: "asharah_mubasharah",
    seriesNumber: 1,
    title: "Ab\u016b Bakr al-\u1e62idd\u012bq",
    subtitle: "The Truthful Friend",
    seriesName: "Asharah Mubasharah",
    author: "Compiled by Ust\u0101dh H\u0101shim \u00b7 SirajOne",
    description:
      "The first adult male to accept Islam, the companion in the Cave, and the first Khal\u012bfah. Ab\u016b Bakr \u0631\u0636\u064a \u0627\u0644\u0644\u0647 \u0639\u0646\u0647 never doubted the Prophet \u00b7 for a single moment \u2014 earning the title al-\u1e62idd\u012bq (The Truthful One) from All\u0101h\u2019s Messenger himself.",
    minutesPerSession: 12,
    totalPages: 20,
    audience: ["family", "madrasah", "youth"],
    status: "in-progress",
    coverColor: "#0d2d1a",
    accentColor: "#e7d3a1",
    year: 2026,
  },
  {
    id: "ash-umar",
    categoryId: "asharah_mubasharah",
    seriesNumber: 2,
    title: "\u02bfUmar ibn al-Kha\u1e6d\u1e6d\u0101b",
    subtitle: "The Justice of al-F\u0101r\u016bq",
    seriesName: "Asharah Mubasharah",
    author: "Compiled by Ust\u0101dh H\u0101shim \u00b7 SirajOne",
    description:
      "From sworn enemy of Islam to its mightiest champion. \u02bfUmar \u0631\u0636\u064a \u0627\u0644\u0644\u0647 \u0639\u0646\u0647\u2019s conversion shook Makkah to its core. His caliphate expanded the Islamic world from the Nile to Persia \u2014 and he walked its streets at night alone, listening for the cry of any poor person he could help.",
    minutesPerSession: 12,
    totalPages: 22,
    audience: ["family", "madrasah", "adult"],
    status: "coming-soon",
    coverColor: "#2d1f0a",
    accentColor: "#d4a843",
  },
  {
    id: "ash-uthman",
    categoryId: "asharah_mubasharah",
    seriesNumber: 3,
    title: "\u02bfUthm\u0101n ibn \u02bfAff\u0101n",
    subtitle: "The Man of Two Lights",
    seriesName: "Asharah Mubasharah",
    author: "Compiled by Ust\u0101dh H\u0101shim \u00b7 SirajOne",
    description:
      "He married two daughters of the Prophet \u00b7 \u2014 earning the title Dh\u016b al-N\u016brayn (The Man of Two Lights). \u02bfUthm\u0101n \u0631\u0636\u064a \u0627\u0644\u0644\u0647 \u0639\u0646\u0647 purchased the Well of R\u016bmah for the Muslims, equipped the Army of Tabuk, and oversaw the compilation of the Qur\u02be\u0101n in its final written form.",
    minutesPerSession: 10,
    totalPages: 18,
    audience: ["family", "madrasah"],
    status: "coming-soon",
    coverColor: "#0d2d1a",
    accentColor: "#b88a32",
  },
  {
    id: "ash-ali",
    categoryId: "asharah_mubasharah",
    seriesNumber: 4,
    title: "\u02bfAl\u012b ibn Ab\u012b \u1e6c\u0101lib",
    subtitle: "The Lion of All\u0101h",
    seriesName: "Asharah Mubasharah",
    author: "Compiled by Ust\u0101dh H\u0101shim \u00b7 SirajOne",
    description:
      "Raised in the household of the Prophet \u00b7, \u02bfAl\u012b \u0631\u0636\u064a \u0627\u0644\u0644\u0647 \u0639\u0646\u0647 was the embodiment of knowledge, courage and justice. He slept in the Prophet\u2019s \u00b7 bed on the night of the Hijrah, knowing assassins surrounded the house \u2014 and did not flinch.",
    minutesPerSession: 10,
    totalPages: 18,
    audience: ["family", "madrasah"],
    status: "coming-soon",
    coverColor: "#1a0d2d",
    accentColor: "#d4a843",
  },
  {
    id: "ash-talhah",
    categoryId: "asharah_mubasharah",
    seriesNumber: 5,
    title: "\u1e6cal\u1e25ah ibn \u02bfUbaydill\u0101h",
    subtitle: "The Living Martyr",
    seriesName: "Asharah Mubasharah",
    author: "Compiled by Ust\u0101dh H\u0101shim \u00b7 SirajOne",
    description:
      "At U\u1e25ud, \u1e6cal\u1e25ah \u0631\u0636\u064a \u0627\u0644\u0644\u0647 \u0639\u0646\u0647 shielded the Prophet \u00b7 with his own body, receiving so many wounds that his hand was permanently paralysed. The Prophet \u00b7 called him a martyr while still alive \u2014 one of the rarest honours in Islam.",
    minutesPerSession: 10,
    totalPages: 16,
    audience: ["family", "madrasah", "youth"],
    status: "coming-soon",
    coverColor: "#1a2d0a",
    accentColor: "#e8b84a",
  },
  {
    id: "ash-zubayr",
    categoryId: "asharah_mubasharah",
    seriesNumber: 6,
    title: "al-Zubayr ibn al-\u02bfAww\u0101m",
    subtitle: "The Disciple of the Prophet",
    seriesName: "Asharah Mubasharah",
    author: "Compiled by Ust\u0101dh H\u0101shim \u00b7 SirajOne",
    description:
      "Cousin of the Prophet \u00b7, the fifth person to accept Islam, and the first to draw a sword in the path of All\u0101h. al-Zubayr \u0631\u0636\u064a \u0627\u0644\u0644\u0687 \u0639\u0646\u0647 was called \u201cthe Disciple of the Messenger\u201d \u2014 a title given by the Prophet \u00b7 himself.",
    minutesPerSession: 10,
    totalPages: 16,
    audience: ["family", "madrasah"],
    status: "coming-soon",
    coverColor: "#0a1a2d",
    accentColor: "#d4a843",
  },
  {
    id: "ash-abdurrahman",
    categoryId: "asharah_mubasharah",
    seriesNumber: 7,
    title: "\u02bfAbdurra\u1e25m\u0101n ibn \u02bfAwf",
    subtitle: "The Merchant of Paradise",
    seriesName: "Asharah Mubasharah",
    author: "Compiled by Ust\u0101dh H\u0101shim \u00b7 SirajOne",
    description:
      "He arrived in Madinah with nothing and left with a trade empire. \u02bfAbdurra\u1e25m\u0101n ibn \u02bfAwf \u0631\u0636\u064a \u0627\u0644\u0644\u0647 \u0639\u0646\u0647 gave so much in charity during his lifetime that he feared his wealth might slow his entry into Jannah \u2014 a fear the Prophet \u00b7 gently addressed with glad tidings.",
    minutesPerSession: 10,
    totalPages: 14,
    audience: ["family", "madrasah"],
    status: "coming-soon",
    coverColor: "#1a2d1a",
    accentColor: "#b88a32",
  },
  {
    id: "ash-sad",
    categoryId: "asharah_mubasharah",
    seriesNumber: 8,
    title: "Sa\u02bfd ibn Ab\u012b Waqq\u0101\u1e63",
    subtitle: "The First Archer of Islam",
    seriesName: "Asharah Mubasharah",
    author: "Compiled by Ust\u0101dh H\u0101shim \u00b7 SirajOne",
    description:
      "The first person to fire an arrow in the path of All\u0101h. Sa\u02bfd \u0631\u0636\u064a \u0627\u0644\u0644\u0647 \u0639\u0646\u0647 led the historic conquest of Persia, founded the city of K\u016bfah, and was the only Companion the Prophet \u00b7 honoured with both his parents in one supplication: \u201cMay my father and mother be your ransom.\u201d",
    minutesPerSession: 10,
    totalPages: 16,
    audience: ["family", "madrasah", "youth"],
    status: "coming-soon",
    coverColor: "#2d1a0a",
    accentColor: "#d4a843",
  },
  {
    id: "ash-said-zayd",
    categoryId: "asharah_mubasharah",
    seriesNumber: 9,
    title: "Sa\u02bfd ibn Zayd",
    subtitle: "The Seeker Before the Call",
    seriesName: "Asharah Mubasharah",
    author: "Compiled by Ust\u0101dh H\u0101shim \u00b7 SirajOne",
    description:
      "One of the few who had already rejected idol worship before the Prophet\u2019s \u00b7 call. Sa\u02bfd ibn Zayd \u0631\u0636\u064a \u0627\u0644\u0644\u0647 \u0639\u0646\u0647 was among the earliest to embrace Islam and one of the ten whose Jannah was confirmed by name in a single \u1e25ad\u012bth.",
    minutesPerSession: 8,
    totalPages: 12,
    audience: ["family", "madrasah"],
    status: "coming-soon",
    coverColor: "#0a2d2d",
    accentColor: "#b88a32",
  },
  {
    id: "ash-abu-ubaydah",
    categoryId: "asharah_mubasharah",
    seriesNumber: 10,
    title: "Ab\u016b \u02bfUbaydah ibn al-Jarr\u0101\u1e25",
    subtitle: "The Trustee of the Ummah",
    seriesName: "Asharah Mubasharah",
    author: "Compiled by Ust\u0101dh H\u0101shim \u00b7 SirajOne",
    description:
      "The Prophet \u00b7 called him \u201cthe Trustee of this Ummah.\u201d Ab\u016b \u02bfUbaydah \u0631\u0636\u064a \u0627\u0644\u0644\u0647 \u0639\u0646\u0647 commanded the Muslim armies in the Levant, opened city after city to Islam, and died in the plague of \u02bfAmw\u0101s \u2014 refusing to abandon his people in their hour of need.",
    minutesPerSession: 10,
    totalPages: 14,
    audience: ["family", "madrasah"],
    status: "coming-soon",
    coverColor: "#2d0d0a",
    accentColor: "#e7d3a1",
  },

  // ═══════════════════════════════════════════════════════════════════
  // SECTION 3 — GREAT MUFASSIR\u016bN
  // Note: Ibn Mas\u02bfud and Zayd ibn Th\u0101bit also carry roles: ["fuqaha"]
  // ═══════════════════════════════════════════════════════════════════

  {
    id: "muf-ibn-abbas",
    categoryId: "mufassirun",
    seriesNumber: 1,
    roles: ["fuqaha"],
    title: "\u02bfAbdull\u0101h ibn \u02bfAbb\u0101s",
    subtitle: "The Scholar of the Ummah",
    seriesName: "Great Mufassir\u016bn",
    author: "Compiled by Ust\u0101dh H\u0101shim \u00b7 SirajOne",
    description:
      "The Prophet\u2019s \u00b7 own cousin, for whom he made the du\u02bf\u0101\u02be: \u201cO All\u0101h, grant him understanding of the D\u012bn.\u201d Ibn \u02bfAbb\u0101s \u0631\u0636\u064a \u0627\u0644\u0644\u0647 \u0639\u0646\u0647\u0645\u0627 became the foremost authority in Qur\u02be\u0101nic commentary of his age, combining narration with deep juristic reasoning.",
    minutesPerSession: 10,
    totalPages: 14,
    audience: ["madrasah", "family"],
    status: "coming-soon",
    coverColor: "#0d1a2d",
    accentColor: "#d4a843",
  },
  {
    id: "muf-ibn-masud",
    categoryId: "mufassirun",
    seriesNumber: 2,
    roles: ["fuqaha"],
    title: "\u02bfAbdull\u0101h ibn Mas\u02bfud",
    subtitle: "The Companion of the Qur\u02be\u0101n",
    seriesName: "Great Mufassir\u016bn",
    author: "Compiled by Ust\u0101dh H\u0101shim \u00b7 SirajOne",
    description:
      "The first person to recite the Qur\u02be\u0101n openly in Makkah, beaten by the Quraysh but unbroken. Ibn Mas\u02bfud \u0631\u0636\u064a \u0627\u0644\u0644\u0647 \u0639\u0646\u0647 was a giant of Tafs\u012br and Fiqh \u2014 the Prophet \u00b7 personally instructed the Companions to learn the Qur\u02be\u0101n from him.",
    minutesPerSession: 10,
    totalPages: 14,
    audience: ["madrasah", "family"],
    status: "coming-soon",
    coverColor: "#1a1a2d",
    accentColor: "#b88a32",
  },
  {
    id: "muf-ubayy",
    categoryId: "mufassirun",
    seriesNumber: 3,
    roles: ["qurra"],
    title: "Ubayy ibn Ka\u02bfb",
    subtitle: "The Master of the Qur\u02be\u0101n",
    seriesName: "Great Mufassir\u016bn",
    author: "Compiled by Ust\u0101dh H\u0101shim \u00b7 SirajOne",
    description:
      "The Prophet \u00b7 told \u02bfUmar ibn al-Kha\u1e6d\u1e6d\u0101b: \u201cAll\u0101h has commanded me to recite the Qur\u02be\u0101n to you.\u201d \u02bfUmar asked: \u201cTo me specifically?\u201d The Prophet \u00b7 confirmed \u2014 and then recited to Ubayy ibn Ka\u02bfb \u0631\u0636\u064a \u0627\u0644\u0644\u0647 \u0639\u0646\u0647 directly. He was the foremost Qur\u02be\u0101n reciter among the Companions.",
    minutesPerSession: 8,
    totalPages: 12,
    audience: ["madrasah", "family"],
    status: "coming-soon",
    coverColor: "#0a2d1a",
    accentColor: "#d4a843",
  },
  {
    id: "muf-zayd",
    categoryId: "mufassirun",
    seriesNumber: 4,
    roles: ["fuqaha"],
    title: "Zayd ibn Th\u0101bit",
    subtitle: "The Scribe of the Prophet",
    seriesName: "Great Mufassir\u016bn",
    author: "Compiled by Ust\u0101dh H\u0101shim \u00b7 SirajOne",
    description:
      "Chief scribe of the Revelation and the primary compiler of the Qur\u02be\u0101n under Ab\u016b Bakr and \u02bfUthm\u0101n. Zayd ibn Th\u0101bit \u0631\u0636\u064a \u0627\u0644\u0644\u0647 \u0639\u0646\u0647 also served as a judge and one of the leading fuqah\u0101\u02be of Madinah, mastering both Tafs\u012br and Islamic law.",
    minutesPerSession: 8,
    totalPages: 12,
    audience: ["madrasah", "family"],
    status: "coming-soon",
    coverColor: "#1a2d0d",
    accentColor: "#b88a32",
  },

  // ═══════════════════════════════════════════════════════════════════
  // SECTION 4 — GREAT MU\u1e24ADDITH\u016bN
  // (\u02bf\u0100\u02beisha already appears in Section 1 \u2014 no duplicate)
  // ═══════════════════════════════════════════════════════════════════

  {
    id: "muh-abu-hurairah",
    categoryId: "muhaddithin",
    seriesNumber: 1,
    title: "Ab\u016b Hurayrah",
    subtitle: "The Vessel of Prophetic Knowledge",
    seriesName: "Great Mu\u1e25addith\u016bn",
    author: "Compiled by Ust\u0101dh H\u0101shim \u00b7 SirajOne",
    description:
      "The narrator of more \u1e25ad\u012bth than any other Companion \u2014 over 5,000 narrations. Ab\u016b Hurayrah \u0631\u0636\u064a \u0627\u0644\u0644\u0647 \u0639\u0646\u0647 spent his days in the company of the Prophet \u00b7, memorising every word while others were occupied with trade. He was called \u201cthe vessel of Prophetic knowledge\u201d by the \u1e62a\u1e25\u0101bah.",
    minutesPerSession: 10,
    totalPages: 14,
    audience: ["family", "madrasah", "youth"],
    status: "coming-soon",
    coverColor: "#2d1a00",
    accentColor: "#e8b84a",
  },
  {
    id: "muh-ibn-umar",
    categoryId: "muhaddithin",
    seriesNumber: 2,
    title: "\u02bfAbdull\u0101h ibn \u02bfUmar",
    subtitle: "The Most Careful Follower of the Sunnah",
    seriesName: "Great Mu\u1e25addith\u016bn",
    author: "Compiled by Ust\u0101dh H\u0101shim \u00b7 SirajOne",
    description:
      "Son of \u02bfUmar ibn al-Kha\u1e6d\u1e6d\u0101b, Ibn \u02bfUmar \u0631\u0636\u064a \u0627\u0644\u0644\u0647 \u0639\u0646\u0647\u0645\u0627 spent his life following the Prophet \u00b7 in every detail \u2014 even praying at every tree the Prophet \u00b7 ever rested under. He narrated over 2,600 \u1e25ad\u012bth and was consulted by rulers for decades.",
    minutesPerSession: 10,
    totalPages: 14,
    audience: ["family", "madrasah"],
    status: "coming-soon",
    coverColor: "#1a1a0a",
    accentColor: "#d4a843",
  },
  {
    id: "muh-anas",
    categoryId: "muhaddithin",
    seriesNumber: 3,
    title: "Anas ibn M\u0101lik",
    subtitle: "The Servant of the Prophet",
    seriesName: "Great Mu\u1e25addith\u016bn",
    author: "Compiled by Ust\u0101dh H\u0101shim \u00b7 SirajOne",
    description:
      "Brought to the Prophet \u00b7 as a young boy, Anas \u0631\u0636\u064a \u0627\u0644\u0644\u0647 \u0639\u0646\u0647 served him for ten years and said: \u201cHe never once said to me \u2018uff\u2019 (an expression of displeasure). For anything I did, he never asked: why did you do that?\u201d He narrated over 2,200 \u1e25ad\u012bth.",
    minutesPerSession: 10,
    totalPages: 14,
    audience: ["family", "madrasah", "children"],
    status: "coming-soon",
    coverColor: "#0a2d0a",
    accentColor: "#b88a32",
  },
  {
    id: "muh-jabir",
    categoryId: "muhaddithin",
    seriesNumber: 4,
    title: "J\u0101bir ibn \u02bfAbdull\u0101h",
    subtitle: "The Faithful Narrator",
    seriesName: "Great Mu\u1e25addith\u016bn",
    author: "Compiled by Ust\u0101dh H\u0101shim \u00b7 SirajOne",
    description:
      "One of the most prolific narrators of \u1e25ad\u012bth. J\u0101bir \u0631\u0636\u064a \u0627\u0644\u0644\u0647 \u0639\u0646\u0647 participated in nineteen battles alongside the Prophet \u00b7 and was known for his deep knowledge of the Sunnah. He once travelled a month\u2019s journey just to verify a single narration.",
    minutesPerSession: 8,
    totalPages: 12,
    audience: ["family", "madrasah"],
    status: "coming-soon",
    coverColor: "#2d0a1a",
    accentColor: "#d4a843",
  },
  {
    id: "muh-abu-said",
    categoryId: "muhaddithin",
    seriesNumber: 5,
    title: "Ab\u016b Sa\u02bfd al-Khudr\u012b",
    subtitle: "The Youth Who Grew in Knowledge",
    seriesName: "Great Mu\u1e25addith\u016bn",
    author: "Compiled by Ust\u0101dh H\u0101shim \u00b7 SirajOne",
    description:
      "Ab\u016b Sa\u02bfd \u0631\u0636\u064a \u0627\u0644\u0644\u0647 \u0639\u0646\u0647 was turned away from the Battle of U\u1e25ud as too young, but grew to become a giant of Prophetic knowledge. He narrated over 1,000 \u1e25ad\u012bth and was among those who fiercely opposed the narration of \u1e25ad\u012bth without proper chain verification.",
    minutesPerSession: 8,
    totalPages: 12,
    audience: ["family", "madrasah"],
    status: "coming-soon",
    coverColor: "#0a1a1a",
    accentColor: "#b88a32",
  },

  // ═══════════════════════════════════════════════════════════════════
  // SECTION 5 — GREAT FUQAH\u0100\u02be
  // (Ibn Mas\u02bfud and Zayd ibn Th\u0101bit appear via roles from Section 3)
  // ═══════════════════════════════════════════════════════════════════

  {
    id: "fuq-muadh",
    categoryId: "fuqaha",
    seriesNumber: 1,
    roles: ["qurra"],
    title: "Mu\u02bfd\u0101dh ibn Jabal",
    subtitle: "The Most Knowledgeable in \u1e24al\u0101l and \u1e24ar\u0101m",
    seriesName: "Great Fuqah\u0101\u02be",
    author: "Compiled by Ust\u0101dh H\u0101shim \u00b7 SirajOne",
    description:
      "The Prophet \u00b7 declared: \u201cThe most knowledgeable of my Ummah in \u1e25al\u0101l and \u1e25ar\u0101m is Mu\u02bfd\u0101dh ibn Jabal.\u201d Sent as judge and teacher to Yemen, Mu\u02bfd\u0101dh \u0631\u0636\u064a \u0627\u0644\u0644\u0647 \u0639\u0646\u0647 embodied Islamic jurisprudence in action \u2014 legal knowledge married to profound taqw\u0101.",
    minutesPerSession: 10,
    totalPages: 14,
    audience: ["madrasah", "family"],
    status: "coming-soon",
    coverColor: "#2d2d0a",
    accentColor: "#d4a843",
  },

  // ═══════════════════════════════════════════════════════════════════
  // SECTION 6 — GREAT MUJ\u0100HID\u012bN
  // (Nusaybah and Khawlah also carry roles: ["great_women"])
  // ═══════════════════════════════════════════════════════════════════

  {
    id: "muj-khalid",
    categoryId: "mujahidin",
    seriesNumber: 1,
    title: "Kh\u0101lid ibn al-Wal\u012bd",
    subtitle: "The Sword of All\u0101h",
    seriesName: "Great Muj\u0101hid\u012bn",
    author: "Compiled by Ust\u0101dh H\u0101shim \u00b7 SirajOne",
    description:
      "Undefeated in over 100 battles, Kh\u0101lid \u0631\u0636\u064a \u0627\u0644\u0644\u0647 \u0639\u0646\u0647 was first the man who outflanked the Muslims at U\u1e25ud \u2014 then became the sword the Prophet \u00b7 himself named. From Arabia to Persia to the Levant, no general in early Islam matched his battlefield genius.",
    minutesPerSession: 12,
    totalPages: 20,
    audience: ["youth", "adult", "madrasah"],
    status: "coming-soon",
    coverColor: "#3d0d0d",
    accentColor: "#e8b84a",
  },
  {
    id: "muj-bara",
    categoryId: "mujahidin",
    seriesNumber: 2,
    title: "al-Bar\u0101\u02be ibn M\u0101lik",
    subtitle: "The Man Who Craved Martyrdom",
    seriesName: "Great Muj\u0101hid\u012bn",
    author: "Compiled by Ust\u0101dh H\u0101shim \u00b7 SirajOne",
    description:
      "The Prophet \u00b7 said: \u201cHow many people, dishevelled and dusty, if they were to swear an oath by All\u0101h, He would fulfil it \u2014 and al-Bar\u0101\u02be ibn M\u0101lik is among them.\u201d A warrior of extraordinary ferocity and fearlessness, he \u0631\u0636\u064a \u0627\u0644\u0644\u0647 \u0639\u0646\u0647 was martyred in the conquest of Persia.",
    minutesPerSession: 8,
    totalPages: 12,
    audience: ["youth", "madrasah"],
    status: "coming-soon",
    coverColor: "#2d0a0a",
    accentColor: "#d4a843",
  },
  {
    id: "muj-jafar",
    categoryId: "mujahidin",
    seriesNumber: 3,
    title: "Ja\u02bffar ibn Ab\u012b \u1e6c\u0101lib",
    subtitle: "The Bird of Paradise",
    seriesName: "Great Muj\u0101hid\u012bn",
    author: "Compiled by Ust\u0101dh H\u0101shim \u00b7 SirajOne",
    description:
      "Cousin of the Prophet \u00b7 and leader of the Muslims\u2019 migration to Abyssinia, where his words before the Negus moved the king to tears. At Mu\u02bftah, Ja\u02bffar \u0631\u0636\u064a \u0627\u0644\u0644\u0647 \u0639\u0646\u0647 took the banner after both commanders fell \u2014 until his arms were cut and All\u0101h replaced them with two wings in Paradise.",
    minutesPerSession: 10,
    totalPages: 14,
    audience: ["family", "madrasah"],
    status: "coming-soon",
    coverColor: "#0a1a2d",
    accentColor: "#d4a843",
  },
  {
    id: "muj-zayd-harithah",
    categoryId: "mujahidin",
    seriesNumber: 4,
    title: "Zayd ibn \u1e24\u0101rithah",
    subtitle: "The Beloved of the Prophet",
    seriesName: "Great Muj\u0101hid\u012bn",
    author: "Compiled by Ust\u0101dh H\u0101shim \u00b7 SirajOne",
    description:
      "The only Companion mentioned by name in the Qur\u02be\u0101n (33:37). Zayd \u0631\u0636\u064a \u0627\u0644\u0644\u0647 \u0639\u0646\u0647 was the freed slave who became like a son to the Prophet \u00b7. He led the army at Mu\u02bftah and fell as commander, having never lost his love for All\u0101h\u2019s Messenger or his eagerness for the battlefield.",
    minutesPerSession: 8,
    totalPages: 12,
    audience: ["family", "madrasah"],
    status: "coming-soon",
    coverColor: "#2d1a0a",
    accentColor: "#b88a32",
  },
  {
    id: "muj-ibn-rawahah",
    categoryId: "mujahidin",
    seriesNumber: 5,
    title: "\u02bfAbdull\u0101h ibn Raw\u0101\u1e25ah",
    subtitle: "The Poet-Commander",
    seriesName: "Great Muj\u0101hid\u012bn",
    author: "Compiled by Ust\u0101dh H\u0101shim \u00b7 SirajOne",
    description:
      "One of the three commanders at Mu\u02bftah, \u02bfAbdull\u0101h ibn Raw\u0101\u1e25ah \u0631\u0636\u064a \u0627\u0644\u0644\u0687 \u0639\u0646\u0647 was a poet whose words the Prophet \u00b7 praised, an Ans\u0101r\u012b whose loyalty never wavered, and a warrior whose final du\u02bf\u0101\u02be before battle became legendary among the Companions.",
    minutesPerSession: 8,
    totalPages: 12,
    audience: ["family", "madrasah"],
    status: "coming-soon",
    coverColor: "#0a2d1a",
    accentColor: "#d4a843",
  },
  {
    id: "muj-amr",
    categoryId: "mujahidin",
    seriesNumber: 6,
    title: "\u02bfAmr ibn al-\u02bf\u0100\u1e63",
    subtitle: "The Conqueror of Egypt",
    seriesName: "Great Muj\u0101hid\u012bn",
    author: "Compiled by Ust\u0101dh H\u0101shim \u00b7 SirajOne",
    description:
      "One of the most gifted military and political minds in early Islam. \u02bfAmr \u0631\u0636\u064a \u0627\u0644\u0644\u0647 \u0639\u0646\u0647 accepted Islam after years as one of its greatest opponents, then went on to open Egypt to Islam with an army of just 4,000 men \u2014 a conquest that changed the history of Africa and the world.",
    minutesPerSession: 10,
    totalPages: 16,
    audience: ["adult", "youth", "madrasah"],
    status: "coming-soon",
    coverColor: "#1a1a2d",
    accentColor: "#e8b84a",
  },
  {
    id: "muj-nusaybah",
    categoryId: "mujahidin",
    seriesNumber: 7,
    title: "Nu\u1e63aybah bint Ka\u02bfb",
    subtitle: "She Who Shielded the Prophet",
    seriesName: "Great Muj\u0101hid\u012bn",
    author: "Compiled by Ust\u0101dh H\u0101shim \u00b7 SirajOne",
    description:
      "At U\u1e25ud, when the soldiers scattered, Nu\u1e63aybah \u0631\u0636\u064a \u0627\u0644\u0644\u0647 \u0639\u0646\u0647\u0627 stood as a human shield for the Prophet \u00b7 \u2014 fighting with a sword, then a bow, until she received twelve wounds. The Prophet \u00b7 said: \u201cWherever I turned at U\u1e25ud, I saw Nu\u1e63aybah fighting to protect me.\u201d",
    minutesPerSession: 10,
    totalPages: 14,
    audience: ["family", "madrasah", "youth"],
    status: "coming-soon",
    coverColor: "#2d0a1a",
    accentColor: "#d4a843",
  },
  {
    id: "muj-khawlah",
    categoryId: "mujahidin",
    seriesNumber: 8,
    title: "Khawlah bint al-Azwar",
    subtitle: "The Female Knight of Islam",
    seriesName: "Great Muj\u0101hid\u012bn",
    author: "Compiled by Ust\u0101dh H\u0101shim \u00b7 SirajOne",
    description:
      "Called the \u201cFemale Kh\u0101lid ibn al-Wal\u012bd\u201d by Arab historians. Khawlah \u0631\u062d\u0645\u0647 \u0627\u0644\u0644\u0647 fought in the battles of Ajn\u0101dayn and Yarm\u016bk, charging alone into enemy lines to rescue her captured brother \u2014 a feat that astonished even the veteran commanders.",
    minutesPerSession: 10,
    totalPages: 14,
    audience: ["family", "madrasah", "youth"],
    status: "coming-soon",
    coverColor: "#1a0a2d",
    accentColor: "#e7d3a1",
  },
  {
    id: "muj-muthanna",
    categoryId: "mujahidin",
    seriesNumber: 9,
    title: "al-Muthann\u0101 ibn \u1e24\u0101rithah",
    subtitle: "The Lion of Iraq",
    seriesName: "Great Muj\u0101hid\u012bn",
    author: "Compiled by Ust\u0101dh H\u0101shim \u00b7 SirajOne",
    description:
      "The commander who kept the flame of the Iraqi conquest burning when others gave up. al-Muthann\u0101 \u0631\u062d\u0645\u0647 \u0627\u0644\u0644\u0647 spent years in guerrilla warfare against the Sassanid Empire before Kh\u0101lid arrived \u2014 a man of extraordinary patience, resilience and strategic brilliance.",
    minutesPerSession: 8,
    totalPages: 12,
    audience: ["adult", "madrasah"],
    status: "coming-soon",
    coverColor: "#2d1a0d",
    accentColor: "#d4a843",
  },
  {
    id: "muj-qaqaa",
    categoryId: "mujahidin",
    seriesNumber: 10,
    title: "Qa\u02bfq\u0101\u02bf ibn \u02bfAmr",
    subtitle: "The Warrior of a Thousand Battles",
    seriesName: "Great Muj\u0101hid\u012bn",
    author: "Compiled by Ust\u0101dh H\u0101shim \u00b7 SirajOne",
    description:
      "Sa\u02bfd ibn Ab\u012b Waqq\u0101\u1e63 declared at al-Q\u0101disiyyah: \u201cOne Qa\u02bfq\u0101\u02bf ibn \u02bfAmr is worth a thousand soldiers.\u201d \u0631\u062d\u0645\u0647 \u0627\u0644\u0644\u0647 A warrior whose name alone made armies hesitate, he played a decisive role in the conquest of Persia and the liberation of Iraq.",
    minutesPerSession: 8,
    totalPages: 12,
    audience: ["adult", "madrasah"],
    status: "coming-soon",
    coverColor: "#0d2d2d",
    accentColor: "#b88a32",
  },
  {
    id: "muj-dhirar",
    categoryId: "mujahidin",
    seriesNumber: 11,
    title: "Dhir\u0101r ibn al-Azwar",
    subtitle: "The Fearless Warrior",
    seriesName: "Great Muj\u0101hid\u012bn",
    author: "Compiled by Ust\u0101dh H\u0101shim \u00b7 SirajOne",
    description:
      "Brother of Khawlah bint al-Azwar and one of the most feared warriors in the Islamic conquests of the Levant. Dh\u012br\u0101r \u0631\u062d\u0645\u0647 \u0627\u0644\u0644\u0647 was known for fighting bare-chested as a sign of his fearlessness and his complete reliance on All\u0101h. He was captured, escaped, and fought again.",
    minutesPerSession: 8,
    totalPages: 12,
    audience: ["adult", "madrasah"],
    status: "coming-soon",
    coverColor: "#2a0a0a",
    accentColor: "#e8b84a",
  },

  // ═══════════════════════════════════════════════════════════════════
  // SECTION 7 — GREAT WOMEN OF ISLAM
  // (Nu\u1e63aybah and Khawlah appear here via roles from Section 6)
  // ═══════════════════════════════════════════════════════════════════

  {
    id: "gw-fatimah",
    categoryId: "great_women",
    seriesNumber: 1,
    title: "F\u0101\u1e6dimah al-Zahr\u0101\u02be",
    subtitle: "The Leader of the Women of Paradise",
    seriesName: "Great Women of Islam",
    author: "Compiled by Ust\u0101dh H\u0101shim \u00b7 SirajOne",
    description:
      "Daughter of the Prophet \u00b7 and wife of \u02bfAl\u012b \u0631\u0636\u064a \u0627\u0644\u0644\u0647 \u0639\u0646\u0647, F\u0101\u1e6dimah \u0631\u0636\u064a \u0627\u0644\u0644\u0647 \u0639\u0646\u0647\u0627 was described by the Prophet \u00b7 as \u201cthe leader of the women of Jannah.\u201d She is the connection between the Prophet\u2019s \u00b7 family line and the entire Ummah \u2014 a woman of extraordinary worship, sacrifice and love.",
    minutesPerSession: 10,
    totalPages: 14,
    audience: ["family", "madrasah", "youth"],
    status: "coming-soon",
    coverColor: "#2d0a1a",
    accentColor: "#d4a843",
  },
  // ═══════════════════════════════════════════════════════════════════
  // NEW — GREAT WOMEN (additional entries 2-5)
  // ═══════════════════════════════════════════════════════════════════

  {
    id: "gw-asma",
    categoryId: "great_women",
    seriesNumber: 2,
    title: "Asm\u0101\u02be bint Ab\u012b Bakr",
    subtitle: "The Lady of the Two Girdles",
    seriesName: "Great Women of Islam",
    author: "Compiled by Ust\u0101dh H\u0101shim \u00b7 SirajOne",
    description:
      "Daughter of Ab\u016b Bakr al-\u1e62idd\u012bq and sister of \u02bf\u0100\u02be\u0069sha \u0631\u0636\u064a \u0627\u0644\u0644\u0647 \u0639\u0646\u0647\u0627. Asm\u0101\u02be \u0631\u0636\u064a \u0627\u0644\u0644\u0647 \u0639\u0646\u0647\u0627 carried food to the Prophet \u00b7 and her father in the Cave of Thawr during the Hijrah \u2014 tearing her own girdle in two to secure the provisions. She lived past one hundred years, never losing her dignity or her sight until her final days.",
    minutesPerSession: 10,
    totalPages: 14,
    audience: ["family", "madrasah", "youth"],
    status: "coming-soon",
    coverColor: "#2a1a0a",
    accentColor: "#d4a843",
  },
  {
    id: "gw-umm-sulaym",
    categoryId: "great_women",
    seriesNumber: 3,
    title: "Umm Sulaym bint Milh\u0101n",
    subtitle: "The Woman Whose Dowry Was Islam",
    seriesName: "Great Women of Islam",
    author: "Compiled by Ust\u0101dh H\u0101shim \u00b7 SirajOne",
    description:
      "When Ab\u016b \u1e6calh\u0101h proposed to her, Umm Sulaym \u0631\u0636\u064a \u0627\u0644\u0644\u0647 \u0639\u0646\u0647\u0627 made his acceptance of Islam her m\u0101hr \u2014 perhaps the most beautiful dowry in Islamic history. She nursed the wounded at U\u1e25ud, carried a dagger into battle, and her patience at the death of her young son left the Prophet \u00b7 in admiration.",
    minutesPerSession: 10,
    totalPages: 14,
    audience: ["family", "madrasah"],
    status: "coming-soon",
    coverColor: "#0a1a2a",
    accentColor: "#e7d3a1",
  },
  {
    id: "gw-al-shifa",
    categoryId: "great_women",
    seriesNumber: 4,
    title: "al-Shif\u0101\u02be bint \u02bfAbdull\u0101h",
    subtitle: "The Teacher of Mad\u012bnah",
    seriesName: "Great Women of Islam",
    author: "Compiled by Ust\u0101dh H\u0101shim \u00b7 SirajOne",
    description:
      "One of the earliest women to accept Islam and one of the first to teach reading and writing in Mad\u012bnah. al-Shif\u0101\u02be \u0631\u0636\u064a \u0627\u0644\u0644\u0647 \u0639\u0646\u0647\u0627 was appointed by \u02bfUmar ibn al-Kha\u1e6d\u1e6d\u0101b as overseer of the marketplace \u2014 a position of public trust rare for anyone in that era.",
    minutesPerSession: 10,
    totalPages: 14,
    audience: ["madrasah", "family"],
    status: "coming-soon",
    coverColor: "#1a1a0a",
    accentColor: "#d4a843",
  },
  {
    id: "gw-umm-darda",
    categoryId: "great_women",
    seriesNumber: 5,
    title: "Umm al-Dard\u0101\u02be",
    subtitle: "The Scholar of Syria",
    seriesName: "Great Women of Islam",
    author: "Compiled by Ust\u0101dh H\u0101shim \u00b7 SirajOne",
    description:
      "Wife of Ab\u016b al-Dard\u0101\u02be \u0631\u0636\u064a \u0627\u0644\u0644\u0647 \u0639\u0646\u0647 and a great scholar in her own right. Umm al-Dard\u0101\u02be \u0631\u0636\u064a \u0627\u0644\u0644\u0647 \u0639\u0646\u0647\u0627 attended the circles of the Companions, narrated \u1e25ad\u012bth, and taught in the mosques of Damascus. The Caliph \u02bfAbd al-Malik ibn Marw\u0101n was among her students.",
    minutesPerSession: 10,
    totalPages: 14,
    audience: ["madrasah", "family"],
    status: "coming-soon",
    coverColor: "#0a1a1a",
    accentColor: "#b88a32",
  },

  // ═══════════════════════════════════════════════════════════════════
  // SECTION 6 — GREAT QURR\u0100\u02be OF THE \u1e62A\u1e24\u0100BAH
  // (Ubayy ibn Ka\u02bfb  → via roles from Section 3 Mufassir\u016bn)
  // (Mu\u02bfd\u0101dh ibn Jabal → via roles from Section 5 Fuqah\u0101\u02be)
  // ═══════════════════════════════════════════════════════════════════

  {
    id: "qr-salim",
    categoryId: "qurra",
    seriesNumber: 1,
    title: "S\u0101lim Mawl\u0101 Ab\u012b Hudhayfah",
    subtitle: "One of the Four Masters of the Qur\u02be\u0101n",
    seriesName: "Great Qurr\u0101\u02be of the \u1e62a\u1e25\u0101bah",
    author: "Compiled by Ust\u0101dh H\u0101shim \u00b7 SirajOne",
    description:
      "The Prophet \u00b7 commanded: \u201cLearn the Qur\u02be\u0101n from four: \u02bfAbdull\u0101h ibn Mas\u02bfud, S\u0101lim, Mu\u02bfd\u0101dh, and Ubayy ibn Ka\u02bfb.\u201d S\u0101lim \u0631\u0636\u064a \u0627\u0644\u0644\u0647 \u0639\u0646\u0647 was a freed slave adopted by Ab\u016b Hudhayfah \u2014 yet his rank in Qur\u02be\u0101nic knowledge was so high he stood among the greatest reciters. He was martyred at the Battle of Yam\u0101mah, banner in hand.",
    minutesPerSession: 10,
    totalPages: 14,
    audience: ["madrasah", "family"],
    status: "coming-soon",
    coverColor: "#0a1a2d",
    accentColor: "#d4a843",
  },
  {
    id: "qr-abu-darda",
    categoryId: "qurra",
    seriesNumber: 2,
    title: "Ab\u016b al-Dard\u0101\u02be",
    subtitle: "The Wise Reciter of the Ummah",
    seriesName: "Great Qurr\u0101\u02be of the \u1e62a\u1e25\u0101bah",
    author: "Compiled by Ust\u0101dh H\u0101shim \u00b7 SirajOne",
    description:
      "One of the four named by the Prophet \u00b7 as the greatest reciters of the Qur\u02be\u0101n, Ab\u016b al-Dard\u0101\u02be \u0631\u0636\u064a \u0627\u0644\u0644\u0647 \u0639\u0646\u0647 established a school of Qur\u02be\u0101n in Damascus with over 1,600 students \u2014 a number unmatched in his era. He was also a judge, scholar and ascetic whose wisdom the Prophet \u00b7 praised. His wife Umm al-Dard\u0101\u02be was herself a celebrated scholar.",
    minutesPerSession: 10,
    totalPages: 14,
    audience: ["madrasah", "family"],
    status: "coming-soon",
    coverColor: "#1a2d1a",
    accentColor: "#b88a32",
  },

];

// ── Helpers ────────────────────────────────────────────────────────────────

export function getCategory(id: CategoryId): LibraryCategory | undefined {
  return LIBRARY_CATEGORIES.find((c) => c.id === id);
}

/**
 * Returns books where this is their primary category OR one of their roles.
 * This prevents duplicate cards while allowing cross-section membership.
 */
export function getBooksByCategory(categoryId: CategoryId): BookEntry[] {
  return LIBRARY_BOOKS.filter(
    (b) => b.categoryId === categoryId || (b.roles ?? []).includes(categoryId)
  );
}

export function getAvailableBooks(): BookEntry[] {
  return LIBRARY_BOOKS.filter((b) => b.status === "available");
}

export function getBookById(id: string): BookEntry | undefined {
  return LIBRARY_BOOKS.find((b) => b.id === id);
}

/**
 * Returns the saved reader page index for a lessonKey, or null if never opened.
 * Reader stores position at `our_legacy_reader_page:${lessonKey}`.
 */
export function getSavedReaderPage(lessonKey: string): number | null {
  const val = localStorage.getItem(`our_legacy_reader_page:${lessonKey}`);
  return val !== null ? Number(val) : null;
}

export function getBookProgress(bookId: string): number {
  const book = getBookById(bookId);
  if (book?.lessonKey) {
    const saved = getSavedReaderPage(book.lessonKey);
    if (saved === null) return 0;
    // sirah_journey: 58 pages total (indices 0-57) as of Lesson 8
    return Math.min(100, Math.round((saved / 57) * 100));
  }
  // Legacy fallback for books without reader content
  const currentPage = Number(localStorage.getItem(`our_legacy_book_${bookId}_page`) ?? "0");
  if (!book || book.totalPages === 0) return 0;
  return Math.round((currentPage / book.totalPages) * 100);
}

export function hasBookProgress(bookId: string): boolean {
  const book = getBookById(bookId);
  if (book?.lessonKey) {
    return getSavedReaderPage(book.lessonKey) !== null;
  }
  return localStorage.getItem(`our_legacy_book_${bookId}_page`) !== null;
}

/** Section-ordered categories (excludes 'sirah' which is featured separately). */
export const SECTION_CATEGORIES = LIBRARY_CATEGORIES.filter(
  (c) => c.sectionNumber !== undefined
).sort((a, b) => (a.sectionNumber ?? 0) - (b.sectionNumber ?? 0));
