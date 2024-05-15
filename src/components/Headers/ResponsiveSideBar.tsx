import React, { Dispatch, SetStateAction } from "react";
import { IoCloseOutline } from "react-icons/io5";

import { TfiAngleRight } from "react-icons/tfi";

interface MyComponentProps {
  setSideBar: Dispatch<SetStateAction<boolean>>;
}

const generateClassName = (classes: string[]) => {
  return classes.join(" ");
};

const navBarItems = [
  "p-1",
  "cursor-pointer",
  "ease-in-out",
  "duration-300",
  "text-[22px]",
  "flex",
  "m-auto",
  "w-full",
  "items-center",
  "justify-between",
  "text-[15px]",
];

const iconStyles = ["text-[13px]", "font-bold"];

const ResponsiveSideBar: React.FC<MyComponentProps> = ({ setSideBar }) => {
  const handleSideBar = () => {
    setSideBar((prevState) => !prevState);
  };

  return (
    <div className='h-full bg-white w-[270px] flex lg:hidden flex-col py-4'>
      <div
        onClick={handleSideBar}
        className='flex justify-end text-right cursor-pointer font-light px-6'
      >
        <div className=' border-none rounded-[50%] hover:bg-[#a9a9a9] text-[25px] p-1 ease-in-out duration-300'>
          <IoCloseOutline />
        </div>
      </div>
      <ul className='flex flex-col w-full content-center py-2 px-7'>
        <li className={generateClassName(navBarItems)}>
          <p>New & Featured</p>
          <p className={generateClassName(iconStyles)}>
            <TfiAngleRight />
          </p>
        </li>
        <li className={generateClassName(navBarItems)}>
          <span>Men </span>
          <span>
            <TfiAngleRight className={generateClassName(iconStyles)} />
          </span>
        </li>
        <li className={generateClassName(navBarItems)}>
          <span>Women</span>
          <span>
            <TfiAngleRight className={generateClassName(iconStyles)} />
          </span>
        </li>
        <li className={generateClassName(navBarItems)}>
          <span>Kids</span>
          <span>
            <TfiAngleRight className={generateClassName(iconStyles)} />
          </span>
        </li>
        <li className={generateClassName(navBarItems)}>
          <span>Jordan</span>
          <span>
            <TfiAngleRight className={generateClassName(iconStyles)} />
          </span>
        </li>
        <li className={generateClassName(navBarItems)}>
          <span>Sale</span>
          <span>
            <TfiAngleRight className={generateClassName(iconStyles)} />
          </span>
        </li>
      </ul>
    </div>
  );
};

export default ResponsiveSideBar;
