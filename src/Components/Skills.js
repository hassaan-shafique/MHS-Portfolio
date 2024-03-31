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
            <img height={100} width={100} src="/skills/react.svg" alt="CSS" />
            <h4>React</h4>
          </li>
          <li>
            <img height={100} width={100} src="/skills/redux.svg" alt="CSS" />
            <h4>Redux</h4>
          </li>

          <li>
            <img
              height={100}
              width={100}
              src="/skills/nextjs_icon_212861.png"
              alt="Next.js"
            />
            <h4>Next.js</h4>
          </li>
          <li>
            <img
              height={100}
              width={100}
              src="/skills/tailwind.png"
              alt="CSS"
            />
            <h4>Tailwind css</h4>
          </li>
          <li>
            <img
              height={100}
              width={100}
              src="/skills/responsive-device.png"
              alt="Responsive"
            />
            <h4>Responsiveness</h4>
          </li>
        </ul>
      </div>
      <div className="backend">
        <h2> Backend </h2>
        <ul>
          <li>
            <img
              height={100}
              width={100}
              src="/skills/nodejs.png"
              alt="NodeJs"
            />
            <h4> NodeJs</h4>
          </li>
        </ul>
        {/* Node.js 
        Express.js 
        Server-side Rendering (SSR)
         RESTful APIs */}
      </div>
      <div className="database">
        <h2> Databases </h2>
        <ul>
          <li>
            <img
              height={100}
              width={100}
              src="/skills/mongo-db.png"
              alt="NodeJs"
            />
            <h4> Mongo DB </h4>
          </li>
          <li>
            <img height={100} width={100} src="/skills/sql.png" alt="SQL" />
            <h4> SQL </h4>
          </li>
          <li>
            <img height={100} width={100} src="/skills/mysql.png" alt="SQL" />
            <h4> MYSQL </h4>
          </li>

          <li>
            <img
              height={100}
              width={100}
              src="/skills/firebase.svg"
              alt="Firebase"
            />
            <h4> Python </h4>
          </li>
        </ul>
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
