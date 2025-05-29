import express from "express";
import cors from "cors";
import fetch from "node-fetch";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = process.env.PORT || 5000;

// Fix __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(cors());
app.use(express.json());

// Serve frontend (Vite build)
app.use(express.static(path.join(__dirname, "../client/dist")));

// API route
app.post("/compare", async (req, res) => {
  const { user1, user2 } = req.body;

  try {
    const [data1, data2] = await Promise.all([
      fetch(`https://api.github.com/users/${user1}`).then(res => res.json()),
      fetch(`https://api.github.com/users/${user2}`).then(res => res.json())
    ]);

    if (data1.message || data2.message) {
      return res.status(404).json({ error: "One or both users not found." });
    }

    const chemistryScore = calculateScore(data1, data2);
    res.json({ user1: data1, user2: data2, score: chemistryScore });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Something went wrong." });
  }
});

// Score calculation function
function calculateScore(u1, u2) {
  let score = 0;
  score += 100 - Math.abs(u1.followers - u2.followers);
  score += 100 - Math.abs(u1.public_repos - u2.public_repos);
  score += u1.location === u2.location ? 50 : 0;
  return Math.min(Math.floor(score / 5), 100);
}

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
