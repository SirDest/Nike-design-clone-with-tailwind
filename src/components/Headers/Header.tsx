import React, { useState } from "react";
import { SiNike } from "react-icons/si";
import {
  IoSearchOutline,
  IoCartOutline,
  IoHeartOutline,
} from "react-icons/io5";

const Header = () => {
  const [searchInput, setSearchInput] = useState("");

  const handleChange = (e: any) => {
    setSearchInput(e.target.value);
  };

  const generateClassName = (classes: string[]) => {
    return classes.join(" ");
  };
  const navBarItems = [
    "p-3",
    "border-b-2",
    "border-white",
    "hover:border-black",
    "cursor-pointer",
    "ease-in-out",
    " duration-300",
  ];
  return (
    <div className='w-full h-fit hidden lg:flex justify-between px-6 lg:px-12 py-1 xl:text-2xl'>
      <div>
        <SiNike className='block text-[50px] text-black hover:text-[#A9A9A9] ease-in-out duration-300 m-auto' />
      </div>
      <ul className='flex font-bold text-[17px]'>
        <li className={generateClassName(navBarItems)}>New & Featured</li>
        <li className={generateClassName(navBarItems)}>Men</li>
        <li className={generateClassName(navBarItems)}>Women</li>
        <li className={generateClassName(navBarItems)}>Kids</li>
        <li className={generateClassName(navBarItems)}>Jordan</li>
        <li className={generateClassName(navBarItems)}>Sale</li>
      </ul>
      <div className='flex'>
        <div className='flex bg-[#F5F5F5] gap-2 px-2 py-1 rounded-[30px]'>
          <IoSearchOutline className='m-auto cursor-pointer hover:bg-[#a9a9a9] rounded-[50%] ' />
          <input
            type='text'
            placeholder='Search'
            className='bg-[#F5F5F5] text-[17px] font-bold m-auto outline-none p-0 w-[150px] text-black'
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
