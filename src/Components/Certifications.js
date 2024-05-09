import React from 'react'
import certificateData from "./certificateData";
import { Link } from 'react-router-dom';

const UxUrl =
  "file:///B:/My%20Certifications/Coursera%20User%20Foundation%20of%20UX%20design.pdf";

const FreelanceUrl ="";



const Certifications = () => {
  const UxUrl =
    "file:///B:/My%20Certifications/Coursera%20User%20Foundation%20of%20UX%20design.pdf";
  return (
    <section id="certifications">
      <h1 className="certification-head"> Certifications</h1>

      <div className="certificate-main">
        {certificateData.map((certificate) => {
          return (
            <div className="certificate-data" key={certificate.id}>
              <img
                width={350}
                height={280}
                src={certificate.imageUrl}
                alt={certificate.title}
              />
              <div className="certificate-title">
                <h4> {certificate.title} </h4>
                <br />
                {certificate.resource}
              </div>
              <div>
                <button className="certificate-btn">View</button>
              </div>
            </div>
          );
        })}
      </div>
      <div className="div-certificate-more-btn">
        
          <button className="certificate-more-btn">More</button>
     
      </div>
    </section>
  );
}

export default Certifications
