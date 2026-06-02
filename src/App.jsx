import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Project from "./components/Project";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <About />
        <Project />
        <Gallery />
        <Contact />
      </main>
    </div>
  );
}

export default App;