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
 const ScrolltoContact = ()=>{
  const contactsection= document.getElementById('contact');
  contactsection.scrollIntoView({behavior:'smooth'});
 };

  return (
    <div>
      <header className="header">
        <h1 className="mhs">
          MHS <span className="span"> Portfolio </span>
        </h1>

        <div className="links">
          <a href="/"> Home</a>
          <a href="#introduction" onClick={scrollToIntroduction}>
            {" "}
            Introduction
          </a>
          <a href="#/Skills" onClick={scrollToSkills}>
            Skills
          </a>
          <a href="#/Projects" onClick={scrolltoProject}>
            Projects
          </a>
          <a href="#/Education"> Education</a>
          <a href="#/Certifications" onClick={scrolltoCertification}>
            {" "}
            Certifications
          </a>
        </div>

        <div>
          <button className="contact" onClick={ScrolltoContact}>Contact</button>
        </div>
      </header>
    </div>
  );
}

export default header
