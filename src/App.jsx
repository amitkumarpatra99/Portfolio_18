import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Skills from "./components/Skills/Skills";
import Work from "./components/Work/Work";
// import Experience from "./components/Experience/Experience";
// import Education from "./components/Education/Education";
// import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import AboutSection from './components/AboutSection/AboutSection';
import MiniNavigation from './components/MiniNavigation';
import CustomCursor from "./components/CustomCursor/CustomCursor";
import StickyMiniNavbar from "./components/StickyMiniNavbar/StickyMiniNavbar";


import { BrowserRouter, Routes, Route } from "react-router-dom";
import ExperiencePage from "./pages/ExperiencePage";
import EducationPage from "./pages/EducationPage";
import ContactPage from "./pages/ContactPage";

const App = () => {
  return (
    <>
      <CustomCursor />

      <div className="App">
        <BrowserRouter>
          <div className="bg-[#011028]">

            {/* Navbar always visible */}
            <StickyMiniNavbar />
            <div className="relative pt-20">

              {/* Routing logic */}
              <Routes>
                {/* HOME PAGE */}
                <Route
                  path="/"
                  element={
                    <div className="bg-[#011028] min-h-screen">
                      <Navbar />

                      <Home />
                      <AboutSection />
                      <Skills />
                      <Work />
                      <MiniNavigation />
                      {/* <Experience /> */}
                      {/* <Education /> */}
                      {/* <Contact /> */}
                      <Footer />
                    </div>
                  }
                />

                {/* EXPERIENCE PAGE */}
                <Route
                  path="/experience"
                  element={
                    <div className="bg-[#011028] min-h-screen ">
                      <ExperiencePage />
                      <Footer />
                    </div>
                  }
                />

                {/* EDUCATION PAGE */}
                <Route
                  path="/education"
                  element={
                    <div className="bg-[#011028] min-h-screen">
                      <EducationPage />
                      <Footer />
                    </div>
                  }
                />



                <Route
                  path="/Contact"
                  element={
                    <div className="bg-[#011028] min-h-screen">
                      <ContactPage />
                      <Footer />
                    </div>
                  }
                />
                <Route path="/navigation" element={<MiniNavigation />} />

              </Routes>



            </div>
          </div>
        </BrowserRouter >
      </div >
    </>
  );
};

export default App;
