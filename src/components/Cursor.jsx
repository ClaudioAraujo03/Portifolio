import React, { useState, useEffect } from "react";
import "../styles/components/Cursor.css";

const Cursor = ({ enableTrail }) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState([]);
  const [isExploding, setIsExploding] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setCursorPosition({ x: event.clientX, y: event.clientY });

      if (enableTrail) {
        const newParticle = {
          id: Date.now() + Math.random(),
          left: event.clientX,
          top: event.clientY,
        };
        setParticles((prevParticles) => [...prevParticles, newParticle]);

        setTimeout(() => {
          setParticles((prevParticles) =>
            prevParticles.filter((particle) => particle.id !== newParticle.id)
          );
        }, 1000);
      }

      if (isExploding) {
        setIsExploding(false);
      }
    };

    const handleMouseLeave = () => {
      setIsExploding(true);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [enableTrail, isExploding]);

  return (
    <div>
      <div
        className={`cursor ${isExploding ? "cursor-explode" : ""}`}
        style={{
          left: `${cursorPosition.x}px`,
          top: `${cursorPosition.y}px`,
        }}
      ></div>
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="particle"
          style={{
            left: `${particle.left}px`,
            top: `${particle.top}px`,
          }}
        ></div>
      ))}
    </div>
  );
};

export default Cursor;
