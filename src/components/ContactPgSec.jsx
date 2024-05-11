import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { SlEnvolope } from "react-icons/sl";
import { FaLocationDot } from "react-icons/fa6";
import SEOIcon2 from "./SEOIcon2";

const ContactPgSec = () => {
  const [name, setName] = useState("Your Name");
  const [website, setWebsite] = useState("Website");
  const [email, setEmail] = useState("E-mail");
  const [number, setNumber] = useState("phone Number");
  const [selectedServices, setSelectedServices] = useState([]);

  // Function to handle service selection
  const handleServiceSelection = (service) => {
    // Check if the service is already selected
    const isServiceSelected = selectedServices.includes(service);

    if (isServiceSelected) {
      // If service is already selected, remove it from the list
      setSelectedServices(selectedServices.filter((item) => item !== service));
    } else {
      // If service is not selected, add it to the list
      setSelectedServices([...selectedServices, service]);
    }
  };

  // Function to check if a service is selected
  const isServiceSelected = (service) => selectedServices.includes(service);

  console.log(selectedServices);

  const clearField = (field) => {
    switch (field) {
      case "name":
        setName("");
        break;
      case "website":
        setWebsite("");
        break;
      case "email":
        setEmail("");
        break;
      case "number":
        setNumber("");
        break;
      default:
        break;
    }
  };

  const restoreField = (field) => {
    switch (field) {
      case "name":
        if (name === "") setName("Your Name");
        break;
      case "website":
        if (website === "") setWebsite("Website");
        break;
      case "email":
        if (email === "") setEmail("E-mail");
        break;
      case "number":
        if (number === "") setNumber("phone Number");
        break;
      default:
        break;
    }
  };

  return (
    <div className=" bg-white py-7 border-b-2 ">
      <div className=" container mx-auto">
        <div className=" flex justify-center items-center gap-5 text-sm ">
          <Link to={"/"}>
            <h1 className=" uppercase  font-medium text-gray-400 hover:text-black">
              home
            </h1>
          </Link>
          <AiOutlineArrowRight />
          <h1 className="uppercase font-bold">contact us</h1>
        </div>
        <div className="flex flex-col justify-center items-center lg:justify-start lg:items-start lg:flex-row">
          <div className=" pt-20 lg:flex lg:flex-col ">
            <div className="flex flex-col gap-10 md:flex-row lg:flex-col ">
              <div className="md:w-[60%] lg:w-full">
                <div className=" flex  items-center justify-center  pb-2 gap-1  ">
                  <div className=" h-[2px] px-8 bg-[#f4a210] sm:px-12"></div>
                  <h1 className=" text-[#f4a210] text-[14px] font-light">
                    Find me on my networks !
                  </h1>
                </div>
                <div className=" flex flex-col gap-8">
                  <div className=" border border-[#f4a210] flex mx-5 py-5 justify-evenly">
                    <FaFacebookF className="text-[#444] text-3xl hover:text-[#f4a210] transition-all duration-200 cursor-pointer" />
                    <FaInstagram className="text-[#444] text-3xl hover:text-[#f4a210] transition-all duration-200 cursor-pointer" />
                    <FaXTwitter className="text-[#444] text-3xl hover:text-[#f4a210] transition-all duration-200 cursor-pointer" />
                  </div>
                  <div className=" border border-[#f4a210] flex mx-5 py-5 flex-col justify-center items-center gap-2">
                    <FaPhoneAlt className=" text-2xl text-[#f4a210]" />
                    <h1 className=" text-[#f4a210] hover:text-blue-700 text-[15px]">
                      +91 88503 16525
                    </h1>
                  </div>
                  <div className=" border border-[#f4a210] flex mx-5 py-5 flex-col justify-center items-center gap-2 ">
                    <SlEnvolope className=" text-2xl text-[#f4a210]" />
                    <h1 className=" hover:text-[#f4a210] text-[13px]">
                      connect@socialtitli.com
                    </h1>
                  </div>
                </div>
              </div>
              <div className=" tweet border border-gray-300 mx-5 rounded-xl lg:w-11/12">
                <div className=" p-3">
                  <h1 className=" hover:border-b border-gray-300 text-lg font-semibold">
                    Tweets from @Socialtitli9
                  </h1>
                </div>
                <div className=" p-5 flex flex-col gap-10 border-t">
                  <FaXTwitter className=" text-blue-500 text-4xl" />
                  <div className="flex flex-col gap-5">
                    <h1 className=" text-3xl font-semibold">
                      Nothing to see here - yet
                    </h1>
                    <p className=" font-light text-sm text-gray-800">
                      When they Tweet, their Tweets will show up here.
                    </p>
                    <input
                      type="button"
                      value="View on Twitter"
                      className=" py-3 rounded-3xl text-white font-medium bg-blue-400 cursor-pointer"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="rightcorner my-10 lg:mt-24">
            <div className=" flex flex-col justify-center items-center md:flex-row">
              <div className=" border border-[#f4a210] flex flex-col m-5 justify-center items-center sm:w-8/12 md:w-7/12">
                <h1 className=" text-[#f4a210] font-semibold text-lg py-5 uppercase">
                  India
                </h1>
                <div className=" flex flex-col border-y border-[#f4a210] justify-center items-center mx-5 gap-4 py-5">
                  <FaLocationDot className=" text-[#f4a210] text-3xl" />
                  <p className=" text-center text-sm font-light">
                    1902, Solus, Hiranandani Estate, Thane- 400607.
                  </p>
                </div>
                <div className=" flex flex-col justify-center items-center py-5 gap-5">
                  <FaPhoneAlt className=" text-[#f4a210] text-2xl" />
                  <p className=" text-sm text-[#f4a210] hover:text-blue-700">
                    +91 88503 16525
                  </p>
                </div>
              </div>
              <div className=" border border-[#f4a210] flex flex-col m-5 justify-center items-center sm:w-8/12 md:w-7/12">
                <h1 className=" text-[#f4a210] font-semibold text-lg py-5 uppercase">
                  UAE
                </h1>
                <div className=" flex flex-col border-y border-[#f4a210] justify-center items-center mx-5 gap-4 py-5">
                  <FaLocationDot className=" text-[#f4a210] text-3xl" />
                  <p className=" text-center text-sm font-light">
                    Office 202, HHHR Tower, Sheikh Zayed Road, Dubai.
                  </p>
                </div>
                <div className=" flex flex-col justify-center items-center py-5 gap-3">
                  <FaPhoneAlt className=" text-[#f4a210] text-2xl" />
                  <p className=" text-sm text-[#f4a210] hover:text-blue-700">
                    +971 526 613123
                  </p>
                </div>
              </div>
            </div>
            <div className=" flex flex-col justify-center items-center lg:flex-row lg:items-start">
              <div className="get in touch px-3 mt-10 flex flex-col gap-5 sm:w-9/12 lg:w-6/12 lg:gap-16">
                <h1 className=" text-2xl font-semibold text-center lg:text-3xl">
                  Get in Touch with Us
                </h1>
                <p className=" text-[13px] font-extralight text-center">
                  Connect with us for any of our Digital Marketing Services.
                  Comments or questions are welcome.{" "}
                </p>
                <div>
                  <input
                    type="text"
                    placeholder={name}
                    className="  w-full focus:border-none focus:outline-none text-black placeholder-black "
                    onClick={() => clearField("name")}
                    onBlur={() => restoreField("name")}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <div className=" h-[1px] w-full bg-gray-300 "></div>
                </div>
                <div>
                  <input
                    type="text"
                    placeholder={email}
                    className="  w-full focus:border-none focus:outline-none text-black placeholder-black"
                    onClick={() => clearField("email")}
                    onBlur={() => restoreField("email")}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <div className=" h-[1px] w-full bg-gray-300 "></div>
                </div>
                <div className=" flex flex-col gap-3">
                  <h1 className="text-sm font-light">Select Services</h1>
                  <ul className="text-sm font-normal border ">
                    <li
                      onClick={() =>
                        handleServiceSelection("Website Design and Development")
                      }
                      className={
                        isServiceSelected("Website Design and Development")
                          ? "selected bg-[#f4a210] text-white"
                          : " bg-gray-200 px-3"
                      }
                    >
                      Website Design and Development
                    </li>
                    <li
                      onClick={() => handleServiceSelection("SEO")}
                      className={
                        isServiceSelected("SEO")
                          ? "selected bg-[#f4a210] text-white"
                          : "bg-gray-200 px-3"
                      }
                    >
                      SEO
                    </li>
                    <li
                      onClick={() => handleServiceSelection("SMO")}
                      className={
                        isServiceSelected("SMO")
                          ? "selected bg-[#f4a210] text-white"
                          : "bg-gray-200 px-3"
                      }
                    >
                      SMO
                    </li>
                    <li
                      onClick={() => handleServiceSelection("PPC")}
                      className={
                        isServiceSelected("PPC")
                          ? "selected bg-[#f4a210] text-white"
                          : "bg-gray-200 px-3"
                      }
                    >
                      PPC
                    </li>
                    <li
                      onClick={() =>
                        handleServiceSelection("Mobile App Development")
                      }
                      className={
                        isServiceSelected("Mobile App Development")
                          ? "selected bg-[#f4a210] text-white"
                          : "bg-gray-200 px-3"
                      }
                    >
                      Mobile App Development
                    </li>
                    <li
                      onClick={() => handleServiceSelection("Media Buying")}
                      className={
                        isServiceSelected("Media Buying")
                          ? "selected bg-[#f4a210] text-white"
                          : "bg-gray-200 px-3"
                      }
                    >
                      Media Buying
                    </li>
                  </ul>
                </div>
                <div>
                  <input
                    type="number"
                    placeholder={number}
                    className="  w-full focus:border-none focus:outline-none text-black"
                    onClick={() => clearField("number")}
                    onBlur={() => restoreField("number")}
                    onChange={(e) => setNumber(e.target.value)}
                  />
                  <div className=" h-[1px] w-full bg-gray-300 "></div>
                </div>
                <input
                  type="button"
                  value="Submit"
                  className=" border-2 border-black p-3  rounded-xl font-medium hover:bg-[#f4a210] hover:text-white transition-all duration-200"
                />
              </div>
              <div className=" flex flex-col lg:justify-center lg:items-center">
                <div className=" flex flex-col justify-center items-center py-8 lg:py-0 ">
                  <div className=" Arrowcircle text-2xl w-12 flex justify-center items-center text-center flex-col">
                    Whats's your <span className=" text-[#f4a210]">SEO</span>
                    Score?
                  </div>
                  <SEOIcon2 />
                </div>
                <div
                  className="  bg-[#f4a210] flex flex-col justify-center items-center text-center gap-8 m-5 p-5 rounded-md lg:px-[1rem] sm:w-7/12  lg:w-10/12
              "
                  style={{
                    border: "2px solid #f4a210",
                    outlineOffset: "2px",
                    borderRadius: "69px/23px",
                  }}
                >
                  <h1 className=" text-2xl font-semibold">FREE</h1>
                  <h3 className=" text-xl font-medium  lg:w-64">
                    Initial SEO Audit Report
                  </h3>
                  <div className=" flex flex-col justify-center items-center gap-5 text-white">
                    <p className="  text-xs lg:text-[12px]">
                      Our free SEO report provides you a snap shot of how your
                      website is performing.
                    </p>
                    <p className="  text-xs">
                      Fill out the form below with your basic information for
                      this free report.
                    </p>
                  </div>
                  <div className="flex flex-col justify-center items-center gap-3 w-full lg:gap-7 ">
                    <input
                      type="text"
                      placeholder={name}
                      className="  w-full focus:border-none focus:outline-none text-black bg-[#f4a210] placeholder-black"
                      onClick={() => clearField("name")}
                      onBlur={() => restoreField("name")}
                      onChange={(e) => setName(e.target.value)}
                    />
                    <div className=" h-[1px] w-full bg-gray-300 "></div>
                    <input
                      type="text"
                      placeholder={website}
                      className="  w-full focus:border-none focus:outline-none bg-[#f4a210] placeholder-black"
                      onClick={() => clearField("website")}
                      onBlur={() => restoreField("website")}
                      onChange={(e) => setWebsite(e.target.value)}
                    />
                    <div className=" h-[1px] w-full bg-gray-300 "></div>

                    <input
                      type="text"
                      placeholder={email}
                      className="  w-full focus:border-none focus:outline-none bg-[#f4a210] placeholder-black"
                      onClick={() => clearField("email")}
                      onBlur={() => restoreField("email")}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <div className=" h-[1px] w-full bg-gray-300 "></div>
                  </div>

                  <input
                    type="button"
                    value="Submit"
                    className=" bg-white w-28 h-16 rounded-md text-black border-2 border-black"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPgSec;
