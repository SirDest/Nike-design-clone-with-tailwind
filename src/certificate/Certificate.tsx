import React, { useRef } from "react";

import jsPDF from "jspdf";
// import "jspdf/dist/polyfills.es.js";
import certificateImg from "../../src/static/images/certificate.jpeg";

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
        // x: 20,
        // y: 650, // Adjust y-position to be below the image
        width: 570, // Width of the HTML content
      });
    }
  };

  return (
    <div className='w-full h-screen bg-blue-400 flex flex-col'>
      <div ref={reportTemplateRef} className='w-[600px]'>
        <img src={certificateImg} alt='certificate' />
      </div>

      <button className='button' onClick={handleGeneratePdf}>
        Generate PDF
      </button>
    </div>
  );
};

export default Certi;
