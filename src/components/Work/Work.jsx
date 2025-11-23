import React, { useState } from "react";
import { projects } from "../../constants";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronDown, ChevronUp, ExternalLink, Folder, Github, X } from "lucide-react";
import { RiExternalLinkLine } from "react-icons/ri";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const handleOpenModal = (project) => setSelectedProject(project);
  const handleCloseModal = () => setSelectedProject(null);

  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.5, type: "spring" } 
    },
  };

  return (
    <section
      id="work"
      className="py-24 px-[8vw] md:px-[6vw] lg:px-[18vw] font-sans relative overflow-hidden "
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-teal-500/10 rounded-full blur-[120px] -z-10" />

           <div className="mb-16 flex items-center justify-center gap-2">
        <Folder
          size={30}
          className="text-4xl text-[#4FB7B3] animate-spin-slow drop-shadow-[0_0_12px_#4FB7B3]"
        />

        <div className="text-center">
          <p className="text-gray-400 mb-1 cursor-default text-sm tracking-[3px] uppercase">
            Explore<span className="text-[#4FB7B3]">My</span>
          </p>

          <h2 className="text-4xl font-bold text-white cursor-pointer hover:scale-105 transform transition-transform duration-300">
            PROJ<span className="text-[#4FB7B3]">ECTS</span>
          </h2>

          <div className="w-28 h-[3px] rounded-full mx-auto mb-3 mt-3 bg-gradient-to-r from-[#2351A8] via-[#4FB7B3] to-[#2CB67D] shadow-[0_0_10px_#4FB7B3]"></div>
        </div>
      </div>

      <motion.div
        layout
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 text-white"
      >
        <AnimatePresence mode="popLayout">
          {visibleProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              layout
              className="group relative rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl shadow-2xl transition-all duration-500 hover:shadow-[0_0_30px_rgba(79,183,179,0.3)] hover:border-teal-500/30 overflow-hidden cursor-pointer"
              onClick={() => handleOpenModal(project)}
            >

              <div className="p-4 pb-0 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#071e22]/90 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-2xl"
                />
              </div>

              <div className="p-6 relative z-20">
                <h3 className="text-xl font-bold text-slate-100 mb-1 group-hover:text-teal-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-slate-400 mb-6 line-clamp-2">
                  Click for details regarding tech stack and features.
                </p>

                <div className="flex items-center gap-3">
                  {/* 🔥 BUTTON 1: DETAILS */}
                  <button
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 
                    rounded-full text-sm font-semibold 
                    text-white bg-white/5 border border-white/10 
                    hover:bg-teal-500/20 hover:border-teal-500/50 
                    transition-all duration-300"
                  >
                    Details <ArrowRight size={16} className="text-teal-400" />
                  </button>

                  {/* 🔥 BUTTON 2: LIVE (NOW SAME SIZE AS DETAILS) */}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      onClick={(e) => e.stopPropagation()}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 
                      rounded-full text-sm font-semibold 
                      text-teal-400 bg-teal-500/10 border border-teal-500/20 
                      hover:bg-teal-500 hover:text-white 
                      transition-all duration-300"
                    >
                      Live <RiExternalLinkLine size={18} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <div className="flex justify-center mt-16">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            setShowAll(!showAll);
            if (showAll) {
              setTimeout(() => document.getElementById("work")?.scrollIntoView({ behavior: "smooth" }), 200);
            }
          }}
          className="
            group flex items-center gap-3 px-10 py-4 rounded-full
            text-white font-semibold tracking-wide
            bg-gradient-to-r from-[#0b2a2e] to-[#04181b]
            border border-teal-500/30
            shadow-[0_0_20px_rgba(79,183,179,0.15)]
            hover:shadow-[0_0_30px_rgba(79,183,179,0.3)]
            hover:border-teal-400/50
            transition-all duration-300
          "
        >
          {showAll ? "Show Less" : "View All Projects"}
          {showAll ? (
            <ChevronUp className="text-teal-400 group-hover:-translate-y-1 transition-transform" />
          ) : (
            <ChevronDown className="text-teal-400 group-hover:translate-y-1 transition-transform" />
          )}
        </motion.button>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center px-3 bg-black/60 backdrop-blur-md"
            onClick={handleCloseModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="
                relative w-full max-w-3xl rounded-2xl overflow-hidden 
                bg-[#0B1215] border border-teal-500/30 shadow-2xl
                max-h-[90vh] flex flex-col
              "
              onClick={(e) => e.stopPropagation()}
            >

              <button
                onClick={handleCloseModal}
                className="absolute top-3 right-3 z-10 p-2 rounded-full bg-black/40 text-white/70 hover:text-white hover:bg-red-500/80 transition"
              >
                <X size={18} />
              </button>

              <div className="flex flex-col md:flex-row w-full h-full">

                <div className="w-full md:w-1/2 flex items-center justify-center bg-gradient-to-br from-teal-900/20 to-black p-4">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="rounded-xl shadow-lg border border-white/5 object-contain max-h-[180px] sm:max-h-[240px] md:max-h-[320px] w-full"
                  />
                </div>

                <div className="w-full md:w-1/2 flex flex-col justify-between p-5 sm:p-6 md:p-8 overflow-hidden">
                  
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2">
                    {selectedProject.title}
                  </h3>

                  <p className="text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed mb-4">
                    {selectedProject.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {selectedProject.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 text-[10px] sm:text-xs font-medium text-teal-300 bg-teal-500/10 border border-teal-500/20 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* 🔥 FULL ROUNDED BUTTONS IN MODAL (UNCHANGED) */}
                  <div className="flex gap-3 w-full">
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      className="flex-1 flex items-center justify-center gap-2 px-5 py-3 
                      rounded-full text-sm sm:text-base font-semibold 
                      text-white bg-white/5 border border-white/10 
                      hover:bg-white/10 transition"
                    >
                      <Github size={16} /> Code
                    </a>

                    {selectedProject.live && (
                      <a
                        href={selectedProject.live}
                        target="_blank"
                        className="flex-1 flex items-center justify-center gap-2 px-5 py-3 
                        rounded-full text-sm sm:text-base font-semibold 
                        text-white bg-teal-600 hover:bg-teal-500 
                        shadow-lg shadow-teal-500/20 transition"
                      >
                        <ExternalLink size={16} /> Live
                      </a>
                    )}
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