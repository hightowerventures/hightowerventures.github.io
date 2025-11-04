import React from "react";
import { motion } from "framer-motion";


const Investors = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="text-center py-20 bg-gradient-to-b from-htNight to-gray-900 text-white">
        <motion.h1
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold"
        >
          Investor Relations
        </motion.h1>
        <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
          Build the Towers of Tomorrow with High Tower Ventures.
        </p>
      </section>

      {/* Vision Section */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-bold text-htNight mb-6">
          Engineering the Future. Building the Towers of Tomorrow.
        </h2>
        <p className="text-gray-700 leading-relaxed max-w-4xl mx-auto">
          At <strong>High Tower Ventures</strong>, we are not just building companies —
          we’re architecting a new era of African excellence across{" "}
          <strong>Technology, Health, Agriculture, Real Estate, and Entertainment.</strong>
          Every tower we raise is designed to solve real-world problems, generate sustainable value,
          and shape industries for the next generation.
        </p>
      </section>

      {/* Why Invest Section */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-semibold text-center text-htNight mb-10">
            Why Invest in High Tower Ventures?
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
            {[
              {
                title: "Diversified Growth Portfolio",
                desc: "Seven core subsidiaries across high-demand sectors ensure stability, scalability, and multi-industry resilience.",
              },
              {
                title: "High ROI with Real Impact",
                desc: "Our model combines 30% operational efficiency with 50% reinvestment — ensuring consistent capital growth and compounding returns.",
              },
              {
                title: "Global Expansion Footprint",
                desc: "Headquartered in Uyo, Nigeria, expanding into Abuja, Accra, Dubai, London, and New York — turning local innovation into global opportunities.",
              },
              {
                title: "Vision-Driven Leadership",
                desc: "Led by experts in business, technology, and innovation — committed to transparency, performance, and legacy-building.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-gray-50 border rounded-xl p-6 shadow-sm hover:shadow-md transition"
              >
                <h4 className="font-semibold text-lg text-htNight mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Options */}
      <section className="bg-gradient-to-b from-gray-100 to-white py-16 text-center">
        <h3 className="text-3xl font-semibold text-htNight mb-10">
          Your Investment, Our Execution
        </h3>
        <p className="text-gray-700 max-w-3xl mx-auto mb-12">
          Whether you invest in <strong>High Tower Interactive</strong>,{" "}
          <strong>Technologies</strong>, <strong>Farms</strong>,{" "}
          <strong>Foods</strong>, <strong>Pharmacy</strong>,{" "}
          <strong>Real Estate</strong> or <strong>Markets</strong> — your capital
          builds pillars of innovation, not just companies.
        </p>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-left">
          {[
            "High Tower Interactive — VR/AR and Gaming Ecosystem",
            "High Tower Technologies — Cybersecurity, AI, Web3 Solutions",
            "High Tower Farms — Mechanized Agriculture & AgriTech",
            "High Tower Foods — Logistics & Food Delivery Systems",
            "High Tower Real Estate — Smart Property Development",
            "High Tower Pharmacy — Digital & Physical Healthcare",
            "High Tower Markets — Forex, Crypto & Liquidity Provision",
          ].map((name, i) => (
            <div
              key={i}
              className="bg-white p-5 rounded-lg border shadow-sm hover:shadow-md transition"
            >
              <h4 className="font-semibold text-htNight text-sm">{name}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* ROI Section */}
      <section className="bg-htNight text-white py-20 text-center">
        <h3 className="text-3xl font-semibold mb-4">Projected Growth (2025–2035)</h3>
        <p className="text-gray-300 max-w-3xl mx-auto mb-10">
          High Tower Ventures is structured for exponential compounding — delivering
          real wealth creation across our ecosystem.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-10 text-left max-w-4xl mx-auto">
          <div>
            <h4 className="text-xl font-semibold text-htGold">Average Annual ROI</h4>
            <p className="text-gray-300">40%–100%</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-htGold">Reinvestment Yield</h4>
            <p className="text-gray-300">Doubles every 3–4 years</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-htGold">10-Year Growth</h4>
            <p className="text-gray-300">1,000%+ potential return</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-20 text-center">
        <h3 className="text-3xl font-bold text-htNight mb-4">
          Partner With Us
        </h3>
        <p className="text-gray-700 max-w-2xl mx-auto mb-8">
          Investors aren’t just funders — they’re <strong>builders of legacy</strong>.
          Together, we shape the next skyline of innovation, wealth, and progress.
        </p>
        <p className="italic text-gray-600 mb-8">
          “Those who build towers today, shape the view of tomorrow.”
        </p>
        <a
          href="mailto:hightowerventures92@gmail.com"
          className="bg-htNight text-white px-8 py-3 rounded-md font-medium hover:bg-htGold transition"
        >
          Contact Us to Invest
        </a>
      </section>
    </div>
  );
};

export default Investors;
