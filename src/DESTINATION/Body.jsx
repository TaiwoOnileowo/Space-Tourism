import React from "react";
import Planets from "./Planets";


const Body = () => {
  return (
    <div className="flex flex-col h-full">
      <div className="mt-[65px] sm:mx-[100px] flex justify-center sm:justify-normal">
        <h3 className=" break-words barlow-condensed-regular text-[14px] ss:text-base sm:text-xl md:text-[28px] tracking-[2.7px] sm:tracking-[3.38px] md:tracking-[4.7px] text-white font-normal">
          <span className="font-bold opacity-25 ">01</span> PICK YOUR
          DESTINATION
        </h3>
      </div>
      <Planets/>
    </div>
  );
};

export default Body;
