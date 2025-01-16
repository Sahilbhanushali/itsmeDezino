import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false); // Close menu on selection (mobile view)
  };

  return (
    <nav className="navbar-container">
      {/* Navbar */}
      <div className="navbar">
        {/* Navbar Links */}
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li onClick={() => handleScrollToSection("about")}>
            <Link to="/">About</Link>
          </li>
          <li onClick={() => handleScrollToSection("work")}>
            <Link to="/work">Work</Link>
          </li>
          <li onClick={() => handleScrollToSection("contact")}>
            <Link to="/contact">Contact</Link>
          </li>
          <li onClick={() => handleScrollToSection("services")}>
            <Link to="/services">Services</Link>
          </li>
        </ul>
      </div>

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
