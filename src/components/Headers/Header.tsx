import React from "react";
import { SiNike } from "react-icons/si";

const Header = () => {
  return (
    <div className='w-full h-fit hidden lg:flex justify-between  px-6 lg:px-12 py-2 xl:text-2xl'>
      <div>
        <SiNike className='block text-[50px] text-black hover:text-[#A9A9A9] ease-in-out duration-300 m-auto' />
      </div>
      <ul>
        <li>New & Featured</li>
        <li>Men</li>
        <li>Women</li>
        <li>Kids</li>
        <li>Jordan</li>
        <li>Sale</li>
      </ul>
      <div> search</div>
    </div>
  );
};

export default Header;
