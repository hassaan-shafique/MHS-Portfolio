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
            <img height={100} width={100} src="/skills/javascript.png" alt="CSS" />
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
      </div>
      <div className="backend">
        <h2> Backend </h2>
      </div>
    </div>
  );
}

export default Skills
