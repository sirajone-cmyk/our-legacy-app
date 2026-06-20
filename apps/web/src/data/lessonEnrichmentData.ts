/**
 * OUR LEGACY — Lesson Enrichment Data
 *
 * Phase 2: Deep Learning Layer — Lesson Companion
 * Structured enrichment for each Sīrah lesson.
 *
 * Key convention: "<bookId>:<partNumber>"
 *
 * Lesson 6 is the permanent template for all future lessons.
 * To add Lesson 7: create const lesson7 following this structure,
 * then add "sirah_journey:7": lesson7 to lessonEnrichmentData.
 */

import type { LessonEnrichment, LessonEnrichmentMap } from "./lessonEnrichmentTypes";

// ── Lesson 6 — The Death of Āminah ────────────────────────────────────────────

const lesson6: LessonEnrichment = {
  bookId: "sirah_journey",
  partNumber: 6,
  lessonTitle: "The Death of Āminah",

  // ── Meta ──────────────────────────────────────────────────────────────────

  estimatedReadingTime: {
    readingMinutes: 50,
    studyMinutes: 30,
  },

  recommendedUse: ["individual", "family", "classroom", "madrasa"],

  // ── Why This Matters Today ─────────────────────────────────────────────────

  whyThisMattersToday:
    "Loss is part of every family's story — and the way we carry it shapes the next " +
    "generation. The Prophet ﷺ lost both parents before the age of six, yet Allāh used " +
    "that grief to form the most complete human being who ever lived. In an age where " +
    "children are often shielded from grief rather than guided through it, this lesson " +
    "teaches families how to hold sorrow with dignity, remember the departed with love, " +
    "and trust Allāh's wisdom even when His decree is painful.",

  // ── Memory Gem ─────────────────────────────────────────────────────────────

  memoryGem:
    "Allāh did not protect the Prophet ﷺ from loss — He responded to it. " +
    "And He never abandons those He loves.",

  // ── One Minute Summary ─────────────────────────────────────────────────────

  oneMinuteSummary:
    "According to the major Sīrah sources, Āminah bint Wahb raised her son Muḥammad ﷺ " +
    "alone after the death of ʿAbdullāh. When the Prophet ﷺ was approximately six years " +
    "old, she made the journey northward to Yathrib — reported across the primary Sīrah " +
    "books as a visit to ʿAbdullāh's grave and to the family of his maternal relatives. " +
    "On the return journey, she fell ill at a village called Al-Abwāʾ and passed away " +
    "there. Umm Ayman (Barakah al-Ḥabashiyyah), the devoted servant of the household, " +
    "brought the young orphan back to Makkah on foot. His grandfather ʿAbd al-Muṭṭalib " +
    "took full guardianship. Years later, the Prophet ﷺ — leading the Muslim community " +
    "on an expedition — passed through Al-Abwāʾ and stopped to visit his mother's grave. " +
    "Those with him reported that he wept. The ḥadīth recording this visit is preserved " +
    "in Ṣaḥīḥ Muslim (Ḥadīth 976) and is among the most firmly established events of " +
    "the Prophet's ﷺ life.",

  // ── Key Facts (max 6) ──────────────────────────────────────────────────────

  keyFacts: [
    {
      topic: "Who was Āminah?",
      information:
        "Āminah bint Wahb, from the noble Banū Zuhra clan of Quraysh. She married " +
        "ʿAbdullāh ibn ʿAbd al-Muṭṭalib and was widowed before — or shortly after — " +
        "the birth of her son. She is remembered with honour in every major Sīrah account.",
    },
    {
      topic: "Why did she travel to Yathrib?",
      information:
        "The Sīrah sources report she made the 500km journey north to Yathrib to visit " +
        "ʿAbdullāh's grave and to connect the young Muḥammad ﷺ with his father's family " +
        "and maternal relatives in the Banū ʿAdī ibn al-Najjār.",
    },
    {
      topic: "Where and when did she die?",
      information:
        "She died at Al-Abwāʾ — a village on the ancient Ḥijāz road between Makkah and " +
        "Madinah — on the return journey home. The Prophet ﷺ was approximately six years " +
        "old at the time (~576 CE).",
    },
    {
      topic: "Who brought him home?",
      information:
        "Umm Ayman (Barakah al-Ḥabashiyyah), the Ethiopian servant of the household, " +
        "walked the orphan back to Makkah on foot. The Prophet ﷺ later said of her: " +
        "'She is my mother after my mother.'",  // single quotes preserve the quotation
    },
    {
      topic: "Who became his guardian?",
      information:
        "His grandfather ʿAbd al-Muṭṭalib ibn Hāshim — the great chieftain of Quraysh " +
        "— took full guardianship and is reported to have received the child with deep " +
        "sorrow and exceptional care.",
    },
    {
      topic: "The grave visit",
      information:
        "The Prophet ﷺ visited Āminah's grave during an expedition and wept openly. " +
        "This is recorded in Ṣaḥīḥ Muslim (Ḥadīth 976) — the highest level of ḥadīth " +
        "reliability. He was granted permission to visit the grave, and from this he " +
        "taught the Ummah that visiting graves is permitted and recommended.",
    },
  ],

  // ── What We Learn ─────────────────────────────────────────────────────────

  whatWeLearn: [
    {
      event: "Āminah raised him alone",
      lesson:
        "A parent who loves with dignity, even in grief, plants something that grows " +
        "for generations. Her ṣabr was not passive — it was active, purposeful love.",
    },
    {
      event: "The 500km journey to Yathrib",
      lesson:
        "Knowing where we come from — our roots, our fathers, our family story — is " +
        "worth sacrifice. Āminah understood that a child without roots is a child without " +
        "an anchor.",
    },
    {
      event: "Āminah died far from home",
      lesson:
        "Allāh uses loss to build. What He removes is not wasted. The Prophet's ﷺ " +
        "early grief was not an accident — it was part of his formation as the most " +
        "compassionate human being who ever lived.",
    },
    {
      event: "Umm Ayman walked him home",
      lesson:
        "Allāh places the right people in our lives at exactly the right moment — " +
        "sometimes people with no formal obligation except love. This is how He answers " +
        "the prayers of orphans.",
    },
    {
      event: "The Prophet ﷺ wept openly at the grave",
      lesson:
        "Grief is not a sign of weak faith. The greatest man who ever lived wept in " +
        "front of his Companions and was not rebuked. Raḥmah — tender mercy — makes " +
        "us more fully human, not less.",
    },
    {
      event: "Permission to pray for her was not granted",
      lesson:
        "We accept Allāh's decree even when we do not understand it — even when it " +
        "involves those we love most. The Prophet ﷺ accepted, and turned that acceptance " +
        "into a lasting gift for the Ummah.",
    },
    {
      event: "The Ummah taught to visit graves",
      lesson:
        "From the deepest personal grief, the Prophet ﷺ derived a universal teaching. " +
        "Visit graves — they remind you of death, and death reminds you to live " +
        "purposefully.",
    },
  ],

  // ── Why Did Allāh Allow This? ──────────────────────────────────────────────

  whyDidAllahAllowThis: {
    question: "Why did Allāh allow the Prophet ﷺ to lose his mother at six years old?",
    reflection:
      "This is a question the human heart asks naturally. Scholars have offered " +
      "several reflections: Allāh stripped away every worldly attachment that might " +
      "compete with the Prophet's ﷺ complete reliance on Him alone. An orphan with " +
      "no parents, no inherited wealth, no powerful protector — only Allāh. Every " +
      "companion placed in his life (Āminah, Umm Ayman, ʿAbd al-Muṭṭalib, Abū Ṭālib) " +
      "was a reminder that Allāh provides without requiring the usual human channels. " +
      "And from this lived experience of loss, the Prophet ﷺ became the most " +
      "compassionate man alive toward orphans, the poor, and the lonely — not from " +
      "theory, but from memory. Allāh did not prevent the loss. He responded to it. " +
      "He gave shelter. He placed the right people. He honoured the name of Āminah " +
      "for all time. And He revealed a āyah that looks back on those early years " +
      "and names what He did — so that every believer who has ever known loss might " +
      "recognise that Allāh's plan was present even when it was invisible.",
    quranicConnection: {
      arabic: "أَلَمْ يَجِدْكَ يَتِيمًا فَآوَىٰ",
      translation:
        "Did He not find you an orphan and give you shelter?",
      reference: "Sūrah al-Ḍuḥā — 93:6",
    },
  },

  // ── Family Discussion ──────────────────────────────────────────────────────

  familyDiscussion: [
    {
      question:
        "Āminah raised the Prophet ﷺ alone for approximately six years — widowed, " +
        "grieving, without the husband she had loved. What made her a great mother " +
        "despite her circumstances?",
      hint:
        "Think about what she actually did: she kept her dignity, she loved her son, " +
        "she spoke well of his father, and she made the 500km journey to Yathrib. " +
        "What does each of those choices tell us about her character?",
    },
    {
      question:
        "She made a 500km desert journey so her son could stand at his father's grave. " +
        "Why was that worth such a difficult journey? What did she understand about " +
        "children and identity?",
      hint:
        "Children need to know where they come from. They need roots. Is there a " +
        "connection — a relative, a place, a story — that someone in your family " +
        "does not yet know but should?",
    },
    {
      question:
        "Umm Ayman had no formal obligation to bring the young Muḥammad ﷺ home from " +
        "Al-Abwāʾ. She was a servant. She chose to give everything. Who in your life " +
        "has been an 'Umm Ayman' — someone who showed up when they had no obligation to?",
      hint:
        "The Prophet ﷺ spent his entire life honouring Umm Ayman for what she did — " +
        "he called her 'my mother after my mother.' Have you named and thanked the " +
        "'Umm Aymans' in your own life?",
    },
    {
      question:
        "The Prophet ﷺ wept at his mother's grave — openly, in front of his " +
        "Companions. He did not hide his grief. What does this teach us about how " +
        "Islām views emotion, especially in men and fathers?",
      hint:
        "Many cultures teach men not to cry. Yet the greatest man who ever lived wept " +
        "openly and no one questioned him. What does this permission mean for fathers " +
        "and sons in our family?",
    },
    {
      question:
        "In our family, how do we remember those who have passed? Is there something " +
        "we could do differently — a grave to visit, a name to mention in duʿāʾ, a " +
        "story to pass on?",
      hint:
        "The Prophet ﷺ visited his mother's grave decades after her death. He did not " +
        "let time erase her. What would it look like in your family to hold the memory " +
        "of the departed in an active, living way?",
    },
  ],

  // ── Family Application ─────────────────────────────────────────────────────

  familyApplication:
    "Before the next taʿlīm session: ask each member of the family to name one " +
    "person — living or departed — who showed them love like Umm Ayman showed the " +
    "Prophet ﷺ: without formal obligation, simply out of care and loyalty. Make " +
    "duʿāʾ for that person by name before Allāh — not a general prayer, but naming " +
    "them specifically. If your parents are living, call them or sit with them today. " +
    "If they have passed, recite Sūrah al-Fātiḥah for their souls and mention their " +
    "names in your duʿāʾ after ṣalāh. The Prophet ﷺ never forgot his mother. " +
    "Neither should we forget ours.",

  // ── Quick Review ──────────────────────────────────────────────────────────

  quickReview: [
    {
      question: "At what age did the Prophet ﷺ lose his mother Āminah?",
      answer: "Approximately six years old (~576 CE).",
    },
    {
      question: "Where did Āminah pass away, and why was she travelling?",
      answer:
        "At Al-Abwāʾ, on the return journey from Yathrib, where she had taken the " +
        "young Prophet ﷺ to visit his father's grave and their maternal relatives.",
    },
    {
      question: "Why did Āminah make the journey to Yathrib?",
      answer:
        "According to the Sīrah sources, to visit the grave of ʿAbdullāh and to connect " +
        "the young Muḥammad ﷺ with his father's family and maternal relatives.",
    },
    {
      question: "Who brought the Prophet ﷺ back to Makkah after Āminah's death?",
      answer:
        "Umm Ayman — also known as Barakah al-Ḥabashiyyah — the devoted Ethiopian " +
        "servant. The Prophet ﷺ later called her 'my mother after my mother.'",
    },
    {
      question: "Who became the Prophet's ﷺ guardian after Āminah?",
      answer:
        "His grandfather, ʿAbd al-Muṭṭalib ibn Hāshim — the great chieftain of " +
        "Quraysh.",
    },
    {
      question:
        "What did the Prophet ﷺ do when he passed Al-Abwāʾ during an expedition?",
      answer:
        "He stopped, visited his mother's grave, and wept. He then instructed his " +
        "Companions to visit graves, for they remind us of death. This is recorded " +
        "in Ṣaḥīḥ Muslim (Ḥadīth 976).",
    },
  ],

  // ── Explore Further ───────────────────────────────────────────────────────

  exploreFurther: [
    {
      title: "Al-Raḥīq al-Makhtūm (The Sealed Nectar)",
      author: "Ṣafī al-Raḥmān al-Mubārakfūrī",
      type: "book",
      note:
        "The most accessible modern Sīrah for families and students. Read the early " +
        "life chapter for a clear, well-sourced account of Āminah, Al-Abwāʾ, and the " +
        "orphan years. Winner of the First International Sīrah Conference award (1979).",
    },
    {
      title: "Sīrat Ibn Hishām",
      author: "Ibn Hishām (from Ibn Isḥāq)",
      type: "book",
      note:
        "The foundational classical Sīrah — the earliest surviving account of the " +
        "Prophet's ﷺ life. Read the section on the death of Āminah for the primary " +
        "source text. Best approached alongside a commentary or translation.",
    },
    {
      title: "Atlas of the Prophet's Biography",
      author: "Shawqi Abū Khalīl",
      type: "book",
      note:
        "Includes detailed maps of Al-Abwāʾ and the ancient Ḥijāz road. Invaluable " +
        "for understanding the physical geography of Āminah's journey.",
    },
    {
      title: "Sūrah al-Ḍuḥā — Quran 93",
      type: "article",
      note:
        "Read this sūrah slowly after this lesson. Every verse speaks directly to the " +
        "Prophet's ﷺ early life — the orphan sheltered, the one who was lost and then " +
        "guided, the one found in need and then enriched. Reflect on verse 6 especially.",
    },
  ],

  // ── Teacher Notes ─────────────────────────────────────────────────────────

  teacherNotes: [
    {
      audience: "all",
      heading: "Sensitive Topic: Grief and Bereavement",
      body:
        "This lesson deals with the death of a parent in front of a young child. Some " +
        "students or family members may have experienced the loss of a parent or sibling. " +
        "Before beginning, note whether any student is from a single-parent home or has " +
        "recently experienced bereavement. Adjust discussion prompts accordingly — e.g., " +
        "replace 'call a parent' with 'call someone who loves you.' The lesson models " +
        "grief with dignity — use that framing rather than avoiding the topic.",
    },
    {
      audience: "family",
      heading: "Pacing Across Two Sessions",
      body:
        "This lesson has four segments (~10 minutes each) plus reflection and closing. " +
        "For a 30–40 minute family taʿlīm session, consider covering segments 3 and 4 " +
        "only — 'Al-Abwāʾ' and 'He Wept at Her Grave' — which are the emotional heart " +
        "of the lesson. Return to segments 1 and 2 the following week. Do not rush " +
        "segment 4. The ḥadīth (Ṣaḥīḥ Muslim 976) deserves to be read slowly, in full, " +
        "with the Arabic, and then sat with in silence before discussion begins.",
    },
    {
      audience: "classroom",
      heading: "Age Differentiation",
      body:
        "Ages 7–10: focus on Umm Ayman's loyalty and Allāh's care. Ask: 'Who looked " +
        "after the Prophet ﷺ when his mother died?' The answer — Allāh, through the " +
        "people He placed around him — is the core lesson for this age. Ages 11+: " +
        "introduce the theological dimension. Why did Allāh not grant permission to " +
        "seek forgiveness for Āminah? This opens discussion of divine justice, " +
        "intercession, and accepting painful decrees. Secondary level: discuss the " +
        "ḥadīth methodology behind Ṣaḥīḥ Muslim 976 — what makes it authenticated, " +
        "and why we teach from verified narrations.",
    },
    {
      audience: "madrasa",
      heading: "Core Text to Memorise",
      body:
        "Key ḥadīth: Ṣaḥīḥ Muslim, Kitāb al-Janāʾiz, Ḥadīth 976 — " +
        "'Istaʾdhanta Rabbī an astaghfira lahā fa-lam yuʾdhan lī, wa-staʾdhanta " +
        "an azūra qabraha fa-udhina lī — fa-zūrū al-qubūr fa-innahā tudhakkiru-kumu " +
        "al-mawt.' Students should recite the Arabic, translate it accurately, and " +
        "name the source by end of session. Reinforce Sūrah al-Ḍuḥā 93:6 " +
        "('Alam yajidka yatīman fa-āwā') as the Qurʾānic anchor for this lesson.",
    },
  ],

  // ── Lesson Reliability Summary ────────────────────────────────────────────

  lessonReliabilitySummary: {
    overallGrade: "Established",
    summary:
      "The core events of this lesson — Āminah's death at Al-Abwāʾ, the purpose of " +
      "the journey to Yathrib, Umm Ayman's care, and the Prophet's ﷺ grave visit — " +
      "are well-attested across the primary Sīrah sources with no significant scholarly " +
      "dispute. The grave visit specifically is recorded in Ṣaḥīḥ Muslim (Ḥadīth 976), " +
      "the highest standard of ḥadīth authentication. Minor details — precise ages, " +
      "specific conversations attributed to Āminah — carry varying grades but do not " +
      "affect the lesson's central narrative. This is one of the most reliably " +
      "documented portions of the Prophet's ﷺ early life.",
  },

  // ── Authentication Notes (collapsed by default in UI) ─────────────────────

  authenticationNotes: [
    {
      claim: "Death of Āminah at Al-Abwāʾ on the return journey from Yathrib",
      grade: "Established",
      sources: [
        "Sīrat Ibn Isḥāq (via Ibn Hishām)",
        "Sīrat Ibn Hishām",
        "Al-Bidāyah wa al-Nihāyah — Ibn Kathīr",
        "Al-Raḥīq al-Makhtūm",
      ],
      explanation:
        "Recorded consistently across all major primary Sīrah sources with no " +
        "scholarly dispute. Among the most firmly established facts of the Prophet's " +
        "ﷺ early life. No credible alternative account exists.",
    },
    {
      claim:
        "Purpose of the journey: visiting ʿAbdullāh's grave and maternal relatives in Yathrib",
      grade: "Widely Accepted",
      sources: [
        "Sīrat Ibn Hishām",
        "Al-Raḥīq al-Makhtūm",
        "Al-Wafāʾ bi-Aḥwāl al-Muṣṭafā — Ibn al-Jawzī",
      ],
      explanation:
        "This dual purpose is preserved across the major Sīrah books and accepted " +
        "by the majority of scholars. It is not independently supported by a hadith " +
        "chain with formal isnād, but is the mainstream and unchallenged narration " +
        "in classical Sīrah scholarship.",
    },
    {
      claim:
        "The Prophet ﷺ visiting Āminah's grave after prophethood, weeping, and " +
        "teaching about visiting graves",
      grade: "Established",
      sources: [
        "Ṣaḥīḥ Muslim — Ḥadīth 976 (Kitāb al-Janāʾiz)",
      ],
      explanation:
        "Recorded in Ṣaḥīḥ Muslim — the highest standard of ḥadīth reliability, " +
        "accepted universally by Sunni scholarship. The ḥadīth also records that " +
        "permission to pray for her forgiveness was not granted; scholars use this " +
        "as a basis for rulings on praying for non-Muslim deceased. Not disputed.",
    },
    {
      claim: "Age of the Prophet ﷺ at the time of Āminah's death: approximately six years",
      grade: "Widely Accepted",
      sources: [
        "Sīrat Ibn Hishām",
        "Al-Bidāyah wa al-Nihāyah — Ibn Kathīr",
      ],
      explanation:
        "Based on the accepted birth date of ~570 CE and the estimated death of " +
        "Āminah at ~576 CE. Some sources record five or seven years, reflecting " +
        "minor differences in exact birth year calculations. 'Approximately six' " +
        "is the scholarly consensus and is used in lesson content.",
    },
    {
      claim: "Specific conversations or statements attributed to Āminah during the journey",
      grade: "Weak Reports",
      sources: [],
      explanation:
        "Some later narrations include statements attributed to Āminah on her " +
        "deathbed. These do not have independent chain verification and are noted " +
        "as unconfirmed in Ibn Kathīr's commentary. They have not been included " +
        "in lesson content as established fact.",
    },
  ],

  // ── Mini Timeline ─────────────────────────────────────────────────────────

  lessonTimeline: [
    { year: "~570 CE", label: "Birth of Muḥammad ﷺ in Makkah" },
    { year: "~570 CE", label: "Death of his father ʿAbdullāh" },
    { year: "~576 CE", label: "Āminah travels with him to Yathrib" },
    { year: "~576 CE", label: "Āminah passes away at Al-Abwāʾ" },
    { year: "~576 CE", label: "Umm Ayman returns him to Makkah" },
    { year: "~630 CE", label: "Prophet ﷺ visits Āminah's grave and weeps" },
  ],

  // ── Cross-Tab Connections ─────────────────────────────────────────────────

  connections: {
    timeline: ["~576 CE"],
    maps: ["abwaa"],
    characters: [
      "Āminah bint Wahb",
      "ʿAbdullāh ibn ʿAbd al-Muṭṭalib",
      "ʿAbd al-Muṭṭalib ibn Hāshim",
      "Umm Ayman (Barakah al-Ḥabashiyyah)",
    ],
    references: [
      "Sūrah al-Ḍuḥā — 93:6",
      "Sūrah al-Baqarah — 2:156",
      "Ṣaḥīḥ Muslim — Ḥadīth 976",
      "Ṣaḥīḥ al-Bukhārī — Ḥadīth 5985",
      "Sīrat Ibn Hishām",
      "Al-Raḥīq al-Makhtūm (The Sealed Nectar)",
    ],
  },
};

