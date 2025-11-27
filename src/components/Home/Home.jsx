import React from 'react'
import ReactTypingEffect from 'react-typing-effect'
import { ArrowRight } from "lucide-react"
import { FaCode } from 'react-icons/fa6'
import { Link } from "react-scroll"
// import ScrollButtons from '../ScrollButtons'

const ACCENT_COLOR = "#4FB7B3"

const Home = () => {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex flex-col items-center justify-center text-center 
      px-6 sm:px-10 md:px-[10vw] lg:px-[18vw] overflow-hidden font-sans bg-[#010c1e]"
    >

      {/* 🌌 Animated Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(3,255,200,0.12),transparent_70%)] 
      animate-pulse-slow"></div>

      {/* ✨ Floating Accent Glow Blob */}
      <div className="absolute w-[85vmin] h-[85vmin] md:w-[60vmin] md:h-[60vmin] 
      left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[120px] opacity-70
      animate-moveGlow"
        style={{ background: `${ACCENT_COLOR}25` }}
      ></div>

      {/* 🌠 Soft Floating Particles */}
      {!reduceMotion && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          {[...Array(35)].map((_, i) => (
            <span
              key={i}
              className="absolute bg-[#4FB7B3] rounded-full animate-particle"
              style={{
                width: Math.random() * 4 + "px",
                height: Math.random() * 4 + "px",
                left: Math.random() * 100 + "%",
                top: Math.random() * 100 + "%",
                animationDelay: Math.random() * 6 + "s",
                animationDuration: 5 + Math.random() * 5 + "s",
                opacity: Math.random() * 0.6 + 0.2,
              }}
            ></span>
          ))}
        </div>
      )}

      {/* 🧠 MAIN TEXT CONTENT */}
      <div className="z-20 flex flex-col items-center space-y-3 animate-fadeInUp
      -mt-24 sm:-mt-20 md:-mt-28 lg:-mt-32">

        {/* 💻 Icon */}
        <div className="mb-3 flex items-center justify-center">
          <FaCode
            className="animate-bounce-slow drop-shadow-[0_0_10px_rgba(79,183,179,0.8)]"
            style={{
              color: ACCENT_COLOR,
              width: "36px",
              height: "36px"
            }}
          />
        </div>

        <h1 className="text-sm sm:text-base md:text-lg font-medium text-gray-400 uppercase tracking-[0.25em]">
          Hello World, My name is
        </h1>

        <h2 className="text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-100 tracking-tight leading-tight drop-shadow-[0_0_12px_rgba(79,183,179,0.25)]">
          AMIT KUMAR PATRA
        </h2>

        <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight"
          style={{ color: ACCENT_COLOR }}>
          <span className="text-gray-300">I am a </span>
          <ReactTypingEffect
            text={['Student', 'Coder', 'Fullstack Developer']}
            speed={100}
            eraseSpeed={50}
            typingDelay={400}
            eraseDelay={1800}
            cursorRenderer={(cursor) => <span style={{ color: ACCENT_COLOR }}>{cursor}</span>}
          />
        </h3>

        <p className="text-gray-400 text-[0.95rem] sm:text-base leading-relaxed px-4 max-w-xl uppercase tracking-tight mt-3">
          Building fast, elegant, and immersive digital experiences with precision and passion.
        </p>

        {/* 🚀 Classy “Know More” Button */}
        <Link
          to="about"
          smooth={true}
          duration={600}
          offset={-80}
          className="relative cursor-pointer mt-6 inline-flex items-center gap-2 
          text-white py-2.5 sm:py-3 px-6 sm:px-8 rounded-full text-base sm:text-lg font-semibold 
          border-2 backdrop-blur-md transition-all duration-300 hover:scale-[1.05]
          group"
          style={{
            borderColor: ACCENT_COLOR,
            background: `linear-gradient(145deg, rgba(79,183,179,0.2), rgba(79,183,179,0.05))`,
            boxShadow: `0 0 20px ${ACCENT_COLOR}40`
          }}
        >
          <span className="relative z-10">Know More About Me</span>
          <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform animate-pulse" />

          {/* Neon glow ring on hover */}
          <div
            className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 blur-md 
            transition-all duration-700"
            style={{
              background:
                "conic-gradient(from 0deg, #7f5af0, #2cb67d, #7f5af0)",
            }}
          ></div>
        </Link>
      </div>

      {/* Scroll Indicator */}
      {/* <ScrollButtons next="about" /> */}

    </section>
  )
}

export default Home
