import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Briefcase, CreditCard, GraduationCap, Mail, Sparkles } from "lucide-react";



const MiniNavigation = () => {
    const navigate = useNavigate();

    const navItems = [
        { label: "Experience", icon: <Briefcase size={18} />, path: "/experience" },
        { label: "Education", icon: <GraduationCap size={18} />, path: "/education" },
        { label: "Contact", icon: <Mail size={18} />, path: "/contact" },
    ];

    return (
        <section id="MiniNavigation" className="w-full flex flex-col items-center mt-14 mb-24 px-4">
            <p className="text-gray-400 text-sm tracking-[3px] uppercase mb-1">
                <span className="text-teal-600">EXPL</span>ore
            </p>
            {/* Logo */}
            <motion.div
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-2  text-white " >

                <Sparkles className="text-teal-300 drop-shadow-[0_0_8px_#4FB7B3]" size={26} />
                <h2 className="text-4xl font-bold tracking-wide uppercase cursor-pointer hover:scale-105 transform transition-transform duration-300">My <span className="text-teal-500">Journey</span> </h2>
            </motion.div>
            <div className="w-32 h-[3px] rounded-full mx-auto mb-16 mt-3  bg-gradient-to-r from-[#2351A8] via-[#4FB7B3] to-[#2CB67D] shadow-[0_0_10px_#4FB7B3]"></div>

            <div className="flex flex-wrap gap-5 justify-center">
                {navItems.map((item, i) => (
                    <motion.button
                        key={i}
                        onClick={() => navigate(item.path)}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.15 }}
                        whileHover={{
                            scale: 1.09,
                            boxShadow: "0 0 28px rgba(79,183,179,0.9)",
                        }}
                        whileTap={{ scale: 0.95 }}
                        className="group flex items-center gap-2 px-7 py-3 rounded-full text-white font-medium  bg-[#071e22]/80 backdrop-blur-xl  shadow-[0_0_12px_rgba(79,183,179,0.25)  border border-[#4FB7B3]/40 hover:bg-[#0b2e33]/80  transition-all duration-300"
                    >
                        <span className="text-teal-300 group-hover:text-teal-200 duration-300">
                            {item.icon}
                        </span>
                        {item.label}
                    </motion.button>
                ))}
                <a
                    href="https://rzp.io/rzp/amitpatra"
                    target="_blank"
                    className="group flex items-center gap-2 px-7 py-3 rounded-full text-white font-medium  bg-[#071e22]/80 backdrop-blur-xl  shadow-[0_0_12px_rgba(79,183,179,0.25)  border border-[#4FB7B3]/40 hover:bg-[#0b2e33]/80 hover:scale-110 transition-transform duration-300">
                <span className="text-teal-300 group-hover:text-teal-200 duration-300">
                    <CreditCard /> </span>PAY</a>

        </div>
        </section >
    );
};

export default MiniNavigation;
