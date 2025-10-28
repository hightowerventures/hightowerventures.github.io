import React from "react";
import { Link } from "react-router-dom";

const items = [
  { slug:'technologies', title:'High Tower Technologies', desc:'Cybersecurity, Web3 & Metaverse' },
  { slug:'foods', title:'High Tower Foods', desc:'Food delivery & logistics' },
  { slug:'interactive', title:'High Tower Interactive', desc:'Web3 games & digital experiences' },
  { slug:'pharmacy', title:'High Tower Pharmacy', desc:'Digital & physical healthcare' },
  { slug:'farms', title:'High Tower Farms', desc:'Mechanized agriculture' },
  { slug:'realestate', title:'High Tower Real Estate', desc:'Property development & investment' },
  { slug:'markets', title:'High Tower Markets', desc:'Forex, crypto & liquidity provision' }
];

export default function Subsidiaries(){
  return (
    <main className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-htNight">Our Subsidiaries</h2>
      <p className="mt-4 text-gray-600">Each subsidiary is built to scale and integrate with the High Tower ecosystem.</p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map(it => (
          <Link key={it.slug} to={`/subsidiary/${it.slug}`} className="block">
            <div className="bg-white rounded-lg p-6 shadow hover:shadow-lg transition">
              <div className="font-semibold text-lg text-htNight">{it.title}</div>
              <div className="text-sm text-gray-600 mt-2">{it.desc}</div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
