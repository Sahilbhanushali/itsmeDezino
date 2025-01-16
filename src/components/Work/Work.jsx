import React, { useEffect } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "../Work/Work.scss";

const Work = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const getRatio = (el) =>
      window.innerHeight / (window.innerHeight + el.offsetHeight);

    gsap.utils.toArray("section").forEach((section, i) => {
      const bg = section.querySelector(".bg");

      // Set random images for backgrounds
      bg.style.backgroundImage = `url(https://picsum.photos/1600/800?random=${i})`;

      // Apply parallax effect
      gsap.fromTo(
        bg,
        {
          backgroundPosition: () =>
            i ? `50% ${-window.innerHeight * getRatio(section)}px` : "50% 0px",
        },
        {
          backgroundPosition: () =>
            `50% ${window.innerHeight * (1 - getRatio(section))}px`,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: () => (i ? "top bottom" : "top top"),
            end: "bottom top",
            scrub: true,
            invalidateOnRefresh: true, // to make it responsive
          },
        }
      );
    });
  }, []);

  return (
    <>
      <section>
        <div className="bg"></div>
        <h1>Simple parallax sections</h1>
      </section>
      <section>
        <div className="bg"></div>
        <h1>Hey look, a title</h1>
      </section>
      <section>
        <div className="bg"></div>
        <h1>They just keep coming</h1>
      </section>
      <section>
        <div className="bg"></div>
        <h1>So smooth though</h1>
      </section>
      <section>
        <div className="bg"></div>
        <h1>Nice, right?</h1>
      </section>
    </>
  );
};

export default Work;
