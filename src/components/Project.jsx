import React, { useState } from "react";
import { motion } from "framer-motion";

const DATA = {
  Music: [
    "ByLl1TrfLP4",
    "TpYCFfYzop8",
    "s66KFOHPPIs",
    "Fz7jS-ImMuI",
    "XXgVbEpWCCg",
    "b0iY5rkAcyU",
  ],
  Documentary: ["RwB9bp4cce0", "mykFQJE7AAk"],
  "Web / Film": ["m5FsVMiUK_I", "g0CgGDQzbyw"],
};

const Project = () => {
  const [active, setActive] = useState("Music");
  const cinematicEase = [0.25, 0.1, 0.25, 1];

  return (
    <section
      id="projects"
      className="relative py-32 px-6 lg:px-16 overflow-hidden bg-black"
    >
      {/* Massive Background Typography Accent - matching About.jsx */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 0.08, scale: 1 }}
        transition={{ duration: 2, ease: cinematicEase }}
        viewport={{ once: true }}
        className="absolute top-10 -left-10 text-[20vw] font-['Montserrat',_sans-serif] font-thin leading-none pointer-events-none select-none z-0"
        style={{
          color: "#333333",
          textShadow: "10px 10px 0px #111111",
        }}
      >
        WORK
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* HEADER - exactly matching About.jsx styles */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: cinematicEase }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h4
            className="text-sm font-['Roboto_Condensed',_sans-serif] font-light tracking-[0.3em] uppercase mb-4"
            style={{ color: "#CCCCCC", opacity: 0.7 }}
          >
            Portfolio
          </h4>

          <h2
            className="text-5xl md:text-6xl lg:text-7xl font-['Montserrat',_sans-serif] font-thin leading-tight"
            style={{
              color: "#FFFFFF",
              textShadow: "4px 4px 0px #333333",
            }}
          >
            Selected Work <br />
            <span
              className="italic font-light font-['Cormorant_Garamond',_serif] tracking-wide"
              style={{
                color: "#AFAFAF",
                textShadow: "2px 2px 0px rgba(0,0,0,0.6)",
              }}
            >
              Through Light & Motion.
            </span>
          </h2>
        </motion.div>

        {/* SIMPLE HORIZONTAL FILTER MENU - Improved UX */}
        <div className="flex flex-wrap gap-3 md:gap-4 mb-12 border-b pb-4" style={{ borderColor: "rgba(158,154,154,0.3)" }}>
          {Object.keys(DATA).map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className="py-3 px-6 text-sm tracking-widest uppercase transition-all duration-300 font-['Roboto_Condensed',_sans-serif] font-light rounded-sm"
              style={{
                color: active === cat ? "#000000" : "#FFFFFF",
                backgroundColor: active === cat ? "#FFFFFF" : "rgba(255,255,255,0.08)",
                boxShadow: active === cat ? "4px 4px 0px #333333" : "none",
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* VIDEOS GRID */}
        <div className="w-full">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {DATA[active].map((id, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
                className="relative group overflow-hidden rounded-lg"
                style={{
                  boxShadow: "10px 10px 0px #333333",
                  border: "1px solid rgba(255,255,255,0.1)",
                  backgroundColor: "#111111",
                }}
              >
                <iframe
                  className="w-full h-56 md:h-60"
                  src={`https://www.youtube.com/embed/${id}`}
                  title="project"
                  allowFullScreen
                />

                {/* subtle overlay */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(91,30,30,0.5), transparent)",
                  }}
                />

                {/* label */}
                <div className="absolute bottom-4 left-4 pointer-events-none">
                  <p
                    className="text-xs tracking-widest uppercase font-['Roboto_Condensed',_sans-serif] font-light"
                    style={{ color: "#FFFFFF", textShadow: "1px 1px 2px rgba(0,0,0,0.8)" }}
                  >
                    Cinematic Work
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Project;