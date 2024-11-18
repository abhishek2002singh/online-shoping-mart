import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // For navigation

const ShimmerLogin = () => {
  const [countdown, setCountdown] = useState(40); // Initialize countdown at 20 seconds
  const [showErrorMessage, setShowErrorMessage] = useState(false); // Track if error message should be shown
  const navigate = useNavigate(); // Hook for navigation

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
      return () => clearTimeout(timer); // Clear timeout on unmount or re-render
    } else {
      setShowErrorMessage(true); // Show error message when countdown hits zero
    }
  }, [countdown]);

  const handleReturn = () => {
    navigate('/login'); // Replace '/login' with your desired route
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      {!showErrorMessage ? (
        <>
          {/* Image */}
          <div className="mb-6">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyFLbPti08IhD68f1qEi3aJNZJeNsdymwPbg&s"
              alt="Loading Animation"
              className="w-24 h-24 object-cover rounded-full shadow-lg animate-pulse"
            />
          </div>

          {/* Text */}
          <h1 className="text-xl font-semibold text-gray-700 mb-2">Please Wait</h1>
          <p className="text-gray-500">We are processing your login request...</p>

          {/* Countdown Timer */}
          <div className="mt-4 text-lg font-medium text-gray-600">
            Redirecting in <span className="text-blue-500">{countdown}</span> seconds...
          </div>

          {/* Shimmer Effect */}
          <div className="mt-6 w-48 h-2 bg-gray-300 rounded-lg overflow-hidden relative">
            <div className="w-1/3 h-full bg-gray-400 absolute left-0 animate-shimmer"></div>
          </div>
        </>
      ) : (
        <div className="text-center">
          {/* Error Message */}
          <h1 className="text-xl font-semibold text-red-600 mb-4">Error</h1>
          <p className="text-gray-700 mb-6">
            Please fill in the correct <strong>Email ID</strong> and <strong>Password</strong>.
            If signing up, ensure <strong>Mobile Number</strong>, <strong>Last Name</strong>, and other fields are valid.
          </p>
          {/* Return Button */}
          <Link to='/'>
          <button
            className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition duration-300"
            onClick={handleReturn}
          >
            Return home Page
          </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default ShimmerLogin;
