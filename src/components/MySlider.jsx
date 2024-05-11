import React from "react";
import SliderComponent from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsQuote } from "react-icons/bs";

const MySlider = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    fade: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1825,
        settings: {
          dots: false,
          fade: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          dots: true,
          fade: true,
        },
      },
      {
        breakpoint: 425,
        settings: {
          dots: true,
          fade: false,
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
        <div className="text-3xl flex justify-center items-center text-center font-light my-10">
          OUR CLIENTS LOVE US!
        </div>
        <div className="lg:flex justify-center ">
          <div id="clients" className=" lg:w-[50rem] ">
            <SliderComponent {...settings}>
              {testimonials.map((testimonial, index) => (
                <div key={index} className="">
                  <div
                    className=" shadow-xl bg-white flex flex-col justify-center items-center rounded-[3rem] m-6 p-5 text-center gap-5 md:mx-0 lg:min-h-[20rem] "
                    style={{}}
                  >
                    <BsQuote className="text-[#f4a210] text-4xl " />
                    <div>{testimonial.quote}</div>
                    <div className="flex flex-col justify-center items-center gap-3 md:flex-row">
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

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="slick-arrow  bottom-line inline-block relative left-[50rem] md:left-[42rem] top-[-10rem] lg:left-[48rem] z-[1]"
      onClick={onClick}
    >
      next
    </div>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <>
      <div
        className="slick-arrow bottom-line inline-block relative left-[-20rem] md:left-[4rem] top-[13rem] lg:left-[-1rem] lg:top-[14.5rem] z-[1] "
        onClick={onClick}
      >
        prev
      </div>
      {/* <div className=" w-16 h-[1px] bg-slate-700 relative left-[-10rem] top-[15rem] hover:w-8"></div> */}
    </>
  );
};

export default MySlider;
