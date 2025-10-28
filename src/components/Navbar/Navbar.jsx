import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Github } from "lucide-react";
import { LiaLinkedinIn } from "react-icons/lia";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll and change navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll function
  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skill Set" },
    { id: "work", label: "Project Hub" },
    { id: "experience", label: "Experience" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ];

  const icons = [
    { id: 1, icon: <Github size={18} />, link: "https://github.com/amitkumarpatra99" },
    { id: 2, icon: <LiaLinkedinIn size={18} />, link: "https://www.linkedin.com/in/amitkumarpatra99" },

  ];

  return (

    <nav
      className={`fixed top-0 w-full z-50 transition duration-300 px-[7vw] md:px-[7vw] lg:px-[20vw] ${isScrolled ? "bg-[#08242b] bg-opacity-50 backdrop-blur-md shadow-md" : "bg-transparent"}`}>

      <div className="text-white py-5 flex justify-between items-center">

        <div onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2 ">
          <img
            src="DP.jpg"
            alt="Logo"
            className="h-8 w-8 object-contain drop-shadow-[0_0_8px_#4FB7B3] hover:scale-110 transition-all duration-300 rounded-full"
          />
          <h3 className="text-[18px] font-semibold text-white tracking-wide cursor-default  hover:scale-105 transition-all duration-300">AMIT⚡</h3>
        </div>


        {/* Desktop Menu */}
        <ul
          className="hidden md:flex space-x-8 text-gray-300">
          {menuItems.map((item) => (
            <li key={item.id}
              className={`cursor-pointer hover:text-[#4FB7B3] ${activeSection === item.id ? "text-[#4FB7B3]" : ""} transition-transform transform hover:scale-110`}>
              <button onClick={() => handleMenuItemClick(item.id)}>
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Social Icons */}
        <div className="hidden md:flex space-x-4 ">
          {icons.map((item) => (

            <a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group hover:scale-105 transition-all duration-300">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1a1f2b] text-[#4FB7B3] 
                          transition-all duration-300 group-hover:text-white group-hover:bg-[#242b3b]  ">
                {item.icon}
              </div>

              {/* Neon Ring Glow Effect */}
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
              className="text-3xl text-[#4FB7B3] cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <FiMenu
              className="text-3xl text-[#4FB7B3] cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile Menu Items */}
      {isOpen && (
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-4/5 bg-[#050414] bg-opacity-90 backdrop-filter backdrop-blur-lg z-50 rounded-3xl shadow-lg md:hidden">
          <ul className="flex flex-col items-center space-y-4 py-4 text-gray-300">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={`cursor-pointer hover:text-white ${activeSection === item.id ? "text-[#4FB7B3]" : ""}`}>
                <button onClick={() => handleMenuItemClick(item.id)}>
                  {item.label}
                </button>
              </li>
            ))}

            {/* MOBILE ICON (GITHUB AND LINKEDIN) */}
            <div className="flex space-x-4 ">
              {icons.map((item) => (
                <a
                  key={item.id}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative group hover:scale-105 transition-all duration-300">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1a1f2b] text-[#4FB7B3] 
                          transition-all duration-300 group-hover:text-white group-hover:bg-[#242b3b]  ">
                    {item.icon}
                  </div>

                  {/* Neon Ring Glow Effect */}
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
