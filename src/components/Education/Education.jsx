import React from "react";
import { education } from "../../constants"; // Import the education data

const Education = () => {
  return (
    <section
      id="education"
      className="py-5 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-3">
      {/* Section Title */}
      <div className="text-center mb-16">
        <p className="text-gray-400 text-sm tracking-[3px] uppercase">
          <span className="text-teal-600">Explore</span> My
        </p>     
           <h2 className="text-4xl font-bold text-white cursor-pointer hover:scale-105 transform transition-transform duration-300">EDUC
            <span className="text-teal-500">ATION</span></h2>
        <div className="w-32 h-[3px] rounded-full mx-auto mb-3 mt-3  bg-gradient-to-r from-[#2351A8] via-[#4FB7B3] to-[#2CB67D] shadow-[0_0_10px_#4FB7B3]"></div>

      </div>

      {/* Education Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute sm:left-1/2 left-0 transform-translate-x-1/2 sm:-translate-x-0 w-1 bg-gradient-to-r from-[#2351A8] via-[#4FB7B3] to-[#2CB67D] shadow-[0_0_10px_#4FB7B3] h-full"></div>

        {/* Education Entries */}
        {education.map((edu, index) => (
          <div
            key={edu.id}
            className={`flex flex-col sm:flex-row items-center mb-16 ${index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"}`}>

            {/* Timeline Circle */}
            <div className="sm:w-full  lg:hidden  ">
              <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2  bg-gray-400 border-2 border-[#4FB7B3] shadow-[0_0_10px_#4FB7B3] w-12 h-12 sm:w-16 sm:h-16 rounded-full flex justify-center items-center z-10 transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#4FB7B3]">
                <img
                  src={edu.img}
                  alt={edu.school}
                  className="w-full h-full object-cover rounded-full "
                />
              </div>
            </div>
            {/* Content Section */}
            <div
              className={`w-full sm:max-w-md p-4 sm:p-8 rounded-2xl  border border-[#4FB7B3]  backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] ${index % 2 === 0 ? "sm:ml-0" : "sm:mr-0"} sm:ml-44 sm:mr-44 ml-8 transform transition-transform duration-300 hover:scale-105 hover:shadow-[#4FB7B3] `}
              style={{
                background: 'linear-gradient(180deg, #042C33, #0E1314 )',
              }}>

              {/* Flex container for image and text */}
              <div className="flex items-center space-x-6">

                {/* School Logo/Image */}
                <div className="w-28 h-full bg-white rounded-md overflow-hidden">
                  <img src={edu.img}
                    alt={edu.school}
                    className="w-full h-full object-cover" />
                </div>

                {/* Degree, School Name,Address and Date */}
                <div className="flex flex-col justify-between">
                  <div>
                    <h4 className="text-xl sm:text-xl font-semibold text-slate-200">{edu.school} </h4>
                    <h5 className="text-sm sm:text-sm text-slate-300">{edu.add}</h5>
                    <h3 className="text-md sm:text-sm mt-2  text-slate-200"> {edu.degree}</h3>
                  </div>
                  {/* Date */}
                  <p className="text-sm text-slate-400 mt-1">{edu.date}</p>
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
