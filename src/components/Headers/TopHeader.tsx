import React from "react";
import { SiJordan, SiNike } from "react-icons/si";
import { FaStar } from "react-icons/fa";
import {
  IoPersonOutline,
  IoSearchOutline,
  IoCartOutline,
  IoHeartOutline,
} from "react-icons/io5";
import { MdOutlineDensityMedium } from "react-icons/md";

const TopHeader = () => {
  const generateClassName = (classes: string[]) => {
    return classes.join(" ");
  };
  const iconTWClassNames = [
    "hidden",
    "lg:block",
    "text-[20px]",
    "xl:text-2xl",
    "text-black",
    "hover:text-[#A9A9A9]",
    "ease-in-out",
    "duration-300 ",
    "m-auto",
  ];
  const navBarClassNames = [
    "px-3",
    "hover: text - [#A9A9A9]",
    "ease -in -out",
    "duration - 300",
  ];
  const responsiveClassNames = [
    "m-auto",
    "bg-white",
    "p-2",
    "rounded-[50%]",
    "text-base",
    "md:text-[24px]",
    "hover:bg-[#F5F5F5]",
    "ease-in-out",
    "duration-300",
    "border-0",
  ];
  return (
    <div className='w-full h-fit bg-white lg:bg-[#F5F5F5] flex justify-between px-6 lg:px-12 py-2 xl:text-2xl'>
      <div className='flex gap-6 justify-between'>
        <SiJordan className={generateClassName(iconTWClassNames)} />
        <FaStar className={generateClassName(iconTWClassNames)} />
        <SiNike className='block lg:hidden text-[30px] md:text-[48px] text-black hover:text-[#A9A9A9] ease-in-out duration-300 m-auto' />
      </div>
      <ul className='lg:flex hidden font-semibold text-sm'>
        <li>
          <a className={generateClassName(navBarClassNames)} href='/'>
            Find a Store
          </a>
        </li>
        <li>
          <a
            className='px-3 border-black border-x-2 hover:text-[#A9A9A9] ease-in-out duration-300'
            href='/'
          >
            Help
          </a>
        </li>
        <li>
          <a
            className='px-3 border-black border-r-2 hover:text-[#A9A9A9] ease-in-out duration-300'
            href='/'
          >
            Join Us
          </a>
        </li>
        <li>
          <a className={generateClassName(navBarClassNames)} href='/'>
            Sign In
          </a>
        </li>
      </ul>
      <ul className='lg:hidden flex gap-1 md:gap-3'>
        <li className={generateClassName(responsiveClassNames)}>
          <a href='/'>
            <IoSearchOutline />
          </a>
        </li>
        <li className={generateClassName(responsiveClassNames)}>
          <a href='/'>
            <IoCartOutline />
          </a>
        </li>
        <li className={generateClassName(responsiveClassNames)}>
          <a href='/'>
            <IoPersonOutline />
          </a>
        </li>
        <li className={generateClassName(responsiveClassNames)}>
          <MdOutlineDensityMedium />
        </li>
      </ul>
    </div>
  );
};

export default TopHeader;
