import React from "react";
import apparelImg from "../../../static/images/product2.jpg";
import footwearImg from "../../../static/images/product1.jpg";
import accessoriesImg from "../../../static/images/product3.jpg";

const running = [
  {
    name: "Apparel",
    image: apparelImg,
    link: "/",
  },
  {
    name: "Footwear",
    image: footwearImg,
    link: "/",
  },
  {
    name: "Accessories & Equipment",
    image: accessoriesImg,
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
    <div className='px-3 md:px-6 lg:px-12 h-fit py-[50px] flex flex-col gap-4'>
      <div className='w-full h-full font-semibold text-[25px]'>
        <p>Shop All Running</p>
      </div>
      <div className='w-full h-fit flex flex-col md:flex-row justify-center gap-2'>
        {running.map(({ name, image, link }) => (
          <a
            key={name}
            href={link}
            style={{
              background: `rgba(0,0,0,0.5) url(${image})`,
              backgroundBlendMode: "darken",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
            className='w-full md:w-1/3 md:h-[450px] h-[300px] relative flex hover:opacity-90 duration-500 ease-in-out'
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
