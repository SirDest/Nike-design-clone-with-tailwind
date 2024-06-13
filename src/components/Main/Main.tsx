import React from "react";
import Running from "./mainComponents/Running";
import AllRunning from "./mainComponents/AllRunning";
import Membership from "./mainComponents/Membership";

const Main = () => {
  return (
    <div className='w-full h-fit flex flex-col justify-center '>
      <Membership />
      <Running />
      <AllRunning />
    </div>
  );
};

export default Main;
