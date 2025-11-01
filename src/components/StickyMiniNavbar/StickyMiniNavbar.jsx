import React, { useEffect, useState } from "react";

const StickyMiniNavbar = () => {
  const [scrollWidth, setScrollWidth] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollWidth(progress);

      // Show bar only after scrolling a bit
      setVisible(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-[9999] transition-all duration-500 
      ${visible ? "opacity-100" : "opacity-0"}`}
    >
      {/* Progress bar wrapper */}
      <div className="relative w-full bg-transparent h-[6px] group">
        
        {/* Progress bar */}
        <div
          className="h-full rounded-full bg-gradient-to-r from-[#2351A8] via-[#4FB7B3] to-[#2CB67D] shadow-[0_0_12px_#4FB7B3] 
          transition-all duration-150 group-hover:h-[10px]"
          style={{ width: `${scrollWidth}%` }}
        ></div>

        {/* Small indicator circle */}
        <div
          className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-[#4FB7B3] rounded-full shadow-[0_0_8px_#4FB7B3]
          transition-transform duration-150"
          style={{ transform: `translateX(${scrollWidth}%) translateY(-50%)` }}
        ></div>
      </div>

      {/* Text showing scroll percentage */}
      <div className="absolute right-3 top-2 text-[11px] sm:text-xs font-medium text-[#4FB7B3]">
        {Math.round(scrollWidth)}%
      </div>
    </div>
  );
};

export default StickyMiniNavbar;
