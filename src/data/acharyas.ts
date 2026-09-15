import { AcharyaItem } from '../types';

export const ACHARYAS_DATA: AcharyaItem[] = [
  // --- ADVAITA VEDANTA MASTERS ---
  {
    id: 'adi-shankaracharya',
    name: 'Adi Shankaracharya',
    sanskritName: 'आदिशङ्कराचार्यः',
    period: '788 CE – 820 CE (Traditional 509 BCE)',
    birthPlace: 'Kalady, Kerala',
    tradition: 'Advaita Vedanta & Smarta Tradition',
    philosophicalSystem: 'Advaita (Absolute Non-Duality)',
    biography: 'Born in Kalady, Kerala. Mastered four Vedas by age 8. Became sannyasi under Govinda Bhagavatpada on Narmada banks. Traveled twice across India on foot (Digvijaya), engaging scholars in philosophical debates, re-establishing Vedic wisdom, composing immortal commentaries (Bhashyas) on Prasthana Trayi, and establishing 4 Shankaracharya Mathas at 4 cardinal corners of India.',
    majorWorks: [
      'Brahma Sutra Bhashya',
      'Upanishad Bhashyas (10 Principal Upanishads)',
      'Bhagavad Gita Bhashya',
      'Vivekachudamani',
      'Upadeshasahasri',
      'Bhaja Govindam',
      'Soundarya Lahari',
      'Kanakadhara Stotram'
    ],
    keyTeachings: [
      'Brahma Satyam Jagan Mithya Jivo Brahmaiva Naparah — Brahman alone is real, the world is relatively real, the individual soul is non-different from Brahman.',
      'Establishment of Shanmata (Unified worship of Shiva, Vishnu, Shakti, Ganesha, Surya, Skanda).',
      'Jnana Yoga as the direct instrument for Moksha.'
    ],
    travelMapPoints: [
      { name: 'Kalady', lat: 10.1667, lng: 76.4333, description: 'Birthplace on Periyar river banks.' },
      { name: 'Omkareshwar', lat: 22.2462, lng: 76.1511, description: 'Initiation under Guru Govinda Bhagavatpada.' },
      { name: 'Varanasi', lat: 25.3176, lng: 82.9739, description: 'Composed immortal Bhashyas and met Lord Shiva as Avadhuta.' },
      { name: 'Badrinath', lat: 30.7433, lng: 79.4938, description: 'Established Jyotirmath and consecrated Badrinath deity.' },
      { name: 'Puri', lat: 19.8135, lng: 85.8312, description: 'Established Govardhan Matha.' },
      { name: 'Dwarka', lat: 22.2442, lng: 68.9685, description: 'Established Sharada Peetha.' },
      { name: 'Sringeri', lat: 13.4189, lng: 75.2536, description: 'Established Dakshinamnaya Sringeri Sharada Peetham.' },
      { name: 'Kedarnath', lat: 30.7346, lng: 79.0669, description: 'Videha Mukti / Samadhi at Kedarnath.' }
    ],
    citations: [
      { id: 'ach-cite-1', sourceName: 'Shankara Digvijaya (Madhaviya)', type: 'primary' }
    ]
  },
  {
    id: 'gaudapadacharya',
    name: 'Gaudapadacharya',
    sanskritName: 'गौडपादाचार्यः',
    period: 'c. 6th Century CE',
    birthPlace: 'Gauda Region (Bengal / Northern Bharat)',
    tradition: 'Advaita Vedanta Lineage',
    philosophicalSystem: 'Ajativada (Unborn Non-Duality)',
    biography: 'Paramaguru of Adi Shankaracharya and guru of Govinda Bhagavatpada. Author of the famous Mandukya Karika, the earliest surviving systematic treatise on Advaita Vedanta. Expounded the doctrine of Ajativada (the ultimate reality is uncreated and unchanging).',
    majorWorks: ['Mandukya Karika (Gaudapada Karika)', 'Uttara Gita Commentary'],
    keyTeachings: [
      'Ajativada: Ultimate Reality (Brahman) neither undergoes creation nor destruction.',
      'Analysis of the 4 states of consciousness (Avasthatraya: Waking, Dream, Deep Sleep, Turiya).'
    ],
    citations: [{ id: 'ach-cite-gaud', sourceName: 'Mandukya Karika', type: 'primary' }]
  },
  {
    id: 'govinda-bhagavatpada',
    name: 'Govinda Bhagavatpada',
    sanskritName: 'गोविन्दभगवत्पादाः',
    period: 'c. 7th – 8th Century CE',
    birthPlace: 'Narmada River Region (Omkareshwar)',
    tradition: 'Advaita Vedanta Lineage',
    philosophicalSystem: 'Advaita Vedanta',
    biography: 'Disciple of Gaudapadacharya and direct Guru of Adi Shankaracharya. Resided in a sacred cave on the banks of the Narmada River at Omkareshwar. Initiated young Shankara into Sannyasa and commanded him to write commentaries on Prasthana Trayi.',
    majorWorks: ['Advaita Anubhuti', 'Yoga Taravali (Attributed)'],
    keyTeachings: [
      'Transmitted the unbroken Vedic realization of non-duality directly to Adi Shankara.',
      'Emphasized cave-contemplation and Kundalini Yoga along with Vedantic inquiry.'
    ],
    citations: [{ id: 'ach-cite-gov', sourceName: 'Shankara Digvijaya', type: 'primary' }]
  },
  {
    id: 'sureshvaracharya',
    name: 'Sureshvaracharya (Mandana Mishra)',
    sanskritName: 'सुरेश्वराचार्यः',
    period: 'c. 8th Century CE',
    birthPlace: 'Mahishi, Bihar / Sringeri',
    tradition: 'Advaita Vedanta / Sringeri Peetham',
    philosophicalSystem: 'Advaita Vedanta',
    biography: 'Formerly Mandana Mishra, the greatest Mimamsa scholar of his time. Engaged Adi Shankara in a historic 18-day debate hosted by Ubhaya Bharati. Upon losing, he accepted Sannyasa, took the name Sureshvara, and became the first Pithadhipati of Sringeri Sharada Peetham.',
    majorWorks: ['Naishkarmya Siddhi', 'Taittiriya Upanishad Varttika', 'Brihadaranyaka Varttika'],
    keyTeachings: [
      'Naishkarmya: Liberation cannot be obtained by ritual action alone, but solely by self-knowledge.',
      'Mastery of Varttika (philosophical glosses) defending Advaita.'
    ],
    citations: [{ id: 'ach-cite-sur', sourceName: 'Naishkarmya Siddhi', type: 'primary' }]
  },
  {
    id: 'padmapadacharya',
    name: 'Padmapadacharya (Sanandana)',
    sanskritName: 'पद्मपादाचार्यः',
    period: 'c. 8th Century CE',
    birthPlace: 'Chola Region, South India',
    tradition: 'Advaita Vedanta / Puri Govardhan Matha',
    philosophicalSystem: 'Vivaranaprasthana (Advaita)',
    biography: 'One of Shankara’s four main disciples. Famous for walking across a swelling river to bring a manuscript to his Guru; lotus flowers bloomed under his feet at every step, earning him the name Padmapada. Appointed first head of Govardhan Matha at Puri.',
    majorWorks: ['Panchapadika (Commentary on Shankara’s Brahma Sutra Bhashya)'],
    keyTeachings: ['Formulated the Vivaranaprasthana school of Advaita interpretation.'],
    citations: [{ id: 'ach-cite-pad', sourceName: 'Panchapadika', type: 'primary' }]
  },
  {
    id: 'totakacharya',
    name: 'Totakacharya (Giri)',
    sanskritName: 'तोटकाचार्यः',
    period: 'c. 8th Century CE',
    birthPlace: 'Bharat',
    tradition: 'Advaita Vedanta / Jyotirmath',
    philosophicalSystem: 'Advaita Vedanta',
    biography: 'Originally perceived as quiet and unlettered by fellow disciples, Giri served Shankara with selfless devotion. By Guru’s grace, he spontaneously sang the exquisite Totakastakam in complex Totaka meter. Appointed first head of Jyotirmath at Badrinath.',
    majorWorks: ['Totakastakam', 'Shrutisarasamuddharanam'],
    keyTeachings: ['Guru-bhakti and humble service unlock transcendent scriptural wisdom.'],
    citations: [{ id: 'ach-cite-tot', sourceName: 'Totakastakam', type: 'primary' }]
  },
  {
    id: 'hastamalakacharya',
    name: 'Hastamalakacharya',
    sanskritName: 'हस्तामलकाचार्यः',
    period: 'c. 8th Century CE',
    birthPlace: 'Srimushnam / Kollur, Karnataka',
    tradition: 'Advaita Vedanta / Dwarka Sharada Peetham',
    philosophicalSystem: 'Advaita Vedanta',
    biography: 'Born silent and absorbed in Self-realization. When Shankara asked him "Who are you?", he recited 12 stanzas revealing his identity as pure consciousness, like an Amla fruit in one’s palm (Hastamalaka). First head of Dwarka Peetham.',
    majorWorks: ['Hastamalakiyam (Hastamalaka Stotram)'],
    keyTeachings: ['Direct awareness of Atman as eternal self-luminous consciousness.'],
    citations: [{ id: 'ach-cite-has', sourceName: 'Hastamalakiyam', type: 'primary' }]
  },
  {
    id: 'vachaspati-mishra',
    name: 'Vachaspati Mishra',
    sanskritName: 'वाचस्पतिमिश्रः',
    period: 'c. 900 CE – 980 CE',
    birthPlace: 'Mithila, Bihar',
    tradition: 'Advaita & Six Systems (Sarvatantra Svatantra)',
    philosophicalSystem: 'Bhamati Prasthana (Advaita)',
    biography: 'Master of all six orthodox systems of Hindu philosophy. Wrote standard treatises on Nyaya, Samkhya, Yoga, Mimamsa, and Vedanta. Named his immortal masterwork Bhamati after his devoted wife who cared for him while he worked in silent contemplation.',
    majorWorks: ['Bhamati (Commentary on Brahma Sutra Bhashya)', 'Tattvakaumudi (Samkhya)', 'Nyayavarttikatatparyatika'],
    keyTeachings: ['Bhamati school holds that Avidya (ignorance) resides in the individual soul (Jiva).'],
    citations: [{ id: 'ach-cite-vach', sourceName: 'Bhamati', type: 'primary' }]
  },
  {
    id: 'vidyaranya-swami',
    name: 'Swami Vidyaranya',
    sanskritName: 'विद्यारण्यस्वामी',
    period: '1296 CE – 1386 CE',
    birthPlace: 'Warangal / Hampi, Karnataka',
    tradition: 'Advaita Vedanta / Vijayanagara Empire',
    philosophicalSystem: 'Advaita Vedanta',
    biography: '12th Jagadguru of Sringeri Sharada Peetham and spiritual architect of the Vijayanagara Empire. Inspired Harihara and Bukka to establish Vijayanagara to preserve Vedic culture and temples against destruction.',
    majorWorks: ['Panchadasi', 'Jivanmukti Viveka', 'Anubhuti Prakasa', 'Sarvadarsanasangraha'],
    keyTeachings: [
      'Panchadasi: Clear 15-chapter exposition of Advaita Vedanta for spiritual seekers.',
      'Jivanmukti: Complete mental tranquility and destruction of Vasana (latent impressions) lead to liberation in life.'
    ],
    citations: [{ id: 'ach-cite-vid', sourceName: 'Panchadasi', type: 'primary' }]
  },
  {
    id: 'appayya-dikshita',
    name: 'Appayya Dikshita',
    sanskritName: 'अप्ययदीक्षितः',
    period: '1520 CE – 1593 CE',
    birthPlace: 'Adayapalam near Vellore, Tamil Nadu',
    tradition: 'Advaita Vedanta & Shaiva Advaita',
    philosophicalSystem: 'Advaita / Ratnatraya',
    biography: 'Prolific polymath who composed over 100 works spanning Vedanta, Mimamsa, Poetics, and Stotras. Patronized by Vijayanagara rulers. Reconciled Advaita Vedanta with Shaivism.',
    majorWorks: ['Siddhanta Lesha Sangraha', 'Parimala', 'Kuvalayananda', 'Atmarapana Stuti'],
    keyTeachings: ['Explicated all sub-schools of Vedanta while maintaining non-dual Brahman as supreme.'],
    citations: [{ id: 'ach-cite-app', sourceName: 'Siddhanta Lesha Sangraha', type: 'primary' }]
  },

  // --- VISHISHTADVAITA & SRI VAISHNAVISM ---
  {
    id: 'nathamuni',
    name: 'Nathamuni',
    sanskritName: 'नाथमुनिः',
    period: '823 CE – 951 CE',
    birthPlace: 'Kattumannarkoil (Veeranarayanapuram), Tamil Nadu',
    tradition: 'Sri Vaishnavism',
    philosophicalSystem: 'Early Vishishtadvaita',
    biography: 'First of the great Sri Vaishnava Acharyas. Through intense Yoga meditation, he received the divine 4,000 verses of the Divya Prabandham directly from Nammalvar in a vision and arranged them with divine music and temple liturgy.',
    majorWorks: ['Nyaya Tattva', 'Yoga Rahasya', 'Collection of Naalayira Divya Prabandham'],
    keyTeachings: ['Integration of Tamil Bhakti hymns with Vedic Sanskrit ritual and philosophy (Ubhaya Vedanta).'],
    citations: [{ id: 'ach-cite-nath', sourceName: 'Guru Paramparai Prabhavam', type: 'primary' }]
  },
  {
    id: 'yamunacharya',
    name: 'Yamunacharya (Alavandar)',
    sanskritName: 'यामुनाचार्यः',
    period: '916 CE – 1041 CE',
    birthPlace: 'Srirangam, Tamil Nadu',
    tradition: 'Sri Vaishnavism',
    philosophicalSystem: 'Vishishtadvaita',
    biography: 'Grandson of Nathamuni. Won a kingdom as a young prodigy in a philosophical contest, then renounced royalty to become the supreme head of Srirangam. Prepared the groundwork for Sri Ramanujacharya.',
    majorWorks: ['Siddhitrayam', 'Stotra Ratnam', 'Gitartha Sangraha', 'Agama Pramanya'],
    keyTeachings: ['Defended the Pancaratra Agamas and established Narayana with Sri as ultimate reality.'],
    citations: [{ id: 'ach-cite-yam', sourceName: 'Stotra Ratnam', type: 'primary' }]
  },
  {
    id: 'ramanujacharya',
    name: 'Ramanujacharya',
    sanskritName: 'रामानुजाचार्यः',
    period: '1017 CE – 1137 CE',
    birthPlace: 'Sriperumbudur, Tamil Nadu',
    tradition: 'Sri Vaishnavism',
    philosophicalSystem: 'Vishishtadvaita (Qualified Non-Duality)',
    biography: 'Great philosopher-saint who systematized Sri Vaishnavism. Succeeded Yamunacharya as head of Srirangam. Scaled the temple tower of Tirukosthiyur to proclaim the sacred Ashtakshara Mantra (Om Namo Narayanaya) to all people regardless of background.',
    majorWorks: ['Sri Bhashya (Brahma Sutras)', 'Gita Bhashya', 'Vedarthasangraha', 'Gadya Trayam'],
    keyTeachings: [
      'Bhakti & Prapatti (total surrender to Narayana).',
      'The universe consists of Cit (souls), Acit (matter), and Ishvara (God) as an inseparable organic whole (Sharira-Shariri Bhava).'
    ],
    travelMapPoints: [
      { name: 'Sriperumbudur', lat: 12.9692, lng: 79.9405, description: 'Birthplace.' },
      { name: 'Srirangam', lat: 10.8623, lng: 78.6908, description: 'Chief seat of Sri Vaishnavism.' },
      { name: 'Melukote', lat: 12.6644, lng: 76.6508, description: 'Established Cheluvanarayana Swamy temple.' }
    ],
    citations: [{ id: 'ach-cite-ram', sourceName: 'Prapannamritam & Sri Bhashya', type: 'primary' }]
  },
  {
    id: 'vedanta-desika',
    name: 'Vedanta Desika (Swami Desikan)',
    sanskritName: 'वेदान्तदेशिकः',
    period: '1268 CE – 1369 CE',
    birthPlace: 'Thooppul near Kanchipuram, Tamil Nadu',
    tradition: 'Sri Vaishnavism (Vadakalai)',
    philosophicalSystem: 'Vishishtadvaita',
    biography: 'Towering poet-philosopher and lion of Vedanta (Kavitarkika Simha). Wrote 120 works in Sanskrit and Tamil. Defended Srirangam deity during invasions and preserved Sri Bhashya manuscripts.',
    majorWorks: ['Tattva Mukta Kalapa', 'Shatadushani', 'Rahasya Traya Sara', 'Paduka Sahasram'],
    keyTeachings: ['Harmonized scriptural injunctions with heartfelt surrender (Prapatti).'],
    citations: [{ id: 'ach-cite-des', sourceName: 'Rahasya Traya Sara', type: 'primary' }]
  },
  {
    id: 'pillai-lokacharya',
    name: 'Pillai Lokacharya',
    sanskritName: 'पिळ्ळै लोकाचार्यः',
    period: '1205 CE – 1311 CE',
    birthPlace: 'Srirangam, Tamil Nadu',
    tradition: 'Sri Vaishnavism (Tenkalai)',
    philosophicalSystem: 'Vishishtadvaita',
    biography: 'Leader of the Tenkalai school of Sri Vaishnavism. Author of 18 sacred secrets (Ashtadasa Rahasya). Sacrificed his life protecting the sacred idol of Lord Ranganatha during military invasions.',
    majorWorks: ['Srivachana Bhushanam', 'Mumukshuppadi', 'Tattva Trayam'],
    keyTeachings: ['Grace (Kripa) of the Lord is unconditional and available to all who seek refuge.'],
    citations: [{ id: 'ach-cite-pil', sourceName: 'Srivachana Bhushanam', type: 'primary' }]
  },

  // --- DVAITA TATTVA VADA MASTERS ---
  {
    id: 'madhvacharya',
    name: 'Madhvacharya',
    sanskritName: 'मध्वाचार्यः',
    period: '1238 CE – 1317 CE',
    birthPlace: 'Pajaka near Udupi, Karnataka',
    tradition: 'Tattvavada / Dvaita Tradition',
    philosophicalSystem: 'Dvaita (Dualism)',
    biography: 'Proponent of Dvaita philosophy. Established the Krishna Temple at Udupi and Ashta Mathas (Eight Monasteries) to conduct worship in rotation. Traveled across India twice to spread Tattvavada.',
    majorWorks: ['Anuvyakhyana', 'Brahma Sutra Bhashya', 'Gita Bhashya', 'Anu-Madhva-Vijaya'],
    keyTeachings: [
      'Pancha Bheda (Five fundamental real differences).',
      'Hari Sarvottama (Lord Hari is supreme independent reality).',
      'Jagat Satyam (World is real, not illusory).'
    ],
    travelMapPoints: [
      { name: 'Pajaka', lat: 13.3100, lng: 74.7800, description: 'Birthplace.' },
      { name: 'Udupi', lat: 13.3409, lng: 74.7421, description: 'Established Sri Krishna Temple and Ashta Mathas.' }
    ],
    citations: [{ id: 'ach-cite-mad', sourceName: 'Sumadhva Vijaya', type: 'primary' }]
  },
  {
    id: 'jayatirtha',
    name: 'Jayatirtha (Teekacharya)',
    sanskritName: 'जयतीर्थः',
    period: '1345 CE – 1388 CE',
    birthPlace: 'Mangalvedhe, Maharashtra',
    tradition: 'Dvaita Tattvavada',
    philosophicalSystem: 'Dvaita Vedanta',
    biography: 'Sixth pontiff of Madhvacharya lineage. Known as Teekacharya for his profound and illuminating commentaries on Madhvacharya’s works. Transformed Dvaita into an impregnable intellectual fortress.',
    majorWorks: ['Srimad Nyayasudha', 'Tattvaprakashika', 'Prameya Deepika'],
    keyTeachings: ['Rigorous dialectical defense of dualist realism and devotion to Sri Hari.'],
    citations: [{ id: 'ach-cite-jay', sourceName: 'Nyayasudha', type: 'primary' }]
  },
  {
    id: 'vyasatirtha',
    name: 'Vyasatirtha (Vyasa Raya)',
    sanskritName: 'व्यासतीर्थः',
    period: '1460 CE – 1539 CE',
    birthPlace: 'Bannur, Mysore, Karnataka',
    tradition: 'Dvaita Tattvavada / Vijayanagara',
    philosophicalSystem: 'Dvaita Vedanta',
    biography: 'Kulaguru of Vijayanagara Emperor Krishnadevaraya. Master philosopher who authored the three great polemical works known as Vyasa Traya. Patronized Purandara Dasa and Kanaka Dasa.',
    majorWorks: ['Nyayamrita', 'Tarkatandava', 'Tatparya Chandrika'],
    keyTeachings: ['Highest intellectual synthesis of Dvaita logic countering illusionist arguments.'],
    citations: [{ id: 'ach-cite-vya', sourceName: 'Vyasa Charita', type: 'primary' }]
  },
  {
    id: 'raghavendra-swami',
    name: 'Guru Raghavendra Swami',
    sanskritName: 'राघवेन्द्रस्वामी',
    period: '1595 CE – 1671 CE',
    birthPlace: 'Bhuvanagiri, Tamil Nadu / Mantralayam, Andhra Pradesh',
    tradition: 'Dvaita Tattvavada',
    philosophicalSystem: 'Dvaita Vedanta',
    biography: 'Revered saint, musician, and commentator who entered Brindavana alive at Mantralayam on Tungabhadra river banks. Continues to bestow blessings and spiritual solace to millions of devotees.',
    majorWorks: ['Rigveda Mantrartha Sangraha', 'Bhavadipa', 'Gita Vivriti'],
    keyTeachings: ['Selfless prayer, moral living, and unwavering devotion to Sri Rama and Sri Krishna.'],
    citations: [{ id: 'ach-cite-ragh', sourceName: 'Raghavendra Vijaya', type: 'primary' }]
  },

  // --- OTHER CLASSICAL PHILOSOPHICAL ACHARYAS ---
  {
    id: 'nimbarkacharya',
    name: 'Nimbarkacharya',
    sanskritName: 'निम्बार्काचार्यः',
    period: 'c. 11th – 12th Century CE',
    birthPlace: 'Nimbi, Andhra Pradesh / Vrindavan',
    tradition: 'Sanakadi Sampradaya',
    philosophicalSystem: 'Dvaitadvaita (Dualistic Non-Dualism)',
    biography: 'Established the Nimbarka Sampradaya centered on Radha-Krishna worship in Vrindavan. Expounded Dvaitadvaita: Jiva and Jagat are distinct from God yet dependent and non-different in essence.',
    majorWorks: ['Vedanta Parijata Saurabha', 'Dashashloki', 'Savisesha Nirvisesha Srikrishna Stavaraja'],
    keyTeachings: ['Radha and Krishna are the joint Supreme Reality; Bhakti is the highest sadhana.'],
    citations: [{ id: 'ach-cite-nim', sourceName: 'Vedanta Parijata Saurabha', type: 'primary' }]
  },
  {
    id: 'vallabhacharya',
    name: 'Vallabhacharya (Mahaprabhuji)',
    sanskritName: 'वल्लभाचार्यः',
    period: '1479 CE – 1531 CE',
    birthPlace: 'Champaran, Chhattisgarh / Varanasi',
    tradition: 'Pushtimarga Sampradaya',
    philosophicalSystem: 'Shuddhadvaita (Pure Non-Duality)',
    biography: 'Founder of Pushtimarga (Path of Divine Grace). Born in Champaran. Proclaimed that the entire universe is pure Brahman without Maya. Re-discovered the idol of Sri Nathji at Mount Govardhan.',
    majorWorks: ['Anubhashya (Brahma Sutras)', 'Subodhini (Srimad Bhagavatam)', 'Shodasha Grantha', 'Madhurashtakam'],
    keyTeachings: ['Pushti (Grace) of Sri Krishna brings immediate spiritual fulfillment.'],
    citations: [{ id: 'ach-cite-val', sourceName: 'Anubhashya & Subodhini', type: 'primary' }]
  },

  // --- GAUDIYA VAISHNAVA ACHARYAS ---
  {
    id: 'chaitanya-mahaprabhu',
    name: 'Chaitanya Mahaprabhu',
    sanskritName: 'चैतन्यमहाप्रभुः',
    period: '1486 CE – 1534 CE',
    birthPlace: 'Navadvip, West Bengal',
    tradition: 'Gaudiya Vaishnavism',
    philosophicalSystem: 'Achintya Bhedabheda (Inconceivable Oneness and Difference)',
    biography: 'Combined incarnation of Radha and Krishna. Spearheaded the Sankirtana movement (congregational chanting of Hare Krishna Maha Mantra) across Bengal, Odisha, and South India.',
    majorWorks: ['Sikshashtakam (8 core verses)'],
    keyTeachings: ['Nama Sankirtana is the supreme spiritual path in Kali Yuga.'],
    citations: [{ id: 'ach-cite-chai', sourceName: 'Chaitanya Charitamrita', type: 'primary' }]
  },
  {
    id: 'rupa-goswami',
    name: 'Rupa Goswami',
    sanskritName: 'रूपगोस्वामी',
    period: '1489 CE – 1564 CE',
    birthPlace: 'Bengal / Vrindavan',
    tradition: 'Gaudiya Vaishnavism / Six Goswamis',
    philosophicalSystem: 'Achintya Bhedabheda / Rasa Theology',
    biography: 'Leader of the Six Goswamis of Vrindavan commissioned by Chaitanya Mahaprabhu to excavate holy sites in Vrindavan and write foundational scriptures on Bhakti Rasa.',
    majorWorks: ['Bhakti Rasamrita Sindhu', 'Ujjvala Nilamani', 'Laghu Bhagavatamrita', 'Vidagdha Madhava'],
    keyTeachings: ['Systematized the divine science of devotional emotions (Bhakti Rasa).'],
    citations: [{ id: 'ach-cite-rup', sourceName: 'Bhakti Rasamrita Sindhu', type: 'primary' }]
  },
  {
    id: 'jiva-goswami',
    name: 'Jiva Goswami',
    sanskritName: 'जीवगोस्वामी',
    period: '1513 CE – 1598 CE',
    birthPlace: 'Bengal / Vrindavan (Radha Damodara)',
    tradition: 'Gaudiya Vaishnavism',
    philosophicalSystem: 'Achintya Bhedabheda',
    biography: 'Nephew of Rupa and Sanatana Goswami. Greatest philosopher and scholar of the Gaudiya tradition who established Radha Damodara Temple library in Vrindavan.',
    majorWorks: ['Shat Sandarbhas (Tattva, Bhagavat, Paramatma, Krishna, Bhakti, Priti)', 'Gopala Champu'],
    keyTeachings: ['Definitive philosophical foundation of Achintya Bhedabheda Vedanta.'],
    citations: [{ id: 'ach-cite-jiv', sourceName: 'Tattva Sandarbha', type: 'primary' }]
  },
  {
    id: 'baladeva-vidyabhushana',
    name: 'Baladeva Vidyabhushana',
    sanskritName: 'बलदेवविद्याभूषणः',
    period: 'c. 1700 CE – 1768 CE',
    birthPlace: 'Odisha / Jaipur, Rajasthan',
    tradition: 'Gaudiya Vaishnavism',
    philosophicalSystem: 'Achintya Bhedabheda Vedanta',
    biography: 'Great scholar who represented Gaudiya Vaishnavism in the famous debate at Galta Ji in Jaipur. When challenged for lacking a traditional commentary on Brahma Sutras, he wrote Govinda Bhashya dictated by Lord Govindaji in a dream.',
    majorWorks: ['Govinda Bhashya', 'Prameya Ratnavali', 'Siddhanta Ratna'],
    keyTeachings: ['Established Gaudiya Vedanta as an orthodox Vedanta Prasthana.'],
    citations: [{ id: 'ach-cite-bal', sourceName: 'Govinda Bhashya', type: 'primary' }]
  },

  // --- KASHMIR SHAIVISM MASTERS ---
  {
    id: 'abhinavagupta',
    name: 'Abhinavagupta',
    sanskritName: 'अभिनवगुप्तः',
    period: 'c. 950 CE – 1016 CE',
    birthPlace: 'Kashmir Valley',
    tradition: 'Trika Kashmir Shaivism & Aesthetics',
    philosophicalSystem: 'Pratyabhijna (Self-Recognition)',
    biography: 'One of India’s greatest polymaths, mystics, and aestheticians. Authored over 35 masterworks synthesizing Trika Shaivism, Tantra, Aesthetics (Rasa Theory), and Music. Entered Bhairava Cave in Kashmir with 1,200 disciples reciting Bhairava Stotra.',
    majorWorks: ['Tantraloka', 'Abhinavabharati', 'Ishvarapratyabhijnavimarshini', 'Paramarthasara'],
    keyTeachings: [
      'The entire cosmos is the self-expansion of Shiva’s lila (divine play) and consciousness (Svatantrya).',
      'Liberation is spontaneous recognition (Pratyabhijna) of one’s own true nature as Shiva.'
    ],
    citations: [{ id: 'ach-cite-abh', sourceName: 'Tantraloka', type: 'primary' }]
  },
  {
    id: 'utpaladeva',
    name: 'Utpaladeva',
    sanskritName: 'उत्पलदेवः',
    period: 'c. 900 CE – 950 CE',
    birthPlace: 'Kashmir Valley',
    tradition: 'Kashmir Shaivism',
    philosophicalSystem: 'Pratyabhijna',
    biography: 'Disciple of Somananda and grand-guru of Abhinavagupta. Formulated the core philosophical doctrine of Pratyabhijna (Self-Recognition) in poetic stanzas.',
    majorWorks: ['Ishvarapratyabhijnakarika', 'Sivastotravali'],
    keyTeachings: ['The divine Lord Shiva shines as the inner subject within every experiencing soul.'],
    citations: [{ id: 'ach-cite-utp', sourceName: 'Ishvarapratyabhijnakarika', type: 'primary' }]
  },
  {
    id: 'kshemaraja',
    name: 'Kshemaraja',
    sanskritName: 'क्षेमराजः',
    period: 'c. 10th – 11th Century CE',
    birthPlace: 'Kashmir Valley',
    tradition: 'Trika Shaivism',
    philosophicalSystem: 'Pratyabhijna',
    biography: 'Chief disciple of Abhinavagupta. Simplified and preserved Kashmir Shaivism teachings for future generations through crisp summaries.',
    majorWorks: ['Pratyabhijnahridayam', 'Spanda Nirnaya', 'Siva Sutra Vimarshini'],
    keyTeachings: ['Chiti Svatantra Vishvasiddhi Hetuh: Supreme Consciousness alone creates the universe.'],
    citations: [{ id: 'ach-cite-ksh', sourceName: 'Pratyabhijnahridayam', type: 'primary' }]
  },

  // --- LINGAYAT / VEERASHAIVA MASTERS ---
  {
    id: 'basavanna',
    name: 'Jagadguru Basavanna',
    sanskritName: 'बसवेश्वरः',
    period: '1134 CE – 1196 CE',
    birthPlace: 'Basavana Bagewadi, Karnataka',
    tradition: 'Sharana Movement / Veerashaivism',
    philosophicalSystem: 'Shatsthala Siddhanta',
    biography: 'Statesman, poet, and social reformer who established Anubhava Mantapa (Hall of Spiritual Experience) in Kalyana. Pioneered egalitarian society, work-as-worship (Kayakave Kailasa), and Vachana literature.',
    majorWorks: ['Vachanas (Kudalasangamadeva Signature)'],
    keyTeachings: ['Kayakave Kailasa: Selfless work is heaven itself. Devotion transcends caste and class.'],
    citations: [{ id: 'ach-cite-bas', sourceName: 'Basava Purana & Vachanas', type: 'primary' }]
  },

  // --- VEDIC SCHOLARS, GRAMMARIANS & ANCIENT RISHIS ---
  {
    id: 'panini',
    name: 'Maharshi Panini',
    sanskritName: 'महर्षिपाणिनिः',
    period: 'c. 6th – 4th Century BCE',
    birthPlace: 'Shalatula (Near Peshawar / Indus)',
    tradition: 'Vyakarana Vedanga',
    philosophicalSystem: 'Shabda Brahma / Generative Grammar',
    biography: 'Father of linguistics who composed Ashtadhyayi, a 3,996-sutra generative grammar of Sanskrit renowned for mathematical perfection and logical precision.',
    majorWorks: ['Ashtadhyayi', 'Dhatupatha', 'Ganapatha'],
    keyTeachings: ['Language is structured like a generative code reflecting Shabda Brahman.'],
    citations: [{ id: 'ach-cite-pan', sourceName: 'Ashtadhyayi', type: 'primary' }]
  },
  {
    id: 'patanjali',
    name: 'Maharshi Patanjali',
    sanskritName: 'महर्षिपतञ्जलिः',
    period: 'c. 2nd Century BCE',
    birthPlace: 'Gonarda, Ancient Bharat',
    tradition: 'Yoga Darshana & Vyakarana',
    philosophicalSystem: 'Raja Yoga / Ashtanga Yoga',
    biography: 'Author of the Yoga Sutras, the foundational text of Yoga philosophy, and Mahabhashya, the definitive commentary on Panini’s grammar.',
    majorWorks: ['Yoga Sutras', 'Mahabhashya'],
    keyTeachings: ['Yogas Chitta Vritti Nirodhah: Yoga is the stilling of mental fluctuations.'],
    citations: [{ id: 'ach-cite-pat', sourceName: 'Yoga Sutras', type: 'primary' }]
  },
  {
    id: 'kumarila-bhatta',
    name: 'Kumarila Bhatta',
    sanskritName: 'कुमारिलभट्टः',
    period: 'c. 7th Century CE',
    birthPlace: 'Assam / Prayagraj',
    tradition: 'Purva Mimamsa',
    philosophicalSystem: 'Bhatta Mimamsa',
    biography: 'Defended Vedic authority and ritual philosophy across Bharat. Mastered opponent schools before defeating them in debate to protect Vedic karma principles.',
    majorWorks: ['Shlokavarttika', 'Tantravarttika', 'Tuptika'],
    keyTeachings: ['Vedic words are eternally authoritative (Apaurusheya).'],
    citations: [{ id: 'ach-cite-kum', sourceName: 'Shlokavarttika', type: 'primary' }]
  },
  {
    id: 'sayana-acharya',
    name: 'Sayana Acharya',
    sanskritName: 'सायणाचार्यः',
    period: 'c. 1315 CE – 1387 CE',
    birthPlace: 'Vijayanagara Empire, Karnataka',
    tradition: 'Vedic Exegesis',
    philosophicalSystem: 'Vedabhashya',
    biography: 'Prime Minister of Vijayanagara and brother of Swami Vidyaranya. Authored monumental commentaries on all four Vedas, Brahmanas, and Aranyakas preserving Vedic knowledge for humanity.',
    majorWorks: ['Vedartha Prakasha (Commentaries on Rig, Yajur, Sama, Atharva Veda)'],
    keyTeachings: ['Comprehensive ritual, astronomical, and spiritual interpretation of Vedic hymns.'],
    citations: [{ id: 'ach-cite-say', sourceName: 'Rigveda Bhashya Bhumika', type: 'primary' }]
  },

  // --- MODERN SPIRITUAL MASTERS & REFORMERS ---
  {
    id: 'sri-ramakrishna',
    name: 'Sri Ramakrishna Paramahamsa',
    sanskritName: 'श्रीरामकृष्णपरमहंसः',
    period: '1836 CE – 1886 CE',
    birthPlace: 'Kamarpukur, West Bengal',
    tradition: 'Universal Synthesis / Dakshineswar',
    philosophicalSystem: 'Yat Mat Tat Path (As Many Faiths, So Many Paths)',
    biography: 'Saint of Dakshineswar who experienced God through Tantra, Vaishnavism, Advaita Vedanta, Islam, and Christianity. Awakened modern spiritual consciousness and trained Swami Vivekananda.',
    majorWorks: ['Gospel of Sri Ramakrishna (recorded by M.)'],
    keyTeachings: ['All religions lead to the same ultimate Goal. Pure devotion and sincerity unlock divine vision.'],
    citations: [{ id: 'ach-cite-srk', sourceName: 'Sri Ramakrishna Kathamrita', type: 'primary' }]
  },
  {
    id: 'swami-vivekananda',
    name: 'Swami Vivekananda',
    sanskritName: 'स्वामी विवेकानन्दः',
    period: '1863 CE – 1902 CE',
    birthPlace: 'Kolkata, West Bengal',
    tradition: 'Ramakrishna Math & Mission / Practical Vedanta',
    philosophicalSystem: 'Practical Vedanta',
    biography: 'Chief disciple of Sri Ramakrishna. Addressed the 1893 Parliament of Religions in Chicago ("Sisters and Brothers of America"). Re-awakened global appreciation of Sanatana Dharma.',
    majorWorks: ['Raja Yoga', 'Jnana Yoga', 'Karma Yoga', 'Bhakti Yoga'],
    keyTeachings: ['Arise, awake, and stop not till the goal is reached! Service to man is service to God.'],
    citations: [{ id: 'ach-cite-viv', sourceName: 'Complete Works of Swami Vivekananda', type: 'primary' }]
  },
  {
    id: 'sri-aurobindo',
    name: 'Sri Aurobindo Ghose',
    sanskritName: 'श्रीअरविन्दः',
    period: '1872 CE – 1950 CE',
    birthPlace: 'Kolkata / Puducherry',
    tradition: 'Integral Yoga (Purna Yoga)',
    philosophicalSystem: 'Integral Vedanta & Supramental Evolution',
    biography: 'Freedom fighter, yogi, seer, and poet who spent 40 years in Puducherry exploring cosmic consciousness and the descent of Supramental light into earth nature.',
    majorWorks: ['The Life Divine', 'Savitri: A Legend and a Symbol', 'Synthesis of Yoga', 'Essays on the Gita'],
    keyTeachings: ['Spiritual evolution does not end in escape from earth, but in transforming material life by divine consciousness.'],
    citations: [{ id: 'ach-cite-aur', sourceName: 'The Life Divine', type: 'primary' }]
  },
  {
    id: 'ramana-maharshi',
    name: 'Bhagavan Ramana Maharshi',
    sanskritName: 'रमणमहर्षिः',
    period: '1879 CE – 1950 CE',
    birthPlace: 'Tiruchuzhi / Tiruvannamalai (Arunachala)',
    tradition: 'Advaita Atma-Vichara',
    philosophicalSystem: 'Self-Inquiry (Who Am I?)',
    biography: 'Sage of Arunachala who attained spontaneous self-realization at age 16. Lived at Arunachala hill guiding seekers through silence and direct Self-Inquiry.',
    majorWorks: ['Ulladu Narpadu', 'Upadesha Saram', 'Aksharamanamalai'],
    keyTeachings: ['Inquire ceaselessly: "Who Am I?" until the mind dissolves in pure heart-consciousness.'],
    citations: [{ id: 'ach-cite-ram-mah', sourceName: 'Talks with Sri Ramana Maharshi', type: 'primary' }]
  },
  {
    id: 'paramahansa-yogananda',
    name: 'Paramahansa Yogananda',
    sanskritName: 'परमहंसयोगानन्दः',
    period: '1893 CE – 1952 CE',
    birthPlace: 'Gorakhpur, Uttar Pradesh / Los Angeles',
    tradition: 'Kriya Yoga Lineage (Yogoda Satsanga / SRF)',
    philosophicalSystem: 'Kriya Yoga & Scientific Meditation',
    biography: 'Author of the world-famous "Autobiography of a Yogi". Disciples of Swami Sri Yukteswar Giri and Lahiri Mahasaya who introduced Kriya Yoga meditation to millions worldwide.',
    majorWorks: ['Autobiography of a Yogi', 'God Talks with Arjuna (Gita Commentary)'],
    keyTeachings: ['Direct realization of God through scientific Kriya Yoga meditation techniques.'],
    citations: [{ id: 'ach-cite-yog', sourceName: 'Autobiography of a Yogi', type: 'primary' }]
  },
  {
    id: 'swami-sivananda',
    name: 'Swami Sivananda Saraswati',
    sanskritName: 'स्वामी शिवानन्दः',
    period: '1887 CE – 1963 CE',
    birthPlace: 'Pattamadai, Tamil Nadu / Rishikesh',
    tradition: 'Divine Life Society',
    philosophicalSystem: 'Yoga of Synthesis',
    biography: 'Medical doctor turned monk who established Divine Life Society on Ganga banks in Rishikesh. Authored over 300 books on Yoga, Vedanta, and spiritual discipline.',
    majorWorks: ['Bliss Divine', 'Practice of Yoga', 'Mind: Its Mysteries and Control'],
    keyTeachings: ['Serve, Love, Give, Purify, Meditate, Realize. Be good, do good.'],
    citations: [{ id: 'ach-cite-siv', sourceName: 'Bliss Divine', type: 'primary' }]
  },
  {
    id: 'swami-chinmayananda',
    name: 'Swami Chinmayananda',
    sanskritName: 'स्वामी चिन्मयानन्दः',
    period: '1916 CE – 1993 CE',
    birthPlace: 'Ernakulam, Kerala / Global',
    tradition: 'Chinmaya Mission / Advaita Vedanta',
    philosophicalSystem: 'Advaita Vedanta Jnana Yajna',
    biography: 'Journalist and freedom fighter initiated by Swami Sivananda and trained by Swami Tapovan Maharaj. Spearheaded Jnana Yajnas worldwide explaining Upanishads and Gita to modern minds.',
    majorWorks: ['The Holy Geeta Commentary', 'Art of Man Making', 'Upadesha Sara Commentary'],
    keyTeachings: ['To transform society, we must transform individual human minds through Vedantic vision.'],
    citations: [{ id: 'ach-cite-chin', sourceName: 'Chinmaya Mission Archives', type: 'primary' }]
  },
  {
    id: 'swami-prabhupada',
    name: 'A.C. Bhaktivedanta Swami Prabhupada',
    sanskritName: 'ए. सी. भक्तिवेदान्तस्वामी',
    period: '1896 CE – 1977 CE',
    birthPlace: 'Kolkata / Vrindavan / Global',
    tradition: 'Gaudiya Vaishnavism / ISKCON',
    philosophicalSystem: 'Achintya Bhedabheda / Bhagavata Bhakti',
    biography: 'Founder-Acharya of ISKCON. At age 69, traveled to America aboard steamship Jaladuta. Translated Srimad Bhagavatam and Bhagavad Gita into English and spread Krishna Bhakti worldwide.',
    majorWorks: ['Bhagavad-gita As It Is', 'Srimad-Bhagavatam (18 Volumes)', 'Chaitanya-charitamrita'],
    keyTeachings: ['Chanting Hare Krishna Maha Mantra restores soul’s eternal relationship with God.'],
    citations: [{ id: 'ach-cite-prabh', sourceName: 'Bhagavad-gita As It Is', type: 'primary' }]
  },
  {
    id: 'narayana-guru',
    name: 'Sree Narayana Guru',
    sanskritName: 'श्रीनारायणगुरुः',
    period: '1856 CE – 1928 CE',
    birthPlace: 'Chempazhanthy, Kerala',
    tradition: 'Advaita Reform / Sivagiri',
    philosophicalSystem: 'Practical Advaita',
    biography: 'Revered spiritual leader, philosopher, and social reformer of Kerala. Consecrated Aruvippuram Shiva temple proclaiming universal equality. Authored spiritual works in Sanskrit, Tamil, and Malayalam.',
    majorWorks: ['Athmopadesa Satakam', 'Darsana Mala', 'Daiva Dasakam'],
    keyTeachings: ['Oru Jathi, Oru Matham, Oru Daivam Manushyanu: One Caste, One Religion, One God for Humanity.'],
    citations: [{ id: 'ach-cite-nar', sourceName: 'Athmopadesa Satakam', type: 'primary' }]
  },
  {
    id: 'neem-karoli-baba',
    name: 'Neem Karoli Baba (Maharaj-ji)',
    sanskritName: 'नीमकरोरी बाबा',
    period: 'c. 1900 CE – 1973 CE',
    birthPlace: 'Akbarpur, UP / Kainchi Dham',
    tradition: 'Hanuman Bhakti / Kainchi Dham',
    philosophicalSystem: 'Bhakti & Compassionate Service',
    biography: 'Mystic saint devoted to Lord Hanuman. Lived at Kainchi Dham in Kumaon hills. Inspired seekers from all continents through unconditional love, simplicity, and quiet miracles.',
    majorWorks: ['Oral Teachings recorded by devotees'],
    keyTeachings: ['Love everyone, serve everyone, remember God, and tell the truth.'],
    citations: [{ id: 'ach-cite-neem', sourceName: 'Miracle of Love by Ram Dass', type: 'primary' }]
  }
];
