import React from "react";
import ReviewsList from "./ReviewsList";

function Reviews() {
  const reviews = [
    {
      name: "Jess Hopkins",
      review: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
      Vero debitis assumenda nostrum neque, voluptas voluptates porro 
      cupiditate magnam deleniti nisi ea natus provident!`,
      date: "Jan 21, 2022",
    },
    {
      name: "Peter Parker",
      review: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
      Vero debitis assumenda nostrum neque, voluptas voluptates porro 
      cupiditate magnam deleniti nisi ea natus provident!`,
      date: "Feb 13, 2021",
    },
    {
      name: "Romeo Larvels",
      review: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
      Vero debitis assumenda nostrum neque, voluptas voluptates porro 
      cupiditate magnam deleniti nisi ea natus provident!`,
      date: "Dec 30, 2023",
    },
  ];

  return (
    <div className="flex flex-col justify-center mt-32 mx-4">
      <span className="text-gray-700 text-xl flex justify-center mb-10">
        <span>
          What <span className="text-customBlue font-semibold">Jetma</span>{" "}
          users are saying
        </span>
      </span>
      <ReviewsList reviews={reviews} />
    </div>
  );
}

export default Reviews;
