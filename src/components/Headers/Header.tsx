import React, { Dispatch, SetStateAction, useState } from "react";
import { SiNike } from "react-icons/si";
import { IoSearchOutline, IoBagOutline, IoHeartOutline } from "react-icons/io5";
import TopHeader from "./TopHeader";
import Search from "./Search";
import { Transition } from "@tailwindui/react";

interface MyComponentProps {
  setNewAndFeatured: Dispatch<SetStateAction<boolean>>;
  setmenDropDown: Dispatch<SetStateAction<boolean>>;
  setWomenDropDown: Dispatch<SetStateAction<boolean>>;
  setKidsDropDown: Dispatch<SetStateAction<boolean>>;
  setJordanDropDown: Dispatch<SetStateAction<boolean>>;
  setSaleDropDown: Dispatch<SetStateAction<boolean>>;
}

const Header: React.FC<MyComponentProps> = ({
  setNewAndFeatured,
  setmenDropDown,
  setWomenDropDown,
  setKidsDropDown,
  setJordanDropDown,
  setSaleDropDown,
}) => {
  const [searchBar, setSearchBar] = useState(false);
  const handleSearch = () => {
    setSearchBar(true);
  };
  const NewAndFeaturedDropDown = () => {
    setNewAndFeatured((prevState) => !prevState);
  };
  const handleMenDropDown = () => {
    setmenDropDown((prevState) => !prevState);
  };
  const handleWomenDropDown = () => {
    setWomenDropDown((prevState) => !prevState);
  };
  const handleKidsDropDown = () => {
    setKidsDropDown((prevState) => !prevState);
  };
  const handleJordanDropDown = () => {
    setJordanDropDown((prevState) => !prevState);
  };
  const handleSaleDropDown = () => {
    setSaleDropDown((prevState) => !prevState);
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
      <div className='w-full h-fit hidden lg:flex justify-between px-6 lg:px-12 py-0 xl:text-2xl'>
        <div>
          <a href='/'>
            <SiNike className='block text-[50px] text-black hover:text-[#A9A9A9] ease-in-out duration-300 m-auto' />
          </a>
        </div>
        <ul className='flex content-center m-auto font-bold text-[15px]'>
          <li
            className={generateClassName(navBarItems)}
            onMouseEnter={NewAndFeaturedDropDown}
            onMouseLeave={NewAndFeaturedDropDown}
          >
            New & Featured
          </li>
          <li
            className={generateClassName(navBarItems)}
            onMouseEnter={handleMenDropDown}
            onMouseLeave={handleMenDropDown}
          >
            Men
          </li>
          <li
            className={generateClassName(navBarItems)}
            onMouseEnter={handleWomenDropDown}
            onMouseLeave={handleWomenDropDown}
          >
            Women
          </li>
          <li
            className={generateClassName(navBarItems)}
            onMouseEnter={handleKidsDropDown}
            onMouseLeave={handleKidsDropDown}
          >
            Kids
          </li>
          <li
            className={generateClassName(navBarItems)}
            onMouseEnter={handleJordanDropDown}
            onMouseLeave={handleJordanDropDown}
          >
            Jordan
          </li>
          <li
            className={generateClassName(navBarItems)}
            onMouseEnter={handleSaleDropDown}
            onMouseLeave={handleSaleDropDown}
          >
            Sale
          </li>
        </ul>
        <div className='flex gap-2'>
          <div
            onClick={handleSearch}
            className='group flex m-auto h-fit bg-[#F5F5F5] gap-2 rounded-[30px]'
          >
            <div className=' bg-none hover:bg-[#a9a9a9] ease-in-out duration-300 rounded-[50%] flex p-2 cursor-pointer'>
              <IoSearchOutline className='m-auto cursor-pointer text-[20px]' />
            </div>
            <input
              type='text'
              placeholder='Search'
              className='bg-[#F5F5F5] active:placeholder-white text-[17px] font-bold m-auto outline-none p-0 w-[130px] text-black rounded-[30px]'
              onChange={handleChange}
              readOnly
            />
          </div>

          <div className={generateClassName(headerIcons)}>
            <IoHeartOutline />
          </div>
          <div className={generateClassName(headerIcons)}>
            <IoBagOutline />
          </div>
        </div>
      </div>
      {/* <Transition
        show={isOpen}
        enter='transition-opacity duration-300'
        enterFrom='opacity-0'
        enterTo='opacity-100'
        leave='transition-opacity duration-150'
        leaveFrom='opacity-100'
        leaveTo='opacity-0'
      ></Transition> */}
      <div
        style={{ display: searchBar ? "block" : "none" }}
        className='absolute z-10 top-0 left-0 w-full h-screen bg-transparent backdrop-filter backdrop-blur-sm'
      >
        <Search setSearchBar={setSearchBar} />
      </div>
    </div>
  );
};

export default Header;
