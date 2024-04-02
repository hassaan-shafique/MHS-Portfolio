import React from 'react'

const Certifications = () => {
  return (
    <section id="certifications">
      <h1 className="certification-head"> Certifications</h1>
      <div >
        <div className="certificate-main">
          <div className="certificate-1">
            <img
              src="instagram.png"
              alt="certificate 1"
              width={300}
              height={300}
            />
            <h1>Front-End Developnment</h1>
            <div className="certificate-btn">
              <button>View</button>
            </div>
          </div>

          <div className="certificate-2">
            <img
              src="instagram.png"
              alt="certificate 2"
              width={300}
              height={300}
            />
            <h1>Front-End Developnment</h1>
            <div className="certificate-btn">
              <button>View</button>
            </div>
          </div>

          <div className="certificate-3">
            <img
              src="instagram.png"
              alt="certificate 3"
              width={300}
              height={300}
            />
            <h1>Front-End Developnment</h1>
            <div className="certificate-btn">
              <button>View</button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Certifications
