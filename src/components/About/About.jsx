import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Skills from "../Skills/Skills";
import "../About/About.scss";
import Description from "../Description/Description";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const letters = textRef.current.querySelectorAll("span");

    gsap.fromTo(
      letters,
      { opacity: 0, y: 100, rotate: -20, scale: 0.5 },
      {
        opacity: 1,
        y: 0,
        rotate: 0,
        scale: 1,
        duration: 1,
        stagger: 0.1,
        ease: "elastic.out(1, 0.5)",
        delay: 2.0,
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <div className="min-h-screen bg-[#E9E9E7] overflow-x-hidden">
      {/* Header Section */}
      <div className="flex justify-between items-center p-6 bg-[#E9E9E7] text-black animate-fadeIn">
        <div>
          <img
            src={`${import.meta.env.BASE_URL}img/Its me Dezino logo-01.png`}
            alt="logo"
            className="logo w-10 md:w-20 lg:w-15 h-auto"
          />
        </div>
      </div>

      {/* Main Section */}
      <div
        className="flex flex-col md:flex-row items-center justify-center gap-8 p-8"
        style={{ height: "78vh" }}
      >
        {/* Text Section */}
        <div className="flex-1 text-center md:text-left">
          <h1
            ref={textRef}
            className="text-5xl md:text-7xl text-center leading-tight font-custom text-gray-800"
          >
            <span className="inline-block">W</span>
            <span className="inline-block">e</span>
            <span className="inline-block">&nbsp;</span>
            <span className="inline-block">A</span>
            <span className="inline-block">r</span>
            <span className="inline-block">e</span>
            <span className="inline-block">&nbsp;</span>
            <span className="inline-block text-[#FF5733]">F</span>
            <span className="inline-block text-[#FF5733]">o</span>
            <span className="inline-block text-[#FF5733]">n</span>
            <span className="inline-block text-[#FF5733]">t</span>
            <span className="inline-block">&nbsp;</span>
            <span className="inline-block">o</span>
            <span className="inline-block">f</span>
            <span className="inline-block">&nbsp;</span>
            <span className="inline-block">Y</span>
            <span className="inline-block">o</span>
            <span className="inline-block">u</span>
          </h1>
        </div>

        {/* Image Section */}
        <div className="flex-1 justify-center animate-fadeIn">
          <video
            src={`${
              import.meta.env.BASE_URL
            }/videos/It,s me Logo Animation_2.mp4`}
            autoPlay
            loop
            muted
          />
        </div>
      </div>
      {/* Skills Section */}
      <Skills />
      {/* Description Section */}
      <div
        id="description-section"
        className="flex flex-col items-center gap-6 px-6 md:py-10 text-left"
      >
        <Description />
      </div>
    </div>
  );
};

export default About;
