import { CharacterProfile, EpicSection } from '../types';

export const RAMAYANA_SECTIONS: EpicSection[] = [
  {
    id: 'ram-bala-kanda',
    epic: 'Ramayana',
    sectionName: 'Bala Kanda',
    sanskritName: 'बालकाण्डम्',
    summary: 'Covers the divine birth of Rama and his brothers in Ayodhya, their education under Maharshi Vasishtha, protection of Rishi Vishvamitra’s Yajna from demons, freeing Ahalya, breaking Shiva’s bow Pinaka in Mithila, and marriage to Sita.',
    keyEvents: [
      'Putrakameshti Yajna performed by King Dasharatha.',
      'Young Rama and Lakshmana protecting Sage Vishvamitra’s hermitages.',
      'Subduing Tadaka and Subahu.',
      'Sita Svayamvara in Mithila: Rama lifts and strings Shiva’s bow Pinaka.'
    ],
    importantCharacters: ['Sri Rama', 'Sita Devi', 'King Dasharatha', 'Maharshi Vishvamitra', 'King Janaka', 'Parashurama'],
    geographicalLocations: ['Ayodhya', 'Siddhashrama', 'Mithila', 'Ganga Banks'],
    philosophicalLessons: ['Dharma of obedience to righteous gurus.', 'Initial protection of quiet spiritual contemplation from disruptive forces.']
  },
  {
    id: 'ram-ayodhya-kanda',
    epic: 'Ramayana',
    sectionName: 'Ayodhya Kanda',
    sanskritName: 'अयोध्याकाण्डम्',
    summary: 'On the eve of Rama’s coronation, Queen Kaikeyi (influenced by Manthara’s instigation) demands her two boons: Bharata’s coronation and Rama’s 14-year forest exile. Rama joyfully accepts the exile without anger.',
    keyEvents: [
      'Manthara poisons Queen Kaikeyi’s mind.',
      'Kaikeyi claims the two boons granted by Dasharatha.',
      'Rama cheerfully accepts forest exile to honor his father’s vow.',
      'Sita and Lakshmana insist on accompanying Rama.',
      'Dasharatha’s demise in grief.',
      'Bharata rejects the crown, visits Chitrakoot, and places Rama’s Padukas (sandals) on the throne.'
    ],
    importantCharacters: ['Sri Rama', 'Sita Devi', 'Lakshmana', 'Bharata', 'Kaikeyi', 'Dasharatha', 'Guha'],
    geographicalLocations: ['Ayodhya', 'Shringaverapura (Ganga)', 'Chitrakoot'],
    philosophicalLessons: ['Pitru-vakya-paripalana (Honoring parental word at any personal sacrifice).', 'Bharata’s selfless refusal to enjoy unearned power.']
  },
  {
    id: 'ram-aranya-kanda',
    epic: 'Ramayana',
    sectionName: 'Aranya Kanda',
    sanskritName: 'अरण्यकाण्डम्',
    summary: 'Describes 13 years of peaceful forest life in Dandakaranya, encounters with Sages (Agastya, Sutikshna), Shurpanakha’s incident, Ravana’s golden deer ploy (Maricha), abducting Sita, and Jatayu’s brave sacrifice.',
    keyEvents: [
      'Rama guarantees protection to Dandakaranya rishis.',
      'Meeting Maharshi Agastya and receiving divine weapons.',
      'Shurpanakha’s confrontation and Khara-Dushana defeat.',
      'Maricha assumes the Golden Deer form.',
      'Ravana abducts Sita Devi; Jatayu fights valiantly to protect her.',
      'Rama’s grief and meeting Shabari.'
    ],
    importantCharacters: ['Sri Rama', 'Sita Devi', 'Lakshmana', 'Ravana', 'Jatayu', 'Shabari', 'Agastya'],
    geographicalLocations: ['Dandakaranya', 'Panchavati (Godavari banks)', 'Kishkindha borders'],
    philosophicalLessons: ['Jatayu’s heroic sacrifice shows duty to protect the helpless even against impossible odds.', 'Shabari’s simple, unpretentious devotion (Bhakti).']
  },
  {
    id: 'ram-kishkindha-kanda',
    epic: 'Ramayana',
    sectionName: 'Kishkindha Kanda',
    sanskritName: 'किष्किन्धाकाण्डम्',
    summary: 'Rama meets Hanuman at Pampa Lake and forms an alliance with Sugriva. Rama slays Vali to restore Sugriva’s kingdom, and Sugriva mobilizes the Vanara army to search for Sita across all four directions.',
    keyEvents: [
      'Meeting Hanuman disguised as a scholar.',
      'Mutual pact of friendship between Rama and Sugriva.',
      'Slaying of Vali and coronation of Sugriva.',
      'Sampati (Jatayu’s brother) reveals Sita is held across the southern ocean in Lanka.',
      'Jambavan reminds Hanuman of his hidden cosmic strength.'
    ],
    importantCharacters: ['Sri Rama', 'Hanuman', 'Sugriva', 'Vali', 'Angada', 'Jambavan', 'Sampati'],
    geographicalLocations: ['Pampa Lake', 'Rishyamuka Hill', 'Kishkindha', 'Mahendra Parvata'],
    philosophicalLessons: ['True friendship built on shared righteousness.', 'Hanuman’s humility and awakening to latent divine strength through noble encouragement.']
  },
  {
    id: 'ram-sundara-kanda',
    epic: 'Ramayana',
    sectionName: 'Sundara Kanda',
    sanskritName: 'सुन्दरकाण्डम्',
    summary: 'Centerpiece of the Ramayana detailing Hanuman’s heroic leap across the southern ocean, overcoming obstacles (Surasa, Sinhika), searching Lanka, finding Sita in Ashok Vatika, delivering Rama’s signet ring, destroying Ravana’s garden, and burning Lanka.',
    keyEvents: [
      'Hanuman’s oceanic leap of 100 yojanas.',
      'Infiltration of Lanka and discovery of Sita in Ashok Vatika.',
      'Delivering Rama’s Chudamani and ring.',
      'Confrontation with Ravana in court and burning of Lanka with his tail.',
      'Return to Rama with news: "Sighted Sita Devi!"'
    ],
    importantCharacters: ['Hanuman', 'Sita Devi', 'Ravana', 'Indrajit', 'Trijata', 'Vibhishana'],
    geographicalLocations: ['Ocean Crossing', 'Lanka', 'Ashok Vatika'],
    philosophicalLessons: ['Unwavering faith, courage, and resourcefulness in divine service.', 'Sundara Kanda is traditionally recited for peace, courage, and removal of adversity.']
  },
  {
    id: 'ram-yuddha-kanda',
    epic: 'Ramayana',
    sectionName: 'Yuddha Kanda',
    sanskritName: 'युद्धकाण्डम्',
    summary: 'Construction of Rama Setu across the ocean by Nala and Nila. Vibhishana seeks asylum with Rama. The great war in Lanka, defeat of Kumbhakarna, Indrajit, and Ravana, Sita’s Agni Pariksha, and triumphant return to Ayodhya for Rama Rajya coronation.',
    keyEvents: [
      'Vibhishana’s Sharanagati (surrender to Rama).',
      'Construction of Rama Setu bridge.',
      'Epic battle between Vanara army and Rakshasa forces.',
      'Sage Agastya imparts Aditya Hridayam Stotram to Rama.',
      'Rama slays Ravana with the Brahmastra.',
      'Coronation of Sri Rama as King of Ayodhya (Rama Rajya).'
    ],
    importantCharacters: ['Sri Rama', 'Sita Devi', 'Lakshmana', 'Hanuman', 'Vibhishana', 'Ravana', 'Kumbhakarna', 'Indrajit'],
    geographicalLocations: ['Rameswaram', 'Rama Setu', 'Lanka Battlefield', 'Ayodhya'],
    philosophicalLessons: ['Rama Rajya represents ideal governance founded on justice, welfare, and environmental harmony.', 'Aditya Hridayam teaches inner solar energy and resilience in critical battles.']
  }
];

