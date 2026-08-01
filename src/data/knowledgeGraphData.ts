import { KnowledgeNode } from '../types/knowledgeGraph';

export const KNOWLEDGE_GRAPH_DATA: KnowledgeNode = {
  id: 'sanatana-root',
  title: 'Sanatana Dharma Knowledge Treasury',
  sanskritTitle: 'सनातनधर्मज्ञानपरम्परा',
  category: 'root',
  summary: 'The eternal, unified cosmos of Vedic scriptures, principal Upanishads, commentaries, classical Darshanas, venerated Acharyas, and spiritual realization concepts.',
  historicalPeriod: 'Anadi (Timeless / Ancient Vedic Era to Present)',
  keyTeachings: [
    'Ekam Sat Vipra Bahudha Vadanti (Truth is One, sages describe it variously)',
    'Dharma, Artha, Kama, Moksha (The Four Purusharthas / Life Objectives)',
    'Atman is identical in essence with Brahman (Non-dual Self Realization)',
    'Karma and rebirth governed by cosmic Rita and Moral Order'
  ],
  children: [
    {
      id: 'branch-vedanta',
      title: 'Vedanta & Prasthanatrayi Tradition',
      sanskritTitle: 'वेदान्तपरम्परा',
      category: 'tradition',
      summary: 'The apex of Vedic wisdom based on the Triple Cannon (Prasthanatrayi): Upanishads (Shruti), Bhagavad Gita (Smriti), and Brahma Sutras (Nyaya).',
      historicalPeriod: 'c. 1500 BCE - Present',
      keyTeachings: [
        'Inquiry into Brahman (Athato Brahma Jijnasa)',
        'Unification of knowledge, devotion, and selfless action',
        'Direct experiential realization of the supreme Atman'
      ],
      children: [
        {
          id: 'scripture-upanishads',
          title: 'Mukhya Upanishads (10 Principal Upanishads)',
          sanskritTitle: 'मुख्य-उपनिषदः',
          category: 'scripture',
          summary: 'The philosophical core of the Vedas, containing the highest philosophical dialogues on Brahman, Atman, and Liberation.',
          historicalPeriod: 'c. 1000 BCE - 500 BCE',
          children: [
            {
              id: 'upanishad-chandogya',
              title: 'Chandogya Upanishad',
              sanskritTitle: 'छान्दोग्योपनिषत्',
              category: 'scripture',
              summary: 'Belongs to Samaveda. Expounds meditation on OM (Udgitha) and contains the dialogue between Sage Uddalaka and Shvetaketu.',
              associatedVerse: {
                sanskrit: 'तत्त्वमसि श्वेताकेतो',
                translation: 'That Thou Art, O Shvetaketu.',
                source: 'Chandogya Upanishad 6.8.7'
              },
              children: [
                {
                  id: 'concept-tat-tvam-asi',
                  title: 'Tat Tvam Asi (That Thou Art)',
                  sanskritTitle: 'तत्त्वमसि',
                  category: 'concept',
                  summary: 'One of the four Great Sayings (Mahavakyas), establishing the intrinsic identity between the individual soul (Jiva) and the Absolute (Brahman).',
                  keyTeachings: [
                    'The subtlest essence in the universe is the Self of all',
                    'Like salt dissolved in water, Brahman pervades all existence',
                    'Ignorance obscures identity; knowledge unveils eternal nature'
                  ]
                },
                {
                  id: 'concept-dahara-vidya',
                  title: 'Dahara Vidya (Heart Space Meditation)',
                  sanskritTitle: 'डहरविद्या',
                  category: 'concept',
                  summary: 'Meditation on the unconditioned infinite space (Dahara Akasha) within the lotus of the human heart.',
                }
              ]
            },
            {
              id: 'upanishad-brihadaranyaka',
              title: 'Brihadaranyaka Upanishad',
              sanskritTitle: 'बृहदारण्यकोपनिषत्',
              category: 'scripture',
              summary: 'The Great Forest Upanishad from Shukla Yajurveda, featuring Sage Yajnavalkya, Gargi, and Maitreyi.',
              associatedVerse: {
                sanskrit: 'अहं ब्रह्मास्मि',
                translation: 'I am Brahman (Infinite Absolute Consciousness).',
                source: 'Brihadaranyaka Upanishad 1.4.10'
              },
              children: [
                {
                  id: 'concept-aham-brahmasmi',
                  title: 'Aham Brahmasmi (I am Brahman)',
                  sanskritTitle: 'अहं ब्रह्मास्मि',
                  category: 'concept',
                  summary: 'Mahavakya of the Yajurveda declaring that the innermost consciousness is non-different from the cosmic supreme.',
                },
                {
                  id: 'concept-neti-neti',
                  title: 'Neti, Neti (Not this, Not this)',
                  sanskritTitle: 'नेति नेति',
                  category: 'concept',
                  summary: 'The apophatic method of spiritual discrimination, systematically negating finite adjuncts to realize the unconditioned Atman.',
                }
              ]
            },
            {
              id: 'upanishad-katha',
              title: 'Katha Upanishad',
              sanskritTitle: 'कठोपनिषत्',
              category: 'scripture',
              summary: 'Dialogue between Nachiketa and Yama (Lord of Death) regarding the secret of immortality.',
              children: [
                {
                  id: 'concept-shreyas-preyas',
                  title: 'Shreyas vs. Preyas (The Good vs. The Pleasant)',
                  sanskritTitle: 'श्रेयः प्रेयश्च',
                  category: 'concept',
                  summary: 'The fundamental choice every human faces: Shreyas leads to liberation; Preyas binds to temporary sense enjoyment.',
                },
                {
                  id: 'concept-chariot-analogy',
                  title: 'The Chariot Analogy of Self',
                  sanskritTitle: 'रथरूपकम्',
                  category: 'concept',
                  summary: 'Body as chariot, Intellect as driver, Mind as reins, Senses as horses, and Atman as the serene master inside.',
                }
              ]
            }
          ]
        },
        {
          id: 'branch-acharyas',
          title: 'Great Acharyas & Vedantic Schools',
          sanskritTitle: 'महान्तः आचार्याः सिद्धान्ताश्च',
          category: 'acharya',
          summary: 'Master commentators and spiritual revitalizers who interpreted the Prasthanatrayi according to distinct philosophical perspectives.',
          children: [
            {
              id: 'acharya-shankara',
              title: 'Adi Shankaracharya',
              sanskritTitle: 'आदि शङ्कराचार्यः',
              category: 'acharya',
              summary: '8th-century philosopher-saint who consolidated Advaita Vedanta and established the 4 cardinal Amnaya Mathas across Bharat.',
              historicalPeriod: '788 CE - 820 CE',
              children: [
                {
                  id: 'darshana-advaita',
                  title: 'Advaita Vedanta (Non-Dualism)',
                  sanskritTitle: 'अद्वैतवेदान्तः',
                  category: 'darshana',
                  summary: 'School of philosophy holding that Brahman alone is ultimate reality, the empirical world is Maya (relative appearance), and the Jiva is non-different from Brahman.',
                  children: [
                    {
                      id: 'concept-maya-vivarta',
                      title: 'Maya & Vivartavada',
                      sanskritTitle: 'माया विवर्तवादश्च',
                      category: 'concept',
                      summary: 'The doctrine that the universe is an apparent transformation (Vivarta) of Brahman mediated by the mysterious power of Maya.',
                    },
                    {
                      id: 'concept-jivanmukti',
                      title: 'Jivanmukti (Liberation in Life)',
                      sanskritTitle: 'जीवन्मुक्तिः',
                      category: 'concept',
                      summary: 'The state of being liberated while still living in the physical body through complete self-realization.',
                    }
                  ]
                },
                {
                  id: 'commentary-brahma-sutra-bhashya',
                  title: 'Brahma Sutra Bhashya',
                  sanskritTitle: 'ब्रह्मसूत्रभाष्यम्',
                  category: 'commentary',
                  summary: 'Masterpiece commentary synthesizing the aphorisms of Badarayana to establish non-duality.',
                }
              ]
            },
            {
              id: 'acharya-ramanuja',
              title: 'Sri Ramanujacharya',
              sanskritTitle: 'रामानुजाचार्यः',
              category: 'acharya',
              summary: '11th-century proponent of Vishishtadvaita Vedanta who emphasized divine grace, devotion, and inclusive temple worship.',
              historicalPeriod: '1017 CE - 1137 CE',
              children: [
                {
                  id: 'darshana-vishishtadvaita',
                  title: 'Vishishtadvaita (Qualified Non-Dualism)',
                  sanskritTitle: 'विशिष्टद्वैतम्',
                  category: 'darshana',
                  summary: 'Philosophy asserting that Brahman is qualified by soul (Chit) and matter (Achit) as His eternal attributes and divine body.',
                  children: [
                    {
                      id: 'concept-sharira-shariri',
                      title: 'Sharira-Shariri Bhava',
                      sanskritTitle: 'शरीरशरीरिभावः',
                      category: 'concept',
                      summary: 'The cosmic relationship where all souls and universe form the body (Sharira) of the Supreme Lord Narayana (Shariri).',
                    },
                    {
                      id: 'concept-prapatti-sharanagati',
                      title: 'Prapatti (Complete Surrender)',
                      sanskritTitle: 'प्रपत्तिः / शरणागतिः',
                      category: 'concept',
                      summary: 'The supreme spiritual path of complete self-surrender to the divine feet of the Lord for unconditional grace.',
                    }
                  ]
                }
              ]
            },
            {
              id: 'acharya-madhva',
              title: 'Sri Madhvacharya',
              sanskritTitle: 'श्रीमध्वाचार्यः',
              category: 'acharya',
              summary: '13th-century philosopher who established Dvaita Vedanta (Dualism), emphasizing the absolute difference between God, soul, and world.',
              historicalPeriod: '1238 CE - 1317 CE',
              children: [
                {
                  id: 'darshana-dvaita',
                  title: 'Dvaita Vedanta (Dualism)',
                  sanskritTitle: 'द्वैतवेदान्तः',
                  category: 'darshana',
                  summary: 'Philosophy asserting eternal, unbridgeable distinction between Lord Vishnu (Independent Reality) and all individual souls and nature (Dependent Reality).',
                  children: [
                    {
                      id: 'concept-pancha-bheda',
                      title: 'Pancha Bheda (Five Fundamental Differences)',
                      sanskritTitle: 'पञ्चभेदाः',
                      category: 'concept',
                      summary: 'Eternal distinctions between God & Soul, God & Matter, Soul & Soul, Soul & Matter, and Matter & Matter.',
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 'branch-epics-gita',
      title: 'Itihasa & Bhagavad Gita Synthesis',
      sanskritTitle: 'इतिहासः श्रीमद्भगवद्गीता च',
      category: 'scripture',
      summary: 'The practical application of Vedic truth through epic narratives and Lord Krishna’s immortal dialogue on the battlefield of Kurukshetra.',
      historicalPeriod: 'c. 3000 BCE - 500 BCE',
      children: [
        {
          id: 'scripture-bhagavad-gita',
          title: 'Bhagavad Gita',
          sanskritTitle: 'श्रीमद्भगवद्गीता',
          category: 'scripture',
          summary: '700-verse scripture embedded in the Bhishma Parva of Mahabharata, expounding the three major paths of spiritual realization.',
          associatedVerse: {
            sanskrit: 'कर्मण्येवाधिकारस्ते मा फलेषु कदाचन',
            translation: 'Your right is to work only, but never to its fruits.',
            source: 'Bhagavad Gita 2.47'
          },
          children: [
            {
              id: 'concept-karma-yoga',
              title: 'Karma Yoga (Path of Selfless Action)',
              sanskritTitle: 'कर्मयोगः',
              category: 'concept',
              summary: 'Performing duties with dedication to the Supreme without attachment to personal fruits or egoistic ownership.',
              keyTeachings: [
                'Nishkama Karma (Desireless action)',
                'Equanimity in success and failure (Samatvam Yoga Uchyate)',
                'Converting work into worship'
              ]
            },
            {
              id: 'concept-jnana-yoga',
              title: 'Jnana Yoga (Path of Knowledge)',
              sanskritTitle: 'ज्ञानयोगः',
              category: 'concept',
              summary: 'Discriminating the eternal Self (Kshetrajna) from the perishable field (Kshetra) through intellect and introspection.',
            },
            {
              id: 'concept-bhakti-yoga',
              title: 'Bhakti Yoga (Path of Unswerving Devotion)',
              sanskritTitle: 'भक्तियोगः',
              category: 'concept',
              summary: 'Single-minded love and devotional absorption in the Supreme Person (Purushottama).',
              children: [
                {
                  id: 'concept-charama-shloka',
                  title: 'Charama Shloka (Final Promise)',
                  sanskritTitle: 'चरमश्लोकः',
                  category: 'concept',
                  summary: 'Gita 18.66: "Abandoning all dharmas, surrender unto Me alone; I shall liberate you from all sins, grieve not."',
                }
              ]
            }
          ]
        },
        {
          id: 'scripture-mahabharata',
          title: 'Mahabharata & Ramayana',
          sanskritTitle: 'महाभारतम् रामायणञ्च',
          category: 'scripture',
          summary: 'The great epic tradition preserving historical lineages, ethical subtleties (Dharma Sukshma), and cultural ethos.',
          children: [
            {
              id: 'concept-dharma-sukshma',
              title: 'Dharma Sukshma (Subtlety of Moral Duty)',
              sanskritTitle: 'धर्मसूक्ष्मम्',
              category: 'concept',
              summary: 'Exploring how moral duty varies according to context, intent, stage of life, and spiritual maturity.',
            },
            {
              id: 'concept-yaksha-prashna',
              title: 'Yaksha Prashna (Yudhishthira’s Wisdom)',
              sanskritTitle: 'यक्षप्रश्नः',
              category: 'concept',
              summary: 'Profound answers delivered by Yudhishthira on what constitutes the greatest wonder, true path, and essence of wisdom.',
            }
          ]
        }
      ]
    },
    {
      id: 'branch-darshanas',
      title: 'Six Classical Systems (Shad Darshanas)',
      sanskritTitle: 'षड्दर्शनानि',
      category: 'darshana',
      summary: 'The six orthodox (Astika) philosophical systems accepting the authority of the Vedas, each offering a rigorous framework for epistemology, metaphysics, and liberation.',
      children: [
        {
          id: 'darshana-samkhya',
          title: 'Samkhya Darshana (Sage Kapila)',
          sanskritTitle: 'साङ्ख्यदर्शनम्',
          category: 'darshana',
          summary: 'Dualistic metaphysical system enumerating the 24 Tattvas of nature (Prakriti) and pure witness consciousness (Purusha).',
          children: [
            {
              id: 'concept-purusha-prakriti',
              title: 'Purusha & Prakriti Metaphysics',
              sanskritTitle: 'पुरुषः प्रकृतिश्च',
              category: 'concept',
              summary: 'Purusha is unattached, luminous conscious observer; Prakriti is dynamic unmanifest matter composed of the 3 Gunas.',
              children: [
                {
                  id: 'concept-trigunas',
                  title: 'The Three Gunas (Sattva, Rajas, Tamas)',
                  sanskritTitle: 'त्रिगुणाः',
                  category: 'concept',
                  summary: 'Sattva (purity/light), Rajas (passion/action), and Tamas (inertia/darkness) weaving all physical and mental phenomena.',
                }
              ]
            }
          ]
        },
        {
          id: 'darshana-yoga',
          title: 'Yoga Darshana (Sage Patanjali)',
          sanskritTitle: 'योगदर्शनम्',
          category: 'darshana',
          summary: 'Systematic discipline for stilling the modifications of the mind (Yogas Chitta Vritti Nirodhah) to abide in pure Self-awareness.',
          children: [
            {
              id: 'concept-ashtanga-yoga',
              title: 'Ashtanga Yoga (8 Limbs of Yoga)',
              sanskritTitle: 'अष्टाङ्गयोगः',
              category: 'concept',
              summary: 'Yama, Niyama, Asana, Pranayama, Pratyahara, Dharana, Dhyana, and Samadhi.',
              keyTeachings: [
                'Yama & Niyama: Ethical foundation and personal observances',
                'Asana & Pranayama: Steady posture and vital force mastery',
                'Dharana, Dhyana, Samadhi: Deep meditative absorption'
              ]
            }
          ]
        },
        {
          id: 'darshana-nyaya-vaisheshika',
          title: 'Nyaya & Vaisheshika',
          sanskritTitle: 'न्यायवैशेषिकदर्शने',
          category: 'darshana',
          summary: 'Systems of formal logic (Pramana Shastra), atomism (Paramanu Vada), and categorization of reality into 7 Padarthas.',
        },
        {
          id: 'darshana-mimamsa',
          title: 'Purva Mimamsa (Sage Jaimini)',
          sanskritTitle: 'पूर्वमीमांसा',
          category: 'darshana',
          summary: 'Hermeneutics of Vedic ritual mandates (Yajna) and investigation into ethical duty (Dharma).',
        }
      ]
    },
    {
      id: 'branch-puranas-tantra',
      title: 'Puranic, Bhakti & Tantric Heritage',
      sanskritTitle: 'पुराणतन्त्रभक्तिपरम्परा',
      category: 'tradition',
      summary: 'The rich traditions of Puranic narratives, 18 Mahapuranas, Agamas, and Bhakti movements that brought philosophy to every household.',
      children: [
        {
          id: 'scripture-bhagavata-purana',
          title: 'Srimad Bhagavata Purana',
          sanskritTitle: 'श्रीमद्भागवतपुराणम्',
          category: 'scripture',
          summary: 'Revered crown jewel of Puranas, detailing the 24 Avataras, childhood pastimes of Sri Krishna, and Navadha Bhakti.',
          children: [
            {
              id: 'concept-navadha-bhakti',
              title: 'Navadha Bhakti (Ninefold Devotion)',
              sanskritTitle: 'नवधा भक्तिः',
              category: 'concept',
              summary: 'Shravanam, Kirtanam, Smaranam, Pada-sevanam, Archanam, Vandanam, Dasyam, Sakhyam, Atma-nivedanam.',
            },
            {
              id: 'acharya-chaitanya',
              title: 'Chaitanya Mahaprabhu & Gaudiya Tradition',
              sanskritTitle: 'चैतन्यमहाप्रभुः',
              category: 'acharya',
              summary: '16th-century avatar of Sankirtana movement who popularized Hare Krishna Mahamantra and Achintya Bheda-Abheda philosophy.',
            }
          ]
        },
        {
          id: 'scripture-shiva-purana',
          title: 'Shiva Purana & Shaiva Traditions',
          sanskritTitle: 'शिवपुराणम्',
          category: 'scripture',
          summary: 'Extolling Supreme Shiva as Nirguna Brahman, 12 Jyotirlingas, and Pashupata Yoga.',
          children: [
            {
              id: 'darshana-kashmiri-shaivism',
              title: 'Kashmiri Shaivism (Abhinavagupta)',
              sanskritTitle: 'काश्मीरशैवदर्शनम्',
              category: 'darshana',
              summary: 'Monistic Shaiva Tantra philosophy of Trika and Pratyabhijna (Spontaneous Self-Recognition).',
            }
          ]
        },
        {
          id: 'scripture-devi-bhagavata',
          title: 'Devi Bhagavata & Shakta Tradition',
          sanskritTitle: 'देवीभागवतम् श्रीविद्या च',
          category: 'scripture',
          summary: 'Honoring Adishakti as the supreme primeval energy, 51 Shakti Peethas, and Lalita Sahasranama.',
        }
      ]
    }
  ]
};
