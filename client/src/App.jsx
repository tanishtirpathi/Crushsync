import React, { useState } from "react";
import CompareForm from "./components/CompareForm";
import ResultCard from "./components/ResultCard";
import { RainbowButton } from "./components/magicui/rainbow-button";

export default function App() {
  const [result, setResult] = useState(null);

  return (
    <div className="min-h-screen bg-[#FFF5EE] w-screen px-10 overflow-hidden ">
      <div
        className="flex items-center px-2"
        style={{ justifyContent: "space-between" }}
      >
        <h4 className="px-3 py-2 bg-green-400 rounded-full text-black font-bold text-2xl ">
          CS
        </h4>
        <h1 className=" text-xs font-[syne] font-bold text-black">
          Crush-Sync
        </h1>
        <div>
          <RainbowButton>follow me </RainbowButton>
        </div>
      </div>
      <CompareForm onCompare={setResult} />
      {result && <ResultCard data={result} />}
    </div>
  );
}
