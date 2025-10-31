import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { SkillsInfo } from "../../constants";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { RiToolsFill } from "react-icons/ri";

const Skills = () => {
  const [ref, slider] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    dragSpeed: 0.8,
    slides: {
      perView: 1,
      spacing: 14,
    },
    breakpoints: {
      "(min-width: 600px)": {
        slides: { perView: 1.2, spacing: 16 },
      },
      "(min-width: 900px)": {
        slides: { perView: 1.6, spacing: 18 },
      },
      "(min-width: 1200px)": {
        slides: { perView: 2, spacing: 22 },
      },
    },
    animation: {
      duration: 650,
      easing: (t) => 1 - Math.pow(1 - t, 3), // smooth cubic ease
    }
  });

  return (
    <section id="skills" className="py-24 px-[5vw] font-sans bg-[]">

      {/* Title */}
      <div className="mb-12 flex items-center justify-center gap-4">

        {/* Skills Icon */}
        <RiToolsFill
          className="text-4xl text-teal-500 drop-shadow-[0_0_12px_#4FB7B3] hover:scale-110 transition-transform duration-300"
        />

        {/* Text Block */}
        <div className="text-center">

          <p className="text-gray-400 text-sm tracking-[3px] uppercase">
            <span className="text-teal-600">Explore</span> My
          </p>

          <h2 className="text-4xl font-bold text-white mt-1 hover:scale-105 transition duration-400">
            SKILL <span className="text-teal-500">SET</span>
          </h2>

          <div className="w-20 h-[3px] rounded-full mx-auto mb-3 mt-3 bg-gradient-to-r from-[#2351A8] via-[#4FB7B3] to-[#2CB67D] shadow-[0_0_10px_#4FB7B3]"></div>
        </div>
      </div>

      {/* Slider + Buttons */}
      <div className="relative max-w-[1200px] mx-auto px-10 sm:px-16 lg:px-24">

        <div ref={ref} className="keen-slider">
          {SkillsInfo.map((category) => (
            <div
              key={category.title}
              className="keen-slider__slide rounded-2xl border border-[#4FB7B377]
              bg-[rgba(15,25,31,0.65)]
              shadow-[0_0_10px_rgba(79,183,179,0.15)]
              hover:shadow-[0_4px_35px_rgba(79,183,179,0.25)]
              backdrop-blur-xl transition-all duration-500
              p-5 sm:p-7 transform hover:-translate-y-2 scale-[0.97] hover:scale-100"
            >
              <h3 className="text-xl sm:text-[1.45rem] font-semibold text-[#4FB7B3] mb-4 text-center">
                {category.title}
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-2 bg-[rgba(5,12,14,0.45)] 
                    border border-[#4FB7B355] rounded-xl px-2 py-2
                    hover:bg-[rgba(5,12,14,0.7)]
                    hover:border-[#ffffff66] transition-all duration-300"
                  >
                    <img src={skill.logo} className="w-6 h-6 sm:w-7 sm:h-7 drop-shadow-md" alt="" />
                    <span className="text-xs sm:text-sm text-gray-300">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Arrows */}
        <button
          onClick={() => slider.current?.prev()}
          className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2
          bg-[#0E1B22]/90 hover:bg-[#15323D]
          border border-white/10 rounded-full p-3 sm:p-4
          shadow-lg backdrop-blur-md transition
          hover:scale-110 hover:shadow-[0_0_12px_#4FB7B3]"
        >
          <ChevronLeft className="text-white w-5 h-5" />
        </button>

        <button
          onClick={() => slider.current?.next()}
          className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2
          bg-[#0E1B22]/90 hover:bg-[#15323D]
          border border-white/10 rounded-full p-3 sm:p-4
          shadow-lg backdrop-blur-md transition
          hover:scale-110 hover:shadow-[0_0_12px_#4FB7B3]"
        >
          <ChevronRight className="text-white w-5 h-5" />
        </button>
      </div>
    </section>
  );
};

export default Skills;
