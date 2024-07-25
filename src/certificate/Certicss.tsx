import React, { useRef } from "react";
import image from "../../src/static/images/Certficate.jpg";
import "../certificate/cssfile.css";
import jsPDF from "jspdf";

const Certicss = () => {
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
        y: 7,
      });
    } else {
      doc.save("practice.pdf");
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
    <div className='certificate-div'>
      <div ref={reportTemplateRef} className='certificate'>
        <div className='certificate-sub-div1'>
          <p className='certificate-text'>
            {month} {day}, {year}
          </p>
          <p className='certificate-name font-bold text-[22px]'>
            Godwin, Odira Frontend
          </p>
          <p className='certificate-text'>has successfully completed</p>
          <p className='certificate-on'>
            Customer Service Proffessional Certification
          </p>
          <p className='certificate-text'>
            a customer service certification that offers a real world
            environment to hone your skills.
          </p>
        </div>
        <div className='certificate-sub-div2'>
          <p>Verified at:</p>
          <a href='/' className='text-blue-700'>
            http://training.outcess.com/verify/1234566
          </a>
          <p>Outcess has confirmed the identity of this individual and has</p>
          <p>participated in the course</p>
        </div>

        <img src={image} alt='certificate' />
      </div>
      <button className='bg-green-400 p-4 w-fit' onClick={handleGeneratePdf}>
        Download Certificate
      </button>
    </div>
  );
};

export default Certicss;
