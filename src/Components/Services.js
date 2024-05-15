import React from 'react'
import { Link } from 'react-router-dom'

const Services = () => {
  return (
    <>
      <div className="arrow">
        <Link to="/">
          <img src="/left-arrow-1.svg" width={50} height={50} alt="arrow img" />
        </Link>
      </div>
      <div className="service-navbar">
        <h1 className="service-h"> Request a Service</h1>
      </div>
      <div className="service-inputs">
        <label />
        <input type="text" />
        <input />
        <input />
        <input />
        
      </div>
    </>
  );
}

export default Services
