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
      className="relative py-32 px-6 lg:px-16 overflow-hidden"
      style={{ backgroundColor: "#FFFFFF" }}
    >
      {/* Massive Background Typography Accent - matching About.jsx */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 0.08, scale: 1 }}
        transition={{ duration: 2, ease: cinematicEase }}
        viewport={{ once: true }}
        className="absolute top-10 -left-10 text-[20vw] font-['Montserrat',_sans-serif] font-black leading-none pointer-events-none select-none z-0"
        style={{
          color: "#5B1E1E",
          textShadow: "10px 10px 0px #9E9A9A",
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
            className="text-sm font-['Roboto_Condensed',_sans-serif] font-bold tracking-[0.3em] uppercase mb-4"
            style={{ color: "#5B1E1E", opacity: 0.7 }}
          >
            Portfolio
          </h4>

          <h2
            className="text-5xl md:text-6xl lg:text-7xl font-['Montserrat',_sans-serif] font-bold leading-tight"
            style={{
              color: "#5B1E1E",
              textShadow: "4px 4px 0px #9E9A9A",
            }}
          >
            Selected Work <br />
            <span
              className="italic font-normal font-['Lobster_Two',_cursive] tracking-wide"
              style={{
                color: "#AFAFAF",
                textShadow: "2px 2px 0px rgba(158,154,154,0.6)",
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
              className="py-3 px-6 text-sm tracking-widest uppercase transition-all duration-300 font-['Roboto_Condensed',_sans-serif] font-bold rounded-sm"
              style={{
                color: active === cat ? "#FFFFFF" : "#5B1E1E",
                backgroundColor: active === cat ? "#5B1E1E" : "rgba(175,175,175,0.08)",
                boxShadow: active === cat ? "4px 4px 0px #9E9A9A" : "none",
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
                  boxShadow: "10px 10px 0px #9E9A9A",
                  border: "1px solid rgba(158,154,154,0.4)",
                  backgroundColor: "#FFFFFF",
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
                    className="text-xs tracking-widest uppercase font-['Roboto_Condensed',_sans-serif] font-bold"
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