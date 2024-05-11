import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";

const AllClients = () => {
  const clients = [
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
    {
      id: 7,
      src: "https://www.socialtitli.com/assets/uploads/clientele/1601722823moe.png",
    },
    {
      id: 8,
      src: "https://www.socialtitli.com/assets/uploads/clientele/15544666253.jpg",
    },
    {
      id: 9,
      src: "https://www.socialtitli.com/assets/uploads/clientele/1591771432Europa%20Locks.png",
    },
    {
      id: 10,
      src: "https://www.socialtitli.com/assets/uploads/clientele/157596813225.jpg",
    },
    {
      id: 11,
      src: "https://www.socialtitli.com/assets/uploads/clientele/155446834010.jpg",
    },
    {
      id: 12,
      src: "https://www.socialtitli.com/assets/uploads/clientele/160172320915544677355.jpg",
    },
    {
      id: 13,
      src: "https://www.socialtitli.com/assets/uploads/clientele/1583734943155446914330.jpg",
    },
    {
      id: 14,
      src: "https://www.socialtitli.com/assets/uploads/clientele/155446873321.jpg",
    },
    {
      id: 15,
      src: "https://www.socialtitli.com/assets/uploads/clientele/155446881622.jpg",
    },
    {
      id: 16,
      src: "https://www.socialtitli.com/assets/uploads/clientele/155446884223.jpg",
    },
    {
      id: 17,
      src: "https://www.socialtitli.com/assets/uploads/clientele/155446897525.jpg",
    },
  ];
  return (
    <div className=" bg-white py-7 border-b-2">
      <div className=" container mx-auto">
        <div className=" flex justify-center items-center gap-5 text-sm ">
          <Link to={"/"}>
            <h1 className=" uppercase  font-medium text-gray-400 hover:text-black">
              home
            </h1>
          </Link>
          <AiOutlineArrowRight />
          <h1 className="uppercase font-bold">clientele</h1>
        </div>
        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:px-[3rem]">
          {clients.map((client) => (
            <div
              key={client.id}
              className=" m-5 shadow-xl hover:scale-110 transition-all duration-300"
            >
              <img src={client.src} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllClients;
