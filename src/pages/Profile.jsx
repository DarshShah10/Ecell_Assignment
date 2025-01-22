import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import image from '../assets/darsh_image.jpeg';

const Profile = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div 
      className="min-h-screen relative bg-black overflow-hidden flex flex-col justify-center items-center"
      style={{
        fontFamily: "'Press Start 2P', sans-serif",
      }}
    >
      {/* Import Font */}
      <link 
        href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" 
        rel="stylesheet"
      />

      {/* Navigation Bar */}
      <div className="fixed top-0 w-full z-50 bg-[#161616]">
        <nav className="border-b border-[#FF2D55] shadow-md">
          {/* Desktop Navigation */}
          <div className="hidden md:flex justify-end p-4 gap-6">
            <Link to="/grid" className="text-[#FF2D55] hover:text-[#45D1C9] transition-colors duration-300">Home</Link>
            <Link to="/" className="text-[#FF2D55] hover:text-[#45D1C9] transition-colors duration-300">Grid</Link>
            <a 
              href="https://www.linkedin.com/in/darsh-shah-a42907289/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[#FF2D55] hover:text-[#45D1C9] transition-colors duration-300"
            >
              LinkedIn
            </a>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            {/* Hamburger Button */}
            <div className="flex justify-end p-4">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-[#FF2D55] hover:text-[#45D1C9] focus:outline-none w-8 h-8 relative transition-colors duration-300"
              >
                {!isMenuOpen ? (
                  <div className="space-y-2">
                    <span className="block w-8 h-0.5 bg-[#FF2D55]"></span>
                    <span className="block w-8 h-0.5 bg-[#FF2D55]"></span>
                    <span className="block w-8 h-0.5 bg-[#FF2D55]"></span>
                  </div>
                ) : (
                  <div className="absolute inset-0">
                    <span className="absolute top-1/2 left-0 w-8 h-0.5 bg-[#FF2D55] -translate-y-1/2 rotate-45"></span>
                    <span className="absolute top-1/2 left-0 w-8 h-0.5 bg-[#FF2D55] -translate-y-1/2 -rotate-45"></span>
                  </div>
                )}
              </button>
            </div>

            {/* Mobile Menu Items */}
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-48' : 'max-h-0'}`}>
              <div className="flex flex-col items-center space-y-4 py-4 bg-[#161616]">
                <Link to="/grid" className="text-[#FF2D55] hover:text-[#45D1C9] transition-colors duration-300">Home</Link>
                <Link to="/" className="text-[#FF2D55] hover:text-[#45D1C9] transition-colors duration-300">Grid</Link>
                <a 
                  href="https://www.linkedin.com/in/darsh-shah-a42907289/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#FF2D55] hover:text-[#45D1C9] transition-colors duration-300"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>

      {/* Floating Shapes */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none animate-float">
        {/* Circles */}
        {Array.from({ length: 20 }).map((_, index) => (
          <div
            key={index}
            className="absolute top-[calc(10px + 5%)] left-[calc(10px + 5%)] w-16 h-16 border-4 border-[#FF2D55] rounded-full opacity-20 animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}

        {/* Squares */}
        {Array.from({ length: 20 }).map((_, index) => (
          <div
            key={index}
            className="absolute top-[calc(10px + 5%)] left-[calc(10px + 5%)] w-16 h-16 border-4 border-[#FF9500] opacity-20 animate-float "
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}

        {/* Triangles */}
        {Array.from({ length: 20 }).map((_, index) => (
          <div
            key={index}
            className="absolute w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-b-[40px] border-b-[#34A853] opacity-20 animate-float "
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <style>
        {`
          @keyframes float {
            0% { transform: translate(0, 0); }
            50% { transform: translate(50px, -50px); }
            75% { transform: translate(50px, -25px); }
            100% { transform: translate(0, 0); }
          }

          .animate-float {
            animation: float 10s infinite ease-in-out;
          }
        `}
      </style>

      {/* Main Content */}
      <div className="relative z-10 text-center mt-16">
        {/* Profile Image */}
        <div className="w-48 h-48 rounded-full border-4 border-[#FF2D55] mb-8 overflow-hidden hover:scale-110 transition-transform duration-300 mx-auto">
          <img 
            src={image} 
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Name */}
        <h1 className="text-[#FF2D55] text-4xl mb-4 hover:text-[#45D1C9] transition-colors duration-300">
          Player 456
        </h1>
        <h1 className="text-[#FF2D55] text-4xl mb-4 hover:text-[#45D1C9] transition-colors duration-300">
          Name: Darsh Shah
        </h1>

        {/* Registration Number */}
        <h1 className="text-[#45D1C9] text-3xl mb-8 font-mono hover:text-[#FF2D55] transition-colors duration-300">
          Reg No: #20233516
        </h1>

        {/* Instagram Button */}
        <div className="relative">
          <a
            href="https://www.instagram.com/darshshah_2005/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-[#FF2D55] text-white rounded hover:bg-[#45D1C9] transition-colors duration-300 inline-block"
          >
            Follow on Instagram
          </a>
          {/* Triangle Below Button */}
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-b-8 border-transparent border-b-[#45D1C9]" />
        </div>

        {/* Guards */}
        <div className="mt-16 flex gap-8 justify-center">
          <div className="w-16 h-16 rounded-full bg-[#FF2D55] hover:scale-125 transition-transform duration-300" />
          <div className="w-16 h-16 bg-[#45D1C9] hover:rotate-45 transition-transform duration-300" />
          <div className="w-16 h-16 transform rotate-45 bg-[#E6E6E6] hover:rotate-0 transition-transform duration-300" />
        </div>
      </div>

    </div>
  );
};

export default Profile;
