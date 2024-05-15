import React, { Dispatch, MouseEventHandler, SetStateAction } from "react";
import { SaleItems } from "./HoverDetails";
interface MyComponentProps {
  setSaleDropDown: Dispatch<SetStateAction<boolean>>;
}

const Sale: React.FC<MyComponentProps> = ({ setSaleDropDown }) => {
  const handleMouseEnter: MouseEventHandler<HTMLDivElement> = () => {
    setSaleDropDown(true);
  };
  const handleMouseLeave: MouseEventHandler<HTMLDivElement> = () => {
    setSaleDropDown(false);
  };
  return (
    <div
      onMouseEnter={handleMouseLeave}
      className='absolute w-full h-screen top-0 left-0 bg-transparent backdrop-filter backdrop-blur-sm'
    >
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className='w-full h-fit bg-white flex justify-center '
      >
        {SaleItems.map((item, index) => (
          <div
            className='w-fit h-fit py-8 px-12 gap-3 font-[700] text-black'
            key={index}
          >
            <a href='/' className='text-[17px] text-black'>
              {item.head}
            </a>
            <div className='py-4 flex flex-col gap-1 font-[500] text-[15px] text-left text-gray-800'>
              {item.details.map((detail, i) => (
                <a href='/' className='hover:text-gray-600' key={i}>
                  {detail}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sale;
