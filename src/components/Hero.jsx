import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { isAppLoaded } from "../App";
import heroImg from "../assets/hero.png";

const Hero = () => {
  // If the app has already completed its initial loading sequence,
  // we do not want to delay the animations on subsequent mounts.
  const baseDelay = isAppLoaded ? 0 : 3.5;

  return (
    <section id="home" className="relative h-[100dvh] w-full overflow-hidden">
      <img
        src={heroImg}
        alt="Bhanuka DOP"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      {/* Subtle overlay so text is readable if the image has bright spots */}
      <div className="absolute inset-0 bg-black/30 z-0"></div>

      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 lg:px-16 flex flex-col justify-center items-center text-center sm:items-start sm:text-left pt-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: baseDelay }}
          className="text-xs sm:text-sm font-['Roboto_Condensed',_sans-serif] font-light tracking-[0.4em] uppercase text-gray-300 mb-4"
        >
          Cinematography & Visual Storytelling
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: baseDelay + 0.2 }}
          className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-['Montserrat',_sans-serif] font-thin leading-none text-white mb-10"
          style={{ textShadow: "4px 4px 10px rgba(0,0,0,0.5)" }}
        >
          BHANUKA
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: baseDelay + 0.4 }}
        >
          <Link
            to="/work"
            className="inline-block py-4 px-10 border border-white/30 text-xs sm:text-sm tracking-[0.3em] uppercase font-['Roboto_Condensed',_sans-serif] font-light hover:bg-white hover:text-black transition-all duration-500"
          >
            Explore Work
          </Link>
        </motion.div>
      </div>
      
      {/* Bottom Layout: Copyright and Socials */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: baseDelay + 0.9 }}
        className="absolute bottom-6 sm:bottom-10 left-6 right-6 lg:left-16 lg:right-16 flex flex-col sm:flex-row justify-between items-center sm:items-end z-10 space-y-4 sm:space-y-0"
      >
        {/* Copyright */}
        <p className="text-[9px] sm:text-[10px] font-['Roboto_Condensed',_sans-serif] tracking-[0.2em] sm:tracking-[0.3em] uppercase text-white/50">
          &copy; {new Date().getFullYear()} BHANUKA. All Rights Reserved.
        </p>

        {/* Social Icons (Inline SVGs) */}
        <div className="flex space-x-6">
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-white/50 hover:text-white transition-colors duration-300">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-white/50 hover:text-white transition-colors duration-300">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
            </svg>
          </a>
          <a href="https://youtube.com" target="_blank" rel="noreferrer" className="text-white/50 hover:text-white transition-colors duration-300">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path>
              <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
            </svg>
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;