import { SanskritLesson } from '../types';

export const SANSKRIT_LESSONS_DATA: SanskritLesson[] = [
  {
    id: 'sans-vowels',
    title: 'Svara (Vowels - स्वरशास्त्रम्)',
    category: 'Alphabet',
    level: 'Beginner',
    content: 'Sanskrit vowels are pure independent sounds originating from distinct vocal positions: Kanthya (Throat), Talavya (Palate), Murdhanya (Cerebral), Dantya (Dental), and Oshthya (Lips).',
    examples: [
      { sanskrit: 'अ (a)', transliteration: 'a', meaning: 'Short vowel as in "around" (Guttural)', audioPronunciationText: 'a' },
      { sanskrit: 'आ (ā)', transliteration: 'ā', meaning: 'Long vowel as in "father"', audioPronunciationText: 'aa' },
      { sanskrit: 'इ (i)', transliteration: 'i', meaning: 'Short palatal vowel as in "pin"', audioPronunciationText: 'i' },
      { sanskrit: 'ई (ī)', transliteration: 'ī', meaning: 'Long palatal vowel as in "machine"', audioPronunciationText: 'ee' },
      { sanskrit: 'उ (u)', transliteration: 'u', meaning: 'Short labial vowel as in "put"', audioPronunciationText: 'u' },
      { sanskrit: 'ऊ (ū)', transliteration: 'ū', meaning: 'Long labial vowel as in "rule"', audioPronunciationText: 'oo' },
      { sanskrit: 'ऋ (ṛ)', transliteration: 'ṛ', meaning: 'Cerebral vocalic R sound', audioPronunciationText: 'ri' },
      { sanskrit: 'ए (e)', transliteration: 'e', meaning: 'Diphthong as in "they"', audioPronunciationText: 'ey' },
      { sanskrit: 'ऐ (ai)', transliteration: 'ai', meaning: 'Diphthong as in "aisle"', audioPronunciationText: 'ai' },
      { sanskrit: 'ओ (o)', transliteration: 'o', meaning: 'Diphthong as in "go"', audioPronunciationText: 'o' },
      { sanskrit: 'औ (au)', transliteration: 'au', meaning: 'Diphthong as in "owl"', audioPronunciationText: 'au' }
    ]
  },
  {
    id: 'sans-consonants',
    title: 'Vyanjana (Consonants - व्यञ्जनवर्णमाला)',
    category: 'Alphabet',
    level: 'Beginner',
    content: 'Consonants are arranged in a scientific 5x5 grid (Vargas) based on articulation point, followed by Antahsthas (Semivowels) and Ushmanes (Sibilants/Aspirates).',
    examples: [
      { sanskrit: 'क वर्ग (Kavarga)', transliteration: 'ka, kha, ga, gha, ṅa', meaning: 'Kanthya (Guttural / Throat consonants)', audioPronunciationText: 'ka kha ga gha nga' },
      { sanskrit: 'च वर्ग (Chavarga)', transliteration: 'ca, cha, ja, jha, ña', meaning: 'Talavya (Palatal / Hard palate consonants)', audioPronunciationText: 'cha chha ja jha nya' },
      { sanskrit: 'ट वर्ग (Tavarga)', transliteration: 'ṭa, ṭha, ḍa, ḍha, ṇa', meaning: 'Murdhanya (Retroflex / Roof of mouth consonants)', audioPronunciationText: 'ta tha da dha na' },
      { sanskrit: 'त वर्ग (Tavarga Dental)', transliteration: 'ta, tha, da, dha, na', meaning: 'Dantya (Dental / Teeth consonants)', audioPronunciationText: 'ta tha da dha na' },
      { sanskrit: 'प वर्ग (Pavarga)', transliteration: 'pa, pha, ba, bha, ma', meaning: 'Oshthya (Labial / Lip consonants)', audioPronunciationText: 'pa pha ba bha ma' }
    ]
  },
  {
    id: 'sans-subhashitani',
    title: 'Subhashita Treasury (सुभाषितानि)',
    category: 'Subhashita',
    level: 'Intermediate',
    content: 'Subhashitas are gems of ethical wisdom, mental peace, and practical conduct composed in classical meters.',
    examples: [
      {
        sanskrit: 'विद्या ददाति विनयं विनयाद्याति पात्रताम् ।\nपात्रत्वाद्धनमाप्नोति धनाद्धर्मं ततः सुखम् ॥',
        transliteration: 'vidyā dadāti vinayaṁ vinayād yāti pātratām |\npātratvād dhanam āpnoti dhanād dharmaṁ tataḥ sukham ||',
        meaning: 'Knowledge bestows humility; from humility comes worthiness; from worthiness comes prosperity; from ethical prosperity comes Dharma, and from Dharma comes genuine joy.',
        audioPronunciationText: 'Vidya dadati vinayam'
      },
      {
        sanskrit: 'उद्यमेन हि सिध्यन्ति कार्याणि न मनोरथैः ।\nन हि सुप्तस्य सिंहस्य प्रविशन्ति मुखे मृगाः ॥',
        transliteration: 'udyamena hi sidhyanti kāryāṇi na manorathaiḥ |\nna hi suptasya siṁhasya praviśanti mukhe mṛgāḥ ||',
        meaning: 'Tasks are accomplished through diligent effort alone, not through mere idle wishing. Deer do not enter the mouth of a sleeping lion voluntarily!',
        audioPronunciationText: 'Udyamena hi sidhyanti'
      }
    ]
  }
];
