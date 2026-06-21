import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Loader = ({ onFinish }) => {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: "-100%" }}
      transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
    >
      <div className="relative flex flex-col items-center justify-center">
        {/* Top Text */}
        <div className="overflow-hidden mb-2">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
            className="font-['Montserrat',_sans-serif] font-thin text-3xl sm:text-5xl tracking-[0.4em] text-white"
          >
            BHANUKA
          </motion.h1>
        </div>

        {/* Separator Line */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1], delay: 0.8 }}
          className="h-[1px] bg-white/50 w-0 my-4"
        />

        {/* Bottom Text */}
        <div className="overflow-hidden mt-2">
          <motion.p
            initial={{ y: "-100%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 1.2 }}
            className="font-['Roboto_Condensed',_sans-serif] font-light text-xs sm:text-sm tracking-[0.5em] text-gray-400 uppercase"
          >
            Director of Photography
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
};

export default Loader;
