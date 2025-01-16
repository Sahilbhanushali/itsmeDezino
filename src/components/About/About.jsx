import React, { useEffect, useRef, useState } from "react";
import Skills from "../Skills/Skills";

const About = () => {
  const [scrollY, setScrollY] = useState(0);
  const headingRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const element = entry.target;
          if (element) {
            if (entry.isIntersecting) {
              element.style.opacity = "1";
              element.style.transform = "translateY(0)";
            } else {
              element.style.opacity = "0";
              element.style.transform = "translateY(20px)";
            }
            element.style.transition = "opacity 0.7s ease, transform 0.7s ease";
          }
        });
      },
      {
        root: null,
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );

    const headingElement = headingRef.current;
    const textElement = textRef.current;

    if (headingElement) observer.observe(headingElement);
    if (textElement) observer.observe(textElement);

    return () => {
      if (headingElement) observer.unobserve(headingElement);
      if (textElement) observer.unobserve(textElement);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#E9E9E7] overflow-x-hidden">
      {/* Header Section */}
      <div className="flex justify-between items-center p-6 bg-[#E9E9E7] text-black animate-fadeIn">
        <div className="text-2xl font-bold">Logo Here</div>
        <button className="px-6 py-2 text-black font-medium hidden md:inline-block">
          Let's Connect
        </button>
      </div>

      {/* Main Section */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 p-8">
        {/* Text Section */}
        <div className="flex-1 text-center md:text-left">
          <h1
            className="text-6xl md:text-8xl text-center text-gray-800 leading-tight animate-fadeIn transition-transform duration-500"
            style={{
              transform: `translateX(${scrollY * 0.2}px)`,
            }}
          >
            <span className="mr-4 relative">Sahil</span>
          </h1>
          <h1
            className="text-6xl md:text-8xl text-center text-gray-800 leading-tight animate-fadeIn transition-transform duration-500"
            style={{
              transform: `translateX(-${scrollY * 0.2}px)`,
            }}
          >
            <span className="ml-4 relative">Bhanushali</span>
          </h1>
        </div>

        {/* Image Section */}
        <div className="flex-1 flex justify-center animate-fadeIn">
          <img
            src="https://plus.unsplash.com/premium_photo-1736520566943-78675ec3f42e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="About"
            className="w-full max-w-sm rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Skills Section */}
      <Skills />

      {/* Description Section */}
      <div
        id="description-section"
        className="flex flex-col items-center gap-6 px-6 md:py-10 text-left"
        style={{
          backgroundColor: "#141017",
          paddingTop: "-10px",
        }}
      >
        {/* Heading */}
        <h2
          ref={headingRef}
          className="text-3xl font-bold text-center md:text-left text-white"
          style={{
            opacity: "0", // Initial state
            transform: "translateY(20px)", // Initial position
          }}
        >
          I'm Andréw
        </h2>

        {/* Description Text */}
        <p
          ref={textRef}
          className="text-lg max-w-3xl text-center text-white md:text-left leading-relaxed"
          style={{
            opacity: "0", // Initial state
            transform: "translateY(20px)", // Initial position
          }}
        >
          I'm Andréw Kaplan, an independent digital designer and front-end
          developer. Passionate about crafting unforgettable experiences and
          providing companies with innovative, user-centric solutions for nearly
          a decade...
        </p>

        {/* Get in Touch Button */}
        <button className="flex items-center gap-2 px-6 py-3 bg-blue-500 text-white text-lg font-medium rounded hover:bg-blue-600 transition duration-300">
          <span>Get in Touch</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default About;
