
import React from 'react';
import projectData from './projectData';


 
const Projects = ( ) => {
  return (
    <section id="projects">
      <div className="projects">
        <h1 className="project-head"> Projects</h1>
        
       {projectData.map((project) =>{
        return (
          <div className="project-data" key={project.id}>
            <ul>
              <li>{project.title}</li>
              <li> {project.description} </li>
              <li>
                <img  width={100}
                height={100}src={project.imageUrl} alt={project.title} />
              </li>
            </ul>
            <div className='project-btn'>
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
