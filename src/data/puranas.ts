import { PuranaItem } from '../types';

export const PURANAS_DATA: PuranaItem[] = [
  {
    id: 'vishnu-purana',
    name: 'Vishnu Purana',
    sanskritName: 'विष्णुपुराणम्',
    type: 'Mahapurana',
    dominantDeity: 'Vishnu',
    traditionalVerseCount: 23000,
    keyTopics: ['Srishti (Cosmology)', 'Manvantara Cycles', 'Dhruva & Prahlada Stories', 'Vamsha (Dynastic Genealogies)', 'Avataras'],
    synopsis: 'Considered one of the most cohesive and well-preserved Puranas, authored by Sage Parashara (father of Veda Vyasa). Structured in 6 Amsas (parts), it details cosmic time cycles (Chaturyuga, Kalpa), geography of Jambudvipa, life of Sri Krishna, and genealogies of Solar and Lunar dynasties.',
    notableStories: [
      'Story of young Dhruva’s unwavering tapas to attain Pole Star status.',
      'Prahlada’s steadfast faith in Narayana despite Hiranyakashipu’s persecutions.',
      'Detailed geographical descriptions of 7 Dvipas (continents) and oceans.'
    ],
    citations: [
      {
        id: 'p-cite-1',
        sourceName: 'Vishnu Purana with Sridhara Svami Commentary',
        sectionOrVerse: 'Book 1 to 6',
        type: 'primary'
      }
    ]
  },
  {
    id: 'shrimad-bhagavatam',
    name: 'Shrimad Bhagavata Purana',
    sanskritName: 'श्रीमद्भागवतपुराणम्',
    type: 'Mahapurana',
    dominantDeity: 'Vishnu',
    traditionalVerseCount: 18000,
    keyTopics: ['Navadha Bhakti (9 Forms of Devotion)', '24 Gurus of Avadhuta', 'Rasa Lila', 'Kaliya Mardana', 'Gajendra Moksha'],
    synopsis: 'Composed of 12 Skandhas (books), it is revered as the crown jewel of Puranic literature (Srimad Bhagavatam is the ripe fruit of the Vedic wish-fulfilling tree). Narrated by Sage Shuka to King Parikshit on the banks of Ganga.',
    notableStories: [
      'Gajendra’s cry for divine help and instant liberation.',
      'The 24 Gurus from Nature in Canto 11 (Earth, Wind, Water, Fire, Spider, Bee, etc.).',
      'Childhood pastimes and philosophical dialogues of Sri Krishna in Canto 10.'
    ],
    citations: [
      {
        id: 'p-cite-2',
        sourceName: 'Bhagavata Purana',
        sectionOrVerse: 'Canto 1 to 12',
        commentator: 'Sridhara Svami & Jiva Gosvami',
        type: 'primary'
      }
    ]
  },
  {
    id: 'shiva-purana',
    name: 'Shiva Purana',
    sanskritName: 'शिवपुराणम्',
    type: 'Mahapurana',
    dominantDeity: 'Shiva',
    traditionalVerseCount: 24000,
    keyTopics: ['Mahashivaratri Vrata', '12 Jyotirlingas Manifestation', 'Parvati Tapas & Marriage', 'Kailasha Geography', 'Panchakshara Mantra'],
    synopsis: 'Organized into 7 Samhitas (Vidyeshvara, Rudra, Sata, Koti-rudra, Uma, Kailasa, Vayaviya). Expounds the ultimate nature of Shiva as Nirguna Supreme Brahman and Saguna benefactor.',
    notableStories: [
      'Origin of the infinite pillar of fire (Lingodbhava) tested by Brahma and Vishnu.',
      'Goddess Parvati’s intense penance in Himalayas to win Shiva as consort.',
      'Slaying of Tripura demons by Tripurantaka Shiva.'
    ],
    citations: [
      {
        id: 'p-cite-3',
        sourceName: 'Shiva Purana',
        sectionOrVerse: 'Vidyeshvara & Rudra Samhita',
        type: 'primary'
      }
    ]
  },
  {
    id: 'devi-bhagavata-purana',
    name: 'Devi Bhagavata Purana',
    sanskritName: 'देवीभागवतपुराणम्',
    type: 'Mahapurana',
    dominantDeity: 'Shakti',
    traditionalVerseCount: 18000,
    keyTopics: ['Shakti Peethas', 'Navaratri Observance', 'Mahishasura Mardini', 'Devi Gita', 'Sri Chakra Meditation'],
    synopsis: 'Central text of Shakta tradition, extolling Mahadevi as the primal creative power (Adishakti) from whom Trinity (Brahma, Vishnu, Shiva) emanates. Contains the famous **Devi Gita** in Book 7.',
    notableStories: [
      'Devi manifesting to vanquish Mahishasura, Shumbha, and Nishumbha.',
      'Origin story of 51 Shakti Peethas from Sati’s sacred body parts.',
      'Devi Gita instructions on Kundalini yoga and Jnana.'
    ],
    citations: [
      {
        id: 'p-cite-4',
        sourceName: 'Srimad Devi Bhagavatam',
        sectionOrVerse: 'Skandha 1 to 12',
        type: 'primary'
      }
    ]
  },
  {
    id: 'markandeya-purana',
    name: 'Markandeya Purana',
    sanskritName: 'मार्कण्डेयपुराणम्',
    type: 'Mahapurana',
    dominantDeity: 'General',
    traditionalVerseCount: 9000,
    keyTopics: ['Durga Saptashati (Devi Mahatmyam)', 'Karma & Rebirth', 'Genealogies', 'Geographical treatises'],
    synopsis: 'Famous for containing the 700-verse **Devi Mahatmyam** (Chapters 81-93), chanted universally during Navaratri festivals.',
    notableStories: [
      'Sage Markandeya answering Jaimini’s questions through four celestial birds.',
      'Devi Mahatmyam battle against Chanda, Munda, Raktabija, and Dhumralochana.'
    ],
    citations: [
      {
        id: 'p-cite-5',
        sourceName: 'Markandeya Purana',
        sectionOrVerse: 'Durga Saptashati / Devi Mahatmyam',
        type: 'primary'
      }
    ]
  },
  {
    id: 'padma-purana',
    name: 'Padma Purana',
    sanskritName: 'पद्मपुराणम्',
    type: 'Mahapurana',
    dominantDeity: 'Vishnu',
    traditionalVerseCount: 55000,
    keyTopics: ['Pushkara Teertha', 'Gita Mahatmya', 'Ekadashi Vratas', 'Ramacharitram', 'Pilgrimage guides'],
    synopsis: 'One of the longest Puranas, divided into 5 Khandas (Srishti, Bhumi, Svarga, Patala, Uttara). Details sacred rivers, shrines, and moral virtues.',
    notableStories: [
      'Creation of the universe from the cosmic lotus (Padma) originating from Vishnu’s navel.',
      'Gita Mahatmya stories illustrating benefits of reading each Gita chapter.'
    ],
    citations: [
      {
        id: 'p-cite-6',
        sourceName: 'Padma Purana',
        sectionOrVerse: 'Uttara Khanda',
        type: 'primary'
      }
    ]
  }
];
