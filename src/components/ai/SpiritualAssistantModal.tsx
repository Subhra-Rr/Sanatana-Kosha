import React, { useState } from 'react';
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
        setMessages(prev => [...prev, { sender: 'ai', text: data.reply, citations: data.citations }]);
      } else {
        throw new Error('Fallback to local knowledge engine');
      }
    } catch {
      // Local Knowledge Engine Fallback
      setTimeout(() => {
        let replyText = '';
        let citeList: string[] = [];

        const lower = userText.toLowerCase();
        if (lower.includes('karma') || lower.includes('action')) {
          replyText = `According to Bhagavad Gita Chapter 2 Verse 47 and Chapter 3, Karma Yoga is the path of performing your prescribed duty with excellence without mental attachment to the fruits (Nishkama Karma). In Adi Shankaracharya's commentary, selfless action purifies the mind (Chitta Shuddhi), preparing it for Self-Knowledge (Jnana).`;
          citeList = ['Bhagavad Gita 2.47', 'Bhagavad Gita 3.19', 'Shankara Bhashya on Gita 2.47'];
        } else if (lower.includes('gita') || lower.includes('krishna')) {
          replyText = `The Bhagavad Gita consists of 700 verses across 18 chapters within Mahabharata Bhishma Parva. It addresses Arjuna's crisis on the Kurukshetra battlefield, presenting a grand synthesis of Karma Yoga, Jnana Yoga, and Bhakti Yoga. In Chapter 18 Verse 66 (Charama Shloka), Sri Krishna promises total liberation to those who surrender all anxiety and take refuge in Supreme Truth.`;
          citeList = ['Bhagavad Gita 18.66', 'Mahabharata Bhishma Parva'];
        } else if (lower.includes('upanishad') || lower.includes('brahman') || lower.includes('atman')) {
          replyText = `The Principal Upanishads (Dasa Upanishads) form the Prasthana Trayi foundation of Vedanta. They reveal the four Mahavakyas, declaring the non-dual reality of Brahman: 1) "Prajnanam Brahma" (Aitareya), 2) "Aham Brahmasmi" (Brihadaranyaka), 3) "Tat Tvam Asi" (Chandogya), and 4) "Ayam Atma Brahma" (Mandukya).`;
          citeList = ['Chandogya 6.8.7', 'Brihadaranyaka 1.4.10', 'Mandukya Upanishad Verse 1-12'];
        } else {
          replyText = `Thank you for your question on "${userText}". In Sanatana Dharma, all authentic spiritual inquiry is grounded in Shruti (Vedas & Upanishads), Smriti (Gita & Dharma Shastras), and Nyaya (Brahma Sutras). Each tradition presents a coherent path toward inner peace, moral excellence, and ultimate liberation (Moksha).`;
          citeList = ['Brahma Sutra 1.1.1', 'Rigveda 1.164.46'];
        }

        setMessages(prev => [...prev, { sender: 'ai', text: replyText, citations: citeList }]);
        setIsLoading(false);
      }, 800);
      return;
    }

    setIsLoading(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/70 backdrop-blur-sm animate-fade-in">
      <div className="w-full max-w-2xl bg-amber-50 dark:bg-stone-900 border border-amber-900/30 rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[85vh] sm:h-[75vh]">
        {/* Modal Header */}
        <div className="px-5 py-4 bg-gradient-to-r from-amber-900 to-amber-950 text-amber-100 flex items-center justify-between border-b border-amber-700/30">
          <div className="flex items-center gap-2.5">
            <Sparkles className="w-5 h-5 text-amber-300 animate-pulse" />
            <div>
              <h3 className="font-serif font-bold text-base text-amber-100">AI Spiritual Knowledge Assistant</h3>
              <p className="text-[11px] text-amber-300/80">Trained on Vedas, Upanishads, Bhagavad Gita & Commentaries</p>
            </div>
          </div>
          <button onClick={() => setIsAiAssistantOpen(false)} className="p-1 hover:bg-amber-800 rounded-lg text-amber-200">
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
                    : 'bg-stone-100 dark:bg-stone-800 text-stone-900 dark:text-stone-100 border border-amber-900/10 rounded-bl-none'
                }`}
              >
                <p>{m.text}</p>

                {m.citations && m.citations.length > 0 && (
                  <div className="mt-3 pt-2 border-t border-amber-900/10 dark:border-amber-500/20 text-[11px] text-amber-800 dark:text-amber-300">
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
                <div className="w-8 h-8 rounded-full bg-stone-300 dark:bg-stone-700 text-stone-700 dark:text-stone-200 flex items-center justify-center flex-shrink-0 text-xs">
                  <User className="w-4 h-4" />
                </div>
              )}
            </div>
          ))}

          {isLoading && (
            <div className="flex items-center gap-2 text-xs text-amber-800 dark:text-amber-300 italic">
              <Sparkles className="w-4 h-4 animate-spin" />
              <span>Consulting sacred texts and commentaries...</span>
            </div>
          )}
        </div>

        {/* Query Input Box */}
        <div className="p-3 border-t border-amber-900/15 bg-amber-100/40 dark:bg-stone-950/40 flex items-center gap-2">
          <input
            type="text"
            value={inputQuery}
            onChange={(e) => setInputQuery(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask e.g. 'Explain Karma Yoga in Bhagavad Gita'..."
            className="flex-1 bg-stone-100 dark:bg-stone-800 border border-amber-900/20 rounded-xl px-4 py-2.5 text-xs sm:text-sm outline-none font-serif text-stone-900 dark:text-stone-100"
          />
          <button
            onClick={handleSend}
            disabled={!inputQuery.trim() || isLoading}
            className="p-2.5 rounded-xl bg-amber-700 text-white hover:bg-amber-800 disabled:opacity-50 transition-colors"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
