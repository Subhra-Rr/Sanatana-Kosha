import { UpanishadItem } from '../types';

export const UPANISHADS_DATA: UpanishadItem[] = [
  {
    id: 'isha-upanishad',
    name: 'Isha Upanishad',
    sanskritName: 'ईशावास्योपनिषत्',
    associatedVeda: 'Yajurveda',
    isPrincipal: true,
    mahavakya: {
      sanskrit: 'ईशा वास्यमिदं सर्वम्',
      transliteration: 'īśā vāsyam idaṁ sarvam',
      translation: 'All this universe is enfolded and inhabited by the Divine Lord.',
      meaning: 'Every sentient and insentient object is an expression of the underlying divine reality.'
    },
    summary: 'Consisting of 18 verses, the Isha Upanishad is the 40th chapter of the Shukla Yajurveda. It synthesizes action (Karma) with knowledge (Jnana) and warns against total withdrawal or total materialism.',
    keyTeachings: [
      'Pervasiveness of Consciousness in all manifest forms.',
      'Renunciation in action (Tyaktena bhunjitha) — enjoy without covetousness.',
      'Unity of Vidya (spiritual knowledge) and Avidya (practical action).',
      'The prayer of the dying seeker for the unveiling of the Sun of Truth (Satyasya mukham).'
    ],
    centralDialogue: 'Sage Yajnavalkya and seekers exploring the balance between worldly action and transcendent self-knowledge.',
    versesCount: 18,
    citations: [
      {
        id: 'u-cite-1',
        sourceName: 'Eight Upanishads with Commentary of Sankaracarya',
        sectionOrVerse: 'Isha Upanishad, Verse 1-18',
        commentator: 'Swami Gambhirananda / Advaita Ashrama',
        type: 'primary'
      }
    ]
  },
  {
    id: 'katha-upanishad',
    name: 'Katha Upanishad',
    sanskritName: 'कठोपनिषत्',
    associatedVeda: 'Yajurveda',
    isPrincipal: true,
    mahavakya: {
      sanskrit: 'उत्तिष्ठत जाग्रत प्राप्य वरान्निबोधत',
      transliteration: 'uttiṣṭhata jāgrata prāpya varān nibodhata',
      translation: 'Arise! Awake! Approach the great teachers and realize the Self!',
      meaning: 'The eternal clarion call to transcend ignorance and awaken to Atman.'
    },
    summary: 'Presents the legendary dialogue between the young seeker Nachiketa and Yama (the Lord of Death). When offered worldly power, wealth, and heavenly pleasures, Nachiketa rejects them all to demand knowledge of what lies beyond death.',
    keyTeachings: [
      'The distinction between Shreyas (the spiritually good) and Preyas (the immediately pleasant).',
      'The Chariot Metaphor: Body as chariot, Intellect (Buddhi) as driver, Mind (Manas) as reins, Senses as horses, Self (Atman) as passenger.',
      'Immortality of the Atman: "Na jayate mriyate va kadacin" (It is neither born nor dies).',
      'The subtle path: "Sharp as a razor’s edge, difficult to tread."'
    ],
    centralDialogue: 'Nachiketa questioning Yama on the nature of the eternal Atman beyond mortal death.',
    versesCount: 119,
    citations: [
      {
        id: 'u-cite-2',
        sourceName: 'Katha Upanishad Bhashya',
        sectionOrVerse: 'Katha Upanishad 1.2.14, 1.3.14',
        commentator: 'Adi Shankaracharya',
        type: 'primary'
      }
    ]
  },
  {
    id: 'mandukya-upanishad',
    name: 'Mandukya Upanishad',
    sanskritName: 'माण्डूक्योपनिषत्',
    associatedVeda: 'Atharvaveda',
    isPrincipal: true,
    mahavakya: {
      sanskrit: 'अयमात्मा ब्रह्म',
      transliteration: 'ayam ātmā brahma',
      translation: 'This Self (Atman) is Brahman.',
      meaning: 'The individual consciousness in its true nature is identical with the cosmic reality.'
    },
    summary: 'Comprising only 12 verses, the Mandukya Upanishad is the shortest yet regarded as the most profound Upanishad. Muktika Upanishad states that Mandukya alone is sufficient for self-realization.',
    keyTeachings: [
      'Analysis of the 4 States of Consciousness: Jagrat (Waking/A), Svapna (Dreaming/U), Sushupti (Deep Sleep/M), and Turiya (The Transcendent Fourth/Silence).',
      'The sacred syllable OM (AUM) as the sonic body of the universe.',
      'Gaudapada’s Karika commentary on non-origination (Ajativada).'
    ],
    centralDialogue: 'Pure philosophical exposition on OM and Turiya.',
    versesCount: 12,
    citations: [
      {
        id: 'u-cite-3',
        sourceName: 'Mandukya Karika of Gaudapada',
        sectionOrVerse: 'Verses 1 to 12',
        commentator: 'Gaudapada & Adi Shankaracharya',
        type: 'commentary'
      }
    ]
  },
  {
    id: 'chandogya-upanishad',
    name: 'Chandogya Upanishad',
    sanskritName: 'छान्दोग्योपनिषत्',
    associatedVeda: 'Samaveda',
    isPrincipal: true,
    mahavakya: {
      sanskrit: 'तत्त्वमसि',
      transliteration: 'tat tvam asi',
      translation: 'That Thou Art (You are That supreme reality).',
      meaning: 'Instruction from Sage Uddalaka Aruni to his son Shvetaketu demonstrating the non-dual essence in all creation.'
    },
    summary: 'One of the oldest and largest Upanishads, containing 8 chapters. Rich in meditative allegories (Vidya), dialogue on Udgitha (OM chant), and the famous analogy of salt dissolved in water illustrating pervasive divinity.',
    keyTeachings: [
      'The Mahavakya "Tat Tvam Asi" repeated 9 times with diverse natural illustrations (seed of banyan, rivers in ocean, honey from flowers).',
      'The Dahara Vidya: Meditating on the infinite lotus space within the heart (Hridaya-akasha).',
      'Dharma branches: Yajna, Adhyayana, Dana as foundation for spiritual maturity.'
    ],
    centralDialogue: 'Uddalaka Aruni instructing Shvetaketu on the essential essence of Brahman.',
    versesCount: 628,
    citations: [
      {
        id: 'u-cite-4',
        sourceName: 'Chandogya Upanishad Bhashya',
        sectionOrVerse: 'Chapter 6, Section 8, Verse 7',
        commentator: 'Adi Shankaracharya & Ramanujacharya',
        type: 'primary'
      }
    ]
  },
  {
    id: 'brihadaranyaka-upanishad',
    name: 'Brihadaranyaka Upanishad',
    sanskritName: 'बृहदारण्यकोपनिषत्',
    associatedVeda: 'Yajurveda',
    isPrincipal: true,
    mahavakya: {
      sanskrit: 'अहं ब्रह्मास्मि',
      transliteration: 'ahaṁ brahmāsmi',
      translation: 'I am Brahman (Infinite Supreme Consciousness).',
      meaning: 'Realization of the non-separate nature of the inner self.'
    },
    summary: 'The "Great Forest Upanishad", renowned for its monumental philosophical debates hosted by King Janaka of Videha, featuring Sage Yajnavalkya, Gargi Vachaknavi (the illustrious female philosopher), and Maitreyi.',
    keyTeachings: [
      'The famous prayer: "Asato ma sadgamaya, Tamaso ma jyotirgamaya, Mrityor ma amritam gamaya" (Lead me from falsehood to truth, from darkness to light, from mortality to immortality).',
      'The dialogue between Yajnavalkya and Maitreyi on love: "Not for the sake of the spouse is the spouse dear, but for the sake of the Self (Atman) is the spouse dear."',
      'Gargi’s intense questioning on the ultimate warp and woof of the universe.',
      'Neti, Neti ("Not this, Not this") methodology of spiritual discrimination.'
    ],
    centralDialogue: 'Yajnavalkya debating scholars at King Janaka’s court and instructing Maitreyi.',
    versesCount: 435,
    citations: [
      {
        id: 'u-cite-5',
        sourceName: 'Brihadaranyaka Upanishad Bhashya',
        sectionOrVerse: '1.4.10, 2.4.5, 3.8.8',
        commentator: 'Adi Shankaracharya & Madhvacharya',
        type: 'primary'
      }
    ]
  },
  {
    id: 'mundaka-upanishad',
    name: 'Mundaka Upanishad',
    sanskritName: 'मुण्डकोपनिषत्',
    associatedVeda: 'Atharvaveda',
    isPrincipal: true,
    mahavakya: {
      sanskrit: 'सत्यमेव जयते नानृतम्',
      transliteration: 'satyameva jayate nānṛtam',
      translation: 'Truth alone triumphs, not falsehood.',
      meaning: 'The divine law that cosmic truth ultimately prevails.'
    },
    summary: 'Addressed to shaved-headed seekers (Mundaka), it clearly distinguishes Para Vidya (Higher spiritual wisdom) from Apara Vidya (Lower empirical sciences and ritual details).',
    keyTeachings: [
      'Distinction between Para Vidya (Self-knowledge) and Apara Vidya (Vedas, grammar, astronomy as empirical texts).',
      'The Two Birds Analogy: Two birds on a single tree — one eats sweet and bitter fruits (Jiva), while the other watches in silent luminosity (Atman).',
      'The Bow and Arrow Metaphor: OM is the bow, Atman is the arrow, Brahman is the target.',
      'National motto of India: "Satyameva Jayate".'
    ],
    centralDialogue: 'Shaunaka questioning Sage Angiras: "What is that, knowing which, all else becomes known?"',
    versesCount: 64,
    citations: [
      {
        id: 'u-cite-6',
        sourceName: 'Mundaka Upanishad',
        sectionOrVerse: '3.1.6, 3.2.3',
        commentator: 'Swami Nikhilananda',
        type: 'primary'
      }
    ]
  },
  {
    id: 'taittiriya-upanishad',
    name: 'Taittiriya Upanishad',
    sanskritName: 'तैत्तिरीयोपनिषत्',
    associatedVeda: 'Yajurveda',
    isPrincipal: true,
    mahavakya: {
      sanskrit: 'सत्यं ज्ञानमनन्तं ब्रह्म',
      transliteration: 'satyaṁ jñānam anantaṁ brahma',
      translation: 'Brahman is Existence, Consciousness, and Infinite.',
      meaning: 'Definition of the essential nature of Brahman.'
    },
    summary: 'Famous for the doctrine of Pancha Koshas (Five Sheaths covering the Self: Annamaya, Pranamaya, Manomaya, Vijnanamaya, Anandamaya) and the convocational advice to graduating students.',
    keyTeachings: [
      'Pancha Kosha Model (5 Sheaths of human experience).',
      'Student Convocational Address: "Satyam vada, Dharmam chara" (Speak truth, practice righteousness, respect parents, teachers, and guests as divine).',
      'Ananda Mimamsa: Calculus of bliss comparing human happiness with celestial and divine liberation.'
    ],
    centralDialogue: 'Varuna instructing his son Bhrigu through tapas on the sheaths of existence.',
    versesCount: 61,
    citations: [
      {
        id: 'u-cite-7',
        sourceName: 'Taittiriya Upanishad Bhashya',
        sectionOrVerse: 'Shiksha Valli, Ananda Valli, Bhrigu Valli',
        commentator: 'Adi Shankaracharya & Sureshvaracharya',
        type: 'primary'
      }
    ]
  },
  {
    id: 'shvetashvatara-upanishad',
    name: 'Shvetashvatara Upanishad',
    sanskritName: 'श्वेताश्वतरोपनिषत्',
    associatedVeda: 'Yajurveda',
    isPrincipal: true,
    mahavakya: {
      sanskrit: 'ज्ञात्वा देवं मुच्यते सर्वपाशैः',
      transliteration: 'jñātvā devaṁ mucyate sarvapāśaiḥ',
      translation: 'By knowing the Supreme Lord, one is freed from all fetters.',
      meaning: 'Integration of Yoga, Bhakti, and Jnana in devotion to Rudra-Shiva.'
    },
    summary: 'Presents a synthesis of Samkhya dualistic categories, Yogic posture and breath, and personal devotion (Bhakti) to Rudra-Shiva as the lord of Maya.',
    keyTeachings: [
      'Synthesis of Samkhya categories (Prakriti, Purusha) with personal Ishvara.',
      'Yogic practices: Seating posture, steady chest/head alignment, breath control.',
      'Concept of Maya as the creative power of the Lord.'
    ],
    centralDialogue: 'Sage Shvetashvatara to his disciples on the supreme cause of the world.',
    versesCount: 113,
    citations: [
      {
        id: 'u-cite-8',
        sourceName: 'Shvetashvatara Upanishad',
        sectionOrVerse: 'Chapter 1 to 6',
        commentator: 'Traditional Commentators',
        type: 'primary'
      }
    ]
  }
];
