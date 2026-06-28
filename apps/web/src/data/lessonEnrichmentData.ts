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

// ── Lesson 0 — Introduction to Sīrah ─────────────────────────────────────────

const lesson0: LessonEnrichment = {
  bookId: "sirah_journey",
  partNumber: 0,
  lessonTitle: "Introduction to Sīrah",

  // ── Meta ──────────────────────────────────────────────────────────────────

  estimatedReadingTime: {
    readingMinutes: 40,
    studyMinutes: 25,
  },

  recommendedUse: ["individual", "family", "classroom", "madrasa"],

  // ── Opening ───────────────────────────────────────────────────────────────

  whyThisMattersToday:
    "We live in a time when young Muslims who pray five times a day can name every player in a football squad but cannot name ten Companions of Rasulūllāh ﷺ. This is not their failure — it is ours. The Sīrah is the cure. Every time a family opens this book together, they are reclaiming their inheritance and building a Muslim identity that no outside culture can uproot.",

  memoryGem:
    "\"Say: If you truly love Allāh, then follow me — Allāh will love you and forgive your sins.\" — Qurʾān 3:31",

  oneMinuteSummary:
    "This opening lesson asks a question every Muslim should be able to answer: what is Sīrah, and why does it matter? Sīrah means the path a person travels through their lifetime — and when Muslims say the word, we mean only one person: Muḥammad ﷺ, the greatest of all creation. The early Companions taught Sīrah with the same reverence as the Qurʾān itself. Seven profound reasons are explored: Sīrah is the history of Islam, the path to deep love for Rasulūllāh ﷺ, the foundation for following the Sunnah, the key to understanding the Qurʾān, the methodology of the Islamic movement, an act of ʿibādah, and the cure for the Muslim identity crisis threatening our children today.",

  // ── Key Facts ─────────────────────────────────────────────────────────────

  keyFacts: [
    {
      topic: "What does the word Sīrah mean?",
      information:
        "Sīrah comes from an Arabic root meaning path — the path a person travels through their lifetime. A comprehensive Arabic dictionary lists its meanings as: conduct, comportment, demeanour, behaviour, way of life, attitude, biography. While any person can have a Sīrah, Muslims have used the word so exclusively for the Prophet ﷺ that today it means only one person: Muḥammad ﷺ.",
    },
    {
      topic: "How did the early Muslims regard the Sīrah?",
      information:
        "ʿAlī ibn al-Ḥusayn ibn ʿAlī ibn Abī Ṭālib — grandson of ʿAlī raḍiyāllāhu ʿanh — said: 'We were taught the Sīrah of Rasulūllāh ﷺ just as we were taught the Qurʾān.' Muḥammad ibn Saʿd ibn Abī Waqqāṣ narrated that his father taught the Sīrah and battles to his children, saying: 'These are the traditions of your fathers — learn them, study them, and hold them close.'",
    },
    {
      topic: "The name Muḥammad and the adhān",
      information:
        "Muḥammad — meaning 'the praised one' — is the most common name in all of human history. At every moment, somewhere on earth, a minaret is calling the adhān and pronouncing: Ashhadu anna Muḥammadan rasūlullāh. Around the clock, without interruption, in every time zone, his name rings out. No name has ever more perfectly fulfilled its own meaning.",
    },
    {
      topic: "The Seven Reasons for Studying Sīrah",
      information:
        "(1) Sīrah is the history of Islam. (2) It develops true love for Rasulūllāh ﷺ. (3) It teaches us how to follow his way (Sunnah). (4) It unlocks the meaning of the Qurʾān. (5) It reveals the methodology of the Islamic movement. (6) Studying Sīrah is itself ʿibādah — worship. (7) It builds and protects Muslim identity in a world trying to sever our roots.",
    },
  ],

  // ── What We Learn ─────────────────────────────────────────────────────────

  whatWeLearn: [
    {
      event: "ʿUmar's conversation about loving the Prophet ﷺ more than oneself",
      lesson:
        "Love of Rasulūllāh ﷺ is not just a feeling — it is a condition of Īmān. ʿUmar tried to say he loved him more than everything except himself. The Prophet ﷺ said: not until you love me more than your own self. ʿUmar reflected and returned, and the Prophet ﷺ said: 'Now, O ʿUmar, your Īmān is complete.' True love requires knowledge — the more you know him ﷺ, the deeper your love becomes.",
    },
    {
      event: "ʿAmr ibn al-ʿĀṣ — from enemy who wanted to kill the Prophet ﷺ to man who could not look at his face",
      lesson:
        "ʿAmr ibn al-ʿĀṣ was once driven by a burning desire to destroy Rasulūllāh ﷺ. After accepting Islam, his love became so overwhelming that he could not look at the Prophet's full face directly — not to avoid him, but because his reverence and love were so great. On his deathbed he said: 'If you asked me to describe him I could not — I never allowed myself to stare.' This is what the Sīrah does to a person.",
    },
    {
      event: "Suhayl ibn ʿAmr's testimony after Ḥudaybiyyah",
      lesson:
        "A seasoned diplomat who had visited the Persian Emperor, the Roman Emperor, and the Najāshī returned to Makkah and told Quraysh: 'I have never in my life seen a leader so loved, so deeply revered, by his followers as Muḥammad ﷺ is loved by his Companions.' He described them competing to catch the drops of wuḍūʾ water as they fell from his blessed body. He warned: 'These are not people you can negotiate away from their leader.'",
    },
    {
      event: "The Muslim identity crisis — Solzhenitsyn on severing roots",
      lesson:
        "Alexander Solzhenitsyn said: 'To destroy a people, you must first sever their roots.' The Sīrah series is our answer to that crisis. Every time we sit together and study the life of Rasulūllāh ﷺ, we are telling our children: you come from something great. You belong to someone extraordinary. You have a legacy — and it is your responsibility to know it, honour it, and pass it on.",
    },
  ],

  // ── Why Did Allāh Allow This ──────────────────────────────────────────────

  whyDidAllahAllowThis: {
    question:
      "Why did Allāh make love of the Prophet ﷺ a condition of Īmān — not merely a virtue or a recommendation?",
    reflection:
      "Because Allāh sent Rasulūllāh ﷺ not just to deliver a message but to be the message made living. The Qurʾān is the word of Allāh. The Prophet ﷺ is the walk of Allāh's word. You cannot separate loving from following — Allāh made them the same thing in one āyah: 'If you love Allāh, follow me — and Allāh will love you.' The formula works in both directions: love leads to following, and following deepens love. Allāh knew that an ummah that truly knows Rasulūllāh ﷺ will never abandon his way. The condition of love is therefore a mercy — it is the engine that keeps us on the straight path.",
    quranicConnection: {
      arabic:
        "قُلْ إِن كُنتُمْ تُحِبُّونَ اللَّهَ فَاتَّبِعُونِي يُحْبِبْكُمُ اللَّهُ وَيَغْفِرْ لَكُمْ ذُنُوبَكُمْ وَاللَّهُ غَفُورٌ رَّحِيمٌ",
      translation:
        "Say: If you truly love Allāh, then follow me — Allāh will love you and forgive your sins. And Allāh is Oft-Forgiving, Most Merciful.",
      reference: "Qurʾān 3:31",
    },
  },

  // ── Family Discussion ─────────────────────────────────────────────────────

  familyDiscussion: [
    {
      question:
        "ʿUmar said he loved Rasulūllāh ﷺ more than everything — except himself. The Prophet ﷺ said: 'Not until you love me more than your own self.' ʿUmar reflected, then returned. Has there ever been a moment in your life when your love for something grew deeper after you truly came to understand it?",
      hint:
        "Explore: what would it take to love Rasulūllāh ﷺ the way the Ṣaḥābah loved him? What is the connection between knowledge and love?",
    },
    {
      question:
        "ʿAmr ibn al-ʿĀṣ went from wanting to kill the Prophet ﷺ to being unable to look at his face from the intensity of his love. What caused such a complete transformation?",
      hint:
        "Ask: can a person sincerely love someone they do not know? What is the difference between the love we claim and the love the Ṣaḥābah lived?",
    },
    {
      question:
        "The lesson describes a Muslim identity crisis: our young people know more about pop stars than about the Ṣaḥābah. What small, practical steps can your family take this week to begin changing that?",
      hint:
        "Be practical: which Companion can each family member commit to learning about before the next session?",
    },
    {
      question:
        "ʿAlī ibn al-Ḥusayn said the Sīrah was taught with the same seriousness as the Qurʾān. How seriously does your family currently treat the Sīrah — and what would 'taking it seriously' actually look like in your home?",
    },
  ],

  // ── Family Application ────────────────────────────────────────────────────

  familyApplication:
    "This week: when the adhān is called for any ṣalāh, pause. Listen carefully to the words Ashhadu anna Muḥammadan rasūlullāh. Remind your family that at this very moment, in every time zone on earth, his name is being called out — the most common name in all of human history. Then ask: how well do we truly know the man whose name is on our lips five times every day?",

  // ── Quick Review ──────────────────────────────────────────────────────────

  quickReview: [
    {
      question: "What does the word Sīrah mean?",
      answer:
        "Linguistically, it means a path — the path a person travels through their lifetime. For Muslims, it specifically means the biography of Rasulūllāh ﷺ: his conduct, behaviour, way of life, and the complete record of how he lived.",
    },
    {
      question: "What did ʿAlī ibn al-Ḥusayn say about how the early Muslims treated the Sīrah?",
      answer:
        "'We were taught the Sīrah of Rasulūllāh ﷺ just as we were taught the Qurʾān.' — with the same seriousness, dedication, and reverence as the Book of Allāh ﷻ.",
    },
    {
      question: "Name any four of the seven reasons for studying Sīrah.",
      answer:
        "Any four from: (1) History of Islam. (2) Developing true love for Rasulūllāh ﷺ. (3) Following his Sunnah. (4) Understanding the Qurʾān. (5) The methodology of the Islamic movement. (6) ʿIbādah — worship. (7) Building Muslim identity.",
    },
    {
      question: "What did the transformation of ʿAmr ibn al-ʿĀṣ demonstrate about the Sīrah?",
      answer:
        "ʿAmr went from an enemy who wanted to kill Rasulūllāh ﷺ to a man whose love for him was so intense he could not look at his face directly. It shows that truly knowing Rasulūllāh ﷺ produces deep, overwhelming love — and that knowledge is the path to that love.",
    },
  ],

  // ── Explore Further ───────────────────────────────────────────────────────

  exploreFurther: [
    {
      title: "Ṣaḥīḥ al-Bukhārī — Kitāb al-Īmān (Book of Faith)",
      type: "book",
      note:
        "Contains the foundational hadīth of this lesson: 'None of you truly believes until I am more beloved to him than his parents, his children, and all of mankind.' (Hadīth 15). Also contains the ʿUmar conversation (Hadīth 6632).",
    },
    {
      title: "Qurʾān, Sūrah Āl ʿImrān (3:31)",
      type: "article",
      note:
        "The defining āyah of this lesson — the formula connecting love of Allāh to following Rasulūllāh ﷺ. Read it in its fuller context (3:28–35) to understand the situation in which it was revealed.",
    },
    {
      title: "Qurʾān, Sūrah al-Tawbah (9:24)",
      type: "article",
      note:
        "The āyah that lists everything we might love more than Allāh and His Messenger — and warns of the consequence. A powerful companion verse to Āl ʿImrān 3:31.",
    },
    {
      title: "Al-Raḥīq al-Makhtūm (The Sealed Nectar)",
      author: "Ṣafī al-Raḥmān al-Mubārakfūrī",
      type: "book",
      note:
        "The most widely read modern Sīrah in English — winner of the World Muslim League prize. An excellent starting point for families who want to go deeper than the sessions.",
    },
    {
      title: "Sīrat Ibn Hishām",
      author: "Ibn Hishām (from Ibn Isḥāq)",
      type: "book",
      note:
        "The earliest comprehensive Sīrah text, compiled ~150 AH by Ibn Isḥāq and refined ~218 AH by Ibn Hishām. The foundation on which all later Sīrah scholarship was built.",
    },
  ],

  // ── Teacher Notes ─────────────────────────────────────────────────────────

  teacherNotes: [
    {
      audience: "all",
      heading: "This lesson sets the tone for the entire series",
      body:
        "The seven reasons are not just an introduction — they are the answer to every student who ever asks 'why does this matter?' Keep returning to them throughout the series. By the end of the full Sīrah journey, students should be able to recall all seven from memory without prompting.",
    },
    {
      audience: "family",
      heading: "The identity crisis conversation — make it aspirational",
      body:
        "Reason Seven can be a sensitive discussion. Frame it without blame. The goal is not to make children feel guilty for enjoying popular culture, but to help the family see that their Islamic identity is worth knowing, celebrating, and passing on. Ask: what would our home look like if we were as passionate about the Ṣaḥābah as we are about our favourite teams?",
    },
    {
      audience: "madrasa",
      heading: "Use the ʿAmr ibn al-ʿĀṣ story for distant students",
      body:
        "When students seem emotionally disconnected from Rasulūllāh ﷺ, use this story. The message is deliberately extreme: even the greatest enemy became the greatest lover once he truly came to know him. Knowledge is the path — and that is exactly why they are in this class.",
    },
    {
      audience: "classroom",
      heading: "Suhayl's testimony — the power of external witness",
      body:
        "Suhayl ibn ʿAmr was not a Muslim when he reported on Companion love. An experienced diplomat who had visited empires observed the Companions and declared he had never seen anything like it. Use this when students challenge whether the Companions' love was real or culturally exaggerated. An outsider with no reason to flatter confirmed it.",
    },
  ],

  // ── Authentication Notes ──────────────────────────────────────────────────

  authenticationNotes: [
    {
      claim: "The hadīth of love — 'None of you truly believes until I am more beloved...'",
      grade: "Established",
      sources: ["Ṣaḥīḥ al-Bukhārī, Hadīth 15", "Ṣaḥīḥ Muslim, Hadīth 44"],
      explanation:
        "Source classification: Ṣaḥīḥ Ḥadīth. Mutafaq ʿalayh — agreed upon by both Bukhārī and Muslim. The highest grade of hadīth authentication.",
    },
    {
      claim: "ʿUmar's conversation with the Prophet ﷺ about loving him more than oneself",
      grade: "Established",
      sources: ["Ṣaḥīḥ al-Bukhārī, Hadīth 6632"],
      explanation:
        "Source classification: Ṣaḥīḥ Ḥadīth. Narrated in Ṣaḥīḥ al-Bukhārī with a sound chain.",
    },
    {
      claim: "The story of ʿAmr ibn al-ʿĀṣ — his deathbed description of his love for the Prophet ﷺ",
      grade: "Established",
      sources: ["Ṣaḥīḥ Muslim, Hadīth 121"],
      explanation:
        "Source classification: Ṣaḥīḥ Ḥadīth. Narrated in Ṣaḥīḥ Muslim. The specific detail about his inability to look at the Prophet ﷺ's face out of love is preserved in this authenticated narration.",
    },
    {
      claim: "Suhayl ibn ʿAmr's testimony about Companion love at the Treaty of Ḥudaybiyyah",
      grade: "Widely Accepted",
      sources: ["Ṣaḥīḥ al-Bukhārī — Kitāb al-Shurūṭ", "Sīrat Ibn Hishām"],
      explanation:
        "Source classification: Ṣaḥīḥ Ḥadīth / Sīrah Narrative. The Ḥudaybiyyah account is in Bukhārī. Suhayl's exact words vary across narrations but the substance of his testimony is well established in Sīrah literature.",
    },
    {
      claim: "Ibn Ḥazm's statement about following Muḥammad ﷺ being the path to preeminence",
      grade: "Scholarly Discussion",
      sources: ["Al-Muḥallā — Ibn Ḥazm al-Andalusī"],
      explanation:
        "Source classification: Scholarly citation. Ibn Ḥazm (384–456 AH / 994–1064 CE) was a major Andalusian scholar. His works are well preserved and the statement is authentically attributed to him, though it is scholarly opinion rather than Qurʾān or hadīth.",
    },
  ],

  // ── Reliability Summary ───────────────────────────────────────────────────

  lessonReliabilitySummary: {
    overallGrade: "Established",
    summary:
      "The core of this lesson — the hadīths on love of the Prophet ﷺ, ʿUmar's conversation, ʿAmr ibn al-ʿĀṣ's transformation, and the Qurʾānic verses — comes from Ṣaḥīḥ al-Bukhārī, Ṣaḥīḥ Muslim, and the Qurʾān itself. The Suhayl testimony at Ḥudaybiyyah is grounded in Bukhārī's account of the treaty. Scholarly statements such as Ibn Ḥazm's quotation are well-sourced classical scholarship. This introductory lesson rests on the most reliable foundations in the Islamic knowledge tradition.",
  },

  // ── Lesson Timeline ───────────────────────────────────────────────────────

  lessonTimeline: [
    {
      year: "~7th century CE (1st century AH)",
      label:
        "The Companions begin transmitting the Sīrah orally, treating it with the same care as the Qurʾān — Muḥammad ibn Saʿd ibn Abī Waqqāṣ and ʿAlī ibn al-Ḥusayn are among the early transmitters",
    },
    {
      year: "~750 CE (~132 AH)",
      label:
        "Muḥammad ibn Isḥāq compiles the first comprehensive Sīrah — Sīrat Rasūl Allāh — gathering oral traditions into a single narrative",
    },
    {
      year: "~833 CE (~218 AH)",
      label:
        "Ibn Hishām edits and refines Ibn Isḥāq's Sīrah into the form most Muslims study today — Sīrat Ibn Hishām",
    },
    {
      year: "1976 CE",
      label:
        "Ṣafī al-Raḥmān al-Mubārakfūrī writes Al-Raḥīq al-Makhtūm (The Sealed Nectar) — the most widely read modern Sīrah, winner of the World Muslim League prize",
    },
  ],

  // ── Connections ───────────────────────────────────────────────────────────

  connections: {
    timeline: [
      "~1st century AH — Companions transmit the Sīrah",
      "~150 AH — Ibn Isḥāq compiles the first Sīrah",
      "~218 AH — Ibn Hishām refines the text",
      "1976 CE — Al-Raḥīq al-Makhtūm",
    ],
    maps: ["makkah", "madinah", "hijaz"],
    characters: [
      "Muḥammad ibn ʿAbdullāh ﷺ",
      "ʿUmar ibn al-Khaṭṭāb raḍiyāllāhu ʿanh",
      "ʿAmr ibn al-ʿĀṣ raḍiyāllāhu ʿanh",
      "Suhayl ibn ʿAmr",
      "ʿAlī ibn al-Ḥusayn ibn ʿAlī ibn Abī Ṭālib",
      "Muḥammad ibn Saʿd ibn Abī Waqqāṣ",
    ],
    references: [
      "Ṣaḥīḥ al-Bukhārī — Kitāb al-Īmān (Hadīth 15)",
      "Ṣaḥīḥ Muslim — Hadīth 44",
      "Ṣaḥīḥ Muslim — Hadīth 121 (ʿAmr ibn al-ʿĀṣ)",
      "Qurʾān 3:31",
      "Qurʾān 9:24",
      "Sīrat Ibn Hishām",
      "Al-Raḥīq al-Makhtūm (The Sealed Nectar)",
    ],
  },
};

// ── Lesson 1 — The Meccan Period ──────────────────────────────────────────────

