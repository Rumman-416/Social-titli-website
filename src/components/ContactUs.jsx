import React, { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { BsTelephoneFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { BiLogoFacebook } from "react-icons/bi";
import { AiOutlineTwitter } from "react-icons/ai";
import { Link } from "react-router-dom";
import SEOIcon from "./SEOIcon";

const ContactUs = () => {
  const [name, setName] = useState("Your Name");
  const [website, setWebsite] = useState("Website");
  const [email, setEmail] = useState("E-mail");

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
      default:
        break;
    }
  };

  return (
    <div className=" w-full bg-white">
      <div className=" container mx-auto flex items-center justify-center">
        <div className="bg-white p-4 flex flex-col justify-center items-center lg:flex-row lg:px-[1rem] lg:w-full xl:w-10/12">
          <div className=" lg:px-[1rem] flex justify-start items-start lg:w[77%] xl:w-[70vw]">
            <div className=" flex flex-col justify-center text-center items-center p-2 gap-5 font-light lg:text-start lg:justify-start lg:w-full lg:items-start lg:mt-20">
              <h1 className=" text-3xl lg:w-full lg:text-5xl">
                <span className=" text-[#f4a210]">A</span>BOUT
                <span className=" text-[#f4a210]">U</span>S
              </h1>
              <div className="  font-light text-sm md:px-20 lg:w-[90%] lg:px-0 lg:text-base">
                SocialTitli is an online business optimization group that offers
                you a complete online marketing solution or support for business
                and helps you to obtain a great success in future years. We wish
                your company a high rise since it will provide us our
                accomplishment.
              </div>
              <div className=" flex justify-between items-center lg:justify-between lg:w-full lg:items-start">
                <div className="flex flex-col justify-center items-center gap-3 text-sm font-normal lg:justify-start lg:w-[70%] lg:items-start lg:text-start lg:gap-5">
                  <h1 className=" font-bold">CONTACT US</h1>
                  <div className=" flex flex-col justify-center items-center gap-2 md:flex-row lg:items-start lg:justify-start lg:gap-5">
                    <FaLocationDot className=" text-[#f4a210]" />
                    <div className=" hover:text-[#f4a210] transition-all duration-300 ">
                      1902, Solus, Hiranandani Estate, Thane- 400607.
                    </div>
                  </div>
                  <div className=" flex flex-col justify-center items-center gap-2 md:flex-row lg:gap-5">
                    <BsTelephoneFill className=" text-[#f4a210]" />
                    <div className=" hover:text-[#f4a210] transition-all duration-300">
                      +91 88503 16525
                    </div>
                  </div>
                  <div className=" flex flex-col justify-center items-center gap-2 md:flex-row lg:items-start lg:justify-start lg:gap-5">
                    <FaLocationDot className=" text-[#f4a210]" />
                    <div className=" hover:text-[#f4a210] transition-all duration-300 ">
                      Office 202, HHHR Tower, Sheikh Zayed Road, Dubai.
                    </div>
                  </div>
                  <div className=" flex flex-col justify-center items-center gap-2 md:flex-row lg:gap-5">
                    <BsTelephoneFill className=" text-[#f4a210]" />
                    <div className=" hover:text-[#f4a210] transition-all duration-300">
                      +971 526 613123
                    </div>
                  </div>
                  <div className=" flex flex-col justify-center items-center gap-2 md:flex-row lg:gap-5">
                    <AiOutlineMail className=" text-[#f4a210]" />
                    <div className=" hover:text-[#f4a210] transition-all duration-300">
                      connect@socialtitli.com
                    </div>
                  </div>
                  <div className=" w-full h-[1px] bg-[#e1e1e1]"></div>
                  <div className=" flex justify-center items-center gap-5 my-10 lg:flex-col   lg:w-full">
                    <h1 className=" font-light md:font-normal">
                      Our Digital Prefrence!
                    </h1>
                    <div className=" flex justify-center items-center gap-3 ">
                      <Link to="https://www.facebook.com/socialtitli/">
                        <BiLogoFacebook className=" text-black text-xl" />
                      </Link>
                      <Link to="https://www.instagram.com/socialtitli/">
                        <BsInstagram className=" text-black text-xl" />
                      </Link>
                      <Link to="https://twitter.com/socialtitli9">
                        <AiOutlineTwitter className=" text-black text-xl" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className=" hidden lg:flex ">
                  <div className=" circle text-2xl w-12 flex justify-center items-center text-center flex-col">
                    Whats's your <span className=" text-[#f4a210]">SEO</span>
                    Score?
                  </div>
                  <SEOIcon size="28" />
                </div>
              </div>
            </div>
          </div>
          <div
            className=" border  border-[#f4a210] flex flex-col justify-center items-center text-center gap-8 p-5 rounded-md lg:px-[1rem] 
            lg:mx-6 lg:h-full lg:w-[120%] xl:w-[40vw]"
            style={{
              border: "2px solid #f4a210",
              outline: "2px solid #f4a210",
              outlineOffset: "2px",
              borderRadius: "69px/23px",
            }}
          >
            <h1 className=" text-2xl font-semibold">FREE</h1>
            <h3 className=" text-xl font-medium  lg:w-64">
              Initial SEO Audit Report
            </h3>
            <div className=" flex flex-col justify-center items-center gap-5">
              <p className=" text-gray-400 text-xs lg:text-[12px]">
                Our free SEO report provides you a snap shot of how your website
                is performing.
              </p>
              <p className=" text-gray-400 text-xs">
                Fill out the form below with your basic information for this
                free report.
              </p>
            </div>
            <div className="flex flex-col justify-center items-center gap-3 w-full lg:gap-7 ">
              <input
                type="text"
                placeholder={name}
                className="  w-full focus:border-none focus:outline-none text-black"
                onClick={() => clearField("name")}
                onBlur={() => restoreField("name")}
                onChange={(e) => setName(e.target.value)}
              />
              <div className=" h-[1px] w-full bg-gray-300 "></div>
              <input
                type="text"
                placeholder={website}
                className="  w-full focus:border-none focus:outline-none "
                onClick={() => clearField("website")}
                onBlur={() => restoreField("website")}
                onChange={(e) => setWebsite(e.target.value)}
              />
              <div className=" h-[1px] w-full bg-gray-300 "></div>

              <input
                type="text"
                placeholder={email}
                className="  w-full focus:border-none focus:outline-none"
                onClick={() => clearField("email")}
                onBlur={() => restoreField("email")}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className=" h-[1px] w-full bg-gray-300 "></div>
            </div>

            <input
              type="button"
              value="SEND"
              className=" bg-[#f4a210] w-28 h-16 rounded-md text-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
