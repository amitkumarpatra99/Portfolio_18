import React, { useState, useRef, useEffect } from "react";
import {
    FaRobot, FaPaperPlane, FaUser, FaTimes, FaTrashAlt,
    FaVolumeUp, FaVolumeMute
} from "react-icons/fa";
import {
    FiMessageSquare, FiCornerDownRight, FiCpu, FiGithub, FiLinkedin, FiMail
} from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
// Ensure these imports exist, or the bot will default to empty arrays
import { SkillsInfo, projects, experiences, education } from "../../constants";

// --- SOUND ASSETS ---
const sendSound = new Audio("https://cdn.pixabay.com/audio/2022/11/24/audio_9bc2f6b0e3.mp3");
const receiveSound = new Audio("https://cdn.pixabay.com/audio/2022/03/15/audio_c8c8a73467.mp3");

const PatraAI = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isTyping, setIsTyping] = useState(false);
    const [soundEnabled, setSoundEnabled] = useState(true);
    const [inputValue, setInputValue] = useState("");

    const messagesEndRef = useRef(null);

    // Initial Welcome Message
    const [messages, setMessages] = useState([
        {
            id: 1,
            text: "Hi there! 👋 I'm Patra AI. I can show you Amit's projects, skills, or contact info. Try clicking a topic below!",
            sender: "bot",
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            type: "text"
        },
    ]);

    // --- HELPER: PLAY SOUND ---
    const playSound = (type) => {
        if (!soundEnabled) return;
        if (type === 'send') {
            sendSound.currentTime = 0;
            sendSound.play().catch(() => { });
        } else {
            receiveSound.currentTime = 0;
            receiveSound.play().catch(() => { });
        }
    };

    // --- SCROLL TO BOTTOM ---
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping, isOpen]);

    // --- LOGIC: GENERATE RESPONSE ---
    const generateResponse = (input) => {
        const lowerInput = input.toLowerCase();

        // 1. GREETINGS
        if (['hi', 'hello', 'hey', 'sup'].some(w => lowerInput.includes(w))) {
            return "Hello! How can I help you explore Amit's portfolio today?";
        }

        // 2. CONTACT INFO
        if (lowerInput.includes("email") || lowerInput.includes("contact")) {
            return "You can reach Amit at **mrpatra.web@gmail.com** or connect via LinkedIn.";
        }
        if (lowerInput.includes("linkedin")) {
            return "Here is his LinkedIn: [linkedin.com/in/amitkumarpatra99](https://linkedin.com/in/amitkumarpatra99)";
        }
        if (lowerInput.includes("github")) {
            return "Check out his code repo: [github.com/amitkumarpatra99](https://github.com/amitkumarpatra99)";
        }

        // 3. SKILLS (Dynamic from your constants file)
        if (lowerInput.includes("skill") || lowerInput.includes("stack") || lowerInput.includes("tech")) {
            // Safety check if SkillsInfo is undefined
            const skillsList = SkillsInfo
                ? SkillsInfo.flatMap(s => s.skills.map(i => i.name)).slice(0, 10).join(", ")
                : "React, Node.js, Express, MongoDB, Tailwind CSS, Python";
            return `Amit works with modern tech including: **${skillsList}** and more.`;
        }

        // 4. PROJECTS (Dynamic)
        if (lowerInput.includes("project") || lowerInput.includes("work")) {
            const projList = projects
                ? projects.map(p => p.title).join(", ")
                : "Portfolio, E-commerce App, AI Tracker";
            return `He has built some cool stuff: **${projList}**. Ask me about a specific one!`;
        }

        // 5. SPECIFIC PROJECT SEARCH
        if (projects) {
            const foundProject = projects.find(p => lowerInput.includes(p.title.toLowerCase()));
            if (foundProject) {
                return `📂 **${foundProject.title}**\n${foundProject.description}\n\n🔗 [View Live](${foundProject.live}) | [GitHub](${foundProject.github})`;
            }
        }

        // 6. PERSONAL / FUN
        if (lowerInput.includes("who are you")) return "I am a virtual assistant created by Amit using React & Framer Motion.";
        if (lowerInput.includes("hire")) return "Amit is currently **Open to Work**! Please send him an email.";

        // FALLBACK
        return "I'm still learning! Try asking about 'Skills', 'Projects', or 'Contact Info'.";
    };

    // --- HANDLE SEND ---
    const handleSendMessage = (text = inputValue) => {
        if (!text.trim()) return;

        playSound('send');

        // Add User Message
        const newMessage = {
            id: Date.now(),
            text: text,
            sender: "user",
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };

        setMessages((prev) => [...prev, newMessage]);
        setInputValue("");
        setIsTyping(true); // Start typing animation

        // Simulate Bot Thinking (1.5s delay)
        setTimeout(() => {
            const responseText = generateResponse(text);
            const botMessage = {
                id: Date.now() + 1,
                text: responseText,
                sender: "bot",
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            };

            setMessages((prev) => [...prev, botMessage]);
            setIsTyping(false);
            playSound('receive');
        }, 1500);
    };

    // --- QUICK REPLIES CHIPS ---
    const QuickReplies = () => (
        <div className="flex gap-2 overflow-x-auto py-2 px-4 scrollbar-hide">
            {[
                { icon: <FiCpu />, text: "Skills" },
                { icon: <FiCornerDownRight />, text: "Projects" },
                { icon: <FiMail />, text: "Contact Me" },
                { icon: <FiGithub />, text: "GitHub" },
            ].map((chip, idx) => (
                <button
                    key={idx}
                    onClick={() => handleSendMessage(chip.text)}
                    className="flex items-center gap-1.5 whitespace-nowrap bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:bg-blue-100 dark:hover:bg-blue-900/30 text-xs font-medium px-3 py-1.5 rounded-full transition-colors text-gray-700 dark:text-gray-300"
                >
                    {chip.icon} {chip.text}
                </button>
            ))}
        </div>
    );

    return (
        <>
            {/* --- FLOATING TOGGLE BUTTON --- */}
            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="fixed bottom-32 right-8 z-[60] h-16 w-16 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow-2xl flex items-center justify-center hover:shadow-blue-500/40 transition-all"
            >
                <AnimatePresence mode='wait'>
                    {isOpen ? (
                        <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
                            <FaTimes size={24} />
                        </motion.div>
                    ) : (
                        <motion.div key="chat" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
                            <div className="relative">
                                <FaRobot size={24} />
                                <span className="absolute -top-1 -right-1 flex h-3 w-3">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                                </span>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.button>

            {/* --- MAIN CHAT WINDOW --- */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 50, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 50, scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        className="fixed bottom-52 right-8 w-[90vw] md:w-[380px] h-[550px] max-h-[calc(100vh-220px)] z-[60] bg-white dark:bg-[#0f172a] rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 flex flex-col overflow-hidden font-sans"
                    >
                        {/* 1. HEADER */}
                        <div className="bg-gradient-to-r from-blue-700 to-violet-700 p-4 flex items-center justify-between text-white shadow-md">
                            <div className="flex items-center gap-3">
                                <div className="relative">
                                    <img
                                        src="DP.jpg"
                                        alt="Logo"
                                        className="w-10 h-10 rounded-full border-2 border-white/50 object-cover shadow-sm"
                                    />
                                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-blue-700 rounded-full"></div>

                                </div>
                                <h3 className="font-bold text-base leading-tight">PATRA AI</h3>

                            </div>
                            <div>

                                <div className="flex gap-3">
                                    <button onClick={() => setSoundEnabled(!soundEnabled)} className="text-white/80 hover:text-white transition" title={soundEnabled ? "Mute" : "Unmute"}>
                                        {soundEnabled ? <FaVolumeUp /> : <FaVolumeMute />}
                                    </button>
                                    <button onClick={() => setMessages([])} className="text-white/80 hover:text-white transition" title="Clear Chat">
                                        <FaTrashAlt />
                                    </button>
                                    <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white transition" title="Close Chat">
                                        <FaTimes size={18} />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* 2. MESSAGES AREA */}
                        <div className="flex-1 overflow-y-auto p-4 bg-gray-50 dark:bg-[#0b1120] space-y-4 scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600">
                            {messages.map((msg, index) => (
                                <motion.div
                                    key={msg.id}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                                >
                                    <div className={`max-w-[80%] flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}>

                                        {/* Message Bubble */}
                                        <div className={`
                        px-4 py-2.5 rounded-2xl shadow-sm text-sm leading-relaxed relative
                        ${msg.sender === "user"
                                                ? "bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-tr-none"
                                                : "bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 border border-gray-100 dark:border-gray-700 rounded-tl-none"
                                            }
                    `}>
                                            {/* ReactMarkdown can be used here for links, but simplistic regex for now */}
                                            <p dangerouslySetInnerHTML={{
                                                __html: msg.text.replace(/\*\*(.*?)\*\*/g, '<b>$1</b>') // Bold
                                                    .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank" class="underline hover:text-blue-300">$1</a>') // Links
                                                    .replace(/\n/g, '<br/>')
                                            }} />
                                        </div>

                                        {/* Time Stamp */}
                                        <span className="text-[10px] text-gray-400 mt-1 px-1">
                                            {msg.time}
                                        </span>
                                    </div>
                                </motion.div>
                            ))}

                            {/* Typing Indicator */}
                            {isTyping && (
                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start">
                                    <div className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 px-4 py-3 rounded-2xl rounded-tl-none shadow-sm flex gap-1 items-center">
                                        <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6 }} className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
                                        <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }} className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
                                        <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }} className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
                                    </div>
                                </motion.div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* 3. FOOTER (Chips & Input) */}
                        <div className="bg-white dark:bg-[#0f172a] border-t border-gray-100 dark:border-gray-800">

                            {/* Quick Reply Chips */}
                            {!isTyping && <QuickReplies />}

                            {/* Input Field */}
                            <div className="p-3 flex items-center gap-2">
                                <input
                                    type="text"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                                    placeholder="Type a message..."
                                    className="flex-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 text-sm px-4 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                                />
                                <motion.button
                                    whileTap={{ scale: 0.9 }}
                                    onClick={() => handleSendMessage()}
                                    disabled={!inputValue.trim()}
                                    className="p-3 bg-blue-600 text-white rounded-full shadow-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-700 transition"
                                >
                                    <FaPaperPlane size={14} />
                                </motion.button>
                            </div>

                        </div>
                    </motion.div >
                )}
            </AnimatePresence >
        </>
    );
};

export default PatraAI;