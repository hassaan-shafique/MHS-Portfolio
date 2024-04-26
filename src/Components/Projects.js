
import React from 'react';
import projectData from './projectData';


 
const Projects = ( ) => {
  return (
    <section id="projects">
      <h1 className="project-head">  Recent Projects</h1>
      <div className="projects">
        {projectData.map((project) => {
          return (
            <div className="project-data" key={project.id}>
              <img
                width={150}
                height={150}
                src={project.imageUrl}
                alt={project.title}
              />
              {project.title} <br/>
              {project.description}
              <div className="project-btn">
                <button>Code</button>
                <button>Live</button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Projects
