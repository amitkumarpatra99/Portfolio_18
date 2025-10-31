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
        <div className="min-h-screen  text-white px-5 md:px-20 py-20">

            {/* Close Button */}
            <button
                onClick={() => navigate("/")}
                className="fixed top-5 right-5 z-50 flex items-center gap-2 bg-[#0b1c3b] hover:bg-red-800 rounded-full px-4 py-2 text-sm font-medium transition border border-white/20"
            >
                <span className="text-red-500"> <X size={18} /></span>  Close
            </button>


            <Education />
        </div>
    );
};

export default EducationPage;
