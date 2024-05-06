import React, {  useState } from "react";


const Header = () => {
  const [showMenu, setShowMenu] = useState(false);


  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };


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
    <>
      <nav className="header">
        <h4 className="mhs">
          M Hassaan <span className="span"> Shafique </span>
        </h4>

        <div className="menu" onClick={ toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className="links">
          <ul className={showMenu ? "open" : ""}>
            
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
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Header
