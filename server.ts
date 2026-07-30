import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Route for AI Spiritual Assistant with Gemini
  app.post('/api/ai-assistant', async (req, res) => {
    try {
      const { prompt } = req.body;
      const apiKey = process.env.GEMINI_API_KEY;

      if (!apiKey) {
        return res.status(500).json({ error: 'GEMINI_API_KEY environment variable is missing.' });
      }

      const ai = new GoogleGenAI({ apiKey });
      const systemInstruction = `You are the Sanatana Kosha AI Knowledge Assistant, an expert in Hindu scriptures, Sanskrit philology, Vedic literature, Upanishads, Bhagavad Gita, Puranas, 6 Classical Darshanas, and Acharya commentaries.
Provide accurate, reverent, scholarly, and non-sectarian explanations.
Always cite primary scripture names, chapter numbers, and verse references when answering.`;

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
        config: {
          systemInstruction
        }
      });

      const reply = response.text || 'No response generated.';
      res.json({
        reply,
        citations: ['Primary Shruti/Smriti Scripture']
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
    console.log(`Sanatana Kosha server running at http://0.0.0.0:${PORT}`);
  });
}

startServer();
