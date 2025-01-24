import React, { useEffect, useState } from "react";
import "../Cursor/Cursor.scss";

const Cursor = () => {
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    // Track mouse position
    const handleMouseMove = (e) => {
      setPosition({ top: e.clientY, left: e.clientX });
    };

    // Handle hover events
    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    // Handle click and touch events
    const handleMouseDown = () => {
      setIsClicked(true);
      setIsHovering(false); // Reset hover on click
    };
    const handleMouseUp = () => setIsClicked(false);
    const handleTouchStart = () => {
      setIsClicked(true);
      setIsHovering(false); // Reset hover on touch
    };
    const handleTouchEnd = () => setIsClicked(false);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchend", handleTouchEnd);

    // Add hover listeners
    const addHoverListeners = () => {
      const elements = document.querySelectorAll("a, button");
      elements.forEach((el) => {
        el.addEventListener("mouseenter", handleMouseEnter);
        el.addEventListener("mouseleave", handleMouseLeave);
      });
    };

    addHoverListeners();

    // Cleanup listeners on unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);

      const elements = document.querySelectorAll("a, button");
      elements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <div
      className={`custom-cursor ${isHovering ? "hover" : ""} ${
        isClicked ? "click" : ""
      }`}
      style={{ top: `${position.top}px`, left: `${position.left}px` }}
    ></div>
  );
};

export default Cursor;
