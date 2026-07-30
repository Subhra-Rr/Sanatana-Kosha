import { FestivalItem } from '../types';

export const FESTIVALS_DATA: FestivalItem[] = [
  {
    id: 'diwali',
    name: 'Diwali (Deepavali)',
    sanskritName: 'दीपावली',
    lunarMonth: 'Kartika',
    tithi: 'Amavasya (New Moon)',
    deityAssociated: 'Goddess Lakshmi, Sri Rama, Lord Ganesha',
    significance: 'Festival of Lights symbolizing triumph of Light over Darkness, Knowledge over Ignorance, and Dharma over Adharma.',
    scripturalOrigin: 'Celebrates Sri Rama’s triumphant return to Ayodhya after 14-year exile and slaying Ravana; also Goddess Lakshmi’s emergence during Samudra Manthan.',
    ritualsAndObservances: [
      'Lighting clay oil lamps (Diyas) and Rangoli decorations.',
      'Lakshmi & Ganesha Puja in evening.',
      'Sharing sweets and charity to needy.'
    ],
    regionOrGlobal: 'Pan-Indian & Worldwide'
  },
  {
    id: 'maha-shivaratri',
    name: 'Maha Shivaratri',
    sanskritName: 'महाशिवरात्रिः',
    lunarMonth: 'Phalguna (or Magha)',
    tithi: 'Krishna Paksha Chaturdashi',
    deityAssociated: 'Lord Shiva & Goddess Parvati',
    significance: 'The Great Night of Shiva celebrating the divine cosmic dance (Tandava) and divine union of Shiva and Parvati.',
    scripturalOrigin: 'Mentioned in Shiva Purana; night when Shiva drank Halahala poison to protect creation.',
    ritualsAndObservances: [
      'All-night vigil (Jagaran) and meditation.',
      'Abhishekam with milk, water, honey, and Bilva leaves.',
      'Fasting and chanting Om Namah Shivaya.'
    ],
    regionOrGlobal: 'Pan-Indian & Worldwide'
  },
  {
    id: 'navaratri',
    name: 'Sharad Navaratri',
    sanskritName: 'शरन्नवरात्रिः',
    lunarMonth: 'Ashvina',
    tithi: 'Shukla Paksha Pratipada to Navami',
    deityAssociated: 'Maa Durga (Navadurga)',
    significance: 'Nine sacred nights dedicated to the nine forms of Goddess Durga (Shailaputri to Siddhidatri).',
    scripturalOrigin: 'Devi Mahatmyam / Markandeya Purana; Devi vanquishing Mahishasura after 9 days of battle.',
    ritualsAndObservances: [
      'Ghatasthapana and Durga Saptashati recitation.',
      'Garba and Dandiya Raas in Gujarat.',
      'Durga Puja pandals in Bengal.',
      'Kanya Puja (worshipping young girls as divine energy).'
    ],
    regionOrGlobal: 'Pan-Indian & Worldwide'
  },
  {
    id: 'janmashtami',
    name: 'Krishna Janmashtami',
    sanskritName: 'कृष्णजन्माष्टमी',
    lunarMonth: 'Bhadrapada',
    tithi: 'Krishna Paksha Ashtami',
    deityAssociated: 'Sri Krishna',
    significance: 'Celebrating the divine birth of Sri Krishna in Mathura prison to protect world Dharma.',
    scripturalOrigin: 'Srimad Bhagavata Purana Canto 10; Vasudeva transporting baby Krishna across flooded Yamuna to Gokula.',
    ritualsAndObservances: [
      'Midnight birth celebration and Arati.',
      'Fasting until midnight.',
      'Dahi Handi human pyramids in Maharashtra.',
      'Swinging Bal Gopal in decorated cradles.'
    ],
    regionOrGlobal: 'Pan-Indian & Worldwide'
  },
  {
    id: 'rama-navami',
    name: 'Rama Navami',
    sanskritName: 'रामनवमी',
    lunarMonth: 'Chaitra',
    tithi: 'Shukla Paksha Navami',
    deityAssociated: 'Sri Rama',
    significance: 'Celebrating the divine birth of Sri Rama in Ayodhya as seventh Avatara of Lord Vishnu.',
    scripturalOrigin: 'Valmiki Ramayana Bala Kanda; birth of Rama under Punarvasu Nakshatra.',
    ritualsAndObservances: [
      'Continuous recitation of Ramcharitmanas and Valmiki Ramayana.',
      'Kalyanotsavam (spiritual wedding of Rama and Sita).',
      'Distributing Panakam (jaggery cardamom beverage) and Kosambari.'
    ],
    regionOrGlobal: 'Pan-Indian & Worldwide'
  },
  {
    id: 'kumbh-mela',
    name: 'Kumbh Mela',
    sanskritName: 'कुम्भमेला',
    lunarMonth: 'Varies according to Jupiter and Sun positions',
    tithi: 'Purnima / Amavasya during Kumbh alignment',
    deityAssociated: 'Sacred Rivers & Cosmic Deities',
    significance: 'World’s largest peaceful religious gathering, held every 12 years across 4 sacred sites: Prayagraj, Haridwar, Ujjain, and Nashik.',
    scripturalOrigin: 'Samudra Manthan story: drops of Amrita (immortality nectar) fell at 4 river sites from Garuda’s pitcher.',
    ritualsAndObservances: [
      'Shahi Snan (Royal Holy Bath) in sacred river confluence.',
      'Satsang with Akharas, Sages, and Acharyas.',
      'Chanting and Vedic discourses.'
    ],
    regionOrGlobal: 'Prayagraj, Haridwar, Ujjain, Nashik'
  }
];