// ── Lesson 7 — The Death of ʿAbd al-Muṭṭalib ──────────────────────────────────

const lesson7: LessonEnrichment = {
  bookId: "sirah_journey",
  partNumber: 7,
  lessonTitle: "The Death of ʿAbd al-Muṭṭalib",

  // ── Meta ──────────────────────────────────────────────────────────────────

  estimatedReadingTime: {
    readingMinutes: 50,
    studyMinutes: 30,
  },

  recommendedUse: ["individual", "family", "classroom", "madrasa"],

  // ── Why This Matters Today ─────────────────────────────────────────────────

  whyThisMattersToday:
    "The Prophet ﷺ lost his grandfather at eight years old — his third loss before " +
    "childhood was finished. Yet Allāh arranged a new guardian every time. In an age " +
    "when many children grow up in incomplete families, this lesson speaks directly to " +
    "every parent, grandparent, uncle, and aunt: the way an elder shows up for a child " +
    "in their care — with honour, loyalty, and sustained presence — is not just good " +
    "character. It is the shape of divine mercy wearing a human face.",

  // ── Memory Gem ─────────────────────────────────────────────────────────────

  memoryGem:
    "Allāh does not abandon those He loves — He transfers them. " +
    "Every guardian is a mercy wearing a different name.",

  // ── One Minute Summary ─────────────────────────────────────────────────────

  oneMinuteSummary:
    "After the death of Āminah at Al-Abwāʾ, the six-year-old Prophet ﷺ was received " +
    "into the home of his grandfather ʿAbd al-Muṭṭalib — the chieftain of Quraysh. " +
    "The Sīrah sources (Ibn Isḥāq via Ibn Hishām, Ibn Kathīr) record that ʿAbd " +
    "al-Muṭṭalib showed the child extraordinary and public affection: he seated him " +
    "beside himself on a mat at the Kaʿbah that no one else was permitted to share, " +
    "and said of him: 'This child will be of great importance.' For approximately two " +
    "years, the young Prophet ﷺ was under his direct care. When ʿAbd al-Muṭṭalib's " +
    "health declined — he is estimated to have died at approximately eighty years of " +
    "age, when the Prophet ﷺ was eight — he gathered his sons and entrusted the child " +
    "specifically to Abū Ṭālib: the full brother of ʿAbdullāh, and therefore the uncle " +
    "who shared the closest lineage with the Prophet ﷺ. Abū Ṭālib took his nephew " +
    "into his home and remained his guardian and protector for the next forty years — " +
    "until his own death in 619 CE.",

  // ── Key Facts ─────────────────────────────────────────────────────────────

  keyFacts: [
    {
      topic: "Age at grandfather's death",
      information:
        "The Prophet ﷺ was approximately eight years old when ʿAbd al-Muṭṭalib died. " +
        "This is the broadly accepted figure based on Sīrah chronology, though some " +
        "sources give seven or nine.",
    },
    {
      topic: "ʿAbd al-Muṭṭalib's age at death",
      information:
        "Sīrah sources estimate he died at approximately seventy to eighty years old. " +
        "The exact figure is discussed among scholars; eighty is the most commonly cited.",
    },
    {
      topic: "The seat at the Kaʿbah",
      information:
        "Ibn Isḥāq records that ʿAbd al-Muṭṭalib had a mat in the shade of the Kaʿbah " +
        "that no one — not even his sons — would sit on. He allowed the young Prophet ﷺ " +
        "to sit beside him and said: 'Leave my son alone. This child will be of great " +
        "importance.'",
    },
    {
      topic: "Why Abū Ṭālib was chosen",
      information:
        "Abū Ṭālib was the full brother of ʿAbdullāh — the Prophet's ﷺ father. This " +
        "made him the uncle who shared the Prophet's ﷺ paternal lineage most closely, " +
        "and the natural choice for guardianship.",
    },
    {
      topic: "Abū Ṭālib's faith",
      information:
        "Abū Ṭālib never accepted Islām — established in the Qurʾān and ḥadīth. Yet " +
        "his protection of the Prophet ﷺ lasted forty years. The Prophet ﷺ said his " +
        "intercession may place Abū Ṭālib in the shallowest position of the Fire " +
        "(Ṣaḥīḥ Muslim — Ḥadīth 209).",
    },
    {
      topic: "The guardian-of-orphan ḥadīth",
      information:
        "The Prophet ﷺ said: 'I and the guardian of an orphan will be together in " +
        "Paradise like this' — gesturing with his index and middle fingers side by side. " +
        "(Ṣaḥīḥ al-Bukhārī — Ḥadīth 5304 · Ṣaḥīḥ Muslim — Ḥadīth 2983)",
    },
  ],

  // ── What We Learn ─────────────────────────────────────────────────────────

  whatWeLearn: [
    {
      event: "ʿAbd al-Muṭṭalib seats the Prophet ﷺ beside him at the Kaʿbah",
      lesson:
        "Mercy toward the vulnerable is not just private care — it is a public act of " +
        "restoring dignity. Giving a child who has been diminished by loss a visible seat " +
        "of honour beside you says: this person belongs here.",
    },
    {
      event: "Allāh places a new guardian after every loss",
      lesson:
        "Allāh does not remove difficulty by preventing loss. He responds to loss with " +
        "provision. The pattern of the Prophet's ﷺ childhood teaches us to look for " +
        "Allāh's response rather than to be overwhelmed by the loss.",
    },
    {
      event: "ʿAbd al-Muṭṭalib entrusts his grandson to Abū Ṭālib on his deathbed",
      lesson:
        "The responsibility for an orphan is a trust (amānah) that must be deliberately " +
        "passed on — not abandoned. Care for the vulnerable is handed over explicitly, " +
        "with intention, to someone who will honour it.",
    },
    {
      event: "Abū Ṭālib protects the Prophet ﷺ for forty years without accepting Islām",
      lesson:
        "Allāh uses every type of person in His plan. Loyalty and protection can come " +
        "from unexpected places. We acknowledge the good done by non-Muslims who acted " +
        "justly without confusing their actions with their eternal standing.",
    },
    {
      event: "The Prophet ﷺ promises Paradise alongside himself for guardians of orphans",
      lesson:
        "The Prophet ﷺ elevated the status of caring for orphans to the highest personal " +
        "promise he ever made. He made it because he understood, from his own childhood, " +
        "precisely what a guardian means to a child who has lost everything.",
    },
  ],

  // ── Why Did Allāh Allow This? ──────────────────────────────────────────────

  whyDidAllahAllowThis: {
    question:
      "Why did Allāh allow the Prophet ﷺ to lose a third family member before he was even nine years old?",
    reflection:
      "Every scholar who has reflected on the Prophet's ﷺ early life arrives at the same " +
      "observation: the cumulative losses of his childhood were not punishments — they were " +
      "preparation. Each loss deepened his reliance on Allāh alone, removed any suggestion " +
      "that his mission was a family dynasty, and gave him a personal knowledge of grief " +
      "that would make him the most compassionate comforter of those who suffered. The " +
      "Prophet ﷺ who would later sit with the grieving, weep openly at death, and declare " +
      "the guardian of orphans his companion in Paradise — was the same person who had " +
      "stood at three graves before he was nine years old. His compassion was not " +
      "theoretical. It was earned, lived, and carried.",
    quranicConnection: {
      arabic: "أَلَمْ يَجِدْكَ يَتِيمًا فَآوَىٰ",
      translation: "Did He not find you an orphan and give you refuge?",
      reference: "Sūrah al-Ḍuḥā — 93:6",
    },
  },

  // ── Family Discussion ──────────────────────────────────────────────────────

  familyDiscussion: [
    {
      question:
        "ʿAbd al-Muṭṭalib gave his orphaned grandson a seat of honour that no one else " +
        "received — not even his own sons. Why do you think public honour matters so much " +
        "to a child who has experienced loss? Can you think of someone in your community who " +
        "might need to be 'seated beside' someone in that kind of visible, dignified way?",
      hint:
        "Help the family move beyond 'private care' to think about public dignity: being " +
        "named, included, placed visibly in the community alongside someone respected.",
    },
    {
      question:
        "Every time the Prophet ﷺ lost a caregiver, Allāh placed another one. Has there " +
        "been a loss in your family's story that was answered — eventually — with a " +
        "provision you did not expect? What does that pattern look like in your own life?",
      hint:
        "This works well when family members share a personal story. Create space for " +
        "quiet reflection — it may take time.",
    },
    {
      question:
        "The Prophet ﷺ promised Paradise beside himself to the guardian of an orphan. " +
        "Why do you think Allāh gives such a specific and elevated reward for this act? " +
        "What does it tell us about how Allāh views the situation of orphans?",
      hint:
        "Lead toward the idea that Allāh notices vulnerability with special care — and " +
        "rewards those who respond to it with special proximity.",
    },
    {
      question:
        "Abū Ṭālib never became a Muslim. Yet he protected the Prophet ﷺ for forty years. " +
        "How do we speak about him — with honesty and with respect — without either making " +
        "him a hero of Islām or dismissing what he did?",
      hint:
        "For older children and adults: introduce the concept of holding two realities at " +
        "once — acknowledging good actions without making claims about eternal status.",
    },
  ],

  // ── Family Application ─────────────────────────────────────────────────────

  familyApplication:
    "Before this week ends: identify one orphan, one child growing up without a parent, " +
    "or one family that has recently lost their father or mother. Do one thing for them. " +
    "It does not need to be large — a meal, a gift, a visit, a phone call, a duʿāʾ made " +
    "by name at Fajr. Then come back next week and share what you did at your family " +
    "taʿlīm session. The Prophet ﷺ promised his own companionship in Paradise for this. " +
    "Start small. Start now.",

  // ── Quick Review ───────────────────────────────────────────────────────────

  quickReview: [
    {
      question: "How old was the Prophet ﷺ when ʿAbd al-Muṭṭalib died?",
      answer: "Approximately eight years old.",
    },
    {
      question: "What was special about the seat ʿAbd al-Muṭṭalib kept at the Kaʿbah?",
      answer:
        "It was a mat that no one — not even his sons — was permitted to sit on. He allowed " +
        "the young Prophet ﷺ to sit beside him on it, and called him 'my son.'",
    },
    {
      question: "Why did ʿAbd al-Muṭṭalib choose Abū Ṭālib as the Prophet's ﷺ next guardian?",
      answer:
        "Because Abū Ṭālib was the full brother of ʿAbdullāh — the Prophet's ﷺ father — " +
        "making him the closest relative in lineage to the child.",
    },
    {
      question: "What did the Prophet ﷺ promise to the guardian of an orphan?",
      answer:
        "That he and the guardian of an orphan would be together in Paradise — and he " +
        "gestured with his index and middle fingers held side by side. (Bukhārī 5304)",
    },
    {
      question: "Did Abū Ṭālib accept Islām?",
      answer:
        "No. Abū Ṭālib died without accepting Islām — established in the Qurʾān and ḥadīth. " +
        "Yet he protected the Prophet ﷺ for forty years, and the Prophet ﷺ expressed hope " +
        "that his intercession would benefit him.",
    },
  ],

  // ── Explore Further ────────────────────────────────────────────────────────

  exploreFurther: [
    {
      title: "Al-Raḥīq al-Makhtūm (The Sealed Nectar)",
      author: "Ṣafī al-Raḥmān al-Mubārakfūrī",
      type: "book",
      note:
        "The prize-winning biography covers the early childhood period in readable detail, " +
        "including the guardianship of ʿAbd al-Muṭṭalib and the transition to Abū Ṭālib. " +
        "An excellent starting point for family reading.",
    },
    {
      title: "Al-Bidāyah wa al-Nihāyah",
      author: "Ibn Kathīr al-Dimashqī",
      type: "book",
      note:
        "The primary classical source for the events of this lesson. The chapter on the " +
        "Prophet's ﷺ early life covers ʿAbd al-Muṭṭalib's guardianship and death in full " +
        "detail with chain analysis. For those with access to a scholarly translation.",
    },
    {
      title: "Sīrat Ibn Hishām",
      author: "Ibn Hishām (preserving Ibn Isḥāq's original)",
      type: "book",
      note:
        "The earliest and most authoritative classical Sīrah. The sections on the early " +
        "childhood of the Prophet ﷺ include the accounts of ʿAbd al-Muṭṭalib's care and " +
        "Abū Ṭālib's guardianship in their original form.",
    },
  ],

  // ── Teacher Notes ──────────────────────────────────────────────────────────

  teacherNotes: [
    {
      audience: "family",
      heading: "Discussing Abū Ṭālib with Children",
      body:
        "This lesson introduces a complex figure: Abū Ṭālib protected the Prophet ﷺ " +
        "absolutely for forty years but did not accept Islām. With younger children, keep " +
        "the focus on his loyalty and care without exploring the theological dimension. " +
        "For older children (12+), this is an excellent opportunity to introduce nuance: " +
        "we can acknowledge the good someone did without making claims about their eternal " +
        "status. Avoid either glorifying Abū Ṭālib as a Muslim hero or dismissing him.",
    },
    {
      audience: "classroom",
      heading: "The Grief Curriculum",
      body:
        "This lesson, combined with Lesson 6 (Death of Āminah), forms a natural unit on " +
        "how Islām frames grief and loss. Consider pairing them in a two-session block. " +
        "Opening question: 'The Prophet ﷺ lost three family members before he was nine. " +
        "How did each loss change what Allāh provided for him next?' This pattern — loss " +
        "followed by provision — is central to the Sīrah's message for young learners.",
    },
    {
      audience: "madrasa",
      heading: "The Guardian of Orphans Ḥadīth",
      body:
        "Ṣaḥīḥ al-Bukhārī 5304 and Ṣaḥīḥ Muslim 2983 both record the guardian-of-orphan " +
        "ḥadīth. Students should memorise at least the short form from Bukhārī: " +
        "'أَنَا وَكَافِلُ الْيَتِيمِ فِي الْجَنَّةِ هَكَذَا'. Discuss the Arabic: " +
        "kāfil (one who bears responsibility for), yatīm (orphan — literally: alone). " +
        "The gesture of two fingers together is an image of closeness and equality.",
    },
    {
      audience: "all",
      heading: "Sensitivity to Children Who Have Lost Parents",
      body:
        "This lesson and Lesson 6 both deal directly with the death of parents. If there " +
        "are children in your group who have lost a parent, handle the material with " +
        "particular care. Emphasise Allāh's provision and the honour He gives to those " +
        "who care for such children — do not dwell on loneliness without also offering " +
        "the comfort of the Qurʾān's direct response to that grief.",
    },
  ],

  // ── Lesson Reliability Summary ─────────────────────────────────────────────

  lessonReliabilitySummary: {
    overallGrade: "Widely Accepted",
    summary:
      "The core events of this lesson — ʿAbd al-Muṭṭalib's guardianship of the Prophet ﷺ, " +
      "his death when the Prophet ﷺ was approximately eight years old, and Abū Ṭālib's " +
      "subsequent guardianship — are reported across all primary Sīrah sources with wide " +
      "scholarly acceptance. The narration of the seat at the Kaʿbah is preserved in Ibn " +
      "Isḥāq with broad acceptance. The two ḥadīth on the guardian of orphans (Bukhārī " +
      "5304 and Muslim 2983) are fully authenticated. The discussion of Abū Ṭālib's " +
      "faith and the Prophet's ﷺ intercession is drawn from Ṣaḥīḥ Muslim and is " +
      "established. No significant disputed or weak material is used in the lesson content.",
  },

  // ── Authentication Notes ───────────────────────────────────────────────────

  authenticationNotes: [
    {
      claim: "ʿAbd al-Muṭṭalib took guardianship of the Prophet ﷺ after Āminah's death",
      grade: "Widely Accepted",
      sources: ["Sīrat Ibn Hishām", "Al-Bidāyah wa al-Nihāyah", "Al-Raḥīq al-Makhtūm (The Sealed Nectar)"],
      explanation:
        "Reported consistently across all major classical Sīrah sources without dispute. " +
        "Widely accepted by scholars across all schools.",
    },
    {
      claim:
        "ʿAbd al-Muṭṭalib seated the Prophet ﷺ beside him on his mat at the Kaʿbah, " +
        "saying 'Leave my son alone — this child will be of great importance'",
      grade: "Widely Accepted",
      sources: ["Sīrat Ibn Hishām"],
      explanation:
        "Narrated by Ibn Isḥāq and preserved by Ibn Hishām. Accepted across classical " +
        "scholarship as a reliable Sīrah narration. Not in the Ṣaḥīḥ collections but " +
        "consistent with all other accounts of ʿAbd al-Muṭṭalib's treatment of the Prophet ﷺ.",
    },
    {
      claim: "ʿAbd al-Muṭṭalib died when the Prophet ﷺ was approximately eight years old",
      grade: "Widely Accepted",
      sources: ["Sīrat Ibn Hishām", "Al-Bidāyah wa al-Nihāyah"],
      explanation:
        "The age of eight is the most widely cited figure across Sīrah sources. Some accounts " +
        "give seven or nine. The variation reflects the difficulty in establishing precise dates " +
        "for the pre-prophetic period.",
    },
    {
      claim:
        "The guardian of an orphan will be beside the Prophet ﷺ in Paradise (Bukhārī 5304 / Muslim 2983)",
      grade: "Established",
      sources: ["Ṣaḥīḥ al-Bukhārī — Ḥadīth 5304", "Ṣaḥīḥ Muslim — Ḥadīth 2983"],
      explanation:
        "Narrated in both Ṣaḥīḥ al-Bukhārī and Ṣaḥīḥ Muslim with authenticated chains. " +
        "One of the most reliably established ḥadīth on the virtue of caring for orphans.",
    },
    {
      claim: "Abū Ṭālib did not die as a Muslim",
      grade: "Established",
      sources: ["Ṣaḥīḥ al-Bukhārī — Ḥadīth 1360", "Ṣaḥīḥ Muslim — Ḥadīth 24"],
      explanation:
        "Established in both Ṣaḥīḥ collections. The Prophet ﷺ was informed at the moment " +
        "of Abū Ṭālib's death that he had not said the shahādah. Sūrah al-Tawbah 9:113 " +
        "was revealed in this context according to tafsīr scholars.",
    },
    {
      claim:
        "The Prophet ﷺ expressed hope that his intercession would bring Abū Ṭālib to the lightest punishment",
      grade: "Established",
      sources: ["Ṣaḥīḥ Muslim — Ḥadīth 209"],
      explanation:
        "Authenticated in Ṣaḥīḥ Muslim. The Prophet ﷺ said Abū Ṭālib would be in the " +
        "shallowest part of the Fire with embers at his ankles — described as the lightest " +
        "punishment, granted through the Prophet's ﷺ intercession.",
    },
  ],

  // ── Lesson Timeline ────────────────────────────────────────────────────────

  lessonTimeline: [
    {
      year: "~576 CE",
      label: "Prophet ﷺ (age 6) enters ʿAbd al-Muṭṭalib's care after Āminah's death at Al-Abwāʾ",
    },
    {
      year: "~576–578 CE",
      label: "Two years of guardianship — honoured beside his grandfather at the Kaʿbah",
    },
    {
      year: "~578 CE",
      label: "ʿAbd al-Muṭṭalib dies — Prophet ﷺ (age ~8) passes into Abū Ṭālib's care",
    },
  ],

  // ── Connections ────────────────────────────────────────────────────────────

  connections: {
    timeline: ["~578 CE"],
    maps: ["kaabah"],
    characters: [
      "ʿAbd al-Muṭṭalib ibn Hāshim",
      "Abū Ṭālib ibn ʿAbd al-Muṭṭalib",
    ],
    references: [
      "Sūrah al-Ḍuḥā — 93:6",
      "Ṣaḥīḥ al-Bukhārī — Ḥadīth 5304",
      "Sīrat Ibn Hishām",
      "Al-Bidāyah wa al-Nihāyah",
    ],
  },
};

// ── Enrichment map ─────────────────────────────────────────────────────────────

export const lessonEnrichmentData: LessonEnrichmentMap = {
  "sirah_journey:6": lesson6,
  "sirah_journey:7": lesson7,
};

// ── Accessor ───────────────────────────────────────────────────────────────────

export function getLessonEnrichment(
  bookId: string,
  partNumber: number
): LessonEnrichment | undefined {
  return lessonEnrichmentData[`${bookId}:${partNumber}`];
}
