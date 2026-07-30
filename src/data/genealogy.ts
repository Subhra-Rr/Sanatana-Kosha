import { GenealogyNode } from '../types';

export const GENEALOGY_DATA: GenealogyNode[] = [
  // Surya Vansha (Solar Dynasty)
  {
    id: 'gen-brahma',
    name: 'Brahma',
    sanskritName: 'ब्रह्मा',
    lineage: 'Surya Vansha',
    generation: 1,
    summary: 'The Creator in the Vedic Trinity, from whom the Prajapatis and Sapta Rishis emanate.',
    keyScriptureRef: 'Vishnu Purana 1.7'
  },
  {
    id: 'gen-marichi',
    name: 'Marichi',
    sanskritName: 'मरीचिः',
    lineage: 'Surya Vansha',
    generation: 2,
    parents: ['Brahma'],
    summary: 'One of the Mind-born sons (Manasaputra) of Brahma and father of Sage Kashyapa.',
    keyScriptureRef: 'Maha-bharata Adi Parva'
  },
  {
    id: 'gen-kashyapa',
    name: 'Kashyapa',
    sanskritName: 'कश्यपः',
    lineage: 'Surya Vansha',
    generation: 3,
    parents: ['Marichi'],
    summary: 'Progenitor of devas, asuras, and living beings; married Aditi, Diti, and other daughters of Daksha.',
    keyScriptureRef: 'Valmiki Ramayana Bala Kanda'
  },
  {
    id: 'gen-vivasvan',
    name: 'Vivasvan (Surya)',
    sanskritName: 'विवस्वान् (सूर्यः)',
    lineage: 'Surya Vansha',
    generation: 4,
    parents: ['Kashyapa'],
    summary: 'The Sun deity from whom the Solar Dynasty (Surya Vansha) directly descends.',
    keyScriptureRef: 'Bhagavad Gita 4.1'
  },
  {
    id: 'gen-vaivasvata-manu',
    name: 'Vaivasvata Manu',
    sanskritName: 'वैवस्वतमनुः',
    lineage: 'Surya Vansha',
    generation: 5,
    parents: ['Vivasvan'],
    summary: 'Seventh Manu of the current Kalpa; saved during the cosmic deluge by Matsya Avatara.',
    keyScriptureRef: 'Srimad Bhagavata Purana 8.24'
  },
  {
    id: 'gen-ikshvaku',
    name: 'Ikshvaku',
    sanskritName: 'इक्ष्वाकुः',
    lineage: 'Surya Vansha',
    generation: 6,
    parents: ['Vaivasvata Manu'],
    summary: 'First king of Ayodhya who established the Ikshvaku Dynasty (Surya Vansha).',
    keyScriptureRef: 'Valmiki Ramayana Bala Kanda 70'
  },
  {
    id: 'gen-harishchandra',
    name: 'King Harishchandra',
    sanskritName: 'हरिश्चन्द्रः',
    lineage: 'Surya Vansha',
    generation: 28,
    summary: '28th king of Ikshvaku line, legendary for unwavering adherence to truth (Satya-vrata) despite losing kingdom, family, and freedom.',
    keyScriptureRef: 'Markandeya Purana'
  },
  {
    id: 'gen-bhagiratha',
    name: 'King Bhagiratha',
    sanskritName: 'भगीरथः',
    lineage: 'Surya Vansha',
    generation: 38,
    summary: 'King who performed unmatched penance (Bhagiratha Prayatna) to bring sacred river Ganga from heavens to earth to liberate his ancestors.',
    keyScriptureRef: 'Valmiki Ramayana Bala Kanda 42'
  },
  {
    id: 'gen-raghu',
    name: 'King Raghu',
    sanskritName: 'रघुः',
    lineage: 'Surya Vansha',
    generation: 54,
    summary: 'Illustrious monarch whose fame caused the line to be called Raghuvamsha. Renounced all wealth in Vishvajit Yajna.',
    keyScriptureRef: 'Kalidasa’s Raghuvamsham'
  },
  {
    id: 'gen-dasharatha',
    name: 'King Dasharatha',
    sanskritName: 'दशरथः',
    lineage: 'Surya Vansha',
    generation: 62,
    parents: ['Aja'],
    children: ['Sri Rama', 'Lakshmana', 'Bharata', 'Shatrughna'],
    summary: 'King of Ayodhya, father of Sri Rama, famous for truthfulness and performing Putrakameshti Yajna.',
    keyScriptureRef: 'Valmiki Ramayana Ayodhya Kanda'
  },
  {
    id: 'gen-sri-rama',
    name: 'Sri Rama',
    sanskritName: 'श्रीरामः',
    lineage: 'Surya Vansha',
    generation: 63,
    parents: ['Dasharatha', 'Kausalya'],
    children: ['Lava', 'Kusha'],
    summary: 'Maryada Purushottama, seventh Avatara of Vishnu.',
    keyScriptureRef: 'Valmiki Ramayana'
  },

  // Chandra Vansha & Pandavas
  {
    id: 'gen-shantanu',
    name: 'King Shantanu',
    sanskritName: 'शान्तनुः',
    lineage: 'Chandra Vansha',
    summary: 'Kuru King of Hastinapura, father of Bhishma, Chitrangada, and Vichitravirya.',
    keyScriptureRef: 'Mahabharata Adi Parva'
  },
  {
    id: 'gen-pandu',
    name: 'King Pandu',
    sanskritName: 'पाण्डुः',
    lineage: 'Chandra Vansha',
    children: ['Yudhisthira', 'Bhima', 'Arjuna', 'Nakula', 'Sahadeva'],
    summary: 'Father of the 5 Pandavas; handed kingdom to Dhritarashtra due to forest exile.',
    keyScriptureRef: 'Mahabharata Adi Parva'
  },
  {
    id: 'gen-arjuna',
    name: 'Arjuna',
    sanskritName: 'अर्जुनः',
    lineage: 'Chandra Vansha',
    parents: ['Pandu', 'Kunti'],
    children: ['Abhimanyu', 'Iravan', 'Babruvahana', 'Shrutakarma'],
    summary: 'Peerless archer, recipient of the Bhagavad Gita from Sri Krishna.',
    keyScriptureRef: 'Mahabharata'
  },
  {
    id: 'gen-abhimanyu',
    name: 'Abhimanyu',
    sanskritName: 'अभिमन्युः',
    lineage: 'Chandra Vansha',
    parents: ['Arjuna', 'Subhadra'],
    children: ['Parikshit'],
    summary: 'Heroic son of Arjuna who broke into the Chakravyuha formation.',
    keyScriptureRef: 'Mahabharata Drona Parva'
  },
  {
    id: 'gen-parikshit',
    name: 'King Parikshit',
    sanskritName: 'परिक्षित्',
    lineage: 'Chandra Vansha',
    parents: ['Abhimanyu', 'Uttara'],
    children: ['Janamejaya'],
    summary: 'Kuru King who listened to Shrimad Bhagavata Purana from Sage Shuka on the banks of Ganga.',
    keyScriptureRef: 'Srimad Bhagavata Purana Canto 1'
  }
];
