import express from "express";
import cors from "cors";
import fetch from "node-fetch";

const app = express();
const PORT =5000;

app.use(cors());
app.use(express.json());

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

function calculateScore(u1, u2) {
  let score = 0;
  score += 100 - Math.abs(u1.followers - u2.followers);
  score += 100 - Math.abs(u1.public_repos - u2.public_repos);
  score += u1.location === u2.location ? 50 : 0;
  return Math.min(Math.floor(score / 5), 100);
}

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
