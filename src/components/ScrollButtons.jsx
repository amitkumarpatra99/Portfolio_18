import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

const ScrollDownButton = ({ next }) => {
  const handleScroll = () => {
    const section = document.getElementById(next);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="absolute bottom-10 md:bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center z-20 pointer-events-auto">
      {/* <p className="text-gray-300 text-sm font-medium mb-2 select-none">
        Scroll Down
      </p> */}
      <motion.button
        onClick={handleScroll}
        className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-500 bg-black/30 backdrop-blur-sm hover:bg-white/10 transition"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 1.3, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown className="text-white" size={20} />
      </motion.button>
    </div>
  );
};

export default ScrollDownButton;
