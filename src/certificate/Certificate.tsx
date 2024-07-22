import React from "react";
import certificateImg from "../../src/static/images/certificate.jpeg";

const Certificate = () => {
  return (
    <div className='bg-red-400 w-[700px] mt-10'>
      <img src={certificateImg} alt='certificate' />
    </div>
  );
};

export default Certificate;
