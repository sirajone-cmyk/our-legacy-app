/**
 * OUR LEGACY — Personality Content Registry
 *
 * EDITORIAL RULES — read before modifying:
 *
 *  1. Only set status: "ready" when content has been WRITTEN and REVIEWED
 *     by Ustādh Hāshim or a qualified Islamic scholar.
 *
 *  2. "in_preparation" = being compiled/drafted but not yet published.
 *
 *  3. "needs_verification" = historical reports exist but specific accounts
 *     require cross-referencing with recognised classical sources before
 *     publication. Do NOT publish such content without scholar review.
 *
 *  4. "historical_reports_only" = figure appears in classical sources but
 *     details need careful authentication — do not publish without a
 *     qualified scholar reviewing the specific narrations.
 *
 *  5. Do NOT automatically place disputed figures at the same verification
 *     level as firmly established Ṣaḥābah.
 *
 *  6. This file is STRUCTURE ONLY — no biographies are stored here.
 *     All actual lesson content lives in readerContent.ts.
 */

// ── Status Types ─────────────────────────────────────────────────────────────

/**
 * Editorial/publication status for each personality.
 *
 * - ready                  Content written, reviewed, and published in the reader.
 * - in_preparation         Content being compiled; not yet published.
 * - needs_verification     Accounts exist in classical sources but require
 *                          scholar review of specific narrations before publication.
 * - historical_reports_only  Figure documented in classical sources only;
 *                            narration quality varies — full verification required.
 */
export type ContentStatus =
  | "ready"
  | "in_preparation"
  | "needs_verification"
  | "historical_reports_only";

/**
 * Quality grade of available Islamic references for this personality.
 *
 * - sahih_hadith_primary      Documented in Ṣaḥīḥ Bukhārī/Muslim — highest grade.
 * - major_hadith_collections  Documented in Tirmidhī, Abū Dāwūd, Ibn Mājah, etc.
 * - classical_sirah_tarikh    Classical Sīrah and Tārīkh works (Ibn Hishām,
 *                              Ibn Kathīr, Ṭabarī). Good but not Ṣaḥīḥ hadith.
 * - tabaqat_biographical      Biographical dictionaries (Ibn Saʿd, Ibn Ḥajar).
 * - requires_investigation    Specialist research required before any publication.
 */
export type ReferenceQuality =
  | "sahih_hadith_primary"
  | "major_hadith_collections"
  | "classical_sirah_tarikh"
  | "tabaqat_biographical"
  | "requires_investigation";

// ── Personality Entry ─────────────────────────────────────────────────────────

export type PersonalityEntry = {
  /** Unique identifier — matches libraryData.ts BookEntry id */
  id: string;

  /** Transliterated Arabic name */
  name: string;

  /** Arabic script name */
  nameAr: string;

  /**
   * Honorific (ﷺ, رضي الله عنه, عليه السلام, رحمه الله).
   * Never omit. Never auto-insert for figures whose status is unconfirmed.
   */
  honorific: string;

  /** Which book in LIBRARY_BOOKS this entry maps to */
  libraryBookId: string;

  /**
   * Reader lesson key (from readerContent.ts).
   * undefined = content not yet published in the reader.
   */
  contentKey?: string;

  /** Which series/collection this personality belongs to */
  collection: "sirah" | "khulafa" | "sahabah" | "sahabiyyat" | "shuhada" | "scholars" | "history";

  /** Current editorial/publication status */
  status: ContentStatus;

  /** Best quality of references available for this personality */
  referenceQuality: ReferenceQuality;

  /**
   * Explanatory note for the editorial team.
   * Describes what is confirmed, what needs work, and any sensitivities.
   */
  verificationNote: string;

  /**
   * Classical Islamic sources that writers should consult.
   * List only authentic, recognised works.
   */
  primarySources: string[];

  /**
   * Cautions for writers — what to be careful about when drafting content.
   * Empty array if no special cautions.
   */
  writerCautions: string[];
};

// ── Registry ──────────────────────────────────────────────────────────────────

