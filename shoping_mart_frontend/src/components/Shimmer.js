// Shimmer.js
import React from 'react';

const Shimmer = () => {
  return (
    <div className="bg-gray-200 p-4 rounded-lg shadow-md animate-pulse transition-colors duration-500 ease-in-out">
      {/* Image Placeholder */}
      <div className="w-full h-48 bg-gray-300 rounded-lg mb-4"></div>

      {/* Title Placeholder */}
      <div className="h-6 bg-gray-300 mb-2 rounded transition-all duration-300 ease-in-out"></div>

      {/* Price Placeholder */}
      <div className="h-4 bg-gray-200 mb-2 rounded w-1/2 transition-all duration-300 ease-in-out"></div>

      {/* Rating Placeholder */}
      <div className="h-4 bg-yellow-300 rounded w-1/3 transition-all duration-300 ease-in-out"></div>
    </div>
  );
};

export default Shimmer;
