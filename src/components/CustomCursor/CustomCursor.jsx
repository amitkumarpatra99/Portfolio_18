import React, { useEffect } from "react";
import { gsap } from "gsap";

const CustomCursor = () => {
  useEffect(() => {
    const cursor = document.createElement("div");
    cursor.className = "magic-cursor";
    document.body.appendChild(cursor);

    const moveCursor = (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.15,
        ease: "power3.out",
      });

      // Sparks
      for (let i = 0; i < 4; i++) createSpark(e.clientX, e.clientY);
    };

    const createSpark = (x, y) => {
      const spark = document.createElement("span");
      spark.className = "cursor-spark";
      spark.style.left = `${x}px`;
      spark.style.top = `${y}px`;
      document.body.appendChild(spark);

      gsap.to(spark, {
        x: (Math.random() - 0.5) * 150,
        y: (Math.random() - 0.5) * 150,
        scale: 0,
        duration: 0.8,
        opacity: 0,
        ease: "power2.out",
        onComplete: () => spark.remove()
      });
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      cursor.remove();
    };
  }, []);

  return (
    <style>{`
      body {
        cursor: none !important;
      }

      .magic-cursor {
        width: 14px;
        height: 14px;
        border-radius: 50%;
        position: fixed;
        top: 0;
        left: 0;
        pointer-events: none;
        background: rgba(0, 255, 255, 0.9);
        box-shadow: 
          0 0 12px rgba(0,255,255,0.8),
          0 0 25px rgba(0,150,255,0.7);
        transform: translate(-50%, -50%);
        mix-blend-mode: screen;
        z-index: 999999;
      }

      .cursor-spark {
        position: fixed;
        width: 6px;
        height: 6px;
        background: white;
        border-radius: 50%;
        pointer-events: none;
        box-shadow: 
          0 0 8px rgba(0,255,255,0.8),
          0 0 18px rgba(0,120,255,0.6);
        z-index: 999998;
      }

      button, a, input, textarea, .modal, .toggle-menu {
        cursor: pointer !important; /* Ensures buttons still click */
      }
    `}</style>
  );
};

export default CustomCursor;
