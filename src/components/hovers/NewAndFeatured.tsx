import React, { Dispatch, MouseEventHandler, SetStateAction } from "react";
import { NewAndFeaturedItems } from "./HoverDetails";
interface MyComponentProps {
  setNewAndFeatured: Dispatch<SetStateAction<boolean>>;
}

const NewAndFeatured: React.FC<MyComponentProps> = ({ setNewAndFeatured }) => {
  const handleMouseEnter: MouseEventHandler<HTMLDivElement> = () => {
    setNewAndFeatured(true);
  };
  const handleMouseLeave: MouseEventHandler<HTMLDivElement> = () => {
    setNewAndFeatured(false);
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
        {NewAndFeaturedItems.map((item, index) => (
          <div
            className='w-fit h-fit py-8 px-7 gap-3 font-[700] text-black'
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

export default NewAndFeatured;
