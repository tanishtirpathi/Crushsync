import { RainbowButton } from "./magicui/rainbow-button";
import { Github } from "lucide-react";
import FollowerComparisonChart from "./Chart";

export default function ResultCard({ data }) {
  const scoreMessage = data.score > 20
    ? "Go ahead, love is in the air — this could be your perfect match! 💖"
    : "Sorry, don’t go for her — she is out of range!";

  return (
    <div className="flex flex-col items-center w-screen min-h-screen text-white font-[syne] px-4 py-5 space-y-12">
      <h1 className="text-s text-[#ffe23f] font-bold">Take your guts and see the result </h1>

      {/* User Cards */}
      <div className="flex flex-wrap justify-center gap-x-32">
        {[data.user1, data.user2].map((user) => (
          <div
            key={user.login}
            className="flex flex-col items-center bg-[#11193C] p-6 rounded-3xl w-80 shadow-xl shadow-[#3D73FF]/40 border border-[#3D73FF]/20 hover:scale-105 transition-transform duration-300"
          >
            <img
              src={user.avatar_url}
              alt={`${user.login}'s avatar`}
              className="w-28 h-28 rounded-full object-cover border-4 border-[#3D73FF] shadow mb-4"
            />
            <h2 className="text-2xl font-bold text-[#FFE23F] mb-1">{user.login}</h2>
            <p className="text-sm text-[#C3D0F7] p-3 rounded-md bg-[#0A0F2C] border border-[#FF3B3B] mb-4">
              {user.bio || "No bio available"}
            </p>
            <div className="grid grid-cols-3 gap-2 w-full text-center text-sm text-[#C3D0F7]">
              <div className="bg-[#0A0F2C] px-2 py-2 rounded-md shadow-inner">
                {user.followers} Followers
              </div>
              <div className="bg-[#0A0F2C] px-2 py-2 rounded-md shadow-inner">
                {user.following} Following
              </div>
              <div className="bg-[#0A0F2C] px-2 py-2 rounded-md shadow-inner">
                {user.public_repos} Repos
              </div>
            </div>
            <div className="mt-4 flex gap-3">
              <RainbowButton>{user.location || "Unknown"}</RainbowButton>
              <a href={`https://github.com/${user.login}`} target="_blank" rel="noopener noreferrer">
                <Github size={28} color="#FFE23F" strokeWidth={2} />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Score Section */}
      <div className="bg-[#1E2B57] px-8 py-6 rounded-2xl border border-[#FF3B3B] text-center max-w-xl">
        <h2 className="text-[#FFE23F] text-xl">
          Compatibility Score: <b>{data.score}</b>/100 — Start your code love story!
        </h2>
      </div>

      {/* Chart & Analysis */}
      <div className="flex flex-wrap justify-center gap-10 w-full">
        <div className="bg-[#1E2B57] p-6 rounded-2xl shadow-xl w-fit">
          <FollowerComparisonChart user1={data.user1} user2={data.user2} />
        </div>
        <div className="bg-[#1E2B57] p-6 rounded-2xl shadow-xl w-80 text-center">
          <h3 className="text-2xl text-[#FFE23F] mb-3">Analyzed Result</h3>
          <p className="text-[#C3D0F7]">Proposal acceptance likelihood:</p>
          <p className="text-xl text-[#FF3B3B] mt-4 bg-[#0A0F2C] px-4 py-5 border border-[#FF3B3B] rounded-md">
            Relationship chance: {data.score}%
          </p>
        </div>
      </div>

      {/* Footer */}
      <h3 className="text-2xl text-[#FF3B3B] shadown-md italic pt-4">{scoreMessage}</h3>
    </div>
  );
}