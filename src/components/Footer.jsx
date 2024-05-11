import React from "react";

const Footer = () => {
  return (
    <div className=" w-full bg-gray-200">
      <div className=" container mx-auto flex">
        <div className=" flex w-full justify-center items-center bg-gray-200 p-5">
          <p className=" text-gray-600 ">&copy; 2024 . All rights reserved.</p>
          <img
            src="https://images.dmca.com/Badges/DMCA_logo-grn-btn100w.png?ID=5f4646f7-e15d-4be4-b20f-32b50b797c8b "
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
