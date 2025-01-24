import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Work from "./components/Work/Work";
import Contact from "./components/Contact/Contact";
import Cursor from "./components/Cursor/Cursor";
import "./App.scss";
import Projectgallery from "./components/Project-gallery/Projectgallery";
import Projectdetails from "./components/Project-details/Projectdetails";

const App = () => {
  return (
    <div className=" overflow-hidden">
      <Cursor />
      <Router basename="/dezino-portfolio/">
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
        <Routes>
          <Route path="/project/:id" element={<Projectdetails />} />
          <Route path="/gallery" element={<Projectgallery />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
