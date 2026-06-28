export type SacredTextBox = {
  type: "hadith" | "ayah" | "dua";
  arabic: string;
  translation: string;
  reference?: string;
};

/**
 * A translated variant of a section's text.
 * Only add translations that have been reviewed by a scholar/teacher.
 */
export type ReaderSectionTranslation = {
  heading?: string;
  text?: string[];
};

/**
 * Supported narration/translation language codes.
 * 'en' is always the default (stored directly on the page).
 * Other languages are optional and must be reviewed before publishing.
 */
export type NarrationLang = "en" | "ar" | "ur" | "zu";

/**
 * A full translated variant of a segment page.
 * Arabic/Urdu/Zulu translations must be manually reviewed —
 * never auto-translated.
 */
export type SegmentTranslation = {
  /** Translated chapter title */
  chapterTitle?: string;
  /** Translated explanation paragraphs */
  explanation?: string[];
  /** Translated section texts (same order as parent sections array) */
  sections?: ReaderSectionTranslation[];
  /** Optional pre-recorded audio narration URL for this language */
  audioUrl?: string;
};

export type ReaderSection = {
  heading?: string;
  text?: string[];
  sacredText?: SacredTextBox;
};

export type CoverPage = {
  kind: "cover";
  series: string;
  title: string;
  subtitle: string;
  lessonTitle: string;
  author: string;
  part: string;
};

export type SegmentPage = {
  kind: "segment";
  segmentNumber: number;
  minutes: number;
  /** Main Sīrah topic — shown as the page heading and sidebar title */
  chapterTitle: string;
  /** Virtue title shown as a supporting label beneath the chapter heading */
  heading: string;
  /** Short virtue label shown in sidebar subtitle (e.g. "Virtue of Tawakkul") */
  subLabel: string;
  hadith: SacredTextBox;
  explanation: string[];
  sections: ReaderSection[];
  reflection: string;
  /** Optional: path/URL to a pre-recorded English audio file for listen-along mode */
  audioUrl?: string;
  /**
   * Optional translations for ar / ur / zu.
   * Each language must be reviewed before publishing.
   * English is always the base — stored directly on this page object.
   */
  translations?: Partial<Record<Exclude<NarrationLang, "en">, SegmentTranslation>>;
};

export type ReflectionPage = {
  kind: "reflection";
  questions: string[];
  actionPoint: string;
};

export type ClosingPage = {
  kind: "closing";
  paragraphs: string[];
  duaArabic: string;
  duaTranslation: string;
  /** Optional teaser for the next lesson — rendered below the duʿāʾ */
  nextLessonPreview?: string;
  /** Optional pointer to Profiles and Maps in the BookDetail tabs */
  discoveryNote?: string;
};

export type PartDividerPage = {
  kind: "part-divider";
  title: string;
  subtitle: string;
  description: string[];
};

export type CompletionPage = {
  kind: "completion";
  title: string;
  paragraphs: string[];
  duaArabic: string;
  duaTranslation: string;
  nextLessonPreview: string;
};

export type ReaderPage = CoverPage | SegmentPage | ReflectionPage | ClosingPage | PartDividerPage | CompletionPage;

export type ReaderLesson = {
  id: string;
  seriesName: string;
  cardTitle: string;
  cardSubtitle: string;
  author: string;
  durationMinutes: number;
  pages: ReaderPage[];
};

export const featuredReaderLessonId = "sirah_journey";

