import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-blue-700">
            🧠 QuizHub
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
              Home
            </Link>
            <Link to="/generate" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
              Generate Quiz
            </Link>
            <Link to="/about" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
              About
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden flex flex-col justify-center items-center w-6 h-6 space-y-1"
            aria-label="Toggle navigation menu"
          >
            <span className={`block w-6 h-0.5 bg-gray-600 transition-transform duration-300 ${
              isMenuOpen ? 'rotate-45 translate-y-2' : ''
            }`}></span>
            <span className={`block w-6 h-0.5 bg-gray-600 transition-opacity duration-300 ${
              isMenuOpen ? 'opacity-0' : ''
            }`}></span>
            <span className={`block w-6 h-0.5 bg-gray-600 transition-transform duration-300 ${
              isMenuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}></span>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`md:hidden mt-4 transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="flex flex-col space-y-3 py-4 border-t border-gray-200">
            <Link 
              to="/" 
              className="text-gray-600 hover:text-blue-600 transition-colors duration-200 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/quiz" 
              className="text-gray-600 hover:text-blue-600 transition-colors duration-200 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Generate Quiz
            </Link>
            <Link 
              to="/about" 
              className="text-gray-600 hover:text-blue-600 transition-colors duration-200 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;