import React from 'react'

const Skills = () => {
  return (
    <section id="skills">
      <div className="skills">
        <div className="skill-heading">
          <h1> Skills</h1>
        </div>
        <div className="Front-end">
          {/* <h2 className="skill-head"> Front-End </h2> */}
          <ul className="front-end-ul">
            <li className="f-skill">
              <img height={80} width={80} src="/skills/html.png" alt="HTML" />
              <h4 className="s-text">HTML</h4>
            </li>
            <li className="f-skill">
              <img height={80} width={80} src="/skills/css.png" alt="CSS" />
              <h4 className="s-text">CSS</h4>
            </li>
            <li className="f-skill">
              <img
                height={80}
                width={80}
                src="/skills/javascript.png"
                alt="CSS"
              />
              <h4 className="s-text">JavaScript</h4>
            </li>

            <li className="f-skill">
              <img height={80} width={80} src="/skills/react.svg" alt="CSS" />
              <h4 className="s-text">React</h4>
            </li>
            <li className="f-skill">
              <img height={80} width={80} src="/skills/redux.svg" alt="CSS" />
              <h4 className="s-text">Redux</h4>
            </li>

            <li className="f-skill">
              <img
                height={80}
                width={80}
                src="/skills/nextjs_icon_212861.png"
                alt="Next.js"
              />
              <h4 className="s-text">Next.js</h4>
            </li>
            <li className="f-skill">
              <img
                height={80}
                width={80}
                src="/skills/tailwind.png"
                alt="CSS"
              />
              <h4 className="s-text">Tailwind css</h4>
            </li>
            <li className="f-skill">
              <img
                height={80}
                width={80}
                src="/material.png"
                alt="CSS"
              />
              <h4 className="s-text">Material UI</h4>
            </li>
            <li className="f-skill">
              <img
                height={80}
                width={80}
                src="/skills/responsive-device.png"
                alt="Responsive"
              />
              <h4 className="s-text">Responsiveness</h4>
            </li>
          </ul>
        </div>
        <div className="backend">
          {/* <h2 className="skill-head"> Backend </h2> */}

          <ul className="backend-ul">
            <li className="node-skill">
              <img
                height={80}
                width={80}
                src="/skills/nodejs.png"
                alt="NodeJs"
              />
              <h4 className="s-text"> NodeJs</h4>
            </li>
          </ul>
          {/* Node.js 
        Express.js 
        Server-side Rendering (SSR)
         RESTful APIs */}
        </div>
        <div className="database">
          {/* <h2 className="skill-head"> Databases </h2> */}
          <ul className="db-ul">
            <li className="mongo-skill">
              <img
                height={80}
                width={80}
                src="/skills/mongo-db.png"
                alt="NodeJs"
              />
              <h4 className="s-text"> Mongo DB </h4>
            </li>
            <li className="sql-skill">
              <img height={80} width={80} src="/skills/sql.png" alt="SQL" />
              <h4 className="s-text"> SQL </h4>
            </li>
            <li className="mysql-skill">
              <img height={80} width={80} src="/skills/mysql.png" alt="SQL" />
              <h4 className="s-text"> MYSQL </h4>
            </li>

            <li className="firebase-skill">
              <img
                height={80}
                width={80}
                src="/skills/firebase.svg"
                alt="Firebase"
              />
              <h4 className="s-text"> Firebase </h4>
            </li>
          </ul>
          {/* SQL (MySQL, PostgreSQL, SQLite, etc.) 
        NoSQL (MongoDB, Firebase, etc.)
        Database Design 
        Database Administration 
        Data Modeling */}
        </div>
        <div className="toolsandtechnologies">
          {/* <h2 className="skill-head"> Tools And Technologies </h2> */}
          <ul className="tools-ul">
            <li className="mongo-skill">
              <img
                height={80}
                width={80}
                src="/skills/vs-code.png"
                alt="Firebase"
              />
              <h4 className="s-text"> VS Code </h4>
            </li>
            <li className="mongo-skill">
              <img
                height={80}
                width={80}
                src="/skills/git.png"
                alt="Firebase"
              />
              <h4 className="s-text"> Git </h4>
            </li>
            <li className="mongo-skill">
              <img height={80} width={80} src="/github.png" alt="Firebase" />
              <h4 className="s-text"> GitHub </h4>
            </li>
            <li className="mongo-skill">
              <img
                height={80}
                width={80}
                src="/skills/jira.svg"
                alt="Firebase"
              />
              <h4 className="s-text"> Jira </h4>
            </li>
            <li className="mongo-skill">
              <img height={80} width={80} src="/skills/slack.svg" alt="Slack" />
              <h4 className="s-text"> Slack </h4>
            </li>
          </ul>
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
    </section>
  );
}

export default Skills
