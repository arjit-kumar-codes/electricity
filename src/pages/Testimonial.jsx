import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
  const reviews = [
    {
      name: "Rahul",
      comment: "Excellent service! Very professional.",
      image: "https://via.placeholder.com/100",
    },
    {
      name: "Priya",
      comment: "Timely and clean work. Highly recommend!",
      image: "https://via.placeholder.com/100",
    },
    {
      name: "Amit",
      comment: "They exceeded my expectations!",
      image: "https://via.placeholder.com/100",
    },
    {
      name: "Neha",
      comment: "Friendly staff and sparkling results!",
      image: "https://via.placeholder.com/100",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    appendDots: dots => (
      <div className="mt-12 flex justify-center">
        <ul className="flex space-x-2">{dots}</ul>
      </div>
    ),
    customPaging: i => (
      <div className="w-3 h-3 bg-gray-400 rounded-full" />
    ),
  };

  return (
    <section id="testimonial" className="px-4 py-8 bg-white" data-aos="fade-up">
      <h2 className="text-3xl md:text-4xl font-bold text-yellow-600 mb-8 text-center">
        Testimonials
      </h2>

      <div className="w-full">
        <Slider {...settings}>
          {reviews.map((r, idx) => (
            <div key={idx}>
              <div className="w-full p-8 border border-gray-300 rounded shadow-md bg-gray-50 flex flex-col items-center">
                <img
                  src={r.image}
                  alt={r.name}
                  className="w-20 h-20 rounded-full mb-4"
                />
                <p className="italic text-lg text-center max-w-3xl">
                  "{r.comment}"
                </p>
                <p className="mt-4 font-semibold text-yellow-700">- {r.name}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
