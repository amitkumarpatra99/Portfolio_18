import React from 'react'
import ReactTypingEffect from 'react-typing-effect'
import {  ArrowRight } from "lucide-react"

const ACCENT_COLOR = "#4FB7B3";

const Home = () => {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  return (
    <section
      id="home"
      className="relative min-h-screen w-full max-w-screen overflow-hidden flex flex-col items-center justify-center 
      text-center px-5 sm:px-10 md:px-[10vw] lg:px-[20vw] font-sans"
    >

      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(3,255,200,0.15),transparent_60%)]
      animate-pulse-slow"></div>

      {/* Floating Glow Blob */}
      <div className="absolute w-[90vmin] h-[90vmin] md:w-[60vmin] md:h-[60vmin] left-1/2 top-1/2 
      -translate-x-1/2 -translate-y-1/2 blur-[120px] opacity-80 animate-moveGlow rounded-full"
        style={{ background: `${ACCENT_COLOR}30` }}
      ></div>

      {/* ✅ Animated Background Particles */}
      {!reduceMotion && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          {[...Array(40)].map((_, i) => (
            <span
              key={i}
              className="absolute bg-[#4FB7B3] rounded-full animate-particle"
              style={{
                width: Math.random() * 4 + "px",
                height: Math.random() * 4 + "px",
                left: Math.random() * 100 + "%",
                top: Math.random() * 100 + "%",
                animationDelay: Math.random() * 5 + "s",
                animationDuration: 4 + Math.random() * 6 + "s",
                opacity: Math.random() * 0.7,
              }}
            ></span>
          ))}
        </div>
      )}

      {/* TEXT CONTENT */}
      <div className="z-20 flex flex-col items-center space-y-4 animate-fadeInUp">
        <h1 className="text-base sm:text-lg md:text-xl font-medium text-gray-300">
          Hello World, my name is
        </h1>

        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-tight">
          AMIT KUMAR PATRA
        </h2>

        <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold"
          style={{ color: ACCENT_COLOR }}>
          <span className="text-gray-200">I am a  </span>
          <ReactTypingEffect
            text={['Student', 'Coder', 'Fullstack Developer']}
            speed={100}
            eraseSpeed={50}
            typingDelay={500}
            eraseDelay={2000}
            cursorRenderer={(cursor) => <span style={{ color: ACCENT_COLOR }}>{cursor}</span>}/>
        </h3>

        {/* BUTTON */}
        <a
          href="#work"
          className="mt-8 flex items-center gap-2 text-white py-2.5 sm:py-3 px-6 sm:px-8 rounded-full text-base sm:text-lg font-semibold backdrop-blur-md border-2 transition-all duration-300 hover:scale-[1.02]"
          style={{
            borderColor: ACCENT_COLOR,
            backgroundColor: `${ACCENT_COLOR}15`,
            boxShadow: `0 0 25px ${ACCENT_COLOR}60`,
          }}
        >
          Explore My Project Hub <ArrowRight size={20} />
        </a>

        {/* SOCIAL ICONS */}
        {/* <div className="flex gap-4 sm:gap-6 pt-6">
          <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer"
            className="text-gray-400 hover:text-white p-2 rounded-full transition duration-300 hover:bg-[#4FB7B3]/20">
            <Github size={20} className="sm:size-6" />
          </a>
          <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer"
            className="text-gray-400 hover:text-white p-2 rounded-full transition duration-300 hover:bg-[#4FB7B3]/20">
            <Linkedin size={20} className="sm:size-6" />
          </a>
          <a href="https://twitter.com/your-twitter" target="_blank" rel="noopener noreferrer"
            className="text-gray-400 hover:text-white p-2 rounded-full transition duration-300 hover:bg-[#4FB7B3]/20">
            <Twitter size={20} className="sm:size-6" />
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default Home;
