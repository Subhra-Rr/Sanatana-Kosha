import { UpanishadItem } from '../types';

export const UPANISHADS_DATA: UpanishadItem[] = [
  // --- 10 PRINCIPAL (MUKHYA) UPANISHADS ---
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
      { id: 'u-cite-1', sourceName: 'Eight Upanishads with Commentary of Sankaracarya', sectionOrVerse: 'Isha Upanishad, Verse 1-18', commentator: 'Swami Gambhirananda', type: 'primary' }
    ]
  },
  {
    id: 'kena-upanishad',
    name: 'Kena Upanishad (Talavakara)',
    sanskritName: 'केनोपनिषत्',
    associatedVeda: 'Samaveda',
    isPrincipal: true,
    mahavakya: {
      sanskrit: 'केनेषितं पतति प्रेषितं मनः',
      transliteration: 'keneṣitaṁ patati preṣitaṁ manaḥ',
      translation: 'By whom impelled does the mind fall upon its objects?',
      meaning: 'Inquiry into the invisible supreme power behind mind, breath, speech, and sight.'
    },
    summary: 'Belongs to the Jaiminiya/Talavakara branch of Samaveda. Opens with profound inquiries on the inner Controller of human cognition and features the famous allegory of Goddess Uma Haimavati instructing Devas.',
    keyTeachings: [
      'Brahman is "That which speech cannot reveal, but by which speech is expressed."',
      'Paradox of knowledge: "He who knows That knows it not; he who knows not knows It."',
      'Allegory of Devas (Agni, Vayu, Indra) humbled by Yaksha (Brahman) and enlightened by Goddess Uma.'
    ],
    centralDialogue: 'Disciple asking Guru about the power behind mind and senses; Uma revealing Brahman to Indra.',
    versesCount: 35,
    citations: [
      { id: 'u-cite-kena', sourceName: 'Kena Upanishad Bhashya', sectionOrVerse: 'Kanda 1 to 4', commentator: 'Adi Shankaracharya', type: 'primary' }
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
      { id: 'u-cite-2', sourceName: 'Katha Upanishad Bhashya', sectionOrVerse: 'Katha Upanishad 1.2.14, 1.3.14', commentator: 'Adi Shankaracharya', type: 'primary' }
    ]
  },
  {
    id: 'prashna-upanishad',
    name: 'Prashna Upanishad',
    sanskritName: 'प्रश्नोपनिषत्',
    associatedVeda: 'Atharvaveda',
    isPrincipal: true,
    mahavakya: {
      sanskrit: 'स यो ह वै तन्माहाभाग्यं वेद',
      transliteration: 'sa yo ha vai tan-māhābhāgyaṁ veda',
      translation: 'He who knows the Supreme Person becomes free from all shadow.',
      meaning: 'Six profound inquiries regarding life, Prana, and ultimate consciousness.'
    },
    summary: 'Consists of 6 questions (Prashnas) asked by six advanced rishis to Sage Pippalada regarding the origin of life, the nature of Prana, dreaming, OM meditation, and the 16-part Purusha.',
    keyTeachings: [
      'Prana and Rayi (Life Energy and Matter) as dual principles of manifestation.',
      'The supremacy of Prana over senses (Indriyas).',
      'Meditation on OM with 3 Matras (A-U-M) leading to liberation.',
      'The 16 Parts (Shodasha Kala) of the human soul dissolving into Supreme Brahman.'
    ],
    centralDialogue: 'Kabandhi, Bhargava, Kusalya, Gargya, Satyakama, and Sukesha questioning Sage Pippalada.',
    versesCount: 67,
    citations: [
      { id: 'u-cite-prashna', sourceName: 'Prashna Upanishad Bhashya', sectionOrVerse: 'Prashna 1 to 6', commentator: 'Adi Shankaracharya', type: 'primary' }
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
      'Distinction between Para Vidya (Self-knowledge) and Apara Vidya (empirical scriptures/science).',
      'The Two Birds Analogy: Jiva eating fruit while Atman observes in silent luminosity.',
      'The Bow and Arrow Metaphor: OM is the bow, Atman is arrow, Brahman is target.',
      'National motto of India: "Satyameva Jayate".'
    ],
    centralDialogue: 'Shaunaka questioning Sage Angiras: "What is that, knowing which, all else becomes known?"',
    versesCount: 64,
    citations: [
      { id: 'u-cite-6', sourceName: 'Mundaka Upanishad', sectionOrVerse: '3.1.6, 3.2.3', commentator: 'Swami Nikhilananda', type: 'primary' }
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
      { id: 'u-cite-3', sourceName: 'Mandukya Karika of Gaudapada', sectionOrVerse: 'Verses 1 to 12', commentator: 'Gaudapada & Adi Shankaracharya', type: 'commentary' }
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
      'Student Convocational Address: "Satyam vada, Dharmam chara" (Speak truth, practice righteousness).',
      'Ananda Mimamsa: Calculus of bliss comparing human happiness with celestial and divine liberation.'
    ],
    centralDialogue: 'Varuna instructing his son Bhrigu through tapas on the sheaths of existence.',
    versesCount: 61,
    citations: [
      { id: 'u-cite-7', sourceName: 'Taittiriya Upanishad Bhashya', sectionOrVerse: 'Shiksha Valli, Ananda Valli, Bhrigu Valli', commentator: 'Adi Shankaracharya & Sureshvaracharya', type: 'primary' }
    ]
  },
  {
    id: 'aitareya-upanishad',
    name: 'Aitareya Upanishad',
    sanskritName: 'ऐतरेयोपनिषत्',
    associatedVeda: 'Rigveda',
    isPrincipal: true,
    mahavakya: {
      sanskrit: 'प्रज्ञानं ब्रह्म',
      transliteration: 'prajñānaṁ brahma',
      translation: 'Consciousness is Brahman.',
      meaning: 'Pure awareness underlying all mental faculties is the ultimate cosmic truth.'
    },
    summary: 'Embedded in the Aitareya Aranyaka of Rigveda. Authored by Sage Mahidasa Aitareya. Explores cosmic creation (Srishti) and the descent of Consciousness into the human vessel.',
    keyTeachings: [
      'Prajnanam Brahma: Consciousness is the source, sustainer, and essence of all beings.',
      'The three births of the soul (physical birth, parental care, and spiritual illumination).',
      'Creation story of Atman desiring creation and manifesting Lokas and Guardians.'
    ],
    centralDialogue: 'Sage Mahidasa Aitareya expounding the primeval Atman.',
    versesCount: 33,
    citations: [
      { id: 'u-cite-aitareya', sourceName: 'Aitareya Upanishad Bhashya', sectionOrVerse: 'Chapter 1 to 3', commentator: 'Adi Shankaracharya', type: 'primary' }
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
      'The Mahavakya "Tat Tvam Asi" repeated 9 times with diverse natural illustrations.',
      'The Dahara Vidya: Meditating on the infinite lotus space within the heart.',
      'Satyakama Jabala episode: Truthfulness as the true mark of a seeker.'
    ],
    centralDialogue: 'Uddalaka Aruni instructing Shvetaketu on the essential essence of Brahman.',
    versesCount: 628,
    citations: [
      { id: 'u-cite-4', sourceName: 'Chandogya Upanishad Bhashya', sectionOrVerse: 'Chapter 6, Section 8, Verse 7', commentator: 'Adi Shankaracharya & Ramanujacharya', type: 'primary' }
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
    summary: 'The "Great Forest Upanishad", renowned for its monumental philosophical debates hosted by King Janaka of Videha, featuring Sage Yajnavalkya, Gargi Vachaknavi, and Maitreyi.',
    keyTeachings: [
      'The famous prayer: "Asato ma sadgamaya, Tamaso ma jyotirgamaya, Mrityor ma amritam gamaya".',
      'Dialogue between Yajnavalkya and Maitreyi on love for the Self (Atman).',
      'Neti, Neti ("Not this, Not this") methodology of spiritual discrimination.'
    ],
    centralDialogue: 'Yajnavalkya debating scholars at King Janaka’s court and instructing Maitreyi.',
    versesCount: 435,
    citations: [
      { id: 'u-cite-5', sourceName: 'Brihadaranyaka Upanishad Bhashya', sectionOrVerse: '1.4.10, 2.4.5, 3.8.8', commentator: 'Adi Shankaracharya & Madhvacharya', type: 'primary' }
    ]
  },

  // --- MAJOR SECONDARY & SMANYA/YOGA/SANNYASA UPANISHADS ---
  {
    id: 'shvetashvatara-upanishad',
    name: 'Shvetashvatara Upanishad',
    sanskritName: 'श्वेताश्वतरोपनिषत्',
    associatedVeda: 'Yajurveda',
    isPrincipal: false,
    summary: 'Synthesizes Samkhya categories, Yogic posture and breath control, and personal devotion (Bhakti) to Rudra-Shiva as Lord of Maya.',
    keyTeachings: ['Rudra-Shiva as Supreme Lord', 'Yogic meditation techniques', 'Concept of Maya'],
    versesCount: 113,
    citations: [{ id: 'u-cite-8', sourceName: 'Shvetashvatara Upanishad', type: 'primary' }]
  },
  {
    id: 'kaushitaki-upanishad',
    name: 'Kaushitaki Upanishad',
    sanskritName: 'कौषीतकिब्राह्मणोपनिषत्',
    associatedVeda: 'Rigveda',
    isPrincipal: false,
    summary: 'Belongs to Rigveda. Details the soul’s journey along Devayana (path of gods) and Pitriyana (path of ancestors), and King Pratardana’s dialogue with Indra.',
    keyTeachings: ['Devayana & Pitriyana paths', 'Prana as Conscious Self (Prajnatman)'],
    versesCount: 80,
    citations: [{ id: 'u-cite-kaush', sourceName: 'Kaushitaki Upanishad', type: 'primary' }]
  },
  {
    id: 'maitrayaniya-upanishad',
    name: 'Maitrayaniya Upanishad (Maitri)',
    sanskritName: 'मैत्रायणीयोपनिषत्',
    associatedVeda: 'Yajurveda',
    isPrincipal: false,
    summary: 'Presents the teaching of Sage Maitri to King Brihadratha on impermanence of worldly body, Gunas of Prakriti, and Samadhi yoga.',
    keyTeachings: ['Triguna theory', 'Sixfold Yoga (Shadanga Yoga)', 'Solar and inner light meditation'],
    versesCount: 120,
    citations: [{ id: 'u-cite-maitri', sourceName: 'Maitri Upanishad', type: 'primary' }]
  },
  {
    id: 'kaivalya-upanishad',
    name: 'Kaivalya Upanishad',
    sanskritName: 'कैवल्योपनिषत्',
    associatedVeda: 'Yajurveda',
    isPrincipal: false,
    summary: 'Sage Ashvalayana asking Brahma how to attain liberation. Reveals that neither wealth nor offspring nor rituals, but renunciation and Self-knowledge alone bring Kaivalya.',
    keyTeachings: ['Na karmana na prajaya dhanena tyagenaike amritatvam anashuh', 'Meditation on Shiva as inner Self'],
    versesCount: 26,
    citations: [{ id: 'u-cite-kaiv', sourceName: 'Kaivalya Upanishad', type: 'primary' }]
  },
  {
    id: 'jabala-upanishad',
    name: 'Jabala Upanishad',
    sanskritName: 'जाबालोपनिषत्',
    associatedVeda: 'Yajurveda',
    isPrincipal: false,
    summary: 'Famous for establishing Avimukta Kshetra (Varanasi/Kashi) as the sacred center between eyebrows and expounding the rules of Sannyasa (monastic renunciation).',
    keyTeachings: ['Spiritual significance of Kashi', 'Qualifications for Sannyasa', 'Avimukta Vidya'],
    versesCount: 30,
    citations: [{ id: 'u-cite-jab', sourceName: 'Jabala Upanishad', type: 'primary' }]
  },
  {
    id: 'amritabindu-upanishad',
    name: 'Amritabindu Upanishad',
    sanskritName: 'अमृतबिन्दूपनिषत्',
    associatedVeda: 'Yajurveda',
    isPrincipal: false,
    summary: 'One of the 5 Bindu Upanishads. Declares that the mind alone is the cause of human bondage and liberation (Mana eva मनुष्यणां कारणं बन्धमोक्षयोः).',
    keyTeachings: ['Mind control as key to Moksha', 'Higher and lower OM meditation', 'Unity of Atman beyond forms'],
    versesCount: 22,
    citations: [{ id: 'u-cite-amrita', sourceName: 'Amritabindu Upanishad', type: 'primary' }]
  },
  {
    id: 'yoga-tattva-upanishad',
    name: 'Yoga Tattva Upanishad',
    sanskritName: 'योगतत्त्वोपनिषत्',
    associatedVeda: 'Yajurveda',
    isPrincipal: false,
    summary: 'Outlines the 4 forms of Yoga: Mantra Yoga, Laya Yoga, Hatha Yoga, and Raja Yoga, detailing Kundalini awakening and Pranayama.',
    keyTeachings: ['Four Yogas classification', 'Pranayama metrics and Kundalini awakening'],
    versesCount: 142,
    citations: [{ id: 'u-cite-yogatattva', sourceName: 'Yoga Tattva Upanishad', type: 'primary' }]
  },
  {
    id: 'muktika-upanishad',
    name: 'Muktika Upanishad',
    sanskritName: 'मुक्तिकोपनिषत्',
    associatedVeda: 'Yajurveda',
    isPrincipal: false,
    summary: 'Dialogue between Sri Rama and Hanuman on Mount Gandhamadana. Sri Rama lists the canonical 108 Upanishads and explains how reading Mandukya leads to immediate Mukti.',
    keyTeachings: ['Canonical list of 108 Upanishads', 'Jivanmukti vs Videhamukti', 'Dissolution of Vasanas'],
    versesCount: 120,
    citations: [{ id: 'u-cite-muktika', sourceName: 'Muktika Upanishad', type: 'primary' }]
  },
  {
    id: 'gopala-tapani-upanishad',
    name: 'Gopala Tapani Upanishad',
    sanskritName: 'गोपालतापनीयोपनिषत्',
    associatedVeda: 'Atharvaveda',
    isPrincipal: false,
    summary: 'Central text in Vaishnava tradition expounding Lord Gopala Krishna as the Supreme Brahman and Klim mantra.',
    keyTeachings: ['Gopala Mantra commentary', 'Vrindavan as spiritual plane', 'Krishna as Sat-Chit-Ananda'],
    versesCount: 95,
    citations: [{ id: 'u-cite-gopala', sourceName: 'Gopala Tapani Upanishad', type: 'primary' }]
  },
  {
    id: 'narayana-upanishad',
    name: 'Narayana Upanishad',
    sanskritName: 'नारायणोपनिषत्',
    associatedVeda: 'Yajurveda',
    isPrincipal: false,
    summary: 'Proclaims Lord Narayana as the source of Brahma, Rudra, Prajapatis, and all cosmic elements.',
    keyTeachings: ['Ashtakshara Mantra (Om Namo Narayanaya)', 'Narayana as universal soul'],
    versesCount: 20,
    citations: [{ id: 'u-cite-narayana', sourceName: 'Narayana Upanishad', type: 'primary' }]
  }
];
