import React, { ChangeEvent, KeyboardEvent, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
interface InputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  onKeyUpCapture?: (event: KeyboardEvent<HTMLInputElement>) => void;
}

const ReusableInput: React.FC<InputProps> = ({
  value,
  onChange,
  placeholder,
  onKeyUpCapture,
}) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    onChange(event.target.value);
  };

  return (
    <div className=' group flex m-auto h-fit bg-[#F5F5F5] gap-2 rounded-[30px]'>
      <div className=' bg-none hover:bg-[#a9a9a9] ease-in-out duration-300 rounded-[50%] flex p-2 cursor-pointer'>
        <IoSearchOutline className='m-auto cursor-pointer text-[20px]' />
      </div>
      <input
        value={value}
        type='text'
        placeholder='Search'
        className='bg-[#F5F5F5] hover:placeholder-gray-700 text-[17px] font-bold m-auto outline-none p-0 w-[130px] text-black rounded-[30px]'
        onChange={handleChange}
        onKeyUpCapture={onKeyUpCapture}
      />
    </div>
  );
};

export default ReusableInput;
