import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Work", href: "/work" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-black/90 backdrop-blur-sm shadow-md" : "bg-black/80 sm:bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-16 sm:py-6 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-0">
        
        {/* LOGO */}
        <Link
          to="/"
          className="font-['Montserrat',_sans-serif] font-thin text-xl sm:text-2xl tracking-[0.3em] transition-colors duration-300 text-white hover:text-gray-300 z-50 relative"
        >
          BHANUKA
        </Link>

        {/* ALL NAV LINKS (Directly visible on mobile and desktop) */}
        <nav className="flex items-center justify-center flex-wrap gap-x-4 gap-y-2 sm:gap-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={`text-[11px] sm:text-xs font-['Roboto_Condensed',_sans-serif] font-light tracking-widest uppercase hover:opacity-75 transition-opacity duration-300 ${
                location.pathname === link.href ? "text-white" : "text-gray-400"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
        
      </div>
    </header>
  );
};

export default Header;