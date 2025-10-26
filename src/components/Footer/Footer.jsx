import React from "react";
import { FaTwitter, FaLinkedin, FaInstagram, FaWhatsapp, FaGithub } from "react-icons/fa";
import { FaIndianRupeeSign, FaLandmarkFlag } from "react-icons/fa6";

const Footer = () => {
  // Smooth scroll function
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="text-white py-8 px-[12vw] md:px-[7vw] lg:px-[20vw]">
      <div className="container mx-auto text-center">
        {/* Name / Logo */}
        <h2 className="text-xl font-semibold text-[#4FB7B3]">AMIT KUMAR PATRA</h2>

        <nav className="flex flex-wrap justify-center space-x-4 sm:space-x-6 mt-4">
          {[
            { name: "About", id: "about" },
            { name: "Skills", id: "skills" },
            { name: "Experience", id: "experience" },
            { name: "Projects", id: "projects" },
            { name: "Education", id: "education" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.id)}
              className="hover:text-[#4FB7B3] text-sm sm:text-base my-1">
              {item.name}
            </button>
          ))}
        </nav>

        <div className="flex flex-wrap justify-center space-x-4 mt-6">
          {[
            { icon: <FaGithub />, link: "https://github.com/amitkumarpatra99" },
            { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/amitkumarpatra99" },
            { icon: <FaWhatsapp />, link: "https://wa.me/qr/CMTYL4X2BBW7F1" },
            { icon: <FaInstagram />, link: "https://www.instagram.com/mr_patraa_" },
            { icon: <FaIndianRupeeSign />, link: "https://rzp.io/rzp/amitpatra" },


          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-[#4FB7B3] transition-transform transform hover:scale-110">
              {item.icon}
            </a>
          ))}
        </div>

        {/* Copyright Text */}
        <p className="text-sm text-gray-500 mt-5">
          © 2025 Mr Patra All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
