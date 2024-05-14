import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import { IoSearchOutline } from "react-icons/io5";
import { SiNike } from "react-icons/si";
interface MyComponentProps {
  setSearchBar: Dispatch<SetStateAction<boolean>>;
}

const popularSearch = ["Air Force 1", "Jordan", "Air Max", "Blazer"];

const Search: React.FC<MyComponentProps> = ({ setSearchBar }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const removeSearch = () => {
    setSearchBar(true);
  };
  const [searchInput, setSearchInput] = useState("");
  const handleChange = (e: any) => {
    setSearchInput(e.target.value);
  };
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div className='w-full h-fit bg-white flex justify-between px-6 py-4'>
      <div>
        <a href='/'>
          <SiNike className='block text-[20px] md:text-[50px] text-black hover:text-[#A9A9A9] ease-in-out duration-300' />
        </a>
      </div>
      <div className='flex flex-col h-fit'>
        <div className=' group flex m-auto h-fit bg-[#F5F5F5] gap-2 rounded-[30px]'>
          <div className=' bg-none hover:bg-[#a9a9a9] ease-in-out duration-300 rounded-[50%] flex p-2 cursor-pointer'>
            <IoSearchOutline className='m-auto cursor-pointer text-15px md:text-[20px]' />
          </div>
          <input
            ref={inputRef}
            type='text'
            placeholder='Search'
            className='bg-[#F5F5F5] active:placeholder-white text-[17px] font-bold m-auto outline-none p-0 lg:w-[400px] text-black rounded-[30px]'
            onChange={handleChange}
          />
        </div>
        <div className='flex flex-col w-fit h-fit bg-white py-6'>
          <h1 className='text-gray-900  text-[14px] md:text-[16px] font-semibold py-3'>
            Popular Search Terms
          </h1>
          {popularSearch.map((term, i) => (
            <p
              className='text-base md:text-[20px] text-black font-semibold py-1 cursor-pointer hover:text-gray-600 transition-opacity duration-300 hover:opacity-75'
              key={i}
            >
              {term}
            </p>
          ))}
        </div>
      </div>
      <div>
        <button onClick={removeSearch} className='flex font-semibold'>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Search;
