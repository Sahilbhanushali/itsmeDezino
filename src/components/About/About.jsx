import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Skills from "../Skills/Skills";
import "../About/About.scss";
import Description from "../Description/Description";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const [scrollY, setScrollY] = useState(0);
  // Ref for the card animation

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#E9E9E7] overflow-x-hidden">
      {/* Header Section */}
      <div className="flex justify-between items-center p-6 bg-[#E9E9E7] text-black animate-fadeIn">
        <div>
          <img
            src="/img/Its me Dezino logo-01.png"
            alt="logo"
            className="logo w-10 md:w-20 lg:w-15 h-auto"
          />
        </div>
        <button className="flex items-center gap-2 px-11 py-2 text-black font-medium hidden md:inline-block">
          Let's Connect
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5 transform rotate-45 ml-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 15l7-7 7 7"
            />
          </svg>
        </button>
      </div>

      {/* Main Section */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 p-8">
        {/* Text Section */}
        <div className="flex-1 text-center md:text-left">
          <h1
            className="text-5xl md:text-8xl text-center text-gray-800 leading-tight animate-fadeIn transition-transform duration-500"
            style={{
              transform: `translateX(${scrollY * 0.2}px)`,
            }}
          >
            <span className="mr-4 relative">Darshan</span>
          </h1>
          <h1
            className="text-5xl md:text-8xl text-center text-gray-800 leading-tight animate-fadeIn transition-transform duration-500"
            style={{
              transform: `translateX(-${scrollY * 0.1}px)`,
            }}
          >
            <span className="mr-4 relative">Sachin</span>
          </h1>
        </div>

        {/* Image Section */}
        <div className="flex-1 flex justify-center animate-fadeIn">
          <img
            src="\img\Its me Dezino logo-01.png"
            alt="logo"
            className="w-full max-w-sm"
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
          paddingTop: "-10px",
        }}
      >
        <Description />
      </div>
    </div>
  );
};

export default About;
