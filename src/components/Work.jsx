import React from "react";
import { BsGlobe } from "react-icons/bs";
import { TbWorldSearch } from "react-icons/tb";
import { GoPasskeyFill } from "react-icons/go";
import { BsCoin } from "react-icons/bs";
import { CiMobile4 } from "react-icons/ci";
import { GoFileMedia } from "react-icons/go";

const Work = () => {
  return (
    <div className="bg-[#3d3f42] w-full">
      <div className=" container mx-auto">
        <div className="grid bg-[#3d3f42] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:py-[5rem]">
          <div className=" bg-[#3d3f42] text-white p-8 flex flex-col justify-center items-center gap-3">
            <div className=" flex justify-center items-center gap-9 md:items-start md:w-full md:justify-start ">
              <p className=" text-5xl text-[#F4A210] md:text-[60px] font-medium">
                01
              </p>
              <div>
                <BsGlobe className=" text-4xl" />
              </div>
            </div>
            <div className=" text-[1.2rem] font-medium hover:text-[#ffc107] transition-all duration-500 md:text-start md:w-full">
              WEBSITE DEVELOPMENT
            </div>
            <div className=" text-center md:text-start text-md font-light text-[15px]">
              "Get a new height through our web design" A very clean, fully
              optimized and flawless webpage may help you to amaze your audience
              greatly. As the online users do not usually take more than a few
              seconds to make a resolution regarding a website.
            </div>
          </div>
          <div className=" bg-[#3d3f42] text-white p-8 flex flex-col justify-center items-center gap-3">
            <div className=" flex justify-center items-center gap-9 md:items-start md:w-full md:justify-start">
              <p className=" text-5xl text-[#F4A210] md:text-[60px] font-medium">
                02
              </p>
              <div>
                <TbWorldSearch className=" text-4xl" />
              </div>
            </div>
            <div className=" text-[1.3rem] font-medium hover:text-[#ffc107] transition-all duration-500 md:text-start md:w-full">
              SEO
            </div>
            <div className=" text-center  md:text-start text-md font-light text-[15px]">
              "Get higher in search engines with our SEO" If you own one or
              multiple websites for business and you are trying to make them
              more noticeable in all search engines, Search Engine Optimization
              is only alternative for you.
            </div>
          </div>
          <div className=" bg-[#3d3f42] text-white p-8 flex flex-col justify-center items-center gap-3">
            <div className=" flex justify-center items-center gap-9 md:items-start md:w-full md:justify-start">
              <p className=" text-5xl  text-[#F4A210] md:text-[60px] font-medium">
                03
              </p>
              <div>
                <GoPasskeyFill className=" text-4xl" />
              </div>
            </div>
            <div className=" text-[1.3rem] font-medium hover:text-[#ffc107] transition-all duration-500 md:text-start md:w-full">
              SOCIAL MEDIA
            </div>
            <div className=" text-center md:text-start text-md font-light text-[15px]">
              "Excel your company with our SMM services" In the present age
              social networking has turned out to be a part of our daily life.
              Social networking on the web has allowed the users to link with
              other individuals on an international level.
            </div>
          </div>
          <div className=" bg-[#3d3f42] text-white p-8 flex flex-col justify-center items-center gap-3">
            <div className=" flex justify-center items-center gap-9 md:items-start md:w-full md:justify-start">
              <p className=" text-5xl text-[#F4A210] md:text-[60px] font-medium">
                04
              </p>
              <div>
                <BsCoin className=" text-4xl" />
              </div>
            </div>
            <div className=" text-[1.3rem] font-medium hover:text-[#ffc107] transition-all duration-500 md:text-start md:w-full">
              PAY PER CLICK
            </div>
            <div className=" text-center md:text-start text-md font-light text-[15px]">
              "Increase your ROI through PPC advertising" The world of marketing
              has changed significantly in recent time. You have perhaps notices
              a huge shift from the field of press advertising, and so it has
              opened the door of some other marketing strategies.
            </div>
          </div>
          <div className=" bg-[#3d3f42] text-white p-8 flex flex-col justify-center items-center gap-3">
            <div className=" flex justify-center items-center gap-9 md:items-start md:w-full md:justify-start">
              <p className=" text-5xl text-[#F4A210] md:text-[60px] font-medium">
                05
              </p>
              <div>
                <CiMobile4 className=" text-4xl" />
              </div>
            </div>
            <div className=" text-[1rem] font-medium hover:text-[#ffc107] transition-all duration-500 md:text-start md:w-full">
              MOBILE APP DEVELOPMENT
            </div>
            <div className=" text-center md:text-start text-md font-light text-[15px]">
              "Get an edge with our professional mobile app" Mobile apps are
              really generating a buzz in recent times. Almost every single
              individual has owned a Smartphone, be it Android mobile, iPhone,
              or any such platforms.
            </div>
          </div>
          <div className=" bg-[#3d3f42] text-white p-8 flex flex-col justify-center items-center gap-3">
            <div className=" flex justify-center items-center gap-9 md:items-start md:w-full md:justify-start">
              <p className=" text-5xl text-[#F4A210] md:text-[60px] font-medium">
                06
              </p>
              <div>
                <GoFileMedia className=" text-4xl" />
              </div>
            </div>
            <div className=" text-[1.3rem] hover:text-[#ffc107] transition-all duration-500 md:text-start md:w-full">
              MEDIA BUYING
            </div>
            <div className=" text-center md:text-start text-md font-light text-[15px]">
              Our media buying ability will make your campaign cost-effective.
              Our goal is to enable anyone to plan, buy and manage their
              marketing campaigns on a single platform.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
