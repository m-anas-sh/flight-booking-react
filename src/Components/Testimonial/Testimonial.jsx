import React from "react";
import TestimonialList from "./TestimonialList";

const Testimonial = () => {
  const testimonials = [
    {
      quote: "jetMa is just awesome...",
      name: "Micheal Gough",
      title: "CEO at Google",
      imageSrc:
        "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png",
      altText: "Zuni baba......",
    },
    {
      quote: "jetMa is simply fantastic!",
      name: "Sarah Johnson",
      title: "Product Manager at Microsoft",
      imageSrc:
        "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png",
      altText: "Zuni baba......",
    },
    {
      quote: "I love using jetMa for my trips.",
      name: "John Smith",
      title: "Designer at Apple",
      imageSrc:
        "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png",
      altText: "Zuni baba......",
    }
    // Add more testimonials here
  ];

  return (
    <div>
      {/* Other content */}
      <TestimonialList testimonials={testimonials} />
    </div>
  );
};

export default Testimonial;
