import React, { useState } from "react";
import { projects } from "../../constants";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <section
      id="work"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans relative">
      <div className="text-center mb-16">
        <p className="text-gray-400 mb-1 text-[14px] font-semibold cursor-default">Explore My</p>
        <h2 className="text-4xl font-bold text-white cursor-pointer hover:scale-105 transform transition-transform duration-300">PROJECT HUB</h2>

        <div className="w-32 h-[3px] bg-[#4FB7B3] mx-auto mt-3"></div>
      </div>

      <div className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => handleOpenModal(project)}
            className="border border-white bg-gray-900 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden cursor-pointer  hover:shadow-[#4FB7B3] hover:-translate-y-2 transition-transform duration-300">
            <div className="p-5">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-32 object-cover rounded-xl" />
            </div>

            <div className="p-6">
              <h3 className="text-2xl font-bold text-slate-300 mb-2">
                {project.title}
              </h3>

              {/* <p className="text-gray-500 mb-4 pt-4 line-clamp-3">
                Click Here To View Full Details</p> */}

              {/* <div className="mb-4">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-block  bg-[#173130] text-xs font-semibold text-[#4FB7B3] rounded-full px-2 py-1 mr-2 mb-2  hover:scale-105 transition-all duration-300 cursor-pointer">
                    {tag}
                  </span>
                ))}
              </div> */}

              <button type="button" className="mt-4 text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 hover:scale-105 transition-all duration-300 ">Tap To View</button>
            </div>
          </div>
        ))}
      </div>


      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4 ">
          <div className="bg-slate-800 rounded-xl shadow-2xl lg:w-full w-[90%] max-w-3xl overflow-hiddden relative">
            <div className="flex justify-end p-4">
              <button
                onClick={handleCloseModal}
                className="text-[#4FB7B3] text-3xl  font-bold hover:text-red-600 hover:scale-125 transition-all duration-300">
                &times;
              </button>
            </div>

            <div className="flex flex-col ">

              <div className="w-full flex justify-center bg-slate-800 px-4">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="lg:w-full w-[95%] object-contain rounded-xl shadow-2xl" />
              </div>
              <div className="lg:p-8 p-6">
                <h3 className="lg:text-3xl font-bold text-white mb-4  text-md">
                  {selectedProject.title}
                </h3>

                <p className="text-gray-300 mb-6 lg:text-base text-xs">
                  {selectedProject.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6 rounded-full">
                  {selectedProject.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-[#173130] text-xs font-semibold text-[#4FB7B3] rounded-full px-2 py-1 hover:scale-105 transition-all duration-300 cursor-pointer">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="w-[125px] hover:scale-105 transition-all duration-300">
                  <a href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium text-sm px-5 py-2.5 text-center me-2 mb-2 hover:scale-105 transition-all duration-300 rounded-full">
                    View Code  </a>
                </div>

              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;
