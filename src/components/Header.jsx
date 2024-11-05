import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-slate-950 w-full shadow-lg">
      <div className="container mx-auto p-4 md:p-4 flex justify-between items-center relative">
        {/* Logo */}
        <div className="hover:scale-110  ml-8 transition-transform duration-300">
          <Link to="/" className="text-2xl md:text-4xl font-bold text-orange-500">
            B <span className="text-green-600 md:ml-[-9px] sm:ml-[-6px]">T</span>
          </Link>
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
          {!isMenuOpen ? (
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          ) : (
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              onClick={toggleMenu}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          )}
        </div>

        {/* Navigation Links */}
        <nav className={`md:flex ${isMenuOpen ? "block" : "hidden"} absolute md:static bg-gray-900 md:bg-transparent w-full md:w-auto top-16 md:top-auto left-0 z-10 transition-transform duration-300 ease-in-out`}>
          <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-10 text-sm md:text-lg font-semibold p-4 md:p-0">
            <li className="group md:py-2">
              <Link to="/" className="text-white hover:text-yellow-400 py-2 transition duration-300 relative">
                Home
                <span className="block h-0.5 bg-yellow-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              </Link>
            </li>
            <li className="group md:py-2">
              <Link to="/Blog" className="text-white py-2 hover:text-yellow-400 transition duration-300 relative">
                Blogs
                <span className="block h-0.5 bg-yellow-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              </Link>
            </li>
            <li className="group md:py-2">
              <Link to="/about" className="text-white hover:text-yellow-400 transition duration-300 relative">
                About
                <span className="block h-0.5 bg-yellow-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              </Link>
            </li>
            <li>
              <Link to="/contact" className="inline-block px-4 py-2 border border-orange-500 text-orange-500 font-semibold rounded hover:bg-orange-500 hover:text-white transition duration-300">
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
