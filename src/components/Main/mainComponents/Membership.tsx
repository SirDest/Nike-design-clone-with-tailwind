import React from "react";
import Button from "./Button";
import productImg from "../../../static/images/product.jpg";
import sportsImg from "../../../static/images/sports.jpg";
import nikeImg from "../../../static/images/customize.jpg";

const running = [
  { title: "Member Product", item: "Exclusive", link: "/", image: productImg },
  { title: "Sports", item: "Movement", link: "/", image: sportsImg },
  { title: "Nike", item: "Customize", link: "/", image: nikeImg },
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

const Membership = () => {
  return (
    <div className='px-3 md:px-6 lg:px-12 h-fit py-[50px] flex flex-col gap-4'>
      <div className='w-full h-full font-semibold text-[25px]'>
        <p>NIKE MEMBERSHIP</p>
      </div>
      <div className='w-full h-fit flex flex-col md:flex-row justify-center gap-2'>
        {running.map(({ title, item, link, image }, i) => (
          <a
            key={i}
            href={link}
            style={{
              background: `rgba(0,0,0,0.5) url(${image})`,
              backgroundBlendMode: "darken",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
            className='w-full md:w-1/3 md:h-[550px] h-[300px] relative flex hover:opacity-90 duration-500 bg-gray-400 ease-in-out'
          >
            <div className={generateClassName(style)}>
              <p className='text-[17px] font-normal'>{title}</p>
              <p>{item}</p>
              {/* <Button href={link}>Shop</Button> */}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Membership;
