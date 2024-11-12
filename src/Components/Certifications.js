import React from 'react'
import certificateData from "./certificateData";


const Certifications = () => {

  return (
    <section id="certifications">
      <h1 className="certification-head"> Certifications</h1>

      <div className="certificate-main">
        {certificateData.map((certificate) => {
          return (
            <div className="certificate-data" key={certificate.id}>
              <img
                width={344}
                height={295}
                src={certificate.imageUrl}
                alt={certificate.title}
              />
              <div className="certificate-title">
                <h4> {certificate.title} </h4>
                <br />
                {certificate.resource}
              </div>
              {/* <div>
                <button className="certificate-btn">View</button>
              </div> */}
            </div>
          );
        })}
      </div>
      <div className="div-certificate-more-btn">
        
          <button className="certificate-more-btn">Explore Other Certifications</button>
     
      </div>
    </section>
  );
}

export default Certifications
