import React from "react";

export default function News() {
  const updates = [
    {
      title: "High Tower Technologies launches Cyber Defense Unit",
      date: "Oct 2025",
      desc: "Our cybersecurity division now offers enterprise-grade network protection solutions across Africa.",
    },
    {
      title: "High Tower Foods expands logistics network",
      date: "Sept 2025",
      desc: "We’ve opened two new cold storage facilities to ensure fast delivery and food quality preservation.",
    },
    {
      title: "High Tower Ventures explores Web3 integration",
      date: "Aug 2025",
      desc: "The company is exploring blockchain-driven systems to enhance transparency across subsidiaries.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white px-8 py-16">
      <h1 className="text-5xl font-bold text-center mb-10">📰 News & Updates</h1>
      <div className="grid md:grid-cols-3 gap-8">
        {updates.map((news, i) => (
          <div key={i} className="p-6 bg-gray-800 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-semibold">{news.title}</h2>
            <p className="text-sm text-gray-400 mt-2">{news.date}</p>
            <p className="mt-4 opacity-80">{news.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
