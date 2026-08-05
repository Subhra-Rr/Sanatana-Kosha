export interface TempleArchitectureStyle {
  id: string;
  styleName: string;
  sanskritName: string;
  geographicalRegion: string;
  keyFeatures: string[];
  definingStructures: {
    name: string;
    sanskritName: string;
    description: string;
  }[];
  famousExamples: string[];
  historicalPeriod: string;
}

export interface KnowledgeSystemItem {
  id: string;
  systemName: string;
  sanskritName: string;
  category: 'Scientific & Mathematical' | 'Medical & Physical' | 'Arts & Aesthetics' | 'Governance & Architecture';
  foundationalTexts: string[];
  legendaryPioneers: string[];
  corePrinciples: string[];
  historicalImpact: string;
  scriptureReferences: string[];
  keyInventionsOrConcepts: string[];
}

export const TEMPLE_ARCHITECTURE_STYLES: TempleArchitectureStyle[] = [
  {
    id: 'arch-nagara',
    styleName: 'Nagara Style (North Indian Temple Architecture)',
    sanskritName: 'नागर विमान वास्तुशास्त्रम्',
    geographicalRegion: 'Northern & Central India (Himalayas to Vindhyas)',
    keyFeatures: [
      'Built on an elevated stone plinth (Jagati).',
      'Curvilinear beehive-shaped tower (Shikhara / Rekha-Deula) crowning the Garbhagriha.',
      'Amlaka (large fluted stone disc) and Kalasha at the pinnacle of the Shikhara.',
      'Absence of elaborate outer boundary walls or prominent entry towers (Gopurams).'
    ],
    definingStructures: [
      {
        name: 'Garbhagriha (Sanctum Sanctorum)',
        sanskritName: 'गर्भगृहम्',
        description: 'The dark, sacred inner chamber housing the primary deity idol, symbolizing the cosmic womb.'
      },
      {
        name: 'Shikhara (Curvilinear Spire)',
        sanskritName: 'शिखरम् / रेखादेउल',
        description: 'Rising spire above the sanctum tapering gracefully towards the Amlaka disc.'
      },
      {
        name: 'Mandapa (Pillared Assembly Hall)',
        sanskritName: 'मण्डपः',
        description: 'Pillared halls leading towards the sanctum used for congregational chanting, dance, and prayer.'
      }
    ],
    famousExamples: ['Kandariya Mahadeva Temple (Khajuraho)', 'Sun Temple (Konark)', 'Jagannath Temple (Puri)', 'Somnath Temple (Gujarat)'],
    historicalPeriod: 'c. 5th Century CE onwards (Gupta & Chandela eras)'
  },
  {
    id: 'arch-dravida',
    styleName: 'Dravida Style (South Indian Temple Architecture)',
    sanskritName: 'द्राविड वास्तुशास्त्रम्',
    geographicalRegion: 'Southern India (Krishna River to Kanyakumari)',
    keyFeatures: [
      'Enclosed within high compound walls (Prakara).',
      'Towering multi-storeyed entrance gateways called Gopurams.',
      'Pyramidal stepped tower (Vimana) over the Garbhagriha.',
      'Sacred water tank (Kalyani / Pushkarani) integrated inside temple premises.',
      'Thousand-pillared halls (Ayirakkal Mandapam) with intricate stone carvings.'
    ],
    definingStructures: [
      {
        name: 'Gopuram (Monumental Entrance Tower)',
        sanskritName: 'गोपुरम्',
        description: 'Towering multi-tiered gatehouse adorned with thousands of colorful sculpted deities.'
      },
      {
        name: 'Vimana (Pyramidal Sanctum Tower)',
        sanskritName: 'विमानम्',
        description: 'Pyramidal stepped structure rising over the Garbhagriha capped by a single octagonal or round Shikhara cupola.'
      }
    ],
    famousExamples: ['Brihadisvara Temple (Thanjavur)', 'Meenakshi Amman Temple (Madurai)', 'Ranganathaswamy Temple (Srirangam)', 'Shore Temple (Mamallapuram)'],
    historicalPeriod: 'c. 6th Century CE onwards (Pallava, Chola, Vijayanagara eras)'
  },
  {
    id: 'arch-vesara',
    styleName: 'Vesara Style (Hybrid Deccan Temple Architecture)',
    sanskritName: 'वेसर वास्तुशास्त्रम्',
    geographicalRegion: 'Deccan Plateau & Karnataka (Vindhyas to Krishna River)',
    keyFeatures: [
      'Harmonious synthesis blending Nagara curvilinear spires with Dravida multi-tiered Vimanas.',
      'Star-shaped (Stellate) ground plinths providing expansive wall space for miniature relief sculptures.',
      'Lathe-turned polished soapstone pillars and intricate carved ceilings.'
    ],
    definingStructures: [
      {
        name: 'Stellate Plinth (Star Plan)',
        sanskritName: 'नक्षत्र जगती',
        description: 'Star-shaped elevated platform creating multiple zigzag projection angles for relief art.'
      }
    ],
    famousExamples: ['Chennakeshava Temple (Belur)', 'Hoysaleswara Temple (Halebidu)', 'Virupaksha Temple (Pattadakal)'],
    historicalPeriod: 'c. 7th – 13th Century CE (Badami Chalukya, Rashtrakuta & Hoysala eras)'
  }
];