const lesson1: LessonEnrichment = {
  bookId: "sirah_journey",
  partNumber: 1,
  lessonTitle: "The Meccan Period",

  // ── Meta ──────────────────────────────────────────────────────────────────

  estimatedReadingTime: {
    readingMinutes: 40,
    studyMinutes: 25,
  },

  recommendedUse: ["family", "classroom", "madrasa"],

  // ── Why This Matters Today ─────────────────────────────────────────────────

  whyThisMattersToday:
    "Every Muslim who performs Ḥajj walks between Ṣafā and Marwah because Hājar " +
    "ran there first. Every Muslim who drinks Zamzam drinks from a well opened by " +
    "divine intervention for a mother and her dying infant. This lesson gives " +
    "families the origin story behind the rituals they know — and a framework for " +
    "trusting Allāh through trials before the answer comes. The ancestry of " +
    "Rasūlullāh ﷺ was not an accident of history. It was chosen, prepared, and " +
    "preserved through obedience, migration, sacrifice, and divine protection — " +
    "centuries before his birth.",

  // ── Memory Gem ────────────────────────────────────────────────────────────

  memoryGem:
    "\"Our Lord, I have settled some of my descendants in a valley with no " +
    "cultivation, near Your sacred House — so that they may establish prayer. " +
    "So make hearts among the people incline towards them, and provide them " +
    "with fruits, that they may be grateful.\" — Qurʾān 14:37",

  // ── One-Minute Summary ────────────────────────────────────────────────────

  oneMinuteSummary:
    "Thousands of years before his birth, Allāh began preparing the world for " +
    "Rasūlullāh ﷺ. Ibrāhīm ʿalayhis salām, by divine command, left his wife Hājar " +
    "and infant Ismāʿīl in a barren valley in Ḥijāz. Hājar's seven runs between " +
    "Ṣafā and Marwah — and the miracle of Zamzam — established the sacred geography " +
    "of Ḥajj. The tribe of Jurhum settled the valley; Ismāʿīl married among them and " +
    "established the Arabic lineage. Makkah grew over centuries. Quṣayy ibn Kilāb, a " +
    "descendant of Ismāʿīl, unified Quraysh and reclaimed leadership of the city. " +
    "Hāshim — great-grandfather of Rasūlullāh ﷺ — gave the clan its name by crushing " +
    "bread to feed pilgrims. His grandson ʿAbd al-Muṭṭalib rediscovered Zamzam through " +
    "a divine dream. ʿAbd al-Muṭṭalib later made a pledge, and his son ʿAbdullāh was " +
    "ransomed with one hundred camels — becoming the father of Rasūlullāh ﷺ.",

  // ── Key Facts ─────────────────────────────────────────────────────────────

  keyFacts: [
    {
      topic: "Why did Ibrāhīm ʿalayhis salām leave Hājar and Ismāʿīl in an empty valley?",
      information:
        "By direct command of Allāh ﷻ. When Hājar asked whether Allāh had " +
        "commanded this, Ibrāhīm confirmed: yes. Her response was immediate: " +
        "'Then Allāh will not abandon us.' Allāh was establishing the sacred " +
        "geography of Ḥajj and the Arabic lineage through which Rasūlullāh ﷺ " +
        "would come. The suffering of Hājar was purposeful — Allāh does not " +
        "waste the trials of those who trust in Him.",
    },
    {
      topic: "The saʿy between Ṣafā and Marwah",
      information:
        "The saʿy is the rite of walking between the hills of Ṣafā and Marwah " +
        "seven times during Ḥajj and ʿUmrah. Hājar ran between these hills seven " +
        "times searching for water while Ismāʿīl was dying of thirst. When Zamzam " +
        "appeared, Allāh preserved her action as a permanent rite of worship for " +
        "every Muslim until the Day of Judgement. The Prophet ﷺ explicitly said: " +
        "'That is why we go between Ṣafā and Marwah.' (Ṣaḥīḥ al-Bukhārī)",
    },
    {
      topic: "How Makkah came to be inhabited after Zamzam appeared",
      information:
        "Birds began circling above the valley — a sign of water in the desert. " +
        "The tribe of Jurhum, travelling through Ḥijāz, sent scouts and found " +
        "water. They requested permission from Hājar to settle. She agreed on " +
        "the condition that water rights remained hers. Ismāʿīl grew up among " +
        "Jurhum, learned Arabic, and married a woman from the tribe — establishing " +
        "the Arabic lineage of Rasūlullāh ﷺ in Makkah.",
    },
    {
      topic: "Who was Hāshim and how did he earn that name?",
      information:
        "Hāshim was the great-grandfather of Rasūlullāh ﷺ. His real name was ʿAmr. " +
        "He held the honour of providing food to pilgrims during Ḥajj. He introduced " +
        "the practice of crushing bread (hashm) into broth to give pilgrims a fuller " +
        "meal. The people nicknamed him Hāshim — and it is this name that history and " +
        "the entire clan of Banū Hāshim would carry forever.",
    },
  ],

  // ── What We Learn ─────────────────────────────────────────────────────────

  whatWeLearn: [
    {
      event: "Hājar's trust before Zamzam appeared",
      lesson:
        "Hājar said 'Allāh will not abandon us' in the middle of the trial — " +
        "before any sign of relief had come. Tawakkul is not a feeling that " +
        "arrives after the difficulty passes. It is a conviction expressed in " +
        "the darkest moment. Allāh does not waste the ṣabr of those who trust " +
        "in Him. Her sa'y became a pillar of Ḥajj; Zamzam still flows today.",
    },
    {
      event: "Ibrāhīm's duʿāʾ — Qurʾān 14:37",
      lesson:
        "Ibrāhīm asked for ṣalāh before food, before community, before comfort. " +
        "That is the correct hierarchy — and it is the opposite of what the world " +
        "tells us to prioritise. This duʿāʾ teaches families that spiritual " +
        "purpose must be placed first, and Allāh will provide what follows from it.",
    },
    {
      event: "Hāshim was named for crushing bread to feed pilgrims",
      lesson:
        "A small act of service, done with sincerity, became part of the lineage " +
        "of the Prophet of Allāh ﷺ — preserved forever in the name Banū Hāshim. " +
        "Do not underestimate sincere service. Allāh sees it, preserves it, and " +
        "builds upon it in ways the servant cannot imagine.",
    },
  ],

  // ── Why Did Allāh Allow This ──────────────────────────────────────────────

  whyDidAllahAllowThis: {
    question:
      "Why did Allāh command Ibrāhīm ʿalayhis salām to leave his wife and infant " +
      "in a barren, lifeless valley — with no water, no food, and no people?",
    reflection:
      "Allāh was establishing two things simultaneously: the sacred land of Ḥajj " +
      "and the Arabic lineage of Rasūlullāh ﷺ. The suffering of Hājar was not " +
      "neglect — it was preparation. Her sa'y became a permanent act of worship; " +
      "Zamzam became a miracle that still flows more than three thousand years " +
      "later. The scholars note that when Allāh is building something eternal, " +
      "the trials that precede it are always proportional to the gift that follows. " +
      "Ibrāhīm did not know all of this when he walked away. He knew only that " +
      "Allāh had commanded him — and that was enough. Hājar did not know any of " +
      "this when she ran between the hills. She knew only that Allāh would not " +
      "abandon them — and that was enough. This is the lesson Allāh placed at " +
      "the very beginning of the story of Rasūlullāh ﷺ.",
    quranicConnection: {
      arabic:
        "رَبَّنَا إِنِّي أَسْكَنتُ مِن ذُرِّيَّتِي بِوَادٍ غَيْرِ ذِي زَرْعٍ عِندَ بَيْتِكَ الْمُحَرَّمِ",
      translation:
        "Our Lord, I have settled some of my descendants in a valley with no " +
        "cultivation, near Your sacred House.",
      reference: "Qurʾān 14:37",
    },
  },

  // ── Family Discussion ─────────────────────────────────────────────────────

  familyDiscussion: [
    {
      question:
        "Hājar said 'Allāh will not abandon us' before the miracle appeared — " +
        "not after. She said it in the middle of the trial. What does this tell " +
        "us about when tawakkul needs to be expressed?",
      hint:
        "Ask: Can we say the same in our own difficulties, before the answer comes? " +
        "What would it take for us to say it with the same certainty Hājar had?",
    },
    {
      question:
        "In Qurʾān 14:37, Ibrāhīm asked for ṣalāh before food. What do we " +
        "normally ask for first in our duʿāʾ — and what does our order of " +
        "priorities tell us?",
      hint:
        "This is not a critique — it is an invitation. Ask the family to think " +
        "honestly about the hierarchy in their own duʿāʾ and how they might " +
        "bring it closer to Ibrāhīm's.",
    },
    {
      question:
        "The name Hāshim was given for crushing bread to feed pilgrims — a " +
        "small act of service that became part of the lineage of Rasūlullāh ﷺ. " +
        "What small, sincere act is your family doing that Allāh might preserve " +
        "far beyond your lifetime?",
    },
  ],

  // ── Family Application ────────────────────────────────────────────────────

  familyApplication:
    "This week, when your family drinks water or performs wuḍūʾ, pause. Mention " +
    "Zamzam. Say: 'This water comes from a well that Allāh caused to flow for a " +
    "mother and her dying infant, thousands of years ago. It still flows. Allāh " +
    "does not forget.' Then share one thing from today's lesson with someone who " +
    "was not present.",

  // ── Quick Review ──────────────────────────────────────────────────────────

  quickReview: [
    {
      question:
        "What did Hājar say when Ibrāhīm confirmed that Allāh commanded him to leave them?",
      answer:
        "'Then Allāh will not abandon us.' She expressed tawakkul immediately — " +
        "before any sign of relief had appeared.",
    },
    {
      question: "Why do Muslims walk between Ṣafā and Marwah during Ḥajj?",
      answer:
        "In honour of Hājar, who ran between these hills seven times searching " +
        "for water for Ismāʿīl. Allāh preserved this as a permanent rite of " +
        "Ḥajj and ʿUmrah for every Muslim until the Day of Judgement.",
    },
    {
      question: "How was Zamzam rediscovered after being buried for over 300 years?",
      answer:
        "ʿAbd al-Muṭṭalib — the grandfather of Rasūlullāh ﷺ — received a divine " +
        "dream over several nights that gave him signs of the exact location. He dug " +
        "and uncovered the well beside the Kaʿbah.",
    },
    {
      question: "What does the name 'Hāshim' mean and who was he?",
      answer:
        "Hāshim means one who crushes bread. His real name was ʿAmr. He was the " +
        "great-grandfather of Rasūlullāh ﷺ, given the nickname for crushing bread " +
        "into broth to feed pilgrims during Ḥajj.",
    },
  ],

  // ── Explore Further ───────────────────────────────────────────────────────

  exploreFurther: [
    {
      title: "Ṣaḥīḥ al-Bukhārī — Kitāb al-Anbiyāʾ",
      type: "book",
      note:
        "The full authenticated narration of Ibrāhīm, Hājar, Zamzam, and the saʿy " +
        "— narrated by Ibn ʿAbbās raḍiyāllāhu ʿanhumā. The strongest primary source " +
        "for the foundational events of this lesson.",
    },
    {
      title: "Qurʾān, Sūrah Ibrāhīm (14:35–41)",
      type: "article",
      note:
        "Ibrāhīm ʿalayhis salām's duʿāʾ for Makkah and its people — including the " +
        "Memory Gem for this lesson (14:37). Read in Arabic and translation as a " +
        "family and reflect on the order in which Ibrāhīm made his requests.",
    },
    {
      title: "Qurʾān, Sūrah al-Baqarah (2:125–129)",
      type: "article",
      note:
        "The divine command to Ibrāhīm and Ismāʿīl to purify the House of Allāh — " +
        "Qurʾānic confirmation of the building of the Kaʿbah and the establishment " +
        "of ḥajj.",
    },
    {
      title: "Sīrat Ibn Hishām",
      author: "Ibn Hishām (from Ibn Isḥāq)",
      type: "book",
      note:
        "The ancestral chain of Rasūlullāh ﷺ from Ibrāhīm through Quṣayy, Hāshim, " +
        "ʿAbd al-Muṭṭalib, and ʿAbdullāh. The foundational classical Sīrah source " +
        "for the pre-Islamic genealogy covered in this lesson.",
    },
    {
      title: "Al-Raḥīq al-Makhtūm (The Sealed Nectar)",
      author: "Ṣafī al-Raḥmān al-Mubārakfūrī",
      type: "book",
      note:
        "The prize-winning modern Sīrah biography opens with Pre-Islamic Arabia " +
        "and the lineage of Rasūlullāh ﷺ. Accessible for older students and adults " +
        "who want to study this period in depth.",
    },
    {
      title: "The title 'son of the two sacrificed ones' — for deeper study",
      type: "article",
      note:
        "This title — referring to Ismāʿīl ʿalayhis salām and ʿAbdullāh — is widely " +
        "quoted in Sīrah literature but scholars have discussed its chain of " +
        "transmission. For deeper study, see Al-Bidāyah wa-al-Nihāyah (Ibn Kathīr) " +
        "and the relevant chapters of Sīrat Ibn Hishām. Do not cite it at the level " +
        "of Qurʾān or Ṣaḥīḥ ḥadīth.",
    },
  ],

  // ── For Teachers and Parents ──────────────────────────────────────────────

  teacherNotes: [
    {
      audience: "all",
      heading: "Connect the saʿy to Ḥajj",
      body:
        "When studying Hājar's seven runs between Ṣafā and Marwah, connect it " +
        "explicitly to the rite of saʿy in Ḥajj and ʿUmrah. If possible, show " +
        "a video of pilgrims performing the saʿy. Ask: 'Millions of people are " +
        "doing exactly what Hājar did — in the same place. How does knowing her " +
        "story change what that ritual means?' This connection transforms ritual " +
        "from habit into remembrance.",
    },
    {
      audience: "madrasa",
      heading: "ʿAbd al-Muṭṭalib's vow — pre-Islamic context, not Islamic model",
      body:
        "ʿAbd al-Muṭṭalib made a vow to sacrifice one of his sons as a practice " +
        "rooted in pre-Islamic Arabian custom. This is absolutely not an Islamic " +
        "model and must be stated clearly with older students. Islam prohibits " +
        "human sacrifice. The story is taught as historical narrative showing the " +
        "nobility of character in the family of Rasūlullāh ﷺ before Islam — " +
        "not as a religious practice to follow or admire in form.",
    },
    {
      audience: "family",
      heading: "The wise woman and pre-Islamic practices",
      body:
        "The story includes a woman 'who claimed to speak with spirits' — consulted " +
        "by Quraysh during a dispute. This reflects the pre-Islamic environment into " +
        "which Rasūlullāh ﷺ was born. Teach it as context: this is what Allāh " +
        "was sending His Prophet to transform. Do not present it as endorsement " +
        "of fortune-telling, divination, or consulting unseen spirits — all of " +
        "which are clearly prohibited in Islam.",
    },
  ],

  // ── Authentication Notes ──────────────────────────────────────────────────

  authenticationNotes: [
    {
      claim: "The story of Ibrāhīm, Hājar, Ismāʿīl, and the founding of Zamzam",
      grade: "Established",
      sources: [
        "Ṣaḥīḥ al-Bukhārī — Kitāb al-Anbiyāʾ, narrated by Ibn ʿAbbās raḍiyāllāhu ʿanhumā",
        "Qurʾān 14:37 — Ibrāhīm's duʿāʾ confirming he settled his family near the sacred House",
        "Qurʾān 2:125–127 — command to Ibrāhīm and Ismāʿīl to purify the House",
      ],
      explanation:
        "The foundational events of this lesson — Ibrāhīm's command from Allāh, " +
        "Hājar's trust, the saʿy, and the appearance of Zamzam — are among the " +
        "best-authenticated stories in all of Sīrah literature. They appear in " +
        "Ṣaḥīḥ al-Bukhārī with a sound chain through Ibn ʿAbbās raḍiyāllāhu " +
        "ʿanhumā, and are confirmed by multiple verses of the Qurʾān. " +
        "Source classification: Qurʾān + Ṣaḥīḥ Ḥadīth.",
    },
    {
      claim: "The saʿy between Ṣafā and Marwah was established because of Hājar's action",
      grade: "Established",
      sources: [
        "Ṣaḥīḥ al-Bukhārī — the Prophet ﷺ explicitly stated that the saʿy was established because of Hājar",
      ],
      explanation:
        "The Prophet ﷺ himself narrated and explained the story of Hājar's saʿy " +
        "and said explicitly: 'That is why we go between Ṣafā and Marwah.' " +
        "This connection between Hājar's action and the Ḥajj rite is not " +
        "scholarly inference — it is a direct statement from Rasūlullāh ﷺ " +
        "recorded in the most authoritative ḥadīth collection. " +
        "Source classification: Ṣaḥīḥ Ḥadīth.",
    },
    {
      claim:
        "The genealogical history of Quraysh — Quṣayy ibn Kilāb, Hāshim, ʿAbd al-Muṭṭalib",
      grade: "Widely Accepted",
      sources: [
        "Sīrat Ibn Hishām (from Ibn Isḥāq)",
        "Al-Raḥīq al-Makhtūm (The Sealed Nectar) — Ṣafī al-Raḥmān al-Mubārakfūrī",
      ],
      explanation:
        "The pre-Islamic ancestry of Rasūlullāh ﷺ — from Ismāʿīl through " +
        "Quṣayy, Hāshim, ʿAbd al-Muṭṭalib, and ʿAbdullāh — is recorded in " +
        "the classical Sīrah works with broad scholarly consensus. These " +
        "genealogical accounts come through Sīrah narrative chains rather than " +
        "Ṣaḥīḥ ḥadīth, but they are accepted by the overwhelming majority of " +
        "scholars and form part of the established pre-Islamic history of Islam. " +
        "Source classification: Sīrah Narrative.",
    },
    {
      claim:
        "The pledge of ʿAbd al-Muṭṭalib and the ransom of ʿAbdullāh with one hundred camels",
      grade: "Widely Accepted",
      sources: [
        "Sīrat Ibn Hishām (narrated via Ibn Isḥāq)",
      ],
      explanation:
        "The core events — the vow, the casting of lots, and the ransom — are " +
        "reported in classical Sīrah literature and widely accepted among scholars. " +
        "Some peripheral details (the wise woman, the exact method of casting lots) " +
        "reflect pre-Islamic practices described in Sīrah narrative. " +
        "Source classification: Sīrah Narrative / Scholarly Discussion for details.",
    },
    {
      claim:
        "'Son of the two sacrificed ones' — the title applied to Rasūlullāh ﷺ referring to Ismāʿīl and ʿAbdullāh",
      grade: "Scholarly Discussion",
      sources: [
        "Reported in Sīrah literature — chain and exact wording have been discussed by scholars of ḥadīth",
      ],
      explanation:
        "This title is widely quoted in Sīrah books and is part of the well-known " +
        "narrative tradition. However, scholars of ḥadīth have noted that the chain " +
        "of transmission for this specific statement requires careful examination. " +
        "It should not be cited at the same level as Qurʾānic verse or Ṣaḥīḥ ḥadīth. " +
        "The story of the ransom itself (from which this title derives) is widely " +
        "accepted; the title as a direct quotation from the Prophet ﷺ is where " +
        "the scholarly discussion lies. " +
        "Source classification: Scholarly Discussion.",
    },
  ],

  // ── Lesson Reliability Summary ────────────────────────────────────────────

  lessonReliabilitySummary: {
    overallGrade: "Widely Accepted",
    summary:
      "The strongest parts of this lesson — Ibrāhīm, Hājar, Zamzam, and the saʿy " +
      "— are established through authentic sources: the Qurʾān and Ṣaḥīḥ al-Bukhārī. " +
      "The later genealogical and pre-Islamic historical details come through classical " +
      "Sīrah works, accepted by scholars but at a different grade of authentication. " +
      "Peripheral details of the ransom story fall under Scholarly Discussion.",
  },

  // ── Mini Timeline ─────────────────────────────────────────────────────────

  lessonTimeline: [
    {
      year: "~2000 BCE (approx.)",
      label: "Ibrāhīm ʿalayhis salām leaves Hājar and Ismāʿīl in the valley that would become Makkah",
    },
    {
      year: "~2000 BCE (approx.)",
      label: "Zamzam appears — the tribe of Jurhum settles; Ismāʿīl grows up and marries among them",
    },
    {
      year: "~2nd–1st century BCE (approx.)",
      label: "Quṣayy ibn Kilāb unifies Quraysh and reclaims leadership of Makkah",
    },
    {
      year: "~5th century CE (approx.)",
      label: "Hāshim — great-grandfather of Rasūlullāh ﷺ — feeds the pilgrims and earns his name",
    },
    {
      year: "~569 CE",
      label: "ʿAbdullāh ibn ʿAbd al-Muṭṭalib marries Āminah bint Wahb",
    },
  ],

  // ── Connections ───────────────────────────────────────────────────────────

  connections: {
    timeline: ["~2000 BCE (Ibrāhīm and Hājar in the valley — approx.)", "~100 BCE (Quṣayy, Hāshim — approx.)", "~569 CE (ʿAbdullāh marries Āminah)"],
    maps: ["makkah", "madinah", "hijaz"],
    characters: [
      "Ibrāhīm ʿalayhis salām",
      "Hājar ʿalayhas salām",
      "Ismāʿīl ʿalayhis salām",
      "Hāshim ibn ʿAbd Manāf",
      "ʿAbd al-Muṭṭalib",
      "ʿAbdullāh ibn ʿAbd al-Muṭṭalib",
      "Āminah bint Wahb",
    ],
    references: [
      "Ṣaḥīḥ al-Bukhārī — Kitāb al-Anbiyāʾ (Story of Ibrāhīm and Hājar)",
      "Qurʾān 14:37 — Ibrāhīm's duʿāʾ for Makkah",
      "Qurʾān 2:125–127 — Building of the Kaʿbah",
      "Sīrat Ibn Hishām",
      "Al-Raḥīq al-Makhtūm (The Sealed Nectar)",
    ],
  },
};

