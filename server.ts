import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';

async function startServer() {
  const app = express();
  const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

  app.use(express.json());

  // API Route for AI Spiritual Assistant with Gemini
  app.post('/api/ai-assistant', async (req, res) => {
    try {
      const { prompt } = req.body;
      const apiKey = process.env.GEMINI_API_KEY;

      if (!apiKey) {
        return res.status(500).json({ error: 'GEMINI_API_KEY environment variable is missing.' });
      }

      const ai = new GoogleGenAI({
        apiKey,
        httpOptions: {
          headers: {
            'User-Agent': 'aistudio-build',
          }
        }
      });

      const systemInstruction = `You are the Sanatana Kosha AI Knowledge Assistant, an expert scholar in Hindu scriptures, Sanskrit philology, Vedas, Upanishads, Bhagavad Gita, Puranas, 6 Classical Darshanas, and traditional Acharya commentaries (Shankara, Ramanuja, Madhva, etc.).

When answering ANY user query:
1. ALWAYS provide a complete, articulate, reverent, and scholarly explanation FIRST. Act like an experienced traditional teacher combined with a modern scholar.
2. Structure your response clearly:
   - Direct & Comprehensive Explanation: Thoroughly explain the spiritual, philosophical, and historical aspects of the question.
   - Sacred Sanskrit Verse(s) or Mantra(s): Include authentic Devanagari Sanskrit text, IAST Transliteration, and accurate Translation/Word-by-word meaning whenever relevant.
   - Philosophical & Practical Significance: Detail how this applies to inner transformation, meditation, daily life, or spiritual practice.
   - Traditional Viewpoints: Mention traditional interpretations (Advaita, Vishishtadvaita, Dvaita, Shaiva, etc.) where applicable.
3. CITATIONS & REFERENCES: Only AFTER giving the full detailed explanation above, clearly list the primary scripture names, chapter numbers, and verse references supporting your answer at the very end.

Never return only citations or brief bullet stubs. Always deliver a rich, comprehensive, illuminating answer first.`;

      const response = await ai.models.generateContent({
        model: 'gemini-3.6-flash',
        contents: prompt,
        config: {
          systemInstruction
        }
      });

      const reply = response.text || 'No response generated.';
      
      // Extract citations if present or supply formatted list
      const citationMatches = reply.match(/(?:Source|Reference|Citation|Scripture)s?:?[\s\S]*/i);
      let citations = ['Bhagavad Gita', 'Principal Upanishads', 'Vedic Samhitas'];
      if (citationMatches) {
        citations = citationMatches[0]
          .split('\n')
          .filter(line => line.trim().length > 0 && !line.toLowerCase().includes('citation'))
          .map(line => line.replace(/^[-*•\d.]+\s*/, '').trim())
          .slice(0, 5);
      }

      res.json({
        reply,
        citations
      });
    } catch (err: unknown) {
      console.error('Gemini API Error:', err);
      res.status(500).json({ error: 'Failed to process spiritual knowledge query.' });
    }
  });

  // Health check
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', platform: 'Sanatana Kosha' });
  });

  // Vite middleware in dev mode
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa'
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
