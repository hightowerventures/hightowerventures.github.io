import React from "react";

export default function Footer() {
  return (
    <footer className="bg-htNight text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <div className="text-lg font-semibold">High Tower Ventures</div>
          <div className="mt-2 text-sm text-gray-300">Engineering the Future. Building the Towers of Tomorrow.</div>
        </div>
        <div>
          <div className="font-semibold">Offices</div>
          <ul className="mt-2 text-sm text-gray-300">
            <li>Uyo, Nigeria (HQ)</li>
            <li>Abuja, Nigeria</li>
            <li>Accra, Ghana</li>
            <li>Dubai, UAE</li>
            <li>London, UK</li>
            <li>New York, USA</li>
          </ul>
        </div>
        <div>
          <div className="font-semibold">Contact</div>
          <div className="mt-2 text-sm text-gray-300">hightowerventures92@gmail.com</div>
          <div className="mt-4 text-sm text-gray-400">© 2025 High Tower Ventures</div>
        </div>
      </div>
    </footer>
  );
}
