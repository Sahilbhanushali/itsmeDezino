import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const skillsRef = useRef([]);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    // Add resize event listener to update screen size dynamically
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const skills = skillsRef.current;

    skills.forEach((skill, index) => {
      if (skill) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: skill,
            start: "top 80%",
            end: "top 30%",
            scrub: 0.6,
            markers: false,
          },
        });

        // Responsive font size logic
        const baseFontSize = isSmallScreen ? "1.5rem" : "3rem";
        const targetFontSize = isSmallScreen ? "3rem" : "6rem";

        // Responsive animation offsets
        const offset = isSmallScreen ? 200 : window.innerWidth / 2;

        // Define animation with restored styles
        tl.fromTo(
          skill,
          {
            opacity: 0,
            fontSize: baseFontSize,
            color: "white",
            y: index === 0 ? -100 : 0, // Move up for the first element
            x: `${
              index === 2 || index === 4
                ? -offset
                : index === 3 || index === 5
                ? offset
                : 0
            }`,
            rotate: index === 1 ? -180 : 0, // Rotate for the second element
            filter: "blur(10px)",
          },
          {
            opacity: 1,
            fontSize: targetFontSize,
            color: index % 2 === 0 ? "gray" : "lightgray", // Alternate colors
            y: 0,
            x: 0,
            rotate: index === 1 ? 90 : 0, // Smooth rotation for the second element
            filter: "blur(0px)",
            duration: 1.2,
            ease: "power3.out",
          }
        );
      }
    });

    // Cleanup on component unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [isSmallScreen]);

  return (
    <div
      className="relative text-center py-10 min-h-screen"
      style={{ backgroundColor: "#141017" }}
    >
      <div className="space-y-10 relative z-10">
        {["DESIGNER", "+", "WEB", "CREATIVE", "MARKETING", "STRATEGY"].map(
          (skill, index) => (
            <div
              key={index}
              ref={(el) => (skillsRef.current[index] = el)}
              className="text-gray-300"
            >
              {skill}
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Skills;
