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
            <h2>
              About <span>Me </span>
            </h2>
            <div className="intro-description">
              I am a full Stack Developer with a 1 year Experience. i did an
              Internship in CARE
              <br />
              where my job was to in Front-end Currently i am working as a
              Software Engineer <br />
              at Ivory Solutions at Kickstart Islamabad, Pakistan.
            </div>
          </div>
          
        </div>
      </section>
    </>
  );
}

export default Introduction