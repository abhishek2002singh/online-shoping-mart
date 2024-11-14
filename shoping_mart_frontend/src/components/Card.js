import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing

const Card = ({ title, image, price, rating, id }) => {
  return (
    <Link to={`/product/${id}`} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition">
      <img src={image} alt={title} className="w-full h-48 object-contain mb-4" />
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <p className="text-gray-500 text-sm mb-2">${price}</p>
      <p className="text-yellow-500 text-sm font-bold">Rating: {rating}</p>
    </Link>
  );
};

export default Card;
