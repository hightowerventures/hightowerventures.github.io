// src/pages/Global.jsx
import React from "react";

export default function Global() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold mb-6">🌍 Global Expansion</h1>
      <p className="text-lg max-w-2xl text-center opacity-80">
        High Tower Ventures is expanding globally — establishing strategic
        hubs in Abuja, Accra, Dubai, London, and New York to drive innovation,
        investment, and sustainable growth.
      </p>

      <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-6">
        {["Abuja", "Accra", "Dubai", "London", "New York"].map((city) => (
          <div
            key={city}
            className="p-6 bg-gray-800 rounded-2xl shadow-lg hover:scale-105 transition-transform"
          >
            <h2 className="text-2xl font-semibold">{city}</h2>
            <p className="text-sm opacity-75 mt-2">
              Regional Headquarters – Strategic growth node.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
