import React from "react";
import { motion } from "framer-motion";

export default function Technologies() {
  return (
    <section className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        {/* Left Section — Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl overflow-hidden shadow-lg"
        >
          <img
            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&q=80"
            alt="High Tower Technologies"
            className="w-full h-[420px] object-cover"
          />
        </motion.div>

        {/* Right Section — Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-extrabold text-htNight mb-4">
            High Tower Technologies
          </h1>
          <p className="text-gray-600 leading-relaxed mb-6">
            High Tower Technologies is the digital innovation arm of our group,
            specializing in <span className="font-semibold text-htNight">cybersecurity, artificial intelligence, blockchain, and metaverse infrastructure.</span>  
            We build next-generation systems that empower individuals, enterprises, and governments to thrive in the digital age.
          </p>

          <div className="space-y-2 text-gray-700">
            <p>🔹 Cybersecurity & Threat Intelligence</p>
            <p>🔹 Blockchain Infrastructure & Web3 Applications</p>
            <p>🔹 AI Research & Automation</p>
            <p>🔹 Metaverse and Immersive Experience Design</p>
          </div>

          <div className="mt-8">
            <a
              href="#"
              className="bg-htNight text-white px-6 py-3 rounded-md shadow hover:bg-htGold transition"
            >
              Learn More
            </a>
          </div>
        </motion.div>
      </div>

      {/* Footer Section */}
      <div className="max-w-7xl mx-auto px-6 mt-20 text-center text-gray-500 text-sm">
        “Engineering the digital backbone of tomorrow’s world.”
      </div>
    </section>
  );
}
