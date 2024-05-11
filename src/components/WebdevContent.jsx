import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";

const WebdevContent = () => {
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
          <h1 className="uppercase font-bold">Website development</h1>
        </div>
        <div className=" text-sm px-5 pt-16 font-extralight flex flex-col gap-10 sm:px-12 md:px-20 md:text-base xl:px-52 p-">
          <p>
            A well-organized, search engine-friendly as well as custom-made
            webpage, will go a long way to make your company a big hit. Thus, if
            you want to be one of the proud holders of your professional
            website, the let the staff of our SocialTitli, know your
            necessities. At SocialTitli, we are always trying our best in order
            to deliver high-quality services related to designing and
            development of websites, by using our experience and knowledge in
            the domain.
          </p>
          <div className=" flex flex-col gap-3">
            <h1 className=" text-xl font-normal">
              Get a new height through our web design
            </h1>
            <p>
              A very clean, fully optimized and flawless webpage may help you to
              amaze your audience greatly. As the online users do not usually
              take more than a few seconds to make a resolution regarding a
              website, your online existence must be strong enough to connect
              the customers and draw their concentration almost immediately. At
              our website design business, we offer top quality of development
              services in order that you can perceive a visible development in
              your rate of conversion.
            </p>
          </div>
          <div className=" flex flex-col gap-3">
            <h1 className=" text-xl font-normal">
              Unique characteristics of our website development
            </h1>
            <div className=" flex items-start justify-between  md:justify-evenly ">
              <div className=" h-2 w-2 rounded-full bg-gray-300 mt-1 md:mt-2"></div>
              <p className=" w-11/12">
                Web designs, created by our experts are much optimized and also
                SEO friendly.
              </p>
            </div>

            <div className=" flex items-start justify-between md:justify-evenly">
              <div className=" h-2 w-2 rounded-full bg-gray-300 mt-1 md:mt-2"></div>
              <p className=" w-11/12">
                Our staffs work hard in order to keep the time of loading your
                site minimum in order that it will give you high scores in the
                performance.
              </p>
            </div>
            <div className=" flex items-start justify-between md:justify-evenly">
              <div className=" h-2 w-2 rounded-full bg-gray-300 mt-1 md:mt-2"></div>
              <p className=" w-11/12">
                We present a wide variety of packages to match your varied
                requirements.
              </p>
            </div>
            <div className=" flex items-start justify-between md:justify-evenly">
              <div className=" h-2 w-2 rounded-full bg-gray-300 mt-1 md:mt-2"></div>
              <p className=" w-11/12">
                Our web developments are professional, innovativeand above
                anything else, these aredistinctive.
              </p>
            </div>
            <div className=" flex items-start justify-between md:justify-evenly">
              <div className=" h-2 w-2 rounded-full bg-gray-300 mt-1 md:mt-2"></div>
              <p className=" w-11/12">
                Our developers are well familiar with the modern development in
                the domain of website designing.
              </p>
            </div>
          </div>
          <div className=" flex flex-col gap-3">
            <h1 className=" text-xl font-normal">
              Get a new height through our web design
            </h1>
            <p>
              We realize how essential it is for anycompany to catch traffic
              from various search engines. So, for this reason, we always strive
              hard to turn your website Google friendly just by following
              designing guidelines of Google as much as possible. Furthermore,
              with SocialTitli, you would never need to compromise on quality of
              service. Our charges for website design are highly economical, as
              already said. It means that now you mayget a fresh new webpage
              without feeling any effect of pinching in your pocket. <br />
              <br />
              As conclusion, it can be stated that we at SocialTitli aspire to
              go beyond our clients’ expectations with commitment in every
              operational phase while keeping up highest ethical sets. With our
              customized service, presenting individual involvement and
              dedication we fulfill all the exceptional and definite
              requirements, which our clients want. We regard ourselves as the
              integral portion of our client’s association and offer what we
              assure.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebdevContent;