export const MAHABHARATA_SECTIONS: EpicSection[] = [
  {
    id: 'mb-adi-parva',
    epic: 'Mahabharata',
    sectionName: 'Adi Parva',
    sanskritName: 'आदिपर्व',
    summary: 'Traces the ancestral genealogy of the Kuru dynasty (King Bharata, Shantanu, Bhishma’s vow), birth of Dhritarashtra, Pandu, and Vidura, birth of Pandavas and Kauravas, training under Drona, Wax Palace plot (Lakshagraha), Draupadi Svayamvara, and dividing kingdom at Indraprastha.',
    keyEvents: [
      'Bhishma’s formidable vow of celibacy.',
      'Birth of 5 Pandavas through divine invocation (Dharma, Vayu, Indra, Ashvins).',
      'Drona’s archery test of the bird’s eye.',
      'Escape from the burning Wax Palace at Varanavata.',
      'Arjuna wins Draupadi in Svayamvara; marriage to 5 Pandavas.',
      'Establishment of the prosperous city of Indraprastha.'
    ],
    importantCharacters: ['Bhishma', 'Dronacharya', 'Yudhisthira', 'Bhima', 'Arjuna', 'Nakula', 'Sahadeva', 'Duryodhana', 'Karna', 'Draupadi', 'Sri Krishna'],
    geographicalLocations: ['Hastinapura', 'Varanavata', 'Ekachakra', 'Kambilya', 'Indraprastha'],
    philosophicalLessons: ['Complexities of individual Karma across generations.', 'How small seeds of envy can ruin great empires.']
  },
  {
    id: 'mb-sabha-parva',
    epic: 'Mahabharata',
    sectionName: 'Sabha Parva',
    sanskritName: 'सभापर्व',
    summary: 'Yudhisthira performs Rajasuya Yajna. Duryodhana’s jealousy peaks upon seeing Indraprastha’s grandeur. Shakuni orchestrates the rigged game of dice (Dyuta), leading to the disrobing attempt of Draupadi and Pandavas’ 12-year forest exile plus 1 year incognito.',
    keyEvents: [
      'Rajasuya Yajna and slaying of Shishupala by Krishna.',
      'Shakuni invites Yudhisthira to the rigged loaded-dice game.',
      'Yudhisthira loses kingdom, brothers, self, and Draupadi.',
      'Dushasana attempts to disrobe Draupadi in court; Krishna’s divine protection of her garment.',
      'Dhrtarashtra grants boons; second dice game leads to 13-year exile.'
    ],
    importantCharacters: ['Yudhisthira', 'Duryodhana', 'Shakuni', 'Draupadi', 'Dushasana', 'Sri Krishna', 'Bhishma', 'Vidura'],
    geographicalLocations: ['Indraprastha', 'Hastinapura Royal Assembly'],
    philosophicalLessons: ['Dangers of addiction to gambling and righteous passivity in the presence of blatant evil.', 'Draupadi’s unshakeable faith in divine protection (Krishna Sharanagati).']
  },
  {
    id: 'mb-vana-parva',
    epic: 'Mahabharata',
    sectionName: 'Vana Parva (Aranya Parva)',
    sanskritName: 'वनपर्व',
    summary: 'Details 12 years of Pandava forest pilgrimage. Rich in philosophical discourses: Markandeya’s stories (Savitri & Satyavan, Nala & Damayanti), Arjuna’s tapas for Pasupatastra on Mount Kailash, and Yaksha Prashna.',
    keyEvents: [
      'Pandavas receive Akshaya Patra (inexhaustible vessel) from Surya.',
      'Arjuna travels to Devaloka and obtains divine celestial weapons.',
      'Bhima meets Hanuman in the forest.',
      'Yaksha Prashna: Yudhisthira answers 124 profound questions of the Crane/Yaksha to revive his fallen brothers.'
    ],
    importantCharacters: ['Yudhisthira', 'Arjuna', 'Bhima', 'Yaksha / Yama', 'Markandeya', 'Savitri'],
    geographicalLocations: ['Kamyaka Forest', 'Dwaitavana', 'Mount Kailash', 'Gandhamadana'],
    philosophicalLessons: ['Yaksha Prashna contains master lessons on wisdom, patience, and character.', 'Patience and austerity refine character under trial.']
  },
  {
    id: 'mb-bhishma-parva',
    epic: 'Mahabharata',
    sectionName: 'Bhishma Parva',
    sanskritName: 'भीष्मपर्व',
    summary: 'Covers first 10 days of the Kurukshetra War under Bhishma’s supreme command. Contains the sacred **Bhagavad Gita** delivered by Sri Krishna to Arjuna on Day 1, and Bhishma falling on the bed of arrows on Day 10.',
    keyEvents: [
      'Sri Krishna imparts Bhagavad Gita to Arjuna before battle.',
      '10 days of fierce warfare between Pandava and Kaurava armies.',
      'Arjuna uses Shikhandi as shield to overcome Bhishma.',
      'Bhishma falls on a bed of arrows, choosing Iccha-Mrityu (death at will) until Uttarayana.'
    ],
    importantCharacters: ['Sri Krishna', 'Arjuna', 'Bhishma', 'Yudhisthira', 'Drona', 'Karna', 'Shikhandi'],
    geographicalLocations: ['Kurukshetra Battlefield'],
    philosophicalLessons: ['Bhagavad Gita: Duty without attached desire.', 'Bhishma’s sacrifice and strict allegiance to ancestral vows vs higher cosmic righteousness.']
  },
  {
    id: 'mb-shanti-parva',
    epic: 'Mahabharata',
    sectionName: 'Shanti Parva',
    sanskritName: 'शान्तिपर्व',
    summary: 'The largest Parva of the Mahabharata. Following Pandava victory, Yudhisthira is overwhelmed with remorse over war casualties. He sits at the feet of dying Bhishma on his arrow bed to receive master discourses on Rajadharma (governance), Apaddharma (conduct in crisis), and Mokshadharma (liberation).',
    keyEvents: [
      'Yudhisthira’s deep grief and coronation in Hastinapura.',
      'Bhishma’s immortal discourses on statecraft, taxation, justice, and diplomacy.',
      'Exposition of Mokshadharma and the famous Vishnu Sahasranama stotram.'
    ],
    importantCharacters: ['Yudhisthira', 'Bhishma', 'Sri Krishna', 'Sages'],
    geographicalLocations: ['Hastinapura', 'Kurukshetra arrow bed'],
    philosophicalLessons: ['Statecraft must serve social justice, economic ethics, and spiritual upliftment.', 'Contains Vishnu Sahasranama (1000 names of Vishnu).']
  }
];

