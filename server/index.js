import 'dotenv/config';
import express from 'express';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const port = process.env.PORT || 4000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist');
const leadsFile = path.join(__dirname, 'data', 'leads.json');

app.use(express.json({ limit: '1mb' }));

async function ensureDataFile() {
  await fs.mkdir(path.dirname(leadsFile), { recursive: true });
  try {
    await fs.access(leadsFile);
  } catch {
    await fs.writeFile(leadsFile, '[]', 'utf8');
  }
}

async function saveLead(lead) {
  await ensureDataFile();
  const raw = await fs.readFile(leadsFile, 'utf8');
  const leads = JSON.parse(raw || '[]');
  leads.push(lead);
  await fs.writeFile(leadsFile, JSON.stringify(leads, null, 2), 'utf8');
}

function normalizeMessages(messages = []) {
  return messages
    .filter((message) => message && typeof message.content === 'string')
    .map((message) => ({
      role: message.role === 'assistant' || message.role === 'system' ? message.role : 'user',
      content: message.content.slice(0, 1200)
    }));
}

function fallbackReply(text) {
  const message = text.toLowerCase();

  if (message.includes('timing') || message.includes('open')) {
    return 'Rode Fitness Center is open 24 hours, so you can train whenever your schedule allows.';
  }

  if (message.includes('where') || message.includes('location') || message.includes('address')) {
    return 'We are at Radha Vasudev Batavia Nagar, Govind Nagar, Nashik, Maharashtra 422101.';
  }

  if (message.includes('join') || message.includes('membership')) {
    return 'The quickest way to join is to submit your name and phone number on the website or message us on WhatsApp.';
  }

  if (message.includes('trainer') || message.includes('guide')) {
    return 'Friendly trainers are available to give proper guidance and help you stay consistent.';
  }

  return 'I can help with timing, location, services, and the fastest way to join Rode Fitness Center.';
}

app.post('/api/enroll', async (req, res) => {
  const { name, phone, goal } = req.body ?? {};

  if (!name || !phone || !goal) {
    return res.status(400).json({ error: 'name, phone, and goal are required' });
  }

  const lead = {
    name: String(name).trim(),
    phone: String(phone).trim(),
    goal: String(goal).trim(),
    timestamp: new Date().toISOString()
  };

  try {
    await saveLead(lead);
    res.json({ ok: true, lead });
  } catch (error) {
    res.status(500).json({ error: 'Unable to save lead' });
  }
});

app.post('/api/chat', async (req, res) => {
  const messages = normalizeMessages(req.body?.messages);
  const apiKey = process.env.GROQ_API_KEY;

  if (!messages.length) {
    return res.status(400).json({ error: 'messages are required' });
  }

  if (!apiKey) {
    const latestMessage = messages[messages.length - 1]?.content || '';
    return res.json({ reply: fallbackReply(latestMessage) });
  }

  const systemPrompt = `
You are the concierge for Rode Fitness Center / रोड फिटनेस सेंटर.
Keep replies concise, warm, and conversion-focused.
Facts:
- Gym name: Rode Fitness Center
- Local name: रोड फिटनेस सेंटर
- Rating: 5.0 stars from 9 reviews
- Address: Radha Vasudev Batavia Nagar, Govind Nagar, Nashik, Maharashtra 422101
- Timing: Open 24 hours
- Phone: +91 9657882336
- Call: tel:+919657882336
- WhatsApp: https://wa.me/919657882336
- Prefilled WhatsApp: https://wa.me/919657882336?text=Hi%20I%20want%20to%20join%20Rode%20Fitness
Tone: professional, helpful, short, and friendly.
Only answer with useful information about the gym, membership, location, reviews, or timing.
`.trim();

  try {
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'llama-3.1-8b-instant',
        messages: [{ role: 'system', content: systemPrompt }, ...messages],
        temperature: 0.4,
        max_tokens: 180
      })
    });

    if (!response.ok) {
      throw new Error(`Groq error ${response.status}`);
    }

    const payload = await response.json();
    const reply = payload?.choices?.[0]?.message?.content?.trim();

    res.json({
      reply: reply || fallbackReply(messages[messages.length - 1].content)
    });
  } catch (error) {
    const latestMessage = messages[messages.length - 1]?.content || '';
    res.json({ reply: fallbackReply(latestMessage) });
  }
});

if (process.env.NODE_ENV === 'production' && (await fs.access(distDir).then(() => true).catch(() => false))) {
  app.use(express.static(distDir));

  app.get('*', (req, res) => {
    res.sendFile(path.join(distDir, 'index.html'));
  });
}

app.listen(port, () => {
  console.log(`Rode Fitness server running on http://localhost:${port}`);
});