// ── Lesson 3 — The Year of the Elephant and the Birth of Rasūlullāh ﷺ ────────

const lesson3: LessonEnrichment = {
  bookId: "sirah_journey",
  partNumber: 3,
  lessonTitle: "The Year of the Elephant and the Birth of Rasūlullāh ﷺ",

  // ── Meta ──────────────────────────────────────────────────────────────────

  estimatedReadingTime: {
    readingMinutes: 40,
    studyMinutes: 25,
  },

  recommendedUse: ["individual", "family", "classroom", "madrasa"],

  // ── Why This Matters Today ─────────────────────────────────────────────────

  whyThisMattersToday:
    "The birth of Rasūlullāh ﷺ is the most important birth in human history. " +
    "Yet in most Muslim homes, it passes as a date on a calendar rather than a " +
    "moment to understand and celebrate with depth. This lesson answers why the " +
    "Year of the Elephant mattered, what Allāh ﷻ was announcing to the world, " +
    "and what the name Muḥammad means — and why ʿAbd al-Muṭṭalib chose it. " +
    "For families raising children in a world that sometimes seems indifferent " +
    "or hostile to Islām, this lesson carries a profound message: when Allāh ﷻ " +
    "has chosen something to protect, no force in the world can destroy it. " +
    "The Kaʿbah stood. And in that same year, the mercy to all the worlds was born.",

  // ── Memory Gem ─────────────────────────────────────────────────────────────

  memoryGem:
    "'I am the lord of the camels. The House has a Lord who will protect it.' " +
    "— ʿAbd al-Muṭṭalib to Abraha.",

  // ── One Minute Summary ─────────────────────────────────────────────────────

  oneMinuteSummary:
    "In approximately 570 CE, Abraha — the Yemeni governor and military commander " +
    "— marched an army of war elephants northward to destroy the Kaʿbah. He wanted " +
    "to redirect the pilgrimage trade from Makkah to his own church in Ṣanʿāʾ. " +
    "When he reached the outskirts of Makkah, his lead elephant Maḥmūd refused to " +
    "advance. Then birds appeared from the horizon — flocks carrying small stones " +
    "of baked clay — and destroyed the army. The Kaʿbah stood. In that same year, " +
    "on a Monday in Rabīʿ al-Awwal, Muḥammad ﷺ was born to Āminah bint Wahb in " +
    "Makkah. His grandfather ʿAbd al-Muṭṭalib carried the infant to the Kaʿbah, " +
    "made duʿāʾ, and named him Muḥammad — the praised one. He arrived fatherless, " +
    "to a grieving mother, in a year marked by the most dramatic miracle Arabia had " +
    "ever seen. Allāh ﷻ had sent into the world the one He would later call a mercy " +
    "to all the worlds.",

  // ── Key Facts (max 6) ──────────────────────────────────────────────────────

  keyFacts: [
    {
      topic: "Who was Abraha?",
      information:
        "Abraha al-Ashram was the Yemeni governor ruling on behalf of the Negus of " +
        "Abyssinia. He built a magnificent church in Ṣanʿāʾ and sought to redirect " +
        "the Arab pilgrimage away from the Kaʿbah. When a man from one of the Arab " +
        "tribes desecrated his church, Abraha resolved to march north and destroy " +
        "the Kaʿbah entirely.",
    },
    {
      topic: "The Year of the Elephant",
      information:
        "The Arabs called it ʿĀm al-Fīl — the Year of the Elephant (~570 CE). The " +
        "name stuck so firmly that the Arabs used it as a calendar reference for " +
        "decades afterward. The Prophet ﷺ himself was born in this year, and the " +
        "miracle of the birds became permanently associated with it in Arab memory.",
    },
    {
      topic: "ʿAbd al-Muṭṭalib's response",
      information:
        "He did not plead for the Kaʿbah. He stood before Abraha, asked for his " +
        "two hundred camels to be returned, and said: 'I am the lord of the camels. " +
        "The House has a Lord who will protect it.' He then led the Makkans to the " +
        "surrounding mountains to watch — no human army could win this battle.",
    },
    {
      topic: "The Birds of Abābīl",
      information:
        "Allāh ﷻ sent flights of birds carrying three stones each — one in the beak " +
        "and one in each talon — small pellets of hardened clay. Where the stones " +
        "fell, the soldiers they struck were destroyed. The most powerful army Arabia " +
        "had seen was left in ruin. Recorded in Sūrah al-Fīl (Qurʾān 105:1–5).",
    },
    {
      topic: "The birth",
      information:
        "On a Monday in Rabīʿ al-Awwal, in the Year of the Elephant, Muḥammad ﷺ " +
        "was born to Āminah bint Wahb. His father ʿAbdullāh had died in Yathrib " +
        "before the birth, leaving Āminah widowed and grieving. The Prophet ﷺ later " +
        "confirmed that Monday was significant — it was the day he was born and the " +
        "day the first revelation came to him (Ṣaḥīḥ Muslim 2983).",
    },
    {
      topic: "The name Muḥammad",
      information:
        "ʿAbd al-Muṭṭalib carried the infant to the Kaʿbah and gave him a name " +
        "uncommon among the Arabs: Muḥammad — meaning 'the one who is repeatedly " +
        "praised.' He said he wanted this child to be praised by Allāh in the " +
        "heavens and by people on earth. A name guided by Allāh, for a child " +
        "Allāh had already chosen.",
    },
  ],

  // ── What We Learn ─────────────────────────────────────────────────────────

  whatWeLearn: [
    {
      event: "Abraha tried to destroy the Kaʿbah",
      lesson:
        "When Allāh ﷻ has chosen something to protect, no earthly power can overcome " +
        "His decree. Tawakkul is not optimism — it is certainty grounded in knowing " +
        "who holds the outcome.",
    },
    {
      event: "ʿAbd al-Muṭṭalib spoke about his camels, not the Kaʿbah",
      lesson:
        "There are moments where the most effective action is to leave the outcome " +
        "to Allāh ﷻ. He did not plead or argue. He stated what was true and stepped " +
        "aside. Sometimes stepping back is the most powerful thing we can do.",
    },
    {
      event: "The elephant refused to move toward the Kaʿbah",
      lesson:
        "Creation recognises its Lord in ways that human beings sometimes forget. " +
        "The elephant, the birds, the stones — all instruments in the hand of " +
        "Allāh ﷻ — acted in obedience while an army of men acted in defiance.",
    },
    {
      event: "The Prophet ﷺ was born in the same year as the miracle",
      lesson:
        "Allāh ﷻ does not announce great events by accident. He marked the year " +
        "of the greatest birth in history with a sign so dramatic that the Arabs " +
        "named an entire year after it. Nothing in Allāh's timing is coincidence.",
    },
    {
      event: "ʿAbdullāh died before the birth",
      lesson:
        "The Prophet ﷺ entered the world already without a father — already dependent " +
        "on Allāh alone. From the first moment, Allāh was teaching him and teaching " +
        "us that reliance on Allāh is not a fallback position. It is the only position.",
    },
    {
      event: "The name Muḥammad was chosen",
      lesson:
        "A name is a duʿāʾ for a child. ʿAbd al-Muṭṭalib made a duʿāʾ for his " +
        "grandson before the child could speak — asking Allāh to make him praised " +
        "in both worlds. The words we place over our children carry weight we " +
        "may not fully see.",
    },
  ],

  // ── Why Did Allāh Allow This? ──────────────────────────────────────────────

  whyDidAllahAllowThis: {
    question:
      "Why did Allāh allow Abraha's army to march unopposed until the very " +
      "outskirts of Makkah, rather than stopping it earlier?",
    reflection:
      "Allāh could have stopped Abraha before he left Yemen, or before he " +
      "reached the Ḥijāz. He allowed the army to advance until the situation " +
      "was completely beyond human rescue — and only then acted. Scholars have " +
      "reflected that Allāh ﷻ wanted the miracle to be unmistakable. Not a near " +
      "miss that could be attributed to strategy or weather. A complete and total " +
      "defeat, remembered and named by an entire civilisation. He wanted the world " +
      "to know — in the year His final Messenger was being born — that the House " +
      "of Ibrāhīm was not abandoned. And He wanted every child who would later " +
      "hear this story to learn: when you have done everything you can and the " +
      "outcome still seems impossible, that is exactly when Allāh ﷻ steps in — " +
      "visibly, unmistakably, and on His own timeline.",
    quranicConnection: {
      arabic: "أَلَمْ تَرَ كَيْفَ فَعَلَ رَبُّكَ بِأَصْحَابِ الْفِيلِ",
      translation:
        "Have you not seen what your Lord did to the People of the Elephant?",
      reference: "Sūrah al-Fīl — 105:1",
    },
  },

  // ── Family Discussion ──────────────────────────────────────────────────────

  familyDiscussion: [
    {
      question:
        "ʿAbd al-Muṭṭalib stood before the most powerful army in Arabia and did " +
        "not argue for the Kaʿbah — he simply said 'The House has a Lord who will " +
        "protect it.' What does tawakkul look like when you are genuinely afraid? " +
        "How would you explain it to a child who is worried about something?",
      hint:
        "Tawakkul is not pretending we are not afraid. ʿAbd al-Muṭṭalib was " +
        "standing in front of an army of elephants. He did what was his to do — " +
        "asked for his camels, led the people to safety — and then left the rest " +
        "to Allāh. Think of a situation in your family where tawakkul was needed. " +
        "What did doing what was yours look like?",
    },
    {
      question:
        "Allāh sent small birds with small stones against the greatest army Arabia " +
        "had ever seen. He chose the weakest-seeming instruments to defeat the " +
        "strongest force. Where else — in the Sīrah or in your own life — have you " +
        "seen Allāh act through something small or unexpected?",
      hint:
        "This is one of the recurring patterns of Allāh's design: Zamzam from " +
        "beneath the feet of an infant. A handful of companions against Quraysh. " +
        "What makes this pattern trustworthy enough to build your life around?",
    },
    {
      question:
        "Āminah was widowed, grieving, and alone — and yet she was carrying the " +
        "greatest trust Allāh has ever placed in a human womb. What does this say " +
        "about how Allāh prepares people for great responsibility — sometimes through " +
        "difficulty, not despite it?",
      hint:
        "Many of the greatest servants of Allāh ﷻ passed through profound loss " +
        "before their mission: Ibrāhīm, Mūsā, Āminah, and then the Prophet ﷺ " +
        "himself. Is there something a member of your family is going through right " +
        "now that might be part of a preparation you cannot yet see?",
    },
    {
      question:
        "ʿAbd al-Muṭṭalib named his grandson Muḥammad before the child had said " +
        "a word — because he wanted him to be praised in both worlds. What duʿāʾ " +
        "have you made for the children in your family? What words, names, or " +
        "intentions have you placed over them?",
      hint:
        "A name is a prayer. A blessing spoken over a child carries weight even " +
        "when we do not fully understand why. Is there a blessing you have never " +
        "formally said — but want to say — over someone in your family?",
    },
  ],

  // ── Family Application ─────────────────────────────────────────────────────

  familyApplication:
    "Read Sūrah al-Fīl together as a family — all five verses, in Arabic and in " +
    "your language. Assign one verse per family member if possible, and let each " +
    "person try to explain their verse in their own words. Then ask this question " +
    "around the table: 'If Allāh sent birds against an army of elephants, what do " +
    "you think He is capable of doing for our family right now?' End the session " +
    "with a collective ṣalawāt upon the Prophet ﷺ — the one whose birth year " +
    "Allāh protected with this miracle.",

  // ── Quick Review ──────────────────────────────────────────────────────────

  quickReview: [
    {
      question: "What did Abraha want to do, and why?",
      answer:
        "He wanted to destroy the Kaʿbah in Makkah to redirect the Arab pilgrimage " +
        "to his own church in Ṣanʿāʾ in Yemen.",
    },
    {
      question: "What did ʿAbd al-Muṭṭalib say to Abraha?",
      answer:
        "'I am the lord of the camels. The House has a Lord who will protect it.'",
    },
    {
      question: "How did Allāh ﷻ destroy Abraha's army?",
      answer:
        "He sent flights of birds (abābīl) carrying three stones each — pellets of " +
        "hardened clay (sijjīl) — which destroyed the soldiers. The lead elephant " +
        "Maḥmūd refused to advance toward the Kaʿbah.",
    },
    {
      question: "What is ʿĀm al-Fīl, and why did the Arabs name the year after it?",
      answer:
        "ʿĀm al-Fīl means the Year of the Elephant. The Arabs named it after " +
        "Abraha's army of elephants and the miracle that destroyed them — an event " +
        "so dramatic it became the most remembered moment of that generation.",
    },
    {
      question: "When was the Prophet ﷺ born, and what was significant about the day?",
      answer:
        "On a Monday in Rabīʿ al-Awwal, in the Year of the Elephant (~570 CE). " +
        "The Prophet ﷺ himself confirmed that Monday was significant — it was the " +
        "day he was born and the day the first revelation came to him.",
    },
    {
      question: "What does the name Muḥammad mean, and who chose it?",
      answer:
        "Muḥammad means 'the one who is repeatedly praised.' It was chosen by his " +
        "grandfather ʿAbd al-Muṭṭalib, who said he wanted the child to be praised " +
        "by Allāh in the heavens and by people on earth.",
    },
  ],

  // ── Explore Further ───────────────────────────────────────────────────────

  exploreFurther: [
    {
      title: "Al-Raḥīq al-Makhtūm (The Sealed Nectar)",
      author: "Ṣafī al-Raḥmān al-Mubārakfūrī",
      type: "book",
      note:
        "The most accessible modern Sīrah for families. The chapters on the Year " +
        "of the Elephant and the birth are well-sourced and clearly written. Winner " +
        "of the First International Sīrah Conference award (1979).",
    },
    {
      title: "Sūrah al-Fīl — Qurʾān 105",
      type: "article",
      note:
        "Read all five verses slowly, in Arabic and in your language. This is the " +
        "only sūrah dedicated entirely to the miracle of the Year of the Elephant. " +
        "Commit it to memory — it is one of the shortest sūrahs and one of the most " +
        "powerful in its imagery.",
    },
    {
      title: "Sīrat Ibn Hishām (from Ibn Isḥāq)",
      author: "Ibn Hishām",
      type: "book",
      note:
        "The foundational classical Sīrah. The account of ʿAbd al-Muṭṭalib meeting " +
        "Abraha is one of the most vivid passages in early Islamic historical writing.",
    },
    {
      title: "Tafsīr Ibn Kathīr — Sūrah al-Fīl",
      author: "Ibn Kathīr",
      type: "article",
      note:
        "Gathers the classical accounts of Abraha's campaign and the miracle of the " +
        "birds. Essential for older students and teachers wanting the full scholarly context.",
    },
  ],

  // ── Teacher Notes ─────────────────────────────────────────────────────────

  teacherNotes: [
    {
      audience: "all",
      heading: "Pause on the name",
      body:
        "When explaining the name Muḥammad, pause and let it land. This is often " +
        "the first time younger students have heard why the Prophet ﷺ has the name " +
        "he has. Ask: 'Has anyone ever told you what your name means?' Then explain: " +
        "ʿAbd al-Muṭṭalib was making a duʿāʾ when he named his grandson. Ask " +
        "families to find out what each family member's name means before next session.",
    },
    {
      audience: "family",
      heading: "Pacing across two sessions",
      body:
        "This lesson has four segments plus reflection and closing. For a 30–40 " +
        "minute family taʿlīm session, consider two sessions: Session 1 covers the " +
        "Abraha story (segments 1–3); Session 2 covers the birth (segment 4) and " +
        "the reflection. Do not rush the final segment. The last paragraph — 'That " +
        "is Muḥammad ﷺ' — deserves to be read slowly, with silence before discussion.",
    },
    {
      audience: "classroom",
      heading: "Age differentiation",
      body:
        "Ages 7–10: focus on the elephant and the birds. Ask them to draw the scene " +
        "from Sūrah al-Fīl. Ages 11+: introduce ʿAbd al-Muṭṭalib's statement to " +
        "Abraha as a lesson in tawakkul. Secondary level: examine the theological " +
        "significance of the timing — why was this miracle in the exact same year as " +
        "the birth?",
    },
    {
      audience: "madrasa",
      heading: "Core text to memorise",
      body:
        "Students should memorise Sūrah al-Fīl in full (five verses) and translate " +
        "each verse accurately. Key vocabulary: abābīl (flocks of birds), sijjīl " +
        "(baked clay), ʿaṣf maʾkūl (eaten straw). They should state: who Abraha was, " +
        "what he intended, what destroyed his army, in which year the Prophet ﷺ was " +
        "born, and who gave him his name and what it means.",
    },
  ],

  // ── Lesson Reliability Summary ────────────────────────────────────────────

  lessonReliabilitySummary: {
    overallGrade: "Established",
    summary:
      "The core events of this lesson — Abraha's campaign, the elephant's refusal " +
      "to advance, the birds of Abābīl, and the birth of Rasūlullāh ﷺ on a Monday " +
      "in Rabīʿ al-Awwal of the Year of the Elephant — are among the most firmly " +
      "established facts of early Islamic history. The miracle of the birds is " +
      "recorded directly in the Qurʾān (Sūrah al-Fīl 105:1–5) — the highest " +
      "possible level of authentication. The Prophet's ﷺ birth on a Monday is " +
      "confirmed by his own statement in Ṣaḥīḥ Muslim (Ḥadīth 2983). Some finer " +
      "details — exact wording of dialogue, precise date within Rabīʿ al-Awwal — " +
      "carry minor variation across sources but do not affect the core narrative.",
  },

  // ── Authentication Notes (collapsed by default in UI) ─────────────────────

  authenticationNotes: [
    {
      claim: "The miracle of the Year of the Elephant — birds destroying Abraha's army",
      grade: "Established",
      sources: [
        "Qurʾān — Sūrah al-Fīl 105:1–5",
        "Sīrat Ibn Hishām (from Ibn Isḥāq)",
        "Al-Bidāyah wa al-Nihāyah — Ibn Kathīr",
        "Al-Raḥīq al-Makhtūm",
      ],
      explanation:
        "The Qurʾānic account is the primary and definitive source. All major " +
        "classical Sīrah sources confirm the narrative with no credible dispute. " +
        "The event is among the most firmly attested facts in pre-Islamic Arab history.",
    },
    {
      claim:
        "ʿAbd al-Muṭṭalib's meeting with Abraha and his famous statement about the camels",
      grade: "Widely Accepted",
      sources: [
        "Sīrat Ibn Hishām (from Ibn Isḥāq)",
        "Al-Bidāyah wa al-Nihāyah — Ibn Kathīr",
        "Al-Raḥīq al-Makhtūm",
      ],
      explanation:
        "The encounter is recorded across the major classical Sīrah sources. The " +
        "exact wording varies slightly between sources but all convey the same " +
        "meaning. No formal isnād chain with ḥadīth-science grading, but it is " +
        "the unanimous narrative in Sīrah scholarship.",
    },
    {
      claim:
        "The Prophet ﷺ was born on a Monday in Rabīʿ al-Awwal in the Year of the Elephant",
      grade: "Established",
      sources: [
        "Ṣaḥīḥ Muslim — Ḥadīth 2983",
        "Sīrat Ibn Hishām",
        "Al-Raḥīq al-Makhtūm",
      ],
      explanation:
        "The Prophet's ﷺ own statement in Ṣaḥīḥ Muslim confirms Monday as his " +
        "birth day. Month (Rabīʿ al-Awwal) and year (Year of the Elephant, ~570 " +
        "CE) are scholarly consensus. The precise date within the month has been " +
        "discussed; 'Monday in Rabīʿ al-Awwal' is the established core.",
    },
    {
      claim: "ʿAbdullāh died before (or shortly after) the birth of the Prophet ﷺ",
      grade: "Established",
      sources: [
        "Sīrat Ibn Hishām (from Ibn Isḥāq)",
        "Al-Bidāyah wa al-Nihāyah — Ibn Kathīr",
        "Al-Raḥīq al-Makhtūm",
      ],
      explanation:
        "All major Sīrah sources confirm that ʿAbdullāh died during a journey " +
        "to or from Shām, in Yathrib. The precise timing (before vs shortly after " +
        "birth) has minor variation, but the fact of his death and the Prophet's " +
        "ﷺ orphanhood is universally established.",
    },
    {
      claim:
        "ʿAbd al-Muṭṭalib gave the infant the name Muḥammad at the Kaʿbah with a stated intention",
      grade: "Widely Accepted",
      sources: [
        "Sīrat Ibn Hishām (from Ibn Isḥāq)",
        "Al-Raḥīq al-Makhtūm",
      ],
      explanation:
        "Preserved in the major Sīrah sources. His stated intention varies slightly " +
        "in exact wording between classical accounts, though all convey the same " +
        "meaning. No formal ḥadīth isnād, but unanimous in Sīrah scholarship.",
    },
  ],

  // ── Mini Timeline ─────────────────────────────────────────────────────────

  lessonTimeline: [
    { year: "~570 CE", label: "Abraha marches his elephant army north from Ṣanʿāʾ toward Makkah" },
    { year: "~570 CE", label: "ʿAbd al-Muṭṭalib meets Abraha — 'The House has a Lord who will protect it'" },
    { year: "~570 CE", label: "The elephant Maḥmūd refuses to advance toward the Kaʿbah" },
    { year: "~570 CE", label: "Birds of Abābīl destroy Abraha's army with stones of hardened clay" },
    { year: "~570 CE (Rabīʿ al-Awwal)", label: "Muḥammad ﷺ is born on a Monday to Āminah bint Wahb" },
    { year: "~570 CE", label: "ʿAbd al-Muṭṭalib carries the infant to the Kaʿbah — names him Muḥammad" },
  ],

  // ── Cross-Tab Connections ─────────────────────────────────────────────────

  connections: {
    timeline: ["~570 CE"],
    maps: ["kaabah"],
    characters: [
      "Āminah bint Wahb",
      "ʿAbdullāh ibn ʿAbd al-Muṭṭalib",
      "ʿAbd al-Muṭṭalib ibn Hāshim",
    ],
    references: [
      "Sūrah al-Fīl — 105",
      "Ṣaḥīḥ Muslim — Ḥadīth 2983",
      "Sīrat Ibn Hishām",
      "Al-Raḥīq al-Makhtūm (The Sealed Nectar)",
    ],
  },
};

