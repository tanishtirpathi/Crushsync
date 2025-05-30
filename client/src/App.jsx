import React, { useState, useRef } from "react";
import CompareForm from "./components/CompareForm";
import ResultCard from "./components/ResultCard";
import { RainbowButton } from "./components/magicui/rainbow-button";
export default function App() {
  const [result, setResult] = useState(null);
  const resultRef = useRef(null);
  const scrollToResult = () => {
    resultRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="min-h-screen bg-[url(/bg.png)] bg-center bg-no-repeat bg-cover w-full text-white font-[syne] overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 ">
        <div className="flex items-center gap-3">
          <div className=" shadow">
            <img src="./logo.jpg" alt="" className="w-10 rounded-full " />
          </div>
          <h1
            className="text-s text-[#FFE23F] tracking-wider drop-shadow-md"
            style={{ fontFamily: "'Press Start 2P', cursive" }}
          >
            Crush-Sync
          </h1>
        </div>
        <a href="https://x.com/tanishtirpathi" target="_blank" rel="noopener noreferrer">
        <RainbowButton>
          Follow Me
        </RainbowButton></a>
      </div>

      {/* Main Content */}
      <CompareForm onCompareClick={scrollToResult} onCompare={setResult} />
      {result && <ResultCard ref={resultRef} data={result} />}
      <div className="flex justify-center items-center flex-col w-full backdrop-blur py-2">
        <h3 className="text-red-500 ">
          made by <b>Tanish Tirpathi ⚡ </b>because he want to do timepass with
          cool things{" "}
        </h3>
        <h3>
          contribution to :- <b>ME / CAFFINE / CHOCOLATE</b>{" "}
        </h3>
      </div>
    </div>
  );
}
