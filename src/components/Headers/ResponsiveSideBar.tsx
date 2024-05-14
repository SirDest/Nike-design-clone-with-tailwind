import React, { Dispatch, SetStateAction } from "react";
import { IoClose } from "react-icons/io5";
import { FaChevronRight } from "react-icons/fa";

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
  "text-[25px]",
  "flex",
  "justify-between",
];

const ResponsiveSideBar: React.FC<MyComponentProps> = ({ setSideBar }) => {
  const handleSideBar = () => {
    setSideBar(true);
  };
  return (
    <div className='h-full w-[270px] bg-blue-600 flex lg:hidden flex-col px-3 py-5'>
      <div
        onClick={handleSideBar}
        className='flex justify-end text-right cursor-pointer text-[24px] hover:text-gray-800'
      >
        <IoClose />
      </div>
      <div>
        <ul className='flex flex-col content-center m-auto font-bold text-[15px]'>
          <li className={generateClassName(navBarItems)}>
            New & Featured <FaChevronRight />
          </li>
          <li className={generateClassName(navBarItems)}>
            Men <FaChevronRight />
          </li>
          <li className={generateClassName(navBarItems)}>
            Women <FaChevronRight />
          </li>
          <li className={generateClassName(navBarItems)}>
            Kids <FaChevronRight />
          </li>
          <li className={generateClassName(navBarItems)}>
            Jordan <FaChevronRight />
          </li>
          <li className={generateClassName(navBarItems)}>
            Sale <FaChevronRight />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ResponsiveSideBar;
