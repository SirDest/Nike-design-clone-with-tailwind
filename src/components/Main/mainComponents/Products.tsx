import Button from "./Button";
import BlackButton from "../../Reusable/BlackButton";
import { generateClassName } from "../../tailwind";

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

const mainStyle = [
  "w-full",
  "h-[250px]",
  "md:h-[400px]",
  "relative",
  "border",
  "bg-red-600",
];
const products = [
  { title: "Just Dropped", item: "Bag", link: "/" },
  { title: "New Arrivals", item: "Jordans", link: "/" },
  { title: "Don't Waste Your Energy", item: "Run", link: "/" },
  { title: "Look Good, Play Good", item: "Prime", link: "/" },
];

const Products = () => {
  return (
    <div className='flex h-fit w-full flex-col py-10 gap-4'>
      <div className='flex flex-col justify-center items-center text-center font-semibold gap-4'>
        <p className='text-[35px] md:text-[45px] uppercase font-bold'>
          New this week
        </p>
        <BlackButton>Shop New Arrivals</BlackButton>
      </div>
      <div className='w-full grid grid-cols-1 sm:grid-cols-2'>
        {products.map(({ title, item, link }) => (
          <div
            key={title}
            //   style={{
            //     background: `rgba(0,0,0,0.5) url(${image})`,
            //     backgroundBlendMode: "darken",
            //     backgroundSize: "cover",
            //     backgroundPosition: "center",
            //     backgroundRepeat: "no-repeat",
            //   }}
            className={generateClassName(mainStyle)}
          >
            <div className={generateClassName(style)}>
              <p className='text-[17px] font-normal'>{title}</p>
              <p>{item}</p>
              <Button href={link}>Shop</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
