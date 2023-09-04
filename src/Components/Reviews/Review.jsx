import React from "react";

function Review({ name, review, date }) {
  return (
    <div className="flex flex-col gap-3 w-1/3 text-gray-600">
      <div className="flex flex-col gap-4 p-4">
        <div className="flex justify justify-between">
          <div className="flex gap-2">
            <div className="w-7 h-7 text-center rounded-full bg-red-500 text-white">
              {name[0]}
            </div>
            <span>{name}</span>
          </div>
          <div className="flex p-1 gap-1 text-orange-300">
            {Array.from({ length: 5 }, (_, index) => (
              <ion-icon
                key={index}
                name={index < 4 ? "star" : "star-half"}
              ></ion-icon>
            ))}
          </div>
        </div>

        <div>{review}</div>

        <div className="flex justify-between">
          <span>{date}</span>
        </div>
      </div>
    </div>
  );
}

export default Review;
