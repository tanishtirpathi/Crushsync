import React, { useState } from "react";
import CompareForm from "./components/CompareForm";
import ResultCard from "./components/ResultCard";
import { RainbowButton } from "./components/magicui/rainbow-button";

export default function App() {
  const [result, setResult] = useState(null);

  return (
    <div className="min-h-screen bg-[url(./bg.png)] bg-center bg-no-repeat bg-cover w-full text-white font-[syne] overflow-x-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 ">
        <div className="flex items-center gap-3">
          <div className="px-3 py-1 bg-[#42FF7B] rounded-md text-black font-bold text-lg shadow">
            CS
          </div>
          <h1 className="text-xl text-[#FFE23F] tracking-wider drop-shadow-md">
            Crush-Sync 💘
          </h1>
        </div>
        <RainbowButton>Follow Me</RainbowButton>
      </div>

      {/* Main Content */}
      <CompareForm onCompare={setResult} />
      {result && <ResultCard data={result} />}
    </div>
  );
}
