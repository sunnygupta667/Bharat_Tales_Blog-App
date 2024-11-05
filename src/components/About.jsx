import React from "react";
import { FaPenNib, FaBookOpen, FaUsers, FaComment, FaGlobe } from "react-icons/fa";

function About() {
  return (
    <div name="About" className="max-w-screen-2xl mx-auto px-4 md:px-20 pt-32 bg-gradient-to-b from-gray-100 to-gray-200 py-16">
      <div className="bg-white shadow-lg rounded-lg p-10 transition-transform duration-300 transform hover:scale-105">
        <h1 className="text-5xl font-extrabold mb-8 text-center text-gray-900">About Bharat Tales</h1>

        {/* Hero Image */}
        <div className="flex justify-center mb-10">
          <img
            src="https://media.istockphoto.com/id/1322050655/vector/vintage-map-of-asia-vector-ancient-parchment.jpg?s=612x612&w=0&k=20&c=FKwGdSQ2BrcU8CX5zx1vniuVe02ew_afJFb_jg4df-s="
            alt="Indian Culture"
            className="w-full md:w-2/5 h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-800 mb-10 text-lg leading-relaxed text-center">
          Welcome to Bharat Tales! Launched in 2024, Bharat Tales is your gateway to the rich tapestry of Indian culture.
          Our blog is dedicated to exploring the diverse traditions, customs, and stories that make India a unique and vibrant nation.
          Join us on this exciting journey of cultural exploration!
        </p>

        {/* Section: Our Mission */}
        <div className="bg-[#fdf3f3] p-6 rounded-lg mb-8">
          <h2 className="text-[#c34236] font-semibold text-3xl flex items-center gap-3 mb-5">
            <FaPenNib className="text-amber-500" /> Our Mission
          </h2>
          <p className="text-gray-800 text-lg leading-relaxed">
            At Bharat Tales, we believe that culture is not just a collection of customs and practices; it is the heart and soul of a community.
            Through our blog, we aim to share captivating stories that showcase the beauty of Indian culture, from ancient rituals to contemporary artistic expressions.
          </p>
        </div>

        {/* Section: What We Share */}
        <div className="bg-[#f7f9fc] p-6 rounded-lg mb-8">
          <h2 className="text-[#c34236] font-semibold text-3xl flex items-center gap-3 mb-5">
            <FaBookOpen className="text-blue-500" /> What We Share
          </h2>
          <ul className="space-y-3 text-gray-800 text-lg list-disc list-inside pl-5">
            <li>Fascinating stories about the diverse languages spoken across the country</li>
            <li>The significance of various festivals like Diwali and Holi</li>
            <li>Intricate art forms passed down through generations</li>
            <li>Interviews with local artisans and cultural practitioners</li>
          </ul>
        </div>

        {/* Additional Image */}
        <div className="flex justify-center mb-10">
          <img
            src="https://media.istockphoto.com/id/1368882687/photo/indian-traditional-goddess-mariyamman-statue-on-temple-tower.jpg?s=612x612&w=0&k=20&c=9dm5bD4Fl6Ry9VIzN70e4MmuXOhknwZZ9_gOIckwVw8="
            alt="Festivals of India"
            className="w-full md:w-2/5 h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Section: Join Our Community */}
        <div className="bg-[#fdf3f3] p-6 rounded-lg mb-8">
          <h2 className="text-[#c34236] font-semibold text-3xl flex items-center gap-3 mb-5">
            <FaUsers className="text-green-500" /> Join Our Community
          </h2>
          <p className="text-gray-800 text-lg leading-relaxed">
            We encourage our readers to engage with us and share their own stories. Everyone has a tale worth telling,
            and we want to hear yours! Your feedback, comments, and suggestions help us grow and make our community more vibrant.
          </p>
        </div>

        {/* Section: Stay Connected */}
        <div className="bg-[#f7f9fc] p-6 rounded-lg mb-8">
          <h2 className="text-[#c34236] font-semibold text-3xl flex items-center gap-3 mb-5">
            <FaComment className="text-purple-500" /> Stay Connected
          </h2>
          <p className="text-gray-800 text-lg leading-relaxed">
            Follow us on social media to stay updated on our latest posts and subscribe to our newsletter for exclusive content delivered directly to your inbox.
          </p>
        </div>

        {/* Section: Thank You */}
        <div className="bg-[#fdf3f3] p-6 rounded-lg mb-8">
          <h2 className="text-[#c34236] font-semibold text-3xl flex items-center gap-3 mb-5">
            <FaGlobe className="text-yellow-500" /> Thank You
          </h2>
          <p className="text-gray-800 text-lg leading-relaxed">
            Thank you for visiting Bharat Tales. We hope you find inspiration and joy in our stories, and we look forward to embarking on this cultural journey together!
          </p>
        </div>

        <p className="text-gray-800 text-lg text-center font-bold mb-5">Happy reading!</p>
        <p className="text-gray-800 text-lg text-center font-bold mb-5">The Bharat Tales Team</p>
      </div>
    </div>
  );
}

export default About;
