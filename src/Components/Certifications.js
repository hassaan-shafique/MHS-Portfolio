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
                width={350}
                height={280}
                src={certificate.imageUrl}
                alt={certificate.title}
              />
              {certificate.title}
              <br />
              {certificate.resource}

              <div>
                <button className="certificate-btn" >View</button>
              </div>
            </div>
          );
         
        })}
        
      </div>
    </section>
  );
}

export default Certifications