// ── Lesson 4 — Ḥalīmah al-Saʿdiyyah and the Desert Years ────────────────────

const lesson4: LessonEnrichment = {
  bookId: "sirah_journey",
  partNumber: 4,
  lessonTitle: "Ḥalīmah al-Saʿdiyyah and the Desert Years",

  // ── Meta ──────────────────────────────────────────────────────────────────

  estimatedReadingTime: {
    readingMinutes: 40,
    studyMinutes: 25,
  },

  recommendedUse: ["individual", "family", "classroom", "madrasa"],

  // ── Why This Matters Today ─────────────────────────────────────────────────

  whyThisMattersToday:
    "Most families have heard the word barakah used casually. This lesson shows it " +
    "concretely — in a donkey that suddenly walked swiftly, a she-camel that gave " +
    "milk after months of dryness, sheep that came home full while the neighbours' " +
    "came home dry. Barakah is not an abstract quality. It is Allāh ﷻ placing His " +
    "blessing inside something — and this lesson teaches families exactly what that " +
    "looks like. For a generation that equates blessing with wealth and visible " +
    "success, Lesson 4 is a correction: Allāh placed the greatest barakah in " +
    "history inside an orphan child that no one wanted, taken reluctantly by a " +
    "struggling woman for the most ordinary of reasons. The central question for " +
    "families today is this: where are we passing over something or someone " +
    "because they do not look like the obvious choice?",

  // ── Memory Gem ─────────────────────────────────────────────────────────────

  memoryGem:
    '"Ḥalīmah, do you realise that you have taken a blessed child?" ' +
    "— al-Ḥārith ibn ʿAbd al-ʿUzzā to his wife, on the first night.",

  // ── One Minute Summary ─────────────────────────────────────────────────────

  oneMinuteSummary:
    "Among the noble families of Makkah, it was the custom to send newborn children " +
    "to live with Bedouin tribes in the desert — for clean air, physical strength, " +
    "and the purest Arabic. Each year, women from the surrounding tribes would " +
    "journey to Makkah to take infants back to nurse. In one difficult year, a " +
    "woman named Ḥalīmah al-Saʿdiyyah arrived from the tribe of Banū Saʿd — " +
    "riding an exhausted donkey, with almost no milk of her own. She passed over " +
    "the infant Muḥammad ﷺ at first, as every other woman had: he was an orphan " +
    "with no father to pay the nurse. But when every other woman had found a child " +
    "and Ḥalīmah alone had nothing, she turned back. Her husband said: perhaps " +
    "Allāh will bless us through him. That word 'perhaps' changed everything. " +
    "The moment she nursed him, her milk came in full. The she-camel gave milk " +
    "that night after months of dryness. On the journey home, her old donkey " +
    "walked so swiftly the other women could no longer keep up. Back in Banū " +
    "Saʿd, her sheep returned full while the neighbours' returned dry. For four " +
    "to five years, barakah settled into her household like a permanent guest. " +
    "Allāh had placed the greatest blessing in history inside the child no one " +
    "had wanted to take.",

  // ── Key Facts (max 6) ──────────────────────────────────────────────────────

  keyFacts: [
    {
      topic: "Who was Ḥalīmah al-Saʿdiyyah?",
      information:
        "A woman from the tribe of Banū Saʿd ibn Bakr — a Bedouin tribe " +
        "renowned for speaking the clearest and most eloquent Arabic dialect in " +
        "Arabia. She arrived in Makkah during a drought year, exhausted, with " +
        "little milk of her own and an old donkey that struggled to keep pace. " +
        "She became the foster-mother of Rasūlullāh ﷺ and, years later, accepted " +
        "Islām — making her a Ṣaḥābiyyah.",
    },
    {
      topic: "Why did Makkī families send children to the desert?",
      information:
        "The great families of Arabia considered urban life weakening for young " +
        "children. The desert offered clean air, physical resilience through a " +
        "harder life, and above all the Bedouin Arabic — the most eloquent dialect, " +
        "untouched by the mixing of traders from Persia, Yemen, and Shām. For " +
        "Quraysh, who prized eloquence above almost everything, raising a child " +
        "among the Bedouin was an act of deliberate care.",
    },
    {
      topic: "Why did no one want the infant Muḥammad ﷺ?",
      information:
        "His father ʿAbdullāh had died before his birth. The custom required the " +
        "father to pay the wet-nurse. An orphan with no living father meant no " +
        "guaranteed income. One by one, every woman of Banū Saʿd looked at this " +
        "child and moved on — choosing infants with living fathers and certain pay.",
    },
    {
      topic: "What were the first signs of barakah?",
      information:
        "The moment Ḥalīmah sat to nurse the infant, her milk came in fully — " +
        "where it had been nearly absent throughout the entire difficult journey. " +
        "She nursed Muḥammad ﷺ until he was satisfied, then nursed her own son — " +
        "he too was satisfied. Both children slept. Her husband went to their " +
        "she-camel and found the udders full, where they had been dry for months. " +
        "He said to her: 'Ḥalīmah, do you realise you have taken a blessed child?'",
    },
    {
      topic: "What happened in the tribe of Banū Saʿd?",
      information:
        "The barakah continued throughout the nursing years. Ḥalīmah's sheep " +
        "returned from grazing full of milk while the neighbours' returned dry. " +
        "The neighbours began sending their own flocks to graze wherever " +
        "Ḥalīmah's flock grazed — following the blessing without fully " +
        "understanding its source. Her land gave where others' land did not.",
    },
    {
      topic: "What does barakah mean?",
      information:
        "Barakah is divine increase — Allāh ﷻ placing His blessing inside " +
        "something so that it gives more than its apparent quantity would suggest. " +
        "A small amount of food with barakah feeds many. A little time with " +
        "barakah produces much. Ḥalīmah experienced this in the most direct and " +
        "undeniable way possible: through animals, land, milk, and a journey — " +
        "the most ordinary elements of Bedouin life, all transformed.",
    },
  ],

  // ── What We Learn ─────────────────────────────────────────────────────────

  whatWeLearn: [
    {
      event: "The desert custom was arranged for the Prophet ﷺ",
      lesson:
        "Allāh's preparation does not announce itself. Five divine reasons were " +
        "placed inside a social custom — pure language, physical strength, distance " +
        "from corruption, clean air, and divine arrangement. What appears to be a " +
        "routine practice can carry a decree.",
    },
    {
      event: "Every woman passed over the orphan child",
      lesson:
        "Allāh places His barakah where people do not think to look. The " +
        "sensible choice and the blessed choice are not always the same thing. " +
        "Every woman made the logical decision. Only one received what none " +
        "of the others did.",
    },
    {
      event: "Ḥalīmah turned back not out of faith but out of desperation",
      lesson:
        "Allāh honours the sincere attempt — even when it begins in hesitation. " +
        "She did not return with certainty. She returned with tawakkul she did not " +
        "yet know she had. Her husband said 'perhaps' — not 'certainly.' That is " +
        "the honest language of a person who trusts Allāh without claiming to " +
        "know His plan.",
    },
    {
      event: "The blessings began before she left the house",
      lesson:
        "Barakah is not delayed until it is deserved. The moment she picked him " +
        "up, something changed. Allāh's gifts arrive when He wills — not as a " +
        "reward earned, but as a mercy given.",
    },
    {
      event: "The neighbours followed the flock without knowing why",
      lesson:
        "A blessed person affects those around them even when those around them " +
        "cannot name the source. The Prophet ﷺ was already a mercy to those near " +
        "him before the world knew who he was. This is what it means to carry " +
        "barakah: others feel it before you can explain it.",
    },
  ],

  // ── Why Did Allāh Allow This? ──────────────────────────────────────────────

  whyDidAllahAllowThis: {
    question:
      "Why did Allāh allow every woman of Banū Saʿd to pass over the infant " +
      "Muḥammad ﷺ — when He could have made any one of them take him willingly?",
    reflection:
      "Allāh could have made the first woman reach for him eagerly. He did not. " +
      "He allowed the rejection — one woman after another — until only one was " +
      "left, and she took him reluctantly, out of desperation rather than desire. " +
      "This was not cruelty. It was precision. The scholars reflect that Allāh " +
      "wanted the choice to belong to the one He had already chosen for this " +
      "honour — and He wanted her to turn back by her own will, so the blessing " +
      "would arrive through her own decision, however small. Allāh does not " +
      "impose His gifts. He arranges the conditions so that His servant walks " +
      "toward them. When you find yourself in a situation where every door seems " +
      "closed and you try one more time out of nothing but desperation — that " +
      "moment may be exactly the one Allāh arranged.",
    quranicConnection: {
      arabic:
        "عَسَىٰ أَن تَكْرَهُوا شَيْئًا وَهُوَ خَيْرٌ لَّكُمْ",
      translation:
        "Perhaps you dislike something while it is good for you.",
      reference: "Sūrah al-Baqarah, 2:216",
    },
  },

  // ── Family Discussion ──────────────────────────────────────────────────────

  familyDiscussion: [
    {
      question:
        "Ḥalīmah chose the orphan child for the most reluctant reason — she had " +
        "no other option. Every woman who chose the sensible child got an ordinary " +
        "outcome. Have you ever made a choice for a small or reluctant reason and " +
        "later seen Allāh's blessing in it?",
      hint:
        "This is about recognising barakah in hindsight. Ask each family member " +
        "to share a time when something they didn't choose freely — or only " +
        "accepted out of necessity — turned out to carry unexpected good. Then " +
        "ask: is there something in your life right now that you are passing over " +
        "because it does not look promising?",
    },
    {
      question:
        "The neighbours of Ḥalīmah could see the blessing but could not name its " +
        "source. They followed her flock hoping to share in what they could not " +
        "explain. What is the difference between benefiting from barakah without " +
        "knowing it, and being consciously grateful for what Allāh has placed near you?",
      hint:
        "Barakah in food is a Sunnah theme — we say bismillāh, we eat together, " +
        "we make duʿāʾ. Ask your family: what do we actually do at home to " +
        "invite barakah? What habits have we dropped that used to bring it?",
    },
    {
      question:
        "Al-Ḥārith said to his wife: 'Perhaps Allāh will bless us through him.' " +
        "He did not say certainly. He said perhaps. That is the honest language " +
        "of a person who hopes without claiming to know the outcome. What does " +
        "tawakkul that speaks in 'perhaps' look like in your family?",
      hint:
        "We often think of tawakkul as a feeling of certainty. But al-Ḥārith's " +
        "words were the opposite — uncertain about the result, but willing to " +
        "act. Ask: when was the last time someone in your family made a decision " +
        "with that kind of humble hope?",
    },
    {
      question:
        "The Prophet ﷺ grew up in the desert — learning the purest Arabic, " +
        "building physical strength, growing far from the idols and noise of " +
        "Makkah — before being sent to speak to all of humanity. Allāh prepared " +
        "him in simplicity before giving him the greatest mission. What " +
        "preparation might Allāh be giving your family right now — through " +
        "difficulty, simplicity, or circumstances that feel limiting?",
      hint:
        "This is the hardest question for families. It asks them to look at their " +
        "current difficulties as possible preparation rather than punishment. " +
        "Do not rush this one. Give people time to think before answering.",
    },
  ],

  // ── Family Application ─────────────────────────────────────────────────────

  familyApplication:
    "At family taʿlīm this week, each person names one thing in their life that " +
    "they disliked or resented at the time — and that later turned out to carry " +
    "good they did not expect. A school, a difficulty, a change, a loss. After " +
    "sharing, read Sūrah al-Baqarah 2:216 together: 'Perhaps you dislike " +
    "something while it is good for you.' Then make this duʿāʾ as a family: " +
    "'O Allāh, bless for us what You have provided for us.' (Sunan Abī Dāwūd, " +
    "3730.) End by asking the children: who was Ḥalīmah? What did she do? " +
    "What did Allāh give her? Let them explain it back in their own words. " +
    "The goal is simple: every person leaves knowing what barakah means — " +
    "not as a word, but as a story.",

  // ── Quick Review ──────────────────────────────────────────────────────────

  quickReview: [
    {
      question: "Why did the noble families of Makkah send their children to the desert?",
      answer:
        "For clean air, physical strength, and the purest Arabic — the Bedouin " +
        "dialect of tribes like Banū Saʿd was considered the most eloquent in " +
        "all of Arabia.",
    },
    {
      question: "Why did no one want to take the infant Muḥammad ﷺ?",
      answer:
        "His father ʿAbdullāh had died before his birth. The custom required the " +
        "father to pay the wet-nurse, and an orphan meant no guaranteed income.",
    },
    {
      question: "What made Ḥalīmah turn back and take him?",
      answer:
        "Every other woman had found a child and she alone had nothing. She " +
        "could not bear going home empty-handed. Her husband said: 'Go back — " +
        "perhaps Allāh will bless us through him.'",
    },
    {
      question: "What were the first three signs of barakah that night?",
      answer:
        "Ḥalīmah's milk came in fully the moment she nursed him. Her own son " +
        "was also satisfied. The she-camel gave milk after months of dryness.",
    },
    {
      question: "What happened to the sheep of Banū Saʿd?",
      answer:
        "Ḥalīmah's sheep returned from grazing full of milk while the " +
        "neighbours' returned dry. The tribe began sending their flocks to " +
        "graze wherever her flock grazed.",
    },
    {
      question: "What does the word barakah mean?",
      answer:
        "Divine increase — Allāh ﷻ placing His blessing inside something so " +
        "that it gives more than its apparent quantity would suggest.",
    },
  ],

  // ── Explore Further ───────────────────────────────────────────────────────

  exploreFurther: [
    {
      title: "Al-Raḥīq al-Makhtūm (The Sealed Nectar)",
      author: "Ṣafī al-Raḥmān al-Mubārakfūrī",
      type: "book",
      note:
        "The chapter on the desert years gives the most complete modern account " +
        "of Ḥalīmah's narrative, drawn directly from Ibn Isḥāq. Winner of the " +
        "First International Sīrah Conference award (1979) and the most " +
        "accessible modern Sīrah for families.",
    },
    {
      title: "Sīrat Ibn Hishām (from Ibn Isḥāq)",
      author: "Ibn Hishām",
      type: "book",
      note:
        "The foundational classical source for Ḥalīmah's narrative. Her " +
        "account is preserved here in her own words as reported through Ibn " +
        "Isḥāq — the earliest and most detailed record of the desert years. " +
        "For older students and teachers wanting the primary transmission.",
    },
    {
      title: "Sūrah al-Baqarah — 2:216",
      type: "article",
      note:
        "The single āyah that carries the entire theological lesson of this " +
        "part of the Sīrah: 'Perhaps you dislike something while it is good " +
        "for you.' Read it slowly with your family. Ask: can you name one " +
        "thing in your life right now where this āyah applies?",
    },
    {
      title: "Duʿāʾ of Barakah — Sunan Abī Dāwūd, Ḥadīth 3730",
      type: "article",
      note:
        "'O Allāh, bless for us what You have provided for us.' Begin saying " +
        "this before meals this week as a family. It is short, it is " +
        "authenticated, and it connects directly to the lesson's central theme.",
    },
  ],

  // ── Teacher Notes ─────────────────────────────────────────────────────────

  teacherNotes: [
    {
      audience: "all",
      heading: "This is the barakah lesson — let it feel that way",
      body:
        "Lesson 4 is the only lesson in the early Sīrah arc with no death, no " +
        "fear, and no loss. It is full of blessing. The tone of this session " +
        "can be lighter, warmer, and more joyful than the lessons on either " +
        "side. Do not make it heavy. Barakah descended on a struggling household " +
        "through one reluctant, ordinary decision. That is cause for wonder — " +
        "and for gratitude.",
    },
    {
      audience: "family",
      heading: "The emotional peak — do not rush it",
      body:
        "The turning point is Segment 3: Ḥalīmah going back, picking up the " +
        "child, and finding her milk full before she even leaves the house. " +
        "Read that section slowly. Pause after: 'Her husband said to her: go " +
        "back. Take the orphan. Perhaps Allāh will bless us through him.' " +
        "Let it sit. Ask your family: what do you think Ḥalīmah was feeling " +
        "in that moment? Get answers before reading what happened next.",
    },
    {
      audience: "classroom",
      heading: "Age differentiation",
      body:
        "Ages 7–10: focus on the story of the donkey, the sheep, and the milk. " +
        "Ask them to draw the scene of the journey home — the donkey walking " +
        "so swiftly the other women could not keep up. Ages 11+: introduce the " +
        "five reasons why Allāh chose Banū Saʿd. Ask students to rank the five " +
        "from most to least important and defend their ranking. Secondary: " +
        "explore what barakah means theologically — divine increase vs. human " +
        "effort vs. Allāh's will.",
    },
    {
      audience: "madrasa",
      heading: "Core knowledge to assess",
      body:
        "Students should know: who Ḥalīmah was and which tribe she belonged to; " +
        "why the infant was initially refused; what made her turn back; what " +
        "three things changed that first night; what happened to the sheep of " +
        "Banū Saʿd; and what the word barakah means. They should be able to " +
        "recite Sūrah al-Baqarah 2:216 in Arabic with correct pronunciation " +
        "and give its meaning. They should also know the barakah duʿāʾ from " +
        "Sunan Abī Dāwūd with its reference.",
    },
  ],

  // ── Lesson Reliability Summary ────────────────────────────────────────────

  lessonReliabilitySummary: {
    overallGrade: "Widely Accepted",
    summary:
      "The core custom of sending Makkan children to Bedouin tribes is " +
      "established historical practice confirmed across all Sīrah sources. " +
      "The narrative of Ḥalīmah — her journey, her reluctant choice, and the " +
      "blessings that followed — is transmitted through Sīrah literature " +
      "(primarily Ibn Isḥāq via Ibn Hishām) with Ḥalīmah herself as the " +
      "original narrator. This is Sīrah-level transmission, not ḥadīth with " +
      "a formal isnād graded by ḥadīth science. The narrative is unanimous " +
      "across all major classical Sīrah works and carries no credible dispute. " +
      "The barakah duʿāʾ (Sunan Abī Dāwūd 3730) is independently authenticated. " +
      "The Qurʾānic āyah (2:216) is established as divine revelation.",
  },

  // ── Authentication Notes ──────────────────────────────────────────────────

  authenticationNotes: [
    {
      claim:
        "The custom of sending Makkan children to Bedouin tribes for nursing " +
        "and language acquisition",
      grade: "Established",
      sources: [
        "Sīrat Ibn Hishām (from Ibn Isḥāq)",
        "Al-Raḥīq al-Makhtūm — Ṣafī al-Raḥmān al-Mubārakfūrī",
        "Al-Bidāyah wa al-Nihāyah — Ibn Kathīr",
      ],
      explanation:
        "This is well-documented historical practice confirmed in all primary " +
        "Sīrah sources and consistent with what is known of Arabian social " +
        "customs of the period. There is no credible dispute about the custom itself.",
    },
    {
      claim:
        "Ḥalīmah's account of the blessings — the milk, the donkey, the " +
        "she-camel, and the sheep of Banū Saʿd",
      grade: "Widely Accepted",
      sources: [
        "Sīrat Ibn Hishām (from Ibn Isḥāq — narrated from Ḥalīmah)",
        "Al-Raḥīq al-Makhtūm",
        "Al-Bidāyah wa al-Nihāyah — Ibn Kathīr",
      ],
      explanation:
        "IMPORTANT: This narrative is Sīrah transmission — not a ḥadīth in " +
        "Ṣaḥīḥ al-Bukhārī or Ṣaḥīḥ Muslim. Many readers assume it is in the " +
        "Ṣaḥīḥayn because it is so well known. It is not. The source is " +
        "Ḥalīmah's own account as preserved by Ibn Isḥāq — transmitted through " +
        "the Sīrah tradition, not through the isnād-based ḥadīth sciences. " +
        "Sīrah transmission carries high scholarly regard and is the standard " +
        "for historical events of this period, but it is distinct from a " +
        "graded prophetic ḥadīth. The narrative is unanimous across all major " +
        "classical sources with no contradicting account.",
    },
    {
      claim: "Ḥalīmah accepted Islām and is counted among the Ṣaḥābiyyāt",
      grade: "Widely Accepted",
      sources: [
        "Sīrat Ibn Hishām",
        "Al-Iṣābah fī Tamyīz al-Ṣaḥābah — Ibn Ḥajar al-ʿAsqalānī",
      ],
      explanation:
        "Recorded in Sīrah sources and in the classical works on the Companions. " +
        "She is listed among the Ṣaḥābiyyāt (female Companions) who visited the " +
        "Prophet ﷺ in Makkah after prophethood. Her status is widely accepted " +
        "in Sīrah scholarship.",
    },
    {
      claim:
        "The duration of the nursing period — approximately four to five years",
      grade: "Scholarly Discussion",
      sources: [
        "Al-Raḥīq al-Makhtūm",
        "Sīrat Ibn Hishām",
      ],
      explanation:
        "The standard nursing period in the custom was two years. Classical " +
        "sources indicate Ḥalīmah kept the child longer at Āminah's permission. " +
        "The exact total duration varies between sources — Al-Raḥīq al-Makhtūm " +
        "cites four to five years as the commonly cited range. This does not " +
        "affect the core narrative.",
    },
    {
      claim:
        "The duʿāʾ: 'O Allāh, bless for us what You have provided for us'",
      grade: "Established",
      sources: [
        "Sunan Abī Dāwūd — Ḥadīth 3730",
      ],
      explanation:
        "Authenticated in Sunan Abī Dāwūd. This is a prophetic ḥadīth with a " +
        "formal isnād — distinct from the Sīrah narrative above. It is " +
        "recommended for families to practise after this lesson as a direct " +
        "Sunnah connection to the theme of barakah.",
    },
  ],

  // ── Mini Timeline ─────────────────────────────────────────────────────────

  lessonTimeline: [
    {
      year: "~570 CE",
      label: "Muḥammad ﷺ born in Makkah — his father ʿAbdullāh had already died",
    },
    {
      year: "~570 CE",
      label:
        "Women of Banū Saʿd arrive in Makkah for the annual nursing arrangement",
    },
    {
      year: "~570 CE",
      label:
        "Every woman passes over the orphan — Ḥalīmah turns back and takes him",
    },
    {
      year: "~570 CE",
      label:
        "First night: milk returns, she-camel gives milk, both children sleep satisfied",
    },
    {
      year: "~570–575 CE",
      label:
        "Years of barakah in Banū Saʿd — animals, land, and crops all blessed",
    },
    {
      year: "~574–575 CE",
      label:
        "Ḥalīmah returns the child to Āminah in Makkah after the nursing years",
    },
  ],

  // ── Cross-Tab Connections ─────────────────────────────────────────────────

  connections: {
    timeline: ["~570 CE", "~570–575 CE"],
    maps: ["makkah"],
    characters: [
      "Ḥalīmah al-Saʿdiyyah",
      "Āminah bint Wahb",
    ],
    references: [
      "Sīrat Ibn Hishām",
      "Al-Raḥīq al-Makhtūm (The Sealed Nectar)",
      "Sunan Abī Dāwūd — Ḥadīth 3730",
    ],
  },
};

