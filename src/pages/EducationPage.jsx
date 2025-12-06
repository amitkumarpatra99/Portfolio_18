import Education from "../components/Education/Education";
import { useNavigate } from "react-router-dom";
import { X } from "lucide-react"; // Close icon
import { useEffect } from "react";


const EducationPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

    return (
        <div className="min-h-screen text-gray-900 dark:text-white px-1 md:px-1 py-10 transition-colors duration-300">

            {/* Close Button */}
            <button
                onClick={() => navigate("/")}
                className="fixed top-5 right-5 z-50 flex items-center gap-2 bg-gray-200 dark:bg-[#0b1c3b] hover:bg-red-100 dark:hover:bg-red-800 rounded-full px-4 py-2 text-sm font-medium transition border border-gray-300 dark:border-white/20"
            >
                <span className="text-red-500"> <X size={18} /></span>  Close
            </button>


            <Education />
        </div>
    );
};

export default EducationPage;
