import React, { useState } from 'react';
import AllItem from '../allItem/Item';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="max-w-7xl mx-auto">
        <div className="container flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-white font-bold text-xl">Furniture Store</a>
          </div>
          {/* Navigation links */}
          <div className="hidden md:block">
            <ul className="flex space-x-4">
              <li><a href="/" className="text-white hover:text-gray-300">Home</a></li>
              <li><a href="/allItems" className="text-white hover:text-gray-300">AllItems</a></li>
              <li><a href="/about" className="text-white hover:text-gray-300">About</a></li>
              <li><a href="/contact" className="text-white hover:text-gray-300">Contact</a></li>
            </ul>
          </div>

           {/* Login / Signup page */}
           <div className="hidden md:block">
            <ul className="flex space-x-3">
              <li><a href="/login" className="text-white hover:text-gray-300">Login</a></li>
              <li><a href="/signup" className="text-white hover:text-gray-300">Sign up</a></li>
            </ul>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-white" onClick={toggleMobileMenu}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                )}
              </svg>
            </button>
          </div>
        </div>
        {/* Mobile menu */}
        {isMobileMenuOpen && (
            <>          <div className="md:hidden mt-2">
            <ul className="flex flex-col space-y-2">
              <li><a href="/" className="text-white hover:text-gray-300">Home</a></li>
              <li><a href="/allItems" className="text-white hover:text-gray-300">AllItems</a></li>
              <li><a href="/about" className="text-white hover:text-gray-300">About</a></li>
              <li><a href="/contact" className="text-white hover:text-gray-300">Contact</a></li>
            </ul>
          </div>

 <div className="md:hidden mt-2">
            <ul className="flex flex-col space-y-2">
              <li><a href="/login" className="text-white hover:text-gray-300">Login</a></li>
              <li><a href="/signup" className="text-white hover:text-gray-300">Sign up</a></li>
            </ul>
          </div>
</>

        )}
      </div>
    </nav>
  );
}

export default Navbar;
