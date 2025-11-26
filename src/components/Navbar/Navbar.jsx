import React, { useState, useEffect, useCallback } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";

const menuItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "work", label: "Projects" },
  { id: "Journey", label: "Journey" },
];

const icons = [
  {
    id: 1,
    icon: <FaGithub size={20} />,
    link: "https://github.com/amitkumarpatra99",
    color:
      "hover:text-gray-400 hover:border-gray-400 hover:shadow-gray-400/30",
  },
  {
    id: 2,
    icon: <FaLinkedin size={20} />,
    link: "https://www.linkedin.com/in/amitkumarpatra99",
    color: "hover:text-blue-500 hover:border-blue-500 hover:shadow-blue-500/30",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -40% 0px" }
    );

    menuItems.forEach(item => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleMenuItemClick = useCallback(sectionId => {
    setIsOpen(false);
    const section = document.getElementById(sectionId);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? "backdrop-blur-xl bg-[#0A0F1D]/60" : "bg-transparent"
      }`}
    >
      <div className="max-w-screen-xl mx-auto flex justify-between items-center h-20 px-[7vw] text-white">
        <motion.div
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-3 cursor-pointer hover:scale-[1.05] transition-all duration-300"
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <img
            src="DP.jpg"
            alt="Logo"
            className="h-10 w-10 rounded-full object-cover shadow-[0_0_10px_#4FB7B3]"
          />
        </motion.div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-10 text-gray-300 font-medium">
          {menuItems.map(item => (
            <li
              key={item.id}
              className={`relative transition-all duration-200 hover:text-white ${
                activeSection === item.id ? "text-[#4FB7B3]" : ""
              }`}
            >
              {activeSection === item.id && (
                <motion.span
                  layoutId="underline"
                  className="absolute -bottom-1 left-0 w-full h-[2px] 
                  bg-gradient-to-r from-[#2351A8] via-[#4FB7B3] to-[#2CB67D] rounded-full"
                />
              )}
              <button
                onClick={() => handleMenuItemClick(item.id)}
                className="hover:scale-[1.05] transition-transform duration-300"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* ICONS */}
        <div className="hidden md:flex items-center gap-4">
          {icons.map(social => (
            <a
              key={social.id}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-gray-400 transition-all duration-300 hover:scale-110 hover:shadow-lg backdrop-blur-md ${social.color} hover:bg-white/10`}
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <motion.div
          className="md:hidden"
          initial={{ opacity: 0, rotate: -90 }}
          animate={{ opacity: 1, rotate: 0 }}
        >
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
        </motion.div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="drawer"
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ type: "spring", stiffness: 110, damping: 18 }}
            className="fixed top-0 right-0 h-screen w-[50%] sm:w-[60%] bg-[#0A0F1D]/90 backdrop-blur-md shadow-xl 
            border-l border-[#4FB7B3]/30 text-gray-300 font-medium flex flex-col py-16 px-8 z-[100]"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 text-[#4FB7B3] text-3xl hover:text-white transition-all duration-300 hover:scale-110"
            >
              <FiX />
            </button>

            <ul className="flex flex-col items-center gap-6 text-lg">
              {menuItems.map(item => (
                <motion.li
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`cursor-pointer transition-all duration-300 ${
                    activeSection === item.id
                      ? "text-[#4FB7B3] scale-105"
                      : "hover:text-white hover:scale-105"
                  }`}
                >
                  <button onClick={() => handleMenuItemClick(item.id)}>
                    {item.label}
                  </button>
                </motion.li>
              ))}
            </ul>

            {/* MOBILE SOCIAL ICONS */}
            <div className="flex justify-center gap-6 mt-auto mb-6">
              {icons.map(social => (
                <a
                  key={social.id}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:scale-110 transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