// ── Lesson 5 — The Opening of the Chest ───────────────────────────────────────

const lesson5: LessonEnrichment = {
  bookId: "sirah_journey",
  partNumber: 5,
  lessonTitle: "The Opening of the Chest",

  // ── Meta ──────────────────────────────────────────────────────────────────

  estimatedReadingTime: {
    readingMinutes: 40,
    studyMinutes: 25,
  },

  recommendedUse: ["individual", "family", "classroom", "madrasa"],

  // ── Why This Matters Today ─────────────────────────────────────────────────

  whyThisMattersToday:
    "Most families have heard the words 'Shaqq al-Ṣadr' — the opening of the chest " +
    "— but few can explain what actually happened, why it happened, or what its " +
    "significance is for us today. Many people also confuse the Banū Saʿd incident " +
    "with the opening of the chest reported before the Mi'rāj — a different event " +
    "with a different chain. This lesson takes both events seriously and teaches " +
    "them with the clarity they deserve. " +
    "The deeper message is one every family needs: Allāh ﻻ prepares those He loves " +
    "before the mission arrives — not after it is announced, not when the world is " +
    "watching, but quietly, in an ordinary place, years in advance. Whatever " +
    "difficulty a family is living through right now may not be a setback. " +
    "It may be preparation.",

  // ── Memory Gem ─────────────────────────────────────────────────────────────

  memoryGem:
    "\"Indeed, in the body there is a piece of flesh — if it is sound, the whole " +
    "body is sound; and if it is corrupt, the whole body is corrupt. Indeed, it " +
    "is the heart.\" — Ṣaḥīḥ al-Bukhārī 52; Ṣaḥīḥ Muslim 1599",

  // ── One Minute Summary ─────────────────────────────────────────────────────

  oneMinuteSummary:
    "While Rasūlullāh ﷺ was living with Ḥalīmah in the land of Banū Saʿd, " +
    "approximately four years old, he went out to play one afternoon with his " +
    "foster-brother ʿAbdullāh ibn al-Ḥārith. Two men appeared dressed in white. " +
    "They laid him on his back, opened his chest, removed his heart, washed it " +
    "in a vessel of water until it was completely pure, and returned it. His " +
    "foster-brother witnessed what happened and ran back to the camp in terror. " +
    "Ḥalīmah and her husband al-Ḥārith found the child standing — calm, clear-eyed, " +
    "and unharmed. He described exactly what had happened. Out of love, and out " +
    "of honest acknowledgement that this was beyond them, Ḥalīmah and al-Ḥārith " +
    "brought him back to his mother Āminah in Makkah. Āminah heard everything — " +
    "and was not afraid. She said: 'Do not fear for him. He is protected.' She " +
    "had been given, in her own way, prior knowledge. Allāh ﻻ was preparing His " +
    "Prophet ﷺ — before the world could see it — for the greatest mission in history.",

  // ── Key Facts (max 6) ──────────────────────────────────────────────────────

  keyFacts: [
    {
      topic: "What is Shaqq al-Ṣadr?",
      information:
        "Literally: 'the opening of the chest.' An event in which Allāh ﷻ sent " +
        "two angels who opened the chest of the Prophet ﷺ, removed his heart, " +
        "washed it in a vessel of water until it was completely pure, and returned " +
        "it. The Prophet ﷺ was found standing, calm, and physically unharmed. " +
        "This is the event in Banū Saʿd — when he was approximately four years old.",
    },
    {
      topic: "What was purified — and why?",
      information:
        "The scholars of Sīrah and tafsīr discussed at length the wisdom behind " +
        "this purification. Various explanations are found in the books of Sīrah " +
        "and commentary. What is consistently stated across all classical sources " +
        "is that this was an act of divine preparation — not a correction of any " +
        "sin or moral failing. The Prophet ﷺ was sinless (maʿṣūm). The " +
        "purification was preparation: making the vessel fully ready before " +
        "the greatest mission in history was placed upon it.",
    },
    {
      topic: "The ḥadīth of the heart",
      information:
        "Rasūlullāh ﷺ himself later taught: 'In the body there is a piece of " +
        "flesh — if it is sound, the whole body is sound; and if it is corrupt, " +
        "the whole body is corrupt. Indeed, it is the heart.' (Ṣaḥīḥ al-Bukhārī " +
        "52; Ṣaḥīḥ Muslim 1599, narrated by al-Nuʿmān ibn Bashīr). The Prophet " +
        "ﷺ whose heart was divinely prepared before the greatest mission in " +
        "history later taught all of humanity this same principle.",
    },
    {
      topic: "Who was present?",
      information:
        "The foster-brother ʿAbdullāh ibn al-Ḥārith witnessed the event and " +
        "ran back to the camp in terror. Ḥalīmah al-Saʿdiyyah and her husband " +
        "al-Ḥārith ibn ʿAbd al-ʿUzzā found the child standing. The narrative " +
        "comes directly from Ḥalīmah's own account, as preserved in the Sīrah " +
        "literature of Ibn Isḥāq and Ibn Hishām.",
    },
    {
      topic: "This was not the only occurrence",
      information:
        "Scholars note that the opening of the chest occurred on more than one " +
        "occasion in the life of the Prophet ﷺ. A well-known account narrated " +
        "by Anas ibn Mālik in Ṣaḥīḥ Muslim (no. 162) describes a separate " +
        "opening before the Mi'rāj. These are distinct events — different " +
        "circumstances, different chains, different narrators. This lesson " +
        "covers the Banū Saʿd incident only.",
    },
    {
      topic: "Āminah's response",
      information:
        "When Ḥalīmah brought the Prophet ﷺ back to Makkah and told Āminah " +
        "everything, Āminah heard it without alarm. The books of Sīrah record " +
        "that she said: 'Do not fear for him. He is protected.' She had " +
        "received signs before and at the birth of her son that had prepared " +
        "her, in her own way, for exactly this conversation.",
    },
  ],

  // ── What We Learn ─────────────────────────────────────────────────────────

  whatWeLearn: [
    {
      event: "The foster-brother ran in terror",
      lesson:
        "Fear is not a failure. Running to someone trustworthy when something " +
        "is beyond you is wisdom, not weakness. The foster-brother did exactly " +
        "what a frightened child should do: he went straight to the person " +
        "responsible. That is a lesson in itself.",
    },
    {
      event: "The Prophet ﷺ was found standing, calm and clear-eyed",
      lesson:
        "Allāh ﷻ protects those He has chosen. The Prophet ﷺ was not " +
        "disturbed, not injured, not in shock — he was at peace. Peace in the " +
        "heart after something extraordinary is possible when Allāh is the " +
        "source of your protection.",
    },
    {
      event: "Ḥalīmah and al-Ḥārith returned the Prophet ﷺ with complete honesty",
      lesson:
        "Amānah means holding a trust with care — and when you can no longer " +
        "hold it, returning it honestly with nothing hidden. Ḥalīmah told " +
        "Āminah everything. No omissions. No protection of herself. That is " +
        "what a person of integrity does.",
    },
    {
      event: "Āminah heard everything and was not afraid",
      lesson:
        "Yaqīn — certainty in Allāh's arrangement — is not the same as " +
        "ignorance. Āminah had been given her own form of prior knowledge. Her " +
        "calm came not from understanding everything, but from knowing who " +
        "was ultimately in control.",
    },
    {
      event: "The event happened in Banū Saʿd — quietly, years before the mission",
      lesson:
        "Allāh ﷻ prepares His servants in quiet places, far from the world's " +
        "gaze, long before the mission is announced. What feels like an " +
        "ordinary season in your life may already be a preparation you cannot " +
        "yet see.",
    },
  ],

  // ── Why Did Allāh Allow This? ──────────────────────────────────────────────

  whyDidAllahAllowThis: {
    question:
      "Why did Allāh allow the foster-brother to be frightened, Ḥalīmah to be " +
      "overwhelmed, and the Prophet ﷺ to be returned to Makkah — rather than " +
      "allowing the whole event to pass quietly without disruption?",
    reflection:
      "Every element of this story — including the fear, the running, the " +
      "decision to return him — was part of the arrangement. The foster-brother's " +
      "terror brought Ḥalīmah running. Ḥalīmah's love and honesty brought the " +
      "Prophet ﷺ back to Makkah at exactly the right time — to be with his mother " +
      "before the next great loss would come. Āminah's prior preparation meant she " +
      "could receive him without alarm. Allāh ﷻ used the natural responses of " +
      "people who loved well to accomplish His plan precisely and on time. There " +
      "is a lesson here for every family: the responses of those around us — " +
      "even their fear, even their limitations — can be instruments in Allāh's " +
      "hand when He has decided something is going to happen.",
    quranicConnection: {
      arabic:
        "إِنَّ اللَّهَ بَالِغُ أَمْرِهِ قَدْ جَعَلَ اللَّهُ لِكُلِّ شَيْءٍ قَدْرًا",
      translation:
        "Indeed, Allāh accomplishes His purpose. He has already set for " +
        "everything a decreed extent.",
      reference: "Sūrah al-Ṭalāq — 65:3",
    },
  },

  // ── Family Discussion ──────────────────────────────────────────────────────

  familyDiscussion: [
    {
      question:
        "The Prophet ﷺ described what happened to Ḥalīmah calmly and clearly — " +
        "while everyone around him was frightened. What does it tell us about the " +
        "heart that has been prepared by Allāh ﷻ? How would you explain to a " +
        "young child that calmness in difficulty comes from inside, not outside?",
      hint:
        "The Prophet ﷺ was approximately four years old. Yet he was calm when " +
        "those around him were afraid. This was not bravado — it was a peace that " +
        "came from Allāh's protection. Ask your family: what is the difference " +
        "between someone who is calm because they don't understand the danger, " +
        "and someone who is calm because they trust who is in control?",
    },
    {
      question:
        "Ḥalīmah had experienced years of barakah because of this child. She " +
        "knew, in her heart, that something was different about him. And yet when " +
        "something happened that she could not explain, she brought him home. " +
        "What does this tell us about the limits of our understanding — even of " +
        "things we know are from Allāh?",
      hint:
        "Ḥalīmah is not presented here as someone who doubted. She acted out " +
        "of love and amānah. Knowing something is from Allāh does not always " +
        "mean we know how to respond to it. Sometimes the right response is: " +
        "'This is beyond me — I need to return it to those who can carry it.'",
    },
    {
      question:
        "Āminah said: 'Do not fear for him. He is protected.' She hadn't seen " +
        "what happened. She wasn't there. Her certainty came from something given " +
        "to her before the birth of her son. Has there ever been a moment in your " +
        "family where you had a form of certainty about something before it could " +
        "be fully explained?",
      hint:
        "Āminah's response is one of the most powerful moments in the early " +
        "Sīrah. A mother receives the most alarming news about her child and " +
        "responds with peace. Scholars reflect that this certainty was itself " +
        "a gift from Allāh ﷻ — preparation for the preparation. Is there a " +
        "difficult situation in your family right now where you need that kind " +
        "of certainty — and where could it come from?",
    },
    {
      question:
        "Allāh prepared the Prophet ﷺ in Banū Saʿd — far from Makkah, years " +
        "before the revelation came. What preparation might Allāh already have " +
        "begun in your own life — through a difficulty, a disruption, or a " +
        "loss — that you did not recognise at the time as preparation?",
      hint:
        "This is a question worth sitting with. Many of the greatest servants " +
        "of Allāh ﷻ passed through seasons that looked like setbacks but were " +
        "in fact preparations: Ibrāhīm in the fire, Mūsā in Madyan, the Prophet " +
        "ﷺ in Banū Saʿd. If Allāh's timeline is always right, and if He " +
        "prepares before He assigns — what might He be preparing someone in " +
        "your family for right now?",
    },
  ],

  // ── Family Application ─────────────────────────────────────────────────────

  familyApplication:
    "Rasūlullāh ﷺ told us that the heart is the most important thing we carry — " +
    "not for its biology, but for its spiritual condition. This week, each family " +
    "member chooses one deliberate act for the health of the heart: ten minutes " +
    "of Qurʾān, a sincere tawbah for something unresolved, removing one thing " +
    "that hardens the heart, or reconciling with someone wronged. Write it down. " +
    "Commit to it for seven days. At family taʿlīm tonight, let each person " +
    "answer this question: what is Shaqq al-Ṣadr? Let the children explain it " +
    "back in their own words, in their own way. Hearing it explained simply is " +
    "sometimes the clearest sign of whether it was truly understood.",

  // ── Quick Review ──────────────────────────────────────────────────────────

  quickReview: [
    {
      question: "What is Shaqq al-Ṣadr, and when did it happen in Banū Saʿd?",
      answer:
        "Shaqq al-Ṣadr is the opening of the chest of the Prophet ﷺ. In Banū " +
        "Saʿd, when the Prophet ﷺ was approximately four years old, two men in " +
        "white appeared, opened his chest, washed his heart in a vessel of water " +
        "until it was completely pure, and returned it. His chest bore no wound " +
        "and he was found standing, calm, and unharmed.",
    },
    {
      question: "Who witnessed the event and what did they do?",
      answer:
        "His foster-brother ʿAbdullāh ibn al-Ḥārith witnessed what happened and " +
        "ran back to the camp in terror. Ḥalīmah and her husband al-Ḥārith ran " +
        "to find the Prophet ﷺ standing calmly. He described everything to them.",
    },
    {
      question: "Why did Ḥalīmah return the Prophet ﷺ to Āminah?",
      answer:
        "Out of love and out of amānah. She had been entrusted with a child she " +
        "could no longer fully protect or explain. She returned him to his mother " +
        "honestly, hiding nothing — telling Āminah everything that had happened.",
    },
    {
      question: "How did Āminah respond when she heard what happened?",
      answer:
        "She was not afraid. She said: 'Do not fear for him. He is protected.' " +
        "She had been given signs before the birth of her son that prepared her " +
        "for exactly this conversation. Her certainty was yaqīn — trust in what " +
        "Allāh had arranged.",
    },
    {
      question:
        "Is the Banū Saʿd event the same as the opening of the chest before " +
        "the Mi'rāj?",
      answer:
        "No. These are two distinct events. The Banū Saʿd incident is narrated " +
        "by Ḥalīmah herself through Sīrah literature. The opening before the " +
        "Mi'rāj is narrated by Anas ibn Mālik in Ṣaḥīḥ Muslim (no. 162). " +
        "Different circumstances, different chains, different narrators.",
    },
    {
      question:
        "What ḥadīth does this lesson connect to, and what does it teach?",
      answer:
        "'In the body there is a piece of flesh — if it is sound, the whole " +
        "body is sound; and if it is corrupt, the whole body is corrupt. Indeed, " +
        "it is the heart.' (Bukhārī 52, Muslim 1599). The Prophet ﷺ whose heart " +
        "was divinely prepared later taught all of humanity to care for theirs.",
    },
  ],

  // ── Explore Further ───────────────────────────────────────────────────────

  exploreFurther: [
    {
      title: "Al-Raḥīq al-Makhtūm (The Sealed Nectar)",
      author: "Ṣafī al-Raḥmān al-Mubārakfūrī",
      type: "book",
      note:
        "The most accessible modern Sīrah for families. The account of the " +
        "Shaqq al-Ṣadr in Banū Saʿd is clearly covered with its sources noted. " +
        "Winner of the First International Sīrah Conference award (1979).",
    },
    {
      title: "Sūrah al-Sharḥ — Qurʾān 94",
      type: "article",
      note:
        "Read all eight verses slowly, in Arabic and in your language. The " +
        "opening verse — 'Have We not expanded your chest?' — is directly " +
        "connected to the theme of this lesson. Memorise the sūrah together " +
        "as a family. It is one of the shortest and most powerful in the Qurʾān.",
    },
    {
      title: "Sīrat Ibn Hishām (from Ibn Isḥāq)",
      author: "Ibn Hishām",
      type: "book",
      note:
        "The foundational classical Sīrah. The Banū Saʿd account of the " +
        "Shaqq al-Ṣadr is drawn from Ḥalīmah's own narration as transmitted " +
        "by Ibn Isḥāq. Essential for understanding the primary source behind " +
        "this lesson.",
    },
  ],

  // ── For Teachers and Parents ──────────────────────────────────────────────

  teacherNotes: [
    {
      audience: "all",
      heading: "IMPORTANT — Two different events: do not conflate them",
      body:
        "The Shaqq al-Ṣadr occurred on more than one occasion in the life of " +
        "the Prophet ﷺ. The account in Ṣaḥīḥ Muslim (no. 162, narrated by " +
        "Anas ibn Mālik) describes the opening of the chest before the Mi'rāj " +
        "— a separate event with its own chain of narration. The Banū Saʿd " +
        "incident covered in this lesson is transmitted through Sīrah " +
        "literature, narrated by Ḥalīmah herself via Ibn Isḥāq. Do not cite " +
        "Muslim 162 as evidence for the Banū Saʿd event. They are distinct. " +
        "Both are accepted in the tradition. Teach each with the clarity it deserves.",
    },
    {
      audience: "family",
      heading: "The emotional centre of this lesson",
      body:
        "The two most powerful moments for family taʿlīm are: the image of the " +
        "Prophet ﷺ found standing, calm and unharmed — and Āminah's words: " +
        "'Do not fear for him. He is protected.' Read both slowly. Pause after " +
        "each. For young children, the standing image is the anchor — a child " +
        "who was completely safe because Allāh was watching over him. For older " +
        "family members, Āminah's certainty is the deeper lesson: what does it " +
        "mean to be unafraid when you cannot explain everything?",
    },
    {
      audience: "classroom",
      heading: "Age differentiation",
      body:
        "Ages 7–10: focus on the story itself — the two men, the foster-brother " +
        "running, the Prophet ﷺ standing calm. Ask them to describe what they " +
        "imagine Ḥalīmah saw when she arrived. Ages 11+: introduce the " +
        "distinction between the Banū Saʿd event and the Mi'rāj event. Ask " +
        "students: if two events are both accepted in the tradition but come " +
        "from different chains, how do we think about both? Secondary: explore " +
        "what scholars said about divine preparation — why does Allāh prepare " +
        "before He assigns?",
    },
    {
      audience: "madrasa",
      heading: "Core knowledge to assess",
      body:
        "Students should know: what Shaqq al-Ṣadr means; when the Banū Saʿd " +
        "event occurred; who was present and what each person did; that this " +
        "was divine preparation, not a removal of sin (the Prophet ﷺ was " +
        "maʿṣūm); that the Banū Saʿd event and the Mi'rāj event are distinct " +
        "incidents with different chains; the ḥadīth of the heart (Bukhārī 52, " +
        "Muslim 1599) with its narrator; and the connection to Sūrah al-Sharḥ " +
        "94:1. They should also explain Āminah's response and what yaqīn means.",
    },
  ],

  // ── Lesson Reliability Summary ────────────────────────────────────────────

  lessonReliabilitySummary: {
    overallGrade: "Widely Accepted",
    summary:
      "The core event of Shaqq al-Ṣadr in Banū Saʿd is transmitted through " +
      "Sīrah literature — narrated by Ḥalīmah herself and preserved by Ibn " +
      "Isḥāq via Ibn Hishām. This is Sīrah-level transmission, not a formally " +
      "graded ḥadīth chain, but it is unanimous across all major classical " +
      "Sīrah works with no credible contradicting account. The ḥadīth of the " +
      "heart (Bukhārī 52, Muslim 1599) is independently established ṣaḥīḥ " +
      "ḥadīth. Sūrah al-Sharḥ (94:1) is established Qurʾān. Note: the Ṣaḥīḥ " +
      "Muslim account of the opening of the chest (Muslim 162, narrated by " +
      "Anas ibn Mālik) refers to the Mi'rāj incident, not the Banū Saʿd " +
      "incident — these are distinct events and should not be conflated.",
  },

  // ── Authentication Notes ──────────────────────────────────────────────────

  authenticationNotes: [
    {
      claim:
        "Sūrah al-Sharḥ 94:1 — 'Have We not expanded your chest for you?'",
      grade: "Established",
      sources: ["Qurʾān — Sūrah al-Sharḥ, 94:1"],
      explanation:
        "Divine revelation. Established as Qurʾān by ijmāʿ (consensus). " +
        "Scholars connect this āyah to the theme of the opening of the chest — " +
        "including the Banū Saʿd incident and the broader spiritual preparation " +
        "of the Prophet ﷺ for prophethood. No dispute.",
    },
    {
      claim:
        "The ḥadīth of the heart: 'In the body there is a piece of flesh...'",
      grade: "Established",
      sources: [
        "Ṣaḥīḥ al-Bukhārī — Ḥadīth 52 (narrated by al-Nuʿmān ibn Bashīr)",
        "Ṣaḥīḥ Muslim — Ḥadīth 1599 (narrated by al-Nuʿmān ibn Bashīr)",
      ],
      explanation:
        "A firmly established ṣaḥīḥ ḥadīth with multiple chains in both of " +
        "the Ṣaḥīḥayn. This ḥadīth stands independently of the Shaqq al-Ṣadr " +
        "narrative — it is a prophetic teaching, not part of the Sīrah account. " +
        "Suitable for memorisation and direct practice.",
    },
    {
      claim:
        "IMPORTANT — The Banū Saʿd opening and the opening before the Mi'rāj " +
        "are two distinct events, not one",
      grade: "Established",
      sources: [
        "Ṣaḥīḥ Muslim — Ḥadīth 162 (narrated by Anas ibn Mālik) — Mi'rāj account",
        "Sīrat Ibn Hishām (from Ibn Isḥāq — narrated from Ḥalīmah) — Banū Saʿd account",
      ],
      explanation:
        "IMPORTANT: The opening of the chest in Ṣaḥīḥ Muslim 162 (narrated " +
        "by Anas ibn Mālik) describes the event before the Mi'rāj — not the " +
        "incident in Banū Saʿd. These are two distinct events with different " +
        "narrators, different circumstances, and different chains of transmission. " +
        "Do not cite Muslim 162 as evidence for the Banū Saʿd event. Both " +
        "events are accepted in the tradition. Both deserve to be taught " +
        "accurately and separately.",
    },
    {
      claim:
        "The Banū Saʿd incident: two men in white, the opening of the chest, " +
        "the washing of the heart, the foster-brother as witness",
      grade: "Widely Accepted",
      sources: [
        "Sīrat Ibn Hishām (from Ibn Isḥāq — narrated from Ḥalīmah al-Saʿdiyyah)",
        "Al-Raḥīq al-Makhtūm — Ṣafī al-Raḥmān al-Mubārakfūrī",
        "Al-Bidāyah wa al-Nihāyah — Ibn Kathīr",
      ],
      explanation:
        "This narrative is Sīrah transmission — not a ḥadīth in Ṣaḥīḥ " +
        "al-Bukhārī or Ṣaḥīḥ Muslim. The source is Ḥalīmah's own account " +
        "as preserved by Ibn Isḥāq, transmitted through the Sīrah tradition. " +
        "It is unanimous across all major classical Sīrah works with no " +
        "contradicting account. Widely accepted — but its classification as " +
        "Sīrah narrative (not graded prophetic ḥadīth) should be clearly " +
        "communicated to students and families.",
    },
    {
      claim:
        "Āminah's response — 'Do not fear for him. He is protected' — and her " +
        "prior preparation through signs before the birth",
      grade: "Widely Accepted",
      sources: [
        "Sīrat Ibn Hishām (from Ibn Isḥāq)",
        "Al-Raḥīq al-Makhtūm",
      ],
      explanation:
        "Āminah's words and the signs she received before the birth of the " +
        "Prophet ﷺ are transmitted through Sīrah literature. These are " +
        "widely accepted in the tradition but do not carry a formal ṣaḥīḥ " +
        "isnād. They should be taught as received Sīrah narrative — not as " +
        "a graded prophetic ḥadīth.",
    },
  ],

  // ── Mini Timeline ─────────────────────────────────────────────────────────

  lessonTimeline: [
    {
      year: "~570 CE",
      label:
        "Rasūlullāh ﷺ placed in the care of Ḥalīmah al-Saʿdiyyah in Banū Saʿd",
    },
    {
      year: "~574 CE",
      label:
        "Two men in white open the chest of the Prophet ﷺ in Banū Saʿd — approximately age four",
    },
    {
      year: "~574 CE",
      label:
        "Foster-brother ʿAbdullāh ibn al-Ḥārith witnesses the event and runs to Ḥalīmah",
    },
    {
      year: "~574 CE",
      label:
        "Prophet ﷺ found standing, calm and unharmed — describes exactly what happened",
    },
    {
      year: "~574 CE",
      label:
        "Ḥalīmah and al-Ḥārith decide to return the Prophet ﷺ to Āminah in Makkah",
    },
    {
      year: "~574 CE",
      label:
        "Āminah hears everything and responds without fear: 'Do not fear for him. He is protected.'",
    },
  ],

  // ── Cross-Tab Connections ─────────────────────────────────────────────────

  connections: {
    timeline: ["~574 CE"],
    maps: ["makkah"],
    characters: [
      "Ḥalīmah al-Saʿdiyyah",
      "Āminah bint Wahb",
    ],
    references: [
      "Sīrat Ibn Hishām",
      "Al-Raḥīq al-Makhtūm (The Sealed Nectar)",
      "Ṣaḥīḥ al-Bukhārī — Ḥadīth 52",
      "Ṣaḥīḥ Muslim — Ḥadīth 1599",
    ],
  },
};

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

