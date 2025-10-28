import React from "react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center p-8">
      <h1 className="text-5xl font-bold mb-8">📬 Contact Us</h1>
      <p className="text-lg text-center max-w-2xl opacity-80">
        Reach out to <strong>High Tower Ventures</strong> for partnerships,
        media, or general inquiries.
      </p>

      <form className="mt-10 bg-gray-800 p-8 rounded-2xl shadow-lg w-full max-w-md">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full mb-4 p-3 rounded bg-gray-700 text-white"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full mb-4 p-3 rounded bg-gray-700 text-white"
        />
        <textarea
          rows="4"
          placeholder="Message"
          className="w-full mb-4 p-3 rounded bg-gray-700 text-white"
        ></textarea>
        <button
          type="submit"
          className="w-full py-3 bg-blue-600 rounded-xl hover:bg-blue-700 transition-all"
        >
          Send Message
        </button>
      </form>

      <div className="mt-10 text-center text-gray-400">
        <p>📍 Headquarters: Uyo, Nigeria</p>
        <p>🌍 Branches: Abuja • Accra • Dubai • London • New York</p>
        <p>
          ✉️ Email:{" "}
          <a href="mailto:info@hightowerventures.com" className="text-blue-400">
            info@hightowerventures.com
          </a>
        </p>
      </div>
    </div>
  );
}
