import React, { useState } from 'react';
import { Link} from 'react-router-dom';

const PreLoginNav = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State to toggle "More" dropdown

  // const toggleDropdown = () => {
  //   setIsDropdownOpen(!isDropdownOpen);
  // };

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo Section */}
        <div className="flex items-center">
          <h1 className="text-3xl font-extrabold text-blue-600">EzziMart</h1>
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center space-x-6">
          {/* Login Button */}
          <Link to="/login">
          <button className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300">
            Login
          </button>
          </Link>

          {/* More Button */}
          {/* <div className="relative">
            <button
              onClick={toggleDropdown}
              className="px-6 py-2 bg-gray-100 text-gray-700 font-semibold rounded-md hover:bg-gray-200 transition duration-300"
            >
              More
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 bg-white border rounded-md shadow-lg">
                <button
                  className="block px-4 py-2 w-full text-left hover:bg-gray-100"
                >
                  About Us
                </button>
                <button
                  className="block px-4 py-2 w-full text-left hover:bg-gray-100"
                >
                  Contact
                </button>
                <button
                  className="block px-4 py-2 w-full text-left hover:bg-gray-100"
                >
                  Help
                </button>
              </div>
            )}
          </div> */}
        </div>
      </div>
    </nav>
  );
};

export default PreLoginNav;
