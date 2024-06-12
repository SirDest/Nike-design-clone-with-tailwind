import Button from "./Button";

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

const Running = () => {
  return (
    <div className='w-full h-fit flex flex-col md:flex-row justify-center'>
      <div className='bg-gray-600 w-full md:w-1/2 h-[400px] relative'>
        <div className={generateClassName(style)}>
          <p>Men's Running</p>
          <Button>Shop</Button>
        </div>
      </div>
      <div className='bg-purple-600 w-full md:w-1/2 h-[400px] relative'>
        <div className={generateClassName(style)}>
          <p>Women's Running</p>
          <Button>Shop</Button>
        </div>
      </div>
    </div>
  );
};
export default Running;
