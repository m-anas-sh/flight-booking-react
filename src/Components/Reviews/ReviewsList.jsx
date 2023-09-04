import React from "react";
import Review from "./Review";

function ReviewsList({ reviews }) {
  return (
    <div className="flex justify-evenly items-center flex-wrap opacity-90 text-gray-700">
      {reviews.map((reviewer, index) => (
        <Review key={index} {...reviewer} />
      ))}
    </div>
  );
}

export default ReviewsList;
