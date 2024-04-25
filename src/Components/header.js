import React from "react";
import Introduction from "./Introduction";

const header = () => {

 const scrollToIntroduction = () => {
   const introductionSection = document.getElementById("introduction");
   introductionSection.scrollIntoView({ behavior: "smooth" });
 };
 const scrollToSkills = () => {
   const skillsSection = document.getElementById("skills");
   skillsSection.scrollIntoView({ behavior: "smooth" });
 };
 const scrolltoProject =()=> {
  const projectsection =document.getElementById('projects');
projectsection.scrollIntoView({behavior:"smooth"});
 };
 const scrolltoCertification = () => {
   const certificationsection = document.getElementById("certifications");
   certificationsection.scrollIntoView({ behavior: "smooth" });
 };
 const scrolltoEducation = () => {
  const educationsection =document.getElementById("education");
  educationsection.scrollIntoView({behavior:"smooth"});
 }
 

  return (
    <div>
      <header className="header">
      
        <div className="mhs">
          <h3>
            M Hassaan <span className="span"> Shafique </span>
          </h3>
        </div>
        <div className="links">
          <a href="/"> Home</a>
          <a href="#introduction" onClick={scrollToIntroduction}>
            Introduction
          </a>
          <a href="#Skills" onClick={scrollToSkills}>
            Skills
          </a>
          <a href="#Projects" onClick={scrolltoProject}>
            Projects
          </a>
          <a href="#Projects" onClick={scrolltoProject}>
            Experience
          </a>

          <a href="#Education" onClick={scrolltoEducation}>
            Education
          </a>
          {/* <a href="#/Education"> Blog</a> */}

          <a href="#Certifications" onClick={scrolltoCertification}>
            Certifications
          </a>
        </div>
      </header>
    </div>
  );
}

export default header
