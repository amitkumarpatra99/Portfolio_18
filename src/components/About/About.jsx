import React from "react";
import { Briefcase, Code, Coffee, ExternalLink, User, UserCircle } from "lucide-react";
import { motion } from "framer-motion";
// Make sure this path is correct based on your project structure
import profileImage from "../../assets/certificate/A.jpg"; 
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa6";

// --- New Component: Animated Stars Background ---
const AnimatedStars = () => {
  // Generate static data for stars once to avoid hydration mismatches
  const stars = [...Array(100)].map((_, i) => ({
    id: i,
    size: Math.random() * 2.5 + 0.5, // Size between 0.5px and 3px
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    duration: Math.random() * 10 + 5, // Slow animation duration between 5-15s
    delay: Math.random() * 5, // Random start delay
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute bg-white rounded-full"
          style={{
            top: star.top,
            left: star.left,
            width: `${star.size}px`,
            height: `${star.size}px`,
          }}
          // The Animation: Twinkle and subtle upward drift
          animate={{
            opacity: [0.1, 0.8, 0.1], 
            scale: [1, 1.2, 1],
            y: [0, -50, 0] // Subtle vertical movement
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            delay: star.delay,
            ease: "easeInOut",
          }}
        />
      ))}
         {/* Optional: Add a subtle nebula gradient overlay for depth */}
         <div className="absolute inset-0 bg-gradient-to-tr from-[#0a0a0a] via-transparent to-[#0a0a0a]/80"></div>
    </div>
  );
};
// --------------------------------------------------


// --- Main Component Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const icons = [
  { id: 1, icon: <FaGithub size={20} />, link: "https://github.com/amitkumarpatra99", color: "hover:text-gray-400 hover:border-gray-400 hover:shadow-gray-400/30" },
  { id: 2, icon: <FaLinkedin size={20} />, link: "https://www.linkedin.com/in/amitkumarpatra99", color: "hover:text-blue-500 hover:border-blue-500 hover:shadow-blue-500/30" },
  { id: 3, icon: <FaWhatsapp size={20} />, link: "https://wa.me/8144129955", color: "hover:text-green-500 hover:border-green-500 hover:shadow-green-500/30" },
  { id: 4, icon: <Coffee size={20} />, link: "https://warmcup.vercel.app/", color: "hover:text-amber-500 hover:border-amber-500 hover:shadow-amber-500/30" },
];

const About = () => {
  return (
    <section
      id="about"
      // Added a subtle radial gradient background base
      className="relative py-24 px-4 md:px-8 lg:px-12 text-white overflow-hidden bg-[radial-gradient(ellipse_at_bottom,_#1b2735_0%,_#090a0f_100%)]"
    >
      {/* Insert the Star Background Component Here */}
      <AnimatedStars />
      
      {/* Kept one subtle large glow blob for color tint */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-teal-500/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />


      {/* Main Content Container (Z-index ensures it's above stars) */}
      <div className="container mx-auto max-w-6xl relative z-10">
        
        {/* Section Header */}
  <div className="mb-16 flex items-center justify-center gap-2">
        <UserCircle
          size={40}
          className="text-4xl text-[#4FB7B3] animate-spin-slow drop-shadow-[0_0_12px_#4FB7B3]"
        />

        <div className="text-center">
          <p className="text-gray-400 mb-1 cursor-default text-sm tracking-[3px] uppercase">
            Know<span className="text-[#4FB7B3]"> more</span>
          </p>

          <h2 className="text-4xl font-bold text-white cursor-pointer hover:scale-105 transform transition-transform duration-300">
            ABOUT<span className="text-[#4FB7B3]"> ME</span>
          </h2>

          <div className="w-28 h-[3px] rounded-full mx-auto mb-3 mt-3 bg-gradient-to-r from-[#2351A8] via-[#4FB7B3] to-[#2CB67D] shadow-[0_0_10px_#4FB7B3]"/>
        </div>
      </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left: Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative flex justify-center lg:justify-end"
          >
            {/* Image Card with Gradient Border */}
            <div className="relative group w-full max-w-md">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500 to-blue-600 rounded-3xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
              
              <div className="relative rounded-3xl p-[2px] bg-gradient-to-br from-white/20 to-white/0 overflow-hidden backdrop-blur-sm">
                 <div className="rounded-[22px] overflow-hidden bg-[#0f172a] relative h-[450px]">
                    <img
                      src={profileImage}
                      alt="Profile"
                      className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Overlay Gradient for text readability if needed */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-40"></div>
                 </div>
              </div>

              {/* Floating Badge */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -right-6 md:right-6 bg-[#112240]/90 backdrop-blur-xl border border-teal-500/30 p-4 rounded-2xl shadow-2xl max-w-[200px]"
              >
                <div className="flex items-center gap-3">
                   <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                   <span className="text-gray-300 text-sm font-medium">Open to work</span>
                </div>
                <p className="text-white font-bold text-lg mt-1">Full Stack Dev</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Content Column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8 lg:pl-8"
          >
            <motion.p variants={itemVariants} className="text-gray-400 text-lg leading-relaxed">
              I am a passionate developer who bridges the gap between design and engineering. I build performant web applications with a focus on <span className="text-teal-400 font-medium">clean code</span> and <span className="text-teal-400 font-medium">pixel-perfect designs</span>.
            </motion.p>

            {/* Glass Cards for Skills */}
            <div className="space-y-4">
              {[
                {
                  icon: <Code className="w-6 h-6 text-teal-400" />,
                  title: "Web Development",
                  desc: "Modern, responsive applications using React & Tailwind.",
                },
                {
                  icon: <User className="w-6 h-6 text-blue-400" />,
                  title: "UI / UX Design",
                  desc: "Crafting intuitive and engaging digital experiences.",
                },
                {
                  icon: <Briefcase className="w-6 h-6 text-purple-400" />,
                  title: "Project Management",
                  desc: "Agile execution with clear planning and delivery.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group relative p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-teal-500/50 hover:bg-white/10 transition-all duration-300 backdrop-blur-md"
                >
                  <div className="flex items-start gap-5">
                    <div className="p-3 rounded-xl bg-white/5 group-hover:bg-teal-500/20 transition-colors duration-300 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-lg">{item.title}</h3>
                      <p className="text-gray-400 text-sm mt-1 group-hover:text-gray-300 transition-colors">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Action Area */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6 pt-4">
              <a
                href="https://drive.google.com/file/d/1xgU-OvduPOkcmW6dzjLCwNYCRdNBGHdU/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-3.5 text-white font-medium rounded-full overflow-hidden bg-teal-600 transition-all hover:bg-teal-700 shadow-lg shadow-teal-500/25 hover:shadow-teal-500/50"
              >
                <span className="relative z-10 flex items-center gap-2">
                   Download CV <ExternalLink size={18} />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>

              <div className="flex items-center gap-4">
                {icons.map((social) => (
                  <a
                    key={social.id}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-gray-400 transition-all duration-300 hover:scale-110 hover:shadow-lg backdrop-blur-md ${social.color} hover:bg-white/10`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;