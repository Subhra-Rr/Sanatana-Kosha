import { PanchangData } from '../types';
import { GITA_CHAPTERS_DATA } from '../data/bhagavadGita';
import { VEDAS_DATA } from '../data/vedas';

const TITHIS = [
  'Pratipada', 'Dvitiya', 'Tritiya', 'Chaturthi', 'Panchami',
  'Shasthi', 'Saptami', 'Ashtami', 'Navami', 'Dashami',
  'Ekadashi', 'Dvadashi', 'Trayodashi', 'Chaturdashi', 'Purnima / Amavasya'
];

const NAKSHATRAS = [
  { name: 'Ashwini', deity: 'Ashvin Kumaras', rashi: 'Mesha' },
  { name: 'Bharani', deity: 'Yama', rashi: 'Mesha' },
  { name: 'Krittika', deity: 'Agni', rashi: 'Vrishabha' },
  { name: 'Rohini', deity: 'Brahma / Prajapati', rashi: 'Vrishabha' },
  { name: 'Mrigashirsha', deity: 'Soma (Moon)', rashi: 'Mithuna' },
  { name: 'Ardra', deity: 'Rudra (Shiva)', rashi: 'Mithuna' },
  { name: 'Punarvasu', deity: 'Aditi', rashi: 'Karka' },
  { name: 'Pushya', deity: 'Brihaspati', rashi: 'Karka' },
  { name: 'Ashlesha', deity: 'Nagas', rashi: 'Karka' },
  { name: 'Magha', deity: 'Pitrs (Ancestors)', rashi: 'Simha' },
  { name: 'Purva Phalguni', deity: 'Bhaga', rashi: 'Simha' },
  { name: 'Uttara Phalguni', deity: 'Aryaman', rashi: 'Kanya' },
  { name: 'Hasta', deity: 'Savitr', rashi: 'Kanya' },
  { name: 'Chitra', deity: 'Vishvakarma', rashi: 'Tula' },
  { name: 'Swati', deity: 'Vayu', rashi: 'Tula' },
  { name: 'Vishakha', deity: 'Indra-Agni', rashi: 'Vrishchika' },
  { name: 'Anuradha', deity: 'Mitra', rashi: 'Vrishchika' },
  { name: 'Jyeshtha', deity: 'Indra', rashi: 'Vrishchika' },
  { name: 'Mula', deity: 'Nirriti', rashi: 'Dhanu' },
  { name: 'Purva Ashadha', deity: 'Apas (Water)', rashi: 'Dhanu' },
  { name: 'Uttara Ashadha', deity: 'Vishwa Devas', rashi: 'Makara' },
  { name: 'Shravana', deity: 'Vishnu', rashi: 'Makara' },
  { name: 'Dhanishta', deity: 'Vasus', rashi: 'Kumbha' },
  { name: 'Shatabhisha', deity: 'Varuna', rashi: 'Kumbha' },
  { name: 'Purva Bhadrapada', deity: 'Aja Ekapada', rashi: 'Meena' },
  { name: 'Uttara Bhadrapada', deity: 'Ahirbudhnya', rashi: 'Meena' },
  { name: 'Revati', deity: 'Pushan', rashi: 'Meena' }
];

const YOGAS = ['Vishkambha', 'Priti', 'Ayushman', 'Saubhagya', 'Shobhana', 'Atiganda', 'Sukarma', 'Dhriti', 'Shula', 'Ganda', 'Vriddhi', 'Dhruva', 'Vyaghat', 'Harshana', 'Vajra', 'Siddhi', 'Vyatipata', 'Variyan', 'Parigha', 'Shiva', 'Siddha', 'Sadhya', 'Shubha', 'Shukla', 'Brahma', 'Indra', 'Vaidhriti'];

export const panchangService = {
  getTodayPanchang(): PanchangData {
    const today = new Date();
    const dayOfYear = Math.floor((today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / (1000 * 60 * 60 * 24));

    // Calculate Tithi (cycle of 15)
    const tithiIdx = dayOfYear % 15;
    const paksha: 'Shukla' | 'Krishna' = (Math.floor(dayOfYear / 15) % 2 === 0) ? 'Shukla' : 'Krishna';
    
    // Calculate Nakshatra (cycle of 27)
    const nakshatraObj = NAKSHATRAS[dayOfYear % 27];

    // Calculate Yoga (cycle of 27)
    const yogaStr = YOGAS[dayOfYear % 27];

    // Select Daily Featured Shloka
    // We rotate between Gita verses and Rigveda / Upanishad mantras
    const allVerses = GITA_CHAPTERS_DATA.flatMap(c => c.featuredVerses);
    const selectedVerse = allVerses[dayOfYear % allVerses.length] || VEDAS_DATA[0].verses![0];

    const options: Intl.DateTimeFormatOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateString = today.toLocaleDateString('en-US', options);

    return {
      dateString,
      tithi: {
        name: TITHIS[tithiIdx],
        paksha,
        percentage: 82
      },
      nakshatra: nakshatraObj,
      yoga: yogaStr,
      karana: 'Bava',
      rahukaal: '10:30 AM – 12:00 PM',
      auspiciousTime: '06:15 AM – 07:45 AM (Abhijit Muhurta)',
      festivalToday: tithiIdx === 10 ? 'Ekadashi Vrata' : (tithiIdx === 14 && paksha === 'Shukla' ? 'Purnima Vrata' : undefined),
      dailyShloka: selectedVerse
    };
  }
};
