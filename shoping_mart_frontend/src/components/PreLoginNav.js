import React, { useState } from 'react';

const PreLoginNav = () => {
  const [language, setLanguage] = useState('English'); // Default language
  const [isLanguageOpen, setIsLanguageOpen] = useState(false); // State to toggle language dropdown
  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    setIsLanguageOpen(false); // Close dropdown after selection
  };

  const toggleLanguageDropdown = () => {
    setIsLanguageOpen(!isLanguageOpen);
  };

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo Section */}
        <div className="flex items-center">
          <h1 className="text-3xl font-extrabold text-blue-600">EzziMart</h1> {/* Blue-colored text art logo */}
        </div>

        {/* Language Selector */}
        <div className="relative">
          <button
            onClick={toggleLanguageDropdown}
            className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition duration-300"
          >
            {language}
          </button>
          {isLanguageOpen && (
            <div className="absolute right-0 mt-2 bg-white border rounded-md shadow-lg">
              <button
                onClick={() => handleLanguageChange('English')}
                className={`block px-4 py-2 w-full text-left ${
                  language === 'English' ? 'bg-gray-200' : 'hover:bg-gray-100'
                }`}
              >
                English
              </button>
              <button
                onClick={() => handleLanguageChange('Hindi')}
                className={`block px-4 py-2 w-full text-left ${
                  language === 'Hindi' ? 'bg-gray-200' : 'hover:bg-gray-100'
                }`}
              >
                Hindi
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default PreLoginNav;
