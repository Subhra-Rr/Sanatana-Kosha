import { PuranaItem } from '../types';

export const PURANAS_DATA: PuranaItem[] = [
  {
    id: 'brahma-purana',
    name: 'Brahma Purana',
    sanskritName: 'ब्रह्मपुराणम्',
    type: 'Mahapurana',
    dominantDeity: 'Brahma',
    traditionalVerseCount: 10000,
    keyTopics: ['Srishti (Creation of Cosmos)', 'Geography of Bharata Varsha', 'Purushottama Kshetra (Puri Jagannatha)', 'Surya Worship at Konark', 'Godavari River Sacredness'],
    synopsis: 'Also known as Adi Purana (First Purana). Narrated by Brahma to Sage Marichi and later repeated by Lomaharshana to the rishis in Naimisharanya. Contains extensive geographical detail of ancient India, sacred rivers (particularly Godavari/Gautami), and the glory of Lord Jagannatha at Puri.',
    notableStories: [
      'The creation of the universe from the primary elements and cosmic egg (Brahmanda).',
      'The descent of the holy river Gautami (Godavari) through Sage Gautama’s penance.',
      'Establishment and spiritual significance of Purushottama Kshetra (Puri).'
    ],
    citations: [
      { id: 'p-cite-brahma', sourceName: 'Brahma Purana', sectionOrVerse: 'Chapters 1-245', type: 'primary' }
    ]
  },
  {
    id: 'padma-purana',
    name: 'Padma Purana',
    sanskritName: 'पद्मपुराणम्',
    type: 'Mahapurana',
    dominantDeity: 'Vishnu',
    traditionalVerseCount: 55000,
    keyTopics: ['Pushkara Teertha', 'Gita Mahatmya', 'Ekadashi Vratas', 'Ramacharitram (Padma Ramayana)', 'Pilgrimage guides'],
    synopsis: 'One of the largest Puranas, divided into 5 major Khandas (Srishti, Bhumi, Svarga, Patala, Uttara). Details sacred rivers, shrines, and moral virtues, and contains the famous Gita Mahatmya.',
    notableStories: [
      'Creation of the cosmos from the divine golden lotus originating from Lord Vishnu’s navel.',
      'Gita Mahatmya narratives illustrating spiritual liberation achieved by chanting each chapter of the Bhagavad Gita.',
      'Detailed account of Rama’s Ashvamedha Yajna in Patala Khanda.'
    ],
    citations: [
      { id: 'p-cite-padma', sourceName: 'Padma Purana', sectionOrVerse: 'Srishti to Uttara Khanda', type: 'primary' }
    ]
  },
  {
    id: 'vishnu-purana',
    name: 'Vishnu Purana',
    sanskritName: 'विष्णुपुराणम्',
    type: 'Mahapurana',
    dominantDeity: 'Vishnu',
    traditionalVerseCount: 23000,
    keyTopics: ['Srishti (Cosmology)', 'Manvantara Cycles', 'Dhruva & Prahlada Stories', 'Vamsha (Dynastic Genealogies)', 'Avataras'],
    synopsis: 'Considered one of the most cohesive and well-preserved Puranas, authored by Sage Parashara (father of Veda Vyasa). Structured in 6 Amsas (parts), it details cosmic time cycles, geography of Jambudvipa, life of Sri Krishna, and genealogies of Solar and Lunar dynasties.',
    notableStories: [
      'Story of young Dhruva’s unwavering tapas to attain Pole Star status.',
      'Prahlada’s steadfast faith in Narayana despite Hiranyakashipu’s persecutions.',
      'Detailed geographical descriptions of 7 Dvipas (continents) and oceans.'
    ],
    citations: [
      { id: 'p-cite-1', sourceName: 'Vishnu Purana with Sridhara Svami Commentary', sectionOrVerse: 'Book 1 to 6', type: 'primary' }
    ]
  },
  {
    id: 'shiva-purana',
    name: 'Shiva Purana',
    sanskritName: 'शिवपुराणम्',
    type: 'Mahapurana',
    dominantDeity: 'Shiva',
    traditionalVerseCount: 24000,
    keyTopics: ['Mahashivaratri Vrata', '12 Jyotirlingas Manifestation', 'Parvati Tapas & Marriage', 'Kailasha Geography', 'Panchakshara Mantra'],
    synopsis: 'Organized into 7 Samhitas (Vidyeshvara, Rudra, Sata, Koti-rudra, Uma, Kailasa, Vayaviya). Expounds the ultimate nature of Shiva as Nirguna Supreme Brahman and Saguna benefactor.',
    notableStories: [
      'Origin of the infinite pillar of fire (Lingodbhava) tested by Brahma and Vishnu.',
      'Goddess Parvati’s intense penance in Himalayas to win Shiva as consort.',
      'Slaying of Tripura demons by Tripurantaka Shiva.'
    ],
    citations: [
      { id: 'p-cite-3', sourceName: 'Shiva Purana', sectionOrVerse: 'Vidyeshvara & Rudra Samhita', type: 'primary' }
    ]
  },
  {
    id: 'shrimad-bhagavatam',
    name: 'Shrimad Bhagavata Purana',
    sanskritName: 'श्रीमद्भागवतपुराणम्',
    type: 'Mahapurana',
    dominantDeity: 'Vishnu',
    traditionalVerseCount: 18000,
    keyTopics: ['Navadha Bhakti (9 Forms of Devotion)', '24 Gurus of Avadhuta', 'Rasa Lila', 'Kaliya Mardana', 'Gajendra Moksha'],
    synopsis: 'Composed of 12 Skandhas (books), it is revered as the crown jewel of Puranic literature. Narrated by Sage Shuka to King Parikshit on the banks of Ganga.',
    notableStories: [
      'Gajendra’s cry for divine help and instant liberation.',
      'The 24 Gurus from Nature in Canto 11 (Earth, Wind, Water, Fire, Spider, Bee, etc.).',
      'Childhood pastimes and philosophical dialogues of Sri Krishna in Canto 10.'
    ],
    citations: [
      { id: 'p-cite-2', sourceName: 'Bhagavata Purana', sectionOrVerse: 'Canto 1 to 12', commentator: 'Sridhara Svami & Jiva Gosvami', type: 'primary' }
    ]
  },
  {
    id: 'narada-purana',
    name: 'Narada Purana (Naradiya)',
    sanskritName: 'नाारदीयपुराणम्',
    type: 'Mahapurana',
    dominantDeity: 'Vishnu',
    traditionalVerseCount: 25000,
    keyTopics: ['Vedangas Overview', 'Summary of all 18 Puranas', 'Fast & Vrata Rules', 'Tirtha Yatra Guides', 'Mathematical & Astronomical Notes'],
    synopsis: 'Presented as a dialogue between Sage Narada and Sanatkumara. Unique for providing detailed summaries and chapter outlines of all 18 Mahapuranas and the six Vedangas.',
    notableStories: [
      'Detailed guidelines on Ekadashi fasting and ethical living.',
      'Narrative of King Ambarisha and Sage Durvasa demonstrating the protective nature of Bhakti.',
      'Comprehensive catalog of holy pilgrimage sites across Bharat.'
    ],
    citations: [
      { id: 'p-cite-narada', sourceName: 'Narada Purana', sectionOrVerse: 'Purva & Uttara Bhaga', type: 'primary' }
    ]
  },
  {
    id: 'markandeya-purana',
    name: 'Markandeya Purana',
    sanskritName: 'मार्कण्डेयपुराणम्',
    type: 'Mahapurana',
    dominantDeity: 'General',
    traditionalVerseCount: 9000,
    keyTopics: ['Durga Saptashati (Devi Mahatmyam)', 'Karma & Rebirth', 'Genealogies', 'Geographical treatises'],
    synopsis: 'Famous for containing the 700-verse **Devi Mahatmyam** (Chapters 81-93), chanted universally during Navaratri festivals.',
    notableStories: [
      'Sage Markandeya answering Jaimini’s questions through four celestial birds.',
      'Devi Mahatmyam battle against Chanda, Munda, Raktabija, and Dhumralochana.'
    ],
    citations: [
      { id: 'p-cite-5', sourceName: 'Markandeya Purana', sectionOrVerse: 'Durga Saptashati / Devi Mahatmyam', type: 'primary' }
    ]
  },
  {
    id: 'agni-purana',
    name: 'Agni Purana',
    sanskritName: 'अग्निपुराणम्',
    type: 'Mahapurana',
    dominantDeity: 'General',
    traditionalVerseCount: 15400,
    keyTopics: ['Encyclopedic Knowledge', 'Ayurveda', 'Dhanurveda (Martial Arts)', 'Sanskrit Poetics & Rhetoric', 'Temple Iconography'],
    synopsis: 'An encyclopedic treatise spoken by Agni (Fire God) to Sage Vasishta. Covers medicine, governance, temple architecture, gemology, military tactics, grammar, and poetics.',
    notableStories: [
      'Comprehensive compilation of Sushruta and Charaka Ayurvedic formulas.',
      'Rules for consecrated temple building (Shilpa Shastra) and deity idol carving.',
      'Systematic outline of Rajaniti (polity and statecraft).'
    ],
    citations: [
      { id: 'p-cite-agni', sourceName: 'Agni Purana', sectionOrVerse: 'Chapters 1-383', type: 'primary' }
    ]
  },
  {
    id: 'bhavishya-purana',
    name: 'Bhavishya Purana',
    sanskritName: 'भविष्यपुराणम्',
    type: 'Mahapurana',
    dominantDeity: 'Brahma',
    traditionalVerseCount: 14500,
    keyTopics: ['Prophecies & World History', 'Surya Worship & Maga Brahmans', 'Customs & Festivals', 'Dharma Shastra Duties'],
    synopsis: 'Title means "Purana of the Future". Spoken by Brahma to Manu. Focuses heavily on solar worship, rites of passage, and historical/prophetic descriptions.',
    notableStories: [
      'Detailed rituals of Sun worship (Surya Upasana) and the origin of Sun temples.',
      'Samba’s healing from leprosy through building the Sun temple at Multan.',
      'Prophetic verses detailing future rulers and dynasties.'
    ],
    citations: [
      { id: 'p-cite-bhav', sourceName: 'Bhavishya Purana', sectionOrVerse: 'Brahma, Madhya, Pratisarga Parva', type: 'primary' }
    ]
  },
  {
    id: 'brahma-vaivarta-purana',
    name: 'Brahma Vaivarta Purana',
    sanskritName: 'ब्रह्मवैवर्तपुराणम्',
    type: 'Mahapurana',
    dominantDeity: 'Brahma',
    traditionalVerseCount: 18000,
    keyTopics: ['Radha-Krishna Svayam Prakasha', 'Goloka Vrindavan Description', 'Ganesha Origin', 'Nature of Prakriti'],
    synopsis: 'Divided into 4 Khandas (Brahma, Prakriti, Ganesha, Krishna-Janma). Elevates Radha and Krishna as the primeval source of all manifestation and Goloka as the highest spiritual realm.',
    notableStories: [
      'Detailed birth and pastimes of Lord Ganesha in Ganesha Khanda.',
      'Celestial dialogues between Radha and Krishna in Goloka.',
      'Exposition on the five manifestations of Prakriti (Durga, Radha, Lakshmi, Saraswati, Savitri).'
    ],
    citations: [
      { id: 'p-cite-bv', sourceName: 'Brahma Vaivarta Purana', sectionOrVerse: 'Krishna-Janma Khanda', type: 'primary' }
    ]
  },
  {
    id: 'linga-purana',
    name: 'Linga Purana',
    sanskritName: 'लिङ्गपुराणम्',
    type: 'Mahapurana',
    dominantDeity: 'Shiva',
    traditionalVerseCount: 11000,
    keyTopics: ['Linga Symbolism', 'Panchakshara Mantra', 'Pasupata Yoga', '108 Names of Shiva', 'Cosmic Dissolution'],
    synopsis: 'Dedicated to explaining the profound metaphysical meaning of the Shiva Linga as the unmanifest cosmos. Spoken by Brahma on Mount Meru.',
    notableStories: [
      'The cosmic manifestation of the Linga of Light (Jyotirlinga) before Brahma and Vishnu.',
      'Detailed instructions on Pasupata Vrata and meditation on Namah Shivaya.',
      'Manifestation of various Avataras of Lord Shiva in different Yugas.'
    ],
    citations: [
      { id: 'p-cite-linga', sourceName: 'Linga Purana', sectionOrVerse: 'Purva & Uttara Bhaga', type: 'primary' }
    ]
  },
  {
    id: 'varaha-purana',
    name: 'Varaha Purana',
    sanskritName: 'वराहपुराणम्',
    type: 'Mahapurana',
    dominantDeity: 'Vishnu',
    traditionalVerseCount: 24000,
    keyTopics: ['Varaha Avatara rescue of Earth', 'Mathura & Vrindavan Tirthas', 'Nachiketa Episode', 'Ananta Vrata'],
    synopsis: 'Narrated by Lord Varaha (the Boar incarnation) to Bhumi Devi (Mother Earth) after lifting her from the cosmic ocean depths.',
    notableStories: [
      'Cosmic dialogue between Varaha and Earth on moral duties and holy sites.',
      'Comprehensive tour of Mathura, Gokula, and Vrindavan pilgrimage spots.',
      'The story of Nachiketa as presented in Puranic lore.'
    ],
    citations: [
      { id: 'p-cite-varaha', sourceName: 'Varaha Purana', sectionOrVerse: 'Chapters 1-218', type: 'primary' }
    ]
  },
  {
    id: 'skanda-purana',
    name: 'Skanda Purana',
    sanskritName: 'स्कन्दपुराणम्',
    type: 'Mahapurana',
    dominantDeity: 'Shiva',
    traditionalVerseCount: 81100,
    keyTopics: ['Largest Purana', 'Kashi Khanda', 'Utkala Khanda (Jagannatha)', 'Arunachala Mahatmya', 'Sahyadri Khanda', 'Satyanarayana Vrata'],
    synopsis: 'The absolute largest of all Puranas (over 81,000 verses). Spoken by Lord Skanda (Kartikeya). Divided into 7 major Khandas. Contains the famous Kashi Khanda (glory of Varanasi) and Satyanarayana Katha.',
    notableStories: [
      'Detailed geography and spiritual glory of Kashi (Varanasi) in Kashi Khanda.',
      'Origin of Arunachala hill as the fire-column of Lord Shiva.',
      'The traditional Satyanarayana Vrata Katha recited across India.'
    ],
    citations: [
      { id: 'p-cite-skanda', sourceName: 'Skanda Purana', sectionOrVerse: 'Kashi Khanda & Maheshvara Khanda', type: 'primary' }
    ]
  },
  {
    id: 'vamana-purana',
    name: 'Vamana Purana',
    sanskritName: 'वामनपुराणम्',
    type: 'Mahapurana',
    dominantDeity: 'Vishnu',
    traditionalVerseCount: 10000,
    keyTopics: ['Vamana Avatara & King Bali', 'Kurukshetra Sacredness', 'Gajendra Moksha Variant', 'Shiva-Vishnu Harmony'],
    synopsis: 'Named after Lord Vamana (Dwarf incarnation). Focuses on the triumph of humility and devotion, highlighting sacred sites around Kurukshetra and Sthanvisvara.',
    notableStories: [
      'The three steps of Vamana measuring the earth, sky, and King Bali’s head.',
      'Harmonization of Vaishnava and Shaiva worship through mutual reverence of Hari and Hara.',
      'Spiritual geography of Kurukshetra and Sarasvati river banks.'
    ],
    citations: [
      { id: 'p-cite-vamana', sourceName: 'Vamana Purana', sectionOrVerse: 'Chapters 1-95', type: 'primary' }
    ]
  },
  {
    id: 'kurma-purana',
    name: 'Kurma Purana',
    sanskritName: 'कूर्मपुराणम्',
    type: 'Mahapurana',
    dominantDeity: 'Vishnu',
    traditionalVerseCount: 17000,
    keyTopics: ['Isvara Gita', 'Vyasa Gita', 'Samudra Manthan', 'Pashupata Yoga', 'Non-dual Shaiva-Vaishnava Synthesis'],
    synopsis: 'Spoken by Lord Kurma (Tortoise incarnation) during the Churning of the Ocean. Contains the celebrated **Ishvara Gita** (Chapters 1-11 of Uttara Vibhaga), expressing non-dual devotion.',
    notableStories: [
      'Ishvara Gita: Lord Shiva delivering spiritual wisdom to rishis in the presence of Vishnu.',
      'Samudra Manthan: Churning of milk ocean and manifestation of Amrita and Dhanvantari.',
      'Vyasa Gita exposition on duties of householders and ascetics.'
    ],
    citations: [
      { id: 'p-cite-kurma', sourceName: 'Kurma Purana', sectionOrVerse: 'Ishvara Gita & Vyasa Gita', type: 'primary' }
    ]
  },
  {
    id: 'matsya-purana',
    name: 'Matsya Purana',
    sanskritName: 'मत्स्यपुराणम्',
    type: 'Mahapurana',
    dominantDeity: 'Vishnu',
    traditionalVerseCount: 14000,
    keyTopics: ['Great Deluge (Pralaya)', 'King Manu Rescue', 'Vastu Shastra Architecture', 'Iconography', 'Narmada River Parikrama'],
    synopsis: 'Spoken by Lord Matsya (Fish incarnation) to King Manu while guiding the sacred ark through the cosmic deluge. Outstanding source for ancient Vastu Shastra and temple design.',
    notableStories: [
      'The Great Deluge: Lord Matsya rescuing Manu, the 7 Rishis, and seeds of life.',
      'Detailed rules for building palaces, houses, and mandirs (Vastu Vidya).',
      'The spiritual benefits of Narmada River Parikrama.'
    ],
    citations: [
      { id: 'p-cite-matsya', sourceName: 'Matsya Purana', sectionOrVerse: 'Chapters 1-291', type: 'primary' }
    ]
  },
  {
    id: 'garuda-purana',
    name: 'Garuda Purana',
    sanskritName: 'गरुडपुराणम्',
    type: 'Mahapurana',
    dominantDeity: 'Vishnu',
    traditionalVerseCount: 19000,
    keyTopics: ['Life After Death (Preta Kalpa)', 'Karma & Rebirth', 'Moksha Yoga', 'Medicine & Gemology', 'Vishnu Sahasranama'],
    synopsis: 'Dialogue between Lord Vishnu and Garuda (the celestial eagle). Renowned for its Preta Kalpa section detailing the soul’s journey after death, funeral rites, and liberation.',
    notableStories: [
      'The soul’s journey across Yamaloka and the efficacy of Shraddha ceremonies.',
      'Gemology (Ratna Pariksha) determining quality and healing properties of precious stones.',
      'Ayurvedic healing formulas and Yoga practice for Moksha.'
    ],
    citations: [
      { id: 'p-cite-garuda', sourceName: 'Garuda Purana', sectionOrVerse: 'Preta Kalpa & Brahma Khanda', type: 'primary' }
    ]
  },
  {
    id: 'brahmanda-purana',
    name: 'Brahmanda Purana',
    sanskritName: 'ब्रह्माण्डपुराणम्',
    type: 'Mahapurana',
    dominantDeity: 'Brahma',
    traditionalVerseCount: 12000,
    keyTopics: ['Lalita Sahasranama', 'Lalita Trishati', 'Adhyatma Ramayana', 'Cosmic Egg (Brahmanda)', 'Parashurama Legend'],
    synopsis: 'The "Purana of the Cosmic Egg". Contains two of the most revered texts in Hinduism: the **Lalita Sahasranama** (1,000 names of Divine Mother) and the **Adhyatma Ramayana**.',
    notableStories: [
      'Manifestation of Sri Lalita Tripura Sundari to destroy Bhandasura.',
      'Adhyatma Ramayana: Spiritual narrative emphasizing Rama as Supreme Brahman.',
      'Story of Sage Parashurama and his penance.'
    ],
    citations: [
      { id: 'p-cite-brahmanda', sourceName: 'Brahmanda Purana', sectionOrVerse: 'Lalita Sahasranama & Adhyatma Ramayana', type: 'primary' }
    ]
  },
  {
    id: 'devi-bhagavata-purana',
    name: 'Devi Bhagavata Purana',
    sanskritName: 'देवीभागवतपुराणम्',
    type: 'Mahapurana',
    dominantDeity: 'Shakti',
    traditionalVerseCount: 18000,
    keyTopics: ['Shakti Peethas', 'Navaratri Observance', 'Mahishasura Mardini', 'Devi Gita', 'Sri Chakra Meditation'],
    synopsis: 'Central text of Shakta tradition, extolling Mahadevi as the primal creative power (Adishakti) from whom the Trinity emanates. Contains the famous **Devi Gita** in Book 7.',
    notableStories: [
      'Devi manifesting to vanquish Mahishasura, Shumbha, and Nishumbha.',
      'Origin story of 51 Shakti Peethas from Sati’s sacred body parts.',
      'Devi Gita instructions on Kundalini yoga and Jnana.'
    ],
    citations: [
      { id: 'p-cite-4', sourceName: 'Srimad Devi Bhagavatam', sectionOrVerse: 'Skandha 1 to 12', type: 'primary' }
    ]
  }
];
