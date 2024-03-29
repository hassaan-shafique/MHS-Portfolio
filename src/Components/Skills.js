import React from 'react'

const Skills = () => {
  return (
    <div className="skills">
      <div className="skill-heading">
        <h1> Skills</h1>
      </div>
      <div className="Front-end">
        <h2> Front-End </h2>
        <ul>
          <li>
            <img height={100} width={100} src="/skills/html.png" alt="HTML" />
            <h4>HTML</h4>
          </li>
          <li>
            <img height={100} width={100} src="/skills/css.png" alt="CSS" />
            <h4>CSS</h4>
          </li>
          <li>
            <img
              height={100}
              width={100}
              src="/skills/javascript.png"
              alt="CSS"
            />
            <h4>JavaScript</h4>
          </li>
          <li>
            <img height={100} width={100} src="/skills/css.png" alt="CSS" />
            <h4>React</h4>
          </li>

          <li>
            <img height={100} width={100} src="/skills/css.png" alt="CSS" />
            <h4>Next.js</h4>
          </li>
        </ul>
        {/* Responsive Design */}
      </div>
      <div className="backend">
        <h2> Backend </h2>
        {/* Node.js 
        Express.js 
        Server-side Rendering (SSR)
         RESTful APIs */}
      </div>
      <div className="database">
        <h2> Databases </h2>
        {/* SQL (MySQL, PostgreSQL, SQLite, etc.) 
        NoSQL (MongoDB, Firebase, etc.)
        Database Design 
        Database Administration 
        Data Modeling */}
      </div>
      <div className="toolsandtechnologies">
        <h2> Tools And Technologies </h2>
        {/* Git and Version Control
        npm or Yarn Docker
        Continuous Integration/Continuous Deployment (CI/CD) 
       
        Command Line Interface (CLI) skills
         Cloud Platforms (AWS, Azure,
        Google Cloud)
         Websockets */}
      </div>
      {/* <div className="system Design"></div> */}
    </div>
  );
}

export default Skills
