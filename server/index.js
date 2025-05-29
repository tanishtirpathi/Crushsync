import express from 'express';
import cors from 'cors';
import scrape from './scraper.js';

const app = express();
const PORT = 6000;

app.use(cors());
app.use(express.json());

app.post('/compare', async (req, res) => {
  const { user1, user2 } = req.body;

  try {
    const data1 = await scrape(user1);
    const data2 = await scrape(user2);
    res.json({ user1: data1, user2: data2 });
  } catch (err) {
    console.error('Scrape error:', err);
    res.status(500).json({ error: 'Failed to scrape data', details: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
