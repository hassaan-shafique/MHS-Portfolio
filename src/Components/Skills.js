import React from 'react'

const Skills = () => {
  return (
    <section id="skills">
      <div className="skills">
        <div className="skill-heading">
          <h1> Skills</h1>
        </div>
        <div className="Front-end">
          <h2 className="skill-head"> Front-End </h2>
          <ul className="front-end-ul">
            <li className="html-skill">
              <img height={100} width={100} src="/skills/html.png" alt="HTML" />
              <h4 className="skill-des">HTML</h4>
            </li>
            <li className="css-skill">
              <img height={100} width={100} src="/skills/css.png" alt="CSS" />
              <h4>CSS</h4>
            </li>
            <li className="js-skill">
              <img
                height={100}
                width={100}
                src="/skills/javascript.png"
                alt="CSS"
              />
              <h4>JavaScript</h4>
            </li>

            <li className="react-skill">
              <img height={100} width={100} src="/skills/react.svg" alt="CSS" />
              <h4>React</h4>
            </li>
            <li className="redux-skill">
              <img height={100} width={100} src="/skills/redux.svg" alt="CSS" />
              <h4>Redux</h4>
            </li>

            <li className="next-skill">
              <img
                height={100}
                width={100}
                src="/skills/nextjs_icon_212861.png"
                alt="Next.js"
              />
              <h4>Next.js</h4>
            </li>
            <li className="tailwind-skill">
              <img
                height={100}
                width={100}
                src="/skills/tailwind.png"
                alt="CSS"
              />
              <h4>Tailwind css</h4>
            </li>
            <li className="response-skill">
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
          <h2 className="skill-head"> Backend </h2>

          <ul className='backend-ul'>
            <li className="node-skill">
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
          <h2 className="skill-head"> Databases </h2>
          <ul className='db-ul'>
            <li className="mongo-skill">
              <img
                height={100}
                width={100}
                src="/skills/mongo-db.png"
                alt="NodeJs"
              />
              <h4> Mongo DB </h4>
            </li>
            <li className="sql-skill">
              <img height={100} width={100} src="/skills/sql.png" alt="SQL" />
              <h4> SQL </h4>
            </li>
            <li className="mysql-skill">
              <img height={100} width={100} src="/skills/mysql.png" alt="SQL" />
              <h4> MYSQL </h4>
            </li>

            <li className="firebase-skill">
              <img
                height={100}
                width={100}
                src="/skills/firebase.svg"
                alt="Firebase"
              />
              <h4> Firebase </h4>
            </li>
          </ul>
          {/* SQL (MySQL, PostgreSQL, SQLite, etc.) 
        NoSQL (MongoDB, Firebase, etc.)
        Database Design 
        Database Administration 
        Data Modeling */}
        </div>
        <div className="toolsandtechnologies">
          <h2 className="skill-head"> Tools And Technologies </h2>
          <ul className='tools-ul'>
            <li className="mongo-skill">
              <img
                height={100}
                width={100}
                src="/skills/vs-code.png"
                alt="Firebase"
              />
              <h4> VS Code </h4>
            </li>
            <li className="mongo-skill">
              <img
                height={100}
                width={100}
                src="/skills/git.png"
                alt="Firebase"
              />
              <h4> Git </h4>
            </li>
            <li className="mongo-skill">
              <img height={100} width={100} src="/github.png" alt="Firebase" />
              <h4> GitHub </h4>
            </li>
            <li className="mongo-skill">
              <img
                height={100}
                width={100}
                src="/skills/jira.svg"
                alt="Firebase"
              />
              <h4> Jira </h4>
            </li>
            <li className="mongo-skill">
              <img
                height={100}
                width={100}
                src="/skills/slack.svg"
                alt="Firebase"
              />
              <h4> Slack </h4>
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
