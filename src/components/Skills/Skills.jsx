import React from "react";
import { SkillsInfo } from "../../constants";

const Skills = () => (
  <section id="skills" className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-skills-gradient clip-path-custom">
    {/* Section Title */}
    <div className="text-center mb-8">
      <p className="text-gray-400 mb-1text-[14px] font-semibold">Explore My</p>
      <h2 className="text-4xl font-bold text-white  hover:scale-105 transform transition-transform duration-300 mt-1 cursor-pointer">SKILSET</h2>
      <div className="w-24 h-[3px] rounded-full mx-auto mb-3 mt-3  bg-gradient-to-r from-[#2351A8] via-[#4FB7B3] to-[#2CB67D] shadow-[0_0_10px_#4FB7B3]"></div> 
          </div>

    <div className="flex flex-wrap gap-1 lg:gap-5 py-10 justify-between">
      {SkillsInfo.map((category) => (
        <div
          key={category.title}

          className=" backdrop-blur-md px-6 sm:px-10 py-8 sm:py-6 mb-10 w-full sm:w-[48%] rounded-2xl border border-[#4FB7B3] 
          shadow-[0_0_20px_1px_rgba(79,183,179,0.2)] hover:shadow-[0_0_25px_5px_rgba(79,183,179,0.3)]  transition-shadow duration-300"
          style={{
            background: 'linear-gradient(90deg, #0E1314, #042C33  )',
          }}>

          <h3 className="text-2xl sm:text-3xl font-semibold text-gray-400 mb-4 text-center">
            {category.title}
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full  cursor-pointer">
            {category.skills.map((skill) => (
              <div
                key={skill.name}
                className="flex items-center justify-center space-x-2 bg-black bg-opacity-30 border-2 border-slate-500 rounded-3xl py-2 px-2 sm:py-2 sm:px-2 text-center hover:bg-slate-900 hover:border-[#fff] transition-all duration-300 hover:scale-105">
                <img
                  src={skill.logo}
                  alt={`${skill.name} logo`}
                  className="w-6 h-6 sm:w-8 sm:h-8" />
                <span className="text-xs sm:text-sm text-gray-300">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section >
);

export default Skills;
