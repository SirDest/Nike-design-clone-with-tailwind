import React, { useRef, useState } from "react";

import jsPDF from "jspdf";
import bg from "../../src/static/images/Certficate.jpg";

const Certi = () => {
  const reportTemplateRef = useRef<HTMLDivElement>(null);

  const handleGeneratePdf = () => {
    const doc = new jsPDF({
      orientation: "landscape",
      format: "a4",
      unit: "px",
    });

    doc.setFont("Inter-Regular", "normal");

    if (reportTemplateRef.current) {
      doc.html(reportTemplateRef.current, {
        callback: function (doc) {
          doc.save("certificate.pdf");
        },
        y: 7, // Adjust position from the top the image
      });
    } else {
      doc.save("certificate.pdf");
    }
  };

  const todayDate = new Date();

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const day = todayDate.getDate();
  const month = months[todayDate.getMonth()];
  const year = todayDate.getFullYear();

  return (
    <div className='w-full h-fit flex flex-col'>
      <div ref={reportTemplateRef} className='w-[630px] relative'>
        <div className='absolute w-[fit] h-[150px] top-28 left-11 flex flex-col gap-2'>
          <p className='text-[10px] font-semibold'>
            {month} {day}, {year}
          </p>
          <p className='font-bold text-[22px]'>Godwin, Odira Frontend</p>
          <p className='text-[10px] font-semibold'>
            has successfully completed
          </p>
          <p className='text-[18px] font-semibold'>
            Customer Service Proffessional Certification
          </p>
          <p className='text-[10px] font-semibold'>
            a customer service certification that offers a real world
            environment to hone your skills.
          </p>
        </div>
        <div className='absolute w-fit h-fit bottom-10 right-16 flex flex-col text-right text-[9px] font-semibold'>
          <p>Verified at:</p>
          <a href='/' className='text-blue-700 m-0 p-0'>
            http://training.outcess.com/verify/1234566
          </a>
          <p>Outcess has confirmed the identity of this individual and has</p>
          <p>participated in the course</p>
        </div>

        <img src={bg} alt='certificate' />
      </div>
      <button
        className='bg-green-400 p-4 w-fit m-auto'
        onClick={handleGeneratePdf}
      >
        Download Certificate
      </button>
    </div>
  );
};

export default Certi;
