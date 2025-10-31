

import React, { useEffect, useState } from "react";

const StickyMiniNavbar = () => {
  const [scrollWidth, setScrollWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollWidth(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-[5px] bg-[#0a0a0a] z-[9999]">
      <div
        className="h-full bg-gradient-to-r from-[#2351A8] via-[#4FB7B3] to-[#2CB67D] shadow-[0_0_6px_#4FB7B3] transition-all duration-150"
        style={{ width: `${scrollWidth}%` }}
      ></div>
    </div>
  );
};

export default StickyMiniNavbar;
