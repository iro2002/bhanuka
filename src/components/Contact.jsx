import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const cinematicEase = [0.25, 0.1, 0.25, 1];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Action handler or simple alert for simple UX
    alert("Thank you for reaching out! Bhanuka will get back to you soon.");
  };

  return (
    <section
      id="contact"
      className="relative py-32 px-6 lg:px-16 overflow-hidden"
      style={{ backgroundColor: "#FFFFFF" }}
    >
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
        CONTACT
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* HEADER */}
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
            Inquiries
          </h4>

          <h2
            className="text-5xl md:text-6xl lg:text-7xl font-['Montserrat',_sans-serif] font-bold leading-tight"
            style={{
              color: "#5B1E1E",
              textShadow: "4px 4px 0px #9E9A9A",
            }}
          >
            Let's Collaborate <br />
            <span
              className="italic font-normal font-['Lobster_Two',_cursive] tracking-wide"
              style={{
                color: "#AFAFAF",
                textShadow: "2px 2px 0px rgba(158,154,154,0.6)",
              }}
            >
              Get In Touch.
            </span>
          </h2>
        </motion.div>

        {/* TWO COLUMN CONTENT */}
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
          {/* Left Column - Contact Form */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-['Roboto_Condensed',_sans-serif] tracking-widest uppercase mb-2" style={{ color: "#5B1E1E" }}>
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full py-3 px-4 outline-none border focus:border-[#5B1E1E] transition-colors"
                    style={{ borderColor: "rgba(158,154,154,0.5)", backgroundColor: "rgba(255,255,255,0.8)" }}
                  />
                </div>
                <div>
                  <label className="block text-xs font-['Roboto_Condensed',_sans-serif] tracking-widest uppercase mb-2" style={{ color: "#5B1E1E" }}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full py-3 px-4 outline-none border focus:border-[#5B1E1E] transition-colors"
                    style={{ borderColor: "rgba(158,154,154,0.5)", backgroundColor: "rgba(255,255,255,0.8)" }}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-['Roboto_Condensed',_sans-serif] tracking-widest uppercase mb-2" style={{ color: "#5B1E1E" }}>
                  Subject
                </label>
                <input
                  type="text"
                  required
                  className="w-full py-3 px-4 outline-none border focus:border-[#5B1E1E] transition-colors"
                  style={{ borderColor: "rgba(158,154,154,0.5)", backgroundColor: "rgba(255,255,255,0.8)" }}
                />
              </div>

              <div>
                <label className="block text-xs font-['Roboto_Condensed',_sans-serif] tracking-widest uppercase mb-2" style={{ color: "#5B1E1E" }}>
                  Message
                </label>
                <textarea
                  rows="6"
                  required
                  className="w-full py-3 px-4 outline-none border focus:border-[#5B1E1E] transition-colors resize-none"
                  style={{ borderColor: "rgba(158,154,154,0.5)", backgroundColor: "rgba(255,255,255,0.8)" }}
                />
              </div>

              <button
                type="submit"
                className="py-4 px-8 text-sm tracking-widest uppercase font-['Roboto_Condensed',_sans-serif] font-bold transition-all duration-300"
                style={{
                  color: "#FFFFFF",
                  backgroundColor: "#5B1E1E",
                  boxShadow: "6px 6px 0px #9E9A9A",
                }}
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Right Column - Contact Details */}
          <motion.div
            className="lg:col-span-5 flex flex-col justify-center space-y-12"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div>
              <h4 className="text-xs font-['Roboto_Condensed',_sans-serif] font-bold tracking-widest uppercase mb-2" style={{ color: "#AFAFAF" }}>
                Location
              </h4>
              <p className="text-xl font-['Open_Sans',_sans-serif] font-light" style={{ color: "#5B1E1E" }}>
                Colombo & Badulla, <br /> Sri Lanka
              </p>
            </div>

            <div>
              <h4 className="text-xs font-['Roboto_Condensed',_sans-serif] font-bold tracking-widest uppercase mb-2" style={{ color: "#AFAFAF" }}>
                Email
              </h4>
              <a
                href="mailto:contact@bhanuka.com"
                className="text-xl font-['Open_Sans',_sans-serif] font-light hover:opacity-70 transition-opacity"
                style={{ color: "#5B1E1E" }}
              >
                contact@bhanuka.com
              </a>
            </div>

            <div>
              <h4 className="text-xs font-['Roboto_Condensed',_sans-serif] font-bold tracking-widest uppercase mb-2" style={{ color: "#AFAFAF" }}>
                Socials
              </h4>
              <div className="flex flex-col space-y-2">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-base font-['Roboto_Condensed',_sans-serif] font-bold tracking-widest uppercase hover:translate-x-2 transition-transform duration-300"
                  style={{ color: "#5B1E1E" }}
                >
                  Instagram &rarr;
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-base font-['Roboto_Condensed',_sans-serif] font-bold tracking-widest uppercase hover:translate-x-2 transition-transform duration-300"
                  style={{ color: "#5B1E1E" }}
                >
                  YouTube &rarr;
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-base font-['Roboto_Condensed',_sans-serif] font-bold tracking-widest uppercase hover:translate-x-2 transition-transform duration-300"
                  style={{ color: "#5B1E1E" }}
                >
                  Facebook &rarr;
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
