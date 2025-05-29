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
    <div className="my-14 flex items-center justify-center px-4">
      <div className="rounded-2xl p-8 w-screen  ">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white font-[syne] mb-2">
            Check Your GitHub Chemistry
          </h2>
        </div>

        <div className="flex flex-col justify-center items-center gap-y-10 w-full">
          <div
            className="flex gap-20 w-full"
            style={{ justifyContent: "space-around" }}
          >
            <div className="bg-gray-900 px-4 py-5 w-full rounded-md">
              <label className="block text-gray-300 text-sm font-medium mb-2">
                Your GitHub Username
              </label>
              <input
                style={{ width: "100%" }}
                className=" p-4 rounded-lg bg-gray-700 bg-opacity-80 text-white placeholder-gray-400 border border-gray-600 focus:border-orange-500 focus:outline-none transition-colors"
                placeholder="your-username"
                value={user1}
                onChange={(e) => setUser1(e.target.value)}
              />
            </div>

            <div className="bg-gray-900 px-4 py-5 w-full rounded-md">
              {" "}
              <label className="block text-gray-300 text-sm font-medium mb-2">
                Your Crush's GitHub Username
              </label>
              <input
                className="w-full p-4 rounded-lg bg-gray-700 bg-opacity-80 text-white placeholder-gray-400 border border-gray-600 focus:border-orange-500 focus:outline-none transition-colors"
                placeholder="their-username"
                value={user2}
                onChange={(e) => setUser2(e.target.value)}
              />
            </div>
          </div>

          <div>
           
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
  );
}
