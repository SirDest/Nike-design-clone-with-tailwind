import React, { useState } from "react";
import backgroundImage from "../../static/images/george-pagan-iii-PsifAN6_z-k-unsplash.jpg";
import Header from "../Headers/Header";
import Men from "../hovers/Men";
import Women from "../hovers/Women";
import Kids from "../hovers/Kids";
import Jordan from "../hovers/Jordan";
import Sale from "../hovers/Sale";
import NewAndFeatured from "../hovers/NewAndFeatured";

const Hero: React.FC = () => {
  const [newAndFeatured, setNewAndFeatured] = useState(false);
  const [menDropDown, setmenDropDown] = useState(false);
  const [womenDropDown, setWomenDropDown] = useState(false);
  const [kidsDropDown, setKidsDropDown] = useState(false);
  const [jordanDropDown, setJordanDropDown] = useState(false);
  const [saleDropDown, setSaleDropDown] = useState(false);

  const heroStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <div className='flex flex-col h-fit w-full'>
      <Header
        setNewAndFeatured={setNewAndFeatured}
        setmenDropDown={setmenDropDown}
        setWomenDropDown={setWomenDropDown}
        setKidsDropDown={setKidsDropDown}
        setJordanDropDown={setJordanDropDown}
        setSaleDropDown={setSaleDropDown}
      />
      <div className='relative w-full h-fit'>
        <div style={heroStyle} className='flex m-auto w-full h-screen'></div>
        {newAndFeatured && (
          <NewAndFeatured setNewAndFeatured={setNewAndFeatured} />
        )}
        {menDropDown && <Men setmenDropDown={setmenDropDown} />}
        {womenDropDown && <Women setWomenDropDown={setWomenDropDown} />}
        {kidsDropDown && <Kids setKidsDropDown={setKidsDropDown} />}
        {jordanDropDown && <Jordan setJordanDropDown={setJordanDropDown} />}
        {saleDropDown && <Sale setSaleDropDown={setSaleDropDown} />}
      </div>
    </div>
  );
};

export default Hero;
