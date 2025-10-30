import React from "react";
import { Briefcase, Code, User } from "lucide-react";
import { motion } from "framer-motion";
import profileImage from '../../assets/certificate/A.jpg';

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const AboutSection = () => {
  return (
    <section id="about2" className="py-24 px-4 md:px-6 lg:px-12 relative text-white">
      <div className="container mx-auto max-w-6xl">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white cursor-pointer hover:scale-105 transform transition-transform duration-300">
            ABOUT
          </h2>
          <div className="w-24 h-[3px] rounded-full mx-auto mb-3 mt-2 bg-gradient-to-r from-[#2351A8] via-[#4FB7B3] to-[#2CB67D] shadow-[0_0_10px_#4FB7B3]"></div>
          {/* <p className="text-gray-400 mt-3 text-sm md:text-lg font-medium">
            aaa
          </p> */}
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
              <div className="absolute bottom-6 left-6 bg-white/20 backdrop-blur-xl px-6 py-3 rounded-xl border border-white/30 shadow-lg">
                <p className="text-s font-medium">MR PATRA</p>
                <p className="text-xl font-bold">.WEB</p>
              </div>

              {/* Badge top-right */}
              {/* <div className="absolute top-6 right-6 bg-white/20 backdrop-blur-xl px-6 py-3 rounded-xl border border-white/30 shadow-lg">
                <p className="text-3xl font-bold">1+</p>
                <p className="text-xs font-medium">Years Experience</p>
              </div> */}
            </div>
          </motion.div>

          {/* Right Text Section */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* <p className="text-gray-300 text-base leading-relaxed">
              I am a MERN Full Stack Developer passionate about building interactive, responsive web applications.
              I enjoy solving problems and continuously learning new technologies to create innovative solutions.
            </p> */}

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
            <div className="flex gap-4 pt-4">
              <a href="https://drive.google.com/file/d/1TnnNQ06vYZcnq48VJr2bxk1FNLL53T5Q/view?usp=sharing" className="px-8 py-3 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full font-semibold hover:scale-105 transition">Download CV</a>
              <a href="" className="px-8 py-3 border border-cyan-400 text-cyan-300 rounded-full hover:bg-cyan-500/20 hover:scale-105 transition">Contact</a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// ✅ Enhanced with animated gradient border, glassmorphism, blobs & smooth scroll
export default AboutSection;