// ── Lesson 8 — The Journey to Sham ───────────────────────────────────────────

const lesson8: LessonEnrichment = {
  bookId: "sirah_journey",
  partNumber: 8,
  lessonTitle: "The Journey to Sham",

  // ── Meta ──────────────────────────────────────────────────────────────────

  estimatedReadingTime: {
    readingMinutes: 35,
    studyMinutes: 20,
  },

  recommendedUse: ["individual", "family", "classroom", "madrasa"],

  // ── Opening ───────────────────────────────────────────────────────────────

  whyThisMattersToday:
    "In an age of doubt and confusion about the identity of the Prophet, this lesson offers something remarkable: a scholar of another faith recognised the Prophet before prophethood, from descriptions preserved in ancient scriptures. The Bahira encounter is not a side story — it is a witness to the truth, preserved in the Sirah, that the coming of Muhammad was known and described long before he knew his own mission. Studying it today builds conviction, silences doubt, and reminds us that the truth of this Deen is not something invented — it was anticipated.",

  memoryGem:
    "Guard this child from the people. A great future lies before this nephew of yours. — Bahira the monk, scholar of ancient scripture, speaking to Abu Talib at Busra in Sham",

  oneMinuteSummary:
    "When the young Muhammad was approximately twelve years old, he travelled with his uncle Abu Talib on a trading caravan to Sham. The journey north took the caravan through the Hijaz and into southern Sham, passing through the trading town of Busra. There, a Christian monk named Bahira — a scholar who had inherited ancient books describing the signs of the final prophet — observed the approaching caravan from his monastery. He noticed a cloud shading one figure in the caravan and a tree bending its branches specifically over that person. He descended from his monastery for the first time, invited the entire caravan to a meal, and carefully examined the young Muhammad, checking the signs against the descriptions in his books. He found the Khatam al-Nubuwwah — the Seal of Prophethood — between his shoulders, confirming every criterion he had studied. He warned Abu Talib to protect the child and to return him to Makkah. Abu Talib listened and sent the boy home. The narration is recorded in Jami al-Tirmidhi (3620) with a grading of hasan sahih, and in the Sirah of Ibn Hisham.",

  // ── Content ───────────────────────────────────────────────────────────────

  keyFacts: [
    {
      topic: "Age of the Prophet at the time",
      information:
        "The Prophet was approximately 12 years old at the time of the Bahira encounter. Most scholars of Sirah accept this age based on the narrations; a minority suggest 9 years old. The majority view of 12 is the one recorded in Tirmidhi's narration and followed in the classical Sirah books.",
    },
    {
      topic: "Who was Bahira?",
      information:
        "Bahira was a Christian monk who lived in a monastery (sawma'ah) at Busra in southern Sham. His name is given in the Sirah as Bahira (or Sergius in some non-Islamic accounts). He was a scholar of ancient scriptures that described the signs of the final prophet. He is not described as a saint or miracle-worker — simply as a learned man who had kept and studied specific knowledge.",
    },
    {
      topic: "The Khatam al-Nubuwwah",
      information:
        "The Seal of Prophethood was a physical mark found between the Prophet's shoulders. Multiple Companions reported seeing it. Al-Sa'ib ibn Yazid (Sahih al-Bukhari, 190) described it as like a pigeon's egg. Jabir ibn Samurah described it as like the seal on a letter (Sahih Muslim, 2344). This mark is mentioned in the Sirah as one of the signs Bahira confirmed.",
    },
    {
      topic: "The cloud and the tree",
      information:
        "The Tirmidhi narration records that a cloud was shading the Prophet specifically as the caravan moved, and that when the caravan stopped beneath a tree, the branches extended their shade over him. These are the physical signs that caused Bahira to descend from his monastery after years of watching caravans pass without inviting them.",
    },
    {
      topic: "What Bahira told Abu Talib",
      information:
        "The narrations record that Bahira warned Abu Talib: 'Return your nephew to his country. Beware of the Jews. By Allah, if they see him and recognise what I recognise, they will harm him. Great things lie ahead for this nephew of yours.' Abu Talib sent the boy back to Makkah with trusted companions, shortening the journey.",
    },
    {
      topic: "The significance for ahl al-kitab recognition",
      information:
        "The Quran states: 'Those to whom We gave the Scripture recognise him as they recognise their own sons.' (2:146) The Bahira encounter is one of the earliest historical examples of this recognition. Scholars of Tafsir cite it when explaining this ayah — the descriptions of the final prophet were preserved in the earlier scriptures, and Bahira had kept and studied those descriptions.",
    },
  ],

  whatWeLearn: [
    {
      event: "Abu Talib taking the young Muhammad on the caravan",
      lesson:
        "Love that is genuine does not calculate convenience. Abu Talib had every practical reason to leave his twelve-year-old nephew behind. He could not. The bonds that Allah places between people carry people to the places Allah has arranged for them.",
    },
    {
      event: "Bahira keeping the ancient knowledge alive",
      lesson:
        "Knowledge that is studied and kept — even when no one around you sees its relevance — prepares you to recognise the truth when it comes. Bahira's decades of careful scholarship meant he was ready when the moment arrived. He did not let it walk past his door.",
    },
    {
      event: "The cloud and the tree",
      lesson:
        "Allah's protection of those He has chosen is real and active, even before they know their own mission. The Prophet was twelve years old and unaware of these signs. Allah was already sheltering him from the world's gaze — letting only those with the right knowledge see.",
    },
    {
      event: "Bahira's method of examination",
      lesson:
        "Certainty in Islam is not vague feeling — it is knowledge carefully applied to reality. Bahira examined the criteria, checked them one by one, and arrived at certainty. His certainty produced action. This is the model: study, examine, conclude, act.",
    },
    {
      event: "Abu Talib listening to a Christian monk",
      lesson:
        "Wisdom does not have a religion. Abu Talib received sound counsel from an unexpected source and acted on it without ego. The ability to hear truth from wherever it comes — and to act on it immediately — is a mark of genuine wisdom.",
    },
  ],

  whyDidAllahAllowThis: {
    question:
      "Why did Allah arrange for the Prophet to be recognised by a Christian monk in a foreign land — rather than by the scholars of his own people in Makkah?",
    reflection:
      "This encounter was not visible to Makkah. The people of Quraysh, who would later reject the Prophet, did not witness it. But Allah arranged that the truth of the Prophet's identity was confirmed — preserved in the record of the Sirah — by a scholar from another tradition, checking criteria preserved in scriptures older than the Quraysh. This is how Allah establishes witnesses: from unexpected places, through unexpected people, so that no one can say there was no sign. The encounter at Busra is a witness in the Sirah that the Prophet was known before he was revealed.",
    quranicConnection: {
      arabic:
        "الَّذِينَ آتَيْنَاهُمُ الْكِتَابَ يَعْرِفُونَهُ كَمَا يَعْرِفُونَ أَبْنَاءَهُمْ",
      translation:
        "Those to whom We gave the Scripture recognise him as they recognise their own sons.",
      reference: "Surah al-Baqarah, 2:146",
    },
  },

  familyDiscussion: [
    {
      question:
        "Bahira had kept ancient knowledge alive for decades — studying it even when no caravan that passed seemed to need it. Then one day, that knowledge was exactly what he needed. Can you think of something you have learnt about Islam that you did not understand the use of at the time — but later found it exactly where you needed it?",
      hint:
        "This question works for both adults and older children. Encourage examples from their own learning — a verse they memorised, a ruling they studied, a story they heard that later gave them clarity or comfort.",
    },
    {
      question:
        "Abu Talib listened to a Christian monk's warning and acted on it without arguing, without dismissing it, and without needing a second opinion. What made him able to do that? What is the quality in a person that allows them to receive good counsel from unexpected sources?",
      hint:
        "The quality is humility combined with love. Abu Talib loved his nephew so much that he was immediately moved when someone warned him. Let the discussion explore how love makes us more alert to protect those we care for.",
    },
    {
      question:
        "Bahira saw the cloud and the tree bending — signs of Allah's protection that the caravan members themselves did not notice. What does it mean that Allah's protection of the Prophet was visible to a stranger with knowledge, but invisible to those walking beside him? What does this teach us about the difference between having knowledge and simply being present?",
      hint:
        "The key insight: presence alone does not grant sight. Bahira was an outsider who had studied — and because of his knowledge, he saw what insiders missed. Knowledge transforms what we are able to notice.",
    },
    {
      question:
        "The Prophet was twelve years old when Bahira recognised him — and had no knowledge of any of it. He went home to Makkah without knowing about the cloud, the seal, or the monk's warning. Allah's plan for him was already advanced far beyond his own understanding of his situation. Can anyone in the family think of a time when, looking back, you realised Allah had been arranging something for you that you did not see at the time?",
      hint:
        "This is a reflective question about qada and qadar. It opens up personal testimony and builds a family culture of noticing Allah's arrangement in life. Younger children can be guided with: 'Has there ever been something that happened that you did not understand, but later you were glad it happened?'",
    },
  ],

  familyApplication:
    "This week, choose one thing you have learnt about Islam — a verse, a hadith, a story from the Sirah — and spend ten minutes going deeper into it than you normally would. Look up its source. Read what the scholars say about it. Then ask: if someone tested me on this right now, what would I be able to say with certainty? Bahira had studied his knowledge so deeply that he could act on it the moment the moment came. Our knowledge of the Deen should be the same — deep enough to act on, not just recall.",

  quickReview: [
    {
      question: "How old was the Prophet at the time of the Bahira encounter?",
      answer:
        "Approximately 12 years old, according to the majority view in the Sirah and the Tirmidhi narration.",
    },
    {
      question: "Who was Bahira?",
      answer:
        "A Christian monk and scholar of scripture who lived at a monastery in Busra, in southern Sham. He had inherited ancient books describing the signs of the final prophet.",
    },
    {
      question: "What were the two visible signs that made Bahira descend from his monastery?",
      answer:
        "A cloud that shaded the Prophet specifically as the caravan moved, and a tree whose branches bent to shade him when the caravan stopped to rest.",
    },
    {
      question: "What is the Khatam al-Nubuwwah?",
      answer:
        "The Seal of Prophethood — a physical mark found between the Prophet's shoulder blades, described as like a pigeon's egg by Companions who saw it. Bahira confirmed this mark matched the description in his ancient books.",
    },
    {
      question: "What did Bahira tell Abu Talib?",
      answer:
        "To take the boy back to Makkah, to guard him from the people, and that a great future lay before his nephew. Abu Talib listened and sent the young Muhammad home with trusted companions.",
    },
    {
      question: "Which Quranic ayah relates directly to the theme of this lesson?",
      answer:
        "Surah al-Baqarah 2:146 — 'Those to whom We gave the Scripture recognise him as they recognise their own sons.' Bahira is a historical example of exactly this recognition.",
    },
  ],

  exploreFurther: [
    {
      title: "Al-Rahiq al-Makhtum (The Sealed Nectar)",
      author: "Safi al-Rahman al-Mubarakfuri",
      type: "book",
      note:
        "The prize-winning modern Sirah. The Bahira account is covered in the early chapters with clear narrative and source references.",
    },
    {
      title: "Sirat Ibn Hisham",
      author: "Ibn Hisham (summarising Ibn Ishaq)",
      type: "book",
      note:
        "The classical Sirah source for the Bahira encounter. Read the original account in the section on the Prophet's pre-prophetic youth.",
    },
    {
      title: "Jami al-Tirmidhi, Hadith 3620",
      author: "Imam al-Tirmidhi",
      type: "book",
      note:
        "The authenticated hadith narration of the Bahira encounter, graded hasan sahih. Essential primary source for this event.",
    },
    {
      title: "The Description of the Prophet in the Bible",
      type: "article",
      note:
        "A research topic: look up what scholars of Tafsir say about Surah al-A'raf 7:157 — 'whom they find written in what they have of the Torah and the Gospel.' Understanding this ayah deepens the Bahira lesson significantly.",
    },
  ],

  teacherNotes: [
    {
      audience: "family",
      heading: "Frame it as a witness, not just a story",
      body:
        "When reading this with your family, present the Bahira encounter as what it is: a witness in the historical record that the Prophet was described in ancient scriptures before he was revealed. This is not a fairy tale — it is documented in Tirmidhi with an authenticated chain. Framing it this way builds iman and answers the doubting voice that says: 'How do we know the Prophet was truly sent by Allah?'",
    },
    {
      audience: "classroom",
      heading: "Discuss the preservation of knowledge across traditions",
      body:
        "This lesson opens a rich discussion: if the scholars of the People of the Book had preserved descriptions of the Prophet, what does that tell us about the relationship between Islam and earlier revelations? The Quran's position is that Islam did not begin with Muhammad but was the final expression of a message sent through all the prophets. Bahira's knowledge is a trace of that earlier transmission.",
    },
    {
      audience: "madrasa",
      heading: "Authenticity discussion — address the narration directly",
      body:
        "With older students, address the source directly: the Tirmidhi narration (3620) is graded hasan sahih. Ibn Ishaq's account adds details (including names of companions sent with the boy) that have been discussed by hadith scholars. Teach students to distinguish: the core of the event is authenticated; some narrative details are from secondary Sirah accounts. This models the authentic Islamic approach to knowledge — honest engagement with what is established and what is not.",
    },
  ],

  lessonReliabilitySummary: {
    overallGrade: "Widely Accepted",
    summary:
      "The Bahira encounter is recorded in Jami al-Tirmidhi (Hadith 3620) with a grading of hasan sahih, and in the Sirah of Ibn Hisham (drawing on Ibn Ishaq). The core of the event — the caravan journey, the monk's recognition, the warning to Abu Talib, and the return of the young Muhammad to Makkah — is widely accepted across classical scholarship. Some narrative details (such as the specific wording of Bahira's examination and the names of companions sent with the boy) derive from the Sirah tradition and carry the general scholarly acceptance that accompanies Ibn Ishaq's narrations. The Khatam al-Nubuwwah is separately established through multiple authenticated Companion reports in Sahih al-Bukhari and Sahih Muslim.",
  },

  authenticationNotes: [
    {
      claim: "The caravan journey to Sham and the encounter with Bahira",
      grade: "Widely Accepted",
      sources: [
        "Jami al-Tirmidhi, Hadith 3620 (hasan sahih)",
        "Sirat Ibn Hisham (drawing on Ibn Ishaq)",
        "Al-Bidayah wa al-Nihayah — Ibn Kathir",
      ],
      explanation:
        "The Tirmidhi narration is the primary hadith source and carries a hasan sahih grading. The Sirah accounts of Ibn Ishaq (via Ibn Hisham) provide the fuller narrative. Both are accepted by the classical scholars as reliable accounts of this event.",
    },
    {
      claim: "The cloud shading the Prophet and the tree bending its branches",
      grade: "Widely Accepted",
      sources: [
        "Jami al-Tirmidhi, Hadith 3620",
        "Sirat Ibn Hisham",
      ],
      explanation:
        "These signs are part of the Tirmidhi narration and the Sirah tradition. They are accepted as part of the account by classical scholars.",
    },
    {
      claim: "The Khatam al-Nubuwwah — the physical Seal of Prophethood",
      grade: "Established",
      sources: [
        "Sahih al-Bukhari, Hadith 190 (narrated by al-Sa'ib ibn Yazid)",
        "Sahih Muslim, Hadith 2344 (narrated by Jabir ibn Samurah)",
      ],
      explanation:
        "The existence and appearance of the Seal of Prophethood is separately and firmly established through multiple authenticated narrations in the primary hadith collections. It is not dependent solely on the Bahira account.",
    },
    {
      claim: "The Prophet's age at the time (approximately 12 years old)",
      grade: "Widely Accepted",
      sources: [
        "Jami al-Tirmidhi, Hadith 3620",
        "Scholarly consensus across classical Sirah works",
      ],
      explanation:
        "The majority of Sirah scholars accept approximately 12 years as the age of the Prophet during this encounter. A minority opinion suggests 9 years. The Tirmidhi narration supports the 12-year reading.",
    },
  ],

  // ── Timeline ───────────────────────────────────────────────────────────────

  lessonTimeline: [
    {
      year: "~578 CE",
      label: "Prophet (age ~8) passes into Abu Talib's care after death of Abd al-Muttalib",
    },
    {
      year: "~582 CE",
      label: "Prophet (age ~12) travels with Abu Talib on caravan to Sham",
    },
    {
      year: "~582 CE",
      label: "Caravan reaches Busra — Bahira recognises the Prophet and warns Abu Talib",
    },
    {
      year: "~582 CE",
      label: "Prophet sent back to Makkah — returns home protected",
    },
  ],

  // ── Connections ────────────────────────────────────────────────────────────

  connections: {
    timeline: ["~582 CE"],
    maps: ["makkah", "arabia"],
    characters: [
      "Abu Talib ibn Abd al-Muttalib",
    ],
    references: [
      "Jami al-Tirmidhi — Hadith 3620",
      "Sirat Ibn Hisham",
      "Sahih al-Bukhari — Hadith 190",
      "Surah al-Baqarah — 2:146",
    ],
  },
};

