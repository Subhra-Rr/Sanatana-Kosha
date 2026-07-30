import { ScriptureItem } from '../types';

export const VEDAS_DATA: ScriptureItem[] = [
  {
    id: 'rigveda',
    title: 'Rigveda',
    sanskritTitle: 'ऋग्वेदः',
    transliteration: 'Ṛgveda',
    category: 'veda',
    summary: 'The oldest known Vedic Sanskrit text, containing 1,028 hymns (Suktas) organized into 10 Mandalas (books), focused on cosmic order, cosmic creation, and divine forces.',
    historicalPeriod: 'c. 1500 BCE – 1200 BCE (Oral Tradition prior)',
    associatedTraditions: ['Shruti', 'Vedic Tradition', 'Shakala Shakha', 'Bashkala Shakha'],
    authorOrRishi: 'Revealed to various Maharshis (Vamadeva, Atri, Bharadvaja, Vishvamitra, Vasishtha, Kanva, Angiras)',
    overview: `The Rigveda is the foundational text of Sanatana Dharma, categorized under Shruti ("that which is heard"). It consists of 10,552 mantras (rik) grouped into 1,028 suktas (hymns) distributed across 10 Mandalas. 

Each hymn is dedicated to cosmic powers and divine principles including Agni (cosmic fire and transformation), Indra (cosmic force and slayer of darkness), Varuna (guardian of Rita/Cosmic Order), Soma (divine nectar), and Savitr (the awakening solar light).

The Rigveda contains profound philosophical reflections on creation, such as the famous **Nasadiya Sukta** (10.129) and the **Purusha Sukta** (10.90), as well as the supreme **Gayatri Mantra** (3.62.10).`,
    sectionsCount: 10,
    versesCount: 10552,
    keyThemes: ['Cosmic Order (Rita)', 'Creation Mysteries', 'Sacred Fire (Agni)', 'Divine Light (Savitr)', 'Cosmic Unity'],
    philosophicalSignificance: 'Establishes the fundamental Vedic doctrine: "Ekam Sat Vipra Bahudha Vadanti" (Truth is One, sages describe It in varied ways - Rigveda 1.164.46). It grounds all subsequent Indian philosophy in non-dual cosmic truth.',
    relatedScriptures: ['samaveda', 'yajurveda', 'atharpaveda', 'aitareya-upanishad', 'kaushitaki-upanishad'],
    citations: [
      {
        id: 'c1',
        sourceName: 'Rigveda Samhita',
        sectionOrVerse: 'Mandala 1, Sukta 164, Mantra 46',
        commentator: 'Sayana Charya',
        type: 'primary'
      },
      {
        id: 'c2',
        sourceName: 'The Rigveda: An Anthology',
        sectionOrVerse: 'Mandala 10, Sukta 129 (Nasadiya Sukta)',
        commentator: 'Prof. A.A. Macdonell / Max Müller Manuscripts',
        type: 'academic'
      }
    ],
    verses: [
      {
        id: 'rv-1-164-46',
        verseNumber: '1.164.46',
        sanskrit: 'इन्द्रं मित्रं वरुणमग्निमाहुरथो दिव्यः स सुपर्णो गरुत्मान्।\nएकं सद्विप्रा बहुधा वदन्त्यग्निं यमं मातरिश्वानमाहुः॥',
        transliteration: 'indraṁ mitraṁ varuṇamagnimāhuratho divyaḥ sa suparṇo garutmān |\nekaṁ sadviprā bahudhā vadantyagniṁ yamaṁ mātariśvānamāhuḥ ||',
        translation: 'They call Him Indra, Mitra, Varuna, Agni, and He is the heavenly noble-winged Garutman. To what is One, sages give many titles — they call It Agni, Yama, Matarishvan.',
        commentaries: [
          {
            author: 'Sayana',
            tradition: 'Vedic Mimamsa',
            text: 'The supreme entity (Paramatman) is non-dual, but praised under different names according to distinct functional aspects and attributes.'
          }
        ],
        keyConcepts: ['Unity of Godhead', 'Non-duality', 'Ekam Sat'],
        lifeLessons: ['Recognize the single divine reality manifesting through diverse paths and names. Avoid narrow sectarian division.']
      },
      {
        id: 'rv-3-62-10',
        verseNumber: '3.62.10',
        sanskrit: 'तत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि।\nधियो यो नः प्रचोदयात्॥',
        transliteration: 'tat savitur vareṇyaṁ bhargo devasya dhīmahi |\ndhiyo yo naḥ pracodayāt ||',
        translation: 'We meditate upon that glorious splendor of the divine Light (Savitr). May That inspire and illumine our intellect.',
        commentaries: [
          {
            author: 'Adi Shankaracharya',
            tradition: 'Advaita Vedanta',
            text: 'Savitr represents the inner self-luminous Brahman illuminating the buddhi (intellect).'
          }
        ],
        keyConcepts: ['Gayatri Mantra', 'Intellectual Illumination', 'Savitr'],
        lifeLessons: ['Daily contemplation on inner divine light clarifies perception and aligns individual intellect with cosmic truth.']
      },
      {
        id: 'rv-10-129-1',
        verseNumber: '10.129.1',
        sanskrit: 'नासदीयदासीन्नो सदासीत्तदानीं नासीद्रजो नो व्योमा परो यत्।\nकिमावरीवः कुह कस्य शर्मन्नम्भः किमासीद्गहनं गभीरम्॥',
        transliteration: 'nāsadāsīn no sadāsīt tadānīṁ nāsīd rajo no vyomā paro yat |\nkimāvarīvaḥ kuha kasya śarmannambhaḥ kimāsīd gahanaṁ gabhīram ||',
        translation: 'Then was neither non-existence nor existence. There was no realm of space, nor the sky beyond. What shrouded it? Where? In whose protection? Was there water, bottomless and deep?',
        commentaries: [
          {
            author: 'Modern Vedic Scholars',
            tradition: 'Comparative Cosmology',
            text: 'The Nasadiya Sukta explores pre-creation state where standard dualities of subject-object, light-darkness, and existence-nonexistence did not apply.'
          }
        ],
        keyConcepts: ['Nasadiya Sukta', 'Cosmology', 'Unmanifest Source'],
        lifeLessons: ['True knowledge begins with humble inquiry into the incomprehensible depth of the universe.']
      }
    ]
  },
  {
    id: 'yajurveda',
    title: 'Yajurveda',
    sanskritTitle: 'यजुर्वेदः',
    transliteration: 'Yajurveda',
    category: 'veda',
    summary: 'The Veda of prose formulas (Yajus) and sacrificial rituals, divided into Shukla (White) and Krishna (Black) recensions, bridging ritual action with profound metaphysical commentary.',
    historicalPeriod: 'c. 1200 BCE – 1000 BCE',
    associatedTraditions: ['Shukla Yajurveda (Madhyandina & Kanva)', 'Krishna Yajurveda (Taittiriya & Maitrayani)'],
    authorOrRishi: 'Yajnavalkya (Shukla) and Vaisampayana (Krishna)',
    overview: `The Yajurveda serves as the practical guidebook for Vedic rites (Yajna) and inner contemplative worship. It is divided into two primary divisions:
1. **Shukla (White) Yajurveda**: Contains pure mantras separated from ritual commentaries (Brahmanas). Includes the famous **Isha Upanishad** as its final 40th chapter and the monumental **Brihadaranyaka Upanishad**.
2. **Krishna (Black) Yajurveda**: Integrates mantras directly alongside ritual explanations. Contains the **Taittiriya Upanishad** and the revered hymn **Sri Rudram** (Shatarudriya).`,
    sectionsCount: 40,
    versesCount: 1975,
    keyThemes: ['Yajna (Sacred Offering)', 'Inner Sacrifice', 'Sri Rudram', 'Shanti Mantras', 'Isha Upanishad'],
    philosophicalSignificance: 'Transforms mechanical outer ceremony into inner self-offering. The famous Isha Upanishad opens with: "Ishavasyam idam sarvam" — All this universe is enfolded by the Divine.',
    relatedScriptures: ['isha-upanishad', 'brihadaranyaka-upanishad', 'taittiriya-upanishad'],
    citations: [
      {
        id: 'c3',
        sourceName: 'Shukla Yajurveda Samhita',
        sectionOrVerse: 'Adhyaya 40, Verse 1',
        type: 'primary'
      }
    ],
    verses: [
      {
        id: 'yv-40-1',
        verseNumber: '40.1 (Isha 1)',
        sanskrit: 'ईशा वास्यमिदं सर्वं यत्किञ्च जगत्यां जगत्।\nतेन त्यक्तेन भुञ्जीथा मा गृधः कस्यस्विद्धनम्॥',
        transliteration: 'īśā vāsyamidaṁ sarvaṁ yatkiñca jagatyāṁ jagat |\ntena tyaktena bhuñjīthā mā gṛdhaḥ kasvasvid dhanam ||',
        translation: 'All this, whatsoever moves in this moving world, is pervaded by the Divine. Enjoy through renunciation; do not covet anyone’s wealth.',
        commentaries: [
          {
            author: 'Adi Shankaracharya',
            tradition: 'Advaita',
            text: 'One who beholds the Lord in all objects abandons false ownership and enjoys serene peace.'
          }
        ],
        keyConcepts: ['Ishavasyam', 'Detached Enjoyment', 'Cosmic Consciousness'],
        lifeLessons: ['Live with mindfulness that resources are sacred trust, enjoying life without greedy attachment.']
      }
    ]
  },
  {
    id: 'samaveda',
    title: 'Samaveda',
    sanskritTitle: 'सामवेदः',
    transliteration: 'Sāmaveda',
    category: 'veda',
    summary: 'The Veda of sacred melodies and chants (Saman), set to musical notes (Svara), considered by Sri Krishna in the Bhagavad Gita as supreme among Vedas.',
    historicalPeriod: 'c. 1200 BCE – 1000 BCE',
    associatedTraditions: ['Kauthuma Shakha', 'Ranayaniya Shakha', 'Jaiminiya Shakha'],
    authorOrRishi: 'Rishi Bharadvaja & Sage Jaimini',
    overview: `The Samaveda consists of 1,875 verses, mostly drawn from the Rigveda but set to precise musical notation (Gana). It is the origin of Indian classical music, svara scales, and spiritual chant vibrations.

In Bhagavad Gita 10.22, Lord Krishna states: *"Vedanam Samavedo’smi"* ("Among the Vedas, I am the Samaveda"). The chant of Samaveda is designed to elevate the human consciousness into meditative absorption (Samadhi).`,
    sectionsCount: 2,
    versesCount: 1875,
    keyThemes: ['Musical Harmony', 'Nada Brahma (Sound Divine)', 'Udgit', 'Saman Chants', 'Chandogya Upanishad'],
    philosophicalSignificance: 'Establishes Sound (Nada) as a direct path to Brahman. Gave birth to the Chandogya Upanishad containing the Mahavakya "Tat Tvam Asi" (That Thou Art).',
    relatedScriptures: ['chandogya-upanishad', 'kena-upanishad'],
    citations: [
      {
        id: 'c4',
        sourceName: 'Samaveda Gana Arcika',
        sectionOrVerse: 'Purvarcika & Uttararcika',
        type: 'primary'
      }
    ],
    verses: [
      {
        id: 'sv-1-1',
        verseNumber: '1.1.1',
        sanskrit: 'अग्न आ याहि वीतये गृणानो हव्यदातये।\nनि होता सत्सि बर्हिषि॥',
        transliteration: 'agna ā yāhi vītaye gṛṇāno havyadātaye |\nni hotā satsi barhiṣi ||',
        translation: 'O Agni, come to our sacred gathering, praised for the offering of oblations. Sit as our priest upon the sacred grass.',
        commentaries: [
          {
            author: 'Traditional Musicologists',
            tradition: 'Gandharva Veda',
            text: 'This verse is sung in the foundational Gramageya Gana, aligning breath (Prana) with musical cadence.'
          }
        ],
        keyConcepts: ['Svaras', 'Pranic Resonance', 'Sacred Sound'],
        lifeLessons: ['Harmonize thoughts and voice with truth to create inner peace and divine rhythm.']
      }
    ]
  },
  {
    id: 'atharpaveda',
    title: 'Atharvaveda',
    sanskritTitle: 'अथर्ववेदः',
    transliteration: 'Atharvaveda',
    category: 'veda',
    summary: 'The Veda of daily life, healing, statecraft, cosmology, and nature conservation, compiled by Maharshi Atharvan and Maharshi Angiras.',
    historicalPeriod: 'c. 1000 BCE – 900 BCE',
    associatedTraditions: ['Shaunaka Shakha', 'Paippalada Shakha'],
    authorOrRishi: 'Rishi Atharvan & Rishi Angiras',
    overview: `The Atharvaveda consists of 20 Kandas containing 730 suktas and about 6,000 mantras. Unlike the other three Vedas which focus heavily on solemn public sacrifices, the Atharvaveda deals with practical human life: healing illness (Ayurveda roots), environmental protection (**Prithvi Sukta**), peace, governance, and cosmic science.

It contains three major Upanishads: **Mundaka Upanishad** (source of India's motto *Satyameva Jayate*), **Mandukya Upanishad** (analysis of Om and 4 states of consciousness), and **Prashna Upanishad**.`,
    sectionsCount: 20,
    versesCount: 5977,
    keyThemes: ['Prithvi Sukta (Hymn to Earth)', 'Healing & Ayurveda Roots', 'Mandukya OM Analysis', 'Mundaka Upanishad'],
    philosophicalSignificance: 'Contains the Prithvi Sukta — the world’s oldest hymn to Ecological Reverence, declaring: "Mata Bhumih Putro Aham Prithivyah" (Earth is my Mother, I am a Child of Earth).',
    relatedScriptures: ['mundaka-upanishad', 'mandukya-upanishad', 'prashna-upanishad'],
    citations: [
      {
        id: 'c5',
        sourceName: 'Atharvaveda Samhita',
        sectionOrVerse: 'Kanda 12, Sukta 1 (Prithvi Sukta)',
        type: 'primary'
      }
    ],
    verses: [
      {
        id: 'av-12-1-12',
        verseNumber: '12.1.12',
        sanskrit: 'माता भूमिः पुत्रो अह पृथिव्याः।\nपर्जन्यः पिता स उ नः पिपर्तु॥',
        transliteration: 'mātā bhūmiḥ putro ahaṁ pṛthivyāḥ |\nparjanyaḥ pitā sa u naḥ pipartu ||',
        translation: 'Earth is my mother, I am the son of Earth! The rain cloud is my father; may he sustain us.',
        commentaries: [
          {
            author: 'Eco-Vedic Philosophy',
            tradition: 'Traditional Conservation',
            text: 'Establishes sacred duty (Dharma) toward ecological reverence, land preservation, and living in gratitude with nature.'
          }
        ],
        keyConcepts: ['Prithvi Sukta', 'Ecological Reverence', 'Sacred Mother Earth'],
        lifeLessons: ['Protect and preserve natural ecosystems as sacred motherly grace.']
      }
    ]
  }
];
