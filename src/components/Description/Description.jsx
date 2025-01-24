import React, { useEffect, useRef, useState } from "react";
import Card from "../Card/Card";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Play, Pause, Maximize, Minimize } from "lucide-react";
import "./Description.scss";

const Description = () => {
  const videoRef = useRef(null);
  const videoContainerRef = useRef(null);
  const textRef = useRef(null);
  const buttonRef = useRef(null);
  const cardRef = useRef(null);
  const cursorRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Video container animation
    if (videoContainerRef.current) {
      gsap.fromTo(
        videoContainerRef.current,
        { x: "-100%" },
        {
          x: "0%",
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: videoContainerRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    // Text animation
    if (textRef.current) {
      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    // Button animation
    if (buttonRef.current) {
      gsap.fromTo(
        buttonRef.current,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: buttonRef.current,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    // Card animation
    if (cardRef.current) {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const handleVideoClick = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video
        .play()
        .then(() => {
          setIsPlaying(true);
          gsap.to(videoContainerRef.current, {
            scale: 1.02,
            duration: 0.7,
            ease: "power2.out",
          });
        })
        .catch((error) => {
          console.error("Error playing video:", error);
          setIsPlaying(false);
        });
    } else {
      video.pause();
      setIsPlaying(false);
      gsap.to(videoContainerRef.current, {
        scale: 1,
        duration: 0.7,
        ease: "power2.out",
      });
    }
  };

  const handleFullScreenToggle = () => {
    if (!isFullScreen) {
      if (videoContainerRef.current.requestFullscreen) {
        videoContainerRef.current.requestFullscreen();
      } else if (videoContainerRef.current.webkitRequestFullscreen) {
        videoContainerRef.current.webkitRequestFullscreen();
      } else if (videoContainerRef.current.msRequestFullscreen) {
        videoContainerRef.current.msRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    }
  };

  useEffect(() => {
    const handleFullScreenChange = () => {
      const isFullScreenNow = !!(
        document.fullscreenElement ||
        document.webkitFullscreenElement ||
        document.msFullscreenElement
      );
      setIsFullScreen(isFullScreenNow);

      if (isFullScreenNow) {
        gsap.to(videoRef.current, {
          scale: 1.1,
          duration: 0.7,
          ease: "power2.out",
        });
        videoContainerRef.current?.classList.add("video-fullscreen");
      } else {
        gsap.to(videoRef.current, {
          scale: 1,
          duration: 0.7,
          ease: "power2.out",
        });
        videoContainerRef.current?.classList.remove("video-fullscreen");
      }
    };

    document.addEventListener("fullscreenchange", handleFullScreenChange);
    document.addEventListener("webkitfullscreenchange", handleFullScreenChange);
    document.addEventListener("msfullscreenchange", handleFullScreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullScreenChange);
      document.removeEventListener(
        "webkitfullscreenchange",
        handleFullScreenChange
      );
      document.removeEventListener(
        "msfullscreenchange",
        handleFullScreenChange
      );
    };
  }, []);

  const handleMouseMove = (e) => {
    if (!cursorRef.current) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    gsap.to(cursorRef.current, {
      x,
      y,
      duration: 0.2,
      ease: "power2.out",
    });
  };

  return (
    <div className="inside-description">
      <div
        ref={videoContainerRef}
        className="video-container relative overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onMouseMove={handleMouseMove}
      >
        <video
          ref={videoRef}
          src="/videos/Urban_Opener.mp4"
          className="video-element cursor-none"
          muted
          loop
          poster="/img/Screenshot 2025-01-24 132259.png"
          onClick={handleVideoClick}
        />
        {isHovered && (
          <div ref={cursorRef} className="custom-cursor">
            <div className="cursor-content">
              {isPlaying ? (
                <Pause className="w-12 h-12 text-white" />
              ) : (
                <Play className="w-12 h-12 text-white" />
              )}
            </div>
          </div>
        )}
        <button className="fullscreen-toggle" onClick={handleFullScreenToggle}>
          {isFullScreen ? (
            <Minimize className="w-6 h-6 text-white" />
          ) : (
            <Maximize className="w-6 h-6 text-white" />
          )}
        </button>
      </div>
      <Card ref={cardRef} />
      <button
        ref={buttonRef}
        className="flex items-center gap-2 px-6 py-3 text-black text-lg font-medium rounded transition duration-300"
      >
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
  );
};

export default Description;
