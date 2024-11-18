import React from 'react';

const ShimmerLogout = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      {/* Image */}
      <div className="mb-6">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyFLbPti08IhD68f1qEi3aJNZJeNsdymwPbg&s"
          alt="Loading Animation"
          className="w-24 h-24 object-cover rounded-full shadow-lg animate-pulse"
        />
      </div>

      {/* Text */}
      <h1 className="text-xl font-semibold text-gray-700 mb-2">Logging Out</h1>
      <p className="text-gray-500">We are safely logging you out. Please wait...</p>

      {/* Shimmer Effect */}
      <div className="mt-6 w-48 h-2 bg-gray-300 rounded-lg overflow-hidden relative">
        <div className="w-1/3 h-full bg-gray-400 absolute left-0 animate-shimmer"></div>
      </div>
    </div>
  );
};

export default ShimmerLogout;
