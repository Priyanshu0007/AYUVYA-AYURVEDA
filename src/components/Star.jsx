"use client"
import React, { useState } from 'react'
import { IoIosStar } from "react-icons/io";



const Star = () => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    return (
      <div className="star-rating">
        {[...Array(5)].map((star, index) => {
          index += 1;
          return (
            <button
              type="button"
              key={index}
              className={index <= (hover || rating) ? "on " : "off"}
              onClick={() => setRating(index)}
              onMouseEnter={() => setHover(index)}
              onMouseLeave={() => setHover(rating)}
            >
              <span className="star"><IoIosStar/></span>
            </button>
          );
        })}
      </div>
    );
}

export default Star