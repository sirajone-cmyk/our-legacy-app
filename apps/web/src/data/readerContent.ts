export type SacredTextBox = {
  type: "hadith" | "ayah" | "dua";
  arabic: string;
  translation: string;
  reference?: string;
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
  heading: string;
  subLabel: string;
  hadith: SacredTextBox;
  explanation: string[];
  sections: ReaderSection[];
  reflection: string;
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
};

export type PartDividerPage = {
  kind: "part-divider";
  title: string;
  subtitle: string;
  description: string[];
};

export type ReaderPage = CoverPage | SegmentPage | ReflectionPage | ClosingPage | PartDividerPage;

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
    cardTitle: "Introduction to Sīrah",
    cardSubtitle: "The Life of the Greatest",
    author: "Ustādh Hāshim",
    durationMinutes: 40,
    pages: [
      {
        kind: "cover",
        series: "Sīrah Series",
        title: "OUR LEGACY",
        subtitle: "Daily Family Taʿlīm",
        lessonTitle: "Introduction to Sīrah: The Life of the Greatest",
        author: "Ustādh Hāshim",
        part: "Opening Study"
      },
      {
        kind: "segment",
        segmentNumber: 1,
        minutes: 10,
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
        duaTranslation: "Āmīn."
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
        duaTranslation: "Āmīn."
      }
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
