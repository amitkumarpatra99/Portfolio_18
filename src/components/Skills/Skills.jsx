import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { SkillsInfo } from "../../constants";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { RiToolsFill } from "react-icons/ri";

const Skills = () => {
  const [ref, slider] = useKeenSlider({
    loop: true,
    dragSpeed: 1, // 1:1 touch response for mobile
    renderMode: "performance", // Optimizes for mobile GPUs
    slides: {
      perView: 1, // Show exactly 1 card on mobile
      spacing: 16, // Tighter spacing on mobile
    },
    breakpoints: {
      "(min-width: 640px)": {
        slides: { perView: 1.1, spacing: 20 }, // Peek the next slide on large phones
      },
      "(min-width: 768px)": {
        slides: { perView: 1.3, spacing: 24 }, // Tablet view
      },
      "(min-width: 1024px)": {
        slides: { perView: 1.5, spacing: 32 }, // Small laptop
      },
      "(min-width: 1280px)": {
        slides: { perView: 2, spacing: 40 }, // Large Desktop
      },
    },
  });

  return (
    <section id="skills" className="py-16 md:py-24 bg-[#09090b] relative overflow-hidden font-sans">

      {/* Background: Adaptive Blurs (Smaller on mobile for performance) */}
      <div className="absolute top-0 left-0 md:left-1/4 w-64 md:w-[500px] h-64 md:h-[500px] bg-purple-600/10 rounded-full blur-[80px] md:blur-[100px] pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-0 right-0 md:right-1/4 w-64 md:w-[500px] h-64 md:h-[500px] bg-teal-600/10 rounded-full blur-[80px] md:blur-[100px] pointer-events-none mix-blend-screen" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">

        {/* Head */}

        <div className="mb-16 flex items-center justify-center gap-2">
          <RiToolsFill
            size={40}
            className="text-4xl text-[#4FB7B3] animate-spin-slow drop-shadow-[0_0_12px_#4FB7B3]"
          />

          <div className="text-center">
            <p className="text-gray-400 mb-1 cursor-default text-sm tracking-[3px] uppercase">
              Explore<span className="text-[#4FB7B3]"> My</span>
            </p>


            <h2 className="text-4xl font-bold text-white cursor-pointer hover:scale-105 transform transition-transform duration-300">
              SKILL<span className="text-[#4FB7B3]"> SET</span>
            </h2>

            <div className="w-20 h-[3px] rounded-full mx-auto mb-3 mt-3 bg-gradient-to-r from-[#2351A8] via-[#4FB7B3] to-[#2CB67D] shadow-[0_0_10px_#4FB7B3]" />
          </div>
        </div>


        {/* Slider Container */}
        <div className="relative select-none touch-pan-y"> {/* Prevents text selection while dragging */}

          <div ref={ref} className="keen-slider !overflow-visible">
            {SkillsInfo.map((category, index) => (
              <div key={index} className="keen-slider__slide h-auto"> {/* h-auto ensures flex stretching */}

                {/* CARD: Responsive Padding & Height */}
                <div className="group relative h-full bg-zinc-900/50 rounded-3xl md:rounded-[2.5rem] border border-white/5 p-6 md:p-8 transition-all duration-500 hover:border-white/10 overflow-hidden flex flex-col">

                  {/* The "Spotlight" Effect */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full md:w-2/3 h-1/2 bg-gradient-to-b from-white/5 to-transparent blur-2xl -z-10 group-hover:from-teal-500/20 transition-all duration-500" />

                  {/* Category Title */}
                  <div className="flex flex-col items-center mb-6 md:mb-10">
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{category.title}</h3>
                    <div className="w-12 h-1 rounded-full bg-gradient-to-r from-[#2351A8] via-[#4FB7B3] to-[#2CB67D] shadow-[0_0_10px_#4FB7B3]" />
                  </div>

                  {/* Skills Cloud - Responsive Spacing */}
                  <div className="flex flex-wrap justify-center gap-2 md:gap-3">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="relative flex items-center gap-2 md:gap-3 pl-2 pr-3 md:pl-2 md:pr-4 py-2 md:py-2.5 
                                   bg-black/40 rounded-full border border-white/5 
                                   hover:bg-white/10 hover:border-white/20 active:scale-95
                                   transition-all duration-300 cursor-default"
                      >
                        {/* Circle background for Logo */}
                        <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-zinc-800 flex items-center justify-center p-1 md:p-1.5 shadow-sm shrink-0">
                          <img
                            src={skill.logo}
                            alt={skill.name}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <span className="text-xs md:text-sm font-medium text-gray-300 group-hover:text-white transition-colors whitespace-nowrap">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>

                </div>
              </div>
            ))}
          </div>

          {/* Navigation - Touch Friendly Size */}
          <div className="flex justify-center gap-4 mt-8 md:mt-12">
            <button
              onClick={() => slider.current?.prev()}
              className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-zinc-900 border border-zinc-800 text-white flex items-center justify-center hover:bg-zinc-800 hover:border-zinc-700 transition-all active:scale-90"
              aria-label="Previous Slide"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => slider.current?.next()}
              className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-zinc-900 border border-zinc-800 text-white flex items-center justify-center hover:bg-zinc-800 hover:border-zinc-700 transition-all active:scale-90"
              aria-label="Next Slide"
            >
              <ChevronRight size={20} />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;