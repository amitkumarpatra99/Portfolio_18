import React, { useState, useEffect, useCallback } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

// Define the menu items and their corresponding IDs (matching your section IDs)
const menuItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skill Set" },
  { id: "work", label: "Project Hub" },
  { id: "MiniNavigation", label: "My Journey" },
];

const icons = [
  { id: 1, icon: <FaGithub size={18} />, link: "https://github.com/amitkumarpatra99" },
  { id: 2, icon: <FaLinkedin size={18} />, link: "https://www.linkedin.com/in/amitkumarpatra99" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  // --- 1. Dynamic Background and Active Section on Scroll (The Modern Improvement) ---

  // Detect scroll for background change
  useEffect(() => {
    const handleScroll = () => {
      // Background changes after 50px scroll
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Intersection Observer to detect the currently visible section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // If the section is visible and at least 50% in view (or a custom threshold)
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null, // relative to the viewport
        rootMargin: "-40% 0px -40% 0px", // A smaller margin makes it more sensitive 
        // Note: You must ensure your sections (about, skills, etc.) have an id matching the menuItems id
      }
    );

    // Observe all sections defined in menuItems
    menuItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []); // Run once on mount

  // --- 2. Smooth Scroll Handler ---

  const handleMenuItemClick = useCallback((sectionId) => {
    // Only set active state on click if you want to override the observer temporarily
    // setActiveSection(sectionId); 
    setIsOpen(false);

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }, []);


  // --- 3. Render Component ---
  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 px-[7vw] md:px-[7vw] lg:px-[20vw]
      ${isScrolled
          ? "bg-[#08242b] bg-opacity-80 backdrop-blur-xl shadow-2xl"
          : "bg-[#08242b] bg-opacity-30 backdrop-blur-sm"}
      `}
    >
      <div className="text-white h-20 flex justify-between items-center max-w-screen-xl mx-auto">

        {/* Logo/Brand */}
        <div onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2 cursor-pointer transition  duration-300 hover:scale-[1.02]">
          <img
            src="DP.jpg" // Make sure this image path is correct
            alt="Logo"
            className="h-9 w-9 object-cover shadow-lg drop-shadow-[0_0_8px_#4FB7B3] rounded-full"
          />
          {/* <h3 className="text-s font-extrabold text-white tracking-wider">AMIT<span className="text-[#4FB7B3]">⚡</span></h3> */}
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-10 text-gray-300 font-medium">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`relative cursor-pointer transition-all duration-200 
                ${activeSection === item.id
                  ? "text-[#4FB7B3] font-semibold"
                  : "hover:text-white"}`
              }
            >
              {/* Active Underline Effect */}
              {activeSection === item.id && (
                <span className="absolute bottom-[-5px] left-0 w-full h-[2px] bg-[#4FB7B3] rounded-full transition-all duration-300"></span>
              )}

              <button onClick={() => handleMenuItemClick(item.id)}>
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Social Icons (Desktop) */}
        <div className="hidden md:flex space-x-4">
          {icons.map((item) => (
            <a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative transition-all duration-300 hover:scale-105"
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1a1f2b] text-[#fff] 
                transition-all duration-300 group-hover:text-white  group-hover:shadow-lg">
                {item.icon}
              </div>
              {/* Neon Ring Glow Effect (Refined) */}
              <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 blur-md 
                          transition-all duration-500"
                style={{ background: "conic-gradient(from 0deg, #7f5af0, #2cb67d, #7f5af0)" }}></div>
            </a>
          ))}
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          {isOpen ? (
            <FiX
              className="text-3xl text-red-500 cursor-pointer hover:rotate-90 transition-transform duration-300"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <FiMenu
              className="text-3xl text-[#4FB7B3] cursor-pointer hover:scale-110 transition-transform duration-300"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-[70%] md:w-4/5 bg-[#050414] bg-opacity-85 backdrop-blur-lg z-40 rounded-xl shadow-2xl p-6 md:hidden">
          <ul className="flex flex-col items-center space-y-2 text-gray-300 font-medium">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={`cursor-pointer text-lg p-2 transition-all duration-300 
                  ${activeSection === item.id
                    ? "text-[#4FB7B3] font-bold border-b-2 border-teal-700"
                    : "hover:text-white hover:border-b-2 hover:border-gray-500"}`
                }
              >
                <button onClick={() => handleMenuItemClick(item.id)}>
                  {item.label}
                </button>
              </li>
            ))}

            {/* MOBILE ICON (GITHUB AND LINKEDIN) - Separated by a divider */}

            <div className="w-16 h-[3px] rounded-full mx-auto mt-3 mb-2  bg-gradient-to-r from-[#2351A8] via-[#4FB7B3] to-[#2CB67D] shadow-[0_0_10px_#4FB7B3]"></div>     

            <div className="flex space-x-6 pb-2 ">
              {icons.map((item) => (
                <a
                  key={item.id}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative transition-all duration-300 hover:scale-110"
                >
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1a1f2b] text-[#fff] 
                    transition-all duration-300 group-hover:text-white group-hover:bg-[#4FB7B3] group-hover:shadow-lg">
                    {item.icon}
                  </div>
                   <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 blur-md 
                          transition-all duration-500"
                style={{ background: "conic-gradient(from 0deg, #7f5af0, #2cb67d, #7f5af0)" }}></div>
            </a>
              ))}
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;