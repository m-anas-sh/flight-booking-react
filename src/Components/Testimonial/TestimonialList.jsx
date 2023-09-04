import React from "react";
import TestimonialCard from "./TestimonialCard";

const TestimonialList = ({ testimonials }) => {
  return (
    <div className="flex flex-wrap justify-center">
      {testimonials.map((testimonial, index) => (
        <TestimonialCard key={index} {...testimonial} />
      ))}
    </div>
  );
};

export default TestimonialList;
