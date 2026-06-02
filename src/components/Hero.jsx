import React from "react";
import heroImg from "../assets/hero.png";

const Hero = () => {
  return (
    <section id="home" className="h-screen w-full overflow-hidden">
      <img
        src={heroImg}
        alt="Bhanuka DOP"
        className="w-full h-full object-cover"
      />
    </section>
  );
};

export default Hero;