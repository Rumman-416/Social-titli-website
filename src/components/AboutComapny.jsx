import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import { FaQuoteLeft } from "react-icons/fa";

const AboutCompany = () => {
  const [about, setAbout] = useState(true);
  const [process, setProcess] = useState(false);
  const [usp, setUsp] = useState(false);
  const [selectedTab, setSelectedTab] = useState("about");

  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    "https://www.socialtitli.com/assets/images/1.jpg",
    "https://www.socialtitli.com/assets/images/2.jpg",
    "https://www.socialtitli.com/assets/images/3.jpg",
    "https://www.socialtitli.com/assets/images/4.jpg",
  ];

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);

    return () => clearInterval(slideInterval);
  }, [currentSlide, slides.length]);

  const handleImageClick = (index) => {
    setCurrentSlide(index);
  };
  const scrollRef = useRef(null);

  const handleScrollLeft = () => {
    // Change the main slider first
    prevSlide();

    // Scroll the small image section if there's overflow to the left
    if (scrollRef.current.scrollLeft > 0) {
      scrollRef.current.scrollLeft -= 100;
    }
  };

  const handleScrollRight = () => {
    // Change the main slider first
    nextSlide();

    // Scroll the small image section if there's overflow to the right
    if (
      scrollRef.current.scrollLeft <
      scrollRef.current.scrollWidth - scrollRef.current.clientWidth
    ) {
      scrollRef.current.scrollLeft += 100;
    }
  };

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };
  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  const showAbout = () => {
    setSelectedTab("about");
    setAbout(true);
    setProcess(false);
    setUsp(false);
  };

  const showProcess = () => {
    setSelectedTab("process");
    setAbout(false);
    setProcess(true);
    setUsp(false);
  };

  const showUsp = () => {
    setSelectedTab("usp");
    setAbout(false);
    setProcess(false);
    setUsp(true);
  };

  const [button, setButton] = useState(window.innerWidth <= 639);

  useEffect(() => {
    const handleResize = () => {
      setButton(window.innerWidth <= 639);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="bg-white py-7 ">
      <div className="container mx-auto ">
        <div className="flex justify-center items-center gap-5 text-sm ">
          <Link to={"/"}>
            <h1 className="uppercase font-medium text-gray-400 hover:text-black">
              home
            </h1>
          </Link>
          <AiOutlineArrowRight />
          <h1 className="uppercase font-bold">about us</h1>
        </div>
        <div className="lg:flex lg:justify-center lg:min-h-[30rem]">
          <div className="lg:min-w-[45rem] xl:min-w-[63rem] ">
            <div className="flex flex-col justify-center items-center my-10 px-6">
              <h1 className="text-3xl font-light uppercase"> About Us</h1>
              <div className="flex justify-center items-baseline gap-2 sm:gap-0 lg:gap-5">
                <FaQuoteLeft className="text-5xl text-[#f4a210] sm:text-2xl" />
                <p className="text-[20px] font-light text-gray-500 text-center lg:text-start">
                  Our only motto is to provide quality services to our
                  customers.
                </p>
              </div>
            </div>
            <div className="px-5 flex flex-col justify-center text-gray-500 font-medium">
              <div className="flex justify-center items-center text-xs lg:text-sm">
                <h1
                  className={`uppercase border-b border-gray-400 px-3 transition-all duration-500 hover:border-[#f4a210] sm:px-10 sm:border-b-2 sm:border-gray-300 lg:px-16 xl:px-20 ${
                    selectedTab === "about" && "selectedTab"
                  }`}
                  onClick={showAbout}
                >
                  About
                </h1>
                <h1
                  className={`uppercase border-b border-gray-400 px-3 transition-all duration-500 hover:border-[#f4a210] sm:px-10 sm:border-b-2 sm:border-gray-300 lg:px-16 xl:px-20 ${
                    selectedTab === "process" && "selectedTab"
                  }`}
                  onClick={showProcess}
                >
                  our process
                </h1>
                <h1
                  className={`uppercase border-b border-gray-400 px-3 transition-all duration-500 hover:border-[#f4a210] sm:px-10 sm:border-b-2 sm:border-gray-300 lg:px-16 xl:px-20 ${
                    selectedTab === "usp" && "selectedTab"
                  }`}
                  onClick={showUsp}
                >
                  our usp
                </h1>
              </div>
            </div>
            <div className="text-[13px] text-[#777777] flex justify-center items-cente my-5 px-5 sm:min-h-[10rem] sm:px-10 lg:text-[15px] xl:px-[10rem] xl:text-[17px] xl:max-w-[80rem]">
              {about && (
                <div>
                  <p>
                    SocialTitli is an online business optimization group that
                    offers you a complete online marketing solution or support
                    for business and helps you to obtain a great success in
                    future years. We wish your company a high rise since it will
                    provide us our accomplishment.
                  </p>
                  <br />
                  <p>
                    We as a group of internet marketing have expert thinkers,
                    online marketing professionals, skillful software
                    administrative, educated web designers, knowledgeable
                    content writers and many other professionals who can give
                    you twenty four hours support to take you to your preferred
                    goal in industry. We act as a group, and thus we share both
                    success and failure also, which presents balance in our
                    drive towards the peak.
                  </p>
                </div>
              )}
              {process && (
                <div>
                  <p>
                    We always invest our full time to realize your company and
                    then endow you with some efficient marketing strategies and
                    policies that not only enhance your traffic in website but
                    simultaneously build up your online status, give better
                    engagement chances for target audiences.
                  </p>
                  <br />
                  <p>
                    We offer stunning design along with intelligent usability to
                    grab your customer’s attention and assist you to grow
                    quicker.
                  </p>
                </div>
              )}
              {usp && (
                <div>
                  <p>
                    Our team has not only spent several years working in digital
                    marketing field, they have even completed a lot of search
                    engine advertising schemes in a wide range of verticals.
                  </p>
                  <br />
                  <p>
                    Whether we set up an audit to obtain a picture of your
                    present condition, or move straight into strategy and
                    implementation, every suggestion we make is intended to
                    strengthen your company. Moreover, we collect and examine
                    the data to identify while we are on the true track, or
                    while we need to do a course improvement. All through our
                    methods, we can offer you a regular reporting, thus you can
                    always recognize exactly where you are standing.
                  </p>
                </div>
              )}
            </div>
          </div>
          <div className="my-10">
            <div className="img-slider-container relative max-w-full overflow-hidden">
              {slides.map((slide, index) => (
                <img
                  key={index}
                  src={slide}
                  alt={`Slide ${index}`}
                  className={
                    index === currentSlide
                      ? "img-slide active hidden w-full h-auto transition-all px-5"
                      : "img-slide inactive hidden w-full h-auto transition-all px-5"
                  }
                  onClick={() => handleImageClick(index)}
                />
              ))}
            </div>
            <div className="relative">
              <div
                className="flex items-center sm:justify-center mt-5 overflow-hidden image-container"
                ref={scrollRef}
              >
                {slides.map((slide, index) => (
                  <img
                    key={index}
                    src={slide}
                    alt={`Slide ${index}`}
                    className={
                      index === currentSlide
                        ? "w-24 sm:w-32 mx-2 border-2 border-[#f4a210] rounded lg:w-[5rem] xl:w-[6rem]"
                        : "w-24 sm:w-32 mx-2 border border-transparent rounded lg:w-[5rem] xl:w-[6rem]"
                    }
                    onClick={() => handleImageClick(index)}
                  />
                ))}
              </div>
              {button && (
                <>
                  <button
                    className="prev absolute left-0 top-1/2 transform -translate-y-1/2 "
                    onClick={handleScrollLeft}
                  >
                    <AiOutlineArrowLeft />
                  </button>
                  <button
                    className="next absolute right-0 top-1/2 transform -translate-y-1/2"
                    onClick={handleScrollRight}
                  >
                    <AiOutlineArrowRight />
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCompany;
