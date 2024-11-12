import React, {  useState } from "react";
import { Link } from "react-router-dom";


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
 
 const scrolltoBlog = () => {
   const blogsection = document.getElementById("blogs");
   blogsection.scrollIntoView({ behavior: "smooth" });
 };
 
 

  return (
    <>
      <nav className="header">
        <div className="mhs">
          <h4 className="logo">
            M Hassaan <span className="span"> Shafique </span>
          </h4>
        </div>

        <div className="menu" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className="links">
          <ul className={showMenu ? "open" : ""}>
            <Link href="/"> Home</Link>

            <Link to="/" onClick={scrollToIntroduction}>
              Introduction
            </Link>
            <Link href="#Skills" onClick={scrollToSkills}>
              Skills
            </Link>
            <Link href="#Projects" onClick={scrolltoProject}>
              Projects
            </Link>
            <Link href="#Projects" >
              Experience
            </Link>

            <Link href="#Certifications" onClick={scrolltoCertification}>
              Certifications
            </Link>
            <Link href="#Certifications" onClick={scrolltoBlog}>
              Blogs
            </Link>
          
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Header
