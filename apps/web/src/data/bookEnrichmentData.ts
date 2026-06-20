/**
 * OUR LEGACY — Book Enrichment Data
 *
 * Provides per-book structured data for the enhanced tab system:
 *   - Milestones  → Timeline Tab (Milestone Tracker)
 *   - Characters  → Profiles Tab
 *   - Source Reliability → References Tab (tier-based)
 *   - References  → References Tab
 *   - Auth Notes  → References Tab
 *   - Editor Refs → Internal only (never rendered to readers)
 *
 * All fields are optional — tabs hide themselves when data is absent.
 */

// ── Types ─────────────────────────────────────────────────────────────────────

export type MilestoneEntry = {
  year: string;
  /** Age of Prophet ﷺ — only when meaningful: "Newborn" | "Age 6" | "Age 40" etc. */
  age?: string;
  /** Historical place name — concise */
  location?: string;
  title: string;
  description: string;
  /** One-line significance note — displayed in EB Garamond italic below description */
  significance?: string;
  /** Visually highlighted — used for pivotal moments */
  highlight?: boolean;
};

export type CharacterProfile = {
  /** Display name (transliterated or English) */
  name: string;
  /** Name in Arabic script — displayed prominently at top of card */
  arabicName?: string;
  /** Relationship to the Prophet ﷺ or the lesson's main subject */
  relationship: string;
  /** 2–4 sentence profile summary — the primary description */
  knownFor: string;
  /** Lesson connection — "Lesson 6 — The Death of Āminah" */
  appearsIn?: string;
  /** Optional brief note on their status (e.g. Companion, Ṣaḥābiyyah) */
  status?: string;
};

export type SourceTier = "established" | "accepted" | "discussed";

export type SourceReliabilityEntry = {
  tier: SourceTier;
  text: string;
};

export type ReferenceEntry = {
  category: "quran" | "hadith" | "sirah" | "historical";
  /** Source title — e.g. "Ṣaḥīḥ al-Bukhārī, Ḥadīth 3" */
  title: string;
  /** Author / collection / brief description */
  detail: string;
  /** Which tier this source is classified under */
  reliabilityTier?: SourceTier;
  /** How this source was used in the lessons */
  usedFor?: string;
};

export type AuthNote = {
  /** "✓" | "◎" | "⚠" — used for visual rendering */
  marker: "✓" | "◎" | "⚠";
  text: string;
};

export type BookEnrichment = {
  milestones?: MilestoneEntry[];
  characterProfiles?: CharacterProfile[];
  sourceReliability?: SourceReliabilityEntry[];
  references?: ReferenceEntry[];
  authNotes?: AuthNote[];
  /** Never rendered to readers — for internal editorial verification only */
  editorReferences?: string[];
};

// ── Data ──────────────────────────────────────────────────────────────────────

