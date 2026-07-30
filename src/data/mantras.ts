export interface DeityMantra {
  id: string;
  deity: string;
  deitySanskrit: string;
  category: 'Shiva' | 'Vishnu & Avatars' | 'Devi & Shakti' | 'Ganesha & Hanuman' | 'Vedic & Solar' | 'Health & Wisdom';
  title: string;
  sanskrit: string;
  transliteration: string;
  translation: string;
  significance: string;
  chantingBenefits: string;
  bestTime?: string;
  sourceScripture?: string;
}

export const MANTRAS_DATA: DeityMantra[] = [
  // ==================== SHIVA ====================
  {
    id: 'mantra-maha-mrityunjaya',
    deity: 'Lord Shiva',
    deitySanskrit: 'भगवान् शिवः',
    category: 'Shiva',
    title: 'Maha Mrityunjaya Mantra (महामृत्युञ्जय मन्त्र)',
    sanskrit: `ॐ त्र्यम्बकं यजामहे सुगन्धिं पुष्टिवर्धनम्।\nउर्वारुकमिव बन्धनान्मृत्योर्मुक्षीय माऽमृतात्॥`,
    transliteration: 'Oṁ Tryambakaṁ Yajāmahe Sugandhiṁ Puṣṭi-Vardhanam |\nUrvārukam-Iva Bandhanān-Mṛtyor-Mukṣīya Mā-[A]mṛtāt ||',
    translation: 'We worship the Three-Eyed Lord (Shiva), who is fragrant and nourishes all beings. May He liberate us from death for the sake of immortality, just as a ripe cucumber is severed from its stalk.',
    significance: 'Revealed to Rishi Markandeya in Rigveda (7.59.12). Known as the Moksha Mantra or Sanjeevani Mantra, invoking Lord Shiva as the conqueror of mortality and fear.',
    chantingBenefits: 'Bestows health, vitality, protection from accidents and illness, mental peace, and spiritual liberation.',
    bestTime: 'Brahma Muhurta (4:00 AM – 6:00 AM) or during Pradosha Kala.',
    sourceScripture: 'Rigveda 7.59.12 & Yajurveda'
  },
  {
    id: 'mantra-shiva-panchakshari',
    deity: 'Lord Shiva',
    deitySanskrit: 'भगवान् शिवः',
    category: 'Shiva',
    title: 'Shiva Panchakshari Mantra (पञ्चाक्षरी मन्त्र)',
    sanskrit: `ॐ नमः शिवाय॥`,
    transliteration: 'Oṁ Namaḥ Śivāya',
    translation: 'Om, I bow to Lord Shiva — the auspicious, pure, and supreme consciousness residing in all.',
    significance: 'The five syllables Na-Ma-Śi-Vā-Ya represent the five cosmic elements (Earth, Water, Fire, Air, Ether) and the five acts of Creation, Preservation, Dissolution, Concealment, and Grace.',
    chantingBenefits: 'Purifies the mind, balances the five elements within the body, destroys negative karma, and leads to self-realization.',
    bestTime: 'Anytime, especially during morning sandhya or Mondays.',
    sourceScripture: 'Shri Rudram (Yajurveda Taittiriya Samhita)'
  },
  {
    id: 'mantra-rudra-gayatri',
    deity: 'Lord Shiva / Rudra',
    deitySanskrit: 'भगवान् रुद्रः',
    category: 'Shiva',
    title: 'Rudra Gayatri Mantra (रुद्र गायत्री मन्त्र)',
    sanskrit: `ॐ तत्पुरुषाय विद्महे महादेवाय धीमहि।\nतन्नो रुद्रः प्रचोदयात्॥`,
    transliteration: 'Oṁ Tatpuruṣāya Vidmahe Mahādevāya Dhīmahi |\nTanno Rudraḥ Pracodayāt ||',
    translation: 'Om, let us meditate on the Supreme Being (Tatpurusha), may we contemplate Mahadeva. May Rudra inspire and illuminate our intellect.',
    significance: 'Vedic invocation of Shiva as Mahadeva (the Great God) and Tatpurusha, awakening divine consciousness and intellect.',
    chantingBenefits: 'Calms inner turmoil, bestows courage, clarity of mind, and divine protection.',
    bestTime: 'Dawn or Dusk.',
    sourceScripture: 'Taittiriya Aranyaka 10.1.6'
  },

  // ==================== VISHNU & AVATARS ====================
  {
    id: 'mantra-moola-vishnu',
    deity: 'Lord Vishnu',
    deitySanskrit: 'भगवान् विष्णुः',
    category: 'Vishnu & Avatars',
    title: 'Vishnu Dwadasakshari Mantra (द्वादशाक्षरी मन्त्र)',
    sanskrit: `ॐ नमो भगवते वासुदेवाय॥`,
    transliteration: 'Oṁ Namo Bhagavate Vāsudevāya',
    translation: 'Om, I bow to the Supreme Being, Vasudeva — Lord Vishnu who indwells every atom of the cosmos.',
    significance: 'The supreme 12-syllabled Mukti mantra given by Sage Narada to Dhruva. Vasudeva signifies the divine light illuminating all existence.',
    chantingBenefits: 'Attains liberation (Moksha), freedom from samsara, peace of mind, and divine loving devotion.',
    bestTime: 'Morning or evening prayers, Ekadashi days.',
    sourceScripture: 'Srimad Bhagavatam & Vishnu Purana'
  },
  {
    id: 'mantra-maha-mantra',
    deity: 'Sri Krishna & Radha / Rama',
    deitySanskrit: 'श्रीकृष्णः श्रीरामः च',
    category: 'Vishnu & Avatars',
    title: 'Hare Krishna Maha Mantra (हरे कृष्ण महामन्त्र)',
    sanskrit: `हरे कृष्ण हरे कृष्ण कृष्ण कृष्ण हरे हरे।\nहरे राम हरे राम राम राम हरे हरे॥`,
    transliteration: 'Hare Kṛṣṇa Hare Kṛṣṇa Kṛṣṇa Kṛṣṇa Hare Hare |\nHare Rāma Hare Rāma Rāma Rāma Hare Hare ||',
    translation: 'O Lord Krishna, O Lord Rama, O Divine Energy (Hara/Radha), please engage me in Your transcendental loving service.',
    significance: 'Proclaimed in Kali-Santarana Upanishad as the supreme medicine for spiritual liberation in Kali Yuga.',
    chantingBenefits: 'Cleanses the dust from the mirror of the heart, instills pure bliss, and dissolves anxiety.',
    bestTime: 'Daily japa anytime, especially early morning.',
    sourceScripture: 'Kali-Santarana Upanishad'
  },
  {
    id: 'mantra-rama-taraka',
    deity: 'Lord Rama',
    deitySanskrit: 'भगवान् श्रीरामः',
    category: 'Vishnu & Avatars',
    title: 'Rama Taraka Mantra (तारकमन्त्रम्)',
    sanskrit: `श्रीराम जय राम जय जय राम॥`,
    transliteration: 'Śrī Rāma Jaya Rāma Jaya Jaya Rāma',
    translation: 'Victory to Lord Rama, victory to the supreme Lord who bestows righteousness and bliss.',
    significance: 'Known as the Taraka (ferry) Mantra that carries the soul across the ocean of worldly existence (Samsara). Samarth Ramdas chanted this 13 million times.',
    chantingBenefits: 'Destroys fear and sorrow, bestows righteous strength, mental stability, and inner peace.',
    bestTime: 'Anytime throughout the day.',
    sourceScripture: 'Ramcharitmanas & Padma Purana'
  },
  {
    id: 'mantra-narasimha-kavacha',
    deity: 'Lord Narasimha',
    deitySanskrit: 'भगवान् नृसिंहः',
    category: 'Vishnu & Avatars',
    title: 'Narasimha Maha Mantra (नृसिंह मन्त्र)',
    sanskrit: `उग्रं वीरं महाविष्णुं ज्वलन्तं सर्वतोमुखम्।\nनृसिंहं भीषणं भद्रं मृत्युमृत्युं नमाम्यहम्॥`,
    transliteration: 'Ugraṁ Vīraṁ Mahā-Viṣṇuṁ Jvalantaṁ Sarvatomukham |\nNṛsiṁhaṁ Bhīṣaṇaṁ Bhadraṁ Mṛtyu-Mṛtyuṁ Namāmyaham ||',
    translation: 'I bow to Lord Narasimha, the ferocious and heroic Great Vishnu, whose radiance shines in all directions, terrifying yet benign, who is the death of death itself.',
    significance: 'Powerful protective mantra invoking the half-man, half-lion incarnation of Vishnu who protected devotee Prahlada.',
    chantingBenefits: 'Provides ultimate shield against fear, evil influences, enemy threats, and internal darkness.',
    bestTime: 'Sunset or during times of distress and prayer.',
    sourceScripture: 'Nrisimha Tapani Upanishad'
  },

  // ==================== DEVI & SHAKTI ====================
  {
    id: 'mantra-durga-navarna',
    deity: 'Goddess Durga / Chandi',
    deitySanskrit: 'भगवती दुर्गा',
    category: 'Devi & Shakti',
    title: 'Durga Navarna Mantra (नवार्ण मन्त्र)',
    sanskrit: `ॐ ऐं ह्रीं क्लीं चामुण्डायै विच्चे॥`,
    transliteration: 'Oṁ Aiṁ Hrīṁ Klīṁ Cāmuṇḍāyai Vicce',
    translation: 'Om, I bow to the Divine Mother Chamunda, who embodies Mahasaraswati (Aim), Mahalakshmi (Hreem), and Mahakali (Kleem), liberating the soul.',
    significance: 'The 9-syllabled crown mantra of Sri Durga Saptashati (Devi Mahatmyam), invoking the primal cosmic power of Adishakti.',
    chantingBenefits: 'Bestows courage, removes obstacles, fulfills pure desires, grants wisdom, wealth, and spiritual power.',
    bestTime: 'Navaratri, Tuesdays, Fridays, or early morning.',
    sourceScripture: 'Devi Mahatmyam (Markandeya Purana)'
  },
  {
    id: 'mantra-lakshmi-beeja',
    deity: 'Goddess Lakshmi',
    deitySanskrit: 'देवी महालक्ष्मीः',
    category: 'Devi & Shakti',
    title: 'Maha Lakshmi Beeja Mantra (लक्ष्मी बीज मन्त्र)',
    sanskrit: `ॐ श्रीं ह्रीं क्लीं त्रिभुवन महालक्ष्म्यै अस्माकं दारिद्र्य नाशय प्रचुर धन देहि देहि क्लीं ह्रीं श्रीं ॐ॥`,
    transliteration: 'Oṁ Śrīṁ Hrīṁ Klīṁ Tribhuvana Mahālakṣmyai Asmākaṁ Dāridrya Nāśaya Pracura Dhana Dehi Dehi Klīṁ Hrīṁ Śrīṁ Oṁ',
    translation: 'Om, salutations to Great Lakshmi of the three worlds. Kindly eliminate our poverty and grant abundant auspiciousness, fortune, and spiritual wealth.',
    significance: 'Invokes Mahalakshmi, the embodiment of auspiciousness, grace, outer prosperity, and inner contentment.',
    chantingBenefits: 'Attracts prosperity, harmony, success in endeavors, and destroys poverty of mind and spirit.',
    bestTime: 'Fridays, Deepavali, or morning worship.',
    sourceScripture: 'Lakshmi Tantra & Pancharatra'
  },
  {
    id: 'mantra-saraswati-vandana',
    deity: 'Goddess Saraswati',
    deitySanskrit: 'देवी सरस्वती',
    category: 'Devi & Shakti',
    title: 'Saraswati Vidya Mantra (सरस्वती मन्त्र)',
    sanskrit: `सरस्वति नमस्तुभ्यं वरदे कामरूपिणि।\nविद्यारम्भं करिष्यामि सिद्धिर्भवतु मे सदा॥`,
    transliteration: 'Sarasvati Namastubhyaṁ Varade Kāmarūpiṇi |\nVidyārambhaṁ Kariṣyāmi Siddhir-Bhavatu Me Sadā ||',
    translation: 'O Goddess Saraswati, my humble salutations to You, the bestower of boons and fulfiller of noble wishes. As I begin my studies, grant me divine success always.',
    significance: 'Traditional invocation recited by students, scholars, artists, and seekers of knowledge before embarking on learning.',
    chantingBenefits: 'Enhances memory, concentration, eloquent speech, artistic creativity, and academic excellence.',
    bestTime: 'Before studying or at dawn.',
    sourceScripture: 'Saraswati Stotram'
  },
  {
    id: 'mantra-kali-beeja',
    deity: 'Goddess Kali',
    deitySanskrit: 'देवी महाकाली',
    category: 'Devi & Shakti',
    title: 'Maha Kali Beeja Mantra (महाकाली मन्त्र)',
    sanskrit: `ॐ क्रीं कालिकायै नमः॥`,
    transliteration: 'Oṁ Krīṁ Kālikāyai Namaḥ',
    translation: 'Om, my salutations to Goddess Kalika, the transformer of time and destroyer of ego.',
    significance: 'Seed mantra of Mahakali that liberates the mind from illusion, attachments, and darkness.',
    chantingBenefits: 'Destroys negative tendencies, bestows rapid spiritual evolution, fearlessness, and divine protection.',
    bestTime: 'Amavasya or night worship.',
    sourceScripture: 'Tantra Sara'
  },

  // ==================== GANESHA & HANUMAN ====================
  {
    id: 'mantra-ganesha-moola',
    deity: 'Lord Ganesha',
    deitySanskrit: 'भगवान् श्रीगणेशः',
    category: 'Ganesha & Hanuman',
    title: 'Ganesha Moola Mantra (गणेश मूल मन्त्र)',
    sanskrit: `ॐ गं गणपतये नमः॥`,
    transliteration: 'Oṁ Gaṁ Gaṇapataye Namaḥ',
    translation: 'Om, I bow to Lord Ganapati, the leader of all divine beings and master of auspicious beginnings.',
    significance: 'The root mantra containing the seed syllable "Gam" (Gam Beeja), praised in Ganesh Atharvashirsha.',
    chantingBenefits: 'Removes all internal and external obstacles, bestows wisdom, success in ventures, and auspiciousness.',
    bestTime: 'At the start of any new project, daily morning.',
    sourceScripture: 'Ganesh Atharvashirsha (Atharvaveda)'
  },
  {
    id: 'mantra-ganesha-vakra',
    deity: 'Lord Ganesha',
    deitySanskrit: 'भगवान् श्रीगणेशः',
    category: 'Ganesha & Hanuman',
    title: 'Vakratunda Ganesha Shloka (वक्रतुण्ड महाकाय)',
    sanskrit: `वक्रतुण्ड महाकाय सूर्यकोटिसमप्रभ।\nनिर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा॥`,
    transliteration: 'Vakratuṇḍa Mahākāya Sūryakoṭi Samaprabha |\nNirvighnaṁ Kuru Me Deva Sarva-Kāryeṣu Sarvadā ||',
    translation: 'O Lord with the curved trunk, immense body, and the brilliance of ten million suns, please make all my endeavors free from obstacles always.',
    significance: 'Universal prayer chanted at the inception of rituals, education, travel, and sacred tasks.',
    chantingBenefits: 'Ensures smooth completion of tasks and grants peace of mind.',
    bestTime: 'Morning prayers or beginning of any work.',
    sourceScripture: 'Mudgala Purana'
  },
  {
    id: 'mantra-hanuman-maruti',
    deity: 'Lord Hanuman',
    deitySanskrit: 'भगवान् श्रीहनुमान्',
    category: 'Ganesha & Hanuman',
    title: 'Hanuman Manojavam Shloka (मनोजवं मारुततुल्यवेगम्)',
    sanskrit: `मनोजवं मारुततुल्यवेगं जितेन्द्रियं बुद्धिमतां वरिष्ठम्।\nवातात्मजं वानरयूथमुख्यं श्रीरामदूतं शरणं प्रपद्ये॥`,
    transliteration: 'Manojavaṁ Māruta-Tulya-Vegaṁ Jitendriyaṁ Buddhimatāṁ Variṣṭham |\nVātātmajaṁ Vānara-Yūtha-Mukhyaṁ Śrīrāmadūtaṁ Śaraṇaṁ Prapadye ||',
    translation: 'I surrender to Lord Hanuman — who is swift as the mind, fast as the wind, master of senses, supreme among the wise, son of the Wind God, leader of vanaras, and beloved messenger of Lord Rama.',
    significance: 'Beautiful sloka depicting the virtues of Lord Hanuman — devotion, wisdom, strength, and humility.',
    chantingBenefits: 'Destroys fear, anxiety, weakness, grants willpower, devotion, and physical/mental strength.',
    bestTime: 'Tuesdays, Saturdays, or before facing difficult challenges.',
    sourceScripture: 'Ramayana & Hanuman Chalisa'
  },

  // ==================== VEDIC & SOLAR ====================
  {
    id: 'mantra-gayatri',
    deity: 'Goddess Gayatri / Savitr (Sun)',
    deitySanskrit: 'गायत्री देवी / सविता',
    category: 'Vedic & Solar',
    title: 'Maha Gayatri Mantra (गायत्री मन्त्र)',
    sanskrit: `ॐ भूर्भुवः स्वः तत्सवितुर्वरेण्यं\nभर्गो देवस्य धीमहि धियो यो नः प्रचोदयात्॥`,
    transliteration: 'Oṁ Bhūr Bhuvaḥ Svaḥ Tat-Savitur-Vareṇyaṁ |\nBhargo Devasya Dhīmahi Dhiyo Yo Naḥ Pracodayāt ||',
    translation: 'Om, we meditate on the divine effulgence of that venerable Source (Savitr) who created the Earth, Atmosphere, and Heavens. May that divine light awaken and guide our intellect.',
    significance: 'The mother of all Vedic mantras, revealed to Maharshi Vishvamitra in Rigveda (3.62.10). It illumines the higher consciousness.',
    chantingBenefits: 'Sharpens intellect, bestows spiritual illumination, cleanses karma, and grants physical and mental health.',
    bestTime: 'Sandhyavandanam (Sunrise, Noon, Sunset).',
    sourceScripture: 'Rigveda 3.62.10'
  },
  {
    id: 'mantra-surya-dhyana',
    deity: 'Lord Surya (Sun God)',
    deitySanskrit: 'भगवान् सूर्यदेवः',
    category: 'Vedic & Solar',
    title: 'Surya Namaskar Mantra (सूर्य नमस्कार मन्त्र)',
    sanskrit: `नमः सूर्याय शांताय सर्वरोगविनाशिने।\nआयुरारोग्यमैश्वर्यं देहि देव जगत्पते॥`,
    transliteration: 'Namaḥ Sūryāya Śāntāya Sarva-Roga-Vināśine |\nĀyur-Ārogyam-Aiśvaryaṁ Dehi Deva Jagatpate ||',
    translation: 'Salutations to the peaceful Sun God, the destroyer of all diseases. O Lord of the Universe, please grant longevity, radiant health, and prosperity.',
    significance: 'Solar invocation offering gratitude to the physical and spiritual source of light and energy in our solar system.',
    chantingBenefits: 'Promotes eye health, stamina, immunity, positivity, and cures sluggishness.',
    bestTime: 'Sunrise facing east.',
    sourceScripture: 'Aditya Hrudayam & Padma Purana'
  },

  // ==================== HEALTH & WISDOM ====================
  {
    id: 'mantra-dhanvantari',
    deity: 'Lord Dhanvantari',
    deitySanskrit: 'भगवान् धन्वन्तरिः',
    category: 'Health & Wisdom',
    title: 'Dhanvantari Health Mantra (धन्वन्तरि मन्त्र)',
    sanskrit: `ॐ नमो भगवते महासुदर्शनाय वासुदेवाय धन्वन्तरये।\nअमृतकलशहस्ताय सर्वभयविनाशाय सर्वरोगनिवारणाय\nत्रिलोकपथाय त्रिलोकनाथाय श्रीमहाविष्णुस्वरूप श्रीधन्वन्तरि स्वरूप\nश्री श्री श्री औषधचक्र नारायणाय नमः॥`,
    transliteration: 'Oṁ Namo Bhagavate Mahāsudarśanāya Vāsudevāya Dhanvantaraye |\nAmṛta-Kalaśa-Hastāya Sarva-Bhaya-Vināśāya Sarva-Roga-Nivāraṇāya |\nTriloka-Pathāya Triloka-Nāthāya Śrī-Mahā-Viṣṇu-Svarūpa Śrī-Dhanvantari Svarūpa |\nŚrī Śrī Śrī Auṣadha-Cakra Nārāyaṇāya Namaḥ ||',
    translation: 'Om, salutations to Lord Dhanvantari, the avatar of Vishnu holding the pot of nectar, who destroys all fear and cures all ailments. O Master of the three worlds, Lord of healing, I bow to You.',
    significance: 'Primary healing mantra in Ayurveda, invoking Dhanvantari who emerged from Samudra Manthan with the Pot of Amrita.',
    chantingBenefits: 'Speeds up recovery from sickness, enhances immunity, supports healers/doctors, and grants holistic wellness.',
    bestTime: 'Dhanteras, early morning, or when taking medicine.',
    sourceScripture: 'Bhagavata Purana & Sushruta Samhita'
  },
  {
    id: 'mantra-hayagriva',
    deity: 'Lord Hayagriva',
    deitySanskrit: 'भगवान् हयग्रीवः',
    category: 'Health & Wisdom',
    title: 'Hayagriva Stotram Mantra (हयग्रीव मन्त्र)',
    sanskrit: `ज्ञानान्दमयं देवं निर्मलस्फटिकाकृतिम्।\nआधारं सर्वविद्यानां हयग्रीवमुपास्महे॥`,
    transliteration: 'Jñānānanda-Mayaṁ Devaṁ Nirmala-Sphaṭikākṛtim |\nĀdhāraṁ Sarva-Vidyānāṁ Hayagrīvam-Upāsmahe ||',
    translation: 'We worship Lord Hayagriva, the embodiment of Knowledge and Eternal Joy, pure like a spotless crystal, who is the divine foundation of all learning and arts.',
    significance: 'Invokes Lord Hayagriva (horse-headed avatar of Vishnu) who restored the stolen Vedas to Lord Brahma.',
    chantingBenefits: 'Bestows supreme memory, speed of comprehension, victory in exams, and mastery over sciences.',
    bestTime: 'Early morning before study.',
    sourceScripture: 'Hayagriva Stotram (Vedanta Desika)'
  },
  {
    id: 'mantra-subramanya',
    deity: 'Lord Subramanya / Kartikeya',
    deitySanskrit: 'भगवान् सुब्रह्मण्यः',
    category: 'Health & Wisdom',
    title: 'Kartikeya Moola Mantra (कार्तिकेय मन्त्र)',
    sanskrit: `ॐ शरवण भवाय नमः॥`,
    transliteration: 'Oṁ Śaravaṇa Bhavāya Namaḥ',
    translation: 'Om, salutations to Lord Muruga (Subramanya), who was born in the sacred forest of Saravana reeds.',
    significance: '6-syllabled mantra of Murugan/Kartikeya representing victory over internal negative forces (anger, lust, greed, ego, delusion, jealousy).',
    chantingBenefits: 'Bestows sharp intellect, courage, victory over legal or external struggles, and removes Mars (Mangal) dosha.',
    bestTime: 'Skanda Sashti, Tuesdays, or early morning.',
    sourceScripture: 'Skanda Purana'
  },
  {
    id: 'mantra-dattatreya',
    deity: 'Lord Dattatreya',
    deitySanskrit: 'भगवान् दत्तात्रेयः',
    category: 'Health & Wisdom',
    title: 'Dattatreya Anusuya Mantra (दत्तात्रेय मन्त्र)',
    sanskrit: `ॐ द्रां दत्तात्रेयाय नमः॥`,
    transliteration: 'Oṁ Drāṁ Dattātreyāya Namaḥ',
    translation: 'Om, salutations to Lord Dattatreya, the combined incarnation of Brahma, Vishnu, and Shiva.',
    significance: 'Invokes the Supreme Guru Dattatreya who teaches that wisdom can be learned from all of nature.',
    chantingBenefits: 'Grants spiritual protection, guidance from divine masters, and removes ancestral obstacles.',
    bestTime: 'Thursdays or Datta Jayanti.',
    sourceScripture: 'Dattatreya Upanishad'
  }
];
