import { IoArrowForwardCircle } from "react-icons/io5";
import Hero from "./hero";
import Project from "./project";
import "./mainbox.css";
import ContactForm from "./form";
import Aboutme from "./aboutme.jsx";
import { useState, useEffect } from "react";

export default function MainBox({ section, setSection }) {
  const [open, setOpen] = useState(false);

  // Scroll to section when prop changes
  useEffect(() => {
    if (section) {
      const target = document.getElementById(section);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [section]);

  return (
    <div className="flex h-screen w-full bg-white">
      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto snap-y overflow-x-hidden scrollbar-hide relative">

        {/* Floating Work With Me Button */}
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-6 right-6 z-50 
                     bg-blue-800 text-white px-4 py-3 rounded-lg shadow-lg flex flex-col items-center 
                     hover:bg-blue-900 transition-all group"
        >
          <IoArrowForwardCircle className="text-2xl mb-1 group-hover:scale-110 transition-transform" />
          <span className="text-sm font-medium">Work with me</span>
        </button>

        {/* Hero Section */}
        <section
          className="snap-start min-h-screen flex items-center justify-center bg-white"
          id="home" 
        >
          <Hero />
        </section>

        {/* Project Section */}
        <section
          className="snap-start min-h-screen bg-white flex items-center justify-center"
          id="projects"
        >
          <Project />
        </section>

        {/* About Me Section */}
        <section
          className="snap-start min-h-screen overflow-hidden text-[#F5F5F5] 
                     bg-gradient-to-bl from-[#0f172a] via-[#1e1a78] to-[#0f172a] 
                     flex items-center justify-center px-6"
          id="about"
        >
          <Aboutme />
        </section>

        {/* Contact Form */}
        <ContactForm open={open} onClose={() => setOpen(false)} />
      </div>
    </div>
  );
}
