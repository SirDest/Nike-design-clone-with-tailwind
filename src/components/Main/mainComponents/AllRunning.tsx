import React from "react";

const running = [
  {
    name: "Apparel",
    image: "not yet",
    link: "/",
  },
  {
    name: "Footwear",
    image: "not yet",
    link: "/",
  },
  {
    name: "Accessories & Equipment",
    image: "not yet",
    link: "/",
  },
];

const generateClassName = (classes: string[]) => {
  return classes.join(" ");
};
const style = [
  "absolute",
  "left-[40px]",
  "bottom-[50px]",
  "flex",
  "flex-col",
  "gap-5",
  "text-[25px]",
  "font-semibold ",
  "text-white",
];
const AllRunning = () => {
  return (
    <div className='px-6 lg:px-12 h-fit py-[50px] flex flex-col gap-4'>
      <div className='w-full h-full font-semibold text-[25px]'>
        <p>Shop All Running</p>
      </div>
      <div className='w-full h-fit flex flex-col md:flex-row justify-center gap-2'>
        {running.map(({ name, image, link }) => (
          <a
            key={name}
            href={link}
            className='bg-gray-600 w-full md:w-1/3 md:h-[550px] h-[300px] relative flex border'
          >
            <div className={generateClassName(style)}>
              <p>{name}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default AllRunning;
