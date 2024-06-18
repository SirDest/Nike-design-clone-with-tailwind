import Button from "./Button";
import men from "../../../static/images/manjogging.jpg";
import women from "../../../static/images/womanjogging.jpg";
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

const mainStyle = ["w-full", "lg:w-1/2", "h-[400px]", "relative"];
const items = [
  { name: "Men's Running", image: men },
  { name: "Women's Running", image: women },
];

const Running = () => {
  return (
    <div className='w-full h-fit flex flex-col lg:flex-row justify-center'>
      {items.map(({ name, image }) => (
        <div
          key={name}
          style={{
            background: `rgba(0,0,0,0.5) url(${image})`,
            backgroundBlendMode: "darken",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          className={generateClassName(mainStyle)}
        >
          <div className={generateClassName(style)}>
            <p>{name}</p>
            <Button href='/'>Shop</Button>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Running;
