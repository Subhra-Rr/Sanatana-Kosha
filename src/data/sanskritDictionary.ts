export interface SanskritDictionaryEntry {
  id: string;
  word: string;
  sanskrit: string;
  transliteration: string;
  dhatu?: string; // Root word
  dhatuMeaning?: string;
  grammar: string; // e.g. "Noun, Neuter", "Verb, Present 3rd Person"
  englishMeaning: string;
  detailedDefinition: string;
  exampleVerses: {
    scripture: string;
    verseRef: string;
    sanskritText: string;
    translation: string;
  }[];
  relatedScriptures: string[];
  etymologyNotes?: string;
}

export const SANSKRIT_DICTIONARY_DATA: SanskritDictionaryEntry[] = [
  {
    id: 'dict-dharma',
    word: 'dharma',
    sanskrit: 'धर्म',
    transliteration: 'dharma',
    dhatu: 'धृ (dhṛ)',
    dhatuMeaning: 'To sustain, uphold, or support',
    grammar: 'Noun, Masculine (Stem: dharman)',
    englishMeaning: 'Cosmic order, inherent righteousness, duty, virtue, sacred law',
    detailedDefinition: 'Dharma signifies that which holds together the universe and maintains cosmic, social, and moral harmony. It includes universal ethical duties (Sadhana Dharma) as well as contextual duties according to life stage and role (Svadharma).',
    exampleVerses: [
      {
        scripture: 'Bhagavad Gita',
        verseRef: '4.7',
        sanskritText: 'यदा यदा हि धर्मस्य ग्लानिर्भवति भारत । अभ्युत्थानमधर्मस्य तदात्मानं सृजाम्यहम् ॥',
        translation: 'Whenever there is a decline of righteousness (dharma) and rise of unrighteousness, O Bharata, then I manifest Myself.'
      },
      {
        scripture: 'Brihadaranyaka Upanishad',
        verseRef: '1.4.14',
        sanskritText: 'धर्मात्परं नास्ति तद्यदेतत्क्षत्रस्य क्षत्रं यद्धर्मस्तस्माद्धर्मात्परं नास्ति ।',
        translation: 'There is nothing higher than Dharma. Verily, Dharma is the sovereign authority above all worldly kings.'
      }
    ],
    relatedScriptures: ['Rigveda', 'Manusmriti', 'Mahabharata', 'Bhagavad Gita'],
    etymologyNotes: 'Derived from root dhṛ + suffix man. Literally means "that which sustains the world".'
  },
  {
    id: 'dict-atman',
    word: 'atman',
    sanskrit: 'आत्मन्',
    transliteration: 'ātman',
    dhatu: 'अत् (at) / आप् (āp)',
    dhatuMeaning: 'To move constantly / to pervade all',
    grammar: 'Noun, Masculine (Stem: ātman)',
    englishMeaning: 'The true Self, immortal soul, pure consciousness beyond body and mind',
    detailedDefinition: 'Atman is the immortal, unchanging, eternal principle within every individual being. In Advaita Vedanta, Atman is non-different from Brahman (the Supreme Reality).',
    exampleVerses: [
      {
        scripture: 'Katha Upanishad',
        verseRef: '1.2.18',
        sanskritText: 'न जायते म्रियते वा विपश्चिन्नायं कुतश्चिन्न बभूव कश्चित् । अजो नित्यः शाश्वतोऽयं पुराणो न हन्यते हन्यमाने शरीरे ॥',
        translation: 'The Self is neither born, nor does it die. It did not originate from anything. It is unborn, eternal, everlasting, and ancient. It is not slain when the body is slain.'
      }
    ],
    relatedScriptures: ['Chandogya Upanishad', 'Katha Upanishad', 'Bhagavad Gita', 'Brahma Sutras'],
    etymologyNotes: 'Root "at" (perpetual motion) or "āp" (pervading all space).'
  },
  {
    id: 'dict-karma',
    word: 'karma',
    sanskrit: 'कर्म',
    transliteration: 'karma',
    dhatu: 'कृ (kṛ)',
    dhatuMeaning: 'To do, make, or act',
    grammar: 'Noun, Neuter (Stem: karman)',
    englishMeaning: 'Action, deed, cause and effect, moral law of consequences',
    detailedDefinition: 'Karma encompasses all intentional physical, vocal, and mental actions, along with their inevitable moral consequences across births. Nishkama Karma refers to performing duty without selfish attachment to fruits.',
    exampleVerses: [
      {
        scripture: 'Bhagavad Gita',
        verseRef: '2.47',
        sanskritText: 'कर्मण्येवाधिकारस्ते मा फलेषु कदाचन । मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि ॥',
        translation: 'You have a right to perform your prescribed duty, but never to its fruits. Let not the fruits of action be your motive, nor be attached to inaction.'
      }
    ],
    relatedScriptures: ['Yajurveda', 'Bhagavad Gita', 'Yoga Sutras', 'Brahma Sutras'],
    etymologyNotes: 'Root kṛ + suffix man.'
  },
  {
    id: 'dict-moksha',
    word: 'moksha',
    sanskrit: 'मोक्ष',
    transliteration: 'mokṣa',
    dhatu: 'मुच् (muc)',
    dhatuMeaning: 'To release, liberate, or free',
    grammar: 'Noun, Masculine',
    englishMeaning: 'Liberation, spiritual freedom, release from the cycle of birth and rebirth (samsara)',
    detailedDefinition: 'Moksha is the ultimate human goal (Purushartha) in Hindu philosophy, representing complete liberation from ignorance (Avidya), suffering, and worldly bondage upon realizing the Supreme Reality.',
    exampleVerses: [
      {
        scripture: 'Mundaka Upanishad',
        verseRef: '3.2.9',
        sanskritText: 'स यो ह वै तत्परमं ब्रह्म वेद ब्रह्मैव भवति ।',
        translation: 'He who knows that Supreme Brahman becomes Brahman indeed; he attains eternal Moksha.'
      }
    ],
    relatedScriptures: ['Mundaka Upanishad', 'Svetasvatara Upanishad', 'Bhagavad Gita', 'Samkhya Karika'],
    etymologyNotes: 'Desiderative form of root muc (to set free).'
  },
  {
    id: 'dict-satya',
    word: 'satya',
    sanskrit: 'सत्य',
    transliteration: 'satya',
    dhatu: 'अस् (as) / सत् (sat)',
    dhatuMeaning: 'To be / that which exists eternally',
    grammar: 'Noun / Adjective, Neuter',
    englishMeaning: 'Truth, absolute reality, honesty, unchangeable principle',
    detailedDefinition: 'Satya represents truthfulness in thought, word, and deed, as well as the Ultimate Unchanging Reality itself. India’s national motto "Satyameva Jayate" is taken from the Mundaka Upanishad.',
    exampleVerses: [
      {
        scripture: 'Mundaka Upanishad',
        verseRef: '3.1.6',
        sanskritText: 'सत्यमेव जयते नानृतं सत्येन पन्था विततो देवयानः ।',
        translation: 'Truth alone triumphs, not falsehood. Through truth the divine path is laid out.'
      }
    ],
    relatedScriptures: ['Rigveda', 'Mundaka Upanishad', 'Taittiriya Upanishad'],
    etymologyNotes: 'Formed from "sat" (real existence) + "ya".'
  },
  {
    id: 'dict-yoga',
    word: 'yoga',
    sanskrit: 'योग',
    transliteration: 'yoga',
    dhatu: 'युज् (yuj)',
    dhatuMeaning: 'To join, unite, or concentrate',
    grammar: 'Noun, Masculine',
    englishMeaning: 'Union with the Supreme, mental stillness, disciplined spiritual practice',
    detailedDefinition: 'Yoga means the union of the individual self with the Supreme Consciousness, as well as the system of mental and physical disciplines defined by Sage Patanjali to still the fluctuations of the mind (chitta-vritti-nirodha).',
    exampleVerses: [
      {
        scripture: 'Yoga Sutras of Patanjali',
        verseRef: '1.2',
        sanskritText: 'योगश्चित्तवृत्तिनिरोधः ॥',
        translation: 'Yoga is the restraint of the modifications and fluctuations of the mind-stuff.'
      }
    ],
    relatedScriptures: ['Yoga Sutras', 'Katha Upanishad', 'Bhagavad Gita'],
    etymologyNotes: 'Root yuj (cognate with English "yoke").'
  },
  {
    id: 'dict-bhakti',
    word: 'bhakti',
    sanskrit: 'भक्ति',
    transliteration: 'bhakti',
    dhatu: 'भज् (bhaj)',
    dhatuMeaning: 'To adore, worship, participate, share',
    grammar: 'Noun, Feminine',
    englishMeaning: 'Devotion, divine love, selfless surrender to the Supreme',
    detailedDefinition: 'Bhakti is intense, unselfish love and reverence directed towards the Divine. In the Narada Bhakti Sutras and Bhagavad Gita, Bhakti is recognized as the most direct path to spiritual realization in Kali Yuga.',
    exampleVerses: [
      {
        scripture: 'Bhagavad Gita',
        verseRef: '9.26',
        sanskritText: 'पत्रं पुष्पं फलं तोयं यो मे भक्त्या प्रयच्छति । तदहं भक्त्युपहृतमश्नामि प्रयतात्मनः ॥',
        translation: 'Whosoever offers to Me with devotion a leaf, a flower, a fruit, or water, that offering of love I accept.'
      }
    ],
    relatedScriptures: ['Srimad Bhagavatam', 'Bhagavad Gita', 'Narada Bhakti Sutras', 'Shvetashvatara Upanishad'],
    etymologyNotes: 'Root bhaj + suffix ktin.'
  },
  {
    id: 'dict-brahman',
    word: 'brahman',
    sanskrit: 'ब्रह्मन्',
    transliteration: 'brahman',
    dhatu: 'बृह् (bṛh)',
    dhatuMeaning: 'To grow, expand, swell, or pervade everywhere',
    grammar: 'Noun, Neuter (Stem: brahman)',
    englishMeaning: 'The Supreme Ultimate Reality, boundless infinite consciousness',
    detailedDefinition: 'Brahman is the non-dual, infinite, eternal, transcendent, and immanent ground of all existence in Upanishadic philosophy. Sat-Chit-Ananda (Existence-Knowledge-Bliss) describes its essential nature.',
    exampleVerses: [
      {
        scripture: 'Taittiriya Upanishad',
        verseRef: '2.1.1',
        sanskritText: 'सत्यं ज्ञानमनन्तं ब्रह्म ।',
        translation: 'Brahman is Truth, Consciousness, and Infinity.'
      }
    ],
    relatedScriptures: ['Chandogya Upanishad', 'Taittiriya Upanishad', 'Mandukya Upanishad', 'Brahma Sutras'],
    etymologyNotes: 'Root bṛh (to expand) + suffix manin.'
  },
  {
    id: 'dict-jnana',
    word: 'jnana',
    sanskrit: 'ज्ञान',
    transliteration: 'jñāna',
    dhatu: 'ज्ञा (jñā)',
    dhatuMeaning: 'To know, comprehend, or perceive',
    grammar: 'Noun, Neuter',
    englishMeaning: 'Spiritual wisdom, intuitive realization of the Self and Brahman',
    detailedDefinition: 'Jnana refers not merely to intellectual knowledge (Vidyā), but to direct, experiential realization of spiritual truth that destroys ignorance (Avidya) and releases the soul from bondage.',
    exampleVerses: [
      {
        scripture: 'Bhagavad Gita',
        verseRef: '4.38',
        sanskritText: 'न हि ज्ञानेन सदृशं पवित्रमिह विद्यते ।',
        translation: 'In this world, there is no purifier equivalent to divine spiritual wisdom.'
      }
    ],
    relatedScriptures: ['Upanishads', 'Bhagavad Gita', 'Yoga Vasistha', 'Vivekachudamani'],
    etymologyNotes: 'Root jñā + suffix lyu. Cognate with Greek gnosis and English know.'
  },
  {
    id: 'dict-yajna',
    word: 'yajna',
    sanskrit: 'यज्ञ',
    transliteration: 'yajña',
    dhatu: 'यज् (yaj)',
    dhatuMeaning: 'To worship, sacrifice, offer, honor',
    grammar: 'Noun, Masculine',
    englishMeaning: 'Sacred ritual, sacrificial offering, act of selfless worship or service',
    detailedDefinition: 'Yajna signifies both outer Vedic fire ceremonies (Soma, Havir) and inner mental or ethical sacrifices where individual ego is surrendered for universal welfare (Lokasangraha).',
    exampleVerses: [
      {
        scripture: 'Rigveda',
        verseRef: '1.1.1',
        sanskritText: 'अग्निमीळे पुरोहितं यज्ञस्य देवमृत्विजम् । होतारं रत्नधातमम् ॥',
        translation: 'I praise Agni, the priest of the sacrifice, the divine minister who offers worship, bestower of greatest wealth.'
      }
    ],
    relatedScriptures: ['Rigveda', 'Shatapatha Brahmana', 'Bhagavad Gita'],
    etymologyNotes: 'Root yaj + suffix na.'
  },
  {
    id: 'dict-ahimsa',
    word: 'ahimsa',
    sanskrit: 'अहिंसा',
    transliteration: 'ahiṁsā',
    dhatu: 'हिंस् (hiṁs)',
    dhatuMeaning: 'To injure, strike, or harm',
    grammar: 'Noun, Feminine',
    englishMeaning: 'Non-violence, non-injury in thought, word, and deed',
    detailedDefinition: 'Ahimsa is the supreme ethical discipline (Paramo Dharma) across Indian traditions, requiring complete refrainment from causing harm to any living entity in body, speech, or mind.',
    exampleVerses: [
      {
        scripture: 'Mahabharata (Anushasana Parva)',
        verseRef: '116.37',
        sanskritText: 'अहिंसा परमो धर्मस्तथाहिंसा परं तपः ।',
        translation: 'Non-violence is the highest duty, non-violence is the supreme austerity.'
      }
    ],
    relatedScriptures: ['Mahabharata', 'Yoga Sutras', 'Chandogya Upanishad'],
    etymologyNotes: 'Prefix a (non) + hiṁsā (harming).'
  },
  {
    id: 'dict-bhashya',
    word: 'bhashya',
    sanskrit: 'भाष्य',
    transliteration: 'bhāṣya',
    dhatu: 'भाष (bhāṣ)',
    dhatuMeaning: 'To speak, articulate, expound',
    grammar: 'Noun, Neuter',
    englishMeaning: 'Exposition, authoritative commentary on foundational sutras or scriptures',
    detailedDefinition: 'Bhashya is an exhaustive, scholarly commentary that interprets concise Sutras word-by-word while raising Purvapaksha (objections) and establishing Siddhanta (conclusive truths). Famous examples include Shankara Bhashya on Brahma Sutras.',
    exampleVerses: [
      {
        scripture: 'Brahma Sutra Shankara Bhashya',
        verseRef: '1.1.1',
        sanskritText: 'अथातो ब्रह्मजिज्ञासा ॥ सत्यानृते मिथुनीकृत्य "अहमिदम्", "ममेदम्" इति नैसर्गिकः लोकव्यवहारः ।',
        translation: 'Now, therefore, arises the inquiry into Brahman. Coupling truth and falsehood as "I am this" and "This is mine" is natural worldly superimposition.'
      }
    ],
    relatedScriptures: ['Brahma Sutras', 'Yogasutra Bhashya', 'Mahabhashya of Patanjali'],
    etymologyNotes: 'Root bhāṣ + suffix ṇyat.'
  },
  {
    id: 'dict-pramana',
    word: 'pramana',
    sanskrit: 'प्रमाण',
    transliteration: 'pramāṇa',
    dhatu: 'मा (mā)',
    dhatuMeaning: 'To measure, quantify, ascertain',
    grammar: 'Noun, Neuter',
    englishMeaning: 'Valid means of knowledge, epistemology, source of true perception',
    detailedDefinition: 'Pramana refers to valid epistemological means of acquiring true knowledge in Indian philosophy. The major Pramanas are Pratyaksha (direct perception), Anumana (logical inference), and Shabda (scriptural testimony).',
    exampleVerses: [
      {
        scripture: 'Tattvasamasa / Nyaya Sutras',
        verseRef: '1.1.3',
        sanskritText: 'प्रत्यक्षानुमानोपमानशब्दाः प्रमाणानि ॥',
        translation: 'Perception, inference, comparison, and verbal testimony are the valid means of knowledge.'
      }
    ],
    relatedScriptures: ['Nyaya Sutras', 'Sankhya Karika', 'Vedanta Paribhasha'],
    etymologyNotes: 'Prefix pra + root mā + suffix lyu.'
  }
];
