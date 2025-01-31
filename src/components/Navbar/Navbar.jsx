import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const location = useLocation();

  // Handle scroll to show/hide navbar
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.innerWidth > 768) {
        // For desktop view, toggle visibility on scroll
        if (window.scrollY > lastScrollY && window.scrollY > 50) {
          setShowNavbar(false); // Hide navbar when scrolling down
        } else {
          setShowNavbar(true); // Show navbar when scrolling up
        }
        lastScrollY = window.scrollY;
      } else {
        // Always show navbar on mobile
        setShowNavbar(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle scroll to section (only on homepage)
  const handleScrollToSection = (id) => {
    if (location.pathname === "/") {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  return (
    <nav className={`navbar ${showNavbar ? "visible" : ""}`}>
      {/* Navbar Links */}
      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li onClick={() => handleScrollToSection("about")}>
          <Link to="/">About</Link>
        </li>
        <li onClick={() => handleScrollToSection("work")}>
          <Link to="/">Work</Link>
        </li>
        <li onClick={() => handleScrollToSection("contact")}>
          <Link to="/">Contact</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
      </ul>

      {/* Hamburger Menu */}
      <div
        className={`hamburger-menu md:hidden ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span className={menuOpen ? "line open" : "line"}></span>
        <span className={menuOpen ? "line open" : "line"}></span>
        <span className={menuOpen ? "line open" : "line"}></span>
      </div>
    </nav>
  );
};

export default Navbar;
