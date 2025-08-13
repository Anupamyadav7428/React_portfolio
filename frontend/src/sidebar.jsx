import { useState } from "react";
import profile from "./assets/profile.png";
import "./sidebar.css";
import { AiFillHome } from "react-icons/ai";
import { BiSolidBinoculars } from "react-icons/bi";
import { FaFaceMehBlank } from "react-icons/fa6";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { HiMenuAlt3, HiX } from "react-icons/hi";

export default function Sidebar({ onNavigate, onContact }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 bg-black/40 backdrop-blur-lg p-2 rounded-lg border border-white/30"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <HiX className="text-white text-2xl" />
        ) : (
          <HiMenuAlt3 className="text-white text-2xl" />
        )}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed md:static top-0 left-0 h-screen w-72 
                    bg-gradient-to-b from-[#0f172a] via-[#1e1a78] to-[#0f172a] 
                    backdrop-blur-lg border-r border-white/20 text-white 
                    flex flex-col justify-between items-center p-6 transform 
                    transition-transform duration-300 z-40
                    ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
      >
        {/* Profile Section */}
        <div className="flex flex-col items-center">
          <div className="rounded-full overflow-hidden w-50 h-50 border-4 border-blue-400 shadow-lg">
            <img src={profile} alt="Profile" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="mt-10 w-full">
          <ul className="flex flex-col gap-6 text-lg">
            <li
              className="flex items-center gap-3 px-4 py-2 hover:bg-white/10 rounded-lg cursor-pointer transition"
              onClick={() => {
                onNavigate("home");
                setIsOpen(false);
              }}
            >
              <AiFillHome className="text-2xl" /> Home
            </li>
            <li
              className="flex items-center gap-3 px-4 py-2 hover:bg-white/10 rounded-lg cursor-pointer transition"
              onClick={() => {
                onNavigate("projects");
                setIsOpen(false);
              }}
            >
              <BiSolidBinoculars className="text-2xl" /> Projects
            </li>
            <li
              className="flex items-center gap-3 px-4 py-2 hover:bg-white/10 rounded-lg cursor-pointer transition"
              onClick={() => {
                onNavigate("about");
                setIsOpen(false);
              }}
            >
              <FaFaceMehBlank className="text-2xl" /> About Me
            </li>
          </ul>
        </nav>

        {/* Social Links + Contact Button */}
        <div className="w-full">
          <h1 className="text-center text-lg text-gray-300 mb-4">Connect</h1>
          <div className="flex gap-4 justify-center mb-4">
            <a
              href="https://linkedin.com/in/anupam-yadav-680851280"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition"
            >
              <FaLinkedin className="text-2xl" />
            </a>
            <a
              href="https://github.com/Anupamyadav7428"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition"
            >
              <FaGithub className="text-2xl" />
            </a>
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-400 transition"
            >
              <BsInstagram className="text-2xl" />
            </a>
          </div>
          <button
            onClick={() => {
              onContact();
              setIsOpen(false);
            }}
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 
                       text-white px-4 py-2 rounded-lg shadow-lg transition-transform transform hover:scale-105"
          >
            ✉ Contact Me
          </button>
        </div>
      </div>
    </>
  );
}
