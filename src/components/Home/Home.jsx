import React from 'react'
import ReactTypingEffect from 'react-typing-effect'
import { ArrowRight } from "lucide-react"
import { FaCode } from 'react-icons/fa6';
import { Link } from "react-scroll"; // ✅ Add this
import ScrollButtons from '../ScrollButtons';

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

      {/* Animated Background Particles */}
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
      <div className="z-20 flex flex-col items-center space-y-3 animate-fadeInUp
      -mt-28 sm:-mt-24 md:-mt-32 lg:-mt-36">

        {/* ICON */}
        <div className="mb-2 flex items-center justify-center">
          <FaCode
            className="animate-bounce-slow drop-shadow-lg"
            style={{
              color: ACCENT_COLOR,
              width: "32px",
              height: "32px",
              filter: `drop-shadow(0 0 8px ${ACCENT_COLOR})`
            }}
          />
        </div>

        <h1 className="text-base sm:text-s md:text-s font-medium text-gray-400 uppercase tracking-widest">
          Hello World, My name is
        </h1>

        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-200 tracking-tight leading-tight ">
          AMIT KUMAR PATRA
        </h2>

        <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold"
          style={{ color: ACCENT_COLOR }}>
          <span className="text-gray-300">I am a </span>
          <ReactTypingEffect
            text={['Student', 'Coder', 'Fullstack Developer']}
            speed={100}
            eraseSpeed={50}
            typingDelay={500}
            eraseDelay={2000}
            cursorRenderer={(cursor) => <span style={{ color: ACCENT_COLOR }}>{cursor}</span>}
          />
        </h3>

        <p className="text-gray-400 text-base leading-relaxed px-4 uppercase tracking-tight mt-2">
          Creating fast, beautiful, and interactive web experiences through clean design and thoughtful engineering.
        </p>

        {/* ✅ Smooth Scroll Button */}
        <Link
          to="about"
          smooth={true}
          duration={600}
          offset={-80}
          className="cursor-pointer mt-5 -mb-2 flex items-center gap-2 text-white py-2.5 sm:py-3 px-6 sm:px-8 rounded-full text-base sm:text-lg font-semibold backdrop-blur-md border-2 transition-all duration-300 hover:scale-[1.02]"
          style={{
            borderColor: ACCENT_COLOR,
            backgroundColor: `${ACCENT_COLOR}15`,
            boxShadow: `0 0 25px ${ACCENT_COLOR}60`,
          }}
        >
          Know More About Me <ArrowRight size={20} />
        </Link>

      </div>
    
      <ScrollButtons next="about" />

    </section>
  );
};

export default Home;
