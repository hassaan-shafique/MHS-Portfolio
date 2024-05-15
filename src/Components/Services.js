import React from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'

const Services = () => {
  return (
    <>
      <h1 className="service-head caret-white ">Request a Service</h1>
      <div className="service-navbar">
        <div className='arrow'>
          <Link to="/">
            <img
              src="/left-arrow-1.svg"
              width={60}
              height={60}
              alt="arrow img"
            />
          </Link>
        </div>
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
