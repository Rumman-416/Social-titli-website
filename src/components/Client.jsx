import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Client = () => {
  const settings = {
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 2000,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  const clienteleImages = [
    {
      id: 1,
      src: "https://www.socialtitli.com/assets/uploads/clientele/15708784611.jpg",
    },
    {
      id: 2,
      src: "https://www.socialtitli.com/assets/uploads/clientele/105.jpg",
    },
    {
      id: 3,
      src: "https://www.socialtitli.com/assets/uploads/clientele/15544666265.jpg",
    },
    {
      id: 4,
      src: "https://www.socialtitli.com/assets/uploads/clientele/1583733843155446949639.jpg",
    },
    {
      id: 5,
      src: "https://www.socialtitli.com/assets/uploads/clientele/155446860417.jpg",
    },
    {
      id: 6,
      src: "https://www.socialtitli.com/assets/uploads/clientele/1583734072155446941037.jpg",
    },
  ];

  return (
    <div className=" overflow-hidden bg-[#f3f3f3] ">
      <div className=" container mx-auto">
        <div className="flex justify-center items-center">
          <h1 className=" text-3xl font-light mt-12">OUR CLIENTELE</h1>
        </div>
        <Slider {...settings} className=" md:px-10">
          {clienteleImages.map((image) => (
            <div key={image.id}>
              <div className=" flex justify-center items-center m-6  rounded-lg md:my-12 md:shadow-md lg:p-5 lg:py-[0.938rem] lg:px-[1.875] bg-white lg:m-3 ">
                <img src={image.src} alt="" className=" rounded-lg" />
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div
        className="  w-full h-[50vh] bg-cover bg-center flex justify-center items-center md:mt-20 lg:h-[40vh]"
        style={{
          backgroundImage: 'url("https://www.socialtitli.com/fo2.jpg")',
        }}
      />
    </div>
  );
};

export default Client;
