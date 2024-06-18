import React from "react";
import { generateClassName } from "../../tailwind";

const styles = [
  "border",
  "border-white",
  "hover:border-gray-300",
  "hover:bg-gray-300",
  "outline-none",
  "text-[17px]",
  "bg-white",
  "text-black",
  "px-4",
  "py-1",
  "w-fit",
  "rounded-[23px]",
  "ease-in-out",
  "duration-300",
];

interface ButtonProps {
  children: React.ReactNode;
  handleClick?: () => void;
  href: string;
}
const Button = ({ children, handleClick, href }: ButtonProps) => {
  return (
    <a
      href={href}
      onClick={handleClick}
      className={`${generateClassName(styles)}`}
    >
      {children}
    </a>
  );
};

export default Button;
