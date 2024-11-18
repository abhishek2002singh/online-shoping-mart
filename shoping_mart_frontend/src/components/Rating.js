import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const Rating = () => {
  const [ratings, setRatings] = useState({
    best: 4095,
    better: 1520,
    good: 359,
    bad: 161,
    veryBad: 479,
  });

  const [highlighted, setHighlighted] = useState(null); // For highlighting clicked button

  const handleVote = (type) => {
    setRatings((prev) => ({
      ...prev,
      [type]: prev[type] + 1,
    }));

    setHighlighted(type);

    // Remove highlight after a short duration
    setTimeout(() => setHighlighted(null), 800);
  };

  const ratingOptions = [
    { label: 'Best', stars: 5, type: 'best', color: 'bg-green-500', count: ratings.best },
    { label: 'Better', stars: 4, type: 'better', color: 'bg-blue-500', count: ratings.better },
    { label: 'Good', stars: 3, type: 'good', color: 'bg-yellow-500', count: ratings.good },
    { label: 'Bad', stars: 2, type: 'bad', color: 'bg-orange-500', count: ratings.bad },
    { label: 'Very Bad', stars: 1, type: 'veryBad', color: 'bg-red-500', count: ratings.veryBad },
  ];

  return (
    <div className="container mx-auto p-4 bg-white shadow-lg rounded-md">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Rate This Product</h2>

      <div className="flex flex-col gap-4">
        {ratingOptions.map(({ label, stars, type, color, count }) => (
          <button
            key={type}
            onClick={() => handleVote(type)}
            className={`flex items-center justify-between w-full p-4 text-white rounded-md shadow-md ${
              highlighted === type ? `${color} animate-pulse` : 'bg-gray-300'
            } transition duration-300`}
          >
            <span className="flex items-center gap-2">
              {[...Array(stars)].map((_, i) => (
                <FaStar key={i} />
              ))}
              <span className="font-medium">{label}</span>
            </span>
            <span className="font-bold">{count}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Rating;
