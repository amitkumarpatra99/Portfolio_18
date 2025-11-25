import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { Mail, Phone, MapPin, Github, Instagram, ArrowUp, Twitter, CreditCard, } from "lucide-react";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  // 1️⃣ Added the 'color' property to match your About component's logic
  const icons = [
    {
      id: 1,
      icon: <Github size={18} />,
      link: "https://github.com/amitkumarpatra99",
      color: "hover:text-gray-400 hover:border-gray-400 hover:shadow-gray-400/30"
    },
    {
      id: 2,
      icon: <FaLinkedin size={18} />,
      link: "https://www.linkedin.com/in/amitkumarpatra99",
      color: "hover:text-blue-500 hover:border-blue-500 hover:shadow-blue-500/30"
    },
    {
      id: 3,
      icon: <Instagram size={18} />,
      link: "https://www.instagram.com/mr_patraa_",
      color: "hover:text-pink-500 hover:border-pink-500 hover:shadow-pink-500/30"
    },
    {
      id: 4,
      icon: <Twitter size={18} />,
      link: "https://x.com/mr_patra_",
      color: "hover:text-blue-300 hover:border-blue-300 hover:shadow-blue-300/30"
    },
    {
      id: 5,
      icon: <CreditCard size={18} />,
      link: "https://rzp.io/rzp/amitpatra",
      color: "hover:text-amber-500 hover:border-amber-500 hover:shadow-amber-500/30"
    },

  ];

  const links = [
    { name: "Home", to: "home" },
    { name: "About", to: "about" },
    { name: "Skill Set", to: "skills" },
    { name: "Project Hub", to: "work" },
    { name: "My Journey", to: "Journey" },
  ];

  return (
    <footer className="relative bg-[#0a0f1c] text-gray-300 py-16 px-6 overflow-hidden border-t border-white/10">

      {/* 🌟 ANIMATED BACKGROUND LAYERS 🌟 */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-purple-600/20 rounded-full blur-[100px] animate-blob mix-blend-screen"></div>
        <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-teal-600/20 rounded-full blur-[100px] animate-blob animation-delay-2000 mix-blend-screen"></div>
        <div className="absolute bottom-[-20%] left-[20%] w-96 h-96 bg-blue-600/20 rounded-full blur-[100px] animate-blob animation-delay-4000 mix-blend-screen"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1c] via-transparent to-transparent"></div>
      </div>

      {/* 🌟 MAIN CONTENT 🌟 */}
      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-4 gap-12">

        {/* 1️⃣ About Section */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 group cursor-default">
            <div className="relative p-[2px] rounded-full bg-gradient-to-r from-teal-500 to-blue-500">
              <img
                src="DP.jpg"
                alt="Logo"
                className="h-10 w-10 object-contain rounded-full border-2 border-[#0a0f1c]"
              />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white tracking-wide">
                AMIT KUMAR <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400">PATRA</span>
              </h2>
              <span className="text-xs text-gray-500 tracking-wider">WEB DEVELOPER</span>
            </div>
          </div>

          <p className="text-sm text-gray-400 leading-relaxed hover:text-gray-300 transition-colors duration-300">
            A passionate web developer building interactive and aesthetic digital experiences.
            Focused on clean design, smooth performance, and creative problem-solving.
          </p>

          {/* 🌟 SOCIAL ICONS (Updated Style) 🌟 */}
          <div className="flex items-center gap-4">
            {icons.map((social) => (
              <a
                key={social.id}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                // Applied the exact classes from your About component
                className={`w-10 h-10 flex items-center justify-center rounded-full 
                  bg-white/5 border border-white/10 text-gray-400 
                  transition-all duration-300 hover:scale-110 hover:shadow-lg backdrop-blur-md 
                  hover:bg-white/10 ${social.color}`}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* 2️⃣ Quick Links */}
        <div className="lg:ml-10">
          <h3 className="text-lg font-semibold text-white">Quick Links</h3>
          <div className="w-16 h-1 rounded-full mb-6 mt-2 bg-gradient-to-r from-[#2351A8] via-[#4FB7B3] to-[#2CB67D]" />

          <ul className="space-y-3 text-sm">
            {links.map((link, index) => (
              <li key={index}>
                <ScrollLink
                  to={link.to}
                  smooth={true}
                  duration={600}
                  spy={true}
                  className="flex items-center group cursor-pointer text-gray-400 hover:text-white transition-all duration-300"
                >
                  <span className="w-0 group-hover:w-2 h-[2px] bg-teal-400 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                  {link.name}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </div>

        {/* 3️⃣ Highlights */}
        <div>
          <h3 className="text-lg font-semibold text-white cursor-default">Highlights</h3>
          <div className="w-16 h-1 rounded-full mb-6 mt-2 bg-gradient-to-r from-[#2351A8] via-[#4FB7B3] to-[#2CB67D]" />

          <ul className="space-y-4 text-sm">
            {[
              "🚀 MERN Stack Developer",
              "🎨 Frontend Animations",
              "⚡ Responsive Web Apps",
              "💡 Open Source Enthusiast"
            ].map((item, i) => (
              <li key={i} className="flex items-center text-gray-400 hover:text-teal-300 transition-colors duration-300 cursor-default">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-500 mr-3 animate-pulse"></span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* 4️⃣ Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white">Contact</h3>
          <div className="w-16 h-1 rounded-full mb-6 mt-2 bg-gradient-to-r from-[#2351A8] via-[#4FB7B3] to-[#2CB67D]" />

          <ul className="space-y-4 text-sm">
            {/* Email */}
            <li className="flex items-center gap-3 group">
              <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-full bg-white/5 border border-white/10 group-hover:bg-teal-500/10 group-hover:border-teal-500 text-gray-400 group-hover:text-teal-400 transition-all duration-300">
                <Mail size={18} />
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-gray-500 font-bold mb-1">EMAIL</span>
                <a href="mailto:mrpatra.web@gmail.com" className="text-gray-300 hover:text-white transition-colors">
                  mrpatra.web@gmail.com
                </a>
              </div>
            </li>

            {/* Phone */}
            <li className="flex items-center gap-3 group">
              <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-full bg-white/5 border border-white/10 group-hover:bg-teal-500/10 group-hover:border-teal-500 text-gray-400 group-hover:text-teal-400 transition-all duration-300">
                <Phone size={18} />
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-gray-500 font-bold mb-1">PHONE</span>
                <a href="tel:+918144129955" className="text-gray-300 hover:text-white transition-colors">
                  +91 8144129955
                </a>
              </div>
            </li>

            {/* Location */}
            <li className="flex items-center gap-3 group">
              <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-full bg-white/5 border border-white/10 group-hover:bg-teal-500/10 group-hover:border-teal-500 text-gray-400 group-hover:text-teal-400 transition-all duration-300">
                <MapPin size={18} />
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-gray-500 font-bold mb-1">LOCATION</span>
                <span className="text-gray-300">Bhubaneswar, Odisha</span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 max-w-7xl mx-auto mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} <span className="text-teal-500 font-medium uppercase">Mr Patra</span>. All Rights Reserved.
        </p>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="group flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-teal-500/10 border border-white/5 hover:border-teal-500/50 transition-all duration-300"
        >
          <span className="text-sm text-gray-400 group-hover:text-white font-medium">Back to top</span>
          <ArrowUp size={16} className="text-teal-400 group-hover:-translate-y-1 transition-transform duration-300" />
        </button>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </footer>
  );
};

export default Footer;