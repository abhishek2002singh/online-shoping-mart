import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiPlus, FiMinus } from 'react-icons/fi';
import { FaStar, FaRegStar } from 'react-icons/fa'; // For ratings

const PreLogin = () => {
  const navigate = useNavigate();
  const [openQuestion, setOpenQuestion] = useState(null);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  const toggleQuestion = (index) => setOpenQuestion(openQuestion === index ? null : index);
  const toggleLanguage = () => setIsLanguageOpen(!isLanguageOpen);

  const faqItems = [
    { question: 'What is EzziMart?', answer: 'EzziMart is a one-stop shop for groceries, fashion, and electronics.' },
    { question: 'What offers are available?', answer: 'Enjoy discounts of 10%, 20%, and 30% on selected items.' },
    { question: 'What can I buy?', answer: 'Groceries, clothing, electronics, jewelry, and more.' },
    { question: 'How do I track my order?', answer: 'Track your order from the "My Orders" section in your account.' },
  ];

  const productCategories = [
    { category: 'Groceries', description: 'Fresh vegetables, fruits, and daily essentials.' },
    { category: 'Fashion', description: 'Latest trends in clothing, shoes, and accessories.' },
    { category: 'Electronics', description: 'Smartphones, laptops, and home appliances.' },
    { category: 'Jewelry', description: 'Elegant gold, silver, and diamond pieces.' },
  ];

  const offers = [
    '10% off on orders above ₹500',
    '20% off on fashion and accessories',
    'Flat 30% off on electronics this weekend',
    'Buy 1 Get 1 Free on select groceries',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 flex flex-col items-center justify-center relative">
      {/* Welcome Section */}
      <div className="relative text-center text-gray-800 p-6 max-w-4xl">
        <h1 className="text-6xl font-extrabold mb-4 text-blue-700">EzziMart</h1>
        <p className="text-lg md:text-xl leading-relaxed mb-6">
          Your ultimate destination for groceries, electronics, fashion, and more.
        </p>
        <Link to="/login">
          <button
            className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-lg font-semibold rounded-full hover:from-purple-600 hover:to-indigo-500 transition duration-300 mb-8"
            onClick={() => navigate('/login')}
          >
            Login to Get Started
          </button>
        </Link>
      </div>

      {/* Language Dropdown */}
      <div className="relative mb-8">
        <button
          className="px-6 py-3 bg-gray-100 text-gray-700 font-semibold rounded-full hover:bg-gray-200 transition duration-300"
          onClick={toggleLanguage}
        >
          Language
        </button>
        {isLanguageOpen && (
          <div className="absolute mt-2 w-40 bg-white shadow-lg rounded-lg z-10">
            <button className="block px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-left">English</button>
            <button className="block px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-left">हिंदी</button>
            <button className="block px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-left">Español</button>
          </div>
        )}
      </div>

      {/* Offers Section */}
      <div className="bg-white text-gray-800 rounded-lg shadow-xl p-6 w-full max-w-4xl mb-8">
        <h2 className="text-2xl font-bold mb-4 text-indigo-700">Today's Offers</h2>
        <ul className="list-disc list-inside text-gray-600">
          {offers.map((offer, index) => (
            <li key={index}>{offer}</li>
          ))}
        </ul>
      </div>

      {/* Product Categories Section */}
      <div className="bg-white text-gray-800 rounded-lg shadow-xl p-6 w-full max-w-4xl mb-8">
        <h2 className="text-2xl font-bold mb-4 text-indigo-700">Explore Categories</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {productCategories.map((item, index) => (
            <li key={index} className="p-4 border rounded-lg hover:shadow-md transition">
              <h3 className="font-bold text-lg text-indigo-700">{item.category}</h3>
              <p className="text-gray-600">{item.description}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* FAQ Section */}
      <div className="bg-white text-gray-800 rounded-lg shadow-xl p-6 w-full max-w-4xl">
        <h2 className="text-2xl font-bold mb-4 text-indigo-700">Frequently Asked Questions</h2>
        <div>
          {faqItems.map((item, index) => (
            <div key={index} className="border-b last:border-none">
              <button
                className="flex justify-between items-center w-full py-4 text-left focus:outline-none"
                onClick={() => toggleQuestion(index)}
              >
                <span className="text-lg font-medium">{item.question}</span>
                {openQuestion === index ? (
                  <FiMinus className="text-indigo-700" size={20} />
                ) : (
                  <FiPlus className="text-indigo-700" size={20} />
                )}
              </button>
              {openQuestion === index && (
                <p className="text-gray-600 text-base px-4 pb-4">{item.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PreLogin;
