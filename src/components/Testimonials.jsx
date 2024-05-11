import React, { useEffect, useState } from "react";
import SliderComponent from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsQuote } from "react-icons/bs";

const Testimonials = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1900,
        settings: {
          dots: true,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          dots: true,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 425,
        settings: {
          dots: true,
          slidesToShow: 1,
        },
      },
    ],
  };

  const testimonials = [
    {
      quote:
        " I love my new website which they created. They gave it a unique and very powerful website. My patients also loved it as they can use it on their mobile phones with ease.",
      name: "Dr. SHWETA DUHAT",
      clinic: "Dudhat dental clinic",
      image:
        "https://www.socialtitli.com/assets/uploads/testimonial/15548011572.jpg",
    },
    {
      quote:
        "I feel very good about choosing the Socialtitli team for both SEO and Web Design improvements. They helped me understand the process of SEO also they educate their customers to get the best result possible.",
      name: "DINESH PATIL",
      clinic: "KP Associate",
      image:
        "https://www.socialtitli.com/assets/uploads/testimonial/15548012313.jpg",
    },
    {
      quote:
        "We worked with this agency for the website upgrade to meet the demands of new technology. Now our site is truly spectacular and has lots of great features thanks to Socialtitli team.",
      name: "GEJO PLACHERY",
      clinic: "Anthony Associate",
      image:
        "https://www.socialtitli.com/assets/uploads/testimonial/15548010841.jpg",
    },
    {
      quote:
        "I feel very good about choosing the Socialtitli team for both SEO and Web Design improvements. They helped me understand the process of SEO also they educate their customers to get the best result possible.",
      name: "SHEKHAR BHANDARI",
      clinic: "Mangal Pharmacare LLP",
      image:
        "https://www.socialtitli.com/assets/uploads/testimonial/15548013804.jpg",
    },
  ];

  return (
    <div
      className="overflow-hidden bg-slate-200 p-2 pb-20 w-full bg-no-repeat bg-center bg-cover"
      style={{
        backgroundImage:
          'url("https://www.socialtitli.com/assets/images/bg-2.jpg")',
      }}
    >
      <div className=" container mx-auto">
        <div className="text-3xl flex justify-center items-center text-center font-light my-10 uppercase">
          testimonials
        </div>
        <div className="lg:flex justify-center ">
          <div className=" lg:w-[50rem] xl:w-[80rem]">
            <SliderComponent {...settings}>
              {testimonials.map((testimonial, index) => (
                <div key={index} className=" md:px-10 sm:py-10 ">
                  <div className=" shadow-xl bg-white flex flex-col justify-center items-center rounded-[1rem] m-6 p-5 text-center gap-5 min-h-[33rem] sm:min-h-[30rem] md:mx-0 xl:min-h-[25rem]">
                    <BsQuote className="text-[#f4a210] text-4xl " />
                    <div>{testimonial.quote}</div>
                    <div className="flex flex-col justify-center items-center gap-3 ">
                      <img
                        src={testimonial.image}
                        alt=""
                        className="h-20 rounded-full border border-[#f4a210]"
                      />
                      <div>
                        <h1>{testimonial.name}</h1>
                        <h1 className="text-[#f4a210]">{testimonial.clinic}</h1>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </SliderComponent>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
