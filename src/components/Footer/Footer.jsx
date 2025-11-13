import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { Mail, Phone, MapPin, Github, Instagram, ArrowUp, Twitter, CreditCard } from "lucide-react";
import { LiaLinkedinIn } from "react-icons/lia";
import { FaWhatsapp } from "react-icons/fa6";



const Footer = () => {
  const icons = [
    { id: 1, icon: <Github size={18} />, link: "https://github.com/amitkumarpatra99" },
    { id: 2, icon: <LiaLinkedinIn size={18} />, link: "https://www.linkedin.com/in/amitkumarpatra99" },
    { id: 4, icon: <Instagram size={18} />, link: "https://www.instagram.com/mr_patraa_" },
    { id: 3, icon: <Twitter size={18} />, link: "https://x.com/mr_patra_" },
    { id: 5, icon: <CreditCard size={18} />, link: "https://warmcup.vercel.app/" },
  ];

  const links = [
    { name: "Home", to: "home" },
    { name: "About", to: "about" },
    { name: "Skill Set", to: "skills" },
    { name: "Project Hub", to: "work" },
    { name: "My Journey", to: "MiniNavigation" },

  ];

  return (
    <>
      <footer className=" text-gray-300 py-12 px-6 border-t-2 border-slate-800 relative overflow-hidden">
        {/* Grid Background Effect */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px]" />

        <div className="relative max-w-7xl mx-auto grid md:grid-cols-4 gap-10 z-10">
          {/* 1️⃣ About Section */}
          <div>

            <div className="flex items-center gap-2 mb-4" cursor="default">
              <img
                src="DP.jpg"
                alt="Logo"
                className="h-8 w-8 object-contain drop-shadow-[0_0_8px_#4FB7B3] hover:scale-105 transition-all duration-300 rounded-full"
              />
              <h2 className="text-xl font-bold text-white tracking-wide">AMIT KUMAR <span className="text-teal-500">PATRA</span> </h2>
            </div>


            <p className="text-sm text-gray-400 leading-relaxed">
              A passionate web developer building interactive and aesthetic digital experiences.
              Focused on clean design, smooth performance, and creative problem-solving.
            </p>

            {/* Social Icons */}
            <div className="flex space-x-4 mt-4">
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
          </div>

          {/* 2️⃣ Quick Links */}
          <div className="lg:ml-10">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <div className="w-20 h-[3px] rounded-full mb-3 mt-2 lg:ml-1 bg-gradient-to-r from-[#2351A8] via-[#4FB7B3] to-[#2CB67D] shadow-[0_0_10px_#4FB7B3]"></div>
            <ul className="space-y-2 text-sm">
              {links.map((link, index) => (
                <li key={index}>
                  <ScrollLink
                    to={link.to}
                    smooth={true}
                    duration={600}
                    // offset={-80} // Adjust if navbar height overlaps
                    spy={true}
                    className="relative inline-block cursor-pointer text-gray-400 duration-300 hover:text-white transition-transform transform hover:scale-110"
                  >
                    {link.name}
                    {/* Underline Animation */}
                    <span className="absolute left-0 bottom-0 w-0 h-[1.5px] bg-gradient-to-r from-[#7f5af0] to-[#2cb67d] transition-all duration-500 group-hover:w-full hover:w-full"></span>
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </div>

          {/* 3️⃣ Highlight Section (Instead of Services) */}
          <div>
            <h3 className="text-lg font-semibold text-white  cursor-default">Highlights</h3>
            <div className="w-20 h-[3px] rounded-full mb-3 mt-2 lg:ml-1 bg-gradient-to-r from-[#2351A8] via-[#4FB7B3] to-[#2CB67D] shadow-[0_0_10px_#4FB7B3]"></div>

            <ul className="space-y-2 text-sm cursor-default" >
              <li className="transition-transform transform hover:scale-110 duration-300">🚀 MERN Stack Developer</li>
              <li className="transition-transform transform hover:scale-105 duration-300">🎨 Frontend Animations & UI Design</li>
              <li className="transition-transform transform hover:scale-105 duration-300">⚡ Responsive Web Apps</li>
              <li className="transition-transform transform hover:scale-105 duration-300">💡 Open Source Enthusiast</li>
            </ul>
          </div>

          {/* 4️⃣ Contact Info */}
          <div>
            {/* Title */}
            <h3 className="text-lg font-semibold text-white  ">Contact</h3>
            <div className="w-[65px] h-[3px] rounded-full mb-3 mt-2 lg:ml-1  bg-gradient-to-r from-[#2351A8] via-[#4FB7B3] to-[#2CB67D] shadow-[0_0_10px_#4FB7B3]"></div>
            {/* Contact List */}
            <ul className="space-y-3  text-sm">
              {/* Email */}
              <li className="flex items-center gap-3 group hover:scale-105 transition-all  duration-300">
                <div
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-[#1a1f2b] 
                       transition-all duration-300 group-hover:bg-[#242b3b] relative"
                >
                  <Mail
                    size={16}
                    className="text-[#4FB7B3] group-hover:text-white transition duration-300"
                  />
                  <div
                    className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 blur-md 
                         transition-all duration-500"
                    style={{
                      background:
                        "conic-gradient(from 0deg, #7f5af0, #2cb67d, #7f5af0)",
                    }}
                  ></div>
                </div>

                <a
                  href="mailto:mrpatra.web@gmail.com"
                  className="text-gray-400 group-hover:text-white transition-all duration-300 text-sm md:text-base">
                  mrpatra.web@gmail.com</a>
              </li>

              {/* Phone */}
              <li className="flex items-center gap-3 group hover:scale-105 transition-all  duration-300">
                <div
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-[#1a1f2b] 
                       transition-all duration-300 group-hover:bg-[#242b3b] relative"
                >
                  <Phone
                    size={16}
                    className="text-[#4FB7B3] group-hover:text-white transition duration-300"
                  />
                  <div
                    className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 blur-md 
                         transition-all duration-500"
                    style={{
                      background:
                        "conic-gradient(from 0deg, #7f5af0, #2cb67d, #7f5af0)",
                    }}
                  ></div>
                </div>

                <a
                  href="tel:+918144129955"
                  className="text-gray-400 group-hover:text-white transition-all duration-300 text-sm md:text-base"
                >
                  +91 8144129955
                </a>
              </li>
              {/* WHATSAPP */}
              <li className="flex items-center gap-3 group hover:scale-105 transition-all  duration-300">
                <div
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-[#1a1f2b] 
                       transition-all duration-300 group-hover:bg-[#242b3b] relative"
                >
                  <FaWhatsapp
                    size={16}
                    className="text-[#4FB7B3] group-hover:text-white transition duration-300"
                  />
                  <div
                    className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 blur-md 
                         transition-all duration-500"
                    style={{
                      background:
                        "conic-gradient(from 0deg, #7f5af0, #2cb67d, #7f5af0)",
                    }}
                  ></div>
                </div>

                <a
                  href="https://wa.me/8144129955"
                  className="text-gray-400 group-hover:text-white transition-all duration-300 text-sm md:text-base"
                > WhatsApp
                </a>
              </li>
              {/* Location */}
              <li className="flex items-center gap-3 group hover:scale-105 transition-all  duration-300">
                <div
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-[#1a1f2b] 
                       transition-all duration-300 group-hover:bg-[#242b3b] relative"
                >
                  <MapPin
                    size={16}
                    className="text-[#4FB7B3] group-hover:text-white transition duration-300"
                  />
                  <div
                    className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 blur-md 
                         transition-all duration-500"
                    style={{
                      background:
                        "conic-gradient(from 0deg, #7f5af0, #2cb67d, #7f5af0)",
                    }}
                  ></div>
                </div>

                <span className="text-gray-400 group-hover:text-white transition-all duration-300 text-sm md:text-base">
                  Bhubaneswar, Odisha
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="relative border-t border-gray-800 mt-10 pt-6 text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center mr-5 ml-5 lg:mr-60 lg:ml-60">
          <p>© {new Date().getFullYear()} Mr Patra All Rights Reserved</p>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group flex items-center gap-2 mt-3 md:mt-0 text-[#4FB7B3] 
                 transition-all duration-300 hover:text-white hover:scale-105 relative">
            {/* Circle background */}
            <div className="w-8 h-8 flex items-center justify-center rounded-full 
                      bg-[#1a1f2b] group-hover:bg-[#242b3b] transition-all duration-300 relative">
              <ArrowUp size={16} className="z-10" />
              {/* Neon ring on hover */}
              <div
                className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 blur-md 
                     transition-all duration-500"
                style={{
                  background:
                    "conic-gradient(from 0deg, #7f5af0, #2cb67d, #7f5af0)",
                }}></div>
            </div>
            <span className="text-sm text-slate-400 group-hover:text-slate-100 font-medium">Back to top</span>
          </button>
        </div>
      </footer>
    </>
  );
};

export default Footer;




