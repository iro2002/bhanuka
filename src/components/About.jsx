import React from "react";
import { motion } from "framer-motion";
import aboutImg from "../assets/01.png";

const About = () => {
  const cinematicEase = [0.25, 0.1, 0.25, 1];

  return (
    <section
      id="about"
      className="relative py-32 px-6 lg:px-16 overflow-hidden bg-fixed bg-center bg-cover"
      style={{ backgroundImage: `url(${aboutImg})` }}
    >
      {/* Light overlay to ensure text is perfectly readable while image peeks through */}
      <div className="absolute inset-0 bg-[#FFFFFF]/85 backdrop-blur-[1px]"></div>

      {/* Massive Background Typography Accent */}
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
        ABOUT
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
          {/* Left Column */}
          <motion.div
            className="lg:col-span-8 flex flex-col justify-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: cinematicEase }}
            viewport={{ once: true }}
          >
            <div className="mb-12">
              <h4
                className="text-sm font-['Roboto_Condensed',_sans-serif] font-bold tracking-[0.3em] uppercase mb-4"
                style={{ color: "#5B1E1E", opacity: 0.7 }}
              >
                The Vision
              </h4>

              <h2
                className="text-5xl md:text-6xl lg:text-7xl font-['Montserrat',_sans-serif] font-bold leading-tight"
                style={{
                  color: "#5B1E1E",
                  textShadow: "4px 4px 0px #9E9A9A",
                }}
              >
                Crafting Stories <br />
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
            </div>

            <div className="grid md:grid-cols-2 gap-8 text-base md:text-lg font-['Open_Sans',_sans-serif] font-light leading-relaxed">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.2 }}
                viewport={{ once: true }}
                style={{
                  color: "#5B1E1E",
                  opacity: 0.9,
                }}
              >
                Originally from the scenic city of{" "}
                <span
                  className="font-semibold"
                  style={{ color: "#5B1E1E" }}
                >
                  Badulla
                </span>
                , I relocated to Colombo with a clear mission: to deepen my
                understanding of visual art and design. Through years of
                studying the core fundamentals—color theory, light
                manipulation, and the balance of line and shape—I discovered
                the ultimate tool to paint with light over time: the camera.
              </motion.p>

              <div className="space-y-8">
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1.2, delay: 0.4 }}
                  viewport={{ once: true }}
                  style={{
                    color: "#5B1E1E",
                    opacity: 0.9,
                  }}
                >
                  My professional journey began in{" "}
                  <span
                    className="font-semibold"
                    style={{ color: "#5B1E1E" }}
                  >
                    2013
                  </span>{" "}
                  as a Camera Assistant, earning a Diploma in Camera and
                  Lighting from the SLTTI. I later spent four impactful years
                  at Sirasa & Shakthi TV, refining my skills in high-pressure
                  broadcast environments.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1.2, delay: 0.6 }}
                  viewport={{ once: true }}
                  style={{
                    color: "#5B1E1E",
                    opacity: 0.9,
                  }}
                >
                  Today, I operate as a freelance Director of Photography and
                  business owner, dedicated to continuous growth and ensuring
                  every project is technically superior and visually compelling.
                </motion.p>
              </div>
            </div>
          </motion.div>

          
        </div>
      </div>
    </section>
  );
};

export default About;