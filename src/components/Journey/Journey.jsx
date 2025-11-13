import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Briefcase, Coffee, GraduationCap, Mail, Sparkles, Zap } from "lucide-react";

const Journey = () => {
  const navigate = useNavigate();

  const navItems = [
    { label: "Experience", icon: <Briefcase size={32} />, path: "/experience" },
    { label: "Education", icon: <GraduationCap size={32} />, path: "/education" },
    { label: "Contact", icon: <Mail size={32} />, path: "/contact" },
  ];

  return (
    <section
      id="Journey"
      className="w-full min-h-screen flex flex-col items-center justify-center px-6 py-24"
    >
      {/* Heading */}
      <div className="mb-16 flex items-center justify-center gap-4">
        <Sparkles
          size={24}
          className="text-4xl text-[#4FB7B3] animate-spin-slow drop-shadow-[0_0_12px_#4FB7B3]"
        />

        <div className="text-center">
          <p className="text-gray-400 mb-1 cursor-default text-sm tracking-[3px] uppercase">
            Expl<span className="text-[#4FB7B3]">ore</span>
          </p>

          <h2 className="text-4xl font-bold text-white cursor-pointer hover:scale-105 transform transition-transform duration-300">
            MY<span className="text-[#4FB7B3]">JOURNEY</span>
          </h2>

          <div className="w-32 h-[3px] rounded-full mx-auto mb-3 mt-3 bg-gradient-to-r from-[#2351A8] via-[#4FB7B3] to-[#2CB67D] shadow-[0_0_10px_#4FB7B3]"></div>
        </div>
      </div>

      {/* NAV CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl w-full place-items-center">
        {navItems.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.2, type: "spring", stiffness: 100 }}
            whileHover={{ y: -12, scale: 1.05 }}
            onClick={() => navigate(item.path)}
            className="group cursor-pointer"
          >
            <div
              className="
                flex flex-col items-center gap-6 p-10 rounded-3xl w-64 h-64 sm:w-72 sm:h-72 justify-center transition-all duration-500 
                bg-white/5 backdrop-blur-xl
                border border-white/20
                shadow-[0_0_25px_rgba(255,255,255,0.1)]
                hover:border-[#4FB7B3]
                hover:shadow-[0_0_35px_rgba(79,183,179,0.4)]
              "
            >
              {/* ICON */}
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.7 }}
                className="
                  p-5 rounded-full 
                  bg-[#4FB7B3]/90 text-white shadow-xl
                  border border-white/30
                "
              >
                {item.icon}
              </motion.div>

              {/* LABEL */}
              <p className="text-xl font-semibold text-slate-200 group-hover:text-[#4FB7B3] transition-colors">
                {item.label}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* WARM CUP BUTTON */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.6 }}
        whileHover={{ scale: 1.1, rotate: 5 }}
        className="mt-14"
      >
        <a
          href="https://warmcup.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="
    relative cursor-pointer mt-6 inline-flex items-center gap-3 
    text-white py-2.5 sm:py-3 px-6 sm:px-8 rounded-full 
    text-base sm:text-lg font-semibold 
    border-2 backdrop-blur-md transition-all duration-300 
    hover:scale-[1.06] hover:shadow-[0_0_18px_#4FB7B366]
    group
  "
          style={{
            borderColor: "#4FB7B3",
            background: "linear-gradient(145deg, rgba(79,183,179,0.18), rgba(79,183,179,0.06))",
            boxShadow: "0 0 20px #4FB7B340",
          }}
        >
          <Coffee size={22} className="text-[#4FB7B3] group-hover:text-white transition" />
          <span className="text-white">WARM CUP</span>
          <Zap size={20} className="text-[#4FB7B3] group-hover:text-white transition" />

        </a>

      </motion.div>
    </section>
  );
};

export default Journey;
