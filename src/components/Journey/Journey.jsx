// Ultra-Modern Journey Component
// Includes: 3D Hover Depth, Particle Background, Floating Icons, Parallax Scroll,
// Light/Dark Modes, Page Transition Animations

import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Briefcase,
  GraduationCap,
  Mail,
  Coffee,
  Sparkles,
  Zap,
} from "lucide-react";

const Journey = () => {
  const navigate = useNavigate();
  const parallaxRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: parallaxRef });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const navItems = [
    { label: "Experience", icon: Briefcase, path: "/experience" },
    { label: "Education", icon: GraduationCap, path: "/education" },
    { label: "Contact", icon: Mail, path: "/contact" },
  ];

  // PARTICLE BACKGROUND CANVAS
  useEffect(() => {
    const canvas = document.getElementById("particles");
    const ctx = canvas.getContext("2d");
    let particles = [];
    let w, h;

    const init = () => {
      w = (canvas.width = window.innerWidth);
      h = (canvas.height = window.innerHeight);

      particles = Array.from({ length: 60 }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 2 + 1,
        dx: (Math.random() - 0.5) * 0.4,
        dy: (Math.random() - 0.5) * 0.4,
      }));
    };

    const animate = () => {
      ctx.clearRect(0, 0, w, h);
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(79,183,179,0.4)";
        ctx.fill();

        p.x += p.dx;
        p.y += p.dy;

        if (p.x < 0 || p.x > w) p.dx *= -1;
        if (p.y < 0 || p.y > h) p.dy *= -1;
      });

      requestAnimationFrame(animate);
    };

    init();
    animate();
    window.onresize = init;
  }, []);

  return (
    <motion.section
      id="Journey"
      ref={parallaxRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="w-full min-h-screen flex flex-col items-center justify-center px-6 py-24 relative overflow-hidden dark:bg-[#0A0D12] bg-transparent"
    >
      {/* PARTICLES */}
      <canvas
        id="particles"
        className="absolute inset-0 pointer-events-none opacity-60"
      />

      {/* PARALLAX FLOATING ICONS */}
      <motion.div
        style={{ y: parallaxY }}
        className="absolute top-10 left-10 opacity-30 dark:opacity-40"
      >
        <Sparkles size={70} className="text-[#4FB7B3]" />
      </motion.div>

      <motion.div
        style={{ y: parallaxY }}
        className="absolute bottom-10 right-10 opacity-30 dark:opacity-40"
      >
        <Zap size={70} className="text-[#2CB67D]" />
      </motion.div>

      {/* HEADING */}
      <div className="mb-16 flex items-center justify-center gap-2">
        <Sparkles
          size={30}
          className="text-4xl text-[#4FB7B3] animate-spin-slow drop-shadow-[0_0_12px_#4FB7B3]"
        />

        <div className="text-center">
          <p className="text-gray-500 dark:text-gray-400 mb-1 cursor-default text-sm tracking-[3px] uppercase">
            Expl<span className="text-[#4FB7B3]">ore</span>
          </p>

          <h2 className="text-4xl font-bold text-gray-900 dark:text-white cursor-pointer hover:scale-105 transform transition-transform duration-300">
            MY<span className="text-[#4FB7B3]">JOURNEY</span>
          </h2>

          <div className="w-32 h-[3px] rounded-full mx-auto mb-3 mt-3 bg-gradient-to-r from-[#2351A8] via-[#4FB7B3] to-[#2CB67D] shadow-[0_0_10px_#4FB7B3]"></div>
        </div>
      </div>

      {/* NAV CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14 max-w-6xl w-full place-items-center relative z-10">
        {navItems.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.2, type: "spring", stiffness: 140 }}
            onClick={() => navigate(item.path)}
            className="cursor-pointer group"
          >
            <motion.div
              whileHover={{ rotateX: 15, rotateY: -15, scale: 1.08 }}
              transition={{ type: "spring", stiffness: 150 }}
              className="w-72 h-80 rounded-3xl p-10 backdrop-blur-xl border shadow-xl flex flex-col items-center justify-center gap-8 transition-all duration-300 dark:bg-white/[0.05] bg-white border-gray-200 dark:border-white/10 dark:shadow-[0_0_40px_rgba(0,0,0,0.4)]"
            >
              {/* ICON */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="p-6 rounded-full bg-[#4FB7B3]/20 text-[#4FB7B3] border border-[#4FB7B3]/30 shadow-lg"
              >
                {React.createElement(item.icon, { size: 38 })}
              </motion.div>

              {/* LABEL */}
              <p className="text-2xl font-semibold dark:text-gray-200 text-gray-700 group-hover:text-[#4FB7B3] transition">
                {item.label}
              </p>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* CTA BUTTON */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        whileHover={{ scale: 1.1 }}
        className="mt-20 relative z-10"
      >
        <a
          href="https://warmcup.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-9 py-3 text-lg font-medium rounded-full border dark:text-white text-black dark:border-[#4FB7B3] border-[#4FB7B3] dark:bg-[#4FB7B3]/10 bg-[#4FB7B3]/20 hover:bg-[#4FB7B3]/30 backdrop-blur-md transition-all duration-300 shadow-[0_0_20px_#4FB7B360]"
        >
          <Coffee size={22} />
          <span>WARM CUP</span>
          <Zap size={20} />
        </a>
      </motion.div>
    </motion.section>
  );
}

export default Journey;
