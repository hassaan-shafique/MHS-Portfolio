
import React from 'react';
import projectData from './projectData';
import { Link } from 'react-router-dom';





 
const Projects = ( ) => {
  return (
    <section id="projects">
      <h1 className="project-head"> Recent Projects</h1>
      <div className="projects">
        {projectData.map((project) => {
          return (
            <div className="project-data" key={project.id}>
              <img
                width={400}
                height={400}
                src={project.imageUrl}
                alt={project.title}
              />
              <div className="project-card-des">
                <div className="project-title">
                  <h4> {project.title} </h4>
                </div>
                <div>
                  <p>{project.stack}</p>
                </div>

                <div className="project-description">
                  <p> {project.description} </p>
                </div>
              </div>
              <div className="project-btn">
                <button className="code-btn">Code</button>
                <button className="live-btn">Live</button>
              </div>
            </div>
          );
        })}
      </div>
      <div className="div-certificate-more-btn">
        <Link className='link-div'>
          to='/moreProjects'
          <button className="project-more-btn">More </button>
        </Link>
      </div>
    </section>
  );
}

export default Projects
