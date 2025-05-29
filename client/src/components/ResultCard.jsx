import { RainbowButton } from "./magicui/rainbow-button";
import { Github } from "lucide-react";
import FollowerComparisonChart from "./Chart";

export default function ResultCard({ data }) {
  return (
    <div className="flex flex-col justifty-center items-center w-screen">
      <div className="flex justifty-center items-center gap-x-34">
        {/* User Card */}
        <div className="flex flex-col items-center bg-gray-200 p-6 rounded-lg w-80">
          <img
            src={data.user1.avatar_url}
            className="w-32 h-32 rounded-full mb-4 object-cover border-4 border-white shadow"
            alt={`${data.user1.login}'s avatar`}
          />

          <div className="text-center mb-4">
            <h2 className="text-xl font-bold text-gray-800">
              {data.user1.login}
            </h2>
            <p className="text-sm text-gray-700 mt-2 border border-red-500 p-2 rounded-md bg-white">
              {data.user1.bio}
            </p>
          </div>

          <div className="flex justify-between gap-4 w-full text-center text-sm text-gray-800">
            <div className="bg-white px-4 py-2 rounded-md shadow">
              {data.user1.followers} Followers
            </div>
            <div className="bg-white px-4 py-2 rounded-md shadow">
              {data.user1.following} Following
            </div>
            <div className="bg-white px-4 py-2 rounded-md shadow">
              {data.user1.public_repos} Repos
            </div>
          </div>

          <div className="mt-4 flex justify-center items-center gap-x-5">
            <RainbowButton>{data.user1.location}</RainbowButton>
            <Github size={32} color="#000" strokeWidth={2} />
          </div>
        </div>
        <h1>❤️</h1>
        <div className="flex flex-col items-center bg-gray-200 p-6 rounded-lg w-80">
          <img
            src={data.user2.avatar_url}
            className="w-32 h-32 rounded-full mb-4 object-cover border-4 border-white shadow"
            alt={`${data.user2.login}'s avatar`}
          />

          <div className="text-center mb-4">
            <h2 className="text-xl font-bold text-gray-800">
              {data.user2.login}
            </h2>
            <p className="text-sm text-gray-700 mt-2 border border-red-500 p-2 rounded-md bg-white">
              {data.user2.bio}
            </p>
          </div>

          <div className="flex justify-between gap-4 w-full text-center text-sm text-gray-800">
            <div className="bg-white px-4 py-2 rounded-md shadow">
              {data.user2.followers} Followers
            </div>
            <div className="bg-white px-4 py-2 rounded-md shadow">
              {data.user2.following} Following
            </div>
            <div className="bg-white px-4 py-2 rounded-md shadow">
              {data.user2.public_repos} Repos
            </div>
          </div>

          <div className="mt-4 flex justify-center items-center gap-x-5">
            <RainbowButton>{data.user2.location}</RainbowButton>
            <Github size={32} color="#000" strokeWidth={2} />
          </div>
        </div>
      </div>
      <div className="border border-red py-4  bg-gray-200 rounded mt-10 px-10">
        <h2 className="text-2xl font-[syne] ">
          {" "}
          <b>{data.score} </b>is your score out of <b>100</b> and on the bases
          of this your can start your code love story
        </h2>
      </div>
      <div className="flex justify-center items-center gap-10">
        <div className="bg-gray-300 mt-10 p-6 rounded-lg shadow">
        <FollowerComparisonChart user1={data.user1} user2={data.user2} />
      </div>
      </div>
    </div>
  );
}