export const PERSONALITY_REGISTRY: PersonalityEntry[] = [

  // ════════════════════════════════════════════════════════════════════════════
  // SĪRAH
  // ════════════════════════════════════════════════════════════════════════════

  {
    id: "sirah-prophet-001",
    name: "Prophet Muḥammad",
    nameAr: "مُحَمَّد",
    honorific: "ﷺ",
    libraryBookId: "sirah-prophet-001",
    contentKey: "sirah_journey",
    collection: "sirah",
    status: "ready",
    referenceQuality: "sahih_hadith_primary",
    verificationNote:
      "Opening lesson published and reviewed. The Sīrah is the most documented life in Islamic history. "
      + "Full multi-section content in preparation. All published segments have been reviewed by Ustādh Hāshim.",
    primarySources: [
      "The Noble Qurʾān",
      "Ṣaḥīḥ al-Bukhārī",
      "Ṣaḥīḥ Muslim",
      "As-Sīrah an-Nabawiyyah — Ibn Hishām (rearranged from Ibn Isḥāq)",
      "Al-Bidāyah wa al-Nihāyah — Ibn Kathīr",
      "Ar-Raḥīq al-Makhtūm — Ṣafī al-Raḥmān al-Mubārakpūrī",
      "Zād al-Maʿād — Ibn al-Qayyim al-Jawziyyah",
      "Siyar Aʿlām al-Nubalāʾ — Imām al-Dhahabī",
    ],
    writerCautions: [],
  },

  // ════════════════════════════════════════════════════════════════════════════
  // ṢAḤĀBAH — The Four Rightly Guided Caliphs
  // (Most firmly documented in Ṣaḥīḥ sources)
  // ════════════════════════════════════════════════════════════════════════════

  {
    id: "sahabah-abu-bakr",
    name: "Abū Bakr al-Ṣiddīq",
    nameAr: "أَبُو بَكْرٍ الصِّدِّيق",
    honorific: "رضي الله عنه",
    libraryBookId: "sahabah-abu-bakr",
    contentKey: undefined,
    collection: "sahabah",
    status: "in_preparation",
    referenceQuality: "sahih_hadith_primary",
    verificationNote:
      "The most distinguished Companion after the Prophets. His virtues, closeness to the Prophet ﷺ, "
      + "and Caliphate are extensively documented in Ṣaḥīḥ sources. "
      + "Chapter structure drafted. Reader content not yet published.",
    primarySources: [
      "Ṣaḥīḥ al-Bukhārī — Kitāb Faḍāʾil Aṣḥāb al-Nabī, multiple chapters",
      "Ṣaḥīḥ Muslim — Faḍāʾil al-Ṣaḥābah",
      "Sūrah al-Tawbah 9:40 — the Cave of Thawr",
      "Al-Bidāyah wa al-Nihāyah — Ibn Kathīr",
      "Siyar Aʿlām al-Nubalāʾ — Imām al-Dhahabī",
      "Al-Iṣābah fī Tamyīz al-Ṣaḥābah — Ibn Ḥajar al-ʿAsqalānī",
      "Tārīkh al-Ṭabarī (Ridda Wars — verify individually)",
    ],
    writerCautions: [
      "Ridda Wars accounts come primarily from Ṭabarī — present as historical reports, not Ṣaḥīḥ hadith.",
      "Prioritise his personal virtues (Ṣiddīqiyyah, generosity, steadfastness) as the core of the biography.",
    ],
  },

  {
    id: "sahabah-umar",
    name: "ʿUmar ibn al-Khaṭṭāb",
    nameAr: "عُمَر بْن الخَطَّاب",
    honorific: "رضي الله عنه",
    libraryBookId: "sahabah-umar",
    contentKey: undefined,
    collection: "sahabah",
    status: "in_preparation",
    referenceQuality: "sahih_hadith_primary",
    verificationNote:
      "Second Caliph. Conversion, virtues, justice, and Caliphate well-documented in Ṣaḥīḥ sources. "
      + "Content being compiled. Military conquests (Syria, Persia, Egypt) come from classical chronicles "
      + "and should be presented as historical reports.",
    primarySources: [
      "Ṣaḥīḥ al-Bukhārī — Faḍāʾil ʿUmar ibn al-Khaṭṭāb",
      "Ṣaḥīḥ Muslim — Hadith 2391, 2399 and related chapters",
      "Al-Bidāyah wa al-Nihāyah — Ibn Kathīr",
      "Siyar Aʿlām al-Nubalāʾ — Imām al-Dhahabī",
      "Al-Fārūq ʿUmar — Muḥibb al-Dīn al-Khaṭīb (classical compilation)",
      "Tārīkh al-Ṭabarī",
      "Futūḥ al-Buldān — al-Balādhurī",
    ],
    writerCautions: [
      "Military conquest details (Syria, Iraq, Persia, Egypt) often come from Ṭabarī and Balādhurī — "
      + "treat as historical narrative, not Ṣaḥīḥ hadith.",
      "Famous personal accounts (night patrols, carrying food) appear in reliable classical sources "
      + "but cite them carefully — note which source each comes from.",
    ],
  },

  {
    id: "sahabah-uthman",
    name: "ʿUthmān ibn ʿAffān",
    nameAr: "عُثْمَان بْن عَفَّان",
    honorific: "رضي الله عنه",
    libraryBookId: "sahabah-uthman",
    contentKey: undefined,
    collection: "sahabah",
    status: "in_preparation",
    referenceQuality: "sahih_hadith_primary",
    verificationNote:
      "Third Caliph. His virtues, generosity, and role in compiling the Muṣḥaf al-ʿUthmānī are among "
      + "the most important chapters of his biography. Content in preparation. "
      + "Events around his martyrdom are historically sensitive — do not publish without senior scholar review.",
    primarySources: [
      "Ṣaḥīḥ al-Bukhārī — Kitāb Faḍāʾil al-Qurʾān (compilation chapter) and Faḍāʾil ʿUthmān",
      "Ṣaḥīḥ Muslim — Faḍāʾil al-Ṣaḥābah",
      "Al-Bidāyah wa al-Nihāyah — Ibn Kathīr",
      "Siyar Aʿlām al-Nubalāʾ — Imām al-Dhahabī",
      "Al-Iṣābah fī Tamyīz al-Ṣaḥābah — Ibn Ḥajar al-ʿAsqalānī",
    ],
    writerCautions: [
      "CRITICAL: Events surrounding his martyrdom are historically disputed and politically sensitive. "
      + "Do NOT publish these sections without senior scholar review.",
      "Avoid ALL sectarian framing. The Ahlus Sunnah wal Jamaʿah position must be maintained throughout.",
      "The Muṣḥaf ʿUthmānī chapter is the priority — this is among his greatest contributions and is "
      + "well-documented in Ṣaḥīḥ sources.",
    ],
  },

  {
    id: "sahabah-ali",
    name: "ʿAlī ibn Abī Ṭālib",
    nameAr: "عَلِيّ بْن أَبِي طَالِب",
    honorific: "رضي الله عنه",
    libraryBookId: "sahabah-ali",
    contentKey: undefined,
    collection: "sahabah",
    status: "in_preparation",
    referenceQuality: "sahih_hadith_primary",
    verificationNote:
      "Fourth Caliph. Raised in the household of the Prophet ﷺ. His knowledge, courage, bravery, "
      + "and love for the Dīn are well-documented in Ṣaḥīḥ sources and are the priority focus. "
      + "Content in preparation. Civil war events (Battle of Jamal, Ṣiffīn) require senior scholar review "
      + "before any content on those topics is drafted or published.",
    primarySources: [
      "Ṣaḥīḥ al-Bukhārī — Faḍāʾil ʿAlī ibn Abī Ṭālib",
      "Ṣaḥīḥ Muslim — Hadith 2404, 2408 and related",
      "Al-Bidāyah wa al-Nihāyah — Ibn Kathīr",
      "Siyar Aʿlām al-Nubalāʾ — Imām al-Dhahabī",
      "Al-Iṣābah fī Tamyīz al-Ṣaḥābah — Ibn Ḥajar al-ʿAsqalānī",
    ],
    writerCautions: [
      "CRITICAL: Civil war events (Battle of Jamal, Ṣiffīn) must NOT be drafted or published without "
      + "explicit senior scholar approval and review.",
      "Avoid ALL sectarian framing. This is a family and madrasah audience — "
      + "his knowledge, bravery, and virtues are the core focus.",
      "His close relationship with the Prophet ﷺ from childhood is well-documented "
      + "and forms an important foundation of the biography.",
    ],
  },

  // ════════════════════════════════════════════════════════════════════════════
  // ṢAḤĀBAH — Other Noble Companions
  // ════════════════════════════════════════════════════════════════════════════

  {
    id: "sahabah-khalid",
    name: "Khālid ibn al-Walīd",
    nameAr: "خَالِد بْن الوَلِيد",
    honorific: "رضي الله عنه",
    libraryBookId: "sahabah-khalid",
    contentKey: undefined,
    collection: "sahabah",
    status: "needs_verification",
    referenceQuality: "classical_sirah_tarikh",
    verificationNote:
      "His status as a Ṣaḥābī, his conversion to Islām, and the Prophet ﷺ bestowing the title "
      + "'Sayf Allāh al-Maslūl' are confirmed. His military campaigns (Arabia, Iraq, Syria) are "
      + "documented in classical Tārīkh works but specific battle accounts vary between sources. "
      + "Casualty figures and tactical details should be presented as historical reports only. "
      + "Some reports require verification from recognised historical and biographical sources "
      + "before publication.",
    primarySources: [
      "Ṣaḥīḥ al-Bukhārī — accounts of the Battle of Muʾtah",
      "Al-Bidāyah wa al-Nihāyah — Ibn Kathīr",
      "Futūḥ al-Buldān — al-Balādhurī",
      "Tārīkh al-Ṭabarī",
      "Siyar Aʿlām al-Nubalāʾ — Imām al-Dhahabī",
      "Al-Iṣābah fī Tamyīz al-Ṣaḥābah — Ibn Ḥajar al-ʿAsqalānī",
    ],
    writerCautions: [
      "Battle casualty figures differ significantly between sources — do not present specific "
      + "numbers as definitive historical facts.",
      "The title 'Sayf Allāh al-Maslūl' is authentic (given by the Prophet ﷺ at Muʾtah) — cite the source properly.",
      "Some popular accounts of his campaigns in Iraq and Syria come from unreliable chains — "
      + "cross-reference every specific claim with classical sources before drafting.",
      "This entry is status: needs_verification. Do not publish ANY campaign content without "
      + "scholar cross-referencing of the specific narrations used.",
    ],
  },

  {
    id: "sahabah-bilal",
    name: "Bilāl ibn Rabāḥ",
    nameAr: "بِلاَل بْن رَبَاح",
    honorific: "رضي الله عنه",
    libraryBookId: "sahabah-bilal",
    contentKey: undefined,
    collection: "sahabah",
    status: "in_preparation",
    referenceQuality: "sahih_hadith_primary",
    verificationNote:
      "Well-documented in Ṣaḥīḥ sources. His persecution, purchase and liberation by Abū Bakr رضي الله عنه, "
      + "role as the first Muezzin of Islām, and his standing in Jannah are confirmed in authentic hadith. "
      + "Content in preparation. His later life (migration to Syria) and accounts of dreams "
      + "appear in classical sources — verify chain quality before including.",
    primarySources: [
      "Ṣaḥīḥ al-Bukhārī — multiple hadith referencing Bilāl رضي الله عنه",
      "Ṣaḥīḥ Muslim",
      "Al-Bidāyah wa al-Nihāyah — Ibn Kathīr",
      "Siyar Aʿlām al-Nubalāʾ — Imām al-Dhahabī",
      "Al-Iṣābah fī Tamyīz al-Ṣaḥābah — Ibn Ḥajar al-ʿAsqalānī",
      "Ṭabaqāt al-Kubrā — Ibn Saʿd",
    ],
    writerCautions: [
      "His migration to Syria and accounts of dreams towards the end of his life appear in classical "
      + "sources but vary in chain quality — verify the specific narration before including.",
    ],
  },

  // ════════════════════════════════════════════════════════════════════════════
  // PLACEHOLDER — Future Series (structure only, no content yet)
  // ════════════════════════════════════════════════════════════════════════════

  // Anbiyāʾ Series (future)
  // Uncomment and complete each entry when the series is ready to begin drafting.
  //
  // {
  //   id: "anbiya-adam",
  //   name: "Ādam",
  //   nameAr: "آدَم",
  //   honorific: "عليه السلام",
  //   libraryBookId: "anbiya-adam-001",        // not yet in libraryData.ts
  //   contentKey: undefined,
  //   collection: "anbiya",
  //   status: "in_preparation",
  //   referenceQuality: "sahih_hadith_primary",
  //   verificationNote: "Creation, fall, and story documented in Qurʾān and Ṣaḥīḥ hadith. "
  //     + "Israʾīliyyāt narrations must be excluded or clearly labelled.",
  //   primarySources: [
  //     "The Noble Qurʾān (Sūrahs al-Baqarah, al-Aʿrāf, Ṭā Hā, Ṣād)",
  //     "Ṣaḥīḥ al-Bukhārī — Kitāb al-Anbiyāʾ",
  //     "Ṣaḥīḥ Muslim — Kitāb al-Jannah",
  //     "Qiṣaṣ al-Anbiyāʾ — Ibn Kathīr",
  //   ],
  //   writerCautions: [
  //     "STRICTLY exclude Israʾīliyyāt (Jewish/Christian narrative additions) that contradict Qurʾān or Sunnah.",
  //     "All details about creation, Jannah, and the Fall must come from Qurʾān or Ṣaḥīḥ hadith only.",
  //   ],
  // },

];

// ── Helper Functions ──────────────────────────────────────────────────────────

/** Get a personality entry by its library book ID. */
export function getPersonalityByBookId(
  libraryBookId: string
): PersonalityEntry | undefined {
  return PERSONALITY_REGISTRY.find((p) => p.libraryBookId === libraryBookId);
}

/** Get all personalities in a given collection. */
export function getPersonalitiesByCollection(
  collection: PersonalityEntry["collection"]
): PersonalityEntry[] {
  return PERSONALITY_REGISTRY.filter((p) => p.collection === collection);
}

/** Get all personalities at a given content status. */
export function getPersonalitiesByStatus(
  status: ContentStatus
): PersonalityEntry[] {
  return PERSONALITY_REGISTRY.filter((p) => p.status === status);
}

/** Returns true if this personality has published reader content. */
export function hasPublishedContent(entry: PersonalityEntry): boolean {
  return entry.status === "ready" && entry.contentKey !== undefined;
}
