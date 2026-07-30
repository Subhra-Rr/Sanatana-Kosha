export interface TopicKnowledgeItem {
  id: string;
  title: string;
  sanskritTitle?: string;
  category: string;
  originOrText?: string;
  overview: string;
  historicalContext?: string;
  keyPrinciples: string[];
  mantraOrShloka?: {
    sanskrit: string;
    transliteration: string;
    translation: string;
  };
  spiritualSignificance: string;
  practicalApplication?: string;
  relatedTopics?: string[];
}

export const TOPIC_KNOWLEDGE_DATABASE: Record<string, TopicKnowledgeItem> = {
  // --- VEDIC & HYMN TOPICS ---
  'purusha sukta': {
    id: 'purusha-sukta',
    title: 'Purusha Sukta (पुरुषसूक्तम्)',
    sanskritTitle: 'सहस्रशीर्षा पुरुषः सहस्राक्षः सहस्रपात्',
    category: 'Vedic Hymns (Rigveda 10.90)',
    originOrText: 'Rigveda Mandala 10, Sukta 90 & Yajurveda 31',
    overview: 'The Purusha Sukta is the primordial cosmic hymn describing the sacrifice of the Supreme Being (Purusha), from whose transcendent form the entire universe, galaxies, time cycles, nature, mantras, and social order manifest.',
    historicalContext: 'Chanted by Rishis since antiquity during Vedic Yajnas, Mahabhisheka, and temple consecrations as the foundational hymn of cosmic creation.',
    keyPrinciples: [
      'Universal Unity: Everything in the universe is a manifestation of 1/4th of the Supreme Purusha; 3/4ths remain transcendent.',
      'Organic Cosmic Order: Society, nature, and cosmic forces (Sun, Moon, Indra, Agni) are interconnected organs of one Divine reality.',
      'Yajna as Creative Principle: Transformation and renewal occur through sacred self-offering and cosmic harmony.'
    ],
    mantraOrShloka: {
      sanskrit: 'सहस्रशीर्षा पुरुषः सहस्राक्षः सहस्रपात् ।\nस भूमिं विश्वतो वृत्वात्यतिष्ठद्दशाङ्गुलम् ॥',
      transliteration: 'Sahasra-sheersha purushah sahasrakshah sahasra-pat |\nSa bhoomim vishvato vrutva atyatishtad dashangulam ||',
      translation: 'The Supreme Purusha has a thousand heads, a thousand eyes, and a thousand feet. Enveloping the universe on all sides, He transcends it by ten fingers.'
    },
    spiritualSignificance: 'Reminds spiritual seekers that the individual self is a microcosm of the divine macrocosm, cultivating cosmic reverence and selfless service.',
    practicalApplication: 'Chanted during morning worship, meditation, and abhisheka to align personal consciousness with universal order.',
    relatedTopics: ['Nasadiya Sukta', 'Rigveda', 'Yajna', 'Cosmic Creation']
  },

  'nasadiya sukta': {
    id: 'nasadiya-sukta',
    title: 'Nasadiya Sukta (नासदीय सूक्तम्)',
    sanskritTitle: 'नासदासीन्नो सदासीत्तदानीम्',
    category: 'Vedic Philosophy & Cosmology',
    originOrText: 'Rigveda Mandala 10, Sukta 129',
    overview: 'Known as the Hymn of Creation, Nasadiya Sukta is one of the most profound philosophical inquiries in world literature, exploring the pre-cosmic state when there was neither existence nor non-existence, space, nor death.',
    historicalContext: 'Demonstrates the unmatched intellectual openness and meditative depth of ancient Vedic Rishis regarding cosmic origin.',
    keyPrinciples: [
      'Beyond Binary Conceptions: Reality before creation transcended existence (Sat) and non-existence (Asat).',
      'Tapas & Kama: Creation was initiated by divine desire (Kama) and spiritual heat/meditative power (Tapas).',
      'Epistemic Humility: Even the gods came after creation; the ultimate truth is known only to the Supreme Witness.'
    ],
    mantraOrShloka: {
      sanskrit: 'नासदासीन्नो सदासीत्तदानीं नासीद्रजो नो व्योमा परो यत् ।\nकिमावरीवः कुह कस्य शर्मन्नम्भः किमासीद्गहनं गंभीरम् ॥',
      transliteration: 'Naasad-aasat-no sad-aasit-tadaanim naasid-rajo no vyoma paro yat |\nKim-aavarivah kuha kasya sharmann-ambhah kim-aasid-gahanam gambhiram ||',
      translation: 'Then was not non-existence nor existence: there was no realm of air, no sky beyond it. What covered it, and where? What was the shelter?'
    },
    spiritualSignificance: 'Encourages deep philosophical reflection, freedom from rigid dogmatism, and contemplation on Brahman.',
    relatedTopics: ['Rigveda', 'Creation Theories', 'Purusha Sukta', 'Vedanta']
  },

  'gayatri mantra': {
    id: 'gayatri-mantra',
    title: 'Gayatri Mantra (गायत्री मन्त्रः)',
    sanskritTitle: 'तत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि',
    category: 'Sacred Vedic Mantras',
    originOrText: 'Rigveda 3.62.10 (Revealed to Maharshi Vishvamitra)',
    overview: 'The Gayatri Mantra is the supreme illuminative prayer addressed to Savitur (the Divine Sun of Truth), invoking spiritual intellect, clarity, and liberation.',
    historicalContext: 'Considered the Mother of the Vedas (Veda-Mata), chanted daily during Sandhyavandanam across millennia.',
    keyPrinciples: [
      'Invocative Intellect: Prays not for material goods, but for the illumination of inner intellect (Dhi).',
      'Solar Symbolism: The physical Sun illuminates the outer world; Savitur illuminates the inner soul.',
      'Triple Realm Harmony: Encompasses Bhu (Earth), Bhuvah (Atmosphere), and Svah (Heavens).'
    ],
    mantraOrShloka: {
      sanskrit: 'ॐ भूर्भुवः स्वः तत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि धियो यो नः प्रचोदयात् ॥',
      transliteration: 'Om Bhuur-Bhuvah Svah Tat-Savitur-Varenyam Bhargo Devasya Dhiimahi Dhiyo Yo Nah Prachodayaat ||',
      translation: 'We meditate on the adorable radiance of the Divine Savitur. May He inspire and illuminate our intellects.'
    },
    spiritualSignificance: 'Removes mental dullness, instills spiritual light, and establishes inner peace.',
    relatedTopics: ['Sandhyavandanam', 'Rigveda', 'Japa Meditation', 'Savitur']
  },

  // --- VEDANGAS TOPICS ---
  'shiksha': {
    id: 'shiksha',
    title: 'Shiksha (शिक्षा - Phonetics & Pronunciation)',
    sanskritTitle: 'वर्णः स्वरः मात्रा बलम् एकाग्रता',
    category: 'Vedanga (Vedic Auxiliary)',
    originOrText: 'Paniniya Shiksha & Taittiriya Upanishad Shikshavalli',
    overview: 'Shiksha is the Vedanga dedicated to phonetics, acoustics, and accurate pronunciation of Vedic Sanskrit mantras to preserve their precise energetic vibration.',
    keyPrinciples: [
      'Six Phonetic Factors: Varna (letters), Svara (pitch accents), Matra (mora duration), Bala (force), Sama (euphony), Santana (juxtaposition).',
      'Svara Accentuation: Udatta (high pitch), Anudatta (low pitch), and Svarita (circumflex pitch).',
      'Vibrational Efficacy: A mantra correctly articulated produces mental clarity and spiritual harmony.'
    ],
    mantraOrShloka: {
      sanskrit: 'ॐ शीक्षां व्याख्यास्यामः । वर्णः स्वरः । मात्रा बलम् । साम सन्तानः । इत्युक्तः शीक्षाध्यायः ॥',
      transliteration: 'Om shiksham vyakhyasyamah | varnah svarah | matra balam | sama santanah | ityuktah shikshadhyayah ||',
      translation: 'We shall explain Shiksha: Letters, pitch accents, moraic length, vocal force, melodious articulation, and continuous flow.'
    },
    spiritualSignificance: 'Ensures sacred texts are preserved unaltered across millennia through oral lineage (Shruti).',
    relatedTopics: ['Vedangas', 'Panini', 'Sanskrit Phonetics', 'Taittiriya Upanishad']
  },

  'kalpa': {
    id: 'kalpa',
    title: 'Kalpa (कल्प - Ritual Methodology & Ethics)',
    sanskritTitle: 'श्रौतस्मार्तगृह्यधर्मसूत्राणि',
    category: 'Vedanga (Vedic Auxiliary)',
    originOrText: 'Shrauta, Grihya, Dharma, and Shulba Sutras',
    overview: 'Kalpa outlines practical procedures for public rituals (Shrauta), household rites (Grihya), ethical duties (Dharma), and geometric altar constructions (Shulba).',
    keyPrinciples: [
      'Shulba Sutras: Ancient Indian geometry defining exact spatial constructions and Pythagorean triples for altars.',
      'Dharma Sutras: Code of personal ethics, duties according to life stages (Ashramas), and social harmony.',
      'Grihya Rites: Domestic sacraments from birth (Jatakarma) to wedding (Vivaha) and final rites.'
    ],
    mantraOrShloka: {
      sanskrit: 'धर्मज्ञसमयः प्रमाणम् वेदश्च ॥',
      transliteration: 'Dharma-jna-samayah pramanam vedashcha ||',
      translation: 'The consensus of those who know Dharma, alongside the Vedas, is the authoritative guide.'
    },
    spiritualSignificance: 'Translates abstract philosophy into disciplined daily living and ritual purity.',
    relatedTopics: ['Vedangas', 'Shulba Sutras', 'Dharma', 'Samskaras']
  },

  'vyakarana': {
    id: 'vyakarana',
    title: 'Vyakarana (व्याकरण - Sanskrit Grammar)',
    sanskritTitle: 'अष्टाध्यायी पाणिनिविरचिता',
    category: 'Vedanga (Vedic Auxiliary)',
    originOrText: 'Panini Ashtadhyayi, Patanjali Mahabhashya, Katyayana Varttika',
    overview: 'Vyakarana is the science of linguistic analysis and grammar. Panini’s Ashtadhyayi (c. 500 BCE) contains 3,996 generative sutras and is regarded as one of the greatest intellectual feats in human history.',
    keyPrinciples: [
      'Generative Rule System: Derives all Sanskrit words from root syllables (Dhatus) through algorithmic rules.',
      'Maheshvara Sutras: The 14 foundational sound matrices revealed by Lord Shiva’s Damaru.',
      'Semantic Precision: Eliminates ambiguity in Vedic interpretation.'
    ],
    mantraOrShloka: {
      sanskrit: 'नृत्तावसाने नटराजराजो ननाद ढक्कां नवपञ्चवारम् ।\nउद्धर्तुकामो सनकादिसिद्धानेतद्विमर्शे शिवसूत्रजालम् ॥',
      transliteration: 'Nrittavasane nataraja-rajo nanada dhakkam nava-pancha-varam |\nUddhartukamo sanakadi-siddhan etad vimarshe shiva-sutra-jalam ||',
      translation: 'At the end of His cosmic dance, Nataraja sounded His drum 14 times, revealing the Shiva Sutras to liberate the sages.'
    },
    spiritualSignificance: 'Forms the computational backbone of Sanskrit and deep meditation on sound structure.',
    relatedTopics: ['Ashtadhyayi', 'Panini', 'Shiva Sutras', 'Sanskrit Language']
  },

  'nirukta': {
    id: 'nirukta',
    title: 'Nirukta (निरुक्त - Etymology & Semantics)',
    sanskritTitle: 'निघण्टुभाष्यं यास्काचार्यरचितम्',
    category: 'Vedanga (Vedic Auxiliary)',
    originOrText: 'Nirukta of Yaska (c. 600 BCE)',
    overview: 'Nirukta is the etymological science explaining secret root meanings, allegories, and context of rare Vedic words listed in Nighantu.',
    keyPrinciples: [
      'Root Origin (Nirvacana): All nouns originate from verbal roots (Nama-Dhatu relationship).',
      'Triple Meaning Levels: Adhibhautika (physical), Adhidaivika (celestial), and Adhyatmika (spiritual/inner).',
      'Contextual Interpretation: Words gain precise meaning through Vedic usage.'
    ],
    mantraOrShloka: {
      sanskrit: 'अथातो निर्वचनम् । नामान्याख्यातानि च तद्यत्रोभे भावप्रधाने ॥',
      transliteration: 'Athato nirvachanam | namani-akhyatani cha tad-yatrobhe bhava-pradhane ||',
      translation: 'Now follows etymological exposition: Nouns and verbs both center on the essence of action and being.'
    },
    spiritualSignificance: 'Unlocks deeper allegorical meanings behind Vedic hymns.',
    relatedTopics: ['Yaska', 'Nighantu', 'Vedic Etymology']
  },

  'chhandas': {
    id: 'chhandas',
    title: 'Chhandas (छन्दः - Prosody & Vedic Metrics)',
    sanskritTitle: 'पिङ्गलच्छन्दःशास्त्रम्',
    category: 'Vedanga (Vedic Auxiliary)',
    originOrText: 'Chhandas Sutras of Pingala Nagendra',
    overview: 'Chhandas is the science of poetic meter and prosody. Acharya Pingala introduced binary combinatorics, Pascal triangle principles (Meru Prastara), and Fibonacci sequences in Chhandas Sutras.',
    keyPrinciples: [
      'Vedic Meters: Gayatri (24 syllables), Anushtup (32 syllables), Trishtup (44 syllables), Jagati (48 syllables).',
      'Laghu & Guru: Short (Laghu) and Long (Guru) syllable duration counting.',
      'Mathematical Structure: Early combinatorial mathematics developed for poetic rhythms.'
    ],
    mantraOrShloka: {
      sanskrit: 'छन्दः पादौ तु वेदस्य हस्तौ कल्पोऽथ पठ्यते ।\nज्योतिषामयनं चक्षुर्निरुक्तं श्रोत्रमुच्यते ॥',
      transliteration: 'Chhandah padau tu vedasya hastau kalpo-atha pathyate |\nJyotisham-ayanam chakshur-niruktam shrotram-uchyate ||',
      translation: 'Prosody is the feet of the Veda, Kalpa its hands, Astronomy its eyes, and Etymology its ears.'
    },
    spiritualSignificance: 'Infuses poetic rhythm into sacred chants for effortless memorization.',
    relatedTopics: ['Pingala', 'Vedic Meter', 'Anushtup']
  },

  'jyotisha': {
    id: 'jyotisha',
    title: 'Jyotisha (ज्योतिषम् - Astronomy & Calendar)',
    sanskritTitle: 'वेदाङ्गज्योतिषम् लगधाचार्यरचितम्',
    category: 'Vedanga (Vedic Auxiliary)',
    originOrText: 'Vedanga Jyotisha of Lagadha & Surya Siddhanta',
    overview: 'Jyotisha is the ancient astronomical science charting planetary motions, lunar phases (Tithi), solar transit (Sankranti), and seasons to determine auspicious times for spiritual practices.',
    keyPrinciples: [
      'Panchang Dimensions: Tithi (lunar day), Vara (weekday), Nakshatra (lunar mansion), Yoga, Karana.',
      'Sidereal Zodiac: Precise celestial observation based on fixed star positions.',
      'Cosmic Cycles: Yugas, Manvantaras, and seasonal Solstices (Uttarayana/Dakshinayana).'
    ],
    mantraOrShloka: {
      sanskrit: 'यथा शिखा मयूराणां नागानां मणयो यथा ।\nतद्वद्वेदाङ्गशास्त्राणां गणितं मूर्ध्नि स्थितम् ॥',
      transliteration: 'Yatha shikha mayuranam naganam manayo yatha |\nTadvad-vedanga-shastranam ganitam murdhni sthitam ||',
      translation: 'Like the crest on a peacock and the gem on a cobra, mathematics and astronomy stand at the head of all Vedanga sciences.'
    },
    spiritualSignificance: 'Harmonizes human actions with cosmic planetary rhythms.',
    relatedTopics: ['Vedanga Jyotisha', 'Surya Siddhanta', 'Panchang', 'Nakshatras']
  },

  // --- PURANAS & LEGENDS ---
  'samudra manthan': {
    id: 'samudra-manthan',
    title: 'Samudra Manthan (समुद्रमन्थनम् - Churning of the Ocean)',
    sanskritTitle: 'क्षीरसागरमन्थनम् एकादशरुद्राः',
    category: 'Puranic Cosmology & Legend',
    originOrText: 'Vishnu Purana, Srimad Bhagavatam Canto 8, Mahabharata',
    overview: 'The churning of the Milk Ocean by Devas and Asuras using Mount Mandara and serpent Vasuki symbolises spiritual sadhana, purification, overcoming toxicity, and attaining Amrita (immortality).',
    keyPrinciples: [
      'Halahala Poison: Lord Shiva drinks the toxic poison first, teaching compassion and absorbing negativity.',
      'Kurma Avatar: Lord Vishnu supports Mount Mandara on His tortoise shell, teaching steady spiritual foundation.',
      'Fourteen Ratnas: Divine treasures (Goddess Lakshmi, Dhanvantari, Parijata, Ucchaihshravas) emerge before ultimate liberation.'
    ],
    mantraOrShloka: {
      sanskrit: 'ॐ नमो भगवते वासुदेवाय धन्वन्तरये अमृतकलशहस्ताय सर्वभयविनाशाय ॥',
      transliteration: 'Om Namo Bhagavate Vasudevaya Dhanvantaraye Amrita-kalasha-hastaya Sarva-bhaya-vinashaya ||',
      translation: 'Salutations to Divine Lord Dhanvantari, holding the vessel of Amrita, destroyer of all illness and fear.'
    },
    spiritualSignificance: 'Represents the inner churning of mind (Manas) through meditation to extract divine peace.',
    relatedTopics: ['Vishnu Purana', 'Kurma Avatar', 'Lord Shiva', 'Amrita']
  },

  'dhruva charitra': {
    id: 'dhruva-charitra',
    title: 'Dhruva Charitra (ध्रुवचरित्रम् - Legend of Dhruva)',
    sanskritTitle: 'अचला भक्तिः ध्रुवपदप्राप्तिः',
    category: 'Puranic Devotional Legend',
    originOrText: 'Srimad Bhagavatam Canto 4, Vishnu Purana',
    overview: 'The story of 5-year-old Prince Dhruva, who undertook intense penance guided by Rishi Narada and attained the eternal North Star (Dhruvapada) through unwavering devotion.',
    keyPrinciples: [
      'Ekagrata (Single-pointed focus): Pure intent overcomes youth and physical limitations.',
      'Divine Refuge: Lord Vishnu grants eternal spiritual stature to sincere seekers.',
      'Svadharma over Revenge: Dhruva transformed hurt into transcendental devotion.'
    ],
    mantraOrShloka: {
      sanskrit: 'ॐ नमो भगवते वासुदेवाय ॥',
      transliteration: 'Om Namo Bhagavate Vasudevaya ||',
      translation: 'Om, I bow to the Supreme Divine Lord Vasudeva.'
    },
    spiritualSignificance: 'Shows that age and background are no bar to divine grace.',
    relatedTopics: ['Bhagavatam', 'Narada', 'Bhakti Yoga', 'Dhruva Star']
  },

  'vishnu sahasranama': {
    id: 'vishnu-sahasranama',
    title: 'Vishnu Sahasranama (विष्णुसहस्रनाम - 1000 Names of Vishnu)',
    sanskritTitle: 'विश्वं विष्णुर्वषट्कारो भूतभव्यभवत्प्रभुः',
    category: 'Sacred Stotra & Philosophy',
    originOrText: 'Mahabharata Anushasana Parva (Chapter 149), revealed by Bhishma to Yudhishthira',
    overview: '1000 divine names of Lord Vishnu encapsulating supreme metaphysical attributes, cosmic governance, and universal grace.',
    keyPrinciples: [
      'Universal Refuge: Bhishma declared chanting Sahasranama as the easiest and highest path to overcome grief.',
      'Commentary Traditions: Expounded by Adi Shankaracharya and Parasara Bhatta.',
      'Peace & Protection: Grants mental clarity, health, and spiritual strength.'
    ],
    mantraOrShloka: {
      sanskrit: 'विश्वं विष्णुर्वषट्कारो भूतभव्यभवत्प्रभुः ।\nभूतकृद्भूतभृद्भावो भूतात्मा भूतभावनः ॥',
      transliteration: 'Vishvam vishnur-vashatkaro bhuta-bhavya-bhavat-prabhuh |\nBhuta-krit bhuta-bhrit bhavo bhutatma bhuta-bhavanah ||',
      translation: 'He is the Universe, the All-Pervading, the Ruler of past, present and future, Creator, Sustainer, and Soul of all beings.'
    },
    spiritualSignificance: 'Chanted daily worldwide for inner protection and divine communion.',
    relatedTopics: ['Bhishma', 'Mahabharata', 'Shankaracharya', 'Stotra']
  },

  // --- EPICS & CHARACTERS ---
  'sri rama': {
    id: 'sri-rama',
    title: 'Sri Rama (श्रीरामः - Maryada Purushottama)',
    sanskritTitle: 'रामो विग्रहवान् धर्मः',
    category: 'Epic Avatar & Divinity',
    originOrText: 'Valmiki Ramayana, Adhyatma Ramayana, Ramcharitmanas',
    overview: '7th Avatar of Lord Vishnu, Sri Rama is celebrated as Maryada Purushottama—the ideal embodiment of righteousness, truth, filial duty, and supreme compassionate governance (Rama Rajya).',
    keyPrinciples: [
      'Ramo Vigrahavan Dharmah: Rama is Dharma personified in human form.',
      'Satya & Vrata: Unwavering commitment to truth and honor under all life tests.',
      'Rama Rajya: An egalitarian kingdom of peace, prosperity, and moral excellence.'
    ],
    mantraOrShloka: {
      sanskrit: 'रामो विग्रहवान् धर्मः साधुः सत्यपराक्रमः ।\nराजा सर्वस्य लोकस्य देवानामेव वासवः ॥',
      transliteration: 'Ramo vigrahavan dharmah sadhuh satya-parakramah |\nRaja sarvasya lokasya devanam-eva vasavah ||',
      translation: 'Rama is righteousness embodied, virtuous, truthful in prowess, ruler of all worlds like Indra among gods.'
    },
    spiritualSignificance: 'Guides humanity on maintaining ethical integrity through adversity.',
    relatedTopics: ['Ramayana', 'Sita', 'Hanuman', 'Rama Rajya']
  },

  'arjuna': {
    id: 'arjuna',
    title: 'Arjuna (अर्जुनः - Partha / Savyasachi)',
    sanskritTitle: 'किरीटी श्वेतवाहनः धनंजयः',
    category: 'Epic Personality & Hero',
    originOrText: 'Mahabharata & Bhagavad Gita',
    overview: 'The peerless Pandava archer and disciple of Sri Krishna, Arjuna represents the earnest human soul (Jivatma) seeking divine guidance on the battlefield of life.',
    keyPrinciples: [
      'Focus & Mastery: Renowned for absolute concentration and archery excellence.',
      'Spiritual Surrender: Asked Krishna for ultimate clarity, receiving the immortal wisdom of Bhagavad Gita.',
      'Svadharma Duty: Fought not for vengeance, but to establish righteousness.'
    ],
    mantraOrShloka: {
      sanskrit: 'कार्पण्यदोषोपहतस्वभावः पृच्छामि त्वां धर्मसंमूढचेताः ।\nयच्छ्रेयः स्यान्निश्चितं ब्रूहि तन्मे शिष्यस्तेऽहं शाधि मां त्वां प्रपन्नम् ॥',
      transliteration: 'Karpanya-doshopahata-svabhavah pricchami tvam dharma-sammudha-chetah |\nYat-shreyah syat-nishchitam bruhi tan-me shishyas-te-aham shadhi mam tvam prapannam ||',
      translation: 'My heart is overwhelmed by weakness; my mind confused about duty. I ask You: tell me clearly what is best for me. I am Your disciple; instruct me surrendered to You.'
    },
    spiritualSignificance: 'Symbolises every earnest seeker standing before life’s moral crossroad.',
    relatedTopics: ['Bhagavad Gita', 'Mahabharata', 'Sri Krishna', 'Pandavas']
  },

  // --- DARSHANAS & PHILOSOPHY ---
  'nyaya': {
    id: 'nyaya',
    title: 'Nyaya School (न्यायदर्शनम् - Indian Logic)',
    sanskritTitle: 'महर्षिगोतमप्रणीतं न्यायसूत्रम्',
    category: 'Classical Philosophy (Astika Darshana)',
    originOrText: 'Nyaya Sutras of Rishi Gautama',
    overview: 'Nyaya is the classical school of rigorous logic, epistemology, debate rules, and scientific method aimed at attaining Moksha by removing false knowledge.',
    keyPrinciples: [
      '4 Valid Pramanas: Pratyaksha (perception), Anumana (inference), Upamana (analogy), Shabda (testimony).',
      '5-Stage Syllogism: Pratijna (proposition), Hetu (reason), Udaharana (example), Upanaya (application), Nigamana (conclusion).',
      'Rational Realism: The objective world exists independently of perception.'
    ],
    mantraOrShloka: {
      sanskrit: 'प्रमाणप्रमेयसंशयप्रयोजनदृष्टान्तसिद्धान्तावयवतर्कनिर्णयवादजल्पवितण्डाहेत्वाभासछलजातिनिग्रहस्थानानां तत्त्वज्ञानान्निश्रेयसाधिगमः ॥',
      transliteration: 'Pramana-prameya-samshaya-prayojana... tattva-jnanat-nihshreyasa-adhigamah ||',
      translation: 'Ultimate liberation (Nihshreyasa) is attained through true knowledge of epistemological means, objects, doubt, and logic.'
    },
    spiritualSignificance: 'Provides intellectual discipline to analyze truth without fallacies.',
    relatedTopics: ['Vaisheshika', 'Pramana', 'Shastrartha', 'Darshanas']
  },

  'sankhya': {
    id: 'sankhya',
    title: 'Samkhya School (सांख्यदर्शनम् - Dualistic Realism)',
    sanskritTitle: 'महर्षिकपिलप्रणीतं सांख्यशास्त्रम्',
    category: 'Classical Philosophy (Astika Darshana)',
    originOrText: 'Samkhya Sutras of Maharshi Kapila & Samkhya Karika of Ishvarakrishna',
    overview: 'Samkhya is one of the oldest systematic philosophies, categorizing reality into Purusha (pure unattached consciousness) and Prakriti (creative nature with 3 Gunas).',
    keyPrinciples: [
      'Dualism: Unchanging consciousness (Purusha) versus dynamic nature (Prakriti).',
      '25 Tattvas: Mahat, Ahamkara, Manas, Indriyas, Tanmatras, Pancha Mahabhutas.',
      'Three Gunas: Sattva (purity/light), Rajas (passion/action), Tamas (inertia/darkness).'
    ],
    mantraOrShloka: {
      sanskrit: 'मूलप्रकृतिराविकृतिर्महदाद्याः प्रकृतिविकृतयः सप्त ।\nषोडशकस्तु विकारो न प्रकृतिर्न विकृतिः पुरुषः ॥',
      transliteration: 'Mula-prakritir-avikritir-mahad-adyah prakriti-vikritayah sapta |\nShodashakas-tu vikaro na prakritir-na vikritih purushah ||',
      translation: 'Root Nature is uncreated. The 7 principles beginning with Intellect are both cause and effect. 16 are effects. Purusha is neither cause nor effect.'
    },
    spiritualSignificance: 'Underpins Yoga psychology and Bhagavad Gita Guna analysis.',
    relatedTopics: ['Yoga Sutras', 'Kapila', 'Purusha & Prakriti', 'Bhagavad Gita']
  },

  'vedanta': {
    id: 'vedanta',
    title: 'Vedanta School (उत्तरामीमांसा - Uttara Mimamsa)',
    sanskritTitle: 'ब्रह्मसूत्रम् बादरायणरचितम्',
    category: 'Classical Philosophy (Astika Darshana)',
    originOrText: 'Prasthana Trayi (Upanishads, Bhagavad Gita, Brahma Sutras)',
    overview: 'Vedanta represents the culmination of Vedic wisdom. It explores the non-dual or relational reality between Atman (Individual Self) and Brahman (Universal Consciousness).',
    keyPrinciples: [
      'Advaita (Non-duality): Atman and Brahman are one non-dual reality (Adi Shankara).',
      'Vishishtadvaita (Qualified Non-duality): Souls and world are distinct attributes of Lord Narayana (Ramanuja).',
      'Dvaita (Dualism): Independent God Narayana and dependent eternal souls (Madhva).'
    ],
    mantraOrShloka: {
      sanskrit: 'अथातो ब्रह्मजिज्ञासा ॥ जन्माद्यस्य यतः ॥',
      transliteration: 'Athato brahma-jijnasa || Janmadyasya yatah ||',
      translation: 'Now therefore arises the inquiry into Brahman. From Whom originates the creation, sustenance, and dissolution of this universe.'
    },
    spiritualSignificance: 'Provides the ultimate philosophical path to Moksha.',
    relatedTopics: ['Upanishads', 'Adi Shankara', 'Brahma Sutras', 'Bhagavad Gita']
  },

  // --- FESTIVALS & OBSERVANCES ---
  'diwali': {
    id: 'diwali',
    title: 'Deepavali (दीपावली - Festival of Lights)',
    sanskritTitle: 'तमसो मा ज्योतिर्गमय',
    category: 'Sacred Festival & Celebration',
    originOrText: 'Kartika Amavasya observance across Puranas & Epics',
    overview: 'Deepavali celebrates the triumph of spiritual light over darkness, knowledge over ignorance, and Sri Rama’s victorious return to Ayodhya.',
    keyPrinciples: [
      'Lighting Diya: Symbolises illuminating the inner heart with truth and wisdom.',
      'Lakshmi & Ganesha Puja: Invocations for spiritual wealth, righteousness, and auspicious beginnings.',
      'Community Harmony: Sharing sweets, forgiveness, and new economic accounts (Chopda Pujan).'
    ],
    mantraOrShloka: {
      sanskrit: 'ॐ असतो मा सद्गमय । तमसो मा ज्योतिर्गमय । मृत्योर्मा अमृतं गमय ॥',
      transliteration: 'Om Asato Ma Sad-Gamaya | Tamaso Ma Jyotir-Gamaya | Mrityor-Ma Amritam Gamaya ||',
      translation: 'Lead us from falsehood to truth, from darkness to light, from mortality to immortality.'
    },
    spiritualSignificance: 'Encourages dispelling inner mental darkness through self-awareness.',
    relatedTopics: ['Sri Rama', 'Goddess Lakshmi', 'Festivals', 'Kartika Month']
  },

  'maha shivaratri': {
    id: 'maha-shivaratri',
    title: 'Maha Shivaratri (महाशिवरात्रिः - Great Night of Shiva)',
    sanskritTitle: 'शिवतत्वम् लिङ्गोद्भवः',
    category: 'Sacred Festival & Night Vigil',
    originOrText: 'Magha / Phalguna Krishna Chaturdashi (Shiva Purana)',
    overview: 'Maha Shivaratri marks the cosmic dance (Tandava) of Lord Shiva, His divine marriage with Devi Parvati, and His manifestation as the infinite pillar of light (Lingodbhava).',
    keyPrinciples: [
      'Night Jagaran: Staying awake in quiet meditation to transcend sensory mind.',
      'Bilva Leaves & Abhisheka: Offering sacred water, milk, and Bilva leaves symbolizing three Gunas.',
      'Maha Mrityunjaya Mantra: Chanted for health, inner resilience, and liberation.'
    ],
    mantraOrShloka: {
      sanskrit: 'ॐ त्र्यम्बकं यजामहे सुगन्धिं पुष्टिवर्धनम् ।\nउर्वारुकमिव बन्धनान्मृत्योर्मुक्षीय मामृतात् ॥',
      transliteration: 'Om Tryambakam Yajamahe Sugandhim Pushti-Vardhanam |\nUrvarukam-Iva Bandhanan-Mrityor-Mukshiya Mamritat ||',
      translation: 'We worship the Three-eyed Lord Shiva who nourishes all beings. May He liberate us from death into immortality like a ripe cucumber freed from its vine.'
    },
    spiritualSignificance: 'A night of deep introspection, yoga sadhana, and mental stillness.',
    relatedTopics: ['Lord Shiva', 'Shiva Purana', 'Lingodbhava', 'Abhisheka']
  }
};

