export interface SacredRouteWaypoint {
  id: string;
  name: string;
  sanskritName: string;
  modernLocation: string;
  stateOrCountry: string;
  coordinates: { lat: number; lng: number };
  routeCategory: 'Ramayana Yatra' | 'Mahabharata Kshetra' | 'Sapta Puri' | 'Ancient University';
  significance: string;
  keyScriptureEvent: string;
}

export const SACRED_GEOGRAPHY_ROUTES_DATA: SacredRouteWaypoint[] = [
  // Sapta Puris
  {
    id: 'puri-ayodhya',
    name: 'Ayodhya (Mokshada Puri 1)',
    sanskritName: 'अयोध्या नगरी',
    modernLocation: 'Ayodhya',
    stateOrCountry: 'Uttar Pradesh',
    coordinates: { lat: 26.7922, lng: 82.1998 },
    routeCategory: 'Sapta Puri',
    significance: 'Birthplace of Bhagavan Sri Rama, capital of Surya Vansha kings on Sarayu river banks.',
    keyScriptureEvent: 'Birth of Sri Rama, Ramayana Bala Kanda.'
  },
  {
    id: 'puri-mathura',
    name: 'Mathura (Mokshada Puri 2)',
    sanskritName: 'मथुरापुरी',
    modernLocation: 'Mathura',
    stateOrCountry: 'Uttar Pradesh',
    coordinates: { lat: 27.4924, lng: 77.6737 },
    routeCategory: 'Sapta Puri',
    significance: 'Birthplace of Lord Sri Krishna on Yamuna banks.',
    keyScriptureEvent: 'Krishna Avatara, Srimad Bhagavatam Canto 10.'
  },
  {
    id: 'puri-maya',
    name: 'Maya / Haridwar (Mokshada Puri 3)',
    sanskritName: 'मायापुरी (हरिद्वारम्)',
    modernLocation: 'Haridwar',
    stateOrCountry: 'Uttarakhand',
    coordinates: { lat: 29.9457, lng: 78.1642 },
    routeCategory: 'Sapta Puri',
    significance: 'Gateway to the Himalayas where Mother Ganga enters the Indo-Gangetic plains.',
    keyScriptureEvent: 'Kumbha Mela drop of Nectar (Amrita), Brahma Kunda.'
  },
  {
    id: 'puri-kashi',
    name: 'Kashi / Varanasi (Mokshada Puri 4)',
    sanskritName: 'काशी (वाराणसी)',
    modernLocation: 'Varanasi',
    stateOrCountry: 'Uttar Pradesh',
    coordinates: { lat: 25.3176, lng: 82.9739 },
    routeCategory: 'Sapta Puri',
    significance: 'Eternal city of Lord Shiva on Trident (Trishula) between Varuna and Assi rivers.',
    keyScriptureEvent: 'Taraka Mantra bestowal at death for immediate liberation.'
  },
  {
    id: 'puri-kanchi',
    name: 'Kanchipuram (Mokshada Puri 5)',
    sanskritName: 'काञ्चीपुरम्',
    modernLocation: 'Kanchipuram',
    stateOrCountry: 'Tamil Nadu',
    coordinates: { lat: 12.8342, lng: 79.7036 },
    routeCategory: 'Sapta Puri',
    significance: 'City of 1000 temples, divided into Shiva Kanchi, Vishnu Kanchi, and Kamakoti Peetam.',
    keyScriptureEvent: 'Goddess Kamakshi worship and Adi Shankara Kamakoti Peetham.'
  },
  {
    id: 'puri-avantika',
    name: 'Avantika / Ujjain (Mokshada Puri 6)',
    sanskritName: 'अवन्तिका (उज्जयिनी)',
    modernLocation: 'Ujjain',
    stateOrCountry: 'Madhya Pradesh',
    coordinates: { lat: 23.1765, lng: 75.7885 },
    routeCategory: 'Sapta Puri',
    significance: 'Home of Mahakaleshwar Jyotirlinga, Prime Meridian of ancient Indian Astronomy.',
    keyScriptureEvent: 'Sandipani Ashram where Sri Krishna and Balarama learned 64 arts.'
  },
  {
    id: 'puri-dwaraka',
    name: 'Dwaraka (Mokshada Puri 7)',
    sanskritName: 'द्वारकापुरी',
    modernLocation: 'Dwarka',
    stateOrCountry: 'Gujarat',
    coordinates: { lat: 22.2442, lng: 68.9685 },
    routeCategory: 'Sapta Puri',
    significance: 'Golden island city ruled by Lord Krishna on Arabian Sea coast.',
    keyScriptureEvent: 'Establishment of Anarta Kingdom, Mahabharata epoch.'
  },

  // Ramayana Yatra Route
  {
    id: 'ram-chitrakoot',
    name: 'Chitrakoot (Ramayana Yatra)',
    sanskritName: 'चित्रकूटपर्वतः',
    modernLocation: 'Chitrakoot',
    stateOrCountry: 'Madhya Pradesh / Uttar Pradesh',
    coordinates: { lat: 25.1764, lng: 80.8687 },
    routeCategory: 'Ramayana Yatra',
    significance: 'First retreat where Sri Rama, Sita, and Lakshmana stayed in exile; site of Bharat Milap.',
    keyScriptureEvent: 'Ramayana Ayodhya Kanda & Aranya Kanda.'
  },
  {
    id: 'ram-dandakaranya',
    name: 'Panchavati / Nashik',
    sanskritName: 'पञ्चवटी (नासिकम्)',
    modernLocation: 'Nashik',
    stateOrCountry: 'Maharashtra',
    coordinates: { lat: 19.9975, lng: 73.7898 },
    routeCategory: 'Ramayana Yatra',
    significance: 'Five banyan trees along Godavari river where Sita was abducted by Ravana.',
    keyScriptureEvent: 'Abduction of Sita, Jatayu confrontation.'
  },
  {
    id: 'ram-kishkindha',
    name: 'Kishkindha / Hampi',
    sanskritName: 'किष्किन्धा (हम्पी)',
    modernLocation: 'Hampi, Vijayanagara',
    stateOrCountry: 'Karnataka',
    coordinates: { lat: 15.3350, lng: 76.4600 },
    routeCategory: 'Ramayana Yatra',
    significance: 'Vanara kingdom where Sri Rama met Lord Hanuman at Anjanadri Hill and forged alliance with Sugriva.',
    keyScriptureEvent: 'Meeting Hanuman & Sugriva, Ramayana Kishkindha Kanda.'
  },

  // Ancient Universities
  {
    id: 'univ-takshashila',
    name: 'Takshashila University (Taxila)',
    sanskritName: 'तक्षशिला विश्वविद्यालयः',
    modernLocation: 'Taxila',
    stateOrCountry: 'Punjab (Ancient Gandhara)',
    coordinates: { lat: 33.7460, lng: 72.8390 },
    routeCategory: 'Ancient University',
    significance: 'World’s oldest university (c. 1000 BCE). Alma mater of Chanakya, Panini, Jivaka, and Chandragupta Maurya.',
    keyScriptureEvent: 'Codification of Ashtadhyayi grammar by Panini.'
  },
  {
    id: 'univ-nalanda',
    name: 'Nalanda Mahavihara',
    sanskritName: 'नालन्दा महाविहारः',
    modernLocation: 'Nalanda, Rajgir',
    stateOrCountry: 'Bihar',
    coordinates: { lat: 25.1357, lng: 85.4452 },
    routeCategory: 'Ancient University',
    significance: 'Legendary international university housing Dharma Gunj library with 9 million manuscripts.',
    keyScriptureEvent: 'Center of Advanced Logic (Hetuvidya), Philosophy, and Astronomy.'
  },
  {
    id: 'univ-sharada',
    name: 'Sharada Peeth University',
    sanskritName: 'शारदापीठम्',
    modernLocation: 'Neelum Valley, Kashmir',
    stateOrCountry: 'Kashmir',
    coordinates: { lat: 34.7890, lng: 73.9510 },
    routeCategory: 'Ancient University',
    significance: 'Ancient temple university dedicated to Goddess Sharada (Saraswati); origin of Sharada script.',
    keyScriptureEvent: 'Ramanujacharya acquired Bodhayana Vritti manuscript here to compose Sri Bhashya.'
  }
];
