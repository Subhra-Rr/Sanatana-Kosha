export interface AcademyQuizQuestion {
  id: string;
  questionType: 'mcq' | 'true-false' | 'match' | 'verse-id';
  questionText: string;
  options?: string[];
  correctAnswer: string | number | Record<string, string>;
  explanation: string;
  sanskritSnippet?: string;
}

export interface AcademyLesson {
  id: string;
  lessonNumber: number;
  title: string;
  sanskritTitle?: string;
  summary: string;
  keyPoints: string[];
  sanskritShloka?: {
    text: string;
    translation: string;
  };
  quiz: AcademyQuizQuestion[];
}

export interface AcademyCourse {
  id: string;
  courseTitle: string;
  sanskritTitle: string;
  category: 'Vedas' | 'Upanishads' | 'Sanskrit' | 'Vedanta' | 'Yoga';
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  description: string;
  estimatedDuration: string;
  lessons: AcademyLesson[];
}

export const LEARNING_ACADEMY_COURSES: AcademyCourse[] = [
  {
    id: 'course-vedas-101',
    courseTitle: 'Introduction to the Four Vedas',
    sanskritTitle: 'चतुर्वेद परिचयः',
    category: 'Vedas',
    level: 'Beginner',
    description: 'Discover the structure, chanting tradition, four divisions (Samhita, Brahmana, Aranyaka, Upanishad), and timeless wisdom of the world’s oldest literature.',
    estimatedDuration: '45 Mins',
    lessons: [
      {
        id: 'v101-l1',
        lessonNumber: 1,
        title: 'What are the Vedas & Apaurusheyata',
        sanskritTitle: 'वेदस्वरूपम् अपौरुषेयत्वं च',
        summary: 'The word "Veda" comes from the root vid (to know). The Vedas are considered Apaurusheya—not created by human mind, but realized by Rishis in deep meditative states (Drishti).',
        keyPoints: [
          'Veda means sacred knowledge or divine light of wisdom.',
          'Rishis are Mantradrashtas (seers of mantras), not human authors.',
          'Preserved orally across millennia through strict accent patterns (Svara): Udatta, Anudatta, and Svarita.'
        ],
        sanskritShloka: {
          text: 'इषे त्वोर्जे त्वा वायव स्थ देवो वः सविता प्रार्पयतु श्रेष्ठतमाय कर्मणे ॥',
          translation: 'May the divine Savitar impel you towards the highest noble actions (Yajurveda 1.1).'
        },
        quiz: [
          {
            id: 'q1',
            questionType: 'mcq',
            questionText: 'What does the term "Apaurusheya" mean in reference to the Vedas?',
            options: [
              'Written by ancient kings',
              'Not of human authorship, but eternally revealed divine wisdom',
              'Composed in modern classical Sanskrit',
              'Translated from foreign scripts'
            ],
            correctAnswer: 1,
            explanation: 'Apaurusheya signifies that the Vedas were not authored by any human intellect, but revealed to meditative Rishis.'
          },
          {
            id: 'q2',
            questionType: 'true-false',
            questionText: 'True or False: A Rishi is considered the "author" who invented the Vedic mantras from imagination.',
            options: ['True', 'False'],
            correctAnswer: 1,
            explanation: 'False. A Rishi is a Mantradrashta (seer) who observed the eternal vibration of the mantra in deep Samadhi.'
          }
        ]
      },
      {
        id: 'v101-l2',
        lessonNumber: 2,
        title: 'The Four Divisions of Each Veda',
        sanskritTitle: 'वेदविभाग चतुष्टयम्',
        summary: 'Every Veda is organized into four distinct sections tailored for different stages of inner growth: Samhita, Brahmana, Aranyaka, and Upanishad.',
        keyPoints: [
          'Samhita: Hymns and mantras dedicated to cosmic forces and divine aspects.',
          'Brahmana: Prose manuals explaining ritual symbolism and inner meaning.',
          'Aranyaka: Forest texts focused on inner meditation and contemplative symbolism.',
          'Upanishad: Philosophical core revealing non-dual knowledge of Atman and Brahman.'
        ],
        quiz: [
          {
            id: 'q3',
            questionType: 'mcq',
            questionText: 'Which section of a Veda contains its supreme philosophical essence (Jnana Kanda)?',
            options: ['Samhita', 'Brahmana', 'Aranyaka', 'Upanishad'],
            correctAnswer: 3,
            explanation: 'The Upanishads form the Vedanta (end of Veda) and contain the pure philosophical wisdom.'
          }
        ]
      }
    ]
  },
  {
    id: 'course-sanskrit-101',
    courseTitle: 'Sanskrit Basics & Pronunciation',
    sanskritTitle: 'संस्कृत प्रवेशः उच्चारणशास्त्रं च',
    category: 'Sanskrit',
    level: 'Beginner',
    description: 'Master Devanagari script, vocal articulation points (Kanthya, Talavya, etc.), and common shloka chanting rhythms.',
    estimatedDuration: '30 Mins',
    lessons: [
      {
        id: 'sans101-l1',
        lessonNumber: 1,
        title: 'The Phonetic Perfection of Devanagari',
        sanskritTitle: 'वर्णमाला विज्ञानम्',
        summary: 'Sanskrit is perfectly phonetic—every letter corresponds to a unique vocal tract position.',
        keyPoints: [
          '5 Articulation points: Throat, Palate, Roof of mouth, Teeth, Lips.',
          'Pure vowels (Svara) and structured consonant grids (Varga).',
          'Exact accent patterns ensure pristine preservation of meaning.'
        ],
        quiz: [
          {
            id: 'q4',
            questionType: 'mcq',
            questionText: 'Which vocal position produces the "K-varga" consonants (क, ख, ग, घ)?',
            options: ['Talavya (Palate)', 'Kanthya (Throat / Guttural)', 'Oshthya (Lips)', 'Dantya (Teeth)'],
            correctAnswer: 1,
            explanation: 'K-varga consonants originate from the throat (Kanthya).'
          }
        ]
      }
    ]
  },
  {
    id: 'course-vedanta-101',
    courseTitle: 'Essentials of Advaita & Classical Vedanta',
    sanskritTitle: 'वेदान्त विचारसारः',
    category: 'Vedanta',
    level: 'Intermediate',
    description: 'Explore Prasthanatrayi (Upanishads, Gita, Brahma Sutras), Maya, Brahman, Atman, and Sadhana Chatushtaya.',
    estimatedDuration: '60 Mins',
    lessons: [
      {
        id: 'ved101-l1',
        lessonNumber: 1,
        title: 'Sadhana Chatushtaya: Qualifications for Wisdom',
        sanskritTitle: 'साधनचतुष्टय सम्पत्तिः',
        summary: 'Before embarking on enquiry into Brahman (Brahma Jijnasa), classical Vedanta outlines four mental prerequisites: Vivek, Vairagya, Shat-Sampat, and Mumukshutva.',
        keyPoints: [
          'Nitya-Anitya Vastu Viveka: Discernment between eternal Reality and transient appearances.',
          'Ihamutrartha Phala Bhoga Viraga: Dispassion towards temporary sense pleasures.',
          'Shatka Sampatti: Sixfold inner virtues (Shama, Dama, Uparati, Titiksha, Shraddha, Samadhana).',
          'Mumukshutva: Intense longing for spiritual liberation.'
        ],
        quiz: [
          {
            id: 'q5',
            questionType: 'verse-id',
            questionText: 'Identify the opening aphorism of the Brahma Sutras regarding the desire to know Brahman:',
            sanskritSnippet: 'अथातो ब्रह्मजिज्ञासा ॥',
            options: ['Brahma Sutra 1.1.1', 'Yoga Sutra 1.1', 'Nyaya Sutra 1.1', 'Mimamsa Sutra 1.1'],
            correctAnswer: 0,
            explanation: 'Athato Brahma Jijnasa (Now therefore arises the desire to inquire into Brahman) is Brahma Sutra 1.1.1.'
          }
        ]
      }
    ]
  }
];
