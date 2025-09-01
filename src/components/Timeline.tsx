// src/components/Timeline.jsx
import React from "react";

const events = [
  {
    title: "Our First Memory",
    desc: "The beginning of something beautiful 💕",
    img: "/images/memory-1.jpg",
  },
  {
    title: "Laughter & Joy",
    desc: "Countless fun moments together 😍",
    img: "/images/memory-2.jpg",
  },
  {
    title: "Through Ups & Downs",
    desc: "We always stand by each other ❤️",
    img: "/images/memory-3.jpg",
  },
  {
    title: "Cherished Days",
    desc: "The smiles, the journeys, the love 🌸",
    img: "/images/memory-4.jpg",
  },
  {
    title: "Forever in My Heart",
    desc: "Every day is better with you 💖",
    img: "/images/memory-5.jpg",
  },
  {
    title: "Holding Hands for a Lifetime",
    desc: "From today till forever 💍",
    img: "/images/hand-holding.jpg",
  },
];

const Timeline = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-100 to-indigo-200 flex flex-col items-center py-10">
      <h2 className="text-4xl font-bold mb-10 text-gray-800">Our Journey 🌸</h2>
      <div className="space-y-10 w-11/12 md:w-3/4">
        {events.map((e, i) => (
          <div
            key={i}
            className="flex flex-col md:flex-row items-center gap-6 p-6 bg-white/80 shadow-lg rounded-2xl"
          >
            <img
              src={e.img}
              alt={e.title}
              className="w-40 h-40 object-cover rounded-xl shadow-md"
            />
            <div>
              <h3 className="text-2xl font-semibold text-gray-900">{e.title}</h3>
              <p className="text-gray-700 mt-2">{e.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