// ── Lesson 9 — Al-Amin: The Trustworthy ──────────────────────────────────────

const lesson9: LessonEnrichment = {
  bookId: "sirah_journey",
  partNumber: 9,
  lessonTitle: "Al-Amin — The Trustworthy",

  // ── Meta ──────────────────────────────────────────────────────────────────

  estimatedReadingTime: {
    readingMinutes: 40,
    studyMinutes: 20,
  },

  recommendedUse: ["individual", "family", "classroom", "madrasa"],

  // ── Opening ───────────────────────────────────────────────────────────────

  whyThisMattersToday:
    "We live in a world where trustworthiness has become the exception rather than the expectation — where leaders are assumed to be dishonest, promises are assumed to be flexible, and amanah is treated as a personality trait rather than a religious obligation. The Prophet earned the title al-Amin not through a single act but through years of consistent daily choices in ordinary circumstances, before anyone was watching him as a prophet. In a time when character is considered subjective and trust is considered naive, the model of al-Amin is a complete counter-curriculum.",

  memoryGem:
    "I was present in the house of Abdullah ibn Judan when a pact was concluded which I would not exchange for red camels. And if I were called to it in Islam, I would respond. -- The Prophet (referenced in Sirat Ibn Hisham; substance in Bayhaqi, Dala'il al-Nubuwwah)",

  oneMinuteSummary:
    "After returning from Sham, the young Muhammad grew into early manhood in Makkah under Abu Talib's care. The people of Makkah observed his character across years of trade and daily dealings and gave him a title no one claimed for himself: al-Amin -- the Trustworthy. When he was approximately twenty years old, he participated in founding the Hilf al-Fudayl -- the Pact of the Virtuous -- after a Yemeni merchant was cheated by a Quraysh notable and cried out for help at the Ka'bah. Noble men of Quraysh gathered at the house of Abdullah ibn Judan and covenanted to defend the oppressed regardless of tribe. The Prophet said, after receiving revelation and becoming a prophet of Allah, that he would not exchange his membership in that pact for the finest wealth in Arabia. The Hilf and the title al-Amin together define the moral character that received the first word of the Quran twenty years later.",

  // ── Content ───────────────────────────────────────────────────────────────

  keyFacts: [
    {
      topic: "Prophet's approximate age at Hilf al-Fudayl",
      information: "~20 years old (approximately 590 CE)",
    },
    {
      topic: "Location of the pact",
      information: "House of Abdullah ibn Judan al-Taymi, Makkah",
    },
    {
      topic: "Clans who participated",
      information:
        "Banu Hashim, Banu Muttalib, Banu Asad ibn Abd al-Uzza, Banu Zuhra, Banu Taym ibn Murra",
    },
    {
      topic: "Occasion that sparked the pact",
      information:
        "A merchant from Yemen (some accounts say Zabid) was cheated by al-As ibn Wa'il al-Sahmi, who refused to pay for goods he had received",
    },
    {
      topic: "The Prophet's statement about the Hilf",
      information:
        "Said after prophethood: I would not exchange it for red camels. If I were called to it in Islam, I would respond. (Sirat Ibn Hisham; substance in Bayhaqi)",
    },
    {
      topic: "The title al-Amin",
      information:
        "Given to the Prophet by the Quraysh before prophethood -- meaning the Trustworthy -- based on years of consistent, observed character in trade and daily dealings",
    },
  ],

  whatWeLearn: [
    {
      event: "The Prophet growing into manhood over decades before prophethood",
      lesson:
        "Character is built before it is tested. The moral qualities that carried the Prophet through prophethood were formed across years of ordinary pre-prophetic life. Revelation came to a vessel that had been prepared.",
    },
    {
      event: "The founding of the Hilf al-Fudayl in response to a stranger's cry",
      lesson:
        "Justice is a universal obligation. The Hilf demonstrates that the principle of defending the wronged is woven into human conscience. Islam confirmed and completed it; it did not introduce it from nothing.",
    },
    {
      event: "The Quraysh giving the Prophet the title al-Amin",
      lesson:
        "Trustworthiness is given, not claimed. Al-Amin was a collective title given by a community -- including people who would later become enemies -- based on observed behaviour across years of consistent choices.",
    },
    {
      event: "The Prophet instructing Ali to return all trusts on the night of hijra",
      lesson:
        "Amanah continues even under persecution. After the Quraysh rejected him and persecuted the Muslims, the Prophet still fulfilled every financial and material obligation before leaving Makkah. His duties to those who wronged him did not change.",
    },
    {
      event: "The Prophet saying he would still respond to the Hilf in Islam",
      lesson:
        "Good that preceded Islam is honoured by Islam. The Prophet's affirmation shows that Allah does not erase the good done before revelation -- He completes and confirms it.",
    },
  ],

  whyDidAllahAllowThis: {
    question:
      "Why did Allah allow the Prophet to grow up in the jahiliyyah environment -- including at the edge of the sacrilegious Harb al-Fijar -- before giving him revelation?",
    reflection:
      "The Prophet spent forty years in the world before receiving a single word of revelation. He saw injustice at close range -- at the edges of tribal wars fought in sacred months, in a city where power and wealth determined who received justice. When he stood in the house of Ibn Judan and made a pact to defend strangers, he was not theorising about justice. He had seen what its absence looks like. The revelation that would come twenty years later -- Indeed, Allah commands justice and good conduct (16:90) -- landed in the heart of a man who had already paid in experience for his understanding of what those words mean. Allah prepared the one who would carry the Quran by giving him decades of understanding the world the Quran would address.",
    quranicConnection: {
      arabic:
        "إنَّ اللَّهَ يَأْمُرُ بِالْعَدْلِ وَالْإِحْسَانِ وَإِيتَاءِ ذِي الْقُرْبَى",
      translation:
        "Indeed, Allah orders justice and good conduct and giving to relatives.",
      reference: "Surah al-Nahl, 16:90",
    },
  },

  familyDiscussion: [
    {
      question:
        "The Hilf al-Fudayl started because a stranger from Yemen cried for help and nobody came -- until the best men in Makkah were shamed into acting. If you heard about someone being cheated or wronged in your community, what would stop you from doing something? What would it take for you to act?",
      hint:
        "Think about: fear of conflict, not knowing the person, feeling it is not your responsibility, not knowing what to do. Which of these apply to you?",
    },
    {
      question:
        "The Prophet was given the title al-Amin by the people of Makkah -- including people who later became his enemies. They kept trusting him with their valuables even while calling him a liar in terms of his prophecy. What does it say about a person's character if even their opponents cannot find fault with their trustworthiness?",
      hint:
        "Can you think of anyone in your life -- a teacher, a family member, a public figure -- whose character is so consistent that even people who disagree with them still respect it?",
    },
    {
      question:
        "The Prophet said that if he were called to the Hilf al-Fudayl after becoming a Muslim, he would respond. This means the justice the pact stood for was still valid, even with the Quran. Does this surprise you? What does it say about the relationship between natural human conscience and divine law?",
      hint:
        "Think about things you knew were wrong before you learned they were haram. Was your conscience already telling you something? Where does that conscience come from?",
    },
    {
      question:
        "The Prophet's instruction on the night of hijra was to stay in Makkah and return every trust to its owner -- including the trusts of people who had persecuted the Muslims. He left his city with his obligations fulfilled. What does amanah look like when it is most difficult -- when the people you owe something to have wronged you?",
      hint:
        "Are there any obligations in your life -- a promise, a duty, a debt -- that you have been delaying because the relationship with the other person has become difficult?",
    },
  ],

  familyApplication:
    "Choose one amanah this week -- one trust or obligation that you carry -- and assess it honestly. It could be a promise you made that you have not fulfilled, a duty at work or school that you have been giving less than full effort, a financial obligation that is outstanding, or something that belongs to someone else that you have not yet returned. Take one concrete step to close that gap this week. Before you go to sleep, ask yourself: if I left tonight -- like the Prophet left for Madinah -- would I leave having returned everything that belongs to others? That question is the measure of al-Amin.",

  quickReview: [
    {
      question: "What does the title al-Amin mean, and who gave it to the Prophet?",
      answer:
        "Al-Amin means the Trustworthy. It was given to the Prophet by the people of Makkah -- including those who would later become his opponents -- based on years of consistently honest and reliable behaviour.",
    },
    {
      question: "What caused the Hilf al-Fudayl to be formed?",
      answer:
        "A merchant from Yemen was cheated by al-As ibn Wa'il, who refused to pay for goods he received. The merchant cried out for help at the Ka'bah, and the noble men of Quraysh gathered at the house of Abdullah ibn Judan to form a pact to defend the wronged.",
    },
    {
      question: "Which clans participated in the Hilf al-Fudayl?",
      answer:
        "Banu Hashim, Banu Muttalib, Banu Asad ibn Abd al-Uzza, Banu Zuhra, and Banu Taym ibn Murra.",
    },
    {
      question: "What did the Prophet say about the Hilf al-Fudayl after receiving prophethood?",
      answer:
        "He said he would not exchange his membership in the pact for red camels -- the finest wealth of Arabia -- and that if he were called to it in Islam, he would respond.",
    },
    {
      question: "What were the Harb al-Fijar, and what was the Prophet's role?",
      answer:
        "The Harb al-Fijar were tribal wars fought during the sacred months, making them sacrilegious. The Prophet was present at the margins -- handing arrows to his uncles -- but did not engage in direct fighting. He later remembered his presence without pride.",
    },
    {
      question: "What did the Prophet instruct Ali to do on the night of the hijra?",
      answer:
        "He instructed Ali to stay in Makkah and return all the trusts that people -- including enemies of the Muslims -- had deposited with him. He left the city having fulfilled every obligation of amanah.",
    },
  ],

  exploreFurther: [
    {
      title: "Sirat Ibn Hisham -- The Life of the Prophet",
      author: "Ibn Hisham (d. 218 AH), editing the earlier Sirah of Ibn Ishaq",
      type: "book",
      note:
        "The primary classical source for the Hilf al-Fudayl and the al-Amin period. Ibn Hisham's edition of Ibn Ishaq's Sirah preserves the most detailed account of the pact and its context.",
    },
    {
      title: "Al-Rahiq al-Makhtum -- The Sealed Nectar",
      author: "Safi al-Rahman al-Mubarakpuri",
      type: "book",
      note:
        "The modern scholarly Sirah that won the World Muslim League biography competition. Contains a clear and well-sourced account of the pre-prophetic years including the Hilf al-Fudayl. Highly recommended for family and classroom use.",
    },
    {
      title: "Dala'il al-Nubuwwah",
      author: "Imam al-Bayhaqi (d. 458 AH)",
      type: "book",
      note:
        "Contains the prophetic statement about the Hilf al-Fudayl: I would not exchange it for red camels, and if called to it in Islam I would respond. One of the key hadith-level references for this event.",
    },
    {
      title: "Justice in Pre-Islamic Arabia and Its Confirmation in Islam",
      author: "Various classical scholars of Sirah and Fiqh",
      type: "article",
      note:
        "Surah al-Nahl 16:90 is the Quranic confirmation of the principle behind the Hilf al-Fudayl. Reading classical Tafsir on this ayah deepens understanding of why the Prophet affirmed the pact even after prophethood.",
    },
  ],

  teacherNotes: [
    {
      audience: "family",
      heading: "Use the Hilf to teach justice as something you do, not just believe in",
      body:
        "The Hilf al-Fudayl is one of the most powerful pre-prophetic events for teaching children about justice. Emphasise that the Prophet was twenty years old, not a prophet yet, and he still stood up for a stranger. Ask your children: If someone in your class was being treated unfairly and had no one to defend them, would you be the one to stand up? The family application question on amanah is particularly powerful for older children.",
    },
    {
      audience: "classroom",
      heading: "Counter the why be honest when dishonesty is rewarded argument",
      body:
        "Use the al-Amin lesson to address the question students often face: why should I be honest when dishonesty is rewarded? The Prophet was honest in a city where dishonesty was normal -- and his reputation became his most durable asset. His enemies could not credibly call his character into question even while rejecting his prophethood. Honesty builds a kind of social capital that is impossible to fake.",
    },
    {
      audience: "madrasa",
      heading: "Address the theological question: can pre-Islamic good have value?",
      body:
        "The Prophet's statement that he would still respond to the Hilf al-Fudayl in Islam is a key text for this discussion. The scholars understand this as the Prophet affirming the principle, not the act itself -- Islam confirms and completes the human moral instinct for justice rather than replacing it. Use this to discuss the concept of fitra: the natural human disposition toward what is right, which Islam aligns with and elevates.",
    },
  ],

  lessonReliabilitySummary: {
    overallGrade: "Widely Accepted",
    summary:
      "The major events of this lesson -- the Harb al-Fijar, the Hilf al-Fudayl, and the title al-Amin -- are well-attested in the classical Sirah literature, primarily through Sirat Ibn Hisham. The Prophet's statement about the Hilf is cited in Bayhaqi's Dala'il al-Nubuwwah. The al-Amin title is referenced across multiple Sirah sources and is broadly accepted. The specific details of Harb al-Fijar involve some variation across sources but the core event and the Prophet's marginal role are not disputed.",
  },

  authenticationNotes: [
    {
      claim: "The Harb al-Fijar and the Prophet's presence at the margins",
      grade: "Widely Accepted",
      sources: [
        "Sirat Ibn Hisham (drawing on Ibn Ishaq)",
        "Al-Rahiq al-Makhtum -- Mubarakpuri",
      ],
      explanation:
        "The Harb al-Fijar is well-documented in classical Sirah sources. The Prophet's presence in a supporting role -- handing arrows to his uncles -- is in Ibn Hisham and not disputed. The exact dating varies (generally placed c. 584-590 CE); four phases are traditionally counted though some sources enumerate differently.",
    },
    {
      claim: "The Hilf al-Fudayl and the Yemeni merchant",
      grade: "Widely Accepted",
      sources: [
        "Sirat Ibn Hisham (drawing on Ibn Ishaq)",
        "Al-Bidayah wa al-Nihayah -- Ibn Kathir",
      ],
      explanation:
        "The founding of the pact in the house of Abdullah ibn Judan is narrated in Ibn Hisham and accepted across classical Sirah scholarship. The specific identity of the wronged merchant varies slightly in different accounts but the core narrative is consistent.",
    },
    {
      claim: "The Prophet's statement about the Hilf after prophethood",
      grade: "Widely Accepted",
      sources: [
        "Bayhaqi -- Dala'il al-Nubuwwah",
        "Referenced in Sirat Ibn Hisham",
      ],
      explanation:
        "The Prophet's statement -- that he would not exchange the pact for red camels and would still respond to it in Islam -- is cited in Bayhaqi and alluded to in Ibn Hisham. The substance is broadly accepted by scholars of Sirah, though the exact chain varies across reports.",
    },
    {
      claim: "The title al-Amin and the instruction to Ali on the night of hijra",
      grade: "Widely Accepted",
      sources: [
        "Multiple Sirah sources including Ibn Hisham",
        "Classical Tafsir literature on Surah al-Nisa' 4:58",
      ],
      explanation:
        "The Prophet's pre-prophetic title al-Amin is referenced across multiple Sirah and hadith sources. The instruction to Ali to return trusts on the night of hijra is mentioned in classical Sirah and Tafsir literature.",
    },
  ],

  // ── Timeline ───────────────────────────────────────────────────────────────

  lessonTimeline: [
    {
      year: "c. 584-590 CE",
      label: "Harb al-Fijar -- Prophet (~14-20) present at margins, handing arrows to uncles",
    },
    {
      year: "c. 590 CE",
      label: "Hilf al-Fudayl -- Pact of the Virtuous founded at the house of Ibn Judan",
    },
    {
      year: "c. 580-610 CE",
      label: "The years of al-Amin -- Prophet earns the title through consistent daily character",
    },
    {
      year: "622 CE",
      label: "Night of hijra -- Prophet instructs Ali to return all trusts before leaving Makkah",
    },
  ],

  // ── Connections ────────────────────────────────────────────────────────────

  connections: {
    timeline: ["c. 590 CE", "622 CE"],
    maps: ["makkah", "arabia"],
    characters: ["Khadijah bint Khuwaylid"],
    references: [
      "Sirat Ibn Hisham",
      "Al-Rahiq al-Makhtum -- Mubarakpuri",
      "Bayhaqi -- Dala'il al-Nubuwwah",
      "Surah al-Nahl -- 16:90",
      "Surah al-Nisa' -- 4:58",
    ],
  },
};


