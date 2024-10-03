import React from 'react'

const Skills = () => {
  return (
    <section id="skills">
      <div className="skills">
        <div className="skill-heading">
          <h1> Skills</h1>
        </div>
        <div className="Front-end">
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
              <h4 className="j-text">JavaScript</h4>
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
              <img height={80} width={80} src="/material.png" alt="CSS" />
              <h4 className="s-text">Material UI</h4>
            </li>
            <li className="f-skill">
              <img
                height={80}
                width={80}
                src="/skills/responsive-device.png"
                alt="Responsive"
              />
              <h4 className="r-text">Responsive</h4>
            </li>
            <li className="f-skill">
              <img height={80} width={80} src="/skills/firebase.svg" alt="Firebase" />
              <h4 className="s-text">Firebase</h4>
            </li>

            <li className="f-skill">
              <img
                height={80}
                width={80}
                src="/skills/git.png"
                alt="Next.js"
              />
              <h4 className="s-text">Git</h4>
            </li>
            <li className="f-skill">
              <img
                height={80}
                width={80}
                src="github-1.svg"
                alt="Github"
              />
              <h4 className="s-text">Github</h4>
            </li>
            <li className="f-skill">
              <img height={80} width={80} src="/material.png" alt="CSS" />
              <h4 className="s-text">Slack</h4>
            </li>
            <li className="f-skill">
              <img
                height={80}
                width={80}
                src="/skills/responsive-device.png"
                alt="Firebase"
              />
              <h4 className="r-text">Jira</h4>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills
