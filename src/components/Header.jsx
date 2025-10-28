import React from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [open, setOpen] = React.useState(false);
  return (
    <header className="bg-white/90 backdrop-blur sticky top-0 z-50 border-b">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-md bg-gradient-to-br from-htNight to-[#06202A] flex items-center justify-center text-htGold font-bold"><img
          src="/src/Images/HTVV.png"
          alt="High Tower Ventures Logo"
          className="object-contain w-14 h-14"
        /></div>
          <div>
            <Link to="/" className="text-xl font-semibold text-htNight">High Tower Ventures</Link>
            <div className="text-xs text-gray-500">Engineering the Future. Building the Towers of Tomorrow.</div>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-htNight">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/subsidiaries">Subsidiaries</Link>
          <Link to="/global">Global</Link>
          <Link to="/investors">Investors</Link>
          <Link to="/news">News</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <div className="md:hidden">
          <button onClick={() => setOpen(!open)} className="p-2 rounded-md border">
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t">
          <div className="px-6 py-4 flex flex-col gap-3">
            <Link to="/" onClick={() => setOpen(false)}>Home</Link>
            <Link to="/about" onClick={() => setOpen(false)}>About</Link>
            <Link to="/subsidiaries" onClick={() => setOpen(false)}>Subsidiaries</Link>
            <Link to="/global" onClick={() => setOpen(false)}>Global</Link>
            <Link to="/investors" onClick={() => setOpen(false)}>Investors</Link>
            <Link to="/news" onClick={() => setOpen(false)}>News</Link>
            <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
          </div>
        </div>
      )}
    </header>
  );
}
