import { Link } from "react-router-dom";
import { useState } from "react";
import { Box } from "../box/box";

export const HomeSection = () => {
  return (
    <>
      <div className="w-full flex flex-col">
        <div className="flex w-full justify-evenly max-w-[1092px] mt-[30px] mx-auto mb-[40px]">
          <div className="flex items-center hover:border-b-2 hover:border-[#996531] transition-all duration-500 ease-in-out border-b-2 border-transparent hover:text-[#996531] cursor-pointer">
            <i className="fa-solid fa-fire"></i>
            <p>Most popular</p>
          </div>
          <div className="cursor-pointer hover:border-b-2 hover:border-[#996531] transition-all duration-500 ease-in-out border-b-2 border-transparent hover:text-[#996531] flex items-center text-[#1C140C]">
            <i className="fa-regular fa-heart"></i>
            <p>Favorites</p>
          </div>
          <div className="cursor-pointer hover:border-b-2 hover:border-[#996531] transition-all duration-500 ease-in-out border-b-2 border-transparent hover:text-[#996531] flex items-center text-[#1C140C]">
            <i className="fa-solid fa-bread-slice"></i>
            <p>Bread</p>
          </div>
          <div className="cursor-pointer hover:border-b-2 hover:border-[#996531] transition-all duration-500 ease-in-out border-b-2 border-transparent hover:text-[#996531] flex items-center text-[#1C140C]">
            <i className="fa-solid fa-cookie"></i>
            <p>Cookie</p>
          </div>
          <div className="cursor-pointer hover:border-b-2 hover:border-[#996531] transition-all duration-500 ease-in-out border-b-2 border-transparent hover:text-[#996531] flex items-center text-[#1C140C]">
            <i className="fa-solid fa-bread-slice"></i>
            <p>Croissant</p>
          </div>
          <div className="cursor-pointer hover:border-b-2 hover:border-[#996531] transition-all duration-500 ease-in-out border-b-2 border-transparent hover:text-[#996531] flex items-center text-[#1C140C]">
            <i className="fa-solid fa-cake-candles"></i>
            <p>Cupcake</p>
          </div>
          <div className="cursor-pointer hover:border-b-2 hover:border-[#996531] transition-all duration-500 ease-in-out border-b-2 border-transparent hover:text-[#996531] flex items-center text-[#1C140C]">
            <i className="fa-solid fa-pizza-slice"></i>
            <p>Custard pie</p>
          </div>
          <div className="cursor-pointer hover:border-b-2 hover:border-[#996531] transition-all duration-500 ease-in-out border-b-2 border-transparent hover:text-[#996531] flex items-center text-[#1C140C]">
            <i className="fa-solid fa-certificate"></i>
            <p>Donut</p>
          </div>
          <div className="cursor-pointer hover:border-b-2 hover:border-[#996531] transition-all duration-500 ease-in-out border-b-2 border-transparent hover:text-[#996531] flex items-center text-[#1C140C]">
            <i className="fa-solid fa-coffee"></i>
            <p>Coffe</p>
          </div>
          <div className="cursor-pointer hover:border-b-2 hover:border-[#996531] transition-all duration-500 ease-in-out border-b-2 border-transparent hover:text-[#996531] flex items-center text-[#1C140C]">
            <i className="fa-solid fa-cake-candles"></i>
            <p>Cake</p>
          </div>
        </div>
        <div className="w-full gap-[20px] flex flex-wrap justify-center max-w-[1100px] mx-auto overflow-y-scroll max-h-[78.2vh]">
          {Array.from({ length: 30 }).map((_, index) => (
            <Box key={index} />
          ))}
        </div>
      </div>
    </>
  );
};
