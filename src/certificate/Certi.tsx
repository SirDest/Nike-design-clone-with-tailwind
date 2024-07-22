import React, { useRef, useState } from "react";

import jsPDF from "jspdf";
import "jspdf/dist/polyfills.es.js";
// import certificateImg from "../../src/static/images/certificate.jpeg";
import bg from "../../src/static/images/WhatsApp Image 2024-07-22 at 09.51.04 - Copy.jpeg";

const Certi = () => {
  // const [name, setName] = useState("");
  // const [course, setCourse] = useState("");

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
        y: 5, // Adjust position from the top the image
      });
    } else {
      doc.save("certificate.pdf");
    }
  };

  const today = new Date();

  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const formattedDate = today
    .toLocaleDateString("en-US", options)
    .replace(",", "");

  return (
    <div className='w-full h-screen bg-blue-400 flex flex-col'>
      <div ref={reportTemplateRef} className='w-[630px] relative'>
        <div className='absolute w-fit h-[150px] top-28 left-11 flex flex-col gap-2'>
          <p className='text-[10px] font-semibold'>{formattedDate}</p>
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
        <img src={bg} alt='certificate' />
      </div>

      <button className='button' onClick={handleGeneratePdf}>
        Download Certificate
      </button>
    </div>
  );
};

export default Certi;
