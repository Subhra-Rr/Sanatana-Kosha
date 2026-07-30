import { VedangaItem } from '../types';

export const VEDANGAS_DATA: VedangaItem[] = [
  {
    id: 'shiksha',
    name: 'Shiksha',
    sanskritName: 'शिक्षा',
    meaning: 'Phonetics & Pronunciation Science',
    purpose: 'Ensures flawless articulation, pitch accent (Udatta, Anudatta, Svarita), and phonemic precision when chanting Vedic mantras.',
    keyTexts: ['Paniniya Shiksha', 'Yajnavalkya Shiksha', 'Taittiriya Pratisakhya'],
    associatedRishis: ['Maharshi Panini', 'Rishi Bharadvaja'],
    description: 'Shiksha is described as the "Nose" of the Veda-Purusha. It analyzes sound production across 5 parameters: Svara (accent), Matra (quantity/time unit), Balam (stress/effort), Sama (evenness), and Santana (continuity).',
    importanceInVedicRecitation: 'A subtle error in accent can alter a mantra’s meaning entirely, as illustrated by the classical story of Vritra’s accent shift in Indra-shatru.'
  },
  {
    id: 'vyakarana',
    name: 'Vyakarana',
    sanskritName: 'व्याकरणम्',
    meaning: 'Grammar & Linguistic Analysis',
    purpose: 'Provides exact grammatical rules, root derivations (Dhatu), prefix/suffix analysis, and sentence structure for Sanskrit.',
    keyTexts: ['Ashtadhyayi (Panini)', 'Maha-bhashya (Patanjali)', 'Vakyapadiya (Bhartrihari)'],
    associatedRishis: ['Maharshi Panini', 'Patanjali', 'Katyayana'],
    description: 'Vyakarana is considered the "Mouth" (Mukham) of the Veda-Purusha. Panini’s Ashtadhyayi consists of 3,996 algorithmic rules that constitute one of the world’s most sophisticated formal generative grammar systems.',
    importanceInVedicRecitation: 'Allows precise decoding of compound words (Samasa) and sentence syntax across centuries of literature.'
  },
  {
    id: 'nirukta',
    name: 'Nirukta',
    sanskritName: 'निरुक्तम्',
    meaning: 'Etymology & Semantic Interpretation',
    purpose: 'Explains the semantic origins, obscure words, and metaphorical meanings of archaic Vedic terms.',
    keyTexts: ['Nirukta (Yaska)', 'Nighantu (Vedic Lexicon)'],
    associatedRishis: ['Rishi Yaska'],
    description: 'Nirukta is the "Ears" (Shrotram) of the Veda-Purusha. Yaska established that all words derive from verbal roots (Nama-dhatu relation) and categorized terms based on psychological, cosmological, and spiritual levels of meaning.',
    importanceInVedicRecitation: 'Prevents literal misinterpretation of symbolic Vedic metaphors (e.g. "Gau" as ray of light vs cow).'
  },
  {
    id: 'kalpa',
    name: 'Kalpa',
    sanskritName: 'कल्पः',
    meaning: 'Ritual Methodology & Civic Ethics',
    purpose: 'Codifies practical ritual procedures, altar geometry, social duties, and domestic samskaras.',
    keyTexts: ['Shrauta Sutras', 'Grihya Sutras', 'Dharma Sutras', 'Sulba Sutras'],
    associatedRishis: ['Baudhayana', 'Apastamba', 'Asvalayana', 'Katyayana'],
    description: 'Kalpa is the "Hands" (Karau) of the Veda-Purusha. Sulba Sutras within Kalpa contain the world’s earliest mathematical formulations of the Pythagorean theorem, irrational numbers, and geometric altar transformations.',
    importanceInVedicRecitation: 'Bridges theoretical Vedic mantras with tangible physical actions, family rites, and community ethics.'
  },
  {
    id: 'chandas',
    name: 'Chandas',
    sanskritName: 'छन्दः',
    meaning: 'Prosody, Meter & Poetic Cadence',
    purpose: 'Regulates poetic meters, syllable counts, and rhythmic structures of Vedic verses.',
    keyTexts: ['Chanda Shastra (Pingala)'],
    associatedRishis: ['Acharya Pingala'],
    description: 'Chandas is the "Feet" (Padau) of the Veda-Purusha. Pingala’s Chanda Shastra introduced binary sequence systems, combinatorics (Prastara), and the Fibonacci sequence long before European rediscovery.',
    importanceInVedicRecitation: 'Gives Vedic hymns their melodic rhythm and cadence, such as Gayatri (24 syllables), Anushtup (32 syllables), and Trishtup (44 syllables).'
  },
  {
    id: 'jyotisha',
    name: 'Jyotisha',
    sanskritName: 'ज्योतिषम्',
    meaning: 'Vedic Astronomy & Time Measurement',
    purpose: 'Calculates planetary movements, solar/lunar cycles, equinoxes, and auspicious timing (Muhurta) for rituals and seasonal festivals.',
    keyTexts: ['Vedanga Jyotisha (Lagadha)', 'Surya Siddhanta'],
    associatedRishis: ['Sage Lagadha', 'Aryabhata', 'Varahamihira'],
    description: 'Jyotisha is the "Eyes" (Chakshu) of the Veda-Purusha. It tracks the 27 Nakshatras (lunar mansions), 12 Rashis (zodiac signs), and solstices to maintain a synchronized lunisolar calendar.',
    importanceInVedicRecitation: 'Aligns human spiritual endeavors with macrocosmic celestial rhythms.'
  }
];
