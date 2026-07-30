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
  }
];
