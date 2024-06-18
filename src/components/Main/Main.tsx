import Running from "./mainComponents/Running";
import AllRunning from "./mainComponents/AllRunning";
import Membership from "./mainComponents/Membership";
import Products from "./mainComponents/Products";

const Main = () => {
  return (
    <div className='w-full h-fit flex flex-col justify-center '>
      <Products />
      <Membership />
      <Running />
      <AllRunning />
    </div>
  );
};

export default Main;
