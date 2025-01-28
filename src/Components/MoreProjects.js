// MoreProjects.js
import React from "react";
import moreProjectData from "./MoreProjectsData";
import { Link } from "react-router-dom";

const MoreProjects = () => {
 

  return (
    <div className="more-projects-container">
      {moreProjectData.map((project) => (
        <div className="more-project-card" key={project.id}>
          <img
            className="more-project-image"
            src={project.imageUrl}
            alt={project.title}

          />
          <h2 className="more-project-title">{project.title}</h2>
          <p className="more-project-stack">{project.stack}</p>
          <p className="more-project-description">{project.description}</p>
          <div className="moreproject-btns">
            <Link to= "https://mhscounterapp.netlify.app/" 
             target="_blank"
             >
            <button
            
            className="more-project-button">Live</button>
            </Link>
            <Link to ="https://github.com/hassaan-shafique/Counter-App">
            <button className="more-project-button">Code</button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};




export default MoreProjects;
