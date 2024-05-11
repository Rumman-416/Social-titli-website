import React from "react";

const ParallaxImage = ({ image }) => {
  return (
    <>
      <div className=" w-full overflow-hidden h-[25vh] md:h-[28vh] lg:h-[40vh] xl:h-[50vh] relative">
        <div className=" bg-black w-full h-full bg-opacity-50 flex justify-center items-center">
          {image === "clientele" ? (
            <div className=" w-full">
              <img
                src="https://www.socialtitli.com/assets/images/clientele-bg.jpg"
                alt=""
                className="w-full -z-10 lg:top-[-12rem] top-[50px] lg:bg-cover  lg:pt-[110px] xl:pt-0 fixed blur-sm"
                preload="auto"
                style={{
                  backgroundAttachment: "fixed",
                }}
              />
              <h1 className=" uppercase text-white text-3xl md:font-light md:text-4xl w-full text-center lg:text-5xl xl:text-6xl">
                clientele
              </h1>
            </div>
          ) : image === "aboutus" ? (
            <div className=" w-full">
              <img
                src="https://www.socialtitli.com/assets/images/about-bg.jpg"
                alt=""
                className="w-full -z-10 lg:top-[-12rem] top-[50px] lg:bg-cover  lg:pt-[110px] xl:pt-0 fixed blur-sm"
                preload="auto"
                style={{
                  backgroundAttachment: "fixed",
                }}
              />{" "}
              <h1 className=" w-full text-center uppercase text-white text-3xl md:font-light md:text-4xl lg:text-5xl xl:text-6xl">
                about us
              </h1>
            </div>
          ) : image === "contactus" ? (
            <div className=" w-full ">
              <img
                src="https://www.socialtitli.com/assets/images/contact-bg.jpg"
                alt=""
                className="w-full -z-10 lg:top-[-12rem] top-[50px] lg:bg-cover  lg:pt-[110px] xl:pt-0 fixed blur-sm"
                preload="auto"
                style={{
                  backgroundAttachment: "fixed",
                }}
              />{" "}
              <h1 className=" w-full text-center uppercase text-white text-3xl md:font-light md:text-4xl lg:text-5xl xl:text-6xl">
                contact us
              </h1>
            </div>
          ) : image === "webdev" ? (
            <div className=" w-full flex flex-col justify-center items-center">
              <img
                src="https://www.socialtitli.com/assets/images/website-bg.jpg"
                alt=""
                className="w-full -z-10 lg:top-[-12rem] top-[50px] lg:bg-cover  lg:pt-[110px] xl:pt-0 fixed blur-[1px]"
                preload="auto"
                style={{
                  backgroundAttachment: "fixed",
                }}
              />{" "}
              <h1 className=" w-full text-center uppercase text-white text-3xl md:font-light md:text-4xl lg:text-5xl xl:text-6xl">
                website Development
              </h1>
              <p className="w-10/12 text-white text-center font-extralight sm:text-lg">
                Make use of experts’ hands to get simple solutions in web design
              </p>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default ParallaxImage;