// -- Lesson 10 -- Khadijah: The First Believer -----------------------------------

const lesson10: LessonEnrichment = {
  bookId: "sirah_journey",
  partNumber: 10,
  lessonTitle: "Khadijah -- A Home Prepared by Allah",

  // -- Meta ------------------------------------------------------------------

  estimatedReadingTime: {
    readingMinutes: 40,
    studyMinutes: 20,
  },

  recommendedUse: ["individual", "family", "classroom", "madrasa"],

  // -- Opening ---------------------------------------------------------------

  whyThisMattersToday:
    "In an age that has reduced marriage to a transaction and loyalty to a feeling, this lesson presents a different model: a marriage built on character-based observation, mutual knowledge, and a loyalty that outlasted death. Khadijah bint Khuwaylid was not simply the Prophet's wife -- she was the person who, more than anyone else in history, knew him well enough to support him before understanding was complete. Every family that studies this lesson receives a model of what it means to know another person so well that you can hold them steadily even when they are carrying something they cannot yet name.",

  memoryGem:
    "She believed in me when people disbelieved me. She assisted me with her wealth when people deprived me. And Allah blessed me with children through her. -- The Prophet about Khadijah bint Khuwaylid, Sahih al-Bukhari, Hadith 3816",

  oneMinuteSummary:
    "At twenty-five years old, Muhammad was hired by the wealthy merchant Khadijah bint Khuwaylid to lead her trade caravan to Syria. She sent her trusted employee Maysarah to accompany the journey and report back. What Maysarah witnessed -- the Prophet's scrupulous honesty in trade, his dignified character, and signs of divine protection -- moved Khadijah to take an extraordinary step: she sent a proposal through an intermediary named Nafisah bint Munyah. The Prophet consulted his uncles, and the nikah was performed. She was approximately forty years old; he was twenty-five. They were married for twenty-five years, and the Prophet never took another wife while she lived. He continued to grieve her and honour her memory for the rest of his life, as preserved in Sahih al-Bukhari (3816). In Sahih Muslim (2430), he named her among the four greatest women who ever lived. In the years following the marriage, the Prophet began spending long periods in spiritual retreat in the cave of Hira above Makkah -- seeking something that the idols of Makkah could not provide. It was Khadijah who prepared his provisions and held the home while he sought. She supported his retreats without demanding explanation, trusting what she had observed of his character across fifteen years of shared life. This lesson ends at the threshold of revelation -- with a home held steady by a woman of extraordinary loyalty, and a world that did not yet know what was forming in the cave above it.",

  // -- Content ---------------------------------------------------------------

  keyFacts: [
    {
      topic: "Age of the Prophet at marriage",
      information:
        "Twenty-five years old, according to the classical Sirah -- Sirat Ibn Hisham drawing on Ibn Ishaq. This is the widely accepted position across classical scholarship.",
    },
    {
      topic: "Age of Khadijah at marriage",
      information:
        "The most widely transmitted classical position, found in Ibn Hisham, is forty years old. Al-Tabari and some other narrations suggest a younger age. The classical position of forty is followed by the majority of scholars. Whatever her age, the historical significance of the marriage is undisputed.",
    },
    {
      topic: "Duration of the marriage",
      information:
        "Twenty-five years -- from the Prophet's age of 25 until Khadijah's death approximately three years before the Hijrah (the Year of Sorrow). The Prophet did not marry again while she lived.",
    },
    {
      topic: "Who proposed to whom",
      information:
        "Khadijah initiated the proposal through her friend Nafisah bint Munyah, who approached the Prophet on Khadijah's behalf. This is preserved in Sirat Ibn Hisham and is widely accepted across Sirah literature.",
    },
    {
      topic: "The mahr (marriage gift)",
      information:
        "Sirah sources record the mahr as twenty young camels, though the exact amount carries some variation across narrations. This is Sirah-level information (Ibn Hisham tier), not from Sahih Bukhari or Muslim.",
    },
    {
      topic: "Khadijah as the first Muslim",
      information:
        "Classical scholars are in agreement that Khadijah bint Khuwaylid was the first person to accept Islam -- before Abu Bakr, before Ali, before any man. Her belief is recorded in Sahih al-Bukhari (Hadith 3) through the account of the first revelation.",
    },
  ],

  whatWeLearn: [
    {
      event: "The Prophet's honesty in the trade journey to Syria",
      lesson:
        "Sidq -- truthfulness -- in our dealings is not merely a virtue for when we are watched. The Prophet had no authority looking over his shoulder on the road to Syria. He was honest because that was who he was. Character is what we do in the unsupervised spaces of our lives.",
    },
    {
      event: "Khadijah proposing to the Prophet",
      lesson:
        "Hikmah -- wisdom -- is the ability to see past convention, status, and appearances to what actually matters. Khadijah had every social reason to choose differently. She chose based on character. This is the Islamic model of discernment: evidence-based, not convention-based.",
    },
    {
      event: "Twenty-five years of one marriage",
      lesson:
        "Wafa -- loyalty -- is not a declaration but a practice. The Prophet did not merely love Khadijah; he honoured her memory actively for the rest of his life. Islam's model of marriage is not transactional -- it is a covenant that shapes the people inside it.",
    },
    {
      event: "Khadijah's response to the first revelation",
      lesson:
        "Thabat -- steadfastness -- in the face of what is unprecedented is possible when it is grounded in knowledge. Khadijah did not panic because she knew him. Twenty-five years of observation gave her the certainty to be the anchor at the most consequential moment in human history.",
    },
    {
      event: "Khadijah being the first Muslim",
      lesson:
        "Being first requires both knowledge and courage. Khadijah's knowledge of the Prophet gave her certainty; her courage let her act on it before anyone else. The lesson for families: the people in our homes should know each other well enough to believe in each other before the world does.",
    },
  ],

  whyDidAllahAllowThis: {
    question:
      "Why did Allah arrange for the Prophet's first anchor in prophethood to be his wife -- a woman -- rather than a scholar, a community leader, or a powerful figure?",
    reflection:
      "Because what the Prophet needed in that moment was not religious authority or political power -- it was someone who knew him. Khadijah's certainty came from twenty-five years of close observation of his character in the private spaces of daily life. Allah arranged that the first witness to prophethood would be the person best positioned to be a witness: the person who had lived beside him. This is a profound statement about the Islamic understanding of the home. The home is not peripheral to the work of Allah -- it is where the most essential preparations take place. Khadijah could only respond as she did because she had spent twenty-five years paying attention.",
    quranicConnection: {
      arabic:
        "وَوَجَدَكَ عَائِلًا فَأَغْنَى",
      translation:
        "And He found you in need and made you self-sufficient.",
      reference: "Surah al-Duha, 93:8",
    },
  },

  familyDiscussion: [
    {
      question:
        "Khadijah chose the Prophet based on what Maysarah reported of his character on the road -- his honesty in trade, his conduct in an unsupervised situation. Think of the people you trust most in your life. What did you observe about their character before you came to trust them? Was it one moment or many small moments?",
      hint:
        "Guide the conversation toward the idea that trust is built through accumulated, ordinary observation -- not grand gestures. Ask: 'What is the smallest thing you noticed that made you think: this is a trustworthy person?'",
    },
    {
      question:
        "The Prophet and Khadijah were married for twenty-five years -- and he never took another wife while she lived. After her death, he continued to mention her, honour her friends, and grieve for her. What does this tell us about the Islamic ideal of loyalty in marriage? And what does it challenge us to think about in our own relationships?",
      hint:
        "This is a reflective question for adults and older teenagers. Let it sit. It is not asking for judgement -- it is asking people to measure themselves against a model. With younger children, simplify: 'Why do you think the Prophet kept remembering and missing Khadijah even after she passed away?'",
    },
    {
      question:
        "For years, the Prophet spent long periods of retreat in the cave of Hira, seeking something he could not name. He did not explain this to the people of Makkah. He did not need to explain it to Khadijah -- she prepared his provisions and held the home while he was away. What does it take to support someone in a purpose that is not yet clear, even to them? What would need to be true about a relationship for that kind of trust to exist?",
      hint:
        "This question goes to the heart of what Islamic marriage is at its best: not a contract of mutual explanation, but a covenant of mutual trust. The question for families is: do we know each other well enough to hold each other even when we do not fully understand what we are holding? Encourage honest reflection without guilt -- the goal is aspiration.",
    },
    {
      question:
        "After Khadijah's death, the Prophet continued to mention her, to slaughter sheep and send portions to her friends, to grieve for her in ways that those around him could see. A'ishah narrated -- in Sahih al-Bukhari 3816 -- that she felt jealousy toward a woman she had never met, because of how often the Prophet remembered her. What does this active, lifelong loyalty to the memory of someone tell us about the weight of genuine love in Islam? And what does it challenge us to consider about how we treat the people who have supported us?",
      hint:
        "Islam's understanding of loyalty does not end when circumstances change or when a person is gone. The Prophet's active remembrance of Khadijah -- his sending of sheep, his mentioning of her, his grief -- was not sentiment. It was wafa in practice. Ask families: how do we honour those who have given us something that cannot be repaid?",
    },
  ],

  familyApplication:
    "This week, each member of the family writes down -- privately -- three things they know about another family member's character from observation, not assumption. Then, at a chosen moment, share one of those observations with that person. Not as flattery, but as witness: 'I have noticed that you are the kind of person who...' Khadijah's steadfast support of the Prophet's spiritual seeking was possible because she had been paying attention for fifteen years. The kind of knowledge that allows us to hold another person in their most uncertain moments is built across ordinary days. Begin building it now.",

  quickReview: [
    {
      question: "Who hired the Prophet to lead a trade caravan to Syria before their marriage?",
      answer:
        "Khadijah bint Khuwaylid -- the most successful businesswoman in Makkah, who sent the Prophet with her goods and also sent her employee Maysarah to accompany the journey.",
    },
    {
      question: "Who proposed to the Prophet, and how?",
      answer:
        "Khadijah initiated the proposal through her friend Nafisah bint Munyah, who approached the Prophet on Khadijah's behalf. He consulted his uncles and accepted.",
    },
    {
      question: "How long were the Prophet and Khadijah married?",
      answer:
        "Twenty-five years -- from the Prophet's age of 25 until Khadijah's death approximately three years before the Hijrah.",
    },
    {
      question: "What did the Prophet say about Khadijah after her death? Where is this narration recorded?",
      answer:
        "He described her as the person who believed in him when others disbelieved, who supported him with her wealth when others withheld, and through whom Allah blessed him with children. This is preserved in Sahih al-Bukhari, Hadith 3816, narrated by A'ishah radhiyallahu anha.",
    },
    {
      question: "What did Khadijah do while the Prophet was in the cave of Hira?",
      answer:
        "She prepared provisions -- food and water -- and held the home while the Prophet spent long periods in spiritual retreat. The classical Sirah records that she supported these retreats without complaint, trusting what she had observed of his character across their years together.",
    },
    {
      question: "What hadith names Khadijah among the greatest women who ever lived, and what does it say?",
      answer:
        "Sahih Muslim, Hadith 2430. The Prophet named the four greatest women of the world: Maryam bint Imran, Khadijah bint Khuwaylid, Fatimah bint Muhammad, and Asiyah the wife of Firawn.",
    },
  ],

  // -- Resources -------------------------------------------------------------

  exploreFurther: [
    {
      title: "Sahih al-Bukhari, Hadith 3",
      author: "Imam al-Bukhari",
      type: "book",
      note:
        "The primary authenticated account of the first revelation -- narrated by A'ishah from the Prophet. Contains Khadijah's exact words and is Tier One evidence for her response and her status as the first Muslim.",
    },
    {
      title: "Sahih Muslim, Hadith 2430",
      author: "Imam Muslim",
      type: "book",
      note:
        "The hadith naming the four greatest women of the world. A Tier One source. Essential for establishing Khadijah's rank in Islam.",
    },
    {
      title: "Sirat Ibn Hisham",
      author: "Ibn Hisham (drawing on Ibn Ishaq, d. 151 AH)",
      type: "book",
      note:
        "The primary classical Sirah source for the trade journey, the proposal through Nafisah, the nikah ceremony, and the domestic details of the marriage. Read the relevant chapters on the Prophet's pre-prophetic adulthood.",
    },
    {
      title: "Al-Rahiq al-Makhtum (The Sealed Nectar)",
      author: "Safi al-Rahman al-Mubarakfuri",
      type: "book",
      note:
        "The prize-winning modern Sirah. Covers the marriage and Khadijah's character clearly and accessibly, drawing on classical sources with references.",
    },
  ],

  // -- Teacher and scholarly sections ----------------------------------------

  teacherNotes: [
    {
      audience: "family",
      heading: "Use the marriage as a model, not just a story",
      body:
        "When reading this with your family, resist the temptation to treat the marriage as simply a biographical detail. Use it as a mirror. Ask: what made their marriage work? The answer is knowledge -- they knew each other deeply enough to be each other's anchor. Let that question sit in your home: do we know each other well enough to carry each other through our hardest moments?",
    },
    {
      audience: "classroom",
      heading: "The proposal as a discussion on gender and agency",
      body:
        "Khadijah's proposal is a historically documented example of a woman exercising informed, dignified agency in the most important decision of her life. In an Islamic studies classroom, this can be used to directly address the claim that Islam diminishes women. Khadijah chose, initiated, and decided -- and she was honoured by the Prophet, by the Sahih hadith record, and by the scholarly tradition for fifteen centuries.",
    },
    {
      audience: "madrasa",
      heading: "Authenticity levels: what is established and what is Sirah narrative",
      body:
        "With older students, distinguish clearly. The first revelation account (Bukhari 3) is Tier One -- cite it precisely and teach students to recognise its authority. The details of the trade journey, the proposal through Nafisah, the nikah ceremony, and the mahr are from Sirat Ibn Hisham (Tier Two) -- widely accepted but not at the level of Sahih hadith. The cloud shading the Prophet on the journey is a Sirah narration -- narrated via Ibn Ishaq through Ibn Hisham. Khadijah's rank (Muslim 2430) is Tier One. Teaching this distinction builds rigour without creating doubt.",
    },
  ],

  lessonReliabilitySummary: {
    overallGrade: "Widely Accepted",
    summary:
      "The core events of this lesson are well-established across two tiers of evidence. The first revelation account and Khadijah's response are in Sahih al-Bukhari (Hadith 3) -- Tier One, the highest level of authentication. Her rank among the four greatest women is in Sahih Muslim (Hadith 2430) -- also Tier One. The Prophet's continued love and memory of Khadijah after her death is in Sahih al-Bukhari (Hadith 3816). The trade journey details, the proposal through Nafisah, and the nikah ceremony are in Sirat Ibn Hisham (drawing on Ibn Ishaq) -- Tier Two, widely accepted in classical scholarship. The cloud shading the Prophet during the journey is from the same Sirah tradition and is graded Widely Accepted. The exact age of Khadijah at marriage (classical position: 40) is a matter of Sirah scholarship with minor discussion; the majority view is followed here.",
  },

  authenticationNotes: [
    {
      claim: "Khadijah's words to the Prophet after the first revelation",
      grade: "Established",
      sources: [
        "Sahih al-Bukhari, Hadith 3 (narrated by A'ishah radhiyallahu anha)",
      ],
      explanation:
        "This is Tier One evidence -- mutawatir in meaning and preserved in the highest grade of authenticated narration. A'ishah narrated it from the Prophet directly. There is no credible scholarly dispute about the authenticity of this account.",
    },
    {
      claim: "Khadijah as the first Muslim",
      grade: "Established",
      sources: [
        "Sahih al-Bukhari, Hadith 3",
        "Classical scholarly consensus across all major Sirah works",
      ],
      explanation:
        "The account in Bukhari 3 establishes that Khadijah was the first to respond to the Prophet's account of the revelation with belief. Classical scholars are in agreement that she was the first Muslim. Some early discussion exists about whether Ali ibn Abi Talib or Abu Bakr was the first male Muslim -- but the primacy of Khadijah as the very first is not disputed.",
    },
    {
      claim: "Khadijah among the four greatest women",
      grade: "Established",
      sources: [
        "Sahih Muslim, Hadith 2430",
      ],
      explanation:
        "Tier One evidence. Narrated by Ali ibn Abi Talib in Sahih Muslim. The hadith names the four greatest women: Maryam, Khadijah, Fatimah, and Asiyah. This is not disputed.",
    },
    {
      claim: "The trade journey to Syria, the proposal through Nafisah, and the nikah",
      grade: "Widely Accepted",
      sources: [
        "Sirat Ibn Hisham (drawing on Ibn Ishaq, d. 151 AH)",
        "Al-Rahiq al-Makhtum -- Mubarakpuri",
      ],
      explanation:
        "These events are recorded in the classical Sirah -- Ibn Hisham from Ibn Ishaq. They are widely accepted across classical scholarship with no significant dispute about the core narrative. The exact details (mahr amount, exact wording of the proposal conversation) carry the normal variation found in Sirah narrations.",
    },
  ],

  // -- Timeline and connections -----------------------------------------------

  lessonTimeline: [
    {
      year: "c. 595 CE",
      label: "Trade journey to Syria -- Prophet (age ~25) leads Khadijah's caravan; Maysarah accompanies",
    },
    {
      year: "c. 595 CE",
      label: "Khadijah proposes through Nafisah bint Munyah -- nikah is performed",
    },
    {
      year: "595-610 CE",
      label: "Twenty-five years of marriage -- one home, one love, six children",
    },
    {
      year: "610 CE",
      label: "First revelation in the cave of Hira -- Prophet (age 40) returns trembling; Khadijah becomes the first Muslim",
    },
    {
      year: "c. 619 CE",
      label: "Khadijah passes away -- Year of Sorrow. The Prophet grieves deeply.",
    },
  ],

  connections: {
    timeline: ["c. 595 CE", "610 CE", "c. 619 CE"],
    maps: ["makkah", "sham"],
    characters: [
      "Khadijah bint Khuwaylid",
      "Waraqah ibn Nawfal",
    ],
    references: [
      "Sahih al-Bukhari -- Hadith 3",
      "Sahih Muslim -- Hadith 2430",
      "Sahih al-Bukhari -- Hadith 3816",
      "Sirat Ibn Hisham",
      "Surah al-Rum -- 30:21",
      "Surah al-Duha -- 93:8",
    ],
  },
};

// ── Enrichment map ─────────────────────────────────────────────────────────────

export const lessonEnrichmentData: LessonEnrichmentMap = {
  "sirah_journey:0": lesson0,
  "sirah_journey:1": lesson1,
  "sirah_journey:3": lesson3,
  "sirah_journey:4": lesson4,
  "sirah_journey:5": lesson5,
  "sirah_journey:6": lesson6,
  "sirah_journey:7": lesson7,
  "sirah_journey:8": lesson8,
  "sirah_journey:9": lesson9,
  "sirah_journey:10": lesson10,
};

// ── Accessor ───────────────────────────────────────────────────────────────────

export function getLessonEnrichment(
  bookId: string,
  partNumber: number
): LessonEnrichment | undefined {
  return lessonEnrichmentData[`${bookId}:${partNumber}`];
}