/**
 * Returns detailed topic knowledge from the pre-populated database,
 * or dynamically synthesizes a structured topic knowledge object if unlisted.
 */
export function getTopicKnowledge(topicName: string, categoryContext?: string): TopicKnowledgeItem {
  const normalizedKey = topicName.trim().toLowerCase();
  
  if (TOPIC_KNOWLEDGE_DATABASE[normalizedKey]) {
    return TOPIC_KNOWLEDGE_DATABASE[normalizedKey];
  }

  // Dynamic knowledge synthesizer for any clicked topic
  const title = topicName;
  const sanskritTitle = topicName.includes('(') ? topicName : `${topicName} • सनातनज्ञानम्`;

  return {
    id: `topic-${normalizedKey.replace(/\s+/g, '-')}`,
    title: title,
    sanskritTitle: sanskritTitle,
    category: categoryContext || 'Sacred Knowledge Topic',
    originOrText: 'Vedic & Puranic Scriptural Tradition',
    overview: `${title} is a vital topic within Sanatana Dharma, embodying deep spiritual wisdom, traditional guidelines, and timeless philosophical principles passed down through classical texts and Rishis.`,
    historicalContext: `Preserved in classical Sanskrit literature, ${title} serves as an essential framework for spiritual practice, ethical living, and understanding cosmic order.`,
    keyPrinciples: [
      `Dharmic Alignment: Provides clarity on virtuous conduct and inner harmony.`,
      `Philosophical Depth: Explores the deeper connection between individual action and universal truth.`,
      `Scriptural Continuity: Reflected in Upanishadic dialogues, Epics, and Acharya commentaries.`
    ],
    mantraOrShloka: {
      sanskrit: 'ॐ पूर्णमदः पूर्णमिदं पूर्णात्पूर्णमुदच्यते ।\nपूर्णस्य पूर्णमादाय पूर्णमेवावशिष्यते ॥',
      transliteration: 'Om Purnamadah Purnamidam Purnat Purnamudachyate |\nPurnasya Purnamadaya Purnamevavashishyate ||',
      translation: 'That Supreme Reality is Whole; This universe is Whole. From Wholeness emerges Wholeness. Taking Wholeness from Wholeness, Wholeness alone remains.'
    },
    spiritualSignificance: `Contemplating ${title} elevates spiritual awareness, purifies intellect, and inspires righteous action.`,
    practicalApplication: `Incorporate the wisdom of ${title} into daily mindfulness, scriptural study (Svadhyaya), and ethical decision-making.`,
    relatedTopics: ['Dharma', 'Bhagavad Gita', 'Upanishads', 'Vedic Wisdom']
  };
}
