import React from "react";


const header = () => {
  return (
    <div>
      <header className="header">
        <h1 className="mhs">
          MHS <span className="span"> Portfolio </span>
        </h1>

        <div className="links">
          <a href="/"> Home</a>
          <a href="/Introduction"> Introduction</a>
          <a href="/Skills"> Skills</a>
          <a href="/Projects"> Projects</a>
          <a href="/Education"> Education</a>
          <a href="/Certifications"> Certifications</a>
          
        </div>

        <div>
          <button className="contact">Contact</button>
        </div>
      </header>
    </div>
  );
}

export default header
