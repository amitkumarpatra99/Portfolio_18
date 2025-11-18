import { ArrowUp } from "lucide-react";
import React, { useEffect, useState } from "react";

const StickyMiniNavbar = () => {
  const [scrollWidth, setScrollWidth] = useState(0);
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollWidth(progress);
      setVisible(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <>
      {/* Animations */}
      <style>{`
        @keyframes softGlow {
          0% { filter: drop-shadow(0 0 4px rgba(79,183,179,0.4)); }
          50% { filter: drop-shadow(0 0 10px rgba(79,183,179,0.9)); }
          100% { filter: drop-shadow(0 0 4px rgba(79,183,179,0.4)); }
        }

        @keyframes pulseSoft {
          0%, 100% { transform: scale(1); opacity: 0.95; }
          50% { transform: scale(1.3); opacity: 1; }
        }

        @keyframes glowTrail {
          0% { opacity: .4; transform: scaleX(1); }
          100% { opacity: 0; transform: scaleX(2); }
        }

        .animate-softGlow { animation: softGlow 2s ease-in-out infinite; }
        .animate-pulse-soft { animation: pulseSoft 2.2s ease-in-out infinite; }
        .glowTrail { animation: glowTrail 1s ease-out infinite; }
      `}</style>

      {/* Scroll Bar */}
      <div
        className={`fixed top-2 left-1/2 -translate-x-1/2 z-[9999] transition-all duration-500 
        ${visible ? "opacity-100" : "opacity-0"}
        w-[92%] md:w-[70%]
      `}
      >
        <div className={`relative rounded-full overflow-hidden
          ${hovered ? "h-[6px]" : "h-[4px]"}
          bg-white/10 backdrop-blur-md border border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.35)]
          transition-all duration-300`}>

          {/* Progress Bar */}
          <div
            className="h-full bg-gradient-to-r from-[#2351A8] via-[#4FB7B3] to-[#2CB67D] shadow-[0_0_18px_#4FB7B3] animate-softGlow"
            style={{ width: `${scrollWidth}%` }}
          ></div>

          {/* Glow Trail */}
          <div
            className="absolute h-full w-[100px] bg-[#4FB7B3]/20 glowTrail"
            style={{ left: `calc(${scrollWidth}% - 50px)` }}
          ></div>

          {/* Neon Dot */}
          <div
            className={`absolute top-1/2 -translate-y-1/2 w-[10px] h-[10px] rounded-full 
            shadow-[0_0_10px_#4FB7B3,0_0_25px_#2CB67D] animate-pulse-soft
            ${hovered ? "scale-125" : ""}
            transition-transform duration-200`}
            style={{
              background: hovered ? "#4FFFE5" : "#5ff4da",
              transform: `translateX(${scrollWidth}%) translateY(-50%)`
            }}
          ></div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {visible && (
        <button
          onClick={scrollToTop}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="fixed bottom-6 right-5 md:bottom-8 md:right-8 z-[9999] 
               group flex items-center justify-center
               w-10 h-10 md:w-11 md:h-11 rounded-full 
               bg-[#0A0F1D]/60 backdrop-blur-lg border border-white/10
               hover:bg-[#121a27]/80 transition-all duration-300"
          style={{
            transform: hovered ? "scale(1.12)" : "scale(1)",
          }}
        >
          {/* Icon */}
          <div className="relative flex items-center justify-center w-full h-full">
            <ArrowUp size={16} className="text-[#4FB7B3] z-10" />

            {/* Neon ring  */}
            <div
              className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 blur-md 
                   transition-all duration-500"
              style={{
                background:
                  "conic-gradient(from 0deg, #7f5af0, #2cb67d, #7f5af0)",
              }}
            ></div>
          </div>
        </button>
      )}


    </>
  );
};

export default StickyMiniNavbar;
