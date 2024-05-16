import React from 'react'
import { Link } from 'react-router-dom';

const Introduction = () => {
  return (
    <>
      <section id="introduction">
        <div className="intro-main">
          <div className="About-img">
            <img
              width={600}
              height={460}
              src="/skills/web-template.png"
              alt="About me picture"
            />
          </div>

          <div className="introduction">
            <h2 className="about-head">
              About <span>Me </span>
            </h2>
            <div className="intro-description">
              <p className="p-intro-description">
                I'm a passionate
                <strong> Full-Stack Developer</strong> with expertise in a
                variety of technologies including HTML, CSS, JavaScript, React,
                Next.js, Tailwind CSS, Redux, Node.js, MongoDB, and Firebase. I
                have a strong track record of delivering high-quality projects,
                solving complex problems, and creating responsive designs with a
                focus on user-friendly interfaces.
                <br />
                <strong> Beyond coding,</strong> I'm an avid traveler who loves
                exploring new places, immersing myself in different cultures,
                and challenging myself physically through bodybuilding.
                <br />
                <strong> Explore my portfolio </strong>to see some of my recent
                work, and feel free to reach out if you have any questions or
                would like to collaborate on a project!
              </p>
            </div>
          </div>
        </div>
        <Link className='link-div' to=''>
          <button className='travel-button ' role='button'> Explore my Travels</button>
        </Link>
      </section>
    </>
  );
}

export default Introduction