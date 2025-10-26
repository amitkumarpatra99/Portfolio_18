import React from "react";
import { education } from "../../constants"; // Import the education data

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-3">
      {/* Section Title */}
      <div className="text-center mb-16">
         <p className="text-gray-400 mb-1 text-[14px] font-semibold cursor-default">Explore My</p>
        <h2 className="text-4xl font-bold text-white cursor-pointer hover:scale-105 transform transition-transform duration-300">EDUCATION</h2>
        <div className="w-32 h-[3px] bg-[#4FB7B3] mx-auto mt-2"></div>
      </div>

      {/* Education Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute sm:left-1/2 left-0 transform-translate-x-1/2 sm:-translate-x-0 w-1 bg-white h-full"></div>

        {/* Education Entries */}
        {education.map((edu, index) => (
          <div
            key={edu.id}
            className={`flex flex-col sm:flex-row items-center mb-16 ${index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
              }`}
          >
            {/* Timeline Circle */}
            {/* <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 bg-gray-400 border-4 border-[#4FB7B3] w-12 h-12 sm:w-16 sm:h-16 rounded-full flex justify-center items-center z-10">
              <img
                src={edu.img}
                alt={edu.school}
                className="w-full h-full object-cover rounded-full"
              />
            </div> */}

            {/* Content Section */}
            <div
              className={`w-full sm:max-w-md p-4 sm:p-8 rounded-2xl  border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] ${index % 2 === 0 ? "sm:ml-0" : "sm:mr-0"} sm:ml-44 sm:mr-44 ml-8 transform transition-transform duration-300 hover:scale-105 hover:shadow-[#4FB7B3]`}>

              {/* Flex container for image and text */}
              <div className="flex items-center space-x-6">

                {/* School Logo/Image */}
                <div className="w-28 h-full bg-white rounded-md overflow-hidden">
                  <img src={edu.img}
                    alt={edu.school}
                    className="w-full h-full object-cover" />
                </div>

                {/* Degree, School Name, and Date */}
                <div className="flex flex-col justify-between">
                  <div>
                    <h4 className="text-xl sm:text-xl font-semibold text-gray-300">
                      {edu.school}
                    </h4>
                    <h3 className="text-md sm:text-sm mt-2 text-slate-200">
                      {edu.degree}
                    </h3>
                  </div>

                  {/* Date at the bottom */}
                  <p className="text-sm text-slate-400 mt-2">{edu.date}</p>
                </div>
              </div>
              <p className="mt-4 text-gray-400">{edu.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
