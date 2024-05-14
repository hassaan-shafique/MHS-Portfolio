import React from 'react'

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
            <h2 className='about-head'>
              About <span>Me </span>
            </h2>
            <div className="intro-description">
              <p className="p-intro-description">
                'I am a passionate Full stack developer with expertise in a
                variety of technologies including HTML, CSS, JavaScript, React,
                Next.js, Tailwind CSS, Redux, Node.js, MongoDB, and Firebase. I
                have a strong track record of delivering high-quality projects
                and solving complex problems. With a focus on creating
                responsive designs and user-friendly interfaces. Explore my
                portfolio to see some of my recent work and feel free to reach
                out if you have any questions or would like to collaborate on a
                project.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Introduction