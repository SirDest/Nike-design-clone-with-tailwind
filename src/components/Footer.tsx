import React from "react";
import { footerItems } from "./Footer/FooterItems";

const Footer = () => {
  return (
    <div className=' w-full h-screen flex justify-between'>
      <div className='w-fit h-fit bg-white flex justify-center '>
        {footerItems.map(({ head, details }, index) => (
          <div
            className='w-fit h-fit py-8 px-5 gap-3 font-[700] text-black'
            key={index}
          >
            <h1 className='text-[17px] text-black'>{head}</h1>
            <div className='py-4 flex flex-col gap-1 font-[500] text-[15px] text-left text-gray-800'>
              {details.map((detail, i) => (
                <a href='/' className='hover:text-gray-600' key={i}>
                  {detail}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className='w-fit h-fit py-8 px-5 gap-3 font-[700] text-black'>
        <h1 className='text-[17px] text-black'>Nigeria</h1>
      </div>
    </div>
  );
};

export default Footer;
