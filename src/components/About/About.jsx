import React from "react";
import { Briefcase, Code, ExternalLink, User, UserCircle } from "lucide-react";
import { motion } from "framer-motion";
import profileImage from "../../assets/certificate/A.jpg";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa6";
// import ScrollDownButton from "../ScrollButtons";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const icons = [
  {
    id: 1,
    icon: <FaGithub size={18} />,
    link: "https://github.com/amitkumarpatra99",
  },
  {
    id: 2,
    icon: <FaLinkedin size={18} />,
    link: "https://www.linkedin.com/in/amitkumarpatra99",
  },
  { id: 5, icon: <FaWhatsapp size={18} />, link: "https://wa.me/8144129955" },
];

const About = () => {
  return (
    <section
      id="about"
      className="py-24 px-4 md:px-8 lg:px-12 relative text-white overflow-hidden "
    >
      
      <div className="container mx-auto max-w-6xl flex flex-col gap-20">
        {/* Heading */}

        <div className="mb-12 flex items-center justify-center gap-4">

          {/* Skills Icon */}
          <UserCircle size={40}
            className="text-4xl text-teal-500 drop-shadow-[0_0_12px_#4FB7B3] hover:scale-110 transition-transform duration-300"
          />

          {/* Text Block */}
          <div className="text-center">

            <p className="text-gray-400 text-sm tracking-[3px] uppercase">
              <span className="text-teal-600">Explore</span> My
            </p>

            <h2 className="text-4xl font-bold text-white mt-1 hover:scale-105 transition duration-400">
              SKILL <span className="text-teal-500">SET</span>
            </h2>

            <div className="w-20 h-[3px] rounded-full mx-auto mb-3 mt-3 bg-gradient-to-r from-[#2351A8] via-[#4FB7B3] to-[#2CB67D] shadow-[0_0_10px_#4FB7B3]"></div>
          </div>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 md:gap-20">
          {/* Left Image Card */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center md:justify-end "
          >
            <div className="relative w-full max-w-md md:max-w-lg rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_40px_rgba(0,200,255,0.25)]">
              <img
                src={profileImage}
                alt="Profile"
                className="w-full h-[420px] md:h-[460px] object-cover object-center rounded-3xl"
              />
              {/* Badge bottom-left  and top right*/}

              {/* <div className="absolute bottom-6 left-6 bg-white/15 backdrop-blur-xl px-6 py-3 rounded-xl border border-white/30 shadow-lg">
                <p className="text-sm font-medium">MR PATRA</p>
                <p className="text-xl font-bold">.WEB</p>
              </div>

              <div className="absolute top-6 right-6 bg-white/15 backdrop-blur-xl px-6 py-3 rounded-xl border border-white/30 shadow-lg text-right">
                <p className="text-sm font-medium">CREATIVE</p>
                <p className="text-xl font-bold ">DESIGNER</p>
              </div> */}


            </div>
          </motion.div>

          {/* Right Text Section */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8 md:pl-6"
          >
            {/* Info Cards */}
            <div className="grid grid-cols-1 gap-6">
              {[
                {
                  icon: <Code className="h-6 w-6 text-teal-400" />,
                  title: "Web Development",
                  desc: "Building modern responsive web applications with clean and efficient code.",
                },
                {
                  icon: <User className="h-6 w-6 text-teal-400" />,
                  title: "UI / UX Design",
                  desc: "Designing user-centric, elegant, and intuitive digital experiences.",
                },
                {
                  icon: <Briefcase className="h-6 w-6 text-teal-400" />,
                  title: "Project Management",
                  desc: "Delivering projects with clear planning and agile execution.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="relative p-5 md:p-6 rounded-xl border border-white/20 bg-gradient-to-br from-[#112032]/50 via-[#0a1a26]/40 to-[#10363a]/40 backdrop-blur-xl transition-all duration-300 hover:scale-[1.05] hover:shadow-[0_0_20px_rgba(79,183,179,0.6)] hover:border-teal-400"
                >
                  <div className="relative flex items-start gap-4">
                    <div className="p-3 rounded-full bg-[#112e35]/60 shadow-inner shadow-teal-500/30">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-base md:text-lg text-white">
                        {item.title}
                      </h4>
                      <p className="text-gray-300 text-sm md:text-base">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-6 pt-6">
              <a
                href="https://drive.google.com/file/d/1xgU-OvduPOkcmW6dzjLCwNYCRdNBGHdU/view?usp=sharing"
                target="_blank"
                className="flex items-center gap-2 px-6 py-3 rounded-full text-white font-medium bg-[#071e22]/80 backdrop-blur-xl shadow-[0_0_12px_rgba(79,183,179,0.25)] border border-[#4FB7B3]/40 hover:bg-[#0b2e33]/80 hover:scale-105 transition-all duration-300"
              >
                MY CV <ExternalLink size={18} />
              </a>

              <div className="flex space-x-4">
                {icons.map((item) => (
                  <a
                    key={item.id}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative group hover:scale-110 transition-all duration-300"
                  >
                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1a1f2b] text-white transition-all duration-300 group-hover:bg-[#0b2e33]">
                      {item.icon}
                    </div>
                    {/* Neon Glow */}
                    <div
                      className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 blur-md transition-all duration-500"
                      style={{
                        background:
                          "conic-gradient(from 0deg, #7f5af0, #2cb67d, #7f5af0)",
                      }}
                    ></div>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Optional Scroll Button */}
      {/* <ScrollDownButton next="skills" /> */}
    </section>
  );
};

export default About;
