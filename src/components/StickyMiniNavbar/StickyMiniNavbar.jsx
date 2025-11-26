import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

const StickyMiniNavbar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      if (totalHeight === 0) return;
      
      const currentScroll = window.scrollY;
      const progress = (currentScroll / totalHeight) * 100;
      
      setScrollProgress(progress);
      setIsVisible(currentScroll > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // SVG Calculations for Bottom Button
  const radius = 24;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <>
      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>

      {/* ==================================================
          PART 1: THE TOP NANO-BAR
         ================================================== */}
      <div className="fixed top-0 left-0 right-0 z-[10000] h-[3px] bg-white/5">
        {/* The Progress Fill */}
        <div 
          className="h-full bg-gradient-to-r from-blue-600 via-teal-400 to-green-400 relative"
          style={{ width: `${scrollProgress}%` }}
        >
          {/* Neon Glow Shadow */}
          <div className="absolute right-0 top-0 bottom-0 w-[100px] shadow-[0_0_20px_#4FB7B3]"></div>
          
          {/* The "Spark" at the tip */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-[10px] h-[10px] bg-white rounded-full shadow-[0_0_10px_#fff,0_0_20px_#4FB7B3]"></div>
          
          {/* Shimmer Effect inside the bar */}
          <div 
            className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-30"
            style={{ animation: "shimmer 2s infinite" }}
          ></div>
        </div>
      </div>


      {/* ==================================================
          PART 2: THE BOTTOM REACTOR BUTTON
         ================================================== */}
      <div
        className={`fixed bottom-8 right-8 z-[9999] transition-all duration-500 transform
          ${isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"}
        `}
      >
        <button
          onClick={scrollToTop}
          className="group relative flex items-center justify-center w-16 h-16 rounded-full bg-[#0a0a0a]/90 backdrop-blur-md shadow-2xl transition-all duration-300 hover:scale-110"
        >
          {/* Decorative Rotating Ring */}
          <div 
            className="absolute inset-1 rounded-full border border-dashed border-teal-500/30 w-[56px] h-[56px] m-auto"
            style={{ animation: "spin-slow 10s linear infinite" }}
          ></div>

          {/* SVG Progress Ring */}
          <svg className="absolute inset-0 w-full h-full -rotate-90 p-1" viewBox="0 0 60 60">
            {/* Track */}
            <circle
              cx="30" cy="30" r={radius}
              fill="transparent"
              stroke="#1f2937"
              strokeWidth="4"
            />
            {/* Progress */}
            <circle
              cx="30" cy="30" r={radius}
              fill="transparent"
              stroke="#14b8a6"
              strokeWidth="4"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              className="transition-all duration-100 ease-out shadow-[0_0_15px_#14b8a6]"
            />
          </svg>

          {/* Center Content (Swaps Text <-> Arrow) */}
          <div className="absolute inset-0 m-auto w-10 h-10 bg-teal-900/20 rounded-full flex items-center justify-center overflow-hidden">
             {/* Text: % */}
             <span className="text-[10px] font-bold text-teal-400 font-mono transition-transform duration-300 group-hover:-translate-y-8 absolute">
                {Math.round(scrollProgress)}
             </span>
             {/* Icon: Arrow */}
             <ArrowUp 
                size={18} 
                className="text-white transition-transform duration-300 translate-y-8 group-hover:translate-y-0 absolute" 
             />
          </div>
        </button>
      </div>
    </>
  );
};

export default StickyMiniNavbar;