import { ScripturalDebateTopic } from '../types';

export const DEBATE_TOPICS_DATA: ScripturalDebateTopic[] = [
  {
    id: 'deb-brahman-nature',
    topic: 'Nature of Ultimate Reality (Brahman)',
    sanskritTerm: 'ब्रह्मस्वरूपविचारः',
    description: 'Examining whether Supreme Reality is fundamentally Nirguna (attribute-less consciousness) or Saguna (supreme personal divinity with divine form and qualities).',
    positions: [
      {
        schoolName: 'Advaita Vedanta (Shankara)',
        viewpoint: 'Nirguna Brahman is the ultimate reality beyond all empirical attributes, form, and gender. Saguna Brahman (Ishvara) is the manifestation of Brahman in relation to Maya.',
        primaryArgument: 'Upanishadic statements describing Brahman as "Neti, Neti" (Not this, Not this) and "Nirgunam Niranjanam" represent the transcendent reality.',
        keyVerses: ['Brihadaranyaka 2.3.6', 'Taittiriya 2.1.1', 'Katha 1.3.15']
      },
      {
        schoolName: 'Vishishtadvaita (Ramanuja)',
        viewpoint: 'Brahman is intrinsically Saguna — Sriman Narayana possessing infinite auspicious attributes (Ananta Kalyana Guna) without any flaw (Heya-guna-rahita).',
        primaryArgument: 'Scriptural passages stating "Nirguna" mean Brahman is devoid of negative material qualities (Sattva, Rajas, Tamas), not devoid of divine auspicious attributes.',
        keyVerses: ['Subala Upanishad 9', 'Chandogya 8.1.5', 'Gita 7.7']
      },
      {
        schoolName: 'Dvaita Vedanta (Madhva)',
        viewpoint: 'Vishnu is the supreme independent person (Svatantra Tattva), possessing endless transcendent qualities and distinct from all created entities.',
        primaryArgument: 'Scriptures consistently glorify Vishnu’s supreme agency, omniscience, and distinction from mortal Jivas.',
        keyVerses: ['Rigveda 1.22.20', 'Bhagavata 1.1.1']
      }
    ],
    neutralSynthesis: 'Both perspectives honor the Supreme: Advaita highlights the transcendent unconditioned aspect, while Vishishtadvaita and Dvaita emphasize the loving personal presence and auspicious qualities of the Divine.'
  },
  {
    id: 'deb-jiva-brahman-relation',
    topic: 'Relationship Between Soul (Jiva) and God (Brahman)',
    sanskritTerm: 'जीवब्रह्मसम्बन्धः',
    description: 'Investigating whether the individual self is non-different from God, a qualified part of God, or eternally distinct.',
    positions: [
      {
        schoolName: 'Advaita Vedanta',
        viewpoint: 'Identity (Abheda). Atman and Brahman are strictly identical ("Aham Brahmasmi"). Perceived sense of separation is due to Ignorance (Avidya).',
        primaryArgument: 'Mahavakyas like "Tat Tvam Asi" directly proclaim oneness between the core self and Brahman.',
        keyVerses: ['Chandogya 6.8.7', 'Brihadaranyaka 1.4.10']
      },
      {
        schoolName: 'Vishishtadvaita',
        viewpoint: 'Identity-in-Difference (Bhedabheda / Sharira-Shariri). The soul is an eternal spark/part (Amsa) forming the body of Narayana.',
        primaryArgument: 'Scriptures contain both identity texts (Abheda) and distinction texts (Bheda); they are reconciled through the concept of soul as God’s attribute/body.',
        keyVerses: ['Gita 15.7', 'Muṇḍaka 3.1.1']
      },
      {
        schoolName: 'Dvaita Vedanta',
        viewpoint: 'Absolute Difference (Bheda). The soul is an eternally distinct dependent entity, never identical to Vishnu.',
        primaryArgument: 'The two-birds analogy in Mundaka Upanishad shows one bird eating fruits (Jiva) and the other witnessing without eating (Ishvara).',
        keyVerses: ['Mundaka 3.1.1', 'Shvetashvatara 4.6']
      },
      {
        schoolName: 'Achintya Bhedabheda (Chaitanya)',
        viewpoint: 'Inconceivable simultaneous oneness and difference. Like the sun and its rays, the soul is simultaneously one with and different from Krishna.',
        primaryArgument: 'Divine potency (Shakti) is inexpressible purely through rigid mono-logic; it is understood through devotion.',
        keyVerses: ['Bhagavata 11.3.38', 'Chaitanya Charitamrita']
      }
    ],
    neutralSynthesis: 'All traditions guide the seeker toward transcending egoism. Advaita dissolves ego in universal consciousness, while Bhakti traditions surrender ego at the lotus feet of the Divine.'
  },
  {
    id: 'deb-world-reality',
    topic: 'Ontological Status of the Manifest World (Jagat)',
    sanskritTerm: 'जगत्सत्यत्वविचारः',
    description: 'Debating whether the physical world is Mithya (relative/apparent) or Satya (absolutely real).',
    positions: [
      {
        schoolName: 'Advaita Vedanta',
        viewpoint: 'Mithya (Anirvacaniya — neither purely existent like Brahman nor non-existent like a rabbit’s horn). Real on practical (Vyavaharika) plane, illusory on ultimate (Paramarthika) plane.',
        primaryArgument: 'World objects undergo constant change and sublation (Badha) upon awakening to self-knowledge.',
        keyVerses: ['Mandukya Karika 2.4', 'Vivekachudamani 231']
      },
      {
        schoolName: 'Vishishtadvaita & Dvaita',
        viewpoint: 'Satya (Real). The physical world is a real transformation/creation of God’s power and is never a delusion.',
        primaryArgument: 'God is real; therefore His creation is real and purposeful. Calling God’s world an illusion undermines divine creation.',
        keyVerses: ['Rigveda 10.190.1', 'Sri Bhashya 1.1.1']
      }
    ],
    neutralSynthesis: 'Advaita terms the world "Mithya" to prevent attachment to passing forms, while dualist systems term it "Satya" to encourage responsible ethical engagement in sacred creation.'
  },
  {
    id: 'deb-shankara-mandana',
    topic: 'Adi Shankara vs Mandana Mishra (Karma vs Jnana)',
    sanskritTerm: 'कर्मज्ञानसमुच्चयविचारः • मण्डनमिश्र-शङ्कराचार्य-शास्त्रार्थः',
    description: 'The monumental historical debate at Mahishmati between householder scholar Mandana Mishra (Purva Mimamsa) and young sannyasi Adi Shankaracharya (Advaita Vedanta), judged by Ubhaya Bharati.',
    positions: [
      {
        schoolName: 'Purva Mimamsa (Mandana Mishra)',
        viewpoint: 'Vedic Karma (ritual action & householder duty) is the highest path to perfection; liberation is attained by lifelong performance of prescribed Vedic duties.',
        primaryArgument: 'Vedas primarily command action (Kriyartha hi Vedanam). Renunciation without action violates Vedic duty.',
        keyVerses: ['Jaimini Sutra 1.1.1', 'Taittiriya Brahmana']
      },
      {
        schoolName: 'Advaita Vedanta (Adi Shankara)',
        viewpoint: 'Self-Knowledge (Atma-Jnana) alone destroys fundamental ignorance (Avidya) and grants immediate liberation (Sadyomukti). Karma purifies the mind but cannot produce non-dual realization.',
        primaryArgument: 'Action is born of desire and duality (doer, instrument, result). Brahman is uncreated and cannot be produced by physical action.',
        keyVerses: ['Brihadaranyaka 4.4.22', 'Katha Upanishad 1.2.23', 'Brahma Sutra 1.1.4']
      }
    ],
    neutralSynthesis: 'Mandana Mishra conceded defeat and embraced sannyasa as Suresvaracharya. Ubhaya Bharati established that Karma-yoga purifies the mind (Chitta-Shuddhi), preparing it for the flame of self-knowledge (Jnana).'
  },
  {
    id: 'deb-yajnavalkya-gargi',
    topic: 'Yajnavalkya vs Gargi Vachaknavi (Supreme Substratum)',
    sanskritTerm: 'गार्गी-याज्ञवल्क्य-संवादः • बृहदारण्यक-शास्त्रार्थः',
    description: 'The famous philosophical challenge at King Janaka’s court where brahmavadini Gargi Vachaknavi questioned sage Yajnavalkya on the ultimate unweaving warp and woof of the universe.',
    positions: [
      {
        schoolName: 'Gargi Vachaknavi (Challenger)',
        viewpoint: 'If water is woven on air, air on space, space on heavenly worlds, on what ultimate unyielding substratum is all existence woven?',
        primaryArgument: 'Infinite regress (Anavastha) must be resolved by pinpointing the imperishable foundation of space.',
        keyVerses: ['Brihadaranyaka Upanishad 3.6 & 3.8']
      },
      {
        schoolName: 'Yajnavalkya (Maharshi)',
        viewpoint: 'All space and time are woven upon Akshara (the Imperishable Supreme Brahman), which is neither gross nor subtle, neither short nor long, witnessing all without being seen.',
        primaryArgument: 'By the command of this Imperishable Brahman, the sun, moon, earth, and sky maintain their orbits and cosmic rhythm (Rita).',
        keyVerses: ['Brihadaranyaka 3.8.8-11']
      }
    ],
    neutralSynthesis: 'Gargi famously declared to the assembly of sages that none could defeat Yajnavalkya in expounding the nature of Brahman, establishing female Rishikas as formidable pillars of Vedic wisdom.'
  },
  {
    id: 'deb-ramanuja-mayavada',
    topic: 'Ramanujacharya vs Advaitin Scholars (Abheda vs Bheda)',
    sanskritTerm: 'भेद-अभेद-श्रुति-समन्वयः • श्रीरामानुज-शास्त्रार्थः',
    description: 'Sri Ramanujacharya’s historic debate reconciling non-dual (Abheda) and dual (Bheda) scriptural passages into the unified framework of Vishishtadvaita (Qualified Non-Dualism).',
    positions: [
      {
        schoolName: 'Absolute Monism (Mayavada)',
        viewpoint: 'Scriptures affirming diversity are secondary (Gauṇa), while non-dual passages like "Tat Tvam Asi" express the sole ultimate reality.',
        primaryArgument: 'Duality is a product of Maya; once knowledge dawns, world and soul disappear into undivided oneness.',
        keyVerses: ['Mandukya Upanishad 7', 'Chandogya 6.8.7']
      },
      {
        schoolName: 'Vishishtadvaita (Ramanuja)',
        viewpoint: 'All Shruti texts are equally authoritative. Abheda texts affirm God as the Soul of all; Bheda texts affirm distinct real attributes of souls and matter forming God’s divine body (Sharira).',
        primaryArgument: 'Ghataka Shruti (bridging scriptures) resolves contradiction without branding any scriptural verse as false.',
        keyVerses: ['Subala Upanishad', 'Shvetashvatara 1.6', 'Gita 15.7']
      }
    ],
    neutralSynthesis: 'Ramanuja’s synthesis established that devotion (Bhakti) and surrender (Prapatti) to Sriman Narayana form the harmonious heart of Vedic philosophy.'
  },
  {
    id: 'deb-chaitanya-sarvabhauma',
    topic: 'Chaitanya Mahaprabhu vs Vasudeva Sarvabhauma',
    sanskritTerm: 'वासुदेवसार्वभौम-चैतन्य-संवादः • जगन्नाथपुरी-शास्त्रार्थः',
    description: 'The historic encounter at Jagannath Puri between the veteran scholar Vasudeva Sarvabhauma (master of Navya-Nyaya and Vedanta) and young Sri Chaitanya Mahaprabhu.',
    positions: [
      {
        schoolName: 'Navya-Nyaya Scholasticism (Sarvabhauma)',
        viewpoint: 'Vedanta Sutras must be interpreted through complex grammatical logic, impersonal Brahman, and dry intellectual commentary.',
        primaryArgument: 'Impersonal knowledge (Nirvishesha Jnana) is superior to emotional devotional chanting.',
        keyVerses: ['Brahma Sutra 1.1.1', 'Tattva Chintamani']
      },
      {
        schoolName: 'Gaudiya Achintya Bhedabheda (Sri Chaitanya)',
        viewpoint: 'The direct literal meaning (Mukhya Artha) of Vyasa Sutras glorifies Bhagavan Sri Krishna, whose holy names (Sankirtana) melt the heart and grant pure Prema (Divine Love).',
        primaryArgument: 'Impersonal commentary conceals the sweet nectar of the Supreme Person; divine love is the fifth human goal (Panchama Purushartha).',
        keyVerses: ['Bhagavata Purana 1.7.10 (Atmarama Verse)', 'Brihan-Naradiya Purana']
      }
    ],
    neutralSynthesis: 'Sarvabhauma was so moved by Sri Chaitanya’s flawless explanation of the Atmarama verse in 18 distinct devotional ways that he surrendered at Sri Chaitanya’s feet and composed the Chaitanya Shataka.'
  }
];
