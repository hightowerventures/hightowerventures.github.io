import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Tower = ({w,h,delay}) => (
  <motion.div
    initial={{ y: 30 }}
    animate={{ y: 0 }}
    transition={{ repeat: Infinity, duration: 4 + delay, repeatType: "reverse", ease: "easeInOut" }}
    className={`rounded-t ${w} bg-gradient-to-t from-htGold to-htSilver`}
    style={{ height: `${h}px` }}
  />
);

export default function Home(){
  const towers = [
    {w:'w-8', h:120, delay:0},
    {w:'w-12', h:180, delay:0.4},
    {w:'w-6', h:100, delay:0.8},
    {w:'w-16', h:220, delay:0.2},
    {w:'w-10', h:150, delay:0.6},
    {w:'w-8', h:110, delay:1}
  ];

  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div initial={{ x:-40, opacity:0 }} animate={{ x:0, opacity:1 }} transition={{ duration:0.8 }}>
            <h1 className="text-4xl md:text-6xl font-extrabold text-htNight leading-tight">High Tower Ventures</h1>
            <p className="mt-4 text-lg text-gray-600 max-w-xl">Engineering the Future. Building the Towers of Tomorrow. We build, invest and scale ventures across technology, health, agriculture and real estate — from Uyo to the world.</p>

            <div className="mt-8 flex gap-4">
              <Link to="/investors" className="inline-block bg-htNight text-white px-6 py-3 rounded-md">Invest</Link>
              <Link to="/subsidiaries" className="inline-block border border-htNight text-htNight px-6 py-3 rounded-md">Explore Ventures</Link>
            </div>

            <div className="mt-8 text-sm text-gray-500">Headquarters: Uyo, Nigeria • Expansion: Abuja, Accra, Dubai, London, New York</div>
          </motion.div>

          <div className="relative">
            <div className="w-full h-80 md:h-96 bg-gradient-to-b from-htNight to-[#06202A] rounded-lg overflow-hidden shadow-lg flex items-end justify-center p-6">
              <div className="w-full flex items-end justify-center gap-3">
                {towers.map((t,i)=> <Tower key={i} {...t} />)}
              </div>
            </div>

            
            <div className="mt-4 text-xs text-gray-400">   </div>
          

          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&q=80" alt="" className="w-full h-44 object-cover"/>
            <div className="p-4">
              <h3 className="font-semibold text-htNight">High Tower Technologies</h3>
              <p className="text-sm text-gray-600 mt-2">Cybersecurity, Web3 & Metaverse.</p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <img src="https://images.unsplash.com/photo-1514575110897-1253ff7b2ccb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170" alt="" className="w-full h-44 object-cover"/>
            <div className="p-4">
              <h3 className="font-semibold text-htNight">High Tower Foods</h3>
              <p className="text-sm text-gray-600 mt-2">Food delivery & logistics.</p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <img src="https://plus.unsplash.com/premium_photo-1661589037435-cc27b4ba489f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dnIlMjBoZWFkc2V0c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600" alt="" className="w-full h-44 object-cover"/>
            <div className="p-4">
              <h3 className="font-semibold text-htNight">High Tower Interactive</h3>
              <p className="text-sm text-gray-600 mt-2">Web3 games & digital experiences.</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <img src="https://images.unsplash.com/photo-1649073586428-e288125d930a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1332" alt="" className="w-full h-44 object-cover"/>
            <div className="p-4">
              <h3 className="font-semibold text-htNight">High Tower Pharmacy</h3>
              <p className="text-sm text-gray-600 mt-2">Digital and physical healthcare.</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <img src="https://images.unsplash.com/photo-1721219314488-cecc1c5f6539?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1332" alt="" className="w-full h-44 object-cover"/>
            <div className="p-4">
              <h3 className="font-semibold text-htNight">High Tower Farms</h3>
              <p className="text-sm text-gray-600 mt-2">Mechanized agriculture.</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <img src="https://images.unsplash.com/photo-1689574666546-75e1036e55fb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170" alt="" className="w-full h-44 object-cover"/>
            <div className="p-4">
              <h3 className="font-semibold text-htNight">High Tower Real Estate</h3>
              <p className="text-sm text-gray-600 mt-2">Property development and investment.</p>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <img src="https://images.unsplash.com/photo-1645226880663-81561dcab0ae?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170" alt="" className="w-full h-44 object-cover"/>
            <div className="p-4">
              <h3 className="font-semibold text-htNight">High Tower Real Estate</h3>
              <p className="text-sm text-gray-600 mt-2">Forex, crypto and liquidity provision.</p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
