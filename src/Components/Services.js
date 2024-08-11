import React from 'react'
import { Link } from 'react-router-dom'

const Services = () => {
  return (
    <>
      <div className="arrow">
        <Link to="/">
          <img src="/left-arrow-2.svg" width={60} height={60} alt="arrow img" />
        </Link>
      </div>
      <div className="service-navbar">
        <h1 className="service-h"> Request a Service</h1>
      </div>
      <div className="service-inputs">
        <form class="project-form">
          <h2 class="form-title">Project Submission Form</h2>
          <div className="main-service-form">
            <div className='one-service-form'>
              <label for="firstName" class="form-label">
                Name:
              </label>
              <input type="text" name="firstName" required class="form-input" />

              <label for="email" className="form-label">
                Email Address:
              </label>
              <input type="email" name="email" required class="form-input" />

              <label for="projectTitle" className="form-label">
                Project Title:
              </label>
              <input
                type="text"
                name="projectTitle"
                required
                class="form-input"
              />

              <label for="projectDescription" className="form-label">
                Project Description:
              </label>
              <textarea
                name="projectDescription"
                rows="5"
                required
                class="form-input"
              ></textarea>
            </div>
            <div className='second-service-form'>
              <label className="form-label">Product Category</label>
              <select className="form-input">
                <option>Web Development</option>
                <option>Mobile App</option>
                <option>Design</option>
              </select>
              <label className="form-label">Project Budget</label>
              <input type="text" className="form-input" />
              <label className="form-label"> Target Audience </label>
              <input type="text" className="form-input" />

              <label className="form-label"> Contact Preference </label>
              <input type="text" className="form-input" />
            </div>
          </div>

          <button type="submit" class="submit-btn">
            Submit Request
          </button>
        </form>
       
      </div>
    </>
  );
}

export default Services
