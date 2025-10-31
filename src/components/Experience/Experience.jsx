// Improved responsive Experience component
import React from "react";
import { experiences } from "../../constants";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-5 px-4 sm:px-10 lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-2 relative"
    >
      {/* Section Title */}
      <div className="text-center mb-12">
        <p className="text-gray-400 mb-1  cursor-default  text-sm tracking-[3px] uppercase">
          <span className="text-teal-600">Intern</span>Ship
        </p>        <h2 className="text-3xl sm:text-4xl font-bold text-white hover:scale-105 transition-transform duration-300">
          EXPER<span className="text-teal-500">IENCE</span>
        </h2>
        <div className="w-28 sm:w-32 h-[3px] mx-auto mt-3 bg-gradient-to-r from-[#2351A8] via-[#4FB7B3] to-[#2CB67D] rounded-full shadow-[0_0_10px_#4FB7B3]"></div>
      </div>

      <div className="relative max-w-4xl mx-auto">
        {/* Vertical line */}
        <div className="absolute left-[18px] sm:left-1/2 top-0 w-1 bg-gradient-to-r from-[#2351A8] via-[#4FB7B3] to-[#2CB67D] h-full"></div>

        {experiences.map((experience, index) => (
          <div
            key={experience.id}
            className={`flex flex-col sm:flex-row items-center mb-16 ${index % 2 === 0 ? "sm:justify-end" : "sm:justify-start"}`}
          >
            {/* Timeline Dot */}
            <div className="absolute lg:hidden sm:left-1/2 left-[18px] -translate-x-1/2 bg-gray-400 border-2 border-[#4FB7B3] shadow-[0_0_10px_#4FB7B3] w-10 h-10 sm:w-14 sm:h-14 rounded-full flex items-center justify-center z-10">
              <img src={experience.img} alt={experience.company} className="w-full h-full rounded-full object-cover" />
            </div>

            <div
              className={`w-full sm:max-w-md mt-14 sm:mt-0 p-4 sm:p-6 rounded-xl border border-[#4FB7B3] backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] transition-all duration-300 hover:scale-[1.02] hover:-translate-y-2 ${index % 2 === 0 ? "sm:ml-10" : "sm:mr-10"}`}
              style={{ background: "linear-gradient(180deg, #042C33, #0E1314)" }}
            >
              <div className="flex items-center gap-4 sm:gap-6">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white rounded-md overflow-hidden">
                  <img src={experience.img} alt={experience.company} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-2xl font-semibold text-white">{experience.role}</h3>
                  <p className="text-gray-300 text-sm sm:text-base">{experience.company}</p>
                  <p className="text-gray-400 text-xs sm:text-sm mt-1"><span className="font-semibold">Duration:</span> {experience.date}</p>
                </div>
              </div>

              <p className="mt-3 text-gray-300 text-sm sm:text-base"><span className="font-semibold">Project:</span> {experience.project}</p>

              <div className="mt-3 flex flex-wrap gap-2 text-xs sm:text-sm">
                <span className="font-semibold text-slate-300">Skills:</span>
                {experience.skills.map((skill, i) => (
                  <span key={i} className="bg-[#173130] text-[#4FB7B3] px-2 py-1 rounded-full hover:scale-105 transition cursor-pointer">
                    {skill}
                  </span>
                ))}
              </div>

              <div className="mt-4">
                <a
                  href={experience.certificate}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 px-5 py-2 rounded-full text-sm font-medium shadow-lg hover:scale-105 transition"
                >
                  Certificate
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
