import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Project from "./components/Project";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Loader from "./components/Loader";

export let isAppLoaded = false;

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Show loader for 3.5 seconds to complete the cinematic intro
    const timer = setTimeout(() => {
      setLoading(false);
      isAppLoaded = true;
    }, 3500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-black min-h-[100dvh] text-white">
      <AnimatePresence mode="wait">
        {loading && <Loader key="loader" />}
      </AnimatePresence>
      
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Project />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;