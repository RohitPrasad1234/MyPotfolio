import React, { useEffect, useState, useRef } from "react";
import NavBar from "../components/Layouts/NavBar";
import About from "./About";
import Experience from "./Experience";
import Expertise from "./Expertise";
import Footer from "../components/Layouts/Footer";
import ContactUs from "./ContactUs";
import Work from "./Work";

import bgVideo from "../assets/video.mp4";
import SkillsSection from "./SkillsSection";

const Home = () => {
  const words = ["Creative", "Modern", "Unique", "Powerful"];
  const [currentWord, setCurrentWord] = useState(0);
  const videoRef = useRef(null);

  // Speed control for video
  useEffect(() => {
    if (videoRef.current) videoRef.current.playbackRate = 2.5;
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <NavBar />

      {/* HOME SECTION */}
      <div
        id="home"
        className="relative bg-black h-[100vh] flex justify-center items-center px-4 sm:px-6 pt-[13vh] overflow-hidden"
      >
        <video
          ref={videoRef}
          src={bgVideo}
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        />

        <div className="absolute top-0 left-0 w-full h-full bg-black/60"></div>

        <div className="relative w-full text-center space-y-6">
          <h1 className="font-serif text-[48px] sm:text-[70px] md:text-[110px] lg:text-[150px] text-white leading-[1] tracking-tight animate-float">
            Rohit<span className="text-[#ffefae] animate-glow"> Prasad.</span>
          </h1>

          {/* ✨ Updated Subtitle (Dynamic word included) */}
          <p className="font-medium text-[16px] sm:text-[18px] md:text-[22px] text-white flex justify-center flex-wrap gap-2">
            Building modern and secure digital experiences,
            <span
              key={currentWord}
              className="text-[#ffefae] font-semibold inline-block animate-fadeWord"
            >
              {words[currentWord]}
            </span>
          </p>
        </div>
      </div>

      <section id="about">
        <About />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="SkillsSection">
        <SkillsSection />
      </section>

      <section id="expertise">
        <Expertise />
      </section>
      <section id="work">
        <Work />
      </section>
      <section id="contactus">
        <ContactUs />
      </section>

      <Footer />
    </>
  );
};

export default Home;
