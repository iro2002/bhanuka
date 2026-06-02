import React, { useState } from "react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  React.useEffect(() => {
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
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Work", href: "#projects" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className="fixed top-0 left-0 w-full z-50 transition-all duration-500 py-6 bg-transparent"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-16 flex flex-col sm:flex-row items-center justify-between gap-y-4">
        {/* LOGO */}
        <a
          href="#hero"
          className="font-['Montserrat',_sans-serif] font-black text-xl tracking-[0.2em] transition-colors duration-300"
          style={{ color: scrolled ? "#5B1E1E" : "#FFFFFF" }}
        >
          BHANUKA
        </a>

        {/* NAV LINKS (Visible on all sizes, no hamburger menu) */}
        <nav className="flex items-center space-x-5 sm:space-x-8 flex-wrap justify-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[10px] sm:text-xs font-['Roboto_Condensed',_sans-serif] font-bold tracking-widest uppercase hover:opacity-75 transition-opacity duration-300"
              style={{ color: scrolled ? "#5B1E1E" : "#FFFFFF" }}
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;