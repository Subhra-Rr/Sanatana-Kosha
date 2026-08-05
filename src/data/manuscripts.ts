export interface ManuscriptItem {
  id: string;
  title: string;
  sanskritTitle: string;
  category: 'Palm-Leaf Manuscript' | 'Temple Inscription' | 'Copper Plate Grant' | 'Birch Bark Codex';
  scriptUsed: 'Brahmi' | 'Sharada' | 'Grantha' | 'Devanagari' | 'Nandinagari' | 'Kalinga';
  estimatedCentury: string;
  currentLocation: string;
  provenanceRegion: string;
  historicalSignificance: string;
  contentExcerptSanskrit: string;
  contentExcerptTranslation: string;
  preservationStatus: 'Digitized & Preserved' | 'Rare Archive' | 'Stone In-Situ';
  relatedScriptureOrRuler: string;
}

export const MANUSCRIPTS_DATA: ManuscriptItem[] = [
  {
    id: 'ms-spitzer',
    title: 'Spitzer Manuscript (Oldest Philosophical Codex)',
    sanskritTitle: 'स्पित्ज़र ताडपत्र पाण्डुलिपिः',
    category: 'Palm-Leaf Manuscript',
    scriptUsed: 'Brahmi',
    estimatedCentury: 'c. 2nd Century CE (Kushan Era)',
    currentLocation: 'Berlin State Library Archives',
    provenanceRegion: 'Kizil Caves / Silk Road (Origin North India)',
    historicalSignificance: 'The oldest surviving philosophical Sanskrit palm-leaf manuscript. Contains fragments of early Nyaya, Vaisheshika, and Samkhya discussions alongside Gita citations.',
    contentExcerptSanskrit: '...प्रमाणप्रमेयसंशयप्रयोजनदृष्टान्तसिद्धान्तावयवतर्कनिर्णय...',
    contentExcerptTranslation: 'Discussion on Pramanas (valid means of knowledge), Prameya (objects of knowledge), and the structure of logical debate.',
    preservationStatus: 'Digitized & Preserved',
    relatedScriptureOrRuler: 'Nyaya Sutra & Kushan Dynasty'
  },
  {
    id: 'ms-bakhshali',
    title: 'Bakhshali Manuscript (Ancient Mathematics & Zero)',
    sanskritTitle: 'बख्शाली गणित पाण्डुलिपिः',
    category: 'Birch Bark Codex',
    scriptUsed: 'Sharada',
    estimatedCentury: 'c. 3rd – 4th Century CE',
    currentLocation: 'Bodleian Library, Oxford University',
    provenanceRegion: 'Bakhshali Village (Peshawar Valley / Ancient Gandhara)',
    historicalSignificance: 'Contains the earliest known recorded placeholder dot symbol for Zero (Shunya). Features advanced rules for square roots, arithmetic progressions, and algebraic equations.',
    contentExcerptSanskrit: 'शून्यं बिन्दुः । राशीनां वर्गाणां मूलसङ्कलनम् ॥',
    contentExcerptTranslation: 'Zero represented as a distinct dot symbol. Rules for extracting square roots of non-square numbers.',
    preservationStatus: 'Digitized & Preserved',
    relatedScriptureOrRuler: 'Ganita Shastra & Ancient Sharada Script'
  },
  {
    id: 'ms-aihole',
    title: 'Aihole Temple Inscription of Ravikirti',
    sanskritTitle: 'ऐहोळे रविकीर्ति शिलालेखाः',
    category: 'Temple Inscription',
    scriptUsed: 'Brahmi',
    estimatedCentury: '634 CE (Kali Yuga 3735)',
    currentLocation: 'Meguti Jain Temple Wall, Aihole, Karnataka',
    provenanceRegion: 'Badami Chalukya Kingdom',
    historicalSignificance: 'Composed by court poet Ravikirti praising Emperor Pulakeshin II. Explicitly mentions the poets Kalidasa and Bharavi, providing crucial chronological benchmark for classical Sanskrit literature.',
    contentExcerptSanskrit: 'येनायोधि विमुक्तमानसमराः समरेषु महाभटैः । येनाकारि विशुद्धकीर्तिरतुला कालिदासभासवतः ॥',
    contentExcerptTranslation: ' Ravikirti, who by his poetic composition attained fame comparable to that of Kalidasa and Bharavi.',
    preservationStatus: 'Stone In-Situ',
    relatedScriptureOrRuler: 'Emperor Pulakeshin II & Kalidasa'
  },
  {
    id: 'ms-heliodorus',
    title: 'Heliodorus Pillar Inscription (Garuda Dhvaja)',
    sanskritTitle: 'हेलिओदोरस गरुडध्वज शिलालेखाः',
    category: 'Temple Inscription',
    scriptUsed: 'Brahmi',
    estimatedCentury: 'c. 113 BCE',
    currentLocation: 'Vidisha (Besnagar), Madhya Pradesh',
    provenanceRegion: 'Shunga Dynasty',
    historicalSignificance: 'Erected by Heliodorus, a Greek ambassador from Taxila who converted to Bhagavatism. Proves early international adoption of Vaishnavism and Gita principles.',
    contentExcerptSanskrit: 'देवदेवस वासुदेवस गरुडध्वजे अयं कारिते हेलिओडोरेण... त्रीनि अमुतपदानि... दम त्यागे अप्रमाद...',
    contentExcerptTranslation: 'This Garuda-standard of Vasudeva, the God of gods, was erected by Heliodorus, worshipper of Bhagavan... Three steps to immortality: Self-restraint (Dama), Renunciation (Tyaga), Vigilance (Apramada).',
    preservationStatus: 'Stone In-Situ',
    relatedScriptureOrRuler: 'Bhagavata Tradition & Heliodorus'
  },
  {
    id: 'ms-velvikudi',
    title: 'Velvikudi Copper Plate Grant',
    sanskritTitle: 'वेळ्विकुडि ताम्रपत्र शासनानि',
    category: 'Copper Plate Grant',
    scriptUsed: 'Grantha',
    estimatedCentury: 'c. 770 CE',
    currentLocation: 'Government Museum, Chennai',
    provenanceRegion: 'Pandyan Kingdom (Madurai)',
    historicalSignificance: 'Bilingual grant in Sanskrit (Grantha script) and Old Tamil. Records the restoration of a Vedic village grant (Brahmadeya) originally granted by ancient kings.',
    contentExcerptSanskrit: 'यस्याज्ञां शिरसा धृत्वा राजानो नतमौलयः । वेदविद्याव्रतस्नाताः बह्वृचा यज्विनः शुभाः ॥',
    contentExcerptTranslation: 'Honoring the Vedic scholars well-versed in Rigveda and Yajurveda sacrifices, restoring their traditional rights.',
    preservationStatus: 'Rare Archive',
    relatedScriptureOrRuler: 'Pandyan King Nedunjadayain & Grantha Script'
  }
];
