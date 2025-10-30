import React from 'react'
import ReactTypingEffect from 'react-typing-effect'
import { Github, Linkedin, Twitter, ArrowRight } from "lucide-react"

const About = () => {
  return (
    <section
      id="about"
      className="relative h-screen w-full flex flex-col items-center justify-center text-center px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans overflow-hidden"
    >

      {/* GRID BACKGROUND */}
      <div className="absolute inset-0 opacity-[0.15] bg-[linear-gradient(to_right,#4fb7b31a_1px,transparent_1px),linear-gradient(to_bottom,#4fb7b31a_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      {/* DIAMOND GLOW SHAPE */}
      <div className="absolute w-[60vmin] h-[60vmin] bg-[#4FB7B3]/10 blur-3xl rotate-45"></div>

      {/* CENTER SPOTLIGHT */}
      <div className="absolute w-[80vw] h-[80vw] md:w-[50vw] md:h-[50vw] bg-[#4FB7B3]/5 blur-2xl rounded-full"></div>

      {/* FLOATING PARTICLES */}
      <ul className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <li key={i} className="particle"></li>
        ))}
      </ul>

      {/* TEXT */}
      <div className="z-20 flex flex-col items-center space-y-3 animate-fadeInUp">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
          Hi, I am
        </h1>

        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
          AMIT KUMAR PATRA
        </h2>

        <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#4FB7B3]">
          <span className="text-white">I am a </span>
          <ReactTypingEffect
            text={['Fullstack Developer', 'Coder']}
            speed={100}
            eraseSpeed={50}
            typingDelay={500}
            eraseDelay={2000}
            cursorRenderer={cursor => <span className="text-[#4FB7B3]">{cursor}</span>}
          />
        </h3>

        {/* BUTTON */}
        <a
          href="#work"
          className="mt-10 flex items-center gap-2 text-white py-3 px-8 rounded-full text-lg font-semibold
          backdrop-blur-lg bg-white/10 border border-white/20 hover:border-[#4FB7B3]
          transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_#4FB7B3]"
        >
          View My Work <ArrowRight size={20} />
        </a>

        {/* SOCIAL ICONS */}
        <div className="flex gap-6 mt-6">
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer"
             className="text-gray-300 hover:text-[#4FB7B3] transition duration-300">
            <Github size={28}/>
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer"
             className="text-gray-300 hover:text-[#4FB7B3] transition duration-300">
            <Linkedin size={28}/>
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"
             className="text-gray-300 hover:text-[#4FB7B3] transition duration-300">
            <Twitter size={28}/>
          </a>
        </div>
      </div>
    </section>
  )
}

export default About
