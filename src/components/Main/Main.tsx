import React from "react";
import Running from "./mainComponents/Running";
import AllRunning from "./mainComponents/AllRunning";

const Main = () => {
  return (
    <div className='w-full h-fit flex flex-col justify-center '>
      <Running />
      <AllRunning />
    </div>
  );
};

export default Main;