export const ANCIENT_KNOWLEDGE_SYSTEMS: KnowledgeSystemItem[] = [
  {
    id: 'ks-ayurveda',
    systemName: 'Ayurveda (Science of Life & Longevity)',
    sanskritName: 'आयुर्वेदः',
    category: 'Medical & Physical',
    foundationalTexts: ['Charaka Samhita', 'Sushruta Samhita', 'Ashtanga Hridaya'],
    legendaryPioneers: ['Dhanvantari', 'Charaka', 'Sushruta (Father of Surgery)', 'Vagbhata'],
    corePrinciples: [
      'Tridosha Balance: Vata (Air/Ether), Pitta (Fire/Water), and Kapha (Water/Earth).',
      'Panchamahabhuta: Five fundamental cosmic elements forming mind and body.',
      'Sushruta’s plastic surgery, rhinoplasty, cataracts, and 120+ surgical instruments.'
    ],
    historicalImpact: 'World’s oldest holistic medical system focusing on preventative health, immunity (Ojas), and mind-body harmony.',
    scriptureReferences: ['Atharvaveda (Upaveda of Atharvaveda)'],
    keyInventionsOrConcepts: ['Rhinoplasty surgery', 'Herbal pharmacology', 'Pulse diagnosis (Nadi Pariksha)', 'Panchakarma detoxification']
  },
  {
    id: 'ks-ganita',
    systemName: 'Ganita Shastra (Mathematics & Astronomy)',
    sanskritName: 'गणितशास्त्रम् खगोलविज्ञानं च',
    category: 'Scientific & Mathematical',
    foundationalTexts: ['Aryabhatiya', 'Brahmasphutasiddhanta', 'Lilavati', 'Siddhanta Shiromani'],
    legendaryPioneers: ['Aryabhata', 'Brahmagupta', 'Bhaskaracharya II', 'Pingala', 'Madhava of Sangamagrama'],
    corePrinciples: [
      'Decimal place-value system and invention of Zero (Shunya).',
      'Calculations of Pi (π) to 4 decimal places by Aryabhata.',
      'Kerala School of Astronomy: Infinite series for Sine and Cosine centuries before Newton/Leibniz.',
      'Gravity (Gurutvakarshana) discussed by Bhaskaracharya 500 years before Newton.'
    ],
    historicalImpact: 'Laid the foundational framework for global mathematics through trade routes to Arabia and Europe.',
    scriptureReferences: ['Sulba Sutras (Geometry of Vedic Altar construction)'],
    keyInventionsOrConcepts: ['Zero & Decimal System', 'Binary system (Pingala Chandas)', 'Calculus & Infinite Series', 'Heliocentric planetary models']
  },
  {
    id: 'ks-natya',
    systemName: 'Natyashastra & Classical Performing Arts',
    sanskritName: 'नाट्यशास्त्रम् संगीतं च',
    category: 'Arts & Aesthetics',
    foundationalTexts: ['Natyashastra of Bharata Muni', 'Sangita Ratnakara of Sarangadeva'],
    legendaryPioneers: ['Bharata Muni', 'Sarangadeva', 'Tandu Muni'],
    corePrinciples: [
      'Navarasa Theory: 9 fundamental aesthetic emotions (Shringara, Hasya, Karuna, Raudra, Veera, Bhayanaka, Bhibhatsa, Adbhuta, Shanta).',
      'Microtonal Swara system (22 Shrutis) forming basis of Indian Classical Music (Hindustani & Carnatic).',
      'Mudra (hand gestures), Abhinaya (expression), and Tala (rhythmic cycles).'
    ],
    historicalImpact: 'Comprehensive encyclopedia of theatre, dance, music, stage design, and aesthetic psychology.',
    scriptureReferences: ['Samaveda (Vedic origin of musical notes)'],
    keyInventionsOrConcepts: ['Rasa Aesthetics Theory', '22 Microtonal Shrutis', 'Comprehensive Mudra Codex', 'Drama Structure']
  },
  {
    id: 'ks-artha',
    systemName: 'Arthashastra (Statecraft, Economics & Security)',
    sanskritName: 'अर्थशास्त्रम् नीतिमीमांसा च',
    category: 'Governance & Architecture',
    foundationalTexts: ['Arthashastra of Chanakya (Kautilya)', 'Nitisara of Kamandaka', 'Sukraniti'],
    legendaryPioneers: ['Chanakya (Kautilya)', 'Kamandaka'],
    corePrinciples: [
      'Saptanga Theory of State: Swami (King), Amatya (Ministers), Janapada (Territory/People), Durg (Fort), Kosha (Treasury), Danda (Army), Mitra (Ally).',
      'Taxation policy balancing economic growth and social welfare.',
      'Diplomatic doctrine of Mandala Theory (concentric geopolitical rings).'
    ],
    historicalImpact: 'Masterpiece of ancient statecraft, economic organization, intelligence services, and foreign policy.',
    scriptureReferences: ['Mahabharata (Shanti Parva - Rajadharma)'],
    keyInventionsOrConcepts: ['Saptanga State Model', 'Mandala Geopolitics', 'Market Regulation & Taxation', 'Public Infrastructure']
  }
];
