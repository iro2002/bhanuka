import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Import local images
import img12 from "../assets/Gallery/12.jpeg";
import img16 from "../assets/Gallery/16.jpeg";
import img17 from "../assets/Gallery/17.jpeg";
import img18 from "../assets/Gallery/18.jpeg";
import img20 from "../assets/Gallery/20.jpeg";
import img21 from "../assets/Gallery/21.jpeg";
import img22 from "../assets/Gallery/22.jpeg";
import img23 from "../assets/Gallery/23.jpeg";
import img7 from "../assets/Gallery/7.jpeg";

const IMAGES = [
  { url: img7 },
  { url: img12 },
  { url: img16},
  { url: img17},
  { url: img18},
  { url: img20 },
  { url: img21 },
  { url: img22},
  { url: img23},
];

const Gallery = () => {
  const [selectedImg, setSelectedImg] = useState(null);
  const cinematicEase = [0.25, 0.1, 0.25, 1];

  return (
    <section
      id="gallery"
      className="relative py-32 px-6 lg:px-16 overflow-hidden bg-black"
    >
      {/* Massive Background Typography Accent */}
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
        GALLERY
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* HEADER - matching other sections */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: cinematicEase }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h4
            className="text-sm font-['Roboto_Condensed',_sans-serif] font-light tracking-[0.3em] uppercase mb-4"
            style={{ color: "#CCCCCC", opacity: 0.7 }}
          >
            Visuals
          </h4>

          <h2
            className="text-5xl md:text-6xl lg:text-7xl font-['Montserrat',_sans-serif] font-thin leading-tight mb-8"
            style={{
              color: "#FFFFFF",
              textShadow: "4px 4px 0px #333333",
            }}
          >
            Captured Moments <br />
            <span
              className="italic font-light font-['Cormorant_Garamond',_serif] tracking-wide"
              style={{
                color: "#AFAFAF",
                textShadow: "2px 2px 0px rgba(0,0,0,0.6)",
              }}
            >
              Behind The Lens.
            </span>
          </h2>

          {/* Statement callout requested by the user */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            viewport={{ once: true }}
            className="max-w-4xl p-8 border-l-4 my-10 bg-gray-900/50 backdrop-blur-sm"
            style={{
              borderColor: "#FFFFFF",
              boxShadow: "6px 6px 0px rgba(51,51,51,0.5)",
            }}
          >
            <p 
              className="text-lg md:text-xl font-['Montserrat',_sans-serif] font-light tracking-wide uppercase leading-relaxed"
              style={{ color: "#FFFFFF" }}
            >
              "Our team is prepared to operate this range of camera and lighting systems with proactive precision and maximum efficiency."
            </p>
          </motion.div>
        </motion.div>

        {/* GALLERY GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {IMAGES.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setSelectedImg(img)}
              className="relative cursor-pointer group overflow-hidden rounded-lg"
              style={{
                boxShadow: "10px 10px 0px #333333",
                border: "1px solid rgba(255,255,255,0.1)",
                height: "350px",
              }}
            >
              <img
                src={img.url}
                alt={img.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6"
                style={{
                  background: "linear-gradient(to top, rgba(91,30,30,0.85), transparent)",
                }}
              >
                <span
                  className="text-xs uppercase font-['Roboto_Condensed',_sans-serif] font-light tracking-widest mb-1"
                  style={{ color: "#AFAFAF" }}
                >
                  {img.category}
                </span>
                <h4 className="text-xl font-['Montserrat',_sans-serif] font-light text-white">
                  {img.title}
                </h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* LIGHTBOX MODAL */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <button
              onClick={() => setSelectedImg(null)}
              className="absolute top-6 right-6 text-white text-3xl font-light font-sans hover:text-[#AFAFAF] transition-colors"
            >
              &times;
            </button>
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              transition={{ type: "spring", damping: 25, stiffness: 120 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl max-h-[80vh] overflow-hidden rounded-lg border-4 border-white bg-black flex flex-col"
              style={{ boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)" }}
            >
              <img
                src={selectedImg.url}
                alt={selectedImg.title}
                className="max-w-full max-h-[70vh] object-contain"
              />
              <div className="bg-black border-t border-white/10 p-6">
                <span
                  className="text-xs uppercase font-['Roboto_Condensed',_sans-serif] font-light tracking-widest"
                  style={{ color: "#AFAFAF" }}
                >
                  {selectedImg.category}
                </span>
                <h3
                  className="text-2xl font-['Montserrat',_sans-serif] font-light mt-1"
                  style={{ color: "#FFFFFF" }}
                >
                  {selectedImg.title}
                </h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
