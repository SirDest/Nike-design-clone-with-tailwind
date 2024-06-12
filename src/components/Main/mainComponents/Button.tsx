import React from "react";
const generateClassName = (classes: string[]) => {
  return classes.join(" ");
};
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

  disabled?: boolean;
}
const Button = ({
  children,
  handleClick,

  disabled,
}: ButtonProps) => {
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

export default Button;
