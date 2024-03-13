import React from "react";

const header = () => {
  return (
    <div>
      <header className="header">
        <h1> MHS Portfolio</h1>

        <div className="links">
          <a href="/"> Home</a>
          <a href="/Introduction"> Introduction</a>
          <a href="/Skills"> Skills</a>
          <a href="/Projects"> Projects</a>
          <a href="/Education"> Education</a>
          <a href="/Certifications"> Certifications</a>
        </div>
      </header>
    </div>
  );
}

export default header
