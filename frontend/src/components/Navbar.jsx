import { useState } from "react";
import { Menu, X } from "lucide-react";
import linkedin from "../assets/linkedin.svg"; // Make sure this file exists

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur shadow z-10">
      <div className="flex justify-between items-center p-4 max-w-6xl mx-auto gap-10">
        <h1 className="text-2xl font-bold text-blue-600">My Portfolio</h1>

        {/* Hamburger Button for Mobile */}
        <button
          className="sm:hidden p-2 hover:bg-blue-50 rounded-full"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? (
            <X className="w-6 h-6 text-gray-800" />
          ) : (
            <Menu className="w-6 h-6 text-gray-800" />
          )}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden sm:flex flex-1 justify-end gap-6 items-center">
          <a href="#about" className="hover:text-blue-500 font-medium">
            About
          </a>
          <a href="#skills" className="hover:text-blue-500 font-medium">
            Skills
          </a>
          <a href="#projects" className="hover:text-blue-500 font-medium">
            Projects
          </a>
          <a href="#contact" className="hover:text-blue-500 font-medium">
            Contact
          </a>
          <a
            href="https://drive.google.com/uc?export=download&id=10jyt0m_x4dQA276bqAEo0Zijhn5LqiWH"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-3 py-2 rounded hover:bg-blue-700 transition text-sm font-medium"
          >
            📄 Resume
          </a>
          <a
            href="https://www.linkedin.com/in/revanth-sahu-126a89269/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={linkedin}
              alt="LinkedIn"
              className="w-6 h-6 hover:opacity-75"
            />
          </a>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="sm:hidden bg-white border-t border-gray-200 flex flex-col items-center p-4 space-y-3 text-center font-semibold">
          <a
            href="#about"
            onClick={() => setIsOpen(false)}
            className="hover:text-blue-500"
          >
            About
          </a>
          <a
            href="#skills"
            onClick={() => setIsOpen(false)}
            className="hover:text-blue-500"
          >
            Skills
          </a>
          <a
            href="#projects"
            onClick={() => setIsOpen(false)}
            className="hover:text-blue-500"
          >
            Projects
          </a>
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="hover:text-blue-500"
          >
            Contact
          </a>
          <a
            href="https://drive.google.com/uc?export=download&id=10jyt0m_x4dQA276bqAEo0Zijhn5LqiWH"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="hover:text-blue-500"
          >
            📄 Resume
          </a>
          <a
            href="https://www.linkedin.com/in/your-username"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-2"
          >
            <img src={linkedin} alt="LinkedIn" className="w-5 h-5" />
            LinkedIn
          </a>
        </div>
      )}
    </nav>
  );
}
