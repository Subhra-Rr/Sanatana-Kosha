import { SaintItem } from '../types';

export const SAINTS_DATA: SaintItem[] = [
  // --- NORTH INDIAN & HINDI BELT BHAKTI SAINTS ---
  {
    id: 'sant-kabir',
    name: 'Sant Kabir Das',
    sanskritName: 'कबीरदासः',
    period: '1398 CE – 1518 CE',
    region: 'Varanasi, Uttar Pradesh',
    traditionOrMovement: 'Nirguna Bhakti Movement',
    bio: 'Great mystic poet and weaver of Varanasi, disciple of Swami Ramananda. Composed sharp, memorable Dohes (couplets) advocating inner devotion beyond empty outer rituals and social division.',
    compositionsOrWorks: ['Kabir Bijak', 'Sakhi Granth', 'Anurag Sagar'],
    keyMessage: 'God dwells within the human heart as unstrikeable sound (Anahata Dhvani), not in physical buildings alone.',
    famousQuoteOrAbhang: {
      sanskritOrVernacular: 'पोथी पढ़ि पढ़ि जग मुआ, पंडित भया न कोय।\nढाई आखर प्रेम का, पढ़े सो पंडित होय॥',
      translation: 'Reading books without end, the world died, yet none became truly wise. One who understands two-and-a-half letters of LOVE is the true scholar.'
    }
  },
  {
    id: 'sant-tulsidas',
    name: 'Goswami Tulsidas',
    sanskritName: 'तुलसीदासः',
    period: '1532 CE – 1623 CE',
    region: 'Rajapur / Varanasi, Uttar Pradesh',
    traditionOrMovement: 'Rama Bhakti Movement',
    bio: 'Revered poet-saint who composed the immortal Ramcharitmanas in Awadhi Hindi, bringing the sacred story of Sri Rama from Sanskrit into popular vernacular song across millions of homes.',
    compositionsOrWorks: ['Ramcharitmanas', 'Hanuman Chalisa', 'Vinaya Patrika', 'Kavitavali', 'Dohavali'],
    keyMessage: 'Selfless devotion to Sri Rama cures all anxiety and brings moral strength to society.',
    famousQuoteOrAbhang: {
      sanskritOrVernacular: 'धीरज धर्म मित्र अरु नारी। आपद काल परिखिअहिं चारी॥',
      translation: 'Patience, virtue, true friends, and spouse are tested during times of adversity.'
    }
  },
  {
    id: 'mirabai',
    name: 'Mirabai',
    sanskritName: 'मीराबाई',
    period: '1498 CE – 1547 CE',
    region: 'Mewar, Rajasthan / Dwarka, Gujarat',
    traditionOrMovement: 'Krishna Bhakti Movement',
    bio: 'Rajput princess who surrendered her life entirely to Sri Krishna (Giridhara Gopala). Facing royal opposition, poison, and exile, she sang ecstatic devotional Bhajans that remain immortal across India.',
    compositionsOrWorks: ['Mira Padavali', 'Raga Govinda'],
    keyMessage: 'Total fearlessness in divine love transcending worldly status and social constraints.',
    famousQuoteOrAbhang: {
      sanskritOrVernacular: 'मेरे तो गिरधर गोपाल दूसरो न कोई।\nजाके सिर मोर मुकुट मेरो पति सोई॥',
      translation: 'Mine is only Giridhara Gopala, none other. He who wears the peacock crown is my sole Lord.'
    }
  },
  {
    id: 'surdas',
    name: 'Sant Surdas',
    sanskritName: 'सूरदासः',
    period: '1478 CE – 1583 CE',
    region: 'Braj / Agra, Uttar Pradesh',
    traditionOrMovement: 'Pushtimarga / Krishna Bhakti',
    bio: 'Blind poet-saint of Braj Dham, disciple of Vallabhacharya. Composed over 100,000 ecstatic devotional lyrics depicting Sri Krishna’s childhood pastimes (Vatsalya Bhava) with sublime psychological nuance.',
    compositionsOrWorks: ['Sursagar', 'Sur Saravali', 'Sahitya Lahari'],
    keyMessage: 'Seeing God with inner vision when physical eyes are closed.',
    famousQuoteOrAbhang: {
      sanskritOrVernacular: 'मैया मोहि दाऊ बहुत खिझायो।\nमोसों कहत मोल को लीन्हों तू जसुमति कब जायो॥',
      translation: 'O Mother, Balarama teases me so much! He says I was bought for money and that Yashoda never gave birth to me.'
    }
  },
  {
    id: 'sant-ravidas',
    name: 'Sant Ravidas (Raidas)',
    sanskritName: 'रविदासः',
    period: 'c. 1450 CE – 1520 CE',
    region: 'Varanasi, Uttar Pradesh',
    traditionOrMovement: 'Nirguna Bhakti / Equality',
    bio: 'Shoemaker saint of Varanasi whose devotional songs emphasized dignity of labor, moral purity, and spiritual equality. 41 of his hymns are preserved in Sri Guru Granth Sahib Ji.',
    compositionsOrWorks: ['Ravidas Vani', 'Begumpura Hymns'],
    keyMessage: 'Begumpura (the land without sorrow): A society rooted in truth, compassion, and divine love where no one suffers inequality.',
    famousQuoteOrAbhang: {
      sanskritOrVernacular: 'मन चंगा तो कठौती में गंगा।',
      translation: 'If your mind is pure, then the holy river Ganges resides right within your humble wooden vessel.'
    }
  },

  // --- WARKARI SAINTS OF MAHARASHTRA ---
  {
    id: 'sant-jnaneshwar',
    name: 'Sant Jnaneshwar (Dnyaneshwar)',
    sanskritName: 'ज्ञानेश्वरः',
    period: '1275 CE – 1296 CE',
    region: 'Alandi / Paithan, Maharashtra',
    traditionOrMovement: 'Warkari Sampradaya / Nath Tradition',
    bio: 'Child prodigy and yogi who at age 16 composed the **Jnaneshwari** (Bhavartha Deepika), translating the Sanskrit Bhagavad Gita into sublime Marathi poetry for common people. Took Sanjeevan Samadhi at Alandi at age 21.',
    compositionsOrWorks: ['Jnaneshwari (Bhavartha Deepika)', 'Amritanubhava', 'Haripath', 'Changdev Pasashti'],
    keyMessage: 'Universal grace (Pasayadan): Praying for the spiritual enlightenment and happiness of all living beings.',
    famousQuoteOrAbhang: {
      sanskritOrVernacular: 'आता विश्वात्मके देवे। येणे वाग्यज्ञे तोषावे।\nतोषोनि मज द्यावे। पसायदान हे॥',
      translation: 'May the Lord of the Universe be pleased with this literary sacrifice and bestow His divine grace upon humanity.'
    }
  },
  {
    id: 'sant-tukaram',
    name: 'Sant Tukaram Maharaj',
    sanskritName: 'तुकारामः',
    period: '1608 CE – 1649 CE',
    region: 'Dehu, Maharashtra',
    traditionOrMovement: 'Warkari Sampradaya / Vitthal Bhakti',
    bio: 'Revered Warkari saint and composer of over 4,500 Abhangs. When orthodoxy threw his manuscripts into the Indrayani river, the river preserved them unharmed after 13 days of silent prayer.',
    compositionsOrWorks: ['Tukaram Gatha (Abhangas)'],
    keyMessage: 'Truthful conduct, selfless devotion to Lord Vitthala, and rejection of hypocrisy.',
    famousQuoteOrAbhang: {
      sanskritOrVernacular: 'वृक्षवल्ली आम्हा सोयरी वंचरे। पक्षी ही सुस्वरे आळविती॥',
      translation: 'The trees, creepers, and forest wildlife are our true kinsmen; birds sing sweetly in harmony with nature.'
    }
  },
  {
    id: 'sant-namdev',
    name: 'Sant Namdev',
    sanskritName: 'नामदेवः',
    period: '1270 CE – 1350 CE',
    region: 'Narsi / Pandharpur / Punjab',
    traditionOrMovement: 'Warkari Movement & Nirguna Bhakti',
    bio: 'Tailor-saint of Pandharpur who traveled extensively with Jnaneshwar to North India. His Abhangs and Gurbani hymns are included in Sri Guru Granth Sahib Ji.',
    compositionsOrWorks: ['Namdev Abhang Gatha', 'Gurbani Verses'],
    keyMessage: 'The Holy Name of Lord Vitthala transcends all ritual boundaries.',
    famousQuoteOrAbhang: {
      sanskritOrVernacular: 'नाचू कीर्तनाचे रंगी। ज्ञानदीप लावू जगी॥',
      translation: 'We shall dance in the color of Kirtan, and ignite the lamp of wisdom throughout the world.'
    }
  },
  {
    id: 'samarth-ramdas',
    name: 'Samarth Ramdas Swami',
    sanskritName: 'समर्थरामदासः',
    period: '1608 CE – 1681 CE',
    region: 'Jamb / Sajjangad, Maharashtra',
    traditionOrMovement: 'Ramdasi Sampradaya',
    bio: 'Spiritual Guru of Chhatrapati Shivaji Maharaj. Synthesized intense devotion to Lord Rama and Hanuman with physical fitness, moral courage, and social protection.',
    compositionsOrWorks: ['Dasbodh', 'Manache Shlok', 'Maruti Stotra'],
    keyMessage: 'Combination of spiritual wisdom (Bhakti) with practical organization and courage (Kshatra Dharma).',
    famousQuoteOrAbhang: {
      sanskritOrVernacular: 'सामर्थ्य आहे चळवळीचे। जो जो करील तयाचे॥',
      translation: 'The power lies in noble righteous action; whoever undertakes it reaps success.'
    }
  },

  // --- TAMIL NAYANMARS & ALVARS ---
  {
    id: 'andal',
    name: 'Goda Devi (Andal)',
    sanskritName: 'आण्डाळ् (गोदादेवी)',
    period: 'c. 8th Century CE',
    region: 'Srivilliputhur, Tamil Nadu',
    traditionOrMovement: 'Alvar Saints / Sri Vaishnavism',
    bio: 'The only female Alvar saint among the 12 Alvars. Found as a infant under a Tulasi plant by Periyalvar. Wore garlands intended for the deity Sri Ranganatha to test their suitability, earning the name "Soodi Kodutha Sudarkodi".',
    compositionsOrWorks: ['Tiruppavai (30 Stanzas)', 'Nachiyar Tirumoli'],
    keyMessage: 'Madhurya Bhakti: Surrendering soul’s eternal love to Sri Ranganatha.',
    famousQuoteOrAbhang: {
      sanskritOrVernacular: 'मार्गळित् तिङ्गळ् मदि निऱैन्द नन्नाळाल्...',
      translation: 'In the auspicious month of Margazhi, under the full moon light, let us go and sing praise of the Divine Lord.'
    }
  },
  {
    id: 'nammalvar',
    name: 'Nammalvar (Shatagopa)',
    sanskritName: 'नम्माऴ्वार् (शठकोपः)',
    period: 'c. 9th Century CE',
    region: 'Alwarthirunagari, Tamil Nadu',
    traditionOrMovement: 'Alvar Tradition / Dravida Veda',
    bio: 'Foremost of the 12 Alvars. Born in deep meditation under a sacred Tamarind tree. Authored Tiruvaymoli, revered as the essence of the 4 Sanskrit Vedas in Tamil verse.',
    compositionsOrWorks: ['Tiruvaymoli (1,102 Verses)', 'Tiruviruttam', 'Tiruvashiriyam'],
    keyMessage: 'Total self-surrender to Lord Narayana as the inner controller of all beings.',
    famousQuoteOrAbhang: {
      sanskritOrVernacular: 'उयर्वऱ उयरनलमुटैयवन् एवनावन्...',
      translation: 'Praise be to Him whose flawless spiritual glory is higher than the highest.'
    }
  },
  {
    id: 'tirumular',
    name: 'Tirumular',
    sanskritName: 'तिरुमूलरः',
    period: 'c. 5th – 6th Century CE',
    region: 'Tiruvaduthurai, Tamil Nadu',
    traditionOrMovement: 'Siddha Tradition & Shaivism',
    bio: 'Revered Tamil Shaiva Siddha who composed **Tirumandiram**, a 3,000-verse treatise integrating Shaiva Siddhanta philosophy, Kundalini Yoga, and ethics.',
    compositionsOrWorks: ['Tirumandiram'],
    keyMessage: 'Anbe Sivam: Love and Lord Shiva are non-different.',
    famousQuoteOrAbhang: {
      sanskritOrVernacular: 'अन्पुम् शिवमुम् इरण्टेन्पर् अरिविलार्...',
      translation: 'The ignorant say Love and Shiva are two; the wise know Love alone IS Shiva.'
    }
  },
  {
    id: 'manikkavachakar',
    name: 'Manikkavachakar',
    sanskritName: 'माणिक्यवाचकः',
    period: 'c. 9th Century CE',
    region: 'Madurai / Chidambaram, Tamil Nadu',
    traditionOrMovement: 'Shaiva Siddhanta / Nayanmar Era',
    bio: 'Prime Minister of the Pandya Kingdom who abandoned political power upon experiencing the divine grace of Lord Shiva at Thiruperunturai. Composed the soul-stirring **Tiruvasagam**.',
    compositionsOrWorks: ['Tiruvasagam', 'Tiruvempavai'],
    keyMessage: 'Melt the heart in ecstatic devotion to Lord Nataraja.',
    famousQuoteOrAbhang: {
      sanskritOrVernacular: 'नमच्चिवाय वाऴ्क नादन् ताळ् वाऴ्क...',
      translation: 'Long live Namah Shivaya! Long live the holy feet of the Supreme Master!'
    }
  },

  // --- KANNADA HARIDASAS & VACHANAKARAS ---
  {
    id: 'purandara-dasa',
    name: 'Purandara Dasa',
    sanskritName: 'पुरन्दरदासः',
    period: '1484 CE – 1564 CE',
    region: 'Kshemapura / Hampi, Karnataka',
    traditionOrMovement: 'Haridasa Movement / Carnatic Music',
    bio: 'Father of Carnatic Music (Sangeeta Pitamaha). Wealthy merchant (Srinivasa Nayaka) who renounced millions after a divine miracle to become a Haridasa disciple of Vyasatirtha. Composed 475,000 Devaranamas and structured Carnatic music lessons (Swaravalis, Alankaras).',
    compositionsOrWorks: ['Purandara Upanishad (Devaranamas)', 'Svaravali Music Lessons'],
    keyMessage: 'Karedu Karedu Nannu Sakada: God responds directly to sincere humble devotion.',
    famousQuoteOrAbhang: {
      sanskritOrVernacular: 'दासन माडिको एन्न स्वामि साकिदो।',
      translation: 'Make me Your humble servant, O Lord, and protect my soul.'
    }
  },
  {
    id: 'akka-mahadevi',
    name: 'Akka Mahadevi',
    sanskritName: 'अक्कमादेवी',
    period: '1130 CE – 1160 CE',
    region: 'Udutadi / Srisailam, Karnataka',
    traditionOrMovement: 'Sharana Movement / Veerashaivism',
    bio: 'Poet-saint who surrendered her youth and worldly marriage to Lord Shiva (Chennamallikarjuna). Traveled unclothed covered only by her long hair to Kalyana Anubhava Mantapa and attained union at Kadali cave in Srisailam.',
    compositionsOrWorks: ['Vachanas (Chennamallikarjuna Signature)'],
    keyMessage: 'When the soul is wedded to the Eternal Lord, worldly attachments drop away completely.',
    famousQuoteOrAbhang: {
      sanskritOrVernacular: 'बेट्टद मेले ओंदु मनेया माडि...',
      translation: 'Having built a home on the hilltop, how can you be afraid of the wild beasts?'
    }
  },

  // --- CARNATIC TRINITY & TELUGU COMPOSERS ---
  {
    id: 'tyagaraja',
    name: 'Saint Tyagaraja',
    sanskritName: 'त्यागराजः',
    period: '1767 CE – 1847 CE',
    region: 'Thiruvaiyaru, Tamil Nadu',
    traditionOrMovement: 'Carnatic Trinity / Rama Bhakti',
    bio: 'Greatest musical composer in Carnatic tradition. Refused royal treasures from Tanjore king, living on Unchavritti (charity) while singing 24,000 immortal Kritis dedicated to Lord Rama.',
    compositionsOrWorks: ['Pancharatna Kritis', 'Prahlada Bhakti Vijayam', 'Nauka Charitam'],
    keyMessage: 'Sangeeta Jnanamu Bhakti Vina: Music combined with devotion leads directly to Mukti.',
    famousQuoteOrAbhang: {
      sanskritOrVernacular: 'एन्दरो महानुभावुलु अन्दरिकी वन्दनमुलु॥',
      translation: 'Prostrations to all those great souls who experience the divine bliss of the Lord.'
    }
  },
  {
    id: 'annamacharya',
    name: 'Tallapaka Annamacharya',
    sanskritName: 'अन्नमाचार्यः',
    period: '1408 CE – 1503 CE',
    region: 'Tallapaka / Tirumala Tirupati',
    traditionOrMovement: 'Sankirtana Acharya / Venkateswara Bhakti',
    bio: 'Composed 32,000 Sankirtanas in praise of Lord Venkateswara of Tirumala. Engraved on copper plates preserved in the Tirumala temple treasury.',
    compositionsOrWorks: ['Annamayya Sankirtanas', 'Sringara & Adhyatma Sankeertanalu'],
    keyMessage: 'Brahmam Okkate Para Brahmam Okkate: The Supreme Brahman is One, equal for all beings.',
    famousQuoteOrAbhang: {
      sanskritOrVernacular: 'तंदनाना हि तंदनाना भले। ब्रह्मामोक्कटे परब्रह्मामोक्कटे॥',
      translation: 'Brahman is One! The Supreme Spirit is One and equal for the king and the beggar alike!'
    }
  },

  // --- EASTERN, KASHMIRI & GUJARATI SAINTS ---
  {
    id: 'lalleshwari',
    name: 'Lalleshwari (Lalla Arifa / Lal Ded)',
    sanskritName: 'लल्लेश्वरी (लल द्यद्)',
    period: '1320 CE – 1392 CE',
    region: 'Padmanpora (Pampore), Kashmir',
    traditionOrMovement: 'Kashmir Shaiva Mysticism',
    bio: 'Mystic poetess of Kashmir who composed **Lalla Vakhs** (four-line stanzas) expressing intense non-dual awareness, detachment, and union with Shiva.',
    compositionsOrWorks: ['Lalla Vakhs'],
    keyMessage: 'Shiva is everywhere present; do not discriminate between Hindu and Muslim.',
    famousQuoteOrAbhang: {
      sanskritOrVernacular: 'शिव छु थलि थलि रोजान...',
      translation: 'Shiva abides in every particle; do not distinguish between self and other.'
    }
  },
  {
    id: 'narsinh-mehta',
    name: 'Narsinh Mehta',
    sanskritName: 'नरसिंह मेहता',
    period: '1414 CE – 1481 CE',
    region: 'Junagadh, Gujarat',
    traditionOrMovement: 'Krishna Bhakti / Adi Kavi of Gujarat',
    bio: 'Adi Kavi (first poet) of Gujarati literature. Composed the immortal bhajan **Vaishnava Jan To**, which became Mahatma Gandhi’s favorite spiritual hymn defining moral character.',
    compositionsOrWorks: ['Vaishnava Jan To', 'Sudama Charitra', 'Prabhatiya'],
    keyMessage: 'True spiritual realization shows in feeling the pain of others without pride.',
    famousQuoteOrAbhang: {
      sanskritOrVernacular: 'वैष्णव जन तो तेने कहिये जे पीड पराई जाणे रे।\nपरदुःखे उपकार करे तोये मन अभिमान न आणे रे॥',
      translation: 'Call him a true seeker who feels the suffering of others as his own, and serves without a trace of vanity.'
    }
  }
];