export const BOOK_ENRICHMENT: Record<string, BookEnrichment> = {

  // ── The Seal of the Prophets ﷺ — Sīrah Series ────────────────────────────
  "sirah-prophet-001": {

    milestones: [
      {
        year: "~570 CE",
        age: "Newborn",
        location: "Makkah al-Mukarramah",
        title: "Year of the Elephant — Birth of Rasūlullāh ﷺ",
        description: "Abraha al-Ashram marches on Makkah with his elephant army. Allāh destroys it with birds carrying stones. In that same year — on a Monday in Rabīʿ al-Awwal — Muḥammad ﷺ is born to Āminah bint Wahb in Makkah.",
        significance: "The miraculous beginning of the final Prophet's life on earth.",
        highlight: true,
      },
      {
        year: "~570–575 CE",
        location: "Banū Saʿd, Arabian Peninsula",
        title: "The Desert Years with Banū Saʿd",
        description: "The infant Muḥammad ﷺ is placed in the care of Ḥalīmah al-Saʿdiyyah from the tribe of Banū Saʿd. Blessings fall upon her household — her animals give abundant milk and her crops flourish. He remains in the desert for approximately four to five years.",
        significance: "Divine blessings prepared the Prophet ﷺ through a pure desert upbringing far from the corruption of city life.",
      },
      {
        year: "~574 CE",
        location: "Banū Saʿd, Arabian Peninsula",
        title: "The Opening of the Chest — Shaqq al-Ṣadr",
        description: "Two angels appear and open the chest of the young Muḥammad ﷺ. His heart is removed, purified with zamzam water, and returned. Ḥalīmah, fearing for him, returns him to Makkah to his mother.",
        significance: "His heart was purified for the greatest mission ever entrusted to a human being.",
        highlight: true,
      },
      {
        year: "~576 CE",
        age: "Age 6",
        location: "Al-Abwāʾ",
        title: "Death of Āminah — The Prophet ﷺ Becomes a Full Orphan",
        description: "Āminah bint Wahb makes the journey from Makkah to Yathrib with her young son to visit the grave of ʿAbdullāh. On the return journey she falls ill and dies at Al-Abwāʾ. Umm Ayman brings him back to Makkah and his grandfather ʿAbd al-Muṭṭalib.",
        significance: "He became a full orphan — a status the Qurʾān would later honour as a mark of Allāh's care.",
        highlight: true,
      },
      {
        year: "~578 CE",
        age: "Age 8",
        location: "Makkah al-Mukarramah",
        title: "Death of ʿAbd al-Muṭṭalib",
        description: "The beloved grandfather who had raised and protected the young Prophet ﷺ passes away at approximately 80 years of age. He had shown the young Prophet ﷺ exceptional honour — seating him at his side and telling his sons: 'This child will be of great importance.' Guardianship now passes to his uncle Abū Ṭālib.",
        significance: "A third loss before childhood's end — each loss deepening his reliance upon Allāh alone.",
      },
      {
        year: "~582 CE",
        age: "Age 12",
        location: "Shām (Syria)",
        title: "Journey to Shām — Meeting the Monk Baḥīrā",
        description: "At approximately 12 years old, the Prophet ﷺ travels with Abū Ṭālib on a trading journey to Shām. The Christian monk Baḥīrā recognises the signs of prophethood between his shoulders and in his face. He warns Abū Ṭālib: 'Guard this child from the Jews.'",
        significance: "A Christian scholar of scripture recognised the final Prophet before the world did.",
      },
      {
        year: "~594–595 CE",
        age: "Age 25",
        location: "Makkah al-Mukarramah",
        title: "Marriage to Khadījah bint Khuwaylid",
        description: "The Prophet ﷺ, now 25 years old, marries Khadījah رضي الله عنها — a noble and respected businesswoman of Makkah, fifteen years his senior. She had observed his honesty and character on a trading journey to Shām and proposed the marriage. She becomes his first wife, his greatest supporter, and the first person to accept Islām.",
        significance: "Twenty-five years of the deepest companionship — his greatest partner in life and in faith.",
        highlight: true,
      },
      {
        year: "~605 CE",
        age: "Age 35",
        location: "The Kaʿbah, Makkah",
        title: "The Replacement of the Black Stone",
        description: "A dispute breaks out among the clans of Quraysh over who should place the Black Stone back in the Kaʿbah after renovation. The Prophet ﷺ, before prophethood, resolves the dispute peacefully — placing the stone on a cloth and letting each clan lift it together. All accepted his judgement without dissent.",
        significance: "His wisdom and impartiality earned him the title Al-Amīn — the Trustworthy — among all of Quraysh.",
      },
      {
        year: "610 CE",
        age: "Age 40",
        location: "Cave of Ḥirāʾ, Makkah",
        title: "The First Revelation — Iqraʾ",
        description: "In the Cave of Ḥirāʾ on Jabal al-Nūr, during the month of Ramaḍān, the angel Jibrīl appears and commands: \"Iqraʾ\" — Read. The first five verses of Sūrah al-ʿAlaq are revealed. The Prophet ﷺ rushes home trembling. Khadījah wraps him in a garment and consoles him.",
        significance: "The Qurʾān descended and the final prophethood began — the greatest event in human history after creation.",
        highlight: true,
      },
      {
        year: "610–613 CE",
        location: "House of al-Arqam, Makkah",
        title: "The Secret Daʿwah — Three Years",
        description: "The Prophet ﷺ teaches Islām privately to a small circle: Khadījah, Abū Bakr, ʿAlī, Zayd ibn Ḥārithah, and others. The early Muslims gather secretly at the House of al-Arqam on Mount Ṣafā. Approximately forty people accept Islām in these years.",
        significance: "The seeds of the greatest ummah on earth were planted in secret — tested, purified, and made sincere.",
      },
      {
        year: "613 CE",
        location: "Mount Ṣafā, Makkah",
        title: "The Public Call — ʿAlā al-Ṣafā",
        description: "Allāh commands: \"Warn your nearest kindred.\" The Prophet ﷺ climbs Mount Ṣafā and publicly announces prophethood to all of Quraysh. His uncle Abū Lahab rejects him with insults. Sūrah al-Masad is revealed in response. Open persecution of the early Muslims begins.",
        significance: "The first public announcement of prophethood — the test of patience for the whole ummah began here.",
        highlight: true,
      },
      {
        year: "614–615 CE",
        location: "Abyssinia (Ethiopia)",
        title: "The First Hijrah to Abyssinia",
        description: "Persecution reaches a peak. The Prophet ﷺ permits a group of Muslims to migrate to Abyssinia to seek protection under the just Christian king, al-Najāshī (Negus). Jaʿfar ibn Abī Ṭālib recites Sūrah Maryam before the king. The Najāshī weeps and grants them protection.",
        significance: "The first migration in Islām — Allāh showed that justice can exist even outside the Muslim community.",
      },
      {
        year: "619 CE",
        location: "Makkah al-Mukarramah",
        title: "The Year of Grief — ʿĀm al-Ḥuzn",
        description: "Within weeks of each other, Khadījah رضي الله عنها — the Prophet's ﷺ beloved wife of 25 years — and Abū Ṭālib — his uncle and protector — both pass away. The Prophet ﷺ is left without his greatest personal support and his political shield. Persecution intensifies.",
        significance: "The deepest pain of his personal life — and yet he continued with greater resolve.",
        highlight: true,
      },
      {
        year: "619–620 CE",
        location: "Makkah → Jerusalem → The Heavens",
        title: "The Night Journey and Ascension — Isrāʾ wa al-Miʿrāj",
        description: "Allāh takes the Prophet ﷺ from Makkah to Jerusalem in a single night, and then through the seven heavens. He meets the Prophets, sees Paradise and Hellfire, and stands before Allāh. The five daily prayers are prescribed as a direct gift — without any intermediary.",
        significance: "The five daily prayers were the gift from Allāh to His Prophet ﷺ — and through him, to every believer until Judgement Day.",
        highlight: true,
      },
      {
        year: "622 CE",
        age: "Age 52",
        location: "Makkah → Madīnah",
        title: "The Hijrah to Madīnah",
        description: "After 13 years of patience in Makkah, the Prophet ﷺ migrates to Madīnah (Yathrib) with Abū Bakr رضي الله عنه. They hide for three nights in the Cave of Thawr while the Quraysh search for them. Upon arriving in Madīnah, the city erupts in joy. This marks the beginning of the Islamic calendar — 1 AH.",
        significance: "Year One of the Islamic calendar — a new community, a new state, and a new era of civilisation.",
        highlight: true,
      },
      {
        year: "624 CE",
        location: "Wells of Badr",
        title: "Battle of Badr — 2 AH",
        description: "313 Muslims face an army of 1,000 Quraysh at the wells of Badr on 17 Ramaḍān. Allāh sends His angels. The Muslims win a decisive victory. 70 of the enemy are killed including Abū Jahl; 70 are taken prisoner. This is the first major military confrontation of Islām.",
        significance: "Allāh's angels descended and fought alongside 313 believers — proof that help comes to those who stand firm in truth.",
        highlight: true,
      },
      {
        year: "625 CE",
        location: "Mount Uḥud, near Madīnah",
        title: "Battle of Uḥud — 3 AH",
        description: "The Muslims suffer a painful setback at the foot of Mount Uḥud when a group of archers leaves their position against the Prophet's ﷺ command. 70 Companions are martyred, including Ḥamzah رضي الله عنه, the Lion of Allāh. The Prophet ﷺ himself is injured in the face.",
        significance: "A painful lesson in the consequences of disobedience — and the importance of holding firm to the command of the leader.",
      },
      {
        year: "627 CE",
        location: "Madīnah",
        title: "Battle of the Trench — Al-Khandaq — 5 AH",
        description: "A coalition of 10,000 marches on Madīnah. On the advice of Salmān al-Fārisī رضي الله عنه, the Muslims dig a trench around the exposed side of the city. After weeks of standoff and attempted crossings, Allāh sends a fierce wind that scatters the enemy. The siege fails without a major battle.",
        significance: "10,000 enemies were scattered by divine wind — Allāh's help came in the most unexpected form.",
      },
      {
        year: "628 CE",
        location: "Ḥudaybiyyah, near Makkah",
        title: "Treaty of Ḥudaybiyyah — 6 AH",
        description: "The Prophet ﷺ and 1,400 Companions travel to Makkah for ʿUmrah. They are stopped at Ḥudaybiyyah. A 10-year peace treaty is signed — appearing outwardly unfavourable to the Muslims. Allāh calls it a clear victory: Sūrah al-Fatḥ. Within two years, Makkah was open.",
        significance: "A masterpiece of prophetic wisdom — what appeared as a concession was in truth the key to victory.",
      },
      {
        year: "630 CE",
        age: "Age 60",
        location: "Makkah al-Mukarramah",
        title: "Conquest of Makkah — 8 AH",
        description: "The Prophet ﷺ marches on Makkah with 10,000 Companions. The city surrenders without battle. He enters the Kaʿbah and removes 360 idols one by one. He stands at the door and announces a general amnesty: \"No blame will be upon you today. Go — you are free.\"",
        significance: "The sacred city returned to Allāh — conquered with mercy and forgiveness, not with vengeance.",
        highlight: true,
      },
      {
        year: "632 CE",
        age: "Age 63",
        location: "Plain of ʿArafāt, Makkah",
        title: "The Farewell Pilgrimage — Ḥajjat al-Wadāʿ — 10 AH",
        description: "The Prophet ﷺ performs his only Ḥajj with over 100,000 Companions. On the Plain of ʿArafāt, the final verse of the Qurʾān is revealed: \"This day I have perfected your religion for you.\" He delivers the Farewell Sermon — a charter of human rights and dignity that echoes to this day.",
        significance: "\"This day I have perfected your religion\" — the final verse of the Qurʾān, revealed on the greatest plain on earth.",
        highlight: true,
      },
      {
        year: "632 CE",
        age: "Age 63",
        location: "Al-Madīnah al-Munawwarah",
        title: "The Death of Rasūlullāh ﷺ — 12 Rabīʿ al-Awwal 11 AH",
        description: "At the age of 63, after a brief illness, the Prophet ﷺ passes from this world in the room of ʿĀʾishah رضي الله عنها. His final words: \"Al-Rafīq al-Aʿlā\" — the Highest Companion. He is buried where he died, in the most honoured grave on earth. The world weeps.",
        significance: "The world lost the best of creation — but his light, his Sunnah, and his Qurʾān will guide humanity until Judgement Day.",
        highlight: true,
      },
    ],

    characterProfiles: [
      {
        name: "Āminah bint Wahb",
        arabicName: "آمِنَة بِنْت وَهْب",
        relationship: "Mother of the Prophet ﷺ",
        knownFor: "The noble and pure mother of Rasūlullāh ﷺ, from the tribe of Banū Zuhrah — one of the most honoured lineages of Quraysh. She raised the Prophet ﷺ alone after the death of ʿAbdullāh, and made the long journey to Yathrib to visit her husband's grave, taking her young son with her. She died at Al-Abwāʾ on the return journey when the Prophet ﷺ was approximately six years old. Years later, the Prophet ﷺ visited her grave, wept, and said: 'I sought permission from my Lord to seek forgiveness for her, but it was not granted. I sought permission to visit her grave, and it was granted — so visit graves, for they remind you of death.'",
        appearsIn: "Year of the Elephant · The Death of Āminah",
        status: "Mother — passed away before prophethood",
      },
      {
        name: "ʿAbdullāh ibn ʿAbd al-Muṭṭalib",
        arabicName: "عَبْدُ اللَّه بْن عَبْد الْمُطَّلِب",
        relationship: "Father of the Prophet ﷺ",
        knownFor: "The beloved father of Rasūlullāh ﷺ and the most precious son of ʿAbd al-Muṭṭalib. His father had once made a vow to sacrifice his son, but was redeemed with one hundred camels. Known for his exceptional beauty and character, he married Āminah bint Wahb and passed away on a trading journey to Yathrib before the Prophet ﷺ was born, leaving him an orphan from birth. He is buried in Madīnah.",
        appearsIn: "Year of the Elephant",
        status: "Father — passed away before the Prophet's birth",
      },
      {
        name: "ʿAbd al-Muṭṭalib ibn Hāshim",
        arabicName: "عَبْد الْمُطَّلِب بْن هَاشِم",
        relationship: "Grandfather of the Prophet ﷺ",
        knownFor: "The chieftain of Quraysh and the Hāshimī clan who witnessed the Year of the Elephant and stood at the Kaʿbah, praying to Allāh for its protection. He named his grandson Muḥammad — a name uncommon among the Arabs — saying: 'I want him to be praised by Allāh in heaven and by men on earth.' He raised the young Prophet ﷺ with profound love and honour after the death of Āminah, seating him at his side at the Kaʿbah and treating him with a distinction he showed no other child. He passed away when the Prophet ﷺ was approximately eight years old.",
        appearsIn: "Year of the Elephant · The Death of Āminah · The Death of ʿAbd al-Muṭṭalib",
        status: "Grandfather — passed away before prophethood",
      },
      {
        name: "Abū Ṭālib ibn ʿAbd al-Muṭṭalib",
        arabicName: "أَبُو طَالِب بْن عَبْد الْمُطَّلِب",
        relationship: "Uncle of the Prophet ﷺ",
        knownFor: "The elder uncle of the Prophet ﷺ who took guardianship of the young child at age eight following the death of ʿAbd al-Muṭṭalib. He protected the Prophet ﷺ throughout the entire Makkan period with fierce tribal loyalty, standing against the entire Quraysh on his behalf. Despite never accepting Islām, his protection was a divine arrangement that allowed the message to be delivered for thirteen years without the Prophet ﷺ being harmed. He died in 619 CE — the Year of Grief — and the Prophet ﷺ mourned him deeply.",
        appearsIn: "The Death of Āminah · The Death of ʿAbd al-Muṭṭalib",
        status: "Uncle — passed away before Hijrah",
      },
      {
        name: "Khadījah bint Khuwaylid",
        arabicName: "خَدِيجَة بِنْت خُوَيْلِد",
        relationship: "First wife of the Prophet ﷺ",
        knownFor: "The first person to accept Islām — before any man or woman — and the most beloved of the Prophet's ﷺ wives during her lifetime. A noble and wealthy businesswoman of Quraysh, she observed the Prophet's ﷺ honesty and trustworthiness on a trading journey to Shām and proposed the marriage herself. At the terrifying moment of the first revelation, she was his rock: 'Allāh will never disgrace you — you maintain family ties, support the weak, serve your guests, and help those afflicted by calamity.' She bore him six children, stood by him for twenty-five years, and her death in 619 CE shook him so deeply that Allāh sent comfort through the Night Journey.",
        appearsIn: "The Makkī Years",
        status: "Ṣaḥābiyyah — Mother of the Believers",
      },
      {
        name: "Umm Ayman (Barakah al-Ḥabashiyyah)",
        arabicName: "أُمّ أَيْمَن (بَرَكَة الحَبَشِيَّة)",
        relationship: "Caretaker of the Prophet's ﷺ household",
        knownFor: "The devoted Ethiopian servant who was present in the Prophet's ﷺ household from the day he was born and outlived him by several months. After Āminah's death at Al-Abwāʾ, it was Umm Ayman who carried the young Prophet ﷺ back to Makkah on foot across the desert — alone and grieving, yet steadfast. The Prophet ﷺ honoured her throughout his life, called her 'My mother after my mother,' and said of her after accepting Islām: 'Whoever wishes to marry a woman from the people of Paradise, let him marry Umm Ayman.'",
        appearsIn: "The Death of Āminah",
        status: "Ṣaḥābiyyah — one of the earliest believers",
      },
      {
        name: "Ḥalīmah al-Saʿdiyyah",
        arabicName: "حَلِيمَة السَّعْدِيَّة",
        relationship: "Wet-nurse of the Prophet ﷺ",
        knownFor: "A woman from the tribe of Banū Saʿd ibn Bakr who became the foster-mother of the infant Prophet ﷺ. She had initially hesitated to take him because he was an orphan with no father to pay — all the other women of Banū Saʿd had found children with living fathers. But she found no other child available and accepted him, and from that moment divine blessings poured into her household: her animals gave milk abundantly, her crops flourished, and all who knew her remarked on the change. She cared for the Prophet ﷺ for approximately four to five years and later visited him in Makkah after he had received prophethood.",
        appearsIn: "The Desert Years with Ḥalīmah · The Opening of the Chest",
        status: "Ṣaḥābiyyah — accepted Islām",
      },
      {
        name: "Abū Bakr al-Ṣiddīq",
        arabicName: "أَبُو بَكْر الصِّدِّيق",
        relationship: "Closest companion and first Caliph",
        knownFor: "The closest companion of the Prophet ﷺ and the first adult free man to accept Islām without a single moment of hesitation or doubt. His friendship with the Prophet ﷺ predated Islām — and when the message was brought to him, he said simply: 'I testify to this.' He spent his entire wealth of forty thousand dirhams freeing enslaved believers from torture. He accompanied the Prophet ﷺ in the Cave of Thawr during the Hijrah — the two of them alone, with Allāh as their third. After the Prophet's ﷺ death, he was unanimously chosen as the first Caliph and held the ummah together through its most dangerous days.",
        appearsIn: "The Madanī Years",
        status: "Ṣaḥābī — one of the Asharah Mubashsharah",
      },
      {
        name: "ʿĀʾishah bint Abī Bakr",
        arabicName: "عَائِشَة بِنْت أَبِي بَكْر",
        relationship: "Wife of the Prophet ﷺ",
        knownFor: "The beloved wife of the Prophet ﷺ in whose room he breathed his last, and one of the greatest scholars in the history of Islām. She was the daughter of Abū Bakr al-Ṣiddīq, and the Prophet ﷺ loved her with a depth he expressed openly: 'Love of ʿĀʾishah has been placed in my heart.' She transmitted over 2,210 Ḥadīth — more than any woman in history — and was a leading authority on fiqh, Qurʾānic commentary, Arabic poetry, and medicine. The great Companion Abū Mūsā al-Ashʿarī said: 'Whenever we Companions were confused about a matter, we went to ʿĀʾishah and always found knowledge with her.'",
        appearsIn: "The Madanī Years · The Final Days",
        status: "Ṣaḥābiyyah — Mother of the Believers",
      },
    ],

    references: [
      // ── Qurʾān — Makkan Period ────────────────────────────────────────────
      {
        category: "quran",
        title: "Sūrah al-Fīl — 105",
        detail: "The Noble Qurʾān",
        reliabilityTier: "established",
        usedFor: "The destruction of Abraha's army — historical backdrop for the Year of the Elephant and the birth of Rasūlullāh ﷺ (Lesson 3).",
      },
      {
        category: "quran",
        title: "Sūrah al-Ḍuḥā — 93:6",
        detail: "The Noble Qurʾān",
        reliabilityTier: "established",
        usedFor: "Allāh's reminder to the Prophet ﷺ: \"Did He not find you an orphan and give you refuge?\" — central āyah for Lesson 6.",
      },
      {
        category: "quran",
        title: "Sūrah al-Baqarah — 2:156",
        detail: "The Noble Qurʾān",
        reliabilityTier: "established",
        usedFor: "\"Inna lillāhi wa innā ilayhi rājiʿūn\" — the Islamic response to death and loss; reflection point in Lesson 6.",
      },
      {
        category: "quran",
        title: "Sūrah Maryam — 19:1–33",
        detail: "The Noble Qurʾān",
        reliabilityTier: "established",
        usedFor: "Recited by Jaʿfar ibn Abī Ṭālib before the Najāshī during the first Hijrah to Abyssinia — moved the king to tears (Lesson 7).",
      },
      {
        category: "quran",
        title: "Sūrah al-ʿAlaq — 96:1–5",
        detail: "The Noble Qurʾān",
        reliabilityTier: "established",
        usedFor: "The first five āyāt revealed in the Cave of Ḥirāʾ — the beginning of the divine message (Lesson 8).",
      },
      // ── Qurʾān — Madīnah Period ───────────────────────────────────────────
      {
        category: "quran",
        title: "Sūrah al-Anfāl — 8:17",
        detail: "The Noble Qurʾān",
        reliabilityTier: "established",
        usedFor: "\"It was not you who slew them, but Allāh slew them\" — revealed after the Battle of Badr describing divine assistance (Lessons 11–12).",
      },
      {
        category: "quran",
        title: "Sūrah Āl ʿImrān — 3:139–142",
        detail: "The Noble Qurʾān",
        reliabilityTier: "established",
        usedFor: "Consolation after Uḥud: \"Do not weaken, do not grieve — you will have the upper hand if you are true believers\" (Lessons 13–14).",
      },
      {
        category: "quran",
        title: "Sūrah al-Aḥzāb — 33:9",
        detail: "The Noble Qurʾān",
        reliabilityTier: "established",
        usedFor: "\"We sent against them wind and forces you could not see\" — describes the divine dispersal of the confederate coalition at Khandaq (Lessons 15–16).",
      },
      {
        category: "quran",
        title: "Sūrah al-Fatḥ — 48:1",
        detail: "The Noble Qurʾān",
        reliabilityTier: "established",
        usedFor: "\"Verily We have granted you a manifest victory\" — revealed after the Treaty of Ḥudaybiyyah which appeared to be a concession (Lessons 17–18).",
      },
      {
        category: "quran",
        title: "Sūrah al-Naṣr — 110",
        detail: "The Noble Qurʾān",
        reliabilityTier: "established",
        usedFor: "\"When comes the Help of Allāh and the conquest...\" — revealed near the time of the Conquest of Makkah and the Prophet's ﷺ farewell (Lessons 23–24).",
      },
      {
        category: "quran",
        title: "Sūrah al-Māʾidah — 5:3",
        detail: "The Noble Qurʾān",
        reliabilityTier: "established",
        usedFor: "\"This day I have perfected your religion for you\" — the final verse revealed on the Plain of ʿArafāt during the Farewell Pilgrimage (Lesson 28).",
      },
      // ── Ḥadīth — Makkan Period ────────────────────────────────────────────
      {
        category: "hadith",
        title: "Ṣaḥīḥ Muslim — Ḥadīth 162",
        detail: "Imām Muslim ibn al-Ḥajjāj al-Nīsābūrī (d. 261 AH)",
        reliabilityTier: "established",
        usedFor: "The Opening of the Chest (Shaqq al-Ṣadr) narrated by Anas ibn Mālik — primary evidence for Lesson 5.",
      },
      {
        category: "hadith",
        title: "Ṣaḥīḥ Muslim — Ḥadīth 976",
        detail: "Imām Muslim ibn al-Ḥajjāj al-Nīsābūrī (d. 261 AH)",
        reliabilityTier: "established",
        usedFor: "The Prophet ﷺ visited his mother's grave at Al-Abwāʾ, wept, and granted permission to visit graves — core evidence for Lesson 6.",
      },
      {
        category: "hadith",
        title: "Ṣaḥīḥ al-Bukhārī — Ḥadīth 3",
        detail: "Imām Muḥammad ibn Ismāʿīl al-Bukhārī (d. 256 AH)",
        reliabilityTier: "established",
        usedFor: "The first revelation in the Cave of Ḥirāʾ — primary evidence for the beginning of prophethood (Lesson 8).",
      },
      {
        category: "hadith",
        title: "Ṣaḥīḥ al-Bukhārī — Ḥadīth 5304",
        detail: "Imām Muḥammad ibn Ismāʿīl al-Bukhārī (d. 256 AH)",
        reliabilityTier: "established",
        usedFor: "The guardian-of-orphan ḥadīth: 'I and the guardian of an orphan will be together in Paradise like this' — core evidence for Lesson 7.",
      },
      {
        category: "hadith",
        title: "Ṣaḥīḥ Muslim — Ḥadīth 2983",
        detail: "Imām Muslim ibn al-Ḥajjāj al-Nīsābūrī (d. 261 AH)",
        reliabilityTier: "established",
        usedFor: "Extended form of the guardian-of-orphan ḥadīth — used in Lesson 7 to frame the virtue of caring for the vulnerable.",
      },
      {
        category: "quran",
        title: "Sūrah al-Anbiyāʾ — 21:107",
        detail: "The Noble Qurʾān",
        reliabilityTier: "established",
        usedFor: "'We have not sent you except as a mercy for all the worlds' — virtue opener for Lesson 7, establishing the Prophet ﷺ as the embodiment of Raḥmah.",
      },
      {
        category: "quran",
        title: "Sūrah al-Isrāʾ — 17:34",
        detail: "The Noble Qurʾān",
        reliabilityTier: "established",
        usedFor: "'And fulfil every promise — for every promise will be questioned' — virtue of Wafāʾ in Lesson 7, framing Abū Ṭālib's forty-year commitment.",
      },
      {
        category: "hadith",
        title: "Ṣaḥīḥ al-Bukhārī — Ḥadīth 5985",
        detail: "Imām Muḥammad ibn Ismāʿīl al-Bukhārī (d. 256 AH)",
        reliabilityTier: "established",
        usedFor: "The journey from Makkah to Yathrib — contextual support for Āminah's route and the Hijrah narrative (Lessons 6, 9).",
      },
      // ── Ḥadīth — Madīnah Period ───────────────────────────────────────────
      {
        category: "hadith",
        title: "Ṣaḥīḥ al-Bukhārī — Kitāb al-Maghāzī",
        detail: "Imām Muḥammad ibn Ismāʿīl al-Bukhārī (d. 256 AH)",
        reliabilityTier: "established",
        usedFor: "The Battles chapter of Ṣaḥīḥ al-Bukhārī — primary authenticated source for Badr, Uḥud, Khandaq, Ḥudaybiyyah, and Fatḥ Makkah (Lessons 11–25).",
      },
      {
        category: "hadith",
        title: "Ṣaḥīḥ Muslim — Kitāb al-Jihād wa al-Siyar",
        detail: "Imām Muslim ibn al-Ḥajjāj al-Nīsābūrī (d. 261 AH)",
        reliabilityTier: "established",
        usedFor: "Authenticated narrations on the conduct of battles and the Prophet's ﷺ words and decisions during the military expeditions of the Madīnah period.",
      },
      {
        category: "hadith",
        title: "Ṣaḥīḥ al-Bukhārī — Ḥadīth 4406",
        detail: "Imām Muḥammad ibn Ismāʿīl al-Bukhārī (d. 256 AH)",
        reliabilityTier: "established",
        usedFor: "The Farewell Sermon on the Plain of ʿArafāt — the Prophet's ﷺ final public address to the Ummah (Lesson 28).",
      },
      {
        category: "hadith",
        title: "Ṣaḥīḥ al-Bukhārī — Ḥadīth 4437–4440",
        detail: "Imām Muḥammad ibn Ismāʿīl al-Bukhārī (d. 256 AH)",
        reliabilityTier: "established",
        usedFor: "The final illness and passing of Rasūlullāh ﷺ — narrated by ʿĀʾishah رضي الله عنها. His final words: \"Al-Rafīq al-Aʿlā\" (Lesson 30).",
      },
      // ── Sīrah Sources ─────────────────────────────────────────────────────
      {
        category: "sirah",
        title: "Sīrat Ibn Hishām",
        detail: "Abū Muḥammad ʿAbd al-Malik ibn Hishām (d. 218 AH) — abridgement of Ibn Isḥāq's original Sīrah",
        reliabilityTier: "established",
        usedFor: "Primary classical Sīrah source used across all 30 lessons — from birth through the Farewell Pilgrimage and passing of Rasūlullāh ﷺ.",
      },
      {
        category: "sirah",
        title: "Al-Bidāyah wa al-Nihāyah",
        detail: "Al-Ḥāfiẓ Ibn Kathīr al-Dimashqī (d. 774 AH)",
        reliabilityTier: "established",
        usedFor: "Historical verification of key events across the full Sīrah — Makkan years, Hijrah, battles, and the closing of the Prophet's ﷺ life.",
      },
      {
        category: "sirah",
        title: "Al-Raḥīq al-Makhtūm (The Sealed Nectar)",
        detail: "Ṣafī al-Raḥmān al-Mubārakfūrī (d. 1427 AH) — Prize-winning modern Sīrah",
        reliabilityTier: "accepted",
        usedFor: "Modern authoritative Sīrah used for chronological mapping, lesson structure, and contextual detail across the full journey.",
      },
      // ── Historical Works ───────────────────────────────────────────────
      {
        category: "historical",
        title: "Zād al-Maʿad fī Hudā Khayr al-ʿIbād",
        detail: "Ibn al-Qayyim al-Jawziyyah (d. 751 AH)",
        reliabilityTier: "established",
        usedFor: "Prophetic biography with deep scholarly analysis of events, legal derivations, and spiritual lessons — used for significance notes across all lessons.",
      },
      {
        category: "historical",
        title: "Al-Wafāʾ bi-Aḥwāl al-Muṣṭafā",
        detail: "Ibn al-Jawzī al-Ḥanbalī (d. 597 AH)",
        reliabilityTier: "accepted",
        usedFor: "Detailed narrative of the Prophet's ﷺ character, manners, and personal life — supporting the Profiles tab and lesson reflections.",
      },
      {
        category: "historical",
        title: "Al-Sīrah al-Nabawiyyah",
        detail: "Imām al-Dhahabī (d. 748 AH)",
        reliabilityTier: "accepted",
        usedFor: "Supporting historical context and chain verification for reports about the early and Madīnah periods of the Prophet's ﷺ life.",
      },
    ],

    sourceReliability: [
      // ── Makkan Period ─────────────────────────────────────────────────────────
      {
        tier: "established",
        text: "Birth of the Prophet ﷺ in the Year of the Elephant (~570 CE) — established across all primary Sīrah and Ḥadīth sources.",
      },
      {
        tier: "established",
        text: "The opening of the chest (Shaqq al-Ṣadr) — authenticated in Ṣaḥīḥ Muslim (Ḥadīth 162) from Anas ibn Mālik.",
      },
      {
        tier: "established",
        text: "Death of Āminah at Al-Abwāʾ — well-attested across all primary Sīrah sources (Ibn Isḥāq, Ibn Hishām, Ibn Kathīr).",
      },
      {
        tier: "established",
        text: "The Prophet ﷺ visited his mother's grave, wept, and taught about visiting graves — Ṣaḥīḥ Muslim, Ḥadīth 976.",
      },
      {
        tier: "established",
        text: "First revelation in the Cave of Ḥirāʾ — Ṣaḥīḥ al-Bukhārī (Ḥadīth 1, 3, 4) and Ṣaḥīḥ Muslim.",
      },
      {
        tier: "established",
        text: "The general amnesty at the Conquest of Makkah (ʿafwun ʿāmm) — established in Ṣaḥīḥ al-Bukhārī, Kitāb al-Maghāzī.",
      },
      {
        tier: "accepted",
        text: "Āminah made the journey to Yathrib to visit the grave of ʿAbdullāh — preserved in the books of Sīrah with wide scholarly acceptance.",
      },
      {
        tier: "accepted",
        text: "ʿAbd al-Muṭṭalib named the child Muḥammad — reported in Sīrah sources; well-accepted across scholarship.",
      },
      {
        tier: "accepted",
        text: "The Prophet ﷺ was approximately 6 years old when his mother died — estimated from established birth year and Sīrah chronology.",
      },
      {
        tier: "accepted",
        text: "Ḥalīmah al-Saʿdiyyah accepted the infant Prophet ﷺ after initially hesitating — reported in Ibn Isḥāq's Sīrah with broad scholarly acceptance.",
      },
      {
        tier: "discussed",
        text: "The precise date of the Prophet's ﷺ birth — 8th, 9th, or 12th Rabīʿ al-Awwal — is discussed among scholars. The majority opinion marks 12th Rabīʿ al-Awwal, though some scholars including Ibn al-Qayyim favour 9th.",
      },
      {
        tier: "discussed",
        text: "Specific conversations attributed to Āminah during the journey to Yathrib — not preserved with strong chains; treated as possible reconstructions in secondary Sīrah accounts.",
      },
      {
        tier: "discussed",
        text: "The circumstances and exact words spoken to ʿAbd al-Muṭṭalib regarding the Prophet ﷺ at birth — some details appear in later Sīrah compilations without fully authenticated chains.",
      },
      // ── Lesson 7 — The Death of ʿAbd al-Muṭṭalib ──────────────────────────
      {
        tier: "established",
        text: "The guardian of an orphan will be beside the Prophet ﷺ in Paradise — Ṣaḥīḥ al-Bukhārī (Ḥadīth 5304) and Ṣaḥīḥ Muslim (Ḥadīth 2983), both with authenticated chains.",
      },
      {
        tier: "established",
        text: "Abū Ṭālib took guardianship of the Prophet ﷺ after ʿAbd al-Muṭṭalib's death — unanimous across all primary Sīrah sources without dispute.",
      },
      {
        tier: "established",
        text: "Abū Ṭālib did not die as a Muslim — established in Ṣaḥīḥ al-Bukhārī (Ḥadīth 1360) and Ṣaḥīḥ Muslim (Ḥadīth 24).",
      },
      {
        tier: "accepted",
        text: "ʿAbd al-Muṭṭalib seated the young Prophet ﷺ beside him on his mat at the Kaʿbah and said: 'This child will be of great importance' — reported in Sīrat Ibn Hishām with broad scholarly acceptance.",
      },
      {
        tier: "accepted",
        text: "ʿAbd al-Muṭṭalib died when the Prophet ﷺ was approximately eight years old — the most widely cited figure in Sīrah chronology, though some accounts give seven or nine.",
      },
      {
        tier: "discussed",
        text: "The exact words of ʿAbd al-Muṭṭalib on his deathbed regarding guardianship — narrated in classical Sīrah sources but without fully authenticated chains back to witnesses.",
      },
      // ── Madīnah Period ───────────────────────────────────────────────────
      {
        tier: "established",
        text: "The Hijrah to Madīnah (622 CE / 1 AH) — established in multiple authenticated narrations and historical sources.",
      },
      {
        tier: "established",
        text: "Battle of Badr (2 AH): 313 Muslims vs. 1,000 Quraysh, 17 Ramaḍān — established in Ṣaḥīḥ al-Bukhārī, Kitāb al-Maghāzī, and Ṣaḥīḥ Muslim.",
      },
      {
        tier: "established",
        text: "Battle of Uḥud (3 AH): The archers left their position against the Prophet's ﷺ direct order — established in Ṣaḥīḥ al-Bukhārī (Kitāb al-Maghāzī) from multiple Companions.",
      },
      {
        tier: "established",
        text: "Martyrdom of Sayyidunā Ḥamzah رضي الله عنه at Uḥud — established in Ṣaḥīḥ al-Bukhārī and narrations from Ibn ʿAbbās and others.",
      },
      {
        tier: "established",
        text: "Battle of Khandaq (5 AH): The trench strategy proposed by Salmān al-Fārisī رضي الله عنه — reported in authentic Sīrah narrations with broad acceptance.",
      },
      {
        tier: "established",
        text: "Treaty of Ḥudaybiyyah (6 AH) and the Bayʾat al-Riḍwān — established in Ṣaḥīḥ al-Bukhārī and referenced in Sūrah al-Fatḥ (48:18).",
      },
      {
        tier: "established",
        text: "Conquest of Makkah (8 AH, 20 Ramaḍān): The Prophet ﷺ entered with 10,000 Companions — established across all primary Sīrah and Ḥadīth sources.",
      },
      {
        tier: "established",
        text: "The Farewell Sermon on the Plain of ʿArafāt (10 AH) — established in Ṣaḥīḥ al-Bukhārī (Ḥadīth 4406) and Ṣaḥīḥ Muslim; narrated by multiple Companions.",
      },
      {
        tier: "established",
        text: "The passing of Rasūlullāh ﷺ in the room of ʿĀʾishah رضي الله عنها — established in Ṣaḥīḥ al-Bukhārī (Ḥadīth 4437–4440). His final words: al-Rafīq al-Aʿlā.",
      },
      {
        tier: "accepted",
        text: "The exact number of Companions at the Conquest of Makkah (10,000) — reported in books of Sīrah with wide acceptance; some accounts give slightly different figures.",
      },
      {
        tier: "discussed",
        text: "The precise date of the Prophet's ﷺ passing — 12 Rabīʿ al-Awwal or 1 Rabīʿ al-Awwal 11 AH — is debated. Books of Sīrah mention 12 Rabīʿ al-Awwal as the most widely cited date.",
      },
      {
        tier: "discussed",
        text: "Specific details of the Night Journey (Isrāʾ wa al-Miʿrāj) beyond what is authenticated in Ḥadīth — some accounts in classical Sīrah are discussed for their chain strength; core events are established.",
      },
    ],
  },
};

export function getBookEnrichment(bookId: string) {
  return BOOK_ENRICHMENT[bookId] ?? null;
}
