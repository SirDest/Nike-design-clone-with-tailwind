import React from "react";
import backgroundImage from "../../static/images/george-pagan-iii-PsifAN6_z-k-unsplash.jpg";

const Hero = () => {
  const heroStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return <div style={heroStyle} className='flex m-auto w-full h-screen'></div>;
};

export default Hero;
