import React, { useMemo } from "react";
import { Briefcase, Code, Coffee, Database, ExternalLink, User, UserCircle } from "lucide-react";
import { motion } from "framer-motion";
import profileImage from '../../assets/A.jpg';
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa6";

const AnimatedStars = () => {
  const stars = useMemo(() => {
    return [...Array(70)].map((_, i) => ({
      id: i,
      size: Math.random() * 2.5 + 0.5,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      duration: Math.random() * 10 + 5,
      delay: Math.random() * 5,
    }));
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute bg-teal-500/20 dark:bg-white rounded-full"
          style={{
            top: star.top,
            left: star.left,
            width: `${star.size}px`,
            height: `${star.size}px`,
          }}
          animate={{
            opacity: [0.1, 0.8, 0.1],
            scale: [1, 1.2, 1],
            y: [0, -50, 0]
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            delay: star.delay,
            ease: "easeInOut",
          }}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#0a0a0a] via-transparent to-[#0a0a0a]/80"></div>
    </div>
  );
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const About = () => {
  return (
    <section
      id="about"
      className="relative py-16 md:py-24 px-4 md:px-8 lg:px-12 text-gray-800 dark:text-white overflow-hidden bg-transparent transition-colors duration-300"
    >
      <AnimatedStars />

      <div className="absolute top-1/4 -left-20 w-64 h-64 md:w-96 md:h-96 bg-teal-500/10 rounded-full blur-[80px] md:blur-[100px] pointer-events-none mix-blend-screen" />

      <div className="container mx-auto max-w-6xl relative z-10">

        {/* Header */}
        <div className="mb-12 md:mb-16 flex items-center justify-center gap-2">
          <UserCircle
            size={40}
            className="text-3xl md:text-4xl text-[#4FB7B3] animate-spin-slow drop-shadow-[0_0_12px_#4FB7B3]"
          />
          <div className="text-center">
            <p className="text-gray-500 dark:text-gray-400 mb-1 cursor-default text-xs md:text-sm tracking-[3px] uppercase">
              Know<span className="text-[#4FB7B3]"> more</span>
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white cursor-pointer hover:scale-105 transform transition-transform duration-300">
              ABOUT<span className="text-[#4FB7B3]"> ME</span>
            </h2>
            <div className="w-20 md:w-28 h-[3px] rounded-full mx-auto mb-3 mt-3 bg-gradient-to-r from-[#2351A8] via-[#4FB7B3] to-[#2CB67D] shadow-[0_0_10px_#4FB7B3]" />
          </div>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative group w-full max-w-[350px] md:max-w-md mx-auto lg:mx-0">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500 to-blue-600 rounded-3xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>

              <div className="relative rounded-3xl p-[2px] bg-gradient-to-br from-white/20 to-white/0 overflow-hidden backdrop-blur-sm">
                <div className="rounded-[22px] overflow-hidden bg-[#0f172a] relative h-[350px] sm:h-[400px] md:h-[450px]">
                  <img
                    src={profileImage}
                    alt="Profile"
                    loading="lazy"
                    className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-40"></div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8 text-center lg:text-left lg:pl-8"
          >
            <motion.p variants={itemVariants} className="text-gray-600 dark:text-gray-400 text-base md:text-lg leading-relaxed">
              I am a passionate developer who bridges the gap between design and engineering. I build performant web applications with a focus on <span className="text-teal-400 font-medium">clean code</span> and <span className="text-teal-400 font-medium">pixel-perfect designs</span>.
            </motion.p>

            {/* Skills */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  icon: <Code className="w-6 h-6 text-teal-400" />,
                  title: "Web Development",
                  desc: "React & Tailwind apps.",
                },
                {
                  icon: <User className="w-6 h-6 text-blue-400" />,
                  title: "UI / UX Design",
                  desc: "Intuitive experiences.",
                },
                {
                  icon: <Database className="w-6 h-6 text-rose-400" />,
                  title: "Backend Integration",
                  desc: "Robust APIs & databases.",
                },
                {
                  icon: <Briefcase className="w-6 h-6 text-purple-400" />,
                  title: "Project Management",
                  desc: "Agile execution.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group relative p-4 md:p-5 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:border-teal-500/50 hover:bg-white dark:hover:bg-white/10 transition-all duration-300 backdrop-blur-md text-left shadow-sm dark:shadow-none"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-white dark:bg-white/5 group-hover:bg-teal-500/20 transition-colors duration-300 shadow-sm dark:shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] shrink-0 border border-gray-100 dark:border-transparent">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-gray-900 dark:text-white font-semibold text-base md:text-lg">{item.title}</h3>
                      <p className="text-gray-500 dark:text-gray-400 text-xs md:text-sm mt-1 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Action Area – UPDATED SOCIAL ICONS INSERTED 😊 */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center lg:items-start gap-6 pt-4 justify-center lg:justify-start">
              <a
                href="https://drive.google.com/file/d/1xgU-OvduPOkcmW6dzjLCwNYCRdNBGHdU/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-3.5 font-medium rounded-full overflow-hidden text-teal-600 dark:text-teal-400 bg-teal-50 dark:bg-teal-500/10 border border-teal-200 dark:border-teal-500/20 hover:bg-teal-100 dark:hover:bg-teal-500/20 hover:text-teal-700 dark:hover:text-white transition-all duration-300 w-full sm:w-auto"
              >
                <span className="relative z-10 flex items-center gap-2">
                  View My CV <ExternalLink size={18} />
                </span>
              </a>

              {/* ⭐ UPDATED FOOTER-STYLE ICONS ⭐ */}
              <div className="flex items-center gap-4">
                {[
                  {
                    id: 1,
                    icon: <FaGithub size={18} />,
                    link: "https://github.com/amitkumarpatra99",
                    color:
                      "hover:text-gray-600 dark:hover:text-gray-400 hover:border-gray-600 dark:hover:border-gray-400 hover:shadow-gray-600/30 dark:hover:shadow-gray-400/30",
                      
                  },
                  {
                    id: 2,
                    icon: <FaLinkedin size={18} />,
                    link: "https://www.linkedin.com/in/amitkumarpatra99",
                    color:
                      "hover:text-blue-600 dark:hover:text-blue-500 hover:border-blue-600 dark:hover:border-blue-500 hover:shadow-blue-600/30 dark:hover:shadow-blue-500/30",
                  },
                  {
                    id: 3,
                    icon: <FaWhatsapp size={18} />,
                    link: "https://wa.me/8144129955",
                    color:
                      "hover:text-green-600 dark:hover:text-green-500 hover:border-green-600 dark:hover:border-green-500 hover:shadow-green-600/30 dark:hover:shadow-green-500/30",
                  },
                  {
                    id: 4,
                    icon: <Coffee size={18} />,
                    link: "https://warmcup.vercel.app/",
                    color:
                      "hover:text-amber-600 dark:hover:text-amber-500 hover:border-amber-600 dark:hover:border-amber-500 hover:shadow-amber-600/30 dark:hover:shadow-amber-500/30",
                  },
                ].map((social) => (
                  <a
                    key={social.id}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 flex items-center justify-center rounded-full 
                      bg-black/5 dark:bg-white/5 
                      border border-black/10 dark:border-white/10 
                      text-gray-600 dark:text-gray-400 
                      transition-all duration-300 hover:scale-110 hover:shadow-lg backdrop-blur-md 
                      hover:bg-black/10 dark:hover:bg-white/10 ${social.color}`}
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
