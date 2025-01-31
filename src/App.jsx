import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Work from "./components/Work/Work";
import Contact from "./components/Contact/Contact";
import Cursor from "./components/Cursor/Cursor";
import "./App.scss";
import ProjectGallery from "./components/Project-gallery/Projectgallery";
import ProjectDetails from "./components/Project-details/Projectdetails";
import ContactLink from "./components/ContactLink/ContactLink";
import NotFound from "./components/NotFound";

const AppContent = () => {
  const location = useLocation();

  // Fix Navbar routing issue & smooth scrolling
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // SEO Meta Tags
  const getPageTitle = () => {
    if (location.pathname === "/gallery")
      return "Project Gallery - Dezino Digital Agency";
    if (location.pathname.startsWith("/project/"))
      return "Project Details - Dezino Digital Agency";
    return "Dezino Digital Agency - Web & Creative Design";
  };

  const getPageDescription = () => {
    if (location.pathname === "/gallery")
      return "Explore our project gallery showcasing our best design and development projects.";
    if (location.pathname.startsWith("/project/"))
      return "Detailed view of our creative projects and services.";
    return "Dezino Digital Agency specializes in brand design, web development, performance marketing, social media marketing, event marketing, AR/VR development, and more.";
  };

  return (
    <div className="overflow-hidden">
      <HelmetProvider>
        <title>{getPageTitle()}</title>
        <meta name="description" content={getPageDescription()} />
        <meta
          name="keywords"
          content="digital marketing, brand design, web development, performance marketing, social media marketing, event marketing, AR VR development, 3D development, campaign design, marketing strategy"
        />
        <meta name="author" content="Dezino Digital Agency" />
        <meta property="og:title" content={getPageTitle()} />
        <meta property="og:description" content={getPageDescription()} />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`https://yourwebsite.com${location.pathname}`}
        />
        <meta
          property="og:image"
          content="https://yourwebsite.com/og-image.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={getPageTitle()} />
        <meta name="twitter:description" content={getPageDescription()} />
        <meta
          name="twitter:image"
          content="https://yourwebsite.com/twitter-image.jpg"
        />
      </HelmetProvider>

      <Cursor />
      <Navbar />

      {/* Render sections only on the main page */}
      {location.pathname === "/" && (
        <>
          <div id="about">
            <About />
          </div>
          <div id="work">
            <Work />
          </div>
          <div id="contact">
            <Contact />
          </div>
        </>
      )}

      <Routes>
        <Route path="/gallery" element={<ProjectGallery />} />
        <Route path="/project/:id" element={<ProjectDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

const App = () => {
  return (
    <Router basename="/itsmeDezino/">
      <React.StrictMode>
        <AppContent />
      </React.StrictMode>
    </Router>
  );
};

export default App;
