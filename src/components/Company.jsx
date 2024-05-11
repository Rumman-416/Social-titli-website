import React from "react";
import { MdWeb } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { MdScreenSearchDesktop } from "react-icons/md";
import { FaPeopleGroup } from "react-icons/fa6";
import { GiClick } from "react-icons/gi";
import { MdPhonelinkSetup } from "react-icons/md";
import { IoMdCart } from "react-icons/io";
import { BsFillHouseFill } from "react-icons/bs";
import { BiSolidPlaneAlt } from "react-icons/bi";
import { BsHospital } from "react-icons/bs";
import { MdRealEstateAgent } from "react-icons/md";
import { FaPiggyBank } from "react-icons/fa6";
import { MdFastfood } from "react-icons/md";
const Company = () => {
  return (
    <div className="bg-white">
      <div className=" container mx-auto">
        <h1 className=" text-center text-3xl p-6 font-medium text-[#f4a210] uppercase">
          industries we Serve
        </h1>
        <div className="  grid grid-cols-2">
          <div className=" flex justify-between text-start text-sm items-center rounded-md bg-white m-4 text-[#f4a210] p-3 hover:bg-transparent  hover:bg-[#27303E] hover:text-white min-h-20 xs:hover:scale-110 hover:shadow-lg hover:shadow-[#f4a210] transition-all duration-300">
            <h1>Insurance & home</h1>
            <div className=" text-2xl">
              <BsFillHouseFill />
            </div>
          </div>
          <div className=" flex justify-between text-start text-sm items-center rounded-md bg-white m-4 text-[#f4a210] p-3 hover:bg-transparent   min-h-20 xs:hover:scale-110 hover:shadow-lg hover:shadow-[#f4a210] transition-all duration-300">
            <h1>Travel & hospitality</h1>
            <div className=" text-2xl ">
              <BiSolidPlaneAlt />
            </div>
          </div>
          <div className=" flex justify-between text-start text-sm items-center border-2  rounded-md bg-white m-4 border-[#f4a210] text-[#f4a210] p-3 hover:border-none hover:bg-transparent   min-h-20 xs:hover:scale-110 hover:shadow-lg hover:shadow-[#f4a210] transition-all duration-300">
            <h1>Healthcare & Healthtech</h1>
            <div className=" text-2xl ">
              <BsHospital />
            </div>
          </div>
          <div className=" flex justify-between text-start text-sm items-center border-2  rounded-md bg-[#3D3F42] m-4 border-[#f4a210] text-[#f4a210] p-3 hover:border-none hover:bg-transparent   min-h-20 xs:hover:scale-110 hover:shadow-lg hover:shadow-[#f4a210] transition-all duration-300">
            <h1>Real Estate</h1>
            <div className=" text-2xl ">
              <MdRealEstateAgent />
            </div>
          </div>
          <div className=" flex justify-between text-start text-sm items-center   rounded-md bg-[#3D3F42] m-4  text-white p-3 hover:border-none hover:bg-transparent   min-h-20 xs:hover:scale-110 hover:shadow-lg hover:text-[#3D3F42] hover:shadow-[#3D3F42] transition-all duration-300">
            <h1>Banking & Finance</h1>
            <div className=" text-2xl ">
              <FaPiggyBank />
            </div>
          </div>
          <div className=" flex justify-between text-start text-sm items-center rounded-md bg-[#f4a210] m-4 text-white p-3 hover:bg-transparent hover:border-2 hover:border-[#f4a210] hover:text-[#f4a210] min-h-20 xs:hover:scale-110 transition-all duration-300">
            <h1>Food & Beverages</h1>
            <div className=" text-2xl ">
              <MdFastfood />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Company;
