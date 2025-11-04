import React from "react";

export default function About(){
  return (
    <main className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-htNight">About High Tower Ventures</h2>
      <p className="mt-4 text-gray-600 max-w-3xl">High Tower Ventures is an umbrella company registered in Nigeria with the mission to engineer the future across multiple sectors. Founded by <strong>Dr. Ita G. Sampson</strong> in 1992, HTV focuses on long-term value creation through innovation, integrity, and impact. Our headquarters are in Uyo, and we're expanding across Africa and global markets.</p>

      <section className="mt-8">
        <h3 className="text-xl font-semibold text-htNight">Leadership</h3>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg p-6 shadow">
            <div className="font-semibold">Dr. Ita G. Sampson</div>
            <div className="text-sm text-gray-600 mt-2">Founder & CEO</div>
            <p className="mt-3 text-sm text-gray-500">Visionary leader focused on building global ventures from Nigeria.</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow">
            <div className="font-semibold">Andikan Sampson</div>
            <div className="text-sm text-gray-600 mt-2">COO</div>
            <p className="mt-3 text-sm text-gray-500">Operational excellence and execution across subsidiaries.</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow">
            <div className="font-semibold">Dr. Glory Sampson</div>
            <div className="text-sm text-gray-600 mt-2">CFO</div>
            <p className="mt-3 text-sm text-gray-500">Finance and capital strategy.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