export const MAJOR_EPIC_CHARACTERS: CharacterProfile[] = [
  {
    id: 'char-sri-rama',
    name: 'Sri Rama',
    sanskritName: 'श्रीरामः',
    epic: 'Ramayana',
    lineage: 'Surya Vansha (Ikshvaku Dynasty)',
    role: 'Seventh Avatara of Vishnu, Ideal King (Maryada Purushottama)',
    bio: 'Eldest son of King Dasharatha and Queen Kausalya of Ayodhya. Embodiment of absolute ethical righteousness (Ramo Vigrahavan Dharmah). Joyfully accepted 14-year exile to honor father’s vow, defeated demon king Ravana, and established Rama Rajya.',
    keyQualities: ['Absolute Integrity', 'Compassion', 'Respect for Elders', 'Monogamy (Eka-patni-vrata)', 'Equal Friend to All (Guha, Shabari, Sugriva, Vibhishana)'],
    majorVersesOrDharmaLessons: [
      'रामो विग्रहवान् धर्मः - Rama is Dharma personified (Aranya Kanda 37.13)',
      'जननी जन्मभूमिश्च स्वर्गादपि गरीयसी - Mother and motherland are far superior even to heaven.'
    ],
    symbolism: 'Represents the perfected human soul living in complete harmony with divine order.'
  },
  {
    id: 'char-sita-devi',
    name: 'Sita Devi',
    sanskritName: 'सीतादेवी',
    epic: 'Ramayana',
    lineage: 'Videha Kingdom (Adopted daughter of King Janaka, found in furrows of Mother Earth)',
    role: 'Incarnation of Sri Lakshmi, Ideal of Courage, Loyalty, and Forgiveness',
    bio: 'Daughter of Earth discovered by King Janaka during ritual plowing. Renounced royal comforts to accompany Rama in forest exile. Maintained unshakeable dignity and purity during captivity in Lanka’s Ashok Vatika.',
    keyQualities: ['Unshakable Courage', 'Deep Environmental Bond', 'Forgiveness toward captors', 'Elegance under adversity'],
    majorVersesOrDharmaLessons: [
      'Forgave Lanka guardesses upon Ravana’s defeat: "No one is free from fault; compassion is the highest virtue."'
    ],
    symbolism: 'Embodying Prakriti (Divine Nature) and the endurance of human spirit under trial.'
  },
  {
    id: 'char-hanuman',
    name: 'Hanuman',
    sanskritName: 'हनुमान्',
    epic: 'Ramayana',
    lineage: 'Son of Anjana and Vayu (Wind God)',
    role: 'Supreme Devotee, Scholar, Messenger, General of Vanaras',
    bio: 'Master of Sanskrit grammar, scholar of 9 systems, possesses limitless strength (Ashta Siddhi, Nav Niddhi). Leapt across the ocean to find Sita Devi in Lanka, burnt Lanka, and brought Sanjeevani mountain to save Lakshmana.',
    keyQualities: ['Selfless Service (Dasa Bhakti)', 'Modesty despite omnipotence', 'Brilliant Diplomacy', 'Celibacy (Brahmacharya)'],
    majorVersesOrDharmaLessons: [
      'Manojavam Marutatulyavegam Jitendriyam Buddhimatam Varishtham - Swift as mind, master of senses, supreme among the wise.'
    ],
    symbolism: 'Represents Prana (cosmic life energy) directed with complete devotion to Paramatman.'
  },
  {
    id: 'char-yudhisthira',
    name: 'Yudhisthira',
    sanskritName: 'युधिष्ठिरः',
    epic: 'Mahabharata',
    lineage: 'Kuru Dynasty (Eldest Pandava, son of Kunti and Yama/Dharma Deva)',
    role: 'Dharmaraja (King of Truth and Righteousness)',
    bio: 'Eldest Pandava renowned for steadfast truthfulness, forgiveness, and moral rectitude. Led Indraprastha to prosperity, faced exile following the dice game, answered Yaksha Prashna, and ruled Hastinapura justly before ascending Mahaprasthana.',
    keyQualities: ['Truthfulness (Satya)', 'Forgiveness (Kshama)', 'Deep philosophical inquiry'],
    majorVersesOrDharmaLessons: [
      'अहिंसा परमो धर्मः - Non-violence is the highest Dharma.',
      'Yaksha Prashna answers: "Day after day countless beings pass to death, yet those who remain think they will live forever. What can be more wondrous than this?"'
    ],
    symbolism: 'Represents the intellect (Buddhi) anchored in moral law (Dharma).'
  },
  {
    id: 'char-sri-krishna',
    name: 'Sri Krishna',
    sanskritName: 'श्रीकृष्णः',
    epic: 'Mahabharata',
    lineage: 'Yadava Dynasty (Son of Vasudeva and Devaki, raised by Nanda and Yashoda in Gokula)',
    role: 'Purnavatara (Complete Eighth Avatara of Vishnu), Guide, Charioteer, Philosopher',
    bio: 'Central cosmic figure of Mahabharata. Guided Pandavas through moral labyrinth, delivered Bhagavad Gita on Kurukshetra battlefield without picking up weapons, and restored cosmic balance.',
    keyQualities: ['Infinite Wisdom', 'Diplomatic Genius', 'Joyful Equanimity', 'Destroyer of Evil'],
    majorVersesOrDharmaLessons: [
      'Imparted the Bhagavad Gita: "Perform action without attached desire for results."'
    ],
    symbolism: 'Represents the Supreme Infinite Consciousness guiding the individual soul (Arjuna) through battle of life.'
  }
];
