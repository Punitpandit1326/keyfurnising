import React, { useState } from 'react';
import './rating.css';

const StarRating = ({ totalStars = 5 }) => {
  const [rating, setRating] = useState(4);
  const [hover, setHover] = useState(0);

  return (
    <div className="star-rating">
      {[...Array(totalStars)].map((star, index) => {
        const ratingValue = index + 1;

        return (
          <label key={index}>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => setRating(ratingValue)}
            />
            <svg
              className="star"
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill={ratingValue <= (hover || rating) ? "#D61C4E" : "#e4e5e9"}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(rating)}
            >
              <path d="M12 .587l3.668 7.431 8.332 1.151-6.064 5.9 1.428 8.316L12 18.896l-7.364 3.89 1.428-8.316-6.064-5.9 8.332-1.151z"/>
            </svg>
          </label>
        );
      })}
    </div>
  );
};

export default StarRating;
