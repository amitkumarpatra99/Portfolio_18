import React, { useState } from "react";
import { experiences } from "../../constants"; // Import your data

const Experience = () => {

  // const [SelectedExperience, setSelectedExperience] = useState(null);

  // const handleOpenModal = (experience) => {
  //   setSelectedExperience(experience);
  // };
  // const handleCloseModal = () => {
  //   setSelectedExperience(null);
  // };


  return (
    <section
      id="experience"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-2 relative" >
      {/* Section Title */}
      <div className="text-center mb-16">

        <p className="text-gray-400 mb-1 text-[14px] font-semibold cursor-default">Internships</p>
        <h2 className="text-4xl font-bold text-white cursor-pointer hover:scale-105 transform transition-transform duration-300">EXPERIENCE</h2>

        <div className="w-32 h-[3px] rounded-full mx-auto mb-3 mt-3  bg-gradient-to-r from-[#2351A8] via-[#4FB7B3] to-[#2CB67D] shadow-[0_0_10px_#4FB7B3]"></div>
      </div>

      {/* Experience Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:-translate-x-0 w-1 bg-gradient-to-r from-[#2351A8] via-[#4FB7B3] to-[#2CB67D] shadow-[0_0_10px_#4FB7B3] h-full"></div>


        {/* Experience Entries */}
        {experiences.map((experience, index) => (
          <div
            key={experience.id}
            className={`flex flex-col sm:flex-row items-center mb-16 ${index % 2 === 0 ? "sm:justify-end" : "sm:justify-start"}`}>

            {/* Timeline Circle */}
            <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 bg-gray-400 border-2 border-[#4FB7B3] shadow-[0_0_10px_#4FB7B3] w-12 h-12 sm:w-16 sm:h-16 rounded-full flex justify-center items-center z-10 lg:hidden">
              <img
                src={experience.img}
                alt={experience.company}     
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            {/* Content Section */}
            <div
              className={`w-full sm:max-w-md p-4 sm:p-8 rounded-2xl  border border-[#4FB7B3] backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] ${index % 2 === 0 ? "sm:ml-0" : "sm:mr-0"
                } sm:ml-44 sm:mr-44 ml-8 transform transition-transform duration-300 hover:scale-105 hover:shadow-[#4FB7B3] hover:-translate-y-2 `}
              style={{
                background: 'linear-gradient(180deg, #042C33, #0E1314 )',
              }}>

              {/* Flex container for image and text */}
              <div className="flex items-center space-x-6">
                {/* Company Logo/Image */}
                <div className="w-16 h-16 bg-white rounded-md overflow-hidden">
                  <img
                    src={experience.img}
                    alt={experience.company}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Role, Company Name, and Date */}
                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-white">
                      {experience.role}
                    </h3>
                    <h4 className="text-md sm:text-sm mt-1 text-gray-300">
                      {experience.company}
                    </h4>
                  </div>
                  {/* Date at the bottom */}
                  <p className="text-sm text-slate-300 mt-1">
                    <span className="mr-1 text-slate-300 font-semibold"> Duration: </span>{experience.date}</p>
                </div>
              </div>

              <p className="mt-4 text-slate-300"><span className="text-slate-300 font-semibold m-1 mr-1">Project:</span>{experience.project}</p>

              <div className="mt-4">
                <ul className="flex flex-wrap mt-2">
                  <span className="text-slate-300  font-semibold mr-2">Skill:</span>
                  {experience.skills.map((skill, index) => (
                    <li
                      key={index}
                      className="inline-block  bg-[#173130] text-xs font-semibold text-[#4FB7B3] rounded-full px-2 py-1 mr-2 mb-2  hover:scale-105 transition-all duration-300 cursor-pointer">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="  hover:scale-105 transition-all duration-300 m-4 mt-5  ">

                {/* <button onClick={() => handleOpenModal(experience)}
                  type="button" className=" m-5 text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 hover:scale-105 transition-all duration-300 ">Tap To View</button> */}

                <a href={experience.certificate}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white bg-gradient-to-r  from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium text-sm px-5 py-2.5 text-center me-2 mb-2 rounded-full ">
                  Certificate </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* {SelectedExperience && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4  ">
          <div className="bg-slate-800 rounded-xl shadow-2xl lg:w-full w-[90%] max-w-3xl overflow-hidden relative">
            <div className="flex justify-end p-4">
              <button
                onClick={handleCloseModal}
                className="text-[#4FB7B3] text-3xl font-bold hover:text-red-600">
                &times;
              </button>
            </div>

            <div className="flex flex-col justify-center text-center">
              <div className=" flex justify-center bg-slate-800 px-4">
                <img
                  src={SelectedExperience.img}
                  alt={SelectedExperience.company}
                  className="lg:w-36   w-[95%] object-contain rounded-xl shadow-2xl" />
              </div>

              <div className="lg:p-8 p-6">
                <h3 className="lg:text-3xl font-bold text-white mb-4 text-md">
                  {SelectedExperience.company}
                </h3>
                <p className="text-gray-300 mb-3 lg:text-base text-xs"> <span className="mr-2 text-slate-400 font-semibold"> Project : </span>
                  {SelectedExperience.project}
                </p>
                <p className="text-gray-300 mb-6 lg:text-base text-xs">
                  {SelectedExperience.date}
                </p>

                <div className="flex flex-wrap gap-2 mb-6 rounded-full  justify-center">
                  <span className="text-slate-400 font-semibold text-center text-[15px]">Skill:</span>
                  {SelectedExperience.skills.map((skill, index) => (
                    <span
                      key={index}

                      className="bg-[#173130] text-xs font-semibold text-[#4FB7B3] rounded-full px-2 py-1 hover:scale-105 transition-all duration-300 cursor-pointer justify-center">
                      {skill}
                    </span>
                  ))}
                </div>


                <div className=" hover:scale-105 transition-all duration-300  ">
                  <a href={SelectedExperience.certificate}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium text-sm px-5 py-2.5 text-center me-2 mb-2 hover:scale-105 transition-all duration-300 rounded-full">
                    Certificate </a>
                </div>

              </div>
            </div>
          </div>
        </div>
      )} */}

    </section>
  );
};

export default Experience;
