import React from "react";

const Info = () => {
  return (
    <div
      className="  w-full h-[80vh] bg-cover bg-center flex justify-center items-center lg:h-[50vh] xl:h-[60vh]"
      style={{
        backgroundImage: 'url("https://www.socialtitli.com/598.jpg")',
      }}
    >
      <p className=" p-5 text-sm text-center m-5 font-light md:w-[55%] md:text-base lg:w-[35%] lg:text-[15px] xl:w-[30%]">
        We provide innovative solution in various types of fields such as
        Website design and development, Search Engine Optimization, Social Media
        Optimization, Pay per Click advertising, Mobile Apps development and
        Media Buying.
      </p>
    </div>
  );
};

export default Info;
