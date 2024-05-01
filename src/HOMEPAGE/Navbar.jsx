import React, { useState } from "react";
import logo from "./assets/logo.svg";
import { navLink } from "../data";
import { NavLink } from "react-router-dom";
import menuicon from "./assets/menuicon.svg";
import closeicon from "./assets/closeicon.svg";
import "../index.css";

const Navbar = ({ active }) => {
  const [toggleNav, setToggleNav] = React.useState(false);

  return (
    <nav
      className={`flex w-full pl-10 justify-between items-center h-[96px] relative md:pt-10`}
    >
      <div className={`flex justify-between w-full sm:w-[48px] items-center`}>
        <img src={logo} alt="logo" />
        <img
          src={toggleNav ? closeicon : menuicon}
          alt={toggleNav ? "close icon" : "menu icon"}
          className={`${
            toggleNav && "z-[100]"
          } sm:hidden w-[16px] h-[16px] xs:w-[20px] xs:h-[21px] mr-10 cursor-pointer transition-all ease text-[#D0D6F9]`}
          onClick={() => setToggleNav((prevValue) => !prevValue)}
        />
      </div>
      <hr className="absolute border-[#979797] opacity-25 hidden md:block w-[470px] translate-x-24 z-10" />
      <div className="hidden sm:flex items-center md:w-[60%] h-full">
        <ul className="relative z-0 flex md:pl-20 backdrop-blur-[40.8px] bg-[rgba(255,255,255,0.04)] w-full h-full items-center">
          {navLink.map((item, index) => (
            <li
              key={index}
              className="text-white mx-6 barlow-condensed-regular break-words tracking-[2.36px] mb-[1px] md:tracking-[2.7px] text-[14px] md:text-[16px] h-full flex items-center"
            >
              <NavLink
                to={item.link}
                className={`list h-full flex items-center border-b-[3px] ${
                  active === item.link
                    ? "border-[#979797]"
                    : "border-transparent"
                } hover:border-[#979797] transition ease duration-300`}
              >
                <span className="navLinkNo px-2 hidden md:block">
                  {item.number}
                </span>
                <span className="uppercase">{item.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div
        className={`${
          toggleNav && "right-[0px]"
        } transition-all z-10 ease-in-out duration-500 sm:hidden flex flex-col fixed h-[100vh] w-[160px] xs:w-[200px] ss:w-[255px] top-0 -right-[300px]`}
      >
        <ul className="flex-1 flex-col pt-[110px] backdrop-blur-[40.8px] bg-[rgba(255,255,255,0.04)] items-center">
          {navLink.map((item, index) => (
            <li
              key={index}
              className={`text-white mx-6 barlow-condensed-regular break-words mb-[1px] my-8 tracking-[2.7px] text-[16px] flex items-center ${
                active === item.link ? "border-[#979797]" : "border-transparent"
              }`}
            >
              <NavLink
                to={item.link}
                className="list flex items-center border-b-[3px] border-transparent hover:border-[#979797] transition ease duration-300"
              >
                <span className="navLinkNo px-2 block sm:hidden md:block">
                  {item.number}
                </span>
                <span className="uppercase">{item.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
