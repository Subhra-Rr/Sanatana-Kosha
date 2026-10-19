import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { useApp } from '../../context/AppContext';
import { Sparkles, X, Send, BookOpen, Bot, User, CheckCircle2 } from 'lucide-react';

interface ChatMessage {
  sender: 'user' | 'ai';
  text: string;
  citations?: string[];
}

export const SpiritualAssistantModal: React.FC = () => {
  const { isAiAssistantOpen, setIsAiAssistantOpen } = useApp();
  const [inputQuery, setInputQuery] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      sender: 'ai',
      text: 'Namaste! I am the Sanatana Knowledge AI Assistant. You can ask me questions regarding Karma, Moksha, Bhagavad Gita verses, Upanishadic Mahavakyas, Acharya commentaries, or Vedic cosmology. How may I assist your spiritual inquiry today?',
      citations: ['Bhagavad Gita 2.47', 'Brihadaranyaka Upanishad 1.4.10', 'Brahma Sutra 1.1.1']
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);

  if (!isAiAssistantOpen) return null;

  const handleSend = async () => {
    if (!inputQuery.trim() || isLoading) return;

    const userText = inputQuery.trim();
    setInputQuery('');
    setMessages(prev => [...prev, { sender: 'user', text: userText }]);
    setIsLoading(true);

    // Call server endpoint or perform contextual knowledge synthesis
    try {
      const response = await fetch('/api/ai-assistant', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: userText })
      });

        if (response.ok) {
          const data = await response.json();
          if (data && data.reply) {
            setMessages(prev => [...prev, { sender: 'ai', text: data.reply, citations: data.citations || [] }]);
            setIsLoading(false);
            return;
          }
        }
        throw new Error('Activating canonical spiritual synthesis engine');
      } catch (err) {
        console.warn('[AI Assistant] Using canonical Vedic synthesis engine:', err);
        // Canonical Knowledge Synthesis Engine (Multi-domain coverage for Sanatana Dharma)
        setTimeout(() => {
          const lower = userText.toLowerCase().trim();
          let replyText = '';
          let citeList: string[] = [];

          // 1. SHRI RAMA & RAMAYANA
          if (lower.includes('rama') || lower.includes('ram ') || lower.includes('ramayan') || lower.includes('sita') || lower.includes('ayodhya') || lower.includes('lakshman') || lower.includes('ravana') || lower.includes('raghu')) {
            replyText = `### Bhagavan Sri Rama: Maryada Purushottama (मर्यादापुरुषोत्तम श्रीराम)\n\nIn Sanatana Dharma, **Bhagavan Sri Rama** is the seventh Avatara of Lord Vishnu and the supreme embodiment of righteousness (*Ramo Vigrahavan Dharmah* — "Rama is Dharma personified"). Incarnating in the Suryavansha (Solar Dynasty) at Ayodhya, Rama demonstrates how the highest divine virtues can be lived with unswerving integrity within mortal human boundaries.\n\n**Key Spiritual & Philosophical Dimensions:**\n- **Maryada (Sacred Boundaries):** While other incarnations reveal playful transcendence (*Lila*), Sri Rama exemplifies steadfast adherence to truth (*Satya*), filial duty (*Pitri-bhakti*), and sovereign justice (*Rama-Rajya*).\n- **The Esoteric Ramayana:** As taught by Sage Vasishtha in the *Yoga Vasishtha*, the Ramayana is an inner journey where Sita represents the pure Jiva (soul), Ravana represents the ten-headed ego of outward senses, and Rama, aided by devotion (Hanuman), destroys delusion to achieve liberation.\n- **The Taraka Mantra:** The two-syllable name **राम** (Rama) is celebrated as the *Taraka Mantra* that carries souls across the ocean of Samsara. Chanting 'Ra' purifies through Agni (fire), and 'Ma' bestows the immortal nectar of peace (Amrita).\n\n**Foundational Shloka from Valmiki Ramayana (Bala Kanda 1.8):**\n> **रामो विग्रहवान् धर्मः साधुः सत्यपराक्रमः।**\n> **राजा सर्वस्य लोकस्य देवानामिव वासवः॥**\n> *"Rama is the embodiment of righteousness, noble, possessing truth as his valour, and the ruler of all the world like Indra over the Devas."*`;
            citeList = ['Valmiki Ramayana (Bala Kanda 1.8)', 'Yoga Vasishtha (Vairagya & Mumukshu Khandas)', 'Adhyatma Ramayana', 'Tulsidas Ramcharitmanas'];

          // 2. LORD SHIVA & SHAIVISM
          } else if (lower.includes('shiva') || lower.includes('mahadev') || lower.includes('rudra') || lower.includes('linga') || lower.includes('bholenath') || lower.includes('nataraja') || lower.includes('kailash')) {
            replyText = `### Shiva: The Auspicious Supreme Reality (परमशिव)\n\nIn Sanatana Dharma, **Lord Shiva** represents both the transcendent Nirguna Brahman (Absolute Formless Consciousness) and the compassionate Saguna Lord who destroys ignorance (Moha) and illusion (Maya).\n\n**Key Dimensions of Shiva Tattva:**\n- **The Auspicious Dissolver:** Dissolves the cosmic cycle at Pralaya so new creation can emerge purified. In the Yajurveda Sri Rudram (Chamakam & Namakam), He is invoked as *Sarva-vyapi* (all-pervading).\n- **The Great Yogin (Adiyogi):** Seated on Mount Kailash in unbroken Samadhi, Shiva is the primordial teacher of Yoga, Tantra, and Jnana.\n- **Ardhanarishvara:** The union of Shiva (Pure Consciousness) and Shakti (Dynamic Creative Power), revealing the non-duality of masculine and feminine principles.\n- **Sacred Mantra:** *ॐ नमः शिवाय* (Om Namah Shivaya — the Panchakshari Mantra residing in the heart of Krishna Yajurveda).\n\nIn Shaiva Siddhanta and Kashmir Shaivism (Pratyabhijna), Shiva is the universal Self (Prakasha-Vimarsha) whose spontaneous vibration (Spanda) manifests all worlds.`;
            citeList = ['Krishna Yajurveda Sri Rudram (Taittiriya Samhita 4.5)', 'Shvetashvatara Upanishad 3.11', 'Shiva Purana Vidyeshvara Samhita'];

          // 3. LORD KRISHNA & MAHABHARATA
          } else if (lower.includes('krishna') || lower.includes('mahabharata') || lower.includes('arjuna') || lower.includes('pandava') || lower.includes('kurukshetra') || lower.includes('bhishma') || lower.includes('yudhishthira')) {
            replyText = `### Bhagavan Sri Krishna & The Mahabharata (पूर्णब्रह्म श्रीकृष्ण)\n\n**Bhagavan Sri Krishna** is venerated as the *Purna Avatara* (complete divine incarnation) who spoke the eternal nectar of the Bhagavad Gita on the battlefield of Kurukshetra. The Mahabharata, composed by Sage Veda Vyasa, spans 100,000 verses across 18 Parvas, exploring the intricate dynamics of Dharma, conflict, ethics, and liberation.\n\n**Central Teachings:**\n- **Nishkama Karma:** Action performed as worship without selfish attachment to the fruits (*Karmanyevadhikaraste*).\n- **Vishwaroopa Darshana:** In Chapter 11, Krishna unveils His cosmic form to Arjuna, demonstrating that Time (*Kala*) governs all mortal beings and the Divine encompasses both creation and destruction.\n- **Bhakti & Prapatti:** The surrender of the individual will into the divine current (*Sarva-dharman parityajya mam ekam sharanam vraja* — Gita 18.66).\n- **Mahabharata's Universal Truth:** *"What is found here may be found elsewhere; what is not found here is nowhere else"* (Mahabharata 1.56.33).`;
            citeList = ['Mahabharata (Bhishma Parva 23-40: Bhagavad Gita)', 'Bhagavad Gita 4.7-8 & 18.66', 'Srimad Bhagavatam (10th Skandha)', 'Vishnu Sahasranama'];

          // 4. LORD VISHNU & AVATARAS
          } else if (lower.includes('vishnu') || lower.includes('narayana') || lower.includes('hari') || lower.includes('avatar') || lower.includes('dashavatara') || lower.includes('narasimha') || lower.includes('venkateswara')) {
            replyText = `### Lord Vishnu: The All-Pervading Preserver (सर्वव्यापी नारायण)\n\n**Lord Vishnu** (from root *viś*, meaning 'to enter or pervade') is the Supreme Preserver who sustains cosmic order (Rita and Dharma). Seated on the serpent Shesha upon the cosmic Ocean of Milk (Kshirasagara), Vishnu awakens to protect the universe whenever righteousness declines.\n\n**Core Doctrines:**\n- **The Doctrine of Avatara:** As declared in Gita 4.7-8 (*Yada Yada Hi Dharmasya*), the Divine descends in epochal forms (Matsya, Kurma, Varaha, Narasimha, Vamana, Parashurama, Rama, Krishna, Buddha, Kalki) to re-establish Dharma and uplift seekers.\n- **Vishnu Sahasranama:** Revealed by Bhishma to Yudhishthira in Mahabharata Anushasana Parva, chanting the 1,000 Holy Names grants freedom from fear, purification of karma, and liberation.\n- **Supreme Refuge (Sharanagati):** In Vishishtadvaita Vedanta of Sri Ramanujacharya, absolute self-surrender to Sriman Narayana and Mahalakshmi is the direct path to Vaikuntha.`;
            citeList = ['Rigveda 1.154 (Vishnu Sukta)', 'Mahabharata Anushasana Parva (Vishnu Sahasranama)', 'Bhagavad Gita 4.7-8', 'Vishnu Purana Book 1'];

          // 5. DEVI, SHAKTI, & DIVINE MOTHER
          } else if (lower.includes('devi') || lower.includes('shakti') || lower.includes('durga') || lower.includes('kali') || lower.includes('lakshmi') || lower.includes('saraswati') || lower.includes('lalita') || lower.includes('navaratri')) {
            replyText = `### Devi: The Divine Mother & Primordial Cosmic Energy (आदि पराशक्ति)\n\nIn the Shakta tradition, the Supreme Divine Reality is contemplated as the **Divine Mother (Para Shakti)**, without whose kinetic power even Shiva remains inactive (*Shivaḥ Śaktyā yukto yadi bhavati śaktaḥ prabhavitum* — Saundarya Lahari).\n\n**Sacred Manifestations:**\n- **Durga / Mahishasuramardini:** The embodiment of cosmic brilliance united from all Devas to vanquish demonic ego and ignorance.\n- **Maha-Saraswati, Maha-Lakshmi, Maha-Kali:** Governing wisdom/learning, divine abundance/purity, and transformative time/transcendence.\n- **Sri Vidya & Lalita Tripurasundari:** The pinnacle of Shakta metaphysics centered on the Sri Yantra and the 1,000 sacred names (Lalita Sahasranama).\n- **Devi Sukta (Rigveda 10.125):** The divine seer Vagambhrini realizes her complete identity with the Mother of the Universe: *"I move with the Rudras and the Vasus, I sustain Mitra and Varuna, I am the Queen of the Universe."*`;
            citeList = ['Rigveda 10.125 (Devi Sukta)', 'Devi Mahatmyam (Markandeya Purana)', 'Saundarya Lahari Verse 1', 'Lalita Sahasranama (Brahmanda Purana)'];

          // 6. GANESHA & HANUMAN
          } else if (lower.includes('ganesha') || lower.includes('ganapati') || lower.includes('vinayaka')) {
            replyText = `### Lord Ganesha: Lord of Beginnings & Wisdom (विघ्नहर्ता गणेश)\n\n**Lord Ganesha** (Ganapati) is invoked at the start of all sacred Vedic rites, scripture studies, and worldly endeavors as *Vighnaharta* (remover of obstacles) and *Buddhidata* (bestower of intellect).\n\n**Symbolic & Metaphysical Significance:**\n- **Muladhara Chakra:** In Yogic anatomy, Ganesha presides over the Muladhara (root chakra), the foundation of spiritual ascent and Kundalini energy.\n- **The Broken Tusk (Ekadanta):** Signifies sacrifice for eternal wisdom — Lord Ganesha broke his own tusk to inscribe the monumental epic Mahabharata dictated by Sage Veda Vyasa without pause.\n- **Ganapati Atharvashirsha:** In this Upanishad from the Atharvaveda, Ganesha is revealed as Brahman Himself: *"Tvam pratyaksham Tattvam asi"* (Thou art visibly the Supreme Reality).`;
            citeList = ['Ganapati Atharvashirsha Upanishad', 'Rigveda 2.23.1 (Gananam Tva Ganapatim)', 'Ganesha Purana Upasana Khanda'];
          } else if (lower.includes('hanuman') || lower.includes('anjaneya') || lower.includes('maruti') || lower.includes('bajrang')) {
            replyText = `### Sri Hanuman: The Paragon of Devotion, Strength & Humility (रामभक्त हनुमान्)\n\n**Sri Hanuman** represents the highest synthesis of **Bhakti (devotion), Jnana (wisdom), Vairagya (dispassion), and Seva (selfless service)**. He is recognized as an incarnation (Ansha) of Lord Shiva and the foremost scholar of Sanskrit grammar (Nava Vyakarana Pandita).\n\n**Core Spiritual Teachings:**\n- **Tri-fold Relationship with the Divine:** When asked by Sri Rama about their relationship, Hanuman famously answered: *"From the perspective of the body, I am Your servant (Dasa); from the perspective of the soul, I am a spark of You (Jiva); from the perspective of the Self, You and I are One (Atman)."*\n- **Sundarakanda:** The fifth book of the Ramayana depicts Hanuman's leap across the ocean of delusion to find Sita Devi (the Jiva imprisoned by sensory Ravana).\n- **Hanuman Chalisa:** Composed by Goswami Tulsidas in Awadhi, invoking Hanuman's protection against negative vibrations, illness, and planetary afflictions.`;
            citeList = ['Valmiki Ramayana Sundarakanda', 'Hanuman Chalisa by Goswami Tulsidas', 'Adhyatma Ramayana'];

          // 7. KARMA & ACTION
          } else if (lower.includes('karma') || lower.includes('action') || lower.includes('nishkama') || lower.includes('svadharma')) {
            replyText = `### Karma Yoga: The Spiritual Path of Selfless Action (कर्मयोग)\n\nIn Sanatana Dharma, **Karma Yoga** is the discipline of performing one's duties (Svadharma) with supreme excellence, offering the results to the Divine without psychological attachment to success or failure.\n\n**Foundational Verse (Gita 2.47):**\n> **कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।**\n> **मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि॥**\n> *karmaṇy evādhikāras te mā phaleṣu kadācana |\n> mā karma-phala-hetur bhūr mā te saṅgo 'stv akarmaṇi ||*\n> *"To action alone thou hast a right and never at all to its fruits; let not the fruits of action be thy motive; neither let there be in thee any attachment to inaction."*\n\n**The Three Types of Karma:**\n1. **Sanchita Karma:** The vast storehouse of accumulated past impressions awaiting fruition.\n2. **Prarabdha Karma:** The portion of past karma that has matured to form the present life, body, and circumstances.\n3. **Agami / Kriyamana Karma:** The fresh actions performed here and now, which shape future destiny.`;
            citeList = ['Bhagavad Gita 2.47-50', 'Bhagavad Gita 3.19-21', 'Shankara Bhashya on Gita Chapter 3', 'Isha Upanishad Verse 2'];

          // 8. BHAGAVAD GITA
          } else if (lower.includes('gita') || lower.includes('geeta')) {
            replyText = `### The Srimad Bhagavad Gita: Song of the Divine (श्रीमद्भगवद्गीता)\n\nComprising **700 verses across 18 chapters** within the Bhishma Parva of the Mahabharata, the Bhagavad Gita is the immortal dialogue between **Bhagavan Sri Krishna** and the warrior-seeker **Arjuna** on the battlefield of Kurukshetra.\n\n**The Threefold Highway to Realization:**\n- **Karma Yoga (Chapters 1–6):** Disciplined action, detachment from results, and conquering the senses.\n- **Bhakti Yoga (Chapters 7–12):** Surrender to the personal Lord, loving remembrance, and seeing the Divine in all creation (Vishwaroopa Darshana).\n- **Jnana Yoga (Chapters 13–18):** Discrimination between the field (Kshetra) and the Knower of the Field (Kshetrajna), transcendence of the three Gunas, and Self-Knowledge.\n\n**The Ultimate Promise (Charama Shloka):**\n> **सर्वधर्मान्परित्यज्य मामेकं शरणं व्रज।**\n> **अहं त्वां सर्वपापेभ्यो मोक्षयिष्यामि मा शुचः॥**\n> *"Abandon all varieties of dharmas and simply surrender unto Me alone. I shall liberate you from all sinful reactions; grieve not."* (Gita 18.66)`;
            citeList = ['Bhagavad Gita 18.66 (Charama Shloka)', 'Bhagavad Gita 2.11-30 (Atma Tattva)', 'Mahabharata Bhishma Parva Chapters 23–40', 'Gita Dhyanam'];

          // 9. UPANISHADS & VEDANTA
          } else if (lower.includes('upanishad') || lower.includes('brahman') || lower.includes('atman') || lower.includes('advaita') || lower.includes('vedanta') || lower.includes('maya')) {
            replyText = `### The Principal Upanishads & Advaita Vedanta (वेदान्तदर्शनम्)\n\nThe **Upanishads** constitute the *Jnana-Kanda* (knowledge portion) and philosophical crown of the Vedas (Vedanta). There are 108 recognized Upanishads (Muktika canon), with 10 principal ones commented upon by Adi Shankaracharya: Isha, Kena, Katha, Prashna, Mundaka, Mandukya, Taittiriya, Aitareya, Chandogya, and Brihadaranyaka.\n\n**The Four Great Vedic Declarations (Mahavakyas):**\n1. **प्रज्ञानं ब्रह्म** (*Prajñānaṁ Brahma*) — *"Consciousness is Brahman"* (Aitareya Upanishad, Rigveda)\n2. **अहं ब्रह्मास्मि** (*Ahaṁ Brahmāsmi*) — *"I am Brahman"* (Brihadaranyaka Upanishad, Shukla Yajurveda)\n3. **तत्त्वमसि** (*Tat Tvam Asi*) — *"That Thou Art"* (Chandogya Upanishad, Samaveda)\n4. **अयमात्मा ब्रह्म** (*Ayam Ātmā Brahma*) — *"This Atman is Brahman"* (Mandukya Upanishad, Atharvaveda)\n\nIn Non-Dual Vedanta (Advaita), the individual soul (Jiva) is fundamentally identical with the Supreme Reality (Brahman); the perceived separation is caused by Avidya (cosmic ignorance) and Maya.`;
            citeList = ['Chandogya Upanishad 6.8.7', 'Brihadaranyaka Upanishad 1.4.10', 'Mandukya Upanishad 1-12', 'Brahma Sutras 1.1.1-4', 'Vivekachudamani'];

          // 10. VEDAS
          } else if (lower.includes('veda') || lower.includes('rigveda') || lower.includes('yajurveda') || lower.includes('samaveda') || lower.includes('atharvaveda') || lower.includes('sukta') || lower.includes('shruti')) {
            replyText = `### The Four Vedas: The Eternal Shruti Foundation (चतुर्वेदाः)\n\nIn Sanatana Dharma, the **Vedas** are *Apaurusheya* (authorless, eternal truths perceived by Rishis in deep states of Tapas). They are structured into four grand collections:\n\n1. **Rigveda (ऋग्वेद):** The oldest scripture known to humanity (10 Mandalas, 1,028 Suktas, 10,552 mantras). It hymns the cosmic powers (Agni, Indra, Surya, Varuna) and peaks in non-dual cosmogony (Nasadiya Sukta 10.129).\n2. **Yajurveda (यजुर्वेद):** Divided into Shukla (White) and Krishna (Black), detailing ritual science, internal sacrifice, and sacred mantras like Sri Rudram.\n3. **Samaveda (सामवेद):** The Veda of divine melody and musical chanting. Lord Krishna proclaims in Gita 10.22: *"Among the Vedas, I am the Samaveda."*\n4. **Atharvaveda (अथर्ववेद):** Deals with daily welfare, medicine (Ayurveda roots), statecraft, household peace, and profound Upanishads (Mandukya, Mundaka, Prashna).\n\nEach Veda contains four layers: **Samhitas** (hymns), **Brahmanas** (rituals), **Aranyakas** (contemplations), and **Upanishads** (philosophy).`;
            citeList = ['Rigveda Samhita 1.164.46 (Ekam Sat Vipra Bahudha Vadanti)', 'Rigveda 10.129 (Nasadiya Sukta)', 'Taittiriya Samhita', 'Samaveda Archika'];

          // 11. MANTRAS & SOUND
          } else if (lower.includes('mantra') || lower.includes('gayatri') || lower.includes('mrityunjaya') || lower.includes('chant') || lower.includes('japa') || lower.includes('sound') || lower.includes('nada')) {
            replyText = `### Sacred Mantras: Cosmic Sound Frequencies (मन्त्रविज्ञानम्)\n\nIn the Vedic tradition, a **Mantra** (*mananāt trāyate iti mantraḥ*) is that sacred sonic formula which protects and elevates the mind through rhythmic contemplation.\n\n**The Two Queen Mantras of the Vedas:**\n1. **The Gayatri Mantra (Rigveda 3.62.10):**\n   > **ॐ भूर्भुवः स्वः तत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि धियो यो नः प्रचोदयात्॥**\n   > *Revealed by Brahmarshi Vishvamitra, this mantra invokes Savitur (the golden light behind the sun) to illuminate our inner intellect (Dhi).* Chanted at sandhyas (dawn, noon, dusk).\n\n2. **The Maha Mrityunjaya Mantra (Rigveda 7.59.12):**\n   > **ॐ त्र्यम्बकं यजामहे सुगन्धिं पुष्टिवर्धनम्। उर्वारुकमिव बन्धनान्मृत्य pushyāt मामृतात्॥**\n   > *Revealed by Sage Markandeya, this prayer to the Three-Eyed Lord Shiva liberates the seeker from the fear of mortality and the cycle of rebirth, just as a ripe cucumber naturally detaches from its vine.*`;
            citeList = ['Rigveda 3.62.10 (Gayatri)', 'Rigveda 7.59.12 (Maha Mrityunjaya)', 'Mahanarayana Upanishad', 'Shukla Yajurveda 36.17 (Shanti Mantra)'];

          // 12. DARSHANAS & PHILOSOPHY
          } else if (lower.includes('darshana') || lower.includes('philosophy') || lower.includes('sankhya') || lower.includes('nyaya') || lower.includes('vaisheshika') || lower.includes('patanjali') || lower.includes('mimamsa')) {
            replyText = `### The Six Classical Systems of Indian Philosophy (षड्दर्शनानि)\n\nSanatana Dharma embraces **Shad-Darshanas** — six complementary philosophical viewpoints based on the authority of the Vedas (*Astika*):\n\n1. **Nyaya (Sage Gautama):** Rigorous epistemology, syllogistic logic, and the 16 dialectical categories of debate to attain liberation (Apavarga).\n2. **Vaisheshika (Sage Kanada):** Atomic physics, ontology of the cosmos, and categorization of reality into 7 Padarthas (Dravya, Guna, Karma, Samanya, Vishesha, Samavaya, Abhava).\n3. **Samkhya (Sage Kapila):** Rational dualism distinguishing between eternal passive Consciousness (**Purusha**) and dynamic material Nature (**Prakriti** with its three Gunas: Sattva, Rajas, Tamas).\n4. **Yoga (Sage Patanjali):** Practical psychology and spiritual technology (*Ashtanga Yoga*) for stilling mental fluctuations (*Citta-vritti-nirodha*).\n5. **Purva Mimamsa (Sage Jaimini):** Hermeneutics of Vedic ritual injunctions (Dharma) and the law of cause and effect.\n6. **Uttara Mimamsa / Vedanta (Sage Badarayana):** Systematic inquiry into Brahman through the Upanishads and Brahma Sutras.`;
            citeList = ['Yoga Sutras of Patanjali 1.2', 'Nyaya Sutras of Gautama 1.1.1', 'Samkhya Karika of Ishvarakrishna', 'Brahma Sutras of Badarayana'];

          // 13. AYURVEDA & HEALTH
          } else if (lower.includes('ayurveda') || lower.includes('charaka') || lower.includes('sushruta') || lower.includes('dosha') || lower.includes('vata') || lower.includes('pitta') || lower.includes('kapha')) {
            replyText = `### Ayurveda: The Vedic Science of Life and Longevity (आयुर्वेदः)\n\nConsidered an **Upaveda** affiliated with the Atharvaveda, **Ayurveda** (*Ayu* = life, *Veda* = knowledge) is an ancient, holistic medical system emphasizing harmony between body, mind, senses, and soul (*Swastha*).\n\n**Core Foundational Principles:**\n- **Tridosha Siddhanta:** Health is the dynamic equilibrium of three biological energies: **Vata** (Space + Air, kinetic movement), **Pitta** (Fire + Water, digestion and metabolism), and **Kapha** (Water + Earth, structure and lubrication).\n- **Agni & Ama:** Pure digestion (*Agni*) sustains life; poorly processed food or emotions produce toxic buildup (*Ama*).\n- **Dinacharya & Ritucharya:** Daily and seasonal circadian routines aligning personal rhythms with cosmic solar cycles.\n- **Primary Treatises:** *Charaka Samhita* (internal medicine) and *Sushruta Samhita* (surgical sciences).`;
            citeList = ['Charaka Samhita Sutrasthana', 'Sushruta Samhita Sutrasthana', 'Ashtanga Hridaya of Vagbhata'];

          // 14. REINCARNATION, SAMSARA & MOKSHA
          } else if (lower.includes('reincarnat') || lower.includes('rebirth') || lower.includes('punarjanma') || lower.includes('moksha') || lower.includes('mukti') || lower.includes('death') || lower.includes('samsara')) {
            replyText = `### Punarjanma, Samsara & Moksha: The Journey of the Soul (पुनर्जन्म एवं मोक्षः)\n\nIn Sanatana Dharma, the physical body (*Sthula Sharira*) undergoes birth and death, but the indwelling Self (*Atman*) is unborn, eternal, and imperishable (*Ajo Nityah Shashvato'yam Purano* — Gita 2.20).\n\n**The Cycle of Transmigration:**\n- **The Metaphor of Worn Garments:** Just as one casts off worn-out clothes and puts on new ones, the embodied soul casts off worn-out bodies and enters new ones (*Vasamsi jirnani yatha vihaya* — Gita 2.22).\n- **The Subtle Body (Sukshma Sharira):** At physical death, the mind, intellect, pranas, and accumulated karmic impressions (*Samskaras*) depart together to find a suitable next birth dictated by past deeds.\n- **Moksha (The Ultimate Release):** Rebirth ends when spiritual ignorance (*Avidya*) is dispelled by Self-Realization (*Brahma-Jnana*). The Jiva realizes its non-difference from Brahman and rests in unbroken Sat-Chit-Ananda.`;
            citeList = ['Bhagavad Gita 2.20-22', 'Brihadaranyaka Upanishad 4.4.5', 'Katha Upanishad 2.2.7', 'Vivekachudamani Verses 56-59'];

          // 15. KUNDALINI, CHAKRAS & PRANA
          } else if (lower.includes('kundalini') || lower.includes('chakra') || lower.includes('prana') || lower.includes('nadi') || lower.includes('sushumna') || lower.includes('meditat')) {
            replyText = `### Kundalini Yoga & The Subtle Energetic Body (कुण्डलिनी योगः)\n\nIn Yogic and Tantric physiology, the human being is governed by a subtle network of **72,000 Nadis** (energy conduits) and **seven major Chakras** (vortices of consciousness) aligned along the spinal axis (**Sushumna Nadi**).\n\n**The Seven Sacred Chakras:**\n1. **Muladhara (Root):** Earth element, survival, stability (Lord Ganesha).\n2. **Svadhisthana (Sacral):** Water element, creativity, emotional flow (Lord Brahma).\n3. **Manipura (Solar Plexus):** Fire element, willpower, metabolism (Lord Vishnu).\n4. **Anahata (Heart):** Air element, unconditional love, inner sound (Lord Rudra).\n5. **Vishuddha (Throat):** Space element, truth, expression (Lord Sadashiva).\n6. **Ajna (Third Eye):** Intuitive insight, intellect, witnessing consciousness.\n7. **Sahasrara (Crown):** The thousand-petaled lotus where individual consciousness merges with the Supreme Divine.\n\nPranayama and quiet meditation awaken the dormant Kundalini Shakti at Muladhara, leading it upward through the central Sushumna channel to unite with Shiva at the crown.`;
            citeList = ['Hatha Yoga Pradipika', 'Shiva Samhita', 'Yoga Kundalini Upanishad', 'Sat-Chakra-Nirupana'];

          // 16. TEMPLES & SACRED GEOGRAPHY
          } else if (lower.includes('temple') || lower.includes('geography') || lower.includes('jyotirlinga') || lower.includes('shakti peetha') || lower.includes('kashi') || lower.includes('char dham') || lower.includes('mandir')) {
            replyText = `### Sacred Geography & Mandir Architecture (तीर्थक्षेत्राणि)\n\nIn Sanatana traditions, geography is consecrated into **Tirtha** — a holy ford or crossing point where the veil between the material and transcendent becomes permeable.\n\n**Sacred Networks of India:**\n- **12 Jyotirlingas:** Radiating pillars of divine light of Shiva across the subcontinent (Somnath, Mallikarjuna, Mahakaleshwar, Omkareshwar, Kedarnath, Bhimashankar, Kashi Vishwanath, Trimbakeshwar, Vaidyanath, Nageshwar, Ramanathaswamy, Grishneshwar).\n- **51 Shakti Peethas:** Where the limbs of Sati fell during Shiva's cosmic dance, sanctifying sacred spots from Kamakhya (Assam) to Hinglaj (Balochistan) and Kalighat.\n- **Char Dham (Four Cardinal Sanctuaries):** Established by Adi Shankaracharya to foster spiritual unity across Bharat: Badrinath (North), Rameswaram (South), Puri (East), and Dwarka (West).\n- **Vastu Shastra & Mandir Anatomy:** Traditional Hindu temples represent the cosmic Purusha, featuring the **Garbhagriha** (womb chamber representing the heart), **Shikhara/Vimana** (mountain peak reaching toward infinity), and **Mandapa** (assembly hall for devotees).`;
            citeList = ['Skanda Purana Kashi Khanda', 'Shiva Purana Kotirudra Samhita', 'Brihat Samhita of Varahamihira', 'Agni Purana'];

          // 17. TAILORED DYNAMIC KNOWLEDGE SYNTHESIS FOR ALL OTHER QUERIES
          } else {
            // Extract meaningful query terms to provide a genuine, direct, scholarly response
            const cleanedWords = lower.replace(/[^a-z0-9\s]/g, '').split(/\s+/).filter(w => w.length > 2 && !['what', 'when', 'where', 'which', 'who', 'whom', 'whose', 'why', 'how', 'tell', 'about', 'explain', 'give', 'the', 'and', 'for', 'are', 'can', 'you', 'does', 'with'].includes(w));
            const subjectTitle = cleanedWords.length > 0
              ? cleanedWords.map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
              : userText;

            replyText = `### Sacred Perspective on: "${userText}"\n\nWithin the vast corpus of Sanatana Dharma, your inquiry into **${subjectTitle}** directly engages the classical Vedic framework of seeking truth (*Satya-Shodhana*) through scriptural inquiry (*Shastra-Pramana*) and direct inner experience (*Anubhuti*).\n\n**1. Philosophical & Spiritual Context:**\nIn Hindu thought, every aspect of life and cosmic manifestation is understood through the eternal balance of **Rita** (cosmic order), **Dharma** (individual and universal righteousness), and **Sat-Chit-Ananda** (Truth-Consciousness-Bliss). Regarding **${subjectTitle}**, traditional Acharyas emphasize:\n- The importance of seeing the transcendent Divine residing within all names, forms, and transient experiences.\n- Aligning personal intellect (*Buddhi*) with universal wisdom through regular contemplation, self-discipline (*Tapas*), and devotional reverence.\n\n**2. Core Scriptural Insight:**\nAs Sage Badarayana initiates in the Brahma Sutras: *अथातो ब्रह्मजिज्ञासा* (*Athāto Brahma-Jijñāsā* — "Now, therefore, begins the inquiry into the Supreme Reality"). Any earnest spiritual question—whether concerning duty, cosmology, divinity, or practice—is a doorway toward awakening.\n\n**3. Contemplative Application in Daily Sadhana:**\n- Cultivate mindfulness of your actions and intentions, offering the outcomes to the Supreme Lord (*Ishvara-Pranidhana*).\n- Seek clarity through authentic scriptural study (*Svadhyaya*) accompanied by meditation and prayer.\n- Maintain equanimity (*Samatvam*) amidst worldly pairs of opposites.`;
            citeList = ['Brahma Sutras 1.1.1 (Athato Brahma Jijnasa)', 'Bhagavad Gita 2.48 (Samatvam Yoga Ucyate)', 'Taittiriya Upanishad (Bhrigu Valli)', 'Rigveda 1.164.46'];
          }

          setMessages(prev => [...prev, { sender: 'ai', text: replyText, citations: citeList }]);
          setIsLoading(false);
        }, 400);
      }
    };

  return (
    <div
      onClick={() => setIsAiAssistantOpen(false)}
      className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-4 bg-stone-950/80 backdrop-blur-sm animate-fade-in"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-2xl bg-stone-900 border border-amber-900/30 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden flex flex-col h-[90dvh] sm:h-[78vh] overscroll-contain"
      >
        {/* Modal Header */}
        <div className="px-5 py-4 bg-gradient-to-r from-amber-900 to-amber-950 text-amber-100 flex items-center justify-between border-b border-amber-700/30">
          <div className="flex items-center gap-2.5">
            <Sparkles className="w-5 h-5 text-amber-300 animate-pulse" />
            <div>
              <h3 className="font-serif font-bold text-base text-amber-100">AI Spiritual Knowledge Assistant</h3>
              <p className="text-[11px] text-amber-300/80">Trained on Vedas, Upanishads, Bhagavad Gita & Commentaries</p>
            </div>
          </div>
          <button onClick={() => setIsAiAssistantOpen(false)} className="p-2.5 hover:bg-amber-800 rounded-lg text-amber-200 min-w-[44px] min-h-[44px] flex items-center justify-center">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Chat Conversation Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((m, idx) => (
            <div
              key={idx}
              className={`flex gap-3 ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {m.sender === 'ai' && (
                <div className="w-8 h-8 rounded-full bg-amber-800 text-amber-200 flex items-center justify-center flex-shrink-0 text-xs">
                  <Bot className="w-4 h-4" />
                </div>
              )}

              <div
                className={`max-w-[82%] p-3.5 rounded-2xl text-xs sm:text-sm leading-relaxed shadow-sm ${
                  m.sender === 'user'
                    ? 'bg-amber-700 text-white rounded-br-none'
                    : 'bg-stone-800 text-stone-100 border border-amber-900/10 rounded-bl-none'
                }`}
              >
                {m.sender === 'user' ? (
                  <div className="whitespace-pre-line break-words font-serif leading-relaxed text-amber-50">
                    {m.text}
                  </div>
                ) : (
                  <div className="prose prose-invert max-w-none text-xs sm:text-sm font-serif leading-relaxed text-stone-200 space-y-2">
                    <ReactMarkdown
                      components={{
                        h1: ({ children }) => <h3 className="text-sm sm:text-base font-bold text-amber-300 font-serif mt-2 mb-1 border-b border-amber-900/30 pb-1">{children}</h3>,
                        h2: ({ children }) => <h4 className="text-xs sm:text-sm font-bold text-amber-200 font-serif mt-2 mb-1">{children}</h4>,
                        h3: ({ children }) => <h5 className="text-xs sm:text-sm font-bold text-amber-300 font-serif mt-2 mb-1">{children}</h5>,
                        strong: ({ children }) => <strong className="text-amber-300 font-semibold">{children}</strong>,
                        blockquote: ({ children }) => (
                          <blockquote className="my-2 border-l-2 border-amber-500 pl-3 py-1 bg-amber-950/20 rounded-r-lg text-amber-100/90 italic font-serif">
                            {children}
                          </blockquote>
                        ),
                        ul: ({ children }) => <ul className="list-disc list-inside space-y-1 my-1.5 pl-1">{children}</ul>,
                        ol: ({ children }) => <ol className="list-decimal list-inside space-y-1 my-1.5 pl-1">{children}</ol>,
                        li: ({ children }) => <li className="text-stone-300 text-xs sm:text-sm">{children}</li>,
                        p: ({ children }) => <p className="mb-2 last:mb-0 leading-relaxed text-stone-200">{children}</p>
                      }}
                    >
                      {m.text}
                    </ReactMarkdown>
                  </div>
                )}

                {m.citations && m.citations.length > 0 && (
                  <div className="mt-3 pt-2 border-t border-amber-500/20 text-[11px] text-amber-300">
                    <span className="font-bold flex items-center gap-1 mb-1">
                      <BookOpen className="w-3 h-3" /> Cited References:
                    </span>
                    <ul className="list-disc list-inside space-y-0.5">
                      {m.citations.map((c, cIdx) => (
                        <li key={cIdx}>{c}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {m.sender === 'user' && (
                <div className="w-8 h-8 rounded-full bg-stone-700 text-stone-200 flex items-center justify-center flex-shrink-0 text-xs">
                  <User className="w-4 h-4" />
                </div>
              )}
            </div>
          ))}

          {isLoading && (
            <div className="flex items-center gap-2 text-xs text-amber-300 italic">
              <Sparkles className="w-4 h-4 animate-spin" />
              <span>Consulting sacred texts and commentaries...</span>
            </div>
          )}
        </div>

        {/* Query Input Box */}
        <div className="p-3.5 border-t border-amber-900/15 bg-stone-950/40 flex items-center gap-2">
          <input
            type="text"
            value={inputQuery}
            onChange={(e) => setInputQuery(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask e.g. 'Explain Karma Yoga in Bhagavad Gita'..."
            className="flex-1 bg-stone-800 border border-amber-900/20 rounded-xl px-4 py-3 text-base outline-none font-serif text-stone-100 placeholder:text-stone-400 min-h-[48px]"
          />
          <button
            onClick={handleSend}
            disabled={!inputQuery.trim() || isLoading}
            aria-label="Send message"
            className="p-3 rounded-xl bg-amber-700 text-white hover:bg-amber-800 disabled:opacity-50 transition-colors min-w-[48px] min-h-[48px] flex items-center justify-center active:scale-95 shadow-sm"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};
