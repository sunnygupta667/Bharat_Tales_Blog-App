// Home.jsx
import React from "react";

function Home() {
  return (
    <div
      name="Home"
      className="max-w-screen-2xl container mx-auto px-4  md:px-10 lg:px-20 bg-cover bg-center"
      style={{
        backgroundImage: `url('https://cdn.vectorstock.com/i/500p/11/66/luxurious-indian-mandala-pattern-in-paper-cut-vector-52671166.avif')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay for better text visibility */}
      <div className="bg-[#0b0b21] bg-opacity-90 text-white py-16 px-6 rounded-lg shadow-2xl">
        
        {/* Welcome Section */}
        <div className="text-center mb-12 mt-10">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Welcome to <span className="text-orange-500">Bharat</span> <span className="text-green-600">Tales</span>
          </h1>
          <p className="mt-4 text-md md:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the soul of India through its culture, traditions, and timeless stories.
          </p>
          <div className="mt-6">
            <a href="/about" className="inline-block px-6 py-3 border border-orange-500 text-orange-500 font-semibold rounded hover:bg-orange-500 hover:text-white transition duration-300">
              Learn More
            </a>
          </div>
        </div>
        
        {/* About Section */}
        <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-8">
          
          {/* Text Content */}
          <div className="md:w-1/2 space-y-6 text-center md:text-left px-6">
            <h2 id="about" className="text-2xl lg:text-3xl font-semibold text-cyan-500 border-b-4 border-cyan-500 inline-block pb-2 mb-4">
              About Bharat Tales
            </h2>
            <p className="text-[16px] md:text-md lg:text-lg text-gray-300 leading-relaxed">
              Bharat Tales is a platform dedicated to exploring the essence of India. From its rich heritage and festivals to its culinary diversity and unique traditions, we dive deep into the spirit of this incredible nation.
            </p>
            <p className="text-[16px] md:text-md lg:text-lg text-gray-300 leading-relaxed">
              Join us as we celebrate India’s cultural mosaic, bringing forth the stories that define its heart and soul. Discover the tales that make India an unforgettable experience!
            </p>
          </div>
          
          {/* Image Content */}
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <img
              src="https://t3.ftcdn.net/jpg/01/17/79/44/240_F_117794487_ttXDoXhw8pNK9F6XVvcTAgQUg4ncObJ8.jpg" 
              className="rounded-lg shadow-lg md:w-[90%] lg:w-[75%] opacity-55 hover:opacity-80 transition duration-300"
              alt="Indian Heritage"
            />
          </div>
        </div>

       
      </div>
    </div>
  );
}

export default Home;
