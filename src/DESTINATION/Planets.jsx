import React, { useState, useRef, useEffect } from "react";
import { destinations } from "../data";

const Planets = () => {
  const [index, setIndex] = useState(0);
  const imagesRef = useRef([]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.25,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("planetanimation");
        } else {
          entry.target.classList.remove("planetanimation");
        }
      });
    }, options);

    imagesRef.current.forEach((img) => {
      observer.observe(img);
    });

    return () => {
      observer.disconnect();
    };
  }, [index]);

  return (
    <div className="flex flex-col md:flex-row justify-between items-center md:items-start xs:px-32">
      <div className="w-[150px] ss:w-[170px] sm:w-[300px] md:w-[445px] my-12 sm:my-16 items-center flex">
        {destinations.map((destination, i) => (
          <img
            key={i}
            ref={(el) => (imagesRef.current[i] = el)}
            src={destination.image}
            alt={`${destination.name} image`}
            style={{ display: index === i ? "block" : "none" }}
            className={`transition-all transform duration-500 ease-in-out hover:scale-[1.05]`}
          />
        ))}
      </div>
      <div className="flex flex-col items-center md:items-start sm:my-10 h-full">
        <menu className="flex flex-row text-[#D0D6F9]">
          {destinations.map((destination, i) => (
            <p
              className={` barlow-condensed-regular break-words tracking-[2.36px] md:tracking-[2.7px] text-[12px] xs:text-[14px] md:text-[16px] mx-[6px] xs:mx-[10px] ss:mx-6 cursor-pointer uppercase ${
                index === i && "border-b-[3px] text-white"
              } hover:border-b-[3px] hover:border-[rgba(255,255,255,0.5)]`}
              onClick={() => setIndex(i)}
              key={i}
            >
              {destination.name}
            </p>
          ))}
        
        </menu>
        <div>
          <h1 className="bellefair text-center md:text-left text-[50px] pt-3 sm:pt-0 ss:text-[56px] sm:text-[80px] md:text-[100px] text-white uppercase ss:pl-4">
            {destinations[`${index}`].name}
          </h1>
          <p className="w-[200px] xs:w-[250px] ss:w-[327px] sm:w-[573px] text-center md:text-left md:w-[444px] sm:px-10 md:pl-4 barlow-condensed-regular break-words text-[15px] xs:leading-[25px] sm:text-[16px] md:text-lg text-[#D0D6F9] md:leading-loose sm:leading-loose">
            {destinations[`${index}`].description}
          </p>
        </div>
        <hr className="md:w-[444px] sm:w-[573px] w-[200px] xs:w-[250px] ss:w-[327px] mt-10 ss:ml-[12px] border-gray-700" />
        <div className="flex flex-col sm:flex-row my-6 md:justify-between mx-[15px] w-[75%] items-center justify-center">
          <div className="flex flex-col sm:pr-6 md:pr-0 mb-8 sm:mb-0">
            <h6 className="text-indigo-200 text-sm barlow-condensed-regular uppercase tracking-widest text-center md:text-left">
              AVG. DISTANCE
            </h6>
            <h3 className="text-white text-[28px] bellefair uppercase text-center md:text-left">
              {destinations[`${index}`].distance}
            </h3>
          </div>
          <div className="sm:pl-12 md:pl-0">
            <h6 className="text-indigo-200 text-sm barlow-condensed-regular uppercase tracking-widest text-center md:text-left">
              EST. TRAVEL TIME
            </h6>
            <h3 className="text-white text-[28px] bellefair uppercase text-center md:text-left">
              {destinations[`${index}`].travel}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Planets;
