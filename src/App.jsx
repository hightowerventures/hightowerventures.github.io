import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Subsidiaries from "./pages/Subsidiaries";
import SubsidiaryDetail from "./pages/SubsidiaryDetail";
import Global from "./pages/Global";
import Investors from "./pages/Investors";
import News from "./pages/News";
import Contact from "./pages/Contact";
import Technologies from "./pages/Subsidiaries/Technologies";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-gray-50">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/subsidiaries" element={<Subsidiaries />} />
          <Route path="/subsidiary/:slug" element={<SubsidiaryDetail />} />
          <Route path="/global" element={<Global />} />
          <Route path="/investors" element={<Investors />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/subsidiaries/technologies" element={<Technologies />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
