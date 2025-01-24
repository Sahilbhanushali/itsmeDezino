import React from "react";
import styled from "styled-components";

const Card = React.forwardRef((props, ref) => {
  return (
    <StyledWrapper ref={ref}>
      <div className="card">
        <div className="content" style={{ marginLeft: "20px" }}>
          <p>
            An independent digital designer and front-end developer. Passionate
            about crafting unforgettable experiences and providing companies
            with innovative, user-centric solutions for nearly a decade.
          </p>
        </div>
        <div className="animation">
          {/* Video Element */}
          <video
            src="/videos/Animation - 1737616925342.webm"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
      </div>
    </StyledWrapper>
  );
});

const StyledWrapper = styled.div`
  .card {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 600px;
    height: auto;
    border-radius: 8px;
    padding: 16px;
    gap: 12px;
    position: relative;
    left: -20px; /* Moves the card slightly to the left */
    transition: transform 0.3s ease;

    /* Responsive for smaller screens */
    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
      left: 0;
      padding: 12px;
    }
  }

  .content {
    flex: 1;
    color: white;
    font-size: 14px;
    line-height: 1.5;
    text-align: left;

    p {
      margin: 0;
    }

    /* Highlight the last line */
    p:last-child {
      color: black;
      font-weight: 600;
    }
  }

  .animation {
    flex-shrink: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: transparent;
    border-radius: 8px;
    overflow: hidden;

    video {
      width: 150px;
      height: 150px;
    }

    @media (max-width: 768px) {
      margin-top: 12px;

      video {
        width: 120px;
        height: 120px;
      }
    }
  }

  .card::after {
    content: "";
    z-index: -1;
    position: absolute;
    inset: 0;
    transform: translate3d(0, 0, 0) scale(0.95);
    filter: blur(20px);
  }
`;

export default Card;
