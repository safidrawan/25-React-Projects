import { useState } from "react";
import { FaStar } from "react-icons/fa";

function StarRating({ noOfStars = 5 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleClick(currentIndex) {
    setRating(currentIndex);
  }

  function handleMouseEnter(currentIndex) {
    setHover(currentIndex);
  }

  function handleMouseLeave(currentIndex) {
    setHover(rating);
  }

  return (
    <div className="star-rating flex h-40 justify-center items-center text-5xl">
      {[...Array(noOfStars)].map((_, index) => {
        index += 1;
        return (
          <FaStar
            key={index}
            className={index <= (hover||rating) ? "active drop-shadow-sm/50":""}
            onClick={() => {
              handleClick(index);
            }}
            onMouseEnter={() => {
              handleMouseEnter(index);
            }}
            onMouseLeave={() => {
              handleMouseLeave();
            }}
          />
        );
      })}
    </div>
  );
}

export default StarRating;
