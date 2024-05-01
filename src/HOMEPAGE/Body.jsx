import React from "react";
import { useState } from "react";

const Body = () => {
  const [bigCircle, setBigCircle] = useState(false);

  return (
    <div className="h-full items-center md:justify-between flex md:flex-row flex-col pt-[20px] xs:pt-[50px] ss:pt-[130px] md:pt-12">
      <div className="w-[210px] xs:w-[250px] ss:w-[325px] h-[275px] sm:w-[450px] mx-32 sm:h-[335px] md:h-[380px] text-center md:text-left md:mt-[-120px]">
        <h3 className="barlow-condensed-regular break-words text-[14px] xs:text-[16px] tracking-[2.7px] sm:text-[20px] sm:tracking-[3.38px] md:tracking-[4.72px] md:text-[28px] text-[#8a99f0]">
          SO, YOU WANT TO TRAVEL TO
        </h3>
        <h1 className="bellefairr text-[65px] xs:text-[80px] break-words xs:leading-[100px] sm:text-[150px] mb-[1px] sm:leading-[150px] text-center sm:text-left text-white xs:my-[35px]  sm:mb-[24px]">
          SPACE
        </h1>
        <p className="barlow-condensed-regular px-2 break-words text-[15px] xs:leading-[25px] sm:text-[16px] md:text-[18px] text-[#D0D6F9] md:leading-[1.778] sm:leading-[1.778]">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div
        className={`md:w-[450px] sm:w-[400px] sm:h-[400px] md:h-[450px] w-[200px] h-[200px] xs:w-[250px] xs:h-[250px] rounded-[100%] ${
          bigCircle && "bg-[#979797]"
        } ss:mt-[70px] md:mt-[80px] md:mr-[120px] flex items-center transition-all ease duration-300 hover:bg-opacity-[0.25] justify-center`}
      >
        <a href="/destination">
          <div
            className={`md:w-[275px] md:h-[275px] sm:w-[240px] sm:h-[240px] w-[100px] h-[100px] xs:w-[150px] xs:h-[150px] rounded-[100%] items-center justify-center flex bg-white cursor-pointer`}
            onMouseEnter={() => setBigCircle(true)}
            onMouseLeave={() => setBigCircle(false)}
          >
            <h3
              className={`bellefair-regular text-[16px] xs:text-[20px] break-words tracking-[1.25px] sm:text-[32px] mb-[1px] sm:tracking-[2px] text-[#0B0D17]`}
            >
              EXPLORE
            </h3>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Body;
