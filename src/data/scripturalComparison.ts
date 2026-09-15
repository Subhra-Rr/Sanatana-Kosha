export interface ScripturalConceptComparison {
  conceptId: string;
  conceptName: string;
  sanskritName: string;
  coreQuestion: string;
  summaryOverview: string;
  textComparisons: {
    scriptureCategory: 'Vedas' | 'Upanishads' | 'Bhagavad Gita' | 'Puranas' | 'Six Darshanas';
    keyTextName: string;
    viewpointSummary: string;
    representativeQuote: {
      sanskrit: string;
      translation: string;
      reference: string;
    };
  }[];
}

export const SCRIPTURAL_COMPARISON_DATA: ScripturalConceptComparison[] = [
  {
    conceptId: 'comp-atman',
    conceptName: 'Atman (The True Self)',
    sanskritName: 'आत्मन्',
    coreQuestion: 'What is the true nature of the individual self and its relation to the Cosmos?',
    summaryOverview: 'While early Vedic hymns view the soul as a divine spark, the Upanishads establish non-dual identity (Atman = Brahman), the Gita emphasizes its indestructible nature, Puranas highlight devotion of the soul to Bhagavan, and Nyaya/Sankhya view it as distinct individual purushas.',
    textComparisons: [
      {
        scriptureCategory: 'Vedas',
        keyTextName: 'Rigveda (10.90 Purusha Sukta)',
        viewpointSummary: 'The cosmic spirit (Purusha) pervades all creation; individual life is an immortal fraction of cosmic consciousness.',
        representativeQuote: {
          sanskrit: 'पादोऽस्य विश्वा भूतानि त्रिपादस्यामृतं दिवि ॥',
          translation: 'One-fourth of the Purusha is all created beings; three-fourths is immortal in heaven.',
          reference: 'Rigveda 10.90.3'
        }
      },
      {
        scriptureCategory: 'Upanishads',
        keyTextName: 'Chandogya & Katha Upanishad',
        viewpointSummary: 'The Atman is pure eternal consciousness, non-different from the Supreme Reality Brahman (Tat Tvam Asi).',
        representativeQuote: {
          sanskrit: 'तत्त्वमसि श्वेतकेतो ॥',
          translation: 'That Thou Art, O Svetaketu.',
          reference: 'Chandogya Upanishad 6.8.7'
        }
      },
      {
        scriptureCategory: 'Bhagavad Gita',
        keyTextName: 'Bhagavad Gita (Chapter 2)',
        viewpointSummary: 'The Atman is eternal, indestructible, beyond fire, water, and weapon, casting off bodies like worn-out garments.',
        representativeQuote: {
          sanskrit: 'नैनं छिन्दन्ति शस्त्राणि नैनं दहति पावकः ।',
          translation: 'Weapons cannot cleave the Self, fire cannot burn It, water cannot wet It, wind cannot dry It.',
          reference: 'Bhagavad Gita 2.23'
        }
      },
      {
        scriptureCategory: 'Puranas',
        keyTextName: 'Srimad Bhagavatam',
        viewpointSummary: 'The Jivatma is an eternal part (Amsha) of the Supreme Lord Ishvara, meant for joyful loving devotional service.',
        representativeQuote: {
          sanskrit: 'ममैवांशो जीवलोके जीवभूतः सनातनः ।',
          translation: 'An eternal fraction of Myself becomes the living soul in the material world.',
          reference: 'Bhagavatam / Gita 15.7'
        }
      },
      {
        scriptureCategory: 'Six Darshanas',
        keyTextName: 'Samkhya & Advaita Vedanta',
        viewpointSummary: 'Samkhya posits countless independent Purushas; Advaita posits one undivided Atman reflected across minds.',
        representativeQuote: {
          sanskrit: 'न निरोधो न चोत्पत्तिर्न बद्धो न च साधकः ।',
          translation: 'There is no dissolution, no creation, no bound soul, and no seeker after liberation in absolute reality.',
          reference: 'Gaudapada Karika 2.32'
        }
      }
    ]
  },
  {
    conceptId: 'comp-dharma',
    conceptName: 'Dharma (Cosmic Order & Righteous Duty)',
    sanskritName: 'धर्म',
    coreQuestion: 'How is righteousness defined, sustained, and fulfilled across human existence?',
    summaryOverview: 'Evolving from Rita (cosmic harmony) in the Vedas to Svadharma in the Gita, Dharma balances societal duty, personal ethics, and spiritual liberation.',
    textComparisons: [
      {
        scriptureCategory: 'Vedas',
        keyTextName: 'Rigveda & Atharvaveda',
        viewpointSummary: 'Dharma manifests as Rta—the cosmic rhythm of nature, seasons, and truth that sustains gods and mortals alike.',
        representativeQuote: {
          sanskrit: 'ऋतेन मित्रावरुणावृतावृधावृतस्पृशा ।',
          translation: 'Mitra and Varuna increase and touch cosmic truth through Rta (Dharma).',
          reference: 'Rigveda 1.2.8'
        }
      },
      {
        scriptureCategory: 'Upanishads',
        keyTextName: 'Brihadaranyaka Upanishad',
        viewpointSummary: 'Dharma is the supreme law above kings, identified with absolute Truth (Satya).',
        representativeQuote: {
          sanskrit: 'यो वै स धर्मः सत्यं वै तत् ।',
          translation: 'Verily, that which is Dharma is Satya (Truth).',
          reference: 'Brihadaranyaka Upanishad 1.4.14'
        }
      },
      {
        scriptureCategory: 'Bhagavad Gita',
        keyTextName: 'Bhagavad Gita (Chapter 3 & 18)',
        viewpointSummary: 'Svadharma (one’s own duty performed without attachment) is superior to another’s duty performed perfectly.',
        representativeQuote: {
          sanskrit: 'श्रेयान्स्वधर्मो विगुणः परधर्मात्स्वनुष्ठितात् ।',
          translation: 'Better is one’s own duty, though devoid of merit, than the duty of another well performed.',
          reference: 'Bhagavad Gita 3.35'
        }
      },
      {
        scriptureCategory: 'Puranas',
        keyTextName: 'Vishnu Purana & Mahabharata',
        viewpointSummary: 'Dharma is portrayed through epic narrative stories, demonstrating Ahimsa, Satya, and compassion in action.',
        representativeQuote: {
          sanskrit: 'अहिंसा परमो धर्मः धर्महिंसा तथैव च ।',
          translation: 'Non-violence is the highest Dharma, and defending Dharma through righteous courage is equally sacred.',
          reference: 'Mahabharata Anushasana Parva'
        }
      },
      {
        scriptureCategory: 'Six Darshanas',
        keyTextName: 'Mimamsa & Vaisheshika',
        viewpointSummary: 'Mimamsa defines Dharma as actions enjoined by Vedic imperatives (Codana); Vaisheshika defines it as that which leads to prosperity and liberation.',
        representativeQuote: {
          sanskrit: 'यतोऽभ्युदयनिःश्रेयससिद्धिः स धर्मः ॥',
          translation: 'That from which results welfare in this world and the highest supreme good (liberation) is Dharma.',
          reference: 'Vaisheshika Sutra 1.1.2'
        }
      }
    ]
  },
  {
    conceptId: 'comp-moksha',
    conceptName: 'Moksha (Liberation & Ultimate Peace)',
    sanskritName: 'मोक्ष',
    coreQuestion: 'What is the ultimate state of spiritual freedom and how is it attained?',
    summaryOverview: 'From the blissful heavenly realms of Vedic Samhitas to Jivanmukti (liberation while living) in Upanishads and Advaita, and eternal service in Vaikuntha in Bhakti traditions.',
    textComparisons: [
      {
        scriptureCategory: 'Upanishads',
        keyTextName: 'Mundaka & Mandukya Upanishad',
        viewpointSummary: 'Moksha is the complete destruction of ignorance (Avidya) and realizing one’s inherent non-dual identity with Brahman.',
        representativeQuote: {
          sanskrit: 'भिद्यते हृदयग्रन्थिश्छिद्यन्ते सर्वसंशयाः ।',
          translation: 'The knots of the heart are rent asunder, all doubts cleared, and karma dissolved when Supreme Reality is seen.',
          reference: 'Mundaka Upanishad 2.2.8'
        }
      },
      {
        scriptureCategory: 'Bhagavad Gita',
        keyTextName: 'Bhagavad Gita (Chapter 18)',
        viewpointSummary: 'Attained through Jnana (wisdom), Bhakti (surrender), or Nishkama Karma; ultimate freedom in God-consciousness.',
        representativeQuote: {
          sanskrit: 'सर्वधर्मान्परित्यज्य मामेकं शरणं व्रज ।',
          translation: 'Abandon all forms of duty and surrender unto Me alone; I shall liberate you from all sins, do not fear.',
          reference: 'Bhagavad Gita 18.66'
        }
      },
      {
        scriptureCategory: 'Six Darshanas',
        keyTextName: 'Nyaya-Vaisheshika & Sankhya',
        viewpointSummary: 'Nyaya views liberation (Apavarga) as cessation of pain; Sankhya views Kaivalya as Purusha separating from Prakriti.',
        representativeQuote: {
          sanskrit: 'तदत्यन्तविमोक्षोऽपवर्गः ॥',
          translation: 'Apavarga (liberation) is absolute freedom from all suffering and pain.',
          reference: 'Nyaya Sutra 1.1.22'
        }
      }
    ]
  }
];
