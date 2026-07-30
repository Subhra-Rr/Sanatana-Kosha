import { ScriptureItem, Verse } from '../types';

export interface GitaChapter {
  chapterNumber: number;
  title: string;
  sanskritTitle: string;
  transliteration: string;
  meaning: string;
  versesCount: number;
  summary: string;
  keyThemes: string[];
  lifeLessons: string[];
  featuredVerses: Verse[];
}

export const GITA_CHAPTERS_DATA: GitaChapter[] = [
  {
    chapterNumber: 1,
    title: 'Arjuna Vishada Yoga',
    sanskritTitle: 'अर्जुनविषादयोगः',
    transliteration: 'Arjuna Viṣāda Yoga',
    meaning: 'The Yoga of Arjuna’s Despondency',
    versesCount: 47,
    summary: 'Set on the sacred battlefield of Kurukshetra, Arjuna surveys both armies. Overwhelmed by emotional grief, attachment, and moral conflict over fighting kin, he drops his bow Gandiva and refuses to fight.',
    keyThemes: ['Duty vs Personal Emotion', 'Crisis of Identity', 'Surrender to Guidance'],
    lifeLessons: ['Emotional confusion often precedes deep spiritual awakening. Honest acknowledgement of moral crisis is the first step toward self-discovery.'],
    featuredVerses: [
      {
        id: 'bg-1-47',
        chapterNumber: 1,
        verseNumber: 47,
        sanskrit: 'सञ्जय उवाच ।\nएवमुक्त्वार्जुनः सङ्ख्ये रथोपस्थ उपविशत् ।\nविसृज्य सशरं चापं शोकसंविग्नमानसः ॥',
        transliteration: 'sañjaya uvāca |\nevam uktvārjunaḥ saṅkhye rathopastha upaviśat |\nvisṛjya saśaraṁ cāpaṁ śokasaṁvignamānasaḥ ||',
        translation: 'Sanjaya said: Having spoken thus on the battlefield, Arjuna dropped his bow and arrows and sank down into the seat of his chariot, his mind overwhelmed with sorrow.',
        keyConcepts: ['Grief', 'Inner Struggle', 'Dropping the Bow'],
        lifeLessons: ['When mind is overwhelmed by grief, seek wisdom before taking impulsive action.']
      }
    ]
  },
  {
    chapterNumber: 2,
    title: 'Sankhya Yoga',
    sanskritTitle: 'साङ्ख्ययोगः',
    transliteration: 'Sāṅkhya Yoga',
    meaning: 'The Yoga of Knowledge & Self-Realization',
    versesCount: 72,
    summary: 'Lord Krishna delivers the foundational immortal core of the Gita. He reveals the eternal, indestructible nature of Atman (Self), teaches Nishkama Karma (selfless action), and describes the qualities of Sthitaprajna (one grounded in unwavering wisdom).',
    keyThemes: ['Immortality of the Self', 'Nishkama Karma', 'Sthitaprajna (Steady Wisdom)'],
    lifeLessons: ['Focus on effort and duty, not anxiety over outcomes. You are eternal consciousness beyond the passing body.'],
    featuredVerses: [
      {
        id: 'bg-2-20',
        chapterNumber: 2,
        verseNumber: 20,
        sanskrit: 'न जायते म्रियते वा कदाचिन्नायं भूत्वा भविता वा न भूयः ।\nअजो नित्यः शाश्वतोऽयं पुराणो न हन्यते हन्यमाने शरीरे ॥',
        transliteration: 'na jāyate mriyate vā kadācin nāyaṁ bhūtvā bhavitā vā na bhūyaḥ |\najo nityaḥ śāśvato\'yaṁ purāṇo na hanyate hanyamāne śarīre ||',
        wordByWord: [
          { sanskrit: 'na', english: 'not', meaning: 'never' },
          { sanskrit: 'jāyate', english: 'is born', meaning: 'takes birth' },
          { sanskrit: 'mriyate', english: 'dies', meaning: 'undergoes death' },
          { sanskrit: 'vāt', english: 'or', meaning: 'or at any time' },
          { sanskrit: 'ajaḥ', english: 'unborn', meaning: 'birthless' },
          { sanskrit: 'nityaḥ', english: 'eternal', meaning: 'permanent' },
          { sanskrit: 'śāśvataḥ', english: 'everlasting', meaning: 'ageless' },
          { sanskrit: 'purāṇaḥ', english: 'ancient', meaning: 'primeval' }
        ],
        translation: 'The Self is never born, nor does It ever die. It has not come into being, nor will It cease to be. It is unborn, eternal, everlasting, and ancient; It is not slain when the body is slain.',
        commentaries: [
          {
            author: 'Adi Shankaracharya',
            tradition: 'Advaita Vedanta',
            text: 'The six modifications of existence (birth, growth, change, decay, illness, death) belong strictly to the physical body, never to the eternal Atman.'
          },
          {
            author: 'Ramanujacharya',
            tradition: 'Vishishtadvaita',
            text: 'Recognizing the imperishable nature of the individual soul frees one from misplaced sorrow.'
          }
        ],
        keyConcepts: ['Immortality', 'Atman', 'Beyond Six Modifications'],
        lifeLessons: ['Do not let fear of mortality or change paralyze your higher purpose.']
      },
      {
        id: 'bg-2-47',
        chapterNumber: 2,
        verseNumber: 47,
        sanskrit: 'कर्मण्येवाधिकारस्ते मा फलेषु कदाचन ।\nमा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि ॥',
        transliteration: 'karmaṇyevādhikāraste mā phaleṣu kadācana |\nmā karmaphalaheturbhūrmā te saṅgo\'stvakarmaṇi ||',
        wordByWord: [
          { sanskrit: 'karmaṇi', english: 'in duty/action', meaning: 'in work alone' },
          { sanskrit: 'eva', english: 'only', meaning: 'strictly' },
          { sanskrit: 'adhikāraḥ', english: 'right/domain', meaning: 'your privilege' },
          { sanskrit: 'te', english: 'your', meaning: 'belongs to you' },
          { sanskrit: 'mā', english: 'never', meaning: 'not' },
          { sanskrit: 'phaleṣu', english: 'in results', meaning: 'fruits of action' }
        ],
        translation: 'Your right is to work alone, never to its fruits. Let not the fruit of action be your motive, nor let your attachment be to inaction.',
        commentaries: [
          {
            author: 'Swami Vivekananda',
            tradition: 'Practical Vedanta',
            text: 'Work like a master, not like a slave! Focus entirely on excellence in present duty without mental drain over future rewards.'
          }
        ],
        keyConcepts: ['Karma Yoga', 'Nishkama Karma', 'Detachment'],
        lifeLessons: ['Channel 100% of your energy into execution. Results naturally follow right effort.']
      }
    ]
  },
  {
    chapterNumber: 3,
    title: 'Karma Yoga',
    sanskritTitle: 'कर्मयोगः',
    transliteration: 'Karma Yoga',
    meaning: 'The Yoga of Selfless Action',
    versesCount: 43,
    summary: 'Krishna explains why inaction is impossible in physical existence. He introduces the cosmic wheel of Yajna (mutual sacrifice between humans, nature, and divine forces) and warns against desire (Kama) and anger (Krodha) as the chief destroyers of peace.',
    keyThemes: ['Cosmic Wheel of Yajna', 'Conquering Kama (Desire)', 'Leadership by Example'],
    lifeLessons: ['Perform work as an offering to society. Leaders set the standard for the community through personal discipline.'],
    featuredVerses: [
      {
        id: 'bg-3-21',
        chapterNumber: 3,
        verseNumber: 21,
        sanskrit: 'यद्यदाचरति श्रेष्ठस्तत्तदेवेतरो जनः ।\nस यत्प्रमाणं कुरुते लोकस्तदनुवर्तते ॥',
        transliteration: 'yad yad ācarati śreṣṭhas tat tad evetaro janaḥ |\nsa yat pramāṇaṁ kurute lokas tad anuvartate ||',
        translation: 'Whatever a great leader does, common people follow. Whatever standards they set by exemplary conduct, the world pursues.',
        keyConcepts: ['Leadership', 'Lokasamgraha', 'Exemplary Conduct'],
        lifeLessons: ['Integrity in leadership influences the moral fabric of entire organizations and societies.']
      }
    ]
  },
  {
    chapterNumber: 4,
    title: 'Jnana Karma Sanyasa Yoga',
    sanskritTitle: 'ज्ञानकर्मसंन्यासयोगः',
    transliteration: 'Jñāna Karma Sannyāsa Yoga',
    meaning: 'The Yoga of Wisdom & Renunciation of Action',
    versesCount: 42,
    summary: 'Krishna reveals the timeless lineage of Vedic wisdom passed to Vivasvan (Sun god). He explains divine incarnation (Avatara) for upholding righteousness and shows how wisdom burns all karmic impressions like fire.',
    keyThemes: ['Divine Incarnation (Avatara)', 'Wisdom Fire (Jnanagni)', 'Lineage of Wisdom'],
    lifeLessons: ['When righteousness declines, divine truth re-emerges in society through noble teachers and transformative movements.'],
    featuredVerses: [
      {
        id: 'bg-4-7-8',
        chapterNumber: 4,
        verseNumber: '7-8',
        sanskrit: 'यदा यदा हि धर्मस्य ग्लानिर्भवति भारत ।\nअभ्युत्थानमधर्मस्य तदात्मानं सृजाम्यहम् ॥\nपरित्राणाय साधूनां विनाशाय च दुष्कृताम् ।\nधर्मसंस्थापनार्थाय सम्भवामि युगे युगे ॥',
        transliteration: 'yadā yadā hi dharmasya glānir bhavati bhārata |\nabhyutthānam adharmasya tadātmānaṁ sṛjāmyaham ||\nparitrāṇāya sādhūnāṁ vināśāya ca duṣkṛtām |\ndharmasaṁsthāpanārthāya sambhavāmi yuge yuge ||',
        translation: 'Whenever there is a decline of righteousness (Dharma) and rise of unrighteousness, O Arjuna, I manifest Myself. For the protection of the good, the transformation of evil, and re-establishing Dharma, I appear age after age.',
        keyConcepts: ['Avatara', 'Dharma Protection', 'Yuga Cycle'],
        lifeLessons: ['Truth and moral order ultimately triumph over temporary ethical breakdown.']
      }
    ]
  },
  {
    chapterNumber: 5,
    title: 'Karma Sanyasa Yoga',
    sanskritTitle: 'कर्मसंन्यासयोगः',
    transliteration: 'Karma Sannyāsa Yoga',
    meaning: 'The Yoga of Renunciation',
    versesCount: 29,
    summary: 'Reconciles outer renunciation (Sannyasa) with selfless engagement (Karma Yoga). Krishna declares that true renunciation is an inner mental state of equal-mindedness (Samatvam), free from attraction and aversion.',
    keyThemes: ['Inner Renunciation', 'Lotus Leaf Metaphor', 'Equal-Mindedness'],
    lifeLessons: ['Live in the world like a lotus leaf in water — immersed in daily work, yet unstained by ego and greed.'],
    featuredVerses: [
      {
        id: 'bg-5-10',
        chapterNumber: 5,
        verseNumber: 10,
        sanskrit: 'ब्रह्मण्याधाय कर्माणि सङ्गं त्यक्त्वा करोति यः ।\nलिप्यते न स पापेन पद्मपत्रमिवाम्भसा ॥',
        transliteration: 'brahmaṇyādhāya karmāṇi saṅgaṁ tyaktvā karoti yaḥ |\nlipyate na sa pāpena padmapatram ivāmphasā ||',
        translation: 'One who performs action surrendering all results to the Supreme, abandoning attachment, remains untouched by negativity, just as a lotus leaf is untouched by water.',
        keyConcepts: ['Lotus Leaf Analogy', 'Surrender', 'Purity of Action'],
        lifeLessons: ['Remain detached from petty gossip and outcomes while fulfilling daily responsibilities.']
      }
    ]
  },
  {
    chapterNumber: 6,
    title: 'Dhyana Yoga',
    sanskritTitle: 'ध्यानयोगः',
    transliteration: 'Dhyāna Yoga',
    meaning: 'The Yoga of Meditation',
    versesCount: 47,
    summary: 'Focuses on the practice of meditation (Dhyana), mind control, moderation in eating/sleeping, and self-mastery. Krishna asserts that the mind can be one’s best friend or worst enemy.',
    keyThemes: ['Mind Control', 'Self as Friend or Foe', 'Moderation (Yukta-ahara)'],
    lifeLessons: ['Elevate yourself through your own mind. Do not degrade yourself; the controlled mind is your greatest ally.'],
    featuredVerses: [
      {
        id: 'bg-6-5',
        chapterNumber: 6,
        verseNumber: 5,
        sanskrit: 'उद्धरेदात्मनात्मानं नात्मानमवसादयेत् ।\nआत्मैव ह्यात्मनो बन्धुरात्मैव रिपुरात्मनः ॥',
        transliteration: 'uddhared ātmanātmānaṁ nātmānam avasādayet |\nātmaiva hyātmano bandhur ātmaiva ripur ātmanaḥ ||',
        translation: 'Elevate yourself by your own Self; do not degrade yourself. For your Self alone is your friend, and your Self alone is your enemy.',
        keyConcepts: ['Self-Reliance', 'Mind Control', 'Inner Mastery'],
        lifeLessons: ['Take personal accountability for your emotional growth and mental habits.']
      }
    ]
  },
  {
    chapterNumber: 7,
    title: 'Jnana Vijnana Yoga',
    sanskritTitle: 'ज्ञानविज्ञानयोगः',
    transliteration: 'Jñāna Vijñāna Yoga',
    meaning: 'The Yoga of Knowledge & Wisdom',
    versesCount: 30,
    summary: 'Krishna reveals His lower nature (Prakriti of 8 elements: Earth, Water, Fire, Air, Space, Mind, Intellect, Ego) and His higher transcendent nature (Purusha). He describes four types of virtuous seekers.',
    keyThemes: ['Prakriti and Purusha', '4 Types of Seekers', 'Divine Maya'],
    lifeLessons: ['Behind the changing world of matter and thoughts lies the single divine thread connecting all.'],
    featuredVerses: [
      {
        id: 'bg-7-7',
        chapterNumber: 7,
        verseNumber: 7,
        sanskrit: 'मत्तः परतरं नान्यत्किञ्चिदस्ति धनञ्जय ।\nमयि सर्वमिदं प्रोतं सूत्रे मणिगणा इव ॥',
        transliteration: 'mattaḥ parataraṁ nānyat kiñcid asti dhanañjaya |\nmayi sarvam idaṁ protaṁ sūtre maṇigaṇā iva ||',
        translation: 'There is nothing higher than Me, O Arjuna. Everything in this universe is strung on Me like pearls on a thread.',
        keyConcepts: ['Cosmic Thread (Sutra)', 'Unity in Diversity', 'Supreme Source'],
        lifeLessons: ['Perceive the hidden spiritual connection that unifies all living beings.']
      }
    ]
  },
  {
    chapterNumber: 8,
    title: 'Akshara Brahma Yoga',
    sanskritTitle: 'अक्षरब्रह्मयोगः',
    transliteration: 'Akṣara Brahma Yoga',
    meaning: 'The Yoga of Eternal Imperishable Supreme',
    versesCount: 28,
    summary: 'Answers Arjuna’s questions regarding Brahman, Adhyatma, Karma, Adhibuta, Adhidaiva, and Adhiyajna. Details the journey of the soul during departure (Anta-kale) and meditation on OM.',
    keyThemes: ['Final Thoughts at Departure', 'Imperishable Om', 'Solar & Lunar Paths'],
    lifeLessons: ['What you consistently contemplate throughout life forms your consciousness at life’s transition.'],
    featuredVerses: [
      {
        id: 'bg-8-6',
        chapterNumber: 8,
        verseNumber: 6,
        sanskrit: 'यं यं वापि स्मरन्भावं त्यजत्यन्ते कलेवरम् ।\nतं तमैवैति कौन्तेय सदा तद्भावभावितः ॥',
        transliteration: 'yaṁ yaṁ vāpi smaran bhāvaṁ tyajatyante kalevaram |\ntaṁ tam evaiti kaunteya sadā tadbhāvabhāvitaḥ ||',
        translation: 'Whatever state of being one remembers when leaving the body at death, to that state alone one goes, having been constantly absorbed in its thought.',
        keyConcepts: ['Anta-kale', 'Mindset', 'Continuous Practice'],
        lifeLessons: ['Cultivate noble thoughts and divine remembrance as daily living habits.']
      }
    ]
  },
  {
    chapterNumber: 9,
    title: 'Raja Vidya Raja Guhya Yoga',
    sanskritTitle: 'राजविद्याराजगुह्ययोगः',
    transliteration: 'Rāja Vidyā Rāja Guhya Yoga',
    meaning: 'The Yoga of Sovereign Science & Sovereign Secret',
    versesCount: 34,
    summary: 'Presents the supreme secret of devotion: how the Lord sustains all creation without being bound by it. Assures that even a leaf, flower, fruit, or water offered with love is accepted.',
    keyThemes: ['Sovereign Mystery', 'Patram Pushpam Offering', 'Ananya Bhakti'],
    lifeLessons: ['Sincerity of heart matters far more than lavish outer display in spiritual practice.'],
    featuredVerses: [
      {
        id: 'bg-9-26',
        chapterNumber: 9,
        verseNumber: 26,
        sanskrit: 'पत्रं पुष्पं फलं तोयं यो मे भक्त्या प्रयच्छति ।\nतदहं भक्त्युपहृतमश्नामि प्रयतात्मनः ॥',
        transliteration: 'patraṁ puṣpaṁ phalaṁ toyaṁ yo me bhaktyā prayacchati |\ntad ahaṁ bhaktyupahṛtam aśnāmi prayatātmanaḥ ||',
        translation: 'Whoever offers Me with devotion a leaf, a flower, a fruit, or water — that offering of love made by a pure-hearted seeker, I accept with joy.',
        keyConcepts: ['Pure Devotion', 'Simplicity', 'Love Offering'],
        lifeLessons: ['Offer all daily thoughts, simple meals, and work with loving devotion.']
      },
      {
        id: 'bg-9-22',
        chapterNumber: 9,
        verseNumber: 22,
        sanskrit: 'अनन्याश्चिन्तयन्तो मां ये जनाः पर्युपासते ।\nतेषां नित्याभियुक्तानां योगक्षेमं वहाम्यहम् ॥',
        transliteration: 'ananyāś cintayanto māṁ ye janāḥ paryupāsate |\nteṣāṁ nityābhiyuktānāṁ yogakṣemaṁ vahāmyaham ||',
        translation: 'To those who worship Me with single-minded focus, meditating on Me always, I personally carry what they lack (Yoga) and preserve what they have (Kshema).',
        keyConcepts: ['Yoga-Kshema', 'Divine Assurance', 'Single-minded Focus'],
        lifeLessons: ['When you dedicate your talents to higher truth, divine providence supports your well-being.']
      }
    ]
  },
  {
    chapterNumber: 10,
    title: 'Vibhuti Yoga',
    sanskritTitle: 'विभूतियोगः',
    transliteration: 'Vibhūti Yoga',
    meaning: 'The Yoga of Divine Opulences',
    versesCount: 42,
    summary: 'Krishna enumerates His divine manifestations throughout nature: among luminaries He is the Sun, among mountains the Himalayas, among rivers the Ganges, among letters OM, and among silent practices Japa.',
    keyThemes: ['Divine Splendor', 'Sacred Nature', 'Vibhuti Expressions'],
    lifeLessons: ['Recognize divine grandeur in the highest expressions of art, nature, intelligence, and heroism.'],
    featuredVerses: [
      {
        id: 'bg-10-41',
        chapterNumber: 10,
        verseNumber: 41,
        sanskrit: 'यद्यद्विभूतिमत्सत्त्वं श्रीमदूर्जितमेव वा ।\nतत्तदेवावगच्छ त्वं मम तेजोंशसम्भवम् ॥',
        transliteration: 'yad yad vibhūtimat sattvaṁ śrīmad ūrjitam eva vā |\ntat tad evāvagaccha tvaṁ mama tejo\'ṁśasambhavam ||',
        translation: 'Know that whatever is glorious, beautiful, or mighty in this world springs from a spark of My divine splendor.',
        keyConcepts: ['Vibhuti', 'Divine Spark', 'Reverence for Beauty'],
        lifeLessons: ['Appreciate beauty, brilliance, and virtue in others as glimpses of divine excellence.']
      }
    ]
  },
  {
    chapterNumber: 11,
    title: 'Vishwarupa Darshana Yoga',
    sanskritTitle: 'विश्वरूपदर्शनयोगः',
    transliteration: 'Viśvarūpa Darśana Yoga',
    meaning: 'The Yoga of the Cosmic Form Vision',
    versesCount: 55,
    summary: 'At Arjuna’s request, Krishna grants divine vision (Divya Chakshu) to behold His overwhelming Vishwarupa — containing all universes, gods, stars, times, and dissolution within one infinite form.',
    keyThemes: ['Vishwarupa', 'Cosmic Scale', 'Divya Chakshu', 'Awe and Humility'],
    lifeLessons: ['Individual ego vanishes instantly when confronted with the infinite scale and eternal majesty of the universe.'],
    featuredVerses: [
      {
        id: 'bg-11-12',
        chapterNumber: 11,
        verseNumber: 12,
        sanskrit: 'दिवि सूर्यसहस्रस्य भवेद्युगपदुत्थिता ।\nयदि भाः सदृशी सा स्याद्भासस्तस्य महात्मनः ॥',
        transliteration: 'divi sūryasahasrasya bhavedyugapadutthitā |\nyadi bhāḥ sadṛśī sā syād bhāsastasya mahātmanaḥ ||',
        translation: 'If the radiance of a thousand suns were to burst forth at once in the sky, that would resemble the glory of that Exalted Being!',
        keyConcepts: ['Thousand Suns', 'Cosmic Radiance', 'Awe'],
        lifeLessons: ['Revere the vast mystery of existence that far exceeds human intellectual grasp.']
      }
    ]
  },
  {
    chapterNumber: 12,
    title: 'Bhakti Yoga',
    sanskritTitle: 'भक्तियोगः',
    transliteration: 'Bhakti Yoga',
    meaning: 'The Yoga of Devotion',
    versesCount: 20,
    summary: 'Compares devotion to the personal Lord (Saguna) with meditation on the unmanifest (Nirguna). Delineates the 39 pristine qualities of a true devotee (Bhakta) who is dear to God.',
    keyThemes: ['Qualities of a True Devotee', 'Saguna vs Nirguna Bhakti', 'Universal Friendliness'],
    lifeLessons: ['True devotion is reflected in non-envy, compassion, patience, and emotional balance.'],
    featuredVerses: [
      {
        id: 'bg-12-13-14',
        chapterNumber: 12,
        verseNumber: '13-14',
        sanskrit: 'अद्वेष्टा सर्वभूतानां मैत्रः करुण एव च ।\nनिर्ममो निरहङ्कारः समदुःखसुखः क्षमी ॥\nसन्तुष्टः सततं योगी यतात्मा दृढनिश्चयः ।\nमय्यर्पितमनोबुद्धिर्यो मद्भक्तः स मे प्रियः ॥',
        transliteration: 'adveṣṭā sarvabhūtānāṁ maitraḥ karuṇa eva ca |\nnirmamo nirahaṅkāraḥ samaduḥkhasukhaḥ kṣamī ||\nsantuṣṭaḥ satataṁ yogī yatātmā dṛḍhaniścayaḥ |\nmayyarpitamanobuddhiryo madbhaktaḥ sa me priyaḥ ||',
        translation: 'One who harbors no ill-will toward any living being, who is friendly and compassionate, free from possessiveness and egoism, balanced in pleasure and pain, forgiving, ever content, self-controlled, with resolute determination, whose mind and intellect are surrendered to Me — such a devotee is dear to Me.',
        keyConcepts: ['39 Qualities', 'Universal Compassion', 'Equal Mind'],
        lifeLessons: ['Cultivate genuine compassion and freedom from egoism as authentic spiritual practice.']
      }
    ]
  },
  {
    chapterNumber: 13,
    title: 'Kshetra Kshetrajna Vibhaga Yoga',
    sanskritTitle: 'क्षेत्रक्षेत्रज्ञविभागयोगः',
    transliteration: 'Kṣetra Kṣetrajña Vibhāga Yoga',
    meaning: 'The Yoga of Field & Knower of the Field',
    versesCount: 35,
    summary: 'Defines Kshetra (the Field of body, mind, senses, emotions) and Kshetrajna (the Knower of the Field / Atman). Enumerates 20 virtues that constitute true knowledge (Jnanam).',
    keyThemes: ['Field and Knower', '20 Virtues of Knowledge', 'Unattached Consciousness'],
    lifeLessons: ['You are the conscious witness (Observer) of your thoughts and feelings, not the turbulent mental waves themselves.'],
    featuredVerses: [
      {
        id: 'bg-13-2',
        chapterNumber: 13,
        verseNumber: 2,
        sanskrit: 'इदं शरीरं कौन्तेय क्षेत्रमित्यभिधीयते ।\nएतद्यो वेत्ति तं प्राहुः क्षेत्रज्ञ इति तद्विदः ॥',
        transliteration: 'idaṁ śarīraṁ kaunteya kṣetram ityabhidhīyate |\netad yo vetti taṁ prāhuḥ kṣetrajña iti tadvidaḥ ||',
        translation: 'This body, O Arjuna, is called the Field (Kshetra), and one who knows it is called the Knower of the Field (Kshetrajna) by the wise.',
        keyConcepts: ['Kshetra', 'Kshetrajna', 'Witness Consciousness'],
        lifeLessons: ['Observe your physical and mental changes without becoming entangled in egoic identification.']
      }
    ]
  },
  {
    chapterNumber: 14,
    title: 'Gunatraya Vibhaga Yoga',
    sanskritTitle: 'गुणत्रयविभागयोगः',
    transliteration: 'Guṇatraya Vibhāga Yoga',
    meaning: 'The Yoga of the Three Gunas (Qualities of Nature)',
    versesCount: 27,
    summary: 'Analyzes the 3 Gunas governing all material nature and human mind: Sattva (Purity, Harmony, Light), Rajas (Passion, Agitation, Craving), and Tamas (Inertia, Darkness, Lethargy). Explains how to transcend them (Gunatita).',
    keyThemes: ['Sattva, Rajas, Tamas', 'Psychological Archetypes', 'Transcending Gunas'],
    lifeLessons: ['Shift daily habits from Tamas to Rajas, from Rajas to Sattva, and ultimately abide as the serene Gunatita witness.'],
    featuredVerses: [
      {
        id: 'bg-14-6',
        chapterNumber: 14,
        verseNumber: 6,
        sanskrit: 'तत्र सत्त्वं निर्मलत्वात्प्रकाशकमनामयम् ।\nसुखसङ्गेन बध्नाति ज्ञानसङ्गेन चानघ ॥',
        transliteration: 'tatra sattvaṁ nirmalatvāt prakāśakam anāmayam |\nsukhasaṅgena badhnāti jñānasaṅgena cānagha ||',
        translation: 'Among these, Sattva, being pure, luminous, and free from stain, illuminates and bestows peace; yet it binds the soul through attachment to happiness and knowledge.',
        keyConcepts: ['Sattva', 'Luminosity', 'Subtle Attachment'],
        lifeLessons: ['Use Sattva for clarity, but do not become pridefully attached even to intellectual knowledge.']
      }
    ]
  },
  {
    chapterNumber: 15,
    title: 'Purushottama Yoga',
    sanskritTitle: 'पुरुषोत्तमयोगः',
    transliteration: 'Puruṣottama Yoga',
    meaning: 'The Yoga of the Supreme Person',
    versesCount: 20,
    summary: 'Describes the allegorical inverted banyan tree (Ashvattha) with roots above in Brahman and branches below in the world. Reveals Purushottama as transcendent beyond both Kshara (perishable matter) and Akshara (unchanging soul).',
    keyThemes: ['Inverted Banyan Tree', 'Purushottama', 'Weapon of Detachment'],
    lifeLessons: ['Cut through entanglement in worldly desires with the sharp axe of non-attachment (Asanga-shastra).'],
    featuredVerses: [
      {
        id: 'bg-15-1',
        chapterNumber: 15,
        verseNumber: 1,
        sanskrit: 'ऊर्ध्वमूलमधःशाखमश्वत्थं प्राहुरव्ययम् ।\nछन्दांसि यस्य पर्णानि यस्तं वेद स वेदवित् ॥',
        transliteration: 'ūrdhvamūlam adhaḥśākham aśvatthaṁ prāhur avyayam |\nchandāṁsi yasya parṇāni yas taṁ veda sa vedavit ||',
        translation: 'They speak of an imperishable banyan tree with roots above in the Divine and branches spreading below into the world, whose leaves are the Vedic hymns. One who understands this tree knows the essence of the Veda.',
        keyConcepts: ['Ashvattha Tree', 'Roots Above', 'Vedic Cosmic Metaphor'],
        lifeLessons: ['Understand that visible world phenomena draw their true vitality from invisible spiritual roots.']
      }
    ]
  },
  {
    chapterNumber: 16,
    title: 'Daivasura Sampad Vibhaga Yoga',
    sanskritTitle: 'दैवासुरसम्पद्विभागयोगः',
    transliteration: 'Daivāsura Sampad Vibhāga Yoga',
    meaning: 'The Yoga of Divine & Demonic Natures',
    versesCount: 24,
    summary: 'Contrasts the 26 Divine Qualities (Daivi Sampad — fearlessness, purity, charity, self-control, non-violence) with Demonic tendencies (Asuri Sampad — arrogance, conceit, cruelty, insatiable lust, falsehood). Denounces the three gates to self-destruction: Lust, Anger, Greed.',
    keyThemes: ['26 Divine Qualities', '3 Gates to Hell', 'Moral Discrimination'],
    lifeLessons: ['Consciously cultivate gentle, honest, fearless virtues while guarding against anger, arrogance, and greed.'],
    featuredVerses: [
      {
        id: 'bg-16-21',
        chapterNumber: 16,
        verseNumber: 21,
        sanskrit: 'त्रिविधं नरकस्येदं द्वारं नाशनमात्मनः ।\nकामः क्रोधस्तथा लोभस्तस्मादेतत्त्रयं त्यजेत् ॥',
        transliteration: 'trividhaṁ narakasyedaṁ dvāraṁ nāśanam ātmanaḥ |\nkāmaḥ krodhas tathā lobhas tasmād etat trayaṁ tyajet ||',
        translation: 'Lust, Anger, and Greed are the three gates to self-destruction. Therefore, one must completely renounce these three.',
        keyConcepts: ['Three Gates', 'Kama, Krodha, Lobha', 'Self-Preservation'],
        lifeLessons: ['Identify and eliminate greed, uncontrollable anger, and impulsive lust from mind habits.']
      }
    ]
  },
  {
    chapterNumber: 17,
    title: 'Shraddhatraya Vibhaga Yoga',
    sanskritTitle: 'श्रद्धात्रयविभागयोगः',
    transliteration: 'Śraddhātraya Vibhāga Yoga',
    meaning: 'The Yoga of the Threefold Faith',
    versesCount: 28,
    summary: 'Explains how faith (Shraddha), food choices, austerity (Tapas of body, speech, and mind), and charity (Dana) are conditioned by Sattva, Rajas, or Tamas. Concludes with the sacred formula OM TAT SAT.',
    keyThemes: ['3 Types of Faith & Food', 'Tapas of Speech', 'OM TAT SAT'],
    lifeLessons: ['Speak truthful, pleasant, beneficent words that do not cause agitation to others (Anudvega-karam vakyam).'],
    featuredVerses: [
      {
        id: 'bg-17-15',
        chapterNumber: 17,
        verseNumber: 15,
        sanskrit: 'अनुद्वेगकरं वाक्यं सत्यं प्रियहितं च यत् ।\nस्वाध्यायाभ्यसनं चैव वाङ्मयं तप उच्यते ॥',
        transliteration: 'anudvegakaraṁ vākyaṁ satyaṁ priyahitaṁ ca yat |\nsvādhyāyābhyasanaṁ caiva vāṅmayaṁ tapa ucyate ||',
        translation: 'Words that cause no agitation, that are truthful, pleasant, and beneficial, combined with regular study of sacred literature — this is called austerity of speech (Vangmaya Tapas).',
        keyConcepts: ['Speech Austerity', 'Truthful & Kind', 'Svadhyaya'],
        lifeLessons: ['Practice thoughtful communication: Is it true? Is it necessary? Is it kind?']
      }
    ]
  },
  {
    chapterNumber: 18,
    title: 'Moksha Sanyasa Yoga',
    sanskritTitle: 'मोक्षसंन्यासयोगः',
    transliteration: 'Mokṣa Sannyāsa Yoga',
    meaning: 'The Yoga of Liberation through Renunciation',
    versesCount: 78,
    summary: 'The grand synthesis of the entire Bhagavad Gita. Reviews Tyaga vs Sannyasa, the 5 factors of action, the 3 types of knowledge, intellect, and happiness. Concludes with the grand finale verse (Charama Shloka) of total divine refuge.',
    keyThemes: ['Grand Synthesis', '5 Factors of Action', 'Charama Shloka', 'Arjuna’s Reawakening'],
    lifeLessons: ['Surrender fear and self-doubt. Align your will with cosmic righteousness and rise to act with joy.'],
    featuredVerses: [
      {
        id: 'bg-18-66',
        chapterNumber: 18,
        verseNumber: 66,
        sanskrit: 'सर्वधर्मान्परित्यज्य मामेकं शरणं व्रज ।\nअहं त्वा सर्वपापेभ्यो मोक्षयिष्यामि मा शुचः ॥',
        transliteration: 'sarvadharmān parityajya mām ekaṁ śaraṇaṁ vraja |\nahaṁ tvā sarvapāpebhyo mokṣayiṣyāmi mā śucaḥ ||',
        wordByWord: [
          { sanskrit: 'sarva-dharmān', english: 'all duties/doctrines', meaning: 'all relative obligations' },
          { sanskrit: 'parityajya', english: 'abandoning', meaning: 'transcending egoic attachment' },
          { sanskrit: 'mām ekam', english: 'in Me alone', meaning: 'the Supreme Divine' },
          { sanskrit: 'śaraṇam', english: 'refuge', meaning: 'shelter' },
          { sanskrit: 'vraja', english: 'go/take', meaning: 'surrender' },
          { sanskrit: 'ahaṁ tvā', english: 'I shall you', meaning: 'I will protect you' },
          { sanskrit: 'mokṣayiṣyāmi', english: 'will liberate', meaning: 'free from bondage' },
          { sanskrit: 'mā śucaḥ', english: 'do not grieve', meaning: 'fear not' }
        ],
        translation: 'Abandoning all relative dependencies and self-centered anxieties, take refuge in Me alone! I shall liberate you from all sins and sorrows. Do not grieve!',
        commentaries: [
          {
            author: 'Adi Shankaracharya',
            tradition: 'Advaita',
            text: 'Renouncing the agency of all ego-driven karma and realizing oneness with Paramatman brings instant liberation from delusion.'
          },
          {
            author: 'Ramanujacharya',
            tradition: 'Vishishtadvaita',
            text: 'The supreme promise of Saranagati (absolute surrender) to Narayana, assuring salvation to any sincere seeker.'
          }
        ],
        keyConcepts: ['Charama Shloka', 'Saranagati', 'Absolute Refuge'],
        lifeLessons: ['Replace anxiety and egoic control with trust in divine grace and higher cosmic order.']
      },
      {
        id: 'bg-18-78',
        chapterNumber: 18,
        verseNumber: 78,
        sanskrit: 'यत्र योगेश्वरः कृष्णो यत्र पार्थो धनुर्धरः ।\nतत्र श्रीर्विजयो भूतिर्ध्रुवा नीतिर्मतिर्मम ॥',
        transliteration: 'yatra yogeśvaraḥ kṛṣṇo yatra pārtho dhanurdharaḥ |\ntatra śrīr vijayo bhūtir dhruvā nītir matir mama ||',
        translation: 'Wherever there is Krishna, the Lord of Yoga, and wherever there is Arjuna, the wielder of the bow — there will surely be prosperity, victory, expansion, and enduring righteousness. This is my firm conviction!',
        keyConcepts: ['Sanjaya’s Finale', 'Yoga & Action', 'Guaranteed Victory'],
        lifeLessons: ['When spiritual wisdom (Krishna) unites with dedicated practical effort (Arjuna), success and ethical harmony are assured.']
      }
    ]
  }
];
