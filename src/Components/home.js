import React from 'react'
import Contact from './Contact.js'





const Home = () => {

  const HandleContact = () => {
    const contactSection =document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };
const redirectToCV = () => {
  
  window.location.href = "https://www.google.com/";
};
 



  return (
    <>
      <div className="home-main">
        <div className="hire-div">
          <a href="" target="_blank">
            <img width={50} height={35} src="/fiverr-1.svg" alt="fiver logo" />
            Hire me on Fiver
          </a>
        </div>
        <section className="welcome-div">
          <div className="h-welcome">
            <h3>Welcome To My Portfolio </h3>
          </div>

          <div>
            <h1 className="home-intro">
              Hello, I am Muhammad Hassaan Shafique <br />
              I'm a Software Engineer
            </h1>
          </div>

          <div class="Contact-icons">
            <a
              href="https://www.facebook.com/hassaan.shafique.9/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img width={40} height={40} src="/gmail.png" alt="gmail icon" />
            </a>
            <a
              href="https://www.facebook.com/hassaan.shafique.9/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                width={40}
                height={40}
                src="/facebook.png"
                alt="facebook icon"
              />
            </a>
            <a
              href="https://www.facebook.com/hassaan.shafique.9/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                width={40}
                height={40}
                src="/instagram.png"
                alt="instagram icon"
              />
            </a>
            <a
              href="https://www.facebook.com/hassaan.shafique.9/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                width={40}
                height={40}
                src="/linkedin.png"
                alt="facebook icon"
              />
            </a>
            <a
              href="https://www.facebook.com/hassaan.shafique.9/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                width={40}
                height={40}
                src="/twitter (1).png"
                alt="facebook icon"
              />
            </a>
            <a
              href="https://www.facebook.com/hassaan.shafique.9/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                width={40}
                height={40}
                src="/github.png"
                alt="facebook icon"
              />
            </a>
            <a
              href="https://www.facebook.com/hassaan.shafique.9/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                width={40}
                height={40}
                src="/medium.png"
                alt="facebook icon"
              />
            </a>
          </div>

          <div className="home-btns-div">
            <div className="contact-div">
              <button className="contact" onClick={HandleContact}>
                Contact
              </button>
            </div>
            <div className="resume-div">
              <button className="Resume-btn" onClick={redirectToCV}>
                Download CV
                {/* <img src="" alt=''
           ></img> */}
              </button>
            </div>
          </div>
        </section>

        {/* home div */}
        <section className="Home-image">
          <img
            width={600}
            height={600}
            src="/man-working-on-laptop.svg"
            alt="homeImage"
          />
        </section>
      </div>
    </>
  );
}

export default Home
