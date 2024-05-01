import React from "react";
import CrewMembers from "./CrewMembers";

const Body = () => {
  return (
    <div className="flex flex-col px-[80px] h-full w-full ">
      <div className="mt-[65px] flex justify-center sm:justify-normal">
        <h3 className=" break-words barlow-condensed-regular text-[14px] ss:text-base sm:text-xl md:text-[28px] tracking-[2.7px] sm:tracking-[3.38px] md:tracking-[4.7px] text-white font-normal">
          <span className="font-bold opacity-25 ">02</span> MEET YOUR CREW
        </h3>
      </div>

      <CrewMembers />
    </div>
  );
};

export default Body;
