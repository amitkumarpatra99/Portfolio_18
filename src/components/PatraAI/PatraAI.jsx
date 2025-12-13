import React, { useState, useRef, useEffect } from "react";
import {
  FaPaperPlane,
  FaTimes,
  FaTrashAlt,
  FaVolumeUp,
  FaVolumeMute,
} from "react-icons/fa";
import { GiArtificialIntelligence } from "react-icons/gi";
import { motion, AnimatePresence } from "framer-motion";
import { SkillsInfo, projects, experiences, education } from "../../constants";

/* ---------------- SOUND ---------------- */
const sendSound = new Audio(
  "https://codeskulptor-demos.commondatastorage.googleapis.com/pang/pop.mp3"
);
const receiveSound = new Audio(
  "https://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/pause.wav"
);

const PatraAI = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [inputValue, setInputValue] = useState("");
  const [showButton, setShowButton] = useState(true);

  const messagesEndRef = useRef(null);
  const scrollTimer = useRef(null);

  /* -------- AUTO HIDE FLOATING BUTTON -------- */
  useEffect(() => {
    const handleScroll = () => {
      setShowButton(false);
      clearTimeout(scrollTimer.current);
      scrollTimer.current = setTimeout(() => setShowButton(true), 700);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ---------------- MESSAGES ---------------- */
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi 👋 I'm **Patra AI**.\n\nAsk me about **Projects, Skills, Experience, or Education**.",
      sender: "bot",
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    },
  ]);

  const playSound = (type) => {
    if (!soundEnabled) return;
    const sound = type === "send" ? sendSound : receiveSound;
    sound.currentTime = 0;
    sound.play().catch(() => { });
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping, isOpen]);

  /* ---------------- AI RESPONSE (FIXED) ---------------- */
  const generateResponse = (input) => {
    const q = input.toLowerCase().trim();

    /* ---- TRIM SPAM GREETINGS ---- */
    if (/^(hi|hii+|hello+|hey+)$/.test(q)) {
      return "Hello 👋 😊\n\nYou can ask about **Projects, Skills, Education, or Experience**.";
    }

    if (q.includes("project")) {
      return projects.map((p) => `• **${p.title}**`).join("\n");
    }

    if (q.includes("skill")) {
      return SkillsInfo.map(
        (s) => `**${s.title}**: ${s.skills.map((x) => x.name).join(", ")}`
      ).join("\n\n");
    }

    if (q.includes("education")) {
      return education
        .map((e) => `🎓 **${e.degree}** — ${e.school}`)
        .join("\n");
    }

    if (q.includes("experience")) {
      return experiences
        .map((e) => `💼 **${e.role}** at ${e.company}`)
        .join("\n");
    }

    return "🤖 I didn’t understand that.\n\nTry **Projects, Skills, Education, or Experience** 🙂";
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    playSound("send");

    const userMsg = {
      id: Date.now(),
      text: inputValue,
      sender: "user",
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setMessages((p) => [...p, userMsg]);
    setInputValue("");
    setIsTyping(true);

    setTimeout(() => {
      setMessages((p) => [
        ...p,
        {
          id: Date.now() + 1,
          text: generateResponse(userMsg.text),
          sender: "bot",
          time: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        },
      ]);
      setIsTyping(false);
      playSound("receive");
    }, 1200);
  };

  return (
    <>
      {/* ================= FLOATING AI BUTTON ================= */}
      <AnimatePresence>
        {showButton && (
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            animate={{
              boxShadow: [
                "0 0 18px rgba(99,102,241,0.5)",
                "0 0 35px rgba(139,92,246,0.9)",
                "0 0 18px rgba(99,102,241,0.5)",
              ],
            }}
            transition={{ repeat: Infinity, duration: 2.6 }}
            className="
              fixed bottom-[calc(1.5rem+env(safe-area-inset-bottom))] right-4 sm:bottom-32 sm:right-8 z-[60]
              h-14 w-14 sm:h-16 sm:w-16 rounded-full
              bg-gradient-to-br from-indigo-600 via-violet-600 to-fuchsia-600
              border border-white/20
              backdrop-blur-xl
              text-white
              flex items-center justify-center
              shadow-xl
            "
          >
            <GiArtificialIntelligence className="text-2xl sm:text-3xl" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* ================= GLASS CHAT WINDOW ================= */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.95 }}
            className="
              fixed bottom-[calc(4rem+env(safe-area-inset-bottom))] right-4 sm:bottom-[5.5rem] sm:right-8
              w-[92vw] sm:w-[380px] h-[75vh] sm:h-[560px]
              z-[60] flex flex-col overflow-hidden
              rounded-3xl
              bg-white/20 dark:bg-black/30
              backdrop-blur-2xl
              border border-white/20
              shadow-[0_25px_60px_rgba(0,0,0,0.35)]
            "
          >
            {/* HEADER */}
            <div className="
              flex items-center justify-between px-4 py-3
              bg-gradient-to-r from-indigo-500/40 via-violet-500/40 to-fuchsia-500/40
              backdrop-blur-xl
              border-b border-white/20
              text-white
            ">
              <div className="flex items-center gap-2 font-semibold">
                <GiArtificialIntelligence />
                Patra AI
              </div>
              <div className="flex gap-3">
                <button onClick={() => setSoundEnabled(!soundEnabled)}>
                  {soundEnabled ? <FaVolumeUp /> : <FaVolumeMute />}
                </button>
                <button onClick={() => setMessages([])}>
                  <FaTrashAlt />
                </button>
                <button onClick={() => setIsOpen(false)}>
                  <FaTimes />
                </button>
              </div>
            </div>

            {/* MESSAGES */}
            <div className="flex-1 px-4 py-3 overflow-y-auto space-y-3">
              {messages.map((m) => (
                <div
                  key={m.id}
                  className={`flex ${m.sender === "user" ? "justify-end" : "justify-start"
                    }`}
                >
                  <div
                    className={`
                      px-4 py-2.5 text-sm rounded-2xl
                      max-w-[75%]
                      break-words break-all
                      backdrop-blur-xl
                      ${m.sender === "user"
                        ? "bg-gradient-to-br from-indigo-500 to-violet-600 text-white"
                        : "bg-white/30 dark:bg-white/10 text-gray-900 dark:text-gray-100 border border-white/20"
                      }
                    `}
                    dangerouslySetInnerHTML={{
                      __html: m.text
                        .replace(/\*\*(.*?)\*\*/g, "<b>$1</b>")
                        .replace(/\n/g, "<br/>"),
                    }}
                  />
                </div>
              ))}

              {isTyping && (
                <div className="text-xs text-white/60">Patra AI is typing…</div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* INPUT */}
            <div className="
              p-3
              bg-white/20 dark:bg-black/20
              backdrop-blur-xl
              border-t border-white/20
              flex gap-2
            ">
              <input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                placeholder="Ask something..."
                className="
                  flex-1 px-4 py-2 rounded-full
                  bg-white/30 dark:bg-white/10
                  text-gray-900 dark:text-white
                  placeholder:text-gray-600 dark:placeholder:text-gray-400
                  outline-none
                "
              />
              <button
                onClick={handleSendMessage}
                className="
                  p-3 rounded-full
                  bg-gradient-to-br from-indigo-500 to-violet-600
                  text-white shadow-lg
                "
              >
                <FaPaperPlane />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default PatraAI;
