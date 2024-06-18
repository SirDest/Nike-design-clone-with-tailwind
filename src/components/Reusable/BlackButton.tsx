import React from "react";
import { generateClassName } from "../tailwind";

const styles = [
  "border-black",
  "hover:border-gray-500",
  "outline-none",
  "text-[17px]",
  "bg-black",
  "hover:bg-gray-500",
  "text-white",
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
  disabled?: boolean;
}
const BlackButton = ({ children, handleClick, disabled }: ButtonProps) => {
  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      className={`${generateClassName(styles)}`}
    >
      {children}
    </button>
  );
};

export default BlackButton;
