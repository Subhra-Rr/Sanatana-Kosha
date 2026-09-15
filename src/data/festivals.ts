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
    name: 'Sharad Navaratri & Vijayadashami',
    sanskritName: 'शरन्नवरात्रिः विजयादशमी च',
    lunarMonth: 'Ashvina',
    tithi: 'Shukla Paksha Pratipada to Dashami',
    deityAssociated: 'Maa Durga (Navadurga) & Sri Rama',
    significance: 'Nine sacred nights dedicated to the nine forms of Goddess Durga (Shailaputri to Siddhidatri), culminating in Vijayadashami (Dussehra).',
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
    id: 'ganesh-chaturthi',
    name: 'Ganesh Chaturthi (Vinayaka Chavithi)',
    sanskritName: 'गणेशचतुर्थी',
    lunarMonth: 'Bhadrapada',
    tithi: 'Shukla Paksha Chaturthi',
    deityAssociated: 'Lord Ganesha (Vinayaka)',
    significance: 'Celebrates the birth and earthly manifestation of Lord Ganesha, remover of obstacles and lord of wisdom.',
    scripturalOrigin: 'Ganesha Purana and Mudgala Purana; Parvati creating Ganesha from turmeric paste and Shiva restoring him with elephant head.',
    ritualsAndObservances: [
      'Prana Pratishtha of clay Ganesha idols.',
      'Offering 21 Modakas, Durva grass, and red flowers.',
      'Immersion (Visarjan) after 10 days with music and chanting.'
    ],
    regionOrGlobal: 'Maharashtra, Telangana, Karnataka, Pan-India'
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
    id: 'holi',
    name: 'Holi (Vasantotsava)',
    sanskritName: 'होली (वसन्तोत्सवः)',
    lunarMonth: 'Phalguna',
    tithi: 'Purnima (Full Moon)',
    deityAssociated: 'Prahlada, Narasimha, Radha-Krishna',
    significance: 'Spring festival of colors celebrating the victory of Prahlada’s devotion over Holika’s flames and divine love of Radha-Krishna.',
    scripturalOrigin: 'Vishnu Purana (Holika Dahan); Bhagavata Purana (Spring Rasa Lila in Braj Dham).',
    ritualsAndObservances: [
      'Holika Dahan bonfire on eve of Holi.',
      'Playing with organic Gulal colors.',
      'Lathmar Holi in Barsana & Nandgaon.'
    ],
    regionOrGlobal: 'Pan-Indian & Global'
  },
  {
    id: 'guru-purnima',
    name: 'Guru Purnima (Vyasa Purnima)',
    sanskritName: 'गुरुपूर्णिमा (व्यासापूर्णिमा)',
    lunarMonth: 'Ashadha',
    tithi: 'Purnima (Full Moon)',
    deityAssociated: 'Maharshi Veda Vyasa & Spiritual Gurus',
    significance: 'Honoring Maharshi Veda Vyasa (author of Mahabharata, compiler of 4 Vedas and 18 Puranas) and all spiritual teachers in the lineage.',
    scripturalOrigin: 'Birth anniversary of Sage Veda Vyasa and commencement of Chaturmasya vow.',
    ritualsAndObservances: [
      'Guru Puja and offering Dakshina.',
      'Chanting Guru Stotram and Upanishads.',
      'Beginning of 4-month monastic retreat (Chaturmasya).'
    ],
    regionOrGlobal: 'Pan-Indian & Global'
  },
  {
    id: 'makar-sankranti',
    name: 'Makar Sankranti / Pongal / Uttarayana',
    sanskritName: 'मकरसङ्क्रान्तिः (उत्तरायणम्)',
    lunarMonth: 'Magha / Pausha (Solar Transit into Capricorn)',
    tithi: 'Solar Transit (14/15 January)',
    deityAssociated: 'Surya Bhagavan (Sun God)',
    significance: 'Solar harvest festival marking Sun’s northern journey (Uttarayana), symbolizing renewal, health, and cosmic gratitude.',
    scripturalOrigin: 'Mahabharata (Bhisma awaiting Uttarayana for Svananda Mukti); Surya Siddhanta.',
    ritualsAndObservances: [
      'Sacred river baths at Ganga Sagar and Prayagraj.',
      'Offering Til-Gul (sesame and jaggery).',
      'Kite flying in Gujarat & Rajasthan.',
      'Boiling sweet harvest Pongal in Tamil Nadu.'
    ],
    regionOrGlobal: 'Pan-Indian (Pongal, Bihu, Lohri, Uttarayana)'
  },
  {
    id: 'hanuman-jayanti',
    name: 'Hanuman Jayanti',
    sanskritName: 'हनुमज्जयन्ती',
    lunarMonth: 'Chaitra',
    tithi: 'Purnima (Full Moon)',
    deityAssociated: 'Lord Hanuman',
    significance: 'Celebrates the birth of Lord Hanuman, embodiment of courage, selfless service (Sewa), and total devotion to Sri Rama.',
    scripturalOrigin: 'Valmiki Ramayana Sundara Kanda; Anjana Devi and Kesari blessed by Vayu Deva.',
    ritualsAndObservances: [
      'Reciting Hanuman Chalisa 108 times.',
      'Applying Sindoor (vermilion) to Hanuman idols.',
      'Distributing Prasadam and conducting Sundarakanda Parayan.'
    ],
    regionOrGlobal: 'Pan-Indian & Global'
  },
  {
    id: 'vasant-panchami',
    name: 'Vasant Panchami (Saraswati Puja)',
    sanskritName: 'वसन्तपञ्चमी (सरस्वतीपूजा)',
    lunarMonth: 'Magha',
    tithi: 'Shukla Paksha Panchami',
    deityAssociated: 'Goddess Saraswati',
    significance: 'Marks arrival of Spring and worshipping Goddess Saraswati, patron of wisdom, music, arts, and Sanskrit learning.',
    scripturalOrigin: 'Brahma Vaivarta Purana; Lord Krishna bestowing boon upon Goddess Saraswati to be worshipped on this day.',
    ritualsAndObservances: [
      'Vidya Arambham (initiating young children into learning).',
      'Wearing yellow attire and offering yellow flowers.',
      'Placing books, musical instruments, and pens at feet of Saraswati.'
    ],
    regionOrGlobal: 'Pan-Indian'
  },
  {
    id: 'ugadi-gudi-padwa',
    name: 'Ugadi / Gudi Padwa / Baisakhi (Vedic New Year)',
    sanskritName: 'युगादिः / गुढीपाडवा',
    lunarMonth: 'Chaitra',
    tithi: 'Shukla Paksha Pratipada',
    deityAssociated: 'Brahma Deva & Kuladevatas',
    significance: 'Vedic Lunar New Year marking the day Brahma commenced creation of the universe.',
    scripturalOrigin: 'Surya Siddhanta and Brahma Purana.',
    ritualsAndObservances: [
      'Hoisting Gudi flag in Maharashtra.',
      'Eating Ugadi Pachadi (mix of 6 tastes: sweet, sour, bitter, tangy, salty, spicy representing life experiences).',
      'Reading new Panchangam calendar predictions.'
    ],
    regionOrGlobal: 'Karnataka, Andhra Pradesh, Maharashtra, Punjab'
  },
  {
    id: 'ratha-yatra',
    name: 'Jagannatha Ratha Yatra',
    sanskritName: 'जगन्नाथरथयात्रा',
    lunarMonth: 'Ashadha',
    tithi: 'Shukla Paksha Dwitiya',
    deityAssociated: 'Lord Jagannatha, Balabhadra, Goddess Subhadra',
    significance: 'Grand chariot festival where Lord Jagannatha steps out of Puri temple to bless all humanity regardless of caste or background.',
    scripturalOrigin: 'Skanda Purana Utkala Khanda; annual visit of deities to Gundicha Temple.',
    ritualsAndObservances: [
      'Pulling massive wooden chariots (Nandighosha, Taladhvaja, Darpadalana).',
      'Chera Pahara (Puri King sweeping chariot path with golden broom).',
      'Chanting Haribol and Mahaprasad distribution.'
    ],
    regionOrGlobal: 'Puri, Odisha & Worldwide'
  },
  {
    id: 'kumbh-mela',
    name: 'Kumbh Mela',
    sanskritName: 'कुम्भमेला',
    lunarMonth: 'Varies according to Jupiter and Sun positions',
    tithi: 'Purnima / Amavasya during Kumbh alignment',
    deityAssociated: 'Sacred Rivers & Cosmic Deities',
    significance: 'World’s largest peaceful religious gathering, held every 12 years across 4 sacred sites: Prayagraj, Haridwar, Ujjain, and Nashik.',
    scripturalOrigin: 'Samudra Manthan story: drops of Amrita fell at 4 river sites from Garuda’s pitcher.',
    ritualsAndObservances: [
      'Shahi Snan (Royal Holy Bath) in sacred river confluence.',
      'Satsang with Akharas, Sages, and Acharyas.',
      'Chanting and Vedic discourses.'
    ],
    regionOrGlobal: 'Prayagraj, Haridwar, Ujjain, Nashik'
  }
];
