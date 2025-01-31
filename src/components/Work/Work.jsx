import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import "./Work.scss";

const workItems = [
  {
    id: 1,
    title: "Digital Experience",
    category: "Web Design",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=2070&q=80",
    description: "A digital experience designed to enhance user engagement.",
  },
  {
    id: 2,
    title: "Brand Evolution",
    category: "Branding",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=2070&q=80",
    description: "Revamping brands to reflect the latest trends.",
  },
  {
    id: 3,
    title: "Mobile Innovation",
    category: "App Design",
    image:
      "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?auto=format&fit=crop&w=2070&q=80",
    description: "Innovative app design to improve mobile user experience.",
  },
  {
    id: 4,
    title: "Creative Solutions",
    category: "Development",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=2015&q=80",
    description: "Providing creative solutions to complex problems.",
  },
];

const Work = () => {
  const containerRef = useRef(null);
  const workItemsRef = useRef([]);
  const viewAllButtonRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Create a timeline for all work items
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top center",
        end: "bottom center",
        scrub: 1.5,
      },
    });

    workItemsRef.current.forEach((item, index) => {
      const image = item.querySelector(".work-item-image");
      tl.fromTo(
        image,
        { y: -50, scale: 1.1 },
        { y: 50, scale: 1, ease: "none" },
        index * 0.2
      ).fromTo(
        item,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
        index * 0.2
      );
    });

    // Animation for the "View All Projects" button
    gsap.fromTo(
      viewAllButtonRef.current,
      { x: -50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: viewAllButtonRef.current,
          start: "top bottom-=100",
          end: "top center",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="work-container" ref={containerRef}>
      <div className="work-header">
        <h1 className="text-5xl font-bold mb-4">Our Work</h1>
        <p className="text-xl text-gray-600 max-w-2xl">
          Explore our portfolio of digital experiences that push boundaries and
          create lasting impressions.
        </p>
      </div>

      <div className="work-grid">
        {workItems.map((item, index) => (
          <div
            key={item.id}
            ref={(el) => (workItemsRef.current[index] = el)}
            className="work-item group"
          >
            <div className="work-item-inner">
              <div className="work-item-image-container">
                <img
                  src={item.image}
                  alt={item.title}
                  className="work-item-image"
                  loading="lazy"
                />
              </div>
              <div className="work-item-content">
                <span className="work-item-category">{item.category}</span>
                <h2 className="work-item-title">{item.title}</h2>
                <Link to={`/project/${item.id}`} className="work-item-link">
                  View Project
                  <ArrowUpRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="view-all-button-container" ref={viewAllButtonRef}>
        <Link to="/gallery" className="view-all-button">
          View All Projects
          <ArrowUpRight className="w-5 h-5 ml-2" />
        </Link>
      </div>
    </div>
  );
};

export default Work;
