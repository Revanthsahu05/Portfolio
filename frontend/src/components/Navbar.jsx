import { useState } from "react";
import { Menu, X } from "lucide-react";
import linkedin from "../assets/linkedin.svg"; // your local SVG

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur shadow z-10">
      <div className="flex justify-between items-center p-4 max-w-6xl mx-auto gap-10">
        <h1 className="text-2xl font-bold text-blue-600">My Portfolio</h1>

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

        {/* Desktop Links */}
        <div className="hidden sm:flex flex-1 justify-end gap-8 items-center">
          <a href="#about" className="hover:text-blue-500">
            About
          </a>
          <a href="#skills" className="hover:text-blue-500">
            Skills
          </a>
          <a href="#projects" className="hover:text-blue-500">
            Projects
          </a>
          <a href="#contact" className="hover:text-blue-500">
            Contact
          </a>
          <a
            href="https://www.linkedin.com/in/revanth-sahu-126a89269/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
          >
            <img src={linkedin} alt="LinkedIn" className="w-6 h-6" />
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="sm:hidden bg-white border-t border-gray-200 flex flex-col items-center p-4 space-y-2 text-center font-bold">
          <a
            href="#home"
            onClick={() => setIsOpen(false)}
            className="hover:text-blue-500 w-full font-bold"
          >
            Home
          </a>
          <a
            href="#about"
            onClick={() => setIsOpen(false)}
            className="hover:text-blue-500 w-full font-bold"
          >
            About
          </a>
          <a
            href="#skills"
            onClick={() => setIsOpen(false)}
            className="hover:text-blue-500 w-full font-bold"
          >
            Skills
          </a>
          <a
            href="#projects"
            onClick={() => setIsOpen(false)}
            className="hover:text-blue-500 w-full font-bold"
          >
            Projects
          </a>
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="hover:text-blue-500 w-full font-bold"
          >
            Contact
          </a>
          <a
            href="https://www.linkedin.com/in/your-username"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="hover:text-blue-500 w-full font-bold flex items-center justify-center gap-2"
          >
            <img src={linkedin} alt="LinkedIn" className="w-5 h-5" />
            LinkedIn
          </a>
        </div>
      )}
    </nav>
  );
}
