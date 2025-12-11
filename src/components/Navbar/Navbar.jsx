import React, { useState, useEffect, useCallback } from "react";
import { FiMenu, FiX, FiSun, FiMoon } from "react-icons/fi";
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa6";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useMotionTemplate,
} from "framer-motion";
import { useTheme } from "../../context/ThemeContext";

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "Journey", label: "Journey" },
];

export default function NavbarPremium() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("home");
  const { theme, toggleTheme } = useTheme();

  // Spotlight mouse tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = ({ currentTarget, clientX, clientY }) => {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };

  // Track active section on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => entry.isIntersecting && setActiveTab(entry.target.id));
      },
      { threshold: 0.38 }
    );

    NAV_ITEMS.forEach(item => {
      const section = document.getElementById(item.id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  // Smooth scroll
  const scrollToSection = useCallback((id) => {
    setIsOpen(false);

    const el = document.getElementById(id);
    if (!el) return;

    const offset = el.getBoundingClientRect().top + window.scrollY - 85;
    window.scrollTo({ top: offset, behavior: "smooth" });
  }, []);

  return (
    <>
      {/* Floating Navbar Wrapper */}
      <div className="fixed top-4 left-1/2 -translate-x-1/2 w-[94%] md:w-[90%] max-w-5xl z-50 pointer-events-none ">
        <motion.nav
          onMouseMove={handleMouseMove}
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 180, damping: 20 }}
          className="
            group pointer-events-auto relative 
            py-3 px-5 md:px-7
            rounded-full
            backdrop-blur-2xl
            bg-white/70 dark:bg-black/20
            border border-black/5 dark:border-white/20
            shadow-xl shadow-black/5 dark:shadow-black/10
            flex items-center justify-between
            overflow-hidden
            transition-colors duration-300
          ">

          {/* Spotlight Glow */}
          <motion.div
            className="absolute inset-0 rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              background: useMotionTemplate`
                radial-gradient(
                  500px circle at ${mouseX}px ${mouseY}px,
                  ${theme === 'light' ? 'rgba(0,0,0,0.05)' : 'rgba(255,255,255,0.12)'},
                  transparent 75%
                )
              `,
            }}
          />

          {/* Logo */}
          <div
            className="flex items-center gap-3 cursor-pointer relative z-20"
            onClick={() => scrollToSection("home")}
          >
            <div className="h-10 w-10 rounded-full border border-black/10 dark:border-white/20 overflow-hidden shadow-lg">
              <img src="DP.jpg" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-1 bg-black/5 dark:bg-white/5 rounded-full px-2 py-[6px] border border-black/5 dark:border-white/10 relative z-20 transition-colors duration-300">
            {NAV_ITEMS.map((item) => (
              <li key={item.id} className="relative">
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`
                    px-4 py-1.5 text-sm font-medium rounded-full transition-all 
                    ${activeTab === item.id
                      ? "text-white dark:text-black"
                      : "text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white"}
                  `}
                >
                  {activeTab === item.id && (
                    <motion.div
                      layoutId="active-pill"
                      className="absolute inset-0 bg-black dark:bg-white/90 rounded-full"
                      transition={{ type: "spring", stiffness: 250, damping: 28 }}
                    />
                  )}
                  <span className="relative z-20">{item.label}</span>
                </button>
              </li>
            ))}
          </ul>

          {/* Desktop Icons & Contact */}
          <div className="hidden md:flex items-center gap-5 relative z-20 ml-4">

            {/* Social Icons Group */}
            <div className="flex items-center gap-3 pr-5 border-r border-black/10 dark:border-white/20">

              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="
                  w-10 h-10 flex items-center justify-center 
                  rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-black/70 dark:text-gray-400 
                  transition-all duration-300 hover:scale-110 hover:shadow-lg backdrop-blur-md 
                  hover:bg-black/10 dark:hover:bg-white/10 hover:text-black dark:hover:text-gray-300
                "
              >
                {theme === "dark" ? <FiSun size={18} /> : <FiMoon size={18} />}
              </button>

              {/* GitHub */}
              <a
                href="https://github.com/amitkumarpatra99"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  w-10 h-10 flex items-center justify-center 
                  rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-black/70 dark:text-gray-400 
                  transition-all duration-300 hover:scale-110 hover:shadow-lg backdrop-blur-md 
                  hover:bg-black/10 dark:hover:bg-white/10 hover:text-black dark:hover:text-gray-300 hover:border-black/20 dark:hover:border-gray-300/50
                "
              >
                <FaGithub size={18} />
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/amitkumarpatra99"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  w-10 h-10 flex items-center justify-center 
                  rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-black/70 dark:text-gray-400 
                  transition-all duration-300 hover:scale-110 hover:shadow-lg backdrop-blur-md 
                  hover:bg-black/10 dark:hover:bg-white/10 hover:text-blue-500 hover:border-blue-500/50 dark:hover:text-blue-500 dark:hover:border-blue-500/50
                "
              >
                <FaLinkedin size={18} className="" />
              </a>


            </div>

            {/* WhatsApp Contact Button */}
            <motion.a
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.92 }}
              href="https://wa.me/8144129955?text=Hi%20Amit"
              target="_blank"
              rel="noopener noreferrer"
              className="
                px-5 py-2 rounded-full  
                text-teal-600 dark:text-teal-300 
                bg-teal-50 dark:bg-teal-500/10 
                border border-teal-200 dark:border-teal-500/20   
                hover:bg-teal-100 dark:hover:bg-teal-500/20 
                hover:text-teal-700 dark:hover:text-white   
                flex items-center gap-2 font-medium transition
              "
            >
              <FaWhatsapp className="text-xl text-green-500" />
              Contact
            </motion.a>

          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(true)}
            className="md:hidden p-2 text-black dark:text-white bg-black/5 dark:bg-white/10 rounded-full backdrop-blur-xl"
          >
            <FiMenu size={22} />
          </button>
        </motion.nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-0 z-[80] bg-black/40 backdrop-blur-2xl flex flex-col items-center justify-center"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-10 right-10 p-3 text-black dark:text-white bg-black/10 dark:bg-white/10 rounded-full"
            >
              <FiX size={28} />
            </button>

            <div className="flex flex-col gap-8 text-center">
              {NAV_ITEMS.map((item, i) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  onClick={() => scrollToSection(item.id)}
                  className={`
                    text-4xl sm:text-4xl font-semibold tracking-tight
                    ${activeTab === item.id ? "text-black dark:text-white" : "text-black/50 dark:text-white/50"}
                    hover:text-black dark:hover:text-white transition
                  `}
                >
                  {item.label}
                </motion.button>
              ))}
            </div>

            {/* Mobile Social Icons */}
            <div className="absolute bottom-14 flex flex-col items-center gap-6">

              {/* Theme Toggle Mobile */}
              <button
                onClick={toggleTheme}
                className="
                  px-6 py-2 flex items-center gap-3
                  rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-black dark:text-white
                  backdrop-blur-md 
                "
              >
                {theme === "dark" ? <><FiSun size={20} /> Light Mode</> : <><FiMoon size={20} /> Dark Mode</>}
              </button>

              <div className="flex gap-6">

                {/* GitHub */}
                <a
                  href="https://github.com/amitkumarpatra99"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                  w-12 h-12 flex items-center justify-center 
                  rounded-full bg-white/5 border border-white/10 text-gray-400 
                  transition-all duration-300 hover:scale-110 hover:shadow-lg backdrop-blur-md 
                  hover:bg-white/10 hover:text-gray-300 hover:border-gray-300/50
                "
                >
                  <FaGithub size={24} />
                </a>

                {/* LinkedIn */}
                <a
                  href="https://linkedin.com/in/amitkumarpatra99"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                  w-12 h-12 flex items-center justify-center 
                  rounded-full bg-white/5 border border-white/10 text-gray-400 
                  transition-all duration-300 hover:scale-110 hover:shadow-lg backdrop-blur-md 
                  hover:bg-white/10 hover:text-blue-500 hover:border-blue-500/50
                "
                >
                  <FaLinkedin size={24} />
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/8144129955?text=Hi%20Amit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                  w-12 h-12 flex items-center justify-center 
                  rounded-full bg-white/5 border border-white/10 text-gray-400 
                  transition-all duration-300 hover:scale-110 hover:shadow-lg backdrop-blur-md 
                  hover:bg-white/10 hover:text-green-500 hover:border-green-500/50
                "
                >
                  <FaWhatsapp size={24} />
                </a>


              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