export const readerLessons: ReaderLesson[] = [
  {
    id: "sirah_journey",
    seriesName: "Sīrah Series",
    cardTitle: "The Seal of the Prophets ﷺ",
    cardSubtitle: "The Greatest Life Ever Lived",
    author: "Ustādh Hāshim",
    durationMinutes: 40,
    pages: [
      {
        kind: "cover",
        series: "Sīrah Series",
        title: "OUR LEGACY",
        subtitle: "The Greatest Life Ever Lived",
        lessonTitle: "The Seal of the Prophets ﷺ",
        author: "Ustādh Hāshim",
        part: "SirajOne"
      },
      {
        kind: "part-divider",
        title: "Introduction to Sīrah",
        subtitle: "Part 0",
        description: [
          "What is Sīrah — and why does every Muslim need to study it?",
          "Seven reasons studying the life of Rasūlullāh ﷺ is among the most important things we can do."
        ]
      },
      {
        kind: "segment",
        segmentNumber: 1,
        minutes: 10,
        chapterTitle: "What Does the Word Sīrah Mean?",
        heading: "Virtue: Īmān — The Foundation of Belief",
        subLabel: "Virtue of Īmān",
        hadith: {
          type: "hadith",
          arabic:
            "لَا يُؤْمِنُ أَحَدُكُمْ حَتَّى أَكُونَ أَحَبَّ إِلَيْهِ مِنْ وَالِدِهِ وَوَلَدِهِ وَالنَّاسِ أَجْمَعِينَ",
          translation:
            "None of you truly believes until I am more beloved to him than his parents, his children, and all of mankind.",
          reference: "Ṣaḥīḥ al-Bukhārī, Hadīth 15; Ṣaḥīḥ Muslim, Hadīth 44"
        },
        explanation: [
          "Loving Rasulūllāh ﷺ is not merely a feeling — it is a condition of Īmān. Our faith is incomplete without it. ʿUmar ibn al-Khaṭṭāb raḍiyāllāhu ʿanh came to the Prophet ﷺ one day and said: \"O Rasulūllāh, I love you more than everything in the world — except myself.\" Rasulūllāh ﷺ replied: \"Not until you love me more than your own self.\" ʿUmar went away and reflected. He returned and said: \"O Rasulūllāh, now I love you more than my own self.\" Rasulūllāh ﷺ said: \"Now, O ʿUmar, your Īmān is complete.\"",
          "This is the standard our religion sets. It is a high bar — but it is achievable. And the path to reaching it is knowledge. The more we come to know Rasulūllāh ﷺ, the more we will love him. That is why we gather here today."
        ],
        sections: [
          {
            heading: "What Does the Word Sīrah Mean?",
            text: [
              "Before we begin this blessed journey through the life of the greatest human being who ever walked this earth, it is important that we understand one word: Sīrah.",
              "Linguistically, the word Sīrah comes from the Arabic root that means a path. The act of walking from one place to another is called sayr — and Sīrah refers to the path a person travels throughout their entire lifetime. A comprehensive Arabic dictionary lists the following as meanings of this single word: conduct, comportment, demeanour, behaviour, way of life, attitude, position, reaction, way of acting, and biography. All of these meanings are contained within the word Sīrah.",
              "It is important to note that Sīrah is not a term reserved exclusively for the Prophet Muḥammad ﷺ. You could correctly speak of the Sīrah of Abū Bakr, the Sīrah of ʿUmar, or the Sīrah of any person — it simply means their biography, the path of their life. However, we have used this word so consistently and so lovingly in connection with the Prophet ﷺ that today, when any Muslim says the word Sīrah, we almost always mean only one person: Muḥammad ﷺ, the greatest of all creation.",
              "Sometimes, the early Muslims would use the word Maghāzī — meaning battles — to refer to the Sīrah. This is because the latter part of the life of Rasulūllāh ﷺ was largely defined by those military campaigns. Over time, Maghāzī came to be used as a term for his entire biography. Both words — Sīrah and Maghāzī — refer to the same blessed subject: the life of our Prophet ﷺ."
            ]
          },
          {
            heading: "How Did the Early Muslims Regard the Sīrah?",
            text: [
              "Muḥammad ibn Saʿd ibn Abī Waqqāṣ — the son of one of the ten Companions given the explicit glad tidings of Paradise — narrates that his father would sit with them and teach them the battles and the Sīrah of Rasulūllāh ﷺ. He would say to them: \"These are the traditions of your fathers — learn them, study them, and hold them close.\"",
              "ʿAlī ibn al-Ḥusayn ibn ʿAlī ibn Abī Ṭālib — the grandson of ʿAlī raḍiyāllāhu ʿanh — made a statement that should stop us in our tracks. He said: \"We were taught the Sīrah of Rasulūllāh ﷺ just as we were taught the Qurʾān.\"",
              "Just as we were taught the Qurʾān. Not as an interesting story. Not as an optional subject. With the same seriousness, the same dedication, and the same reverence as the Book of Allāh ﷻ. This tells us everything about how important the Sīrah truly is.",
              "And this makes perfect sense. If we want to study the life of Mūsā ʿalayhi us-salām, we turn to the Qurʾān. If we want to learn about ʿĪsā ʿalayhi us-salām, we turn to the Qurʾān. The lives of all the Prophets ʿalayhim us-salām were preserved within the pages of the Qurʾān. But the life of Muḥammad ﷺ — while there are references and glimpses of it throughout the Qurʾān — is most fully and most lovingly preserved in his Sīrah. The Sīrah is, in this sense, the companion record to the Qurʾān: the detailed account of the life of the man who brought it to us."
            ]
          }
        ],
        reflection:
          "Reflect on what you have heard so far. In our next session, we will explore why studying the Sīrah matters — and discover seven profound reasons that will transform the way you understand your own faith."
      },
      {
        kind: "segment",
        segmentNumber: 2,
        minutes: 10,
        chapterTitle: "Why Do We Study Sīrah?",
        heading: "Virtue: Sunnah — The Way of Rasulūllāh ﷺ",
        subLabel: "Virtue of Sunnah",
        hadith: {
          type: "hadith",
          arabic: "مَنْ رَغِبَ عَنْ سُنَّتِي فَلَيْسَ مِنِّي",
          translation: "Whoever turns away from my Sunnah is not of me.",
          reference: "Ṣaḥīḥ al-Bukhārī, Hadīth 5063; Ṣaḥīḥ Muslim, Hadīth 1401"
        },
        explanation: [
          "The Sunnah — the way of Rasulūllāh ﷺ — is not a collection of optional extras. It is the living embodiment of Islam. Allāh ﷻ sent us a Messenger not simply to deliver a message, but to show us how to live it. The Sunnah is that demonstration. And the Sīrah is our window into understanding how that Sunnah was lived, applied, and breathed into every moment of daily life. To love the Sunnah is to love him ﷺ. To study the Sīrah is to draw closer to both."
        ],
        sections: [
          {
            heading: "Why Do We Study Sīrah? — Reasons One and Two",
            text: [
              "Reason One: The Sīrah is the History of Islam",
              "When you study the Sīrah of Muḥammad ﷺ, you are not simply reading the biography of one individual. You are studying the living history of our entire religion. Every event, every trial, every victory, every moment of sadness and joy in his blessed life — each one is a chapter in the story of Islam itself.",
              "His Sīrah contains situations and incidents that provide us with guidance for every challenge we will ever face in our journey of daʿwah. Every problem that an Islamic movement encounters — internal friction, external enemies, betrayal, persecution, poverty, migration, negotiation — has a precedent in the Sīrah of Rasulūllāh ﷺ. We are not the first to walk this road. He walked it before us, and he left us a map.",
              "Reason Two: Developing True Love for Rasulūllāh ﷺ",
              "Loving Rasulūllāh ﷺ is ʿibādah. It is a pillar of our faith. Allāh ﷻ says in the Qurʾān:"
            ]
          },
          {
            sacredText: {
              type: "ayah",
              arabic:
                "قُلْ إِن كَانَ آبَاؤُكُمْ وَأَبْنَاؤُكُمْ وَإِخْوَانُكُمْ وَأَزْوَاجُكُمْ وَعَشِيرَتُكُمْ وَأَمْوَالٌ اقْتَرَفْتُمُوهَا وَتِجَارَةٌ تَخْشَوْنَ كَسَادَهَا وَمَسَاكِنُ تَرْضَوْنَهَا أَحَبَّ إِلَيْكُم مِّنَ اللَّهِ وَرَسُولِهِ وَجِهَادٍ فِي سَبِيلِهِ فَتَرَبَّصُوا حَتَّىٰ يَأْتِيَ اللَّهُ بِأَمْرِهِ",
              translation:
                "Say: If your fathers, your sons, your brothers, your spouses, your kindred, the wealth you have acquired, the trade you fear will decline, and the dwellings you are pleased with — if all of these are more beloved to you than Allāh and His Messenger and striving in His cause — then wait until Allāh brings about His decision.",
              reference: "Qurʾān 9:24"
            }
          },
          {
            text: [
              "The āyah is explicit. Our love for Allāh ﷻ and His Messenger ﷺ must surpass our love for our parents, our children, our brothers, our spouses, our wealth, our businesses, and our homes. Everything. This is not a recommendation — it is a condition.",
              "Now, the ummah today does love Rasulūllāh ﷺ. If you were to ask any Muslim anywhere in the world: \"Do you love the Prophet ﷺ?\" — every one of them would say yes without hesitation. But love cannot be truly deep and sincere unless you know the person you are loving. If your knowledge of someone is shallow, your love for them will be shallow. And this is especially true of Rasulūllāh ﷺ — because the more you know him, the more you will be astonished, moved, and overwhelmed by who he was.",
              "Consider ʿAmr ibn al-ʿĀṣ raḍiyāllāhu ʿanh. He was once among the most dangerous enemies of Islam — not merely an opponent, but a man driven by a burning desire to destroy it. His aspiration, the ambition that filled his nights, was to get his hands on Muḥammad ﷺ and kill him. Then Allāh placed the light of Islam in his heart.",
              "ʿAmr came to the Prophet ﷺ to take his shahādah. He extended his hand — and then pulled it back. The Prophet ﷺ asked him what was wrong. ʿAmr said: \"I have a condition.\" The Prophet ﷺ asked: \"What is your condition?\" ʿAmr replied: \"That you pardon me — that you give me clemency for everything I did before this moment.\" Rasulūllāh ﷺ smiled at him and said: \"O ʿAmr, do you not know that Islām erases everything that came before it? And that Hijrah erases everything that came before it? And that Ḥajj erases everything that came before it?\"",
              "ʿAmr became Muslim. And on his deathbed, years later, he wept. His son ʿAbdullāh tried to comfort him. ʿAmr turned and said: \"My son, I have lived through three stages. In the first stage, the most despised man on the face of this earth to me was Muḥammad ﷺ. There was nothing I desired more than to get hold of him and kill him. If I had died in that stage, I would surely have been among the people of the Fire.\"",
              "\"Then Allāh placed Islam in my heart. I went to Rasulūllāh ﷺ. And suddenly, the man who had been my greatest enemy became the most beloved person in the world to me. I loved him with a love so intense, so overpowering, that I could not even lift my eyes to look at his full face. I could not get a complete glimpse of him — not because I was avoiding him, but because my love and my reverence for him were so great that I was always looking downward in his presence. If you were to ask me today to describe him to you, I would not be able to — because I never allowed myself to stare.\"",
              "He said: \"If I had died in that second stage, I would have hoped with all my heart to be among the people of Jannah.\"",
              "What happened to ʿAmr ibn al-ʿĀṣ? The man who once wanted nothing more than to destroy Rasulūllāh ﷺ — once he truly came to know him, he could not even bring himself to look at his face directly out of love. This is what the Sīrah does to a person."
            ]
          }
        ],
        reflection:
          "We will continue in the next session with more on the love of Rasulūllāh ﷺ, and move into reasons three and four for studying the Sīrah."
      },
      {
        kind: "segment",
        segmentNumber: 3,
        minutes: 10,
        chapterTitle: "The Love the Ṣaḥābah Had for Rasulūllāh ﷺ",
        heading: "Virtue: ʿIlm and Dhikr — Knowledge and Remembrance",
        subLabel: "Virtue of ʿIlm and Dhikr",
        hadith: {
          type: "hadith",
          arabic:
            "مَنْ سَلَكَ طَرِيقًا يَلْتَمِسُ فِيهِ عِلْمًا سَهَّلَ اللَّهُ لَهُ بِهِ طَرِيقًا إِلَى الْجَنَّةِ",
          translation:
            "Whoever treads a path in search of knowledge, Allāh will make easy for him a path to Jannah.",
          reference: "Ṣaḥīḥ Muslim, Hadīth 2699"
        },
        explanation: [
          "Every step taken in the pursuit of beneficial knowledge is a step on the road to Jannah. This gathering — sitting with your family, reading, listening, reflecting — is itself a path of knowledge. And knowledge of the greatest human being who ever lived is among the most beautiful knowledge a Muslim can carry. We ask Allāh ﷻ to make this gathering a means of light for us, our families, and every generation that follows."
        ],
        sections: [
          {
            heading: "Continuing — Reason Two and Into Reason Three",
            text: [
              "The Love the Ṣaḥābah Had for Rasulūllāh ﷺ",
              "Suhayl ibn ʿAmr was sent by Quraysh to negotiate with the Prophet ﷺ before the Treaty of Ḥudaybiyyah. He was no ordinary man — he was an experienced international diplomat who had personally visited the courts of the Persian Emperor, the Roman Emperor, and the Najāshī of Abyssinia. He had seen the great rulers of the world up close.",
              "When Suhayl returned to Makkah, Quraysh gathered to hear his report. He told them: \"I have visited the court of the Persian Emperor. I have sat before the Roman Emperor. I have met the Najāshī of Abyssinia.\" Then he paused. \"But I have never — in all of my travels, in all of my life — seen a leader so loved, so deeply revered, by his followers as Muḥammad ﷺ is loved by his Companions.\"",
              "He described what he had witnessed: that when Rasulūllāh ﷺ made wuḍūʾ, the Companions would rush and compete with one another to catch the drops of water as they fell from his blessed body. Such was their love that they did not want even a drop of water that had touched him to fall to the ground unclaimed.",
              "Suhayl told Quraysh: \"These are not people you can negotiate away from their leader. They will not give him up. They will give their lives before they give him up. Do what you will — but understand that.\"",
              "Now consider this: the masses of Muslims today love Rasulūllāh ﷺ even with very limited knowledge of his life. His name, Muḥammad, is the most common name in all of human history. No other person who has ever lived has had so many people name themselves and their children after him. At this very moment, somewhere on this earth, a minaret is calling the adhān — and in that adhān, his name is being mentioned and praised. Around the clock, without interruption, in every time zone, his name rings out: Ashhadu anna Muḥammadan rasūlullāh. The name Muḥammad means \"the praised one\" — and no name has ever more perfectly fulfilled its own meaning.",
              "Consider this: when one teacher lived in a small college town, the imām of their community was a man from Nigeria — a ḥāfiẓ of the Qurʾān named Muḥammad al-ʿĀshir. The word ʿāshir means \"the tenth.\" His father had decided that every male child born to him would be named Muḥammad. All of them. When there were too many Muḥammads in the household to tell apart, his father began numbering them. So there was Muḥammad the First, Muḥammad the Second, right through to Muḥammad the Tenth. His father did not want to deal with any other name for his sons. Every one of them would carry the name of the Prophet ﷺ.",
              "Imagine then: what will be the depth of our love when we truly study his life? When we come to know him as the Ṣaḥābah knew him?",
              "Reason Three: To Follow the Way of Rasulūllāh ﷺ",
              "The great scholar Ibn Ḥazm rahimahullāh said: \"Whoever seeks the preeminence of the Hereafter, the wisdom of this life, the just purpose, and the embodiment of the most perfect morality and character — let him follow Muḥammad, the Prophet of Allāh ﷺ.\"",
              "Allāh ﷻ Himself commands us in the Qurʾān:"
            ]
          },
          {
            sacredText: {
              type: "ayah",
              arabic: "قُلْ إِن كُنتُمْ تُحِبُّونَ اللَّهَ فَاتَّبِعُونِي يُحْبِبْكُمُ اللَّهُ وَيَغْفِرْ لَكُمْ ذُنُوبَكُمْ وَاللَّهُ غَفُورٌ رَّحِيمٌ",
              translation:
                "Say: If you truly love Allāh, then follow me — Allāh will love you and forgive your sins. And Allāh is Oft-Forgiving, Most Merciful.",
              reference: "Qurʾān 3:31"
            }
          },
          {
            text: [
              "The formula could not be clearer. We claim to love Allāh. Allāh tells us: the proof of that love is in following His Messenger ﷺ. And we cannot follow someone we do not know. Studying the Sīrah is not an academic exercise — it is the foundation of living Islam as it was meant to be lived.",
              "Reason Four: Understanding the Qurʾān",
              "There is a profound relationship between the Sīrah and the Qurʾān. Much of the Qurʾān was revealed not in a vacuum, but in direct response to specific events in the life of Rasulūllāh ﷺ. Some āyāt were revealed before an event as preparation. Some were revealed during events as guidance. And some were revealed after events as reflection and lesson.",
              "Without the Sīrah, these āyāt remain difficult — sometimes impossible — to fully understand. Take Sūrah al-Aḥzāb: many of its āyāt were revealed specifically regarding the events of the Battle of the Confederates. Take Sūrah Āl ʿImrān: a significant portion was revealed as a direct response to the Christian delegation from Najrān. Without knowing those events from the Sīrah, the depth of those passages will always be out of reach.",
              "A Companion once understood a Qurʾānic instruction very literally. The āyah said: continue eating and drinking until \"the white thread is distinguished from the black thread.\" He placed an actual white thread and a black thread beneath his pillow at night. He would eat, then check the threads. He went to Rasulūllāh ﷺ and explained what he had done. The Prophet ﷺ laughed and said: \"It is not a thread under your pillow. It is the white thread of the first light of dawn appearing on the horizon — the break of Fajr. That is when you stop.\"",
              "The āyāt of Allāh are applied, explained, and brought to life through the Sīrah. The Qurʾān and the Sunnah are the verbal teachings. But how do we know how to apply them? By looking to the life of Rasulūllāh ﷺ — the living demonstration of everything the Qurʾān commands. This is unique to our ummah. The followers of all other Prophets have lost the trail of their Prophet's life. But we — al-ḥamdulillāh — know how the Qurʾān was practised. That knowledge lives in the Sīrah."
            ]
          }
        ],
        reflection:
          "Reflect on what we have covered. In our final session, we will explore the remaining three reasons for studying Sīrah."
      },
      {
        kind: "segment",
        segmentNumber: 4,
        minutes: 10,
        chapterTitle: "Developing a Muslim Identity",
        heading: "Virtue: Ikrām al-Muslim — Honouring Our Fellow Muslims",
        subLabel: "Virtue of Ikrām al-Muslim",
        hadith: {
          type: "hadith",
          arabic: "الْمُسْلِمُ أَخُو الْمُسْلِمِ لَا يَظْلِمُهُ وَلَا يُسْلِمُهُ",
          translation: "A Muslim is the brother of a Muslim. He does not wrong him, nor does he abandon him.",
          reference: "Ṣaḥīḥ al-Bukhārī, Hadīth 2442; Ṣaḥīḥ Muslim, Hadīth 2580"
        },
        explanation: [
          "To honour a Muslim — to treat them with dignity, care, and brotherhood — is an act of worship. We are one ummah. The Sīrah reminds us of this at every turn: the Muhājirūn left everything they owned, and the Anṣār shared everything they had. This gathering — sitting together, learning together, building something together for our families and future generations — is itself an act of ikrām."
        ],
        sections: [
          {
            heading: "Completing the Seven Reasons — Reasons Five, Six, and Seven",
            text: [
              "Reason Five: Understanding the Methodology of the Islamic Movement",
              "The daʿwah of Rasulūllāh ﷺ did not unfold haphazardly. It moved through carefully defined, divinely directed stages. It began with secret, private calling. Then came the public proclamation. Then came migration. And then, when the conditions were right, came open struggle and confrontation.",
              "These were not the improvised reactions of a man navigating difficult circumstances. They were divinely planned and divinely guided stages. Allāh ﷻ directed His Prophet ﷺ at every step. And that is precisely what makes them so important for us to study. These stages are the methodology — the roadmap — for any sincere effort to establish and spread Islam in any age and in any place.",
              "Reason Six: Studying Sīrah is ʿIbādah",
              "We have not gathered here to entertain ourselves. This is worship. There is ajr — divine reward — attached to every moment we spend in this gathering, learning about Rasulūllāh ﷺ. This is a ḥalaqah of dhikr. And the Prophet ﷺ told us: when a group of people gather to remember Allāh ﷻ and to speak of His Messenger ﷺ, the angels surround them from all sides. The mercy of Allāh ﷻ descends upon them. Tranquillity and peace cover them like a blanket. And Allāh ﷻ mentions them — by name — in a gathering far greater and more noble than the one they are sitting in.",
              "We ask Allāh ﷻ to make us worthy of that. We ask Him to make every word we hear tonight, and every word we carry home to our families, a means of light and barakah.",
              "Allāh ﷻ says: قُلْ إِن كُنتُمْ تُحِبُّونَ اللَّهَ فَاتَّبِعُونِي يُحْبِبْكُمُ اللَّهُ وَيَغْفِرْ لَكُمْ ذُنُوبَكُمْ \"Say: If you truly love Allāh, then follow me — Allāh will love you and forgive your sins.\" (Qurʾān 3:31)",
              "By studying the Sīrah, by coming to know the one whom Allāh commands us to follow, we are drawing closer to Allāh ﷻ Himself. This is ʿibādah of the highest order.",
              "Reason Seven: Developing a Muslim Identity",
              "We live in a world where a single global culture is being forcefully imposed upon every people on the face of the earth. Alexander Solzhenitsyn — the Russian historian and Nobel laureate — said: \"To destroy a people, you must first sever their roots.\"",
              "That is what is happening. And the only living ideology with deep enough roots to stand firm against this tide is Islam. Yet even within our own ummah, the damage has been done. There is a profound identity crisis eating away at our communities.",
              "We find our young people — practising Muslims, good people, people who pray — who know the name of every player in their favourite football squad. Who can describe the life story of a pop star in detail. But ask those same young people to name all the Prophets of Allāh ʿalayhim us-salām. Ask them to name the Companions of Rasulūllāh ﷺ. In many cases, they will not be able to answer. Our youth know more about pop stars than they know about the Ṣaḥābah. This is not their fault — it is ours. We have not given them their inheritance.",
              "The solution has two parts. First: we must develop a strong, living connection to Islamic history. We must know the lives of the Prophets. We must know the lives of the Ṣaḥābah. We must study the great scholars, the great civilisations, the great sacrifices that brought this religion to us. History is our umbilical cord. We are connected to a chain of believers that stretches back to the first man who ever worshipped Allāh ﷻ on this earth. Our roots go deep. We must not allow them to be severed.",
              "Second: our local identity — our nationality, our ethnicity, our passport — must never override our Muslim identity. We belong to something far larger than any country. We are part of the ummah of Rasulūllāh ﷺ.",
              "This Sīrah series — these lessons — are our answer to that crisis. Every time we sit together and study the life of Rasulūllāh ﷺ, we are reclaiming our identity. We are telling our children: you come from something great. You belong to someone extraordinary. You have a legacy — and it is your responsibility to know it, to honour it, and to pass it on."
            ]
          }
        ],
        reflection: "Carry this lesson into the home: knowledge is inherited when it is lived, spoken, protected, and passed on."
      },
      {
        kind: "reflection",
        questions: [
          "What does the word Sīrah mean, and why does it matter that we study it?",
          "Which of the seven reasons for studying Sīrah means the most to you personally — and why?",
          "How does the story of ʿAmr ibn al-ʿĀṣ change the way you think about love for Rasulūllāh ﷺ?",
          "In what ways do you see the identity crisis described in Reason Seven in your own community?",
          "How can your family use this Sīrah series to strengthen your Muslim identity?"
        ],
        actionPoint:
          "For the next 24 hours: make duʿāʾ to Allāh ﷻ to place deep, sincere, and growing love of Rasulūllāh ﷺ in your heart. Then share at least one thing from today's lesson with someone who was not present. A family member. A friend. A neighbour. The Prophet ﷺ told us that whoever guides another to good earns a reward equal to theirs — without any reduction."
      },
      {
        kind: "closing",
        paragraphs: [
          "We began today by asking a simple question: what is Sīrah? We end having discovered that it is not simply a biography. It is the history of our religion. It is the path to loving our Prophet ﷺ as he deserves to be loved. It is the key to understanding our Qurʾān. It is the methodology of our daʿwah. It is ʿibādah. And it is the cure for an identity crisis that is threatening to take our children away from who they truly are.",
          "May Allāh ﷻ make this knowledge a means of light, guidance, and barakah for us, our families, our children, and every generation that follows.",
          "May He grant us sincerity in our learning, strength in our practice, and a legacy of beneficial knowledge that continues to flow long after we have returned to Him.",
          "May Allāh ﷻ forgive our shortcomings, accept our efforts, and gather us — and our families — in Jannatul Firdaws."
        ],
        duaArabic: "وَصَلَّى اللهُ عَلَى نَبِيِّنَا مُحَمَّدٍ وَعَلَى آلِهِ وَصَحْبِهِ أَجْمَعِينَ",
        duaTranslation: "Āmīn.",
        nextLessonPreview: "The story of Rasūlullāh  ﷺ did not begin with his birth. It began thousands of years earlier — with a father and his infant son left alone in a barren valley, with a mother running between two hills in desperate search of water, and with a spring that Allāh  ﷻ caused to burst from dry earth. In our next lesson, we travel back to the very beginning: to Ibrāhīm ʿalayhi us-salām, to Hājar, and to the sacred valley that would one day be called Makkah.",
        discoveryNote: "✦ Go Deeper — Makkah al-Mukarramah is the city where this entire story begins. Open the Maps tab to see its geography, understand why Allāh ﷻ chose this valley, and trace the sacred ground at the heart of the Sīrah.",
      },
      {
        kind: "part-divider",
        title: "The Meccan Period",
        subtitle: "Part 1",
        description: [
          "Ibrāhīm عليه السلام, Hājar عليها السلام, and Ismāʿīl عليه السلام",
          "The origins of Makkah, Zamzam, Quraysh, Hāshim, ʿAbd al-Muṭṭalib, and ʿAbdullāh."
        ]
      },
      {
        kind: "segment",
        segmentNumber: 1,
        minutes: 10,
        chapterTitle: "Ibrāhīm Leaves His Family in the Valley",
        heading: "Virtue: Tawakkul — Complete Trust in Allāh",
        subLabel: "Virtue of Tawakkul",
        hadith: {
          type: "hadith",
          arabic:
            "لَوْ أَنَّكُمْ كُنْتُمْ تَوَكَّلُونَ عَلَى اللَّهِ حَقَّ تَوَكُّلِهِ لَرَزَقَكُمْ كَمَا يَرْزُقُ الطَّيْرَ تَغْدُو خِمَاصًا وَتَرُوحُ بِطَانًا",
          translation:
            "If you were to rely upon Allāh with true reliance, He would provide for you as He provides for the birds — they go out hungry in the morning and return full in the evening.",
          reference: "Sunan al-Tirmidhī, Hadīth 2344; classified ḥasan ṣaḥīḥ"
        },
        explanation: [
          "Tawakkul is not passivity. It is not sitting still and waiting. Hājar ʿalayhā us-salām is the living proof of this. She ran. She climbed. She searched with every fibre of her body. But in her heart — through every step of that exhausting search — she knew that Allāh was in control. That combination of action and complete inner trust is the highest form of tawakkul. And Allāh rewarded it with a miracle that still flows to this day."
        ],
        sections: [
          {
            heading: "Where the Story Begins",
            text: [
              "We talked about the importance of studying Sīrah. Now we begin the first session on the Sīrah itself.",
              "The scholars and historians who write about the life of Muḥammad ﷺ do not begin their accounts with his birth. They go back further — much further. Typically several thousand years further. They begin with his ancestor Ibrāhīm ʿalayhi us-salām.",
              "The emphasis in this lineage falls on the side of Hājar and Ismāʿīl, rather than Sārah and Isḥāq — because it is through Ismāʿīl that the chain of ancestry leads to Muḥammad ﷺ.",
              "So the scholars usually begin by speaking about Ibrāhīm ʿalayhi us-salām, Hājar, Sārah, and the journey into Ḥijāz."
            ]
          },
          {
            heading: "Ibrāhīm Leaves His Family in the Valley",
            text: [
              "Ibrāhīm ʿalayhi us-salām, by the command of Allāh ﷻ, travelled with his wife Hājar and his newborn son Ismāʿīl into the land of Ḥijāz — into Arabia. He brought them to the place we know today as Makkah. At the time, there was nothing there. No people, no cultivation, no shelter. It was a dead valley. And yet, the very ground on which the Kaʿbah stands was sacred from the moment the world was created. Whether it was Ibrāhīm ʿalayhi us-salām or Ādam ʿalayhi us-salām who first built upon it is a matter of scholarly difference — but the sanctity of the place itself was never in question.",
              "Ibrāhīm ʿalayhi us-salām left his wife and child in this barren valley with a small amount of water and a bag of dates. Then he turned and walked away.",
              "Hājar followed him. She said: \"Ibrāhīm, are you going to leave us in a place where there is no cultivation, no people, nothing?\" He did not answer. She asked again. No response. A third time — silence. And then she asked the question that changed everything:",
              "\"Allāhu amarak hādhā? Did Allāh command you to do this?\"",
              "Ibrāhīm ʿalayhi us-salām turned and said: \"Yes.\"",
              "Her reply was immediate: \"Then Allāh will not abandon us.\"",
              "If this is a command from Allāh, then she trusted that Allāh would take care of them. Allāh would not waste them. Allāh would not neglect them.",
              "In the middle of a dead valley, with a crying infant and a bag of dates between her and starvation — she said: Allāh will not abandon us.",
              "This is not mere acceptance. This is a declaration of faith so profound, so unshakeable, that it became woven into the rituals of Ḥajj for every Muslim until the Day of Judgement. Every pilgrim who walks between Ṣafā and Marwah is following in her footsteps."
            ]
          },
          {
            heading: "The Duʿāʾ of Ibrāhīm ʿalayhi us-salām",
            text: [
              "When Ibrāhīm ʿalayhi us-salām reached the place where they could no longer see him, he stopped. He turned to face the sacred ground — the place where the House of Allāh would stand — and he raised his hands and made duʿāʾ:"
            ]
          },
          {
            sacredText: {
              type: "ayah",
              arabic:
                "رَّبَّنَا إِنِّي أَسْكَنتُ مِن ذُرِّيَّتِي بِوَادٍ غَيْرِ ذِي زَرْعٍ عِندَ بَيْتِكَ الْمُحَرَّمِ رَبَّنَا لِيُقِيمُوا الصَّلَاةَ فَاجْعَلْ أَفْئِدَةً مِّنَ النَّاسِ تَهْوِي إِلَيْهِمْ وَارْزُقْهُم مِّنَ الثَّمَرَاتِ لَعَلَّهُمْ يَشْكُرُونَ",
              translation:
                "Our Lord, I have settled some of my descendants in a valley with no cultivation, near Your sacred House — Our Lord, so that they may establish prayer. So make hearts among the people incline towards them, and provide them with fruits, that they may be grateful.",
              reference: "Qurʾān 14:37"
            }
          },
          {
            text: [
              "Notice the order of this duʿāʾ. He did not ask for food first — though his family was starving. He asked first for ṣalāh — the spiritual need. Then for community — the social need. Then for provision — the physical need. And even when he asked for fruit, he connected it to gratitude: so that they may be grateful.",
              "The Maslow hierarchy of needs places physiological needs at the base of the pyramid: food, water, shelter, and physical survival. Then come social needs, then spiritual needs, and finally self-actualization at the peak.",
              "According to Ibrāhīm ʿalayhi us-salām, the pyramid is inverted. The first thing he asked for was not food, drink, or shelter. The first thing he asked for was: Rabbana li yuqīmū ṣ-ṣalāh — O our Lord, so that they may establish prayer.",
              "Then he asked Allāh to place love for his family in the hearts of people: wajʿal afʾidatan mina n-nāsi tahwī ilayhim. He asked for people to be drawn to them, to love them, and to form a community around them.",
              "Only after that did he ask for provision: warzuqhum mina th-thamarāt — provide them with fruits. Even then, he connected worldly provision to worship: laʿallahum yashkurūn — so that they may be grateful.",
              "Ibrāhīm ʿalayhi us-salām understood something that much of the modern world has forgotten: that the spiritual need is the foundation, not the luxury. True self-actualization is when Allāh becomes everything for you: when eating, drinking, sleeping, and living are all done for Allāh. That is the true tranquillity achieved by the Anbiyāʾ of Allāh and the awliyāʾ of Allāh."
            ]
          }
        ],
        reflection:
          "In our next session, we will witness how Allāh answered that duʿāʾ — and how a woman's desperate search became one of the greatest acts of worship in Islam."
      },
      {
        kind: "segment",
        segmentNumber: 2,
        minutes: 10,
        chapterTitle: "The Miracle of Zamzam",
        heading: "Virtue: Ṣabr — Patient Perseverance",
        subLabel: "Virtue of Ṣabr",
        hadith: {
          type: "hadith",
          arabic:
            "مَا يُصِيبُ الْمُسْلِمَ مِنْ نَصَبٍ وَلَا وَصَبٍ وَلَا هَمٍّ وَلَا حُزْنٍ وَلَا أَذًى وَلَا غَمٍّ حَتَّى الشَّوْكَةِ يُشَاكُهَا إِلَّا كَفَّرَ اللَّهُ بِهَا مِنْ خَطَايَاهُ",
          translation:
            "No fatigue, illness, anxiety, sorrow, harm, or grief befalls a Muslim — not even a thorn that pricks him — except that Allāh expiates some of his sins through it.",
          reference: "Ṣaḥīḥ al-Bukhārī, Hadīth 5641; Ṣaḥīḥ Muslim, Hadīth 2573"
        },
        explanation: [
          "The trials of this world are not punishment. They are purification. They are the hand of Allāh ﷻ reaching into a person's life not to break them, but to build them into something greater. Every Muslim who has ever walked between Ṣafā and Marwah has walked in memory of a woman who understood this — not after the trial was over, but while it was happening, step by painful step."
        ],
        sections: [
          {
            heading: "The Miracle of Zamzam",
            text: [
              "Hājar ʿalayhā us-salām had the water Ibrāhīm left with her. But it ran out. She was nursing Ismāʿīl, and her milk was drying up because she herself was thirsty and hungry. Her infant son was beginning to cry from hunger.",
              "Unable to bear watching her son suffer before her eyes, she made a decision. She left him and climbed the nearest hill — the hill later named Ṣafā. She reached the top and looked in every direction. Nothing. She came back down, and when she reached the valley floor, she gathered her garments and ran — with the urgency of a mother whose child is dying. She climbed the second hill, later named Marwah. She looked again. Nothing.",
              "She did this seven times.",
              "Seven times she climbed. Seven times she reached the top with hope. Seven times she descended with nothing in sight. And yet she did not stop.",
              "The seventh time she reached the top — she heard something. A sound. She looked in every direction, searching for its source, and then she saw it: the sound was coming from beneath the feet of her infant son. Jibrīl ʿalayhi us-salām had descended and was digging the well of Zamzam, and water was bursting from the earth beneath Ismāʿīl's feet.",
              "Hājar rushed to the water. And because the desert sand was dry and would absorb everything, she began to build a small pool around the spring to contain it.",
              "Rasulūllāh ﷺ, when he narrated this story, smiled and said:",
              "\"May Allāh have mercy on the mother of Ismāʿīl. If she had left the water to flow without interfering, it would have become a flowing river. But she contained it — and so it became a well.\""
            ]
          },
          {
            sacredText: {
              type: "hadith",
              arabic: "رَحِمَ اللَّهُ أُمَّ إِسْمَاعِيلَ لَوْ تَرَكَتْهَا لَكَانَتْ زَمْزَمُ عَيْنًا تَجْرِي",
              translation:
                "May Allāh have mercy on the mother of Ismāʿīl. If she had left it, Zamzam would have been a flowing spring.",
              reference: "Meaning narrated in the story of Hājar and Zamzam"
            }
          },
          {
            heading: "What Hājar Did Not Know",
            text: [
              "Think for a moment about what Hājar was feeling as she ran between those two hills. Her heart must have been breaking. She was in the middle of nowhere, her son was dying, and she was alone. She did not know — she could not have known — what Allāh was hiding for her in what lay ahead.",
              "Rasulūllāh ﷺ himself said: \"That is why we go between Ṣafā and Marwah.\" We are following the footsteps of Hājar ʿalayhā us-salām. Millions of pilgrims, from every corner of the earth, have walked that same path — not in memory of kings or emperors, but in honour of a woman who ran alone in a desert because she trusted Allāh.",
              "If Hājar could be brought back to witness a season of Ḥajj — millions of people dressed in white, walking where she walked, in obedience to Allāh — she would have run between those hills with a smile on her face.",
              "And this is a lesson for every believer in every age. When you are going through a trial, you cannot see what Allāh is building for you on the other side. Mūsā ʿalayhi us-salām was lost in a desert on a cold night, looking for a fire to bring light and warmth to his family — and he walked into the announcement of his prophethood. He went looking for light for a dark night; Allāh gave him light for all of humanity. He went looking for directions to Egypt; Allāh gave him guidance to Jannah.",
              "Mūsā ʿalayhi us-salām saw a fire in the distance and told his family that he would go to it so that he could bring them light and guidance. He wanted light because it was a dark night, warmth because it was cold, and directions because he was lost.",
              "But Allāh was hiding something better for him. When Mūsā ʿalayhi us-salām reached that place, Allāh spoke to him. Instead of returning with light for one dark night and directions to Egypt, he returned with light for humanity and guidance to Jannah.",
              "Allāh said to him: I am Allāh, there is no god besides Me. Faʿbudnī wa aqimi ṣ-ṣalāta li dhikrī — worship Me and establish prayer for My remembrance.",
              "Mūsā ʿalayhi us-salām wanted something, but he received something far greater. The Ṣaḥābah raḍiyallāhu ʿanhum went through difficulties, but Allāh reserved for them the highest levels of Jannah. So when we go through moments of difficulty, we should remember that Allāh may be hiding something for us beyond what we can currently see.",
              "Allāh does not waste the suffering of those who trust in Him."
            ]
          }
        ],
        reflection:
          "Reflect on the trials in your own life. What might Allāh be preparing beyond what you can currently see?"
      },
      {
        kind: "segment",
        segmentNumber: 3,
        minutes: 10,
        chapterTitle: "The Tribe of Jurhum and the Building of Makkah",
        heading: "Virtue: Ikhlāṣ and Niyyah — Sincerity and Intention",
        subLabel: "Virtue of Ikhlāṣ",
        hadith: {
          type: "hadith",
          arabic: "إِنَّمَا الْأَعْمَالُ بِالنِّيَّاتِ وَإِنَّمَا لِكُلِّ امْرِئٍ مَا نَوَى",
          translation: "Actions are judged by their intentions, and every person will have what they intended.",
          reference: "Ṣaḥīḥ al-Bukhārī, Hadīth 1; Ṣaḥīḥ Muslim, Hadīth 1907"
        },
        explanation: [
          "The story of how Makkah was built — from an empty valley to the holiest city on earth — began with a single intention: to obey Allāh. Ibrāhīm ʿalayhi us-salām left his family there not because it made sense, but because Allāh commanded it. Hājar ran between the hills not to be preserved in history, but because she was a mother doing what a mother does. Their sincerity was the seed of an entire civilisation."
        ],
        sections: [
          {
            heading: "The Tribe of Jurhum and the Building of Makkah",
            text: [
              "Whenever a source of water appears in a desert, life follows. Birds began to circle over the place where Zamzam had appeared — and birds mean water, and water means life. A nomadic tribe called Jurhum, who were moving through that part of Ḥijāz, noticed these birds and sent scouts to investigate. The scouts returned with remarkable news: there was a well in that empty valley.",
              "Jurhum were a tribe that had originally come from Yemen. Yemen was the birthplace of the Arab people and the Arabic language, and it was the land from which many Arab tribes migrated in different waves over time.",
              "One of the great waves of migration happened when the dam of Sabaʾ was destroyed. The Qurʾān contains an entire sūrah named Sabaʾ, and Allāh tells us of a people who built one of the earliest great dams in the world. Because of that dam, they had a year-round source of water even though rainfall in Arabia was low.",
              "They developed a massive irrigation network that stretched for long distances. A semi-arid land was able to hold a large population because water was available. Some reports mention that a person could walk with a basket and return with it filled by fruits falling from the trees. Whether some details are exaggerated or not, the Qurʾān tells us they had wealth, cultivation, and ease of travel.",
              "Because of their wealth and cultivation, they did not feel the normal pain of travel. Their route was filled with villages and towns. But when they became arrogant and rejected the message of Allāh, they asked for the hardship of travel to be made like everyone else. Allāh destroyed the dam, the area flooded, and their agriculture collapsed.",
              "After that, their people spread out from Yemen into Najd, Ḥijāz, Iraq, and Shām. Some settled in Oman, some in Najd, some in Ḥijāz, Aws and Khazraj settled in Madīnah, and other Arab tribes moved into Syria and Iraq. This is how the Arab people spread out from their earlier locality in Yemen.",
              "Jurhum was one of the tribes that ended up moving out of Yemen and into Ḥijāz. Allāhu aʿlam whether their migration was before or after the destruction of the dam, but they were from those Arab tribes that came into the region.",
              "Knowing there was no water in that valley, they were astonished by what their scouts reported. They went to the valley — and they found Hājar.",
              "What followed is remarkable. These were warriors — a tribe of men with numbers, strength, and weapons. The woman they encountered was alone with her infant. Yet they did not simply move in. They approached her and asked: \"May we settle here?\"",
              "Hājar did not say yes immediately. She bargained. \"You may settle here — on one condition: the water belongs to me.\"",
              "They agreed. And Rasulūllāh ﷺ, when narrating this, smiled and said that deep in her heart she had wanted them to stay from the beginning — she wanted the company. But she negotiated to get a better arrangement. And she did.",
              "This valley, which had been empty and lifeless, gradually became a settlement. That settlement would one day become Makkah."
            ]
          },
          {
            heading: "Ismāʿīl Grows Up",
            text: [
              "Ismāʿīl ʿalayhi us-salām grew up among the tribe of Jurhum. He learned their language — Arabic — even though his father Ibrāhīm ʿalayhi us-salām was from Iraq and spoke Aramaic. Ismāʿīl married a woman from among them, and through this marriage, the Arabic lineage of Rasulūllāh ﷺ was established in Makkah.",
              "Jurhum held the political leadership of Makkah, while the religious guardianship of the Kaʿbah — once Ibrāhīm and Ismāʿīl had built it — remained with the descendants of Ismāʿīl.",
              "Jurhum remained in Makkah for approximately two thousand years. Over time, they became corrupt and tyrannical. Allāh sent another tribe against them — Khuzāʿah, also originally from Yemen. Khuzāʿah defeated Jurhum and drove them out. Before they left, Jurhum did two things: they filled in the well of Zamzam and erased its location, and they took the treasures that had been stored within the Kaʿbah.",
              "Khuzāʿah became the new rulers of Makkah. But the descendants of Ismāʿīl had by now multiplied and spread all across Arabia — except for one branch that remained in Makkah. That branch was called Quraysh.",
              "Quraysh was one of many tribes descended from Ismāʿīl ʿalayhi us-salām. They are from the descendants of ʿAdnān. They remained in Makkah, but Makkah was ruled by Khuzāʿah."
            ]
          },
          {
            heading: "Quṣayy ibn Kilāb",
            text: [
              "One of the leaders of Khuzāʿah was ʿAmr ibn Luḥayy al-Khuzāʿī. His story belongs to the religious background of Arabia, but here the focus remains on the lineage of Rasulūllāh ﷺ.",
              "The head of Quraysh, a man named Quṣayy ibn Kilāb, was eventually able to unite his people and lead them in a revolt against Khuzāʿah, driving them out of Makkah entirely. For the first time in many generations, a direct descendant of Ismāʿīl ʿalayhi us-salām held both the political and religious leadership of Makkah simultaneously.",
              "Quṣayy ibn Kilāb consolidated all the authorities of Makkah in his own hands:",
              "Al-Ḥijābah — the guardianship and custodianship of the Kaʿbah",
              "Al-Siqāyah and Al-Rifādah — the provision of water and food to the pilgrims coming to Ḥajj. To us this may not seem like a great political office, but to them it was an immense honour: to provide for the guests of Allāh.",
              "Al-Nadwah — the great council and assembly of Quraysh, their parliament",
              "Al-Liwāʾ — the banner of war; the authority to declare and lead military campaigns",
              "To hold all of these simultaneously was to be the absolute ruler of Makkah in every dimension: religious, social, political, and military. Quṣayy ibn Kilāb was that man. And he was an ancestor of Rasulūllāh ﷺ.",
              "When Quṣayy ibn Kilāb died, these authorities were split among his children. Some went to ʿAbd Manāf and some to his brothers, and the responsibilities continued to pass down through Quraysh."
            ]
          }
        ],
        reflection:
          "In our final session, we will arrive at the great-grandfather of Rasulūllāh ﷺ — a man remembered not for conquest, but for crushing bread."
      },
      {
        kind: "segment",
        segmentNumber: 4,
        minutes: 10,
        chapterTitle: "Hāshim — The Great-Grandfather of Rasulūllāh ﷺ",
        heading: "Virtue: Ḥajj and ʿUmrah — The Pilgrimage",
        subLabel: "Virtue of Ḥajj",
        hadith: {
          type: "hadith",
          arabic: "مَنْ حَجَّ لِلَّهِ فَلَمْ يَرْفُثْ وَلَمْ يَفْسُقْ رَجَعَ كَيَوْمِ وَلَدَتْهُ أُمُّهُ",
          translation:
            "Whoever performs Ḥajj for the sake of Allāh, and does not commit any obscenity or sin, will return as on the day his mother gave birth to him.",
          reference: "Ṣaḥīḥ al-Bukhārī, Hadīth 1521; Ṣaḥīḥ Muslim, Hadīth 1350"
        },
        explanation: [
          "Every ritual of Ḥajj carries within it the memory of a family: Ibrāhīm, Hājar, and Ismāʿīl ʿalayhim us-salām. The running between Ṣafā and Marwah, the well of Zamzam, the standing at ʿArafāt — each one is a living echo of their story. When you perform Ḥajj, you are not merely completing a ritual — you are stepping into a story that began thousands of years ago, in obedience to the same Allāh you are calling upon today."
        ],
        sections: [
          {
            heading: "Hāshim — The Great-Grandfather of Rasulūllāh ﷺ",
            text: [
              "When Quṣayy ibn Kilāb died, the various authorities of Makkah were distributed among his children. Over the generations that followed, these responsibilities passed down through the family of Quraysh.",
              "Eventually, the responsibility of providing food and drink to the pilgrims during Ḥajj — al-Siqāyah and al-Rifādah — came to a man named ʿAmr, the grandson of Quṣayy ibn Kilāb. This was considered one of the greatest honours in all of Arabia: to be the host of those who came to worship Allāh, to feed and provide for the guests of the sacred House.",
              "ʿAmr was a generous man. He took this responsibility seriously. The standard way to feed the vast numbers of pilgrims was to prepare large pots of broth and meat soup — an efficient way to serve many people. But ʿAmr went further. He introduced a new practice: he would take bread and crumble it, crushing it into the soup, so that the pilgrims received a fuller, more nourishing meal — not just broth, but a proper dish of bread soaked in broth.",
              "In Arabic, the act of crushing or crumbling bread is called hashm. And so the people began calling ʿAmr by a nickname: Hāshim.",
              "The real name was ʿAmr. But the name that history would remember him by — the name that would echo through the lineage of the greatest human being who ever lived — was Hāshim. Given to him for the simple act of crushing bread to feed the hungry.",
              "Hāshim later married a woman from Madīnah — from the tribe of Banū al-Najjār — and then travelled to Palestine for trade. He passed away in Gaza, and was buried there. His wife was pregnant at the time of his death.",
              "She gave birth to a boy. The boy was born with grey hair at his temples — unusual for a newborn. And so they named him Shayba, meaning \"old man.\"",
              "Because his father had passed away, his mother stayed with her family in Madīnah. Shayba was brought up there among his mother's relatives."
            ]
          },
          {
            heading: "Shayba Becomes ʿAbd al-Muṭṭalib",
            text: [
              "One day a man came into Madīnah. His name was al-Muṭṭalib, and he was the brother of Hāshim. He came to claim his nephew, because Hāshim's son Shayba was living in Madīnah.",
              "Al-Muṭṭalib told the family that Shayba belonged to the most noble family in Quraysh, and that he needed to return to Makkah to learn about his heritage, his family, and the responsibilities that awaited him there.",
              "The mother's family initially refused to give him up, but al-Muṭṭalib eventually convinced them. They agreed, and he took the young boy with him to Makkah.",
              "No one in Makkah had seen this child before. In those days slavery was widespread, and when a man entered Makkah with a young boy people often assumed the boy was a slave he had purchased.",
              "So when al-Muṭṭalib entered Makkah with Shayba, the people assumed the boy was his slave. They began calling him ʿAbd al-Muṭṭalib — the slave of al-Muṭṭalib.",
              "His real name was Shayba, but history would remember him as ʿAbd al-Muṭṭalib. This was the grandfather of Rasulūllāh ﷺ."
            ]
          },
          {
            heading: "The Rediscovery of Zamzam",
            text: [
              "By the time of ʿAbd al-Muṭṭalib, the well of Zamzam had been lost for over three hundred years. Jurhum had filled it in and erased its marks before leaving Makkah. Khuzāʿah then ruled Makkah for centuries, and after them came the generations from Quṣayy ibn Kilāb down to ʿAbd al-Muṭṭalib.",
              "ʿAbd al-Muṭṭalib saw a dream. Someone came to him and said: \"Dig Ṭaybah.\" Ṭaybah means pure. In the dream, ʿAbd al-Muṭṭalib asked: \"What is Ṭaybah?\" But he heard no answer.",
              "The following night, the same voice came to him and said: \"Dig the precious.\" ʿAbd al-Muṭṭalib asked: \"What is the precious?\" Again, he heard no answer.",
              "The third night, the voice came to him and said: \"Dig Zamzam.\" ʿAbd al-Muṭṭalib asked: \"What is Zamzam?\" The voice told him that Zamzam never runs out of water, and that it would provide for the great pilgrimage every year.",
              "Then the dream gave him signs: between dung and blood, the crow with the white leg, and the nest of ants.",
              "The next day, while ʿAbd al-Muṭṭalib was going around the Kaʿbah, he saw dung and blood from a camel that had been slaughtered. He saw a crow with a white leg in the same area, and he saw a colony of ants.",
              "ʿAbd al-Muṭṭalib realized that this was the place of the well of his grandfather. He called his son al-Ḥārith, and they began digging next to the Kaʿbah.",
              "The people of Quraysh became angry and protested. They asked what he was doing, digging beside the Kaʿbah. ʿAbd al-Muṭṭalib continued digging with his son. At that time, he had only one son to stand with him.",
              "They kept digging until suddenly ʿAbd al-Muṭṭalib shouted in praise of Allāh. The people rushed forward and saw that he had uncovered the rim of the well of Zamzam.",
              "The leaders of Quraysh then said: \"This is the well of our grandfather Ismāʿīl. It belongs to all of us.\" ʿAbd al-Muṭṭalib said that he was the one who saw the dream, he was the one who uncovered it, and it belonged to him alone.",
              "They insisted that because they were all descendants of Ismāʿīl ʿalayhi us-salām, the well belonged to all of them. The dispute grew until they were close to war."
            ]
          },
          {
            heading: "The Journey to the Judge",
            text: [
              "Someone suggested that they settle the dispute by going to the woman of Banū Saʿd who was known for claiming connection with unseen spirits. They travelled to consult her, but were told that she had relocated to Syria. They decided to follow her wherever she had gone.",
              "On the journey, they ran out of water in the middle of the desert. ʿAbd al-Muṭṭalib told them that if they were going to die there, they should at least dig their graves. Then, when one of them died, the others could bury him, so that only the final person would remain uncovered.",
              "They dug their graves and lay inside them waiting for death. Then ʿAbd al-Muṭṭalib said: \"This is not right for men like us, to sit here waiting for death. Let us do something. Let us go and search for water.\"",
              "They went in different directions searching for water. After a short while, ʿAbd al-Muṭṭalib found water.",
              "The people came to him and said that if Allāh had saved him in the desert, provided him with water, and shown him the dream by which Zamzam was uncovered, then this was surely an indication that the well belonged to him. They gave up their claim and returned to Makkah."
            ]
          },
          {
            heading: "The Pledge of ʿAbd al-Muṭṭalib",
            text: [
              "When the people pressured ʿAbd al-Muṭṭalib over Zamzam, he felt weak because he had only one son to defend him. In tribal society, strength was measured by how many men stood with you: sons, brothers, uncles, and relatives.",
              "ʿAbd al-Muṭṭalib said: \"O Allāh, if You bestow me with ten sons, I will sacrifice one of them for Your sake.\"",
              "Allāh blessed him with ten male sons and six daughters. When he had ten sons, it was time to fulfil his pledge.",
              "They had arrows beside Hubal, one of their large idols, and they used these arrows to cast lots. ʿAbd al-Muṭṭalib placed the names of his ten sons on the arrows. The lot fell on ʿAbdullāh. He cast again, and it fell on ʿAbdullāh. A third time, it again fell on ʿAbdullāh.",
              "ʿAbd al-Muṭṭalib took his son ʿAbdullāh beside the Kaʿbah and prepared to slaughter him. Abū Ṭālib, one of his older sons, objected. The maternal relatives of ʿAbdullāh objected. The people came and told him that if he did this, it would become a practice among the Arabs after him.",
              "They said that if he slaughtered his son, then every man after him who had ten sons might do the same. They were already killing their daughters; now they feared that people would begin killing their sons as well.",
              "ʿAbd al-Muṭṭalib said that this was a pledge he had made to Allāh, and he could not break his promise."
            ]
          },
          {
            heading: "The Ransom of ʿAbdullāh",
            text: [
              "They went again to consult the woman who claimed to speak with spirits. She told them to return the next day so that she could consult during the night.",
              "The next day she asked them: \"What is the blood money paid for a person who is killed?\" They said: \"Ten camels.\" She told them to place ten camels on one side and ʿAbdullāh on the other, then cast lots. If it pointed to the camels, they should slaughter the camels. If it pointed to ʿAbdullāh, they should add another ten camels.",
              "They returned and gathered. ʿAbdullāh was placed on one side and the camels on the other. They cast lots. It pointed to ʿAbdullāh. They added ten camels. It pointed to ʿAbdullāh again.",
              "They continued: thirty, forty, fifty, sixty, and onward. Each time it pointed to ʿAbdullāh, until the number reached one hundred camels.",
              "Finally, the lot pointed to the camels. Quraysh said that his son could now be released. But ʿAbd al-Muṭṭalib said: \"Not yet.\" He cast lots a second time and a third time, and it consistently pointed to the camels.",
              "So ʿAbd al-Muṭṭalib slaughtered the one hundred camels, and he paid for all of them. He was a generous man and refused to take any of the meat for himself. There was so much meat that after the people had taken from it, there was still enough to feed the birds and the beasts.",
              "It became famous among the Arabs that ʿAbd al-Muṭṭalib fed the humans and the animals, even the birds in the sky.",
              "The people of Quraysh were right when they warned him that if he killed his son it would become a tradition. When he sacrificed one hundred camels to save his son, the blood money among them changed from ten camels to one hundred. Islam preserved this amount in the law of diyah.",
              "This is the story of ʿAbdullāh. ʿAbdullāh married Āminah bint Wahb, and they became the parents of Rasulūllāh ﷺ.",
              "Later, it would be said to Muḥammad ﷺ: you are the son of the two sacrificed ones. The two sacrificed ones were Ismāʿīl ʿalayhi us-salām and ʿAbdullāh."
            ]
          }
        ],
        reflection:
          "We have now reached the parents of Rasulūllāh ﷺ: ʿAbdullāh and Āminah. The ancestry of Rasulūllāh ﷺ has carried us from Ibrāhīm and Ismāʿīl to Quṣayy, Hāshim, ʿAbd al-Muṭṭalib, and finally to ʿAbdullāh."
      },
      {
        kind: "reflection",
        questions: [
          "Hājar said \"Allāh will not abandon us\" before the miracle happened, not after. What does this tell us about the nature of tawakkul?",
          "Ibrāhīm ʿalayhi us-salām asked for ṣalāh before food in his duʿāʾ. How does this challenge the way we prioritise our own needs and requests to Allāh?",
          "The story of Mūsā going to the fire — he wanted light and warmth, but Allāh gave him prophethood. Can you think of a time when what you needed was less than what Allāh gave you?",
          "What does the migration of Jurhum and the history of Yemen teach us about how Allāh moves people and events to prepare for something greater?",
          "Hāshim is remembered for crushing bread to feed pilgrims. What small, sincere act of service are you doing that Allāh might preserve far beyond your lifetime?",
          "What lessons do you take from ʿAbd al-Muṭṭalib's rediscovery of Zamzam and the ransom of ʿAbdullāh?"
        ],
        actionPoint:
          "The next time you drink water, pause for a moment. Think of Hājar running between two hills in a desert, of Zamzam being uncovered again after centuries, and of the way Allāh preserves what He wills. Then say: اللَّهُمَّ بَارِكْ لَنَا فِيهِ وَزِدْنَا مِنْهُ \"O Allāh, bless it for us and give us more of it.\" Share one lesson from today's reading with your family."
      },
      {
        kind: "closing",
        paragraphs: [
          "We began today thousands of years before the birth of Muḥammad ﷺ — because his story did not begin with him. It began with Ibrāhīm ʿalayhi us-salām, Hājar, and Ismāʿīl in a barren valley.",
          "It continued through the miracle of Zamzam, the arrival of Jurhum, the growth of Makkah, the authority of Quraysh, the generosity of Hāshim, and the rediscovery of Zamzam by ʿAbd al-Muṭṭalib.",
          "We reached ʿAbdullāh and Āminah, the parents of Rasulūllāh ﷺ, and remembered that he is the son of the two sacrificed ones: Ismāʿīl ʿalayhi us-salām and ʿAbdullāh.",
          "The lineage of Rasulūllāh ﷺ is not an accident of history. It was chosen, prepared, and preserved by Allāh ﷻ through obedience, migration, trial, sacrifice, and divine protection.",
          "May Allāh ﷻ make us people of tawakkul, ṣabr, ikhlāṣ, service, gratitude, and love for Rasulūllāh ﷺ. May He allow us to understand the Sīrah deeply and pass this legacy to those who come after us."
        ],
        duaArabic: "وَصَلَّى اللهُ عَلَى نَبِيِّنَا مُحَمَّدٍ وَعَلَى آلِهِ وَصَحْبِهِ أَجْمَعِينَ",
        duaTranslation: "Āmīn.",
        nextLessonPreview: "The lineage was set. ʿAbdullāh and Āminah were married, and the world was being prepared. Allāh  ﷻ was about to give a sign — not through the sky, not through the earth, but through birds. Small birds with small stones, sent against an army of war elephants that had come to destroy the Kaʿbah. In our next lesson, we stand in Makkah in the Year of the Elephant and witness the miracle that announced to all of Arabia that something extraordinary was about to happen.",
        discoveryNote: "✦ Go Deeper — Every name in this lesson — Ibrāhīm, Ismāʿīl, Zamzam, Quraysh — connects to one place. Open the Maps tab to explore Makkah al-Mukarramah: the city Allāh ﷻ appointed as the centre of His final message to humanity.",
      }
,
      {
        kind: "part-divider",
        title: "The Year of the Elephant",
        subtitle: "Part 3",
        description: [
          "The year the world was made ready.",
          "The miracle that announced the coming of the final Messenger ﷺ."
        ]
      },
      {
        kind: "segment",
        segmentNumber: 1,
        minutes: 10,
        chapterTitle: "The Man Who Wanted to Destroy the Kaʿbah",
        heading: "Virtue: Tawakkul — Trusting Allāh When You Cannot Fight",
        subLabel: "When Human Power Meets Divine Protection",
        hadith: {
          type: "ayah",
          arabic: "أَلَمْ تَرَ كَيْفَ فَعَلَ رَبُّكَ بِأَصْحَابِ الْفِيلِ",
          translation: "Have you not seen what your Lord did to the People of the Elephant?",
          reference: "Qurʾān 105:1"
        },
        explanation: [
          "Before the greatest birth in human history, Allāh ﷻ arranged a sign. A sign so dramatic that the Arabs named an entire year after it. They called it ʿĀm al-Fīl — the Year of the Elephant. It was in that very year that Rasūlullāh ﷺ was born."
        ],
        sections: [
          {
            heading: "The World That Was Waiting",
            text: [
              "By the time ʿAbdullāh and Āminah were married, Makkah was already one of the most important cities in Arabia. Its importance did not come from its size or wealth alone — it came from something far older. At the centre of Makkah stood the Kaʿbah — the House of Allāh — the structure that Ibrāhīm ʿalayhi us-salām had built by divine command, in the same valley where Zamzam had gushed from the earth.",
              "The Arabs came to Makkah from every corner of the peninsula. Whatever their beliefs — and many had drifted far from the pure faith of Ibrāhīm — they still held the Kaʿbah with a respect that went beyond ordinary things. It was as though something in the human soul recognised the sanctity of the place, even when the mind had forgotten why.",
              "Quraysh — the tribe of ʿAbdullāh and Āminah — were the custodians of this House. This was their honour, their responsibility, and their identity. And this is the setting into which Rasūlullāh ﷺ was about to be born. But first, someone tried to destroy it all."
            ]
          },
          {
            heading: "The Man Who Came From the South",
            text: [
              "Far to the south, across the sea, the land of Yemen was under the rule of a powerful governor named Abraha. He was a man of great ambition and enormous military strength. He had built, in the city of Sanʿāʾ, a magnificent church — a structure of breathtaking beauty, decorated with gold and precious materials, designed to be the most impressive religious building the world had ever seen.",
              "His purpose was clear: he wanted the Arabs to stop travelling north to Makkah and to come south to his church instead. He wanted to redirect the flow of pilgrims — and with them, the flow of prestige and wealth — away from the Kaʿbah and toward his own monument.",
              "It did not work. The Arabs were not interested.",
              "When a man from one of the Arab tribes desecrated Abraha's church in protest, his frustration turned to fury. He made a decision he believed would solve the problem permanently: he would march to Makkah and destroy the Kaʿbah itself. He assembled a vast army. At the front of his forces, he placed war elephants — great, towering creatures that no ordinary army could stand against. His lead elephant was called Maḥmūd. The army moved north toward Makkah, and no one could stop them."
            ]
          }
        ],
        reflection: "Abraha came with overwhelming power — and was stopped by birds. The greatest threat does not always require the greatest army. Sometimes Allāh  ﷻ answers with what we would never have imagined."
      },
      {
        kind: "segment",
        segmentNumber: 2,
        minutes: 10,
        chapterTitle: "The House Has a Lord Who Will Protect It",
        heading: "Virtue: Yaqīn — Certainty in Allāh Without Seeing the Answer",
        subLabel: "ʿAbd al-Muṭṭalib Before Abraha",
        hadith: {
          type: "ayah",
          arabic: "وَمَن يَتَوَكَّلْ عَلَى اللَّهِ فَهُوَ حَسْبُهُ",
          translation: "And whoever places his trust in Allāh — He is sufficient for him.",
          reference: "Sūrah al-Ṭalāq, 65:3"
        },
        explanation: [
          "ʿAbd al-Muṭṭalib did not argue for the Kaʿbah. He did not plead. He simply stated a fact: the House belongs to Allāh  ﷻ, and Allāh  ﷻ will defend it. This is what yaqīn — certainty — looks like in practice. Not the absence of fear, but the presence of complete reliance on the One who holds all things."
        ],
        sections: [
          {
            heading: "The Meeting",
            text: [
              "ʿAbd al-Muṭṭalib — the grandfather of the Prophet ﷺ, the most respected man in Makkah — was the one who went out to meet Abraha.",
              "Before the army arrived, Abraha's troops had swept through the surrounding area and taken camels. Among those taken were two hundred that belonged to ʿAbd al-Muṭṭalib himself. Word came: Abraha would see him.",
              "When ʿAbd al-Muṭṭalib was brought before the commander, Abraha looked at him with a mixture of respect and surprise. ʿAbd al-Muṭṭalib was a man of remarkable dignity — tall, eloquent, deeply composed. Abraha had him seated beside him as an equal.",
              "Abraha expected him to plead for the Kaʿbah. He had prepared his response for that conversation.",
              "ʿAbd al-Muṭṭalib said nothing of the sort. He spoke only about his camels. He asked Abraha to return the two hundred camels that his soldiers had taken."
            ]
          },
          {
            heading: "The Answer That Changed Everything",
            text: [
              "Abraha was stunned. He said: “I looked at you and I respected you. But now you have spoken, and I think less of you. You come to speak to me about camels, while I have come to destroy the house that is the religion of your fathers?”",
              "ʿAbd al-Muṭṭalib replied with words that have echoed through history: “I am the lord of the camels. The House has a Lord who will protect it.”",
              "That was the entire argument. He would not plead for the Kaʿbah. It was not his place. The House belonged to Allāh ﷻ. Let Allāh ﷻ defend His own House. ʿAbd al-Muṭṭalib's job was to ask for what was his.",
              "Abraha returned the camels."
            ]
          },
          {
            heading: "The Evacuation",
            text: [
              "ʿAbd al-Muṭṭalib returned to Makkah. He went to the Kaʿbah, took hold of the ring of its door, and called upon Allāh ﷻ to protect His House. Then he gave the order: the people of Makkah were to leave. They would go to the mountains surrounding the city and watch from there. No one was to stay and fight. This was not a battle that human hands could win.",
              "Makkah was emptied. The people waited in the hills. Abraha's army began its final advance toward the city."
            ]
          }
        ],
        reflection: "ʿAbd al-Muṭṭalib did not stay to fight what he could not fight. He evacuated, he made duʿāʾ, and he left the outcome to Allāh ﷻ. Sometimes the most powerful thing we can do is step back and trust."
      },
      {
        kind: "segment",
        segmentNumber: 3,
        minutes: 10,
        chapterTitle: "The Morning of the Birds",
        heading: "The Miracle of Sūrah al-Fīl",
        subLabel: "When Allāh Defends His Own House",
        hadith: {
          type: "ayah",
          arabic: "فَجَعَلَهُمْ كَعَصْفٍ مَّأْكُولٍ",
          translation: "And He made them like eaten straw.",
          reference: "Qurʾān 105:5"
        },
        explanation: [
          "The elephant stopped. The birds came. And the greatest army Arabia had ever seen was left in ruin — not by soldiers, not by weapons, but by the smallest creatures Allāh chose to send. This is what it looks like when Allāh defends what He has chosen."
        ],
        sections: [
          {
            heading: "The Elephant That Would Not Move",
            text: [
              "The lead elephant, Maḥmūd, walked to the edge of Makkah. And then it stopped.",
              "The handlers beat it, prodded it, tried to force it forward. Maḥmūd would not move. He would sit, sinking his weight down, refusing to advance. When they turned him to face south, north, east — he would walk. When they turned him to face the Kaʿbah, he sat down and would not move."
            ]
          },
          {
            heading: "The Birds",
            text: [
              "Then something appeared on the horizon.",
              "The sky filled with birds — flocks of them, coming in waves from the direction of the sea. Each bird carried three stones: one in its beak and one in each talon. The stones were small — hardened clay pellets, no bigger than a chickpea.",
              "The birds flew over the army of Abraha and released the stones. Where the stones fell, the men they struck were destroyed. The army that had marched from Yemen — the most powerful military force the Arabian peninsula had seen — was left in ruin. Abraha himself was struck and retreated, dying before he could return home."
            ]
          },
          {
            sacredText: {
              type: "ayah",
              arabic: "أَلَمْ تَرَ كَيْفَ فَعَلَ رَبُّكَ بِأَصْحَابِ الْفِيلِ ﴿١﴾ أَلَمْ يَجْعَلْ كَيْدَهُمْ فِي تَضْلِيلٍ ﴿٢﴾ وَأَرْسَلَ عَلَيْهِمْ طَيْرًا أَبَابِيلَ ﴿٣﴾ تَرْمِيهِم بِحِجَارَةٍ مِّن سِجِّيلٍ ﴿٤﴾ فَجَعَلَهُمْ كَعَصْفٍ مَّأْكُولٍ ﴿٥﴾",
              translation: "Have you not seen what your Lord did to the People of the Elephant? Did He not bring their plan to ruin? And He sent against them birds in flocks, striking them with stones of baked clay, and He made them like eaten straw.",
              reference: "Qurʾān 105:1–5"
            }
          },
          {
            heading: "Why Allāh Chose This Moment",
            text: [
              "Here is something to sit with. The destruction of Abraha's army and the birth of Rasūlullāh ﷺ happened in the same year. Not in the same century. Not in the same decade. In the same year.",
              "The Kaʿbah was the house that Ibrāhīm ʿalayhi us-salām had built by divine command — the house that would become, once more, the focal point of the world's faith when the final Messenger came to restore it. Allāh ﷻ did not allow that House to be destroyed in the year His final Messenger came into the world. He protected it visibly, miraculously, unmistakably — so that the year would be marked and remembered.",
              "The birth of Rasūlullāh ﷺ arrived wrapped in a year that no one would ever forget."
            ]
          }
        ],
        reflection: "Allāh  ﷻ did not need a great army to defeat a great army. He needed birds and stones. This is the lesson the Year of the Elephant teaches us: the outcome belongs to Allāh  ﷻ alone."
      },
      {
        kind: "segment",
        segmentNumber: 4,
        minutes: 10,
        chapterTitle: "The Birth of Rasūlullāh ﷺ",
        heading: "A Mercy to All the Worlds — Arrives",
        subLabel: "Monday, Rabīʿ al-Awwal, Year of the Elephant",
        hadith: {
          type: "ayah",
          arabic: "وَمَا أَرْسَلْنَاكَ إِلَّا رَحْمَةً لِّلْعَالَمِينَ",
          translation: "And We have not sent you except as a mercy to all the worlds.",
          reference: "Sūrah al-Anbiyāʾ, 21:107"
        },
        explanation: [
          "Before a single word of revelation, before anyone knew his name beyond the walls of Makkah, Allāh  ﷻ had already made His decision. Muḥammad  ﷺ would not come as a mercy to one tribe or one people. He would come as a mercy to all the worlds. A child born without a father, to a grieving mother, in a city of idols — was the mercy Allāh  ﷻ had been preparing the earth to receive."
        ],
        sections: [
          {
            heading: "The Loss That Came Before",
            text: [
              "Before we reach the birth, there is a grief to acknowledge.",
              "ʿAbdullāh — the young father, the son of ʿAbd al-Muṭṭalib — did not live to see his child. He had gone on a journey to Shām, travelling for trade as the men of Quraysh did. On his return, he fell ill in the city of Yathrib — the city that would one day be called Madīnah. He stayed there, in the home of his maternal relatives, hoping to recover.",
              "He did not recover.",
              "ʿAbdullāh ibn ʿAbd al-Muṭṭalib died in Yathrib. He was a young man. He left behind a wife who was pregnant, a father who was grieving, and a legacy he could not have imagined.",
              "When word reached Makkah, the family mourned. And Āminah was left to carry the remainder of her pregnancy without her husband. She was alone. She was grieving. And within her, she was carrying the greatest trust Allāh ﷻ had ever placed in a human womb."
            ]
          },
          {
            heading: "The Birth",
            text: [
              "In the month of Rabīʿ al-Awwal, in the Year of the Elephant, in the city of Makkah — a child was born.",
              "The day was a Monday. This is something Rasūlullāh ﷺ confirmed himself, when he was asked about the significance of fasting on Mondays. He said that Monday was the day he was born — and also the day revelation first came to him. Monday held a meaning for him that went beyond ordinary time.",
              "The child was born to Āminah bint Wahb. His grandfather ʿAbd al-Muṭṭalib was sent for — the old man who had stood before Abraha, who had held the ring of the Kaʿbah door and called upon Allāh to protect His House — he now held in his arms the child who would one day call all of humanity back to Allāh."
            ]
          },
          {
            heading: "The Name",
            text: [
              "ʿAbd al-Muṭṭalib carried the infant to the Kaʿbah. He stood in the House and gave thanks. He made duʿāʾ. And then he gave the child a name that no Arab child had been given before.",
              "He named him Muḥammad.",
              "When people asked why he had chosen a name not common among them, he said that he wanted this child to be praised — by the people of the earth and by Allāh in the heavens. The name Muḥammad means the one who is praised, the one who is repeatedly praised. ʿAbd al-Muṭṭalib did not know, in the full sense, what he was naming. But Allāh ﷻ guided that name.",
              "The child who arrived without a father, to a grieving mother, in a city that had just witnessed a miracle — would grow up to become the human being about whom Allāh ﷻ said: And We have sent you only as a mercy to all the worlds.",
              "That is who was born on that Monday in Makkah. That is Muḥammad ﷺ."
            ]
          }
        ],
        reflection: "He arrived without a father, to a grieving mother, in a year marked by an extraordinary miracle. Allāh  ﷻ orchestrated every detail. Nothing about this arrival was ordinary."
      },
      {
        kind: "reflection",
        questions: [
          "ʿAbd al-Muṭṭalib told Abraha: “The House has a Lord who will protect it.” What does this tell us about where he placed his trust — and what can we learn from that for our own lives?",
          "Allāh chose the Year of the Elephant — a year of crisis and miraculous deliverance — as the year to send His final Prophet. What might that timing be telling us?",
          "Āminah was pregnant, alone, and grieving — and yet she was carrying the greatest blessing in human history. How does this change the way we think about difficult times in our own lives?",
          "The Prophet ﷺ told us he was born on a Monday. He also received the first revelation on a Monday. What does it mean to mark moments with significance — and how do we create that in our families?"
        ],
        actionPoint:
          "Read Sūrah al-Fīl together as a family — all five verses. Read the meaning in your language. Then ask one person to answer: what did Allāh want us to remember from this? Make it a habit: every time a child memorises a new sūrah, read the meaning together. The Qurʾān was not only meant to be recited — it was meant to be understood."
      },
      {
        kind: "closing",
        paragraphs: [
          "We began today where we left off — with ʿAbdullāh and Āminah, the parents of Rasūlullāh ﷺ.",
          "Before the birth, Allāh ﷻ showed the world what kind of year this was. An army that no human force could stop was destroyed by birds. The most powerful military commander in the region was turned away from the Kaʿbah by an elephant that refused to move. The House of Allāh stood.",
          "Then, in the quiet aftermath of that miracle, Āminah gave birth on a Monday. A grandfather walked his newborn grandson to the Kaʿbah and named him Muḥammad — the praised one.",
          "The world did not fully understand what had just happened. But Allāh ﷻ had sent into the world the one He would later describe as a mercy to all the worlds.",
          "May Allāh ﷻ increase our love for Rasūlullāh ﷺ, deepen our understanding of his life, and make us worthy of his intercession on the Day we need it most."
        ],
        duaArabic: "اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ",
        duaTranslation: "O Allāh, send blessings upon Muḥammad and upon the family of Muḥammad, as You sent blessings upon Ibrāhīm and upon the family of Ibrāhīm. Indeed You are Praiseworthy and Glorious. Āmīn.",
        nextLessonPreview: "The child had entered the world — but the city of Makkah would not hold him for long. An old Arabian tradition called upon families of standing to send their newborns into the open desert, into clean air and simpler lives. A woman named Ḥalīmah set out from her tribe with barely any hope of finding a child to nurse. She would return with far more than she had come for. In our next lesson, we follow the infant Muḥammad  ﷺ into the desert — and discover the quiet, extraordinary blessings that surrounded him from the very first days of his life.",
        discoveryNote: "✦ Go Deeper — Three people shaped the life of Rasūlullāh ﷺ before he could speak: his mother Āminah, his father ʿAbdullāh, and his grandfather ʿAbd al-Muṭṭalib. Open the Profiles tab to learn who they were and what they carried. The Maps tab shows Makkah al-Mukarramah — the city the birds defended, and the city where he was born.",
      },
      {
        kind: "part-divider",
        title: "The Desert Years",
        subtitle: "Part 4",
        description: [
          "Ḥalīmah al-Saʿdiyyah and the tribe of Banū Saʿd.",
          "The nursing years, the blessings of barakah, and the arrival of a mercy to all the worlds."
        ]
      },
      {
        kind: "segment",
        segmentNumber: 1,
        minutes: 10,
        chapterTitle: "A Custom That Carried Wisdom",
        heading: "Virtue: Ḥikmah — The Wisdom in What Allāh Arranges",
        subLabel: "Why the Desert Before the Mission",
        hadith: {
          type: "ayah",
          arabic: "عَسَىٰ أَن تَكْرَهُوا شَيْئًا وَهُوَ خَيْرٌ لَّكُمْ",
          translation: "Perhaps you dislike something while it is good for you.",
          reference: "Sūrah al-Baqarah, 2:216"
        },
        explanation: [
          "Allāh ﷻ does not prepare His Prophets by accident. Every arrangement in the early life of Rasūlullāh ﷺ — including the years he would spend in the desert — was part of a preparation that the world would only understand much later. What looked like a simple social custom was, in truth, a divine arrangement for the greatest mission in human history."
        ],
        sections: [
          {
            heading: "A Custom That Carried Wisdom",
            text: [
              "To understand what comes next, we need to understand a practice that was common among the noble families of Makkah.",
              "The city was a trading hub — busy, noisy, and crowded. The air of the cities was considered heavy, the dialects mixed, and the environment of urban life was seen as weakening for young children. The great families of Arabia had a long-standing tradition: when a child was born, they would arrange for him or her to be sent to live with a Bedouin family in the open desert for the first few years of life.",
              "This was not abandonment. It was care — deeply considered care.",
              "The desert offered things the city could not. Clean air and open land. Physical strength, built through a harder life. And above all, the Arabic language in its purest form. The Bedouin tribes spoke an Arabic untouched by the mixing of traders from Persia, Yemen, and Shām. A child raised among them would grow up speaking with clarity, precision, and beauty. For a family that valued eloquence — and Quraysh prized eloquence above almost everything — this was a priceless gift.",
              "Every year, women from the surrounding desert tribes would make the journey to Makkah. They came as wet-nurses, offering to take infants back to their tribes in exchange for payment from the families. It was an arrangement that worked on both sides: the families got what they wanted for their children, and the women earned an income in difficult years."
            ]
          },
          {
            heading: "Why Did Allāh Choose Banū Saʿd?",
            text: [
              "The sending of Rasūlullāh ﷺ to the tribe of Banū Saʿd was not simply a social custom. Looking back, we can see at least five reasons why this was part of a divine arrangement.",
              "Pure Arabic at its source. The dialect of Banū Saʿd was considered among the clearest and most eloquent in all of Arabia. A child raised among them would grow up speaking with precision and beauty — a gift that would serve Rasūlullāh ﷺ when he one day stood before all of humanity as its final Messenger.",
              "Physical strength through a harder life. The desert built resilience. Rasūlullāh ﷺ would face decades of difficulty ahead — persecution, migration, battles, and grief. The desert years built the body and the character that would carry that weight.",
              "Distance from the distractions of the city. Makkah was full of idols, noise, and the moral confusion of a busy trading city. The desert offered simplicity, space, and an upbringing free from those influences.",
              "Clean air and open land. Away from the crowding and the diseases of city life, the child grew healthy and strong.",
              "Divine preparation. Allāh ﷻ does not send His Prophets unprepared. Every arrangement in the early life of Rasūlullāh ﷺ — including the desert years — was part of a preparation we are only now able to look back and understand."
            ]
          }
        ],
        reflection: "Allāh ﷻ placed Rasūlullāh ﷺ in the desert before placing him before all of humanity. Think about what Allāh ﷻ may be preparing you for through the difficulties and simplicities of your own life right now."
      },
      {
        kind: "segment",
        segmentNumber: 2,
        minutes: 10,
        chapterTitle: "The Women of Banū Saʿd Arrive in Makkah",
        heading: "Virtue: Shukr — Gratitude for What We Cannot Yet See",
        subLabel: "An Orphan Child and an Unlikely Choice",
        hadith: {
          type: "ayah",
          arabic: "وَمَن يَتَّقِ اللَّهَ يَجْعَل لَّهُ مَخْرَجًا وَيَرْزُقْهُ مِنْ حَيْثُ لَا يَحْتَسِبُ",
          translation: "And whoever fears Allāh — He will make a way out for him, and will provide for him from where he did not expect.",
          reference: "Sūrah al-Ṭalāq, 65:2–3"
        },
        explanation: [
          "The women of Banū Saʿd arrived in Makkah expecting to find children from well-to-do families with fathers who would pay them well. What none of them knew — what none of them could have imagined — was that the one child no one wanted would turn out to be the source of the greatest barakah any of them would ever see."
        ],
        sections: [
          {
            heading: "A Difficult Year",
            text: [
              "Among the tribes that made this annual journey was the tribe of Banū Saʿd ibn Bakr.",
              "That year, a group of women from Banū Saʿd set out for Makkah. The journey itself told the story of the drought that had settled over the desert. One of those women, Ḥalīmah bint Abī Dhuʾayb, rode an old she-donkey — slow, tired, barely able to keep pace. Her own infant son cried through the nights of the journey because she herself had little milk to give him. Her husband, al-Ḥārith, accompanied her. They arrived in Makkah thin, weary, and hoping.",
              "The women of Banū Saʿd went from household to household. Makkah's families came out to meet them. Arrangements were made. One by one, the women of Banū Saʿd each found a child to take."
            ]
          },
          {
            heading: "The Child No One Wanted",
            text: [
              "But there was one infant that no one seemed to want.",
              "His father had passed away before he was born. This child had no living father. And this was a problem, because the custom was clear: the father paid the wet-nurse. No father meant no clear income. The other families had living fathers, living incomes, living futures. This infant had only his mother, his grandfather, and the care of Allāh ﷻ.",
              "One by one, the women looked at this child and moved on.",
              "Ḥalīmah had also passed him over — at first."
            ]
          }
        ],
        reflection: "Every woman of Banū Saʿd chose what seemed like the sensible option. The one who chose the orphan received what none of the others did. What does this tell us about where Allāh ﷻ places His barakah?"
      },
      {
        kind: "segment",
        segmentNumber: 3,
        minutes: 10,
        chapterTitle: "The Woman Who Turned Back",
        heading: "Virtue: Tawakkul — Trusting Allāh When You Cannot See the Answer",
        subLabel: "The Decision That Changed a Household",
        hadith: {
          type: "ayah",
          arabic: "وَمَن يَتَوَكَّلْ عَلَى اللَّهِ فَهُوَ حَسْبُهُ",
          translation: "And whoever places his trust in Allāh — He is sufficient for him.",
          reference: "Sūrah al-Ṭalāq, 65:3"
        },
        explanation: [
          "When every other woman had found an infant and Ḥalīmah alone had nothing to show for the journey, she faced a choice: return to Banū Saʿd empty-handed, or try once more. Her husband said: go back — perhaps Allāh will bless us through him. That word ‘perhaps’ is the word of a person who does not claim certainty about Allāh’s gifts. He hoped. He trusted. And the hope was answered."
        ],
        sections: [
          {
            heading: "The Decision",
            text: [
              "When every other woman of Banū Saʿd had found a child and Ḥalīmah alone had nothing to show for the journey, she turned to her husband. She could not bear the thought of returning as the only woman in the group without a child to nurse. Her husband said to her: go back. Take the orphan. Perhaps Allāh will bless us through him.",
              "And so Ḥalīmah turned back.",
              "She went to the household of Āminah. She picked up the infant. And in that moment, before she had even carried him out of the house, something changed."
            ]
          },
          {
            heading: "The Blessings Began Immediately",
            text: [
              "When Ḥalīmah sat down to nurse him, she found that her breasts were suddenly full — full in a way they had not been throughout the entire difficult journey. She nursed the infant Muḥammad ﷺ until he was satisfied. She then turned to nurse her own son — and he too was satisfied. Both children slept.",
              "Her husband went to their she-camel to milk her. He found the udders full, where they had been dry for months. They drank until they were full that night — something they had not done in a long time.",
              "Her husband looked at her and said: “Ḥalīmah, do you realise that you have taken a blessed child?”",
              "The blessings were becoming impossible to ignore."
            ]
          }
        ],
        reflection: "Ḥalīmah did not go back out of certainty. She went back out of desperation. Yet Allāh ﷻ honoured that choice. When you have done your best and still feel empty-handed, sometimes the answer is to try once more — and leave the outcome to Allāh ﷻ."
      },
      {
        kind: "segment",
        segmentNumber: 4,
        minutes: 10,
        chapterTitle: "The Blessed Return",
        heading: "Virtue: Barakah — Divine Increase in What Allāh Wills",
        subLabel: "Two Years That Changed the Tribe of Banū Saʿd",
        hadith: {
          type: "hadith",
          arabic: "اللَّهُمَّ بَارِكْ لَنَا فِيمَا رَزَقْتَنَا",
          translation: "O Allāh, bless for us what You have provided for us.",
          reference: "Sunan Abī Dāwūd, Hadīth 3730"
        },
        explanation: [
          "Barakah is one of those Arabic words that no translation can fully capture. It means divine increase — a growth in good that comes not from the quantity of what you have, but from Allāh ﷻ placing His blessing inside it. A small amount with barakah feeds many. A little time with barakah produces much. Ḥalīmah experienced this in the most direct and undeniable way — and so did everyone around her."
        ],
        sections: [
          {
            heading: "The Journey Home",
            text: [
              "The morning came, and the group of women from Banū Saʿd prepared to leave Makkah.",
              "Ḥalīmah’s old she-donkey — the one that had lagged behind the entire journey to Makkah, that had exhausted and frustrated the group with its slow, stumbling pace — now walked with such swiftness that the other women could no longer keep up. They called out to Ḥalīmah: “Is that the same donkey you came with?” She said: “Yes, by Allāh — it is the same donkey.”",
              "Nothing had changed about the animal. Everything had changed about what she was carrying."
            ]
          },
          {
            heading: "Two Years of Barakah",
            text: [
              "The barakah did not stop at the journey. It settled into Ḥalīmah’s home like a permanent guest. Her sheep went out to graze each day and returned full of milk — while the sheep of her neighbours in Banū Saʿd came back dry. The other members of the tribe began to notice. They started sending their shepherds to graze wherever the shepherds of Ḥalīmah’s family went. If her flock grazed on a piece of land, that land gave them something. If her family’s animals ate from a pasture, the pasture was generous.",
              "The people of Banū Saʿd witnessed this throughout the nursing years.",
              "And through those years, the child grew. Ḥalīmah noticed that he grew well, remained healthy, and displayed qualities that often amazed those around him. She watched him with a mixture of love and wonder she could not fully put into words.",
              "When the nursing period came to an end, Ḥalīmah returned to Makkah to bring him back to his mother Āminah. But she did not want to go. She asked — with sincerity, and with a mother’s reluctance — if she could keep the child a little longer. She spoke of the goodness he had brought into her home. Āminah agreed. Rasūlullāh ﷺ returned to Banū Saʿd for a further period.",
              "The blessings continued."
            ]
          }
        ],
        reflection: "The neighbours of Ḥalīmah started sending their flocks to where hers grazed, trying to share in the barakah without knowing where it came from. Are there people or things in your life through which Allāh ﷻ has placed barakah — and are you conscious of it?"
      },
      {
        kind: "reflection",
        questions: [
          "Ḥalīmah almost left Makkah without him — but turned back because she did not want to go home empty-handed. Allāh ﷻ turned that simple, ordinary decision into one of the most blessed moments in the life of Banū Saʿd. Have you ever made a decision for a small reason and later realised that Allāh ﷻ had placed barakah inside that choice?",
          "Every woman of Banū Saʿd chose the child with a living father — the ‘sensible’ choice. Ḥalīmah, almost by accident, chose differently. What does this teach us about the difference between what looks promising and what Allāh ﷻ has actually placed blessing inside?",
          "The sheep of Ḥalīmah’s neighbours came home dry while hers came home full. The neighbours started sending their flocks to graze where hers grazed. They were trying to borrow the barakah without knowing where it came from. What does this tell us about the invisible effects a blessed person has on the people around them?",
          "Ḥalīmah loved this child so much that when the two years ended and the time came to return him to his mother, she asked to keep him longer. What kind of woman must she have been? And what responsibility do we carry when Allāh ﷻ places a trust in our hands?"
        ],
        actionPoint: "This week, practise one thing the desert years gave to Rasūlullāh ﷺ: speak clearly and with care. At family taʿlīm tonight, each person says one thing they are grateful to Allāh ﷻ for — in one clear, complete sentence. No rushing. Speak as if the words matter, because they do. Then ask your children: who was Ḥalīmah? Let them explain it back in their own words."
      },
      {
        kind: "closing",
        paragraphs: [
          "We began today where the previous lesson ended — with a child who had just arrived into a world that did not yet fully know what it had received.",
          "We followed the women of Banū Saʿd as they made their journey to Makkah in a difficult year. We watched as one by one they found their children — and as one infant was passed over by all of them, because he had no father to pay the nurse.",
          "We watched as Ḥalīmah turned back — not out of great faith, but out of a simple unwillingness to go home empty-handed. And we saw what Allāh ﷻ placed inside that ordinary decision: a she-donkey that suddenly walked swiftly, a she-camel that gave milk after months of dryness, a household whose sheep returned full while the neighbours’ returned dry.",
          "The people of Banū Saʿd witnessed years of barakah. They sent their flocks where her flock grazed. They could see the blessing, even if they could not name its source.",
          "May Allāh ﷻ make us people who recognise barakah when He places it near us — and who treat the trusts He gives us with the love and care they deserve."
        ],
        duaArabic: "اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ",
        duaTranslation: "O Allāh, send blessings upon Muḥammad and upon the family of Muḥammad, as You sent blessings upon Ibrāhīm and upon the family of Ibrāhīm. Indeed You are Praiseworthy and Glorious. Āmīn.",
        nextLessonPreview: "The years with Ḥalīmah were years of blessing. But they were also years of preparation — and the next event in the life of Rasūlullāh ﷺ would show that the preparation was more extraordinary than anyone in Banū Saʿd had imagined. One afternoon, while the young Muḥammad ﷺ was playing near the tents with his foster-brother, two men appeared, dressed in white. In our next lesson, we explore one of the most astonishing events in the early life of Rasūlullāh ﷺ: The Opening of the Chest.",
        discoveryNote: "✦ Go Deeper — Ḥalīmah al-Saʿdiyyah turned back when every other woman had found a child — and that ordinary decision became one of the most blessed in history. Open the Profiles tab to read her full story. The Maps tab shows Makkah al-Mukarramah, the sacred city the infant would one day fill with light.",
      },
      {
        kind: "part-divider",
        title: "The Opening of the Chest",
        subtitle: "Part 5",
        description: [
          "Shaqq al-Ṣadr — the divine preparation of the heart of Rasūlullāh ﷺ.",
          "The extraordinary afternoon in Banū Saʿd, and what it tells us about how Allāh ﷻ prepares those He loves."
        ]
      },
      {
        kind: "segment",
        segmentNumber: 1,
        minutes: 10,
        chapterTitle: "An Ordinary Afternoon",
        heading: "Virtue: Tawakkul — Trusting the Plan You Cannot Yet See",
        subLabel: "What Happened in Banū Saʿd",
        hadith: {
          type: "ayah",
          arabic: "إِنَّ اللَّهَ بَالِغُ أَمْرِهِ قَدْ جَعَلَ اللَّهُ لِكُلِّ شَيْءٍ قَدْرًا",
          translation: "Indeed, Allāh accomplishes His purpose. He has already set for everything a decreed extent.",
          reference: "Sūrah al-Ṭalāq, 65:3"
        },
        explanation: [
          "Allāh ﷻ does not give great responsibilities to unprepared people. He prepares the people He plans to entrust. Every detail of the early life of Rasūlullāh ﷺ — the desert years, the pure language, the simplicity of Bedouin life — was part of a divine arrangement whose full purpose none of those living through it could yet see."
        ],
        sections: [
          {
            heading: "An Ordinary Afternoon",
            text: [
              "There are days in history that begin like every other day — children playing in the open ground, animals moving in the distance, the unhurried life of the Bedouin stretching forward in every direction — and end unlike anything that has ever come before.",
              "That afternoon in Banū Saʿd was one of those days.",
              "The young Muḥammad ﷺ had gone out to play near the tents with his foster-brother, ʿAbdullāh ibn al-Ḥārith — the son of Ḥalīmah and her husband. The two boys had grown up side by side. It was the kind of ordinary afternoon neither of them would ever forget.",
              "Nothing announced what was about to happen.",
              "Two men appeared. They were dressed in white. They came with a calm and deliberate purpose, and they approached the young Muḥammad ﷺ.",
              "The foster-brother watched what happened next — and then he ran.",
              "He ran back to the camp the way a frightened child runs: straight to his mother, without looking behind him, his voice broken and urgent. He told her what he had seen. Two men had taken his brother. Something was happening.",
              "Ḥalīmah did not wait to hear the rest. She and her husband al-Ḥārith ran toward where the boys had been playing."
            ]
          },
          {
            heading: "Found Standing",
            text: [
              "When they reached him, the young Muḥammad ﷺ was standing.",
              "He was not on the ground. He was not injured. He was upright and clear-eyed — though his face was pale. He looked at Ḥalīmah with the steadiness of a child who has witnessed something beyond ordinary experience and is ready, quietly, to be asked about it.",
              "She asked. He told her.",
              "Two men had come to him. They had laid him on his back. They had opened his chest. They had taken out his heart and washed it carefully — in a vessel of water, cleaning it until it was completely pure. His heart was then returned to its place. The chest was closed. And the two men left.",
              "His chest bore no wound. His body was unharmed.",
              "The child who stood before Ḥalīmah was unharmed, calm, and protected by Allāh. Yet those who loved him sensed that something extraordinary had taken place."
            ]
          }
        ],
        reflection: "The morning had been ordinary. The afternoon was beyond words. Allāh ﷻ does not announce His arrangements in advance — He simply accomplishes them. How do we prepare ourselves to recognise what Allāh is doing when the extraordinary arrives?"
      },
      {
        kind: "segment",
        segmentNumber: 2,
        minutes: 10,
        chapterTitle: "What Was Done — and What It Means",
        heading: "Virtue: Ṣalāḥ al-Qalb — The Soundness of the Heart",
        subLabel: "Divine Preparation Before a Great Mission",
        hadith: {
          type: "hadith",
          arabic: "أَلَا وَإِنَّ فِي الْجَسَدِ مُضْغَةً إِذَا صَلَحَتْ صَلَحَ الْجَسَدُ كُلُّهُ وَإِذَا فَسَدَتْ فَسَدَ الْجَسَدُ كُلُّهُ أَلَا وَهِيَ الْقَلْبُ",
          translation: "Indeed, in the body there is a piece of flesh — if it is sound, the whole body is sound; and if it is corrupt, the whole body is corrupt. Indeed, it is the heart.",
          reference: "Ṣaḥīḥ al-Bukhārī, 52; Ṣaḥīḥ Muslim, 1599 (narrated by al-Nuʿmān ibn Bashīr)"
        },
        explanation: [
          "This ḥadīth was spoken by Rasūlullāh ﷺ himself — the same Prophet whose heart was divinely prepared before the greatest mission in history was placed upon it. The event in Banū Saʿd was not simply extraordinary. It was an illustration, in the most direct way possible, of the very principle he would one day teach all of humanity: everything flows from the heart."
        ],
        sections: [
          {
            heading: "What Was Removed — and Why",
            text: [
              "The scholars of the Sīrah tradition describe what was removed from the heart of the young Muḥammad ﷺ as that which would otherwise have made it susceptible to the pull of this world — whatever might have weighed it down and made it vulnerable.",
              "It is important to understand this clearly.",
              "This was not done because there was something wrong with the Prophet ﷺ. He was, even as a child, a person of remarkable character and qualities. What was removed was not a sin, not a fault, not something he had chosen or done. It was a preparation — the way a vessel is washed before something precious is placed inside it. Not because the vessel was dirty. Because what was coming deserved a heart prepared to carry it.",
              "The scholars explain that this event was part of Allāh's preparation of His Prophet ﷺ for the great mission that lay ahead. The heart had to be ready."
            ]
          },
          {
            heading: "The Lesson for All of Us",
            text: [
              "Rasūlullāh ﷺ himself taught us that the heart is the most important organ we carry — not for its biology, but for its spiritual condition. When it is sound, everything we do is sound: our words, our choices, our relationships, our worship. When it is corrupt, everything flows from that corruption.",
              "We cannot have our hearts opened by angels. But we are not without tools. The Prophet ﷺ taught us that the heart can be polished: through dhikr, through Qurʾān, through seeking forgiveness, through sitting with people of goodness, through removing what hardens it.",
              "The event in Banū Saʿd shows us the divine version of heart preparation. Our daily worship is our human version of the same act — making ourselves ready for whatever Allāh ﷻ has planned for us."
            ]
          }
        ],
        reflection: "The Prophet ﷺ told us that everything flows from the heart. Allāh ﷻ demonstrated that truth, literally, in his own life. What is one honest thing you can do this week for the health of your heart?"
      },
      {
        kind: "segment",
        segmentNumber: 3,
        minutes: 10,
        chapterTitle: "The Fear of Those Who Loved Him",
        heading: "Virtue: Amānah — Returning the Trust with Care",
        subLabel: "Ḥalīmah and al-Ḥārith Respond",
        hadith: {
          type: "ayah",
          arabic: "إِنَّ اللَّهَ يَأْمُرُكُمْ أَن تُؤَدُّوا الْأَمَانَاتِ إِلَىٰ أَهْلِهَا",
          translation: "Indeed, Allāh commands you to return trusts to their rightful owners.",
          reference: "Sūrah al-Nisāʾ, 4:58"
        },
        explanation: [
          "Ḥalīmah and al-Ḥārith were not scholars. They were a Bedouin family who had been entrusted with a child they loved deeply. When something happened that they could not explain and could not protect against, they did the right thing: they brought the trust back to those it belonged to — with complete honesty, hiding nothing. That is amānah."
        ],
        sections: [
          {
            heading: "The Fear of Those Who Loved Him",
            text: [
              "Ḥalīmah and her husband were not frightened because the child had been harmed. He had not been harmed — they could see that clearly. They could see it in the stillness of his breathing, in the steadiness of his eyes, in the complete absence of fear in his expression.",
              "They were frightened because they loved him. And when you love someone, the things you cannot explain frighten you more than the things that hurt.",
              "They were a Bedouin family, far from scholars and far from scripture. They had witnessed extraordinary things in connection with this child before — the animals, the land, the unexpected abundance — but those had been blessings they could understand. This was something entirely different. This was direct, visible, and without explanation.",
              "Al-Ḥārith turned to Ḥalīmah and said what a man says when he loves a child and knows that what is happening is beyond his reach: I fear that something has been destined for this child. Let us return him to his family before anything else occurs that we cannot account for.",
              "He said it not with coldness. Not with rejection. He said it as a man who was responsible for a trust and knew, in that moment, that the trust was too great for him to carry alone."
            ]
          },
          {
            heading: "The Decision",
            text: [
              "They made the decision: they would return Muḥammad ﷺ to his mother Āminah in Makkah.",
              "This was not a failure. This was love in action. Ḥalīmah had cared for this child for years. She had nursed him, protected him, loved him with the love of a mother. And now, when she encountered something beyond her understanding, she brought him safely home — to the person who had entrusted him to her in the first place.",
              "That is what a person of amānah does. They hold the trust with care. And when they can no longer hold it, they return it — honestly, completely, and with nothing hidden."
            ]
          }
        ],
        reflection: "Ḥalīmah returned the trust with complete honesty — she hid nothing from Āminah. Think about the trusts you are currently holding. Are you caring for them the way Allāh ﷻ would want? And if something is beyond you, are you honest enough to say so?"
      },
      {
        kind: "segment",
        segmentNumber: 4,
        minutes: 10,
        chapterTitle: "The Return to Āminah",
        heading: "Virtue: Yaqīn — Certainty in What Allāh Has Arranged",
        subLabel: "A Mother Who Already Knew",
        hadith: {
          type: "ayah",
          arabic: "وَاللَّهُ يَعْلَمُ وَأَنتُمْ لَا تَعْلَمُونَ",
          translation: "And Allāh knows, and you do not know.",
          reference: "Sūrah al-Baqarah, 2:232"
        },
        explanation: [
          "Āminah had carried this child and had been given, in her own way, a form of prior knowledge. When Ḥalīmah arrived with the news of what had happened, Āminah was not afraid. She had been prepared, by Allāh ﷻ, for exactly this conversation. Her certainty was not ignorance — it was the certainty that Allāh ﷻ was at work."
        ],
        sections: [
          {
            heading: "The Arrival in Makkah",
            text: [
              "Ḥalīmah journeyed to Makkah and brought the young Muḥammad ﷺ to his mother.",
              "When Āminah saw them arrive — earlier than expected, the foster-mother with the child — she knew immediately that something had happened. She asked.",
              "Ḥalīmah told her everything. The afternoon. The two men. What the foster-brother had seen. What the young Muḥammad ﷺ had said when they found him standing. She withheld nothing."
            ]
          },
          {
            heading: "A Mother Who Already Knew",
            text: [
              "Āminah listened to all of it. And she was not afraid.",
              "There was no alarm in her face. No panic. No attempt to dismiss what she was being told. She heard it with the stillness of a woman who had been carrying her own knowledge for years — knowledge that had come to her long before this child arrived in the world.",
              "The books of Sīrah mention that Āminah had witnessed signs before the birth of her son, including reports of a light that she saw — signs that had reached, she was told, across to distant lands in the north. She had sensed, in a way she could not fully explain, that the child she was carrying was not like other children. She had been prepared in her own way, by Allāh ﷻ, for exactly this conversation.",
              "She told Ḥalīmah: do not fear for him. He is protected.",
              "Ḥalīmah placed the child back with his mother. Āminah held her son — the son she had placed in Ḥalīmah's care years before, and who had now returned to her, watched over by the One who had arranged every detail of his life since before he was born.",
              "The reunion was quiet. But it was complete."
            ]
          }
        ],
        reflection: "Āminah was calm not because she did not understand what had happened, but because she had already been given, in her own way, the knowledge to receive it. Allāh ﷻ prepares not only those He sends — but those who receive them. Is there a difficulty in your life right now for which Allāh ﷻ may already have been quietly preparing you?"
      },
      {
        kind: "reflection",
        questions: [
          "Allāh ﷻ prepared the heart of Rasūlullāh ﷺ before giving him the greatest responsibility in human history. What does this tell us about when Allāh ﷻ begins preparing those He loves — and what might He be preparing you for right now, through circumstances you do not yet fully understand?",
          "Ḥalīmah was frightened by something that was, in truth, a mercy — even though she could not see it that way at the time. Have you ever been afraid of something that later revealed itself to be Allāh ﷻ at work in your life?",
          "Rasūlullāh ﷺ was found standing, calm, and able to describe everything clearly. While those around him were afraid, he was at peace. What does it take to reach that level of trust in Allāh ﷻ — and what is one step you can take toward it?",
          "Āminah was not alarmed. She had been given her own form of prior preparation. What does this tell us about how Allāh ﷻ prepares not only the Prophet ﷺ himself, but the people around him — the mothers, the caregivers, the witnesses?"
        ],
        actionPoint: "This week, choose one deliberate act for the health of your heart. The Prophet ﷺ told us that the heart is the most important thing we carry. Step away from one thing that hardens the heart — or add one thing that softens it: ten minutes of Qurʾān, a moment of sincere tawbah, or a word of reconciliation with someone you have wronged. Tell one person in your family what you chose. Making it known makes it real. At family taʿlīm tonight, ask each person: what is Shaqq al-Ṣadr? What does it mean? Let the children explain it back in their own words."
      },
      {
        kind: "closing",
        paragraphs: [
          "We began today where the previous lesson ended — with Rasūlullāh ﷺ still in the land of Banū Saʿd, living the quiet, blessed life of the desert. Years of barakah. Years of preparation.",
          "One afternoon, in the open ground near the tents, two men appeared and did something that no one present could fully explain. They opened the chest of the young Muḥammad ﷺ, washed his heart, and returned it — leaving him standing, calm, and unharmed.",
          "His foster-brother ran in terror. Ḥalīmah and her husband found the child standing and heard everything he described. Out of love, out of care, and out of the honest acknowledgement that this was beyond them — they brought him back to his mother.",
          "Āminah heard everything. And she was not afraid. She had already been prepared, in her own way, for exactly this news.",
          "The scholars explain that this event was part of Allāh's preparation of His Prophet ﷺ for the great mission that lay ahead. Allāh ﷻ does not give great responsibilities to unprepared people. He prepares the people He plans to entrust — before the mission arrives, before the title is given, before anyone else can see what is coming.",
          "May Allāh ﷻ purify our hearts, prepare us for the responsibilities He has decreed for us, and make us people who return every trust we carry with the care and honesty it deserves."
        ],
        duaArabic: "اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ",
        duaTranslation: "O Allāh, send blessings upon Muḥammad and upon the family of Muḥammad, as You sent blessings upon Ibrāhīm and upon the family of Ibrāhīm. Indeed You are Praiseworthy and Glorious. Āmīn.",
        nextLessonPreview: "The desert years were over. Rasūlullāh ﷺ had returned to Makkah, to his mother Āminah — and for the first time since his infancy, there was something like ordinary life. But Āminah had something she had wanted to do for years. To the north of Makkah lay Yathrib — the city where her husband ʿAbdullāh had died before his son was born. She had never visited his grave. She had never taken the young Muḥammad ﷺ to meet the family of his father who still lived there. The time had come for that journey. In our next lesson, we travel north with Āminah and her son.",
        discoveryNote: "✦ Go Deeper — The Profiles tab has a full profile of Ḥalīmah al-Saʿdiyyah, who brought Rasūlullāh ﷺ back to his mother after this event. The Maps tab shows Makkah al-Mukarramah. Tap the back arrow to explore both tabs.",
      },

      // ── Lesson 6 — The Death of Āminah ──────────────────────────────────────

      {
        kind: "part-divider",
        title: "The Death of Āminah",
        subtitle: "Part 6",
        description: [
          "The journey to Yathrib, the death of Āminah bint Wahb at Al-Abwāʾ, and the return of a full orphan to the care of his grandfather.",
          "Allāh shelters those He has chosen — even through loss."
        ]
      },
      {
        kind: "segment",
        segmentNumber: 1,
        minutes: 10,
        chapterTitle: "Who Was Āminah?",
        heading: "Virtue: Ṣabr — Patience That Carries a Generation",
        subLabel: "The Noble Mother of the Final Prophet ﷺ",
        hadith: {
          type: "ayah",
          arabic: "أَلَمْ يَجِدْكَ يَتِيمًا فَآوَىٰ",
          translation: "Did He not find you an orphan and give you shelter?",
          reference: "Sūrah al-Ḍuḥā, 93:6"
        },
        explanation: [
          "This verse was revealed after prophethood — Allāh ﷻ looking back at the life of His Prophet ﷺ and naming what He had done for him at every stage. Before we reach the death of Āminah, we must know the life of Āminah. She carried, raised, and loved the greatest human being who would ever walk the earth — alone, widowed, with patience and dignity — and she did it without knowing what her son would become."
        ],
        sections: [
          {
            heading: "A Noble Woman of Makkah",
            text: [
              "Āminah bint Wahb came from one of the most respected families in Makkah. Her father, Wahb ibn ʿAbd Manāf ibn Zuhra, was a chief of his clan — the tribe of Zuhra. Her family was known for nobility, honour, and good character. When she married ʿAbdullāh ibn ʿAbd al-Muṭṭalib — the most beloved son of the great chieftain of Makkah — it was considered one of the finest marriages of that generation.",
              "But her joy was to be short-lived. ʿAbdullāh set out on a trading journey to Shām. On the return, he fell ill in Yathrib — the city that would one day be called Madīnah — where his maternal relatives lived. There, far from his family, far from the wife who was carrying his child — ʿAbdullāh ibn ʿAbd al-Muṭṭalib passed away.",
              "Āminah received the news while still pregnant. She gave birth alone, widowed, grieving — and yet she carried herself with dignity and patience. She named her son Muḥammad."
            ]
          },
          {
            heading: "A Mother's Love",
            text: [
              "She raised him. She loved him. She told him about his father. When the time came for him to spend his early years with the wet-nurse Ḥalīmah al-Saʿdiyyah among the tribe of Banū Saʿd — the noble custom of the Arabs of Makkah — she agreed, though it meant separation. When he returned, she held him close.",
              "She was a widow, a single mother in a society where such things were not easy, and yet she was described in the books of Sīrah as a woman of nobility, dignity, and deep affection for her son.",
              "Now she wanted to do something she had carried in her heart for years. To take her son to Yathrib — to the city where his father was buried, to the relatives who still lived there, to give the young Muḥammad ﷺ a connection to the father he had never met."
            ]
          }
        ],
        reflection: "Āminah raised the Prophet ﷺ alone — widowed, grieving, in a society that offered no easy path for a woman in her position. Yet she is remembered with honour in every account of the Sīrah. What does patience in loss look like when no one around you understands its depth? And what does her story teach us about the mothers in our own families and communities who carry what others cannot see?"
      },
      {
        kind: "segment",
        segmentNumber: 2,
        minutes: 10,
        chapterTitle: "The Journey to Yathrib",
        heading: "Virtue: Ṣilat al-Arḥām — Honouring the Ties That Allāh Has Joined",
        subLabel: "Five Hundred Kilometres Through the Desert",
        hadith: {
          type: "hadith",
          arabic: "مَنْ أَحَبَّ أَنْ يُبْسَطَ لَهُ فِي رِزْقِهِ وَيُنْسَأَ لَهُ فِي أَثَرِهِ فَلْيَصِلْ رَحِمَهُ",
          translation: "Whoever wishes to have his provision expanded and his lifespan extended, let him maintain his family ties.",
          reference: "Ṣaḥīḥ al-Bukhārī, 5985; Ṣaḥīḥ Muslim, 2557 (narrated by Anas ibn Mālik)"
        },
        explanation: [
          "The journey Āminah made — five hundred kilometres through the desert with a six-year-old child — was not a casual trip. It was an act of love and an act of ṣilat al-arḥām: connecting her son to his roots, to his father's grave, to the family that remained in Yathrib. The Prophet ﷺ himself later taught that maintaining family ties brings barakah in provision and in life. His own earliest journey beyond Makkah was made in service of that very principle."
        ],
        sections: [
          {
            heading: "Preparing for the Road",
            text: [
              "Some time after the young Muḥammad ﷺ had returned from Banū Saʿd — the books of Sīrah tell us he was approximately six years old — his mother Āminah made a decision. She would travel to Yathrib.",
              "There were two reasons: to visit the grave of ʿAbdullāh, so that her son could know where his father was buried. And to visit her maternal relatives — some reports mention the clan of Banū ʿAdī ibn al-Najjār — who lived in that city.",
              "It was a long journey. From Makkah to Yathrib is approximately five hundred kilometres through the Ḥijāz desert. But Āminah was determined. Accompanying her were her young son Muḥammad ﷺ; and Umm Ayman — also known as Barakah al-Ḥabashiyyah — the devoted Ethiopian servant who had cared for the household since the time of ʿAbdullāh. The Prophet ﷺ would later call her: my mother after my mother."
            ]
          },
          {
            heading: "A Month in Yathrib",
            text: [
              "When they arrived in Yathrib, they were welcomed. The young Muḥammad ﷺ — for the first time in his life — visited the city that Allāh would one day make the greatest city on earth. He played with the children of Banū Najjār. He walked the streets. He breathed air that would one day be the air of the City of the Prophet ﷺ.",
              "The books of Sīrah mention that he learnt to swim in a pool belonging to the clan of Banū Najjār during this visit. He spent time with his maternal relatives and, perhaps most importantly, he stood at the grave of his father — the grave of ʿAbdullāh ibn ʿAbd al-Muṭṭalib.",
              "What did the young child feel as he stood at that grave? We are not told. But Allāh knows. They remained in Yathrib for approximately one month. Then Āminah prepared for the return journey home to Makkah."
            ]
          }
        ],
        reflection: "Āminah made a five-hundred-kilometre journey through the desert so that her six-year-old son could stand at his father's grave and meet the family he had never known. She understood that roots matter — that a child needs to know where they come from. Is there a connection in your family — a relative, a history, a story — that your children do not yet know? What would it mean to give it to them?"
      },
      {
        kind: "segment",
        segmentNumber: 3,
        minutes: 10,
        chapterTitle: "Al-Abwāʾ — The Death of Āminah",
        heading: "Virtue: Sabr al-Musībah — Patience at the Moment of Calamity",
        subLabel: "She Could Travel No Further",
        hadith: {
          type: "ayah",
          arabic: "الَّذِينَ إِذَا أَصَابَتْهُم مُّصِيبَةٌ قَالُوا إِنَّا لِلَّهِ وَإِنَّا إِلَيْهِ رَاجِعُونَ",
          translation: "Those who, when disaster strikes them, say: Indeed we belong to Allāh, and indeed to Him we will return.",
          reference: "Sūrah al-Baqarah, 2:156"
        },
        explanation: [
          "Allāh ﷻ does not promise His servants a life without calamity. He promises, to those who receive calamity with patience and with the return of their hearts to Him, something greater: His own closeness, His mercy, and His guidance. What happened at Al-Abwāʾ was not a mistake. It was a decree. And the young Muḥammad ﷺ — six years old — stood in the middle of it."
        ],
        sections: [
          {
            heading: "Illness on the Road",
            text: [
              "The return journey began. They left Yathrib heading south — back through the desert, back toward Makkah, back toward home.",
              "But somewhere on the road, Āminah bint Wahb fell ill. The desert heat, the long journey, the years of grief she had carried since ʿAbdullāh's death — whatever Allāh had decreed, her body began to weaken.",
              "They reached a place called Al-Abwāʾ — a village lying between Makkah and Madīnah, closer to the Madīnah side, on the ancient Ḥijāz road that connected the two cities. It was here that the caravan stopped. It was here that Āminah could travel no further."
            ]
          },
          {
            heading: "She Left This World",
            text: [
              "At Al-Abwāʾ, Āminah bint Wahb passed from this world. The books of Sīrah record that she died during this return journey. She was young — scholars estimate she was in her mid-to-late twenties. Her son was six years old.",
              "Muḥammad ﷺ was present. He was there when she died. He was six years old, in the middle of the desert, far from home, and he watched his mother leave this world.",
              "She was buried there, at Al-Abwāʾ, in the earth of the Ḥijāz — far from Makkah, far from the grave of her husband — in a place that would become known to all of history because of the love her son ﷺ carried for her for the rest of his life.",
              "Umm Ayman, with her own eyes weeping, took the young orphan's hand."
            ]
          }
        ],
        reflection: "The Prophet ﷺ was six years old when he lost his mother. He had already lost his father before he was born. He had been separated from his foster-mother. He had experienced the Shaqq al-Ṣadr. Now this. Allāh ﷻ did not protect His Prophet from grief — He strengthened him through it. What does this tell us about our own trials? And how does it change the way we see the orphans and the bereaved in our own communities?"
      },
      {
        kind: "segment",
        segmentNumber: 4,
        minutes: 10,
        chapterTitle: "He Wept at Her Grave",
        heading: "Virtue: Raḥmah — The Mercy That Makes Us Human",
        subLabel: "Love That Does Not End with Death",
        hadith: {
          type: "hadith",
          arabic: "اسْتَأْذَنْتُ رَبِّي أَنْ أَسْتَغْفِرَ لَهَا فَلَمْ يُؤْذَنْ لِي وَاسْتَأْذَنْتُ أَنْ أَزُورَ قَبْرَهَا فَأُذِنَ لِي فَزُورُوا الْقُبُورَ فَإِنَّهَا تُذَكِّرُكُمُ الْمَوْتَ",
          translation: "I asked my Lord's permission to seek forgiveness for her, but I was not given permission. And I asked His permission to visit her grave, and I was given permission. So visit graves, for they remind you of death.",
          reference: "Ṣaḥīḥ Muslim, Kitāb al-Janāʾiz, Ḥadīth 976"
        },
        explanation: [
          "This ḥadīth is one of the most moving in the entire Sīrah. The man who bore the message of the entire universe — who spoke to kings, who led armies, who received revelation from Allāh — stood at a grave in the desert and wept for his mother. He was not ashamed of his tears. He was not told that weeping is weakness. His tears were love. His tears were mercy. His tears were the mark of a heart that remembered."
        ],
        sections: [
          {
            heading: "The Return to Makkah",
            text: [
              "Umm Ayman brought the young Muḥammad ﷺ back to Makkah. She walked that road with a grieving six-year-old orphan and delivered him to his grandfather, ʿAbd al-Muṭṭalib — the great chieftain of Quraysh, the old man who had wept with joy at his birth, who had named him Muḥammad, who had watched over him since his father's death.",
              "Now his mother was gone too.",
              "The books of Sīrah tell us that ʿAbd al-Muṭṭalib received his grandson with sorrow and love, and took him under his full care and protection. The young Muḥammad ﷺ — six years old, an orphan without father or mother — entered the house of his grandfather. And Allāh ﷻ was watching over him."
            ]
          },
          {
            heading: "Decades Later — He Stood at Her Grave",
            text: [
              "Decades later, after prophethood had come and the message of Islām was spreading across Arabia — the Prophet ﷺ passed by Al-Abwāʾ during one of the expeditions of Islām. He stopped. He visited his mother's grave. And he wept.",
              "Those around him wept too — not knowing at first exactly why, only knowing that the Prophet ﷺ was weeping, and that when the Prophet ﷺ wept, something real was happening.",
              "Then he spoke the words recorded in Ṣaḥīḥ Muslim: that he had asked permission to seek forgiveness for her, and was not granted it. That he had asked permission to visit her grave, and was granted that. And that the companions should visit graves — because visiting graves reminds us of death.",
              "He did not hide his grief. He did not apologise for his tears. He stood at the grave of his mother and loved her openly, without shame, in front of his companions — and then he turned that love into a lesson that has reached every Muslim who has ever lived."
            ]
          }
        ],
        reflection: "The Prophet ﷺ wept at his mother's grave decades after her death. He never forgot her. He was not too grand, too busy, too important to stand at a grave and be a son who missed his mother. When is the last time you made duʿāʾ for your parents — living or departed? What would it mean to take one moment, right now, to remember them before Allāh?"
      },
      {
        kind: "reflection",
        questions: [
          "Āminah was a young widow who raised the Prophet ﷺ alone and then passed away on a journey. What does her life teach us about patience, sacrifice, and the quiet heroism of mothers who carry what others cannot see?",
          "The Prophet ﷺ was present when his mother died — at six years old, in the desert, far from home. Allāh did not protect him from this grief. He strengthened him through it. What does this tell us about the relationship between hardship and preparation?",
          "Umm Ayman walked the young orphan back to Makkah. She was a servant. She had no obligation beyond what she chose to give. Yet she gave everything — and the Prophet ﷺ honoured her for life, calling her 'my mother after my mother.' What does this teach us about how Allāh places people in our lives at the right time?",
          "The Prophet ﷺ wept at his mother's grave after prophethood — openly, without shame. What does this tell us about how Islām views grief, emotion, and the love between a child and a parent?"
        ],
        actionPoint: "Within the next 24 hours: call or visit a parent, grandparent, or elder in your family. Tell them you love them. Make duʿāʾ for them by name. If they have already passed, sit quietly and recite Sūrah al-Fātiḥah for their soul. The Prophet ﷺ never forgot his mother. Neither should we forget ours. At family taʿlīm tonight, ask each person: where did Āminah die? Who brought the Prophet ﷺ back to Makkah? And what did the Prophet ﷺ say when he visited her grave?"
      },
      {
        kind: "closing",
        paragraphs: [
          "We began today before the journey — with a mother who had carried loss since before her son was born. Widowed before her child arrived in the world, Āminah bint Wahb raised the Prophet ﷺ alone, with dignity and love, as a woman of Makkah who understood patience long before she was tested by it.",
          "She made the long journey to Yathrib — five hundred kilometres through the desert — so that her six-year-old son could stand at the grave of his father and know where he came from. For a month, the young Muḥammad ﷺ walked the streets of the city that would one day be his home, played with its children, and breathed its air.",
          "On the return journey, Āminah fell ill at a place called Al-Abwāʾ. She could travel no further. She died there. She was buried there. And Umm Ayman — the devoted Barakah al-Ḥabashiyyah, who had served the household since ʿAbdullāh's time — took the young orphan's hand and walked him back to Makkah.",
          "ʿAbd al-Muṭṭalib received him. The young Muḥammad ﷺ — six years old, without father or mother — entered the house of his grandfather. And Allāh ﷻ, who had arranged every detail of this child's life before he was born, was watching over every step.",
          "Decades later, the Prophet ﷺ stood at his mother's grave and wept. He asked permission to seek forgiveness for her. It was not given. He asked permission to visit her grave. It was. He taught us that visiting graves reminds us of death — and he taught it standing beside the grave of the woman who had loved him first.",
          "May Allāh ﷻ have mercy on Āminah bint Wahb. May He have mercy on every mother who has carried grief alone. May He shelter every orphan the way He sheltered His Prophet. And may He make us people who remember — the way the Prophet ﷺ remembered his mother, with love that does not end."
        ],
        duaArabic: "اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ",
        duaTranslation: "O Allāh, send blessings upon Muḥammad and upon the family of Muḥammad, as You sent blessings upon Ibrāhīm and upon the family of Ibrāhīm. Indeed You are Praiseworthy and Glorious. Āmīn.",
        nextLessonPreview: "After the death of Āminah, the young Muḥammad ﷺ entered the home and care of his grandfather, ʿAbd al-Muṭṭalib — the great chieftain of Quraysh, the old man who had wept with joy when his grandson was first named. For two years, the old man honoured his grandson above all others — giving him a place beside him that he gave to no one else. But ʿAbd al-Muṭṭalib was already old. In our next lesson, we follow the young Prophet ﷺ through his final loss of early childhood — and meet the uncle who would shelter him through the most difficult years of his life.",
        discoveryNote: "✦ Go Deeper — Āminah raised her son with dignity through grief. ʿAbd al-Muṭṭalib honoured his orphaned grandson above all others. Abū Ṭālib would shelter him for forty years. Umm Ayman walked him home when no one else was there. Open the Profiles tab to know each of them. The Maps tab shows Al-Abwāʾ — where Āminah was buried — and Makkah al-Mukarramah, where the young Prophet ﷺ was received.",
      },

      // ── Lesson 7 — The Death of ʿAbd al-Muṭṭalib ──────────────────────────────

      {
        kind: "part-divider",
        title: "The Death of ʿAbd al-Muṭṭalib",
        subtitle: "Part 7",
        description: [
          "After the death of his mother Āminah, the young Muḥammad ﷺ was received into the home of his grandfather — the great chieftain of Quraysh, ʿAbd al-Muṭṭalib ibn Hāshim. For two years, the old man loved him with a tenderness that went beyond ordinary family care. He seated the young Prophet ﷺ beside himself at the Kaʿbah — a place he shared with no one else, not even his own sons.",
          "But the Prophet ﷺ had already lost his father before birth, and his mother at six. The time had come for his third loss. In this lesson, we walk with the eight-year-old Muḥammad ﷺ through the final months of his grandfather's life — and meet the uncle who stepped forward to shelter him when the old man could stand no more."
        ]
      },
      {
        kind: "segment",
        segmentNumber: 1,
        minutes: 10,
        chapterTitle: "Who Was ʿAbd al-Muṭṭalib?",
        heading: "Virtue: Raḥmah — A Mercy That Makes No Distinctions",
        subLabel: "The Chieftain Who Honoured an Orphan Above His Own Sons",
        hadith: {
          type: "ayah",
          arabic: "وَمَا أَرْسَلْنَاكَ إِلَّا رَحْمَةً لِّلْعَالَمِينَ",
          translation: "We have not sent you except as a mercy for all the worlds.",
          reference: "Sūrah al-Anbiyāʾ — 21:107",
        },
        explanation: [
          "After his mother Āminah was buried at Al-Abwāʾ and Umm Ayman had walked him back across the desert, the young Muḥammad ﷺ arrived at the home of his grandfather — six years old, without a father, without a mother, carrying a grief that had no words.",
          "What he received from ʿAbd al-Muṭṭalib ibn Hāshim was not just shelter. The Sīrah records something more specific: he was honoured. Publicly. Deliberately. In a way that left an impression on everyone who witnessed it. The virtue that frames this lesson is Raḥmah — mercy — and it begins here, in the actions of an old chieftain toward a child the world had not yet recognised.",
        ],
        sections: [
          {
            heading: "The Man at the Head of Quraysh",
            text: [
              "ʿAbd al-Muṭṭalib ibn Hāshim was no ordinary grandfather. He was the sayyid — the chieftain — of Quraysh, the most powerful and respected clan in Arabia. It was he who had stood at the Kaʿbah and prayed to Allāh when Abraha's army of elephants marched from Yemen. It was he who had rediscovered and re-dug the sacred well of zamzam, which had been lost to the desert for generations.",
              "He had outlived several of his own children. He was aged, authoritative, and deeply revered. When he received the orphaned six-year-old Muḥammad ﷺ into his home, the whole of Makkah was watching.",
            ],
          },
          {
            heading: "A Seat That No One Else Received",
            text: [
              "Ibn Isḥāq records in the Sīrah that ʿAbd al-Muṭṭalib had a special mat laid for him in the shade of the Kaʿbah. His sons stood respectfully around it — no one would sit beside the old man on that mat. This was a mark of his status and their deference.",
              "But when the young Muḥammad ﷺ approached, he would walk directly to that mat and sit beside his grandfather. And the old man did not stop him. When his sons moved to hold the child back out of respect for the elder's space, ʿAbd al-Muṭṭalib would wave them away and say: 'Leave my son alone. By Allāh, this child will be of great importance.'",
              "He was given a place beside the most respected man in Makkah — a seat that the old man's own sons could not occupy. This was not accident. It was a deliberate, public act of honour toward an orphan.",
            ],
          },
          {
            heading: "Why Raḥmah Looks Like Honour",
            text: [
              "We often think of mercy as something quiet — a gentle word, a patient response. But mercy at its deepest is sometimes an act of giving someone back their dignity in front of others. ʿAbd al-Muṭṭalib did not simply feed and clothe his grandson. He seated him at the centre of public life and said: this child belongs here.",
              "The Qurʾān tells us that the Prophet ﷺ himself was sent as mercy for all the worlds (21:107). That mercy was not learned in a vacuum. It was first shown to him — by an old man who made room for a small child at the greatest house on earth.",
            ],
          },
        ],
        reflection: "ʿAbd al-Muṭṭalib gave his orphaned grandson a public seat of honour — not hidden care, but visible dignity. Think of one person in your life who has experienced loss or hardship. What would it mean to give them a seat of honour — to name them, include them, place them beside you in front of others?",
      },
      {
        kind: "segment",
        segmentNumber: 2,
        minutes: 10,
        chapterTitle: "Two Years Under His Grandfather's Care",
        heading: "Virtue: Birr — The Goodness That Costs Something",
        subLabel: "When the Guardian of an Orphan Earns the Companionship of the Prophet ﷺ",
        hadith: {
          type: "hadith",
          arabic: "أَنَا وَكَافِلُ الْيَتِيمِ فِي الْجَنَّةِ هَكَذَا",
          translation: "I and the guardian of an orphan will be together in Paradise like this — and he gestured with his index and middle fingers, holding them side by side.",
          reference: "Ṣaḥīḥ al-Bukhārī — Ḥadīth 5304",
        },
        explanation: [
          "For approximately two years — from the age of six to eight — the young Muḥammad ﷺ lived under the direct care of ʿAbd al-Muṭṭalib. The Sīrah sources do not give us a day-by-day account of these years, but they do give us a consistent picture: an old man who made his grandson the centre of his attention and affection, in a way that witnesses remembered long afterward.",
          "The virtue for this lesson is Birr — a word that carries the sense of sustained, sacrificial goodness toward those who depend on us. And the ḥadīth above gives us the Prophet's ﷺ own promise to those who live that virtue toward orphans.",
        ],
        sections: [
          {
            heading: "What the Sīrah Records",
            text: [
              "The primary accounts of this period come from Ibn Isḥāq as preserved by Ibn Hishām, and from Ibn Kathīr in Al-Bidāyah wa al-Nihāyah. All of them preserve the same picture: ʿAbd al-Muṭṭalib did not treat the Prophet ﷺ as one child among many grandchildren. He treated him differently from the first day.",
              "He ate with him. He included him in his council sessions. He was physically affectionate with him in a way that witnesses noted and recorded. The Sīrah mentions that on journeys, he would place the Prophet ﷺ on his own riding animal — a mark of honour he did not extend to others. The old man's love for this child was visible, consistent, and unreserved.",
            ],
          },
          {
            sacredText: {
              type: "hadith",
              arabic: "كَافِلُ الْيَتِيمِ لَهُ أَوْ لِغَيْرِهِ أَنَا وَهُوَ كَهَاتَيْنِ فِي الْجَنَّةِ",
              translation: "The guardian of an orphan — whether his own relative or a stranger — and I will be together in Paradise like these two.",
              reference: "Ṣaḥīḥ Muslim — Ḥadīth 2983",
            },
          },
          {
            heading: "Why Allāh Arranged This",
            text: [
              "Scholars of Sīrah have noted the unmistakeable pattern of the Prophet's ﷺ early life: every loss was answered with a care-giver placed precisely for the purpose. ʿAbdullāh died — Āminah was there. Āminah died — ʿAbd al-Muṭṭalib was there. ʿAbd al-Muṭṭalib would die — and Abū Ṭālib would be there.",
              "Allāh did not leave His Prophet ﷺ without shelter for a single moment of his childhood. Each guardian was chosen and timed. This was not coincidence — it was a divine curriculum. The man who would one day be sent as a mercy to all worlds was first shown mercy by everyone Allāh placed near him.",
              "The ḥadīth above carries a weight that is personal to the Prophet ﷺ. When he said that he and the guardian of an orphan would be like two fingers together in Paradise — he knew, from his own experience, exactly what such a guardian means to a child.",
            ],
          },
        ],
        reflection: "The Prophet ﷺ promised Paradise beside himself to the guardian of an orphan. This is one of the most direct ḥadīth-promises in the Sunnah. If you have not yet taken a step toward this promise — through financial support, direct care, time, or presence with a child in need — what is one concrete step you could take this week?",
      },
      {
        kind: "segment",
        segmentNumber: 3,
        minutes: 10,
        chapterTitle: "The Third Loss",
        heading: "Virtue: Ṣabr — A Patience That Allāh Himself Testifies To",
        subLabel: "The Eight-Year-Old Who Had Already Lost the World",
        hadith: {
          type: "ayah",
          arabic: "أَلَمْ يَجِدْكَ يَتِيمًا فَآوَىٰ",
          translation: "Did He not find you an orphan and give you refuge?",
          reference: "Sūrah al-Ḍuḥā — 93:6",
        },
        explanation: [
          "When ʿAbd al-Muṭṭalib fell ill, those around him knew he was dying. He had lived a long life — the Sīrah sources estimate approximately eighty years, though they differ in detail. He had done much in that time. But what moved him most as he lay ill was not his own journey ahead. It was the child he would leave behind.",
          "The Sīrah accounts of ʿAbd al-Muṭṭalib's final days are sober and consistent. He gathered his sons. He wept. And he gave instructions about the child.",
        ],
        sections: [
          {
            heading: "A Deathbed Concern",
            text: [
              "Ibn Isḥāq and Ibn Kathīr both preserve the account of ʿAbd al-Muṭṭalib's final days. As his health declined, he called his sons together and spoke about Muḥammad ﷺ. He expressed a specific wish: that the child be taken into the guardianship of Abū Ṭālib.",
              "Why Abū Ṭālib? Because Abū Ṭālib was the full brother of ʿAbdullāh — the Prophet's ﷺ father. Of all the sons of ʿAbd al-Muṭṭalib, Abū Ṭālib shared a mother with ʿAbdullāh, making him the closest connection in lineage to the child's own father.",
              "The Sīrah also records that the young Muḥammad ﷺ was present at his grandfather's bedside in those final days. He was approximately eight years old.",
            ],
          },
          {
            heading: "The Weight of Three Losses",
            text: [
              "By the time ʿAbd al-Muṭṭalib passed away, the young Prophet ﷺ had lost more in eight years than most adults lose in a lifetime. His father had died before he was born. His mother had died when he was six, in a desert village far from home. His grandfather — who had been his protection, his honour, and his daily companion — was gone now too.",
              "No primary source gives us the exact words or reactions of the child in those moments. What all accounts agree on is that he continued. He was received into another household and he moved forward.",
              "This is ṣabr — not the absence of grief, but the decision to continue through it. And decades later, when Allāh spoke directly to the Prophet ﷺ in Sūrah al-Ḍuḥā, He named what He had done for him as a child. He had found him an orphan. And He had given him refuge.",
            ],
          },
          {
            sacredText: {
              type: "ayah",
              arabic: "وَوَجَدَكَ ضَالًّا فَهَدَىٰ ۝ وَوَجَدَكَ عَائِلًا فَأَغْنَىٰ",
              translation: "And He found you astray and guided you. And He found you in need and made you self-sufficient.",
              reference: "Sūrah al-Ḍuḥā — 93:7–8",
            },
          },
          {
            text: [
              "Every loss in the Prophet's ﷺ childhood was met with a divine response. The Qurʾān does not deny the hardship — it names it. But then it names what Allāh did about it. He found him. He sheltered him. He guided him. He provided for him.",
              "For the eight-year-old at his grandfather's graveside, none of this arc was visible yet. The reassurance of Sūrah al-Ḍuḥā would not come for another thirty-two years. He could only take the next step. And he did.",
            ],
          },
        ],
        reflection: "Allāh said to His Prophet ﷺ — decades after the losses of childhood — 'Did He not find you an orphan and give you refuge?' This āyah was a reminder given from outside of time. When you or your family are in the middle of a loss with no visible resolution, how does it change your experience to know that Allāh is already writing the sentence that begins: 'Did He not find you...'?",
      },
      {
        kind: "segment",
        segmentNumber: 4,
        minutes: 10,
        chapterTitle: "Abū Ṭālib Takes His Nephew",
        heading: "Virtue: Wafāʾ — A Loyalty That Does Not Break",
        subLabel: "The Promise Kept Through Forty Years of Tests",
        hadith: {
          type: "ayah",
          arabic: "وَأَوْفُوا بِالْعَهْدِ ۖ إِنَّ الْعَهْدَ كَانَ مَسْئُولًا",
          translation: "And fulfil every promise — for every promise will be questioned.",
          reference: "Sūrah al-Isrāʾ — 17:34",
        },
        explanation: [
          "When ʿAbd al-Muṭṭalib died, his son Abū Ṭālib received the eight-year-old Muḥammad ﷺ into his home. This is established across all the primary Sīrah sources without dispute. What is equally established — though the full story unfolds over the next forty years — is that Abū Ṭālib kept this commitment absolutely.",
          "This lesson ends here: at the threshold of Abū Ṭālib's home, as the child crosses it. But before we close, it is worth pausing to understand the man who opened that door — and the scale of what he was taking on, though neither he nor the child yet knew it.",
        ],
        sections: [
          {
            heading: "Who Was Abū Ṭālib?",
            text: [
              "Abū Ṭālib ibn ʿAbd al-Muṭṭalib was the full brother of ʿAbdullāh — the Prophet's ﷺ father. This made him the uncle whose lineage was closest to the Prophet's ﷺ own. He was not a wealthy man — the Sīrah records that he had many children of his own and limited resources — but he took his orphaned nephew without hesitation.",
              "Al-Bidāyah wa al-Nihāyah records that Abū Ṭālib treated the Prophet ﷺ with a warmth and preference that his own children noticed. He would insist the child sleep near him. He would take him on journeys. He would, over time, arrange everything around his nephew.",
            ],
          },
          {
            heading: "A Protection That Would Last Forty Years",
            text: [
              "What the eight-year-old did not know as he entered Abū Ṭālib's home was that this arrangement would not end until Abū Ṭālib died — forty years later, in 619 CE, the same year as Khadījah رضي الله عنها. That year would be called the Year of Grief for a reason.",
              "During those forty years, Abū Ṭālib would stand between his nephew and the most powerful men in Arabia. When the Prophet ﷺ declared prophethood, Abū Ṭālib refused to hand him over. When the Quraysh boycotted the Hāshimī clan and blockaded them in a mountain valley for three years without food or trade, Abū Ṭālib endured it at his nephew's side. He was asked, repeatedly and forcefully, to silence his nephew or withdraw his protection. Every time, he refused.",
            ],
          },
          {
            heading: "A Complexity We Must Acknowledge",
            text: [
              "The Qurʾān and authenticated ḥadīth are clear: Abū Ṭālib did not die as a Muslim. The Prophet ﷺ was not permitted to seek forgiveness for him after his death (Sūrah al-Tawbah — 9:113). This is an established and non-negotiable point in Islamic theology.",
              "And yet the Prophet ﷺ is reported in Ṣaḥīḥ Muslim to have said that perhaps his intercession would bring Abū Ṭālib to the shallowest place in the Fire — with embers only at his ankles. He described this as a mercy extended to his uncle on account of his protection.",
              "We hold both realities without contradiction. Abū Ṭālib's loyalty was genuine and his protection was divinely arranged. His failure to accept Islām is also a fact we do not diminish. We do not judge him and we do not seek forgiveness for him. We simply note that Allāh, in His wisdom, used a man exactly as he was — with his fierce, tribal, unconditional loyalty — to preserve His Prophet ﷺ through the most dangerous years of the prophetic mission.",
            ],
          },
        ],
        reflection: "Abū Ṭālib made a promise — to care for his nephew — and kept it for forty years through poverty, siege, social pressure, and old age. Think of a commitment you have made to a family member or someone who depends on you. What does wafāʾ — true, sustained loyalty — look like for you this week?",
      },
      {
        kind: "reflection",
        questions: [
          "ʿAbd al-Muṭṭalib gave his orphaned grandson a public seat of honour — beside him at the Kaʿbah, a seat his own sons could not occupy. Why do you think Allāh arranged for the Prophet ﷺ to receive this kind of visible dignity during his childhood? What does it tell us about what children who have experienced loss actually need — beyond food and shelter?",
          "The Prophet ﷺ lost his father before birth, his mother at six, and his grandfather at eight. Each loss was met by Allāh with a new guardian — placed precisely, at the right moment. What pattern do you see in how Allāh cares for those He is testing? How does recognising this pattern change the way you face difficult periods in your own life?",
          "Abū Ṭālib was not a Muslim. Yet his protection of the Prophet ﷺ was part of Allāh's plan for the delivery of the message of Islām to the world. What does this teach us about how Allāh works through people of different beliefs to fulfil His purposes? And how should this shape our understanding of non-Muslims who act with loyalty, justice, and care?",
          "If the Prophet ﷺ — the most beloved of Allāh, the best of all creation — was raised as an orphan who lost his father, his mother, and his grandfather before the age of nine, what does this say about the relationship between loss and the formation of a person's character and reliance upon Allāh alone?"
        ],
        actionPoint: "This week: do something concrete for an orphan or a child who is growing up without one or both parents. It does not need to be large. A phone call to a widow's child. A gift sent to a foster family. A duʿāʾ made by name at Fajr for a specific child you know who is standing alone. The Prophet ﷺ told us that the guardian of an orphan walks beside him in Paradise. Choose, this week, to stand beside a child who is standing alone."
      },
      {
        kind: "closing",
        paragraphs: [
          "We began today with an old man — a chieftain of Quraysh who had survived the Year of the Elephant, who had re-dug the zamzam well from beneath centuries of desert, who had stood at the door of the Kaʿbah and prayed to Allāh when an army with elephants was marching toward His house. At the end of his long life, he held a small boy's hand and gave him the one thing no wealth or power can manufacture: the feeling of being deeply loved, and publicly honoured.",
          "The young Muḥammad ﷺ was six years old when he arrived at his grandfather's door. He was eight years old when he left it — not because he chose to go, but because death came for the old man too. Father before birth. Mother at six. Grandfather at eight. Three losses before childhood was finished.",
          "But Allāh does not abandon those He loves — He transfers them. From Āminah to ʿAbd al-Muṭṭalib. From ʿAbd al-Muṭṭalib to Abū Ṭālib. Each guardian was a mercy wearing a different name. Each handover was a proof that no child held in Allāh's plan is ever, for a single moment, truly alone.",
          "Abū Ṭālib took his nephew's hand and brought him into his home. He did not know what he was taking on. He did not know that he would one day stand in the face of the entire leadership of Quraysh and refuse to surrender this child. He did not know that he would endure a three-year siege in a mountain valley, half-starved and aged, rather than break the promise he was making now.",
          "He only knew that his father had asked him to care for the boy. And that was enough.",
          "May Allāh ﷻ have mercy on ʿAbd al-Muṭṭalib, who loved his grandson before the world knew who he was. May He honour every elder who extends dignity and love to a child who has no one. May He make our homes the kind of homes where the vulnerable are given a place of honour — not hidden away in pity, but seated beside us. And may He make us people of wafāʾ — who keep our promises as Abū Ṭālib kept his, for forty years, without breaking."
        ],
        duaArabic: "اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ",
        duaTranslation: "O Allāh, send blessings upon Muḥammad and upon the family of Muḥammad, as You sent blessings upon Ibrāhīm and upon the family of Ibrāhīm. Indeed You are Praiseworthy and Glorious. Āmīn.",
        nextLessonPreview: "Abū Ṭālib took his nephew into his care — and soon, he would take him on the road. At around the age of twelve, the young Muḥammad ﷺ would travel with his uncle on a trading caravan to Shām. On that journey, a Christian monk named Baḥīrā would watch the approaching caravan from his monastery, study the young Muḥammad ﷺ with careful eyes, and tell Abū Ṭālib: 'Guard this child from the people.' The encounter that recognised the Prophet ﷺ before prophethood came is the subject of our next lesson.",
        discoveryNote: "✦ Go Deeper — ʿAbd al-Muṭṭalib loved his grandson before the world knew who he was. Abū Ṭālib sheltered him when no one else could. Open the Profiles tab to read about two men whose role in the Sīrah is impossible to overstate.",
      },
      // ── Lesson 8 — The Journey to Sham ───────────────────────────────────────
      {
        kind: "part-divider",
        title: "The Journey to Sham",
        subtitle: "Part 8",
        description: [
          "A trading caravan, a twelve-year-old boy, and a monk who had been waiting for a lifetime.",
          "The first soul outside Arabia to recognise the final Prophet — before a single verse had been revealed."
        ]
      },
      {
        kind: "segment",
        segmentNumber: 1,
        minutes: 10,
        chapterTitle: "A Boy Who Could Not Be Left Behind",
        heading: "Virtue: Muhabbah — The Love That Cannot Let Go",
        subLabel: "The Bond Between Nephew and Uncle",
        hadith: {
          type: "ayah",
          arabic: "وَأَلَّفَ بَيْنَ قُلُوبِهِمْ ۚ لَوْ أَنفَقْتَ مَا فِي الْأَرْضِ جَمِيعًا مَّا أَلَّفْتَ بَيْنَ قُلُوبِهِمْ وَلَٰكِنَّ اللَّهَ أَلَّفَ بَيْنَهُمْ",
          translation: "And He brought together their hearts. Had you spent all that is in the earth, you could not have brought their hearts together; but Allah brought them together.",
          reference: "Surah al-Anfal, 8:63"
        },
        explanation: [
          "The bond between the young Muhammad and his uncle Abu Talib was not an ordinary bond. It had been forged through loss — through the death of Abd al-Muttalib, through the handover of a grieving child to a new guardian, through years of shared life in the same household. By the time the young Prophet was approaching twelve years old, this bond was the strongest relationship he had in the world. And when Abu Talib began preparing a trading caravan to Sham — a journey of months through the desert — the boy could not bear to be left behind."
        ],
        sections: [
          {
            heading: "The Caravan Assembles",
            text: [
              "Abu Talib was a merchant. The great trade route from Makkah north through the Hijaz and into Sham was the lifeblood of Quraysh commerce, and Abu Talib, like many of the leaders of Makkah, led caravans along it. The journey to Sham was not a short one — it required weeks of preparation, months of travel, and all the logistical complexity of moving merchants, merchandise, and camels through the desert to the markets of southern and central Sham.",
              "The year was approximately 582 CE. The young Muhammad was around twelve years old. He had lived with Abu Talib for several years — ever since the death of his grandfather Abd al-Muttalib had placed him in his uncle's care. He had grown up in Abu Talib's household, alongside Abu Talib's own children, knowing no other home.",
              "When the caravan preparations began — the loading of camels, the gathering of goods, the assembling of men — the young Muhammad saw that his uncle was going to leave. And he could not let him."
            ]
          },
          {
            heading: "He Could Not Be Left Behind",
            text: [
              "The books of Sirah record that when Abu Talib prepared to depart, the young Muhammad held onto him — unwilling to be separated. Some accounts describe him clinging to his uncle, unable to let him go. Abu Talib looked at his nephew's face and felt something that no calculation of logistics or practicality could overcome: the certainty that he could not leave this child behind.",
              "A twelve-year-old on a trade caravan to Sham was not the practical choice. The journey was long and arduous. There were risks on the road — the desert heat, the uncertainty of travel, the physical demands of months away from home. A child was an additional responsibility. By any calculation, the sensible thing was to leave him in Makkah.",
              "Abu Talib did not leave him in Makkah. He took him. And in that decision — made out of love, made because he could not say no to the eyes of his nephew — Allah's plan moved forward one step."
            ]
          }
        ],
        reflection: "The bond between the Prophet and Abu Talib was one that Allah had arranged and sustained through years of loss and care. Abu Talib's love for his nephew was so strong that he could not leave for months without him — even when it was impractical, even when it added burden. Is there someone in your life whose love for you has shaped the trajectory of your story — someone whose presence at a critical moment changed what happened next? Have you told them?"
      },
      {
        kind: "segment",
        segmentNumber: 2,
        minutes: 10,
        chapterTitle: "The Road North — Toward Sham",
        heading: "Virtue: Tafakkur — Seeing the Signs of Allah in the Earth",
        subLabel: "The Journey That Opened a World",
        hadith: {
          type: "ayah",
          arabic: "قُلْ سِيرُوا فِي الْأَرْضِ فَانظُرُوا كَيْفَ بَدَأَ الْخَلْقَ",
          translation: "Say: Travel through the earth and observe how Allah began creation.",
          reference: "Surah al-Ankabut, 29:20"
        },
        explanation: [
          "For a boy who had grown up in Makkah — a city surrounded by mountains, enclosed in a narrow valley, ancient and inward-facing — the road north was a revelation. Allah repeatedly commands the believers to travel through the earth and to observe. The young Muhammad, on his first long journey beyond the mountains of the Hijaz, was living that command before it had been given to him. Every horizon that opened before the caravan was a page in a book that Allah was writing."
        ],
        sections: [
          {
            heading: "Through the Hijaz",
            text: [
              "The caravan set out from Makkah moving north. The route to Sham was one of the great trade arteries of the ancient world — a road that had been travelled for centuries by the merchants of Arabia, and before them by earlier peoples whose ruins lay scattered along the way. The desert opened into different landscapes: red rock formations, dried riverbeds, scrubland and wide plains, then gradually the changed terrain of the north.",
              "The young Muhammad saw the world beyond Makkah for the first time. He saw the different peoples who gathered at waypoints and wells along the route. He saw the traces of civilisations that had come before — places Allah would later mention in the Quran as reminders to those who travel and look. This first long journey was, in many ways, the young Prophet's first exposure to the breadth of creation — to a world much wider than the valley of Makkah."
            ]
          },
          {
            heading: "The Land of the Prophets",
            text: [
              "Sham — the region encompassing modern-day Syria, Palestine, Jordan, and Lebanon — was not simply a trade destination. It was, in the tradition of the Prophets, a blessed land. Ibrahim alayhi us-salam had migrated to Sham. Lut alayhi us-salam had settled near it. Dawud and Sulayman alayhim us-salam had built their kingdoms within it. The great prophets of Banu Isra'il had walked its soil. The Prophet would later say: 'Allah has blessed what is between al-Arish and the Euphrates, and has especially blessed Sham.' (Ahmad, sahih chain)",
              "The young Muhammad was being brought, by his uncle's love and Allah's plan, to the land that his predecessors in prophethood had called home. He did not know this yet. He was twelve years old, travelling with a caravan of merchants, watching the desert roll past. But Allah knew. And ahead, on the road that led through southern Sham toward the great markets, lay a monastery — and a monk who had been waiting his whole life for this caravan to come."
            ]
          }
        ],
        reflection: "The Prophet travelled through the earth and saw what Allah had placed in it — ancient routes, different peoples, the traces of civilisations that had risen and fallen. The Quran later commanded the believers to travel and to observe these same things. What are you passing through in your life right now — a season, a challenge, a new environment — that Allah might be using as a form of learning? Are you observing it, or only enduring it?"
      },
      {
        kind: "segment",
        segmentNumber: 3,
        minutes: 10,
        chapterTitle: "The Monk at the Monastery",
        heading: "Virtue: Wilayah — Being Under Allah's Care and Protection",
        subLabel: "A Cloud That Followed Only One",
        hadith: {
          type: "ayah",
          arabic: "إِنَّ وَلِيِّيَ اللَّهُ الَّذِي نَزَّلَ الْكِتَابَ ۖ وَهُوَ يَتَوَلَّى الصَّالِحِينَ",
          translation: "Indeed, my Protector is Allah, who has sent down the Book; and He is the Protector of the righteous.",
          reference: "Surah al-A'raf, 7:196"
        },
        explanation: [
          "What Bahira noticed as the caravan from Makkah approached was not visible to the caravan members themselves. They were merchants, moving with their goods toward the markets of Sham — focused on the practical demands of the road. They did not see what a scholar of scripture, watching from the height of his monastery, saw: that something in this caravan was different. That something in this caravan was being sheltered in a way he had only ever read about."
        ],
        sections: [
          {
            heading: "Bahira — The Scholar in the Monastery",
            text: [
              "At the outskirts of Busra, in the region of southern Sham, stood a monastery — a sawma'ah — where a Christian monk known as Bahira had made his home. Bahira was not an ordinary monk. He was a scholar of scripture — one who had inherited and studied ancient books describing the signs of the final prophet who would come from the Arabs. These descriptions were specific: physical characteristics, behavioural patterns, a mark between his shoulders, the way the creation around him would respond.",
              "The books of Sirah — and the Tirmidhi narration, graded hasan sahih (Tirmidhi 3620) — record that Bahira had inherited this knowledge from those before him. He had sat with these texts his whole life. He had watched many caravans from Makkah and other parts of Arabia pass by his monastery over the years. He had never once descended to invite them. He was waiting for something specific. And when the caravan from Makkah appeared on the road, he saw, for the first time in his life, what he had been looking for."
            ]
          },
          {
            heading: "The Cloud and the Tree",
            text: [
              "As the caravan approached, Bahira observed something that stopped him: a small cloud was moving over the caravan — but not over the whole caravan. It was shading one person specifically, moving with him as he moved. When the caravan stopped to rest beneath a tree for midday shade, the branches extended their shade specifically over the young Muhammad, while the others sat in the open sun.",
              "These were the signs Bahira had read about in his ancient books. He descended from his monastery — something he had never done for any caravan before. He prepared a meal. He invited the entire caravan. And when they came, he began to look — carefully, methodically — for the one the signs were pointing to."
            ]
          }
        ],
        reflection: "The cloud that shaded the Prophet and the tree that bent its branches toward him were signs of Allah's protection — observed by a stranger who had studied the descriptions, while those closest to the Prophet walked past them. How often do we pass through moments of divine care without recognising them for what they are? What would it mean to begin noticing the ways Allah is sheltering you — in circumstances, in people, in outcomes — that you have not yet stopped to name?"
      },
      {
        kind: "segment",
        segmentNumber: 4,
        minutes: 10,
        chapterTitle: "Guard This Child",
        heading: "Virtue: Basira — The Inner Sight That Sees Through to the Truth",
        subLabel: "Every Sign Matched",
        hadith: {
          type: "ayah",
          arabic: "الَّذِينَ آتَيْنَاهُمُ الْكِتَابَ يَعْرِفُونَهُ كَمَا يَعْرِفُونَ أَبْنَاءَهُمْ",
          translation: "Those to whom We gave the Scripture recognise him as they recognise their own sons.",
          reference: "Surah al-Baqarah, 2:146"
        },
        explanation: [
          "The Quran would later reveal — and the scholars of Islam have always understood — that the People of the Book who had kept their scriptures faithfully recognised the description of the final Prophet. The ayah does not say they had a vague sense; it says they recognised him as they recognised their own children. The certainty of Bahira, when he stood before the young Muhammad at Busra, was not the excited claim of a charlatan. It was the methodical conclusion of a scholar who had spent his life studying the criteria — and now, for the first time, found a person who met every single one."
        ],
        sections: [
          {
            heading: "Every Sign Matched",
            text: [
              "Bahira had invited the entire caravan, but his attention was focused on one person. He asked careful questions — designed to check the criteria he had spent his life studying. He asked the boy's name. He asked about his father. He asked about his sleep and his habits. He then asked to examine his back. There, between the young Muhammad's shoulders, Bahira found what the ancient texts had described: the Khatam al-Nubuwwah — the Seal of Prophethood.",
              "This mark was real and visible. The Companions later reported seeing it. Al-Sa'ib ibn Yazid said: 'My maternal aunt took me to the Prophet and said: O Prophet of Allah, my nephew is ill. He touched my head and prayed for barakah for me. He made wudu' and I drank from his water. Then I saw the seal on his back — like a pigeon's egg.' (Sahih al-Bukhari, 190) Bahira saw it, matched it against the description in his books, and had no doubt."
            ]
          },
          {
            heading: "The Warning and the Return",
            text: [
              "Bahira took Abu Talib aside. 'What relation is this boy to you?' he asked. 'He is my son,' said Abu Talib. Bahira looked at him carefully. 'His father cannot be alive,' he said. 'You are right,' Abu Talib replied. 'He is my nephew.' Bahira then spoke with the quiet certainty of a man who had studied and waited and was now certain: 'Take him back. Guard him from the people. By Allah, if they see him and recognise what I recognise, they will do evil to him. A great future lies before this nephew of yours.'",
              "Abu Talib listened. He did not dismiss Bahira, did not ask for proof, did not weigh the inconvenience of cutting the journey short. He had brought this child because he could not leave without him. Now a scholar of ancient scripture was warning him — with certainty, with the weight of texts studied over a lifetime — that this child needed to be protected. Abul Talib acted. He sent the young Muhammad back to Makkah with trusted companions from the caravan.",
              "The boy went home. The caravan continued. And in a monastery at Busra, a monk named Bahira sat with the knowledge that what he had spent his life waiting for had just walked past his door — and had gone home, protected, to wait for the day when Allah would give him his mission."
            ]
          }
        ],
        reflection: "Bahira approached the Prophet not with emotion, but with method: he had criteria from ancient scripture, he checked them one by one, and he arrived at certainty. His certainty then produced action — he warned, and Abu Talib listened and acted. This is the model of basira: not vague spiritual feeling, but knowledge carefully applied to reality, producing the conviction to act. Where in your relationship with your Din are you operating on habit or assumption rather than the kind of careful, evidence-grounded certainty that produces real change?"
      },
      {
        kind: "reflection",
        questions: [
          "Bahira had studied ancient scriptures all his life and recognised the Prophet from their descriptions — before a single verse of the Quran had been revealed, and before the Prophet himself knew of his mission. What does this tell us about how Allah preserved the signs of the final prophet across centuries, even in the books of those who had changed much of what was given to them?",
          "The cloud that shaded the Prophet and the tree that bent its branches toward him were visible signs of divine protection — observed by Bahira but invisible to the caravan members themselves. What does it mean to consider that Allah was visibly protecting the Prophet his entire life, long before the first word of revelation? How does this shape the way you understand Allah's care for those He has chosen?",
          "Abu Talib was not a Muslim. Yet he listened to a Christian monk's warning and acted on it without ego or dismissal. What does this teach us about wisdom — the willingness to receive counsel from unexpected sources and to act on it when it is sound?",
          "The Prophet was twelve years old at the time of this encounter. He did not know he was being observed by Bahira. He did not know about the cloud, the tree's shade, or the monk's warning. Allāh's plan for him was already far more advanced than his own understanding of his situation. What does this teach us about qada — that the divine plan is written and being executed long before we know our role in it? How does this change the way you think about what is happening in your own life right now?"
        ],
        actionPoint: "This week, read Surah al-A'raf, ayah 157: 'Those who follow the Messenger, the unlettered Prophet, whom they find written in what they have of the Torah and the Gospel.' The Quran itself is a witness that the description of the Prophet was preserved in the earlier scriptures. Look up what the scholars of Tafsir say about this ayah — specifically, how the People of the Book recognised the Prophet from the descriptions their own prophets left behind. Let the certainty of Bahira — a man who kept ancient knowledge alive, and who acted on it the moment it walked past his door — inspire you to carry your own knowledge of the Din with that same conviction."
      },
      {
        kind: "closing",
        paragraphs: [
          "Something happened at Busra that no one in Makkah would ever hear about. A Christian scholar of scripture — a man who had devoted decades to studying the signs of the final prophet — looked at a twelve-year-old boy from Makkah and recognised in him what his own people would not recognise for another three decades. He descended from his monastery for the first time in living memory. He invited a caravan he had no business inviting. And then he said, with the quiet certainty of a man who had studied and waited and watched: guard this child from the people.",
          "He was right about everything. The boy he was looking at would, at forty years old, receive the first words of revelation in a cave on a mountain above Makkah. The caravan he had invited would be forgotten. The meal he had prepared would be forgotten. But the twelve-year-old who had walked past his door — the one with the cloud above him and the tree bending toward him and the seal between his shoulders — would be remembered until the end of time.",
          "The Bahira encounter is not a story about a monk. It is a story about Allah's protection of those He has chosen. The cloud did not appear by accident. The tree did not bend by chance. The seal was not a birthmark that happened to match an ancient description. These were signs placed by Allah, described in the books of earlier prophets, preserved across centuries, and waiting to be read by the one person who had kept that knowledge alive. Bahira had kept it. And when the moment came — when the signs walked past his monastery on a road in southern Sham — he was ready.",
          "The Prophet went home to Makkah. He did not know, on that road, that he had been recognised. He did not know about the cloud or the seal or the monk's warning. He was twelve years old, going home with his uncle's companions, leaving Sham behind. But Allah knew. And Allah was already preparing the world for what was coming next.",
          "May Allah make us among those who recognise the truth when it stands before us. May He give us the basira of Bahira — who did not let the truth walk past his door without receiving it. May He give us the faithfulness of Abu Talib — who listened when he was warned, and who acted when love demanded it. And may He, through the study of this Sirah, deepen in our hearts the certainty that the one whose signs were written in ancient scriptures, whose protection was visible before a single verse of revelation — that this Prophet was the truth, and that following him is the greatest gift Allah has ever given us."
        ],
        duaArabic: "اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ",
        duaTranslation: "O Allah, send blessings upon Muhammad and upon the family of Muhammad, as You sent blessings upon Ibrahim and upon the family of Ibrahim. Indeed You are Praiseworthy and Glorious. Amin.",
        nextLessonPreview: "After the encounter with Bahira, Abu Talib sent his nephew home to Makkah. In the years that followed, the young Muhammad grew into early manhood — and earned, through his honesty and character, a name that all of Makkah would one day call him: al-Amin — the Trustworthy. Before prophethood came, there was one more event the Prophet would later cite as among the most honourable of his life: the Hilf al-Fudayl — the Pact of the Virtuous — a covenant to defend the oppressed that he would say, decades later, he would not exchange for the finest camels in Arabia.",
        discoveryNote: "✦ Go Deeper — Bahira recognised the Prophet from a description preserved in ancient scriptures. The Maps tab shows the route from Makkah to Busra in Sham. The Profiles tab has more on Abu Talib, whose protection of the Prophet never wavered.",
      },
      {
        kind: "part-divider",
        title: "Al-Amin — The Trustworthy",
        subtitle: "Part 9",
        description: [
          "He returned from Sham a boy. He grew into a man whose honesty was so absolute that his enemies, while calling him a liar, kept their valuables with him.",
          "Before prophethood came a mission — and before the mission came a name. Al-Amin. The Trustworthy. Given by a city that would later reject him, but could never stop trusting him."
        ]
      },
      {
        kind: "segment",
        segmentNumber: 1,
        minutes: 10,
        chapterTitle: "The Return and the Years of Formation",
        heading: "Virtue: Istiqamah — The Straightness That Does Not Waver",
        subLabel: "From Boy to Young Man",
        hadith: {
          type: "ayah",
          arabic: "وَإِنَّكَ لَعَلَى خُلُقٍ عَظِيمٍ",
          translation: "And indeed, you are of a great moral character.",
          reference: "Surah al-Qalam, 68:4"
        },
        explanation: [
          "Allah Himself testified to the character of His Prophet — and this was not a description of his prophethood. It was a description of who he was. The moral character the Quran praises was formed across decades of consistent choices, daily behaviour, and a life lived with integrity long before the first word of revelation arrived. The years between the Bahira encounter and the beginning of prophethood were not empty years. They were the years in which the man the world would need was being built — one day, one honest transaction, one reliable word at a time."
        ],
        sections: [
          {
            heading: "Home to Makkah",
            text: [
              "In between, there was life. The unremarkable daily life of a young man growing up in a merchant city -- helping with trade, learning the ways of commerce and hospitality, sitting with his uncle's household, watching the world of Quraysh at close range. There were no dramatic events recorded in the years immediately following the Sham journey. There was simply a young man, growing, and behind the ordinary exterior of those growing years, a character taking shape that would one day carry the weight of revelation."
            ]
          },
          {
            heading: "The Character That Could Not Be Hidden",
            text: [
              "People noticed. Not because he declared himself or sought attention -- precisely the opposite. The Muhammad who grew up in Makkah in these years was quiet, observant, and careful with his words. He did not boast. He did not lie. He did not break a promise. He did not take what was not his. These things were not unusual in isolation -- many people are honest most of the time. What was unusual was the consistency. There were no exceptions. There were no moments where the pressure of a transaction or the temptation of a benefit led him to shade the truth.",
              "The Companions who would later gather around him would describe the pre-prophetic Muhammad with a reverence that is striking: he was already, before revelation, the person they would recognise in the Prophet. The gentleness was there. The care for others was there. The discomfort with injustice -- any injustice, anywhere -- was already woven into how he moved through the world. Character is formed long before it is tested. The character that would carry the final message of Allah to humanity was being formed, quietly and without announcement, in the streets of pre-Islamic Makkah."
            ]
          }
        ],
        reflection: "The Prophet's character was formed in the ordinary years before prophethood -- through consistent choices made in circumstances where no one was watching and nothing dramatic was at stake. Istiqamah -- the straightness that does not waver -- is built this way: not in moments of crisis but in the accumulation of daily choices. In what areas of your character are you most consistent, regardless of who is watching? In what areas do you behave differently depending on the audience? Honesty about this is the beginning of istiqamah."
      },
      {
        kind: "segment",
        segmentNumber: 2,
        minutes: 10,
        chapterTitle: "Harb al-Fijar -- When Arabia Was Unjust",
        heading: "Virtue: Adl -- Justice as an Obligation, Not an Option",
        subLabel: "Wars Fought in Sacred Months",
        hadith: {
          type: "ayah",
          arabic: "\u0625\u0650\u0646\u064e\u0651 \u0627\u0644\u0644\u0651\u064e\u0647\u064e \u064a\u064e\u0623\u0652\u0645\u064f\u0631\u064f \u0628\u0650\u0627\u0644\u0652\u0639\u064e\u062f\u0652\u0644\u0650 \u0648\u064e\u0627\u0644\u0652\u0625\u0650\u062d\u0652\u0633\u064e\u0627\u0646\u0650 \u0648\u064e\u0625\u0650\u064a\u062a\u064e\u0627\u0621\u0650 \u0630\u0650\u064a \u0627\u0644\u0652\u0642\u064f\u0631\u0652\u0628\u064e\u0649 \u0648\u064e\u064a\u064e\u0646\u0652\u0647\u064e\u0649 \u0639\u064e\u0646\u0650 \u0627\u0644\u0652\u0641\u064e\u062d\u0652\u0634\u064e\u0627\u0621\u0650 \u0648\u064e\u0627\u0644\u0652\u0645\u064f\u0646\u0643\u064e\u0631\u0650 \u0648\u064e\u0627\u0644\u0652\u0628\u064e\u063a\u0652\u064a",
          translation: "Indeed, Allah orders justice and good conduct and giving to relatives, and forbids immorality and bad conduct and oppression. He admonishes you that perhaps you will be reminded.",
          reference: "Surah al-Nahl, 16:90"
        },
        explanation: [
          "Arabia before Islam was not without moral instincts. The Arabs valued courage, generosity, and honour. They had customs and obligations. But they also lived in a world without a binding framework of divine law -- a world where tribal loyalty overrode universal justice, where the strong took what they could, and where the sanctity of agreed-upon truces could be torn apart by a single provocation. The Harb al-Fijar -- the Sacrilegious Wars -- was what Arabia looked like when its best instincts failed and its worst ones took over. The young Muhammad was present at the edge of these wars. What he witnessed there would shape the man who, a few years later, would help found the Hilf al-Fudayl."
        ],
        sections: [
          {
            heading: "The Wars of Sacrilege",
            text: [
              "The Harb al-Fijar -- the Fijar meaning sacrilegious or impious -- was a series of tribal wars fought between Quraysh and their allies of Kinanah on one side, and the tribes of Hawazin and Thaqif on the other. What made them sacrilegious was that they were fought during the sacred months -- the months of Dhul Qadah, Dhul Hijjah, and Muharram -- in which all Arabia had agreed, for generations, that fighting was forbidden. The sanctity of these months allowed trade, pilgrimage, and the movement of people across tribal territories in safety. To violate them was to tear apart the one framework that gave pre-Islamic Arabia its minimum of order.",
              "The wars broke out when a man named Urwah al-Rahhal, who was under the protection of Harb ibn Umayyah, was killed by a man of Hawazin. The violation of a guarantee of protection was the spark. The fire that followed burned for years -- on and off, with periods of truce, through at least four phases. The Arab historians noted that Quraysh and Kinanah ultimately prevailed -- though victory in such a war was measured in grief on all sides."
            ]
          },
          {
            heading: "The Young Muhammad at the Edge",
            text: [
              "The books of Sirah are careful about this point: the young Muhammad was present at the Harb al-Fijar in a supporting role. He was approximately fifteen to seventeen years old during these events. His uncles were fighting, and he accompanied them -- passing arrows to them during the engagements, protecting the rear of the position. He did not fight in the direct sense; he was at the margins, in a supporting capacity, because his family was involved.",
              "The Prophet later reflected on his presence at these events with a detachment that speaks volumes: I was present at the Fijar wars, handing arrows to my uncles. There is no pride in the memory. There is the plain acknowledgement of a fact. He was there. His family was there. He did what was expected of a young man in his position. But the wars themselves -- the violence, the tribalism, the violation of sacred months for the sake of revenge and honour -- left a mark. The young man who had watched from the edge of armed conflict between tribes in a world without justice was, a few years later, one of the founding members of a pact to defend the oppressed. The connection is not coincidental."
            ]
          }
        ],
        reflection: "The Harb al-Fijar was a world where tribal loyalty trumped universal justice. The Prophet was present at the edges of this world, and he remembered it without pride. Justice -- real justice, applied regardless of who was on which side -- was not the norm of his world. It had to be built. The Hilf al-Fudayl was one of the first attempts to build it. Where in your world -- your family, your community, your professional life -- does tribal or group loyalty prevent the honest application of justice? What would it take to stand for what is right even when it costs your group something?"
      },
      {
        kind: "segment",
        segmentNumber: 3,
        minutes: 10,
        chapterTitle: "The Man from Yemen -- A Stranger Cried for Help",
        heading: "Virtue: Nasihah -- Sincere Concern for the Rights of Others",
        subLabel: "The Pact That Would Not Be Exchanged for Red Camels",
        hadith: {
          type: "ayah",
          arabic: "\u064a\u064e\u0627 \u0623\u064e\u064a\u064f\u0651\u0647\u064e\u0627 \u0627\u0644\u064e\u0651\u0630\u0650\u064a\u0646\u064e \u0622\u0645\u064e\u0646\u064f\u0648\u0627 \u0643\u064f\u0648\u0646\u064f\u0648\u0627 \u0642\u064e\u0648\u064e\u0651\u0627\u0645\u0650\u064a\u0646\u064e \u0628\u0650\u0627\u0644\u0652\u0642\u0650\u0633\u0652\u0637\u0650 \u0634\u064f\u0647\u064e\u062f\u064e\u0627\u0621\u064e \u0644\u0650\u0644\u0644\u064e\u0651\u0647\u0650 \u0648\u064e\u0644\u064e\u0648\u0652 \u0639\u064e\u0644\u064e\u0649 \u0623\u064e\u0646\u0641\u064f\u0633\u0650\u0643\u064f\u0645\u0652",
          translation: "O you who believe! Be persistently standing firm in justice, witnesses for Allah, even if it be against yourselves.",
          reference: "Surah al-Nisa', 4:135"
        },
        explanation: [
          "The Hilf al-Fudayl -- the Pact of the Virtuous -- was born from a specific event: a stranger was wronged in Makkah, and the city's sense of honour was shamed into responding. What is remarkable about this pact is not only what the Prophet later said about it -- that he would not exchange it for the finest red camels -- but that he said this in Islam, after revelation, after prophethood, after Allah had given him a complete code of law and justice. The pre-Islamic pact to defend strangers, formed among men who did not yet know the Quran, was something he was proud of as a Muslim. It tells us something essential about justice: when it is acted upon, it is honoured."
        ],
        sections: [
          {
            heading: "The Stranger at the Ka'bah",
            text: [
              "A merchant arrived in Makkah from Yemen -- some accounts say he was from Zabid -- carrying goods to trade at the city's markets. He sold his goods to al-As ibn Wa'il al-Sahmi, a notable of the Quraysh. Al-As received the goods and then refused to pay. The merchant had no tribe in Makkah to stand behind him, no family to call upon, no mechanism to enforce his claim. He was a stranger in a city that ran on tribal guarantees -- and he had none.",
              "He did what a man with no power does when he has been wronged in a place that has some sense of honour: he called out publicly. He climbed to a vantage point near the Ka'bah -- the sacred house that all of Arabia revered -- and he cried out, asking for help, declaring that he had been cheated, that a man of Quraysh had taken his goods without payment. He was a guest who had been robbed by his host."
            ]
          },
          {
            heading: "The Gathering and the Pact",
            text: [
              "The appeal worked -- not because the institutions of Makkah demanded it, but because the best men in Makkah were shamed by it. The noble clans of Quraysh gathered at the house of Abdullah ibn Judan al-Taymi -- a wealthy and respected elder known for his generosity. Those who came included men of Banu Hashim, Banu Muttalib, Banu Asad ibn Abd al-Uzza, Banu Zuhra ibn Kilab, and Banu Taym ibn Murra. The young Muhammad was among them.",
              "They made a covenant -- solemn and binding -- that they would stand together against any oppressor, whoever he was, on behalf of any wronged person, whether he was from Makkah or from outside it. They would ensure that the rights of the wronged were returned, regardless of the tribe of the oppressor. The covenant was then put into immediate practice: they went to al-As ibn Wa'il and compelled him to pay the Yemeni merchant what he was owed. The pact had barely been spoken and it had already delivered justice.",
              "The Prophet later said: I was present in the house of Abdullah ibn Judan when a pact was concluded which I would not exchange for red camels -- the finest wealth of Arabia. And if I were called to it in Islam, I would respond. (Referenced in Sirat Ibn Hisham; the substance is reported in Bayhaqi and others.) This is one of the most striking statements in the entire Sirah: a prophet of Allah, having received the complete Divine Law, saying he would still honour a pre-Islamic pact to defend the oppressed."
            ]
          }
        ],
        reflection: "The Yemeni merchant had no tribe, no connections, and no leverage. His only move was to appeal to the conscience of a city. And it worked -- because enough men in that city were unwilling to let the injustice stand. Nasihah -- sincere concern for the rights of others -- does not require a relationship with the wronged person. The members of the Hilf al-Fudayl had never met the merchant from Yemen. They acted because injustice anywhere was, to them, a wound that demanded closing. Who in your circle, your neighbourhood, or your community is the Yemeni merchant -- the one with no leverage, whose claim is just, but who has no one to stand behind them? What would it mean to be one of the men who gathers at the house of Ibn Judan?"
      },
      {
        kind: "segment",
        segmentNumber: 4,
        minutes: 10,
        chapterTitle: "Al-Amin -- A Name Before a Mission",
        heading: "Virtue: Amanah -- Trustworthiness as the Foundation of Everything",
        subLabel: "The Name His Enemies Could Not Take Back",
        hadith: {
          type: "ayah",
          arabic: "\u0625\u0650\u0646\u064e\u0651 \u0627\u0644\u0644\u064e\u0651\u0647\u064e \u064a\u064e\u0623\u0652\u0645\u064f\u0631\u064f\u0643\u064f\u0645\u0652 \u0623\u064e\u0646 \u062a\u064f\u0624\u064e\u062f\u064e\u0651\u0648\u0627 \u0627\u0644\u0652\u0623\u064e\u0645\u064e\u0627\u0646\u064e\u0627\u062a\u0650 \u0625\u0650\u0644\u064e\u0649 \u0623\u064e\u0647\u0652\u0644\u0650\u0647\u064e\u0627",
          translation: "Indeed, Allah commands you to render trusts to whom they are due.",
          reference: "Surah al-Nisa', 4:58"
        },
        explanation: [
          "The title came from the city itself. Al-Amin -- the Trustworthy -- was not a name the Prophet took for himself. It was given to him by the people of Makkah, including those who would later become his fiercest opponents, based on what they had observed across years of daily dealings. A name given collectively, by a community, against their own interests, is one of the most powerful forms of testimony. The people of Makkah called him al-Amin before they knew what he would one day claim. And after he claimed it -- after they rejected him and called him a liar -- they kept calling their sons to him with their property, because they could not call his character into question and be taken seriously."
        ],
        sections: [
          {
            heading: "The Name the People Gave Him",
            text: [
              "Across the years of his youth and early manhood, the people of Makkah watched Muhammad ibn Abdillah with the close attention that a merchant city gives to those it does business with. They watched how he handled goods in his uncle's trade. They watched how he fulfilled promises. They watched what he said and whether his word could be relied upon. They watched how he dealt with those weaker than him -- widows, orphans, travellers, the poor. They watched, over many years, whether the behaviour was consistent when the circumstances changed.",
              "What they found was that it never changed. The same man who was trustworthy in a small transaction was trustworthy in a large one. The same man who was gentle with the powerless was gentle even when he held the power. There were no exceptions they could point to. There were no stories of a broken promise or a dishonest deal. And so, at a point that the Sirah does not mark with a precise date -- because it was not an event but a gradual recognition -- the city began to call him al-Amin. The Trustworthy."
            ]
          },
          {
            heading: "The Contradiction They Could Not Escape",
            text: [
              "The most remarkable aspect of the title al-Amin is what happened to it after the first revelation. When the Prophet began calling his people to Islam and they rejected him, the accusation they threw at him was that he was a liar -- a sorcerer, a poet, a man who had invented this religion and falsely attributed it to Allah. They called him kadhdhab -- a liar, a fabricator. And yet, with extraordinary consistency, these same people continued to leave their valuables with him for safekeeping. They continued to bring him their disputes to settle. They continued to trust him with what mattered most to them.",
              "This contradiction did not escape the Prophet. When he made the famous call from the hill of Safa -- asking his people whether they would believe him if he told them there was an army coming over the hill -- Abu Lahab refused and insulted him. But Abu Lahab did not take his property back from Muhammad. The polemic of rejection and the practice of trust ran side by side. And when the Prophet finally made hijra to Madinah, he did not leave immediately. He instructed Ali ibn Abi Talib to stay behind -- specifically to return the trusts that the people of Makkah had deposited with him, including the trusts of those who were even then persecuting the Muslims. He left as he had lived: not owing anyone what was theirs.",
              "The title al-Amin is not a romantic detail from the Sirah. It is a piece of evidence. The people who rejected his prophethood could not reject his character -- and their own continued practice of trusting him with their property is a testimony preserved in history, written by his opponents, against their own case."
            ]
          }
        ],
        reflection: "Al-Amin means that your word, your handling of others' property, your fulfilment of obligations -- all of it -- is reliable enough that people trust you without needing to check. It is a title given by others, not claimed for oneself. The Prophet received it from his community through years of consistent behaviour in ordinary circumstances. What would the people who interact with you regularly -- neighbours, colleagues, students, family members -- say about your amanah? Would they use a word like al-Amin without being prompted? Honest self-assessment here is not self-criticism -- it is the beginning of building the kind of character that gives communities a foundation."
      },
      {
        kind: "reflection",
        questions: [
          "The Prophet was present at the Harb al-Fijar in a supporting role -- at the edges, handing arrows to his uncles. He later remembered this without pride. How do you understand the fact that Allah allowed the future Prophet to be present at an unjust war, even marginally, before his mission began? What might Allah have wanted him to understand from that proximity to conflict?",
          "The Hilf al-Fudayl was founded in response to a stranger's cry for help. No one in that room had a relationship with the Yemeni merchant. They acted because the principle demanded it. The Prophet later said -- after receiving the complete Divine Law -- that he would not exchange his membership in that pact for the finest wealth in Arabia. What does this tell us about the relationship between the natural human sense of justice and the justice commanded by Allah? Are they the same thing, or does one complete the other?",
          "Al-Amin was a title given to the Prophet by the same city that later called him a liar. They rejected his claim to prophethood but kept trusting him with their property. What does this contradiction tell us about human nature -- the ability to hold two opposing positions at once? And what does it tell us about the power of consistent character: that it survives even the attempts of people to deny it?",
          "The Prophet left Makkah for Madinah -- after years of persecution -- and still instructed Ali to return all the trusts deposited with him, including the trusts of those who had persecuted the Muslims. What does this tell us about the nature of amanah: that it is not conditional on how the other person behaves toward you? Where in your life do you find it hardest to uphold your obligations toward people who have wronged you -- and what does the Prophet's example say about that?"
        ],
        actionPoint: "This week, identify one trust -- a responsibility, a promise, an obligation -- that you have been carrying imperfectly: something that belongs to someone else that you have not yet fully returned or fulfilled. It could be a commitment you made and delayed, a duty to your students or children you have been giving partial attention, or a financial or material obligation that is overdue. Take one concrete step this week to close that gap. The Prophet earned the title al-Amin not through a single grand gesture but through the accumulated weight of small, consistent choices. Begin with one."
      },
      {
        kind: "closing",
        paragraphs: [
          "He went to Sham as a boy under a cloud that followed only him, and he came home as a boy who had been recognised by a stranger who spent his life looking. In the years that followed, quietly and without drama, the boy became a man. Makkah watched. Makkah traded with him. Makkah trusted him. And Makkah gave him a name: al-Amin. The Trustworthy.",
          "The Hilf al-Fudayl is one of the least-discussed events in the Sirah -- and one of the most important. A stranger cried for help in the holiest city in Arabia and the best men in that city responded. The young Muhammad was one of them. He later said, as a prophet of Allah with the complete Quran in his hands, that he would not exchange his membership in that pact for the finest wealth in Arabia. Think about what that means: the pact he formed before revelation was something he honoured after revelation. The justice it demanded was the same justice Allah commanded. It was not replaced -- it was completed.",
          "Al-Amin is a title that cost his city nothing to give and cost them everything to deny. When they needed to call him a liar, the name was still there. When they needed to trust someone with their valuables, the name was still there. You cannot give a man a title like al-Amin and then successfully accuse him of fabricating a message from Allah. The title was their own testimony, and they could not take it back.",
          "Before prophethood came a mission. Before the mission came a character. Before the character came years of choices -- ordinary, unwitnessed, unremarkable choices made in the streets and markets and households of a city that was not yet ready for what it was raising in its midst. The man who received Iqra in the cave of Hira was the same man who had always been there. The revelation came to a vessel that had been prepared across four decades of consistent, unbroken, undeviating trustworthiness.",
          "May Allah make us people of amanah. May He give us the consistency that builds trust before it is needed, the courage to stand for the wronged even when they are strangers, and the humility to receive a name -- the name of those who can be relied upon -- not through our own declaration, but through the quiet testimony of every person who has ever dealt with us."
        ],
        duaArabic: "\u0627\u0644\u0644\u064e\u0651\u0647\u064f\u0645\u064e\u0651 \u0635\u064e\u0644\u0650\u0651 \u0639\u064e\u0644\u064e\u0649 \u0645\u064f\u062d\u064e\u0645\u064e\u0651\u062f\u064d \u0648\u064e\u0639\u064e\u0644\u064e\u0649 \u0622\u0644\u0650 \u0645\u064f\u062d\u064e\u0645\u064e\u0651\u062f\u064d \u0643\u064e\u0645\u064e\u0627 \u0635\u064e\u0644\u064e\u0651\u064a\u062a\u064e \u0639\u064e\u0644\u064e\u0649 \u0625\u0650\u0628\u0652\u0631\u064e\u0627\u0647\u0650\u064a\u0645\u064e \u0648\u064e\u0639\u064e\u0644\u064e\u0649 \u0622\u0644\u0650 \u0625\u0650\u0628\u0652\u0631\u064e\u0627\u0647\u0650\u064a\u0645\u064e \u0625\u0650\u0646\u064e\u0651\u0643\u064e \u062d\u064e\u0645\u0650\u064a\u062f\u064c \u0645\u064e\u062c\u0650\u064a\u062f\u064c",
        duaTranslation: "O Allah, send blessings upon Muhammad and upon the family of Muhammad, as You sent blessings upon Ibrahim and upon the family of Ibrahim. Indeed You are Praiseworthy and Glorious. Amin.",
        nextLessonPreview: "Al-Amin was now a young man in his twenties -- trusted by his city, shaped by experience, and known for his character across the trading routes of Arabia. A widow of extraordinary standing would soon take notice. Khadijah bint Khuwaylid, the most respected businesswoman in Makkah, would send him on a trading journey to Sham with her goods -- and what she observed in that journey would lead to the greatest marriage in Islamic history.",
        discoveryNote: "The Hilf al-Fudayl is referenced in Sirat Ibn Hisham and discussed by scholars as an example of pre-Islamic good that Islam confirmed rather than replaced. The Profiles tab has more on Khadijah, who appears in the next lesson. The Timeline tab places al-Amin and the Hilf in the broader chronology of the pre-prophetic years.",
      },
      {
        kind: "completion",
        title: "Volume I -- Complete",
        paragraphs: [
          "You have walked with Rasulullah from before his birth. You began in the time of Ibrahim alayhi us-salam and Hajar -- in the barren valley that would become Makkah. You witnessed the Year of the Elephant. You followed the young Muhammad through the years of Banu Sad, through the opening of the chest, through the grief of losing his mother, into the hands of Abd al-Muttalib -- and then Abu Talib -- and then north, on the road to Sham, where a monk named Bahira looked at a twelve-year-old boy and recognised what the world would not know for another three decades. You watched him return to Makkah and grow into the young man his city would name al-Amin -- and you were there when he stood with the best men of Quraysh and made a covenant to defend a stranger from Yemen that he said, as a prophet, he would never exchange for the finest camels in Arabia.",
          "Father before birth. Mother at six. Grandfather at eight. Every loss was arranged by Allah. Every guardian was sent. And through it all, the child chosen to carry the final message to humanity was never, for a single moment, left alone. Even on the road to Sham, a cloud followed him. Even in a foreign land, a tree bent its shade toward him. Even before he knew his own mission, the city around him was already giving him a name that told the world what was coming.",
          "May Allah make this knowledge a light in your home, a legacy for your children, and a means of drawing closer to the Prophet we love.",
        ],
        duaArabic: "\u0627\u0644\u0644\u064e\u0651\u0647\u064f\u0645\u064e\u0651 \u0635\u064e\u0644\u0650\u0651 \u0639\u064e\u0644\u064e\u0649 \u0645\u064f\u062d\u064e\u0645\u064e\u0651\u062f\u064d \u0648\u064e\u0639\u064e\u0644\u064e\u0649 \u0622\u0644\u0650 \u0645\u064f\u062d\u064e\u0645\u064e\u0651\u062f\u064d \u0643\u064e\u0645\u064e\u0627 \u0635\u064e\u0644\u064e\u0651\u064a\u062a\u064e \u0639\u064e\u0644\u064e\u0649 \u0625\u0650\u0628\u0652\u0631\u064e\u0627\u0647\u0650\u064a\u0645\u064e \u0648\u064e\u0639\u064e\u0644\u064e\u0649 \u0622\u0644\u0650 \u0625\u0650\u0628\u0652\u0631\u064e\u0627\u0647\u0650\u064a\u0645\u064e \u0625\u0650\u0646\u064e\u0651\u0643\u064e \u062d\u064e\u0645\u0650\u064a\u062f\u064c \u0645\u064e\u062c\u0650\u064a\u062f\u064c",
        duaTranslation: "O Allah, send blessings upon Muhammad and upon the family of Muhammad, as You sent blessings upon Ibrahim and upon the family of Ibrahim. Indeed You are Praiseworthy and Glorious. Amin.",
        nextLessonPreview: "Al-Amin was now a young man in his twenties -- trusted by his city, shaped by the road to Sham and the pact at Ibn Judan's house. A woman of extraordinary standing would soon take notice. Khadijah bint Khuwaylid, the most respected businesswoman in Makkah, would send him on a trading journey and then propose the most blessed marriage in Islamic history.",
      },

      {
        kind: "part-divider",
        title: "Khadijah -- A Home Prepared by Allah",
        subtitle: "Part 10",
        description: [
          "He was twenty-five years old. She was the most respected woman in Makkah -- wealthy, widowed twice, and sought after by every man of standing in Quraysh.",
          "She had refused them all. Then she hired a young man named Muhammad to carry her goods to Syria -- and saw something in him that no one else had seen clearly enough to act on.",
          "This is the story of the marriage that built the foundation for everything that came after. Twenty-five years of one love. A home that would become the first shelter of Islam."
        ]
      },
      {
        kind: "segment",
        segmentNumber: 1,
        minutes: 10,
        chapterTitle: "The Trade Journey -- When Character Became Currency",
        heading: "Virtue: Sidq -- The Truthfulness That Cannot Be Hidden",
        subLabel: "Virtue of Sidq",
        hadith: {
          type: "ayah",
          arabic: "يَا أَيُّهَا الَّذِينَ آمَنُوا اتَّقُوا اللَّهَ وَكُونُوا مَعَ الصَّادِقِينَ",
          translation: "O you who have believed, fear Allah and be with those who are truthful.",
          reference: "Surah al-Tawbah, 9:119"
        },
        explanation: [
          "He was twenty-five years old and he had a reputation. Not the reputation of a nobleman or a chief's son -- though he was descended from the noblest of lineages. Not the reputation of a poet or a merchant of renown. He had the reputation of a man who could be trusted. In a trading city built on deals, debts, and the movement of goods across desert roads, that was not a small thing.",
          "Khadijah bint Khuwaylid was the most successful businesswoman in Makkah. She was also a woman of discernment -- she had seen enough men come through her trading arrangements to know the difference between competence and character. When she heard of a young man called al-Amin -- the Trustworthy -- she made him an offer."
        ],
        sections: [
          {
            heading: "The Offer",
            text: [
              "According to the classical Sirah -- Sirat Ibn Hisham drawing on Ibn Ishaq -- Khadijah sent word to Muhammad asking him to take her goods to Syria on a trading journey. She offered him a wage better than what she offered anyone else. He accepted.",
              "With him she sent Maysarah, one of her trusted employees, to accompany the caravan and observe. Maysarah was not sent to supervise -- he was there to represent Khadijah's interests and to report back on what he witnessed. What Maysarah saw on that journey, he carried all the way back to Makkah and placed at Khadijah's feet."
            ]
          },
          {
            heading: "What Maysarah Saw",
            text: [
              "The classical Sirah narrates that on the journey to Syria, Maysarah observed Muhammad in his dealings: fair in negotiation, scrupulously honest about the quality and quantity of what he sold, never deceiving, never short-measuring, never using the distance from oversight to take advantage. The goods returned more profit than Khadijah had expected.",
              "Maysarah also reported seeing a cloud that provided shade specifically for Muhammad throughout the heat of the journey. This detail appears in the classical Sirah sources -- in Ibn Hisham from Ibn Ishaq. It is a widely accepted narration in Sirah literature, though it is not in Sahih al-Bukhari or Sahih Muslim. It is one of the signs scholars of Sirah cite as indicating Allah's protection and preparation of the Prophet before prophethood was formally revealed.",
              "When the caravan returned to Makkah, Maysarah gave his account. Khadijah listened. And in the words of the Sirah, she was moved -- not only by the profit, but by the portrait of a man that Maysarah described."
            ]
          },
          {
            heading: "What Sidq Looks Like in Practice",
            text: [
              "The Prophet had no supervisor on the road to Syria except his own conscience and the watchful eyes of Maysarah. There was no Khadijah looking over his shoulder. There was no court of accountability. There was only the question that every honest person carries into every situation: what kind of person am I when no authority is watching?",
              "The answer -- given consistently, across years, in the markets and caravans and contracts of Makkah -- was al-Amin. The Trustworthy. The Truthful. A title given not by his family or his friends, but by the commercial life of a city that had ample opportunity to discover otherwise.",
              "Khadijah had been looking for someone like this. She found him. And in finding him, she did something that no woman in Arabia had done before."
            ]
          }
        ],
        reflection: "In your own work and dealings -- at your job, in your business, in your transactions with others -- does your character change based on whether someone is watching? The Prophet earned Khadijah's trust, and eventually changed the world, not through a single grand act but through the accumulated weight of consistent, unwitnessed honesty. This week: where is your Maysarah moment -- the test you face when you think no one is looking?"
      },
      {
        kind: "segment",
        segmentNumber: 2,
        minutes: 10,
        chapterTitle: "She Chose Him -- The Proposal That Changed History",
        heading: "Virtue: Hikmah -- The Wisdom to See What Others Missed",
        subLabel: "Virtue of Hikmah",
        hadith: {
          type: "ayah",
          arabic: "وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً إِنَّ فِي ذَٰلِكَ لَآيَاتٍ لِّقَوْمٍ يَتَفَكَّرُونَ",
          translation: "And of His signs is that He created for you from yourselves mates that you may find tranquillity in them; and He placed between you affection and mercy. Indeed in that are signs for a people who give thought.",
          reference: "Surah al-Rum, 30:21"
        },
        explanation: [
          "Khadijah had been married twice before. She had seen what most marriages in Makkah looked like -- arrangements between families, driven by wealth, tribal alliance, or status. She was one of the most eligible women in Arabia, and she had received proposals from men of wealth and standing. She had said no to all of them.",
          "Now she had observed a twenty-five-year-old with no great wealth, no title beyond al-Amin, and no social leverage to offer. And she was the one who sent a proposal to him."
        ],
        sections: [
          {
            heading: "Nafisah, the Intermediary",
            text: [
              "The classical Sirah -- Sirat Ibn Hisham -- narrates that Khadijah confided in a friend named Nafisah bint Munyah and asked her to approach Muhammad on her behalf. Nafisah went to him and raised the subject: was there any reason he had not yet married? And if the right person were to be proposed, would he consider it?",
              "The Prophet asked who she had in mind. Nafisah named Khadijah. He said he would speak to his family.",
              "This is one of the most humanly remarkable moments in the entire Sirah. The most respected businesswoman in Makkah -- a woman who had turned down the nobility of Quraysh -- was asking to marry a young man who had worked for her on a trade journey. In the social structure of Arabia, she was his superior in terms of wealth and standing. She was fifteen years older. And she was the one proposing."
            ]
          },
          {
            heading: "The Nikah",
            text: [
              "The Prophet consulted his uncles. The marriage was arranged. According to the classical Sirah sources, his uncle Abu Talib gave the khutbah al-nikah at the ceremony. The mahr -- the marriage gift from the groom to the bride -- is recorded in Sirah sources as twenty young camels, though the exact amount carries some variation across narrations.",
              "He was twenty-five years old. She was, according to the most widely transmitted classical position found in Ibn Hisham, forty years old. Some scholars of Sirah have discussed the possibility of a younger age for Khadijah based on narrations in al-Tabari and other sources. The classical position of forty is the more widely held view and the one accepted by the majority of scholars. Whatever her age, what is beyond dispute is what the marriage produced: the most stable and most transformative relationship in the life of the man who would become the Seal of the Prophets."
            ]
          },
          {
            heading: "What Hikmah Looks Like",
            text: [
              "Khadijah was not acting on feeling alone. She was a mature woman acting on what she had observed. She had watched this man handle her goods with integrity, heard Maysarah's account of his conduct on the road, and come to a considered conclusion: this is the person.",
              "Hikmah -- wisdom -- is not intelligence alone. It is the ability to see past the obvious to what matters. The men who had proposed to Khadijah offered wealth, title, and lineage. Muhammad offered something that could not be purchased: a character proven in the unsupervised spaces of daily life. Khadijah saw it. She acted on it. And in doing so, she gave the Prophet the foundation he would need for everything that was coming."
            ]
          }
        ],
        reflection: "Khadijah's wisdom was not intuition alone -- it was based on evidence gathered through observation. She chose based on character, not on status. How often do we make our most important decisions based on what someone presents publicly versus what we observe of their character in ordinary, unguarded moments? What would it mean to apply Khadijah's standard of discernment to the decisions we face in our own lives?"
      },
      {
        kind: "segment",
        segmentNumber: 3,
        minutes: 10,
        chapterTitle: "The Marriage -- One Love for Twenty-Five Years",
        heading: "Virtue: Wafa -- The Loyalty That Does Not Look for an Exit",
        subLabel: "Virtue of Wafa",
        hadith: {
          type: "ayah",
          arabic: "هُنَّ لِبَاسٌ لَّكُمْ وَأَنتُمْ لِبَاسٌ لَهُنَّ",
          translation: "They are a garment for you, and you are a garment for them.",
          reference: "Surah al-Baqarah, 2:187"
        },
        explanation: [
          "For twenty-five years -- from the age of twenty-five to the age of fifty -- the Prophet of Allah had one wife. One home. One love. In a society where multiple marriages were normal and expected for a man of growing influence, he did not take another wife while Khadijah lived. Not once.",
          "That is not a small detail. It is one of the most powerful statements about the nature of their relationship that the entire Sirah contains."
        ],
        sections: [
          {
            heading: "What She Gave Him",
            text: [
              "Khadijah gave the Prophet something that every person who carries a great task needs: a home where the weight could be set down. A place where the public person could become the private person. A companion who believed in him -- not after proof, but before it.",
              "She gave him children: according to the classical Sirah, all of his children were born of Khadijah, except Ibrahim who was born of Maria al-Qibtiyyah years after Khadijah's death. Qasim, Abdullah, Zaynab, Ruqayyah, Umm Kulthum, and Fatimah -- the last of whom the Prophet called Sayyidah Nisa al-Alamin: the leader of the women of all the worlds.",
              "She gave him material security: her wealth and her household freed him from the anxieties of poverty. In the cave of Hira, where he spent long periods in spiritual retreat before the revelation came, it was Khadijah who sent provisions. He was able to contemplate, to withdraw, to prepare -- partly because the home he returned to was held together by a woman of extraordinary competence and care."
            ]
          },
          {
            heading: "What He Said About Her After She Was Gone",
            text: [
              "Khadijah passed away three years before the Hijrah -- in what historians call the Year of Sorrow, alongside the death of his uncle Abu Talib. The Prophet grieved deeply. And his love for her did not end with her death.",
              "A'ishah radhiyallahu anha narrated -- in Sahih al-Bukhari (Hadith 3816) -- that the Prophet would frequently mention Khadijah, to the point where A'ishah felt a deep jealousy toward a woman she had never met. She expressed her surprise to the Prophet at how often he spoke of her. He responded by describing what Khadijah had been: she believed in him when others disbelieved, she supported him with her wealth when others withheld, and Allah had blessed him with children through her.",
              "He would also -- according to narrations in Sahih al-Bukhari -- continue to slaughter sheep and send portions to the friends of Khadijah even years after her death, as a way of honouring those who had been dear to her. Loyalty to the living is a virtue. Loyalty to the memory of the deceased is something rarer -- and the Prophet exemplified it."
            ]
          },
          {
            heading: "The Best of the World's Women",
            text: [
              "In Sahih Muslim (Hadith 2430), the Prophet named the four greatest women who ever lived: Maryam bint Imran, Khadijah bint Khuwaylid, Fatimah bint Muhammad, and Asiyah the wife of Firawn. This is Tier One testimony -- a direct statement of the Prophet recorded in the highest grade of authenticated narration.",
              "Two of the four gave everything in a moment of supreme difficulty. One is his own daughter. And one is his wife -- the woman who held him on the night the universe changed, and who had spent twenty-five years preparing herself, without knowing it, to be exactly who he needed in that moment."
            ]
          }
        ],
        reflection: "The Prophet's loyalty to Khadijah -- in life and after her death -- was not sentimental. It was active: he remembered her friends, honoured her memory, named her among the greatest human beings who ever lived. Wafa is not a feeling; it is a practice. How do we practise loyalty to those who have supported us -- especially when the relationship has changed, or when they are no longer present?"
      },
      {
        kind: "segment",
        segmentNumber: 4,
        minutes: 10,
        chapterTitle: "The Years Before the Dawn -- A Home That Held a Prophet",
        heading: "Virtue: Thabat -- The Steadfastness That Supports Without Demanding to Understand",
        subLabel: "Virtue of Thabat",
        hadith: {
          type: "ayah",
          arabic: "أَلَمْ يَجِدْكَ يَتِيمًا فَآوَى وَوَجَدَكَ ضَالًّا فَهَدَى وَوَجَدَكَ عَائِلًا فَأَغْنَى",
          translation: "Did He not find you an orphan and gave shelter? And He found you wandering and guided you. And He found you in need and made you self-sufficient.",
          reference: "Surah al-Duha, 93:6-8"
        },
        explanation: [
          "Fifteen years into the marriage, Makkah saw what it had always seen: the same traders, the same idols, the same conversations in the market. But one household had become different from all the others -- not visibly, not loudly, but in the quality of what it held.",
          "The Prophet of Allah had always been drawn to something beyond the ordinary world. He could not worship stone. He could not find peace in the transactions of the market the way other men did. And as the years passed, that inner seeking intensified into something he could only satisfy in one way: solitude."
        ],
        sections: [
          {
            heading: "The Cave of Hira",
            text: [
              "Above Makkah, on a mountain called al-Nur -- the Mountain of Light -- there was a small cave. It was not large: a man could sit in it, but barely stand. What it offered was silence, and elevation, and distance from everything below.",
              "The Prophet began going there. Days at a time, retreating from the city, from the noise of commerce, from the routine of Makkah's social life. He would sit in the cave and contemplate -- the creation, the sky, the question that Makkah's idols had never been able to answer. When his provisions ran out, he would come back down to Khadijah. And then, when he was resupplied, he would return."
            ]
          },
          {
            heading: "What Khadijah Did",
            text: [
              "She prepared his provisions. Dates, water, simple food -- enough for the days ahead. She did this not once but many times, across months and perhaps years. She sent them up to a husband whose spiritual seeking she could not fully explain to the women of Makkah, whose retreats she could not describe in the ordinary language of a trading city.",
              "She did not demand that he explain himself. She did not complain that he was absent. She did not press him with the question that must have occurred to her: what are you looking for? She trusted what she had observed of his character over fifteen years. A man of his quality did not retreat to a cave for nothing.",
              "The classical Sirah does not give us Khadijah's inner thoughts during these years. But it gives us her actions -- and her actions say everything. She was not confused by his seeking. She was steady. She held the home while he held the solitude."
            ]
          },
          {
            heading: "The World Did Not Yet Know",
            text: [
              "Makkah did not know what was forming above it. The nobles of Quraysh were in the markets. The poets were composing. The pilgrims were coming and going. No one looked up at the Mountain of Light and thought: something is about to happen up there that will change every civilisation that comes after us.",
              "Only one household was quietly, faithfully, without drama, preparing. Not because Khadijah knew what was coming. But because she had lived alongside this man for fifteen years and understood, without being able to name it, that he was not like other men -- and that what he sought in solitude deserved to be supported, not questioned.",
              "Allah was preparing His Messenger. And He had placed him in a home that was ready."
            ]
          }
        ],
        reflection: "Khadijah supported the Prophet's spiritual retreats for years without knowing what they were preparation for. She gave provisions, gave space, and gave steadfast trust -- based entirely on what she knew of his character. Think of a person in your life whose purpose or seeking you do not fully understand. What would it mean to support them as Khadijah did: actively, quietly, and without demanding that they explain themselves before they are ready?"
      },
      {
        kind: "reflection",
        questions: [
          "Khadijah proposed to the Prophet -- something almost unheard of in her society. She acted on her judgment and her observation, not on convention. Think of a moment in your own life where you knew something was right but did not act because it felt unconventional. What would Khadijah's example say to that moment?",
          "The Prophet maintained his love and loyalty for Khadijah after her death -- mentioning her, honouring her friends, remembering her contribution -- for the rest of his life. What does this tell us about how Islam views the lasting obligations of love and loyalty? And what does it challenge us to consider in our own relationships?",
          "Khadijah prepared provisions for a husband who was retreating to a cave -- for days at a time, across years -- without knowing what he was seeking, or what would come of it. She never demanded explanation. She trusted what she had observed of his character. When in your own life have you been asked to support someone in a purpose that was not yet fully clear -- either to them or to you? What does Khadijah's example say about how to give that kind of support?",
          "The Prophet spent years in spiritual contemplation before the revelation came. Those years were not idle -- they were preparation. Think of periods in your own life that felt quiet, unresolved, or without direction. Looking back, were any of those periods preparation for something you could not yet see? What does this teach us about how to hold the seasons of waiting with dignity?"
        ],
        actionPoint: "This week, write down five things you genuinely know about your spouse, your parent, or your closest companion -- not things you assume, but things you have actually observed over time: how they handle difficulty, what they do when no one is watching, what they carry quietly. Then consider: if that person faced a great test today, would your knowledge of their character give you certainty -- as Khadijah's did -- or would you find yourself guessing? Use what you discover to invest more intentionally in knowing the people you love."
      },
      {
        kind: "closing",
        paragraphs: [
          "She turned down every offer until she made one. The most respected businesswoman in Makkah looked past wealth, past title, past age, past convention -- and chose a twenty-five-year-old known only for the quality of his character. In doing so, she became the foundation of one of the most extraordinary lives in all of human history.",
          "Twenty-five years of one marriage. One home. One love. The Prophet of Allah did not take another wife while Khadijah lived -- and when she died, the grief he carried was not the polite grief of obligation. It was the grief of a man who had lost the person who knew him best, believed in him first, and held him on the night the revelation came.",
          "Khadijah radhiyallahu anha was not a supporting character in the Sirah. She was the foundation of it. She prepared provisions for a husband whose retreats she could not explain. She held a home that the world did not yet know was about to become the first shelter of Islam.",
          "She would learn, in time, what she had been preparing for. And when that moment arrived -- in a cave above Makkah, on a night that changed everything -- she would be ready. Her twenty-five years of observation would give her a certainty that no one else could have offered him.",
          "May Allah be pleased with her. May He grant every Muslim home a love built on knowledge, a loyalty that does not waver, and a companion who -- when the great moment arrives -- has already spent a lifetime learning how to hold it."
        ],
        duaArabic: "اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا صَلَّيتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ",
        duaTranslation: "O Allah, send blessings upon Muhammad and upon the family of Muhammad, as You sent blessings upon Ibrahim and upon the family of Ibrahim. Indeed You are Praiseworthy and Glorious. Amin.",
        nextLessonPreview: "For fifteen years, the Prophet had been drawn to the cave of Hira -- retreating from the noise of Makkah, from its idols and its transactions, into solitude and contemplation. He did not yet know what he was waiting for. One night in the year 610 CE, in that same cave, he found out. The next lesson begins there -- with a voice, an embrace, and five verses that changed the world forever.",
        discoveryNote: "Khadijah bint Khuwaylid is one of the most significant personalities in Islamic history. Her full profile -- lineage, children, and her place among the greatest women -- is in the Profiles tab. The trade route to Syria that the Prophet travelled before this marriage is the same northern road explored in the Maps tab under Sham.",
      },
    ]
  }
];

export function getReaderLessonById(lessonId: string) {
  return readerLessons.find((lesson) => lesson.id === lessonId);
}

export function getFeaturedReaderLesson() {
  return getReaderLessonById(featuredReaderLessonId) ?? readerLessons[0];
}

export function getLessonCover(lesson: ReaderLesson) {
  return lesson.pages.find((page): page is CoverPage => page.kind === "cover");
}
