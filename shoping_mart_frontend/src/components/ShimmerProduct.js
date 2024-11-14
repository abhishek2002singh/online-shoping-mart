import React from 'react';

const ShimmerProduct = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Shimmer Effect for Image */}
        <div className="flex flex-col gap-4 md:w-1/3">
          <div className="shimmer w-full h-64 bg-gray-300 rounded-md"></div>
          <div className="flex gap-4">
            <div className="shimmer w-16 h-16 bg-gray-300 rounded-md"></div>
            <div className="shimmer w-16 h-16 bg-gray-300 rounded-md"></div>
          </div>
        </div>

        {/* Shimmer Effect for Product Details */}
        <div className="md:w-2/3">
          <div className="shimmer w-3/4 h-8 bg-gray-300 rounded-md mb-4"></div>
          <div className="shimmer w-1/2 h-6 bg-gray-300 rounded-md mb-4"></div>
          <div className="shimmer w-full h-4 bg-gray-300 rounded-md mb-4"></div>
          <div className="flex gap-4 my-6">
            <div className="shimmer w-32 h-10 bg-gray-300 rounded-md"></div>
            <div className="shimmer w-32 h-10 bg-gray-300 rounded-md"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShimmerProduct;
