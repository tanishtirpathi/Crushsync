import { useState } from "react";
import { RainbowButton } from "./magicui/rainbow-button";

export default function CompareForm({ onCompare }) {
  const [user1, setUser1] = useState("");
  const [user2, setUser2] = useState("");
  const [loading, setLoading] = useState(false);

  const handleCompare = async () => {
    if (!user1 || !user2) return;
    setLoading(true);
    try {
      const res = await fetch("http://localhost:5000/compare", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user1, user2 }),
      });
      const data = await res.json();
      onCompare(data);
    } catch (err) {
      console.error(err);
      alert("Error comparing users");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-screen    flex items-center justify-center px-4  py-16 text-white font-[syne]">
      <div className="backdrop-blur-xl rounded-2xl p-10 w-full max-w-5xl shadow-2xl">
        <h2 className="text-3xl font-bold text-center text-[#FFE23F] mb-8 drop-shadow">
          💻 Check Your GitHub Chemistry 💖
        </h2>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Left: Pixel-style image */}
          <img
            src="./code.webp"
            alt="Pixel art"
            className="w-104 h-auto drop-shadow-lg rounded-lg"
          />

          {/* Right: Input Form */}
          <div className="flex flex-col gap-8 w-full">
            <div className="bg-[#0A0F2C] border border-[#3D73FF] p-5 rounded-lg shadow-inner">
              <label className="block text-[#C3D0F7] text-sm font-semibold mb-2">
                Your GitHub Username
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 bg-[#1E2B57] text-white placeholder-[#6D7EB6] border border-[#3D73FF] rounded-md focus:outline-none focus:ring-2 focus:ring-[#FFE23F] transition"
                placeholder="your-username"
                value={user1}
                onChange={(e) => setUser1(e.target.value)}
              />
            </div>

            <div className="bg-[#0A0F2C] border border-[#3D73FF] p-5 rounded-lg shadow-inner">
              <label className="block text-[#C3D0F7] text-sm font-semibold mb-2">
                Your Crush's GitHub Username
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 bg-[#1E2B57] text-white placeholder-[#6D7EB6] border border-[#3D73FF] rounded-md focus:outline-none focus:ring-2 focus:ring-[#FFE23F] transition"
                placeholder="their-username"
                value={user2}
                onChange={(e) => setUser2(e.target.value)}
              />
            </div>

            <div className="text-center mt-4">
              <RainbowButton
                onClick={handleCompare}
                disabled={!user1 || !user2 || loading}
              >
                {loading ? "Checking Compatibility..." : "Check Compatibility"}
              </RainbowButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
