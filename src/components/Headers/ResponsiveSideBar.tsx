import React, { Dispatch, SetStateAction } from "react";
import { FaStar } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";
import { SiJordan } from "react-icons/si";
import { TfiAngleRight } from "react-icons/tfi";

import {
  IoBagOutline,
  IoCartOutline,
  IoHelpCircleOutline,
} from "react-icons/io5";
import { PiBasketLight } from "react-icons/pi";
import BlackButton from "../Reusable/BlackButton";
import WhiteButton from "../Reusable/WhiteButton";

interface MyComponentProps {
  setSideBar: Dispatch<SetStateAction<boolean>>;
}
const itemLinks = [
  {
    icon: <IoBagOutline />,
    item: "Bag",
  },
  {
    icon: <IoCartOutline />,
    item: "Orders",
  },
  {
    icon: <PiBasketLight />,
    item: "Find a Store",
  },
  {
    icon: <IoHelpCircleOutline />,
    item: "Help",
  },
];

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
];

const iconStyles = ["text-[13px]", "font-bold"];

const iconTWClassNames = [
  "block",
  "text-[27px]",
  "text-black",
  "ease-in-out",
  "duration-300 ",
  "items-center",
];
const secondDivStyle = [
  "flex",
  "w-full",
  "gap-3",
  "cursor-pointer",
  "items-center",
  "text-center",
];
const ResponsiveSideBar: React.FC<MyComponentProps> = ({ setSideBar }) => {
  const handleSideBar = () => {
    setSideBar((prevState) => !prevState);
  };

  return (
    <div className='h-fit bg-white w-[270px] flex lg:hidden flex-col pt-4 pb-10 px-7'>
      <div
        onClick={handleSideBar}
        className='flex justify-end text-right cursor-pointer font-light'
      >
        <div className=' border-none rounded-[50%] hover:bg-[#a9a9a9] text-[25px] p-1 ease-in-out duration-300'>
          <IoCloseOutline />
        </div>
      </div>
      <ul className='flex flex-col w-full content-center py-2'>
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
      <div className='w-full h-fit bg-white flex flex-col py-5 gap-3 text-[17px]'>
        <div className={generateClassName(secondDivStyle)}>
          <SiJordan className={generateClassName(iconTWClassNames)} />
          <p>Jordan</p>
        </div>
        <div className={generateClassName(secondDivStyle)}>
          <FaStar className={generateClassName(iconTWClassNames)} />
          <p>Converse</p>
        </div>
      </div>
      <div className='w-full h-fit text-gray-700 text-[19px] font-[500] mt-[85px] flex flex-col'>
        <p>
          Become a Nike Member for the best products, inspiration and stories in
          sport. <span className='text-black cursor-pointer'>Learn more</span>
        </p>
        <div className='flex gap-3 mt-7 '>
          <BlackButton>Join Us</BlackButton>
          <WhiteButton>Sign In</WhiteButton>
        </div>
      </div>
      <div className='w-full h-fit bg-white flex flex-col gap-4 text-[17px] py-20'>
        {itemLinks.map(({ icon, item }, i) => (
          <div
            key={i}
            className={`text-[20px] ${generateClassName(secondDivStyle)}`}
          >
            <div className={generateClassName(iconTWClassNames)}>{icon}</div>
            <p>{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResponsiveSideBar;
