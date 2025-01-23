import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const HomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [clickedSquares, setClickedSquares] = useState([]);
  const [squares, setSquares] = useState(() => {
    const initial = Array(9).fill('darkblue');
    initial[8] = 'darkred';
    return initial;
  });
  
  const handleSquareClick = (index) => {
    if (index === 8) {
      const clickedOrder = [...clickedSquares];
      setClickedSquares([]);
      
      clickedOrder.forEach((squareIndex, i) => {
        setTimeout(() => {
          setSquares(prev => {
            const newState = [...prev];
            newState[squareIndex] = 'darkblue';
            // newState[8] = 'darkred';
            return newState;
          });
        }, i * 300);
      });
    } else if (squares[index] === 'darkblue') {
      setSquares(prev => {
        const newState = [...prev];
        newState[index] = 'darkred';
        return newState;
      });
      setClickedSquares(prev => [...prev, index]);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <div className="sticky top-0 z-50 bg-white">
        <nav className="border-b border-gray-200 shadow-md">
          {/* Desktop Navigation */}
          <div className="hidden md:flex justify-end p-4 gap-6">
            <Link to="/grid" className="text-gray-600 hover:text-gray-900">Home</Link>
            <Link to="/" className="text-gray-600 hover:text-gray-900">Grid</Link>
            <a 
              href="https://www.linkedin.com/in/darsh-shah-a42907289/" 
              target="_blank" 
              className="text-gray-600 hover:text-gray-900"
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
                className="text-gray-600 hover:text-gray-900 focus:outline-none w-8 h-8 relative"
              >
                {!isMenuOpen ? (
                  <div className="space-y-2">
                    <span className="block w-8 h-0.5 bg-gray-600"></span>
                    <span className="block w-8 h-0.5 bg-gray-600"></span>
                    <span className="block w-8 h-0.5 bg-gray-600"></span>
                  </div>
                ) : (
                  <div className="absolute inset-0">
                    <span className="absolute top-1/2 left-0 w-8 h-0.5 bg-gray-600 -translate-y-1/2 rotate-45"></span>
                    <span className="absolute top-1/2 left-0 w-8 h-0.5 bg-gray-600 -translate-y-1/2 -rotate-45"></span>
                  </div>
                )}
              </button>
            </div>

            {/* Mobile Menu Items */}
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-48' : 'max-h-0'}`}>
              <div className="flex flex-col items-center space-y-4 py-4">
                <Link to="/grid" className="text-gray-600 hover:text-gray-900">Home</Link>
                <Link to="/" className="text-gray-600 hover:text-gray-900">Grid</Link>
                <a 
                  href="https://www.linkedin.com/in/darsh-shah-a42907289/" 
                  target="_blank" 
                  className="text-gray-600 hover:text-gray-900"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 md:px-8 py-6 md:mt-8">
        {/* Mobile View */}
        <div className="grid grid-cols-1 gap-8 md:hidden justify-items-center">
          <div className="h-[30vh] w-[70vw] aspect-square bg-gray-200 rounded-lg shadow-lg p-4 border border-gray-200 flex items-center justify-center">
            <div className="grid grid-cols-3 grid-rows-3 gap-2 w-full h-full">
              {squares.map((color, i) => (
                <div
                  key={i}
                  onClick={() => handleSquareClick(i)}
                  className={`${color === 'darkblue' ? 'bg-blue-900' : 'bg-red-900'} rounded-lg cursor-pointer transition-colors duration-300 shadow-inner`}
                />
              ))}
            </div>
          </div>

          <div className=" h-[30vh] w-[70vw] aspect-square bg-white rounded-lg shadow-lg p-4 border border-gray-200 flex items-center justify-center">
            <img 
              src={logo} 
              alt="Cell logo" 
              className="w-3/4 h-3/4 object-contain"
            />
          </div>

          <div className=" h-[30vh] w-[70vw] aspect-square  bg-gradient-to-br  from-blue-600 to to-pink-500 rounded-lg shadow-lg border border-gray-200 flex items-center justify-center" />
        </div>
        {/* Tablet View */}
        <div className="hidden md:grid lg:hidden gap-8">
          <div className="h-72 bg-gradient-to-br from-blue-600 to to-pink-500 rounded-lg shadow-lg border border-gray-200" />
          <div className="grid grid-cols-2 gap-8">
            <div className="h-80 bg-white rounded-lg shadow-lg p-8 border border-gray-200">
              <div className="w-full h-full flex items-center justify-center">
                <img 
                  src={logo} 
                  alt="Cell logo" 
                  className="w-3/4 h-3/4 object-contain"
                />
              </div>
            </div>

            <div className="h-80 bg-gray-200 rounded-lg shadow-lg p-8 border border-gray-200">
              <div className="grid grid-cols-3 grid-rows-3 gap-4 h-full">
                {squares.map((color, i) => (
                  <div
                    key={i}
                    onClick={() => handleSquareClick(i)}
                    className={`${color === 'darkblue' ? 'bg-blue-900' : 'bg-red-900'} rounded-lg cursor-pointer transition-colors duration-300 shadow-inner`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Desktop/Web View */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-8">
          <div className="aspect-square bg-gradient-to-br from-blue-600 to to-pink-500  rounded-lg shadow-lg border border-gray-200" />
          
          <div className="aspect-square bg-white rounded-lg shadow-lg p-8 border border-gray-200">
            <div className="w-full h-full flex items-center justify-center">
              <img 
                src={logo} 
                alt="Cell logo" 
                className="w-3/4 h-3/4 object-contain"
              />
            </div>
          </div>

          <div className="aspect-square bg-gray-200 rounded-lg shadow-lg p-8 border border-gray-200">
            <div className="grid grid-cols-3 grid-rows-3 gap-4 h-full">
              {squares.map((color, i) => (
                <div
                  key={i}
                  onClick={() => handleSquareClick(i)}
                  className={`${color === 'darkblue' ? 'bg-blue-900' : 'bg-red-900'} rounded-lg cursor-pointer transition-colors duration-300 shadow-inner`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;