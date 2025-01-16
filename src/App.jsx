import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Work from "./components/Work/Work";
import Contact from "./components/Contact/Contact";
import Cursor from "./components/Cursor/Cursor";
import "./App.scss";
import Projectgallery from "./components/Project-gallery/Projectgallery";

const App = () => {
  return (
    <div>
      <Cursor />
      <Router>
        <Navbar />
        <div id="about">
          <About />
        </div>
        <div id="work">
          <Work />
        </div>
        <div id="contact">
          <Contact />
        </div>
        <div id="projects">
          <Projectgallery />
        </div>
        <Routes>
          <Route path="/projects/:id" element={<Projectgallery />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
