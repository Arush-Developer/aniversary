// src/components/FunPage.jsx
import React, { useState } from "react";

const FunPage = ({ onNext }) => {
  const [noPosition, setNoPosition] = useState({ top: "50%", left: "60%" });

  const moveNoButton = () => {
    const randomTop = Math.floor(Math.random() * 70) + 10;
    const randomLeft = Math.floor(Math.random() * 70) + 10;
    setNoPosition({ top: `${randomTop}%`, left: `${randomLeft}%` });
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-br from-pink-200 via-purple-200 to-indigo-200 text-center relative overflow-hidden">
      <h1 className="text-3xl md:text-5xl font-bold mb-6 text-gray-800">
        Are you ready to go on an endless lifetime journey with me? 💖
      </h1>
      <div className="flex gap-6 mt-6 relative w-full h-40">
        {/* Yes Button */}
        <button
          onClick={onNext}
          className="px-8 py-3 bg-green-500 text-white font-bold rounded-xl shadow-lg hover:bg-green-600 transition-all text-lg"
        >
          Yes 💍
        </button>

        {/* No Button that moves */}
        <button
          style={{ position: "absolute", top: noPosition.top, left: noPosition.left }}
          onMouseEnter={moveNoButton}
          onClick={moveNoButton}
          className="px-8 py-3 bg-red-500 text-white font-bold rounded-xl shadow-lg rounded-xl transition-all text-lg"
        >
          No 🚫
        </button>
      </div>
    </div>
  );
};

export default FunPage;
