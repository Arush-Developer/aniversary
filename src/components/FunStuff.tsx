// src/components/FunPage.jsx
import React from "react";

const FunPage = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-300 via-purple-300 to-indigo-400 text-white px-6">
      <h2 className="text-4xl font-extrabold mb-10 drop-shadow-lg">
        Fun Times Together 😍
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl">
        {funImages.map((item, index) => (
          <div
            key={index}
            className="bg-white/20 backdrop-blur-md rounded-2xl shadow-lg p-4 text-center transform hover:scale-105 transition duration-300"
          >
            <img
              src={item.src}
              alt={item.caption}
              className="rounded-xl mb-4 shadow-md"
            />
            <p className="text-lg font-medium">{item.caption}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FunPage;
