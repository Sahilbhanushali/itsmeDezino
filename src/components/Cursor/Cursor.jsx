import React, { useEffect, useState } from "react";
import "../Cursor/Cursor.scss";

const Cursor = () => {
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Track mouse position
    const handleMouseMove = (e) => {
      setPosition({
        top: e.clientY,
        left: e.clientX,
      });
    };

    // Handle hover events for all anchor tags and buttons
    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    window.addEventListener("mousemove", handleMouseMove);

    // Attach hover listeners dynamically to anchor tags and buttons
    const addHoverListeners = () => {
      const linksAndButtons = document.querySelectorAll("a, button");
      linksAndButtons.forEach((el) => {
        el.addEventListener("mouseenter", handleMouseEnter);
        el.addEventListener("mouseleave", handleMouseLeave);
      });
    };

    addHoverListeners();

    // Cleanup listeners on unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);

      const linksAndButtons = document.querySelectorAll("a, button");
      linksAndButtons.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <div
      className={`custom-cursor ${isHovering ? "hover" : ""}`}
      style={{
        top: `${position.top}px`,
        left: `${position.left}px`,
      }}
    ></div>
  );
};

export default Cursor;
