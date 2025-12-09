import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";
import { FiMenu, FiX } from "react-icons/fi";
// import logo from "../../assets/logo.png";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
const navigate = useNavigate(); 
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll function
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* DARK OVERLAY WHEN MOBILE MENU OPENS */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}

      {/* NAVBAR */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
          ${isScrolled ? "bg-white py-3 shadow-md" : "bg-black py-4"}
        `}
      >
        <nav className="flex justify-between items-center max-w-7xl mx-auto px-6">
          {/* LOGO → scroll to top */}
          <span
            onClick={() => scrollToSection("home")}
            className={`text-2xl font-bold tracking-wide cursor-pointer transition-all duration-300 
              ${isScrolled ? "text-black" : "text-white"}
            `}
          >
         

          </span>

          {/* DESKTOP MENU */}
          <ul
            className={`hidden md:flex gap-8 font-medium transition-all duration-300
              ${isScrolled ? "text-black" : "text-white"}
            `}
          >
            <li
              className="cursor-pointer border-b-2 border-[#ffefae]"
              onClick={() => scrollToSection("home")}
            >
              Home
            </li>
            <li
              className="cursor-pointer hover:border-b-2 hover:border-[#ffefae]"
              onClick={() => scrollToSection("about")}
            >
              About
            </li>
            <li
              className="cursor-pointer hover:border-b-2 hover:border-[#ffefae]"
              onClick={() => scrollToSection("experience")}
            >
              Experience
            </li>
            <li
              className="cursor-pointer hover:border-b-2 hover:border-[#ffefae]"
              onClick={() => scrollToSection("expertise")}
            >
              Services
            </li>
            <li
              className="cursor-pointer hover:border-b-2 hover:border-[#ffefae]"
              onClick={() => scrollToSection("work")}
            >
              Projects
            </li>
            <li
              className="cursor-pointer hover:border-b-2 hover:border-[#ffefae]"
              onClick={() => scrollToSection("contactus")}
            >
              Contact
            </li>
          </ul>

          {/* DESKTOP BUTTON */}
          <div>
            <button
              className="hidden md:flex items-center gap-2 mr-4 bg-[#ffefae] text-black px-4 py-2 rounded-md transition-all hover:bg-[#4b0000] hover:text-white"
              onClick={() => scrollToSection("contactus")}
            >
              Let's Talk
              <GoArrowRight className="text-lg" />
            </button>

          {/* <button
              onClick={() => (window.location.href = "/dashboard")}
              className="fixed top-3 right-5 bg-black text-white px-4  py-2 z-50 rounded"
            >
              Admin Dashboard
            </button>  */}
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className={`md:hidden text-3xl ${
              isScrolled ? "text-black" : "text-white"
            }`}
          >
            <FiMenu />
          </button>
        </nav>
      </header>

      {/* MOBILE SIDE MENU */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white shadow-2xl z-[60] 
          transition-transform duration-300 
          ${isMenuOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <button
          className="absolute top-6 right-6 text-3xl text-black"
          onClick={() => setIsMenuOpen(false)}
        >
          <FiX />
        </button>

        <ul className="flex flex-col pt-20 pl-8 gap-6 text-black text-lg font-medium">
          <li onClick={() => scrollToSection("home")}>Home</li>
          <li onClick={() => scrollToSection("about")}>About</li>
          <li onClick={() => scrollToSection("experience")}>Experience</li>
          <li onClick={() => scrollToSection("expertise")}>Services</li>
          <li onClick={() => scrollToSection("work")}>Projects</li>
          <li onClick={() => scrollToSection("contactus")}>Contact</li>
        </ul>
      </div>
    </>
  );
};

export default NavBar;
