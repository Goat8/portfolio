'use client'

import React, { useState } from 'react';

const FlipCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardFlip = () => {
    console.log("eee");
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="relative w-64 h-80">
      <div
        className={`transform transition-transform duration-500 ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
      >
        <div
          className="w-full h-full bg-blue-500 text-white p-4 rounded-lg shadow-md front"
          onClick={handleCardFlip}
        >
          <p>Front Side</p>
        </div>
        <div
          className="w-full h-full bg-green-500 text-white p-4 rounded-lg shadow-md back absolute top-0 left-0 transform rotate-y-180"
          onClick={handleCardFlip}
        >
          <p>Back Side</p>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
