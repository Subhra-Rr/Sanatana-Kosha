export interface ParamparaNode {
  id: string;
  name: string;
  sanskritName: string;
  role: 'Divine Origin' | 'Rishi / Sage' | 'Historical Acharya' | 'Discipline Head';
  period: string;
  location?: string;
  guruId?: string;
  keyContributions: string[];
  majorWorks: string[];
  quoteOrMantra?: string;
}

export interface GuruLineageTree {
  id: string;
  lineageName: string;
  sanskritLineageName: string;
  tradition: string;
  description: string;
  foundationalMantra?: string;
  nodes: ParamparaNode[];
}

export const GURU_PARAMPARA_DATA: GuruLineageTree[] = [
  {
    id: 'lineage-advaita',
    lineageName: 'Advaita Vedanta Parampara',
    sanskritLineageName: 'अद्वैत गुरुपरम्परा',
    tradition: 'Advaita Smarta Sampradaya',
    description: 'The ancient unbroken lineage of non-dual wisdom starting from Lord Dakshinamurti / Narayana down through Vedic Rishis to Adi Shankaracharya and his four mathas.',
    foundationalMantra: 'नारायणं पद्मभवं वसिष्ठं शक्तिं च तत्पुत्रपराशरं च । व्यासं शुकं गौडपदं महान्तं गोविन्दयोगीन्द्रमथास्य शिष्यम् ॥',
    nodes: [
      {
        id: 'adv-1',
        name: 'Lord Narayana / Dakshinamurti',
        sanskritName: 'श्रीमन्नारायणः / दक्षिणामूर्तिः',
        role: 'Divine Origin',
        period: 'Eternal (Anadi)',
        keyContributions: ['Original revealer of Brahma-Vidya in silent contemplation.'],
        majorWorks: ['Vedic Revelation'],
        quoteOrMantra: 'ॐ नमो नारायणाय'
      },
      {
        id: 'adv-2',
        name: 'Brahma & Vasishta Maharshi',
        sanskritName: 'ब्रह्मा च वसिष्ठः',
        role: 'Rishi / Sage',
        guruId: 'adv-1',
        period: 'Vedic Epoch',
        keyContributions: ['Preserved Vedic wisdom, Yoga Vasishta teachings on non-duality.'],
        majorWorks: ['Yoga Vasishta', 'Rigveda Suktas']
      },
      {
        id: 'adv-3',
        name: 'Shakti & Parasara Maharshi',
        sanskritName: 'शक्तिः पराशरश्च',
        role: 'Rishi / Sage',
        guruId: 'adv-2',
        period: 'Vedic Era',
        keyContributions: ['Composed Vishnu Purana and early astronomical treatises.'],
        majorWorks: ['Vishnu Purana', 'Brihat Parasara Hora Shastra']
      },
      {
        id: 'adv-4',
        name: 'Maharshi Veda Vyasa',
        sanskritName: 'महर्षि वेदव्यासाः',
        role: 'Rishi / Sage',
        guruId: 'adv-3',
        period: 'c. 3000 BCE / Dvapara Yuga',
        location: 'Badarikashram',
        keyContributions: ['Codified 4 Vedas, composed Brahma Sutras, Mahabharata, 18 Puranas.'],
        majorWorks: ['Brahma Sutras', 'Bhagavad Gita (Mahabharata)', 'Puranas']
      },
      {
        id: 'adv-5',
        name: 'Shukadeva Goswami',
        sanskritName: 'श्री शुकदेवः',
        role: 'Rishi / Sage',
        guruId: 'adv-4',
        period: 'Dvapara Yuga',
        keyContributions: ['Recited Srimad Bhagavatam to King Parikshit.'],
        majorWorks: ['Srimad Bhagavatam Recitation']
      },
      {
        id: 'adv-6',
        name: 'Gaudapadacharya',
        sanskritName: 'श्री गौडपादाचार्यः',
        role: 'Historical Acharya',
        guruId: 'adv-5',
        period: 'c. 6th - 7th Century CE',
        location: 'Narmada Riverbanks',
        keyContributions: ['Systematized Advaita philosophy in his Mandukya Karika.'],
        majorWorks: ['Mandukya Karika']
      },
      {
        id: 'adv-7',
        name: 'Govinda Bhagavatpada',
        sanskritName: 'श्री गोविन्द भगवत्पादाः',
        role: 'Historical Acharya',
        guruId: 'adv-6',
        period: 'c. 7th - 8th Century CE',
        location: 'Narmada Cave',
        keyContributions: ['Guru of Adi Shankara, initiated him into sannyasa.'],
        majorWorks: ['Advaitha Anubhuti']
      },
      {
        id: 'adv-8',
        name: 'Adi Shankaracharya',
        sanskritName: 'जगद्गुरु श्री आदि शङ्कराचार्यः',
        role: 'Historical Acharya',
        guruId: 'adv-7',
        period: '788 CE – 820 CE',
        location: 'Kalady, Kerala / All-India Digvijaya',
        keyContributions: ['Consolidated Advaita, wrote Prasthanatrayi Bhashya, established 4 Mathas.'],
        majorWorks: ['Brahma Sutra Bhashya', 'Gita Bhashya', 'Upanishad Bhashyas', 'Vivekachudamani'],
        quoteOrMantra: 'ब्रह्म सत्यं जगन्मिथ्या जीवो ब्रह्मैव नापरः'
      },
      {
        id: 'adv-9a',
        name: 'Sureshwaracharya (Sringeri Matha)',
        sanskritName: 'सुरेश्वराचार्यः',
        role: 'Discipline Head',
        guruId: 'adv-8',
        period: 'c. 8th Century CE',
        location: 'Sringeri Sharada Peetham',
        keyContributions: ['First head of Sringeri Peetham (Yajurveda).'],
        majorWorks: ['Naishkarmya Siddhi', 'Taittiriya Vartika']
      },
      {
        id: 'adv-9b',
        name: 'Padmapadacharya (Puri Matha)',
        sanskritName: 'पद्मपादाचार्यः',
        role: 'Discipline Head',
        guruId: 'adv-8',
        period: 'c. 8th Century CE',
        location: 'Puri Govardhana Peetham',
        keyContributions: ['First head of Puri Peetham (Rigveda).'],
        majorWorks: ['Panchapadika']
      },
      {
        id: 'adv-9c',
        name: 'Hastamalakacharya (Dwaraka Matha)',
        sanskritName: 'हस्तामलकाचार्यः',
        role: 'Discipline Head',
        guruId: 'adv-8',
        period: 'c. 8th Century CE',
        location: 'Dwaraka Sharada Peetham',
        keyContributions: ['First head of Dwaraka Peetham (Samaveda).'],
        majorWorks: ['Hastamalaka Stotra']
      },
      {
        id: 'adv-9d',
        name: 'Totakacharya (Badrikashram Matha)',
        sanskritName: 'तोटकाचार्यः',
        role: 'Discipline Head',
        guruId: 'adv-8',
        period: 'c. 8th Century CE',
        location: 'Jyotirmath, Badrinath',
        keyContributions: ['First head of Jyotirmath (Atharvaveda).'],
        majorWorks: ['Totakashtakam', 'Shrutisarasamuddharanam']
      }
    ]
  },
  {
    id: 'lineage-srivaishnava',
    lineageName: 'Sri Vaishnava Parampara',
    sanskritLineageName: 'श्रीवैष्णव गुरुपरम्परा',
    tradition: 'Visistadvaita Sampradaya',
    description: 'The sacred lineage of Visistadvaita originating from Sri (Goddess Lakshmi) & Lord Srimannarayana, transmitted through Nammalvar and Alvars, Nathamuni, Yamunacharya, to Ramanujacharya.',
    foundationalMantra: 'लक्ष्मीनाथसमारम्भां नाथयामुनमध्यमाम् । अस्मदाचार्यपर्यन्तां वन्दे गुरुपरम्पराम् ॥',
    nodes: [
      {
        id: 'sri-1',
        name: 'Sri Lakshmi & Sriman Narayana',
        sanskritName: 'श्रीः तथा श्रीमन्नारायणः',
        role: 'Divine Origin',
        period: 'Eternal',
        keyContributions: ['Source of Ashtakshari and Dvaya Mantras.'],
        majorWorks: ['Pancharatra Agamas']
      },
      {
        id: 'sri-2',
        name: 'Nammalvar & 12 Alvars',
        sanskritName: 'नम्माळ्वार तथा १२ आऴ्वार',
        role: 'Rishi / Sage',
        guruId: 'sri-1',
        period: 'c. 5th - 8th Century CE',
        location: 'Tamil Nadu',
        keyContributions: ['Poured divine experience into 4,000 Tamil verses (Divya Prabandham - Dravida Veda).'],
        majorWorks: ['Tiruvaymoli', 'Divya Prabandham']
      },
      {
        id: 'sri-3',
        name: 'Nathamuni Acharya',
        sanskritName: 'श्रीमन्नाथमुनयः',
        role: 'Historical Acharya',
        guruId: 'sri-2',
        period: 'c. 9th Century CE',
        location: 'Veeranarayanapuram',
        keyContributions: ['Recovered and musicalized the 4,000 Divya Prabandhams.'],
        majorWorks: ['Nyaya Tattva', 'Yogarahasya']
      },
      {
        id: 'sri-4',
        name: 'Yamunacharya (Alavandar)',
        sanskritName: 'श्री यामुनाचार्यः (आळवन्दार)',
        role: 'Historical Acharya',
        guruId: 'sri-3',
        period: '916 CE – 1041 CE',
        location: 'Srirangam',
        keyContributions: ['Established Visistadvaita tenets and laid foundation for Ramanuja.'],
        majorWorks: ['Siddhitrayam', 'Stotra Ratnam', 'Gitartha Sangraha']
      },
      {
        id: 'sri-5',
        name: 'Sri Ramanujacharya',
        sanskritName: 'जगद्गुरु श्री रामानुजाचार्यः',
        role: 'Historical Acharya',
        guruId: 'sri-4',
        period: '1017 CE – 1137 CE',
        location: 'Sriperumbudur / Srirangam / Melukote',
        keyContributions: ['Systematized Visistadvaita, Sri Bhashya, social equality in temple worship.'],
        majorWorks: ['Sri Bhashya', 'Vedartha Sangraha', 'Gita Bhashya', 'Gadya Trayam']
      },
      {
        id: 'sri-6',
        name: 'Swami Vedanta Desika',
        sanskritName: 'श्री वेदान्त देशिकः',
        role: 'Historical Acharya',
        guruId: 'sri-5',
        period: '1268 CE – 1369 CE',
        location: 'Kanchipuram / Srirangam',
        keyContributions: ['Master polymath who composed 100+ Sanskrit and Manipravala treatises.'],
        majorWorks: ['Tattva Mukta Kalapa', 'Shatadushani', 'Paduka Sahasram']
      }
    ]
  },
  {
    id: 'lineage-dvaita',
    lineageName: 'Dvaita Tattvavada Parampara',
    sanskritLineageName: 'द्वैत तत्त्ववाद परम्परा',
    tradition: 'Brahma-Madhva Sampradaya',
    description: 'The unbroken lineage of dualist realism originating from Lord Hamsa / Brahma to Sri Madhvacharya and Sri Raghavendra Swamy.',
    nodes: [
      {
        id: 'dva-1',
        name: 'Lord Hamsa & Veda Vyasa',
        sanskritName: 'श्री हंसावतारः तथा वेदव्यासाः',
        role: 'Divine Origin',
        period: 'Eternal',
        keyContributions: ['Taught fundamental distinction between Creator and created souls.'],
        majorWorks: ['Brahma Sutras']
      },
      {
        id: 'dva-2',
        name: 'Sri Madhvacharya (Ananda Tirtha)',
        sanskritName: 'जगद्गुरु श्री मध्वाचार्यः',
        role: 'Historical Acharya',
        guruId: 'dva-1',
        period: '1238 CE – 1317 CE',
        location: 'Udupi / Pajaka',
        keyContributions: ['Founded Dvaita philosophy, established Udupi Sri Krishna temple and Ashta Mathas.'],
        majorWorks: ['Sarvamoola Granthas', 'Anu Vyakhyana', 'Anu Bhashya']
      },
      {
        id: 'dva-3',
        name: 'Sri Jayatirtha (Tika Acharya)',
        sanskritName: 'श्री जयतीर्थाः',
        role: 'Historical Acharya',
        guruId: 'dva-2',
        period: '1345 CE – 1388 CE',
        location: 'Malkhed',
        keyContributions: ['Wrote master commentaries (Tikas) on all Madhva works.'],
        majorWorks: ['Srimad Nyaya Sudha']
      },
      {
        id: 'dva-4',
        name: 'Sri Vyasatirtha',
        sanskritName: 'श्री व्यासतीर्थाः',
        role: 'Historical Acharya',
        guruId: 'dva-3',
        period: '1460 CE – 1539 CE',
        location: 'Vijayanagara Empire',
        keyContributions: ['Royal Rajaguru of Krishnadevaraya, philosophical dialectician.'],
        majorWorks: ['Nyayamrita', 'Tarka Tandava', 'Tatparya Chandrika']
      },
      {
        id: 'dva-5',
        name: 'Sri Raghavendra Swamy',
        sanskritName: 'श्री राघवेन्द्र स्वामिनः',
        role: 'Historical Acharya',
        guruId: 'dva-4',
        period: '1595 CE – 1671 CE',
        location: 'Mantralayam',
        keyContributions: ['Great saint and scholar whose Brindavan in Mantralayam blesses millions.'],
        majorWorks: ['Parimala', 'Gita Vivriti', 'Bhatta Sangraha']
      }
    ]
  }
];
