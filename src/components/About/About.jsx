import React from "react";
import { Briefcase, Code, ExternalLink, User, UserCircle } from "lucide-react";
import { motion } from "framer-motion";
import profileImage from '../../assets/certificate/A.jpg';
import { FaGithub, FaLinkedin, FaWhatsapp, } from "react-icons/fa6";
import ScrollDownButton from "../ScrollButtons";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const icons = [
  { id: 1, icon: <FaGithub size={18} />, link: "https://github.com/amitkumarpatra99" },
  { id: 2, icon: <FaLinkedin size={18} />, link: "https://www.linkedin.com/in/amitkumarpatra99" },
  { id: 5, icon: <FaWhatsapp size={18} />, link: "https://wa.me/8144129955" },
  // { id: 4, icon: <FaInstagram size={18} />, link: "https://www.instagram.com/mr_patraa_" },
  // { id: 3, icon: <FaTwitter size={18} />, link: "https://x.com/mr_patra_" },
  // {id:5, icon:<Mail size={18} />, link:"mailto:mrpatra.web@gmail.com" },
];

const About = () => {
  return (
    <section id="about" className="py-24 px-4 md:px-6 lg:px-12 relative text-white">
      <div className="container mx-auto max-w-6xl">
        {/* Heading */}

        <div className="container mx-auto max-w-6xl">
          {/* Heading */}
          <div className="mb-16 flex items-center justify-center gap-3">

            {/* About Icon */}
            <UserCircle
              size={32}
              className="text-6xl text-teal-500 drop-shadow-[0_0_12px_#4FB7B3] hover:scale-110 transition-transform duration-300"
            />

            {/* Text Section */}
            <div className="text-center">
              <p className="text-gray-400 mb-1 cursor-default text-sm tracking-[3px] uppercase">
                <span className="text-teal-600">Know</span> More
              </p>

              <h2 className="text-3xl md:text-4xl font-bold text-white cursor-pointer hover:scale-105 transform transition-transform duration-300">
                ABOUT <span className="text-teal-500">ME</span>
              </h2>

              <div className="w-24 h-[3px] rounded-full mx-auto mb-3 mt-2 bg-gradient-to-r from-[#2351A8] via-[#4FB7B3] to-[#2CB67D] shadow-[0_0_10px_#4FB7B3]"></div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Image Card */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative flex justify-center md:justify-start"
          >
            <div className="w-full max-w-lg rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_40px_rgba(0,200,255,0.25)]">
              <img
                src={profileImage}
                alt="profile"
                className="w-full h-[430px] object-cover object-center"
              />

              {/* Badge bottom-left */}
              {/* <div className="absolute bottom-6 left-6 bg-white/20 backdrop-blur-xl px-6 py-3 rounded-xl border border-white/30 shadow-lg">
                <p className="text-s font-medium">MR PATRA</p>
                <p className="text-xl font-bold">.WEB</p>
              </div> */}

              {/* Badge top-right */}
              {/* <div className="absolute top-6 right-6 bg-white/20 backdrop-blur-xl px-6 py-3 rounded-xl border border-white/30 shadow-lg">
                <p className="text-3xl font-bold">.... </p>
                <p className="text-xs font-medium">.... </p>
              </div> */}

            </div>
          </motion.div>

          {/* Right Text Section */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6">

            <div className="grid grid-cols-1 gap-6">
              {[
                { icon: <Code className="h-6 w-6 text-primary" />, title: "Web Development", desc: "Building modern responsive web apps." },
                { icon: <User className="h-6 w-6 text-primary" />, title: "UI / UX Design", desc: "Designing clean and intuitive user experiences." },
                { icon: <Briefcase className="h-6 w-6 text-primary" />, title: "Project Management", desc: "Delivering results with agile workflows." },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="p-5 md:p-6 rounded-xl border relative overflow-hidden bg-gradient-to-r from-indigo-600/30 via-primary/40 to-teal-500/30 backdrop-blur-xl border-white/20 transition-all duration-300 hover:scale-[1.05] hover:shadow-[0_0_15px_rgba(0,200,255,0.6)] hover:border-primary"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-cyan-400 opacity-0 group-hover:opacity-100 blur-xl transition-all duration-300"></div>

                  <div className="relative flex items-start gap-4">
                    <div className="p-3 rounded-full bg-primary/20 shadow-md shadow-primary/40">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-base md:text-lg">{item.title}</h4>
                      <p className="text-gray-300 text-sm md:text-base">{item.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex gap-5 pt-4 items-center">

              <div className="flex gap-2 sm:gap-6 pt-6 ">
                <a
                  href="https://drive.google.com/file/d/15A-cHbMWjlDZHDiuV2gFD_a0iDNNUjYC/view?usp=sharing"
                  target="_blank"
                  className="flex items-center gap-2 px-5 py-2 group  rounded-full text-white font-medium  bg-[#071e22]/80 backdrop-blur-xl  shadow-[0_0_12px_rgba(79,183,179,0.25)  border border-[#4FB7B3]/40 hover:bg-[#0b2e33]/80  transition-all duration-300">
                  MY CV<ExternalLink size={18} />
                </a>
              </div>


              <div className="flex space-x-4 mt-4">
                {icons.map((item) => (
                  <a
                    key={item.id}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative group hover:scale-105 transition-all duration-300">
                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1a1f2b] text-[#fff] 
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
          </motion.div>
        </div>
      </div>
      {/* <ScrollDownButton next="skills" /> */}

    </section>

  );
};

export default About;
