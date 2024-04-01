import React from "react";
import Introduction from "./Introduction";

const header = () => {
 const scrollToIntroduction = () => {
   const projectsSection = document.getElementById("introduction");
   projectsSection.scrollIntoView({ behavior: "smooth" });
 };
 const scrollToSkills = () => {
   const skillsSection = document.getElementById("skills");
   skillsSection.scrollIntoView({ behavior: "smooth" });
 };
  return (
    <div>
      <header className="header">
        <h1 className="mhs">
          MHS <span className="span"> Portfolio </span>
        </h1>

        <div className="links">
          <a href="/"> Home</a>
          <a href="#introduction" onClick={scrollToIntroduction}> Introduction</a>
          <a href="#/Skills" onClick={scrollToSkills}> Skills</a>
          <a href="#/Projects"> Projects</a>
          <a href="#/Education"> Education</a>
          <a href="#/Certifications"> Certifications</a>
          
        </div>

        <div>
          <button className="contact">Contact</button>
        </div>
      </header>
    </div>
  );
}

export default header
