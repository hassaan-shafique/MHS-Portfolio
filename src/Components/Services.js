import React from 'react'
import { Link } from 'react-router-dom'

const Services = () => {
  return (
    <>
      <div className="arrow">
        <Link to="/">
          <img src="/left-arrow-1.svg" width={30} height={30} alt="arrow img" />
        </Link>
      </div>
      <div className="service-navbar">
        <h1 className="service-h"> Request a Service</h1>
      </div>
      <div className="service-inputs">
       <form class="project-form">
    <h2 class="form-title">Project Submission Form</h2>
    <label for="firstName" class="form-label">Name:</label>
    <input type="text"  name="firstName" required class="form-input"/>

    <label for="email" class="form-label">Email Address:</label>
    <input type="email"  name="email" required class="form-input"/>

    <label for="projectTitle" class="form-label">Project Title:</label>
    <input type="text"  name="projectTitle" required class="form-input"/>

    <label for="projectDescription" class="form-label">Project Description:</label>
    <textarea  name="projectDescription" rows="5" required class="form-input"></textarea>

    <button type="submit" class="submit-button">Submit Request</button>
  </form>
        
      </div>
    </>
  );
}

export default Services
