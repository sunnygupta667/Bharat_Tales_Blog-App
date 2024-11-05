import React from "react";
import { FaInstagram, FaLinkedinIn, FaGithub, FaFacebookF, FaWhatsapp } from "react-icons/fa"; // Importing necessary icons

function Footer() {
  return (
    <footer id="footer" className="bg-gradient-to-br from-gray-800 to-black text-gray-300 py-10">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold mb-3 text-teal-400"><span className="text-orange-500">Bharat</span> <span className="text-green-600">Tales</span></h2>
            <p className="text-sm mb-4">
              Sharing knowledge, insights, and tips for tech enthusiasts and developers.
            </p>
            <p className="text-sm">
              Stay tuned for more blog posts on web development, coding, and technology.
            </p>
          </div>

          {/* Social Links Section */}
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-6">
              <a href="https://www.instagram.com/_sunny_480" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram size={30} className="text-pink-500 hover:text-pink-600 transition duration-300 transform hover:scale-125" />
              </a>
              <a href="https://www.linkedin.com/in/sunny-gupta-a436302b0" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedinIn size={30} className="text-blue-500 hover:text-blue-600 transition duration-300 transform hover:scale-125" />
              </a>
              <a href="https://github.com/sunnygupta667" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub size={30} className="text-gray-300 hover:text-white transition duration-300 transform hover:scale-125" />
              </a>
              <a href="https://www.geeksforgeeks.org/user/sg747a5ll/" target="_blank" rel="noopener noreferrer" aria-label="GeeksforGeeks" className="text-green-500 text-lg font-semibold hover:scale-125 transition duration-300">
                GFG
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebookF size={30} className="text-blue-500 hover:text-blue-600 transition duration-300 transform hover:scale-125" />
              </a>
              <a href="https://api.whatsapp.com/send?text=Check%20out%20this%20blog%20post!" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <FaWhatsapp size={30} className="text-green-500 hover:text-green-600 transition duration-300 transform hover:scale-125" />
              </a>
            </div>
          </div>

          {/* Links Section */}
          <div className="text-center md:text-right">
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <a href="/privacy-policy" className="text-sm text-blue-400 hover:underline hover:text-blue-500 transition duration-200">Privacy Policy</a>
              <p className="text-sm text-gray-400">Created by Sunny Gupta</p>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-8 border-t border-gray-700 pt-6 text-center">
          <p className="text-xs text-gray-500">&copy; 2024 Bharat Tales. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
