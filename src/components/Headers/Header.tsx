import React, { useState } from "react";
import { SiNike } from "react-icons/si";
import {
  IoSearchOutline,
  IoCartOutline,
  IoHeartOutline,
} from "react-icons/io5";
import TopHeader from "./TopHeader";
import Search from "./Search";

const Header: React.FC = () => {
  const [searchBar, setSearchBar] = useState(true);
  const handleSearch = () => {
    setSearchBar(true);
  };
  const generateClassName = (classes: string[]) => {
    return classes.join(" ");
  };
  const [searchInput, setSearchInput] = useState("");

  const handleChange = (e: any) => {
    setSearchInput(e.target.value);
  };

  const navBarItems = [
    "p-3",
    "border-b-2",
    "border-white",
    "hover:border-black",
    "cursor-pointer",
    "ease-in-out",
    "duration-300",
  ];

  const headerIcons = [
    "m-auto",
    "bg-white",
    "p-[4px]",
    "rounded-[50%]",
    "text-[24px]",
    "hover:bg-[#F5F5F5]",
    "ease-in-out",
    "duration-300",
    "border-0",
    "cursor-pointer",
  ];
  return (
    <div className='relative'>
      <TopHeader />
      <div className='w-full h-fit hidden lg:flex justify-between px-6 lg:px-12 py-1 xl:text-2xl'>
        <div>
          <a href='/'>
            <SiNike className='block text-[50px] text-black hover:text-[#A9A9A9] ease-in-out duration-300 m-auto' />
          </a>
        </div>
        <ul className='flex content-center m-auto font-bold text-[15px]'>
          <li className={generateClassName(navBarItems)}>New & Featured</li>
          <li className={generateClassName(navBarItems)}>Men</li>
          <li className={generateClassName(navBarItems)}>Women</li>
          <li className={generateClassName(navBarItems)}>Kids</li>
          <li className={generateClassName(navBarItems)}>Jordan</li>
          <li className={generateClassName(navBarItems)}>Sale</li>
        </ul>
        <div className='flex gap-2'>
          <div className=' group flex m-auto h-fit bg-[#F5F5F5] gap-2 rounded-[30px]'>
            <div className=' bg-none hover:bg-[#a9a9a9] ease-in-out duration-300 rounded-[50%] flex p-2 cursor-pointer'>
              <IoSearchOutline className='m-auto cursor-pointer text-[20px]' />
            </div>
            <input
              type='text'
              placeholder='Search'
              className='bg-[#F5F5F5] active:placeholder-white text-[17px] font-bold m-auto outline-none p-0 w-[130px] text-black rounded-[30px]'
              onChange={handleChange}
              onClick={() => setSearchBar(false)}
            />
          </div>

          <div className={generateClassName(headerIcons)}>
            <IoHeartOutline />
          </div>
          <div className={generateClassName(headerIcons)}>
            <IoCartOutline />
          </div>
        </div>
      </div>
      <div
        style={{
          display: !searchBar ? "block" : "none",
        }}
        className='absolute block top-0 left-0 w-full h-screen bg-transparent backdrop-filter backdrop-blur-sm'
      >
        <Search setSearchBar={setSearchBar} />
      </div>
    </div>
  );
};

export default Header;
