// MoreProjects.js
import React from "react";
import moreProjectData from "../Components/MoreProjectsData";

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
            <button className="more-project-button">Code</button>
            <button className="more-project-button">Live</button>
          </div>
        </div>
      ))}
    </div>
  );
};




export default MoreProjects;
