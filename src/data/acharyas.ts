import { AcharyaItem } from '../types';

export const ACHARYAS_DATA: AcharyaItem[] = [
  {
    id: 'adi-shankaracharya',
    name: 'Adi Shankaracharya',
    sanskritName: 'आदिशङ्कराचार्यः',
    period: '788 CE – 820 CE (Traditional 509 BCE)',
    birthPlace: 'Kalady, Kerala',
    tradition: 'Advaita Vedanta & Smarta Tradition',
    philosophicalSystem: 'Advaita (Absolute Non-Duality)',
    biography: 'Born in Kalady, Kerala. Mastered four Vedas by age 8. Became sannyasi under Govinda Bhagavatpada on Narmada banks. Traveled twice across the length and breadth of India on foot (Digvijaya), engaging scholars in philosophical debates, re-establishing Vedic wisdom, composing immortal commentaries (Bhashyas) on Prasthana Trayi, and establishing 4 Shankaracharya Mathas at 4 cardinal corners of India.',
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
      {
        id: 'ach-cite-1',
        sourceName: 'Shankara Digvijaya (Madhaviya)',
        type: 'primary'
      }
    ]
  },
  {
    id: 'ramanujacharya',
    name: 'Ramanujacharya',
    sanskritName: 'रामानुजाचार्यः',
    period: '1017 CE – 1137 CE',
    birthPlace: 'Sriperumbudur, Tamil Nadu',
    tradition: 'Sri Vaishnavism',
    philosophicalSystem: 'Vishishtadvaita (Qualified Non-Duality)',
    biography: 'Great philosopher-saint who systematized Sri Vaishnavism. Studied under Yadavaprakasha, then succeeded Yamunacharya as head of Srirangam. Famous for his revolutionary compassion: scaled the temple tower of Tirukosthiyur to proclaim the sacred Ashtakshara Mantra (Om Namo Narayanaya) to all people regardless of caste or background.',
    majorWorks: [
      'Sri Bhashya (Commentary on Brahma Sutras)',
      'Gita Bhashya',
      'Vedarthasangraha',
      'Vedantadipa',
      'Gadya Trayam (Saranagati Gadya, Sriranga Gadya, Vaikuntha Gadya)'
    ],
    keyTeachings: [
      'Devotion (Bhakti) and Total Surrender (Saranagati/Prapatti) to Narayana.',
      'Universal equality of souls before God.',
      'Organized temple administration at Srirangam and Melukote.'
    ],
    travelMapPoints: [
      { name: 'Sriperumbudur', lat: 12.9692, lng: 79.9405, description: 'Birthplace.' },
      { name: 'Srirangam', lat: 10.8623, lng: 78.6908, description: 'Chief seat of Sri Vaishnavism.' },
      { name: 'Melukote', lat: 12.6644, lng: 76.6508, description: 'Established Cheluvanarayana Swamy temple during exile.' }
    ],
    citations: [
      {
        id: 'ach-cite-2',
        sourceName: 'Prapannamritam & Sri Ranga Gadyam',
        type: 'primary'
      }
    ]
  },
  {
    id: 'madhvacharya',
    name: 'Madhvacharya',
    sanskritName: 'मध्वाचार्यः',
    period: '1238 CE – 1317 CE',
    birthPlace: 'Pajaka near Udupi, Karnataka',
    tradition: 'Tattvavada / Dvaita Tradition',
    philosophicalSystem: 'Dvaita (Dualism)',
    biography: 'Born near Udupi. Proponent of Dvaita philosophy. Established the Krishna Temple at Udupi and Ashta Mathas (Eight Monasteries) to conduct worship in rotation. Traveled across India twice to spread Tattvavada.',
    majorWorks: [
      'Anuvyakhyana',
      'Brahma Sutra Bhashya',
      'Gita Bhashya & Gita Tatparya',
      'Anu-Madhva-Vijaya'
    ],
    keyTeachings: [
      'Pancha Bheda (Five fundamental real differences).',
      'Hari Sarvottama (Lord Hari is supreme independent reality).',
      'Jagat Satyam (World is completely real).'
    ],
    travelMapPoints: [
      { name: 'Pajaka', lat: 13.3100, lng: 74.7800, description: 'Birthplace.' },
      { name: 'Udupi', lat: 13.3409, lng: 74.7421, description: 'Established Sri Krishna Temple and Ashta Mathas.' }
    ],
    citations: [
      {
        id: 'ach-cite-3',
        sourceName: 'Sumadhva Vijaya',
        type: 'primary'
      }
    ]
  },
  {
    id: 'chaitanya-mahaprabhu',
    name: 'Chaitanya Mahaprabhu',
    sanskritName: 'चैतन्यमहाप्रभुः',
    period: '1486 CE – 1534 CE',
    birthPlace: 'Navadvip, West Bengal',
    tradition: 'Gaudiya Vaishnavism',
    philosophicalSystem: 'Achintya Bhedabheda (Inconceivable Oneness and Difference)',
    biography: 'Revered as combined incarnation of Radha and Krishna. Spearheaded the Sankirtana movement (congregational chanting of Hare Krishna Maha Mantra) across Bengal, Odisha, and South India. Spent final 24 years in Puri Jagannath.',
    majorWorks: [
      'Sikshashtakam (8 core verses on devotion)'
    ],
    keyTeachings: [
      'Nama Sankirtana as the supreme practice for Kali Yuga.',
      'Premayuta Bhakti (Unconditional ecstatic divine love).'
    ],
    travelMapPoints: [
      { name: 'Navadvip', lat: 23.4083, lng: 88.3658, description: 'Birthplace and early Sankirtana.' },
      { name: 'Puri', lat: 19.8135, lng: 85.8312, description: 'Residence at Gambhira and Jagannath worship.' }
    ],
    citations: [
      {
        id: 'ach-cite-4',
        sourceName: 'Chaitanya Charitamrita by Krishnadasa Kaviraja',
        type: 'primary'
      }
    ]
  }
];
