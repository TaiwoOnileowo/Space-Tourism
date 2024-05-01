import React from "react";
import { crew } from "../data";
import { useState } from "react";
const CrewMembers = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="flex md:flex-row flex-col-reverse sm:flex-col items-center w-full h-full">
      <div className="md:w-[60%] w-full flex flex-col-reverse items-center md:items-start sm:flex-col mb-8 sm:mb-0">
        <div className="mt-12 sm:mt-24 md:mt-36 flex flex-col items-center md:items-start w-[327px] sm:w-[520px] md:w-full">
          <h3 className="bellefair font-bold opacity-50 break-words text-white uppercase text-[16px] sm:text-[24px] md:text-[56px] ">
            {crew[`${index}`].role}
          </h3>
          <h1 className="bellefair break-words text-[24px] sm:text-[40px] md:text-[52px] text-white uppercase bellefair">
            {crew[`${index}`].name}
          </h1>
          <p className="barlow-condensed-regular text-[#D0D6F9] w-full text-[15px] sm:text-[16px] sm:leading-[28px] leading-[25px] md:text-[18px] break-words md:leading-[32px] text-center md:text-left md:w-[444px]">
            {crew[`${index}`].bio}
          </p>
        </div>
        <div className="flex mt-10 sm:mt-12">
          {crew.map((item, i) => (
            <div
              className={`w-[15px] h-[15px] rounded-[100%] bg-white opacity-15 mr-[15px] cursor-pointer hover:opacity-50 ${
                index === i && "opacity-[1]"
              } transition-all duration-300 ease-linear`}
              onClick={() => setIndex(i)}
              key={i}
            />
          ))}
        </div>
      </div>
      <div className="mt-16 sm:mt-28 md:mt-0 flex items-center flex-col md:items-end h-[270px] w-[220px] sm:h-[500px] md:h-[500px]  sm:w-[420px] md:w-[450px] md:mr-20 justify-center">
        {crew.map((crew, i) => (
          <img
            key={i}
            src={crew.image}
            alt={`${crew.name} Image`}
            style={{ display: index === i ? "block " : "none" }}
            className={`h-full w-full md:ml-28 ${
              i === 0 && "crewanimationflyin"
            } ${i === 1 && "animationpopin"} ${i === 2 && "animationpopin"} ${
              i === 3 && "crewanimationflyin"
            }`}
          />
        ))}
        <hr className="sm:hidden w-[327px] border-[#383B4B]" />
      </div>
    </div>
  );
};

export default CrewMembers;
