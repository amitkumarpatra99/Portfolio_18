import React, { useState } from "react";
import { projects } from "../../constants";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronDown, ChevronUp, ExternalLink, Github, X } from "lucide-react";
import { FiFolder } from "react-icons/fi";
import { RiExternalLinkLine } from "react-icons/ri";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const handleOpenModal = (project) => setSelectedProject(project);
  const handleCloseModal = () => setSelectedProject(null);

  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section
      id="work"
      className="py-24 pb-24 px-[8vw] md:px-[6vw] lg:px-[18vw] font-sans relative"
    >
      <div className="mb-16 flex items-center justify-center gap-2 ">
        <FiFolder className="text-4xl text-teal-500 animate-spin-slow drop-shadow-[0_0_12px_#4FB7B3]" />

        <div className="text-center">
          <p className="text-gray-400 mb-1 cursor-default text-sm tracking-[3px] uppercase">
            <span className="text-teal-600">Explore</span> My
          </p>

          <h2 className="text-4xl font-bold text-white cursor-pointer hover:scale-105 transform transition-transform duration-300">
            PROJECT <span className="text-teal-500">HUB</span>
          </h2>

          <div className="w-32 h-[3px] rounded-full mx-auto mb-3 mt-3 bg-gradient-to-r from-[#2351A8] via-[#4FB7B3] to-[#2CB67D] shadow-[0_0_10px_#4FB7B3]"></div>
        </div>
      </div>

      {/* Cards */}
      <motion.div
        layout
        className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 text-white "
      >
        <AnimatePresence>
          {visibleProjects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.8, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4 }}
              className="rounded-2xl border border-[#4FB7B3] backdrop-blur-md shadow-xl hover:shadow-teal-500 hover:-translate-y-2 hover:scale-[1.03] transition duration-300 cursor-pointer"
              onClick={() => handleOpenModal(project)}
              style={{
                background: "linear-gradient(90deg, #042C33, #0E1314 )",
              }}
            >
              <div className="p-5">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  src={project.image}
                  className="w-full h-40 object-cover rounded-xl"
                />
              </div>
              <div className="px-6 pb-6">
                <h3 className="text-2xl font-semibold text-slate-300 mb-2">
                  {project.title}
                </h3>
                <div className="flex items-center gap-4 mt-5">
                  {/* View Project Button */}
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleOpenModal(project)}
                    className="flex items-center gap-0.5 px-6 py-2 rounded-full text-white font-medium
               bg-[#071e22]/80 backdrop-blur-xl
               shadow-[0_0_12px_rgba(79,183,179,0.25)]
               border border-[#4FB7B3]/40 
               hover:bg-[#0b2e33]/80 
               transition-all duration-300"
                  >
                    Details <ArrowRight size={18} 
                    className="text-[#4FB7B3]"/>
                  </motion.button>

                  {/* View Live Button */}
                  {project.live && (
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-2 px-6 py-2 rounded-full text-white font-medium
                 bg-[#071e22]/80 backdrop-blur-xl
                 shadow-[0_0_12px_rgba(79,183,179,0.25)]
                 border border-[#4FB7B3]/40 
                 hover:bg-[#0b2e33]/80 
                 transition-all duration-300"
                    >
                      Live <RiExternalLinkLine size={18} 
                      className="text-[#4FB7B3]" />
                    </motion.a>
                  )}
                </div>

              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* View All Button */}
      <div className="flex justify-center mt-12">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            setShowAll(!showAll);
            if (showAll) {
              const section = document.getElementById("work");
              setTimeout(() => section?.scrollIntoView({ behavior: "smooth" }), 200);
            }
          }}
          className="flex items-center gap-2 px-6 py-3 rounded-full group  text-white font-medium  bg-[#071e22]/80 backdrop-blur-xl  shadow-[0_0_12px_rgba(79,183,179,0.25)  border border-[#4FB7B3]/40 hover:bg-[#0b2e33]/80  transition-all duration-300"
        >
          {showAll ? "Show Less" : "View All Projects"}
          {showAll ? <ChevronUp /> : <ChevronDown />}
        </motion.button>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-md flex justify-center items-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative bg-[#0B1A1F] rounded-2xl p-6 w-full max-w-3xl shadow-xl border border-teal-500/40"
            >
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 p-4 duration-300 ">
                <div
                  className="rounded-lg shadow-lg lg:w-full w-[90%] max-w-3xl overflow-hidden relative cursor-pointer shadow-[#1b4946] duration-300"
                  style={{
                    background: "linear-gradient(90deg, #0E1314,#042C33 )",
                  }}
                >
                  <div className="flex p-2 justify-end  mr-2 ">
                    <button
                      onClick={handleCloseModal}
                      className=" text-3xl font-bold text-red-600 hover:scale-125 transition-all duration-300"
                    >
                      <X size={18} />
                    </button>
                  </div>

                  <div className="flex flex-col">
                    <div
                      className="w-full flex justify-center px-4"
                      style={{
                        background: "linear-gradient(180deg, #0E1314,#042C33 )",
                      }}
                    >
                      <img
                        src={selectedProject.image}
                        alt={selectedProject.title}
                        className="lg:w-full w-[95%] object-contain rounded-xl"
                      />
                    </div>

                    <div className="lg:p-8 p-6">
                      <h3 className="lg:text-3xl font-bold text-white mb-4 text-md">
                        {selectedProject.title}
                      </h3>

                      <p className="text-gray-300 mb-6 lg:text-base text-xs">
                        {selectedProject.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-6 rounded-full">
                        {selectedProject.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="bg-[#173130] text-xs font-semibold text-[#4FB7B3] rounded-full px-2 py-1 hover:scale-105 transition-all duration-300 cursor-pointer"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* ✅ Buttons Section */}
                      <div className="flex gap-4">
                        {/* Code Button */}
                        <a
                          href={selectedProject.github}
                          target="_blank"
                          className="flex items-center gap-2 px-5 py-2 group  rounded-full text-white font-medium  bg-[#071e22]/80 backdrop-blur-xl  shadow-[0_0_12px_rgba(79,183,179,0.25)  border border-[#4FB7B3]/40 hover:bg-[#0b2e33]/80  transition-all duration-300"
                        >
                          <Github size={18} /> Code
                        </a>

                        {/* ✅ View Live Button — same style as Code */}
                        {selectedProject.live && (
                          <a
                            href={selectedProject.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-5 py-2 group rounded-full text-white font-medium bg-[#071e22]/80 backdrop-blur-xl shadow-[0_0_12px_rgba(79,183,179,0.25)] border border-[#4FB7B3]/40 hover:bg-[#0b2e33]/80 transition-all duration-300"
                          >
                            <ExternalLink size={18} /> Live
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Work;
