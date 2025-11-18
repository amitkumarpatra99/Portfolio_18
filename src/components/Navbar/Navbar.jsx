import React, { useState, useEffect, useCallback } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";
import { Coffee } from "lucide-react";

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
    icon: <FaGithub size={18} />,
    link: "https://github.com/amitkumarpatra99",
  },
  {
    id: 2,
    icon: <Coffee size={18} />,
    link: "https://warmcup.vercel.app/",
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
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -40% 0px" }
    );

    menuItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Smooth scroll
  const handleMenuItemClick = useCallback((sectionId) => {
    setIsOpen(false);
    const section = document.getElementById(sectionId);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? "backdrop-blur-xl bg-[#0A0F1D]/60" : "bg-transparent"
        }`}
    >
      <div className="max-w-screen-xl mx-auto flex justify-between items-center h-20 px-[7vw] text-white">
        {/* Logo */}
        <motion.div
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-3 cursor-pointer hover:scale-[1.05] transition-all duration-300"
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src="DP.jpg"
            alt="Logo"
            className="h-10 w-10 rounded-full object-cover shadow-[0_0_10px_#4FB7B3]"
          />
        </motion.div>

        {/* Desktop Navabr AMIT */}
        <ul className="hidden md:flex space-x-10 text-gray-300 font-medium">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`relative transition-all duration-200 hover:text-white ${activeSection === item.id ? "text-[#4FB7B3]" : ""
                }`}
            >
              {activeSection === item.id && (
                <motion.span
                  layoutId="underline"
                  className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-[#2351A8] via-[#4FB7B3] to-[#2CB67D] rounded-full"
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

        {/* Social Icons */}
        <div className="hidden md:flex items-center gap-4">
          {icons.map((item) => (
            <a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group"
            >
              <div
                className="w-9 h-9 flex items-center justify-center rounded-full bg-teal-950/55 text-[#4FB7B3] 
                transition-all duration-300 hover:text-[#4FB7B3] hover:scale-110"
              >
                {item.icon}
              </div>
              <motion.div
                className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 blur-md transition-all duration-500"
                style={{
                  background:
                    "conic-gradient(from 0deg, #7f5af0, #2cb67d, #7f5af0)",
                }}
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 6,
                  ease: "linear",
                }}
              ></motion.div>
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <motion.div
          className="md:hidden"
          initial={{ opacity: 0, rotate: -90 }}
          animate={{ opacity: 1, rotate: 0 }}
          transition={{ duration: 0.5 }}
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

      {/* Animated Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              key="drawer"
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ type: "spring", stiffness: 100, damping: 18 }}
              className="fixed top-0 right-0 h-screen w-[50%] sm:w-[60%] bg-[rgba(10,15,25,0.9)] backdrop-blur-md 
              shadow-[0_0_25px_rgba(79,183,179,0.25)] border-l border-[#4FB7B3]/30 text-gray-300 font-medium
              flex flex-col py-10 px-8 z-[60]">

              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-6 right-6 text-[#4FB7B3] text-3xl hover:text-white transition-all duration-300 hover:scale-110">
                <FiX />
              </button>

              <ul className="flex flex-col items-center gap-6 text-lg mt-16">
                {menuItems.map((item) => (
                  <motion.li
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className={`cursor-pointer transition-all duration-300 tracking-wide ${activeSection === item.id
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

              {/*  Mobile Social Icons */}
              {/* <div className="flex gap-6 mt-auto justify-center mb-8">
                {icons.map((item) => (
                  <a
                    key={item.id}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative group">

                    <div
                      className="w-10 h-10 flex items-center justify-center rounded-full bg-[#111926] text-gray-300 
                      transition-all duration-300 group-hover:text-[#4FB7B3] group-hover:scale-110">
                      {item.icon}
                    </div>

                    <div
                      className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 blur-md transition-all duration-500"
                      style={{
                        background:
                          "conic-gradient(from 0deg, #7f5af0, #2cb67d, #7f5af0)",
                      }}></div>
                  </a>
                ))}
              </div> */}

            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
