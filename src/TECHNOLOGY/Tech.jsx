import React, { useState, useEffect } from "react";
import { technology } from "../data";

const Tech = () => {
  const [index, setIndex] = useState(0);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setScreenWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [screenWidth]);

  return (
    <div className="flex flex-col-reverse md:flex-row justify-center md:justify-between items-center md:items-start md:pl-32 h-full pb-16">
      <div className="flex flex-col md:flex-row items-center mt-16 sm:mt-32 md:gap-16">
        <div className="flex md:flex-col gap-8 md:gap-0 justiy-center items-center md:items-start h-full">
          {technology.map((item, i) => (
            <div
              className={`border border-white mb-[30px] w-[40px] h-[40px] sm:w-[56px] md:w-[80px] sm:h-[56px] md:h-[80px] rounded-full flex items-center justify-center cursor-pointer select-none ${
                index === i && "bg-white"
              }`}
              onClick={() => setIndex(i)}
              key={i}
            >
              <h3
                className={`${
                  index === i ? "text-[#000]" : "text-white "
                } bellefair text-[16px] sm:text-[24px] md:text-[32px] h-[fit-content]`}
              >
                {i + 1}
              </h3>
            </div>
          ))}
        </div>
        <div>
          <h6 className="md:text-left text-center barlow-condensed-regular text-[#D0D6F9] text-[14px] sm:text-[16px] tarcking-[2.7px]">
            THE TERMINOLOGY...
          </h6>
          <h1 className=" md:text-left text-center break-words text-white text-[24px] sm:text-[40px] md:text-[56px] bellefair uppercase">
            {technology[index].name}
          </h1>
          <p className="md:text-left text-center break-words text-[15px] sm:text-[16px] md:text-[18px] barlow-condensed-regular leading-[32px] text-[#D0D6F9] w-[327px] sm:w-[458px] md:w-[444px]">
            {technology[index].description}
          </p>
        </div>
      </div>
      <div className="md:w-[515px] md:h-[450px] flex items-center justify-center w-full h-[170px] sm:h-[310px] mt-[50px]">
        {technology.map((item, i) => (
          <img
            src={
              screenWidth >= 1200 ? item.images.portrait : item.images.landscape
            }
            alt="Technology Image"
            style={{ display: index === i ? "block " : "none" }}
            className={`w-full h-full animationpopin `}
            key={i}
          />
        ))}
        {console.log(index)}
      </div>
    </div>
  );
};

export default Tech;
