import React, { Dispatch, MouseEventHandler, SetStateAction } from "react";
import { JordanItems } from "./HoverDetails";

interface MyComponentProps {
  setJordanDropDown: Dispatch<SetStateAction<boolean>>;
}
const Jordan: React.FC<MyComponentProps> = ({ setJordanDropDown }) => {
  const handleMouseEnter: MouseEventHandler<HTMLDivElement> = () => {
    setJordanDropDown(true);
  };
  const handleMouseLeave: MouseEventHandler<HTMLDivElement> = () => {
    setJordanDropDown(false);
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
        {JordanItems.map((item, index) => (
          <div
            className='w-fit h-fit py-8 px-5 gap-3 font-[700] text-black'
            key={index}
          >
            <h1 className='text-[17px] text-black'>{item.head}</h1>
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

export default Jordan;
